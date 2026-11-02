# R1: rejestr twierdzeń ze źródeł prywatnych (2026-11-02)

Rola 06-tresci z zadaniem architektury 05, tryb build. Gałąź `claude/jaratlas-r1-prywatne` od `844390a`. Decyzja wdrażana: `2026-11-02-jaratlas-zrodla-prywatne` (z polem `zakres_wlasciciel`: tylko kupione). Wynik: ADR 0008, kontrole, testy, wzór plików repo prywatnego. Żadnego twierdzenia z kupionego źródła nie wpisano (następna sesja).

## Co zrobione
| Element | Plik | Dowód |
|---|---|---|
| ADR (opcje A1/A2, B1/B2/B3, C1/C2, rekomendacja A2+B3+C1) | `docs/adr/0008-twierdzenia-ze-zrodel-prywatnych.md` | — |
| Kontrola strukturalna (CI) w rejestrze | `tools/kontrole-tresci.mjs` (`sprawdzRejestr`) | testy 1–5, 12, 14 |
| Kontrola katalogu: brak źródeł prywatnych i bez adresu w `sources` | `tools/validate-catalog.mjs` | test 9, 13 |
| Moduł: kształt, skrót z solą, normalizacja nazw, spójność, kontrola lokalna | `tools/zrodla-prywatne.mjs` | testy 6–8, 10, 11, 15–17 |
| Wzór katalogu `jaratlas/` dla repo prywatnego (pusty) | `docs/tresci/prywatne-wzor/` | — |

Testy przed kodem: `tests/r1-zrodla-prywatne.test.mjs` najpierw czerwone (brak modułu; potem 5 czerwonych na `kontrole-tresci`/`validate-catalog` bez podpięcia; 6 testów z przeglądu D-043 czerwonych przed poprawkami), potem 17/17. `npm run check`: wynik w sekcji „Kontrole przed pushem”.

## Przegląd D-043 (świeży kontekst, podagent Opus, effort medium)
P0: brak. Wdrożone: P1-1 (whitelista źródła prywatnego przy każdym statusie), P1-2 (historia: dodane linie, wiadomości i autorzy commitów wszystkich referencji po bazie; nazwy referencji), P1-3 (pliki z indeksu git, binarny = błąd), P2-4 (każde `typ` ≠ `publiczne` i `ref` /^prv/i = prywatne; katalog wymaga adresu przy każdym źródle), P2-5 (`weryfikacja` z zamkniętej listy), P2-6 (sól 32 hex, wszystkie pola skrótu, rekord wskazuje to samo twierdzenie), P2-7 (brak rejestru = kod 2), P2-8 (sklejone nazwy od 8 znaków, ISBN bez łączników, ligatury), P2-9 (szczebel prywatny 2–5), P3-10/11 (ADR, testy). Każda poprawka ma test.

## Stan zastany (znalezisko, realne)
Kontrola lokalna uruchomiona na tym repo z prawdziwą listą nazw (lista trzymana poza repo, tylko w scratchpadzie sesji) dała przed wyjątkami **43 pary plik–nazwa w 23 plikach** (`HEAD 844390a`). Pochodzenie: cytaty z publicznych ulotek extension (raporty B14, B16, B19, B20, E1, P1, badania FER/NAP, rejestr, karty en dwóch wariantów i ich kopie w `site/tresci/en/`), które wskazują tę publikację jako źródło przedruku. Teksty te nie mówią, że projekt ma publikację; są też w historii git. Mój diff: 0 trafień (`git diff --cached` + grep, kod 0 kontroli lokalnej po wyjątkach). Decyzja Claude, do weta: zostawić stan zastany jako wyjątki bazowe (plik → numer nazwy → liczba wystąpień, plik w repo prywatnym; `bazaHistorii` = `844390a`), kontrola łapie każde nowe wystąpienie. Opcja odrzucona (do decyzji właściciela, jeśli chce): przeredagować 23 pliki (w tym karty en i rejestr → ponowny przegląd D-027 d), historia git i tak zostaje.

## Repo prywatne
Dodanie repo prywatnego do sesji zostało zablokowane przez klasyfikator uprawnień, więc szkielet nie został wypchnięty. Wzór czterech plików jest w `docs/tresci/prywatne-wzor/` (pusty, bez nazw). Wyjątki bazowe z liczbami (bez nazw, tylko numery z listy) i lista nazw są przygotowane poza repo publicznym do przekazania sesji z dostępem.

## Decyzje do weta (decyzja Claude; analogii w Treningu brak)
1. A2: źródło prywatne jako typ w `zrodla[]`, ID twierdzeń bez zmian (zamiast prefiksu `PRV-` dla całego twierdzenia).
2. B3: skrót sha256 z solą 128 bit w publicznym wpisie (zamiast braku skrótu albo skrótu bez soli).
3. C1: karta nic nie mówi o pochodzeniu prywatnym; C2 (ogólna formuła) do decyzji właściciela i roli 04.
4. Szczebel źródła prywatnego 2–5; liczba krytyczna może opierać się na prywatnym szczeblu 2–3.
5. Wyjątki bazowe dla 43 zastanych wystąpień zamiast przeredagowania.

## Otwarte `[DO USTALENIA]`
- Wariant oparty wyłącznie na przepisie prywatnym nie może dziś mieć `ok-zrodlo` (katalog wymaga przepisu z adresem szczebla 1–3).
- Ocena prawna parafrazy (z decyzji właściciela).
- Kontrola lokalna nie łapie parafrazy zbyt bliskiej oryginałowi.

## Kontrole przed pushem
- `npm run check`: kod 0 (257 → 264 testów, katalog 0 błędów, treści 0 błędów / 3 uwagi jak przed zmianą).
- Kontrola lokalna z prawdziwą listą nazw: kod 0 (1671 plików, 6 nazw, 0 błędów po wyjątkach bazowych; także po commicie c324d62, z wiadomością commita).

## Odtworzenie wyjątków bazowych (sesja z dostępem do repo prywatnego)
`P` = klon repo prywatnego z wypełnionym `jaratlas/zakazane-nazwy.json`; wynik do `jaratlas/wyjatki-nazw.json` (bez nazw, tylko numery).
```sh
P=<klon repo prywatnego> node -e "
const fs=require('fs'),cp=require('child_process'),P=process.env.P;
import('./tools/zrodla-prywatne.mjs').then(m=>{const nazwy=JSON.parse(fs.readFileSync(P+'/jaratlas/zakazane-nazwy.json')).nazwy,w={};
for(const f of cp.execFileSync('git',['ls-tree','-r','--name-only','844390a'],{encoding:'utf8',maxBuffer:1<<28}).split('\n').filter(Boolean)){
const b=cp.execFileSync('git',['show','844390a:'+f],{maxBuffer:1<<28});if(b.includes(0))continue;const t=f+'\n'+b;
nazwy.forEach((n,i)=>{const k=m.liczWystapienia(t,n);if(k)(w[f]??={})[i+1]=k;});}
fs.writeFileSync(P+'/jaratlas/wyjatki-nazw.json',JSON.stringify({opis:'stan zastany 2026-11-02 (844390a, przed ADR 0008)',bazaHistorii:'844390a',wyjatki:w},null,1));})"
```
Oczekiwane przy liście 6 nazw z tej sesji: 23 pliki, 43 pary; potem `node tools/zrodla-prywatne.mjs --prywatne $P` → kod 0.
