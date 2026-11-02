// B12 (D-043): porcja katalogowa ze statusami z raportu C10 (lodówka p2), katalog 1.0.9.
// Osobny plik, żeby nie kolidować z torem A. Decyzja: 2026-11-02-jaratlas-06-b12-katalog-c10.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const c10 = JSON.parse(readFileSync('docs/tresci/E1-lodowka-zrodla-p2-2026-11-02.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = '2026-11-02-jaratlas-06-b12-katalog-c10';

// Ostrzeżenia obowiązkowe kart-ostrzeżeń (B12-D4); podzbiór claims.
const RYZYKO = {
  'mustard-v02': ['ACI-016', 'ACI-509'], 'mustard-v11': ['ACI-006', 'SLO-023'],
  'horseradish-v08': ['ACI-005', 'ACI-006', 'MLE-066'], 'horseradish-v09': ['ACI-101', 'ACI-006'],
  'asian-american-mix-v03': ['SLO-023', 'MIE-059'], 'elderberry-elderflower-v05': ['SLO-480', 'SLO-061', 'SLO-062'],
  'potato-sunchoke-v09': ['ACI-005', 'SLO-023'], 'ginger-turmeric-v11': ['SLO-482', 'ACI-125'],
  'rosehip-rowan-v01': ['SLO-068', 'SLO-472', 'SLO-489'], 'rosehip-rowan-v04': ['SLO-465', 'SLO-468', 'SLO-469', 'SLO-470', 'SLO-489'],
  'lime-bergamot-v04': ['SLO-465', 'SLO-469', 'SLO-470'], 'grapefruit-v08': ['SLO-483', 'SLO-484'],
  'watermelon-melon-v05': ['ACI-066', 'ACI-026', 'SLO-023'], 'foraged-blossoms-v01': ['SLO-486', 'SLO-068', 'SLO-472'],
  'foraged-blossoms-v06': ['SLO-487', 'SLO-489'], 'zucchini-v13': ['ACI-026', 'SLO-023'],
  'pattypan-squash-v10': ['ACI-026', 'ACI-125', 'SLO-023'], 'carrot-v12': ['ACI-005', 'SLO-023'],
  'onion-v08': ['ACI-524', 'SLO-023', 'MIE-059'], 'shallot-pearl-onion-v10': ['ACI-524', 'SLO-023'],
  'fennel-artichoke-v08': ['ACI-005', 'SLO-023'], 'ginger-turmeric-v13': ['ACI-125', 'SLO-023'],
  'quince-v11': ['SLO-465', 'SLO-469', 'SLO-470'], 'sour-cherry-v13': ['SLO-493'],
  'elderberry-elderflower-v09': ['SLO-068', 'SLO-492', 'SLO-489'], 'pineapple-banana-v09': ['SLO-054', 'SLO-023'],
  'fig-pomegranate-v08': ['SLO-054', 'SLO-023'], 'watermelon-melon-v08': ['ACI-026', 'SLO-023'],
  'watermelon-melon-v09': ['ACI-026', 'SLO-023'],
};
// C10-D12; trzy warunkowe (B9) sprawdzone: następcy mają ok-zrodlo od B10 (B12-D2).
const WYCOFANE = {
  'zucchini-v13': 'zucchini-v08', 'peas-chickpeas-v04': 'beans-soy-v01',
  'horseradish-v05': 'horseradish-v01', 'horseradish-v08': 'horseradish-v01', 'horseradish-v09': 'horseradish-v01',
  'shallot-pearl-onion-v08': 'shallot-pearl-onion-v01', 'daikon-black-radish-v10': 'daikon-black-radish-v03', 'european-mixed-veg-v06': 'european-mixed-veg-v05',
};
// Skrót sha256 (12 znaków) z [claims, sources, name] w katalogu 1.0.8 (5709125), przed B12.
const ZOSTAJA = {"mustard-v03":"674ada17dd82","mustard-v04":"d7f711862647","mustard-v05":"3fb48fc92aa5","mustard-v06":"701c7906b018","mustard-v07":"c78adf6af10d","mustard-v08":"f27258068e6b","mustard-v09":"a1f10a530be0","mustard-v10":"e6f434ce3331","mustard-v12":"e4fb7ed884d4","napa-cabbage-v10":"2e322ca6fbff","leek-chives-v04":"73643eb0134f","radish-v09":"d025133e9645","capers-v03":"75ded46def1b","capers-v04":"81792c8540cd","ginger-turmeric-v02":"60ccd132ad5c","ginger-turmeric-v07":"673a266c6a30","foraged-blossoms-v09":"fe7b6319044c","quince-v03":"162b47772aa9","lime-bergamot-v09":"8b1b320d12fd","garden-herbs-v08":"80f26b11758a","garden-herbs-v09":"01420790dcec","garden-herbs-v11":"cbc75e0b1523","foraged-blossoms-v03":"8db0c3f0a35a","foraged-blossoms-v04":"c8016069cb0f","foraged-blossoms-v05":"0a187d39df98","foraged-blossoms-v07":"8d67d115889b","beans-soy-v13":"2c4cd3e970e1","quince-v07":"ab046fb75415","sour-cherry-v12":"e0d1cb65c770","currant-v12":"3c78ab7dd122"};
const NOWE = ['ACI-700', 'ACI-701', 'ACI-702', 'ACI-703', 'ACI-704', 'ACI-705', 'MLE-066', 'NAP-064', 'NAP-065', ...Array.from({ length: 14 }, (_, i) => `SLO-${480 + i}`)];
const ROBOCZE = ['SLO-491']; // po dwóch przebiegach D-027 nadal CZĘŚCIOWO (dodana pewność); bez trzeciego przebiegu (wzór B10-D4)
const KLUCZE = { 'MLE-066': 'K-C10-MLE-1', 'NAP-064': 'K-C10-NAP-1', 'NAP-065': 'K-C10-NAP-2', ...Object.fromEntries(Array.from({ length: 14 }, (_, i) => [`SLO-${480 + i}`, `K-C10-SLO-${i + 1}`])) };

