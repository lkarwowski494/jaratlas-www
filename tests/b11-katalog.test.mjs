// B11 (D-043): porcja katalogowa ze statusami z raportu C9 (kąpiel wodna p2), katalog 1.0.8.
// Osobny plik, żeby nie kolidować z torem A. Decyzja: 2026-11-02-jaratlas-06-b11-katalog-c9.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const c9 = JSON.parse(readFileSync('docs/tresci/E1-kapiel-zrodla-p2-2026-11-02.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = '2026-11-02-jaratlas-06-b11-katalog-c9';

// Ostrzeżenia obowiązkowe (requiredWarnings) kart-ostrzeżeń; podzbiór claims (B11-D4).
const RYZYKO = {
  'peach-nectarine-v10': ['ACI-067', 'E3-001'], 'plum-v12': ['ACI-067'], 'sweet-cherry-v10': ['ACI-067', 'SLO-201'],
  'strawberry-v10': ['ACI-068', 'ACI-604'], 'chokeberry-seabuckthorn-v06': ['SLO-068', 'SLO-051'],
  'plum-v09': ['ACI-465', 'SLO-021', 'ACI-014'], 'pear-v10': ['ACI-632'], 'plum-v10': ['ACI-632'],
  'cauliflower-v05': ['ACI-005', 'ACI-006', 'ACI-423'], 'tomato-v05': ['ACI-093', 'ACI-107', 'ACI-006'],
  'peach-nectarine-v09': ['ACI-646', 'ACI-107', 'ACI-006'], 'pear-v11': ['ACI-646', 'ACI-127', 'ACI-107', 'ACI-006'],
  'green-cherry-tomato-v10': ['ACI-646', 'ACI-107', 'ACI-006', 'ACI-265'], 'rhubarb-v03': ['ACI-646', 'ACI-107', 'ACI-006'],
  'chili-pepper-v05': ['ACI-094', 'ACI-016', 'ACI-017'],
};
const WYCOFANE = {
  'apple-v15': 'apple-v13', 'pear-v12': 'pear-v07', 'peach-nectarine-v13': 'peach-nectarine-v06',
  'bell-pepper-v02': 'bell-pepper-v01', 'sour-cherry-v07': 'sour-cherry-v11', 'cultivated-mushrooms-v06': 'cultivated-mushrooms-v01',
};
// B11-D2: peach-nectarine-v01 (C9-D6, ok-zrodlo na jednym źródle szczebla 3) zostaje do-researchu do czasu weta.
const ZOSTAJA = ['plum-v11', 'blueberry-bilberry-v06', 'blueberry-bilberry-v12', 'currant-v11', 'blueberry-bilberry-v10', 'rhubarb-v06',
  'cranberry-lingonberry-v11', 'cornelian-cherry-v08', 'chokeberry-seabuckthorn-v09', 'grapefruit-v07', 'raspberry-blackberry-v10', 'gooseberry-v08',
  'orange-kumquat-v09', 'grapes-v08', 'pear-v09', 'apple-v12', 'quince-v09', 'gooseberry-v10', 'cultivated-mushrooms-v01', 'european-mixed-veg-v01'];
// B17: C9-D6 bez weta na tablicy → peach-nectarine-v01 ok-zrodlo (tylko pint); stan pilnuje tests/b17-katalog.test.mjs.
const B17 = new Set(['peach-nectarine-v01']);
const NOWE = Array.from({ length: 47 }, (_, i) => `ACI-${600 + i}`);
const ROBOCZE = ['ACI-631', 'ACI-639']; // po dwóch przebiegach D-027 nadal CZĘŚCIOWO (wady cytatów); bez trzeciego przebiegu (wzór B10-D4)

// Wersja co najmniej 1.0.8: kolejne porcje podnoszą wersję (B11-D8).
const wersja = (s) => s.split('.').map(Number);
test('B11: katalog co najmniej 1.0.8', () => {
  const [a, b] = [wersja(cat.version), wersja('1.0.8')];
  assert.ok(a[0] > b[0] || (a[0] === b[0] && (a[1] > b[1] || (a[1] === b[1] && a[2] >= b[2]))), cat.version);
});

