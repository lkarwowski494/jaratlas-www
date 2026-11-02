// Testy walidatora katalogu JarAtlas (node --test). Reguły z przekazania §5.4 i decyzji 2026-11-01-jaratlas-katalog-v1-model.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { validateCatalog } from '../tools/validate-catalog.mjs';

const claim = (id, extra = {}) => ({ id, twierdzenie: 'x', status: 'potwierdzone', krytyczne: true, zrodla: [{ adres: 'https://nchfp.uga.edu/', miejsce: 'm', cytat: 'c', odczyt: '2026-11-01', szczebel: 1 }], ...extra });
const recipe = { adres: 'https://nchfp.uga.edu/how/can/', miejsce: 'm', cytat: 'c', odczyt: '2026-11-01', szczebel: 1 };

function base() {
  return {
    version: 'test',
    processFamilies: [
      { id: 'canned-foods', allowedMethods: ['water-bath', 'pressure-canning', 'refrigerator'], thresholds: [{ wielkosc: 'ph', wartosc: 4.6, jednostka: 'pH', granica: '<=', claim: 'T-1' }], prohibitions: [] },
      { id: 'vinegar-pickling', allowedMethods: ['water-bath', 'refrigerator'], thresholds: [], prohibitions: [] },
    ],
    products: [
      { id: 'tomato', acidity: 'borderline', acidityClaim: 'T-1' },
      { id: 'green-beans', acidity: 'low-acid', acidityClaim: 'T-1' },
      { id: 'apple', acidity: 'acid', acidityClaim: 'T-1' },
    ],
    variants: [
      { id: 'apple-v01', productId: 'apple', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'natural-acid', safetyStatus: 'ok-zrodlo', claims: ['T-1'], sources: [recipe], publication: 'ukryta', scope: 'in' },
      { id: 'green-beans-v01', productId: 'green-beans', processFamilyId: 'canned-foods', preservationMethod: 'pressure-canning', acidBasis: 'low-acid', safetyStatus: 'do-researchu', claims: [], sources: [], publication: 'ukryta', scope: 'in' },
    ],
  };
}
const reg = () => [claim('T-1')];
const errs = (cat, r = reg()) => validateCatalog(cat, r).errors;
const has = (e, re) => e.some((x) => re.test(x));

test('poprawny katalog przechodzi', () => assert.deepEqual(errs(base()), []));

test('wariant niskokwasowy w kąpieli wodnej to błąd', () => {
  const c = base(); Object.assign(c.variants[1], { preservationMethod: 'water-bath' });
  assert.ok(has(errs(c), /green-beans-v01.*niskokwasow.*water-bath/));
});

test('produkt niskokwasowy nie może mieć acidBasis natural-acid', () => {
  const c = base(); Object.assign(c.variants[1], { acidBasis: 'natural-acid' });
  assert.ok(has(errs(c), /green-beans-v01.*natural-acid/));
});

test('produkt graniczny (np. pomidor) w kąpieli wodnej wymaga zakwaszenia', () => {
  const c = base(); c.variants.push({ id: 'tomato-v01', productId: 'tomato', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'natural-acid', safetyStatus: 'do-researchu', claims: [], sources: [], publication: 'ukryta', scope: 'in' });
  assert.ok(has(errs(c), /tomato-v01.*graniczn/));
});

