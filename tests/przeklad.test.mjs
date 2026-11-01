// Skrypt przekładu kart i slugów en → fr, es, de, it przez API (rola 09). Testy offline: atrapa fetch, bez klucza i bez sieci.
// Najważniejsze: kontrola niezmienników (znaczniki [T:ID], liczby, temperatury, czasy, jednostki), bo karty mówią o bezpieczeństwie żywności.
import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { porownaj, uwagi, liczby, znaczniki, jednostki, symbole, slugPoprawny } from '../tools/i18n/niezmienniki.mjs';
import { segmenty, parsujArgumenty, parsujOdpowiedz, odczytajLinie, budujZadanieBatcha, main, zastosuj, kosztUsd, maskuj, JEZYKI_DOCELOWE, LIMIT_KOSZTU_USD } from '../tools/i18n/przeklad-api.mjs';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..');
const czytaj = (p) => JSON.parse(readFileSync(p, 'utf8'));

/* ---------- niezmienniki ---------- */

test('znaczniki [T:ID] w kolejności, bez zmian', () => {
  assert.deepEqual(znaczniki('Zdanie. [T:ACI-075,ACI-176] Drugie. [T:SUS-050]'), ['[T:ACI-075,ACI-176]', '[T:SUS-050]']);
  assert.deepEqual(porownaj('A 20 minutes. [T:ACI-075]', 'A 20 minutes. [T:ACI-076]', 'fr').map((p) => p.rodzaj), ['znaczniki']);
  assert.deepEqual(porownaj('A. [T:X-1] B. [T:X-2]', 'B. [T:X-2] A. [T:X-1]', 'fr').map((p) => p.rodzaj), ['znaczniki']);
});

test('liczby: wartości po normalizacji przecinka dziesiętnego, ułamki i znak minus', () => {
  assert.deepEqual(liczby('Freeze at 0 °F (−18 °C), 1/2 inch (about 1.3 cm), 0–1000 ft.', 'en').wartosci, ['-18', '0', '0', '1.3', '1/2', '1000']);
  assert.deepEqual(liczby('Congeler à 0 °F (−18 °C), 1/2 pouce (environ 1,3 cm), 0–1000 pieds.', 'fr').wartosci, ['-18', '0', '0', '1.3', '1/2', '1000']);
  assert.equal(porownaj('about 1.3 cm', 'environ 1,3 cm', 'fr').length, 0);
});

test('liczby: zmieniona wartość, zgubiony minus, separator tysięcy i kropka dziesiętna w języku docelowym są odrzucane', () => {
  assert.ok(porownaj('process for 20 minutes', 'stérilisez 25 minutes', 'fr').some((p) => p.rodzaj === 'liczby'));
  assert.ok(porownaj('at 0 °F (−18 °C)', 'bei 0 °F (18 °C)', 'de').some((p) => p.rodzaj === 'liczby'));
  // „1.000” po niemiecku to tysiąc, „1,000” — jeden; obie formy są niejednoznaczne wobec źródła, więc odrzut.
  assert.ok(porownaj('above 1000 ft', 'über 1.000 Fuß', 'de').some((p) => p.rodzaj === 'format liczby'));
  assert.ok(porownaj('above 1000 ft', 'über 1,000 Fuß', 'de').some((p) => p.rodzaj === 'liczby'));
  assert.ok(porownaj('a 0.5 l jar', 'un bocal de 0.5 l', 'fr').some((p) => p.rodzaj === 'format liczby'));
  assert.ok(porownaj('above 1000 ft', 'au-dessus de 1 000 pieds', 'fr').some((p) => p.rodzaj === 'liczby'));
});

test('liczby: zakres z półpauzą to nie minus; dodana liczba jest odrzucana', () => {
  assert.equal(porownaj('let stand 20–30 minutes', 'laisser reposer 20–30 minutes', 'fr').length, 0);
  assert.ok(porownaj('boil the jars', 'faire bouillir les bocaux 10 minutes', 'fr').some((p) => p.rodzaj === 'liczby'));
});