test('B11: 42 warianty C9 rozliczone dokładnie raz, ukryte, z notatką [B11]', () => {
  const wszystkie = [...Object.keys(RYZYKO), ...Object.keys(WYCOFANE), ...ZOSTAJA, ...B17];
  assert.equal(wszystkie.length, 42);
  assert.equal(new Set(wszystkie).size, 42);
  assert.deepEqual([...wszystkie].sort(), c9.warianty.map((w) => w.wariant).sort());
  for (const id of wszystkie) {
    assert.equal(V.get(id).publication, 'ukryta', `${id}: karty zostają ukryte`);
    assert.ok(V.get(id).notes.some((n) => n.startsWith('[B11]') && n.includes(DEC)), `${id}: notatka [B11]`);
  }
});

test('B11: ryzyko-wysokie jako karta-ostrzeżenie z obowiązkowymi ostrzeżeniami (także w claims)', () => {
  for (const [id, w] of Object.entries(RYZYKO)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
    assert.equal(v.cardType, 'warning', id);
    assert.equal(v.retired, undefined, id);
    assert.deepEqual([...(v.requiredWarnings ?? [])].sort(), [...w].sort(), `${id} ostrzeżenia`);
    for (const c of w) assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
  }
});

test('B11: 6 duplikatów C9-D7 wycofanych z następcą, następca żywy', () => {
  for (const [id, nast] of Object.entries(WYCOFANE)) {
    const v = V.get(id);
    assert.equal(v.retired?.replacedBy, nast, id);
    assert.equal(v.retired?.decision, DEC, id);
    if (id === 'cultivated-mushrooms-v06') {
      // B11-D5: C9 proponował ryzyko-wysokie; wycofany z zachowanym statusem ostrzegawczym.
      assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
      assert.equal(v.cardType, 'warning', id);
      assert.deepEqual(v.requiredWarnings, ['ACI-094', 'ACI-006'], id);
      for (const c of v.requiredWarnings) assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
    } else {
      assert.equal(v.safetyStatus, 'do-researchu', `${id}: status bez zmian (wzór B10)`);
      assert.equal(v.cardType, undefined, id);
    }
    assert.equal(V.get(nast).retired, undefined, nast);
  }
});

test('B11: reszta zostaje do-researchu bez zmiany claims, sources i nazwy (peach-nectarine-v01 od B17 ok-zrodlo, C9-D6)', () => {
  // Skrót sha256 (12 znaków) z [claims, sources, name] w katalogu 1.0.7 (accaeb3), przed B11.
  const PRZED = {"plum-v11":"978cf74e6fda","blueberry-bilberry-v06":"c4424f9bda80","blueberry-bilberry-v12":"603ab230fc9c","currant-v11":"cf012b179bc3","blueberry-bilberry-v10":"5cb5ffa3a470","rhubarb-v06":"105db79e1948","cranberry-lingonberry-v11":"ec14442d2b6f","cornelian-cherry-v08":"c291af2aa246","chokeberry-seabuckthorn-v09":"b900643c44bf","grapefruit-v07":"e4c627c98402","raspberry-blackberry-v10":"2bba94e61c0c","gooseberry-v08":"259de2a9a45e","orange-kumquat-v09":"38111691c16e","grapes-v08":"8f870c702d14","pear-v09":"e2f8027a6271","apple-v12":"36dc79727a5d","quince-v09":"cefb4c7d2333","gooseberry-v10":"da1d2569bd17","cultivated-mushrooms-v01":"05802a9bea05","european-mixed-veg-v01":"815ffb6f738f","peach-nectarine-v01":"873f46122f23"};
  assert.deepEqual(Object.keys(PRZED).sort(), [...ZOSTAJA, ...B17].sort()); // B17: skrót sprzed B11 zostaje jako zapis historii
  for (const id of ZOSTAJA) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'do-researchu', id);
    assert.equal(v.cardType, undefined, id);
    assert.equal(v.retired, undefined, id);
    assert.equal(createHash('sha256').update(JSON.stringify([v.claims, v.sources, v.name])).digest('hex').slice(0, 12), PRZED[id], `${id}: claims, sources i nazwa bez zmian`);
  }
});

