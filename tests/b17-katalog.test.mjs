// B17 (D-043): wpis twierdzeń C12 (suszenie, E1-suszenie-zrodla-p2) do rejestru z przeglądem D-027 d i statusy wariantów, które odblokowują; katalog 1.0.12.
// Decyzja: 2026-11-02-jaratlas-b17-katalog (decyzja Claude, do weta). Wejście: raport B15 (tabela „tylko notatka”), decyzje C12-D5–D8, D12–D15,
// C9-D6 (chosen, bez weta), polityka-zrodel-ryzyko (ok-zrodlo = szczebel 1–3). Osobny plik, żeby nie kolidować z torem A.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { validateCatalog } from '../tools/validate-catalog.mjs';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const e1 = JSON.parse(readFileSync('docs/tresci/E1-suszenie-zrodla-p2-2026-11-02.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = '2026-11-02-jaratlas-b17-katalog';
// Cytat skrócony po D-027 d (fragment z innej kolumny źródła); każdy pozostały fragment musi być w cytacie z pliku E1.
const CYTAT_POPRAWIONY = new Set(['SUS-331']);
const s0 = (t) => t.zrodla[0].cytat.split(' … ').map((f) => f.trim()).filter(Boolean);
const nota = (id) => V.get(id).notes.find((n) => n.startsWith('[B17]') && n.includes(DEC));
const h = (x) => createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));

// Twierdzenia C12 wpisane do rejestru; SUS-339–341 przenumerowane do klastrów tematycznych (B15-D6, B17-D1:
// MIE-116–129 zarezerwowane w B7-D7 „wolne do toru”, więc biltong dostaje MIE-130; MLE-067–069 to pula C10 pilnowana w tests/b12, więc nabiał dostaje MLE-070–071). SUS-328 poza rejestrem: źródło HTTP 403 przy D-027 d (B17-D2).
export const NOWE = {
  'SUS-324': 'SUS-324', 'SUS-327': 'SUS-327', 'SUS-329': 'SUS-329', 'SUS-330': 'SUS-330', 'SUS-331': 'SUS-331',
  'SUS-337': 'SUS-337', 'SUS-338': 'SUS-338', 'MLE-070': 'SUS-339', 'MLE-071': 'SUS-340', 'MIE-130': 'SUS-341', 'SUS-342': 'SUS-342',
};

