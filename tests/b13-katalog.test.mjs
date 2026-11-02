// B13 (D-043): porcja katalogowa ze statusami z raportu C11 (suszenie dry-storage p1) i backlog katalogu z p26/p27, katalog 1.0.10.
// Osobny plik, żeby nie kolidować z torem A. Decyzja: 2026-11-02-jaratlas-06-b13-katalog-c11.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rej = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const c11 = JSON.parse(readFileSync('docs/tresci/E1-suszenie-zrodla-p1-2026-11-02.json', 'utf8'));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const B15_OK = new Set(['turnip-rutabaga-v10', 'celeriac-celery-v11', 'sour-cherry-v16', 'apricot-v14', 'leek-chives-v04']); // B15: ok-zrodlo = szczebel 1–3 (polityka-zrodel-ryzyko); stan pilnuje tests/b15-katalog.test.mjs
const DEC = '2026-11-02-jaratlas-06-b13-katalog-c11';
const h = (x) => createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0, 12);
const nota = (id) => V.get(id).notes.find((n) => n.startsWith('[B13]') && n.includes(DEC));

// Karty-ostrzeżenia z obowiązkowymi ostrzeżeniami (B13-D3); podzbiór claims.
const RYZYKO = {
  'pumpkin-v14': ['SLO-045', 'SLO-023'], // SUS-318 robocze po dwóch przebiegach D-027
  'bell-pepper-v18': ['SUS-309', 'SUS-310'], 'pear-v14': ['SUS-309', 'SUS-310'], 'plum-v18': ['SUS-309', 'SUS-310'],
  'beans-soy-v05': ['NAP-066', 'NAP-052'],
  'corn-v11': ['SUS-314'], // SUS-313 tylko w claims (D-043 P2: 13% czytałoby się jak instrukcja)
  'ginger-turmeric-v09': ['ACI-125', 'SLO-023'],
};
// Duplikaty z następcą ok-zrodlo (C11 sekcja 9, B13-D4); warunkowe (następca do-researchu) nie są wycofane.
const WYCOFANE = { 'bell-pepper-v18': 'bell-pepper-v17', 'pear-v14': 'pear-v13', 'plum-v18': 'plum-v17', 'horseradish-v11': 'horseradish-v12', 'sweet-cherry-v11': 'sweet-cherry-v12' };
const WARUNKOWE = { 'capers-v10': 'capers-v01', 'european-mixed-veg-v14': 'carrot-v15' };
// Zmiany nazw (B13-D5); status ok-zrodlo tylko przy przeczytanym cytacie szczebla 1 (parsnip-parsley-v10, NCHFP Herbs).
const NAZWY = {
  'sour-cherry-v16': 'wiśnie suszone po blanszowaniu w syropie', 'apricot-v14': 'morele suszone po blanszowaniu w syropie',
  'celeriac-celery-v11': 'suszony seler naciowy', 'parsnip-parsley-v10': 'suszona natka pietruszki',
  'currant-v14': 'suszona czarna porzeczka', 'mango-papaya-v10': 'skóra owocowa z mango', 'plum-v16': 'skóra owocowa ze śliwek',
  'mirabelle-v10': 'skóra owocowa z ałyczy', 'apricot-v09': 'skóra owocowa z moreli',
  'red-savoy-cabbage-v11': 'suszona kapusta czerwona lub włoska', 'red-savoy-cabbage-v12': 'puder z suszonej kapusty czerwonej lub włoskiej',
};
// Skrót sha256 (12 znaków) z [claims, sources, name] w katalogu 1.0.9 (0c7f53f), przed B13: tylko notatka, bez zmian.
const ZOSTAJA = {"cucumber-v20":"20463277d110","napa-cabbage-v14":"a706d9e1c108","napa-cabbage-v15":"2b1d64c937a7","brussels-kohlrabi-v12":"ae5d1ad51524","tomato-v18":"2bdc68725424","potato-sunchoke-v11":"5988b7923570","potato-sunchoke-v13":"9648c86c9063","green-beans-v14":"9ada89e2feb8","peas-chickpeas-v15":"428cbf928ce1","carrot-v15":"369e912ff187","leek-chives-v11":"92e3c6fbfacc","daikon-black-radish-v12":"c43be0699012","daikon-black-radish-v14":"b8367e1ecfa8","celeriac-celery-v12":"a47cd6b22c1d","turnip-rutabaga-v10":"63f3d13a24e2","olives-v14":"0ea9e2df5b89","capers-v10":"f8cd3eba7773","ginger-turmeric-v15":"1661d94b7336","european-mixed-veg-v13":"6103b2e4ac70","european-mixed-veg-v14":"8e9cd0aab036","balkan-oriental-mix-v13":"328ba0320e5e","quince-v12":"a77ed6821b62","quince-v13":"d0dadfbbffcc","horseradish-v11":"81a1378ec5b6","sweet-cherry-v11":"77819f897f80"};
// Backlog p26/p27: ok-zrodlo → do-researchu bez zmiany claims, sources i nazwy (B13-D7).
const OBNIZONE = {"blueberry-bilberry-v13":"1587eb5c3972","elderberry-elderflower-v11":"b72ce9245db3","vine-leaves-greens-v11":"53a9e8bc7f58","vine-leaves-greens-v12":"e7f3d446c4ca"};
const SUS_NOWE = Array.from({ length: 24 }, (_, i) => `SUS-${300 + i}`).filter((id) => id !== 'SUS-312');
const NOWE = [...SUS_NOWE, 'NAP-066'];
const ROBOCZE = ['SUS-304', 'SUS-315', 'SUS-316', 'SUS-317', 'SUS-318', 'SUS-320']; // SUS-318, SUS-320: po dwóch przebiegach D-027 nadal CZĘŚCIOWO (wzór B10-D4); pozostałe: źródło niedostępne dla weryfikatora (MSU: Incapsula; UC ANR 8267 w eScholarship: HTTP 202 bez treści): bez przeglądu D-027 (wzór C11-D3 nie zastępuje D-027)