test('produkt graniczny bez zakwaszenia tylko z jawnym wyjątkiem z listy w walidatorze (morele, E3-002), ok-zrodlo, przepis szczebla 1 i wymagane ostrzeżenie (06, 2026-11-02)', () => {
  const r = [claim('T-1'), claim('E3-002')];
  const kat = (zm = {}) => {
    const c = base(); c.products.push({ id: 'apricot', acidity: 'borderline', acidityClaim: 'T-1' });
    c.variants.push({ id: 'apricot-v08', productId: 'apricot', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'natural-acid', safetyStatus: 'ok-zrodlo', claims: ['T-1'], sources: [recipe], publication: 'ukryta', scope: 'in', acidityException: { warning: 'E3-002', decyzja: '2026-11-02-jaratlas-06-katalog-p4' }, requiredWarnings: ['E3-002'], ...zm });
    return c;
  };
  assert.deepEqual(errs(kat(), r), []);
  for (const [opis, zm] of [
    ['bez pola acidityException', { acidityException: undefined }],
    ['bez ostrzeżenia w requiredWarnings', { requiredWarnings: [] }],
    ['status do-researchu', { safetyStatus: 'do-researchu' }],
    ['status nie-publikowac', { safetyStatus: 'nie-publikowac', cardType: 'warning' }],
    ['przepis tylko szczebla 3', { sources: [{ ...recipe, szczebel: 3 }] }],
    ['pusty wpis szczebla 1 obok pełnego źródła szczebla 3 (P3-2 drugiego przeglądu D-043)', { sources: [{ szczebel: 1 }, { ...recipe, szczebel: 3 }] }],
    ['inne ostrzeżenie niż na liście', { acidityException: { warning: 'T-1', decyzja: '2026-11-02-jaratlas-06-katalog-p4' }, requiredWarnings: ['T-1'] }],
  ]) assert.ok(has(errs(kat(zm), r), /apricot-v08.*graniczn/), opis);
  // Pomidor z tym samym wyjątkiem i ostrzeżeniem moreli: nadal błąd (przegląd D-043, 2026-11-02).
  const c = base(); c.variants.push({ id: 'tomato-v02', productId: 'tomato', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'natural-acid', safetyStatus: 'ok-zrodlo', claims: ['T-1'], sources: [recipe], publication: 'ukryta', scope: 'in', acidityException: { warning: 'E3-002', decyzja: '2026-11-02-jaratlas-06-katalog-p4' }, requiredWarnings: ['E3-002'] });
  assert.ok(has(errs(c, r), /tomato-v02.*graniczn/));
});

test('acidityException: wymagana decyzja (ID wpisu tablicy) i błąd, gdy wyjątek nie ma zastosowania (P3 z przeglądu D-043, 2026-11-02)', () => {
  const r = [claim('T-1'), claim('E3-002')];
  const kat = (zm = {}, prod = {}) => {
    const c = base(); c.products.push({ id: 'apricot', acidity: 'borderline', acidityClaim: 'T-1', ...prod });
    c.variants.push({ id: 'apricot-v08', productId: 'apricot', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'natural-acid', safetyStatus: 'ok-zrodlo', claims: ['T-1'], sources: [recipe], publication: 'ukryta', scope: 'in', acidityException: { warning: 'E3-002', decyzja: '2026-11-02-jaratlas-06-katalog-p4' }, requiredWarnings: ['E3-002'], ...zm });
    return c;
  };
  assert.deepEqual(errs(kat(), r), []);
  for (const [opis, zm] of [
    ['bez decyzji', { acidityException: { warning: 'E3-002' } }],
    ['pusta decyzja', { acidityException: { warning: 'E3-002', decyzja: '' } }],
    ['decyzja bez daty', { acidityException: { warning: 'E3-002', decyzja: 'katalog-p4' } }],
    ['decyzja nie jest tekstem', { acidityException: { warning: 'E3-002', decyzja: 20261102 } }],
    ['decyzja jako tablica (po rzutowaniu pasowałaby do wzorca)', { acidityException: { warning: 'E3-002', decyzja: ['2026-11-02-jaratlas-06-katalog-p4'] } }],
    ['sama data', { acidityException: { warning: 'E3-002', decyzja: '2026-11-02' } }],
    ['data z samym myślnikiem', { acidityException: { warning: 'E3-002', decyzja: '2026-11-02-' } }],
    ['wyjątek jako pusty tekst', { acidityException: '' }],
    ['tekst przed datą', { acidityException: { warning: 'E3-002', decyzja: 'x2026-11-02-jaratlas-06-katalog-p4' } }],
    ['spacja na końcu', { acidityException: { warning: 'E3-002', decyzja: '2026-11-02-jaratlas-06-katalog-p4 ' } }],
  ]) assert.ok(has(errs(kat(zm), r), /apricot-v08: acidityException bez poprawnej decyzji/), opis);
  // Martwy wyjątek: pole zostało po zmianie wariantu albo produktu, a reguła go już nie używa.
  for (const [opis, zm, prod] of [
    ['acidBasis acidified', { acidBasis: 'acidified' }, {}],
    ['metoda inna niż water-bath', { preservationMethod: 'refrigerator' }, {}],
    ['produkt niegraniczny', {}, { acidity: 'acid' }],
    ['acidBasis sugar-acid', { acidBasis: 'sugar-acid' }, {}],
  ]) assert.ok(has(errs(kat(zm, prod), r), /apricot-v08.*acidityException.*bez zastosowania/), opis);
  // Decyzja w poprawnym formacie, ale inna niż przypisana wyjątkowi w WYJATKI_KWAS: wyjątek nie działa.
  assert.ok(has(errs(kat({ acidityException: { warning: 'E3-002', decyzja: '2026-13-45-cokolwiek' } }), r), /apricot-v08: produkt graniczny/));
  // Poprawny wyjątek moreli nie chroni wariantu z acidBasis innym niż natural-acid.
  assert.ok(has(errs(kat({ acidBasis: 'sugar-acid' }), r), /apricot-v08: produkt graniczny/));
  // acidityException: null — tylko błąd reguły granicznej, bez wyjątku JS.
  const e = errs(kat({ acidityException: null }), r);
  assert.ok(has(e, /apricot-v08: produkt graniczny/)); assert.ok(!has(e, /acidityException bez/));
  // Nieznany produkt z wyjątkiem: komunikaty, bez wyjątku JS.
  const u = kat(); u.variants.at(-1).productId = 'nieznany';
  assert.ok(has(errs(u, r), /apricot-v08.*bez zastosowania/));
});

