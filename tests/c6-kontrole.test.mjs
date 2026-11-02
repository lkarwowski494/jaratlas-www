// 07-jakosc C6: backlog P2 kontroli i niezmienników (docs/tresci/C6-fix-p2-2026-11-02.md).
// Każdy test odtwarza lukę opisaną w raporcie źródłowym i był czerwony na 03d6aa7.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { porownaj, symbole, liczby as liczbyPrzekladu } from '../tools/i18n/niezmienniki.mjs';
import { liczby, sprawdzTekst } from '../tools/kontrole-tresci.mjs';
import { kontrolaOstrzezen } from '../site/kontrole.mjs';
import { karty } from '../tools/karty-tresci.mjs';
import { twierdzeniaInnejMetody, WSPOLNE } from '../tools/twierdzenia-metody.mjs';

const katalogSeed = () => JSON.parse(readFileSync(new URL('../catalog/catalog-seed.json', import.meta.url), 'utf8'));
const rodzaje = (p) => p.map((x) => x.rodzaj);

/* ---------- C2-06: „percent” ↔ „%” i „mg” (docs/tresci/E1-suszenie-wzor-2026-11-02.md §Luki) ---------- */

test('C2-06: „percent” w en to ten sam symbol co „%” w przekładzie', () => {
  assert.deepEqual(symbole('about 20 percent moisture'), ['%']);
  assert.deepEqual(porownaj('They should contain about 10 percent moisture. [T:SUS-017]', 'Powinny zawierać ok. 10% wilgoci. [T:SUS-017]', 'pl'), []);
  assert.deepEqual(porownaj('a 30 percent syrup', 'syrop 30 procent', 'pl'), []);
  assert.deepEqual(porownaj('cover with cold 50 percent syrup', 'zalej zimnym syropem 50-procentowym', 'pl'), []); // forma z prawdziwych kart (currant-v15)
  // „percent” zamieniony na inną jednostkę nadal jest wykrywany
  assert.ok(rodzaje(porownaj('about 10 percent moisture', 'ok. 10 g wilgoci', 'pl')).includes('symbole'));
});

test('C2-06: „mg” jest symbolem jednostki: zgubiony albo zmieniony na g jest wykrywany', () => {
  assert.deepEqual(symbole('500 mg of ascorbic acid'), ['mg']);
  assert.deepEqual(porownaj('Use 500 mg of ascorbic acid.', 'Użyj 500 mg kwasu askorbinowego.', 'pl'), []);
  assert.ok(rodzaje(porownaj('Use 500 mg of ascorbic acid.', 'Użyj 500 kwasu askorbinowego.', 'pl')).includes('symbole'));
  assert.ok(rodzaje(porownaj('Use 500 mg of ascorbic acid.', 'Użyj 500 g kwasu askorbinowego.', 'pl')).includes('symbole'));
});

/* ---------- C2-07: liczby sklejone z literami („O157:H7”) ---------- */

test('C2-07: zmiana serotypu O157:H7 w przekładzie jest wykrywana (mutacja 55)', () => {
  const en = 'E. coli O157:H7 can survive drying. [T:SUS-030]';
  assert.deepEqual(porownaj(en, 'E. coli O157:H7 może przetrwać suszenie. [T:SUS-030]', 'pl'), []);
  assert.ok(rodzaje(porownaj(en, 'E. coli O158:H7 może przetrwać suszenie. [T:SUS-030]', 'pl')).includes('liczby'));
  assert.ok(rodzaje(porownaj(en, 'E. coli O157:H8 może przetrwać suszenie. [T:SUS-030]', 'pl')).includes('liczby'));
  // litera przed łącznikiem nie robi z liczby ujemnej: „H-7” to 7, nie −7
  assert.deepEqual(liczbyPrzekladu('strain H-7', 'en').wartosci, ['7']);
});

/* ---------- C2-08: ułamek mieszany „2 1/2” w kontrolach treści ---------- */