test('symbole jednostek: °F/°C, ml, l, cm, m, %, pH bez zmian', () => {
  assert.deepEqual(symbole('0 °F (−18 °C), 473 ml, 0.5 l, 50% syrup, 300 m, pH 4.6'), ['%', '°C', '°F', 'l', 'm', 'ml', 'pH'].sort());
  assert.ok(porownaj('at 40 °F (about 4 °C)', 'à 40 °C (environ 4 °C)', 'fr').some((p) => p.rodzaj === 'symbole'));
  assert.ok(porownaj('a 0.5 l jar', 'un bocal de 0,5 litre', 'fr').some((p) => p.rodzaj === 'symbole'));
});

test('jednostki słowne: minuty, cale, stopy, pint/quart (nazwy słoików US zostają), szklanki', () => {
  assert.deepEqual(jednostki('process pints for 20 minutes and quarts for 25; 1/2 inch; 1000 ft; 3/4 cup', 'en'), ['cup', 'foot', 'inch', 'minute', 'pint', 'quart']);
  assert.deepEqual(jednostki('stérilisez les pints 20 minutes et les quarts 25 ; 1/2 pouce ; 1000 pieds ; 3/4 tasse', 'fr'), ['cup', 'foot', 'inch', 'minute', 'pint', 'quart']);
  // „pinte” (pinta brytyjska/kanadyjska ≈ 568 ml) to inna objętość niż pint US (≈ 473 ml): odrzut.
  assert.ok(porownaj('process pints for 20 minutes', 'stérilisez les pintes 20 minutes', 'fr').some((p) => p.rodzaj === 'jednostki'));
  assert.ok(porownaj('boil for 2 minutes', 'kochen Sie 2 Stunden', 'de').some((p) => p.rodzaj === 'jednostki'));
  assert.ok(porownaj('1 tablespoon', '1 Teelöffel', 'de').some((p) => p.rodzaj === 'jednostki'));
});

test('half-pint w źródle to 1/2 pint: liczba 1/2 musi być w przekładzie', () => {
  assert.equal(porownaj('process half-pint jars for 5 minutes', 'stérilisez les bocaux de 1/2 pint 5 minutes', 'fr').length, 0);
  assert.ok(porownaj('process half-pint jars for 5 minutes', 'stérilisez les bocaux d’une demi-pint 5 minutes', 'fr').some((p) => p.rodzaj === 'liczby'));
});

test('nazwy własne (NCHFP, USDA, JarAtlas) bez tłumaczenia', () => {
  assert.ok(porownaj('This card describes NCHFP. [T:X-1]', 'Cette fiche décrit le CNCAD. [T:X-1]', 'fr').some((p) => p.rodzaj === 'nazwy'));
});

test('slugi: małe litery ASCII, cyfry i łączniki', () => {
  assert.equal(slugPoprawny('confiture'), true);
  assert.equal(slugPoprawny('cornichons-a-l-aneth'), true);
  for (const z of ['Confiture', 'cornichons-à-l-aneth', 'a--b', '-a', 'a b', '']) assert.equal(slugPoprawny(z), false, z);
});

test('kalibracja na prawdziwych danych: istniejące karty pl przechodzą kontrolę względem en (0 problemów)', () => {
  const dir = join(repo, 'docs/tresci/karty');
  const problemy = [];
  for (const n of readdirSync(join(dir, 'en/warianty'))) {
    const en = segmenty(czytaj(join(dir, 'en/warianty', n)), n.replace('.json', ''));
    const pl = Object.fromEntries(segmenty(czytaj(join(dir, 'pl/warianty', n)), n.replace('.json', '')).map((s) => [s.id, s.en]));
    for (const s of en) for (const p of porownaj(s.en, pl[s.id], 'pl')) problemy.push(`${s.id}: ${p.rodzaj} ${JSON.stringify(p)}`);
  }
  assert.deepEqual(problemy, []);
});

