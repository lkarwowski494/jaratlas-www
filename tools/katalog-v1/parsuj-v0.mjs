// Parsuje katalog v0 (markdown) do JSON: kategorie, produkty, pozycje wariantów ze stałymi ID <produkt>-vNN (kolejność z v0).
import { readFileSync, writeFileSync } from 'node:fs';
const [src, out] = process.argv.slice(2);
const L = readFileSync(src, 'utf8').split('\n');
const kat = [], prod = [], war = [];
let k = null, p = null;
for (const [i, l] of L.entries()) {
  let m;
  if ((m = l.match(/^## Kategoria (\d+): (.+?) \(/))) { k = { nr: +m[1], nazwa: m[2] }; kat.push(k); continue; }
  if ((m = l.match(/^### (\d+)\. (.+) \(`([^`]+)`\)/))) { p = { nr: +m[1], id: m[3], nazwa: m[2], kategoria: k.nr, n: 0 }; prod.push(p); continue; }
  if ((m = l.match(/^- \*\*(.+?) \((\d+)\):\*\* (.+)$/)) && p) {
    const items = []; let d = 0, cur = '';
    for (const ch of m[3]) { if ('(['.includes(ch)) d++; if (')]'.includes(ch)) d--; if (ch === ',' && d === 0) { items.push(cur.trim()); cur = ''; } else cur += ch; }
    items.push(cur.trim().replace(/\.$/, ''));
    // Fragmenty po przecinku wewnątrz jednej nazwy v0 (sprawdzone ręcznie 2026-11-01) dołączamy do poprzedniej pozycji.
    const FRAG = ['marchewki i cebuli do słoików', 'papryki i cebuli', 'marchwi i szalotki', 'pędami bambusa i papryką (do słoików)', 'wędzona dymem olchowo-owocowym i parzona do', 'jabłkiem i majerankiem (trwały w słoikach)', 'pstrąga lub okonia (ikra solona'];
    for (let j = items.length - 1; j > 0; j--) if (FRAG.some((f) => items[j].startsWith(f))) { items[j - 1] += ', ' + items[j]; items.splice(j, 1); }
    for (const it of items) war.push({ id: `${p.id}-v${String(++p.n).padStart(2, '0')}`, produkt: p.id, grupa_v0: m[1], nazwa_v0: it.replace(/\\\\/g, '\\'), linia_v0: i + 1 });
  }
}
writeFileSync(out, JSON.stringify({ zrodlo: src, kategorie: kat, produkty: prod.map(({ n, ...r }) => r), warianty: war }, null, 1));
console.log(kat.length, 'kategorii,', prod.length, 'produktów,', war.length, 'pozycji');
