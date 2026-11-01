// Karty treści (rola 06). Źródło: docs/tresci/karty/{lang}/warianty/{id}.json, każde zdanie ze znacznikiem [T:ID].
// Pochodne: docs/tresci/teksty/{lang}/warianty/{id}.md (wejście `npm run check:tresci`) i site/tresci/{lang}/warianty/{id}.json (bez znaczników, wejście buildu).
// Dlaczego osobne źródło: znaczniki muszą przejść kontrolę, a nie mogą trafić na stronę; generator strony (ścieżka wrażliwa) zostaje bez zmian.
// Użycie: node tools/karty-tresci.mjs            zapisuje pliki pochodne
//         node tools/karty-tresci.mjs --sprawdz  kod 1, gdy pliki pochodne są nieaktualne
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..');
const ZRODLO = join(repo, 'docs', 'tresci', 'karty');
const ZNACZNIK = /\s*\[T:[^\]]*\]/g;

const bez = (t) => String(t).replace(ZNACZNIK, '').trim();
export function oczysc(k) {
  return {
    tytul: bez(k.tytul),
    wstep: bez(k.wstep),
    ostrzezenia: (k.ostrzezenia ?? []).map((o) => ({ claim: o.claim, tekst: bez(o.tekst) })),
    sekcje: (k.sekcje ?? []).map((s) => ({ naglowek: bez(s.naglowek), akapity: (s.akapity ?? []).map(bez) })),
    obraz: k.obraz ?? null,
  };
}

export function doMd(k) {
  const cz = [`# ${k.tytul}`, k.wstep];
  if ((k.ostrzezenia ?? []).length) cz.push('## !', k.ostrzezenia.map((o) => `- ${o.tekst}`).join('\n'));
  for (const s of k.sekcje ?? []) cz.push(`## ${s.naglowek}`, ...(s.akapity ?? []));
  return cz.filter(Boolean).join('\n\n') + '\n';
}

export function karty(zrodlo = ZRODLO) {
  if (!existsSync(zrodlo)) return [];
  return readdirSync(zrodlo).sort().flatMap((lang) => {
    const d = join(zrodlo, lang, 'warianty');
    return existsSync(d) ? readdirSync(d).filter((n) => n.endsWith('.json')).sort().map((n) => ({ lang, id: basename(n, '.json'), karta: JSON.parse(readFileSync(join(d, n), 'utf8')) })) : [];
  });
}

const pochodne = ({ lang, id, karta }) => [
  [join(repo, 'docs', 'tresci', 'teksty', lang, 'warianty', `${id}.md`), doMd(karta)],
  [join(repo, 'site', 'tresci', lang, 'warianty', `${id}.json`), JSON.stringify(oczysc(karta), null, 2) + '\n'],
];

export function roznice() {
  return karty().flatMap(pochodne).filter(([p, t]) => !existsSync(p) || readFileSync(p, 'utf8') !== t).map(([p]) => p.slice(repo.length + 1));
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  if (process.argv.includes('--sprawdz')) {
    const r = roznice();
    for (const p of r) console.log(`NIEAKTUALNY ${p}`);
    console.log(`${r.length} nieaktualnych plików pochodnych`);
    process.exitCode = r.length ? 1 : 0;
  } else {
    const p = karty().flatMap(pochodne);
    for (const [plik, t] of p) { mkdirSync(dirname(plik), { recursive: true }); writeFileSync(plik, t); }
    console.log(`zapisano ${p.length} plików pochodnych`);
  }
}