test('produkt graniczny w kąpieli wodnej bez acidBasis acidified (np. sugar-acid, fermented) to błąd — wariant ostrożny (P3-4 przeglądu D-043, 2026-11-02)', () => {
  for (const ab of ['sugar-acid', 'fermented', null, 'xyz']) {
    const c = base(); c.variants.push({ id: 'tomato-v03', productId: 'tomato', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: ab, safetyStatus: 'do-researchu', claims: [], sources: [], publication: 'ukryta', scope: 'in' });
    assert.ok(has(errs(c), /tomato-v03.*graniczn/), ab);
  }
});

test('produkt graniczny w kąpieli wodnej z acidBasis low-acid albo not-applicable: dokładnie jeden błąd (niskokwasowy), bez drugiego komunikatu o produkcie granicznym (P3-4 drugiego przeglądu D-043, zdublowany komunikat)', () => {
  for (const ab of ['low-acid', 'not-applicable']) {
    const c = base(); c.variants.push({ id: 'tomato-v04', productId: 'tomato', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: ab, safetyStatus: 'do-researchu', claims: [], sources: [], publication: 'ukryta', scope: 'in' });
    const e = errs(c).filter((x) => x.includes('tomato-v04'));
    assert.equal(e.length, 1, `${ab}: ${JSON.stringify(e)}`);
    assert.match(e[0], /niskokwasow.*water-bath/, ab);
  }
});

test('produkt niskokwasowy w kąpieli wodnej tylko z acidBasis acidified: sugar-acid, fermented, null, spoza słownika = błąd; jeden komunikat (07-jakosc-fix P2, obserwacja D-043 partii 6)', () => {
  const kat = (ab) => { const c = base(); Object.assign(c.variants[1], { preservationMethod: 'water-bath', acidBasis: ab }); return c; };
  // Kontrola pozytywna: zakwaszony wariant niskokwasowy (np. pikle octowe) w kąpieli wodnej przechodzi.
  assert.deepEqual(errs(kat('acidified')), []);
  for (const ab of ['sugar-acid', 'fermented', null, 'xyz']) {
    assert.ok(has(errs(kat(ab)), /green-beans-v01: produkt niskokwasowy w water-bath wymaga zakwaszenia/), String(ab));
  }
  for (const ab of ['sugar-acid', 'fermented']) assert.equal(errs(kat(ab)).length, 1, ab);
  // Bez drugiego komunikatu tam, gdzie błąd zgłasza już inna reguła (low-acid, not-applicable, natural-acid).
  for (const ab of ['low-acid', 'not-applicable', 'natural-acid']) assert.equal(errs(kat(ab)).length, 1, ab);
});

test('ok-zrodlo bez źródła to błąd', () => {
  const c = base(); c.variants[0].sources = [];
  assert.ok(has(errs(c), /apple-v01.*ok-zrodlo.*źródł/));
});

test('ok-zrodlo ze źródłem szczebla 4 to błąd', () => {
  const c = base(); c.variants[0].sources = [{ ...recipe, szczebel: 4 }];
  assert.ok(has(errs(c), /apple-v01.*szczebl/));
});

test('status inny niż do-researchu bez twierdzenia to błąd', () => {
  const c = base(); Object.assign(c.variants[1], { safetyStatus: 'nie-publikowac', claims: [] });
  assert.ok(has(errs(c), /green-beans-v01.*twierdzen/));
});

