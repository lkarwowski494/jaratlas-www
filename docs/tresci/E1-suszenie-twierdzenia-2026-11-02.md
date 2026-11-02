# E1 suszenie: propozycje twierdzeń do rejestru (tor B4, 2026-11-02)

- Rola 06-tresci, build, tryb bez właściciela. Gałąź `claude/jaratlas-b4-suszenie-zrodla` od `main` = 0492e36. Zakres: tylko ten plik i `E1-suszenie-twierdzenia-2026-11-02.json`. Rejestr, karty i katalog bez zmian; wkleja tor A.
- Wejście: `E1-suszenie-wzor-2026-11-02.md` (luki C2-01, C2-02, C2-03; partie S1–S6), `rejestr.json` (SUS-001–061).
- Format JSON: pola rejestru plus `twierdzenie_en`, `luka`, `partie`, `warianty`, `uwaga`, `jednoZrodlo`. `status: robocze`, `przeglad: null`: przegląd zastępczy (D-027) po wklejeniu robi tor A.
- Cytaty: fragmenty rozdzielone „ | ” stoją w tekście kolejno (zdania albo komórki wiersza tabeli), „ … ” to przerwa (decyzja B4-D7).

## 1. Wynik

| Partia | Twierdzeń (z wspólnymi) | Nowe produktowe |
|---|---|---|
| S1 | 15 | SUS-076–086 |
| S2 | 28 | SUS-087–099, 122 |
| S3 | 20 | SUS-100–104 |
| S4 | 14 | SUS-103, 122 |
| S5 | 19 | SUS-105–114, 121 |
| S6 | 19 | SUS-105–107, 114–121 |

Razem 61 nowych twierdzeń (SUS-062–SUS-122) i uzupełnienie SUS-001 (C2-02). Krytycznych: 41. Ze źródłem szczebla 1: 14; tylko szczebel 3, jedno źródło: 43.

Kontrole (dowód):
- 61 cytatów i 4 nowe źródła SUS-001 są dosłownie w tekście stron pobranych dziś `curl` (skrypt: tekst z HTML, normalizacja spacji i cudzysłowów; każdy ciągły fragment osobno). Wynik: 0 braków.
- Test mutacji: zmiana „(6-10 hours)” na „(6-12 hours)” w cytacie SUS-096 daje 1 błąd.
- Przekład: `tools/i18n/niezmienniki.mjs` `porownaj(en, pl)` na 61 parach i SUS-001: 0 różnic (liczby, jednostki, symbole, nazwy).
- Kolizje ID: `rejestr.json` na main kończy się na SUS-061 (SUS-049 nieużyte); `git grep` SUS-062+ na wszystkich gałęziach origin: 0 trafień.
- Clemson HGIC dziś odpowiada (w C2-10 był zablokowany). Cytaty rejestru z Clemson SUS-006, 009, 021, 039, 040 sprawdzone dosłownie: 5/5. To zdejmuje warunek C2-10 dla S7 i S8 w części Clemson.

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Klucz | HTTP | sha12 | Adres |
|---|---|---|---|
| nchfp-dfv | 200 | 08c54432ef13 | https://nchfp.uga.edu/how/dry/drying-general/drying-fruits-and-vegetables/ |
| nchfp-deh | 200 | db658d6f462e | https://nchfp.uga.edu/how/dry/drying-general/food-dehydrators/ |
| nchfp-pack | 200 | 75962a5bab35 | https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/ |
| nchfp-herbs | 200 | 891cd52886ed | https://nchfp.uga.edu/how/dry/recipes/herbs/ |
| nchfp-pump | 200 | 3382cf0ae73e | https://nchfp.uga.edu/how/dry/recipes/pumpkin-seeds/ |
| nchfp-vine | 200 | 868c5c35a253 | https://nchfp.uga.edu/how/dry/drying-general/vine-drying/ |
| nchfp-leath | 200 | 7aa68d2acbf5 | https://nchfp.uga.edu/how/dry/recipes/fruit-leathers/ |
| nchfp-dry | 200 | 4a1751e799b3 | https://nchfp.uga.edu/how/dry/ |
| csu-fruit | 200 | 99cc1ffd7735 | https://extension.colostate.edu/resource/drying-fruits/ |
| csu-veg | 200 | 3f112e49d126 | https://extension.colostate.edu/resource/drying-vegetables/ |
| msu-veg | 200 | 46c6b0ec59e8 | https://extension-store.montana.edu/montguides/drying-vegetables |
| nchfp-es | 200 | 144efd35a82a | https://nchfp.uga.edu/how/dry/drying-general/el-secado-de-frutas-y-vegetales-deshidratacion-spanish/ |
| nchfp-vleath | 200 | 9c3316eb8ac4 | https://nchfp.uga.edu/how/dry/recipes/vegetable-leathers/ |
| nchfp-sun | 200 | 0fb6ba935d3f | https://nchfp.uga.edu/how/dry/drying-general/sun-drying/ |
| psu-dfv | 200 | ff5144006bb6 | https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration |
| umn-dry | 404 | cc6c3d84b4ef | https://extension.umn.edu/preserving-and-preparing/drying-fruits-and-vegetables |
| umn-dry2 | 200 | 8df51af6207d | https://extension.umn.edu/preserving-and-preparing/drying-food |
| msu-fruit | 200 | 4c51fce34c78 | https://extension-store.montana.edu/montguides/drying-fruits |
| clemson-fruit | 200 | a0d0fc66f6ae | https://hgic.clemson.edu/factsheet/drying-fruits/ |
| usu-fruit | 200 | 9f353c54c88d | https://extension.usu.edu/preserve-the-harvest/research/drying-fruits |
| clemson-veg | 200 | eace82301a19 | https://hgic.clemson.edu/factsheet/drying-vegetables/ |

Strony bez cytatu w tym pliku: `nchfp-dfv`, `nchfp-deh`, `nchfp-leath`, `nchfp-dry`, `nchfp-es`, `umn-dry` (HTTP 404), `umn-dry2`, `usu-fruit`, `clemson-veg`. Z nich: `nchfp-dfv` odsyła po procedury do CSU i MSU, `nchfp-es` do Penn State, `clemson-veg` posłużył do ponownego odczytu SUS-021, 039, 040; `umn-dry` i `usu-fruit` to strony 404; fcs.uga.edu odrzucone przez błąd certyfikatu TLS (bez pliku). Szczeble: NCHFP 1; CSU, MSU, Penn State, Clemson 3 (extension, jak w rejestrze).

## 3. C2-02: źródło dla SUS-001 w odniesieniu do warzyw

Obecnie: „Suszarki domowe są projektowane do szybkiego suszenia w 140°F (60°C); owoce suszy się w piekarniku lub suszarce w 140°F (60°C).”

Propozycja pl: „Suszarki domowe są projektowane do szybkiego suszenia w 140°F (60°C); owoce i warzywa suszy się w suszarce lub piekarniku w 140°F (60°C).”

Propozycja en: „Home dehydrators are designed to dry food quickly at 140 °F (60 °C); fruit and vegetables are dried in a dehydrator or oven at 140 °F (60 °C).”

Werdykt: dosłownego zdania szczebla 1 o temperaturze suszenia warzyw w kawałkach nie znalazłem (NCHFP „Drying Fruits and Vegetables” nie ma własnej procedury, odsyła do CSU i MSU). Szczebel 1 daje 140ºF dla skór warzywnych i nakaz suszenia warzyw w piekarniku lub suszarce; liczbę dla warzyw w kawałkach daje MSU (strona wskazana przez NCHFP, recenzowana przez dyrektora NCHFP) i CSU. Propozycja: dopisać źródła niżej (decyzja B4-D6).