const wersja = (s) => s.split('.').map(Number);
test('B13: katalog co najmniej 1.0.10', () => {
  const [a, b] = [wersja(cat.version), wersja('1.0.10')];
  assert.ok(a[0] > b[0] || (a[0] === b[0] && (a[1] > b[1] || (a[1] === b[1] && a[2] >= b[2]))), cat.version);
});

test('B13: 37 wariantów C11 rozliczonych dokładnie raz, ukryte, bez kart, z notatką [B13]', () => {
  const zmienione = ['tomatillo-v11', 'sour-cherry-v16', 'apricot-v14', 'celeriac-celery-v11', 'parsnip-parsley-v10'];
  const wszystkie = [...Object.keys(RYZYKO), ...Object.keys(ZOSTAJA), ...zmienione];
  assert.equal(new Set(wszystkie).size, 37);
  assert.deepEqual([...wszystkie].sort(), c11.warianty.map((w) => w.id).sort());
  for (const id of wszystkie) {
    assert.equal(V.get(id).publication, 'ukryta', `${id}: bez publikacji`);
    assert.equal(V.get(id).content, undefined, `${id}: bez nowej karty`);
    assert.ok(nota(id), `${id}: notatka [B13]`);
  }
});

test('B13: ryzyko-wysokie jako karta-ostrzeżenie z obowiązkowymi ostrzeżeniami (także w claims)', () => {
  for (const [id, w] of Object.entries(RYZYKO)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'ryzyko-wysokie', id);
    assert.equal(v.cardType, 'warning', id);
    assert.deepEqual([...(v.requiredWarnings ?? [])].sort(), [...w].sort(), `${id} ostrzeżenia`);
    for (const c of w) assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
    if (!WYCOFANE[id]) assert.equal(v.retired, undefined, id);
    assert.ok(!v.claims.includes('SLO-069'), `${id}: SLO-069 (przepis „adapted from AllRecipes”, C11 §7) poza kartą-ostrzeżeniem (D-043 P1)`);
  }
  assert.ok(!V.get('pumpkin-v14').claims.includes('SUS-319') && !V.get('ginger-turmeric-v09').claims.includes('SUS-319'), 'SUS-319 (przepis imbiru na sucho) poza kartą-ostrzeżeniem');
});