test('mutacje na prawdziwych danych: każda zmiana jednej liczby, zamiana °F↔°C i usunięcie znacznika w kartach pl są wykrywane', () => {
  const dir = join(repo, 'docs/tresci/karty');
  let mutacji = 0; const przeoczone = [];
  for (const n of readdirSync(join(dir, 'en/warianty'))) {
    const w = n.replace('.json', '');
    const pl = Object.fromEntries(segmenty(czytaj(join(dir, 'pl/warianty', n)), w).map((s) => [s.id, s.en]));
    for (const s of segmenty(czytaj(join(dir, 'en/warianty', n)), w)) {
      const t = pl[s.id]; const warianty = [];
      for (const m of t.replace(/\[T:[^\]]*\]/g, (x) => '#'.repeat(x.length)).matchAll(/\d+/g)) warianty.push(t.slice(0, m.index) + String(Number(m[0]) + 1) + t.slice(m.index + m[0].length));
      if (t.includes('°F')) warianty.push(t.replace('°F', '°C'));
      if (t.includes('°C')) warianty.push(t.replace('°C', '°F'));
      if (/\[T:/.test(t)) warianty.push(t.replace(/\s*\[T:[^\]]*\]/, ''));
      for (const z of warianty) { mutacji++; if (porownaj(s.en, z, 'pl').length === 0) przeoczone.push(`${s.id}: ${z}`); }
    }
  }
  assert.ok(mutacji > 300, `za mało mutacji: ${mutacji}`);
  assert.deepEqual(przeoczone, []);
});

test('przegląd D-043: liczba związana z jednostką i kolejność — zamiany wartości między jednostkami są odrzucane', () => {
  // zamiana czasów pint/quart przy tych samych jednostkach: nie odrzut (szyk bywa swobodny), ale uwaga w raporcie dla recenzenta
  assert.equal(uwagi('Process 10 minutes for pint jars and 15 minutes for quart jars.', 'Stérilisez 15 minutes pour les bocaux pint et 10 minutes pour les bocaux quart.', 'fr').length, 1);
  assert.equal(uwagi('Process 10 minutes for pint jars and 15 minutes for quart jars.', 'Stérilisez 10 minutes pour les bocaux pint et 15 minutes pour les bocaux quart.', 'fr').length, 0);
  const zle = [
    ['de', 'Above 6000 ft (above 1800 m).', 'Oberhalb von 1800 Fuß (über 6000 m).'],
    ['es', 'At 70–75 °F (21–24 °C).', 'A 21–24 °F (70–75 °C).'],
    ['it', 'Boil for 10 minutes, then let stand 12 hours.', 'Bollire per 10 ore, poi lasciare riposare 12 minuti.'],
    ['it', 'Fermentation takes about 3–4 weeks.', 'La fermentazione dura circa 3–4 giorni.'],
    ['fr', 'Store for about 4–6 months.', 'Conserver environ 4–6 semaines.'],
    ['fr', 'Use half-pints and quarts.', 'Utilisez des pints et des 1/2 quarts.'],
  ];
  for (const [j, en, tl] of zle) assert.ok(porownaj(en, tl, j).length > 0, `przeszło: ${tl}`);
  assert.equal(porownaj('Fermentation takes about 3–4 weeks.', 'La fermentazione dura circa 3–4 settimane.', 'it').length, 0);
  assert.equal(porownaj('Store for about 4–6 months.', 'Conserver environ 4–6 mois.', 'fr').length, 0);
});

test('przegląd D-043: limit kosztu liczony od najgorszego przypadku (max_tokens), nie tylko od szacunku', async () => {
  const root = projekt(); const a = atrapa();
  const kod = await main(['--wyslij', '--model', 'fable', '--limit', '0.5', '--wyjscie', join(root, 'r')], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root });
  assert.equal(kod, 3);
  const s = czytaj(join(root, 'r/szacunek.json'));
  assert.ok(s.koszt_max_usd > s.koszt_usd);
  assert.ok(!a.wywolania.some((w) => w.url.endsWith('/messages/batches')));
});

