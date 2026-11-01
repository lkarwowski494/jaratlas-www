// Parametry dziedzinowe i wektory testowe z progów rodzin (tylko liczby z twierdzeniem potwierdzonym).
import { readFileSync, writeFileSync } from 'node:fs';
const S = process.argv[2], c = JSON.parse(readFileSync(`${S}/v1/catalog-seed.json`, 'utf8')), r = new Map(JSON.parse(readFileSync(`${S}/v1/rejestr.json`, 'utf8')).map((t) => [t.id, t]));
const KROK = { pH: 0.1, '°C': 1, '°F': 1, min: 1, h: 1, dni: 1, '%': 0.1, ppm: 1, 'mg/kg': 1, PSI: 1 }; // rozdzielczość wpisu [ZAŁOŻENIE do akceptacji roli 07]
const out = [], pomin = [];
for (const f of c.processFamilies) for (const t of f.thresholds) {
  const w = Number(t.wartosc);
  if (t.wartosc == null || !Number.isFinite(w) || !t.claim || !['<=', '<', '>=', '>'].includes(t.granica)) { pomin.push(`${f.id}: ${t.wielkosc} (${t.wartosc ?? 'null'} ${t.granica ?? ''})`); continue; }
  const k = KROK[t.jednostka] ?? null, tw = r.get(t.claim), zr = tw.zrodla?.[0];
  const ok = (x) => ({ '<=': x <= w, '<': x < w, '>=': x >= w, '>': x > w })[t.granica];
  const rnd = (x) => Math.round(x * 1000) / 1000;
  out.push({ parametr: `${f.id}.${t.wielkosc}`.replace(/\s+/g, '_').slice(0, 120), rodzina: f.id, wielkosc: t.wielkosc, wartosc: w, jednostka: t.jednostka, granica: t.granica, twierdzenie: t.claim, krytyczne: !!tw.krytyczne, zrodlo: zr?.adres,
    wektory: k ? [w - k, w, w + k].map((x) => ({ wejscie: rnd(x), spelnia: ok(rnd(x)) })) : null, ...(k ? {} : { uwaga: `brak rozdzielczości dla jednostki „${t.jednostka}”` }) });
}
// Zgodność z rejestrem: ścisła (pole wartosc twierdzenia) albo liczba w tekście twierdzenia (zakres, słowo); konfiguracja do kontroli tylko ścisłe.
const SLOWNIE = { 'SLO-017': 'rok', 'SLO-019': 'rok', 'SLO-069': 'tydzień' };
for (const x of out) { const t = r.get(x.twierdzenie); x.zgodnosc = Number(t.wartosc) === x.wartosc ? 'ścisła' : SLOWNIE[x.twierdzenie] ? `słownie w twierdzeniu („${SLOWNIE[x.twierdzenie]}”)` : 'liczba w tekście twierdzenia'; }
writeFileSync(`${S}/v1/parametry.json`, JSON.stringify(out, null, 1));
writeFileSync(`${S}/v1/konfiguracja.json`, JSON.stringify(out.filter((x) => x.zgodnosc === 'ścisła').map(({ parametr, wartosc, twierdzenie }) => ({ parametr, wartosc, jednostka: r.get(twierdzenie).jednostka ?? null, twierdzenie })) /* jednostka z rejestru: 14 zapisów różniło się tylko pisownią lub dopiskiem warunku, sprawdzone 2026-11-01 */, null, 1));
console.log('parametrów', out.length, 'z wektorami', out.filter((x) => x.wektory).length, '| pominięte (nieliczbowe/bez granicy)', pomin.length);
