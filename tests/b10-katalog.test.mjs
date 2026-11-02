// B10 (D-043): porcja katalogowa ze statusami z raportów C8 (kąpiel wodna p1) i B9 (lodówka p1), katalog 1.0.7.
// Osobny plik, żeby nie kolidować z torem A (tests/catalog.test.mjs). Decyzja: 2026-11-02-jaratlas-06-b10-katalog-c8-b9.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));

const OK = ['cucumber-v10', 'cucumber-v12', 'green-cherry-tomato-v03', // C8
  'cucumber-v17', 'european-mixed-veg-v05', 'european-mixed-veg-v03', 'shallot-pearl-onion-v01', 'radish-v03', 'radish-v05', 'daikon-black-radish-v03', 'garlic-v07']; // B9
// Ostrzeżenia obowiązkowe (requiredWarnings) dla kart-ostrzeżeń; podzbiór claims.
const RYZYKO = {
  'cucumber-v19': ['OLE-001', 'OLE-028'], 'carrot-v04': ['ACI-005', 'ACI-016', 'ACI-449'], 'chili-pepper-v17': ['ACI-449'],
  'potato-sunchoke-v05': ['ACI-446', 'ACI-449'], 'beetroot-v11': ['ACI-447', 'ACI-449'],
  'pumpkin-v03': ['ACI-444', 'ACI-445'], 'pumpkin-v04': ['ACI-444', 'ACI-445'], 'pumpkin-v05': ['ACI-444', 'ACI-445'], 'pumpkin-v07': ['ACI-444', 'ACI-445'],
  'pumpkin-v11': ['ACI-441', 'ACI-444', 'ACI-445'], 'elderberry-elderflower-v01': ['ACI-450', 'ACI-451'],
  'garlic-v04': ['ACI-436', 'ACI-437'], 'garlic-v06': ['ACI-436', 'ACI-437'], 'garlic-v08': ['ACI-436', 'ACI-437'],
  'napa-cabbage-v11': ['SLO-023', 'MIE-059'], 'daikon-black-radish-v07': ['SLO-023', 'MIE-059'], 'wild-garlic-v06': ['SLO-023', 'MIE-059'], 'cultivated-mushrooms-v05': ['SLO-023', 'MIE-059'],
  // SLO-467 (limit 15% owoców) po dwóch przebiegach D-027 nadal CZĘŚCIOWO: robocze, poza ostrzeżeniami.
  'currant-v04': ['SLO-465', 'SLO-469', 'SLO-470'], 'lemon-v05': ['SLO-465', 'SLO-469', 'SLO-470'],
  'lemon-v09': ['SLO-465', 'SLO-468', 'SLO-469', 'SLO-470'], 'ginger-turmeric-v10': ['SLO-465', 'SLO-468', 'SLO-469', 'SLO-470'],
  'onion-v07': ['ACI-524', 'SLO-023', 'MIE-059'], 'carrot-v11': ['SLO-023', 'MIE-059'], 'beetroot-v13': ['SLO-023', 'MIE-059'],
};
const WYCOFANE = { 'corn-v03': 'corn-v04', 'onion-v03': 'shallot-pearl-onion-v05' };
const ZOSTAJA = ['tomatillo-v06', 'cucumber-v11', 'chili-pepper-v04', 'peach-nectarine-v04', 'apple-v08', 'strawberry-v07', 'strawberry-v12', 'rhubarb-v07', 'lemon-v11', 'orange-kumquat-v07',
  'currant-v06', 'currant-v08', 'rosehip-rowan-v06', 'rosehip-rowan-v08', 'chokeberry-seabuckthorn-v07', 'cranberry-lingonberry-v07', 'blueberry-bilberry-v08', 'apple-v11', 'peach-nectarine-v08',
  'european-mixed-veg-v07', 'daikon-black-radish-v04', 'radish-v04', 'napa-cabbage-v09', 'brussels-kohlrabi-v09', 'turnip-rutabaga-v05', 'onion-v05', 'shallot-pearl-onion-v02',
  'shallot-pearl-onion-v03', 'horseradish-v02', 'horseradish-v04', 'carrot-v06', 'white-cabbage-v11', 'cranberry-lingonberry-v05', 'strawberry-v09', 'raspberry-blackberry-v09',
  'blueberry-bilberry-v07', 'cranberry-lingonberry-v02', 'elderberry-elderflower-v06', 'foraged-blossoms-v02', 'pumpkin-v12'];

test('B10: katalog 1.0.7', () => assert.equal(cat.version, '1.0.7'));

