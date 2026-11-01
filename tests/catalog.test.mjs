// Testy walidatora katalogu JarAtlas (node --test). Reguły z przekazania §5.4 i decyzji 2026-11-01-jaratlas-katalog-v1-model.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
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
  for (const ab of ['sugar-acid', 'fermented']) {
    const c = base(); c.variants.push({ id: 'tomato-v03', productId: 'tomato', processFamilyId: 'canned-foods', preservationMethod: 'water-bath', acidBasis: ab, safetyStatus: 'do-researchu', claims: [], sources: [], publication: 'ukryta', scope: 'in' });
    assert.ok(has(errs(c), /tomato-v03.*graniczn/), ab);
  }
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
