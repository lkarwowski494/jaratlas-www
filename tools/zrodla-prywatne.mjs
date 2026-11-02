// zrodla-prywatne.mjs — twierdzenia ze źródeł prywatnych (kupionych), ADR 0008. Bez zależności.
// Część strukturalna (CI): kształt źródła prywatnego w rejestrze publicznym i brak źródeł prywatnych w katalogu (sources renderuje się na karcie).
// Część lokalna (tylko sesja z dostępem do repo prywatnego):
//   node tools/zrodla-prywatne.mjs --prywatne <katalog repo prywatnego> [--repo .] [--rejestr docs/tresci/rejestr.json]
//   1) zakazane nazwy z <prywatne>/jaratlas/zakazane-nazwy.json → 0 trafień w: plikach z indeksu git (nie z dysku), nazwach plików,
//      treści i wiadomościach commitów wszystkich referencji po bazie (bazaHistorii), nazwach referencji; ponad wyjątki bazowe
//      z <prywatne>/jaratlas/wyjatki-nazw.json ({ bazaHistorii, wyjatki: { plik: { numerNazwy: liczba } } }),
//   2) spójność: każde źródło prywatne rejestru ma rekord w <prywatne>/jaratlas/rejestr-prywatny.json: to samo twierdzenie, szczebel, skrót, sól.
// Raport nigdy nie powtarza zakazanej nazwy (podaje numer z listy), bo bywa wklejany do publicznych raportów.
// Kod wyjścia: 0 bez błędów, 1 są błędy, 2 złe wywołanie (bez repo prywatnego albo rejestru nie ma cichego sukcesu).
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';

export const TYP = 'prywatne';
export const REF = /^PRV-\d{4}$/;
export const WERYFIKACJE = ['odczyt pliku + grep (repo prywatne)', 'odczyt pliku (repo prywatne)']; // zamknięta lista: wolny tekst mógłby nieść nazwę
const POLA = ['typ', 'ref', 'szczebel', 'odczyt', 'weryfikacja', 'skrot']; // whitelista: nic, co mogłoby nazwać źródło
const POLA_SKROTU = ['zrodlo', 'miejsce', 'cytatWeryfikacji', 'sol', 'szczebel']; // notatki i przegląd nie zmieniają skrótu

// Prywatne = każde typ inne niż brak/„publiczne” albo ref zaczynający się od prv (dowolna wielkość liter): literówka nie robi z niego publicznego.
export const czyPrywatne = (z) => (z?.typ !== undefined && z.typ !== 'publiczne') || /^prv/i.test(String(z?.ref ?? ''));

/** Błędy kształtu jednego źródła prywatnego w rejestrze publicznym (pusta lista = poprawne). */
export function sprawdzZrodloPrywatne(z) {
  const b = [];
  for (const k of Object.keys(z)) if (!POLA.includes(k)) b.push(`pole „${k}” niedozwolone w źródle prywatnym (tylko ${POLA.join(', ')})`);
  if (z.typ !== TYP) b.push(`typ musi być „${TYP}”`);
  if (!REF.test(z.ref ?? '')) b.push('ref musi mieć postać PRV-0000');
  // Szczebel 1 = urzędowe (hierarchia źródeł 2026-11-01); kupiona publikacja nim nie jest, a CI nie zweryfikuje deklaracji.
  if (![2, 3, 4, 5].includes(z.szczebel)) b.push('szczebel źródła prywatnego 2–5');
  if (!/^\d{4}-\d\d-\d\d$/.test(z.odczyt ?? '')) b.push('brak daty odczytu');
  if (!WERYFIKACJE.includes(z.weryfikacja)) b.push(`weryfikacja spoza listy (${WERYFIKACJE.join(' | ')})`);
  if (!/^[0-9a-f]{12}$/.test(z.skrot ?? '')) b.push('skrót musi mieć 12 znaków hex');
  return b;
}

/** sha256 kanonicznego rekordu prywatnego (pola POLA_SKROTU, klucze posortowane), pierwsze 12 hex. Sól (128 bit) chroni przed zgadywaniem. */
export function skrotRekordu(r) {
  const k = Object.fromEntries(POLA_SKROTU.filter((p) => r[p] !== undefined).sort().map((p) => [p, r[p]]));
  return createHash('sha256').update(JSON.stringify(k)).digest('hex').slice(0, 12);
}

