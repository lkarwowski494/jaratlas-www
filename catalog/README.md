# Katalog JarAtlas (`catalog-seed.json`)

Jedno źródło danych dla strony JarAtlas.com i aplikacji JAR. Wersja 1.0.3 (2026-11-01; 1.0.2: decyzja `2026-11-01-jaratlas-e3-stop`; 1.0.3: `cardType: warning` przy ryzyko-wysokie i nie-publikowac, reguła walidatora), zadanie B (katalog v0 → v1). Decyzje: tablica decyzji, wpisy `2026-11-01-jaratlas-katalog-v1-model` i `2026-11-01-jaratlas-katalog-v1-e1`.

Katalog **nie zawiera treści kart**. Mówi, jakie warianty istnieją, w jakim procesie i jaki mają status bezpieczeństwa. Każdy status inny niż `do-researchu` wskazuje twierdzenia z `docs/tresci/rejestr.json`, a każde twierdzenie ma przeczytane źródło (adres, miejsce, cytat, data, szczebel).

## Model
| Obiekt | Pola kluczowe |
|---|---|
| `processFamilies[]` | `id`, `thresholds[]` (`wielkosc`, `wartosc`, `jednostka`, `granica`, `claim` albo `wartosc: null` + `pytanie`), `prohibitions[]`, `allowedMethods[]` |
| `products[]` | `id` (stały, z v0), `name.pl`, `category`, `acidity` (`acid` / `low-acid` / `borderline`), `acidityClaim` |
| `variants[]` | `id` (`<produkt>-vNN`, stały, nie używany ponownie), `productId`, `processFamilyId`, `preservationMethod`, `acidBasis`, `safetyStatus`, `claims[]`, `requiredWarnings[]`, `sources[]`, `filters`, `notes[]`, `scope`, `publication`, `retired` |

- `preservationMethod`: `refrigerator`, `freezer`, `water-bath`, `pressure-canning`, `low-temp-pasteurization`, `dry-storage`, `cool-storage`, `none` albo `null` (nieustalona; niedozwolone przy `ok-zrodlo`). Metoda z v0 sprzeczna z bezpieczeństwem jest w `preservationMethodV0`.
- `safetyStatus`: `ok-zrodlo` (przeczytany przetestowany przepis szczebla 1–3), `do-researchu`, `ryzyko-wysokie` (tylko karta-ostrzeżenie), `nie-publikowac` (źródło szczebla 1 odradza; karta najwyżej wyjaśnia dlaczego).
- `publication`: `ukryta` (domyślnie) albo `opublikowana`; opublikowana wymaga treści karty (`content`), `scope: in` i statusu innego niż `do-researchu`, a przy `ryzyko-wysokie`/`nie-publikowac` tylko `cardType: warning`. Mapa strony powstaje wyłącznie z opublikowanych.
- `requiredWarnings`: twierdzenia, które karta musi pokazać (np. dzikie grzyby: SUS-035).
- `retired`: wariant wycofany zostaje w danych (stabilne ID, przekierowania); `replacedBy` wskazuje następcę albo powód „poza zakresem”.

## Kontrole
```bash
npm test                 # testy walidatora (node --test)
npm run check:catalog    # walidacja katalogu względem rejestru
node tools/kontrole-tresci.mjs docs/tresci/rejestr.json <teksty> --przed-przegladem   # kontrola treści (moduł kontrole-mechaniczne)
```
Reguły walidatora: niskokwasowe w kąpieli wodnej = błąd; produkt graniczny w kąpieli wodnej wymaga `acidBasis: acidified`; `ok-zrodlo` bez źródła szczebla 1–3 = błąd; status ze stwierdzeniem bez potwierdzonego twierdzenia = błąd; publikacja bez treści = błąd; wycofany bez następcy lub powodu = błąd; `ryzyko-wysokie`/`nie-publikowac` bez `cardType: warning` albo `cardType` przy innym statusie = błąd (także przy wariancie ukrytym, żeby zmiana `publication` nie wypuściła zwykłej karty).

## Granice
- Czasy wekowania pochodzą z USDA/NCHFP i dotyczą słoików USA pint (ok. 0,47 l) i quart (ok. 0,95 l), nie 0,5 l i 1 l.
- Statusy są oceną stanu źródeł z 2026-11-01, nie poradą; termin ponownego odczytu w `wazne_do` twierdzeń.
- Odtworzenie: skrypty w `tools/katalog-v1/` (parsowanie v0, klastry, scalanie, E2, parametry, kontrola cytatów) na wynikach badaczy w `docs/tresci/badania/`; kopie tekstów źródeł nie są w repo (indeks: `docs/tresci/badania/zrodla-indeks.tsv`).
