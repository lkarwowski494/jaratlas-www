// Szablony HTML (semantyczne, bez systemu wizualnego; wygląd: rola 04). Czyste funkcje.
import { DOMENA, JEZYK_BAZOWY } from './konfiguracja.mjs';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const abs = (sciezka) => DOMENA + encodeURI(sciezka);

export function glowa(st, tytul, opis) {
  const alt = (st.alternatywy ?? []).map((a) => `<link rel="alternate" hreflang="${esc(a.lang)}" href="${esc(abs(a.sciezka))}">`);
  // x-default = wersja w języku bazowym tej samej encji; bez niej x-default nie ma (tylko istniejące wersje, ADR 0004).
  const baza = (st.alternatywy ?? []).find((a) => a.lang === JEZYK_BAZOWY);
  if (baza) alt.push(`<link rel="alternate" hreflang="x-default" href="${esc(abs(baza.sciezka))}">`);
  return [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${esc(tytul)}</title>`,
    opis ? `<meta name="description" content="${esc(opis)}">` : '',
    `<link rel="canonical" href="${esc(abs(st.sciezka))}">`,
    ...alt,
  ].filter(Boolean).join('\n');
}

const strona = (st, tytul, opis, tresc) => `<!doctype html>\n<html lang="${esc(st.lang ?? 'en')}">\n<head>\n${glowa(st, tytul, opis)}\n</head>\n<body>\n${tresc}\n</body>\n</html>\n`;

const uwagaD027 = (ui) => `<aside data-uwaga="D-027c">${esc(ui.uwagaBezpieczenstwa)}</aside>`;
const zrodla = (v, ui) => (v.sources ?? []).length
  ? `<section data-zrodla><h2>${esc(ui.zrodla)}</h2><ul>${v.sources.map((s) => `<li><a href="${esc(s.adres)}" rel="nofollow">${esc(s.adres)}</a> (${esc(s.miejsce)}, ${esc(s.odczyt)})</li>`).join('')}</ul></section>`
  : '';

export function stronaWariantu(st, v, tr, ui, okruszki) {
  const ostrzezenie = v.cardType === 'warning';
  const ostrz = (tr.ostrzezenia ?? []).map((o) => `<li data-claim="${esc(o.claim)}">${esc(o.tekst)}</li>`).join('');
  const sekcje = (tr.sekcje ?? []).map((s) => `<section><h2>${esc(s.naglowek)}</h2>${(s.akapity ?? []).map((a) => `<p>${esc(a)}</p>`).join('')}</section>`).join('\n');
  // Recipe: tylko ok-zrodlo z obrazem gotowej potrawy (ADR 0005); karta-ostrzeżenie nigdy.
  const recipe = !ostrzezenie && v.safetyStatus === 'ok-zrodlo' && tr.obraz
    ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Recipe', name: tr.tytul, image: [tr.obraz] }).replace(/</g, '\\u003c')}</script>`
    : '';
  const tresc = [
    okruszki,
    `<main data-typ="${ostrzezenie ? 'karta-ostrzezenie' : 'karta'}" data-status="${esc(v.safetyStatus)}">`,
    `<h1>${esc(tr.tytul)}</h1>`,
    ostrz ? `<section data-ostrzezenia role="alert"><h2>${esc(ui.ostrzezenia)}</h2><ul>${ostrz}</ul></section>` : '',
    uwagaD027(ui),
    tr.wstep ? `<p>${esc(tr.wstep)}</p>` : '',
    sekcje,
    zrodla(v, ui),
    '</main>',
    recipe,
  ].filter(Boolean).join('\n');
  return strona(st, tr.tytul, tr.wstep, tresc);
}

export function stronaProduktu(st, nazwa, wiersze, ui, okruszki) {
  const tabela = wiersze.map((w) => `<tr data-status="${esc(w.status)}"${Object.entries(w.filtry ?? {}).filter(([, x]) => x != null).map(([k, x]) => ` data-${esc(k.toLowerCase())}="${esc(x)}"`).join('')}><td><a href="${esc(encodeURI(w.sciezka))}">${esc(w.tytul)}</a></td><td>${esc(ui.statusy[w.status] ?? w.status)}</td></tr>`).join('\n');
  const tresc = `${okruszki}\n<main data-typ="produkt">\n<h1>${esc(nazwa)}</h1>\n${uwagaD027(ui)}\n<table data-warianty>\n<thead><tr><th>${esc(ui.wariant)}</th><th>${esc(ui.status)}</th></tr></thead>\n<tbody>\n${tabela}\n</tbody>\n</table>\n</main>\n<script src="/static/filtry.js" defer></script>`;
  return strona(st, nazwa, null, tresc);
}

export function stronaRodziny(st, tr, ui) {
  return strona(st, tr.tytul, tr.wstep, `<main data-typ="rodzina">\n<h1>${esc(tr.tytul)}</h1>\n${uwagaD027(ui)}\n${tr.wstep ? `<p>${esc(tr.wstep)}</p>` : ''}\n</main>`);
}

export function stronaWyboruJezyka(st, nazwyJezykow) {
  const lista = st.jezyki.map((l) => `<li><a href="/${esc(l.toLowerCase())}/" hreflang="${esc(l)}" lang="${esc(l)}">${esc(nazwyJezykow[l] ?? l)}</a></li>`).join('');
  // Bez automatycznego przekierowania według języka (przekazanie §6.3).
  return strona(st, 'JarAtlas', null, `<main data-typ="wybor-jezyka">\n<h1>JarAtlas</h1>\n<ul>${lista}</ul>\n</main>`);
}

export const okruszki = (elementy) => `<nav aria-label="breadcrumb"><ol>${elementy.map((e) => `<li><a href="${esc(encodeURI(e.sciezka))}">${esc(e.nazwa)}</a></li>`).join('')}</ol></nav>`;
