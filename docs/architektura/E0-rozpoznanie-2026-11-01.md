# E0: rozpoznanie architektury strony JarAtlas.com (05-architekt · build · 2026-11-01)

Prompt roli: `prompts` @ eb3b4e7, `node tools/assemble.mjs 05-architekt --tryb build` (rola nazywa się `05-architekt`, nie `05-architektura`).

## 1. Środowisko (sprawdzone komendą)
| Co | Wynik |
|---|---|
| System, Node | Linux 6.18, Node v22.23.4 (`node:test` działa: `npm test` 20/20) |
| Git, gałęzie | jedna zdalna gałąź `claude/happy-brown-yncplj` (brak `main` w `git ls-remote --heads`) |
| GitHub | push na gałąź roboczą działa; repo `jaratlas-www` **publiczne** (list_repos) |
| Przeglądarka | Playwright 1.63.0 + Chromium (zrzuty i testy SEO w przeglądarce możliwe) |
| Sieć | developers.google.com i raw.githubusercontent.com dostępne |
| CI | brak workflowów w repo (`.github/` nie istnieje), więc brak czerwonego CI |

## 2. Wejście: założenia z poprzednich ról (hipotezy)
| Wejście | Stan | Jak pracuję |
|---|---|---|
| Kontrakt zakresu (rola 03) | **brak** `docs/scope-contract.md` | założenia jawne: zakres z przekazania Słoika §1, §4, §6, §7.1 i tablicy decyzji |
| Projekt (rola 04) | **brak** `docs/design/` | szablony = semantyczny HTML bez systemu wizualnego (zasada 15); wygląd później z rolą 04 |
| `docs/decyzje.md`, `CLAUDE.md` | brak w repo | decyzje na tablicy (artefakt 2m3gT4XfaeuMfT5EGqeT1i) + `docs/STAN-SESJI.md` |
| Katalog | `catalog/catalog-seed.json` 1.0.2 | źródło prawdy dla stron |

## 3. Przepływ → technika
| Przepływ (przekazanie §6–7) | Dane | Technika | Uwagi |
|---|---|---|---|
| Wejście z Google na kartę wariantu `/{lang}/{product}/{variant}/` | wariant + produkt + rodzina + rejestr twierdzeń | statyczny HTML z generatora | tylko `publication: opublikowana` |
| Strona produktu `/{lang}/{product}/` z tabelą wariantów | produkt + jego opublikowane warianty | jw. | **powstaje tylko, gdy ma ≥1 opublikowany wariant** (inaczej strona-zaślepka, §6.7) |
| Strona rodziny procesu (adres `[DO DECYZJI]`, np. `/{lang}/proces/{family}/`) | rodzina, progi, zakazy | jw. | rodziny nie mają dziś nazw ani treści w katalogu |
| Wybór języka `/` (x-default) | lista języków z opublikowaną treścią | jw. | bez automatycznego przekierowania (§6.3) (nieaktualne od 2026-11-02: `/` → `/en/`, x-default = wersja en; ADR 0002, 0004, zmiana 2026-11-02) |
| Filtry (smak, czas, sezon, sprzęt) | `variants[].filters` | JS po stronie klienta na fragmencie `#…` | dziś wszystkie `filters` = `null` |
| Mapa strony | lista opublikowanych stron × języki | `sitemap.xml` (+ indeks przy > 50 000) | |
| Ostrzeżenia bezpieczeństwa | `ryzyko-wysokie`, `nie-publikowac`, `requiredWarnings` | szablon `cardType: warning`, bez `Recipe`, **bez reklam** | uwaga D-027 (c) na każdej karcie z oceną bezpieczeństwa |

Offline, praca w tle, uprawnienia, dane użytkownika: **sprawdzone, brak** (strona statyczna, bez kont i formularzy). Prywatność: zależy od reklam i analityki (decyzja właściciela później; dziś 0 skryptów stron trzecich).

## 4. Skala danych
- Dziś: 1432 warianty, 105 produktów, 15 rodzin; **0 opublikowanych** (żaden wariant nie ma `content`), więc build produkcyjny da dziś tylko stronę wyboru języka. Szkielet testujemy na danych `[PRZYKŁAD]`.
- Górna granica: (1432 + 105 + 15) × 35 języków ≈ 54 tys. stron; `sitemap.xml` wymaga wtedy podziału (limit 50 000, niżej). Fala 1: 6 języków ≈ 9,3 tys. stron najwyżej. Rachunek z danych katalogu, nie pomiar.

