// Scala wyniki 9 klastrów w katalog v1 i jeden rejestr twierdzeń. Deterministyczne; reguły opisane w raporcie E1.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const S = process.argv[2], OUT = `${S}/v1`; mkdirSync(OUT, { recursive: true });
const K = ['FER', 'ACI', 'SZY', 'SLO', 'OLE', 'SUS', 'NAP', 'MLE', 'MIE'];
const J = (p) => JSON.parse(readFileSync(p, 'utf8'));
const v0 = J(`${S}/v0.json`);
const SEV = { 'nie-publikowac': 3, 'ryzyko-wysokie': 2, 'ok-zrodlo': 1, 'do-researchu': 0 };
const log = { konflikty: [], recznie: [], zrodlaBezCytatu: [], robocze: [], metodaV0: [], wycofane: [] };

// 1. Rejestr
const rejestr = []; const reg = new Map();
for (const k of K) for (const t of J(`${S}/badania/${k}/rejestr.json`)) { const { klucz, ...c } = t; c.klaster = k; rejestr.push(c); reg.set(c.id, c); }
// Korekty brzmienia E1: pint/quart USA to nie 0,5/1 l (rachunek: 1 US pint = 473,2 ml, 1 quart = 946,4 ml, 1/2 pint = 236,6 ml).
const FIX_TW = {
  'SZY-016': [['słoiki 0,5 l (pint) 55 min, 1 l (quart) 90 min', 'słoiki pint (ok. 0,47 l) 55 min, quart (ok. 0,95 l) 90 min']],
  'SZY-021': [['w słoikach 0,25 l lub 0,5 l (half-pint/pint)', 'w słoikach half-pint lub pint (ok. 0,24 l lub 0,47 l)']],
};
for (const [id, zm] of Object.entries(FIX_TW)) { const t = reg.get(id); for (const [a, b] of zm) { if (!t.twierdzenie.includes(a)) throw new Error(`FIX_TW ${id}: brak „${a}”`); t.twierdzenie = t.twierdzenie.replace(a, b); } t.uproszczenie = [t.uproszczenie, 'E1: objętości słoików USA przeliczone (rachunek), nie zaokrąglane do 0,5/1 l.'].filter(Boolean).join(' '); }
// Ta sama nazwa wielkości dla różnych przedmiotów (różne produkty) to nie sprzeczność: nazwa dostaje ID twierdzenia.
{ const g = {}; for (const t of rejestr) if (t.wielkosc) (g[t.wielkosc] ??= []).push(t);
  for (const ts of Object.values(g)) if (new Set(ts.map((t) => `${t.wartosc} ${t.jednostka ?? ''}`)).size > 1) for (const t of ts) t.wielkosc = `${t.wielkosc} · ${t.id}`; }
const potw = (id) => reg.get(id)?.status === 'potwierdzone';
const zrodloPo = new Map(); // adres -> obiekt źródła z cytatem
for (const t of rejestr) for (const z of t.zrodla ?? []) if (z.adres && !zrodloPo.has(z.adres)) zrodloPo.set(z.adres, z);
const normSrc = (s, id) => {
  const o = typeof s === 'string' ? { adres: s } : { ...s };
  const z = zrodloPo.get(o.adres) ?? [...zrodloPo.values()].find((x) => o.sha12 && x.sha12 === o.sha12);
  const r = { adres: o.adres, miejsce: o.miejsce ?? z?.miejsce ?? o.tytul ?? null, cytat: o.cytat ?? z?.cytat ?? null, odczyt: o.odczyt ?? z?.odczyt ?? '2026-11-01', szczebel: o.szczebel ?? z?.szczebel ?? null };
  if (!r.cytat || !r.szczebel) log.zrodlaBezCytatu.push(`${id} ${o.adres}`);
  return r;
};

// 2. Wpisy klastrów
const by = {};
for (const k of K) for (const w of J(`${S}/badania/${k}/warianty.json`)) (by[w.id] ??= []).push({ k, ...w });
const RECZNIE = { 'turnip-rutabaga-v07': 'SZY' }; // Penn State: przetestowany proces w szybkowarze (SZY-051), sprawdzone 2026-11-01
const kw = new Map(J(`${S}/badania/ACI/kwasowosc-produktow.json`).map((p) => [p.productId, p]));

