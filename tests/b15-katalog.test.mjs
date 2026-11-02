// B15 (D-043): porcja katalogowa po pilotażu B14 i decyzjach właściciela z 2026-11-02, katalog 1.0.11.
// Decyzja: 2026-11-02-jaratlas-b15-katalog (decyzja Claude, do weta). Osobny plik, żeby nie kolidować z torem A.
// Wejście: docs/tresci/B14-pilotaz-zrodel-2026-11-02.md (§5, §8), decisions 2026-11-02-jaratlas-polityka-zrodel-ryzyko
// (ok-zrodlo = szczebel 1–3), 2026-11-02-jaratlas-d1-punkty-sporne-wlasciciel (P-02, P-06, P-12, P-15, P-16), C12 SUS-338.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { validateCatalog } from '../tools/validate-catalog.mjs';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = '2026-11-02-jaratlas-b15-katalog';
const nota = (id) => V.get(id).notes.find((n) => n.startsWith('[B15]') && n.includes(DEC));
const h = (x) => createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));

// do-researchu → ok-zrodlo: źródło szczebla 3 już w rejestrze (potwierdzone, D-027), cytat skopiowany 1:1 z rejestru do sources.
const OK = {
  'turnip-rutabaga-v10': { claims: ['SUS-306', 'SUS-039', 'SUS-001', 'SUS-014', 'SUS-017', 'SUS-021', 'SUS-022'], zrodla: ['SUS-306'], nazwa: 'suszona rzepa' },
  'celeriac-celery-v11': { claims: ['SUS-305', 'SUS-001', 'SUS-014', 'SUS-017', 'SUS-021', 'SUS-022'], zrodla: ['SUS-305'], nazwa: 'suszony seler naciowy' },
  'sour-cherry-v16': { claims: ['SUS-321', 'SUS-001', 'SUS-016', 'SUS-018', 'SUS-020', 'SUS-022'], zrodla: ['SUS-321'], nazwa: 'wiśnie suszone po blanszowaniu w syropie' },
  'apricot-v14': { claims: ['SUS-322', 'SUS-001', 'SUS-016', 'SUS-018', 'SUS-020', 'SUS-022'], zrodla: ['SUS-322'], nazwa: 'morele suszone po blanszowaniu w syropie' },
  'leek-chives-v04': { claims: ['NAP-064', 'NAP-065', 'NAP-036', 'NAP-037', 'NAP-038', 'NAP-040', 'NAP-041', 'NAP-042'], zrodla: ['NAP-064', 'NAP-065'], nazwa: 'ocet z kwiatów szczypiorku' },
};
// Blokada publikacji (publicationHold) z decyzji właściciela albo z nowego twierdzenia krytycznego; status i karta bez zmian (tor A).
const HOLD = {
  'apricot-v08': 'P-02', 'corn-v09': 'P-06', 'plum-v14': 'P-15', 'currant-v13': 'P-12',
  'currant-v10': 'P-12', 'grapes-v07': 'P-16', 'raspberry-blackberry-v07': 'P-16', 'wild-garlic-v07': 'SUS-338',
};
const NAZWY = { 'plum-v14': 'dżem śliwkowy z pektyną', 'currant-v13': 'całe czerwone porzeczki w bardzo lekkim syropie', 'currant-v10': 'sok z czerwonych porzeczek z sokownika' };
// Tylko notatka [B15] (warunek z zlecenia niespełniony albo skutek C12 bez twierdzenia w rejestrze).
const NOTA = ['peach-nectarine-v01', 'lemon-v13', 'lemon-v15', 'orange-kumquat-v14', 'grapefruit-v09', 'poultry-v14', 'wild-garlic-v09', 'currant-v11', 'apple-v11', 'lemon-v12', 'orange-kumquat-v11', 'olives-v14', 'rosehip-rowan-v02', 'rosehip-rowan-v07',
  'rhubarb-v07', 'lemon-v11', 'peach-nectarine-v10', 'mustard-v10', 'shallot-pearl-onion-v10', 'raspberry-blackberry-v15', 'grapefruit-v06'];
