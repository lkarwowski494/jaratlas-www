// Leksykon jednostek pl w niezmiennikach przekładu (rola 09): odmiana „galon” i „quart”.
// Luka z raportu docs/tresci/E3-karty-p14-2026-11-02.md (sekcja o kodzie): leksykon nie znał „galonu”, „galonie”, „quarta”, „quartem”…,
// więc poprawne polskie zdania dawały fałszywy alarm „jednostki”, a karty pisały nieodmienne „1/2 galon” i „quart”.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { jednostki, porownaj, pary } from '../tools/i18n/niezmienniki.mjs';

const GALON = ['galon', 'galonu', 'galonowi', 'galonem', 'galonie', 'galony', 'galonów', 'galonom', 'galonami', 'galonach'];
const QUART = ['quart', 'quarta', 'quartowi', 'quartem', 'quarcie', 'quarty', 'quartów', 'quartom', 'quartami', 'quartach', 'quarts'];

test('pl: każda forma „galon” to gallon', () => {
  for (const f of GALON) assert.deepEqual(jednostki(`1 ${f}`, 'pl'), ['gallon'], f);
});

test('pl: każda forma „quart” to quart', () => {
  for (const f of QUART) assert.deepEqual(jednostki(`1 ${f}`, 'pl'), ['quart'], f);
});

test('pl: dotychczasowe formy kwarty i pinty nadal rozpoznane', () => {
  for (const f of ['kwarta', 'kwartę', 'kwarcie', 'kwarty', 'kwartach']) assert.deepEqual(jednostki(`1 ${f}`, 'pl'), ['quart'], f);
  for (const f of ['pinta', 'pintę', 'pincie', 'pinty', 'pintach']) assert.deepEqual(jednostki(`1 ${f}`, 'pl'), ['pint'], f);
});

test('pl: odmienione zdania kart przechodzą bez problemów', () => {
  const zdania = [
    ['Do not freeze fruits or vegetables in containers holding more than 1/2 gallon (about 1.9 l).', 'Nie zamrażaj owoców ani warzyw w pojemnikach większych niż pół galona, czyli 1/2 galonu (ok. 1,9 l).'],
    ['Use 1 gallon of water per pound of vegetables.', 'Na funt warzyw użyj wody w ilości 1 galonu.'],
    ['Blanch in 1 gallon of boiling water.', 'Blanszuj w 1 galonie wrzącej wody.'],
    ['Do not use containers larger than a quart (about 0.95 l).', 'Nie używaj pojemników większych od quarta (ok. 0,95 l).'],
    ['Leave 1 inch of headspace in a quart.', 'W quarcie zostaw 1 cal wolnej przestrzeni.'],
    ['Pack 2 quarts of fruit.', 'Zapakuj 2 quarty owoców.'],
  ];
  for (const [en, pl] of zdania) assert.deepEqual(porownaj(en, pl, 'pl'), [], pl);
});

test('pl: liczba wiąże się z odmienioną jednostką (pary)', () => {
  assert.deepEqual(pary('1/2 galonu i 2 quartami', 'pl'), ['1/2 gallon', '2 quart']);
});

test('pl: zła jednostka nadal odrzucana', () => {
  assert.ok(porownaj('Use 1 gallon of water.', 'Użyj 1 quarta wody.', 'pl').some((p) => p.rodzaj === 'jednostki'));
  assert.ok(porownaj('Use 1 quart of water.', 'Użyj 1 galonu wody.', 'pl').some((p) => p.rodzaj === 'jednostki'));
  // słowa podobne, ale nie jednostki: bez dopasowania (granica słowa)
  assert.deepEqual(jednostki('galonowy kwartet quartet', 'pl'), []);
});
