// R7 (2026-11-02): mapa Wikipedii, frazy Keyword Planner i skrypt Pobierz-Odslony.ps1.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parsujZakres, parsujEksportKP, plikiCsv, frazyDoWgrania, scal } from '../tools/ruch/kp.mjs';

const katalog = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const mapa = JSON.parse(readFileSync('tools/ruch/mapa-wikipedia.json', 'utf8'));
const frazy = JSON.parse(readFileSync('tools/ruch/frazy-wariantow.json', 'utf8'));
const ps1 = readFileSync('tools/ruch/Pobierz-Odslony.ps1', 'utf8');
const EMAIL = /[\w.+-]+@[\w-]+\.[\w.]+/;

test('każdy produkt katalogu ma artykuł en w mapie albo jest na liście do weryfikacji', () => {
  const braki = mapa.doWeryfikacji.map((x) => x.klucz);
  for (const p of katalog.products) {
    const wpis = mapa.produkty[p.id];
    assert.ok((wpis && wpis.artykuly.some((a) => a.tytuly.en)) || braki.includes(p.id), `produkt ${p.id} bez artykułu (uruchom node tools/ruch/mapuj-wikipedia.mjs)`);
  }
});

test('każda rodzina procesu ma artykuł en w mapie albo jest na liście do weryfikacji', () => {
  const braki = mapa.doWeryfikacji.map((x) => x.klucz);
  for (const f of katalog.processFamilies) {
    const wpis = mapa.rodziny[f.id];
    assert.ok((wpis && wpis.artykuly.some((a) => a.tytuly.en)) || braki.includes(f.id), `rodzina ${f.id} bez artykułu`);
  }
});

test('warianty w mapie i frazy pokrywają co najmniej 95% katalogu (równoległe partie mogą dodać warianty)', (t) => {
  const ids = new Set(katalog.variants.map((v) => v.id));
  const wMapie = mapa.warianty.filter((v) => ids.has(v.id)).length;
  const wFrazach = frazy.filter((f) => ids.has(f.id)).length;
  t.diagnostic(`mapa ${wMapie}/${ids.size}, frazy ${wFrazach}/${ids.size}`);
  assert.ok(wMapie / ids.size >= 0.95, 'mapa nieaktualna: uruchom mapuj-wikipedia.mjs');
  assert.ok(wFrazach / ids.size >= 0.95, 'frazy nieaktualne: dopisz frazy nowych wariantów');
  for (const v of mapa.warianty) assert.ok(mapa.produkty[v.produkt], `wariant ${v.id}: produkt ${v.produkt} poza mapą`);
});

test('frazy: niepuste, najwyżej 6 słów, bez nawiasów i cudzysłowów', () => {
  for (const f of frazy) {
    for (const jz of ['pl', 'en']) {
      const s = f[jz];
      assert.ok(s && s.trim() === s, `${f.id}.${jz} pusta lub ze spacjami na brzegach`);
      assert.ok(s.split(/\s+/).length <= 6, `${f.id}.${jz} za długa: ${s}`);
      assert.ok(!/[()"„”,]/.test(s), `${f.id}.${jz} ma niedozwolony znak: ${s}`);
    }
  }
});

test('repo publiczne: brak adresów e-mail w mapie, frazach i skrypcie', () => {
  assert.ok(!EMAIL.test(JSON.stringify(mapa)));
  assert.ok(!EMAIL.test(JSON.stringify(frazy)));
  assert.ok(!EMAIL.test(ps1));
});

test('Pobierz-Odslony.ps1: kontakt jako wymagany parametr, kodowanie tytułów, ponowienia, cache', () => {
  assert.match(ps1, /\[Parameter\(Mandatory = \$true\)\]\[string\]\$Kontakt/);
  assert.match(ps1, /EscapeDataString\(\$tytul\.Replace\(' ', '_'\)\)/);
  assert.match(ps1, /\$kod -eq 429 -or \$kod -ge 500/);
  assert.match(ps1, /Test-Path \$plik/);
  assert.match(ps1, /per-article\/\{0\}\.wikipedia\/all-access\/user\/\{1\}\/monthly\/\{2\}\/\{3\}/);
});

test('parsujZakres: zakresy KP po angielsku i po polsku, liczby dokładne, brak danych', () => {
  assert.deepEqual(parsujZakres('1K – 10K'), { min: 1000, max: 10000 });
  assert.deepEqual(parsujZakres('10 tys. – 100 tys.'), { min: 10000, max: 100000 });
  assert.deepEqual(parsujZakres('10 – 100'), { min: 10, max: 100 });
  assert.deepEqual(parsujZakres('1 300'), { min: 1300, max: 1300 });
  assert.deepEqual(parsujZakres('1,5 tys.'), { min: 1500, max: 1500 });
  assert.equal(parsujZakres(''), null);
  assert.equal(parsujZakres('—'), null);
});

test('parsujEksportKP: eksport z tabulatorami (2 wiersze tytułu) i z przecinkami', () => {
  const tab = 'Keyword Stats 2026-11-02\nAll locations\nKeyword\tCurrency\tAvg. monthly searches\nsauerkraut\tPLN\t10K – 100K\nkimchi\tPLN\t\n';
  const m = parsujEksportKP(tab);
  assert.deepEqual(m.get('sauerkraut'), { min: 10000, max: 100000 });
  assert.equal(m.get('kimchi'), null);
  const pl = 'Słowo kluczowe,Waluta,Średnia liczba wyszukiwań miesięcznie\n"ogórki kiszone",PLN,"10 tys. – 100 tys."\n';
  assert.deepEqual(parsujEksportKP(pl).get('ogórki kiszone'), { min: 10000, max: 100000 });
  assert.throws(() => parsujEksportKP('a,b\n1,2\n'), /nagłówka/);
});

test('frazyDoWgrania i plikiCsv: bez duplikatów, nagłówek Keyword, podział na pliki', () => {
  const f = [{ id: 'a', pl: 'kapusta kiszona', en: 'sauerkraut' }, { id: 'b', pl: 'kapusta kiszona', en: 'kimchi' }];
  assert.deepEqual(frazyDoWgrania(f, 'pl'), ['kapusta kiszona']);
  assert.deepEqual(frazyDoWgrania(f, 'pl', { zPrzepisem: true }), ['kapusta kiszona', 'kapusta kiszona przepis']);
  const pliki = plikiCsv(['a', 'b', 'c'], 2);
  assert.equal(pliki.length, 2);
  assert.equal(pliki[0], 'Keyword\na\nb\n');
});

test('scal: wariant dostaje zakres frazy, brak frazy w eksporcie jest jawny', () => {
  const f = [{ id: 'x-v01', pl: 'kapusta kiszona', en: 'sauerkraut' }, { id: 'x-v02', pl: 'ogórki', en: 'pickles' }];
  const kp = new Map([['sauerkraut', { min: 1000, max: 10000 }]]);
  const w = scal(f, [{ id: 'x-v01', productId: 'x' }, { id: 'x-v02', productId: 'x' }], 'en', kp);
  assert.equal(w[0].srodek, 3162);
  assert.equal(w[0].status, 'ok');
  assert.equal(w[1].status, 'brak w eksporcie');
});