test('B13: duplikaty wycofane z następcą ok-zrodlo; warunkowe zostają', () => {
  for (const [id, nast] of Object.entries(WYCOFANE)) {
    const v = V.get(id);
    assert.equal(v.retired?.replacedBy, nast, id);
    assert.equal(v.retired?.decision, DEC, id);
    if (!RYZYKO[id]) { assert.equal(v.safetyStatus, 'do-researchu', id); assert.equal(v.cardType, undefined, id); }
    assert.equal(V.get(nast).retired, undefined, nast);
    assert.equal(V.get(nast).safetyStatus, 'ok-zrodlo', `${nast}: następca ok-zrodlo`);
  }
  for (const [id, nast] of Object.entries(WARUNKOWE)) {
    assert.equal(V.get(id).retired, undefined, `${id}: następca ${nast} do-researchu, bez wycofania`);
    assert.equal(V.get(nast).safetyStatus, 'do-researchu', nast);
    assert.ok(nota(id).includes(nast), `${id}: notatka wskazuje warunkowego następcę`);
  }
});

test('B13-D2: ok-zrodlo wstrzymane bez przeczytanego cytatu szczebla 1 (turnip-rutabaga-v10, olives-v14); reszta bez zmian', () => {
  for (const id of ['turnip-rutabaga-v10', 'olives-v14']) {
    const v = V.get(id);
    if (B15_OK.has(id)) continue; // B15: ok-zrodlo = szczebel 1–3 (polityka-zrodel-ryzyko), pilnuje tests/b15
    assert.equal(v.safetyStatus, 'do-researchu', id);
    assert.ok(!v.sources.some((z) => z.szczebel === 1), `${id}: brak źródła szczebla 1`);
    assert.ok(nota(id).includes('szczebla 1'), `${id}: notatka o warunku szczebla 1`);
  }
  for (const [id, s] of Object.entries(ZOSTAJA)) {
    const v = V.get(id);
    if (B15_OK.has(id)) continue; // B15 zmienia wariant; pilnuje tests/b15-katalog.test.mjs
    assert.equal(h([v.claims, v.sources, v.name]), s, `${id}: claims, sources i nazwa bez zmian`);
    if (!WYCOFANE[id]) assert.equal(v.safetyStatus, 'do-researchu', id);
    assert.equal(v.cardType, undefined, id);
  }
  assert.ok(V.get('peas-chickpeas-v15').retired?.reason.startsWith('poza zakresem'), 'peas-chickpeas-v15: wcześniejsze wycofanie bez zmian');
  for (const id of ['potato-sunchoke-v13', 'brussels-kohlrabi-v12']) assert.ok(nota(id).includes('roli 03'), `${id}: zakres do roli 03`);
});

test('B13-D5: zmiany nazw; ok-zrodlo po zmianie tylko z cytatem szczebla 1 przeczytanym 2026-11-02', () => {
  for (const [id, n] of Object.entries(NAZWY)) assert.equal(V.get(id).name.pl, n, id);
  for (const id of ['sour-cherry-v16', 'apricot-v14', 'celeriac-celery-v11']) {
    // B15: Clemson/SDSU (szczebel 3) wystarcza (polityka-zrodel-ryzyko); stan ok-zrodlo pilnuje tests/b15-katalog.test.mjs.
    if (!B15_OK.has(id)) assert.equal(V.get(id).safetyStatus, 'do-researchu', `${id}: Clemson/SDSU to szczebel 3`);
    assert.equal(V.get(id).retired, undefined, id);
  }
  const p = V.get('parsnip-parsley-v10');
  assert.equal(p.safetyStatus, 'ok-zrodlo');
  assert.equal(p.cardType, undefined);
  const s1 = p.sources.filter((z) => z.szczebel === 1 && z.adres === 'https://nchfp.uga.edu/how/dry/recipes/herbs/' && z.odczyt === '2026-11-02');
  assert.ok(s1.some((z) => z.cytat.includes('rosemary, sage, thyme, summer savory and parsley')), 'cytat szczebla 1 wymienia pietruszkę');
  for (const c of ['SUS-031', 'SUS-033', 'SUS-022', 'SUS-079', 'SUS-081']) assert.ok(p.claims.includes(c), `natka: ${c}`);
  for (const c of p.claims) assert.equal(R.get(c)?.status, 'potwierdzone', c);
  assert.ok(!p.claims.includes('SUS-127'), 'pasternak poza wariantem natki');
  // Wymóg cytatu szczebla 1 dotyczy nowych ok-zrodlo z C11; warianty już ok-zrodlo po zawężeniu/doprecyzowaniu nazwy zachowują status (B13-D9, D-043 P1).
  for (const id of ['plum-v16', 'mirabelle-v10', 'apricot-v09', 'mango-papaya-v10', 'currant-v14', 'red-savoy-cabbage-v11', 'red-savoy-cabbage-v12']) {
    assert.equal(V.get(id).safetyStatus, 'ok-zrodlo', `${id}: zawężenie nazwy bez zmiany statusu`);
    assert.ok(nota(id), `${id}: notatka [B13]`);
  }
  for (const id of ['currant-v14', 'red-savoy-cabbage-v11', 'red-savoy-cabbage-v12']) assert.ok(nota(id).includes('nowych ok-zrodlo z C11'), `${id}: notatka o zakresie reguły szczebla 1`);
  assert.ok(!/papad|tklapi|qamar|papaj/i.test(['plum-v16', 'mirabelle-v10', 'apricot-v09', 'mango-papaya-v10'].map((id) => V.get(id).name.pl).join(' ')), 'bez nazw tradycyjnych i papai');
});

