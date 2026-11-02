// Składanie wszystkich plików strony z planu. Czysta funkcja: (dane) → { bledy, pliki: {sciezka: tekst} }.
import { planStron } from './plan.mjs';
import { mapyStrony } from './mapa.mjs';
import { DOMENA } from './konfiguracja.mjs';
import { kontrolaZaslepek, kontrolaZaslepekPlikow, kontrolaOstrzezen, kontrolaTekstowJezyka, kontrolaNazw, kontrolaPrzekierowan, kontrolaPowoduOstrzezenia } from './kontrole.mjs';
import { stronaWariantu, stronaProduktu, stronaRodziny, stronaWyboruJezyka, stronaJezyka, okruszki } from './szablony.mjs';

const plikDla = (sciezka) => (sciezka === '/' ? 'index.html' : sciezka.slice(1) + 'index.html');

// dozwolZaslepki: tylko testy z danymi [PRZYKŁAD]; build.mjs nigdy go nie ustawia (R2).
export function generuj({ katalog, slugi, tresci, ui, nazwyJezykow = {}, adresy = {}, dozwolZaslepki = false }) {
  const { strony, bledy } = planStron(katalog, slugi, tresci);
  if (!dozwolZaslepki) bledy.push(...kontrolaZaslepek(strony, tresci, ui));
  bledy.push(...kontrolaOstrzezen(strony, katalog, tresci, ui));
  bledy.push(...kontrolaTekstowJezyka(strony, ui));
  bledy.push(...kontrolaPowoduOstrzezenia(strony, katalog, ui));
  bledy.push(...kontrolaNazw(strony, ui, nazwyJezykow));
  const { bledy: bPrzek, przekierowania } = kontrolaPrzekierowan(strony, adresy);
  bledy.push(...bPrzek);
  const V = new Map(katalog.variants.map((v) => [v.id, v]));
  const pliki = {};
  const poSciezce = new Map(strony.map((s) => [`${s.lang}|${s.encja}`, s]));
  // Tylko ui.nazwyProduktow; brak = błąd kontrolaNazw (bez zastępstwa nazwą z katalogu ani ID).
  const nazwaProduktu = (u, id) => u.nazwyProduktow?.[id] ?? '';
  for (const st of strony) {
    const u = st.lang && ui[st.lang];
    if (st.lang && !u) { bledy.push(`${st.lang}: brak tekstów interfejsu (site/teksty/${st.lang}.json)`); continue; }
    const t = tresci[st.lang] ?? {};
    if (st.typ === 'wariant') {
      const v = V.get(st.id), prod = poSciezce.get(`${st.lang}|produkt:${st.productId}`);
      const ok = okruszki([{ nazwa: nazwaProduktu(u, st.productId), sciezka: prod.sciezka }]);
      pliki[plikDla(st.sciezka)] = stronaWariantu(st, v, t.warianty[st.id], u, ok);
    } else if (st.typ === 'produkt') {
      const wiersze = st.warianty.map((id) => ({ tytul: t.warianty[id].tytul, status: V.get(id).safetyStatus, filtry: V.get(id).filters, sciezka: poSciezce.get(`${st.lang}|wariant:${id}`).sciezka }));
      const nazwa = nazwaProduktu(u, st.id);
      pliki[plikDla(st.sciezka)] = stronaProduktu(st, nazwa, wiersze, u, okruszki([{ nazwa: 'JarAtlas', sciezka: `/${st.sciezka.split('/')[1]}/` }]));
    } else if (st.typ === 'rodzina') {
      pliki[plikDla(st.sciezka)] = stronaRodziny(st, t.rodziny[st.id], u);
    } else if (st.typ === 'jezyk') {
      // Teksty strony języka: kontrolaTekstowJezyka (kontrole.mjs); błąd = kod 1 buildu, plik nie trafia do dist/.
      const produkty = st.produkty.map((id) => ({ nazwa: nazwaProduktu(u, id), sciezka: poSciezce.get(`${st.lang}|produkt:${id}`).sciezka }));
      const rodziny = st.rodziny.map((id) => ({ nazwa: t.rodziny[id].tytul, sciezka: poSciezce.get(`${st.lang}|rodzina:${id}`).sciezka }));
      pliki[plikDla(st.sciezka)] = stronaJezyka(st, produkty, rodziny, u);
    } else {
      pliki['index.html'] = stronaWyboruJezyka(st, nazwyJezykow);
    }
  }
  Object.assign(pliki, mapyStrony(strony));
  pliki['robots.txt'] = `User-agent: *\nAllow: /\nSitemap: ${DOMENA}/sitemap.xml\n`;
  if (!dozwolZaslepki) bledy.push(...kontrolaZaslepekPlikow(pliki));
  return { bledy, pliki, strony, przekierowania };
}
