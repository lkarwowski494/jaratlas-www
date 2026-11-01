// Testy szkieletu strony (ADR 0002–0005). Dane [PRZYKŁAD], nie treść merytoryczna.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { generuj } from '../site/generuj.mjs';
import { sprawdzSlugi, planStron } from '../site/plan.mjs';
import { mapyStrony } from '../site/mapa.mjs';
import { DOMENA } from '../site/konfiguracja.mjs';

const pub = { publication: 'opublikowana', scope: 'in', content: 'tak' };
const katalog = () => ({
  processFamilies: [{ id: 'canned-foods' }],
  products: [{ id: 'apple' }, { id: 'beans' }, { id: 'pear' }],
  variants: [
    { id: 'apple-v01', productId: 'apple', safetyStatus: 'ok-zrodlo', ...pub, sources: [{ adres: 'https://nchfp.uga.edu/', miejsce: 'm', odczyt: '2026-11-01' }], filters: { flavor: 'slodki' } },
    { id: 'apple-v02', productId: 'apple', safetyStatus: 'ok-zrodlo', publication: 'ukryta', scope: 'in' },
    { id: 'beans-v01', productId: 'beans', safetyStatus: 'nie-publikowac', cardType: 'warning', requiredWarnings: ['SZY-006'], ...pub },
    { id: 'pear-v01', productId: 'pear', safetyStatus: 'ok-zrodlo', publication: 'ukryta', scope: 'in' },
    { id: 'apple-v03', productId: 'apple', safetyStatus: 'do-researchu', ...pub },
    { id: 'apple-v04', productId: 'apple', safetyStatus: 'ok-zrodlo', ...pub, retired: true },
  ],
});
const slugi = () => ({
  pl: { rodziny: { _prefiks: 'procesy', 'canned-foods': 'wekowanie' }, produkty: { apple: 'jablko', beans: 'fasola', pear: 'gruszka' }, warianty: { 'apple-v01': 'mus', 'apple-v02': 'sok', 'beans-v01': 'fasola-w-kapieli', 'apple-v03': 'x', 'apple-v04': 'y' } },
  en: { rodziny: { _prefiks: 'processes' }, produkty: { apple: 'apple', beans: 'beans' }, warianty: { 'apple-v01': 'sauce', 'beans-v01': 'beans-water-bath' } },
});
const karta = (tytul, extra = {}) => ({ tytul, wstep: 'w', sekcje: [{ naglowek: 'h', akapity: ['a'] }], ...extra });
const tresci = () => ({
  pl: { warianty: { 'apple-v01': karta('Mus [PRZYKŁAD]', { obraz: 'https://jaratlas.com/i/mus.jpg' }), 'apple-v02': karta('Sok'), 'beans-v01': karta('Fasola [PRZYKŁAD]', { ostrzezenia: [{ claim: 'SZY-006', tekst: 'Tylko szybkowar.' }] }), 'apple-v03': karta('x'), 'apple-v04': karta('y') }, rodziny: { 'canned-foods': karta('Wekowanie') } },
  en: { warianty: { 'apple-v01': karta('Sauce <script>alert(1)</script>'), 'beans-v01': karta('Beans', { ostrzezenia: [{ claim: 'SZY-006', tekst: 'Pressure only.' }] }) }, rodziny: {} },
});
const uiL = { uwagaBezpieczenstwa: '[DO USTALENIA]', zrodla: 'Z', ostrzezenia: 'O', wariant: 'W', status: 'S', statusy: {} };
const dane = (zm = {}) => ({ katalog: katalog(), slugi: slugi(), tresci: tresci(), ui: { pl: uiL, en: uiL }, dozwolZaslepki: true, ...zm }); // dane [PRZYKŁAD]: zaślepki dozwolone tylko tu (R2)
const D = DOMENA; // 07-jakosc-007: z konfiguracji, nie literał (JARATLAS_DOMENA dla podglądu)

