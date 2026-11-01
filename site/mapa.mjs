// Mapa strony z planu (ADR 0003): bez strony wyboru języka; podział przy limicie Google.
import { DOMENA, LIMIT_ADRESOW_MAPY } from './konfiguracja.mjs';
import { esc } from './szablony.mjs';

export function mapyStrony(strony, limit = LIMIT_ADRESOW_MAPY) {
  const adresy = strony.filter((s) => s.typ !== 'wybor-jezyka').map((s) => DOMENA + encodeURI(s.sciezka)).sort();
  const urlset = (lista) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lista.map((a) => `<url><loc>${esc(a)}</loc></url>`).join('\n')}\n</urlset>\n`;
  if (adresy.length <= limit) return { 'sitemap.xml': urlset(adresy) };
  const pliki = {};
  for (let i = 0; i * limit < adresy.length; i++) pliki[`sitemap-${i + 1}.xml`] = urlset(adresy.slice(i * limit, (i + 1) * limit));
  pliki['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pliki).map((n) => `<sitemap><loc>${esc(`${DOMENA}/${n}`)}</loc></sitemap>`).join('\n')}\n</sitemapindex>\n`;
  return pliki;
}