const wersja = (s) => s.split('.').map(Number);
test('B12: katalog co najmniej 1.0.9', () => {
  const [a, b] = [wersja(cat.version), wersja('1.0.9')];
  assert.ok(a[0] > b[0] || (a[0] === b[0] && (a[1] > b[1] || (a[1] === b[1] && a[2] >= b[2]))), cat.version);
});

test('B12: 67 wariantów C10 rozliczone dokładnie raz, ukryte, z notatką [B12]', () => {
  const ryzRetired = Object.keys(RYZYKO).filter((id) => WYCOFANE[id]);
  const wszystkie = [...Object.keys(RYZYKO), ...Object.keys(WYCOFANE).filter((id) => !RYZYKO[id]), ...Object.keys(ZOSTAJA), 'garden-herbs-v10', 'strawberry-v15', 'walnut-nuts-v08'];
  assert.equal(ryzRetired.length, 3);
  assert.equal(wszystkie.length, 67);
  assert.equal(new Set(wszystkie).size, 67);
  assert.deepEqual([...wszystkie].sort(), c10.warianty.map((w) => w.id).sort());
  for (const id of wszystkie) {
    assert.equal(V.get(id).publication, 'ukryta', `${id}: bez publikacji`);
    assert.equal(V.get(id).content, undefined, `${id}: bez nowej karty`);
    assert.ok(V.get(id).notes.some((n) => n.startsWith('[B12]') && n.includes(DEC)), `${id}: notatka [B12]`);
  }
});

test('B12: ryzyko-wysokie jako karta-ostrzeżenie z obowiązkowymi ostrzeżeniami (także w claims)', () => {
  for (const [id, w] of Object.entries(RYZYKO)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
    assert.equal(v.cardType, 'warning', id);
    assert.deepEqual([...(v.requiredWarnings ?? [])].sort(), [...w].sort(), `${id} ostrzeżenia`);
    for (const c of w) assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
    if (!WYCOFANE[id]) assert.equal(v.retired, undefined, id);
  }
});

test('B12: 8 duplikatów C10-D12 wycofanych z następcą ok-zrodlo; status do-researchu bez zmian poza ryzykiem', () => {
  for (const [id, nast] of Object.entries(WYCOFANE)) {
    const v = V.get(id);
    assert.equal(v.retired?.replacedBy, nast, id);
    assert.equal(v.retired?.decision, DEC, id);
    if (!RYZYKO[id]) { assert.equal(v.safetyStatus, 'do-researchu', id); assert.equal(v.cardType, undefined, id); }
    assert.equal(V.get(nast).retired, undefined, nast);
    assert.equal(V.get(nast).safetyStatus, 'ok-zrodlo', `${nast}: następca ok-zrodlo (warunek C10-D12)`);
  }
});

