// P1 (pokrycie źródeł): dopasowanie wariantów do-researchu do indeksu nazw przepisów testowanych.
// Wynik narzędzia to lista kandydatów do researchu, nie ocena źródła (decyzja 2026-11-02-jaratlas-pokrycie-zrodel).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  METODY, normalizuj, typPrzepisu, typyWariantu, terminyProduktu, zgodnoscMetody, dopasujWariant, dopasujWszystko,
  walidujIndeks, podsumuj,
} from '../tools/dopasuj-indeks.mjs';

const NARZEDZIE = new URL('../tools/dopasuj-indeks.mjs', import.meta.url).pathname;

const produkty = [
  { id: 'peach-nectarine', name: { pl: 'Brzoskwinia i nektarynka' } },
  { id: 'chili-pepper', name: { pl: 'Papryczki ostre' } },
  { id: 'cucumber', name: { pl: 'Ogórek' } },
  { id: 'blueberry-bilberry', name: { pl: 'Jagoda leśna i borówka amerykańska' } },
  { id: 'aged-hard-cheese', name: { pl: 'Sery dojrzewające' } },
];
const W = (id, productId, pl, preservationMethod, processFamilyId, safetyStatus = 'do-researchu') =>
  ({ id, productId, name: { pl }, preservationMethod, processFamilyId, safetyStatus });
const P = (nazwa, metoda, adres = 'https://example.edu/' + encodeURIComponent(nazwa)) => ({ nazwa, metoda, adres });
const indeks = (przepisy, extra = {}) => ({
  zrodla: [{ zrodlo: 'Test', wydawca: 'Test Ext', szczebel: 3, adres: 'https://example.edu/', data_odczytu: '2026-11-02', przepisy, ...extra }],
});

test('normalizuj: małe litery, bez diakrytyków i interpunkcji', () => {
  assert.equal(normalizuj('Dżem  Brzoskwiniowy, z WANILIĄ!'), 'dzem brzoskwiniowy z wanilia');
  assert.equal(normalizuj('Jalapeño-Pepper Jelly'), 'jalapeno pepper jelly');
});

test('typPrzepisu rozpoznaje rodzaj z angielskiej nazwy', () => {
  assert.equal(typPrzepisu('Peach Jam with Pectin'), 'dzem');
  assert.equal(typPrzepisu('Hot Pepper Jelly'), 'galaretka');
  assert.equal(typPrzepisu('Bread-and-Butter Pickles'), 'marynata');
  assert.equal(typPrzepisu('Apple Butter'), 'mus');
  assert.equal(typPrzepisu('Peach Salsa'), 'salsa');
  assert.equal(typPrzepisu('Sauerkraut'), 'kiszonka');
  assert.equal(typPrzepisu('Beef Jerky'), 'suszone');
  assert.equal(typPrzepisu('Peaches - Halved or Sliced'), null);
});

test('typyWariantu czyta polską nazwę i rodzinę procesu', () => {
  assert.ok(typyWariantu(W('a', 'peach-nectarine', 'dżem brzoskwiniowy z wanilią', 'water-bath', 'sweet-preserves')).has('dzem'));
  assert.ok(typyWariantu(W('b', 'chili-pepper', 'galaretka z papryczek', 'water-bath', 'sweet-preserves')).has('galaretka'));
  assert.ok(typyWariantu(W('c', 'cucumber', 'konserwowe z gorczycą', 'water-bath', 'vinegar-pickling')).has('marynata'));
  assert.ok(typyWariantu(W('d', 'cucumber', 'małosolne', 'refrigerator', 'lacto-fermentation')).has('kiszonka'));
});

test('terminyProduktu: słowa angielskie z id produktu i słownika', () => {
  const t = terminyProduktu('peach-nectarine');
  assert.ok(t.some((r) => r.test('peach jam')));
  assert.ok(t.some((r) => r.test('nectarine jam')));
  assert.ok(!t.some((r) => r.test('pear jam')));
  assert.ok(terminyProduktu('chili-pepper').some((r) => r.test('jalapeno pepper jelly')));
});

test('zgodnoscMetody: główna, pomocnicza, brak', () => {
  const wb = W('a', 'peach-nectarine', 'dżem', 'water-bath', 'sweet-preserves');
  assert.equal(zgodnoscMetody(wb, 'kapiel-wodna'), 'glowna');
  assert.equal(zgodnoscMetody(wb, 'mrozenie'), 'pomocnicza');
  assert.equal(zgodnoscMetody(wb, 'peklowanie-wedzenie'), null);
  const ferm = W('d', 'cucumber', 'małosolne', 'refrigerator', 'lacto-fermentation');
  assert.equal(zgodnoscMetody(ferm, 'fermentacja'), 'glowna');
  assert.equal(zgodnoscMetody(ferm, 'kapiel-wodna'), null);
});