const variants = [];
for (const v of v0.warianty) {
  const e = by[v.id] ?? [];
  const own = e.filter((x) => !x.inny_klaster);
  const pool = own.length ? own : e;
  let pick = RECZNIE[v.id] ? e.find((x) => x.k === RECZNIE[v.id]) : [...pool].sort((a, b) => SEV[b.safetyStatus] - SEV[a.safetyStatus])[0];
  if (RECZNIE[v.id]) log.recznie.push(`${v.id}: wybrano ${RECZNIE[v.id]}`);
  // Ostrzejszy status spoza właściciela: przejmij, chyba że właściciel ma przeczytany przepis (wtedy do ręcznego przeglądu).
  const ostrzejszy = e.filter((x) => SEV[x.safetyStatus] >= 2 && SEV[x.safetyStatus] > SEV[pick.safetyStatus]).sort((a, b) => SEV[b.safetyStatus] - SEV[a.safetyStatus])[0];
  if (ostrzejszy && !RECZNIE[v.id]) {
    if (pick.safetyStatus === 'ok-zrodlo') log.konflikty.push(`${v.id}: ${pick.k} ok-zrodlo vs ${ostrzejszy.k} ${ostrzejszy.safetyStatus}`);
    else pick = ostrzejszy;
  }
  const claims = [...new Set(e.flatMap((x) => (SEV[x.safetyStatus] >= SEV[pick.safetyStatus] || x === pick) ? x.claims ?? [] : []))];
  const ok = claims.filter(potw), rob = claims.filter((c) => !potw(c));
  let status = pick.safetyStatus, uwagiDod = [];
  if (rob.length) log.robocze.push(`${v.id}: ${rob.join(',')}`);
  // ok-zrodlo wymaga przepisu przeczytanego dosłownie: twierdzenie robocze (np. odczyt narzędziem) obniża status (E1, oliwki UC 8267).
  if (status === 'ok-zrodlo' && rob.length) { uwagiDod.push(`Status ok-zrodlo obniżony do do-researchu: przepis ma twierdzenia robocze (${rob.join(', ')}), niesprawdzone dosłownie.`); status = 'do-researchu'; }
  if (status !== 'do-researchu' && !ok.length) { uwagiDod.push(`Status ${status} obniżony do do-researchu: twierdzenia tylko robocze (${rob.join(', ')}).`); status = 'do-researchu'; }
  const p = v0.produkty.find((x) => x.id === v.produkt), acid = kw.get(v.produkt)?.acidity;
  const fam = pick.processFamilyId;
  let method = pick.preservationMethod ?? null;
  const base = { 'lacto-fermentation': 'fermented', 'vinegar-pickling': 'acidified' }[fam]
    ?? (fam === 'canned-foods' || fam === 'sweet-preserves'
      ? (acid === 'acid' ? (fam === 'sweet-preserves' ? 'sugar-acid' : 'natural-acid') : (status === 'ok-zrodlo' && method === 'water-bath' ? 'acidified' : (acid === 'borderline' ? 'acidified' : 'low-acid')))
      : 'not-applicable');
  let methodV0 = null;
  const zle = method === 'water-bath' && (base === 'low-acid' || base === 'not-applicable');
  if (zle && status !== 'ok-zrodlo') { methodV0 = method; method = null; log.metodaV0.push(v.id); }
  const scalic = e.find((x) => x.scalic_z)?.scalic_z;
  const poza = (own.length ? own : e).find((x) => x.poza_zakresem)?.poza_zakresem;
  const rec = {
    id: v.id, productId: v.produkt, name: { pl: v.nazwa_v0 }, groupV0: v.grupa_v0, lineV0: v.linia_v0,
    processFamilyId: fam, preservationMethod: method, ...(methodV0 ? { preservationMethodV0: methodV0 } : {}),
    acidBasis: base, safetyStatus: status, claims: ok, ...(rob.length ? { pendingClaims: rob } : {}),
    sources: status === 'ok-zrodlo' ? (pick.sources ?? []).map((s) => normSrc(s, v.id)) : [],
    filters: { flavor: null, readyTime: null, equipment: null, difficulty: null },
    notes: [...e.map((x) => x.uwagi ? `[${x.k}${x === pick ? '*' : ''}] ${x.uwagi}` : null).filter(Boolean), ...uwagiDod],
    scope: poza ? 'out-of-scope' : 'in', ...(poza ? { scopeNote: poza } : {}),
    publication: 'ukryta', researchedBy: e.map((x) => x.k),
  };
  if (scalic) rec.mergeCandidate = scalic;
  // Korekty ręczne E1 (2026-11-01), opisane w raporcie E1 §4.
  const KOR = {
    'bell-pepper-v09': (r) => Object.assign(r, { processFamilyId: 'vinegar-pickling', acidBasis: 'acidified', notes: [...r.notes, '[E1] Rodzina vinegar-pickling: przepis NCHFP Marinated Peppers jest piklem zakwaszonym (sekcja Pickles). Karta tylko wg przepisu; wersja bez kwasu to reguła OLE-002.'] }),
    'cultivated-mushrooms-v07': (r) => Object.assign(r, { processFamilyId: 'vinegar-pickling', acidBasis: 'acidified', safetyStatus: 'do-researchu', preservationMethod: null, preservationMethodV0: 'water-bath', sources: [], notes: [...r.notes, '[E1] Obniżone do do-researchu: białe wino zamiast octu to zmiana kwasu nieobjęta przepisem NCHFP Marinated Whole Mushrooms (najbliższy przetestowany).'] }),
  };
  // Dzikie grzyby: karta zawsze z ostrzeżeniem o identyfikacji gatunku (SUS-035, NCHFP/extension).
  if (['boletes', 'chanterelle-milkcap', 'wild-mushrooms'].includes(v.produkt)) rec.requiredWarnings = ['SUS-035'];
  if (KOR[v.id]) { KOR[v.id](rec); log.recznie.push(`${v.id}: korekta E1`); }
  variants.push(rec);
}
// Duplikaty: wariant ze scalic_z zostaje wycofany na rzecz wskazanego (jeśli ten nie jest sam wycofywany).
const ids = new Map(variants.map((x) => [x.id, x]));
// Scalenia odrzucone w E1: różne, nazwane wyroby o tym samym procesie to nie duplikaty.
const BEZ_SCALENIA = new Set(['dry-cured-sausages-v04', 'dry-cured-sausages-v09', 'beef-veal-v11']);
for (const x of variants) if (x.mergeCandidate && BEZ_SCALENIA.has(x.id)) { x.notes.push(`[E1] Propozycja scalenia z ${x.mergeCandidate} odrzucona: odrębny wyrób.`); delete x.mergeCandidate; }
for (const x of variants) if (x.mergeCandidate) {
  const y = ids.get(x.mergeCandidate);
  if (!y || y.mergeCandidate === x.id && x.id > y.id) continue;
  if (y.retired) continue;
  x.retired = { reason: 'duplikat', replacedBy: y.id }; log.wycofane.push(`${x.id} → ${y.id}`);
}