test('B12: reszta zostaje do-researchu bez zmiany claims, sources i nazwy (w tym gianduja i anko, C10-D11)', () => {
  for (const [id, h] of Object.entries(ZOSTAJA)) {
    const v = V.get(id);
    if (v.notes.some((n) => n.startsWith('[B15]'))) continue; // B15 (polityka źródeł wg ryzyka: szczebel 1–3) zmienia wariant; pilnuje tests/b15-katalog.test.mjs
    assert.equal(v.safetyStatus, 'do-researchu', id);
    assert.equal(v.cardType, undefined, id);
    assert.equal(v.retired, undefined, id);
    assert.equal(createHash('sha256').update(JSON.stringify([v.claims, v.sources, v.name])).digest('hex').slice(0, 12), h, `${id}: claims, sources i nazwa bez zmian`);
  }
  const w = V.get('walnut-nuts-v08');
  assert.equal(w.safetyStatus, 'do-researchu');
  assert.equal(w.cardType, undefined);
  assert.ok(w.retired?.reason.startsWith('poza zakresem'), 'walnut-nuts-v08: wcześniejsze wycofanie bez zmian');
  for (const id of ['walnut-nuts-v08', 'beans-soy-v13']) assert.ok(V.get(id).notes.some((n) => n.startsWith('[B12]') && n.includes('C10-D11') && n.includes('właściciel')), `${id}: notatka o decyzji produktowej`);
});

test('B12-D7: garden-herbs-v10 bez twierdzenia zdrowotnego w nazwie, status bez zmian', () => {
  const v = V.get('garden-herbs-v10');
  assert.equal(v.name.pl, 'syrop tymiankowy');
  assert.equal(v.safetyStatus, 'do-researchu');
  assert.ok(!v.claims.includes('SLO-488'), 'SLO-488 (EMA, tymianek) tylko kontekst, nie w claims');
});

test('B12-D3: strawberry-v15 ok-zrodlo tylko z przeczytanym przepisem szczebla 1 pasującym do nazwy; leek-chives-v04 zostaje (OSU szczebel 3)', () => {
  const v = V.get('strawberry-v15');
  assert.equal(v.name.pl, 'niegotowany dżem truskawkowy (lodówka lub zamrażarka)');
  assert.equal(v.safetyStatus, 'ok-zrodlo');
  assert.equal(v.cardType, undefined);
  assert.deepEqual([...v.claims].sort(), ['SLO-020', 'SLO-460', 'SLO-490']);
  for (const c of v.claims) assert.equal(R.get(c)?.status, 'potwierdzone', c);
  const s1 = v.sources.filter((z) => z.szczebel === 1 && z.adres === 'https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jam-uncooked/' && z.odczyt === '2026-11-02');
  assert.ok(s1.some((z) => z.cytat.includes('2 cups crushed strawberries or blackberries')), 'cytat szczebla 1 o truskawkach');
  assert.ok(s1.some((z) => z.cytat.includes('up to 3 weeks in the refrigerator')), 'limit lodówkowy w cytacie');
  // B15: leek-chives-v04 → ok-zrodlo (decyzja polityka-zrodel-ryzyko: szczebel 1–3); stan pilnuje tests/b15-katalog.test.mjs.
  assert.ok(R.get('NAP-064').zrodla.every((z) => z.szczebel === 3), 'NAP-064 tylko szczebel 3');
});

