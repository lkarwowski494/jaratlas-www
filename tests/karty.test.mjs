// Karty treści (06): źródło ze znacznikami [T:ID] → tekst do kontroli (.md) i oczyszczony JSON strony.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { oczysc, doMd, karty, roznice } from '../tools/karty-tresci.mjs';
import { sprawdzTekst } from '../tools/kontrole-tresci.mjs';

const przyklad = {
  tytul: 'Ogórki',
  wstep: 'Zdanie pierwsze. [T:A-1] Zdanie drugie. [T:A-1,A-2]',
  ostrzezenia: [{ claim: 'A-2', tekst: 'Uwaga ważna. [T:A-2]' }],
  sekcje: [{ naglowek: 'Sekcja', akapity: ['Akapit. [T:-]'] }],
  obraz: null,
};

test('oczysc usuwa znaczniki i spacje przed nimi, zostawia claim i obraz', () => {
  const o = oczysc(przyklad);
  assert.equal(o.wstep, 'Zdanie pierwsze. Zdanie drugie.');
  assert.equal(o.ostrzezenia[0].claim, 'A-2');
  assert.equal(o.ostrzezenia[0].tekst, 'Uwaga ważna.');
  assert.equal(o.sekcje[0].akapity[0], 'Akapit.');
  assert.equal(o.obraz, null);
  assert.doesNotMatch(JSON.stringify(o), /\[T:/);
});

test('doMd: tytuł i nagłówki jako nagłówki (kontrola je pomija), każde zdanie ze znacznikiem', () => {
  const md = doMd(przyklad);
  assert.match(md, /^# Ogórki$/m);
  assert.match(md, /^## Sekcja$/m);
  assert.match(md, /^- Uwaga ważna\. \[T:A-2\]$/m);
  const rej = [{ id: 'A-1', twierdzenie: 'x', status: 'potwierdzone' }, { id: 'A-2', twierdzenie: 'y', status: 'potwierdzone' }];
  assert.deepEqual(sprawdzTekst(md, rej).bledy, []);
});

// --- dane repozytorium ---
const katalog = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
const rejestr = JSON.parse(readFileSync('docs/tresci/rejestr.json', 'utf8'));
const V = new Map(katalog.variants.map((v) => [v.id, v]));
const R = new Map(rejestr.map((t) => [t.id, t]));
const wszystkie = karty();

test('pliki pochodne (.md i JSON strony) są aktualne względem źródła kart', () => {
  assert.deepEqual(roznice(), []);
});

test('karty: wariant w katalogu, wymagane ostrzeżenia, karta-ostrzeżenie z ostrzeżeniem, slugi', () => {
  for (const { lang, id, karta } of wszystkie) {
    const v = V.get(id), g = `${lang}/${id}`;
    assert.ok(v, `${g}: wariant spoza katalogu`);
    assert.equal(v.publication, 'ukryta', `${g}: treść nie zmienia publikacji`);
    assert.notEqual(v.safetyStatus, 'do-researchu', `${g}: karta dla wariantu do-researchu`);
    for (const c of v.requiredWarnings ?? []) assert.ok(karta.ostrzezenia.some((o) => o.claim === c), `${g}: brak ostrzeżenia ${c}`);
    if (v.cardType === 'warning') assert.ok(karta.ostrzezenia.length, `${g}: karta-ostrzeżenie bez ostrzeżeń`);
    for (const o of karta.ostrzezenia) {
      assert.ok(R.get(o.claim)?.status === 'potwierdzone', `${g}: ostrzeżenie ${o.claim} nieznane albo niepotwierdzone`);
      assert.match(o.tekst, new RegExp(`\\[T:[^\\]]*\\b${o.claim}\\b`), `${g}: tekst ostrzeżenia ${o.claim} bez jego znacznika`);
    }
    for (const n of [karta.tytul, ...karta.sekcje.map((s) => s.naglowek)]) assert.doesNotMatch(n, /\d|\[T:/, `${g}: liczba albo znacznik w nagłówku „${n}” (kontrola pomija nagłówki)`);
    const s = JSON.parse(readFileSync(`site/slugi/${lang}.json`, 'utf8'));
    assert.ok(s.produkty?.[v.productId] && s.warianty?.[id], `${g}: brak slugu produktu albo wariantu`);
  }
});

test('karty: każde zdanie ze znacznikiem potwierdzonego twierdzenia, liczby zgodne z rejestrem', () => {
  for (const { lang, id, karta } of wszystkie) assert.deepEqual(sprawdzTekst(doMd(karta), rejestr, `${lang}/${id}`).bledy, []);
});
