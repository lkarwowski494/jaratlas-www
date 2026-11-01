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
      if (v.acidBasis === 'low-acid' || v.acidBasis === 'not-applicable') errors.push(`${g}: wariant niskokwasowy z metodą water-bath`);
      if (p?.acidity === 'borderline' && v.acidBasis === 'natural-acid') errors.push(`${g}: produkt graniczny w water-bath wymaga zakwaszenia (acidBasis acidified)`);
    }
    for (const id of v.claims ?? []) claimOk(id, g);
    for (const id of v.requiredWarnings ?? []) claimOk(id, `${g} ostrzeżenie`);
    if (v.safetyStatus !== 'do-researchu' && !(v.claims ?? []).length) errors.push(`${g}: status ${v.safetyStatus} bez twierdzenia (claims)`);
    if (v.safetyStatus === 'ok-zrodlo') {
      const s = v.sources ?? [];
      if (!s.length) errors.push(`${g}: ok-zrodlo bez źródła (przetestowany przepis)`);
      else if (!s.some((z) => [1, 2, 3].includes(z.szczebel) && z.adres && (z.cytat || z.miejsce) && /^\d{4}-\d\d-\d\d$/.test(z.odczyt ?? ''))) errors.push(`${g}: ok-zrodlo bez źródła ze szczebla 1–3 z adresem, miejscem i datą odczytu`);
    }
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
