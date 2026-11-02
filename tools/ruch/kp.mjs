#!/usr/bin/env node
// R7 (2026-11-02): Google Ads Keyword Planner, frazy wariantów → pliki do wgrania i scalenie wyniku z katalogiem.
//   node tools/ruch/kp.mjs eksport [--z-przepisem] [--wyjscie tools/ruch/kp]
//       → kp-pl-1.csv, kp-en-1.csv … (kolumna "Keyword", najwyżej ROZMIAR_PLIKU fraz w pliku)
//   node tools/ruch/kp.mjs scal --jezyk pl [--wyjscie ~/jaratlas-ruch/kp-pl.csv] <eksport KP 1> [<eksport KP 2> …]
//       → jeden wiersz na wariant: fraza, wyszukiwania min/max/środek; plus ranking produktów na stdout
// Eksport KP bywa w UTF-16 z tabulatorami albo w UTF-8 z przecinkami; obie postacie są rozpoznawane.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

export const ROZMIAR_PLIKU = 700; // limit wgrania w KP niepotwierdzony u Google (fora: 800), [DO USTALENIA]
const PRZEPIS = { pl: 'przepis', en: 'recipe' };

export function frazyDoWgrania(frazy, jezyk, { zPrzepisem = false } = {}) {
  const zbior = new Set();
  for (const f of frazy) {
    const t = f[jezyk].trim().toLowerCase();
    zbior.add(t);
    if (zPrzepisem) zbior.add(`${t} ${PRZEPIS[jezyk]}`);
  }
  return [...zbior].sort();
}