// do-researchu → ok-zrodlo: claims i źródła (cytat 1:1 z pierwszego źródła wskazanych twierdzeń rejestru, szczebel 1–3).
const OK = {
  'lemon-v13': { claims: ['SUS-329', 'SUS-330'], zrodla: ['SUS-329', 'SUS-330'], ostrz: [] },
  'lemon-v15': { claims: ['SUS-331', 'SUS-001', 'SUS-018', 'SUS-019'], zrodla: ['SUS-331'], ostrz: [] },
  'orange-kumquat-v14': { claims: ['SUS-331', 'SUS-001', 'SUS-018', 'SUS-019', 'SUS-184'], zrodla: ['SUS-331'], ostrz: [] },
  'grapefruit-v09': { claims: ['SUS-331', 'SUS-001', 'SUS-018', 'SUS-019'], zrodla: ['SUS-331'], ostrz: [] },
  'poultry-v14': { claims: ['SUS-342', 'MIE-021', 'MIE-036', 'MIE-037', 'MIE-038', 'MIE-039', 'MIE-040', 'MIE-041', 'MIE-042'], zrodla: ['SUS-342'], ostrz: ['SUS-342'] },
  'peach-nectarine-v01': { claims: ['ACI-641', 'ACI-642', 'ACI-643', 'ACI-016', 'ACI-018', 'ACI-133', 'SLO-127', 'SLO-144'], zrodla: ['ACI-641', 'ACI-642', 'ACI-643'], ostrz: ['ACI-643', 'SLO-127'] },
};
// do-researchu → ryzyko-wysokie (karta-ostrzeżenie): twierdzenie krytyczne C12 w claims i requiredWarnings; źródła bez zmian.
const RW = {
  'wild-garlic-v07': ['SUS-337', 'SUS-338'], 'wild-garlic-v11': ['SUS-337', 'SUS-338'],
  'rosehip-rowan-v02': ['SUS-327'], 'rosehip-rowan-v07': ['SUS-327'], 'rosehip-rowan-v10': ['SUS-327'], 'rosehip-rowan-v12': ['SUS-327'],
  'yogurt-skyr-v11': ['MLE-070'], 'quark-acid-cheese-v12': ['MLE-070'], 'beef-veal-v09': ['MIE-130'],
};
// Status bez zmian, dochodzi ostrzeżenie (requiredWarnings) z nowego twierdzenia.
const OSTRZ = { 'wild-garlic-v09': ['SUS-337'], 'raspberry-blackberry-v15': ['SUS-324'] };
// Pola, które B17 wolno zmienić; reszta przypięta skrótem stanu sprzed B17 (katalog 1.0.11, 71155f8), bez historii git (CI: płytki klon).
export const POLA = Object.fromEntries([
  ...Object.keys(OK).map((id) => [id, ['safetyStatus', 'claims', 'sources', 'requiredWarnings', 'notes', ...(OK[id].nazwa ? ['name'] : [])]]),
  ...Object.keys(RW).map((id) => [id, ['safetyStatus', 'cardType', 'claims', 'requiredWarnings', 'notes']]),
  ...Object.keys(OSTRZ).map((id) => [id, ['claims', 'requiredWarnings', 'notes']]),
]);
const SNAP = {"lemon-v13":"3eb134996b82","lemon-v15":"c2bef80d9774","orange-kumquat-v14":"77461427d195","grapefruit-v09":"b76abb6078f2","poultry-v14":"91e4b5faa7ca","peach-nectarine-v01":"ac08de31b270","wild-garlic-v07":"d357330bea4f","wild-garlic-v11":"9dee88491ef7","rosehip-rowan-v02":"86574d7de08e","rosehip-rowan-v07":"ded2db06f425","rosehip-rowan-v10":"505d39d8524c","rosehip-rowan-v12":"ba6e24f5f73f","yogurt-skyr-v11":"a0b9c96fd48d","quark-acid-cheese-v12":"f68698303ce4","beef-veal-v09":"5be4ea70ea6b","wild-garlic-v09":"3b1b6f092073","raspberry-blackberry-v15":"8861767fdfd0"};