test('przegląd D-043: --szacuj z --wznow odrzucone; wyniki tylko z api.anthropic.com; --wyjscie nie w docs/ ani site/', async () => {
  assert.throws(() => parsujArgumenty(['--szacuj', '--wznow', 'msgbatch_abc']), /wznow/);
  const root = projekt();
  await assert.rejects(main(['--wyjscie', join(root, 'docs/tresci/karty/en/warianty')], {}, { log: cicho, root }), /wyjscie/);
  const a = atrapa();
  const zlyFetch = async (url, init) => { const r = await a.fetchFn(url, init); if (/msgbatch_test1$/.test(url)) return { ok: true, status: 200, json: async () => ({ processing_status: 'ended', results_url: 'https://zly.example/wyniki' }) }; return r; };
  const kod = await main(['--wznow', 'msgbatch_test1', '--jezyki', 'fr', '--wyjscie', join(root, 'r')], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: zlyFetch, log: cicho, root, spij: async () => {} }).catch((e) => e);
  assert.match(String(kod?.message ?? kod), /results_url/);
});

test('przegląd D-043: zastosuj nie nadpisuje istniejących (przejrzanych) przekładów bez --nadpisz', async () => {
  const root = projekt(); const wy = join(root, 'r'); const a = atrapa();
  await main(['--wyslij', '--jezyki', 'fr', '--wyjscie', wy], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root, spij: async () => {} });
  assert.equal(zastosuj(root, wy).kart, 1);
  const plik = join(root, 'docs/tresci/przeklady/fr/warianty/s.json');
  writeFileSync(plik, '{"poprawione":"przez recenzenta"}');
  const p = zastosuj(root, wy);
  assert.equal(p.kart, 0);
  assert.ok(p.pominiete.some((x) => /istnieje/.test(x)));
  assert.equal(readFileSync(plik, 'utf8'), '{"poprawione":"przez recenzenta"}');
  assert.equal(zastosuj(root, wy, { nadpisz: true }).kart, 1);
});

/* ---------- segmenty i odpowiedź modelu ---------- */

const karta = {
  tytul: 'Frozen strawberries (NCHFP)',
  wstep: 'This card describes how NCHFP freezes strawberries. [T:FRZ-062]',
  ostrzezenia: [{ claim: 'SUS-050', tekst: 'Freeze at 0 °F (−18 °C) or lower. [T:SUS-050]' }],
  sekcje: [{ naglowek: 'Packing', akapity: ['Leave 1/2 inch (about 1.3 cm) of headspace. [T:FRZ-065]'] }],
  obraz: null,
};

test('segmenty: stałe identyfikatory pól karty', () => {
  assert.deepEqual(segmenty(karta, 'strawberry-v17').map((s) => s.id), [
    'karta/strawberry-v17/tytul', 'karta/strawberry-v17/wstep', 'karta/strawberry-v17/ostrzezenia/0', 'karta/strawberry-v17/sekcje/0/naglowek', 'karta/strawberry-v17/sekcje/0/akapity/0']);
});