test('B13: tomatillo-v11 (miechunka) z obowiązkowym ostrzeżeniem o toksynach niedojrzałych owoców', () => {
  const v = V.get('tomatillo-v11');
  assert.equal(v.safetyStatus, 'do-researchu');
  assert.deepEqual(v.requiredWarnings, ['SUS-301']);
  assert.ok(v.claims.includes('SUS-301'));
});

test('B13-D7: backlog p26/p27 bez źródła 1:1 → do-researchu bez zmiany claims, sources i nazwy; bez czarny z ostrzeżeniem', () => {
  for (const [id, s] of Object.entries(OBNIZONE)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, 'do-researchu', id);
    assert.equal(h([v.claims, v.sources, v.name]), s, `${id}: bez zmian poza statusem`);
    assert.ok(nota(id), `${id}: notatka [B13]`);
  }
  assert.deepEqual(V.get('elderberry-elderflower-v11').requiredWarnings, ['SUS-041']);
  const c = V.get('cranberry-lingonberry-v13');
  assert.equal(c.safetyStatus, 'ok-zrodlo');
  assert.equal(h([c.claims, c.sources, c.name]), 'd36543cf82fa', 'żurawina: zakres już tylko żurawina');
  assert.ok(nota('cranberry-lingonberry-v13').includes('brusznic'));
  const k = V.get('wild-mushrooms-v09');
  assert.equal(h([k.claims, k.sources, k.name]), '88dcaa54aa47', 'kania: sources poprawione w B10, bez zmian');
  assert.ok(k.sources.some((z) => z.adres.includes('psse-warszawa')) && k.safetyStatus === 'ryzyko-wysokie');
  for (const id of ['red-savoy-cabbage-v11', 'red-savoy-cabbage-v12']) assert.ok(nota(id).includes('slug'), `${id}: notatka o slugu`);
});

test('B13: rejestr ma 24 nowe wpisy (SUS-300–323 bez 312, NAP-066 = douchi); potwierdzone z przeglądem D-027; robocze poza katalogiem', () => {
  assert.equal(R.get('SUS-312'), undefined, 'SUS-312 przeniesione do NAP-066 (B13-D6)');
  for (const id of NOWE) {
    const t = R.get(id);
    assert.ok(t, id);
    assert.equal(t.klaster, id.split('-')[0], id);
    assert.equal(t.pochodzenie, `C11 E1-suszenie-zrodla-p1-2026-11-02${id === 'NAP-066' ? ' (SUS-312)' : ''}`, id);
    assert.equal(t.status, ROBOCZE.includes(id) ? 'robocze' : 'potwierdzone', id);
    assert.ok(/^[A-Z].*[.)]$/s.test(t.twierdzenie_en.trim()), `${id}: twierdzenie_en jako pełne zdanie`);
    assert.ok(t.zrodla.length && t.zrodla.every((z) => z.adres && z.cytat && z.odczyt && [1, 2, 3].includes(z.szczebel)), `${id}: źródła 1–3`);
    if (t.status === 'potwierdzone' && t.krytyczne) assert.equal(t.przeglad?.kto, 'weryfikacja zastępcza (subagent)', id);
    if (t.status === 'robocze' || !t.krytyczne) assert.equal(t.przeglad, null, id);
    assert.ok(!('warianty' in t) && !('klucz_tymczasowy' in t) && !('rejestr_docelowy' in t), `${id}: bez pól roboczych C11`);
  }
  assert.equal(R.get('NAP-066').twierdzenie_en, c11.twierdzenia.find((t) => t.id === 'SUS-312').twierdzenie_en, 'NAP-066 = treść SUS-312');
  for (const v of cat.variants) for (const c of [...(v.claims ?? []), ...(v.requiredWarnings ?? [])]) assert.notEqual(R.get(c)?.status, 'robocze', `${v.id}: ${c} robocze w katalogu`);
  assert.ok(!rej.some((t) => /^NAP-06[7-9]$/.test(t.id)), 'NAP-067–069 wolne');
});