## 5. Rejestr ograniczeń platformy (odczyt 2026-11-01, `curl` + `grep` na surowym HTML)
| Ograniczenie | Cytat | Adres |
|---|---|---|
| Limit mapy strony | „limit a single sitemap to 50MB (uncompressed) or 50,000 URLs … you must break your sitemap into multiple sitemaps” | developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap |
| hreflang dwukierunkowy | „Each language version must list itself as well as all other language versions. Alternate URLs must be fully-qualified”; „If two pages don't both point to each other, the tags will be ignored” | …/specialty/international/localized-versions |
| Fale językowe | „you can omit some languages on some pages” | jw. |
| Język w adresie | „Use words in your audience's language in the URL (and, if applicable, transliterated words). For example, if your audience is searching in German, use German words in the URL” | …/crawling-indexing/url-structure |
| Filtry na fragmencie | „If your filtering mechanism is based on URL fragments, it will have no impact on crawling (positive or negative).” | …/crawling-indexing/crawling-managing-faceted-navigation |
| x-default, przekierowania, Recipe, scaled content, doorway | cytaty w przekazaniu Słoika §6 (inna sesja, 01.11) | **z odczytu innej sesji, niesprawdzone dosłownie dziś** |
| Hosting statyczny (limity, przekierowania 301, nagłówki) | `[DO USTALENIA]` w E1, odczyt dokumentacji wybranych hostingów w dniu decyzji | |

## 6. Stosowalność modułów roli
- `dane-lokalne-sqlite`: **nie** (brak danych użytkownika, brak bazy na urządzeniu).
- `tlo-i-sensory-ios`: **nie** (strona WWW).
- `pakiety-tresci`: **częściowo, później** (katalog wersjonowany osobno od kodu; dotyczy aplikacji JAR, nie strony: strona czyta katalog w czasie budowania).
- Kod z innych aplikacji właściciela: nie wskazano repo, pominięte.

## 7. ADR do podjęcia (E1)
1. Generator: własny skrypt Node bez zależności · Eleventy · Astro.
2. Adresy i slugi: identyfikator jako slug we wszystkich językach · slug w języku odbiorcy (`slug.{lang}`) z identyfikatorem stałym w danych.
3. Bramka publikacji: kiedy powstaje strona produktu i rodziny (≥1 opublikowany wariant; własna treść rodziny).
4. hreflang i kanoniczne adresy: tylko języki, w których strona istnieje; `x-default` → `/`. *(Nieaktualne od 2026-11-02: `x-default` → wersja en, `/` → `/en/`; ADR 0004, zmiana 2026-11-02.)*
5. Mapa strony: jedna albo indeks map, tylko opublikowane; `lastmod` z daty treści.
6. Filtry: fragment `#` + JS bez wpływu na indeks.
7. Szablon ostrzeżeń: `cardType: warning`, brak `Recipe`, brak miejsc reklamowych, uwaga D-027 (c).
8. Hosting statyczny (decyzja właściciela; koszt 0 zł; obsługa 301 dla wycofanych wariantów `retired.replacedBy`).
9. Tłumaczenia przez Claude API (decyzja `2026-11-01-jaratlas-tlumaczenia-api`): format plików treści per język, skrypt wsadowy i kontrola jakości; kwota i limit `[DO USTALENIA]`.

## 8. Rozbieżność z kontraktem roli (do decyzji)
Rola 05 nie pisze kodu aplikacji (kod: rola 08), a przekazanie prosi o szkielet strony z testami. Opcje w pytaniu do właściciela.

## 9. Plan i czas (agent / oczekiwanie / właściciel)
- E1 ADR 1–9 z małym prototypem generatora w scratchpadzie: ok. 1–1,5 h agenta; właściciel: 4–5 decyzji.
- E2–E4 (moduły, konfiguracja, testy SEO, przekazanie): ok. 1–2 h agenta.
- Szkielet kodu z testami (rola 08 albo wyjątek): ok. 2–3 h agenta.
- Oczekiwanie: brak buildów w chmurze. Właściciel: domena, hosting, decyzje E1.