test('twierdzenie nieznane albo niepotwierdzone to błąd', () => {
  const c = base(); c.variants[0].claims = ['T-9'];
  assert.ok(has(errs(c), /apple-v01.*T-9/));
  assert.ok(has(errs(base(), [claim('T-1', { status: 'robocze' })]), /T-1.*robocze/));
});

test('metoda spoza dozwolonych w rodzinie to błąd', () => {
  const c = base(); c.variants.push({ id: 'apple-v02', productId: 'apple', processFamilyId: 'vinegar-pickling', preservationMethod: 'pressure-canning', acidBasis: 'acidified', safetyStatus: 'do-researchu', claims: [], sources: [], publication: 'ukryta', scope: 'in' });
  assert.ok(has(errs(c), /apple-v02.*pressure-canning/));
});

test('nieznana metoda, w tym tyndalizacja, to błąd', () => {
  const c = base(); c.variants[1].preservationMethod = 'tyndalization';
  assert.ok(has(errs(c), /green-beans-v01.*tyndalization/));
});

test('publikacja wymaga ok-zrodlo i treści karty', () => {
  const c = base(); Object.assign(c.variants[1], { publication: 'opublikowana' });
  assert.ok(has(errs(c), /green-beans-v01.*opublikowan/));
  const d = base(); d.variants[0].publication = 'opublikowana';
  assert.ok(has(errs(d), /apple-v01.*treś/));
  const e = base(); Object.assign(e.variants[0], { publication: 'opublikowana', content: 'tresci/en/apple-v01.md' });
  assert.deepEqual(errs(e), []);
});

test('powtórzone ID i nieznany produkt lub rodzina to błąd', () => {
  const c = base(); c.variants.push({ ...c.variants[0] });
  assert.ok(has(errs(c), /powtórzone ID apple-v01/));
  const d = base(); d.variants[0].productId = 'brak';
  assert.ok(has(errs(d), /apple-v01.*produkt brak/));
});

test('próg rodziny bez twierdzenia musi mieć pytanie otwarte', () => {
  const c = base(); c.processFamilies[0].thresholds.push({ wielkosc: 'sol', wartosc: 2, jednostka: '%', granica: '>=' });
  assert.ok(has(errs(c), /canned-foods.*sol/));
  const d = base(); d.processFamilies[0].thresholds.push({ wielkosc: 'sol', wartosc: null, pytanie: 'brak źródła' });
  assert.deepEqual(errs(d), []);
});

test('wariant wycofany wskazuje następcę i nie jest publikowany', () => {
  const c = base(); c.variants.push({ id: 'apple-v03', productId: 'apple', retired: { reason: 'duplikat' }, publication: 'ukryta' });
  assert.ok(has(errs(c), /apple-v03.*następc/));
  const d = base(); d.variants.push({ id: 'apple-v03', productId: 'apple', retired: { reason: 'duplikat', replacedBy: 'apple-v01' }, publication: 'ukryta' });
  assert.deepEqual(errs(d), []);
});

test('ryzyko-wysokie i nie-publikowac z publikacją tylko jako ostrzeżenie', () => {
  const c = base(); Object.assign(c.variants[1], { safetyStatus: 'ryzyko-wysokie', claims: ['T-1'], publication: 'opublikowana', content: 'x.md' });
  assert.ok(has(errs(c), /green-beans-v01.*ostrzeż/));
  const d = base(); Object.assign(d.variants[1], { safetyStatus: 'ryzyko-wysokie', claims: ['T-1'], publication: 'opublikowana', content: 'x.md', cardType: 'warning' });
  assert.deepEqual(errs(d), []);
});

test('ryzyko-wysokie i nie-publikowac zawsze z cardType warning; inne statusy bez niego (06, 2026-11-01)', () => {
  for (const st of ['ryzyko-wysokie', 'nie-publikowac']) {
    const c = base(); Object.assign(c.variants[1], { safetyStatus: st, claims: ['T-1'] });
    assert.ok(has(errs(c), new RegExp(`green-beans-v01.*${st}.*cardType`)), st);
    const d = base(); Object.assign(d.variants[1], { safetyStatus: st, claims: ['T-1'], cardType: 'warning' });
    assert.deepEqual(errs(d), [], st);
  }
  const e = base(); e.variants[0].cardType = 'warning';
  assert.ok(has(errs(e), /apple-v01.*cardType/));
  const f = base(); Object.assign(f.variants[1], { safetyStatus: 'ryzyko-wysokie', claims: ['T-1'], cardType: 'ostrzezenie' });
  assert.ok(has(errs(f), /green-beans-v01.*cardType/));
});

