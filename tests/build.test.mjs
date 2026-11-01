// Adapter I/O budowania (polityka błędów E3, docs/architektura/README.md §6): błąd = kod 1 i nietknięty poprzedni dist/.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const BUILD = new URL('../tools/buduj-strone.mjs', import.meta.url).pathname;
const SITE = new URL('../site/', import.meta.url).pathname;
const buduj = (dane, wyj) => spawnSync(process.execPath, [BUILD, dane, wyj], { encoding: 'utf8' });

test('prawdziwe dane: kod 0, przekierowania.json zapisany, 0 stron treści', () => {
  const wyj = join(mkdtempSync(join(tmpdir(), 'ja-')), 'dist');
  const r = buduj(SITE, wyj);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /warianty 0, produkty 0, rodziny 0/);
  assert.deepEqual(JSON.parse(readFileSync(join(wyj, 'przekierowania.json'), 'utf8')), []);
});

test('błąd kontroli: kod 1, poprzedni dist/ nietknięty, brak katalogu tymczasowego', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'ja-')), dane = join(tmp, 'site'), wyj = join(tmp, 'dist');
  cpSync(SITE, dane, { recursive: true });
  mkdirSync(wyj); writeFileSync(join(wyj, 'stary.html'), 'poprzednie wdrożenie');
  writeFileSync(join(dane, 'adresy.json'), JSON.stringify({ opublikowane: ['/pl/jablko/mus/'], przekierowania: {} }));
  const r = buduj(dane, wyj);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /BŁĄD adres opublikowany zniknął bez przekierowania 301: \/pl\/jablko\/mus\//);
  assert.equal(readFileSync(join(wyj, 'stary.html'), 'utf8'), 'poprzednie wdrożenie');
  assert.ok(!existsSync(wyj + '.tmp'));
});

test('slug „..” w piśmie niełacińskim: kod 1, nic nie zapisane poza katalogiem wyjścia, dist/ nietknięty (07-jakosc-003, sonda S3)', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'ja-')), dane = join(tmp, 'site'), wyj = join(tmp, 'dist');
  cpSync(SITE, dane, { recursive: true });
  mkdirSync(wyj); writeFileSync(join(wyj, 'stary.html'), 'poprzednie wdrożenie');
  const kat = join(tmp, 'katalog.json');
  writeFileSync(kat, JSON.stringify({ processFamilies: [], products: [{ id: 'p' }], variants: [{ id: 'v1', productId: 'p', safetyStatus: 'ok-zrodlo', publication: 'opublikowana', scope: 'in', content: 'x' }] }));
  for (const d of ['slugi', 'teksty', 'tresci/ru/warianty']) mkdirSync(join(dane, d), { recursive: true });
  writeFileSync(join(dane, 'slugi', 'ru.json'), JSON.stringify({ produkty: { p: '..' }, warianty: { v1: '..' } }));
  writeFileSync(join(dane, 'teksty', 'ru.json'), JSON.stringify({ uwagaBezpieczenstwa: 'u', zrodla: 'z', ostrzezenia: 'o', wariant: 'w', status: 's', statusy: {} }));
  writeFileSync(join(dane, 'tresci', 'ru', 'warianty', 'v1.json'), JSON.stringify({ tytul: 'A', wstep: 'w', sekcje: [] }));
  const r = spawnSync(process.execPath, [BUILD, dane, wyj, kat], { encoding: 'utf8' });
  assert.equal(r.status, 1, r.stdout);
  assert.ok(!existsSync(join(tmp, 'index.html')), 'plik zapisany poza dist.tmp');
  assert.equal(readFileSync(join(wyj, 'stary.html'), 'utf8'), 'poprzednie wdrożenie');
  assert.ok(!existsSync(wyj + '.tmp'));
});