test('B12: rejestr ma 23 nowe wpisy (ACI-700–705, SLO-480–493, NAP-064–065, MLE-066); potwierdzone z przeglądem D-027; robocze poza katalogiem', () => {
  for (const id of NOWE) {
    const t = R.get(id);
    assert.ok(t, id);
    assert.equal(t.klaster, id.split('-')[0], id);
    assert.equal(t.pochodzenie, `C10 E1-lodowka-zrodla-p2-2026-11-02${KLUCZE[id] ? ` (${KLUCZE[id]})` : ''}`, id);
    assert.equal(t.krytyczne, id !== 'SLO-488', id);
    assert.equal(t.status, ROBOCZE.includes(id) ? 'robocze' : 'potwierdzone', id);
    assert.ok(/^[A-Z].*[.)]$/s.test(t.twierdzenie_en.trim()), `${id}: twierdzenie_en jako pełne zdanie`);
    assert.ok(t.zrodla.length && t.zrodla.every((z) => z.adres && z.cytat && z.odczyt && [1, 2, 3].includes(z.szczebel)), `${id}: źródła 1–3`);
    if (t.status === 'potwierdzone' && t.krytyczne) assert.equal(t.przeglad?.kto, 'weryfikacja zastępcza (subagent)', id);
    if (t.status === 'robocze') assert.equal(t.przeglad, null, id);
    assert.ok(!('warianty' in t) && !('klucz_tymczasowy' in t) && !('rejestr_docelowy' in t), `${id}: bez pól roboczych C10`);
  }
  for (const v of cat.variants) for (const c of [...(v.claims ?? []), ...(v.requiredWarnings ?? [])]) assert.notEqual(R.get(c)?.status, 'robocze', `${v.id}: ${c} robocze w katalogu`);
  assert.ok(!rej.some((t) => /^(SLO-4(7[4-9]|9[4-9])|NAP-06[7-9]|MLE-06[7-9]|ACI-70[6-9])$/.test(t.id)), 'nieużyte numery puli wolne'); // NAP-066: douchi z B13 (B13-D6, przydział koordynatora NAP-066–069)
});

test('B12: poprawki D-027 zachowane (czasy według wysokości, granice słów źródła)', () => {
  assert.ok(R.get('ACI-703').twierdzenie.includes('15 minut przy 0–1000 stóp (ok. 0–305 m), 20 minut przy 1001–6000 stóp, 25 minut powyżej 6000 stóp'), 'ACI-703 pl');
  assert.ok(R.get('ACI-703').twierdzenie_en.includes('15 minutes at 0–1000 ft (approx. 0–305 m), 20 minutes at 1001–6000 ft, 25 minutes above 6000 ft'), 'ACI-703 en');
  assert.ok(!/jedyny|only tested/.test(R.get('ACI-703').twierdzenie + R.get('ACI-703').twierdzenie_en), 'ACI-703 bez przypisanej NCHFP wyłączności');
  assert.ok(R.get('ACI-704').twierdzenie.includes('15 min przy 0–1000 stóp') && R.get('ACI-704').twierdzenie.includes('20 min przy 1001–6000 stóp'), 'ACI-704');
  assert.ok(R.get('ACI-701').twierdzenie.includes('10/15/20 min (0–1000 / 1001–6000 / powyżej 6000 stóp)'), 'ACI-701');
  assert.ok(R.get('SLO-481').twierdzenie.includes('„paru tygodni”') && R.get('SLO-481').twierdzenie_en.includes('a couple of weeks'), 'SLO-481: „a couple of weeks” = „paru”');
  assert.ok(R.get('SLO-486').twierdzenie_en.includes('intentional eating of pine needles is not recommended'), 'SLO-486');
  assert.ok(R.get('SLO-484').twierdzenie.includes('zaburzeniami rytmu serca'), 'SLO-484 grupa ryzyka');
  assert.ok(!/\bonly\b/.test(R.get('SLO-491').twierdzenie_en) && R.get('SLO-491').twierdzenie_en.includes('in home canning, adding low-acid ingredients') && R.get('SLO-491').twierdzenie_en.includes('can make the final pH unpredictable'), 'SLO-491 (robocze)');
});

