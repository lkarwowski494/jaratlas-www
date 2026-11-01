// 07-jakosc-008: jedno polecenie wszystkich kontroli (npm run check) i kontrola rozmiaru dist/ (ADR 0007 „Potwierdzenie”: ostrzeżenie przy 800 MB).
// Analogia: trening package.json:27 („verify” jako łańcuch &&) i .github/workflows/tests.yml:28-29 (CI woła to jedno polecenie).
import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const NARZEDZIE = new URL('../tools/rozmiar-dist.mjs', import.meta.url).pathname;
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const tmp = mkdtempSync(join(tmpdir(), 'ja-rozmiar-'));
after(() => rmSync(tmp, { recursive: true, force: true }));
const uruchom = (...a) => spawnSync(process.execPath, [NARZEDZIE, ...a], { encoding: 'utf8' });

test('npm run check: pięć kontroli i rozmiar dist/ w jednym łańcuchu &&, build przed rozmiarem (07-jakosc-008)', () => {
  const kroki = (pkg.scripts.check ?? '').split('&&').map((x) => x.trim());
  assert.deepEqual(kroki, ['npm test', 'npm run check:granice', 'npm run check:catalog', 'npm run check:tresci', 'npm run build', 'npm run check:rozmiar']);
  assert.equal(pkg.scripts['check:rozmiar'], 'node tools/rozmiar-dist.mjs dist');
});

test('CI woła npm run check, nie listę kroków (jedno źródło: package.json) (07-jakosc-008)', () => {
  const wf = readFileSync(new URL('../.github/workflows/kontrole.yml', import.meta.url), 'utf8');
  const kroki = [...wf.matchAll(/^\s*- run: (.+)$/gm)].map((m) => m[1].trim());
  assert.deepEqual(kroki, ['node -v', 'npm run check']);
});

test('rozmiar dist/: poniżej progu kod 0; od progu ostrzeżenia UWAGA i kod 0; od limitu BŁĄD i kod 1; brak katalogu kod 1 (07-jakosc-008)', () => {
  const d = join(tmp, 'dist');
  mkdirSync(join(d, 'pl', 'a'), { recursive: true });
  writeFileSync(join(d, 'index.html'), 'x'.repeat(600));
  writeFileSync(join(d, 'pl', 'a', 'index.html'), 'y'.repeat(400)); // razem 1000 bajtów, także w podkatalogach
  let r = uruchom(d, '--ostrzezenie', '2000', '--limit', '3000');
  assert.equal(r.status, 0, r.stderr); assert.match(r.stdout, /^OK: dist\/ 1000 B/m); assert.doesNotMatch(r.stdout + r.stderr, /UWAGA|BŁĄD/);
  r = uruchom(d, '--ostrzezenie', '1000', '--limit', '3000');
  assert.equal(r.status, 0, r.stderr); assert.match(r.stdout, /UWAGA: dist\/ 1000 B ≥ próg ostrzeżenia 1000 B/);
  r = uruchom(d, '--ostrzezenie', '500', '--limit', '1000');
  assert.equal(r.status, 1); assert.match(r.stderr, /BŁĄD: dist\/ 1000 B ≥ limit 1000 B/);
  r = uruchom(join(tmp, 'nie-ma'));
  assert.equal(r.status, 1); assert.match(r.stderr, /BŁĄD: brak katalogu/);
});

test('rozmiar dist/: progi domyślne z konfiguracji (800 MB ostrzeżenie, 1 GB limit GitHub Pages, jednostki dziesiętne) (07-jakosc-008)', async () => {
  const k = await import('../site/konfiguracja.mjs');
  assert.equal(k.ROZMIAR_DIST_OSTRZEZENIE, 800e6);
  assert.equal(k.ROZMIAR_DIST_LIMIT, 1e9);
});