test('B13: poprawki D-027 zachowane', () => {
  assert.ok(!R.get('SUS-306').twierdzenie.includes('NCHFP') && !R.get('SUS-306').twierdzenie_en.includes('NCHFP'), 'SUS-306: „Source: NCHFP” to przypis do wskazówki, nie do suszenia');
  assert.ok(R.get('SUS-307').twierdzenie_en.includes('at 5,000 ft and above'), 'SUS-307 granica włączna 5000 stóp');
  assert.ok(R.get('SUS-309').twierdzenie_en.includes('that section has no tested home procedure'), 'SUS-309 zakres działu');
  assert.ok(R.get('SUS-310').twierdzenie_en.includes('low levels') && R.get('SUS-310').twierdzenie.includes('niskich'), 'SUS-310 zastrzeżenie FSA');
  assert.ok(R.get('SUS-318').twierdzenie_en.includes('must be stored in the refrigerator or freezer') && R.get('SUS-318').twierdzenie.includes('należy je przechowywać'), 'SUS-318 (robocze): nakaz źródła, nie zalecenie');
  assert.ok(R.get('SUS-320').twierdzenie_en.includes('apples, apricots, figs, nectarines, peaches, pears, plums and prunes'), 'SUS-320 (robocze): lista owoców źródła');
  for (const id of ['SUS-318', 'SUS-320']) assert.ok(R.get(id).brzmieniePrzed, `${id}: stare brzmienie zachowane`);
});

