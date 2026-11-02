// Testy z katalogami tymczasowymi sprzątają po sobie (obserwacja 07-jakosc-fix, 2026-11-01: katalogi ja-* zostawały w katalogu tymczasowym systemu).
// Pliki testów uruchamiane w podprocesie z osobnym TMPDIR; po przebiegu katalog ma być pusty.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

for (const plik of ['build.test.mjs', 'przeklad.test.mjs', 'kontrola-wszystko.test.mjs', 'przeniesienie.test.mjs']) {
  test(`${plik}: po przebiegu 0 katalogów w TMPDIR`, () => {
    const tmp = mkdtempSync(join(tmpdir(), 'ja-sprzatanie-'));
    try {
      const r = spawnSync(process.execPath, ['--test', new URL(plik, import.meta.url).pathname], { encoding: 'utf8', env: { ...process.env, TMPDIR: tmp, NODE_TEST_CONTEXT: undefined } });
      assert.equal(r.status, 0, r.stdout.slice(-2000));
      assert.match(r.stdout, /^# pass [1-9]/m); // kontrola pozytywna: testy pliku naprawdę biegły
      assert.deepEqual(readdirSync(tmp), []);
    } finally { rmSync(tmp, { recursive: true, force: true }); }
  });
}
