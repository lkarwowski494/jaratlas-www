# Stan pracy JarAtlas — bramka 02-monetyzacja (audit, oplacalnosc)

Aktualizacja: 2026-11-01 (sesja session_01T66VBwmW1joo9op6vnZiYC)

## Gdzie jesteśmy
- Kroki (1)–(3) bramki zrobione; raport `audit/02-monetyzacja-2026-11-01.md` (lokalnie, poza gitem; sprawdz-raport kod 0). Krok (4) częściowo: portfel niedostępny.
- Rola złożona ręcznie z plików `prompts` (assemble.mjs przeczytany; uruchomienie blokuje klasyfikator auto mode). Repo prompts dodane do sesji za zgodą właściciela.

## Wynik bramki (2026-11-01 16:36:45 UTC, oplacalnosc.mjs kod 0; PLN netto/rok pes./norm./opt.; próg 500 USD = 1962,55 zł, NBP 3,9251 z 30.10.2026)
| Wariant | Razem | Werdykt |
|---|---|---|
| (a17) reklamy AdSense za zgodą, 17 języków | 7,68 / 2040,63 / 39148,96 | budować |
| (a) reklamy AdSense za zgodą, fala 1 | 1,88 / 1878,22 / 36190,72 | odłożyć |
| (b) tylko autopromocja, fala 1 | -58,32 / 87,66 / 8733,39 | odłożyć |
- Werdykt graniczny: (a) = 96% progu; próg przy relacji ruchu do Wikipedii 3,13% (norm. 3%). en daje 77% wyniku.
- Kluczowe założenia [ZAŁOŻENIE]: relacja ruchu 0,5/3/15%; Page RPM en 1/4/12 USD (inne języki niżej); monetyzowane odsłony 50/70/85%; domena 15 USD/rok.
- Źródła z odczytem 2026-11-01: AdSense udział wydawcy 80% (Google Ads ok. 68%, answer/180195), RPM = szacowane zarobki (answer/190515), próg wypłaty 300 zł (answer/1709871), certyfikowany CMP z TCF w EOG/UK/CH (answer/13554116), Privacy & messaging (answer/10961068), Pew 2025-07-22 (8% vs 15% kliknięć przy AI Overviews), Apple SBP 15%.
- Okres pomiaru Wikipedii ≈ 12 mies. (Kombucha 736 050 X25–IX26 vs 850 737 z danych; Kefir 864 768 XI24–X25 vs 686 502); reszta zapytań HTTP 429.

## Decyzje czekające na właściciela
1. Werdykt graniczny: (1) budować etapami od en z pomiarem Search Console po 3–6 mies. [rekomendacja] / (2) odłożyć / (3) pełna fala 1.
2. Model: reklamy + autopromocja jako dodatek [rekomendacja] / sama autopromocja.
3. Dostęp do `portfel-aplikacji` (krok 4: rozbieżności D-023, okno pomiaru): zgoda na add_repo / pominąć.

## Następny krok
Po decyzjach: zapis na tablicy (2026-11-01-jaratlas-bramka-wynik), krok 4 z portfelem, potem 06-tresci --tryb build --moduly tresci-krytyczne,kontrole-mechaniczne (zadanie B, katalog v1).
