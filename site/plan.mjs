// Plan stron: jedyne miejsce bramki publikacji (ADR 0003). Czysta funkcja, bez I/O.
import { JEZYKI, PISMA_NIELACINSKIE, katalogJezyka } from './konfiguracja.mjs';

const SLUG_LACINSKI = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SLUG_INNY = /^[^\s/?#%A-Z]+$/u;

export function wariantPublikowalny(v) {
  if (v.publication !== 'opublikowana' || v.scope !== 'in' || v.retired) return false;
  if (!v.content) return false;
  // Lista dozwolonych, nie zakazanych: nieznany albo brakujący status = brak strony (R1).
  if (v.safetyStatus === 'ok-zrodlo') return true;
  return ['ryzyko-wysokie', 'nie-publikowac'].includes(v.safetyStatus) && v.cardType === 'warning';
}

// slugi: { [lang]: { rodziny: {_prefiks, id: slug}, produkty: {id: slug}, warianty: {id: slug} } }
export function sprawdzSlugi(slugi) {
  const bledy = [];
  for (const [lang, s] of Object.entries(slugi)) {
    if (!JEZYKI.includes(lang)) { bledy.push(`${lang}: język spoza listy 35`); continue; }
    const wzor = PISMA_NIELACINSKIE.includes(lang) ? SLUG_INNY : SLUG_LACINSKI;
    const wszystkie = [['_prefiks', s.rodziny?._prefiks], ...Object.entries(s.rodziny ?? {}).filter(([k]) => k !== '_prefiks'), ...Object.entries(s.produkty ?? {}), ...Object.entries(s.warianty ?? {})];
    for (const [id, slug] of wszystkie) if (slug !== undefined && !wzor.test(slug)) bledy.push(`${lang}: zły slug ${id} = "${slug}"`);
    const prod = Object.values(s.produkty ?? {});
    const dup = prod.filter((x, i) => prod.indexOf(x) !== i);
    if (dup.length) bledy.push(`${lang}: powtórzone slugi produktów: ${[...new Set(dup)].join(', ')}`);
    if (s.rodziny?._prefiks && prod.includes(s.rodziny._prefiks)) bledy.push(`${lang}: slug produktu koliduje z prefiksem rodzin "${s.rodziny._prefiks}"`);
    const rodz = Object.entries(s.rodziny ?? {}).filter(([k]) => k !== '_prefiks').map(([, x]) => x);
    if (rodz.some((x, i) => rodz.indexOf(x) !== i)) bledy.push(`${lang}: powtórzone slugi rodzin`);
  }
  return bledy;
}

// tresci: { [lang]: { warianty: {id: {...}}, rodziny: {id: {...}} } }
export function planStron(katalog, slugi, tresci) {
  const bledy = sprawdzSlugi(slugi);
  const strony = [];
  const wariantyProduktu = new Map();
  for (const lang of Object.keys(slugi)) {
    const s = slugi[lang], t = tresci[lang] ?? {}, kat = katalogJezyka(lang);
    for (const v of katalog.variants) {
      if (!wariantPublikowalny(v)) continue;
      const sp = s.produkty?.[v.productId], sw = s.warianty?.[v.id], tr = t.warianty?.[v.id];
      if (!sp || !sw || !tr) continue; // brak w tym języku = brak strony (fale)
      for (const claim of v.requiredWarnings ?? []) {
        if (!(tr.ostrzezenia ?? []).some((o) => o.claim === claim)) bledy.push(`${lang}/${v.id}: treść bez wymaganego ostrzeżenia ${claim}`);
      }
      const sciezka = `/${kat}/${sp}/${sw}/`;
      strony.push({ typ: 'wariant', encja: `wariant:${v.id}`, lang, sciezka, id: v.id, productId: v.productId });
      const k = `${lang}|${v.productId}`;
      if (!wariantyProduktu.has(k)) wariantyProduktu.set(k, []);
      wariantyProduktu.get(k).push(v.id);
    }
    for (const p of katalog.products) {
      const ids = wariantyProduktu.get(`${lang}|${p.id}`);
      if (!ids) continue; // produkt bez opublikowanego wariantu = brak strony (ADR 0003)
      strony.push({ typ: 'produkt', encja: `produkt:${p.id}`, lang, sciezka: `/${kat}/${s.produkty[p.id]}/`, id: p.id, warianty: ids });
    }
    for (const f of katalog.processFamilies) {
      const sf = s.rodziny?.[f.id];
      if (!sf || !s.rodziny?._prefiks || !t.rodziny?.[f.id]) continue;
      strony.push({ typ: 'rodzina', encja: `rodzina:${f.id}`, lang, sciezka: `/${kat}/${s.rodziny._prefiks}/${sf}/`, id: f.id });
    }
  }
  const sciezki = strony.map((x) => x.sciezka);
  const dup = sciezki.filter((x, i) => sciezki.indexOf(x) !== i);
  if (dup.length) bledy.push(`kolizja adresów: ${[...new Set(dup)].join(', ')}`);
  const jezyki = [...new Set(strony.map((x) => x.lang))].sort();
  strony.push({ typ: 'wybor-jezyka', encja: 'wybor-jezyka', lang: null, sciezka: '/', jezyki });
  // Alternatywy hreflang: ta sama encja w innych językach (ADR 0004); zbiór symetryczny z konstrukcji.
  const poEncji = new Map();
  for (const st of strony) if (st.lang) (poEncji.get(st.encja) ?? poEncji.set(st.encja, []).get(st.encja)).push(st);
  for (const st of strony) if (st.lang) st.alternatywy = poEncji.get(st.encja).map((x) => ({ lang: x.lang, sciezka: x.sciezka }));
  return { strony, bledy };
}
