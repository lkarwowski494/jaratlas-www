# JarAtlas.com
Statyczna strona-katalog domowego przetwórstwa (wekowanie, kiszenie, mrożenie) w 35 językach, z bramką bezpieczeństwa treści. Stan i następny krok: `docs/sztafeta.md`, `docs/STAN-SESJI.md`.

## Stan projektu (aktualizacja: 2026-11-02 ~14:45 UTC, WSTRZYMANE — wznowienie: `docs/WZNOWIENIE.md`)
- Etap: WSTRZYMANE 2026-11-02 (tablica `2026-11-02-jaratlas-wstrzymanie-prac`); plan wznowienia: `docs/WZNOWIENIE.md`. Katalog 1.0.20 (1432 warianty: ok-zrodlo 322, ryzyko-wysokie 200, nie-publikowac 185, do-researchu 725; wszystkie ukryte); karty en 692 (374 karty-ostrzeżenia), pl 211; rejestr 2089 ID (do B33); testy 360; main = 4e3dcaa, 0 opublikowanych stron, dane użytkowników: brak
- Sklep: nie dotyczy (strona WWW); hosting GitHub Pages (ADR 0007); domena jaratlas.com (Porkbun, odnowienie przed 2027-11-01)
- Przed pierwszą publikacją: przeniesienie do czystego repo: `docs/wydanie/10-przeniesienie-czyste-repo.md`, podgląd `node tools/przeniesienie.mjs [--zachowaj] [--testy]` (wzór: trening `docs/46-przeniesienie-1.0.md`)
- Polityka języków: szeroka, 35 (fala 1: en, fr, es, de, it, pl); pierwsza publikacja pl/en z pełnym katalogiem (wszystkie warianty z kartą pełną albo kartą-ostrzeżeniem), jeśli nie szkodzi indeksowaniu (tablica `2026-11-02-jaratlas-wydanie-pl-en`)
- Przegląd treści krytycznych: zastępczy (D-027); D-027 d: niezależny agent Claude (Opus, effort medium, świeży kontekst) zamiast eksperta, także szybkowar (tablica `2026-11-02-jaratlas-przeglad-agent-zamiast-eksperta`)
- Bramka opłacalności: tablica decyzji `2026-11-01-jaratlas-bramka-wynik` (rola 02)
- Standard marki, cel: `[DO USTALENIA]`

## Stos
Node 22, własny generator bez zależności npm (ADR 0001); decyzje w `docs/adr/`, architektura w `docs/architektura/README.md`.

## Komendy
- testy: `npm test` · granice modułów: `npm run check:granice`
- katalog: `npm run check:catalog` · treści: `npm run check:tresci`
- build: `npm run build` → `dist/` (kod 1 przy każdym błędzie kontroli)
- wszystko: `npm run check` (testy, granice, katalog, treści, build, rozmiar `dist/`: UWAGA od 800 MB, błąd od 1 GB; 07-jakosc-008)
- CI: `.github/workflows/kontrole.yml` woła `npm run check` przy każdym pushu (jedno źródło listy: `package.json`)

## Dokumenty (źródło prawdy, rola)
- decyzje właściciela: tablica decyzji (artifact `2m3gT4XfaeuMfT5EGqeT1i`, kolekcja `decisions`)
- katalog `catalog/`, rejestr treści `docs/tresci/` (06)
- ADR `docs/adr/`, architektura `docs/architektura/` (05)

## Ścieżki wrażliwe (przegląd zmian w świeżym kontekście przed oddaniem, D-043)
- `site/plan.mjs` (bramka publikacji), `site/kontrole.mjs` (zaślepki, ostrzeżenia, 301), `site/szablony.mjs` (ostrzeżenia, Recipe, reklamy)
- `site/adresy.json` (rejestr adresów i przekierowań), `tools/buduj-strone.mjs` (zapis `dist/`)
- `catalog/catalog-seed.json` (statusy bezpieczeństwa i publikacja), `.github/workflows/`

## Zasady
- Repo publiczne: żadnych sekretów ani `.env` (klucz API tłumaczeń tylko w sekretach środowiska); przed commitem `git diff --cached`.
- Treść „ukryta” znaczy „nie na stronie”, nie „tajna”: repo publiczne czyta każdy.
- Reklamy nigdy przy ostrzeżeniach; każda karta z oceną bezpieczeństwa ma uwagę D-027 (c).
- Testy przed kodem; wygląd i teksty interfejsu tylko z systemu roli 04.
- Push na `main`, publikacja, domena: tylko za zgodą właściciela.

# Compact instructions
Zachowaj rolę i tryb, ID zadań, wyniki testów, zmienione pliki i otwarte decyzje.
