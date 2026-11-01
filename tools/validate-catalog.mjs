// validate-catalog.mjs — walidacja katalogu JarAtlas (catalog-seed.json) względem rejestru twierdzeń. Bez zależności.
// Użycie: node tools/validate-catalog.mjs [catalog/catalog-seed.json] [docs/tresci/rejestr.json]
// Kod wyjścia: 0 bez błędów, 1 są błędy, 2 złe wywołanie.
// Słowniki: decyzja 2026-11-01-jaratlas-katalog-v1-model (tablica decyzji).
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const METHODS = ['refrigerator', 'freezer', 'water-bath', 'pressure-canning', 'low-temp-pasteurization', 'dry-storage', 'cool-storage', 'none'];
export const STATUSES = ['ok-zrodlo', 'do-researchu', 'ryzyko-wysokie', 'nie-publikowac'];
export const PUBLICATION = ['ukryta', 'opublikowana'];
export const ACIDITY = ['acid', 'low-acid', 'borderline'];
export const ACID_BASIS = ['natural-acid', 'acidified', 'fermented', 'sugar-acid', 'low-acid', 'not-applicable'];
export const SCOPE = ['in', 'out-of-scope', 'bridge'];

// Produkt graniczny → twierdzenie ostrzeżenia, z którym przepis szczebla 1 bez zakwaszenia może być w kąpieli wodnej (decyzja 2026-11-02-jaratlas-06-katalog-p4).
export const WYJATKI_KWAS = Object.freeze({ apricot: Object.freeze({ warning: 'E3-002', decyzja: '2026-11-02-jaratlas-06-katalog-p4' }) });