export function plikiCsv(lista, rozmiar = ROZMIAR_PLIKU) {
  const pliki = [];
  for (let i = 0; i < lista.length; i += rozmiar) {
    pliki.push('Keyword\n' + lista.slice(i, i + rozmiar).map((k) => (/[",]/.test(k) ? `"${k.replace(/"/g, '""')}"` : k)).join('\n') + '\n');
  }
  return pliki;
}

// "1K – 10K", "10 tys. – 100 tys.", "1,2 tys.", "1 300", "—" → {min, max} albo null
export function parsujZakres(tekst) {
  const s = String(tekst ?? '').trim();
  if (!s || /^[-–—]$/.test(s)) return null;
  const liczba = (x) => {
    let t = x.trim().toLowerCase().replace(/\s+(?=\d)/g, '').replace(/ /g, '');
    let mn = 1;
    if (/(k|tys\.?)$/.test(t)) { mn = 1e3; t = t.replace(/\s*(k|tys\.?)$/, ''); }
    else if (/(m|mln\.?)$/.test(t)) { mn = 1e6; t = t.replace(/\s*(m|mln\.?)$/, ''); }
    t = t.replace(/\s/g, '').replace(',', '.');
    const v = Number(t);
    return Number.isFinite(v) ? Math.round(v * mn) : NaN;
  };
  const czesci = s.split(/\s*[–—]\s*|\s+-\s+/);
  const w = czesci.map(liczba);
  if (w.some(Number.isNaN)) return null;
  return w.length === 1 ? { min: w[0], max: w[0] } : { min: w[0], max: w[1] };
}

function dekoduj(bufor) {
  if (bufor[0] === 0xff && bufor[1] === 0xfe) return bufor.subarray(2).toString('utf16le');
  if (bufor[0] === 0xfe && bufor[1] === 0xff) throw new Error('UTF-16 BE nieobsługiwane: zapisz plik jako UTF-8');
  return bufor.toString('utf8').replace(/^﻿/, '');
}

function podzielWiersz(w, sep) {
  if (sep === '\t') return w.split('\t');
  const out = []; let cur = ''; let q = false;
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    if (q) { if (ch === '"' && w[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === sep) { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur);
  return out;
}

// → Map(fraza → {min, max} | null)
export function parsujEksportKP(tekst) {
  const wiersze = tekst.split(/\r?\n/).filter((w) => w.trim());
  const sep = wiersze.some((w) => w.includes('\t')) ? '\t' : ',';
  const iNag = wiersze.findIndex((w) => /^(keyword|słowo kluczowe)$/i.test(podzielWiersz(w, sep)[0].trim()));
  if (iNag < 0) throw new Error('Nie znaleziono nagłówka "Keyword" / "Słowo kluczowe" w eksporcie KP');
  const nag = podzielWiersz(wiersze[iNag], sep).map((x) => x.trim());
  const iSr = nag.findIndex((x) => /avg\.? monthly searches|średnia (miesięczna )?liczba wyszukiwań/i.test(x));
  if (iSr < 0) throw new Error('Brak kolumny "Avg. monthly searches" / "Średnia liczba wyszukiwań" w eksporcie KP');
  const wynik = new Map();
  for (const w of wiersze.slice(iNag + 1)) {
    const k = podzielWiersz(w, sep);
    const fraza = (k[0] ?? '').trim().toLowerCase();
    if (fraza) wynik.set(fraza, parsujZakres(k[iSr]));
  }
  return wynik;
}

export function scal(frazy, warianty, jezyk, kp) {
  const prod = Object.fromEntries(warianty.map((v) => [v.id, v.productId]));
  return frazy.map((f) => {
    const fraza = f[jezyk].trim().toLowerCase();
    const zPrzepisem = `${fraza} ${PRZEPIS[jezyk]}`;
    const z = kp.has(fraza) ? kp.get(fraza) : undefined;
    const zp = kp.has(zPrzepisem) ? kp.get(zPrzepisem) : undefined;
    const srodek = (r) => (r ? Math.round(Math.sqrt(Math.max(r.min, 1) * Math.max(r.max, 1))) : null);
    return {
      wariant: f.id, produkt: prod[f.id], jezyk, fraza,
      min: z?.min ?? null, max: z?.max ?? null, srodek: srodek(z),
      przepis_min: zp?.min ?? null, przepis_max: zp?.max ?? null,
      status: z === undefined ? 'brak w eksporcie' : z === null ? 'brak danych KP' : 'ok',
    };
  });
}

function csv(wiersze) {
  const kol = Object.keys(wiersze[0]);
  const e = (v) => (v === null || v === undefined ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  return [kol.join(','), ...wiersze.map((w) => kol.map((k) => e(w[k])).join(','))].join('\n') + '\n';
}

function arg(nazwa, domyslna) {
  const i = process.argv.indexOf(nazwa);
  return i > 0 ? process.argv[i + 1] : domyslna;
}

function main() {
  const tryb = process.argv[2];
  const frazy = JSON.parse(readFileSync('tools/ruch/frazy-wariantow.json', 'utf8'));
  if (tryb === 'eksport') {
    const katalog = arg('--wyjscie', 'tools/ruch/kp');
    mkdirSync(katalog, { recursive: true });
    for (const jz of ['pl', 'en']) {
      const pliki = plikiCsv(frazyDoWgrania(frazy, jz, { zPrzepisem: process.argv.includes('--z-przepisem') }));
      pliki.forEach((t, i) => writeFileSync(join(katalog, `kp-${jz}-${i + 1}.csv`), t));
      console.log(`${jz}: ${pliki.length} plik(i) w ${katalog}`);
    }
  } else if (tryb === 'scal') {
    const jezyk = arg('--jezyk');
    if (!PRZEPIS[jezyk]) throw new Error('--jezyk pl albo en');
    const wej = process.argv.slice(3).filter((a, i, t) => !a.startsWith('--') && !['--jezyk', '--wyjscie'].includes(t[i - 1]));
    const kp = new Map();
    for (const p of wej) for (const [k, v] of parsujEksportKP(dekoduj(readFileSync(p)))) kp.set(k, v);
    const katalog = JSON.parse(readFileSync('catalog/catalog-seed.json', 'utf8'));
    const wynik = scal(frazy, katalog.variants, jezyk, kp);
    const plik = arg('--wyjscie', join(homedir(), 'jaratlas-ruch', `kp-${jezyk}.csv`)); // poza repo
    mkdirSync(join(plik, '..'), { recursive: true });
    writeFileSync(plik, csv(wynik));
    const ok = wynik.filter((w) => w.status === 'ok');
    const suma = {};
    for (const w of ok) suma[w.produkt] = (suma[w.produkt] ?? 0) + w.srodek;
    console.log(`zapisano ${plik}: ${wynik.length} wariantów, z danymi KP ${ok.length}, brak danych ${wynik.filter((w) => w.status === 'brak danych KP').length}, brak w eksporcie ${wynik.filter((w) => w.status === 'brak w eksporcie').length}`);
    console.log('Top 15 produktów (suma środków zakresów wariantów):');
    for (const [p, s] of Object.entries(suma).sort((a, b) => b[1] - a[1]).slice(0, 15)) console.log(`  ${p}\t${s}`);
  } else {
    console.error('Użycie: node tools/ruch/kp.mjs eksport|scal …');
    process.exit(2);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try { main(); } catch (e) { console.error(e.message); process.exit(1); }
}
