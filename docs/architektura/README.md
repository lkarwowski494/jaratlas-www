# Architektura strony JarAtlas.com

Stan: 2026-11-01, rola 05-architekt (build), E0 i E1 zakończone, szkielet kodu według ADR 0006.

1. **Zakres:** statyczna strona z `catalog/catalog-seed.json`; bez kont, formularzy i danych użytkownika. Raport E0: `E0-rozpoznanie-2026-11-01.md` (środowisko, przepływ → technika, skala, rejestr ograniczeń Google z cytatami).
2. **Moduły** (`site/`, bez zależności npm; zależności do środka):
   - `konfiguracja.mjs` — języki, domena, limit mapy (jedyne miejsce liczb);
   - `plan.mjs` — bramka publikacji, slugi, alternatywy hreflang (czyste funkcje);
   - `szablony.mjs`, `mapa.mjs` — HTML i `sitemap.xml`;
   - `generuj.mjs` — składanie plików; `build.mjs` — jedyne I/O (`npm run build` → `dist/`).
   - Dane strony: `site/slugi/{lang}.json`, `site/teksty/{lang}.json` (teksty interfejsu, rola 04), `site/tresci/{lang}/{warianty,rodziny}/{id}.json` (treść kart: `tytul`, `wstep`, `sekcje[]`, `ostrzezenia[{claim, tekst}]`, `obraz`).
3. **Kontrole:** `tests/site.test.mjs` (bramka, mapa, hreflang, kanoniczne, ostrzeżenia bez Recipe i reklam, D-027 c, slugi, escapowanie, podział mapy, prawdziwy katalog = 0 stron). Sprawdzone mutacjami bramki, produktu, x-default i Recipe.
4. **Otwarte:** hosting (ADR 0007), domena, tekst uwagi D-027 (c), adres stron rodzin (domyślnie `/{lang}/{prefiks}/{slug}/`), reklamy i analityka (inwentarz prywatności po decyzji), tłumaczenia przez Claude API (skrypt wsadowy, limit wydatków), obrazy do `Recipe`.

## Indeks ADR
| ADR | Temat | Status |
|---|---|---|
| [0001](../adr/0001-generator-wlasny-node.md) | własny generator Node | przyjęta |
| [0002](../adr/0002-adresy-i-slugi.md) | adresy i slugi w języku odbiorcy | przyjęta |
| [0003](../adr/0003-bramka-publikacji-i-mapa-strony.md) | bramka publikacji i mapa strony | przyjęta |
| [0004](../adr/0004-hreflang-kanoniczne.md) | hreflang i kanoniczne | przyjęta |
| [0005](../adr/0005-karty-ostrzezenia-reklamy-filtry.md) | ostrzeżenia, reklamy, filtry | przyjęta |
| [0006](../adr/0006-wyjatek-roli-kod-szkieletu.md) | wyjątek: kod pisze 05 | przyjęta |
| [0007](../adr/0007-hosting-statyczny.md) | hosting | proponowana |
