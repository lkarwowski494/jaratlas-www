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

## Zmiana 2026-11-02 (rola 10 za 05, decyzja właściciela `2026-11-02-jaratlas-en-baza`)
- Nowy adres: `/{lang}/` = strona języka (katalog `katalogJezyka`, np. `/en/`, `/pt-br/`); powstaje tylko dla języka z ≥ 1 stroną encji w planie (bramka ADR 0003). Powód: `/` i okruszki stron produktu linkowały do `/{lang}/`, którego plan nie tworzył (404).
- `/` kieruje na `/en/`: `rel=canonical` → `https://jaratlas.com/en/`, `<meta http-equiv="refresh" content="0; url=/en/">` i widoczny odnośnik (bez JS), pod spodem lista istniejących `/{lang}/`. Cel stały, nie według języka przeglądarki (przekazanie §6.3 bez zmian). `/` zostaje stroną z planu, nie wpisem 301 (`site/adresy.json` bez zmian; GitHub Pages nie ma serwerowego 301, ADR 0007).
- Dopóki `/en/` nie ma w planie, `/` jest stroną wyboru języka bez refresh, kanoniczny = `/` (decyzja Claude, do weta). Testy: `tests/site.test.mjs` „„/”: …”.
