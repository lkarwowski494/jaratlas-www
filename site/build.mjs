// Użycie: node site/build.mjs [katalog-danych-strony=site] [wyjście=dist]
// Czyta catalog/catalog-seed.json oraz <dane>/slugi/*.json, <dane>/teksty/*.json, <dane>/tresci/<lang>/{warianty,rodziny}/*.json.
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generuj } from './generuj.mjs';

const tu = dirname(fileURLToPath(import.meta.url));
const [dane = tu, wyjscie = join(tu, '..', 'dist'), katalogPlik = join(tu, '..', 'catalog', 'catalog-seed.json')] = process.argv.slice(2);
const json = (p) => JSON.parse(readFileSync(p, 'utf8'));
const jsony = (d) => (existsSync(d) ? Object.fromEntries(readdirSync(d).filter((n) => n.endsWith('.json')).map((n) => [basename(n, '.json'), json(join(d, n))])) : {});

const slugi = jsony(join(dane, 'slugi'));
const ui = jsony(join(dane, 'teksty'));
const tresci = {};
for (const lang of existsSync(join(dane, 'tresci')) ? readdirSync(join(dane, 'tresci')) : []) {
  tresci[lang] = { warianty: jsony(join(dane, 'tresci', lang, 'warianty')), rodziny: jsony(join(dane, 'tresci', lang, 'rodziny')) };
}
const nazwyJezykow = existsSync(join(dane, 'jezyki.json')) ? json(join(dane, 'jezyki.json')) : {};
const { bledy, pliki, strony } = generuj({ katalog: json(katalogPlik), slugi, tresci, ui, nazwyJezykow });
if (bledy.length) { console.error(bledy.map((b) => `BŁĄD ${b}`).join('\n')); process.exit(1); }
rmSync(wyjscie, { recursive: true, force: true });
for (const [p, t] of Object.entries(pliki)) { mkdirSync(dirname(join(wyjscie, p)), { recursive: true }); writeFileSync(join(wyjscie, p), t); }
cpSync(join(tu, 'static'), join(wyjscie, 'static'), { recursive: true });
const ile = (typ) => strony.filter((s) => s.typ === typ).length;
console.log(`OK: ${Object.keys(pliki).length} plików → ${wyjscie} (warianty ${ile('wariant')}, produkty ${ile('produkt')}, rodziny ${ile('rodzina')})`);
