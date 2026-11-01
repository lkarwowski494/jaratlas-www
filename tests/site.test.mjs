// Testy szkieletu strony (ADR 0002–0005). Dane [PRZYKŁAD], nie treść merytoryczna.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { generuj } from '../site/generuj.mjs';
import { sprawdzSlugi, planStron } from '../site/plan.mjs';
import { mapyStrony } from '../site/mapa.mjs';

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
const D = 'https://jaratlas.com';

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
  assert.deepEqual(sprawdzSlugi(slugi()), []);
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

test('R5 prywatność: wygenerowany HTML nie ładuje nic spoza domeny (0 skryptów i zasobów stron trzecich)', () => {
  for (const [p, h] of Object.entries(generuj(dane()).pliki)) {
    if (!p.endsWith('.html')) continue;
    assert.ok(!/<(script|img|iframe|link|source|video|audio)\b[^>]*\s(src|href)="https?:\/\/(?!jaratlas\.com\/)/i.test(h.replace(/<link rel="(canonical|alternate)"[^>]*>/g, '')), p);
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
