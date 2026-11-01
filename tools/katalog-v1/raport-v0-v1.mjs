// Raport v0 → v1 (przekazanie §5.4): liczby według statusu, przeniesione (zmiana procesu względem v0) i usunięte warianty.
import { readFileSync, writeFileSync } from 'node:fs';
const [S, OUT] = process.argv.slice(2), J = (p) => JSON.parse(readFileSync(p, 'utf8'));
const c = J(`${S}/v1/catalog-seed.json`), v0 = J(`${S}/v0.json`);
const act = c.variants.filter((v) => !v.retired), cnt = (a, f) => a.reduce((o, x) => (o[f(x)] = (o[f(x)] ?? 0) + 1, o), {});
const st = cnt(act, (v) => v.safetyStatus), L = [];
L.push('# Raport katalogu v0 → v1', '', `Data: 2026-11-01. Katalog: \`catalog/catalog-seed.json\` ${c.version}. Źródło v0: Słoik \`docs/jaratlas/01-katalog-v0.md\` (nagłówek: 105 produktów, 1360 wariantów).`, '');
L.push('## Liczby', '', '| | v0 | v1 |', '|---|---|---|', `| Produkty | 105 | ${c.products.length} |`, `| Pozycje wariantów | 1360 (po parsowaniu 1358) | ${act.length} aktywnych + ${c.variants.length - act.length} wycofanych |`, `| Rodziny procesów | 0 (wytyczne bez źródeł) | ${c.processFamilies.length} |`, '');
L.push('| Status v1 | Wariantów |', '|---|---|', ...['ok-zrodlo', 'do-researchu', 'ryzyko-wysokie', 'nie-publikowac'].map((s) => `| ${s} | ${st[s] ?? 0} |`), '');
const fam = {}; for (const v of act) { const f = v.processFamilyId ?? '(nieustalona)'; fam[f] ??= {}; fam[f][v.safetyStatus] = (fam[f][v.safetyStatus] ?? 0) + 1; }
L.push('| Rodzina | ok | do-res. | ryzyko | nie-publ. |', '|---|---|---|---|---|', ...Object.entries(fam).sort().map(([f, o]) => `| ${f} | ${o['ok-zrodlo'] ?? 0} | ${o['do-researchu'] ?? 0} | ${o['ryzyko-wysokie'] ?? 0} | ${o['nie-publikowac'] ?? 0} |`), '');
L.push(`Nowe w v1: ${act.filter((v) => v.processFamilyId === 'freezing').length} wariantów mrożenia (NCHFP) i ${act.filter((v) => v.splitFrom).length} z rozdzielenia 3 pozycji v0.`, '');
L.push('## Usunięte (wycofane) warianty', '', '| ID | Nazwa v0 | Powód | Następca |', '|---|---|---|---|');
for (const v of c.variants.filter((x) => x.retired)) L.push(`| ${v.id} | ${(v.nameV0 ?? v.name.pl).replace(/\|/g, '/')} | ${v.retired.reason.replace(/\|/g, '/')} | ${v.retired.replacedBy ?? '—'} |`);
L.push('', '## Przeniesione warianty (proces v0 sprzeczny z bezpieczeństwem albo zmieniona metoda)', '', 'Wariant z metodą z v0 przeniesioną do `preservationMethodV0` albo z nazwą v0 zawierającą proces niezalecany (tyndalizacja).', '', '| ID | Nazwa v0 | Metoda v0 | v1: rodzina / metoda / status |', '|---|---|---|---|');
for (const v of act.filter((x) => x.preservationMethodV0 || /tyndaliz/i.test(x.nameV0 ?? ''))) L.push(`| ${v.id} | ${(v.nameV0 ?? v.name.pl).replace(/\|/g, '/')} | ${v.preservationMethodV0 ?? '(w nazwie)'} | ${v.processFamilyId} / ${v.preservationMethod ?? 'nieustalona'} / ${v.safetyStatus} |`);
writeFileSync(OUT, L.join('\n') + '\n');
console.log('raport:', L.length, 'linii');
