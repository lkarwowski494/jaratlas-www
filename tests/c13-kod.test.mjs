// C13 (tor C, 2026-11-02): pole powodu karty-ostrzeżenia (B18-D2, E3-karty-p33 §2). Dane [PRZYKŁAD], nie treść merytoryczna.
// Słownik zamknięty: brak-sprawdzonego-zrodla tylko przy nie-publikowac (karta ryzyko-wysokie nie może sugerować, że brakuje „tylko źródła”).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateCatalog, POWODY_OSTRZEZENIA, WYJATKI_NISKOKWASOWE } from '../tools/validate-catalog.mjs';
import { generuj } from '../site/generuj.mjs';
import { kontrolaPowoduOstrzezenia } from '../site/kontrole.mjs';

const claim = { id: 'T-1', twierdzenie: 'x', status: 'potwierdzone', krytyczne: true, zrodla: [{ adres: 'https://nchfp.uga.edu/', miejsce: 'm', cytat: 'c', odczyt: '2026-11-01', szczebel: 1 }] };
const katalogW = (extra) => ({
  version: 'test',
  processFamilies: [{ id: 'canned-foods', allowedMethods: ['water-bath'], thresholds: [], prohibitions: [] }],
  products: [{ id: 'apple', acidity: 'acid', acidityClaim: 'T-1' }],
  variants: [{ id: 'apple-v01', productId: 'apple', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'natural-acid', safetyStatus: 'nie-publikowac', cardType: 'warning', claims: ['T-1'], sources: [], publication: 'ukryta', scope: 'in', ...extra }],
});
const errs = (extra) => validateCatalog(katalogW(extra), [claim]).errors;

test('C13: słownik powodów jest zamknięty i zamrożony; brak-sprawdzonego-zrodla tylko przy nie-publikowac', () => {
  assert.ok(Object.isFrozen(POWODY_OSTRZEZENIA));
  assert.deepEqual(Object.keys(POWODY_OSTRZEZENIA), ['brak-sprawdzonego-zrodla']);
  assert.deepEqual([...POWODY_OSTRZEZENIA['brak-sprawdzonego-zrodla'].statusy], ['nie-publikowac']);
});

test('C13: karta-ostrzeżenie bez warningReason przechodzi walidator (stan istniejących kart)', () => {
  assert.deepEqual(errs({}), []);
});

test('C13: warningReason ze słownika przy nie-publikowac przechodzi', () => {
  assert.deepEqual(errs({ warningReason: 'brak-sprawdzonego-zrodla' }), []);
});

test('C13: warningReason spoza słownika to błąd (także pusty napis i nie-napis)', () => {
  for (const w of ['brak-zrodla', '', 'constructor', 1, null]) assert.ok(errs({ warningReason: w }).some((e) => /apple-v01.*warningReason/.test(e)), String(w));
});

test('C13: warningReason przy ryzyko-wysokie to błąd (powód „brak źródła” zaniżałby ryzyko)', () => {
  assert.ok(errs({ safetyStatus: 'ryzyko-wysokie', warningReason: 'brak-sprawdzonego-zrodla' }).some((e) => /apple-v01.*warningReason.*ryzyko-wysokie/.test(e)));
});

test('C13: warningReason bez cardType warning to błąd', () => {
  const e = errs({ safetyStatus: 'ok-zrodlo', cardType: undefined, sources: [{ adres: 'https://nchfp.uga.edu/', miejsce: 'm', cytat: 'c', odczyt: '2026-11-01', szczebel: 1 }], warningReason: 'brak-sprawdzonego-zrodla' });
  assert.ok(e.some((x) => /apple-v01.*warningReason.*cardType/.test(x)), e.join('\n'));
});

test('C13: prawdziwy katalog nie ma dziś warningReason (pole dodaje rola 06; C13 nie zmienia catalog-seed.json)', () => {
  const cat = JSON.parse(readFileSync(new URL('../catalog/catalog-seed.json', import.meta.url), 'utf8'));
  assert.deepEqual(cat.variants.filter((v) => Object.hasOwn(v, 'warningReason')).map((v) => v.id), []);
});