// 3. Rodziny
const famMap = new Map();
for (const k of K) for (const f of J(`${S}/badania/${k}/rodziny.json`)) {
  const m = famMap.get(f.id) ?? { id: f.id, thresholds: [], prohibitions: [], researchedBy: [] };
  m.researchedBy.push(k);
  for (const t of f.thresholds ?? []) {
    if (t.claim && !potw(t.claim)) m.thresholds.push({ wielkosc: t.wielkosc, wartosc: null, jednostka: t.jednostka, pytanie: `twierdzenie ${t.claim} robocze (${k})` });
    else m.thresholds.push({ ...t, klaster: k });
  }
  for (const z of f.regulyZakazu ?? []) if (z.claim && potw(z.claim)) m.prohibitions.push({ opis: z.opis, claim: z.claim, klaster: k });
  famMap.set(f.id, m);
}
for (const x of variants) if (!x.retired && x.processFamilyId && !famMap.has(x.processFamilyId)) famMap.set(x.processFamilyId, { id: x.processFamilyId, thresholds: [], prohibitions: [], researchedBy: [] });
for (const f of famMap.values()) f.allowedMethods = [...new Set(variants.filter((x) => !x.retired && x.processFamilyId === f.id && x.preservationMethod).map((x) => x.preservationMethod))].sort();

const products = v0.produkty.map((p) => ({ id: p.id, name: { pl: p.nazwa }, category: p.kategoria, acidity: kw.get(p.id)?.acidity ?? null, acidityClaim: kw.get(p.id)?.claim ?? null, acidityNote: kw.get(p.id)?.opis ?? null, season: null }));
const catalog = { version: '1.0.0-e1', generated: '2026-11-01', source: 'katalog v0 (Słoik docs/jaratlas/01-katalog-v0.md) + research 9 klastrów', categories: v0.kategorie, processFamilies: [...famMap.values()], products, variants };
writeFileSync(`${OUT}/catalog-seed.json`, JSON.stringify(catalog, null, 1));
writeFileSync(`${OUT}/rejestr.json`, JSON.stringify(rejestr, null, 1));
writeFileSync(`${OUT}/scal-log.json`, JSON.stringify(log, null, 1));
const cnt = (f) => variants.reduce((a, x) => (a[f(x)] = (a[f(x)] ?? 0) + 1, a), {});
console.log('warianty', variants.length, cnt((x) => x.retired ? 'wycofany' : x.safetyStatus), cnt((x) => x.scope));
console.log('rodziny', [...famMap.keys()].join(','));
console.log(Object.fromEntries(Object.entries(log).map(([k, v]) => [k, v.length])));
console.log('konflikty:', log.konflikty.join(' | '));
