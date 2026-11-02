// Przeniesienie JarAtlas do czystego repo — TRYB TYLKO PODGLĄDU (docs/wydanie/10-przeniesienie-czyste-repo.md).
// Wzór (analogia pełna, D-052): repo trening, scripts/przeniesienie-1.0.mjs + .json + tests/przeniesienie-1.0.test.ts + docs/46.
// git archive HEAD → katalog tymczasowy → reguły z tools/przeniesienie.json (ścieżka / akcja / powód, przepisanie odnośników, zamiany)
// → strażnik (dane osobowe, sekrety, ślady narzędzi, nazwy cudzych firm) → raport. NIC nie wypycha, nie tworzy repo ani commitu
// w repo źródłowym; drzewo podglądu dostaje własne, puste repo git (git init + add, bez commitu) tylko po to, by działało jak nowe repo.
// Użycie: node tools/przeniesienie.mjs [--lista=<plik>] [--repo=<katalog>] [--decyzje=zostaw|usun] [--zachowaj] [--testy] [--json]
//   --zachowaj  zostawia katalog tymczasowy (drzewo/ i na-dysk/) i wypisuje jego ścieżkę.
//   --testy     uruchamia `npm run check` w zbudowanym drzewie (testy, granice, katalog, treści, build, rozmiar) — ostateczny dowód.
// Różnice wobec wzoru: strażnik z listy (nie z osobnego forbidden-names.json) i z kategoriami dane/sekrety/ślady (błąd w całym drzewie);
// bez generatorów (JarAtlas nie generuje README); testy przez `npm run check` (bez Jest i node_modules, ADR 0001). Kod wyjścia 1 przy błędzie.
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const AKCJE = ['zostaje', 'usun', 'dysk', 'decyzja', 'popraw'];
const TEKST = /(^|\/)(\.gitignore|CNAME)$|\.(mjs|cjs|js|json|ya?ml|md|txt|html|css|xml|svg|sh)$/;
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wzgledna = (s) => typeof s === 'string' && s.length > 0 && !s.startsWith('/') && !s.split('/').includes('..');

/** Sprawdza listę: akcje, powody, ścieżki względne, brak powtórzeń, zamiany, przepisz. Zwraca listę błędów. */
export function sprawdzListe(lista) {
  const bledy = [];
  const wpisy = lista?.wpisy;
  if (!Array.isArray(wpisy) || wpisy.length === 0) return ['lista nie ma wpisów'];
  const widziane = new Set();
  for (const w of wpisy) {
    if (!w || typeof w.sciezka !== 'string' || !w.sciezka) { bledy.push(`wpis bez ścieżki: ${JSON.stringify(w)}`); continue; }
    if (!AKCJE.includes(w.akcja)) bledy.push(`${w.sciezka}: nieznana akcja „${w.akcja}”`);
    if (typeof w.powod !== 'string' || w.powod.trim().length < 10) bledy.push(`${w.sciezka}: brak powodu (min. 10 znaków)`);
    if (!wzgledna(w.sciezka)) bledy.push(`${w.sciezka}: ścieżka musi być względna`);
    if (widziane.has(w.sciezka)) bledy.push(`${w.sciezka}: powtórzony wpis`);
    widziane.add(w.sciezka);
  }
  for (const z of lista.zamiany ?? []) {
    if (!z || !wzgledna(z.sciezka) || typeof z.z !== 'string' || !z.z || typeof z.na !== 'string') bledy.push(`zamiana niepoprawna: ${JSON.stringify(z)}`);
  }
  for (const x of lista.przepisz ?? []) if (!wzgledna(x)) bledy.push(`przepisz: ścieżka względna oczekiwana, jest ${JSON.stringify(x)}`);
  return bledy;
}

/** Wpis obejmujący plik: dokładna ścieżka albo katalog (ukośnik na końcu); wygrywa najdłuższa ścieżka. */
export function wpisDla(plik, wpisy) {
  let best;
  for (const w of wpisy) {
    const ok = w.sciezka.endsWith('/') ? plik.startsWith(w.sciezka) : plik === w.sciezka;
    if (ok && (!best || w.sciezka.length > best.sciezka.length)) best = w;
  }
  return best;
}

