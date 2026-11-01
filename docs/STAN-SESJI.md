# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBwkHLwdQhw9VGdQ1ra). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-karty-p3.md`).

## Rola i etap
06-tresci · build · partia 4 kart fali 1 (en, pl) · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Ocet poza USA (bezpieczeństwo żywności): reguła JarAtlas ACI-211 — ocet biały destylowany (spirytusowy) albo jabłkowy z etykietą 5% albo 6%, nie 10%, bez samodzielnego rozcieńczania; źródła NCHFP (ACI-016, 018) i Penn State Extension (ACI-209, 210, szczebel 3). W kartach bell-pepper-v01, cucumber-v01, beetroot-v06.
- „JarAtlas recommends smaller jars” ujednolicone w 5 kartach p1–p2.
- Partia 4 en+pl (6 kart): beetroot-v06 (buraczki w occie), apricot-v08 (morele), peach-nectarine-v07 (dżem brzoskwiniowy, tylko żółte brzoskwinie, bez nektarynek); twierdzenia ACI-209–227, SLO-136–144; slugi en/pl. SLO-048 z cytatem o zdrowych jabłkach.
- Weryfikacja zastępcza D-027: 89 + 10 POPARTE, 6 CZĘŚCIOWO poprawione, 0 NIEPOPARTE/SPRZECZNE; przegląd zastępczy 47 twierdzeń krytycznych. Raport: `docs/tresci/E3-karty-p4-2026-11-02.md`.
- Kontrole: `npm test` 85/85 (niezmienniki pl–en dla 15 par kart: 0 problemów), `check:granice`, `check:catalog`, `check:tresci`, `build` — kod 0. Karty `publication: ukryta`.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p4`)
Ocet 5%/6%, nie 10%; zakres partii 4; dżem tylko z brzoskwiń o żółtym miąższu i bez nektarynek; slugi (burak, morela).

## Otwarte
Katalog (ścieżka wrażliwa, przegląd D-043): `apricot-v08` `acidBasis` „acidified” przy przepisie bez zakwaszenia, nektarynki w `peach-nectarine-v06/v07`, „lekki syrop” w v06. Morele pH do 4,8 (ACI-135) — ekspert (D-027 d). Cukry żelujące 2:1/3:1 (źródło). Teksty UI `site/teksty/{en,pl}.json` i tekst D-027 (c) (rola 04).

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, P2).

## Następny krok
Kolejka koordynatora: poprawki katalogu (osobna zmiana ścieżki wrażliwej z przeglądem D-043) albo partia 5 en/pl. Przekład: po zgodzie właściciela (rola 09).
