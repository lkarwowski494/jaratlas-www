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

// C4 (07-jakosc-C3-01, C3-02), test T1 z docs/tresci/C3-audyt-spojnosci-2026-11-02.md §5:
// każda karta kąpieli wodnej ma blok po wekowaniu (wzór strawberry-v14), a karta z raw pack także SLO-210.
// Dlaczego: 24 karty kończyły się na czasie wekowania, bez testu zamknięcia, przechowywania i oznak zepsucia.
// karta z wariantem raw pack (nie zdanie „only the hot pack … raw packs make poor quality”)
const RAW_PACK = /"Raw pack:|packed raw|hot or raw pack|raw or hot pack/i;
const PO_WEKOWANIU = ['SLO-190', 'SLO-191', 'SLO-196', 'SLO-197', 'SLO-198', 'SLO-212', 'SLO-223'];
function brakiPoWekowaniu(lista = wszystkie) {
  const braki = [];
  for (const { lang, id, karta } of lista) {
    if (V.get(id)?.preservationMethod !== 'water-bath') continue;
    const t = JSON.stringify(karta);
    const ids = new Set([...t.matchAll(/\[T:([^\]]*)\]/g)].flatMap((m) => m[1].split(',')));
    const wym = [...PO_WEKOWANIU];
    const en = lista.find((k) => k.lang === 'en' && k.id === id);
    const brak = wym.filter((w) => !ids.has(w));
    // raw pack: samo zdanie SLO-210 o niższym poziomie po wystudzeniu (wzór currant-v13), nie dowolne zdanie z tym ID
    const rawZdanie = karta.sekcje.some((s) => s.akapity.some((a) => /\bSLO-210\b/.test(a) && /raw-packed|na surowo/i.test(a)));
    if (RAW_PACK.test(JSON.stringify(en?.karta ?? karta)) && !rawZdanie) brak.push('SLO-210 (raw pack)');
    if (brak.length) braki.push(`${lang}/${id}: ${brak.join(',')}`);
  }
  return braki;
}

test('T1: karta kąpieli wodnej ma studzenie, test zamknięcia, przechowywanie, oznaki zepsucia i regułę pokrywek', () => {
  assert.deepEqual(brakiPoWekowaniu(), []);
});

// C4, weryfikacja zastępcza (rozbieżność 1): NCHFP każe podejrzane słoiki produktów o niskiej kwasowości, w tym pomidorów,
// traktować jak zawierające toksynę botulinową. Dlaczego: samo „wyrzuć” przy takim słoiku jest słabsze od źródła.
// Zakres ostrożny: produkty z acidity low-acid albo borderline w katalogu (decyzja 2026-11-02-jaratlas-06-c4-fix-p1).
test('T1b: karta kąpieli wodnej produktu o niskiej albo granicznej kwasowości ma postępowanie z podejrzanym słoikiem (SLO-350)', () => {
  const P = new Map(katalog.products.map((p) => [p.id, p]));
  const braki = wszystkie
    .filter(({ id }) => V.get(id)?.preservationMethod === 'water-bath' && ['low-acid', 'borderline'].includes(P.get(V.get(id).productId)?.acidity))
    .filter(({ karta }) => !/\[T:[^\]]*\bSLO-350\b/.test(JSON.stringify(karta)))
    .map(({ lang, id }) => `${lang}/${id}`);
  assert.deepEqual(braki, []);
});