| Źródło | Szczebel | Cytat | sha12 |
|---|---|---|---|
| NCHFP, Vegetable Leathers; Pumpkin Leather; Mixed Vegetable Leather; Tomato Leather (https://nchfp.uga.edu/how/dry/recipes/vegetable-leathers/) | 1 | „Spread on a cookie sheet or tray lined with plastic wrap. Dry at 140ºF.” | 9c3316eb8ac4 |
| NCHFP, Sun Drying; akapit 1 (https://nchfp.uga.edu/how/dry/drying-general/sun-drying/) | 1 | „It is best to dry meats and vegetables indoors using controlled conditions of an oven or food dehydrator.” | 0fb6ba935d3f |
| Montana State Univ. Extension, MontGuide Drying Vegetables (rev. 2017; recenzja: E. Andress, NCHFP); Methods of Drying (https://extension-store.montana.edu/montguides/drying-vegetables) | 3 | „The optimum temperature for drying food is 140°F.” | 46c6b0ec59e8 |
| Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Drying Methods, Oven Drying (https://extension.colostate.edu/resource/drying-vegetables/) | 3 | „To oven dry, preheat oven at lowest setting (140 to 150 degrees F), then adjust the thermostat and prop the oven door open to achieve a consistent oven temperature of 140 degrees F, and to allow moist air to escape.” | 3f112e49d126 |

## 4. Twierdzenia (do wklejenia przez tor A)

### C2-03: wspólne dla wzoru (test suchości, piekarnik, pojemniki, przechowywanie)

**SUS-062** (S2, S3, S4; krytyczne; jedno źródło)

- pl: Przed testem suchości kilka kawałków owoców studzi się do temperatury pokojowej: ciepłe owoce wydają się bardziej miękkie, wilgotne i giętkie, niż są naprawdę.
- en: Before testing for dryness, let a few pieces of fruit cool to room temperature: warm fruit seems softer, moister and more pliable than it really is.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Testing for Dryness. Cytat: „To test foods for dryness, remove a few pieces and let cool to room temperature. | When warm or hot, fruits seem more soft, moist and pliable than they actually are.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15

**SUS-063** (S2, S3, S4; krytyczne)

- pl: Owoce są suche, gdy po ściśnięciu garści na dłoni nie zostaje wilgoć, a kawałki po puszczeniu odskakują od siebie; w przekroju ostudzonych kawałków nie widać wilgoci i nie da się jej wycisnąć.
- en: Fruit is dry when, after squeezing a handful, no moisture is left on your hand and the pieces spring apart when released; cut cooled pieces show no visible moisture and none can be squeezed out.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Testing for Dryness. Cytat: „Squeeze a handful of the fruit. | If no moisture is left on the hand and pieces spring apart when released, they are dry.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 4c51fce34c78): https://extension-store.montana.edu/montguides/drying-fruits, Montana State Univ. Extension, MontGuide MT200909HR Drying Fruits (rev. 05.2017; recenzja: E. Andress, NCHFP); Determining Dryness of Fruits. Cytat: „To test for dryness, cut several cooled pieces in half. | There should be no visible moisture and you should not be able to squeeze any moisture from the fruit.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15

**SUS-064** (S1, S2, S3, S4, S5, S6; krytyczne)

- pl: Susz przechowuje się w czystych, suchych słoikach do przetworów, plastikowych pojemnikach do zamrażarki ze szczelnymi pokrywkami albo w plastikowych torebkach do zamrażarki.
- en: Store dried food in clean, dry canning jars, plastic freezer containers with tight-fitting lids or plastic freezer bags.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 75962a5bab35): https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/, NCHFP, Packaging and Storing Dried Foods (So Easy to Preserve 6th ed.); akapit 2. Cytat: „Store dried foods in clean, dry home canning jars, plastic freezer containers with tight-fitting lids or in plastic freezer bags.”
- warianty: wszystkie roślinne

**SUS-065** (S1, S2, S3, S4, S5, S6; krytyczne; jedno źródło)

- pl: Opakowania na susz muszą być przeznaczone do kontaktu z żywnością; nie nadają się worki na śmieci ani pojemniki plastikowe lub tekturowe, w których były wcześniej rzeczy inne niż żywność.
- en: Packaging for dried food must be food grade; do not use trash bags or plastic or fibreboard containers that previously held non-food items.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 46c6b0ec59e8): https://extension-store.montana.edu/montguides/drying-vegetables, Montana State Univ. Extension, MontGuide Drying Vegetables (rev. 2017; recenzja: E. Andress, NCHFP); Post-Drying Treatment and Storage. Cytat: „All safe packaging material must be food grade. … Examples of containers not approved for food contact include trash bags and plastic or fiberboard containers that have previously held non-food materials.”
- warianty: wszystkie roślinne

**SUS-066** (S1, S2, S3, S4, S5, S6; niekrytyczne)

- pl: Susz przechowuje się w miejscu chłodnym, suchym i ciemnym.
- en: Store dried food in a cool, dry, dark place.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 75962a5bab35): https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/, NCHFP, Packaging and Storing Dried Foods (So Easy to Preserve 6th ed.); akapit 5. Cytat: „Dried foods should be stored in cool, dry, dark areas.”
- warianty: wszystkie roślinne

**SUS-067** (S1, S2, S3, S4, S5, S6; niekrytyczne)

- pl: Susz pakuje się w porcjach do zużycia za jednym razem: każde otwarcie opakowania wystawia go na powietrze i wilgoć, co obniża jakość i może prowadzić do zepsucia.
- en: Pack dried food in amounts that can be used at one time: each opening exposes it to air and moisture, which lowers quality and can lead to spoilage.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 75962a5bab35): https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/, NCHFP, Packaging and Storing Dried Foods (So Easy to Preserve 6th ed.); akapit 2. Cytat: „Pack foods in amounts that can be used all at once. | Each time a package is re-opened, the food is exposed to air and moisture that can lower the quality of the food and result in spoilage.”
- warianty: wszystkie roślinne

**SUS-068** (S2, S3, S4; krytyczne; jedno źródło; czas studzenia owoców przed pakowaniem = 30–60 min)

- pl: Po wysuszeniu owoce studzi się 30–60 minut przed pakowaniem; zbyt długie zwlekanie z pakowaniem pozwala wilgoci wrócić do suszu.
- en: After drying, cool fruit for 30–60 minutes before packing; waiting too long to pack lets moisture get back into it.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 4c51fce34c78): https://extension-store.montana.edu/montguides/drying-fruits, Montana State Univ. Extension, MontGuide MT200909HR Drying Fruits (rev. 05.2017; recenzja: E. Andress, NCHFP); Cooling Fruits. Cytat: „After drying completely, cool fruit 30 to 60 minutes before packaging. … However, excessive delay in packaging could also allow moisture to re-enter food.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15

**SUS-069** (S2, S3, S4, S5, S6; krytyczne; jedno źródło)

- pl: Do suszenia nadaje się tylko piekarnik, który da się ustawić na 140°F (60°C); jeśli nie schodzi tak nisko, żywność się piecze zamiast suszyć.
- en: Only use an oven for drying if it can be set as low as 140 °F (60 °C); if it cannot go that low, the food cooks instead of drying.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 46c6b0ec59e8): https://extension-store.montana.edu/montguides/drying-vegetables, Montana State Univ. Extension, MontGuide Drying Vegetables (rev. 2017; recenzja: E. Andress, NCHFP); Oven Drying. Cytat: „Your oven must have a setting as low as 140°F to use it for drying. | If your oven does not go this low, then food will cook instead of dry.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 4c51fce34c78): https://extension-store.montana.edu/montguides/drying-fruits, Montana State Univ. Extension, MontGuide MT200909HR Drying Fruits (rev. 05.2017; recenzja: E. Andress, NCHFP); Oven Drying. Cytat: „Your oven must have a setting as low as 140°F to use it for drying.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15, white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12
- uwaga: Dwa MontGuide tego samego wydawcy liczone jako jedno źródło (pochodne).

**SUS-070** (S2, S3, S4, S5, S6; krytyczne; jedno źródło)

- pl: W piekarniku temperaturę 140–150°F (ok. 60–66°C) kontroluje się skalibrowanym termometrem piekarnikowym położonym na ruszcie lub tacy i sprawdza co 2 godziny przez całe suszenie.
- en: In an oven, keep 140–150 °F (about 60–66 °C) by checking a calibrated oven thermometer placed on the rack or tray every 2 hours throughout drying.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Drying Methods, Oven Drying. Cytat: „To ensure maintenance of 140 to 150 degrees F, monitor oven temperature using a calibrated oven thermometer. | Place the oven thermometer directly on the oven rack or tray and check it every two hours throughout drying.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15, white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12
- uproszczenie: Źródło dotyczy warzyw; dla owoców ten sam zakres przyjęto, bo CSU Drying Fruits suszy owoce w piekarniku w 140°F (SUS-001). Rozszerzenie zakresu nazwane, kierunek zgodny.

**SUS-071** (S2, S3, S4, S5, S6; niekrytyczne)

- pl: Przy suszeniu w piekarniku drzwi zostawia się uchylone na 2–3 cale (ok. 5–7,5 cm), żeby uchodziła wilgoć.
- en: When drying in an oven, leave the door open 2–3 inches (about 5–7.5 cm) so moisture can escape.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ff5144006bb6): https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration, Penn State Extension, Let's Preserve: Drying Fruits and Vegetables (Dehydration); akapit o metodach suszenia. Cytat: „Open the oven door 2 (5 cm) to 3 inches (7.5 cm) to allow moisture to escape.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 46c6b0ec59e8): https://extension-store.montana.edu/montguides/drying-vegetables, Montana State Univ. Extension, MontGuide Drying Vegetables (rev. 2017; recenzja: E. Andress, NCHFP); Oven Drying. Cytat: „For air circulation, leave the oven door propped open 2 to 6 inches.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15, white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12
- uproszczenie: Część wspólna dwóch źródeł szczebla 3 (PSU 2–3 cale, MSU 2–6 cali); analogia: trening CLAUDE.md:122.

