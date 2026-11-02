# E1 mrożenie produktów zwierzęcych: propozycje twierdzeń do rejestru (tor C5, 2026-11-02)

- Rola 06-tresci, build, tryb bez właściciela. Gałąź `claude/jaratlas-c5-mrozenie-zwierzece` od `main` = e77f700. Zakres: tylko ten plik i `E1-mrozenie-zwierzece-2026-11-02.json`. Rejestr, karty i katalog bez zmian; wkleja tor A.
- Wejście: `catalog/catalog-seed.json` (10 wariantów `freezing` w kategoriach 9 i 10), `rejestr.json` (FRZ-054–060, SLO-251, 255, 258–261, 291, SUS-050, 059).
- Format JSON: pola rejestru plus `twierdzenie_en`, `grupa`, `warianty`, `uwaga`, `jednoZrodlo`. `status: robocze`, `przeglad: null`: przegląd zastępczy (D-027) po wklejeniu robi tor A.
- Cytaty: fragmenty „ | ” stoją w tekście kolejno, „ … ” to przerwa (jak B4-D7). Zapis po normalizacji: cudzysłowy proste, półpauza jako „-”. Numeracja SLO-400–443 (rezerwacja 400–449).

## 1. Wynik

| Grupa | Twierdzeń | ID |
|---|---|---|
| H: wspólne (rozmrażanie, ponowne mrożenie, czasy, awaria) | 11 | SLO-400–SLO-410 |
| A: mięso (wołowina, cielęcina, wieprzowina, dziczyzna, jagnięcina) | 7 | SLO-411–SLO-417 |
| B: drób | 5 | SLO-418–SLO-422 |
| C: boczek i mięsa peklowane | 2 | SLO-423–SLO-424 |
| D: ryby | 9 | SLO-425–SLO-433 |
| E: owoce morza (bez wariantu) | 2 | SLO-434–SLO-435 |
| F: jaja | 4 | SLO-436–SLO-439 |
| G: nabiał (masło, ser, mleko) | 4 | SLO-440–SLO-443 |

Razem 44 nowych twierdzeń. Krytycznych: 18. Ze źródłem szczebla 1: 40; tylko szczebel 3, jedno źródło: 3 (SLO-403, SLO-416, SLO-434).