// p24 (07-jakosc-B8-01), test T1-mróz z docs/tresci/B8-audyt-2026-11-02.md §5: każda karta mrożenia ma blok bezpieczeństwa
// (opakowanie, opis, szybkie mrożenie, temperatura, czas jakości, rozmrażanie, awaria zamrażarki, „kiedy wyrzucić”).
// Dlaczego: strawberry-v17 (p2) kończyła się na „zamroź”, bez rozmrażania i awarii; przegląd ręczny tego nie złapał.
// Zamienniki: karta może mieć zamiast ID wzoru twierdzenie źródłowe dla swojego produktu (null = świadomy brak); każdy z powodem.
const BLOK_MROZENIA = ['SLO-250', 'SLO-251', 'SLO-255', 'SLO-258', 'SLO-259', 'SLO-260', 'SUS-050', 'SUS-051', 'SUS-052', 'SUS-059', 'SUS-058', 'SLO-261'];
const ZWIERZ = { 'SUS-052': 'SLO-402' }; // C5: SLO-402 to to samo zalecenie NCHFP rozszerzone o układanie paczek (p24)
const MIESO = { ...ZWIERZ, 'SLO-258': 'SLO-405' }; // C5: rozmrażanie mięsa, ryb i drobiu (NCHFP, FDA, Clemson)
const NABIAL = { ...ZWIERZ, 'SLO-258': 'SLO-443' }; // C5: rozmrażanie masła, jaj, sera w lodówce (NCHFP)
export const ZAMIENNIKI_MROZENIA = {
  'onion-v15': { 'SUS-058': 'SLO-285', 'SLO-261': 'SLO-285' }, // B8: własny czas ze źródła („within a few months”)
  'beef-veal-v15': { ...MIESO, 'SUS-058': 'SLO-417' }, // czasy jakości dla mięsa (FDA), nie dla owoców i warzyw
  'pork-loin-ham-v16': { ...MIESO, 'SUS-058': 'SLO-417' },
  'game-lamb-v11': { ...MIESO, 'SUS-058': 'SLO-417' },
  'poultry-v15': { ...MIESO, 'SUS-058': 'SLO-422' },
  'pork-belly-jowl-v15': { ...MIESO, 'SUS-058': 'SLO-423' },
  'sea-fish-v17': { ...MIESO, 'SUS-058': 'SLO-430' },
  'freshwater-fish-v12': { ...MIESO, 'SUS-058': 'SLO-430' },
  'eggs-v11': { ...NABIAL, 'SUS-058': 'SLO-436' },
  'butter-whey-cheese-v13': { ...NABIAL, 'SUS-058': 'SLO-440' },
  'aged-hard-cheese-v16': { ...NABIAL, 'SUS-058': 'SLO-441' },
  'garlic-v17': { 'SLO-250': 'OLE-051', 'SUS-058': 'OLE-003' }, // opis i data z NCHFP czosnku w oleju; czas „do kilku miesięcy”
  'garden-herbs-v16': { 'SUS-058': null }, // NCHFP nie podaje czasu dla pesto; czasu owoców i warzyw nie przenosimy (p24)
  'lemon-v17': { 'SLO-250': 'SLO-307', 'SLO-251': 'SLO-304', 'SLO-258': 'SLO-308', 'SUS-058': 'SLO-308' }, // przepis NCHFP: pojemniki, rozmrażanie 24 h w lodówce, 1 rok
};
export function brakiBlokuMrozenia(lista = wszystkie, zamienniki = ZAMIENNIKI_MROZENIA) {
  const braki = [];
  for (const { lang, id, karta } of lista) {
    if (V.get(id)?.preservationMethod !== 'freezer') continue;
    const ids = new Set([...JSON.stringify(karta).matchAll(/\[T:([^\]]*)\]/g)].flatMap((m) => m[1].split(',').map((s) => s.trim())));
    const z = zamienniki[id] ?? {};
    const brak = BLOK_MROZENIA.filter((w) => !ids.has(w) && !(w in z && (z[w] === null || ids.has(z[w]))));
    if (brak.length) braki.push(`${lang}/${id}: ${brak.join(',')}`);
  }
  return braki;
}

test('T1-mróz: karta mrożenia ma blok bezpieczeństwa (opakowanie, mrożenie, czas, rozmrażanie, awaria, kiedy wyrzucić)', () => {
  assert.deepEqual(brakiBlokuMrozenia(), []);
});

test('T1-mróz: zamiennik musi być w karcie; usunięcie zdania z blokiem wzoru jest wykrywane', () => {
  const k = wszystkie.find((x) => x.lang === 'pl' && x.id === 'beef-veal-v15');
  const bez = { ...k, karta: { ...k.karta, sekcje: k.karta.sekcje.map((s) => ({ ...s, akapity: s.akapity.filter((a) => !/SLO-405|SLO-259/.test(a)) })) } };
  assert.deepEqual(brakiBlokuMrozenia([bez]), ['pl/beef-veal-v15: SLO-258,SLO-259']);
});