**SUS-072** (S2, S3, S4, S5, S6; niekrytyczne)

- pl: W zwykłym piekarniku suszenie może trwać do dwóch razy dłużej niż w suszarce, zależnie od obiegu powietrza.
- en: In a conventional oven, drying can take up to twice as long as in a dehydrator, depending on air circulation.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 46c6b0ec59e8): https://extension-store.montana.edu/montguides/drying-vegetables, Montana State Univ. Extension, MontGuide Drying Vegetables (rev. 2017; recenzja: E. Andress, NCHFP); przypis do tabeli 1. Cytat: „Drying times in a conventional oven could be up to twice as long, depending on air circulation.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a0d0fc66f6ae): https://hgic.clemson.edu/factsheet/drying-fruits/, Clemson HGIC 3084 Drying Fruits (05.2024; tabela za So Easy to Preserve); przypis do tabeli Drying Fruits at Home. Cytat: „*Because of variations in air circulation, drying in conventional ovens could be up to twice as long.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15, white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12

**SUS-073** (S2, S3, S4; niekrytyczne; jedno źródło)

- pl: Owoce łatwo przypalają się pod koniec suszenia: gdy suszenie jest prawie skończone, wyłącza się grzanie i otwiera drzwi szeroko na jeszcze godzinę.
- en: Fruit scorches easily near the end of drying: when drying is almost done, turn the heat off and open the door wide for one more hour.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Drying Methods. Cytat: „Fruits scorch easily toward the end of drying. | Therefore, it's best to turn the power off when drying is almost complete and open the door wide for an additional hour before removing pieces.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13, grapes-v10, raspberry-blackberry-v15

**SUS-074** (S2, S3; niekrytyczne; jedno źródło)

- pl: Owoce po obróbce wstępnej układa się na tacach w jednej warstwie, wgłębieniem po pestce do góry; duże kawałki co 3–4 godziny miesza się i odwraca.
- en: Arrange pretreated fruit on trays in a single layer, pit cavity up; stir and turn large pieces every 3–4 hours.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Drying Methods. Cytat: „Arrange pretreated fruits on drying trays in single layers, pit cavity up. … If possible, stir food and turn large pieces over every 3 to 4 hours during the drying period.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13

**SUS-075** (S2, S3; niekrytyczne; jedno źródło; czas suszenia owoców w 140°F = 6–36 h)

- pl: W 140°F (60°C) suszenie owoców trwa od ok. 6 godzin (cienkie plasterki jabłek) do 36 godzin (połówki brzoskwiń).
- en: At 140 °F (60 °C), drying fruit takes from about 6 hours (thin apple slices) to 36 hours (peach halves).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Drying Methods. Cytat: „At a drying temperature of 140 degrees F, plan on about 6 hours for thin apple slices to 36 hours for peach halves.”
- warianty: apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12, plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13

### S1: zioła, kwiaty, pestki, fasola

**SUS-076** (S1; niekrytyczne)

- pl: Zioła (liście, kwiaty lub nasiona) suszy się, wystawiając je na ciepłe, suche powietrze.
- en: Herbs (leaves, flowers or seeds) are dried by exposing them to warm, dry air.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); akapit 1. Cytat: „Drying is the easiest method of preserving herbs. | Simply expose the leaves, flowers or seeds to warm, dry air.”
- warianty: garden-herbs-v14, foraged-blossoms-v13, elderberry-elderflower-v10, vine-leaves-greens-v11, vine-leaves-greens-v12, fennel-artichoke-v10
- uproszczenie: Pokrzywa i liście młodego jęczmienia (vine-leaves-greens-v11, v12) traktowane jak zioła liściowe; NCHFP ich nie wymienia (decyzja B4-D4, do weta).

**SUS-077** (S1; niekrytyczne)

- pl: Zioła płucze się w chłodnej wodzie, delikatnie strząsa nadmiar wody i odrzuca liście i łodygi obite, zabrudzone lub uszkodzone.
- en: Rinse herbs in cool water, gently shake off excess water and discard bruised, soiled or damaged leaves and stems.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); akapit 2. Cytat: „Rinse herbs in cool water and gently shake to remove excess moisture. | Discard all bruised, soiled or imperfect leaves and stems.”
- warianty: garden-herbs-v14, foraged-blossoms-v13, elderberry-elderflower-v10, vine-leaves-greens-v11, vine-leaves-greens-v12, fennel-artichoke-v10

**SUS-078** (S1; niekrytyczne)

- pl: Większość ziół najlepiej zbierać do suszenia tuż przed otwarciem pierwszych kwiatów, wcześnie rano, gdy obeschnie rosa.
- en: Most herbs are best harvested for drying just before the first flowers open, early in the morning after the dew has dried.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); akapit 2. Cytat: „The best time to harvest most herbs for drying is just before the flowers first open when they are in the bursting bud stage. | Gather the herbs in the early morning after the dew has evaporated to minimize wilting.”
- warianty: garden-herbs-v14, fennel-artichoke-v10

**SUS-079** (S1; krytyczne)

- pl: Zioła są suche, gdy się kruszą, a łodygi łamią przy zginaniu; liście gotowe do pakowania są chrupkie i łatwo kruszą się w palcach.
- en: Herbs are dry when they crumble and the stems break when bent; leaves ready for packing are crisp and crumble easily between your fingers.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); Dehydrator drying; Storage. Cytat: „Herbs are dry when they crumble, and stems break when bent. … When the leaves are crispy dry and crumple easily between the fingers, they are ready to be packaged and stored.”
- warianty: garden-herbs-v14, foraged-blossoms-v13, elderberry-elderflower-v10, vine-leaves-greens-v11, vine-leaves-greens-v12, fennel-artichoke-v10

**SUS-080** (S1; niekrytyczne)

- pl: Suszone zioła przechowuje się w szczelnych pojemnikach w miejscu chłodnym, suchym i ciemnym, żeby zachowały barwę i zapach.
- en: Store dried herbs in airtight containers in a cool, dry, dark place to keep their colour and fragrance.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); akapit o przechowywaniu. Cytat: „Place herbs in airtight containers and store in a cool, dry, dark area to protect color and fragrance.”
- warianty: garden-herbs-v14, foraged-blossoms-v13, elderberry-elderflower-v10, vine-leaves-greens-v11, vine-leaves-greens-v12, fennel-artichoke-v10

**SUS-081** (S1; niekrytyczne)

- pl: Zioła o twardszych liściach (rozmaryn, szałwia, tymianek, cząber, pietruszka) najłatwiej suszyć bez suszarki: wiąże się je w małe pęczki i wiesza do wyschnięcia; w pomieszczeniu zachowują zwykle lepszą barwę i smak niż na zewnątrz.
- en: Sturdier herbs (rosemary, sage, thyme, summer savory, parsley) are easiest to dry without a dehydrator: tie them in small bundles and hang them to dry; indoors they usually keep better colour and flavour than outdoors.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); Less Tender Herbs. Cytat: „The more sturdy herbs such as rosemary, sage, thyme, summer savory and parsley are the easiest to dry without a dehydrator. | Tie them into small bundles and hang them to air dry.”
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); Less Tender Herbs. Cytat: „Air drying outdoors is often possible; however, better color and flavor retention usually results from drying indoors.”
- warianty: garden-herbs-v14

**SUS-082** (S1; krytyczne)

- pl: Zioła o miękkich liściach i zioła z nasionami suszone bez suszarki wiesza się w papierowych torbach z otworami, po mały pęczek w torbie: duże pęczki pleśnieją.
- en: Without a dehydrator, hang tender-leaf herbs and herbs with seeds in paper bags with holes, a small bunch per bag: large bunches go mouldy.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); Tender-Leaf Herbs. Cytat: „Try hanging the tender-leaf herbs or those with seeds inside paper bags to dry. … Suspend a small bunch (large amounts will mold) of herbs in a bag and close the top with a rubber band.”
- warianty: garden-herbs-v14, fennel-artichoke-v10

**SUS-083** (S1; niekrytyczne)

