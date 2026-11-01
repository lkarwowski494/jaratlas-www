# Parametry konfiguracyjne strony (jedna lista)

Stan: 2026-11-01. Kod: `site/konfiguracja.mjs` jest jedynym miejscem liczb i list; reszta kodu i testy je importują (test K1). Liczby dziedzinowe (czasy, ciśnienia, pH) strona tylko wyświetla z treści kart; ich źródłem jest rejestr roli 06 (`docs/tresci/parametry.json`, `docs/tresci/konfiguracja.json`), nie ten moduł.

| Nazwa | Jednostka | Wartość | Źródło albo decyzja |
|---|---|---|---|
| `JEZYKI` | kody BCP 47 | 35 kodów | decyzja `2026-11-01-sloik-atlas-domena-jezyki` (przekazanie Słoika §4) |
| `FALA_1` | kody BCP 47 | en, fr, es, de, it, pl | przekazanie Słoika §4 |
| `PISMA_NIELACINSKIE` | kody BCP 47 | 8 kodów | ADR 0002 |
| `DOMENA` | adres URL bez końcowego `/` | `https://jaratlas.com`, nadpisanie zmienną `JARATLAS_DOMENA` | domena kupiona 2026-11-01 (Porkbun, ważna do 2027-11-01; RDAP Verisign), tablica `2026-11-01-jaratlas-przeniesienie-domena` |
| `LIMIT_ADRESOW_MAPY` | adresy na plik mapy | 50 000 | Google, „Build and submit a sitemap”: „50MB (uncompressed) or 50,000 URLs” (odczyt 2026-11-01, rejestr E0) |
| limit 50 MB pliku mapy | MB | nieegzekwowany | rachunek: 50 000 × ok. 100 B na wpis ≈ 5 MB < 50 MB, więc limit adresów zadziała pierwszy (teoretyczny) |
| `ZNACZNIKI_ZASLEPEK` | wzorce tekstu | `[PRZYKŁAD]`, `[DO USTALENIA]`, `TODO`, `lorem ipsum` | konwencje projektu (R2) |
| `katalogJezyka` | funkcja | małe litery (`/pt-br/`, `/zh-hant/`) | ADR 0002 |

## Dane strony (pliki, nie liczby)

| Plik | Właściciel | Uwagi |
|---|---|---|
| `site/slugi/{lang}.json` | 06 (treść), 09 (lokalizacja) | ADR 0002; format sprawdza `sprawdzSlugi` |
| `site/teksty/{lang}.json` | 04 | teksty interfejsu, w tym `uwagaBezpieczenstwa` (D-027 c) |
| `site/tresci/{lang}/{warianty,rodziny}/{id}.json` | 06 | treść kart |
| `site/jezyki.json` | 09 | nazwy języków na stronie wyboru |
| `site/adresy.json` | krok wdrożenia | rejestr adresów opublikowanych i przekierowań (R4) |

## Do ustalenia (nazwa, jednostka, kto decyduje)

| Nazwa | Jednostka | Kto |
|---|---|---|
| tekst uwagi D-027 (c) w każdym języku | tekst | właściciel (treść), 04 (miejsce) |
| `_prefiks` stron rodzin w każdym języku | slug | 06/09, domyślnie ADR 0002 |
| format pliku przekierowań | format hostingu | ADR 0007 (właściciel) |
| cele budżetów wydajności | ms, KB | właściciel po pomiarze bazowym (README §7) |
| miejsca reklam i analityka | lista | 02/04 i właściciel; potem `prywatnosc.md` |
| `LIMIT_WYDATKOW_TLUMACZEN_USD` | USD | właściciel (decyzja `2026-11-01-jaratlas-tlumaczenia-api`: kwota, termin, twardy limit) |
| `KLUCZ_API_ANTHROPIC` | sekret | tylko w sekretach środowiska, nigdy w repo (zasada 14) |
| wersja formatu katalogu | semver | 06 (R9) |
