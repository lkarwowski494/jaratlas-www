// Użycie: node tools/buduj-strone.mjs [katalog-danych-strony=site] [wyjście=dist] [katalog=catalog/catalog-seed.json]
// Jedyny adapter I/O strony (granice: site/ = czyste moduły, docs/architektura/README.md §4).
// Czyta katalog oraz <dane>/slugi/*.json, <dane>/teksty/*.json, <dane>/tresci/<lang>/{warianty,rodziny}/*.json, <dane>/jezyki.json, <dane>/adresy.json.
// Polityka błędów (README §6): każdy błąd kontroli = kod 1 i nietknięty poprzedni <wyjście>; zapis przez <wyjście>.tmp i podmianę.
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync, rmSync, cpSync, renameSync } from 'node:fs';
import { join, dirname, basename, resolve, relative, isAbsolute, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generuj } from '../site/generuj.mjs';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..');
const [dane = join(repo, 'site'), wyjscie = join(repo, 'dist'), katalogPlik = join(repo, 'catalog', 'catalog-seed.json')] = process.argv.slice(2);
const json = (p) => JSON.parse(readFileSync(p, 'utf8'));
const jsony = (d) => (existsSync(d) ? Object.fromEntries(readdirSync(d).filter((n) => n.endsWith('.json')).map((n) => [basename(n, '.json'), json(join(d, n))])) : {});

const slugi = jsony(join(dane, 'slugi'));
const ui = jsony(join(dane, 'teksty'));
const tresci = {};
for (const lang of existsSync(join(dane, 'tresci')) ? readdirSync(join(dane, 'tresci')) : []) {
  tresci[lang] = { warianty: jsony(join(dane, 'tresci', lang, 'warianty')), rodziny: jsony(join(dane, 'tresci', lang, 'rodziny')) };
}
const opcjonalny = (n) => (existsSync(join(dane, n)) ? json(join(dane, n)) : {});
const { bledy, pliki, strony, przekierowania } = generuj({ katalog: json(katalogPlik), slugi, tresci, ui, nazwyJezykow: opcjonalny('jezyki.json'), adresy: opcjonalny('adresy.json') });
if (bledy.length) { console.error(bledy.map((b) => `BŁĄD ${b}`).join('\n')); process.exit(1); }
const tmp = wyjscie + '.tmp';
// Druga linia obrony (07-jakosc-003): każda ścieżka pliku po resolve leży wewnątrz katalogu tymczasowego; sprawdzane przed pierwszym zapisem.
const baza = resolve(tmp);
const poza = Object.keys(pliki).filter((p) => { const r = relative(baza, resolve(baza, p)); return !r || r === '..' || r.startsWith('..' + sep) || isAbsolute(r); });
if (poza.length) { console.error(poza.map((p) => `BŁĄD ścieżka pliku poza katalogiem wyjścia: ${p}`).join('\n')); process.exit(1); }
rmSync(tmp, { recursive: true, force: true });
for (const [p, t] of Object.entries(pliki)) { mkdirSync(dirname(join(tmp, p)), { recursive: true }); writeFileSync(join(tmp, p), t); }
// Plik przekierowań neutralny wobec hostingu; format hostingu po ADR 0007.
writeFileSync(join(tmp, 'przekierowania.json'), JSON.stringify(przekierowania, null, 2) + '\n');
cpSync(join(dane, 'static'), join(tmp, 'static'), { recursive: true });
rmSync(wyjscie, { recursive: true, force: true });
renameSync(tmp, wyjscie);
const ile = (typ) => strony.filter((s) => s.typ === typ).length;
console.log(`OK: ${Object.keys(pliki).length + 1} plików → ${wyjscie} (warianty ${ile('wariant')}, produkty ${ile('produkt')}, rodziny ${ile('rodzina')})`);
