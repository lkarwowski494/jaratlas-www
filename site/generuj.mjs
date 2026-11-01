// Składanie wszystkich plików strony z planu. Czysta funkcja: (dane) → { bledy, pliki: {sciezka: tekst} }.
import { planStron } from './plan.mjs';
import { mapyStrony } from './mapa.mjs';
import { stronaWariantu, stronaProduktu, stronaRodziny, stronaWyboruJezyka, okruszki } from './szablony.mjs';

const plikDla = (sciezka) => (sciezka === '/' ? 'index.html' : sciezka.slice(1) + 'index.html');

export function generuj({ katalog, slugi, tresci, ui, nazwyJezykow = {} }) {
  const { strony, bledy } = planStron(katalog, slugi, tresci);
  const V = new Map(katalog.variants.map((v) => [v.id, v]));
  const P = new Map(katalog.products.map((p) => [p.id, p]));
  const pliki = {};
  const poSciezce = new Map(strony.map((s) => [`${s.lang}|${s.encja}`, s]));
  for (const st of strony) {
    const u = st.lang && ui[st.lang];
    if (st.lang && !u) { bledy.push(`${st.lang}: brak tekstów interfejsu (site/teksty/${st.lang}.json)`); continue; }
    const t = tresci[st.lang] ?? {};
    if (st.typ === 'wariant') {
      const v = V.get(st.id), prod = poSciezce.get(`${st.lang}|produkt:${st.productId}`);
      const ok = okruszki([{ nazwa: u.nazwyProduktow?.[st.productId] ?? st.productId, sciezka: prod.sciezka }]);
      pliki[plikDla(st.sciezka)] = stronaWariantu(st, v, t.warianty[st.id], u, ok);
    } else if (st.typ === 'produkt') {
      const wiersze = st.warianty.map((id) => ({ tytul: t.warianty[id].tytul, status: V.get(id).safetyStatus, filtry: V.get(id).filters, sciezka: poSciezce.get(`${st.lang}|wariant:${id}`).sciezka }));
      const nazwa = u.nazwyProduktow?.[st.id] ?? P.get(st.id).name?.[st.lang] ?? st.id;
      pliki[plikDla(st.sciezka)] = stronaProduktu(st, nazwa, wiersze, u, okruszki([{ nazwa: 'JarAtlas', sciezka: `/${st.sciezka.split('/')[1]}/` }]));
    } else if (st.typ === 'rodzina') {
      pliki[plikDla(st.sciezka)] = stronaRodziny(st, t.rodziny[st.id], u);
    } else {
      pliki['index.html'] = stronaWyboruJezyka(st, nazwyJezykow);
    }
  }
  Object.assign(pliki, mapyStrony(strony));
  pliki['robots.txt'] = `User-agent: *\nAllow: /\nSitemap: ${(process.env.JARATLAS_DOMENA || 'https://jaratlas.com')}/sitemap.xml\n`;
  return { bledy, pliki, strony };
}