// Pola, które B15 wolno zmienić; reszta wariantu przypięta skrótem stanu sprzed B15 (katalog 8001640 = 07b373d), bez historii git (CI: płytki klon; D-043 P1-2).
const POLA = Object.fromEntries([
  ...Object.keys(OK).map((id) => [id, ['safetyStatus', 'claims', 'sources', 'notes', ...(id === 'leek-chives-v04' ? ['name', 'processFamilyId', 'acidBasis'] : [])]]),
  ...Object.keys(HOLD).map((id) => [id, ['publicationHold', 'notes', ...(NAZWY[id] ? ['name'] : []), ...(id === 'wild-garlic-v07' ? ['safetyStatus'] : [])]]),
  ...NOTA.map((id) => [id, ['notes']]),
]);
// B17 (2026-11-02-jaratlas-b17-katalog) zmienia te warianty po wpisie twierdzeń C12 do rejestru; ich pola (poza listą B17) przypina skrót stanu 1.0.11
// w tests/b17-katalog.test.mjs, więc tu skrót B15 jest pomijany (wzór B15_OK w testach B12/B13).
const B17 = new Set(['lemon-v12', 'orange-kumquat-v11', 'grapefruit-v06', 'lemon-v13', 'lemon-v15', 'orange-kumquat-v14', 'grapefruit-v09', 'poultry-v14',
  'peach-nectarine-v01', 'wild-garlic-v07', 'rosehip-rowan-v02', 'rosehip-rowan-v07', 'wild-garlic-v09', 'raspberry-blackberry-v15']);
const SNAP = {"turnip-rutabaga-v10":"5ab4236b5bb9","celeriac-celery-v11":"5a2fb4106535","sour-cherry-v16":"51738d1c6120","apricot-v14":"5cb658d44985","leek-chives-v04":"0add7a32dc70","apricot-v08":"979cfe7d64bb","corn-v09":"2679b9d33ce3","plum-v14":"b231f3437679","currant-v13":"9a2ffc1c8356","currant-v10":"b4ab5b7ce402","grapes-v07":"99f7ec809b0a","raspberry-blackberry-v07":"e8796d463f94","wild-garlic-v07":"cf981b958ab9","peach-nectarine-v01":"f9c9dff0e482","lemon-v13":"5baf6a3c7cce","lemon-v15":"28ed9500e863","orange-kumquat-v14":"ef7a077d0f37","grapefruit-v09":"0bf1c2aa60f0","poultry-v14":"211dae92480c","wild-garlic-v09":"5b03cfc30629","currant-v11":"741e41ea8c65","apple-v11":"2dafe4a256ad","lemon-v12":"8813d20a7e2a","orange-kumquat-v11":"f4721f42752d","olives-v14":"c687ae513fe8","rosehip-rowan-v02":"aa1e64bbb360","rosehip-rowan-v07":"12f72cfe0d1d","rhubarb-v07":"fa7b61a8fbd0","lemon-v11":"21352862d35c","peach-nectarine-v10":"8ceeabcc5d5b","mustard-v10":"3ef7ace8be34","shallot-pearl-onion-v10":"249c419d0c07","raspberry-blackberry-v15":"a5f3ba345ec5","grapefruit-v06":"16a13ec99701"};

