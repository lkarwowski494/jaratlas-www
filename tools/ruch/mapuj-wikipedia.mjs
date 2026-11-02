#!/usr/bin/env node
// R7 (2026-11-02): mapa katalog → artykuły Wikipedii dla skryptu Pobierz-Odslony.ps1.
// Wejście: catalog/catalog-seed.json + tools/ruch/tytuly-zrodlowe.json (ręczne tytuły en).
// Sieć: en.wikipedia.org (tytuł → przekierowanie → element Wikidata), www.wikidata.org (sitelinks).
// Użycie: node tools/ruch/mapuj-wikipedia.mjs --kontakt "<adres lub strona kontaktowa>" [--wyjscie tools/ruch/mapa-wikipedia.json]
// Kontakt trafia tylko do nagłówka User-Agent (polityka Wikimedia), nie do pliku wynikowego.
import { readFileSync, writeFileSync } from 'node:fs';

export const JEZYKI = ['en', 'pl', 'fr', 'es', 'de', 'it'];

function arg(nazwa, domyslna) {
  const i = process.argv.indexOf(nazwa);
  return i > 0 ? process.argv[i + 1] : domyslna;
}

async function pobierzJson(url, ua, proby = 5) {
  for (let n = 1; ; n++) {
    const r = await fetch(url, { headers: { 'User-Agent': ua, 'Api-User-Agent': ua } });
    if (r.ok) return r.json();
    if ((r.status === 429 || r.status >= 500) && n < proby) {
      await new Promise((ok) => setTimeout(ok, 1000 * 2 ** n));
      continue;
    }
    throw new Error(`HTTP ${r.status} ${url}`);
  }
}

// tytuły en → {wejscie: {tytul, qid, przekierowanie}}
async function rozwiazTytuly(tytuly, ua, jezyk = 'en') {
  const wynik = {};
  for (let i = 0; i < tytuly.length; i += 50) {
    const paczka = tytuly.slice(i, i + 50);
    const url = `https://${jezyk}.wikipedia.org/w/api.php?` + 'action=query&format=json&formatversion=2&redirects=1'
      + '&prop=pageprops&ppprop=wikibase_item&titles=' + encodeURIComponent(paczka.join('|'));
    const j = await pobierzJson(url, ua);
    const norm = Object.fromEntries((j.query.normalized ?? []).map((x) => [x.from, x.to]));
    const przek = Object.fromEntries((j.query.redirects ?? []).map((x) => [x.from, x.to]));
    const strony = Object.fromEntries(j.query.pages.map((p) => [p.title, p]));
    for (const t of paczka) {
      const n = norm[t] ?? t;
      const cel = przek[n] ?? n;
      const s = strony[cel];
      wynik[t] = s && !s.missing
        ? { tytul: s.title, qid: s.pageprops?.wikibase_item ?? null, przekierowanie: cel !== n }
        : { tytul: null, qid: null, przekierowanie: false };
    }
  }
  return wynik;
}

async function sitelinki(qidy, ua) {
  const wynik = {};
  const strony = JEZYKI.map((j) => j + 'wiki').join('|');
  for (let i = 0; i < qidy.length; i += 50) {
    const url = 'https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks'
      + '&sitefilter=' + encodeURIComponent(strony) + '&ids=' + qidy.slice(i, i + 50).join('|');
    const j = await pobierzJson(url, ua);
    for (const [q, e] of Object.entries(j.entities)) {
      wynik[q] = Object.fromEntries(JEZYKI.map((jz) => [jz, e.sitelinks?.[jz + 'wiki']?.title ?? null]));
    }
  }
  return wynik;
}