test('parsujOdpowiedz: przyjmuje zgodne, odrzuca niezgodne z powodem, brakujące oznacza', () => {
  const seg = segmenty(karta, 's');
  const odp = {
    'karta/s/tytul': 'Fraises surgelées (NCHFP)',
    'karta/s/wstep': 'Cette fiche décrit comment le NCHFP congèle les fraises. [T:FRZ-062]',
    'karta/s/ostrzezenia/0': 'Congeler à 0 °F (−18 °C) ou moins.', // zgubiony znacznik
    'karta/s/sekcje/0/naglowek': 'Conditionnement',
  };
  const r = parsujOdpowiedz('Oto wynik:\n```json\n' + JSON.stringify(odp) + '\n```', seg, 'fr');
  assert.equal(r.blad, null);
  assert.deepEqual(Object.keys(r.propozycje).sort(), ['karta/s/sekcje/0/naglowek', 'karta/s/tytul', 'karta/s/wstep']);
  assert.deepEqual(r.odrzucone.map((o) => o.id).sort(), ['karta/s/ostrzezenia/0', 'karta/s/sekcje/0/akapity/0']);
  assert.match(r.odrzucone.find((o) => o.id === 'karta/s/ostrzezenia/0').powod, /znaczniki/);
  assert.equal(parsujOdpowiedz('bez JSON', seg, 'fr').blad, 'brak obiektu JSON w odpowiedzi');
});

test('parsujOdpowiedz: slug z diakrytykiem albo zdublowany w grupie jest odrzucany', () => {
  const seg = [{ id: 'slug/warianty/a', en: 'jam' }, { id: 'slug/warianty/b', en: 'frozen' }, { id: 'slug/warianty/c', en: 'canned-whole' }];
  const r = parsujOdpowiedz(JSON.stringify({ 'slug/warianty/a': 'confiture', 'slug/warianty/b': 'confiture', 'slug/warianty/c': 'entières-en-bocal' }), seg, 'fr');
  assert.deepEqual(Object.keys(r.propozycje), []);
  assert.equal(r.odrzucone.length, 3);
});

test('odczytajLinie: sukces, ucięcie, odmowa, błąd z maskowaniem klucza', () => {
  const ok = { custom_id: 'pr-fr', result: { type: 'succeeded', message: { stop_reason: 'end_turn', content: [{ type: 'thinking', thinking: '' }, { type: 'text', text: '{}' }], usage: { input_tokens: 1 } } } };
  assert.deepEqual(odczytajLinie(JSON.stringify(ok)), { kod: 'fr', blad: null, tekst: '{}', uzycie: { input_tokens: 1 } });
  assert.match(odczytajLinie(JSON.stringify({ custom_id: 'pr-de', result: { type: 'succeeded', message: { stop_reason: 'max_tokens', content: [] } } })).blad, /max_tokens/);
  assert.match(odczytajLinie(JSON.stringify({ custom_id: 'pr-de', result: { type: 'succeeded', message: { stop_reason: 'refusal', content: [] } } })).blad, /refusal/);
  assert.equal(odczytajLinie(JSON.stringify({ custom_id: 'pr-it', result: { type: 'errored', error: { error: { message: 'bad key sk-ant-api03-abcdefghijklmnop' } } } })).blad, 'errored: bad key ***');
  assert.equal(maskuj('x sk-ant-api03-abcdefghijklmnop y'), 'x *** y');
});