Kontrole (dowód):
- cytaty: 44 twierdzeń, 77 cytatów, 118 fragmentów: dosłownie w tekście stron pobranych dziś curl (HTML → tekst, normalizacja spacji, cudzysłowów i półpauz; PDF FDA przez pdftotext -layout); każdy fragment rozdzielony „ | ” albo „ … ” sprawdzany osobno. Wynik: 0 braków.
- mutacja_cytatu: Zmiana „(1 to 3 months)” na „(1 to 4 months)” w cytacie SLO-412 daje 1 brak.
- niezmienniki: tools/i18n/niezmienniki.mjs porownaj(en, pl) na 44 parach: 0 różnic. Mutacja „6–9 miesięcy” → „6–12 miesięcy” w pl SLO-440 daje 1 różnicę (liczby).
- kolizje_id: rejestr.json na main: SLO kończy się na SLO-350; git grep SLO-400–449 na origin/main i 9 gałęziach origin/claude/*: 0 trafień.
- `npm run check` na gałęzi z tymi plikami: kod 0 (2026-11-02).

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Klucz | HTTP | sha12 | Adres |
|---|---|---|---|
| nchfp-meat | 200 | b60343e41e71 | https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/ |
| nchfp-poul | 200 | 7f5e8a91d143 | https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-poultry-and-game-birds/ |
| nchfp-bacon | 200 | 152f7ddfcf54 | https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-bacon/ |
| nchfp-fish | 200 | 11fb66fed5a0 | https://nchfp.uga.edu/how/freeze/seafood-products/freezing-fish/ |
| nchfp-eggs | 200 | e591e375f289 | https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/ |
| nchfp-butter | 200 | efc4c4e42429 | https://nchfp.uga.edu/how/freeze/dairy-products/freezing-butter/ |
| nchfp-cheese | 200 | 92d75927a888 | https://nchfp.uga.edu/how/freeze/dairy-products/freezing-cheese/ |
| nchfp-howlong | 200 | 3c65dd5e9cbd | https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/ |
| nchfp-thaw | 200 | 6327220daefa | https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/ |
| nchfp-mgmt | 200 | c3690f082768 | https://nchfp.uga.edu/how/freeze/freeze-general-information/freezer-management/ |
| nchfp-faq | 200 | d7bba13ede8a | https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing |
| nchfp-seafood | 200 | 3382c55ffa20 | https://nchfp.uga.edu/how/freeze/seafood-products/ |
| nchfp-dairy | 200 | 8b24990ebbf6 | https://nchfp.uga.edu/how/freeze/dairy-products/ |
| fsis-freeze | 403 | 95c42af9fa89 | https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety |
| fsis-thaw | 403 | add4dbd0c0ac | https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/big-thaw-safe-defrosting-methods |
| fsis-outage | 403 | 896e71182e17 | https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/food-safety-during-power-outage |
| fsg-chart | 403 | f05d217cf128 | https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts |
| fsg-outage | 403 | 993b1066b417 | https://www.foodsafety.gov/keep-food-safe/food-safety-during-power-outage |
| fda-store | 404 | 043f1f6013b3 | https://www.fda.gov/food/buy-store-serve-safe-food/are-you-storing-food-safely |
| fda-outage | 200 | e0183d8229a5 | https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods |
| fda-seafood | 200 | 3d409e5d3cd0 | https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely |
| fda-chart | 200 | f987330d7e8a | https://www.fda.gov/media/74435/download |
| clemson-meat | 200 | 39b6d9e89ee2 | https://hgic.clemson.edu/factsheet/freezing-meats-seafood/ |
| clemson-thaw | 200 | 43c9fb74bbf9 | https://hgic.clemson.edu/factsheet/how-to-thaw-food-safely/ |
| uga-fcs | 200 | cc65cced12b6 | https://nchfp.uga.edu/how/freeze/freeze-general-information/foods-that-do-not-freeze-well/ |
| nchfp-pack | 200 | 4c4a4132fad3 | https://nchfp.uga.edu/how/freeze/freeze-general-information/packaging-and-labeling-foods/ |
| umn-refreeze | 200 | 9bfe3aaf293a | https://extension.umn.edu/preserving-and-preparing/refreezing-food |
| psu-refreeze | 200 | 750097eb5f3a | https://extension.psu.edu/freezing-and-refreezing-meat |
| clemson-milk | 200 | ae41b3e9048a | https://hgic.clemson.edu/factsheet/safe-handling-of-milk-dairy-products/ |
| clemson-storage | 200 | 95bf9b7c69b8 | https://hgic.clemson.edu/factsheet/food-storage-refrigerator-freezer/ |
| clemson-basics | 200 | 7e25ab16b08a | https://hgic.clemson.edu/factsheet/freezing-basics/ |
| clemson-meat-proba | 404 | — | https://hgic.clemson.edu/factsheet/freezing-meat-poultry-fish/ |
| clemson-dairy-proba | 404 | — | https://hgic.clemson.edu/factsheet/freezing-dairy-products-eggs/ |
| clemson-thaw-proba | 404 | — | https://hgic.clemson.edu/factsheet/safe-thawing-of-foods/ |
| clemson-outage-proba | 404 | — | https://hgic.clemson.edu/factsheet/food-safety-during-power-outages/ |
| umn-meat-proba | 404 | — | https://extension.umn.edu/preserving-and-preparing/freezing-meat-poultry-and-fish |
| umn-thaw-proba | 404 | — | https://extension.umn.edu/food-safety/thawing-food-safely |
| psu-freeze-proba | 404 | — | https://extension.psu.edu/lets-preserve-freezing-meat-poultry-and-fish |
| psu-thaw-proba | 404 | — | https://extension.psu.edu/thawing-foods-safely |

Szczeble: NCHFP i FDA 1; Clemson HGIC, Penn State, UMN 3 (extension, jak w rejestrze). FSIS i FoodSafety.gov: „Access Denied” (Akamai, 403) dla stron, PDF i robots.txt — blokady nie obchodzę (C5-D1). Wpisy `-proba` to pierwsze, błędne adresy (404), zastąpione adresami z wyszukiwarki, które otwarłem curl. Bez cytatu w tym pliku: `nchfp-mgmt` (jest SLO-255), `nchfp-seafood`, `nchfp-dairy` (strony spisu), `uga-fcs`, `nchfp-pack`, `fda-outage` (jest SLO-259/260), `clemson-thaw` i `umn-refreeze` (porównanie do C5-D4), `clemson-storage`, `clemson-basics`.

## 3. Warianty → twierdzenia

| Wariant | Istniejące | Nowe (C5) |
|---|---|---|
| `pork-loin-ham-v16` | FRZ-056 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 416, 417 |
| `beef-veal-v15` | FRZ-056 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 417 |
| `game-lamb-v11` | FRZ-056 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417 |
| `poultry-v15` | FRZ-057 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 418, 419, 420, 421, 422 |
| `pork-belly-jowl-v15` | FRZ-058 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 416, 423, 424 |
| `sea-fish-v17` | FRZ-059 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 425, 426, 427, 428, 429, 430, 431, 432, 433 |
| `freshwater-fish-v12` | FRZ-059 + wspólne | 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 425, 426, 427, 428, 429, 430, 431, 432, 433 |
| `eggs-v11` | FRZ-060 + wspólne | 400, 401, 402, 403, 404, 408, 410, 436, 437, 438, 439 |
| `butter-whey-cheese-v13` | FRZ-054 + wspólne | 400, 401, 402, 403, 404, 408, 410, 440, 442 |
| `aged-hard-cheese-v16` | FRZ-055 + wspólne | 400, 401, 402, 403, 404, 408, 410, 441, 442 |

Wspólne istniejące dla każdego wariantu: SUS-050, SUS-059, SLO-251, SLO-255, SLO-258, SLO-259, SLO-260, SLO-261, SLO-291. Bez źródła: żaden wariant. Każdy z 10 wariantów freezing (kategorie 9 i 10) ma co najmniej 3 nowe twierdzenia. Katalog nie ma wariantów mrożenia owoców morza ani mleka: twierdzenia grupy E (SLO-434, 435) i mleka (SLO-443) w zapasie. butter-whey-cheese-v05/v06 poza zakresem (C5-D8).

## 4. Twierdzenia (do wklejenia przez tor A)

### H: wspólne (rozmrażanie, ponowne mrożenie, czasy, awaria)

**SLO-400** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: FDA i NCHFP: żywność trzymana stale w 0°F (-18°C) jest bezpieczna bezterminowo; zalecane czasy przechowywania w zamrażarce dotyczą tylko jakości, a po ich upływie żywność nadal jest bezpieczna, ale gorsza w smaku, barwie i strukturze.
- en: FDA and NCHFP: food kept constantly at 0°F (-18°C) stays safe indefinitely; recommended freezer storage times are for quality only, and after them the food is still safe but lower in flavor, color and texture.
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); nagłówek tabeli (https://www.fda.gov/media/74435/download): „Because freezing 0° F (-18° C) keeps food safe indefinitely, the following recommended storage times are for quality only.”
- Źródło (szczebel 1, sha12 3c65dd5e9cbd): NCHFP, How Long Can I Store Frozen Foods; akapit 2 (https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/): „For best quality use the shorter storage times. After these times, the food should still be safe, just lower in quality.”
- Źródło (szczebel 1, sha12 d7bba13ede8a): NCHFP, FAQ General Freezing; Will food spoil if it is stays frozen longer than the recommended storage time? (https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing): „Food stored longer than recommended time is safe but flavor, color and texture will continue to deteriorate.”
- Uwaga: Przeliczenie °F na °C podaje FDA. Warunek „stale w 0°F” jest istotny: przy awarii zamrażarki obowiązują SLO-259/260.

**SLO-401** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: NCHFP: mrożenie nie zabija wszystkich bakterii, drożdży i pleśni, tylko zatrzymuje ich namnażanie w 0°F (-18°C) lub niżej; po rozmrożeniu ocalałe drobnoustroje znów mogą się namnażać.
- en: NCHFP: freezing does not kill all bacteria, yeasts and molds, it only stops them multiplying at 0°F (-18°C) or below; after thawing the surviving organisms can multiply again.
- Źródło (szczebel 1, sha12 d7bba13ede8a): NCHFP, FAQ General Freezing; Does freezing kill germs? (https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing): „Freezing does not kill all bacteria, yeasts and molds present in food, but it does prevent their multiplication if the food is held at 0°F or less. When thawed, the surviving organisms can multiply again.”
- Źródło (szczebel 1, sha12 3d409e5d3cd0): FDA, Selecting and Serving Fresh and Frozen Seafood Safely; Freezing (https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely): „However, be aware that freezing doesn't kill all harmful germs.”
- Uwaga: Przeliczenie 0°F = -18°C za FDA (fda-chart).

**SLO-402** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: NCHFP: do zamrażarki dokładać naraz tylko tyle żywności, ile zamarznie w ciągu 24 godzin, zwykle 2–3 funty na stopę sześcienną pojemności; przeładowanie spowalnia mrożenie i obniża jakość; nowe, ciepłe opakowania rozłożyć z odstępami, układać ciasno dopiero po zamrożeniu.
- en: NCHFP: add to the freezer at one time only as much food as will freeze within 24 hours, usually 2–3 pounds per cubic foot of storage space; overloading slows freezing and lowers quality; spread new, warm packages with space between them and stack them close only once frozen.
- Źródło (szczebel 1, sha12 d7bba13ede8a): NCHFP, FAQ General Freezing; How much food can be frozen at one time? (https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing): „Add only the amount that will freeze within 24 hours, which is usually two or three pounds of food per cubic foot of storage space. Overloading slows down the freezing rate.”
- Źródło (szczebel 1, sha12 3c65dd5e9cbd): NCHFP, How Long Can I Store Frozen Foods; Was the food stored at an acceptable temperature? (https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/): „Do not overload the freezer with unfrozen food. | Leave space among new, warm packages so the cold air can circulate freely around them. When the food is frozen, stack and store the packages close together if desired.”
- Uwaga: „two or three” zapisane cyframi 2–3. Rachunek JarAtlas (bez podania na stronie): 2–3 funty na stopę sześcienną to ok. 32–48 kg/m³; nie przenosić bez oznaczenia jako przeliczenie.

**SLO-403** (niekrytyczne; jedno źródło; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: Clemson HGIC: mrozić jak najszybciej, bo powolne mrożenie tworzy duże kryształki lodu, które przy rozmrażaniu uszkadzają komórki i mięso traci sok; paczek do zamrożenia nie układać w stos, tylko jedną warstwą na półkach; zamrażalnik w lodówce, który nie utrzymuje 0°F (-18°C), tylko do krótkiego przechowywania.
- en: Clemson HGIC: freeze as quickly as possible, because slow freezing forms large ice crystals that damage cells on thawing and make meat lose juiciness; do not stack packages to be frozen but spread them in one layer on the shelves; a refrigerator freezing compartment that cannot hold 0°F (-18°C) is for short-term storage only.
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); akapit o szybkim mrożeniu (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Slow freezing creates large, disruptive ice crystals. During thawing, they damage the cells and cause meat to "drip" or lose juiciness. … Never stack packages to be frozen. Instead, spread them out in one layer on the shelves, stacking them only after frozen solid.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); akapit o zamrażalniku (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „If a refrigerator freezing compartment can't maintain 0 °F, or if the door is opened frequently, use it only for short-term food storage.”
- Uwaga: Przeliczenie °C za FDA. Jedno źródło szczebla 3 dla części o zamrażalniku; NCHFP Freezer Management (SLO-255) daje 0°F i termometr.

**SLO-404** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: NCHFP i Clemson HGIC: oparzelina mrozowa (szarobrązowe, skórzaste plamy) to wysuszenie powierzchni źle opakowanej żywności przez dostęp powietrza; nie czyni żywności niebezpieczną, tylko obniża jakość; zapobiega jej opakowanie bez powietrza i szczelnie zamknięte, a przypalone miejsca można odciąć.
- en: NCHFP and Clemson HGIC: freezer burn (grayish-brown leathery spots) is surface drying of improperly wrapped food caused by air; it does not make food unsafe, only lowers quality; an air-free, airtight package prevents it, and the burned spots can be cut away.
- Źródło (szczebel 1, sha12 d7bba13ede8a): NCHFP, FAQ General Freezing; What is freezer burn? (https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing): „It is dehydration or drying that occurs on the surface of a frozen product if it is improperly wrapped. The food is safe to eat but poorer quality. To prevent freezer burn, the package must be free of air and sealed airtight.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Freezer burn (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Freezer burn does not make food unsafe, merely dry in spots. It appears as grayish-brown leathery spots and is caused by air reaching the surface of the food. Cut freezer-burned portions away either before or after cooking the food.”

**SLO-405** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP, FDA i Clemson HGIC, rozmrażanie mięsa, ryb i drobiu: najlepiej w lodówce w oryginalnym opakowaniu; szybciej w wodoszczelnym opakowaniu w zimnej wodzie zmienianej co najmniej co 30 minut, tak by stale była zimna; w mikrofalówce tylko wtedy, gdy zaraz potem się gotuje; nigdy na blacie kuchennym, w garażu, piwnicy, samochodzie ani na dworze.
- en: NCHFP, FDA and Clemson HGIC, thawing meat, fish and poultry: best in the refrigerator in the original wrapping; faster in waterproof wrapping in cold water changed at least every 30 minutes so it stays cold; in the microwave only if cooked immediately afterwards; never on the kitchen counter, in a garage, basement, car or outdoors.
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; Animal Products, Meat, Fish and Poultry (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „Frozen meats, fish and poultry are best when thawed in the refrigerator in their original wrappings. For faster thawing, place the meat or fish in waterproof wrapping in cold, slowly running water. If you can't keep water running slowly over the package, place in a large container of cold water. Change the water at least every 30 minutes, or as needed so that it stays cold. Frozen meat, fish or poultry can also be thawed in a microwave oven, if they will be cooked immediately after thawing.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Thawing (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Never defrost foods in a garage, basement, car, plastic garbage bag, out on the kitchen counter, outdoors or on the porch. These methods can leave your foods unsafe to eat. There are three safe ways to defrost food: in the refrigerator, in cold water or in the microwave.”
- Źródło (szczebel 1, sha12 3d409e5d3cd0): FDA, Selecting and Serving Fresh and Frozen Seafood Safely; Thawing (https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely): „Thaw frozen seafood gradually by placing it in the refrigerator overnight.”
- Uwaga: Uzupełnia SLO-258 (zakaz rozmrażania w temperaturze pokojowej i w ciepłej wodzie, granica 70°F dla wody, do 2 godzin) o zasady dla produktów zwierzęcych. Clemson każe po rozmrożeniu w zimnej wodzie gotować od razu.

**SLO-406** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP i Clemson HGIC: rozmrażanie w lodówce wymaga planu: duży produkt, np. indyk, potrzebuje co najmniej 1 dnia (24 godziny) na każde 5 funtów (ok. 2,3 kg) masy, a nawet 1 funt (ok. 0,45 kg) mielonego mięsa albo piersi kurczaka bez kości potrzebuje pełnego dnia; w lodówce ustawionej na 35°F (ok. 2°C) trwa to dłużej niż przy 40°F (ok. 4°C).
- en: NCHFP and Clemson HGIC: thawing in the refrigerator needs planning: a large item such as a turkey needs at least 1 day (24 hours) for every 5 pounds (about 2.3 kg) of weight, and even 1 pound (about 0.45 kg) of ground meat or boneless chicken breasts needs a full day; it takes longer in a refrigerator set at 35°F (about 2°C) than at 40°F (about 4°C).
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; akapit 3 (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „A large frozen item like a turkey requires at least a day (24 hours) for every 5 pounds of weight. Even small amounts of frozen food -- such as a pound of ground meat or boneless chicken breasts -- require a full day to thaw.”
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; akapit 3, lista (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „Food takes longer to thaw in a refrigerator set at 35°F than one set at 40°F.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Thawing (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „For large items like turkeys allow one day for each 5 pounds of weight.”
- Uwaga: Przeliczenia na kg i °C to rachunek JarAtlas (1 funt = 0,4536 kg; 35°F = 1,7°C, zaokrąglone).

**SLO-407** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP i Clemson HGIC: mięso, ryby i drób można gotować prosto z zamrażarki, ale trzeba doliczyć czas, przy dużych pieczeniach nawet do 1 1/2 raza dłużej; dla najlepszej jakości rozmrożone mięso albo rybę gotować od razu.
- en: NCHFP and Clemson HGIC: meat, fish and poultry can be cooked from frozen, but extra time is needed, for large roasts up to 1 1/2 times as long; for best quality cook thawed meat or fish immediately.
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; Animal Products (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „If meat, fish or poultry is cooked without thawing, additional time must be allowed. How much depends on the size and shape of the product. Large frozen roasts could take up to 1½ times as long. … For best quality cook thawed meat or fish immediately.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Cooking frozen (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Raw or cooked meat, poultry or casseroles can be cooked or reheated from the frozen state. However, it will take approximately one and a half times the usual cooking time for food which has been thawed.”
- Uwaga: „1½” zapisane jako 1 1/2.

**SLO-408** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: NCHFP i FDA: dania i produkty z mięsem, rybami, drobiem, jajami albo nabiałem rozmrażać w lodówce lub w mikrofalówce; łatwo psującej się żywności nie trzymać poza lodówką dłużej niż 2 godziny, a gdy temperatura przekracza 90°F (ok. 32°C), dłużej niż 1 godzinę.
- en: NCHFP and FDA: dishes and products containing meat, fish, poultry, eggs or dairy are thawed in the refrigerator or in the microwave; perishable food is not kept out of the refrigerator for more than 2 hours, or more than 1 hour when the temperature is above 90°F (about 32°C).
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; Prepared or Cooked Foods (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „Products containing meat, fish, poultry, eggs or dairy products should be thawed in the refrigerator or in the microwave oven.”
- Źródło (szczebel 1, sha12 3d409e5d3cd0): FDA, Selecting and Serving Fresh and Frozen Seafood Safely; Serving (https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely): „Never leave seafood or other perishable food out of the refrigerator for more than 2 hours or for more than 1 hour when temperatures are above 90°F.”
- Uwaga: Sprzeczność szczebla 1: NCHFP w tym samym akapicie podaje „more than 2 to 4 hours”, FDA 2 godziny (1 godzina powyżej 90°F). Wybrana granica krótsza (FDA), decyzja C5-D3. Przeliczenie °C to rachunek JarAtlas.

**SLO-409** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12)

- pl: Ostrożna reguła JarAtlas dla surowego mięsa, drobiu i ryb (Clemson HGIC, Penn State): bez gotowania ponownie zamrażać tylko to, co rozmroziło się w lodówce, i wrócić z tym do zamrażarki w ciągu 1–2 dni; co rozmrożono w zimnej wodzie albo w mikrofalówce, najpierw ugotować, potem można zamrozić; czego nie wolno ponownie zamrażać żadną metodą: co stało w strefie zagrożenia ponad 2 godziny (1 godzinę przy temperaturze powyżej 90°F, ok. 32°C) — to wyrzucić.
- en: Cautious JarAtlas rule for raw meat, poultry and fish (Clemson HGIC, Penn State): refreeze without cooking only what thawed in the refrigerator, and return it to the freezer within 1–2 days; what thawed in cold water or in the microwave is cooked first and may then be frozen; what may not be refrozen by any method: anything left in the danger zone for more than 2 hours (1 hour above 90°F, about 32°C) — throw it out.
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Refreezing (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Once food is thawed in the refrigerator, it is safe to refreeze it without cooking, although there may be a loss of quality due to the moisture lost through defrosting. After cooking raw foods that were previously frozen, it is safe to freeze the cooked foods.”
- Źródło (szczebel 3, sha12 750097eb5f3a): Penn State Extension, Freezing and Refreezing Meat (upd. 2024-02-12); lista warunków (https://extension.psu.edu/freezing-and-refreezing-meat): „Meat or poultry was initially thawed under refrigeration before or after cooking. If it was thawed using a different method, cook the meat or poultry before refreezing. If you have thawed meat and need to refreeze it, return the meat or poultry to the freezer within 1 to 2 days to preserve maximum quality and safety.”
- Źródło (szczebel 3, sha12 750097eb5f3a): Penn State Extension, Freezing and Refreezing Meat (upd. 2024-02-12); akapit po liście (https://extension.psu.edu/freezing-and-refreezing-meat): „If the meat or poultry has been left in the temperature danger zone for more than 2 hours, or 1 hour in temperatures above 90°F, it will not be safe to refreeze using any method; this meat will need to be thrown out.”
- Uwaga: Reguła ostrożniejsza niż SLO-291 (NCHFP FAQ: ponowne mrożenie przy kryształkach lodu albo zamrażarce do 40°F, bez rozróżnienia metody rozmrażania). Granica 1–2 dni z Penn State, krótsza niż UMN (3–4 dni) — decyzja C5-D4. Penn State powołuje się na FSIS (strona FSIS dziś 403, niesprawdzona). Po awarii zamrażarki obowiązują SLO-259/260.

**SLO-410** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, poultry-v15, pork-belly-jowl-v15, sea-fish-v17, freshwater-fish-v12, eggs-v11, butter-whey-cheese-v13, aged-hard-cheese-v16)

- pl: NCHFP: przy awarii zasilania żywność dłużej pozostaje zamrożona, jeśli zamrażarka jest zamknięta, pełna, stoi w chłodnym miejscu i jest dobrze izolowana; zamrażarkę można przykryć kocami, z dala od sprężarki; pół pełna utrzymuje mróz tylko ok. 24 godziny.
- en: NCHFP: during a power failure food stays frozen longer if the freezer remains unopened, is full, is in a cool place and is well insulated; the freezer can be covered with blankets, kept away from the compressor; a half-filled freezer keeps food frozen only about 24 hours.
- Źródło (szczebel 1, sha12 d7bba13ede8a): NCHFP, FAQ General Freezing; How long will food remain frozen if the power goes off? (https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing): „Foods stay frozen longer if the freezer remains unopened, is full, is in a cool place and is well insulated. … A half-filled freezer will keep food frozen only about 24 hours. Cover the freezer with blankets, keeping them away from the compressor, to help hold the cold.”
- Uwaga: Celowo bez zdania NCHFP „two to four days” dla pełnej zamrażarki: FDA (SLO-259) podaje ok. 48 godzin; obowiązuje krótsza wartość FDA (decyzja C5-D5). Ocena żywności po awarii: SLO-259/260 bez zmian.

### A: mięso (wołowina, cielęcina, wieprzowina, dziczyzna, jagnięcina)

**SLO-411** (krytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, pork-belly-jowl-v15)

- pl: NCHFP i Clemson HGIC: świeżo ubite tusze albo elementy schłodzić poniżej 40°F (ok. 4°C) w ciągu 24 godzin, żeby nie skwaśniały ani się nie zepsuły, najlepiej do 32–36°F (ok. 0–2°C); podroby (wątroba, serce, grasica) po schłodzeniu są gotowe do zapakowania i zamrożenia; wieprzowina, cielęcina i jagnięcina po 24 godzinach są gotowe do krojenia i mrożenia; mięso ze sklepu można mrozić od razu.
- en: NCHFP and Clemson HGIC: cool freshly slaughtered carcasses or cuts below 40°F (about 4°C) within 24 hours to prevent souring or spoiling, best to 32–36°F (about 0–2°C); variety meats (liver, heart, sweetbreads) are ready to wrap and freeze once cold; pork, veal and lamb are ready to cut and freeze after 24 hours; meat from the store can be frozen as is.
- Źródło (szczebel 1, sha12 b60343e41e71): NCHFP, Freezing Meats; Chilling and Aging (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/): „Freshly slaughtered meat carcasses or primal cuts need to be cooled to below 40°F within 24 hours to prevent souring or spoiling. The meat should be chilled at 32° to 36°F. Variety meats (liver, heart or sweetbreads) are ready to be wrapped and frozen after they are cold. After 24 hours, pork, veal and lamb are ready to be cut, wrapped and frozen.”
- Źródło (szczebel 1, sha12 b60343e41e71): NCHFP, Freezing Meats; Chilling and Aging, koniec (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/): „Meat purchased from grocery stores is ready to be frozen as is, or cut”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Meat (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Freshly slaughtered meat carcasses or pieces need to be cooled to below 40 °F within 24 hours to prevent souring or spoiling.”
- Uwaga: Przeliczenia °C to rachunek JarAtlas (36°F = 2,2°C, zaokrąglone). Dojrzewanie wołowiny 5–7 dni w 32–36°F (NCHFP) pominięte: to temat uboju domowego, nie mrożenia; do decyzji roli 03.

**SLO-412** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, pork-belly-jowl-v15)

- pl: NCHFP: mrozić tylko świeże mięso dobrej jakości; mięso peklowane, jak szynka i boczek, można trzymać w zamrażarce tylko krótko (1–3 miesiące), bo sól przyspiesza jełczenie.
- en: NCHFP: freeze only high-quality fresh meat; cured meats such as ham and bacon can be kept frozen only briefly (1–3 months), because the salt hastens rancidity.
- Źródło (szczebel 1, sha12 b60343e41e71): NCHFP, Freezing Meats; akapit 1 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/): „Select only high quality, fresh meats to freeze. Cured meats such as ham and bacon can only be frozen for a short period of time (1 to 3 months) because the salt in them hastens rancidity.”
- Uwaga: Dla boczku ostrożniejsza granica FDA/FMI 1 miesiąc: zob. twierdzenie boczku (grupa C).

**SLO-413** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, pork-belly-jowl-v15)

- pl: NCHFP i FDA: mięso pakować w papier albo folię do mrożenia, owijając „na aptekarza” albo „na rzeźnika”; mięso mielone, gulaszowe i małe porcje można mrozić w woreczkach albo pojemnikach do mrożenia; mięso ze sklepu owinąć dodatkowo, bo przezroczyste opakowanie nie chroni przed utratą wilgoci; jeśli ma leżeć w oryginalnym opakowaniu dłużej niż 2 miesiące, owinąć je szczelnie grubą folią aluminiową, folią spożywczą albo papierem do mrożenia, albo włożyć do woreczka.
- en: NCHFP and FDA: package meat in freezer paper or wrap using the drugstore or butcher wrap; ground meat, stew meat and small portions can be frozen in freezer bags or containers; store-bought meat needs over-wrapping because its clear packaging is not moisture-vapor resistant; if it will stay in its original package longer than 2 months, overwrap it airtight with heavy-duty foil, plastic wrap or freezer paper, or place it in a bag.
- Źródło (szczebel 1, sha12 b60343e41e71): NCHFP, Freezing Meats; Packaging (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/): „Package the meat in freezer paper or wrap, using either the drugstore or butcher wrap. Freezer bags or containers can be used for ground beef, stew beef or other meats frozen in small portions. | Store-bought meats need to be over-wrapped, since their clear packaging is not moisture-vapor resistant.”
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); wskazówki nad tabelą (https://www.fda.gov/media/74435/download): „If freezing meat and poultry in its original package longer than 2 months, overwrap these packages with airtight heavy-duty foil, plastic wrap, or freezer paper; or place the package inside a plastic bag.”
- Uwaga: Wcześniej FRZ-056 (tylko pierwsze zdanie). Clemson podaje „a month or two” — zgodne kierunkowo; przyjęto FDA 2 miesiące.

**SLO-414** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11, pork-belly-jowl-v15)

- pl: NCHFP: mięso pakować w porcjach na jeden posiłek, usuwając jak najwięcej kości; między plastry albo kotlety kłaść dwie warstwy papieru albo folii, żeby po zamrożeniu łatwo je rozdzielić, co przyspiesza też rozmrażanie.
- en: NCHFP: package meat in meal-size portions, removing as many bones as possible; place two layers of freezer paper or wrap between slices or patties so they separate easily when frozen, which also speeds thawing.
- Źródło (szczebel 1, sha12 b60343e41e71): NCHFP, Freezing Meats; Packaging (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/): „Package the meat in meal-size portions, removing as many bones as possible (they take up freezer space). Place two layers of freezer paper or wrap between slices or patties of meat so they are easier to separate when frozen. This will help speed thawing.”

**SLO-415** (krytyczne; warianty: game-lamb-v11)

- pl: NCHFP: dużą zwierzynę (jeleń, łoś, antylopa) mrozi się jak każde inne mięso; przed mrożeniem odciąć i wyrzucić mięso przekrwione; królika, wiewiórkę i drobną zwierzynę obedrzeć ze skóry, wypatroszyć i schłodzić, a potem trzymać w lodówce 24–36 godzin, aż mięso przestanie być sztywne; następnie pokroić albo zostawić w całości, zapakować i zamrozić.
- en: NCHFP: large game (deer, moose, antelope) is frozen like any other meat; trim and discard bloodshot meat before freezing; rabbit, squirrel and small game are skinned, dressed and chilled, then refrigerated for 24–36 hours until the meat is no longer rigid; then cut or leave whole, package and freeze.
- Źródło (szczebel 1, sha12 b60343e41e71): NCHFP, Freezing Meats; Game (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-meats/): „Deer, moose, antelope and other large game can be handled for freezing like any other meat or carcass. Trim and discard bloodshot meat before freezing. Package meat, seal and freeze. | Rabbit, squirrel and other game should be skinned, dressed and then chilled. Refrigerate for 24 to 36 hours until meat is no longer rigid. Cut into serving-size pieces or leave whole. Package, seal and freeze.”

**SLO-416** (krytyczne; jedno źródło; warianty: pork-loin-ham-v16, game-lamb-v11, pork-belly-jowl-v15)

- pl: Clemson HGIC: włośnie i inne pasożyty mogą zginąć w bardzo niskiej temperaturze tylko przy ściśle określonych warunkach nadzorowanych urzędowo; nie należy polegać na domowym mrożeniu jako sposobie zniszczenia włośni; wszystkie pasożyty niszczy dokładne ugotowanie.
- en: Clemson HGIC: trichina and other parasites can be destroyed by sub-zero temperatures only under very strict government-supervised conditions; home freezing should not be relied on to destroy trichina; thorough cooking destroys all parasites.
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); akapit 1 (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Trichina and other parasites can be destroyed by sub-zero freezing temperatures. However, very strict government-supervised conditions must be met. It is not recommended to rely on home freezing to destroy trichina. Thorough cooking will destroy all parasites.”
- Uwaga: Jedno źródło szczebla 3, ale wariant ostrożny. Relacja z MIE-035 (NCHFP jerky: mrożenie wieprzowiny i dziczyzny 30 dni w 0°F przed suszeniem) do oceny: MIE-035 to protokół wstępny przed suszeniem, nie zamiennik gotowania; karta mrożenia nie obiecuje odpasożycenia. Decyzja C5-D6.

**SLO-417** (niekrytyczne; warianty: pork-loin-ham-v16, beef-veal-v15, game-lamb-v11)

- pl: FDA, zalecane czasy w zamrażarce dla jakości, świeża wołowina, cielęcina, jagnięcina i wieprzowina: steki 6–12 miesięcy, kotlety 4–6 miesięcy, pieczenie 4–12 miesięcy, podroby (ozór, nerki, wątroba, serce) 3–4 miesiące; mięso mielone i gulaszowe 3–4 miesiące (tyle samo NCHFP dla mielonego).
- en: FDA, recommended freezer times for quality, fresh beef, veal, lamb and pork: steaks 6–12 months, chops 4–6 months, roasts 4–12 months, variety meats (tongue, kidneys, liver, heart) 3–4 months; ground and stew meat 3–4 months (NCHFP gives the same for ground meat).
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Fresh Meat (Beef, Veal, Lamb, & Pork) (https://www.fda.gov/media/74435/download): „Steaks 3 - 5 days 6 - 12 months … Chops 3 - 5 days 4 - 6 months … Roasts 3 - 5 days 4 - 12 months … chitterlings) 1 - 2 days 3 - 4 months”
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Raw Hamburger, Ground & Stew Meat (https://www.fda.gov/media/74435/download): „Hamburger & stew meats 1 - 2 days 3 - 4 months”
- Źródło (szczebel 1, sha12 3c65dd5e9cbd): NCHFP, How Long Can I Store Frozen Foods; tabela (https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/): „Ground Meat 3 - 4”
- Uwaga: Tabela FDA ma dwie kolumny; fragmenty sprawdzone osobno na tekście pdftotext -layout. Wiersz podrobów („Variety meats … 1 - 2 days 3 - 4 months”) łamie się między kolumnami: dosłownie sprawdzona jego końcówka „chitterlings) 1 - 2 days 3 - 4 months”, przypisanie do wiersza podrobów odczytane z układu kolumn.

### B: drób

**SLO-418** (niekrytyczne; warianty: poultry-v15)

- pl: NCHFP: mrozić tylko świeży drób dobrej jakości; pakować w papier albo folię do mrożenia („na aptekarza” albo „na rzeźnika”) albo w woreczki do mrożenia; drób ze sklepu owinąć dodatkowo; kawałki układać w zwarty, płaski, kwadratowy pakunek; po zapakowaniu zamknąć i od razu zamrozić.
- en: NCHFP: freeze only high-quality fresh poultry; package it in freezer paper or wrap (drugstore or butcher wrap) or in freezer bags; over-wrap store-bought poultry; arrange pieces in a compact, flat, square package; after packaging, seal and freeze immediately.
- Źródło (szczebel 1, sha12 7f5e8a91d143): NCHFP, Freezing Poultry and Game Birds; akapit 1–2 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-poultry-and-game-birds/): „Select only high quality, fresh poultry to freeze. … Package poultry in freezer paper or wrap using the drugstore or butcher wrap, or place in freezer bags. Storebought poultry needs to be over-wrapped before freezing because its clear wrap is not moisture-vapor resistant. When packaging pieces, arrange them to form a compact, square, flat package so they will stack better in the freezer. After packaging, seal and freeze immediately.”
- Uwaga: Wcześniej FRZ-057 (tylko zdanie o pakowaniu).

**SLO-419** (krytyczne; warianty: poultry-v15)

- pl: NCHFP i Clemson HGIC: drobiu ani dzikiego ptactwa nie nadziewać przed mrożeniem, bo w nadzieniu podczas mrożenia i rozmrażania łatwo namnażają się bakterie wywołujące zatrucia; fabrycznie nadziewany mrożony drób powstaje w warunkach, których nie da się odtworzyć w domu.
- en: NCHFP and Clemson HGIC: do not stuff poultry or game birds before freezing, because bacteria that cause foodborne illness can easily grow in the stuffing during freezing and thawing; commercially stuffed frozen poultry is made under conditions that cannot be duplicated at home.
- Źródło (szczebel 1, sha12 7f5e8a91d143): NCHFP, Freezing Poultry and Game Birds; akapit 4 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-poultry-and-game-birds/): „Do not stuff poultry or game birds before freezing them. During freezing or thawing times, bacteria that cause foodborne illness could easily grow in the stuffing. Commercially stuffed frozen poultry is prepared under special safety conditions that cannot be duplicated at home.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Note (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Note: Do not stuff poultry or game birds before freezing them.”

**SLO-420** (krytyczne; warianty: poultry-v15)

- pl: NCHFP: drób, który ma być nadziewany, rozmrozić całkowicie; mięso, ryby i drób do panierowania i smażenia rozmrozić najpierw przynajmniej częściowo w lodówce.
- en: NCHFP: poultry that is to be stuffed is thawed completely; meat, fish and poultry to be breaded and fried are first at least partially thawed in the refrigerator.
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; Animal Products (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „When frozen meat, fish or poultry are to be breaded and fried, they should be at least partially thawed in the refrigerator first, for easier handling. All poultry which is to be stuffed should be thawed completely for safety.”

**SLO-421** (niekrytyczne; warianty: poultry-v15)

- pl: NCHFP: dzikie ptactwo (przepiórki, gołębie, kaczki, bażanty) oskubać i wypatroszyć jak najszybciej po odstrzale, schłodzić i oczyścić; z dzikich kaczek i gęsi usunąć nadmiar tłuszczu, bo bardzo szybko jełczeje; dalej mrozić jak drób.
- en: NCHFP: game birds (quail, dove, duck, pheasant) are dressed and gutted as soon as possible after shooting, cooled and cleaned; excess fat is removed from wild ducks and geese because it becomes rancid very quickly; then freeze as poultry.
- Źródło (szczebel 1, sha12 7f5e8a91d143): NCHFP, Freezing Poultry and Game Birds; akapit 3 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-poultry-and-game-birds/): „Quail, dove, duck, pheasant and other game birds should be dressed and gutted as soon as possible after shooting. Cool and clean properly. Remove excess fat on wild ducks and geese since it becomes rancid very quickly. Freeze as directed for poultry.”
- Uwaga: „dressed” przetłumaczone jako „oskubać” (przygotować tuszkę); do przeglądu roli 09.

**SLO-422** (niekrytyczne; warianty: poultry-v15)

- pl: Czasy w zamrażarce dla jakości, surowy drób: NCHFP podaje 6–9 miesięcy; FDA podaje dłużej: kurczak albo indyk w całości 1 rok, w częściach 9 miesięcy, podroby 3–4 miesiące; karta podaje wartość krótszą.
- en: Freezer times for quality, raw poultry: NCHFP gives 6–9 months; FDA gives longer: whole chicken or turkey 1 year, parts 9 months, giblets 3–4 months; the card gives the shorter value.
- Źródło (szczebel 1, sha12 3c65dd5e9cbd): NCHFP, How Long Can I Store Frozen Foods; tabela (https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/): „Poultry 6 - 9”
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Fresh Poultry (https://www.fda.gov/media/74435/download): „Chicken or turkey, whole 1 - 2 days 1 year … Chicken or turkey, parts 1 - 2 days 9 months … Giblets 1 - 2 days 3 - 4 months”
- Uwaga: Sprzeczność na szczeblu 1 (jakość, nie bezpieczeństwo): część wspólna i różnica pokazane; karta bierze krótszą wartość NCHFP (decyzja C5-D2).

### C: boczek i mięsa peklowane

**SLO-423** (niekrytyczne; warianty: pork-belly-jowl-v15)

- pl: NCHFP i FDA: mięsa peklowane mają krótką trwałość nawet w zamrażarce, bo są tłuste, a sól peklująca przyspiesza jełczenie; FDA podaje dla boczku 1 miesiąc, FMI zaleca nie mrozić boczku otwartego, a nieotwarty najwyżej 1 miesiąc; NCHFP dopuszcza najwyżej 1–3 miesiące; karta podaje 1 miesiąc.
- en: NCHFP and FDA: cured meats have a short shelf life even in the freezer, because they are fatty and the curing salt hastens rancidity; FDA gives 1 month for bacon, FMI advises not freezing opened bacon and unopened at most 1 month; NCHFP allows at most 1–3 months; the card gives 1 month.
- Źródło (szczebel 1, sha12 152f7ddfcf54): NCHFP, Freezing Bacon; akapit 1–2 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-bacon/): „Cured meats have a short shelf life, even in the freezer, because of the high fat content and the development of rancid flavors. Rancidity develops even in the freezer and the presence of the curing salts hastens its development. | The Food Marketing Institute recommends that opened bacon not be frozen. Their recommendation is that unopened bacon only be frozen up to one month.”
- Źródło (szczebel 1, sha12 152f7ddfcf54): NCHFP, Freezing Bacon; akapit 5 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-bacon/): „Our maximum recommendation would be 1 to 3 months for bacon and cured meats.”
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Bacon & Sausage (https://www.fda.gov/media/74435/download): „Bacon 7 days 1 month”
- Uwaga: Wcześniej FRZ-058. Dotyczy boczku peklowanego (bacon). Wariant pork-belly-jowl-v15 („boczek mrożony”) nie mówi, czy to boczek surowy, czy peklowany/wędzony: surowy boczek to świeża wieprzowina (FDA: wieprzowina świeża, grupa A). Pytanie do roli 03 (C5-P1).

**SLO-424** (niekrytyczne; warianty: pork-belly-jowl-v15)

- pl: NCHFP: nieotwarty boczek owinąć w sklepowym opakowaniu grubą folią aluminiową albo innym materiałem do mrożenia, wypychając powietrze; jeśli trzeba zamrozić boczek otwarty, odłożyć porcję zaraz po otwarciu opakowania, szczelnie owinąć folią albo woreczkiem do mrożenia i szybko zamrozić do 0°F (-18°C) lub niżej.
- en: NCHFP: overwrap unopened bacon in its store package with heavy-duty foil or other freezer wrap, pushing out the air; if opened bacon must be frozen, set the portion aside as soon as the package is opened, wrap it airtight in freezer wrap or a bag and freeze quickly to 0°F (-18°C) or lower.
- Źródło (szczebel 1, sha12 152f7ddfcf54): NCHFP, Freezing Bacon; akapit 3–4 (https://nchfp.uga.edu/how/freeze/meat-and-poultry-products/freezing-bacon/): „To freeze unopened bacon, overwrap the store package with heavy duty foil or other freezer wrapping, being sure to push all the air out of the package and tightly close the wrapping around the inside package. | If you cannot use a full package and want to try freezing opened bacon for a very short time period, remove the portion you want to freeze from the package as soon as you open it, not after it has been in an open package for a while. Be sure to wrap the portion for freezing in heavy duty freezer plastic wrap or bags, making the package air-tight. Freeze quickly to a temperature of 0 degrees F. or lower.”
- Uwaga: Przeliczenie °C za FDA.

### D: ryby

**SLO-425** (niekrytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP i Clemson HGIC: ryby do mrożenia mają być jak najświeższe; umyć, oskrobać łuski od ogona do głowy tępą stroną noża, wypatroszyć, odciąć głowę i płetwę grzbietową, dokładnie umyć w zimnej bieżącej wodzie; duże ryby pokroić na steki grubości 3/4 cala (ok. 1,9 cm) albo filety.
- en: NCHFP and Clemson HGIC: fish for freezing should be as fresh as possible; wash, scale from tail to head with the dull edge of a knife, gut, remove the head and dorsal fin, and wash thoroughly in cold running water; cut large fish into 3/4-inch (about 1.9 cm) steaks or fillets.
- Źródło (szczebel 1, sha12 11fb66fed5a0): NCHFP, Freezing Fish; Preparation (https://nchfp.uga.edu/how/freeze/seafood-products/freezing-fish/): „Fish for freezing should be as fresh as possible. | Preparation - Wash fish, and remove scales by scraping fish gently from tail to head with the dull edge of a knife or spoon. … Wash fish thoroughly in cold running water. … For steaks, cut fish crosswise into ¾-inch thick steaks.”
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Fish (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Fish for freezing should be fresh as possible.”
- Uwaga: Wcześniej FRZ-059. Przeliczenie cm to rachunek JarAtlas. „¾” zapisane 3/4.

**SLO-426** (niekrytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP: ryby dzieli się na tłuste (cefal, makrela, pstrąg, tuńczyk, łosoś) i chude (flądra, dorsz, witlinek, kulbak, granik, lucjan, strzępiel i większość ryb słodkowodnych); tłuste przed mrożeniem można zanurzyć na 20 sekund w roztworze 2 łyżek krystalicznego kwasu askorbinowego na 1 kwartę zimnej wody (przeciw jełczeniu), chude na 20 sekund w solance z 1/4 szklanki soli na 1 kwartę zimnej wody (jędrność, mniejszy wyciek); przy glazurze cytrynowo-żelatynowej to zbędne.
- en: NCHFP: fish are fat (mullet, mackerel, trout, tuna, salmon) or lean (flounder, cod, whiting, redfish, croaker, snapper, grouper and most freshwater fish); before freezing, fat fish may be dipped for 20 seconds in a solution of 2 tablespoons crystalline ascorbic acid to 1 quart of cold water (against rancidity), lean fish for 20 seconds in a brine of 1/4 cup salt to 1 quart of cold water (firmness, less drip); not needed with a lemon-gelatin glaze.
- Źródło (szczebel 1, sha12 11fb66fed5a0): NCHFP, Freezing Fish; Pretreating (https://nchfp.uga.edu/how/freeze/seafood-products/freezing-fish/): „"Fat fish" includes varieties such as mullet, mackerel, trout, tuna and salmon. "Lean fish" includes flounder, cod, whiting, redfish, croaker, snapper, grouper, sheepshead and most freshwater fish. | Before freezing, fish can be pretreated to improve the quality of the stored fish. Fat fish should be dipped for 20 seconds in an ascorbic acid solution made from 2 tablespoons crystalline ascorbic acid to one quart of cold water to control rancidity and flavor change. Lean fish may be dipped for 20 seconds in a brine of ¼ cup salt to 1 quart of cold water to firm the fish and to decrease drip loss from thawing.”
- Uwaga: Polskie nazwy gatunków amerykańskich (redfish, croaker, grouper, sheepshead) przybliżone; do przeglądu roli 09. Clemson zalicza pstrąga do chudych w tabeli czasów, NCHFP do tłustych: sprzeczność odnotowana, przyjęto NCHFP (szczebel 1).

**SLO-427** (niekrytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP, glazura cytrynowo-żelatynowa: wymieszać 1/4 szklanki soku z cytryny i 1 3/4 szklanki wody; 1 saszetkę żelatyny bez smaku rozpuścić w 1/2 szklanki tej mieszaniny; pozostałe 1 1/2 szklanki zagotować, wmieszać rozpuszczoną żelatynę, ostudzić do temperatury pokojowej; zimną rybę zanurzyć, odsączyć, zapakować w materiał odporny na parę wodną, opisać i zamrozić.
- en: NCHFP, lemon-gelatin glaze: mix 1/4 cup lemon juice and 1 3/4 cups water; dissolve 1 packet of unflavored gelatin in 1/2 cup of this mixture; bring the remaining 1 1/2 cups to a boil, stir in the dissolved gelatin, cool to room temperature; dip the cold fish, drain, wrap in moisture-vapor resistant packaging, label and freeze.
- Źródło (szczebel 1, sha12 11fb66fed5a0): NCHFP, Freezing Fish; Lemon-Gelatin Glaze (https://nchfp.uga.edu/how/freeze/seafood-products/freezing-fish/): „To prepare glaze, mix ¼ cup of lemon juice and 1¾ cups of water. Dissolve one packet of unflavored gelatin in ½ cup of the lemon juice-water mixture. Heat the remaining 1½ cups of liquid to boiling. Stir the dissolved gelatin mixture into the boiling liquid. Cool to room temperature. When cool, dip the cold fish into the lemon-gelatin glaze and drain. Wrap the fish in moisture-vapor resistant packaging, label and freeze.”
- Uwaga: Ułamki „¼, 1¾, ½, 1½” zapisane 1/4, 1 3/4, 1/2, 1 1/2.

**SLO-428** (niekrytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP, glazura lodowa: rybę bez opakowania zamrozić, zanurzyć w wodzie z lodem bliskiej zamarzania, na kilka minut włożyć do zamrażarki i powtarzać, aż powstanie równa warstwa lodu, potem zapakować, opisać i zamrozić; zamrażanie ryby w bloku wody daje gorszą jakość niż glazury.
- en: NCHFP, ice glaze: freeze the unwrapped fish, dip it in near-freezing ice water, return it to the freezer for a few minutes and repeat until a uniform cover of ice forms, then wrap, label and freeze; freezing fish in a block of ice gives poorer quality than the glaze methods.
- Źródło (szczebel 1, sha12 11fb66fed5a0): NCHFP, Freezing Fish; Ice Glaze; Water (https://nchfp.uga.edu/how/freeze/seafood-products/freezing-fish/): „Ice Glaze - Place unwrapped fish in the freezer to freeze. As soon as it is frozen, dip fish in near-freezing ice water. Place fish again in the freezer a few minutes to harden the glaze. Take fish out, and repeat the glazing until a uniform cover of ice is formed. … Freezing fish in a block of ice will produce a poorer quality product than using the glaze methods.”

**SLO-429** (niekrytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: NCHFP: ikrę dokładnie umyć i zapakować do pojemników albo woreczków do mrożenia z wolną przestrzenią 1/4 cala (ok. 0,6 cm), zamknąć i zamrozić.
- en: NCHFP: wash fish roe thoroughly and package it in freezer containers or bags with 1/4-inch (about 0.6 cm) headspace, seal and freeze.
- Źródło (szczebel 1, sha12 11fb66fed5a0): NCHFP, Freezing Fish; FISH ROE (https://nchfp.uga.edu/how/freeze/seafood-products/freezing-fish/): „FISH ROE - Thoroughly wash and package in freezer containers or bags and boxes, leaving ¼-inch headspace. Seal and freeze.”
- Uwaga: Przeliczenie cm to rachunek JarAtlas.

**SLO-430** (niekrytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: Czasy w zamrażarce dla jakości, ryby: NCHFP podaje 3–6 miesięcy; FDA podaje ryby chude 6–8 miesięcy, tłuste 2–3 miesiące, gotowane 4–6 miesięcy, wędzone 2 miesiące; karta podaje ryby tłuste 2–3 miesiące, chude 3–6 miesięcy.
- en: Freezer times for quality, fish: NCHFP gives 3–6 months; FDA gives lean fish 6–8 months, fatty fish 2–3 months, cooked fish 4–6 months, smoked fish 2 months; the card gives fatty fish 2–3 months, lean fish 3–6 months.
- Źródło (szczebel 1, sha12 3c65dd5e9cbd): NCHFP, How Long Can I Store Frozen Foods; tabela (https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/): „Fish 3 - 6”
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Fish & Shellfish (https://www.fda.gov/media/74435/download): „Lean fish 1 - 2 days 6 - 8 months … Fatty fish 1 - 2 days 2 - 3 months … Cooked fish 3 - 4 days 4 - 6 months … Smoked fish 14 days 2 months”
- Uwaga: Sprzeczność na szczeblu 1 (jakość): karta bierze dla każdego rodzaju wartość krótszą (decyzja C5-D2). Clemson: chude 6, tłuste 3 miesiące, zgodne z przedziałem.

**SLO-431** (krytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: FDA: owoce morza po zakupie od razu włożyć na lód, do lodówki albo zamrażarki; jeśli będą użyte w ciągu 2 dni, trzymać w czystej lodówce w 40°F (ok. 4°C) lub niżej; inaczej szczelnie owinąć folią spożywczą, aluminiową albo papierem odpornym na wilgoć i zamrozić.
- en: FDA: put seafood on ice, in the refrigerator or in the freezer soon after buying it; if it will be used within 2 days, keep it in a clean refrigerator at 40°F (about 4°C) or below; otherwise wrap it tightly in plastic, foil or moisture-proof paper and freeze it.
- Źródło (szczebel 1, sha12 3d409e5d3cd0): FDA, Selecting and Serving Fresh and Frozen Seafood Safely; Storage (https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely): „Put seafood on ice or in the refrigerator or freezer soon after buying it. If seafood will be used within 2 days after purchase, store it in a clean refrigerator at a temperature of 40°F or below. … Otherwise, wrap it tightly in plastic, foil, or moisture-proof paper and store it in the freezer.”
- Uwaga: Przeliczenie °C to rachunek JarAtlas.

**SLO-432** (krytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: FDA: rozmrażać owoce morza stopniowo w lodówce przez noc; szybciej: w szczelnym woreczku zanurzonym w zimnej wodzie albo, jeśli zaraz będą gotowane, w mikrofalówce w trybie rozmrażania, przerywając, gdy ryba jest jeszcze oszroniona, ale giętka.
- en: FDA: thaw seafood gradually in the refrigerator overnight; faster: in a sealed plastic bag immersed in cold water or, if it will be cooked immediately, in the microwave on the defrost setting, stopping while the fish is still icy but pliable.
- Źródło (szczebel 1, sha12 3d409e5d3cd0): FDA, Selecting and Serving Fresh and Frozen Seafood Safely; Thawing (https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely): „Thaw frozen seafood gradually by placing it in the refrigerator overnight. If you have to thaw seafood quickly, either seal it in a plastic bag and immerse it in cold water, or - if the food will be cooked immediately thereafter - microwave it on the "defrost" setting and stop the defrost cycle while the fish is still icy but pliable.”

**SLO-433** (krytyczne; warianty: sea-fish-v17, freshwater-fish-v12)

- pl: FDA: niektóre gatunki ryb mogą zawierać pasożyty, a mrożenie zabija obecne pasożyty, ale nie wszystkie szkodliwe drobnoustroje; dlatego najbezpieczniej jest owoce morza ugotować.
- en: FDA: some species of fish can contain parasites, and freezing kills any parasites present, but not all harmful germs; that is why cooking seafood is the safest route.
- Źródło (szczebel 1, sha12 3d409e5d3cd0): FDA, Selecting and Serving Fresh and Frozen Seafood Safely; Cooking/Freezing (https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely): „Some species of fish can contain parasites, and freezing will kill any parasites that may be present. | However, be aware that freezing doesn't kill all harmful germs. That's why the safest route is to cook your seafood.”
- Uwaga: Strona FDA nie podaje temperatury ani czasu mrożenia, które zabijają pasożyty, ani nie mówi, że domowa zamrażarka 0°F wystarcza. Do kart tylko druga część (najbezpieczniej ugotować); bez zdania, że domowo mrożoną rybę można jeść na surowo (decyzja C5-D6, pytanie do eksperta C5-P2).

### E: owoce morza (bez wariantu)

**SLO-434** (krytyczne; jedno źródło; warianty: brak, w zapasie)

- pl: Clemson HGIC: ostrygi w muszlach mrozić tylko żywe (żywa ostryga trzyma muszlę mocno zamkniętą albo zamyka ją po stuknięciu); martwe wyrzucić; przegrzebki mają być żywe do wyłuskania; wyłuskane ostrygi z płynem i przegrzebki pakować z wolną przestrzenią 1/2 cala (ok. 1,3 cm); mrożenie zmienia strukturę i smak ostryg.
- en: Clemson HGIC: freeze oysters in the shell only live (a live oyster keeps its shell tightly closed or closes it when tapped); discard dead ones; scallops should be live until shucked; pack shucked oysters with their liquor and scallops with 1/2-inch (about 1.3 cm) headspace; freezing changes the texture and flavor of oysters.
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Oysters; Scallops (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Oysters: Oysters that are still in the shell should only be frozen live. A live oyster will keep its shell tightly closed or will close when tapped. … First, wash the oyster shells, discarding any that have died. … Place oysters and liquor in a plastic container or freezer bag, leaving ½-inch headspace. Seal and freeze. | Note: Freezing does change the texture and flavor of oysters. … Scallops: Scallops for freezing should be live until shucked.”
- Uwaga: Jedno źródło szczebla 3. Katalog nie ma wariantu mrożenia owoców morza; twierdzenie w zapasie.

**SLO-435** (niekrytyczne; warianty: brak, w zapasie)

- pl: Clemson HGIC: krewetki do mrożenia świeże, dobrej jakości; najdłuższa trwałość i najlepsza jakość: surowe, bez głów, w pancerzykach; surowe umyć i odsączyć, ugotowane szybko schłodzić; pakować z wolną przestrzenią 1/4 cala (ok. 0,6 cm). FDA: świeże krewetki, przegrzebki, raki i kalmary 3–6 miesięcy (jakość).
- en: Clemson HGIC: shrimp for freezing should be fresh and high quality; longest storage life and best quality: raw, heads removed, shells on; wash and drain raw shrimp, chill cooked shrimp quickly; package with 1/4-inch (about 0.6 cm) headspace. FDA: fresh shrimp, scallops, crawfish and squid 3–6 months (quality).
- Źródło (szczebel 3, sha12 39b6d9e89ee2): Clemson HGIC 3064, Freezing Meats & Seafood (upd. 2012); Shrimp (https://hgic.clemson.edu/factsheet/freezing-meats-seafood/): „Shrimp: Select high-quality, fresh shrimp for freezing. … For maximum storage life and quality, freeze shrimp raw, with heads removed, but shells still on. … Be sure to wash and drain the shrimp if frozen uncooked. Quickly chill cooked shrimp before freezing. Package in freezer containers or bags, leaving ¼-inch headspace.”
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Fish & Shellfish (https://www.fda.gov/media/74435/download): „Fresh shrimp, scallops, … crawfish, squid 1 - 2 days 3 - 6 months”
- Uwaga: Katalog nie ma wariantu; w zapasie. Wiersz FDA łamie się na dwie linie (fragmenty osobno).

### F: jaja

**SLO-436** (krytyczne; warianty: eggs-v11)

- pl: FDA: jaj w skorupkach ani jaj ugotowanych na twardo nie mrozić; surowe żółtka i białka można przechowywać w zamrażarce 1 rok (jakość). NCHFP: jaja wytrzymują w lodówce, przykryte, co najmniej 1 miesiąc, więc mrożenie zwykle nie jest potrzebne.
- en: FDA: do not freeze eggs in the shell or hard-cooked eggs; raw yolks and whites keep in the freezer for 1 year (quality). NCHFP: covered eggs keep in the refrigerator for at least 1 month, so freezing is usually unnecessary.
- Źródło (szczebel 1, sha12 f987330d7e8a): FDA, Refrigerator & Freezer Storage Chart (PDF, March 2018); tabela, Eggs (https://www.fda.gov/media/74435/download): „Fresh, in shell 3 - 5 weeks Don't freeze … Raw yolks, whites 2 - 4 days 1 year … Hard cooked 1 week Don't freeze”
- Źródło (szczebel 1, sha12 e591e375f289): NCHFP, Freezing Eggs; akapit 1 (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/): „Eggs can be stored for at least 1 month, covered in the refrigerator. Freezing is often unnecessary, but it can be done.”
- Uwaga: Wcześniej FRZ-060. FDA w lodówce podaje 3–5 tygodni dla jaj w skorupkach, NCHFP „co najmniej 1 miesiąc”: część wspólna ok. 1 miesiąc; liczba lodówkowa nie trafia do karty mrożenia bez decyzji roli 03.

**SLO-437** (krytyczne; warianty: eggs-v11)

- pl: NCHFP: do mrożenia wybierać świeże jaja; każde rozbić osobno na czysty spodek, sprawdzić świeżość i usunąć kawałki skorupki, zanim połączy się je z innymi.
- en: NCHFP: select fresh eggs for freezing; break each one separately into a clean saucer, check it for freshness and remove any pieces of shell before mixing it with other eggs.
- Źródło (szczebel 1, sha12 e591e375f289): NCHFP, Freezing Eggs; Preparation (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/): „Preparation - Select fresh eggs and break each separately into a clean saucer. Examine each for freshness and remove any pieces of shell before mixing with other eggs.”

**SLO-438** (niekrytyczne; warianty: eggs-v11)

- pl: NCHFP, całe jaja: dokładnie wymieszać żółtka z białkami, nie ubijać powietrza; żeby żółtka nie stały się ziarniste, dodać na szklankę jaj 1 1/2 łyżki cukru, 1 1/2 łyżki syropu kukurydzianego albo 1/2 łyżeczki soli, zależnie od przeznaczenia; przetrzeć przez sito, pakować z wolną przestrzenią 1/2 cala (ok. 1,3 cm), zamknąć i zamrozić; w foremce do lodu 3 łyżki masy (1 kostka) to 1 jajo.
- en: NCHFP, whole eggs: mix yolks and whites thoroughly, do not whip in air; to prevent graininess of the yolks add 1 1/2 tablespoons sugar, 1 1/2 tablespoons corn syrup or 1/2 teaspoon salt per cup of eggs, depending on intended use; strain through a sieve, package with 1/2-inch (about 1.3 cm) headspace, seal and freeze; in an ice tray 3 tablespoons of mixture (1 cube) equal 1 egg.
- Źródło (szczebel 1, sha12 e591e375f289): NCHFP, Freezing Eggs; WHOLE EGGS (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/): „WHOLE EGGS - Thoroughly mix yolks and whites. Do not whip in air. To prevent graininess of the yolks, add 1-½ tablespoons sugar, 1-½ tablespoons corn syrup OR ½ teaspoon salt per cup whole eggs, depending on intended use. Strain through a sieve or colander to improve uniformity. Package, allowing ½-inch headspace. Seal and freeze.”
- Źródło (szczebel 1, sha12 e591e375f289): NCHFP, Freezing Eggs; WHOLE EGGS, ice trays (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/): „Three tablespoons of the egg mixture (one cube) equal one whole egg.”
- Uwaga: „1-½” zapisane 1 1/2. Przeliczenie cm to rachunek JarAtlas. Dopisek na opakowaniu (sól albo cukier) to dobra praktyka, nie twierdzenie źródła: do decyzji roli 03.

**SLO-439** (niekrytyczne; warianty: eggs-v11)

- pl: NCHFP, żółtka: delikatnie wymieszać, dodać na szklankę żółtek 1 1/2 łyżki cukru, 1 1/2 łyżki syropu kukurydzianego albo 1/2 łyżeczki soli, przetrzeć przez sito, pakować z wolną przestrzenią 1/2 cala (ok. 1,3 cm); 1 łyżka masy to 1 żółtko. Białka: delikatnie wymieszać bez ubijania, przetrzeć, bez cukru i soli, ta sama wolna przestrzeń; 2 łyżki to 1 białko.
- en: NCHFP, yolks: stir gently, add 1 1/2 tablespoons sugar, 1 1/2 tablespoons corn syrup or 1/2 teaspoon salt per cup of yolks, strain through a sieve, package with 1/2-inch (about 1.3 cm) headspace; 1 tablespoon of mixture equals 1 yolk. Whites: mix gently without whipping, strain, no sugar or salt, the same headspace; 2 tablespoons equal 1 white.
- Źródło (szczebel 1, sha12 e591e375f289): NCHFP, Freezing Eggs; EGG YOLKS (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/): „EGG YOLKS - Separate eggs. Stir yolks gently. To prevent graininess, add 1-½ tablespoons sugar, 1-½ tablespoons corn syrup OR ½ teaspoon salt per cup of egg yolks, depending on intended use. Strain through a sieve. Package, allowing ½-inch headspace. Seal and freeze. One tablespoon of the yolk mixture equals one egg yolk.”
- Źródło (szczebel 1, sha12 e591e375f289): NCHFP, Freezing Eggs; EGG WHITES (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-eggs/): „EGG WHITES - Gently mix whites; do not whip. Strain through a sieve. No sugar or salt is needed. Package, leaving ½-inch headspace. Seal and freeze. Two tablespoons of the egg-white mixture equal one egg white.”

### G: nabiał (masło, ser, mleko)

**SLO-440** (niekrytyczne; warianty: butter-whey-cheese-v13)

- pl: NCHFP i Clemson HGIC: mrozić tylko masło dobrej jakości z pasteryzowanej śmietanki; uformować kostki albo porcje i szczelnie owinąć folią aluminiową, folią przezroczystą albo papierem do mrożenia, albo zamknąć w pojemnikach odpornych na parę wodną (chroni przed obcymi zapachami i oparzeliną); oryginalne opakowanie można owinąć dodatkowo; w 0°F (-18°C) lub niżej zalecana trwałość 6–9 miesięcy.
- en: NCHFP and Clemson HGIC: freeze only high-quality butter made from pasteurized cream; shape it into squares or portions and wrap tightly in aluminum foil, transparent film or freezer paper, or seal in moisture-vapor resistant containers (protects from other odors and freezer burn); the original carton can be overwrapped; at 0°F (-18°C) or lower the recommended shelf life is 6–9 months.
- Źródło (szczebel 1, sha12 efc4c4e42429): NCHFP, Freezing Butter; akapit 1 (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-butter/): „Freeze only high quality butter made from pasteurized cream. Mold into squares, patties or other desired shapes, and wrap tightly in aluminum foil, transparent film or freezer paper, or seal in moisture-vapor resistant containers. | Recommended freezer shelf life: 6 to 9 months”
- Źródło (szczebel 3, sha12 ae41b3e9048a): Clemson HGIC, Safe Handling of Milk & Dairy Products; Butter (https://hgic.clemson.edu/factsheet/safe-handling-of-milk-dairy-products/): „To store butter in the freezer, wrap it in moisture- and vapor-proof freezer packaging material to keep the butter from absorbing odors from other foods and to prevent freezer burn. Butter in its original carton can be overwrapped.”
- Uwaga: Wcześniej FRZ-054. Masło domowe z niepasteryzowanej śmietanki nie jest objęte (NCHFP: tylko z pasteryzowanej); dotyczy też domowego masła z wariantów butter-whey-cheese (pytanie do roli 03, C5-P3).

**SLO-441** (niekrytyczne; warianty: aged-hard-cheese-v16)

- pl: NCHFP: ser najlepiej trzyma się w lodówce; w razie potrzeby ser twardy albo półtwardy można zamrozić w kawałkach zapakowanych w materiał odporny na parę wodną; po zamrożeniu może się kruszyć i stać się mączysty, ale zachowa smak; zalecana trwałość w zamrażarce 6 miesięcy (twardy, np. cheddar, szwajcarski; miękki, np. brie).
- en: NCHFP: cheese keeps best in the refrigerator; if necessary, hard or semi-hard cheese can be frozen in pieces packaged in moisture-vapor resistant material; it may become crumbly and mealy when frozen but will keep its flavor; recommended freezer shelf life 6 months (hard, e.g. cheddar, Swiss; soft, e.g. Brie).
- Źródło (szczebel 1, sha12 92d75927a888): NCHFP, Freezing Cheese; akapit 1 (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-cheese/): „Cheese keeps best in the refrigerator. If necessary, hard or semi-hard cheese can be frozen if cut in … packaged in moisture-vapor resistant material. This cheese may become crumbly and mealy when frozen, but will retain its flavor. | Recommended freezer shelf life: | Hard cheese (such as cheddar and Swiss), 6 months | Soft cheese (such as Brie), 6 months”
- Uwaga: Wcześniej FRZ-055. Rozmiar kawałków w źródle zapisany niejednoznacznie („1-1/2- to 1-pound sizes”, prawdopodobnie 1/2–1 funta): pominięty, pytanie C5-P4. „Swiss” to rodzaj sera, nie kraj; nazwa w pl małą literą.

**SLO-442** (niekrytyczne; warianty: aged-hard-cheese-v16, butter-whey-cheese-v13)

- pl: NCHFP: twarożek (cottage), ricotta i serek śmietankowy źle znoszą mrożenie; serek śmietankowy wymieszany z gęstą śmietanką można zamrozić do późniejszego użycia w dipach albo polewach. Clemson HGIC: jogurtu, śmietany kwaśnej, maślanki i śmietanki słodkiej nie mrozić (zmiana struktury, rozwarstwienie tłuszczu).
- en: NCHFP: cottage cheese, ricotta and cream cheese do not freeze well; cream cheese combined with heavy cream can be frozen for later use in dips or icing. Clemson HGIC: do not freeze yogurt, sour cream, buttermilk or sweet cream (change of texture, separation of fat emulsion).
- Źródło (szczebel 1, sha12 92d75927a888): NCHFP, Freezing Cheese; akapit 2 (https://nchfp.uga.edu/how/freeze/dairy-products/freezing-cheese/): „Cream cheese, cottage cheese and ricotta cheese do not freeze well. However, if combined with heavy cream, cream cheese can be frozen for later use in dips or as icing on frozen sandwich loaves.”
- Źródło (szczebel 3, sha12 ae41b3e9048a): Clemson HGIC, Safe Handling of Milk & Dairy Products; tabela (https://hgic.clemson.edu/factsheet/safe-handling-of-milk-dairy-products/): „Sweet and Regular Cream … Do not freeze. (Change of texture, body appearance. Separation of fat emulsion.)”
- Źródło (szczebel 3, sha12 ae41b3e9048a): Clemson HGIC, Safe Handling of Milk & Dairy Products; Yogurt (https://hgic.clemson.edu/factsheet/safe-handling-of-milk-dairy-products/): „Freezing yogurt is not recommended because of the variable results in texture.”
- Uwaga: Jakość, nie bezpieczeństwo. W katalogu nie ma wariantów mrożenia tych produktów: twierdzenie ogranicza zakres kart (czego nie proponować). Komórki tabeli Clemson (Cultured Buttermilk, Sour Cream: „Do not freeze.”) sprawdzone w tekście, cytat skrócony.

**SLO-443** (niekrytyczne; warianty: brak, w zapasie)

- pl: Clemson HGIC: pasteryzowane mleko pełne albo odtłuszczone można trzymać w zamrażarce 3 miesiące; mrożenie może zmienić strukturę; rozmrażać w lodówce. NCHFP: masło, jaja, mleko i ser rozmrażać w lodówce, potem używać jak świeżych; rozmrożoną śmietankę przed użyciem lekko wymieszać.
- en: Clemson HGIC: pasteurized whole or skimmed milk can be kept in the freezer for 3 months; freezing may change the texture; thaw in the refrigerator. NCHFP: butter, eggs, milk and cheese are thawed in the refrigerator and then used as fresh; thawed cream is mixed slightly before use.
- Źródło (szczebel 3, sha12 ae41b3e9048a): Clemson HGIC, Safe Handling of Milk & Dairy Products; tabela (https://hgic.clemson.edu/factsheet/safe-handling-of-milk-dairy-products/): „Pasteurized Fresh Whole or Skimmed Milk … 3 months. Freezing may result in change in texture. Thaw in refrigerator.”
- Źródło (szczebel 1, sha12 6327220daefa): NCHFP, Thawing and Preparing Foods for Serving; Butter, Eggs, Milk and Cheese (https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/): „Butter, Eggs, Milk and Cheese - Place the frozen product in the refrigerator to thaw. After thawing, it can be used as fresh. | Cream - Thaw the same as butter, but before using the thawed cream, it should be mixed or blended slightly.”
- Uwaga: Czas dla mleka: jedno źródło szczebla 3. Sprzeczność z Clemson (śmietanka „Do not freeze”) a NCHFP (instrukcja rozmrażania śmietanki): rozstrzygnięcie ostrożne — karta nie proponuje mrożenia śmietanki (C5-D7). Katalog nie ma wariantu mrożenia mleka; twierdzenie w zapasie i do rozmrażania masła, sera i jaj.

## 5. Decyzje (do weta: wpis `2026-11-02-jaratlas-06-c5-mrozenie-zwierzece`)

- **C5-D1** (analogia): FSIS (fsis.usda.gov) i FoodSafety.gov odpowiadają dziś „Access Denied” (HTTP 403, Akamai) na każdą ścieżkę, także robots.txt i PDF; blokady nie obchodzę. Szczebel 1 dają NCHFP i FDA (tabela Refrigerator & Freezer Storage Chart, PDF), drugie źródła extension. Twierdzeń „według FSIS” nie ma; Penn State powołuje się na FSIS, ale liczy się jako Penn State (szczebel 3). Podstawa: trening docs/research/26-grafiki-i-wskazowki.md:49 (403 → pytanie otwarte, źródło chronione); docs/research/33-wskazowki-partia2.md:22–24 (niedostępne nie jest źródłem).
- **C5-D2** (analogia + decyzja Claude): Czasy przechowywania w zamrażarce (jakość) z dwóch źródeł szczebla 1 różnią się (drób NCHFP 6–9 mies. vs FDA 9–12; ryby NCHFP 3–6 vs FDA chude 6–8, tłuste 2–3): twierdzenie pokazuje obie wartości, karta bierze krótszą dla danego rodzaju. Podstawa: trening CLAUDE.md:122 (sprzeczność na tym samym szczeblu: część wspólna i różnica); wybór krótszej wartości: decyzja Claude, do weta.
- **C5-D3** (decyzja Claude, do weta): Czas poza lodówką: NCHFP „2 to 4 hours” vs FDA 2 godziny (1 godzina powyżej 90°F). Przyjęte FDA (krótsze). Podstawa: zasada zlecenia: przy bezpieczeństwie żywności wariant ostrożniejszy.
- **C5-D4** (decyzja Claude, do weta): Ponowne mrożenie surowych produktów zwierzęcych: reguła ostrożna (bez gotowania tylko po rozmrożeniu w lodówce i w ciągu 1–2 dni; po zimnej wodzie albo mikrofali najpierw ugotować; ponad 2 godziny w strefie zagrożenia: wyrzucić) zamiast szerszego warunku NCHFP FAQ (SLO-291). Granica 1–2 dni (Penn State) zamiast 3–4 dni (UMN). Clemson „How to Thaw Food Safely” mówi jeszcze ostrzej („once food is thawed, it should be fully cooked if intended for refreezing”), ale przeczy mu Clemson HGIC 3064 i Penn State; nie przyjęte. Podstawa: brak pełnej analogii w trening.
- **C5-D5** (decyzja Claude, do weta): Awaria zamrażarki: zostaje FDA (SLO-259: pełna ok. 48 godzin, pół pełna 24 godziny); zdanie NCHFP FAQ „two to four days” dla pełnej zamrażarki nie trafia do twierdzenia SLO-410. Podstawa: zasada zlecenia: wariant ostrożniejszy.
- **C5-D6** (decyzja Claude, do weta): Pasożyty: karty mrożenia nie obiecują, że domowe mrożenie odpasożyca mięso ani rybę (Clemson: nie polegać na domowym mrożeniu przeciw włośniom; FDA nie podaje parametrów). Twierdzenie FDA o rybach tylko z zastrzeżeniem: do karty część „najbezpieczniej ugotować”. Podstawa: zasada zlecenia: wariant ostrożniejszy.
- **C5-D7** (decyzja Claude, do weta): Śmietanka: Clemson „Do not freeze”, NCHFP podaje, jak ją rozmrozić. Karta nie proponuje mrożenia śmietanki, jogurtu, śmietany kwaśnej, maślanki, twarożku. Podstawa: zasada zlecenia: wariant ostrożniejszy (tu jakość).
- **C5-D8** (decyzja Claude, do weta): Warianty butter-whey-cheese-v05 i v06 (masła smakowe, processFamilyId oil-and-fat, preservationMethod freezer, ryzyko-wysokie) poza zakresem C5: należą do bloku olejów i tłuszczów (OLE). Twierdzenie masła SLO-440 można dołączyć tylko w części „pakowanie”, po decyzji toru OLE. Podstawa: zakres zlecenia: warianty freezing.
- **C5-D9** (fakt): Numeracja: 44 twierdzenia SLO-400–443 (rezerwacja SLO-400–449); SLO-444–449 wolne. Brak kolizji: rejestr.json na main kończy SLO na 350; git grep SLO-40x–44x na origin/main i wszystkich origin/claude/*: 0 trafień. Podstawa: rezerwacja ID w zleceniu.

## 6. Pytania otwarte

- **C5-P1** `[DO USTALENIA]`: pork-belly-jowl-v15 „boczek mrożony”: surowy boczek (świeża wieprzowina) czy peklowany/wędzony (bacon)? Od tego zależy czas (FDA świeża wieprzowina vs bacon 1 miesiąc). Rola 03.
- **C5-P2** `[DO USTALENIA]`: Czy JarAtlas mówi cokolwiek o mrożeniu ryb przed jedzeniem na surowo (sushi, śledź marynowany)? Wymaga źródła z parametrami (np. FDA Food Code) i przeglądu eksperta (D-027 d). Na razie: nie.
- **C5-P3** `[DO USTALENIA]`: Masło domowe z wariantów butter-whey-cheese: z pasteryzowanej śmietanki? NCHFP każe mrozić tylko takie. Rola 03.
- **C5-P4** `[DO USTALENIA]`: NCHFP Freezing Cheese: „cut in 1-1/2- to 1-pound sizes” — niejednoznaczne (prawdopodobnie 1/2–1 funta). Do potwierdzenia w „So Easy to Preserve” (wyd. 6) albo innym źródle; do tego czasu karta bez rozmiaru.
- **C5-P5** `[DO USTALENIA]`: FSIS i FoodSafety.gov (Cold Food Storage Chart, Big Thaw, Freezing and Food Safety): do odczytu, gdy host odpowie (inna sieć albo właściciel z przeglądarki). Do tego czasu twierdzenia stoją na NCHFP i FDA.
