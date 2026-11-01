# Stan pracy JarAtlas — bramka 02-monetyzacja (audit)

Aktualizacja: 2026-11-01 (sesja session_01T66VBwmW1joo9op6vnZiYC)

## Gdzie jesteśmy
- Krok 1 (rola z biblioteki prompts): **ZABLOKOWANY**.
  - `git clone https://github.com/lkarwowski494/prompts` → brak dostępu (repo prywatne, sesja ma tylko jaratlas-www).
  - `add_repo lkarwowski494/prompts` → odrzucone przez klasyfikator auto mode.
  - Uruchomienie `node prompts/tools/assemble.mjs` → odrzucone jako kod z zewnątrz (trzeba przeczytać skrypt przed uruchomieniem albo zgoda właściciela).
- Sieć sprawdzona 2026-11-01 (UA Apps4Brew-research/1.0): api.nbp.pl 200, wikimedia.org 301, support.google.com/adsense 200, itunes.apple.com 200.
- Kroki 2–4 (dowody, oplacalnosc-wlasna.json + oplacalnosc.mjs, dokumenty i portfel): nie zaczęte.

## Co odblokuje
Jedno z: (a) dodać `lkarwowski494/prompts` do źródeł sesji (przy tworzeniu nowej sesji albo zgoda na add_repo); (b) wkleić złożony prompt 02-monetyzacja (audit, moduł oplacalnosc).

## Ustalenia właściciela (bez zmian)
Zakres tylko strona JarAtlas; warianty (a) reklamy za zgodą RODO/CMP, (b) tylko autopromocja, osobne JSON (D-028); próg 500 USD netto/rok (D-024); przegląd treści krytycznych zastępczy (wyjątek, tablica 2026-11-01-jaratlas-bramka-zakres). Po bramce: 06-tresci build (zadanie B, katalog v1).