test('budujZadanieBatcha: model, effort, max_tokens; bez thinking ani temperatury (Opus 5.5 odrzuca)', () => {
  const z = budujZadanieBatcha('fr', segmenty(karta, 's'), { model: 'claude-opus-5-5', effort: 'medium' });
  assert.equal(z.custom_id, 'pr-fr');
  assert.equal(z.params.model, 'claude-opus-5-5');
  assert.deepEqual(z.params.output_config, { effort: 'medium' });
  assert.equal(z.params.thinking, undefined);
  assert.equal(z.params.temperature, undefined);
  assert.match(z.params.messages[0].content, /karta\/s\/wstep/);
  assert.match(z.params.system, /\[T:/);
});

/* ---------- argumenty i koszt ---------- */

test('parsujArgumenty: domyślnie tylko szacunek; płatny przebieg wymaga --wyslij', () => {
  const o = parsujArgumenty([]);
  assert.equal(o.wyslij, false);
  assert.equal(o.model, 'claude-opus-5-5');
  assert.equal(o.limitUsd, LIMIT_KOSZTU_USD);
  assert.deepEqual(o.jezyki, JEZYKI_DOCELOWE);
  assert.deepEqual(JEZYKI_DOCELOWE, ['fr', 'es', 'de', 'it']);
  const p = parsujArgumenty(['--wyslij', '--limit', '1.5', '--jezyki', 'fr,de', '--model', 'sonnet', '--wznow', 'msgbatch_abc123']);
  assert.deepEqual([p.wyslij, p.limitUsd, p.jezyki, p.model, p.wznow], [true, 1.5, ['fr', 'de'], 'claude-sonnet-5-5', 'msgbatch_abc123']);
  assert.equal(parsujArgumenty(['--szacuj', '--wyslij']).wyslij, false, '--szacuj wygrywa z --wyslij');
  assert.throws(() => parsujArgumenty(['--jezyki', 'pl']), /język/);
  assert.throws(() => parsujArgumenty(['--model', 'gpt']), /model/);
  assert.throws(() => parsujArgumenty(['--wznow', 'abc']), /msgbatch_/);
  assert.throws(() => parsujArgumenty(['--limit', '-1']), /limit/);
  assert.throws(() => parsujArgumenty(['--klucz', 'x']), /nieznany/);
});

test('kosztUsd: cennik Batch −50% (Opus 5.5: 4/20 USD za mln, Batch 2/10)', () => {
  assert.equal(kosztUsd(1e6, 1e6, 'claude-opus-5-5'), 12);
  assert.equal(kosztUsd(1e6, 1e6, 'claude-sonnet-5-5'), 6);
});

/* ---------- przebieg z atrapą API ---------- */

const tymczasowe = [];
after(() => { for (const d of tymczasowe) rmSync(d, { recursive: true, force: true }); });
function projekt() {
  const root = mkdtempSync(join(tmpdir(), 'ja-przeklad-'));
  tymczasowe.push(root);
  mkdirSync(join(root, 'docs/tresci/karty/en/warianty'), { recursive: true });
  mkdirSync(join(root, 'docs/tresci/karty/pl/warianty'), { recursive: true });
  mkdirSync(join(root, 'site/slugi'), { recursive: true });
  writeFileSync(join(root, 'docs/tresci/karty/en/warianty/s.json'), JSON.stringify(karta));
  writeFileSync(join(root, 'docs/tresci/karty/pl/warianty/s.json'), JSON.stringify({ ...karta, tytul: 'Truskawki mrożone (NCHFP)' }));
  writeFileSync(join(root, 'site/slugi/en.json'), JSON.stringify({ produkty: { strawberry: 'strawberry' }, warianty: { s: 'frozen' } }));
  return root;
}
const FR = {
  'karta/s/tytul': 'Fraises surgelées (NCHFP)',
  'karta/s/wstep': 'Cette fiche décrit comment le NCHFP congèle les fraises. [T:FRZ-062]',
  'karta/s/ostrzezenia/0': 'Congeler à 0 °F (−18 °C) ou moins. [T:SUS-050]',
  'karta/s/sekcje/0/naglowek': 'Conditionnement',
  'karta/s/sekcje/0/akapity/0': 'Laisser 1/2 pouce (environ 1,3 cm) d’espace libre. [T:FRZ-065]',
  'slug/produkty/strawberry': 'fraise',
  'slug/warianty/s': 'surgelees',
};

function atrapa({ odpowiedzi = { fr: FR }, status = 'ended' } = {}) {
  const wywolania = [];
  const fetchFn = async (url, init) => {
    wywolania.push({ url, metoda: init.method, naglowki: init.headers, cialo: init.body ? JSON.parse(init.body) : null });
    const json = (o) => ({ ok: true, status: 200, json: async () => o, text: async () => JSON.stringify(o) });
    if (url.endsWith('/messages/count_tokens')) return json({ input_tokens: 1234 });
    if (url.endsWith('/messages/batches') && init.method === 'POST') return json({ id: 'msgbatch_test1', processing_status: 'in_progress' });
    if (/\/messages\/batches\/msgbatch_\w+$/.test(url)) return json({ id: 'msgbatch_test1', processing_status: status, results_url: 'https://api.anthropic.com/v1/messages/batches/msgbatch_test1/results' });
    if (url.endsWith('/results')) {
      const linie = Object.entries(odpowiedzi).map(([k, o]) => JSON.stringify({ custom_id: `pr-${k}`, result: { type: 'succeeded', message: { stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify(o) }], usage: { input_tokens: 10, output_tokens: 20 } } } }));
      return { ok: true, status: 200, text: async () => linie.join('\n') };
    }
    return { ok: false, status: 404, json: async () => ({ error: { message: 'nie ma' } }) };
  };
  return { fetchFn, wywolania };
}
const cicho = () => {};