// Szablon i kontrola buildu
const pub = { publication: 'opublikowana', scope: 'in', content: 'tak' };
const kat = (extra = {}) => ({ processFamilies: [], products: [{ id: 'beans' }], variants: [{ id: 'beans-v01', productId: 'beans', safetyStatus: 'nie-publikowac', cardType: 'warning', requiredWarnings: ['SZY-006'], ...pub, ...extra }] });
const slugi = { en: { rodziny: { _prefiks: 'processes' }, produkty: { beans: 'beans' }, warianty: { 'beans-v01': 'beans-water-bath' } } };
const tresci = { en: { warianty: { 'beans-v01': { tytul: 'Beans', wstep: 'w', sekcje: [], ostrzezenia: [{ claim: 'SZY-006', tekst: 'Pressure only.' }] } }, rodziny: {} } };
const uiBaza = { uwagaBezpieczenstwa: 'U', zrodla: 'Z', ostrzezenia: 'O', wariant: 'W', status: 'S', statusy: {}, produkty: 'P', rodziny: 'R', opisStronyJezyka: 'D', nazwyProduktow: { beans: 'Beans' } };
const bud = (extra, ui = uiBaza) => generuj({ katalog: kat(extra), slugi, tresci, ui: { en: ui }, nazwyJezykow: { en: 'English' }, dozwolZaslepki: true });
const PLIK = 'en/beans/beans-water-bath/index.html';

test('C13: karta-ostrzeżenie z warningReason pokazuje tekst powodu z ui (rola 04), po ostrzeżeniach, bez reklam i Recipe', () => {
  const { bledy, pliki } = bud({ warningReason: 'brak-sprawdzonego-zrodla' }, { ...uiBaza, powodyOstrzezenia: { 'brak-sprawdzonego-zrodla': 'No checked source <b>' } });
  assert.deepEqual(bledy, []);
  const h = pliki[PLIK];
  assert.match(h, /<p data-powod="brak-sprawdzonego-zrodla">No checked source &lt;b&gt;<\/p>/);
  assert.ok(h.indexOf('data-ostrzezenia') < h.indexOf('data-powod'), 'powód po ostrzeżeniach');
  assert.ok(h.indexOf('data-powod') < h.indexOf('data-uwaga="D-027c"'), 'powód przed uwagą D-027 (c)');
  assert.ok(!h.includes('data-ad-slot') && !h.includes('"Recipe"'));
});

test('C13: karta-ostrzeżenie bez warningReason: bez elementu powodu i bez błędu, także gdy ui nie ma powodów', () => {
  const { bledy, pliki } = bud({});
  assert.deepEqual(bledy, []);
  assert.ok(!pliki[PLIK].includes('data-powod'));
});

test('C13: warningReason bez tekstu w ui to błąd buildu (bez zastępstwa kluczem); obiekt zamiast napisu też', () => {
  for (const ui of [uiBaza, { ...uiBaza, powodyOstrzezenia: {} }, { ...uiBaza, powodyOstrzezenia: { 'brak-sprawdzonego-zrodla': '  ' } }, { ...uiBaza, powodyOstrzezenia: { 'brak-sprawdzonego-zrodla': { a: 'x' } } }]) {
    const { bledy } = bud({ warningReason: 'brak-sprawdzonego-zrodla' }, ui);
    assert.ok(bledy.some((b) => /en\/beans-v01.*powodu.*brak-sprawdzonego-zrodla/.test(b)), JSON.stringify(bledy));
  }
});

test('C13: klucz z prototypu (constructor) nie daje tekstu powodu', () => {
  const st = [{ typ: 'wariant', lang: 'en', id: 'beans-v01' }];
  const b = kontrolaPowoduOstrzezenia(st, kat({ warningReason: 'constructor' }), { en: { powodyOstrzezenia: {} } });
  assert.equal(b.length, 1);
});

test('C13: tekst [DO USTALENIA] w powodzie łapie R2 (bez dozwolZaslepki)', () => {
  const { bledy } = generuj({ katalog: kat({ warningReason: 'brak-sprawdzonego-zrodla' }), slugi, tresci, ui: { en: { ...uiBaza, powodyOstrzezenia: { 'brak-sprawdzonego-zrodla': '[DO USTALENIA]' } } }, nazwyJezykow: { en: 'English' } });
  assert.ok(bledy.some((b) => /DO USTALENIA/.test(b)), JSON.stringify(bledy));
});

// Krok 2 (B25-D2): fig-pomegranate-v09 bez wyjątku niskokwasowego (wariant ostrożniejszy; uzasadnienie w raporcie C13).
test('C13: fig-pomegranate-v09 nie ma wpisu WYJATKI_NISKOKWASOWE i zostaje do-researchu', () => {
  assert.ok(!Object.hasOwn(WYJATKI_NISKOKWASOWE, 'fig-pomegranate-v09'));
  const cat = JSON.parse(readFileSync(new URL('../catalog/catalog-seed.json', import.meta.url), 'utf8'));
  const v = cat.variants.find((x) => x.id === 'fig-pomegranate-v09');
  assert.equal(v.safetyStatus, 'do-researchu');
  assert.notEqual(v.publication, 'opublikowana');
});