export function validateCatalog(cat, rejestr = []) {
  const errors = [], warnings = [];
  const claims = new Map(rejestr.map((t) => [t.id, t]));
  const ids = new Map(); // ID unikalne w obrębie typu: rodzina, produkt, wariant
  const uniq = (id, co) => { const s = ids.get(co) ?? new Set(); if (s.has(id)) errors.push(`${co}: powtórzone ID ${id}`); s.add(id); ids.set(co, s); };
  const claimOk = (id, gdzie) => {
    const t = claims.get(id);
    if (!t) errors.push(`${gdzie}: nieznane twierdzenie ${id}`);
    else if (t.status !== 'potwierdzone') errors.push(`${gdzie}: twierdzenie ${id} ma status „${t.status}” (robocze nie wystarcza)`);
  };

  const fam = new Map();
  for (const f of cat.processFamilies ?? []) {
    uniq(f.id, 'rodzina'); fam.set(f.id, f);
    for (const m of f.allowedMethods ?? []) if (!METHODS.includes(m)) errors.push(`rodzina ${f.id}: nieznana metoda ${m}`);
    for (const th of f.thresholds ?? []) {
      if (th.wartosc == null) { if (!th.pytanie) errors.push(`rodzina ${f.id}: próg ${th.wielkosc} bez wartości i bez pytania otwartego`); continue; }
      if (!th.claim) errors.push(`rodzina ${f.id}: próg ${th.wielkosc}=${th.wartosc} bez twierdzenia`); else claimOk(th.claim, `rodzina ${f.id} próg ${th.wielkosc}`);
      if (!['<=', '<', '>=', '>', '='].includes(th.granica)) errors.push(`rodzina ${f.id}: próg ${th.wielkosc} bez rodzaju granicy`);
    }
    for (const p of f.prohibitions ?? []) if (!p.claim) errors.push(`rodzina ${f.id}: zakaz „${p.opis}” bez twierdzenia`); else claimOk(p.claim, `rodzina ${f.id} zakaz`);
  }

  const prod = new Map();
  for (const p of cat.products ?? []) {
    uniq(p.id, 'produkt'); prod.set(p.id, p);
    if (!ACIDITY.includes(p.acidity)) errors.push(`produkt ${p.id}: kwasowość „${p.acidity}” spoza słownika`);
    else if (p.acidityClaim) claimOk(p.acidityClaim, `produkt ${p.id} kwasowość`);
    else errors.push(`produkt ${p.id}: kwasowość bez twierdzenia`);
  }

  const variants = cat.variants ?? [];
  const vids = new Set(variants.map((v) => v.id));
  for (const v of variants) {
    const g = `wariant ${v.id}`;
    uniq(v.id, 'wariant');
    if (!prod.has(v.productId)) errors.push(`${g}: nieznany produkt ${v.productId}`);
    if (!PUBLICATION.includes(v.publication)) errors.push(`${g}: publication „${v.publication}” spoza słownika`);
    if (v.retired) {
      if (!v.retired.replacedBy && !v.retired.reason?.startsWith('poza zakresem')) errors.push(`${g}: wycofany bez następcy (replacedBy) i bez powodu „poza zakresem…”`);
      else if (v.retired.replacedBy && !vids.has(v.retired.replacedBy)) errors.push(`${g}: następca ${v.retired.replacedBy} nie istnieje`);
      if (v.publication !== 'ukryta') errors.push(`${g}: wycofany nie może być opublikowany`);
      continue;
    }
    const f = fam.get(v.processFamilyId), p = prod.get(v.productId);
    // Rodzina i metoda „nieustalone” (null) są uczciwym stanem wiedzy, ale nie przy statusach, które coś twierdzą.
    if (v.processFamilyId == null) { if (v.safetyStatus !== 'do-researchu') errors.push(`${g}: rodzina nieustalona przy statusie ${v.safetyStatus}`); }
    else if (!f) errors.push(`${g}: nieznana rodzina ${v.processFamilyId}`);
    if (v.preservationMethod == null) { if (v.safetyStatus === 'ok-zrodlo') errors.push(`${g}: ok-zrodlo bez metody utrwalania`); }
    else if (!METHODS.includes(v.preservationMethod)) errors.push(`${g}: nieznana metoda ${v.preservationMethod}`);
    else if (f && !(f.allowedMethods ?? []).includes(v.preservationMethod)) errors.push(`${g}: metoda ${v.preservationMethod} niedozwolona w rodzinie ${f.id}`);
    if (!STATUSES.includes(v.safetyStatus)) errors.push(`${g}: safetyStatus „${v.safetyStatus}” spoza słownika`);
    if (!ACID_BASIS.includes(v.acidBasis)) errors.push(`${g}: acidBasis „${v.acidBasis}” spoza słownika`);
    if (!SCOPE.includes(v.scope)) errors.push(`${g}: scope „${v.scope}” spoza słownika`);
    // Kwasowość a kąpiel wodna (przekazanie §5.4; NCHFP: żywność niskokwasowa tylko szybkowar).
    if (p?.acidity === 'low-acid' && v.acidBasis === 'natural-acid') errors.push(`${g}: produkt niskokwasowy nie może mieć acidBasis natural-acid`);
    if (v.preservationMethod === 'water-bath') {
      const niskokwasowy = v.acidBasis === 'low-acid' || v.acidBasis === 'not-applicable';
      if (niskokwasowy) errors.push(`${g}: wariant niskokwasowy z metodą water-bath`);
      // Wyjątek (06, 2026-11-02, morele): przetestowany przepis szczebla 1 bez dodatku kwasu przy produkcie granicznym tylko z listy
      // WYJATKI_KWAS (produkt → ostrzeżenie i decyzja), z ostrzeżeniem wymaganym na karcie. Dlaczego lista w kodzie: reguła chroni przed
      // niezakwaszonymi pomidorami; nowy wyjątek wymaga zmiany kodu, testu i przeglądu D-043, nie tylko danych (przegląd D-043, 2026-11-02).
      const wyj = v.acidityException;
      const wzor = WYJATKI_KWAS[v.productId];
      const wyjOk = wyj?.warning && wzor?.warning === wyj.warning && wzor.decyzja === wyj.decyzja && v.safetyStatus === 'ok-zrodlo' && (v.requiredWarnings ?? []).includes(wyj.warning) && (v.sources ?? []).some((z) => z.szczebel === 1 && z.adres && (z.cytat || z.miejsce) && /^\d{4}-\d\d-\d\d$/.test(z.odczyt ?? ''));
      // Wariant ostrożny (P3-4 przeglądu D-043, 2026-11-02): każdy acidBasis inny niż acidified, nie tylko natural-acid.
      // P3-4 drugiego przeglądu D-043: przy low-acid/not-applicable błąd zgłasza już reguła wyżej, bez drugiego komunikatu.
      // Produkt niskokwasowy (07-jakosc-fix P2, obserwacja D-043 partii 6, 2026-11-02): w kąpieli wodnej tylko zakwaszony (acidified), wariant ostrożny
      // jak przy produkcie granicznym. fermented też błąd: przyszła karta (np. kapusta kiszona w słoikach) wymaga świadomej decyzji i zmiany reguły.
      // Bez drugiego komunikatu, gdy błąd zgłasza już reguła niskokwasowa wyżej albo reguła natural-acid.
      if (!niskokwasowy && p?.acidity === 'low-acid' && v.acidBasis !== 'acidified' && v.acidBasis !== 'natural-acid') errors.push(`${g}: produkt niskokwasowy w water-bath wymaga zakwaszenia (acidBasis acidified); fermented i sugar-acid nie wystarczą bez decyzji i zmiany reguły`);
      if (!niskokwasowy && p?.acidity === 'borderline' && v.acidBasis !== 'acidified' && !(v.acidBasis === 'natural-acid' && wyjOk)) errors.push(`${g}: produkt graniczny w water-bath wymaga zakwaszenia (acidBasis acidified) albo wyjątku acidityException z listy WYJATKI_KWAS (acidBasis natural-acid, ok-zrodlo, przepis szczebla 1, ostrzeżenie w requiredWarnings, decyzja z listy)`);
    }
    // acidityException (P3 z przeglądu D-043, 2026-11-02): wyjątek musi wskazywać decyzję (ID wpisu tablicy decyzji, zaczyna się datą),
    // a pole bez zastosowania to błąd, żeby martwy wyjątek nie został po zmianie wariantu albo produktu.
    if (v.acidityException != null) {
      const d = v.acidityException.decyzja;
      if (typeof d !== 'string' || !/^\d{4}-\d\d-\d\d-\S+$/.test(d)) errors.push(`${g}: acidityException bez poprawnej decyzji (jest: ${JSON.stringify(d)}; oczekiwane ID wpisu tablicy decyzji RRRR-MM-DD-…)`);
      if (!(v.preservationMethod === 'water-bath' && p?.acidity === 'borderline' && v.acidBasis === 'natural-acid')) errors.push(`${g}: acidityException bez zastosowania (wyjątek dotyczy tylko produktu granicznego w water-bath z acidBasis natural-acid); usuń pole albo popraw wariant`);
    }
    for (const id of v.claims ?? []) claimOk(id, g);
    for (const id of v.requiredWarnings ?? []) claimOk(id, `${g} ostrzeżenie`);
    if (v.safetyStatus !== 'do-researchu' && !(v.claims ?? []).length) errors.push(`${g}: status ${v.safetyStatus} bez twierdzenia (claims)`);
    if (v.safetyStatus === 'ok-zrodlo') {
      const s = v.sources ?? [];
      if (!s.length) errors.push(`${g}: ok-zrodlo bez źródła (przetestowany przepis)`);
      else if (!s.some((z) => [1, 2, 3].includes(z.szczebel) && z.adres && (z.cytat || z.miejsce) && /^\d{4}-\d\d-\d\d$/.test(z.odczyt ?? ''))) errors.push(`${g}: ok-zrodlo bez źródła ze szczebla 1–3 z adresem, miejscem i datą odczytu`);
    }
    // Typ karty wynika ze statusu (06, 2026-11-01): ryzyko-wysokie i nie-publikowac tylko jako karta-ostrzeżenie, także ukryte,
    // żeby zmiana publication nie mogła wypuścić zwykłej karty; inne statusy bez cardType, żeby zmiana statusu wymagała świadomej zmiany typu.
    const OSTRZEGAWCZE = ['ryzyko-wysokie', 'nie-publikowac'];
    if (v.cardType !== undefined && v.cardType !== 'warning') errors.push(`${g}: cardType „${v.cardType}” spoza słownika (tylko warning)`);
    else if (OSTRZEGAWCZE.includes(v.safetyStatus) && v.cardType !== 'warning') errors.push(`${g}: ${v.safetyStatus} wymaga cardType warning`);
    else if (!OSTRZEGAWCZE.includes(v.safetyStatus) && v.cardType === 'warning') errors.push(`${g}: cardType warning tylko przy ryzyko-wysokie i nie-publikowac (jest ${v.safetyStatus})`);
    if (v.publication === 'opublikowana') {
      if (v.scope !== 'in') errors.push(`${g}: opublikowana poza zakresem`);
      if (!v.content) errors.push(`${g}: opublikowana bez treści karty (content)`);
      if (v.safetyStatus === 'do-researchu') errors.push(`${g}: opublikowana ze statusem do-researchu`);
      if (['ryzyko-wysokie', 'nie-publikowac'].includes(v.safetyStatus) && v.cardType !== 'warning') errors.push(`${g}: ${v.safetyStatus} opublikowana tylko jako karta-ostrzeżenie (cardType warning)`);
    }
  }
  return { errors, warnings };
}

export function main(argv) {
  const [c = 'catalog/catalog-seed.json', r = 'docs/tresci/rejestr.json'] = argv;
  let cat, rej;
  try { cat = JSON.parse(readFileSync(c, 'utf8')); rej = JSON.parse(readFileSync(r, 'utf8')); } catch (e) { console.error(`Użycie: node tools/validate-catalog.mjs [katalog] [rejestr] (${e.message})`); return 2; }
  const { errors, warnings } = validateCatalog(cat, rej);
  for (const e of errors) console.log(`BŁĄD ${e}`);
  for (const w of warnings) console.log(`UWAGA ${w}`);
  const n = (s) => (cat.variants ?? []).filter((v) => !v.retired && v.safetyStatus === s).length;
  console.log(`${(cat.variants ?? []).length} wariantów (${STATUSES.map((s) => `${s} ${n(s)}`).join(', ')}, wycofane ${(cat.variants ?? []).filter((v) => v.retired).length}); ${errors.length} błędów, ${warnings.length} uwag`);
  return errors.length ? 1 : 0;
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) process.exitCode = main(process.argv.slice(2));