test('B10: 78 wariantów C8+B9 rozliczonych dokładnie raz', () => {
  const wszystkie = [...OK, ...Object.keys(RYZYKO), ...Object.keys(WYCOFANE), ...ZOSTAJA];
  assert.equal(wszystkie.length, 78);
  assert.equal(new Set(wszystkie).size, 78);
  for (const id of wszystkie) {
    assert.ok(V.has(id), id);
    assert.equal(V.get(id).publication, 'ukryta', `${id}: karty zostają ukryte`);
    assert.ok(V.get(id).notes.some((n) => n.startsWith('[B10]')), `${id}: notatka [B10]`);
  }
});

test('B10: ok-zrodlo z przepisem szczebla 1–3 i twierdzeniami z C8/B9', () => {
  for (const id of OK) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ok-zrodlo', id);
    assert.equal(v.cardType, undefined, id);
    assert.ok(v.sources.length && v.sources.every((z) => [1, 2, 3].includes(z.szczebel) && z.adres && z.cytat && z.odczyt === '2026-11-02'), id);
  }
});

// Przegląd D-043 (P2, mutanty m15, m18, m20): każdy ok-zrodlo ma komplet twierdzeń przepisu (składniki, procedura, czas albo limit dni) i metodę z przepisu.
const PRZEPIS = {
  'cucumber-v10': ['water-bath', ['ACI-400', 'ACI-401', 'ACI-402', 'ACI-403']], 'cucumber-v12': ['water-bath', ['ACI-404', 'ACI-405', 'ACI-406', 'ACI-407']],
  'green-cherry-tomato-v03': ['water-bath', ['ACI-410', 'ACI-411', 'ACI-412', 'ACI-413']],
  'cucumber-v17': ['refrigerator', ['ACI-503', 'ACI-504', 'ACI-510']], 'european-mixed-veg-v05': ['refrigerator', ['ACI-503', 'ACI-504']], 'european-mixed-veg-v03': ['refrigerator', ['ACI-503', 'ACI-504']],
  'shallot-pearl-onion-v01': ['refrigerator', ['ACI-507']], 'radish-v03': ['refrigerator', ['ACI-505', 'ACI-506']], 'radish-v05': ['refrigerator', ['ACI-505', 'ACI-506']],
  'daikon-black-radish-v03': ['refrigerator', ['ACI-511']], 'garlic-v07': ['refrigerator', ['ACI-512', 'ACI-513']],
};
test('B10 (D-043): ok-zrodlo z kompletem twierdzeń przepisu i metodą przepisu', () => {
  assert.deepEqual(Object.keys(PRZEPIS).sort(), [...OK].sort());
  for (const [id, [metoda, tw]] of Object.entries(PRZEPIS)) {
    assert.equal(V.get(id).preservationMethod, metoda, id);
    for (const c of tw) assert.ok(V.get(id).claims.includes(c), `${id}: ${c}`);
  }
});

// Przegląd D-043 (P2, mutanty m6, m7, m19): czasy wekowania użyte w ok-zrodlo dokładnie, pl i en, z przedziałami wysokości.
test('B10 (D-043): czasy kąpieli wodnej w ACI-402, ACI-406, ACI-412 przypisane do wysokości (pl i en)', () => {
  const CZASY = {
    'ACI-402': ['pint — 0–1000 stóp 10 min, 1001–6000 stóp 15 min, powyżej 6000 stóp 20 min; quart — 0–1000 stóp 15 min, 1001–6000 stóp 20 min, powyżej 6000 stóp 25 min',
      'pints — 0–1,000 ft 10 min, 1,001–6,000 ft 15 min, above 6,000 ft 20 min; quarts — 0–1,000 ft 15 min, 1,001–6,000 ft 20 min, above 6,000 ft 25 min'],
    'ACI-406': ['0–1000 stóp 10 min, 1001–6000 stóp 15 min, powyżej 6000 stóp 20 min', '0–1,000 ft 10 min, 1,001–6,000 ft 15 min, above 6,000 ft 20 min'],
    'ACI-412': ['tylko słoiki quart: 0–1000 stóp 15 min, 1001–6000 stóp 20 min, powyżej 6000 stóp 25 min', 'quart jars only: 0–1,000 ft 15 min, 1,001–6,000 ft 20 min, above 6,000 ft 25 min'],
  };
  for (const [id, [pl, en]] of Object.entries(CZASY)) {
    assert.ok(R.get(id).twierdzenie.includes(pl), `${id} pl`);
    assert.ok(R.get(id).twierdzenie_en.includes(en), `${id} en`);
    assert.equal(R.get(id).status, 'potwierdzone', id);
  }
});