test('dopasujWariant: pewne przy zgodnym produkcie, metodzie, typie i dodatkach', () => {
  const w = W('peach-nectarine-v01', 'peach-nectarine', 'dżem brzoskwiniowy', 'water-bath', 'sweet-preserves');
  const r = dopasujWariant(w, [{ ...P('Peach Jam', 'kapiel-wodna'), zrodlo: 'T', szczebel: 3 }], produkty);
  assert.equal(r.wynik, 'pewne');
  assert.equal(r.trafienia[0].nazwa, 'Peach Jam');
});

test('dopasujWariant: dodatek spoza przepisu obniża do możliwe', () => {
  const w = W('peach-nectarine-v02', 'peach-nectarine', 'dżem brzoskwiniowy z wanilią', 'water-bath', 'sweet-preserves');
  const przepisy = [{ ...P('Peach Jam', 'kapiel-wodna'), zrodlo: 'T', szczebel: 3 }];
  assert.equal(dopasujWariant(w, przepisy, produkty).wynik, 'mozliwe');
  const zWanilia = [{ ...P('Vanilla Peach Jam', 'kapiel-wodna'), zrodlo: 'T', szczebel: 3 }];
  assert.equal(dopasujWariant(w, zWanilia, produkty).wynik, 'pewne');
});

test('dopasujWariant: metoda pomocnicza = możliwe; inny typ, produkt albo metoda = brak (inny typ liczony osobno)', () => {
  const w = W('peach-nectarine-v01', 'peach-nectarine', 'dżem brzoskwiniowy', 'water-bath', 'sweet-preserves');
  const z = (p) => [{ ...p, zrodlo: 'T', szczebel: 3 }];
  const mus = dopasujWariant(w, z(P('Peach Butter', 'kapiel-wodna')), produkty);
  assert.equal(mus.wynik, 'brak');
  assert.equal(mus.inny_typ, 1);
  assert.equal(dopasujWariant(w, z(P('Peach Freezer Jam', 'mrozenie')), produkty).wynik, 'mozliwe');
  assert.equal(dopasujWariant(w, z(P('Pear Jam', 'kapiel-wodna')), produkty).wynik, 'brak');
  assert.equal(dopasujWariant(w, z(P('Dried Peaches', 'suszenie')), produkty).wynik, 'brak');
});

test('dopasujWariant: typ przepisu z metody fermentacji; kompot pasuje do owoców w zalewie', () => {
  const z = (p) => [{ ...p, zrodlo: 'T', szczebel: 1 }];
  const ferm = W('cucumber-v02', 'cucumber', 'małosolne', 'refrigerator', 'lacto-fermentation');
  assert.equal(dopasujWariant(ferm, z(P('Dill Pickles', 'fermentacja')), produkty).wynik, 'pewne');
  const kompot = W('peach-nectarine-v13', 'peach-nectarine', 'kompot', 'water-bath', 'canned-foods');
  assert.equal(dopasujWariant(kompot, z(P('Peaches-Halved or Sliced', 'kapiel-wodna')), produkty).wynik, 'pewne');
  assert.equal(dopasujWariant(kompot, z(P('Peach Jam', 'kapiel-wodna')), produkty).wynik, 'brak');
});

test('dopasujWariant: rodziny bez słownika rodzajów (mięso, nabiał) nie sprawdzają typu', () => {
  const pr = [...produkty, { id: 'pork-belly-jowl', name: { pl: 'Boczek, podgardle i słonina' } }];
  const w = W('pork-belly-jowl-v01', 'pork-belly-jowl', 'boczek wędzony na ciepło', 'refrigerator', 'meat-curing-smoking');
  assert.equal(dopasujWariant(w, [{ ...P('Bacon', 'peklowanie-wedzenie'), zrodlo: 'T', szczebel: 3 }], pr).wynik, 'mozliwe');
});

test('dopasujWariant: nieznane słowa w nazwie wariantu blokują pewne', () => {
  const w = W('cucumber-v09', 'cucumber', 'ogórki po kaszubsku', 'water-bath', 'vinegar-pickling');
  const r = dopasujWariant(w, [{ ...P('Dill Pickles', 'kapiel-wodna'), zrodlo: 'T', szczebel: 1 }], produkty);
  assert.equal(r.wynik, 'mozliwe');
});

