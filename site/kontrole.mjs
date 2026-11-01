// Kontrole publikacji (ścieżki ryzyka R2–R4, docs/architektura/ryzyka.md). Czyste funkcje: zwracają listy błędów.
import { ZNACZNIKI_ZASLEPEK } from './konfiguracja.mjs';

const teksty = (x) => (typeof x === 'string' ? [x] : x && typeof x === 'object' ? Object.values(x).flatMap(teksty) : []);
const znalezione = (x) => ZNACZNIKI_ZASLEPEK.filter((re) => teksty(x).some((t) => re.test(t))).map((re) => re.source.replace(/\\b|\\/g, '').replace(/^lorem ipsum$/, 'lorem ipsum'));

// R2: zaślepki w treści stron z planu i w tekstach interfejsu języków, które mają strony.
export function kontrolaZaslepek(strony, tresci, ui) {
  const bledy = [];
  for (const st of strony) {
    const tr = st.typ === 'wariant' ? tresci[st.lang]?.warianty?.[st.id] : st.typ === 'rodzina' ? tresci[st.lang]?.rodziny?.[st.id] : null;
    for (const z of tr ? znalezione(tr) : []) bledy.push(`${st.lang}/${st.id}: zaślepka „${z}”`);
  }
  for (const lang of new Set(strony.map((s) => s.lang).filter(Boolean))) {
    for (const z of znalezione(ui[lang])) bledy.push(`${lang}: zaślepka „${z}” w tekstach interfejsu`);
  }
  return bledy;
}

// R3: ostrzeżenia i uwaga D-027 (c) nie mogą być puste.
export function kontrolaOstrzezen(strony, katalog, tresci, ui) {
  const bledy = [], V = new Map(katalog.variants.map((v) => [v.id, v]));
  for (const st of strony.filter((s) => s.typ === 'wariant')) {
    const ostrz = tresci[st.lang]?.warianty?.[st.id]?.ostrzezenia ?? [];
    if (V.get(st.id).cardType === 'warning' && !ostrz.length) bledy.push(`${st.lang}/${st.id}: karta-ostrzeżenie bez ostrzeżenia`);
    for (const o of ostrz) if (!String(o.tekst ?? '').trim()) bledy.push(`${st.lang}/${st.id}: puste ostrzeżenie ${o.claim}`);
  }
  for (const lang of new Set(strony.map((s) => s.lang).filter(Boolean))) {
    if (ui[lang] && !String(ui[lang].uwagaBezpieczenstwa ?? '').trim()) bledy.push(`${lang}: pusta uwaga D-027 (c)`);
  }
  return bledy;
}

// R4: adres raz opublikowany nie znika bez 301 (ADR 0002, 0003). adresy = { opublikowane: [sciezka], przekierowania: {stara: nowa} }.
export function kontrolaPrzekierowan(strony, adresy = {}) {
  const bledy = [], plan = new Set(strony.map((s) => s.sciezka));
  const przek = adresy.przekierowania ?? {};
  for (const p of adresy.opublikowane ?? []) if (!plan.has(p) && !przek[p]) bledy.push(`adres opublikowany zniknął bez przekierowania 301: ${p}`);
  for (const [z, cel] of Object.entries(przek)) {
    if (plan.has(z)) bledy.push(`przekierowanie z adresu, który nadal ma stronę: ${z}`);
    if (!plan.has(cel)) bledy.push(`przekierowanie ${z} do adresu spoza planu: ${cel}`);
  }
  const przekierowania = Object.entries(przek).map(([z, cel]) => ({ z, do: cel })).sort((a, b) => a.z.localeCompare(b.z));
  return { bledy, przekierowania };
}