- pl: Łuski z suszonych nasion usuwa się, pocierając nasiona w dłoniach i zdmuchując plewy.
- en: Remove husks from dried seeds by rubbing the seeds between your hands and blowing away the chaff.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); akapit o przechowywaniu. Cytat: „Husks can be removed from seeds by rubbing the seeds between the hands and blowing away the chaff.”
- warianty: fennel-artichoke-v10

**SUS-084** (S1; niekrytyczne)

- pl: Suszone zioła są zwykle 3–4 razy mocniejsze od świeżych; zamiast świeżych daje się 1/4–1/3 ilości z przepisu.
- en: Dried herbs are usually 3–4 times stronger than fresh; use 1/4–1/3 of the amount of fresh herbs in a recipe.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 891cd52886ed): https://nchfp.uga.edu/how/dry/recipes/herbs/, NCHFP, Herbs (So Easy to Preserve 6th ed.); ostatni akapit. Cytat: „Dried herbs are usually 3 to 4 times stronger than the fresh herbs. | To substitute dried herbs in a recipe that calls for fresh herbs, use 1/4 to 1/3 of the amount listed in the recipe.”
- warianty: garden-herbs-v14, foraged-blossoms-v13, elderberry-elderflower-v10, vine-leaves-greens-v11, vine-leaves-greens-v12, fennel-artichoke-v10

**SUS-085** (S1; niekrytyczne)

- pl: Pestki dyni przed suszeniem dokładnie myje się z przylegających włókien miąższu, a w czasie suszenia często miesza, żeby się nie przypaliły; suszenie i prażenie to dwa różne procesy.
- en: Before drying, wash pumpkin seeds carefully to remove the clinging fibres, and stir them often while drying so they do not scorch; drying and roasting are two different processes.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 3382cf0ae73e): https://nchfp.uga.edu/how/dry/recipes/pumpkin-seeds/, NCHFP, Pumpkin Seeds (So Easy to Preserve 6th ed.); akapit 1. Cytat: „Drying seeds and roasting seeds are two different processes. | To dry, carefully wash pumpkin seeds to remove the clinging fibrous pumpkin tissue.”
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 3382cf0ae73e): https://nchfp.uga.edu/how/dry/recipes/pumpkin-seeds/, NCHFP, Pumpkin Seeds (So Easy to Preserve 6th ed.); akapit 1. Cytat: „Stir them frequently to avoid scorching.”
- warianty: pumpkin-v16

**SUS-086** (S1; niekrytyczne)

- pl: Fasola suszona na krzaku nie wymaga obróbki wstępnej; gdy nasiona są jeszcze wilgotne, dosusza się je w piekarniku lub suszarce.
- en: Vine-dried beans need no pretreatment; if the beans are still moist, finish drying them in an oven or dehydrator.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 868c5c35a253): https://nchfp.uga.edu/how/dry/drying-general/vine-drying/, NCHFP, Vine Drying (So Easy to Preserve 6th ed.); akapit 1. Cytat: „No pretreatment is necessary. … If needed, drying can be completed in the sun, oven or a dehydrator.”
- warianty: beans-soy-v14
- uproszczenie: NCHFP dopuszcza też dosuszanie na słońcu; karta go nie opisuje (C2-D1).

### S2: owoce w kawałkach

**SUS-087** (S2; krytyczne; jedno źródło)

- pl: Jabłka: obrane i bez gniazd nasiennych kroi się w krążki lub plasterki grubości 1/8–1/4 cala (ok. 3–6 mm) albo w ćwiartki lub ósemki i zanurza na 10 minut w roztworze kwasu askorbinowego lub innym przeciw ciemnieniu i drobnoustrojom.
- en: Apples: peel and core, cut into rings or slices 1/8–1/4 inch (about 3–6 mm) thick or into quarters or eighths, and dip for 10 minutes in ascorbic acid or another anti-darkening, antimicrobial solution.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Apples. Cytat: „Pare and core. | Cut in rings or slices 1/8 to 1/4 inch thick or cut in quarters or eighths. | Dip in ascorbic acid or other antidarkening/antimicrobial solution for 10 minutes.”
- warianty: apple-v17

**SUS-088** (S2; krytyczne; jedno źródło; czas suszenia jabłek = 6–24 h)

