# Stan pracy JarAtlas

Aktualizacja: 2026-11-01 (sesja session_01T66VBy41EWmC51a2YDB8zQ). Historia: `docs/archiwum/`.

## Rola i etap
05-architekt · build · szkielet strony. Krok 0 (decyzja E3) zakończony; **E0 zakończone 2026-11-01, STOP** (raport `docs/architektura/E0-rozpoznanie-2026-11-01.md`). Prompt: `node /home/user/prompts/tools/assemble.mjs 05-architekt --tryb build` (prompts @ eb3b4e7).

## Decyzje właściciela (2026-11-01, tablica decyzji)
- `2026-11-01-jaratlas-e3-stop`: 42 warianty niskokwasowe z kąpielą wodną w v0 (SZY-006 szczebla 1 odradza) → `nie-publikowac`. **Zastosowane** w `catalog/catalog-seed.json` 1.0.2 (notatka `[DEC …]` przy każdym). Dowód: `npm test` 20/20, `check:catalog` kod 0, `check:tresci` kod 0.
- `2026-11-01-jaratlas-tlumaczenia-api`: tłumaczenia kart przez Claude API w ramach darmowego kredytu 200 USD, nie w sesjach Claude Code (sesje przygotowują skrypt wsadowy i kontrolę jakości). **Otwarte:** kwota, termin i konto kredytu; szacunek kosztu; twardy limit wydatków; klucz API w sekretach środowiska, nigdy w repo.
- D-051 budżet kontekstu: praca do ok. 35% okna; od 30% domknięcie kroku, zapis stanu, przekazanie.

## Katalog (stan)
`catalog/catalog-seed.json` 1.0.2: 1432 rekordy; ok-zrodlo 288, do-researchu 921, ryzyko-wysokie 97, nie-publikowac 89, wycofane 37; wszystkie ukryte.

## Otwarte (najważniejsze)
Słoiki USA pint/quart vs 0,5/1 l; procedury głównie USA; oliwki (UC ANR 8267); 133 pytania w `docs/tresci/pytania-otwarte.md`; przegląd eksperta później (D-027 d). Repo/hosting i push na main: tylko za zgodą właściciela.

## Decyzje czekające (E0 §7–8)
1. Kto pisze kod szkieletu: 05 z nazwanym wyjątkiem + przegląd 07 w świeżym kontekście, czy 05 tylko ADR i 08 kod.
2. Slugi: w języku odbiorcy (`slug.{lang}`) czy identyfikator we wszystkich językach.
3. Generator: własny Node bez zależności / Eleventy / Astro.
4. Później: hosting, adres stron rodzin, reklamy i analityka.

## Następny krok
E1 (ADR 1–9 z E0 §7) po decyzjach; potem Szkielet strony: generator statyczny, `/{lang}/{product}/{variant}/`, hreflang, mapa strony tylko z `publication: opublikowana`, filtry na fragmentach adresu, testy SEO (Słoik `docs/jaratlas/00-PRZEKAZANIE.md` §6).