test('B10: ryzyko-wysokie jako karta-ostrzeżenie z obowiązkowymi ostrzeżeniami', () => {
  for (const [id, w] of Object.entries(RYZYKO)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
    assert.equal(v.cardType, 'warning', id);
    for (const c of w) {
      assert.ok((v.requiredWarnings ?? []).includes(c), `${id} ostrzeżenie ${c}`);
      assert.ok(v.claims.includes(c), `${id}: ostrzeżenie ${c} także w claims`);
    }
  }
});

test('B10: duplikaty C8-D9 wycofane z następcą, następca żywy', () => {
  for (const [id, nast] of Object.entries(WYCOFANE)) {
    assert.equal(V.get(id).retired?.replacedBy, nast, id);
    assert.equal(V.get(id).retired?.decision, '2026-11-02-jaratlas-06-b10-katalog-c8-b9', id);
    assert.equal(V.get(nast).retired, undefined, nast);
  }
});

test('B10: proste zmiany nazw przy ok-zrodlo (nazwa = przepis)', () => {
  for (const [id, n] of Object.entries({
    'cucumber-v10': 'konserwowe z koprem (octowe, wekowane)',
    'green-cherry-tomato-v03': 'zielone pomidorki po koszersku z koprem i papryką',
    'tomatillo-v06': 'salsa verde z tomatillo do słoików',
  })) assert.equal(V.get(id).name.pl, n, id);
  assert.ok(!/piecz/i.test(V.get('tomatillo-v06').name.pl), 'C8: pieczenie poza przepisem NCHFP');
});

test('B10: pozostałe warianty zostają do-researchu (zmiana nie jest prosta albo brak źródła)', () => {
  for (const id of ZOSTAJA) assert.equal(V.get(id).safetyStatus, 'do-researchu', id);
});

test('B10: rejestr ma ACI-400–496, ACI-500–525, SLO-460–473, NAP-063 bez kluczy tymczasowych', () => {
  const ids = [];
  for (let i = 400; i <= 496; i++) ids.push(`ACI-${i}`);
  for (let i = 500; i <= 525; i++) ids.push(`ACI-${i}`);
  for (let i = 460; i <= 473; i++) ids.push(`SLO-${i}`);
  ids.push('NAP-063');
  for (const id of ids) {
    const t = R.get(id);
    assert.ok(t, id);
    assert.ok(['potwierdzone', 'robocze'].includes(t.status), id);
    assert.ok(/^[A-Z].*[.)]$/s.test(t.twierdzenie_en.trim()), `${id}: twierdzenie_en jako pełne zdanie`);
    if (t.status === 'potwierdzone') assert.equal(t.przeglad?.kto, 'weryfikacja zastępcza (subagent)', id);
  }
  // Niepotwierdzone po D-027 (robocze) nie trafiają do katalogu; wszystkie pozostałe potwierdzone.
  const robocze = ['ACI-428', 'ACI-515', 'ACI-523', 'SLO-467', 'NAP-063'];
  for (const id of ids) assert.equal(R.get(id).status, robocze.includes(id) ? 'robocze' : 'potwierdzone', id);
  for (const v of cat.variants) for (const c of [...(v.claims ?? []), ...(v.requiredWarnings ?? [])]) assert.ok(!robocze.includes(c), `${v.id}: ${c} robocze`);
  // Czasy wekowania przypisane do przedziałów wysokości (SPRZECZNE w 1. przebiegu D-027).
  for (const id of ['ACI-402', 'ACI-406', 'ACI-462', 'ACI-469', 'ACI-475']) assert.ok(/1001–6000 stóp/.test(R.get(id).twierdzenie) && /powyżej 6000 stóp/.test(R.get(id).twierdzenie), id);
  assert.ok(!JSON.stringify(cat).includes('K-SLO') && !JSON.stringify(cat).includes('K-NAP'));
  assert.ok(!rej.some((t) => 'klucz_tymczasowy' in t || 'robocze_id' in t || 'warianty' in t));
});

test('B10 (backlog p25): wild-mushrooms-v09 źródła o grzybach, nie procedura suszenia warzyw', () => {
  const v = V.get('wild-mushrooms-v09');
  assert.deepEqual(v.sources.map((z) => z.adres), ['https://www.gov.pl/web/psse-warszawa/grzyby--wybieraj-bezpiecznie', 'https://extension.colostate.edu/resource/drying-vegetables/']);
  assert.ok(v.sources[1].miejsce.includes('przypis'), 'CSU: przypis o toksynach (SUS-035), nie wstęp procedury');
  for (const c of ['SUS-035', 'SUS-141']) assert.ok(v.claims.includes(c) && R.get(c).zrodla.some((z) => z.adres === v.sources.find((s) => s.adres === z.adres)?.adres), c);
  assert.equal(v.safetyStatus, 'ryzyko-wysokie');
});