test('metoda nieustalona (null) dozwolona tylko bez ok-zrodlo', () => {
  const c = base(); c.variants[1].preservationMethod = null;
  assert.deepEqual(errs(c), []);
  const d = base(); d.variants[0].preservationMethod = null;
  assert.ok(has(errs(d), /apple-v01.*metod/));
});

test('rodzina nieustalona (null) dozwolona tylko przy do-researchu', () => {
  const c = base(); Object.assign(c.variants[1], { processFamilyId: null, preservationMethod: null });
  assert.deepEqual(errs(c), []);
  const d = base(); Object.assign(d.variants[1], { processFamilyId: null, safetyStatus: 'ryzyko-wysokie', claims: ['T-1'] });
  assert.ok(has(errs(d), /green-beans-v01.*rodzin/));
});

test('ID unikalne w obrębie typu (produkt może mieć ID jak rodzina)', () => {
  const c = base(); c.products.push({ id: 'canned-foods', acidity: 'acid', acidityClaim: 'T-1' });
  assert.deepEqual(errs(c), []);
});

test('obowiązkowe ostrzeżenie musi być potwierdzonym twierdzeniem', () => {
  const c = base(); c.variants[0].requiredWarnings = ['T-9'];
  assert.ok(has(errs(c), /apple-v01.*T-9/));
  const d = base(); d.variants[0].requiredWarnings = ['T-1'];
  assert.deepEqual(errs(d), []);
});

test('katalog repozytorium przechodzi walidację', { skip: !exists('catalog/catalog-seed.json') }, () => {
  const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
  const r = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
  assert.deepEqual(validateCatalog(cat, r).errors, []);
});

function exists(p) { try { readFileSync(p); return true; } catch { return false; } }

// --- A2 (06-katalog-a2, 2026-11-02): wyjątek dla wariantu produktu niskokwasowego w kąpieli wodnej ---
// Wzór listy wyjątków w kodzie z powodem i testem „lista dotyczy istniejących pozycji”: repo trening, tests/architecture-limits.test.ts:17 i :48.
test('A2: wariant produktu niskokwasowego w kąpieli wodnej bez acidified tylko z listy WYJATKI_NISKOKWASOWE (ID wariantu, acidBasis, twierdzenia, decyzja), ok-zrodlo i przepis szczebla 1', async () => {
  const { WYJATKI_NISKOKWASOWE } = await import('../tools/validate-catalog.mjs');
  assert.ok(WYJATKI_NISKOKWASOWE && Object.isFrozen(WYJATKI_NISKOKWASOWE), 'lista WYJATKI_NISKOKWASOWE w walidatorze, zamrożona');
  const D = '2026-11-02-jaratlas-06-katalog-a2';
  const r = [claim('T-1'), claim('ACI-282'), claim('ACI-283'), claim('ACI-153')];
  const kat = (id, zm = {}) => {
    const c = base(); c.products.push({ id: 'corn', acidity: 'low-acid', acidityClaim: 'T-1' }, { id: 'pineapple-banana', acidity: 'low-acid', acidityClaim: 'T-1' });
    const corn = { id, productId: id.replace(/-v\d+$/, ''), processFamilyId: 'canned-foods', preservationMethod: 'water-bath', safetyStatus: 'ok-zrodlo', sources: [recipe], publication: 'ukryta', scope: 'in', acidityException: { decyzja: D } };
    if (id.startsWith('corn')) Object.assign(corn, { acidBasis: 'sugar-acid', claims: ['T-1', 'ACI-282', 'ACI-283'] });
    else Object.assign(corn, { acidBasis: 'natural-acid', claims: ['T-1', 'ACI-153'] });
    c.variants.push({ ...corn, ...zm });
    return c;
  };
  assert.deepEqual(errs(kat('corn-v09'), r), []);
  assert.deepEqual(errs(kat('pineapple-banana-v07'), r), []);
  for (const [opis, zm] of [
    ['bez pola acidityException', { acidityException: undefined }],
    ['inna decyzja', { acidityException: { decyzja: '2026-11-02-jaratlas-06-katalog-p4' } }],
    ['inne acidBasis niż na liście', { acidBasis: 'fermented' }],
    ['bez twierdzenia z listy', { claims: ['T-1', 'ACI-282'] }],
    ['status do-researchu', { safetyStatus: 'do-researchu' }],
    ['przepis tylko szczebla 3', { sources: [{ ...recipe, szczebel: 3 }] }],
    ['pusty wpis szczebla 1', { sources: [{ szczebel: 1 }, { ...recipe, szczebel: 3 }] }],
  ]) assert.ok(has(errs(kat('corn-v09', zm), r), /corn-v09.*niskokwas/), opis);
  // Inny wariant tego samego produktu z identycznymi danymi: błąd (wyjątek po ID wariantu, nie produktu).
  assert.ok(has(errs(kat('corn-v02'), r), /corn-v02.*niskokwas/));
  assert.ok(has(errs(kat('pineapple-banana-v03'), r), /pineapple-banana-v03.*niskokwas/));
  // Wyjątek nie zdejmuje reguły „low-acid / not-applicable w kąpieli wodnej”.
  assert.ok(has(errs(kat('corn-v09', { acidBasis: 'low-acid' }), r), /corn-v09/));
  // Wyjątek z listy przy innej metodzie: pole bez zastosowania = błąd.
  assert.ok(has(errs(kat('corn-v09', { preservationMethod: 'refrigerator' }), r), /corn-v09: acidityException bez zastosowania/));
});

