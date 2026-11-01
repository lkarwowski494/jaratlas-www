// Plan stron: jedyne miejsce bramki publikacji (ADR 0003). Czysta funkcja, bez I/O.
import { JEZYKI, PISMA_NIELACINSKIE, katalogJezyka } from './konfiguracja.mjs';

const SLUG_LACINSKI = /^[a-z0-9]+(-[a-z0-9]+)*$/;
// Lista dozwolonych (07-jakosc-003): małe litery (Ll), znaki modyfikujące (Lm, np. japońskie „ー”), litery bez wielkości (Lo: kana, hangul, han),
// cyfry (Nd) i znaki łączące (M), łączniki tylko między członami. Bez kropek, ukośników, cudzysłowów, znaków HTML i wielkich liter.
// Bez znaków niewidocznych (Default_Ignorable_Code_Point, np. U+3164 wypełniacz hangul w Lo, U+034F w Mn): adres wyglądałby jak inny (obserwacja D-043 07-jakosc-003).
const SLUG_INNY = /^(?!.*\p{Default_Ignorable_Code_Point})[\p{Ll}\p{Lm}\p{Lo}\p{Nd}\p{M}]+(-[\p{Ll}\p{Lm}\p{Lo}\p{Nd}\p{M}]+)*$/u;

export function wariantPublikowalny(v) {
  if (v.publication !== 'opublikowana' || v.scope !== 'in' || v.retired) return false;
  if (!v.content) return false;
  // Lista dozwolonych, nie zakazanych: nieznany albo brakujący status = brak strony (R1).
  if (v.safetyStatus === 'ok-zrodlo') return true;
  return ['ryzyko-wysokie', 'nie-publikowac'].includes(v.safetyStatus) && v.cardType === 'warning';
}

// slugi: { [lang]: { rodziny: {_prefiks, id: slug}, produkty: {id: slug}, warianty: {id: slug} } }
// katalog: do grupowania slugów wariantów po produkcie (R8); wariant spoza katalogu trafia do jednej grupy „?” (ostrzej, nie pomija).
export function sprawdzSlugi(slugi, katalog) {
  const bledy = [];
  const produktWariantu = new Map((katalog?.variants ?? []).map((v) => [v.id, v.productId]));
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
    // R8: dwa warianty jednego produktu z tym samym slugiem = jeden adres, druga karta znika.
    const wProd = new Map();
    for (const [id, slug] of Object.entries(s.warianty ?? {})) {
      const p = produktWariantu.get(id) ?? '?';
      if (!wProd.has(p)) wProd.set(p, []);
      wProd.get(p).push(slug);
    }
    for (const [p, w] of wProd) {
      const d = [...new Set(w.filter((x, i) => w.indexOf(x) !== i))];
      if (d.length) bledy.push(`${lang}: powtórzone slugi wariantów produktu ${p}: ${d.join(', ')} (site/slugi/${lang}.json)`);
    }
  }
  return bledy;
}

// tresci: { [lang]: { warianty: {id: {...}}, rodziny: {id: {...}} } }
export function planStron(katalog, slugi, tresci) {
  const bledy = sprawdzSlugi(slugi, katalog);
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