test('main bez klucza: tylko szacunek, zero wywołań sieci, kod 0, plik szacunek.json', async () => {
  const root = projekt(); const wy = join(root, 'raport'); const a = atrapa();
  const kod = await main(['--wyjscie', wy], {}, { fetchFn: a.fetchFn, log: cicho, root });
  assert.equal(kod, 0);
  assert.equal(a.wywolania.length, 0);
  const s = czytaj(join(wy, 'szacunek.json'));
  assert.equal(s.jezykow, 4);
  assert.match(s.zrodlo, /przybliżenie/);
  assert.ok(s.koszt_usd > 0);
});

test('main z kluczem bez --wyslij: tylko count_tokens (darmowe), żadnego batcha', async () => {
  const root = projekt(); const a = atrapa();
  const kod = await main(['--wyjscie', join(root, 'r')], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root });
  assert.equal(kod, 0);
  assert.ok(a.wywolania.length > 0 && a.wywolania.every((w) => w.url.endsWith('/messages/count_tokens')));
  assert.equal(a.wywolania[0].naglowki['x-api-key'], 'sk-ant-test-0000000000');
});

test('main: szacunek powyżej limitu zatrzymuje przebieg (kod 3) przed wysłaniem batcha', async () => {
  const root = projekt(); const a = atrapa();
  const kod = await main(['--wyslij', '--limit', '0.000001', '--wyjscie', join(root, 'r')], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root });
  assert.equal(kod, 3);
  assert.ok(!a.wywolania.some((w) => w.url.endsWith('/messages/batches')));
});

test('main --wyslij bez klucza: kod 2, nic nie wysłano', async () => {
  const root = projekt(); const a = atrapa();
  assert.equal(await main(['--wyslij', '--wyjscie', join(root, 'r')], {}, { fetchFn: a.fetchFn, log: cicho, root }), 2);
  assert.equal(a.wywolania.length, 0);
});

test('main --wyslij z atrapą: batch, raport z propozycjami; klucz nie trafia do raportu ani logu', async () => {
  const root = projekt(); const wy = join(root, 'r'); const a = atrapa(); const log = [];
  const klucz = 'sk-ant-test-SEKRET-0000000000';
  const kod = await main(['--wyslij', '--jezyki', 'fr', '--wyjscie', wy, '--czekaj-min', '1'], { ANTHROPIC_API_KEY: klucz }, { fetchFn: a.fetchFn, log: (s) => log.push(s), root, spij: async () => {} });
  assert.equal(kod, 0);
  const batch = a.wywolania.find((w) => w.url.endsWith('/messages/batches'));
  assert.equal(batch.cialo.requests.length, 1);
  assert.equal(batch.cialo.requests[0].custom_id, 'pr-fr');
  const r = czytaj(join(wy, 'fr.json'));
  assert.equal(r.status, 'do przeglądu');
  assert.equal(r.przyjete, 7);
  assert.equal(r.odrzucone.length, 0);
  assert.equal(r.batch_id, 'msgbatch_test1');
  const wszystko = readdirSync(wy).map((f) => readFileSync(join(wy, f), 'utf8')).join('\n') + log.join('\n');
  assert.ok(!wszystko.includes('SEKRET'));
});