test('A2: każdy wpis WYJATKI_NISKOKWASOWE dotyczy istniejącego wariantu katalogu, który z niego korzysta (lista się kurczy, nie rośnie po cichu)', async () => {
  const { WYJATKI_NISKOKWASOWE } = await import('../tools/validate-catalog.mjs');
  const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
  const V = new Map(cat.variants.map((v) => [v.id, v]));
  assert.deepEqual(Object.keys(WYJATKI_NISKOKWASOWE ?? {}).sort(), ['corn-v09', 'pineapple-banana-v07']);
  for (const [id, w] of Object.entries(WYJATKI_NISKOKWASOWE)) {
    const v = V.get(id);
    assert.ok(v, `${id}: brak w katalogu`);
    assert.equal(v.acidBasis, w.acidBasis, id);
    assert.equal(v.acidityException?.decyzja, w.decyzja, id);
    assert.ok(w.powod && /^\d{4}-\d\d-\d\d-\S+$/.test(w.decyzja), `${id}: powód i decyzja`);
  }
});

test('A2 (C3-03, T2): każda karta z ostrzeżeniami ma ich twierdzenia w requiredWarnings katalogu (usunięcie ostrzeżenia z karty zatrzyma build)', () => {
  const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
  const V = new Map(cat.variants.map((v) => [v.id, v]));
  const brak = [];
  for (const lang of ['en', 'pl']) {
    const dir = `docs/tresci/karty/${lang}/warianty`;
    for (const f of readdirSync(dir)) {
      const id = f.replace(/\.json$/, ''), k = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'));
      for (const o of k.ostrzezenia ?? []) if (!(V.get(id)?.requiredWarnings ?? []).includes(o.claim)) brak.push(`${lang}/${id}: ${o.claim}`);
    }
  }
  assert.deepEqual(brak, []);
});

test('A2: dane katalogu (nazwy zgodne z kartami, acidBasis, ostrzeżenia jerky, nazwa beef-veal-v08 wg NCHFP 140 °F)', () => {
  const cat = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
  const V = new Map(cat.variants.map((v) => [v.id, v]));
  const nazwy = {
    'pear-v07': 'połówki gruszek w bardzo lekkim syropie, bez wanilii',
    'rhubarb-v05': 'kompot rabarbarowy: rabarbar duszony z cukrem',
    'cranberry-lingonberry-v09': 'konfitura żurawinowa: żurawina w ciężkim syropie',
    'cranberry-lingonberry-v10': 'przetarty sos żurawinowy',
    'leafy-greens-v13': 'szpinak i inne liście mrożone, w tym boćwina i jarmuż',
    'peas-chickpeas-v17': 'groszek cukrowy w strąkach mrożony',
    'sour-cherry-v09': 'wiśnie całe w wodzie, bez cukru',
    'green-cherry-tomato-v15': 'zielone pomidory mrożone do smażenia',
    'potato-sunchoke-v14': 'młode ziemniaki mrożone',
    'fennel-artichoke-v11': 'serca karczochów mrożone',
  };
  for (const [id, n] of Object.entries(nazwy)) assert.equal(V.get(id)?.name?.pl, n, id);
  assert.doesNotMatch(V.get('beef-veal-v08').name.pl, /65/);
  assert.match(V.get('beef-veal-v08').name.pl, /140 °F \(60 °C\)/);
  assert.deepEqual(V.get('beef-veal-v08').requiredWarnings, ['MIE-036']);
  assert.deepEqual(V.get('game-lamb-v09').requiredWarnings, ['MIE-036', 'MIE-035', 'MIE-033']);
  assert.deepEqual(V.get('apricot-v06').requiredWarnings, ['ACI-308']);
  const a11 = V.get('apricot-v11');
  assert.equal(a11.acidBasis, 'natural-acid');
  assert.deepEqual(a11.acidityException, { warning: 'E3-002', decyzja: '2026-11-02-jaratlas-06-katalog-p4' });
  assert.deepEqual(a11.requiredWarnings, ['E3-002']);
  assert.equal(V.get('pineapple-banana-v07').acidBasis, 'natural-acid');
  assert.equal(V.get('corn-v09').acidBasis, 'sugar-acid');
});

