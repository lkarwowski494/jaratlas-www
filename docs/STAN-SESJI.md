# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBxEZhBXa2ebYMsWBLa). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-karty-p5.md`).

## Rola i etap
06-tresci · build · partia 6 kart fali 1 (en, pl) + P3-4 walidatora · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Partia 6 en+pl (6 kart): gooseberry-v09 (kompot z agrestu = NCHFP Berries-Whole, na surowo, syrop bardzo lekki), raspberry-blackberry-v14 (kompot jeżynowy, jw.; hot pack dla jeżyn niedopuszczony), zucchini-v05 (słodko-kwaśne pikle z cukinii = NCHFP Bread-and-Butter Zucchini, ocet według ACI-211); twierdzenia ACI-244–258; slugi en/pl (nowe produkty gooseberry/agrest, zucchini/cukinia). Łącznie 21 wariantów, 42 karty.
- Weryfikacja zastępcza D-027: przebieg 1 75 POPARTE, 1 CZĘŚCIOWO (SZY-026, poprawione), 0 NIEPOPARTE/SPRZECZNE; przebieg 2 3 POPARTE, SZY-026 przeformułowane. Przegląd zastępczy 27 twierdzeń krytycznych. Raport: `docs/tresci/E3-karty-p6-2026-11-02.md`.
- Walidator P3-4 (zdublowany komunikat low-acid/not-applicable przy produkcie granicznym): zamknięte; przegląd D-043 bez P1/P2 (6480 kombinacji przed/po: 0 przypadków bez błędu), P3-1 poprawione.
- Kontrole: `npm test` 89/89, `check:granice`, `check:catalog`, `check:tresci` (0/0), `build` — kod 0. Karty `publication: ukryta`.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p6`)
Zakres partii 6; agrest tylko na surowo (raw pack); cukinia bez pasteryzacji w niskiej temperaturze; SZY-026 bez „USDA wycofało”; walidator: jeden komunikat zamiast dwóch.

## Otwarte
Morele pH do 4,8 (E3-002) — ekspert (D-027 d). Cukry żelujące 2:1/3:1 (źródło). tomato-v08/v09/v10: opcjonalnie „disease-free… firm fruit” i granica pH 4,6. Konwencja `sha12` (strony NCHFP dynamiczne). Teksty UI `site/teksty/{en,pl}.json` i tekst D-027 (c) (rola 04). Opcjonalne z E3 p6: źródło Berries-Whole do ACI-067, powiązanie ACI-244 z ACI-068/SLO-055, „Measure or weigh amounts carefully” i sól niejodowana w zucchini-v05, odsyłacz do obsługi kąpieli wodnej (04/05). Strona Clemson (SZY-026) — HTTP 403, cytat do ręcznego potwierdzenia albo usunięcia.

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, P2). Walidator (obserwacja D-043 p6): produkt niskokwasowy w kąpieli wodnej z acidBasis sugar-acid/fermented daje 0 błędów (dziś 0 takich wariantów; teoretyczne).

## Następny krok
Kolejka: 268 wariantów ok-zrodlo bez kart (249 ze źródłem szczebla 1–3 z cytatem, 19 bez cytatu; w kąpieli wodnej 59, z cytatem 40). Partia 7 w nowej sesji według planu koordynatora. Przekład: po zgodzie właściciela (rola 09).