/** Lista + pliki → plan: zostaje[], usuniete[], naDysk[], decyzje[], popraw[], wpisyBezPlikow[]. */
export function zbudujPlan(pliki, lista, { decyzje = 'zostaw' } = {}) {
  const bledy = sprawdzListe(lista);
  if (bledy.length) throw new Error(`lista przeniesienia niepoprawna:\n- ${bledy.join('\n- ')}`);
  if (!['zostaw', 'usun'].includes(decyzje)) throw new Error(`--decyzje: zostaw albo usun, jest „${decyzje}”`);
  const plan = { zostaje: [], usuniete: [], naDysk: [], decyzje: [], popraw: [], wpisyBezPlikow: [] };
  const uzyte = new Set();
  for (const plik of [...pliki].sort()) {
    const w = wpisDla(plik, lista.wpisy);
    if (w) uzyte.add(w.sciezka);
    const akcja = w ? w.akcja : 'zostaje';
    const info = { plik, akcja, powod: w ? w.powod : '', wpis: w ? w.sciezka : null };
    if (akcja === 'usun') plan.usuniete.push(info);
    else if (akcja === 'dysk') { plan.usuniete.push(info); plan.naDysk.push(info); }
    else if (akcja === 'decyzja') {
      plan.decyzje.push(info);
      if (decyzje === 'usun') plan.usuniete.push({ ...info, akcja: 'decyzja→usun' }); else plan.zostaje.push(plik);
    } else {
      plan.zostaje.push(plik);
      if (akcja === 'popraw') plan.popraw.push(info);
    }
  }
  plan.wpisyBezPlikow = lista.wpisy.filter((w) => !uzyte.has(w.sciezka)).map((w) => w.sciezka);
  return plan;
}

/** Zamiana tekstu: wszystkie wystąpienia `z` → `na`. Zwraca { tresc, ile }. */
export function zamien(tresc, z, na) {
  const ile = tresc.split(z).length - 1;
  return { tresc: ile ? tresc.split(z).join(na) : tresc, ile };
}

/** Odnośniki do usuniętych dokumentów docs/… → link traci adres, pełna ścieżka → „Dysk: <ścieżka bez docs/>”. Zwraca { tresc, ile }. */
export function przepiszOdnosniki(tresc, usuniete, katalogi = []) {
  const docs = [...usuniete, ...katalogi].filter((f) => f.startsWith('docs/')).sort((a, b) => b.length - a.length);
  let ile = 0;
  const licz = (re, f) => { tresc = tresc.replace(re, (...m) => { ile++; return f(...m); }); };
  for (const f of docs) {
    licz(new RegExp(`\\[([^\\]]*)\\]\\(${esc(f)}(?:#[^)]*)?\\)`, 'g'), (_, t) => t);
    licz(new RegExp(`(?<![\\w/.-])${esc(f)}`, 'g'), () => `Dysk: ${f.slice('docs/'.length)}`);
  }
  return { tresc, ile };
}

const pod = (f, p) => f === p || (p.endsWith('/') && f.startsWith(p));
const wyrazenia = (tab) => (tab ?? []).map((x) => ({ nazwa: x.nazwa, re: new RegExp(x.wzorzec, (x.flagi ?? '').replace('g', '')) }));
/** Nazwa firmy jako całe słowo z polską końcówką (jak trening tests/forbidden-names.ts); wielkość liter ma znaczenie. */
const nazwaRe = (n) => new RegExp(`(?<![\\p{L}\\p{N}_])${esc(n)}(?:a|u|ie|iem|owi|y|ów|em|ach)?(?![\\p{L}\\p{N}_])`, 'u');

/**
 * Strażnik na drzewie (pliki = { ścieżka: treść }). Wartości trafień nie są zapisywane (sekret nie trafia do raportu).
 *  bledy: dane osobowe, sekrety, ślady narzędzi — w całym drzewie; nazwy firm — w zakresie; wszystko poza wyjątkami,
 *  uwagi: wzorce miękkie (do przeglądu), pozaZakresem: nazwy firm w dokumentach, zWyjatkiem, nieuzyteWyjatki.
 */