test('bramka: tylko publikowalne warianty i produkty z ≥1 takim wariantem mają strony', () => {
  const { bledy, pliki } = generuj(dane());
  assert.deepEqual(bledy, []);
  const html = Object.keys(pliki).filter((p) => p.endsWith('.html')).sort();
  assert.deepEqual(html, ['en/apple/index.html', 'en/apple/sauce/index.html', 'en/beans/beans-water-bath/index.html', 'en/beans/index.html', 'index.html', 'pl/fasola/fasola-w-kapieli/index.html', 'pl/fasola/index.html', 'pl/jablko/index.html', 'pl/jablko/mus/index.html', 'pl/procesy/wekowanie/index.html']);
});

test('mapa strony: tylko strony z planu, bez ukrytych, wycofanych, do-researchu i strony wyboru języka', () => {
  const m = generuj(dane()).pliki['sitemap.xml'];
  const locs = [...m.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]);
  assert.equal(locs.length, 9);
  for (const zly of ['/sok/', '/gruszka/', '/x/', '/y/']) assert.ok(!m.includes(zly), zly);
  assert.ok(!locs.includes(`${D}/`));
});

test('hreflang: dwukierunkowy, z sobą samym, absolutny, x-default; tylko istniejące wersje', () => {
  const { pliki } = generuj(dane());
  const alt = (p) => [...pliki[p].matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((x) => `${x[1]} ${x[2]}`).sort();
  const pl = alt('pl/jablko/mus/index.html'), en = alt('en/apple/sauce/index.html');
  assert.deepEqual(pl, en);
  assert.deepEqual(pl, [`en ${D}/en/apple/sauce/`, `pl ${D}/pl/jablko/mus/`, `x-default ${D}/`]);
  assert.deepEqual(alt('pl/procesy/wekowanie/index.html'), [`pl ${D}/pl/procesy/wekowanie/`, `x-default ${D}/`]);
  assert.match(pliki['pl/jablko/mus/index.html'], new RegExp(`<link rel="canonical" href="${D}/pl/jablko/mus/">`));
});

test('karta-ostrzeżenie: bez Recipe i bez miejsc reklam, z ostrzeżeniem i uwagą D-027 (c)', () => {
  const h = generuj(dane()).pliki['pl/fasola/fasola-w-kapieli/index.html'];
  assert.ok(!h.includes('"Recipe"'));
  assert.ok(!h.includes('data-ad-slot'));
  assert.match(h, /data-typ="karta-ostrzezenie"/);
  assert.match(h, /data-claim="SZY-006"/);
  assert.match(h, /data-uwaga="D-027c"/);
});

test('Recipe tylko na ok-zrodlo z obrazem; każda strona encji ma uwagę D-027 (c)', () => {
  const { pliki } = generuj(dane());
  assert.match(pliki['pl/jablko/mus/index.html'], /"@type":"Recipe"/);
  assert.ok(!pliki['en/apple/sauce/index.html'].includes('"Recipe"'));
  for (const [p, h] of Object.entries(pliki)) if (p.endsWith('.html') && p !== 'index.html') assert.match(h, /data-uwaga="D-027c"/, p);
});

test('brak wymaganego ostrzeżenia w treści = błąd budowania', () => {
  const t = tresci(); delete t.en.warianty['beans-v01'].ostrzezenia;
  assert.ok(generuj(dane({ tresci: t })).bledy.some((b) => /en\/beans-v01: treść bez wymaganego ostrzeżenia SZY-006/.test(b)));
});

test('slugi: format, unikalność, kolizja z prefiksem; pismo niełacińskie dozwolone', () => {
  assert.deepEqual(sprawdzSlugi(slugi(), katalog()), []);
  const b = sprawdzSlugi({ pl: { rodziny: { _prefiks: 'jablko' }, produkty: { a: 'jablko', b: 'Jabłko', c: 'x', d: 'x' }, warianty: {} } });
  assert.ok(b.some((x) => /zły slug b/.test(x)));
  assert.ok(b.some((x) => /powtórzone slugi produktów: x/.test(x)));
  assert.ok(b.some((x) => /koliduje z prefiksem/.test(x)));
  assert.deepEqual(sprawdzSlugi({ ru: { rodziny: { _prefiks: 'процессы' }, produkty: { a: 'огурец' }, warianty: {} } }), []);
  assert.ok(sprawdzSlugi({ xx: { produkty: {} } }).length === 1);
});

test('brak slugu albo treści w języku = brak strony w tym języku (fale)', () => {
  const s = slugi(); delete s.en.warianty['apple-v01'];
  const { strony } = planStron(katalog(), s, tresci());
  assert.ok(!strony.some((x) => x.lang === 'en' && x.id === 'apple-v01'));
  assert.ok(!strony.some((x) => x.lang === 'en' && x.typ === 'produkt' && x.id === 'apple'));
});

test('mapa strony dzieli się powyżej limitu i ma indeks', () => {
  const strony = Array.from({ length: 5 }, (_, i) => ({ typ: 'wariant', sciezka: `/pl/p/${i}/` }));
  const m = mapyStrony(strony, 2);
  assert.deepEqual(Object.keys(m).sort(), ['sitemap-1.xml', 'sitemap-2.xml', 'sitemap-3.xml', 'sitemap.xml']);
  assert.match(m['sitemap.xml'], /<sitemapindex/);
  assert.equal(Object.keys(mapyStrony(strony, 5)).length, 1);
});

test('treść escapowana; brak odnośników z parametrem zapytania; brak automatycznego przekierowania', () => {
  const { pliki } = generuj(dane());
  assert.ok(!pliki['en/apple/sauce/index.html'].includes('<script>alert'));
  for (const [p, h] of Object.entries(pliki)) if (p.endsWith('.html')) {
    assert.ok(![...h.matchAll(/href="([^"]+)"/g)].some((m) => m[1].includes('?')), p);
    assert.ok(!/http-equiv="refresh"/i.test(h), p);
  }
});

test('brak tekstów interfejsu dla języka ze stronami = błąd', () => {
  assert.ok(generuj(dane({ ui: { pl: uiL } })).bledy.some((b) => /en: brak tekstów interfejsu/.test(b)));
});

test('prawdziwy katalog: dziś 0 stron treści, mapa pusta (nic ukrytego nie wycieka)', () => {
  const kat = JSON.parse(readFileSync(new URL('../catalog/catalog-seed.json', import.meta.url)));
  const { bledy, strony, pliki } = generuj({ katalog: kat, slugi: {}, tresci: {}, ui: {} });
  assert.deepEqual(bledy, []);
  assert.deepEqual(strony.map((s) => s.typ), ['wybor-jezyka']);
  assert.ok(!pliki['sitemap.xml'].includes('<loc>'));
});

test('cardType warning nigdy nie dostaje Recipe, nawet przy ok-zrodlo z obrazem', () => {
  const k = katalog(); Object.assign(k.variants[0], { cardType: 'warning' });
  const h = generuj(dane({ katalog: k })).pliki['pl/jablko/mus/index.html'];
  assert.ok(!h.includes('"Recipe"'));
  assert.match(h, /data-typ="karta-ostrzezenie"/);
});

// --- Ścieżki ryzyka (E2 roli 05, docs/architektura/ryzyka.md). Testy napisane przed kodem.
const zaslepki = (zm = {}) => ({ ...dane(zm), dozwolZaslepki: false });

test('R2 zaślepka w treści albo tekście interfejsu strony = błąd budowania', () => {
  const b = generuj(zaslepki()).bledy;
  assert.ok(b.some((x) => /pl\/apple-v01: zaślepka „\[PRZYKŁAD\]”/.test(x)), b.join('\n'));
  assert.ok(b.some((x) => /pl: zaślepka „\[DO USTALENIA\]” w tekstach interfejsu/.test(x)), b.join('\n'));
  const t = tresci(); t.en.warianty['apple-v01'].sekcje[0].akapity = ['TODO: dopisać'];
  assert.ok(generuj({ ...dane({ tresci: t }), dozwolZaslepki: false }).bledy.some((x) => /en\/apple-v01: zaślepka „TODO”/.test(x)));
});

test('R2 tryb testowy z zaślepkami nie zgłasza ich (tylko dane [PRZYKŁAD] w testach)', () => {
  assert.ok(!generuj(dane()).bledy.some((x) => /zaślepka/.test(x)));
});

test('R3 karta-ostrzeżenie bez ostrzeżenia albo z pustym tekstem = błąd', () => {
  const t = tresci(); t.pl.warianty['beans-v01'].ostrzezenia = [];
  const k = katalog(); k.variants[2].requiredWarnings = [];
  assert.ok(generuj(dane({ katalog: k, tresci: t })).bledy.some((x) => /pl\/beans-v01: karta-ostrzeżenie bez ostrzeżenia/.test(x)));
  const t2 = tresci(); t2.en.warianty['beans-v01'].ostrzezenia[0].tekst = '  ';
  assert.ok(generuj(dane({ tresci: t2 })).bledy.some((x) => /en\/beans-v01: puste ostrzeżenie SZY-006/.test(x)));
});

test('R3 pusta uwaga D-027 (c) w tekstach interfejsu = błąd', () => {
  assert.ok(generuj(dane({ ui: { pl: { ...uiL, uwagaBezpieczenstwa: '' }, en: uiL } })).bledy.some((x) => /pl: pusta uwaga D-027 \(c\)/.test(x)));
});

test('R4 opublikowany adres zniknął bez przekierowania = błąd; z przekierowaniem do istniejącej strony = OK', () => {
  const stary = '/pl/jablko/stary-mus/';
  const bez = generuj({ ...dane(), adresy: { opublikowane: [stary, '/pl/jablko/mus/'], przekierowania: {} } }).bledy;
  assert.ok(bez.some((x) => x === `adres opublikowany zniknął bez przekierowania 301: ${stary}`), bez.join('\n'));
  const z = generuj({ ...dane(), adresy: { opublikowane: [stary], przekierowania: { [stary]: '/pl/jablko/mus/' } } });
  assert.ok(!z.bledy.some((x) => /przekierowan/.test(x)), z.bledy.join('\n'));
  assert.deepEqual(z.przekierowania, [{ z: stary, do: '/pl/jablko/mus/' }]);
  const zly = generuj({ ...dane(), adresy: { opublikowane: [stary], przekierowania: { [stary]: '/pl/nie-ma/' } } }).bledy;
  assert.ok(zly.some((x) => /przekierowanie .* do adresu spoza planu: \/pl\/nie-ma\//.test(x)));
  const aktywny = generuj({ ...dane(), adresy: { opublikowane: [], przekierowania: { '/pl/jablko/mus/': '/pl/jablko/' } } }).bledy;
  assert.ok(aktywny.some((x) => /przekierowanie z adresu, który nadal ma stronę: \/pl\/jablko\/mus\//.test(x)));
});

// R5 (07-jakosc-005): lista dozwolonych zamiast zakazanych. Zasób ładowany przez przeglądarkę (src, srcset, data, poster, href zasobów <link>,
// url() i @import w stylach) jest względny albo na DOMENA. Adres bez protokołu („//cdn…”, „/\\cdn…”) i każdy inny schemat = zasób obcy.
const adresyZasobow = (h) => {
  const out = [];
  for (const [, tag, attrs] of h.matchAll(/<([a-z][a-z0-9]*)\b([^>]*)>/gi)) {
    const t = tag.toLowerCase(), at = Object.fromEntries([...attrs.matchAll(/([a-z-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/gi)].map((m) => [m[1].toLowerCase(), m[3] ?? m[4] ?? m[5]]));
    if (t === 'link' && /^(canonical|alternate)$/i.test(at.rel ?? '')) continue; // odnośniki, nie zasoby
    if (t === 'a') continue; // nawigacja (źródła na karcie), nic nie ładuje
    for (const k of ['src', 'data', 'poster', 'background']) if (at[k] != null) out.push(at[k]);
    if (t === 'link' && at.href != null) out.push(at.href);
    for (const k of ['srcset', 'imagesrcset']) if (at[k] != null) out.push(...at[k].split(',').map((x) => x.trim().split(/\s+/)[0]));
    if (at.style) out.push(...[...at.style.matchAll(/url\(\s*['"]?([^'")]+)/gi)].map((m) => m[1]));
  }
  for (const [, css] of h.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) {
    out.push(...[...css.matchAll(/url\(\s*['"]?([^'")]+)/gi)].map((m) => m[1]), ...[...css.matchAll(/@import\s+(?:url\()?\s*['"]?([^'")\s;]+)/gi)].map((m) => m[1]));
  }
  return out;
};
const zasobDozwolony = (u) => {
  const a = u.trim().replace(/&amp;/g, '&');
  if (a.startsWith(DOMENA + '/')) return true;
  if (/^[\\/]{2}|^\/\\/.test(a)) return false; // //cdn, \\cdn, /\cdn: przeglądarka traktuje jak adres bez protokołu
  return !/^[a-z][a-z0-9+.-]*:/i.test(a); // http:, https:, data:, javascript: … poza domeną
};
const obceZasoby = (h) => adresyZasobow(h).filter((u) => !zasobDozwolony(u));

test('R5 prywatność: kontrola zasobów obcych łapie adres bez protokołu, srcset, object, embed, @import (07-jakosc-005)', () => {
  // Kontrola, że kontrola potrafi paść (mutant M6 audytu i warianty z pola „Mechanizm”).
  for (const zly of ['<script src="//cdn.example.com/a.js" defer></script>', '<img src="x.png" srcset="/a.png 1x, //cdn.example.com/b.png 2x">', '<object data="https://example.com/a.swf"></object>',
    '<embed src="//example.com/e">', '<style>@import url("https://fonts.example.com/f.css");</style>', '<style>@import "//x.example/a.css";</style>', '<div style="background:url(//x.example/a.png)"></div>',
    '<link rel="stylesheet" href="https://cdn.example.com/a.css">', '<link rel="preload" href="//cdn.example.com/f.woff2">', '<img src="/\\cdn.example.com/a.png">', "<iframe src='https://example.com/'></iframe>", '<video poster="http://x.example/p.jpg"></video>']) {
    assert.ok(obceZasoby(zly).length > 0, zly);
  }
  for (const dobry of ['<script src="/static/filtry.js" defer></script>', `<img src="${DOMENA}/i/a.jpg">`, '<img src="a.png" srcset="/a.png 1x, /b.png 2x">', `<link rel="canonical" href="https://example.com/">`, '<a href="https://nchfp.uga.edu/" rel="nofollow">x</a>']) {
    assert.deepEqual(obceZasoby(dobry), [], dobry);
  }
});

test('R5 prywatność: wygenerowany HTML nie ładuje nic spoza domeny (0 skryptów i zasobów stron trzecich)', () => {
  const { pliki } = generuj(dane());
  assert.ok(adresyZasobow(pliki['pl/jablko/index.html']).includes('/static/filtry.js')); // kontrola pozytywna: parser widzi zasoby szablonów
  for (const [p, h] of Object.entries(pliki)) {
    if (!p.endsWith('.html')) continue;
    assert.deepEqual(obceZasoby(h), [], p);
    assert.ok(!/<iframe/i.test(h), p);
  }
});

test('K1 jedno miejsce konfiguracji: process.env i adres domeny tylko w site/konfiguracja.mjs', async () => {
  const { readdirSync } = await import('node:fs');
  const dir = new URL('../site/', import.meta.url);
  for (const n of readdirSync(dir).filter((x) => x.endsWith('.mjs') && x !== 'konfiguracja.mjs')) {
    const kod = readFileSync(new URL(n, dir), 'utf8');
    assert.ok(!/process\.env|jaratlas\.com/.test(kod), `site/${n}`);
  }
});

test('R1 bramka zamknięta domyślnie: brak albo nieznany safetyStatus = brak strony', () => {
  for (const s of [undefined, 'ok-zródło', 'wycofane']) {
    const k = katalog(); k.variants[0].safetyStatus = s;
    assert.ok(!generuj(dane({ katalog: k })).strony.some((x) => x.id === 'apple-v01'), String(s));
  }
});

test('R1 bramka: poza zakresem, bez treści albo ryzyko bez karty-ostrzeżenia = brak strony (07-jakosc-001)', () => {
  const ma = (k, id) => generuj(dane({ katalog: k })).strony.some((x) => x.id === id);
  // Kontrola pozytywna: bez niej test przeszedłby także wtedy, gdy wariant nigdy nie dostaje strony.
  assert.ok(ma(katalog(), 'apple-v01') && ma(katalog(), 'beans-v01'));
  for (const [opis, zmien] of [['scope out-of-scope', (v) => { v.scope = 'out-of-scope'; }], ['bez content', (v) => { delete v.content; }]]) {
    const k = katalog(); zmien(k.variants[0]);
    assert.ok(!ma(k, 'apple-v01'), opis);
  }
  // 189 wariantów ryzyka w prawdziwym katalogu nie ma dziś cardType (stan 2026-11-01).
  for (const status of ['nie-publikowac', 'ryzyko-wysokie']) {
    for (const cardType of [undefined, 'recipe']) {
      const k = katalog(); Object.assign(k.variants[2], { safetyStatus: status, cardType });
      assert.ok(!ma(k, 'beans-v01'), `${status} cardType=${cardType}`);
    }
  }
});

test('R8 kolizja adresów: dwa warianty produktu z tym samym slugiem = błąd planu i błąd slugów (07-jakosc-002)', () => {
  const k = katalog(); k.variants.push({ id: 'apple-v05', productId: 'apple', safetyStatus: 'ok-zrodlo', ...pub });
  const s = slugi(); s.pl.warianty['apple-v05'] = 'mus';
  const t = tresci(); t.pl.warianty['apple-v05'] = karta('Mus drugi');
  // Komunikat planu sprawdzany dokładnie: błąd slugów sam nie może zastąpić kontroli kolizji ścieżek.
  assert.ok(planStron(k, s, t).bledy.includes('kolizja adresów: /pl/jablko/mus/'));
  assert.ok(sprawdzSlugi(s, k).some((b) => b === 'pl: powtórzone slugi wariantów produktu apple: mus (site/slugi/pl.json)'));
  // Ten sam slug wariantu w różnych produktach to inne adresy: dozwolony.
  const s2 = slugi(); s2.pl.warianty['beans-v01'] = 'mus';
  assert.deepEqual(sprawdzSlugi(s2, katalog()), []);
});

test('slugi niełacińskie: lista dozwolonych (małe litery, cyfry, znaki łączące, łączniki) (07-jakosc-003)', () => {
  const zle = (lang, slug) => sprawdzSlugi({ [lang]: { produkty: { p: slug }, warianty: {} } }).length > 0;
  for (const s of ['..', '.', 'a.b', 'a\\b', 'Огурец', 'a"b', 'a<b', 'a>b', "a'b", 'a&b', 'a b', '-a', 'a-', 'a--b', '']) assert.ok(zle('ru', s), JSON.stringify(s));
  for (const [lang, s] of [['ru', 'огурец'], ['ru', 'процессы'], ['ru', 'солёные-огурцы'], ['ja', 'きゅうり'], ['ja', 'ピーマン'], ['ko', '오이'], ['zh-Hant', '黃瓜'], ['el', 'αγγούρι'], ['el', 'σύκο'], ['uk', 'огірок-2']]) {
    assert.ok(!zle(lang, s), `${lang} ${s}`);
  }
});

test('slugi niełacińskie: znaki niewidoczne (Default_Ignorable_Code_Point) odrzucone, także między literami (obserwacja przeglądu D-043 07-jakosc-003)', () => {
  const zle = (lang, slug) => sprawdzSlugi({ [lang]: { produkty: { p: slug }, warianty: {} } }).length > 0;
  // U+3164 wypełniacz hangul (Lo), U+115F/U+1160 wypełniacze jamo, U+034F łącznik grafemów (Mn), U+180B selektor mongolski (Mn), U+FE0F selektor wariantu (Mn).
  for (const [lang, s] of [['ko', '오\u3164이'], ['ko', '\u3164'], ['ko', '오\u115F이'], ['ko', '오\u1160'], ['ru', 'огу\u034Fрец'], ['ru', 'огурец\u180B'], ['ja', 'きゅうり\uFE0F']]) {
    assert.ok(zle(lang, s), `${lang} U+${[...s].map((c) => c.codePointAt(0).toString(16)).join(' ')}`);
  }
  for (const [lang, s] of [['ko', '오이-김치'], ['ja', 'ピーマン'], ['ru', 'солёные'], ['el', 'σύκο']]) assert.ok(!zle(lang, s), `${lang} ${s}`);
});

test('ostrzeżenia przed treścią: sekcja ostrzeżeń przed wstępem i przed krokami (ADR 0005, 07-jakosc-006)', () => {
  for (const p of ['pl/fasola/fasola-w-kapieli/index.html', 'en/beans/beans-water-bath/index.html']) {
    const h = generuj(dane()).pliki[p], m = h.slice(h.indexOf('<main'));
    const ostrz = m.indexOf('<section data-ostrzezenia'), wstep = m.indexOf('<p>w</p>'), kroki = m.indexOf('<section><h2>');
    assert.ok(ostrz > 0 && wstep > 0 && kroki > 0, p);
    assert.ok(ostrz < wstep && ostrz < kroki, p);
  }
});

// 07-jakosc-004 (sondy S4, S5 audytu 07): kontrola zaślepek na gotowych plikach łapie każde źródło tekstu (katalog, nazwy języków, rodziny).
const czyste = (x) => JSON.parse(JSON.stringify(x).replaceAll('[PRZYKŁAD]', '').replaceAll('[DO USTALENIA]', 'U'));
const daneCzyste = (zm = {}) => ({ ...czyste({ katalog: katalog(), slugi: slugi(), tresci: tresci(), ui: { pl: uiL, en: uiL } }), dozwolZaslepki: false, ...zm });
test('R2 zaślepki w wygenerowanych plikach: katalog, nazwy języków, rodziny, [ZAŁOŻENIE] i [DO DECYZJI] = błąd (07-jakosc-004)', () => {
  // Kontrola pozytywna: dane bez znaczników dają 0 błędów, więc każdy błąd niżej pochodzi z wstrzykniętego znacznika.
  assert.deepEqual(generuj(daneCzyste()).bledy, []);
  const blad = (zm, plik, znacznik) => {
    const b = generuj(daneCzyste(zm)).bledy;
    assert.ok(b.includes(`${plik}: zaślepka „${znacznik}” w wygenerowanym pliku`), `${plik} ${znacznik}\n${b.join('\n')}`);
  };
  const k1 = czyste(katalog()); k1.variants[0].sources[0].miejsce = '[DO USTALENIA]';
  blad({ katalog: k1 }, 'pl/jablko/mus/index.html', '[DO USTALENIA]');
  const k2 = czyste(katalog()); k2.products[0].name = { pl: '[PRZYKŁAD] Ogórek' };
  blad({ katalog: k2 }, 'pl/jablko/index.html', '[PRZYKŁAD]');
  blad({ nazwyJezykow: { pl: 'Polski [DO USTALENIA]' } }, 'index.html', '[DO USTALENIA]');
  for (const z of ['[ZAŁOŻENIE]', '[DO DECYZJI]']) {
    const t = czyste(tresci()); t.en.warianty['apple-v01'].wstep = `w ${z}`;
    blad({ tresci: t }, 'en/apple/sauce/index.html', z);
  }
  const t2 = czyste(tresci()); t2.pl.rodziny['canned-foods'].tytul = 'Wekowanie TODO';
  blad({ tresci: t2 }, 'pl/procesy/wekowanie/index.html', 'TODO');
  // Hiszpańskie i portugalskie „todo” (wszystko) to słowo, nie znacznik: wielkość liter ma znaczenie.
  const t3 = czyste(tresci()); t3.en.warianty['apple-v01'].wstep = 'todo el año';
  assert.deepEqual(generuj(daneCzyste({ tresci: t3 })).bledy, []);
});
