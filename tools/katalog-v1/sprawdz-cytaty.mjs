// Niezależne sprawdzenie: każdy cytat z rejestrów klastrów występuje dosłownie w S/zrodla/<sha12>.txt (po normalizacji białych znaków).
import { readFileSync, existsSync } from 'node:fs';
const S = process.argv[2], kl = process.argv.slice(3);
const norm = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
const idx = new Set(readFileSync(`${S}/zrodla/indeks.tsv`, 'utf8').split('\n').map((l) => l.split('\t')[0]).filter(Boolean));
const cache = new Map(); const tekst = (h) => { if (!cache.has(h)) cache.set(h, existsSync(`${S}/zrodla/${h}.txt`) ? norm(readFileSync(`${S}/zrodla/${h}.txt`, 'utf8')) : null); return cache.get(h); };
for (const k of kl) {
  const r = JSON.parse(readFileSync(`${S}/badania/${k}/rejestr.json`, 'utf8'));
  let ok = 0, zle = [], brak = [], bezIdx = 0, narz = 0, st = {};
  for (const t of r) { st[t.status] = (st[t.status] ?? 0) + 1;
    for (const z of t.zrodla ?? []) {
      if (z.weryfikacja !== 'curl+grep') { narz++; continue; }
      if (!z.sha12) { brak.push(t.id + ' bez sha12'); continue; }
      if (!idx.has(z.sha12)) bezIdx++;
      const tx = tekst(z.sha12);
      if (tx == null) brak.push(`${t.id} brak pliku ${z.sha12}`);
      else if (tx.includes(norm(z.cytat ?? '§brak'))) ok++; else zle.push(`${t.id} [${z.sha12}] „${(z.cytat ?? '').slice(0, 70)}”`);
    } }
  console.log(`${k}: twierdzeń ${r.length} ${JSON.stringify(st)}; cytaty OK ${ok}, NIEZGODNE ${zle.length}, brak pliku ${brak.length}, poza indeksem ${bezIdx}, nie-curl ${narz}`);
  for (const x of [...zle, ...brak].slice(0, 6)) console.log('   ', x);
}