// --- P3 przeglądu D-043 A2 (2026-11-02): domknięcie wyjątku niskokwasowego ---
test('A2 P3: wyjątek niskokwasowy związany z produktem i acidBasis, odporny na klucze prototypu, z pełnym źródłem i strażnikiem publikacji', async () => {
  const { WYJATKI_NISKOKWASOWE } = await import('../tools/validate-catalog.mjs');
  const D = '2026-11-02-jaratlas-06-katalog-a2';
  const r = [claim('T-1'), claim('ACI-282'), claim('ACI-283'), claim('ACI-153')];
  const kat = (id, zm = {}, prodAcidity = 'low-acid') => {
    const c = base(); c.products.push({ id: 'corn', acidity: prodAcidity, acidityClaim: 'T-1' }, { id: 'pineapple-banana', acidity: prodAcidity, acidityClaim: 'T-1' });
    const v = { id, productId: id.replace(/-v\d+$/, ''), processFamilyId: 'canned-foods', preservationMethod: 'water-bath', safetyStatus: 'ok-zrodlo', sources: [recipe], publication: 'ukryta', scope: 'in', acidityException: { decyzja: D } };
    if (id.startsWith('corn')) Object.assign(v, { acidBasis: 'sugar-acid', claims: ['T-1', 'ACI-282', 'ACI-283'] });
    else Object.assign(v, { acidBasis: 'natural-acid', claims: ['T-1', 'ACI-153'] });
    c.variants.push({ ...v, ...zm });
    return c;
  };
  for (const w of Object.values(WYJATKI_NISKOKWASOWE)) assert.ok(w.productId, 'wpis listy wskazuje produkt');
  // P3-1: martwe pole przy acidified (wyjątek bez zastosowania) = błąd, jak przy morelach.
  assert.ok(has(errs(kat('corn-v09', { acidBasis: 'acidified' }), r), /corn-v09: acidityException bez zastosowania/));
  // P3-2: inny produkt z tym samym ID wariantu = błąd; klucz prototypu nie wywraca walidacji.
  assert.ok(has(errs(kat('corn-v09', { productId: 'green-beans' }), r), /corn-v09/));
  const c = base(); c.variants.push({ id: 'constructor', productId: 'green-beans', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: 'sugar-acid', safetyStatus: 'ok-zrodlo', claims: ['T-1'], sources: [recipe], publication: 'ukryta', scope: 'in' });
  assert.doesNotThrow(() => errs(c, r));
  assert.ok(has(errs(c, r), /constructor: produkt niskokwasowy/));
  // P3-3: pojedyncze braki we wpisie szczebla 1; zamiana acidBasis między wpisami; produkt nie-niskokwasowy z wyjątkiem.
  for (const [opis, z] of [['bez adresu', { adres: undefined }], ['bez cytatu i miejsca', { cytat: undefined, miejsce: undefined }], ['bez daty', { odczyt: undefined }]]) {
    assert.ok(has(errs(kat('corn-v09', { sources: [{ ...recipe, ...z }] }), r), /corn-v09.*niskokwas/), opis);
  }
  assert.ok(has(errs(kat('corn-v09', { acidBasis: 'natural-acid' }), r), /corn-v09.*niskokwas/));
  assert.ok(has(errs(kat('pineapple-banana-v07', { acidBasis: 'sugar-acid' }), r), /pineapple-banana-v07.*niskokwas/));
  assert.ok(has(errs(kat('corn-v09', {}, 'acid'), r), /corn-v09: acidityException bez zastosowania/));
  const z = base(); Object.assign(z.variants[1], { preservationMethod: 'water-bath', acidBasis: 'acidified', acidityException: { decyzja: D } });
  assert.ok(has(errs(z, r), /green-beans-v01: acidityException bez zastosowania/));
  // Strażnik: corn-v09 poza „ukryta” wymaga ACI-283 w requiredWarnings (karta w torze C4; przegląd D-043 A2).
  assert.ok(has(errs(kat('corn-v09', { publication: 'opublikowana' }), r), /corn-v09.*ACI-283/));
  assert.ok(!has(errs(kat('corn-v09', { publication: 'opublikowana', requiredWarnings: ['ACI-283'] }), r), /corn-v09.*ACI-283/));
});