test('B11: rejestr ma ACI-600–646 jako pełne zdania; potwierdzone mają przegląd D-027; robocze poza katalogiem', () => {
  for (const id of NOWE) {
    const t = R.get(id);
    assert.ok(t, id);
    assert.equal(t.klaster, 'ACI', id);
    assert.equal(t.pochodzenie, 'C9 E1-kapiel-zrodla-p2-2026-11-02', id);
    assert.equal(t.krytyczne, true, id);
    assert.equal(t.status, ROBOCZE.includes(id) ? 'robocze' : 'potwierdzone', id);
    assert.ok(/^[A-Z].*[.)]$/s.test(t.twierdzenie_en.trim()), `${id}: twierdzenie_en jako pełne zdanie`);
    assert.ok(t.zrodla.length && t.zrodla.every((z) => z.adres && z.cytat && z.odczyt && [1, 2, 3].includes(z.szczebel)), `${id}: źródła 1–3`);
    if (t.status === 'potwierdzone') assert.equal(t.przeglad?.kto, 'weryfikacja zastępcza (subagent)', id);
    else assert.equal(t.przeglad, null, id);
    assert.ok(!('robocze_id' in t) && !('warianty' in t), `${id}: bez pól roboczych C9`);
  }
  for (const v of cat.variants) for (const c of [...(v.claims ?? []), ...(v.requiredWarnings ?? [])]) {
    assert.ok(!ROBOCZE.includes(c), `${v.id}: ${c} robocze w katalogu`);
    assert.notEqual(R.get(c)?.status, 'robocze', `${v.id}: ${c} robocze w katalogu`);
  }
  assert.ok(!rej.some((t) => /^ACI-6(4[7-9]|[5-9]\d)$/.test(t.id)), 'ACI-647–699 niewykorzystane');
});

test('B11 (B11-D3): ACI-494 (czasy bez przedziału wysokości, B10 P2 otwarte) poza katalogiem wariantów C9', () => {
  for (const w of c9.warianty) assert.ok(!V.get(w.wariant).claims.includes('ACI-494'), w.wariant);
});

test('B11: twierdzenia C9 o czasach przypisanych do wysokości zachowane dosłownie (pl i en)', () => {
  assert.ok(R.get('ACI-643').twierdzenie.includes('0–1000 stóp 20 minut, 1001–3000 stóp 25 minut, 3001–6000 stóp 30 minut, 6001–10000 stóp 35 minut'));
  assert.ok(R.get('ACI-643').twierdzenie.includes('tylko słoiki pint'));
  // Przegląd D-043 (P2, mutanty m13, m14): także wersja en.
  assert.ok(R.get('ACI-643').twierdzenie_en.includes('pints only: 0–1,000 feet 20 minutes, 1,001–3,000 feet 25 minutes, 3,001–6,000 feet 30 minutes, 6,001–10,000 feet 35 minutes'), 'ACI-643 en');
  assert.ok(R.get('ACI-646').twierdzenie.includes('wymienia cztery przepisy (Apple, Mango, Tomato-Apple, Cranberry Orange)'), 'ACI-646 pl');
  assert.ok(R.get('ACI-646').twierdzenie_en.includes('lists four recipes (Apple, Mango, Tomato-Apple, Cranberry Orange)'), 'ACI-646 en');
});

test('B11 (backlog p26, B11-D9–D11): garlic-v15 nazwa jak w źródle; notatki dla vine-leaves-greens-v11/v12 i red-savoy-cabbage-v11', () => {
  const g = V.get('garlic-v15');
  assert.equal(g.name.pl, 'suszony czosnek drobno posiekany');
  assert.ok(g.claims.includes('SUS-037') && /finely chop/.test(R.get('SUS-037').zrodla.map((z) => z.cytat).join(' ')), 'SUS-037: drobno posiekać');
  assert.equal(g.safetyStatus, 'ok-zrodlo');
  for (const id of ['garlic-v15', 'vine-leaves-greens-v11', 'vine-leaves-greens-v12', 'red-savoy-cabbage-v11']) {
    assert.ok(V.get(id).notes.some((n) => n.startsWith('[B11]') && n.includes(DEC)), `${id}: notatka [B11]`);
    assert.equal(V.get(id).publication, 'ukryta', id);
  }
  assert.equal(V.get('vine-leaves-greens-v11').productId, 'vine-leaves-greens', 'bez przeniesienia (B11-D10)');
});
