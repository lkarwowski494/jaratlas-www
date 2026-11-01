// Użycie: node tools/rozmiar-dist.mjs [katalog=dist] [--ostrzezenie BAJTY] [--limit BAJTY]   (07-jakosc-008, ADR 0007)
// Suma rozmiarów plików (bez podążania za dowiązaniami). Kod 0: poniżej limitu (od progu ostrzeżenia wypisuje UWAGA); kod 1: od limitu albo brak katalogu.
import { readdirSync, lstatSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROZMIAR_DIST_OSTRZEZENIE, ROZMIAR_DIST_LIMIT } from '../site/konfiguracja.mjs';

const arg = process.argv.slice(2);
const opcja = (n, dom) => { const i = arg.indexOf(n); if (i < 0) return dom; const [, w] = arg.splice(i, 2); const x = Number(w); if (!Number.isFinite(x) || x <= 0) { console.error(`BŁĄD: ${n} wymaga liczby bajtów > 0`); process.exit(2); } return x; };
const ostrz = opcja('--ostrzezenie', ROZMIAR_DIST_OSTRZEZENIE), limit = opcja('--limit', ROZMIAR_DIST_LIMIT);
const [katalog = 'dist'] = arg;
if (!existsSync(katalog) || !lstatSync(katalog).isDirectory()) { console.error(`BŁĄD: brak katalogu ${katalog} (najpierw npm run build)`); process.exit(1); }
let bajty = 0, pliki = 0;
const stos = [katalog];
while (stos.length) {
  const d = stos.pop();
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) stos.push(p); else { bajty += lstatSync(p).size; pliki++; }
  }
}
const mb = (b) => `${(b / 1e6).toFixed(1)} MB`;
if (bajty >= limit) { console.error(`BŁĄD: dist/ ${bajty} B ≥ limit ${limit} B (${mb(bajty)}, ${pliki} plików; GitHub Pages do 1 GB, ADR 0007)`); process.exit(1); }
if (bajty >= ostrz) console.log(`UWAGA: dist/ ${bajty} B ≥ próg ostrzeżenia ${ostrz} B (${mb(bajty)}); plan przenosin według ADR 0007`);
console.log(`OK: dist/ ${bajty} B (${mb(bajty)}, ${pliki} plików), limit ${limit} B`);