- pl: Jabłka suszy się, aż będą miękkie, giętkie i skórzaste, bez wilgotnego miejsca w środku po przekrojeniu (6–24 godziny).
- en: Dry apples until soft, pliable and leathery, with no moist area in the centre when cut (6–24 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Apples. Cytat: „Dry until soft, pliable, and leathery; no moist area in center when cut (6-24 hours).”
- warianty: apple-v17

**SUS-089** (S2; krytyczne; jedno źródło)

- pl: Gruszki kroi się wzdłuż na połówki, usuwa gniazda, kroi w ćwiartki, ósemki lub plasterki grubości 1/8–1/4 cala (ok. 3–6 mm) i zanurza na 10 minut w roztworze kwasu cytrynowego lub innym przeciw ciemnieniu i drobnoustrojom.
- en: Pears: halve lengthwise and core, cut into quarters, eighths or slices 1/8–1/4 inch (about 3–6 mm) thick, and dip for 10 minutes in citric acid or another anti-darkening, antimicrobial solution.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Pears. Cytat: „Cut in half lengthwise and core. | Cut in quarters, eighths, or slices 1/8- to 1/4-inch thick. | Dip in citric acid or other antidarkening/ antimicrobial solution for 10 minutes.”
- warianty: pear-v13

**SUS-090** (S2; krytyczne; jedno źródło; czas suszenia gruszek = 6–36 h)

- pl: Gruszki suszy się, aż będą sprężyste i zamszowe, bez kieszeni wilgoci (plasterki 6–10 godzin, połówki 24–36 godzin).
- en: Dry pears until springy and suede-like with no pockets of moisture (slices 6–10 hours, halves 24–36 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Pears. Cytat: „Dry until springy and suede-like with no pockets of moisture (6-10 hours for slices; 24-36 hours for halves).”
- warianty: pear-v13

**SUS-091** (S2; krytyczne; jedno źródło)

- pl: Brzoskwinie i nektaryny: umyć, obrać, przekroić na pół i usunąć pestkę, w razie potrzeby pokroić w ćwiartki lub plasterki; zanurzyć na 10 minut w roztworze kwasu cytrynowego lub innym przeciw ciemnieniu i drobnoustrojom.
- en: Peaches and nectarines: wash, peel, halve and remove the pit, cut into quarters or slices if you like, and dip for 10 minutes in citric acid or another anti-darkening, antimicrobial solution.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Nectarines and Peaches. Cytat: „Wash and peel. | Cut in half and remove pit. | Cut in quarters or slices if desired. | Dip in citric acid or other antidarkening/antimicrobial solution for 10 minutes.”
- warianty: peach-nectarine-v14

**SUS-092** (S2; krytyczne; jedno źródło; czas suszenia brzoskwiń = 6–36 h)

- pl: Brzoskwinie i nektaryny suszy się, aż będą skórzaste i dość giętkie (6–36 godzin); połówki odwraca się, gdy zniknie widoczny sok.
- en: Dry peaches and nectarines until leathery and somewhat pliable (6–36 hours); turn halves over when visible juice disappears.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Nectarines and Peaches. Cytat: „Turn halves over when visible juice disappears. | Dry until leathery and somewhat pliable (6-36 hours).”
- warianty: peach-nectarine-v14

**SUS-093** (S2; krytyczne; jedno źródło; czas suszenia moreli = 24–36 h)

- pl: Morele kroi się na połówki i usuwa pestkę, bez obierania; zanurza na 10 minut w roztworze kwasu askorbinowego lub innym i suszy, aż będą miękkie, giętkie i skórzaste, bez wilgotnego miejsca w środku (24–36 godzin).
- en: Apricots: halve and remove the pit without peeling, dip for 10 minutes in ascorbic acid or another solution, and dry until soft, pliable and leathery with no moist area in the centre (24–36 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Apricots. Cytat: „Cut in half and remove pit. | Do not peel. | Dip in ascorbic acid or other antidarkening/antimicrobial solution for 10 minutes.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Apricots. Cytat: „Dry until soft, pliable, and leathery; no moist area in center when cut (24-36 hours).”
- warianty: apricot-v13

**SUS-094** (S2; krytyczne; jedno źródło)

- pl: Truskawki (owoce o miękkiej skórce) zostawia się w całości lub kroi na pół i zanurza na 10 minut w roztworze kwasu askorbinowego lub innym przeciw drobnoustrojom.
- en: Strawberries (soft-skinned berries): leave whole or cut in half and dip for 10 minutes in ascorbic acid or another antimicrobial solution.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Berries. Cytat: „Leave whole or cut in half. … For berries with soft skins (strawberries), dip in ascorbic acid or other antimicrobial solution for 10 minutes.”
- warianty: strawberry-v16
- uproszczenie: Wariant to „suszone plastry”; CSU opisuje owoce całe lub połówki. Plastry wymagają decyzji toru A (zmiana formy na połówki albo nowe źródło).

**SUS-095** (S2, S3; krytyczne; jedno źródło; czas suszenia jagód = 24–36 h)

- pl: Jagody i truskawki układa się na tacach najwyżej w dwóch warstwach i suszy, aż będą twarde i zagrzechoczą przy potrząśnięciu tacą (24–36 godzin).
- en: Place berries on trays no more than two deep and dry until hard and they rattle when the tray is shaken (24–36 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Berries. Cytat: „Place on drying trays not more than two berries deep. | Dry until hard and berries rattle when shaken on trays (24-36 hours).”
- warianty: strawberry-v16, blueberry-bilberry-v13, cranberry-lingonberry-v13

**SUS-096** (S2; krytyczne; jedno źródło; czas suszenia bananów = 6–10 h)

- pl: Banany obiera się, kroi w plasterki 1/8 cala (ok. 3 mm), zanurza na 10 minut w roztworze kwasu cytrynowego lub innym i suszy, aż będą twarde i skórzaste (6–10 godzin).
- en: Bananas: peel, cut into 1/8-inch (about 3 mm) slices, dip for 10 minutes in citric acid or another solution, and dry until tough and leathery (6–10 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Bananas. Cytat: „Cut in 1/8 inch slices. | Dip in citric acid or other antidarkening/antimicrobial solution for 10 minutes.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Bananas. Cytat: „Dry until tough and leathery (6-10 hours).”
- warianty: pineapple-banana-v10

**SUS-097** (S2; krytyczne; jedno źródło; czas suszenia ananasa = 24–26 h)

- pl: Ananas: dojrzały owoc obrać, usunąć „oczka”, przekroić wzdłuż, usunąć rdzeń i pokroić w poprzek w plastry 1/2 cala (ok. 13 mm); według Clemson HGIC obróbka wstępna nie jest konieczna, a suszenie w suszarce trwa 24–26 godzin (plastry krócej).
- en: Pineapple: peel a ripe fruit, remove the eyes, cut lengthwise, remove the core and cut crosswise into 1/2-inch (about 13 mm) slices; according to Clemson HGIC no pretreatment is needed, and drying in a dehydrator takes 24–26 hours (less for slices).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a0d0fc66f6ae): https://hgic.clemson.edu/factsheet/drying-fruits/, Clemson HGIC 3084 Drying Fruits (05.2024; tabela za So Easy to Preserve); tabela Drying Fruits at Home, wiersz Pineapple (komórki rozdzielone |). Cytat: „Wash, peel and remove thorny eyes. | Slice lengthwise and remove core. | Cut in ½-inch slices, crosswise. | No treatment necessary | 24 to 26**”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a0d0fc66f6ae): https://hgic.clemson.edu/factsheet/drying-fruits/, Clemson HGIC 3084 Drying Fruits (05.2024; tabela za So Easy to Preserve); przypis ** do tabeli. Cytat: „**Drying times are shorter for slices and other cuts of fruit.”
- warianty: pineapple-banana-v10
- uwaga: Jedno źródło szczebla 3 (tabela za So Easy to Preserve, UGA). Karta i tak stosuje obróbkę kwasem (C2-D2, wariant ostrożniejszy); zdanie „obróbka nie jest konieczna” nie wchodzi do karty.

**SUS-098** (S2; krytyczne; jedno źródło)

- pl: Melon: skórkę szoruje się szczotką pod chłodną bieżącą wodą przed krojeniem, potem usuwa skórkę, włókna i nasiona; kantalupa suszy się lepiej niż arbuz.
- en: Melon: scrub the rind with a brush under cool running water before cutting, then remove the rind, fibrous tissue and seeds; cantaloupe dries better than watermelon.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Melons. Cytat: „Select mature, firm fruits that are heavy for their size; cantaloupe dries better than watermelon. | Scrub outer surface well with brush under cool running water. | Remove outer skin, any fibrous tissue and seeds.”
- warianty: watermelon-melon-v10

**SUS-099** (S2; krytyczne; jedno źródło; czas suszenia melona = 6–10 h)

- pl: Melon kroi się w plastry grubości 1/4–1/2 cala (ok. 6–13 mm), zanurza na 10 minut w roztworze kwasu askorbinowego lub innym i suszy, aż będzie skórzasty i giętki, bez kieszeni wilgoci (6–10 godzin).
- en: Cut melon into 1/4–1/2-inch (about 6–13 mm) slices, dip for 10 minutes in ascorbic acid or another solution, and dry until leathery and pliable with no pockets of moisture (6–10 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Melons. Cytat: „Cut into 1/4- to 1/2-inch thick slices. | Dip in ascorbic acid or other antimicrobial solution for 10 minutes.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Melons. Cytat: „Dry until leathery and pliable with no pockets of moisture (6-10 hours).”
- warianty: watermelon-melon-v10

### S3–S4: owoce w całości, winogrona

**SUS-100** (S3; krytyczne; jedno źródło; czas nacinania skórki śliwek = 1–2 min)

- pl: Śliwki: małe zostawia się w całości i nacina skórkę we wrzątku przez 1–2 minuty; połówki bez pestki zanurza się na 10 minut w roztworze kwasu askorbinowego lub innym. Suszy się do stanu giętkiego i skórzastego (plasterki 6–10 godzin, połówki 24–36 godzin).
- en: Plums: leave small ones whole and crack the skins in boiling water for 1–2 minutes; dip pitted halves for 10 minutes in ascorbic acid or another solution. Dry until pliable and leathery (slices 6–10 hours, halves 24–36 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Plums and prunes. Cytat: „If left whole, crack skins in boiling water 1 to 2 minutes. | If cut in half, dip in ascorbic acid or other antimicrobial solution for 10 minutes.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Plums and prunes. Cytat: „Dry until pliable and leathery (6-10 hours for slices; 24-36 hours for halves).”
- warianty: plum-v17, mirabelle-v11
- uproszczenie: Mirabelka (mirabelle-v11) traktowana jak mała śliwka. Czas dla śliwek w całości: Clemson podaje 24–36 h w suszarce (SUS-101); CSU go nie podaje. Wiersz CSU ma 1–2 min wrzątku, ogólna zasada SUS-015 30–60 s: dla śliwek wiersz produktu.

**SUS-101** (S3; krytyczne; jedno źródło; czas suszenia śliwek w całości = 24–36 h)

- pl: Według Clemson HGIC śliwki do suszarki lub piekarnika zostawia się w całości, płucze w gorącej wodzie i suszy w suszarce 24–36 godzin (kawałki krócej).
- en: According to Clemson HGIC, plums for a dehydrator or oven are left whole, rinsed in hot water and dried 24–36 hours in a dehydrator (pieces take less).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a0d0fc66f6ae): https://hgic.clemson.edu/factsheet/drying-fruits/, Clemson HGIC 3084 Drying Fruits (05.2024; tabela za So Easy to Preserve); tabela Drying Fruits at Home, wiersz Plums and Prunes (komórki rozdzielone |). Cytat: „Leave whole or, if sulfuring, halve the fruit. … Oven or dehydrator drying: Rinse in hot water. | 24 to 36**”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a0d0fc66f6ae): https://hgic.clemson.edu/factsheet/drying-fruits/, Clemson HGIC 3084 Drying Fruits (05.2024; tabela za So Easy to Preserve); przypis ** do tabeli. Cytat: „**Drying times are shorter for slices and other cuts of fruit.”
- warianty: plum-v17, mirabelle-v11

**SUS-102** (S3; krytyczne; jedno źródło; czas suszenia wiśni = 24–36 h)

- pl: Wiśnie i czereśnie: usunąć szypułki i pestki, zanurzyć całe owoce na 30 sekund we wrzątku, żeby popękała skórka (można też na 10 minut w roztworze kwasu askorbinowego), i suszyć, aż będą twarde, skórzaste i lekko lepkie (24–36 godzin).
- en: Cherries: remove stems and pits, dip whole cherries in boiling water for 30 seconds to crack the skins (they may also be dipped for 10 minutes in ascorbic acid solution), and dry until tough, leathery and slightly sticky (24–36 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Cherries. Cytat: „Remove stems and pits. | Dip whole cherries in boiling water 30 seconds to crack skins. | May also dip in ascorbic acid or other antimicrobial solution for 10 minutes.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Cherries. Cytat: „Dry until tough, leathery, and slightly sticky (24-36 hours).”
- warianty: sour-cherry-v15, sweet-cherry-v12

**SUS-103** (S3, S4; krytyczne; jedno źródło; czas suszenia winogron i porzeczek = 12–24 h)

- pl: Winogrona bezpestkowe i czarne porzeczki: suszone w całości zanurza się na 30 sekund we wrzątku, żeby popękała skórka; połówki zanurza się na 10 minut w roztworze kwasu askorbinowego lub innym. Suszy się do stanu giętkiego i skórzastego, bez wilgotnego środka (12–24 godziny).
- en: Seedless grapes and blackcurrants: if drying whole, crack the skins in boiling water for 30 seconds; dip halves for 10 minutes in ascorbic acid or another solution. Dry until pliable and leathery with no moist centre (12–24 hours).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 99cc1ffd7735): https://extension.colostate.edu/resource/drying-fruits/, Colorado State Univ. Extension, Drying Fruits (peer-reviewed, rev. 08.2025); Table 2, wiersz Grapes and Black Currants. Cytat: „If drying whole, crack skins by dipping in boiling water for 30 seconds. | If halved, dip in ascorbic acid or other antimicrobial solution for 10 minutes. … Dry until pliable and leathery with no moist center (12-24 hours).”
- warianty: currant-v14, grapes-v10

**SUS-104** (S3; niekrytyczne)

- pl: Owoce z woskowym nalotem (borówki, żurawina, porzeczki, agrest) zanurza się na 15–30 sekund we wrzątku, żeby popękała skórka, potem w wodzie z lodem i osusza na papierowym ręczniku; suszenie trwa 24–36 godzin.
- en: Waxy-coated berries (blueberries, cranberries, currants, gooseberries) are dipped in boiling water for 15–30 seconds to crack the skins, then in ice water, and drained on paper towels; drying takes 24–36 hours.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a0d0fc66f6ae): https://hgic.clemson.edu/factsheet/drying-fruits/, Clemson HGIC 3084 Drying Fruits (05.2024; tabela za So Easy to Preserve); tabela Drying Fruits at Home, wiersz Berries, Firm (komórki rozdzielone |). Cytat: „With waxy coating—blueberries, cranberries, currants, gooseberries, huckleberries | Plunge into boiling water 15 to 30 seconds to “check” skins. | Place fruit in ice water. | Drain on paper towels. | 24 to 36”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ff5144006bb6): https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration, Penn State Extension, Let's Preserve: Drying Fruits and Vegetables (Dehydration); akapit o owocach o twardej skórce. Cytat: „Some fruits, such as blueberries and cranberries, need to be dipped into boiling water to crack the skins. … Chill quickly after cracking skins and blot dry.”
- warianty: blueberry-bilberry-v13, cranberry-lingonberry-v13, currant-v14
- uproszczenie: Clemson 15–30 s, CSU (berries with firm skins) 30 s, SUS-015 30–60 s: wspólna wartość 30 s. Borówka czernica i borówka brusznica (bilberry, lingonberry) traktowane jak borówka i żurawina.

### S5–S6: warzywa

**SUS-105** (S5, S6; krytyczne; jedno źródło)

- pl: Czasy blanszowania w tabeli CSU podano dla wysokości 3000–5000 stóp (ok. 900–1500 m); niżej są nieco krótsze, wyżej i przy dużych ilościach warzyw nieco dłuższe.
- en: The CSU blanching times are for 3,000–5,000 feet (about 900–1,500 m); they are slightly shorter at lower altitudes and slightly longer at higher altitudes or for large amounts of vegetables.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, przypis *. Cytat: „*Blanching times are for 3,000 to 5,000 feet. | Times will be slightly shorter for lower altitudes and slightly longer for higher altitudes or for large quantities of vegetables.”
- warianty: white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12
- uwaga: Karta podaje czasy z tabeli bez skracania (dla niższych wysokości to kierunek ostrożniejszy: dłuższe blanszowanie).

**SUS-106** (S5, S6; krytyczne; jedno źródło)

- pl: Blanszowanie przed suszeniem: najwyżej 1 kwarta (ok. 1 l) warzyw w woreczku z gazy do wrzącej wody, czas liczy się od włożenia, woda ma wrzeć cały czas; potem schładza się w bardzo zimnej wodzie tyle samo czasu i odsącza.
- en: Blanching before drying: put no more than 1 quart (about 1 l) of vegetables in a cheesecloth bag into boiling water, start timing when they go in and keep the water boiling; then cool in very cold water for the same time and drain.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Blanching, kroki. Cytat: „Put no more than one quart of the vegetable pieces in a cheesecloth or other mesh bag. … Start timing as soon as vegetables are in boiling water. | Adjust heat to ensure continuous boiling. … Drop bag in very cold water to cool (same time as blanched).”
- warianty: white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12

**SUS-107** (S5, S6; niekrytyczne; jedno źródło)

- pl: Warzywa po obróbce wstępnej układa się na tacach w jednej lub cienkiej warstwie, najwyżej 1/2 cala (ok. 13 mm).
- en: Arrange pretreated vegetables on trays in a single or thin layer, no more than 1/2 inch (about 13 mm) deep.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Drying Methods. Cytat: „Arrange pretreated vegetables on drying trays in single or thin layers, 1/2 inch deep or less.”
- warianty: white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13, pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12

**SUS-108** (S5; krytyczne; jedno źródło; czas blanszowania kapusty do suszenia = 4 min)

- pl: Kapusta: usunąć liście zewnętrzne, pokroić na ćwiartki, wyciąć głąb i kroić w paski 1/8 cala (ok. 3 mm); blanszować 4 minuty, suszyć 10–12 godzin, do stanu chrupkiego i łamliwego.
- en: Cabbage: remove outer leaves, quarter and core, cut into 1/8-inch (about 3 mm) strips; blanch 4 minutes, dry 10–12 hours, until crisp and brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Cabbage (komórki rozdzielone |). Cytat: „Remove outer leaves, quarter and core. | Cut into strips 1/8″ thick. | 4 | 10-12 | Crisp, brittle”
- warianty: white-cabbage-v16, red-savoy-cabbage-v11

**SUS-109** (S5; krytyczne; jedno źródło; czas blanszowania kalafiora do suszenia = 4–5 min)

- pl: Kalafior: umyć, oczyścić, pokroić na małe kawałki; blanszować 4–5 minut, suszyć 12–15 godzin, do stanu twardego lub łamliwego.
- en: Cauliflower: wash, trim, cut into small pieces; blanch 4–5 minutes, dry 12–15 hours, until tough to brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Cauliflower (komórki rozdzielone |). Cytat: „Wash. Trim, cut into small pieces. | 4-5 | 12-15 | Tough to brittle”
- warianty: cauliflower-v13

**SUS-110** (S5; krytyczne; jedno źródło; czas blanszowania brokułu do suszenia = 4 min)

- pl: Brokuł: umyć, pokroić jak do podania, łodygi przekroić wzdłuż na ćwiartki; blanszować 4 minuty, suszyć 12–15 godzin, do stanu chrupkiego i łamliwego.
- en: Broccoli: wash, trim and cut as for serving, quarter stalks lengthwise; blanch 4 minutes, dry 12–15 hours, until crisp and brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Broccoli (komórki rozdzielone |). Cytat: „Wash. Trim, cut as for serving. Quarter stalks lengthwise. | 4 | 12-15 | Crisp, brittle”
- warianty: broccoli-v10
- uwaga: MSU ocenia brokuł jako „Not recommended” do suszenia (jakość, SUS-121); decyzja o wariancie dla toru A.

**SUS-111** (S5; krytyczne; jedno źródło; czas blanszowania fasolki do suszenia = 4 min)

- pl: Fasolka szparagowa: umyć, pokroić na kawałki lub paski; blanszować 4 minuty, suszyć 8–14 godzin, do stanu bardzo suchego i łamliwego.
- en: Green beans: wash, cut into pieces or strips; blanch 4 minutes, dry 8–14 hours, until very dry and brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Beans, green (komórki rozdzielone |). Cytat: „Wash. Cut in pieces or strips. | 4 | 8-14 | Very dry, brittle”
- warianty: green-beans-v13
- uwaga: Wariant „suszona w strąkach”: CSU każe kroić na kawałki lub paski; całe strąki bez źródła (pytanie do toru A).

**SUS-112** (S5; krytyczne; jedno źródło; czas blanszowania groszku do suszenia = 4 min)

- pl: Zielony groszek: wyłuskać i umyć; blanszować 4 minuty, suszyć 8–10 godzin, aż będzie twardy, pomarszczony i zielony.
- en: Green peas: shell and wash; blanch 4 minutes, dry 8–10 hours, until hard, wrinkled and green.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Peas (komórki rozdzielone |). Cytat: „Shell and wash. | 4 | 8-10 | Hard, wrinkled, green”
- warianty: peas-chickpeas-v14

**SUS-113** (S5; krytyczne; jedno źródło; czas blanszowania papryki do suszenia = 4 min)

- pl: Papryka: umyć, usunąć szypułkę, gniazdo i nasiona, kroić w paski lub krążki 1/4–1/2 cala (ok. 6–13 mm); blanszować 4 minuty (CSU), suszyć 8–12 godzin, do stanu twardego lub łamliwego.
- en: Sweet peppers: wash, remove stem, core and seeds, cut into 1/4–1/2-inch (about 6–13 mm) strips or rings; blanch 4 minutes (CSU), dry 8–12 hours, until tough to brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Peppers; pimentos (komórki rozdzielone |). Cytat: „Wash, stem. Remove core and seeds. Cut into 1/4 to 1/2″ strips or rings. | 4 | 8-12 | Tough to brittle”
- warianty: bell-pepper-v17
- uwaga: MSU i Penn State: papryka bez blanszowania. Sprzeczność na szczeblu 3; wariant ostrożniejszy: blanszowanie (decyzja B4-D2).

**SUS-114** (S5, S6; krytyczne; jedno źródło; czas blanszowania cebuli do suszenia = 4 min)

- pl: Cebula: umyć, zdjąć łuskę, odciąć szczyt i nasadę korzeni, kroić w plastry 1/8–1/4 cala (ok. 3–6 mm); blanszować 4 minuty (CSU), suszyć 6–10 godzin, do stanu bardzo łamliwego.
- en: Onions: wash, remove the papery skin, cut off tops and root ends, slice 1/8–1/4 inch (about 3–6 mm) thick; blanch 4 minutes (CSU), dry 6–10 hours, until very brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Onions (komórki rozdzielone |). Cytat: „Wash, remove outer paper skin. Remove tops and root ends, slice 1/8 to 1/4″ thick. | 4 | 6-10 | Very brittle”
- warianty: onion-v13, shallot-pearl-onion-v14
- uwaga: MSU („No blanching needed”) i Penn State („Onions, garlic, peppers, and herbs do not need blanching”): sprzeczność na szczeblu 3; wariant ostrożniejszy: blanszowanie (B4-D2). Szalotka i czerwona cebula traktowane jak cebula.

**SUS-115** (S6; krytyczne; jedno źródło; czas blanszowania dyni do suszenia = 4 min)

- pl: Dynia: umyć skórę, pokroić, usunąć nasiona i miąższ z gniazda, kroić w paski szerokości 1 cala (ok. 2,5 cm), obrać i kroić w poprzek na kawałki ok. 1/8 cala (ok. 3 mm); blanszować 4 minuty, suszyć 10–16 godzin, do stanu twardego lub łamliwego.
- en: Pumpkin (winter squash): wash the rind, cut into pieces, remove seeds and pulp, cut into 1-inch (about 2.5 cm) strips, peel, and cut crosswise into pieces about 1/8 inch (3 mm) thick; blanch 4 minutes, dry 10–16 hours, until tough to brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Squash, winter (komórki rozdzielone |). Cytat: „Remove seeds and cavity pulp. Cut into 1″ wide strips. Peel rind. Cut strips crosswise into pieces about 1/8″ thick. | 4 | 10-16 | Tough to brittle”
- warianty: pumpkin-v15
- uwaga: MSU: dynia „Fair to good”, ale „Squash, winter” „Not recommended” (jakość, SUS-121).

**SUS-116** (S6; krytyczne; jedno źródło; czas blanszowania bakłażana do suszenia = 4 min)

- pl: Bakłażan: umyć, oczyścić, kroić w plastry 1/4 cala (ok. 6 mm); blanszować 4 minuty, suszyć 12–14 godzin, do stanu skórzastego lub łamliwego.
- en: Eggplant: wash, trim, cut into 1/4-inch (about 6 mm) slices; blanch 4 minutes, dry 12–14 hours, until leathery to brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Eggplant (komórki rozdzielone |). Cytat: „Wash, trim, cut into 1/4″ slices. | 4 | 12-14 | Leathery to brittle”
- warianty: eggplant-v15

**SUS-117** (S6; krytyczne; jedno źródło; czas blanszowania ziemniaków do suszenia = 7 min)

- pl: Ziemniaki: umyć, obrać, kroić w słupki 1/4 cala (ok. 6 mm) lub plastry 1/8 cala (ok. 3 mm); blanszować 7 minut, suszyć 6–10 godzin, do stanu łamliwego.
- en: Potatoes: wash, peel, cut into 1/4-inch (about 6 mm) shoestring strips or 1/8-inch (about 3 mm) slices; blanch 7 minutes, dry 6–10 hours, until brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Potatoes (komórki rozdzielone |). Cytat: „Wash, peel. Cut into 1/4″ shoestring strips or 1/8″ thick slices. | 7 | 6-10 | Brittle”
- warianty: potato-sunchoke-v12
- uwaga: Wariant „kostka do zup”: CSU podaje słupki lub plastry; kostka bez źródła. Topinambur bez źródła.

**SUS-118** (S6; krytyczne; jedno źródło; czas blanszowania szparagów do suszenia = 4–5 min)

- pl: Szparagi: dokładnie umyć, duże główki przekroić na pół; blanszować 4–5 minut, suszyć 6–10 godzin, do stanu skórzastego lub łamliwego.
- en: Asparagus: wash thoroughly, halve large tips; blanch 4–5 minutes, dry 6–10 hours, until leathery to brittle.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Asparagus (komórki rozdzielone |). Cytat: „Wash thoroughly. Halve large tips. | 4-5 | 6-10 | Leathery to brittle”
- warianty: asparagus-v10

**SUS-119** (S6; krytyczne; jedno źródło; czas suszenia pomidorów = 6–24 h)

- pl: Pomidory: sparzyć parą lub wrzątkiem, schłodzić w zimnej wodzie, obrać, kroić w plastry 1/2 cala (ok. 13 mm) lub cząstki 3/4 cala (ok. 19 mm), zanurzyć na 10 minut w roztworze 1 łyżeczki kwasu cytrynowego na kwartę wody; bez blanszowania; suszyć 6–24 godziny, do stanu chrupkiego.
- en: Tomatoes: steam or dip in boiling water to loosen the skins, chill in cold water, peel, slice 1/2 inch (about 13 mm) thick or cut into 3/4-inch (about 19 mm) sections, and dip for 10 minutes in 1 tsp citric acid per quart of water; no blanching; dry 6–24 hours, until crisp.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Tomatoes (komórki rozdzielone |). Cytat: „Steam or dip in boiling water to loosen skins. Chill in cold water. Peel. Slice 1/2″ thick or cut in 3/4″ sections. Dip in solution of 1 tsp. citric acid/quart water for 10 minutes. | None | 6-24 | Crisp”
- warianty: tomato-v16

**SUS-120** (S6; krytyczne; jedno źródło; czas blanszowania liści do suszenia = 4 min)

- pl: Szpinak i liście (jarmuż, boćwina): oczyścić i bardzo dokładnie umyć, strząsnąć lub osuszyć z nadmiaru wody; blanszować 4 minuty, suszyć 6–10 godzin, do stanu chrupkiego.
- en: Spinach and greens (kale, chard): trim and wash very thoroughly, shake or pat dry; blanch 4 minutes, dry 6–10 hours, until crisp.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 3f112e49d126): https://extension.colostate.edu/resource/drying-vegetables/, Colorado State Univ. Extension, Drying Vegetables (peer-reviewed, rev. 11.2012); Table 2, wiersz Spinach; greens like Kale, Chard, mustard (komórki rozdzielone |). Cytat: „Trim and wash very thoroughly. Shake or pat dry to remove excess moisture. | 4 | 6-10 | Crisp”
- warianty: leafy-greens-v12

**SUS-121** (S5, S6; niekrytyczne; jedno źródło)

- pl: Według MSU przydatność do suszenia jest niska: brokuł „nie zalecany”, dynia zimowa „nie zalecana”, kalafior, boćwina i szpinak „słaba”, bakłażan i szparagi „słaba do średniej” (powód jakościowy, nie bezpieczeństwa).
- en: According to MSU, suitability for drying is low: broccoli “not recommended”, winter squash “not recommended”, cauliflower, Swiss chard and spinach “poor”, eggplant and asparagus “poor to fair” (a quality reason, not a safety one).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 46c6b0ec59e8): https://extension-store.montana.edu/montguides/drying-vegetables, Montana State Univ. Extension, MontGuide Drying Vegetables (rev. 2017; recenzja: E. Andress, NCHFP); Table 2, Suitability for Drying (komórki rozdzielone |). Cytat: „Broccoli | Not recommended … Cauliflower | Poor … Eggplant | Poor to fair … Squash, winter | Not recommended … Swiss chard | Poor … Asparagus | Poor to Fair”
- warianty: broccoli-v10, cauliflower-v13, pumpkin-v15, leafy-greens-v12, eggplant-v15, asparagus-v10
- uwaga: Do decyzji toru A: czy warianty zostają (CSU podaje dla nich procedury).

### Przydatność do suszenia (MSU, jakość)

**SUS-122** (S2, S4; niekrytyczne; jedno źródło)

- pl: Według MSU jagody z dużą ilością pestek (maliny, jeżyny) nie są zalecane do suszenia, bo mają dużo pestek i schną wolno, ale bardzo dobrze nadają się na skóry owocowe; melony nadają się do suszenia słabo.
- en: According to MSU, seedy berries (raspberries, blackberries) are not recommended for drying because of their high seed content and slow drying, but are excellent for fruit leather; melons are poor for drying.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 4c51fce34c78): https://extension-store.montana.edu/montguides/drying-fruits, Montana State Univ. Extension, MontGuide MT200909HR Drying Fruits (rev. 05.2017; recenzja: E. Andress, NCHFP); Table 1, Suitability for Drying (komórki rozdzielone |). Cytat: „Berries w/ seeds | Not recommended 2 | Excellent … Melons | Poor”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 4c51fce34c78): https://extension-store.montana.edu/montguides/drying-fruits, Montana State Univ. Extension, MontGuide MT200909HR Drying Fruits (rev. 05.2017; recenzja: E. Andress, NCHFP); przypisy do Table 1. Cytat: „2 High seed content and slow rate of drying”
- warianty: raspberry-blackberry-v15, watermelon-melon-v10
- uproszczenie: Przykłady „malin, jeżyn” dopisane przez redakcję jako jagody z pestkami; MSU nie wymienia gatunków.
- uwaga: Powód jakościowy. Do decyzji toru A: raspberry-blackberry-v15 jako skóra owocowa albo zostaje z oznaczeniem.

## 5. Bez źródła (zostaje w pytaniach otwartych, nie wchodzi do kart)

| Partia | Warianty | Co |
|---|---|---|
| S2 | chokeberry-seabuckthorn-v12 | rokitnik: brak procedury w CSU, MSU, Penn State i Clemson |
| S2 | strawberry-v16 | „plastry”: CSU opisuje truskawki całe lub połówki (SUS-094); plastry bez źródła |
| S3 | chokeberry-seabuckthorn-v11 | aronia: brak w tabelach CSU, MSU i Clemson; nie dopisana do SUS-095/104 |
| S3 | cranberry-lingonberry-v13 | słodzenie sokiem jabłkowym: bez źródła (nacinanie skórki jest w SUS-104) |
| S5 | green-beans-v13 | „w strąkach”: CSU każe kroić na kawałki lub paski (SUS-111) |
| S6 | potato-sunchoke-v12 | topinambur i „kostka do zup”: bez źródła (ziemniaki w słupkach/plastrach SUS-117) |
| S1 | vine-leaves-greens-v11, vine-leaves-greens-v12 | liście jęczmienia i pokrzywa: tylko ogólne NCHFP Herbs (uproszczenie w SUS-076, decyzja B4-D4) |
| S1 | elderberry-elderflower-v10, foraged-blossoms-v13 | kwiaty bzu, lipy, rumianku: tylko ogólne NCHFP Herbs („leaves, flowers or seeds”), bez procedury gatunkowej |
| S4 | plum-v16, mirabelle-v10, apricot-v09, mango-papaya-v10, elderberry-elderflower-v11 | bez nowych twierdzeń: wystarczają SUS-026–030, SUS-041 |

S7–S8 (chipsy, proszki) i S9, M poza zakresem tej sesji; Clemson dostępny, więc SUS-039 i SUS-040 można odczytać ponownie przy S7–S8.

## 6. Decyzje do weta

Tablica: `2026-11-02-jaratlas-06-b4-suszenie-zrodla`. Repo trening (klon `--depth 1`, 2e4b0f8): dziedzinowej analogii brak; pełna analogia tylko dla B4-D3. Pozostałe: decyzja Claude, do weta. Przy bezpieczeństwie żywności wybrany wariant ostrożniejszy.

- **B4-D1** Numeracja SUS-062–SUS-122 (kontynuacja klastra SUS). Sprawdzone: rejestr na main i wszystkie gałęzie origin (git grep) nie mają SUS-049 ani SUS-062+. Odrzucone: nowy prefiks (rozbiłby klaster suszenia).
- **B4-D2** Warzywa: czasy blanszowania z CSU Table 2, bez skracania dla niższych wysokości; cebula i papryka blanszowane 4 min (CSU), choć MSU i Penn State piszą, że nie trzeba. Powód: CSU opisuje blanszowanie jako zwiększające niszczenie E. coli, Salmonella i Listeria (badania Kendall, Sofos); wariant ostrożniejszy. Odrzucone: czasy MSU (krótsze) i pominięcie blanszowania.
- **B4-D3** Uchylenie drzwi piekarnika 2–3 cale (5–7,5 cm): część wspólna Penn State (2–3) i MSU (2–6). Pełna analogia: trening CLAUDE.md:122 („Przy sprzeczności na tym samym szczeblu podaj część wspólną”), też docs/brd/reguly.md:137.
- **B4-D4** Zioła: pokrzywa i liście jęczmienia traktowane jak zioła liściowe (NCHFP Herbs); suszenie pęczków na powietrzu w pomieszczeniu dozwolone tylko dla ziół o twardszych liściach (SUS-081), miękkie w papierowych torbach małymi pęczkami (SUS-082). To rozszerzenie C2-D1 (tylko suszarka i piekarnik) o wyjątek dla ziół, oparte na szczeblu 1. Odrzucone: zioła tylko w suszarce (zgodne z C2-D1, ale bez potrzeby: NCHFP opisuje suszenie w pomieszczeniu).
- **B4-D5** Ananas: karta stosuje obróbkę kwasem (C2-D2), mimo że Clemson pisze „No treatment necessary” (SUS-097). Zdanie o braku obróbki nie wchodzi do karty.
- **B4-D6** C2-02: SUS-001 rozszerzyć o warzywa i dopisać 4 źródła (NCHFP Vegetable Leathers i Sun Drying, szczebel 1; MSU Drying Vegetables i CSU Drying Vegetables, szczebel 3). Werdykt: dosłownego zdania szczebla 1 „warzywa w kawałkach suszy się w 140°F” nie znalazłem. NCHFP daje 140ºF dla skór warzywnych i każe suszyć warzywa w piekarniku lub suszarce; liczbę dla warzyw w kawałkach dają MSU (recenzja dyrektora NCHFP, strona wskazana przez NCHFP) i CSU. Odrzucone: osobne twierdzenie dla warzyw (dwie wartości jednej wielkości „temperatura suszenia”).
- **B4-D7** Wyjątek od „cytat najwyżej 1–2 zdania” (zasada 7): wiersz tabeli cytowany jako ciąg komórek „ | ”, a „ … ” oznacza przerwę w tekście. Tańsza kontrola: skrypt sprawdza każdy ciągły fragment dosłownie na tekście z curl; test mutacji (zmiana „6-10” na „6-12” w SUS-096) wykryty.
- **B4-D8** Śliwki: nacinanie skórki 1–2 min według wiersza CSU dla śliwek (ważniejszy niż ogólne 30–60 s z SUS-015); czas dla śliwek w całości z Clemson (24–36 h), bo CSU podaje tylko plasterki i połówki.

## 7. Dla toru A (kolejność)

1. Wkleić SUS-062–122 z JSON do `rejestr.json` (pola `luka`, `partie`, `warianty`, `uwaga`, `twierdzenie_en` można pominąć albo zostawić, zależnie od walidatora).
2. SUS-001: nowe brzmienie i 4 źródła (sekcja 3); odnowić `przeglad.sha` po przeglądzie zastępczym.
3. Przegląd zastępczy D-027 dla twierdzeń krytycznych przed użyciem w kartach (S1, S2 najpierw).
4. Decyzje o wariantach z uwagami: broccoli-v10, pumpkin-v15 (MSU „not recommended”), raspberry-blackberry-v15 (MSU), strawberry-v16 (plastry), green-beans-v13 (strąki), potato-sunchoke-v12.