test('C2-08: „2 1/2” to jedna liczba 2,5, „1/2” to 0,5', () => {
  assert.deepEqual(liczby('Stir 2 1/2 tablespoons into 1 quart.').map((n) => n.wartosc), [2.5, 1]);
  assert.deepEqual(liczby('leave 1/2 inch, then 2–2 1/2 in').map((n) => n.wartosc), [0.5, 2, 2.5]);
  assert.deepEqual(liczby('ok. 2,5 łyżki').map((n) => n.wartosc), [2.5]);
});

test('C2-08: karta „2 1/2” zgodna z rejestrem „2,5”; „2 1/2” nie przechodzi, gdy rejestr ma osobno 2 i 1/2', () => {
  const rej = (tw) => [{ id: 'X-1', status: 'potwierdzone', twierdzenie: tw }];
  assert.deepEqual(sprawdzTekst('Stir 2 1/2 tablespoons of crystals. [T:X-1]', rej('Wmieszać 2,5 łyżki kryształków.')).bledy, []);
  assert.deepEqual(sprawdzTekst('Stir 2 1/2 tablespoons of crystals. [T:X-1]', rej('Wmieszać 2 1/2 łyżki kryształków.')).bledy, []);
  const b = sprawdzTekst('Stir 2 1/2 cups and leave headspace. [T:X-1]', rej('2 szklanki; 1/2 cala wolnej przestrzeni.')).bledy;
  assert.equal(b.length, 1);
  assert.match(b[0], /liczba 2 1\/2 nie występuje/);
});

/* ---------- C3-09: R3 bez warunku ui[lang] (docs/tresci/C3-audyt-spojnosci-2026-11-02.md) ---------- */

test('C3-09: R3 zgłasza brak uwagi D-027 (c) także wtedy, gdy język nie ma tekstów interfejsu', () => {
  const strony = [{ typ: 'wariant', lang: 'en', id: 'x' }];
  const katalog = { variants: [{ id: 'x', cardType: null }] };
  const tresci = { en: { warianty: { x: { ostrzezenia: [] } } } };
  assert.deepEqual(kontrolaOstrzezen(strony, katalog, tresci, { en: { uwagaBezpieczenstwa: 'Uwaga.' } }), []);
  assert.deepEqual(kontrolaOstrzezen(strony, katalog, tresci, {}), ['en: pusta uwaga D-027 (c)']);
  assert.deepEqual(kontrolaOstrzezen(strony, katalog, tresci, { en: { uwagaBezpieczenstwa: '  ' } }), ['en: pusta uwaga D-027 (c)']);
});

/* ---------- C6 pkt 5: ID twierdzenia z kart innej metody (incydent C4: SLO-350 w leafy-greens-v13) ---------- */

const podmien = (lista, lang, id, z, na) => lista.map((k) => (k.lang === lang && k.id === id ? { ...k, karta: JSON.parse(JSON.stringify(k.karta).replace(z, na)) } : k));

test('C6-5: prawdziwe karty: każde twierdzenie w kartach jednej metody albo na liście wspólnych (0 błędów)', () => {
  assert.deepEqual(twierdzeniaInnejMetody(karty(), katalogSeed()), []);
});

test('C6-5: mutacja incydentu C4 — SLO-350 (wekowanie) w karcie mrożenia leafy-greens-v13 jest wykrywana', () => {
  const lista = podmien(karty(), 'en', 'leafy-greens-v13', 'SLO-289', 'SLO-350');
  const b = twierdzeniaInnejMetody(lista, katalogSeed());
  assert.equal(b.length, 1);
  assert.match(b[0], /leafy-greens-v13.*SLO-350.*freezer.*water-bath/);
});

test('C6-5: twierdzenie wspólne nie przechodzi do trzeciej metody (ACI-195 w karcie lodówkowej)', () => {
  assert.ok(WSPOLNE['ACI-195']?.includes('freezer'));
  const lista = podmien(karty(), 'pl', 'cucumber-v01', 'ACI-018', 'ACI-195');
  const b = twierdzeniaInnejMetody(lista, katalogSeed());
  assert.equal(b.length, 1);
  assert.match(b[0], /cucumber-v01.*ACI-195.*refrigerator/);
});