export function straznik(pliki, cfg) {
  const kat = ['dane', 'sekrety', 'slady'].flatMap((k) => wyrazenia(cfg[k]).map((x) => ({ ...x, kategoria: k })));
  const miekkie = wyrazenia(cfg.miekkie);
  const nazwy = (cfg.nazwy ?? []).map((n) => ({ nazwa: n, re: nazwaRe(n) }));
  const wynik = { bledy: [], uwagi: [], pozaZakresem: [], zWyjatkiem: [], nieuzyteWyjatki: [] };
  const uzyte = new Set();
  // Wyjątek z polem „wartosci” (wyrażenie) obejmuje tylko trafienia pasujące do niego (np. atrapa klucza w teście), nie cały plik.
  const wyjatek = (plik, nazwa, trafienia) => (cfg.wyjatki ?? []).find((w) => w.nazwa === nazwa && pod(plik, w.sciezka)
    && (!w.wartosci || trafienia.every((t) => new RegExp(w.wartosci, 'u').test(t))));
  const zgl = (plik, kategoria, nazwa, trafienia = []) => {
    const w = wyjatek(plik, nazwa, trafienia);
    if (w) { uzyte.add(w); wynik.zWyjatkiem.push({ plik, kategoria, nazwa }); } else wynik.bledy.push({ plik, kategoria, nazwa });
  };
  for (const [plik, tresc] of Object.entries(pliki).sort(([a], [b]) => a.localeCompare(b))) {
    for (const x of kat) {
      const trafienia = [...tresc.matchAll(new RegExp(x.re.source, `${x.re.flags}g`))].map((m) => m[0]);
      if (trafienia.length) zgl(plik, x.kategoria, x.nazwa, trafienia);
    }
    for (const x of nazwy) {
      if (!x.re.test(tresc)) continue;
      if ((cfg.zakres ?? []).some((s) => pod(plik, s))) zgl(plik, 'nazwy', x.nazwa);
      else wynik.pozaZakresem.push({ plik, nazwa: x.nazwa });
    }
    for (const x of miekkie) if (x.re.test(tresc)) wynik.uwagi.push({ plik, nazwa: x.nazwa });
  }
  wynik.nieuzyteWyjatki = (cfg.wyjatki ?? []).filter((w) => !uzyte.has(w)).map((w) => `${w.sciezka}: ${w.nazwa}`);
  return wynik;
}