test('B15: katalog 1.0.11 przechodzi walidację bez błędów', () => {
  assert.ok(cat.version.split('.').map(Number).reduce((a, n) => a * 1000 + n) >= 1000011, `wersja ${cat.version} co najmniej 1.0.11 (B17: 1.0.12)`);
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test('B15: ok-zrodlo tylko ze źródłem szczebla 1–3 z rejestru (cytat 1:1, twierdzenia potwierdzone), bez SLO-069', () => {
  for (const [id, o] of Object.entries(OK)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ok-zrodlo', id);
    assert.equal(v.name.pl, o.nazwa, id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    for (const c of v.claims) assert.equal(R.get(c)?.status, 'potwierdzone', `${id}: ${c}`);
    assert.ok(!v.claims.includes('SLO-069'), `${id}: SLO-069 nie nadaje ok-zrodlo (p28 §3)`);
    assert.equal(v.sources.length, o.zrodla.length, `${id}: sources`);
    o.zrodla.forEach((t, i) => {
      const z = R.get(t).zrodla[0], s = v.sources[i];
      assert.ok([1, 2, 3].includes(s.szczebel), `${id}: szczebel 1–3`);
      for (const k of ['adres', 'miejsce', 'cytat', 'odczyt', 'szczebel']) assert.equal(s[k], z[k], `${id}: ${k} jak w ${t}`);
    });
    assert.equal(v.publication, 'ukryta', id);
    assert.equal(v.cardType, undefined, id);
    assert.ok(nota(id), `${id}: notatka [B15]`);
  }
  const l = V.get('leek-chives-v04');
  assert.equal(l.processFamilyId, 'vinegar-making');
  assert.equal(l.preservationMethod, 'refrigerator');
  assert.equal(l.acidBasis, 'not-applicable');
  assert.ok(l.sources[0].cytat.includes('chive blossoms'), 'OSU wymienia kwiaty szczypiorku');
  assert.ok(!l.claims.includes('ACI-523'), 'ACI-523 robocze poza claims');
});

test('B15: blokada publikacji z decyzji d1-punkty-sporne i SUS-338; walidator odrzuca publikację z blokadą', () => {
  for (const [id, p] of Object.entries(HOLD)) {
    const v = V.get(id);
    assert.equal(v.publication, 'ukryta', id);
    assert.ok(v.publicationHold?.decyzja && v.publicationHold.powod.includes(p), `${id}: publicationHold ${p}`);
    assert.ok(nota(id), `${id}: notatka [B15]`);
  }
  for (const id of ['apricot-v08', 'corn-v09', 'plum-v14', 'currant-v13', 'currant-v10', 'grapes-v07', 'raspberry-blackberry-v07']) assert.equal(V.get(id).publicationHold.decyzja, '2026-11-02-jaratlas-d1-punkty-sporne-wlasciciel', id);
  assert.equal(V.get('wild-garlic-v07').publicationHold.decyzja, DEC);
  for (const [id, n] of Object.entries(NAZWY)) assert.equal(V.get(id).name.pl, n, id);
  const k = structuredClone(cat);
  k.variants.find((v) => v.id === 'grapes-v07').publication = 'opublikowana';
  assert.ok(validateCatalog(k, rej).errors.some((e) => /grapes-v07: blokada publikacji/.test(e)), 'opublikowana z blokadą = błąd');
  const k2 = structuredClone(cat);
  k2.variants.find((v) => v.id === 'corn-v09').publicationHold = { decyzja: 'zła', powod: 'x' };
  assert.ok(validateCatalog(k2, rej).errors.some((e) => /corn-v09: publicationHold/.test(e)), 'decyzja musi być ID tablicy');
  const k3 = structuredClone(cat);
  k3.variants.find((v) => v.id === 'corn-v09').publicationHold = { decyzja: '2026-11-02-jaratlas-x', powod: '' };
  assert.ok(validateCatalog(k3, rej).errors.some((e) => /corn-v09: publicationHold/.test(e)), 'powód wymagany');
});

test('B15: poza polami z listy warianty B15 bez cichych zmian (skrót stanu sprzed B15); publication ukryta', () => {
  assert.deepEqual(Object.keys(SNAP).sort(), Object.keys(POLA).sort());
  for (const [id, keys] of Object.entries(POLA)) {
    const v = V.get(id);
    if (!B17.has(id)) assert.equal(h(bez(v, keys)), SNAP[id], `${id}: pola poza ${keys.join(', ')} bez zmian`);
    assert.equal(v.publication, 'ukryta', id);
    if (NOTA.includes(id)) assert.ok(nota(id), `${id}: notatka [B15]`);
  }
  assert.notEqual(V.get('wild-garlic-v07').safetyStatus, 'ok-zrodlo', 'SUS-338: wariant ostrożniejszy (B15 do-researchu, B17 ryzyko-wysokie)');
  assert.equal(V.get('currant-v11').safetyStatus, 'do-researchu', 'ACI-610 nie wymienia porzeczek');
  assert.equal(V.get('olives-v14').safetyStatus, 'do-researchu');
});

test('B15 (p30): slugi plum-v14 bez renklod, currant-v13 bez „kompot”', () => {
  const pl = JSON.parse(readFileSync('site/slugi/pl.json', 'utf8')).warianty, en = JSON.parse(readFileSync('site/slugi/en.json', 'utf8')).warianty;
  assert.equal(pl['plum-v14'], 'dzem-sliwkowy');
  assert.equal(en['plum-v14'], 'plum-jam');
  assert.equal(pl['currant-v13'], 'cale-w-bardzo-lekkim-syropie');
  for (const s of [pl, en]) assert.ok(!Object.values(s).some((x) => /renklod|greengage/.test(x)), 'brak slugów z renklodą');
});
