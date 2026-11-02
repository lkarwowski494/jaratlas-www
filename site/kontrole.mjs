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

// R2, druga warstwa (07-jakosc-004): zaślepki w gotowych plikach łapią każde źródło tekstu (katalog, nazwy języków, rodziny, szablony).
// Pierwsza warstwa zostaje, bo wskazuje plik treści, nie tylko stronę.
export function kontrolaZaslepekPlikow(pliki) {
  const bledy = [];
  for (const [plik, tekst] of Object.entries(pliki)) for (const z of znalezione(tekst)) bledy.push(`${plik}: zaślepka „${z}” w wygenerowanym pliku`);
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
    // C3-09 (07-jakosc C6): bez warunku ui[lang] — brak tekstów interfejsu to też brak uwagi; R3 nie polega na błędzie z generuj.mjs.
    if (!String(ui?.[lang]?.uwagaBezpieczenstwa ?? '').trim()) bledy.push(`${lang}: pusta uwaga D-027 (c)`);
  }
  return bledy;
}

// Teksty strony języka (rola 04, zmiana 2026-11-02): nagłówek listy wymagany, gdy lista się pojawia; opis zawsze.
// Tylko niepusty napis (przegląd D-043 P2-2: obiekt dawał „[object Object]”). [DO USTALENIA] łapie R2.
export function kontrolaTekstowJezyka(strony, ui) {
  const bledy = [];
  for (const st of strony.filter((s) => s.typ === 'jezyk')) {
    for (const [k, potrzebny] of [['produkty', st.produkty.length], ['rodziny', st.rodziny.length], ['opisStronyJezyka', 1]]) {
      const t = ui?.[st.lang]?.[k];
      if (potrzebny && !(typeof t === 'string' && t.trim())) bledy.push(`${st.lang}: brak tekstu interfejsu „${k}” (site/teksty/${st.lang}.json)`);
    }
  }
  return bledy;
}

// Nazwy na stronie (decyzje koordynatora 2026-11-02, przegląd D-043 P2-1, P3-3; decyzja Claude, do weta): surowe ID ani kod języka nie trafiają na stronę.
// Produkt ze stroną w języku L wymaga ui[L].nazwyProduktow[id]; język ze stroną wymaga nazwy w site/jezyki.json (odnośniki na „/”).
const napis = (t) => typeof t === 'string' && t.trim() !== '';
export function kontrolaNazw(strony, ui, nazwyJezykow = {}) {
  const bledy = [];
  for (const st of strony.filter((s) => s.typ === 'produkt')) {
    if (!napis(ui?.[st.lang]?.nazwyProduktow?.[st.id])) bledy.push(`${st.lang}: brak nazwy produktu „${st.id}” w nazwyProduktow (site/teksty/${st.lang}.json)`);
  }
  for (const st of strony.filter((s) => s.typ === 'jezyk')) if (!napis(nazwyJezykow?.[st.lang])) bledy.push(`${st.lang}: brak nazwy języka w site/jezyki.json`);
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