test('main --wznow: tylko odbiór wyników istniejącego batcha, bez szacunku i bez nowego batcha', async () => {
  const root = projekt(); const a = atrapa();
  const kod = await main(['--wznow', 'msgbatch_test1', '--jezyki', 'fr', '--wyjscie', join(root, 'r')], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root, spij: async () => {} });
  assert.equal(kod, 0);
  assert.ok(!a.wywolania.some((w) => w.metoda === 'POST'));
});

test('main: batch w toku po czasie oczekiwania → kod 4 z poleceniem --wznow', async () => {
  const root = projekt(); const a = atrapa({ status: 'in_progress' }); const log = [];
  const kod = await main(['--wyslij', '--jezyki', 'fr', '--czekaj-min', '0', '--wyjscie', join(root, 'r')], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: (s) => log.push(s), root, spij: async () => {} });
  assert.equal(kod, 4);
  assert.match(log.join('\n'), /--wznow msgbatch_test1/);
});

/* ---------- nałożenie po przeglądzie ---------- */

test('zastosuj: zapisuje przekłady ze statusem „do przeglądu” poza kartami i stroną; publikacja bez zmian', async () => {
  const root = projekt(); const wy = join(root, 'r'); const a = atrapa();
  await main(['--wyslij', '--jezyki', 'fr', '--wyjscie', wy], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root, spij: async () => {} });
  const p = zastosuj(root, wy);
  assert.equal(p.kart, 1);
  const k = czytaj(join(root, 'docs/tresci/przeklady/fr/warianty/s.json'));
  assert.equal(k.status, 'do przeglądu');
  assert.equal(k.jezyk, 'fr');
  assert.equal(k.karta.ostrzezenia[0].claim, 'SUS-050');
  assert.equal(k.karta.ostrzezenia[0].tekst, 'Congeler à 0 °F (−18 °C) ou moins. [T:SUS-050]');
  assert.equal(czytaj(join(root, 'docs/tresci/przeklady/fr/slugi.json')).status, 'do przeglądu');
  assert.equal(existsSync(join(root, 'docs/tresci/karty/fr')), false);
  assert.equal(existsSync(join(root, 'site/slugi/fr.json')), false);
  assert.equal(existsSync(join(root, 'site/tresci/fr')), false);
});

test('zastosuj: karta z odrzuconym zdaniem albo zmienionym źródłem nie jest zapisywana', async () => {
  const root = projekt(); const wy = join(root, 'r');
  const zly = { ...FR, 'karta/s/sekcje/0/akapito/0': 'x', 'karta/s/sekcje/0/akapity/0': 'Laisser 1 pouce (environ 2,5 cm). [T:FRZ-065]' };
  const a = atrapa({ odpowiedzi: { fr: zly } });
  await main(['--wyslij', '--jezyki', 'fr', '--wyjscie', wy], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a.fetchFn, log: cicho, root, spij: async () => {} });
  const p = zastosuj(root, wy);
  assert.equal(p.kart, 0);
  assert.ok(p.pominiete.some((x) => /s: niekompletna/.test(x)));
  // źródło zmienione po przekładzie
  const root2 = projekt(); const wy2 = join(root2, 'r'); const a2 = atrapa();
  await main(['--wyslij', '--jezyki', 'fr', '--wyjscie', wy2], { ANTHROPIC_API_KEY: 'sk-ant-test-0000000000' }, { fetchFn: a2.fetchFn, log: cicho, root: root2, spij: async () => {} });
  writeFileSync(join(root2, 'docs/tresci/karty/en/warianty/s.json'), JSON.stringify({ ...karta, tytul: 'Frozen strawberries' }));
  const p2 = zastosuj(root2, wy2);
  assert.equal(p2.kart, 0);
  assert.ok(p2.pominiete.some((x) => /źródło zmienione/.test(x)));
});