async function main() {
  const kontakt = arg('--kontakt');
  if (!kontakt) throw new Error('Podaj --kontakt (adres e-mail lub strona kontaktowa; nie jest zapisywany).');
  const ua = `JarAtlasR7/1.0 (${kontakt})`;
  const katalog = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
  const zrodlo = JSON.parse(readFileSync('tools/ruch/tytuly-zrodlowe.json', 'utf8'));
  const wszystkie = [...new Set([...Object.values(zrodlo.produkty), ...Object.values(zrodlo.rodziny)].flat())];
  const en = await rozwiazTytuly(wszystkie, ua);
  const qidy = [...new Set(Object.values(en).map((x) => x.qid).filter(Boolean))];
  const sl = await sitelinki(qidy, ua);
  const doWeryfikacji = [];
  // nadpisania: {tytułEn: {jezyk: tytuł}} sprawdzone w danej Wikipedii
  const nadp = Object.fromEntries(Object.entries(zrodlo.nadpisania ?? {}).filter(([k]) => !k.startsWith('_')));
  const nadpOk = {};
  for (const jz of JEZYKI) {
    const lista = Object.values(nadp).map((x) => x[jz]).filter(Boolean);
    if (lista.length) nadpOk[jz] = await rozwiazTytuly(lista, ua, jz);
  }

  const artykuly = (klucz, lista) => lista.map((t) => {
    const r = en[t];
    const tytuly = r.qid ? { ...sl[r.qid] } : Object.fromEntries(JEZYKI.map((j) => [j, null]));
    if (r.tytul && !tytuly.en) tytuly.en = r.tytul; // artykuł bez elementu Wikidata
    const reczne = [];
    for (const [jz, tt] of Object.entries(nadp[t] ?? {})) {
      const w = nadpOk[jz][tt];
      if (w.tytul) { tytuly[jz] = w.tytul; reczne.push(jz); }
      else doWeryfikacji.push({ klucz, zrodloEn: t, powod: `nadpisanie ${jz} „${tt}” nie istnieje` });
    }
    const pewnosc = !r.tytul ? 'brak' : r.przekierowanie ? 'srednia' : 'wysoka';
    if (pewnosc !== 'wysoka') doWeryfikacji.push({ klucz, zrodloEn: t, powod: pewnosc === 'brak' ? 'brak artykułu en' : `przekierowanie na „${r.tytul}”` });
    const braki = JEZYKI.filter((j) => !tytuly[j]);
    return { zrodloEn: t, qid: r.qid, pewnosc, tytuly, ...(reczne.length ? { reczneJezyki: reczne } : {}), ...(braki.length ? { brakJezykow: braki } : {}) };
  });

  const produkty = {};
  for (const p of katalog.products) {
    const lista = zrodlo.produkty[p.id];
    if (!lista) { doWeryfikacji.push({ klucz: p.id, powod: 'produkt bez tytułów w tytuly-zrodlowe.json' }); continue; }
    produkty[p.id] = { nazwaPl: p.name.pl, artykuly: artykuly(p.id, lista) };
  }
  const rodziny = {};
  for (const f of katalog.processFamilies) {
    const lista = zrodlo.rodziny[f.id];
    if (!lista) { doWeryfikacji.push({ klucz: f.id, powod: 'rodzina bez tytułów' }); continue; }
    rodziny[f.id] = { artykuly: artykuly(f.id, lista) };
  }
  const warianty = katalog.variants.map((v) => ({ id: v.id, produkt: v.productId, rodzina: v.processFamilyId }));

  const mapa = {
    opis: 'R7: mapa katalog → artykuły Wikipedii. Wariant dziedziczy artykuły produktu i rodziny procesu. Generator: tools/ruch/mapuj-wikipedia.mjs.',
    wygenerowano: new Date().toISOString().slice(0, 10),
    wersjaKatalogu: katalog.version,
    jezyki: JEZYKI,
    produkty, rodziny, warianty, doWeryfikacji,
  };
  const wyjscie = arg('--wyjscie', 'tools/ruch/mapa-wikipedia.json');
  writeFileSync(wyjscie, JSON.stringify(mapa, null, 1) + '\n');
  const art = [...Object.values(produkty), ...Object.values(rodziny)].flatMap((x) => x.artykuly);
  const ile = (j) => art.filter((a) => a.tytuly[j]).length;
  console.log(`zapisano ${wyjscie}: produkty ${Object.keys(produkty).length}/${katalog.products.length}, rodziny ${Object.keys(rodziny).length}/${katalog.processFamilies.length}, artykuły ${art.length}; `
    + JEZYKI.map((j) => `${j} ${ile(j)}`).join(', ') + `; do weryfikacji ${doWeryfikacji.length}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
