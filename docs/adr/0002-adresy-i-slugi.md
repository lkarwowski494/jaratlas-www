---
status: przyjęta (slugi: właściciel); format slugów i plik: proponowana (techniczna)
data: 2026-11-01
decyduje: właściciel (slugi w języku odbiorcy); architekt (format, miejsce danych)
---
# 0002. Adresy w podkatalogach języków ze slugami w języku odbiorcy
## Kontekst i problem
Przekazanie Słoika §6.1 i §6.4: osobny adres na język w `/{lang}/`, karta `/{lang}/{product}/{variant}/`, produkt `/{lang}/{product}/`, rodziny pod własnymi adresami. Identyfikatory są stałe; slugi wybrał właściciel w języku odbiorcy.
## Czynniki decyzji
- Google, url-structure (odczyt 2026-11-01): „Use words in your audience's language in the URL (and, if applicable, transliterated words)”.
- Adres jest trwały; zmiana slugu wymaga przekierowania 301 (ADR hostingu).
- Katalog jest wspólny dla strony i aplikacji JAR; slugi dotyczą tylko strony.
## Rozważane opcje
- Slugi w osobnych plikach strony `site/slugi/{lang}.json` · slugi jako pole `slug.{lang}` w katalogu
## Decyzja
- Adresy: `/{lang}/{slugProduktu}/`, `/{lang}/{slugProduktu}/{slugWariantu}/`, `/{lang}/{prefiksRodzin}/{slugRodziny}/`, `/` = wybór języka (x-default). Wszystkie kończą się `/`.
- Slugi w `site/slugi/{lang}.json`: `{ "rodziny": {"_prefiks": "…", id: slug}, "produkty": {id: slug}, "warianty": {id: slug} }`. Brak slugu = strona w tym języku nie powstaje (test).
- Format: języki pisma łacińskiego `^[a-z0-9]+(-[a-z0-9]+)*$` (diakrytyki zdjęte przy tworzeniu, np. „ogórek” → `ogorek`); pisma niełacińskie (bg, el, ja, ko, ru, sr, uk, zh-Hant) słowa w swoim piśmie, małe litery, bez spacji i `/`, kodowane UTF-8.
- Unikalność: slug produktu unikalny w języku i różny od `_prefiks`; slug wariantu unikalny w produkcie.
- Slug wydanej (opublikowanej) strony się nie zmienia; zmiana tylko z przekierowaniem.
### Konsekwencje
- Dobre: zgodne z zaleceniem Google; katalog aplikacji bez pól strony. · Złe: slugi trzeba przetłumaczyć (wsadowo przez Claude API, decyzja `2026-11-01-jaratlas-tlumaczenia-api`) i pilnować kolizji. · Zależy od: ADR hostingu (przekierowania).
### Potwierdzenie
Test `tests/site-slugi.test.mjs`: format, unikalność, kolizja z prefiksem, brak slugu → brak strony.
