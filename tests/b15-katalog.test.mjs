// B15 (D-043): porcja katalogowa po pilotażu B14 i decyzjach właściciela z 2026-11-02, katalog 1.0.11.
// Decyzja: 2026-11-02-jaratlas-b15-katalog (decyzja Claude, do weta). Osobny plik, żeby nie kolidować z torem A.
// Wejście: docs/tresci/B14-pilotaz-zrodel-2026-11-02.md (§5, §8), decisions 2026-11-02-jaratlas-polityka-zrodel-ryzyko
// (ok-zrodlo = szczebel 1–3), 2026-11-02-jaratlas-d1-punkty-sporne-wlasciciel (P-02, P-06, P-12, P-15, P-16), C12 SUS-338.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { validateCatalog } from '../tools/validate-catalog.mjs';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = '2026-11-02-jaratlas-b15-katalog';
const BAZA = '8001640'; // origin/claude/happy-brown-yncplj przed B15
const nota = (id) => V.get(id).notes.find((n) => n.startsWith('[B15]') && n.includes(DEC));
const zBazy = (plik) => { try { return JSON.parse(execFileSync('git', ['show', `${BAZA}:${plik}`], { encoding: 'utf8', maxBuffer: 1 << 28 })); } catch { return null; } };

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
const NAZWY = { 'plum-v14': 'dżem śliwkowy z pektyną', 'currant-v13': 'kompot z czerwonej porzeczki', 'currant-v10': 'sok z czerwonej porzeczki z sokownika' };
// Tylko notatka [B15] (warunek z zlecenia niespełniony albo skutek C12 bez twierdzenia w rejestrze).
const NOTA = ['currant-v11', 'apple-v11', 'lemon-v12', 'orange-kumquat-v11', 'olives-v14', 'rosehip-rowan-v02', 'rosehip-rowan-v07',
  'rhubarb-v07', 'lemon-v11', 'peach-nectarine-v10', 'mustard-v10', 'shallot-pearl-onion-v10', 'raspberry-blackberry-v15', 'grapefruit-v06'];
const ZMIENIONE = new Set([...Object.keys(OK), ...Object.keys(HOLD), ...NOTA]);

test('B15: katalog 1.0.11 przechodzi walidację bez błędów', () => {
  assert.equal(cat.version, '1.0.11');
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

test('B15: warianty tylko z notatką mają status, claims, sources i nazwę jak w bazie', () => {
  const baza = zBazy('catalog/catalog-seed.json');
  assert.ok(baza, 'baza w historii git');
  const B = new Map(baza.variants.map((v) => [v.id, v]));
  for (const id of NOTA) {
    const v = V.get(id), b = B.get(id);
    assert.ok(nota(id), `${id}: notatka [B15]`);
    for (const k of ['safetyStatus', 'claims', 'sources', 'name', 'publication']) assert.deepEqual(v[k], b[k], `${id}: ${k}`);
  }
});

test('B15: poza listą zmian katalog identyczny z bazą; publication 0 zmian; rejestr bez zmian', () => {
  const baza = zBazy('catalog/catalog-seed.json');
  const B = new Map(baza.variants.map((v) => [v.id, v]));
  assert.equal(cat.variants.length, baza.variants.length);
  for (const v of cat.variants) {
    assert.equal(v.publication, B.get(v.id).publication, `${v.id}: publication`);
    if (!ZMIENIONE.has(v.id)) assert.deepEqual(v, B.get(v.id), `${v.id}: bez zmian`);
  }
  for (const k of ['categories', 'processFamilies', 'products']) assert.deepEqual(cat[k], baza[k], k);
  const rb = zBazy('docs/tresci/rejestr.json');
  assert.deepEqual(rej, rb, 'rejestr bez zmian (0 dodanych, 0 zmienionych, 0 usuniętych)');
});
