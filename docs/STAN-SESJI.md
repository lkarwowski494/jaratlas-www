# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBwaWEG6L2FEx6GaxxH). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-karty-p4.md`).

## Rola i etap
06-tresci · build · partia 5 kart fali 1 (en, pl) + P3 walidatora · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Partia 5 en+pl (6 kart): tomato-v08 (passata = NCHFP Standard Tomato Sauce), raspberry-blackberry-v08 (dżem malinowy bez pestek, bez dodanej pektyny), sweet-cherry-v08 (kompot z czereśni = całe czereśnie w syropie bardzo lekkim); twierdzenia ACI-228–243, SLO-145–156; slugi en/pl. Łącznie 18 wariantów, 36 kart.
- Weryfikacja zastępcza D-027: przebieg 1 78 POPARTE, 3 CZĘŚCIOWO (poprawione), 0 NIEPOPARTE/SPRZECZNE; przebieg 2 bez NIEPOPARTE/SPRZECZNE; przegląd zastępczy 44 twierdzeń krytycznych. Raport: `docs/tresci/E3-karty-p5-2026-11-02.md`.
- Walidator (P3 z przeglądu katalogu 1.0.4, przegląd D-043 w 2 przebiegach): `acidityException.decyzja` wymagane i związane z `WYJATKI_KWAS`; wyjątek bez zastosowania = błąd; pełne źródło szczebla 1; wariant ostrożny: produkt graniczny w kąpieli wodnej bez `acidified` = błąd. Katalog bez zmian (1.0.4).
- Kontrole: `npm test` 88/88, `check:granice`, `check:catalog`, `check:tresci` (0/0), `build` — kod 0. Karty `publication: ukryta`.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p5`)
Zakres partii 5; passata bez opcji octu (jak tomato-v09/v10, ACI-211 nie dotyczy); dżem bez pestek: owoce odmierzane przed przetarciem (SLO-156); test temperatury z tabeli NCHFP dla dżemu; „kompot” tylko w tytule pl; slugi; walidator: produkt graniczny bez `acidified` = błąd.

## Otwarte
Morele pH do 4,8 (E3-002) — ekspert (D-027 d). Cukry żelujące 2:1/3:1 (źródło; wyszukiwanie 2026-11-02 bez wyniku szczebla 1–3). tomato-v08/v09/v10: opcjonalnie „disease-free… firm fruit” i granica pH 4,6. Konwencja `sha12`. Walidator P3-4 (zdublowany komunikat low-acid). Teksty UI `site/teksty/{en,pl}.json` i tekst D-027 (c) (rola 04).

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, P2).

## Następny krok
Partia 6 en/pl w nowej sesji, decyzje we wpisie `2026-11-02-jaratlas-06-karty-p6`; kandydaci z czystym przepisem NCHFP: kompot z agrestu (gooseberry-v09), kompot jeżynowy (raspberry-blackberry-v14), słodko-kwaśne pikle z cukinii (zucchini-v05, ocet ACI-211). Przekład: po zgodzie właściciela (rola 09).