// Przegląd D-043 (P2): strażnik treści twierdzeń, na których stoją ostrzeżenia i przepis tej porcji.
// Skrót sha256 (12 znaków); zmiana twierdzenia to nowy przegląd D-027, więc test ma wtedy paść i zostać świadomie zaktualizowany.
test('B12 (D-043 P2): treść 23 nowych twierdzeń i starych twierdzeń z ostrzeżeń porcji bez cichych zmian', () => {
  const h = (x) => createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0, 12);
  const NOWE_H = {"NAP-064":"6aeb5c79e7fd","NAP-065":"9afb1ee8661c","MLE-066":"f28a3a34b22b","ACI-700":"55a36a6a4fcf","ACI-701":"93e368c26b0c","ACI-702":"effdb03ed7a8","ACI-703":"429b5960aede","ACI-704":"67517279fb42","ACI-705":"53d7d45296f1","SLO-480":"a76ddd6e29c3","SLO-481":"7c6c7b2cc155","SLO-482":"90ad13ff8578","SLO-483":"5a89dd2a3edb","SLO-484":"7330d9767dd5","SLO-485":"7d769beca8d1","SLO-486":"2b039b0c79a0","SLO-487":"5dfc2a2db22a","SLO-488":"2438beb9e401","SLO-489":"d7b37b0e765d","SLO-490":"9fbeb5198446","SLO-491":"ca06ec98a0cb","SLO-492":"2035c4233a5f","SLO-493":"0bc3266b5d0c"};
  // Stare wpisy (stan 5709125) użyte w requiredWarnings i w claims strawberry-v15.
  const STARE_H = {"ACI-005":"b02b334d99a2","ACI-006":"2f6445397073","ACI-016":"52d23776abf9","ACI-026":"d6e2f2d67616","ACI-066":"283d50d80cd4","ACI-101":"f22f7f33c2da","ACI-125":"e5ee646e6797","ACI-509":"27db7671bc35","ACI-524":"1aaaf2bd0e81","MIE-059":"0d025694c50b","SLO-020":"cccc48f9c15e","SLO-023":"b165d3e98bb7","SLO-054":"ae55dec9dc9e","SLO-061":"73861338e6a3","SLO-062":"0b8743509ec9","SLO-068":"a1fd88480ddc","SLO-460":"a391fd80a8ab","SLO-465":"2ed536a4f609","SLO-468":"a9f67b4de0c8","SLO-469":"4d5110c1869d","SLO-470":"c11366ddb1f5","SLO-472":"221e5069d053"};
  assert.deepEqual(Object.keys(NOWE_H).sort(), [...NOWE].sort());
  for (const [id, s] of Object.entries(NOWE_H)) assert.equal(h([R.get(id).twierdzenie, R.get(id).twierdzenie_en, R.get(id).zrodla]), s, `${id}: treść po D-027`);
  for (const [id, s] of Object.entries(STARE_H)) assert.equal(h([R.get(id).twierdzenie, R.get(id).zrodla]), s, `${id}: stary wpis bez zmian`);
  const uzyte = new Set(Object.values(RYZYKO).flat().filter((c) => !NOWE.includes(c)).concat(['SLO-020', 'SLO-460']));
  assert.deepEqual([...uzyte].sort(), Object.keys(STARE_H).sort(), 'każde stare ostrzeżenie porcji ma skrót');
});

test('B12 (D-043 P1, P2): melony bez ACI-705 w ostrzeżeniach; strawberry-v15 lodówkowy, cukrowo-kwaśny, żywy', () => {
  for (const id of ['watermelon-melon-v08', 'watermelon-melon-v09']) {
    assert.ok(!V.get(id).requiredWarnings.includes('ACI-705'), `${id}: „chyba że jako konfitury” nie jako ostrzeżenie dżemu`);
    assert.ok(V.get(id).claims.includes('ACI-705'), `${id}: ACI-705 w claims`);
  }
  const s = V.get('strawberry-v15');
  assert.equal(s.preservationMethod, 'refrigerator');
  assert.equal(s.acidBasis, 'sugar-acid');
  assert.equal(s.retired, undefined);
  assert.equal(s.processFamilyId, 'sweet-preserves');
});

test('B12-D8 (D-043 P3): 9 wariantów z polem e3 zachowuje e3 i notatkę [E3] obok przywróconego ryzyko-wysokie', () => {
  for (const id of ['zucchini-v13', 'pattypan-squash-v10', 'carrot-v12', 'onion-v08', 'shallot-pearl-onion-v10', 'pineapple-banana-v09', 'watermelon-melon-v05', 'watermelon-melon-v08', 'watermelon-melon-v09']) {
    const v = V.get(id);
    assert.equal(v.e3, 'zmieniony z ryzyko-wysokie', id);
    assert.ok(v.notes.some((n) => n.startsWith('[E3] ryzyko-wysokie → do-researchu')), `${id}: notatka [E3]`);
    assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
  }
});

test('B12 (D-043 P2): notatki [B12] wymieniają jako „poza claims” tylko twierdzenia spoza claims', () => {
  for (const w of c10.warianty) {
    const v = V.get(w.id);
    const n = v.notes.find((x) => x.startsWith('[B12]'));
    if (v.notes.some((x) => x.startsWith('[B15]'))) continue; // notatka historyczna; nowsze claims z B15
    const m = n.match(/poza claims: ([^.(]+)/);
    if (m) for (const id of m[1].split(',').map((s) => s.trim()).filter(Boolean)) assert.ok(!v.claims.includes(id), `${w.id}: ${id} jest w claims`);
  }
});
