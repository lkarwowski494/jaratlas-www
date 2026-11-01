# Ścieżki ryzyka strony (E2) i kontrole automatyczne dla roli 07 (E3)

Stan: 2026-11-01, rola 05-architekt. Strona nie ma danych użytkownika, więc ścieżki utraty danych zastępują ścieżki szkody dla czytelnika i dla wyszukiwarki. Realność według zasady 5: realny / brzegowy / teoretyczny. Nazwy testów: `tests/site.test.mjs`, `tests/build.test.mjs`.

## Ścieżki ryzyka → zabezpieczenie → test

| ID | Ścieżka | Realność | Zabezpieczenie | Test (dowód: mutacja wykryta) |
|---|---|---|---|---|
| R1 | Wyciek treści ukrytej albo niezweryfikowanej na stronę lub do mapy | realny po pierwszej publikacji; dziś 0 stron | bramka w jednym miejscu (`site/plan.mjs` `wariantPublikowalny`) jako lista dozwolonych statusów: nieznany albo brakujący `safetyStatus` = brak strony; mapa tylko z planu; produkt tylko z ≥1 publikowalnym wariantem | „bramka: tylko publikowalne…”, „mapa strony: tylko strony z planu…”, „prawdziwy katalog: dziś 0 stron…”, „R1 bramka zamknięta domyślnie…” (czerwony przed poprawką 2026-11-01) |
| R1b | Treść „ukryta” czytelna w publicznym repo GitHub (nie na stronie) | brzegowy | `ukryta` znaczy „nie na stronie”, nie „tajna”; wyjątek nazwany (decyzja 2026-11-01); później czyste repo i archiwizacja obecnego (wzorzec Trening docs/46) | brak testu do czasu przeniesienia |
| R2 | Zaślepka na stronie (`[PRZYKŁAD]`, `[DO USTALENIA]`, `TODO`, `lorem ipsum`) w treści albo w tekstach interfejsu | realny (dziś tekst uwagi D-027 c to `[DO USTALENIA]`) | `site/kontrole.mjs` `kontrolaZaslepek`, znaczniki w `ZNACZNIKI_ZASLEPEK`; wyłączenie tylko parametrem testów `dozwolZaslepki`, którego `tools/buduj-strone.mjs` nie ustawia | „R2 zaślepka w treści…”, „R2 tryb testowy…” (mutacja `if (false)` wykryta) |
| R3 | Zła publikacja ostrzeżeń: brak wymaganego ostrzeżenia, karta-ostrzeżenie bez ostrzeżenia albo z pustym tekstem, pusta uwaga D-027 (c), Recipe albo reklama przy ostrzeżeniu | realny (bezpieczeństwo żywności) | `planStron` (wymagane `requiredWarnings`), `kontrolaOstrzezen`, szablon: `cardType: warning` bez Recipe i bez miejsc reklam, uwaga D-027 (c) na każdej stronie encji | „brak wymaganego ostrzeżenia…”, „R3 karta-ostrzeżenie bez ostrzeżenia…”, „R3 pusta uwaga D-027 (c)…”, „karta-ostrzeżenie: bez Recipe i bez miejsc reklam…”, „cardType warning nigdy nie dostaje Recipe…” |
| R4 | Zmiana slugu albo wycofanie strony bez 301 (utrata pozycji, martwe linki) | realny po pierwszej publikacji | rejestr `site/adresy.json` (`opublikowane`, `przekierowania`); `kontrolaPrzekierowan`: adres z rejestru musi mieć stronę albo 301 do strony z planu; przekierowanie z żywej strony = błąd; `dist/przekierowania.json` neutralny wobec hostingu | „R4 opublikowany adres zniknął…” (mutacja wykryta), `build.test` „błąd kontroli…” |
| R4b | Rejestr `adresy.json` nie dopisany po wdrożeniu, więc R4 nic nie chroni | realny | krok wdrożenia dopisuje adresy z `dist/sitemap.xml` `[DO USTALENIA]` razem z ADR 0007 | brak do czasu ADR 0007 (zadanie dla 07/08) |
| R5 | Skrypt, piksel albo zasób strony trzeciej (prywatność, zgoda na cookies) | realny przy reklamach i analityce | szablony bez zasobów zewnętrznych; reklamy i analityka tylko po decyzji i aktualizacji `prywatnosc.md` | „R5 prywatność…” (mutacja: skrypt z CDN wykryty) |
| R6 | Przerwany albo nieudany build zostawia częściowy `dist/`, który trafia na hosting | brzegowy | `tools/buduj-strone.mjs`: błąd = kod 1 przed zapisem; zapis do `dist.tmp` i podmiana | `build.test` „błąd kontroli: kod 1, poprzedni dist/ nietknięty…” |
| R7 | Ta sama liczba albo adres domeny w dwóch miejscach | brzegowy (był: `generuj.mjs` czytał `JARATLAS_DOMENA` sam) | `site/konfiguracja.mjs` jedynym miejscem; poprawione 2026-11-01 | „K1 jedno miejsce konfiguracji…” (czerwony przed poprawką) |
| R8 | Kolizja adresów, zły hreflang, zły slug | realny | `sprawdzSlugi`, kolizje w `planStron`, alternatywy z jednej encji | testy „slugi…”, „hreflang…”, „brak slugu albo treści…” |
| R9 | Zmiana struktury katalogu (np. nazwa pola) | brzegowy | bramka zamknięta domyślnie (R1): brak pola = brak strony; katalog bez wersji formatu | „R1 bramka zamknięta domyślnie…”; wersja formatu katalogu `[DO USTALENIA]` z rolą 06 |