const LIGATURY = { ł: 'l', ø: 'o', æ: 'ae', œ: 'oe', ß: 'ss', đ: 'd', þ: 'th', ı: 'i' };
export const normalizuj = (s) => String(s).toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '').replace(/[łøæœßđþı]/g, (c) => LIGATURY[c]).replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const sklej = (s) => s.replace(/ /g, '');
const MIN_SKLEJ = 8; // krótsze nazwy tylko jako całe słowa (mniej fałszywych trafień)

/** Liczba wystąpień nazwy w tekście (po normalizacji): całe słowa, a dla nazw od 8 znaków także w postaci sklejonej (domeny, ISBN bez łączników). */
export function liczWystapienia(tekst, nazwa) {
  const n = normalizuj(nazwa); if (!n) return 0;
  const t = normalizuj(tekst), ile = (h, x) => { let k = 0, i = h.indexOf(x); while (i !== -1) { k++; i = h.indexOf(x, i + x.length); } return k; };
  return sklej(n).length >= MIN_SKLEJ ? ile(sklej(t), sklej(n)) : ile(` ${t} `, ` ${n} `);
}

/** Nazwy z listy obecne w tekście (do użytku wewnętrznego). */
export const szukajNazw = (tekst, nazwy) => nazwy.filter((n) => liczWystapienia(tekst, n) > 0);

/** Spójność rejestru publicznego z prywatnym: { wpisy: { 'PRV-0001': { twierdzenie, zrodlo, miejsce, cytatWeryfikacji, sol, szczebel, ... } } }. */
export function sprawdzSpojnosc(rejestr, prywatny) {
  const b = [], wpisy = prywatny?.wpisy ?? {};
  for (const t of rejestr) for (const z of (t.zrodla ?? []).filter(czyPrywatne)) {
    const r = Object.hasOwn(wpisy, z.ref) ? wpisy[z.ref] : undefined;
    if (!r) { b.push(`${t.id}: ${z.ref} nie ma wpisu w rejestrze prywatnym`); continue; }
    if (r.twierdzenie !== t.id) b.push(`${t.id}: ${z.ref} w rejestrze prywatnym wskazuje twierdzenie ${r.twierdzenie ?? '(brak)'}`);
    for (const p of POLA_SKROTU) if (r[p] === undefined || r[p] === '') b.push(`${t.id}: ${z.ref} rekord prywatny bez pola ${p}`);
    if (r.sol !== undefined && !/^[0-9a-f]{32}$/.test(r.sol)) b.push(`${t.id}: ${z.ref} sol musi mieć 32 znaki hex`);
    if (r.szczebel !== z.szczebel) b.push(`${t.id}: ${z.ref} szczebel ${z.szczebel}, w rejestrze prywatnym ${r.szczebel}`);
    if (skrotRekordu(r) !== z.skrot) b.push(`${t.id}: ${z.ref} skrót ${z.skrot} niezgodny z rekordem prywatnym (${skrotRekordu(r)})`);
  }
  return b;
}

/** Katalog: źródło prywatne albo bez adresu w sources wariantu trafiłoby na kartę (szablony.mjs renderuje adres i miejsce). */
export function sprawdzCatalogBezPrywatnych(cat) {
  const b = [];
  for (const v of cat.variants ?? []) for (const z of v.sources ?? []) {
    if (czyPrywatne(z)) b.push(`wariant ${v.id}: źródło prywatne w sources (renderowane na karcie; ADR 0008: tylko w rejestrze twierdzeń)`);
    else if (!z.adres) b.push(`wariant ${v.id}: źródło w sources bez adresu (ADR 0008: na karcie tylko źródła publiczne z adresem)`);
  }
  return b;
}

// Pliki z indeksu (nie z dysku): git cat-file --batch na „:ścieżka”.
function plikiZIndeksu(git, repo) {
  const sciezki = git('ls-files', '-z', '--cached').split('\0').filter(Boolean);
  if (!sciezki.length) return [];
  const out = execFileSync('git', ['-C', repo, 'cat-file', '--batch'], { input: sciezki.map((f) => `:${f}`).join('\n') + '\n', maxBuffer: 1 << 30 });
  const wynik = []; let i = 0;
  for (const f of sciezki) {
    const nl = out.indexOf(10, i), naglowek = out.subarray(i, nl).toString(), m = naglowek.match(/ blob (\d+)$/);
    if (!m) { wynik.push({ f, brak: true }); i = nl + 1; continue; }
    const n = Number(m[1]); wynik.push({ f, buf: out.subarray(nl + 1, nl + 1 + n) }); i = nl + 1 + n + 1;
  }
  return wynik;
}