test('A2 P3-5: nazwy apricot-v06, corn-v09 i cytrusów p22 zgodne z kartami', () => {
  const V = new Map(JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8')).variants.map((v) => [v.id, v]));
  for (const [id, n] of Object.entries({
    'apricot-v06': 'dżem morelowy bez dodatku pektyny',
    'corn-v09': 'galaretka z wywaru z kolb kukurydzy z pektyną',
    'lemon-v16': 'cytryny mrożone: cząstki i sok',
    'orange-kumquat-v15': 'pomarańcze mrożone: cząstki i sok',
    'grapefruit-v10': 'grejpfrut mrożony: cząstki i sok',
  })) assert.equal(V.get(id).name.pl, n, id);
});

test('p23 (A2 otwarte): corn-v09 ma ACI-283 w requiredWarnings, a karta en/pl ma je jako ostrzeżenie', () => {
  // Dlaczego: reguła „tylko dokładnie według przepisu” chroni kwaśność galaretki z niskokwasowej kukurydzy; jako zwykły akapit mogła zniknąć z karty bez błędu.
  const V = new Map(JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8')).variants.map((v) => [v.id, v]));
  assert.ok((V.get('corn-v09').requiredWarnings ?? []).includes('ACI-283'));
  for (const L of ['en', 'pl']) {
    const k = JSON.parse(readFileSync(`docs/tresci/karty/${L}/warianty/corn-v09.json`, 'utf8'));
    assert.ok(k.ostrzezenia.some((o) => o.claim === 'ACI-283'), L);
  }
});

test('p25 porcja 1 (C7, B7): suszenie — warianty bez źródła ukryte jako do-researchu, kania ryzyko-wysokie, grzyby dzikie z ostrzeżeniami', () => {
  // Dlaczego: C7-D2/B7-D5 (bez źródła szczebla 1–3 wariant nie wchodzi do kart; trening CLAUDE.md:121) i B7-D3 (kania mylona z muchomorem sromotnikowym, SUS-141).
  const V = new Map(JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8')).variants.map((v) => [v.id, v]));
  for (const id of ['chokeberry-seabuckthorn-v11', 'chokeberry-seabuckthorn-v12', 'raspberry-blackberry-v15', 'horseradish-v11', 'green-beans-v14']) {
    assert.equal(V.get(id).safetyStatus, 'do-researchu', id);
    assert.equal(V.get(id).publication, 'ukryta', id);
  }
  const kania = V.get('wild-mushrooms-v09');
  assert.equal(kania.safetyStatus, 'ryzyko-wysokie');
  assert.equal(kania.cardType, 'warning');
  for (const c of ['SUS-035', 'SUS-141', 'SUS-142']) assert.ok(kania.requiredWarnings.includes(c), `kania ${c}`);
  assert.ok(kania.claims.includes('SUS-145') && !kania.claims.includes('SUS-036'), 'kania: karta-ostrzeżenie bez procedury suszenia (P3 D-043)');
  for (const id of ['boletes-v11', 'boletes-v12', 'chanterelle-milkcap-v13']) {
    for (const c of ['SUS-035', 'SUS-138', 'SUS-142']) assert.ok((V.get(id).requiredWarnings ?? []).includes(c), `${id} ${c}`);
  }
  for (const [id, n] of Object.entries({
    'potato-sunchoke-v12': 'suszone słupki ziemniaczane do zup',
    'green-beans-v13': 'suszona w strąkach przekrojonych wzdłuż',
    'cranberry-lingonberry-v13': 'żurawina suszona',
  })) assert.equal(V.get(id).name.pl, n, id);
  assert.ok(!/topinambur|kostk/i.test(V.get('potato-sunchoke-v12').name.pl));
  assert.ok(!/sok/i.test(V.get('cranberry-lingonberry-v13').name.pl), 'opcja A C7-D7: bez słodzenia sokiem');
});
