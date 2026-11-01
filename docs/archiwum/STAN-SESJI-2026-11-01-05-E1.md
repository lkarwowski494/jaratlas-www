# Stan pracy JarAtlas

Aktualizacja: 2026-11-01 (sesja session_01T66VBy41EWmC51a2YDB8zQ). Historia: `docs/archiwum/`.

## Rola i etap
05-architekt · build · szkielet strony. E0 i E1 zakończone 2026-11-01; szkielet kodu gotowy (wyjątek ADR 0006). **STOP** przed E2–E4. Prompt: `node /home/user/prompts/tools/assemble.mjs 05-architekt --tryb build` (prompts @ eb3b4e7).

## Decyzje właściciela (2026-11-01, tablica decyzji)
- `2026-11-01-jaratlas-e3-stop`: 42 warianty niskokwasowe z kąpielą wodną w v0 (SZY-006 szczebla 1 odradza) → `nie-publikowac`. **Zastosowane** w `catalog/catalog-seed.json` 1.0.2 (notatka `[DEC …]` przy każdym). Dowód: `npm test` 20/20, `check:catalog` kod 0, `check:tresci` kod 0.
- `2026-11-01-jaratlas-tlumaczenia-api`: tłumaczenia kart przez Claude API w ramach darmowego kredytu 200 USD, nie w sesjach Claude Code (sesje przygotowują skrypt wsadowy i kontrolę jakości). **Otwarte:** kwota, termin i konto kredytu; szacunek kosztu; twardy limit wydatków; klucz API w sekretach środowiska, nigdy w repo.
- D-051 budżet kontekstu: praca do ok. 35% okna; od 30% domknięcie kroku, zapis stanu, przekazanie.

## Katalog (stan)
`catalog/catalog-seed.json` 1.0.2: 1432 rekordy; ok-zrodlo 288, do-researchu 921, ryzyko-wysokie 97, nie-publikowac 89, wycofane 37; wszystkie ukryte.

## Otwarte (najważniejsze)
Słoiki USA pint/quart vs 0,5/1 l; procedury głównie USA; oliwki (UC ANR 8267); 133 pytania w `docs/tresci/pytania-otwarte.md`; przegląd eksperta później (D-027 d). Repo/hosting i push na main: tylko za zgodą właściciela.

## Decyzje 2026-11-01 (tablica `2026-11-01-jaratlas-szkielet-e0`)
Kod szkieletu pisze 05 z wyjątkiem (przegląd 07 w świeżym kontekście przed scaleniem); slugi w języku odbiorcy; własny generator Node bez zależności.

## Wynik (dowody)
- ADR 0001–0006 przyjęte, 0007 hosting proponowana: `docs/adr/`; indeks `docs/architektura/README.md`.
- `site/` + `npm run build` → `dist/`; na prawdziwym katalogu: 0 stron treści, pusta mapa (kod 0).
- `npm test` 33/33 (13 testów strony; mutacje bramki, produktu, x-default, Recipe wykrywane); `check:catalog` 0; `check:tresci` 0.

## Decyzje czekające
1. Hosting (ADR 0007) i domena.
2. Tekst uwagi D-027 (c), adres stron rodzin, reklamy/analityka, obrazy do Recipe.

## Następny krok
E2–E4 roli 05 (konfiguracja, ścieżki ryzyka, lista kontroli dla 07, przekazanie), potem przegląd 07 w świeżym kontekście; równolegle 06: treść pierwszych kart fali 1 i slugi `site/slugi/{lang}.json`.