export function main(argv, log = console.log) {
  const a = {};
  for (let i = 0; i < argv.length; i += 2) a[argv[i].replace(/^--/, '')] = argv[i + 1];
  const repo = a.repo ?? '.', pz = a.prywatne && join(a.prywatne, 'jaratlas'), rp = join(repo, a.rejestr ?? 'docs/tresci/rejestr.json');
  if (!pz || !existsSync(join(pz, 'zakazane-nazwy.json')) || !existsSync(join(pz, 'rejestr-prywatny.json')) || !existsSync(rp)) { log('Użycie: node tools/zrodla-prywatne.mjs --prywatne <repo prywatne> [--repo .] [--rejestr docs/tresci/rejestr.json] (brak jaratlas/zakazane-nazwy.json, rejestr-prywatny.json albo rejestru publicznego)'); return 2; }
  const nazwy = JSON.parse(readFileSync(join(pz, 'zakazane-nazwy.json'), 'utf8')).nazwy ?? [];
  if (!nazwy.length) { log('Lista zakazanych nazw jest pusta: kontrola nie ma sensu'); return 2; }
  const pw = join(pz, 'wyjatki-nazw.json'), wj = existsSync(pw) ? JSON.parse(readFileSync(pw, 'utf8')) : {}, wyjatki = wj.wyjatki ?? {};
  const nr = (n) => `#${nazwy.indexOf(n) + 1}`;
  const git = (...x) => execFileSync('git', ['-C', repo, ...x], { encoding: 'utf8', maxBuffer: 1 << 30 });
  const bledy = [];
  // 1a. pliki z indeksu i ich nazwy
  const pliki = plikiZIndeksu(git, repo);
  for (const { f, buf, brak } of pliki) {
    if (brak) { bledy.push(`plik ${f}: nie da się odczytać z indeksu`); continue; }
    if (buf.includes(0)) { bledy.push(`plik ${f}: binarny, kontrola nazw go nie czyta (ADR 0008: w repo tylko pliki tekstowe)`); continue; }
    const tekst = f + '\n' + buf.toString('utf8');
    for (const n of szukajNazw(tekst, nazwy)) {
      const ile = liczWystapienia(tekst, n), wolno = Number(wyjatki[f]?.[nazwy.indexOf(n) + 1] ?? 0);
      if (ile > wolno) bledy.push(`plik ${f}: zakazana nazwa ${nr(n)} (${ile}×, wyjątek bazowy ${wolno})`);
    }
  }
  // 1b. historia wszystkich referencji po bazie: wiadomość, autor i dodane linie
  const zakres = ['--all', ...(wj.bazaHistorii ? ['--not', wj.bazaHistorii] : [])];
  for (const c of git('log', ...zakres, '-p', '--no-ext-diff', '--format=%x1e%H%x00%an %ae %cn %ce%x00%B%x00').split('\x1e').filter((s) => s.trim())) {
    const [h, kto, msg, diff = ''] = c.split('\0');
    const dodane = diff.split('\n').filter((l) => l.startsWith('+') && !l.startsWith('+++')).join('\n');
    for (const n of szukajNazw(`${kto}\n${msg}`, nazwy)) bledy.push(`commit ${h.slice(0, 12)}: zakazana nazwa ${nr(n)} w wiadomości lub autorze`);
    for (const n of szukajNazw(dodane, nazwy)) bledy.push(`historia ${h.slice(0, 12)}: zakazana nazwa ${nr(n)} w dodanych liniach (zostaje w historii nawet po usunięciu)`);
  }
  // 1c. nazwy referencji (gałęzie, tagi)
  for (const r of git('for-each-ref', '--format=%(refname)').split('\n').filter(Boolean)) for (const n of szukajNazw(r, nazwy)) bledy.push(`referencja ${r.replace(/^refs\//, '')}: zakazana nazwa ${nr(n)}`);
  // 2. spójność z rejestrem prywatnym
  bledy.push(...sprawdzSpojnosc(JSON.parse(readFileSync(rp, 'utf8')), JSON.parse(readFileSync(join(pz, 'rejestr-prywatny.json'), 'utf8'))));
  for (const b of bledy) log(`BŁĄD ${b}`);
  log(`${pliki.length} plików, ${nazwy.length} nazw; ${bledy.length} błędów`);
  return bledy.length ? 1 : 0;
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) process.exitCode = main(process.argv.slice(2));