## Lista kontroli automatycznych dla roli 07

Przegląd 07 w świeżym kontekście jest warunkiem scalenia (ADR 0006). Kontrole do utrzymania albo dopięcia:

1. `npm test` (43 testy: katalog, strona, build). Każdy nowy szablon, typ strony albo pole treści dostaje test R1–R3 z mutacją.
2. `npm run check:granice` (`docs/architektura/narzedzia/granice.mjs site .`): `site/` to wyłącznie czyste moduły; I/O tylko w `tools/buduj-strone.mjs`. Dziś: `OK: 7 plików, bez naruszeń`.
3. `npm run check:catalog` i `npm run check:tresci` przed każdym buildem publikacyjnym.
4. **Do dopięcia przez 07:**
   - kolejność na karcie: sekcja ostrzeżeń przed wstępem i krokami (dziś zapewnia ją szablon, bez testu);
   - po decyzji o reklamach: brak `data-ad-slot` na karcie-ostrzeżeniu i w tabeli wariantów strony produktu z wariantem-ostrzeżeniem (ADR 0005);
   - po ADR 0007: test pliku przekierowań w formacie hostingu i `curl -I` na wdrożeniu (kod 301), dopisywanie `site/adresy.json` po wdrożeniu (R4b);
   - walidacja schematu plików treści `site/tresci/{lang}/warianty/*.json` (pola `tytul`, `wstep`, `sekcje[]`, `ostrzezenia[{claim,tekst}]`, `obraz`) z odrzuceniem nieznanych pól;
   - Lighthouse na próbce (README §7) jako kontrola regresji, nie bramka (wynik symulowany, zmienny).
5. **CI:** repo nie ma `.github/`, więc kontrole działają tylko ręcznie (zasada 21). Decyzja 2026-11-01: `.github/workflows/kontrole.yml` (te same kontrole przy każdym pushu). Koszt 0: „Standard GitHub-hosted runners in public repositories” są darmowe (docs.github.com, „GitHub Actions billing”, odczyt 2026-11-01).
6. **Kroki właściciela (bez automatu):** po pierwszej publikacji sprawdzenie w Search Console (mapa przyjęta, brak stron ukrytych w indeksie); pomiar na prawdziwym telefonie (README §7).
