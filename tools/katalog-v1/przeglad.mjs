// Wpisuje przegląd zastępczy (D-027) dla twierdzeń krytycznych zweryfikowanych w E3; sha ze skrótów kontrole-tresci --skroty.
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const [S, R] = process.argv.slice(2);
let out; try { out = execFileSync('node', [`${R}/tools/kontrole-tresci.mjs`, `${S}/v1/rejestr.json`, `${S}/v1/teksty-puste`, '--skroty', '--przed-przegladem'], { encoding: 'utf8', maxBuffer: 1 << 26 }); } catch (e) { out = e.stdout; }
const sha = new Map([...out.matchAll(/^SKRÓT (\S+) ([0-9a-f]{12})$/gm)].map((m) => [m[1], m[2]]));
const rej = JSON.parse(readFileSync(`${S}/v1/rejestr.json`, 'utf8')); let n = 0, bez = [];
for (const t of rej) if (t.krytyczne && t.status === 'potwierdzone') {
  if (t.weryfikacjaZastepcza && sha.has(t.id)) { t.przeglad = { kto: 'weryfikacja zastępcza (subagent)', data: t.weryfikacjaZastepcza, sha: sha.get(t.id) }; n++; } else bez.push(t.id);
}
writeFileSync(`${S}/v1/rejestr.json`, JSON.stringify(rej, null, 1));
console.log('przegląd zastępczy:', n, '| krytyczne bez przeglądu:', bez.length, bez.join(','));