test('B17: katalog 1.0.12 przechodzi walidację bez błędów', () => {
  assert.equal(cat.version, '1.0.12');
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test('B17: twierdzenia C12 w rejestrze jak w pliku E1 (cytaty 1:1), potwierdzone z przeglądem zastępczym; stare numery SUS-339–341 nieużyte', () => {
  const E = new Map(e1.twierdzenia.map((t) => [t.id, t]));
  for (const [id, z] of Object.entries(NOWE)) {
    const t = R.get(id), o = E.get(z);
    assert.ok(t, id);
    assert.equal(t.status, 'potwierdzone', id);
    assert.equal(t.krytyczne, o.krytyczne, `${id}: krytyczne`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, 'weryfikacja zastępcza (subagent)', `${id}: przegląd D-027 d`);
    assert.equal(t.weryfikacjaZastepcza, '2026-11-02', `${id}: weryfikacja D-027 d także dla niekrytycznych`);
    assert.equal(t.zrodla.length, o.zrodla.length, `${id}: liczba źródeł`);
    t.zrodla.forEach((s, i) => { for (const k of ['adres', 'szczebel', ...(CYTAT_POPRAWIONY.has(id) ? [] : ['cytat'])]) assert.equal(s[k], o.zrodla[i][k], `${id}: ${k}`); });
    for (const f of s0(t)) assert.ok(o.zrodla[0].cytat.includes(f), `${id}: fragment cytatu „${f.slice(0, 40)}” z pliku E1`);
    if (id !== z) assert.ok(t.pochodzenie.includes(z), `${id}: pochodzenie wskazuje ${z}`);
  }
  for (const id of ['SUS-339', 'SUS-340', 'SUS-341']) assert.equal(R.get(id), undefined, `${id} przeniesione`);
  assert.equal(R.get('SUS-328'), undefined, 'SUS-328: źródło niedostępne przy D-027 d, poza rejestrem');
  assert.ok(!R.get('SUS-331').zrodla[0].cytat.includes('any citrus'), 'SUS-331: fragment z kolumny o mrożeniu usunięty (D-027 d)');
  for (const id of ['lemon-v12', 'orange-kumquat-v11', 'grapefruit-v06']) assert.equal(V.get(id).safetyStatus, 'do-researchu', `${id}: SUS-328 niezweryfikowane`);
  assert.equal(new Set(rej.map((t) => t.id)).size, rej.length, 'ID w rejestrze unikalne');
});

test('B17: ok-zrodlo tylko ze źródłem szczebla 1–3 z rejestru (cytat 1:1), potwierdzone claims i ostrzeżenia', () => {
  for (const [id, o] of Object.entries(OK)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ok-zrodlo', id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    for (const c of [...v.claims, ...(v.requiredWarnings ?? [])]) assert.equal(R.get(c)?.status, 'potwierdzone', `${id}: ${c}`);
    for (const c of o.ostrz) assert.ok(v.requiredWarnings.includes(c), `${id}: ostrzeżenie ${c}`);
    assert.equal(v.sources.length, o.zrodla.length, `${id}: sources`);
    o.zrodla.forEach((t, i) => {
      const z = R.get(t).zrodla[0], s = v.sources[i];
      assert.ok([1, 2, 3].includes(s.szczebel), `${id}: szczebel 1–3`);
      for (const k of ['adres', 'miejsce', 'cytat', 'odczyt', 'szczebel']) assert.equal(s[k], z[k], `${id}: ${k} jak w ${t}`);
    });
    if (o.nazwa) assert.equal(v.name.pl, o.nazwa, id);
    assert.equal(v.cardType, undefined, id);
    assert.ok(nota(id), `${id}: notatka [B17]`);
  }
  assert.ok(R.get('ACI-643').twierdzenie.includes('tylko słoiki pint'), 'peach-nectarine-v01: tylko pint (C9-D6)');
});

test('B17: ryzyko-wysokie jako karta-ostrzeżenie z twierdzeniem krytycznym C12; blokada wild-garlic-v07 zostaje', () => {
  for (const [id, cs] of Object.entries(RW)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
    assert.equal(v.cardType, 'warning', id);
    for (const c of cs) {
      assert.ok(v.claims.includes(c) && v.requiredWarnings.includes(c), `${id}: ${c} w claims i requiredWarnings`);
      assert.equal(R.get(c).krytyczne, true, `${id}: ${c} krytyczne`);
    }
    assert.ok(nota(id), `${id}: notatka [B17]`);
  }
  assert.equal(V.get('wild-garlic-v07').publicationHold?.decyzja, '2026-11-02-jaratlas-b15-katalog');
  for (const [id, cs] of Object.entries(OSTRZ)) for (const c of cs) assert.ok(V.get(id).requiredWarnings.includes(c) && V.get(id).claims.includes(c), `${id}: ${c}`);
  assert.equal(V.get('wild-garlic-v09').safetyStatus, 'ok-zrodlo');
  assert.equal(V.get('raspberry-blackberry-v15').safetyStatus, 'do-researchu', 'C12-D3: brak procedury 1:1 dla liści malin');
});

test('B17: poza polami z listy warianty bez cichych zmian (skrót stanu sprzed B17); publication ukryta w całym katalogu', () => {
  assert.deepEqual(Object.keys(SNAP).sort(), Object.keys(POLA).sort());
  for (const [id, keys] of Object.entries(POLA)) assert.equal(h(bez(V.get(id), keys)), SNAP[id], `${id}: pola poza ${keys.join(', ')} bez zmian`);
  assert.equal(cat.variants.filter((v) => v.publication !== 'ukryta').length, 0, 'publication: 0 zmian, wszystko ukryta');
  // SUS-328 niezweryfikowane (HTTP 403): warianty kandyzowanej skórki bez żadnej zmiany (skrót całego wariantu w 1.0.11).
  const CALE = { 'lemon-v12': 'c85f9f079485', 'orange-kumquat-v11': '7e496e6edc80', 'grapefruit-v06': '6b58f6e0d198' };
  for (const [id, x] of Object.entries(CALE)) assert.equal(h(V.get(id)), x, `${id}: bez zmian`);
});