// Strażnik treści (D-043 P2): zmiana twierdzenia to nowy przegląd D-027, więc test ma wtedy paść i zostać świadomie zaktualizowany.
// Pełny strażnik wszystkich starych wpisów odrzucony jak w B11/B12 (blokowałby poprawki toru A); pilnowane są stare wpisy użyte w wariantach B13 (stan a1e516a, po p28).
test('B13 (D-043): treść 24 nowych i starych twierdzeń z wariantów B13 bez cichych zmian; dokładny zbiór nowych ID', () => {
  const NOWE_H = {"NAP-066":"2b1caf79319a","SUS-300":"af1b73d7499b","SUS-301":"a60d615b8bfe","SUS-302":"99dc9284d806","SUS-303":"b3b12bd0300e","SUS-304":"aae66910aa4a","SUS-305":"8884ea9f045e","SUS-306":"e1309b902c1d","SUS-307":"f9403e4e4431","SUS-308":"9775cfbde79c","SUS-309":"2279fcd3b295","SUS-310":"a691a0fb8e9a","SUS-311":"167a37e7ed90","SUS-313":"89f1abf7c5f4","SUS-314":"da5e43d86df2","SUS-315":"3b967e8b8510","SUS-316":"a4238ba38051","SUS-317":"dafdca17a9e1","SUS-318":"28b58d7b0832","SUS-319":"0fac51cdf506","SUS-320":"ee1be19c9ef5","SUS-321":"4b3682601980","SUS-322":"861a855b2dff","SUS-323":"d1010a5a201e"};
  // p32 (D1 D4-S-04): SUS-021 zmienione celowo (rachunek °C dopisany do twierdzenia, nowy przegląd D-027 w V2 p32); skrót zaktualizowany świadomie, wyjątek nazwany w raporcie E3-karty-p32.
  // p35 (zadanie d): SLO-069 zmienione celowo (drugi wpis zrodla: wersja HTML HES173, PDF HTTP 406; „w suszarce do żywności” po V1 D-027 d); skrót zaktualizowany świadomie, wyjątek nazwany w raporcie E3-karty-p35.
  const STARE_H = {"ACI-125":"e5ee646e6797","NAP-052":"63839937e974","NAP-062":"1bc8a454c2a6","SLO-023":"b165d3e98bb7","SLO-045":"314725c65e0c","SLO-069":"b7c3ccfb7c66","SUS-001":"e7a57fdb0fe5","SUS-003":"33d9537e1060","SUS-011":"4fd93e58dd45","SUS-014":"e9f15eb9a267","SUS-015":"c8c76df0c599","SUS-016":"94ba330c2f56","SUS-017":"8c974201befa","SUS-018":"db501bcf7319","SUS-020":"c359d4836cf3","SUS-021":"b353a8561d45","SUS-022":"5dab59afb12a","SUS-026":"7edc40adda99","SUS-027":"4f9369d6c0a0","SUS-028":"d453fe674927","SUS-030":"a93f654977f5","SUS-031":"44da21665004","SUS-033":"5e51d57c1d01","SUS-038":"425b6530afb6","SUS-039":"77d6f8829f22","SUS-040":"f7789d53c44f","SUS-041":"bcdff8599219","SUS-079":"cdf1c748d308","SUS-081":"81302f403601"};
  assert.deepEqual(Object.keys(NOWE_H).sort(), [...NOWE].sort());
  for (const [id, s] of Object.entries(NOWE_H)) { const t = R.get(id); assert.equal(h([t.twierdzenie, t.twierdzenie_en, t.zrodla, t.status, t.krytyczne]), s, `${id}: treść po D-027`); }
  for (const [id, s] of Object.entries(STARE_H)) assert.equal(h([R.get(id).twierdzenie, R.get(id).zrodla]), s, `${id}: stary wpis bez zmian`);
  for (const id of ['SUS-302', 'SUS-303', 'SUS-305', 'SUS-308', 'SUS-319', 'SUS-321', 'SUS-322']) assert.equal(R.get(id).krytyczne, true, `${id}: parametry procedury = krytyczne`);
  assert.ok(!R.get('SUS-302').uwaga.includes('Status do weryfikatora'), 'SUS-302: uwaga po D-027');
  assert.deepEqual(rej.filter((t) => /^SUS-3(0\d|1\d|2[0-3])$/.test(t.id)).map((t) => t.id).sort(), [...SUS_NOWE].sort(), 'SUS-300–323: dokładnie dopisy B13');
});

test('B13 (D-043 P2): warianty ze zmianą statusu lub treści bez cichych zmian (claims, sources, nazwa, wycofanie, ostrzeżenia, status)', () => {
  const PELNE_H = {"pumpkin-v14":"dc00cbee6418","bell-pepper-v18":"e1b4aea3985a","pear-v14":"7ac7041dbb35","plum-v18":"31e0c159ee83","beans-soy-v05":"a79a0ee36cbc","corn-v11":"83c9c2a623e0","ginger-turmeric-v09":"86344db50ad6","tomatillo-v11":"f5cc9ad7dfb4","parsnip-parsley-v10":"51acb04a8b16","sour-cherry-v16":"cfa948c195f6","apricot-v14":"64fcb78521dd","celeriac-celery-v11":"2d673b5b20bb"};
  for (const [id, s] of Object.entries(PELNE_H)) { const v = V.get(id); if (B15_OK.has(id)) continue; /* B15: pilnuje tests/b15 */ assert.equal(h([v.claims, v.sources, v.name, v.retired ?? null, v.requiredWarnings ?? null, v.safetyStatus]), s, id); }
});

test('B13: notatki [B13] wymieniają jako „poza claims” tylko twierdzenia spoza claims', () => {
  for (const v of cat.variants) {
    const n = v.notes?.find((x) => x.startsWith('[B13]'));
    if (B15_OK.has(v.id)) continue; // notatka historyczna; nowsze claims z B15
    const m = n?.match(/poza claims: ([^.(;]+)/);
    if (m) for (const id of m[1].split(',').map((s) => s.trim()).filter(Boolean)) assert.ok(!v.claims.includes(id), `${v.id}: ${id} jest w claims`);
  }
});