/** Odwołania kodu, testów i workflowów do usuniętych plików: linia z odczytem = „czyta”, inna = „wzmianka”. */
export function odwolania(zrodla, usuniete) {
  const czytaRe = /read|exist|join\(|resolve\(|readdir|stat|new URL\(/i;
  const wynik = [];
  for (const [plik, tresc] of Object.entries(zrodla)) {
    const czyta = new Set(), wzmianka = new Set();
    for (const l of tresc.split('\n')) for (const u of usuniete) if (l.includes(u)) (czytaRe.test(l) ? czyta : wzmianka).add(u);
    if (czyta.size || wzmianka.size) wynik.push({ plik, czyta: [...czyta].sort(), wzmianka: [...wzmianka].filter((u) => !czyta.has(u)).sort() });
  }
  return wynik;
}

/** .gitignore nowego repo: .env (klucz API tylko w sekretach środowiska) i dist/ (wynik buildu). Zwraca listę uwag. */
export function sprawdzGitignore(tresc) {
  const linie = new Set(tresc.split('\n').map((l) => l.trim()));
  const U = [];
  if (!linie.has('.env')) U.push('.gitignore nie obejmuje: .env');
  if (!linie.has('dist/') && !linie.has('dist')) U.push('.gitignore nie obejmuje: dist/');
  return U;
}

export function raport(plan, s, odw, kroki, uwagi = []) {
  const L = [];
  const pokaz = (naglowek, tab, f) => { L.push(`\n== ${naglowek} (${tab.length}) ==`); tab.slice(0, 80).forEach((x) => L.push(`  ${f(x)}`)); if (tab.length > 80) L.push(`  … i ${tab.length - 80} więcej`); };
  const lacznie = plan.zostaje.length + plan.usuniete.length;
  L.push('PODGLĄD PRZENIESIENIA DO CZYSTEGO REPO (nic nie wypchnięto, nic nie utworzono na GitHubie)');
  L.push(`Plików w HEAD: ${lacznie}; zostaje: ${plan.zostaje.length}; usunięte: ${plan.usuniete.length} (w tym na Dysk: ${plan.naDysk.length}); „decyzja”: ${plan.decyzje.length}; „popraw”: ${plan.popraw.length}`);
  const grupy = {};
  for (const u of plan.usuniete) grupy[u.wpis] = (grupy[u.wpis] || 0) + 1;
  pokaz('USUNIĘTE wg pozycji listy', Object.entries(grupy), ([w, n]) => `${String(n).padStart(4)}  ${w}`);
  pokaz('NA DYSK (kopia dla właściciela, w podglądzie: na-dysk/)', plan.naDysk, (x) => x.plik);
  pokaz('DECYZJA WŁAŚCICIELA (domyślnie zostają)', plan.decyzje, (x) => `${x.plik}  [${x.wpis}]`);
  pokaz('DO POPRAWY RĘCZNEJ w dniu przeniesienia', plan.popraw, (x) => `${x.plik} — ${x.powod}`);
  if (plan.wpisyBezPlikow.length) pokaz('WPISY LISTY BEZ PLIKU (literówka albo plik, którego jeszcze nie ma)', plan.wpisyBezPlikow, (x) => x);
  pokaz('ODNOŚNIKI PRZEPISANE NA „Dysk: …” (ile)', kroki.przepisane, (x) => `${String(x.ile).padStart(3)}  ${x.plik}`);
  pokaz('ZAMIANY WYKONANE (ile wystąpień)', kroki.zamiany.filter((x) => x.ile), (x) => `${String(x.ile).padStart(3)}  ${x.sciezka}: „${x.z}” → „${x.na}”`);
  pokaz('ZAMIANY NIEWYKONANE (plik usunięty albo tekst nieobecny — lista nieaktualna, BŁĄD)', kroki.zamiany.filter((x) => !x.ile), (x) => `${x.sciezka}: „${x.z}”`);
  pokaz('BŁĘDY STRAŻNIKA: dane osobowe, sekrety, ślady narzędzi, nazwy firm w zakresie (musi być 0)', s.bledy, (x) => `${x.plik}: ${x.kategoria} — ${x.nazwa}`);
  pokaz('OBJĘTE WYJĄTKIEM (powód w liście) — dozwolone', s.zWyjatkiem, (x) => `${x.plik}: ${x.nazwa}`);
  pokaz('WYJĄTKI ZBĘDNE (bez trafienia — usunąć z listy)', s.nieuzyteWyjatki, (x) => x);
  const grupuj = (tab) => Object.entries(tab.reduce((a, x) => ((a[x.plik] ||= new Set()).add(x.nazwa), a), {}));
  pokaz('NAZWY FIRM W DOKUMENTACH (poza zakresem; cytowane źródła dozwolone, resztę ocenić)', grupuj(s.pozaZakresem), ([p, n]) => `${p}: ${[...n].join(', ')}`);
  pokaz('ŚLADY MIĘKKIE (do przeglądu; decyzja D9)', grupuj(s.uwagi), ([p, n]) => `${p}: ${[...n].join(', ')}`);
  pokaz('KOD I TESTY CZYTAJĄCE USUNIĘTE PLIKI (zmienić przed przeniesieniem, BŁĄD)', odw.filter((o) => o.czyta.length), (o) => `${o.plik} → ${o.czyta.join(', ')}`);
  pokaz('WZMIANKI O USUNIĘTYCH PLIKACH (komentarze; nie psują testów)', odw.filter((o) => o.wzmianka.length && !o.czyta.length), (o) => `${o.plik} → ${o.wzmianka.join(', ')}`);
  uwagi.forEach((u) => L.push(`\nUWAGA: ${u}`));
  const blad = s.bledy.length || kroki.zamiany.some((x) => !x.ile) || odw.some((o) => o.czyta.length) || s.nieuzyteWyjatki.length;
  L.push(`\nWYNIK: ${blad ? 'BŁĄD (drzewo nie nadaje się jeszcze do przeniesienia)' : 'OK (kontrola listy i strażnika bez błędów)'}`);
  return L.join('\n');
}

// ───────────────────────── część z wejściem/wyjściem ─────────────────────────

function wypiszPliki(korzen, rel = '', out = []) {
  for (const e of readdirSync(join(korzen, rel), { withFileTypes: true })) {
    const p = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) { if (e.name !== '.git') wypiszPliki(korzen, p, out); } else out.push(p);
  }
  return out;
}

/** Usuwa puste katalogi (po usunięciach); zwraca true, gdy katalog został pusty. */
function przytnij(k) {
  for (const e of readdirSync(k, { withFileTypes: true })) if (e.isDirectory() && e.name !== '.git' && przytnij(join(k, e.name))) rmSync(join(k, e.name), { recursive: true });
  return readdirSync(k).length === 0;
}

function main(args) {
  const opt = (nazwa, def) => { const a = args.find((x) => x === `--${nazwa}` || x.startsWith(`--${nazwa}=`)); return a === undefined ? def : (a.includes('=') ? a.split('=').slice(1).join('=') : true); };
  const korzen = resolve(opt('repo', resolve(dirname(fileURLToPath(import.meta.url)), '..')));
  const lista = JSON.parse(readFileSync(resolve(korzen, opt('lista', 'tools/przeniesienie.json')), 'utf8'));
  const tmp = mkdtempSync(join(tmpdir(), 'ja-przeniesienie-'));
  const drzewo = join(tmp, 'drzewo'), naDysk = join(tmp, 'na-dysk');
  mkdirSync(drzewo); mkdirSync(naDysk);
  let kod = 0;
  try {
    const arch = spawnSync('git', ['archive', 'HEAD'], { cwd: korzen, maxBuffer: 1 << 30 });
    if (arch.status !== 0) throw new Error(`git archive: ${arch.stderr}`);
    const tar = spawnSync('tar', ['-x', '-C', drzewo], { input: arch.stdout, maxBuffer: 1 << 30 });
    if (tar.status !== 0) throw new Error(`tar: ${tar.stderr}`);

    const plan = zbudujPlan(wypiszPliki(drzewo), lista, { decyzje: opt('decyzje', 'zostaw') });
    for (const x of plan.naDysk) { mkdirSync(dirname(join(naDysk, x.plik)), { recursive: true }); cpSync(join(drzewo, x.plik), join(naDysk, x.plik)); }
    for (const x of plan.usuniete) rmSync(join(drzewo, x.plik), { force: true });
    const katalogi = lista.wpisy.filter((w) => w.sciezka.endsWith('/') && ['usun', 'dysk'].includes(w.akcja) && !plan.zostaje.some((f) => f.startsWith(w.sciezka))).map((w) => w.sciezka);
    for (const k of katalogi) rmSync(join(drzewo, k), { recursive: true, force: true });
    przytnij(drzewo);
    const usunieteSciezki = plan.usuniete.map((u) => u.plik);
    const kroki = { zamiany: [], przepisane: [] };
    for (const f of plan.zostaje.filter((f) => TEKST.test(f) && (lista.przepisz ?? []).some((p) => pod(f, p)))) {
      const r = przepiszOdnosniki(readFileSync(join(drzewo, f), 'utf8'), usunieteSciezki, katalogi);
      if (r.ile) { writeFileSync(join(drzewo, f), r.tresc); kroki.przepisane.push({ plik: f, ile: r.ile }); }
    }
    for (const z of lista.zamiany ?? []) {
      const f = join(drzewo, z.sciezka);
      const r = existsSync(f) ? zamien(readFileSync(f, 'utf8'), z.z, z.na) : { tresc: '', ile: 0 };
      if (r.ile) writeFileSync(f, r.tresc);
      kroki.zamiany.push({ ...z, ile: r.ile });
    }
    const git = (...a) => spawnSync('git', a, { cwd: drzewo, encoding: 'utf8' });
    if (git('init', '-q').status !== 0) throw new Error('git init w drzewie podglądu nie powiódł się');
    git('add', '-A');

    const pliki = {};
    for (const p of wypiszPliki(drzewo)) if (TEKST.test(p) && statSync(join(drzewo, p)).size < 2e7) pliki[p] = readFileSync(join(drzewo, p), 'utf8');
    const s = straznik(pliki, lista.straznik ?? {});
    const zrodla = Object.fromEntries(Object.entries(pliki).filter(([p]) => /^(tests|tools|site|\.github)\//.test(p) || p === 'package.json'));
    const odw = odwolania(zrodla, [...usunieteSciezki, ...katalogi]);
    const uwagi = sprawdzGitignore(pliki['.gitignore'] ?? '');
    if (plan.decyzje.length && opt('decyzje', 'zostaw') === 'zostaw') uwagi.push(`${plan.decyzje.length} plików czeka na decyzję (zostają); wariant: --decyzje=usun`);
    const tekst = raport(plan, s, odw, kroki, uwagi);
    if (/WYNIK: BŁĄD/.test(tekst)) kod = 1;
    if (opt('json', false)) console.log(JSON.stringify({ zostaje: plan.zostaje.length, usuniete: plan.usuniete.length, naDysk: plan.naDysk.length, straznik: s, odwolania: odw, uwagi, kod }, null, 1));
    else console.log(tekst);

    if (opt('testy', false)) {
      console.log('\n== npm run check w zbudowanym drzewie ==');
      const r = spawnSync('npm', ['run', 'check'], { cwd: drzewo, stdio: ['ignore', 'inherit', 'inherit'] });
      console.log(`npm run check w drzewie: kod ${r.status}`);
      if (r.status !== 0) kod = 1;
    }
    if (opt('zachowaj', false)) console.log(`\nDrzewo podglądu: ${drzewo}\nDo Dysku:        ${naDysk}`);
    else rmSync(tmp, { recursive: true, force: true });
    return kod;
  } catch (e) {
    rmSync(tmp, { recursive: true, force: true });
    throw e;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { process.exitCode = main(process.argv.slice(2)); } catch (e) { console.error(String(e.message || e)); process.exit(1); }
}