test('dopasujWariant: wiele trafień — wynik najlepszy, trafienia posortowane (pewne, szczebel)', () => {
  const w = W('peach-nectarine-v01', 'peach-nectarine', 'dżem brzoskwiniowy', 'water-bath', 'sweet-preserves');
  const r = dopasujWariant(w, [
    { ...P('Peach Freezer Jam', 'mrozenie'), zrodlo: 'A', szczebel: 1 },
    { ...P('Peach Jam', 'kapiel-wodna'), zrodlo: 'B', szczebel: 3 },
  ], produkty);
  assert.equal(r.wynik, 'pewne');
  assert.equal(r.trafienia[0].nazwa, 'Peach Jam');
  assert.equal(r.trafienia.length, 2);
});

test('dopasujWszystko: tylko warianty do-researchu; podsumuj liczy wg segmentu', () => {
  const katalog = {
    products: produkty,
    variants: [
      W('peach-nectarine-v01', 'peach-nectarine', 'dżem brzoskwiniowy', 'water-bath', 'sweet-preserves'),
      W('peach-nectarine-v09', 'peach-nectarine', 'dżem', 'water-bath', 'sweet-preserves', 'ok-zrodlo'),
      W('aged-hard-cheese-v01', 'aged-hard-cheese', 'gouda', 'cool-storage', 'dairy-cheese'),
      W('blueberry-bilberry-v09', 'blueberry-bilberry', 'dżem borówkowy z wanilią', 'water-bath', 'sweet-preserves'),
    ],
  };
  const idx = indeks([P('Peach Jam', 'kapiel-wodna'), P('Blueberry Jam', 'kapiel-wodna')]);
  const wyniki = dopasujWszystko(katalog, idx);
  assert.deepEqual(wyniki.map((x) => x.id), ['peach-nectarine-v01', 'aged-hard-cheese-v01', 'blueberry-bilberry-v09']);
  const s = podsumuj(wyniki);
  assert.deepEqual(s.razem, { warianty: 3, pewne: 1, mozliwe: 1, brak: 1 });
  assert.deepEqual(s.segmenty['water-bath × sweet-preserves'], { warianty: 2, pewne: 1, mozliwe: 1, brak: 0 });
  assert.deepEqual(s.segmenty['cool-storage × dairy-cheese'], { warianty: 1, pewne: 0, mozliwe: 0, brak: 1 });
});

test('walidujIndeks: wymagane pola, metoda z listy, szczebel 1–4, unikalne adresy źródeł', () => {
  assert.deepEqual(walidujIndeks(indeks([P('Peach Jam', 'kapiel-wodna')])), []);
  assert.ok(METODY.includes('fermentacja'));
  const bledy = walidujIndeks({ zrodla: [
    { zrodlo: 'X', szczebel: 7, adres: 'https://a/', data_odczytu: '2026-11-02', przepisy: [{ nazwa: '', adres: 'x', metoda: 'gotowanie' }] },
    { zrodlo: 'X', szczebel: 1, adres: 'https://a/', przepisy: [] },
    { zrodlo: 'Z', szczebel: 1, adres: 'https://a/', data_odczytu: '2026-11-02', przepisy: [] },
  ] });
  assert.ok(bledy.some((b) => /szczebel/.test(b)));
  assert.ok(bledy.some((b) => /metoda/.test(b)));
  assert.ok(bledy.some((b) => /nazwa/.test(b)));
  assert.ok(bledy.some((b) => /data_odczytu/.test(b)));
  assert.equal(bledy.filter((b) => /powtórzony adres/.test(b)).length, 1);
  assert.deepEqual(walidujIndeks({}), ['brak tablicy "zrodla"']);
});

test('CLI: kod 0 i podsumowanie; kod 1 przy błędnym indeksie', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'ja-dopasuj-'));
  try {
    const kat = join(tmp, 'k.json');
    const idx = join(tmp, 'i.json');
    const wyj = join(tmp, 'w.json');
    writeFileSync(kat, JSON.stringify({ products: produkty, variants: [W('peach-nectarine-v01', 'peach-nectarine', 'dżem brzoskwiniowy', 'water-bath', 'sweet-preserves')] }));
    writeFileSync(idx, JSON.stringify(indeks([P('Peach Jam', 'kapiel-wodna')])));
    const ok = spawnSync(process.execPath, [NARZEDZIE, kat, idx, '--wynik', wyj], { encoding: 'utf8' });
    assert.equal(ok.status, 0, ok.stderr);
    assert.match(ok.stdout, /pewne 1/);
    writeFileSync(idx, JSON.stringify({ zrodla: [{ zrodlo: 'X' }] }));
    const zle = spawnSync(process.execPath, [NARZEDZIE, kat, idx], { encoding: 'utf8' });
    assert.equal(zle.status, 1);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});
