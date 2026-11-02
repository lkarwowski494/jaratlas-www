# E1 suszenie S7–S9 i jerky (M): propozycje twierdzeń (tor B7, 2026-11-02)

- Rola 06-tresci, build, tryb bez właściciela. Gałąź `claude/jaratlas-b7-suszenie-s7-m` od `main` = e2e3011. Zakres: tylko ten plik i `E1-suszenie-s7-m-2026-11-02.json`. Rejestr, karty i katalog bez zmian; wkleja tor A.
- Wejście: `E1-suszenie-wzor-2026-11-02.md` (partie S7–S9, M; luki C2-04, C2-05, C2-10), `E1-suszenie-twierdzenia-2026-11-02.*` (B4: SUS-062–122, bez dublowania), `rejestr.json` (SUS-001–061, MIE-033–095), `pytania-otwarte.md` nr 6.
- Format JSON jak w B4. `status: robocze` (SUS-140: `sprzeczne`), `przeglad: null`: przegląd zastępczy (D-027) po wklejeniu robi tor A. Cytaty: „ | ” = fragmenty kolejno w tekście, „ … ” = przerwa (B4-D7).
- Stan wejścia sprawdzony: C2-04 i C2-05 są już w katalogu (beef-veal-v08 „140 °F (60 °C)”, requiredWarnings MIE-036; game-lamb-v09 MIE-036, MIE-035, MIE-033).

## 1. Wynik

| Partia | Wariantów | Nowe twierdzenia | Krytyczne | Bez źródła |
|---|---|---|---|---|
| S7 | 7 | 13 (SUS-123, SUS-124, SUS-125, SUS-126, SUS-127, SUS-128, SUS-129, SUS-130, SUS-131, SUS-137, SUS-138, SUS-139, SUS-140) | 4 | 3 |
| S8 | 8 | 10 (SUS-126, SUS-129, SUS-130, SUS-131, SUS-132, SUS-133, SUS-134, SUS-135, SUS-136, SUS-137) | 3 | 0 |
| S9 | 4 | 12 (SUS-138, SUS-139, SUS-140, SUS-141, SUS-142, SUS-143, SUS-144, SUS-145, SUS-146, SUS-147, SUS-148, SUS-149) | 9 | 1 |
| M | 2 | 16 (MIE-100, MIE-101, MIE-102, MIE-103, MIE-104, MIE-105, MIE-106, MIE-107, MIE-108, MIE-109, MIE-110, MIE-111, MIE-112, MIE-113, MIE-114, MIE-115) | 14 | 0 |

Razem 43 nowych twierdzeń: SUS-123–SUS-149 (27) i MIE-100–MIE-115 (16), plus uzupełnienia źródeł SUS-035, SUS-039, SUS-040. Krytycznych: 28. Ze źródłem szczebla 1: 13. Jedno źródło szczebla 3: 22. Sprzeczne: 1 (SUS-140).

Kontrole (dowód):
- cytaty: 61/61 (43 twierdzenia + 6 uzupełnień): dosłownie w tekście z curl/pdftotext (skrypt roboczy sesji poza repo, zakres B7 to tylko dwa pliki: normalizacja spacji, cudzysłowów, NFC; fragmenty w kolejności).
- mutacja: MIE-112 „10 to 24 hours” → „10 to 12 hours”: 1 brak, wykryta.
- przeklad: tools/i18n/niezmienniki.mjs porownaj(en, pl, "pl"): 0 różnic w 43 parach; test negatywny (10–12 → 10–16) wykryty.
- kolizje_id: SUS-123–179 i MIE-100–129: 0 trafień w rejestr.json, docs/tresci/E1-*.json i git grep na wszystkich origin/claude/*.
- `npm run check`: wynik w sekcji 9.

## 2. Źródła odczytane dziś (curl, 2026-11-02)

sha12 = pierwsze 12 znaków SHA-256 surowej odpowiedzi (jak w B4: csu-veg 3f112e49d126 zgodne).

| Klucz | HTTP | sha12 | Adres |
|---|---|---|---|
| nchfp-jerky | 200 | b9a5d6a96f7a | https://nchfp.uga.edu/how/dry/recipes/jerky/ |
| nchfp-jerky2 | 200 | ce5c9658593d | https://nchfp.uga.edu/how/dry/jerky |
| fsis-jerky | 403 | 06840d20d791 | https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat/jerky |
| clemson-veg | 403 | 0abbb1b6d609 | https://hgic.clemson.edu/factsheet/drying-vegetables/ |
| clemson-jerky | 403 | 27d574e7e991 | https://hgic.clemson.edu/factsheet/making-jerky-at-home/ |
| clemson-jerky2 | 403 | 9b7a1c82c041 | https://hgic.clemson.edu/factsheet/drying-meats/ |
| csu-veg | 200 | 3f112e49d126 | https://extension.colostate.edu/resource/drying-vegetables/ |
| csu-jerky | 404 | e3b0c44298fc | https://extension.colostate.edu/resource/making-jerky-at-home-safely/ |
| csu-jerky2 | 404 | e3b0c44298fc | https://extension.colostate.edu/topic-areas/nutrition-food-safety-health/making-jerky-at-home-safely-9-311/ |
| msu-veg | 200 | 674501531474 | https://extension-store.montana.edu/montguides/drying-vegetables |
| psu-dfv | 200 | ff5144006bb6 | https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration |
| psu-lp-jerky | 404 | 129ee0f8abce | https://extension.psu.edu/lets-preserve-jerky |
| psu-jerky2 | 404 | 27898c1809b3 | https://extension.psu.edu/making-jerky-safely |
| umn-jerky | 404 | 32bdea59d7c0 | https://extension.umn.edu/preserving-and-preparing/making-jerky-home |
| umn-jerky2 | 404 | fa65626508d2 | https://extension.umn.edu/preserving-and-preparing/drying-meat |
| umn-dry2 | 200 | 84367dff6361 | https://extension.umn.edu/preserving-and-preparing/drying-food |
| umn-mush | 404 | 20e9818bfa24 | https://extension.umn.edu/mushrooms/wild-mushrooms |
| nchfp-pack | 200 | baba4528f90e | https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/ |
| nchfp-sun | 200 | 2b839e741b6e | https://nchfp.uga.edu/how/dry/drying-general/sun-drying/ |
| psu-jerky | 200 | 5ba3ca71fe24 | https://extension.psu.edu/drying-jerky |
| psu-game | 200 | 6d41d3b7a796 | https://extension.psu.edu/proper-processing-of-wild-game-and-fish |
| psu-gamesafe | 200 | 688108115f8b | https://extension.psu.edu/game-meat-safety |
| psu-meat | 200 | f17a0e4c9176 | https://extension.psu.edu/lets-preserve-meat-and-poultry |
| usu-meat | 200 | 977958229283 | https://extension.usu.edu/preserve-the-harvest/research/drying-meat |
| usu-venison | 200 | 8f53aa781c56 | https://extension.usu.edu/preserve-the-harvest/research/venison |
| umn-meat | 200 | c7030ad463c1 | https://extension.umn.edu/preserve-your-own-food/meat-fish-and-poultry |
| umn-drying | 200 | f436577c6b2b | https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/drying |
| osu-mush | 200 | 690aff0e0d7c | https://extension.oregonstate.edu/catalog/sp-50-919-preserving-mushrooms |
| psu-terms | 200 | 11b13e0130ed | https://extension.psu.edu/terms-when-drying-foods |
| usu-dry | 200 | a3bfd089cee3 | https://extension.usu.edu/preserve-the-harvest/drying |
| osu-deh | 200 | e8582cba08b5 | https://extension.oregonstate.edu/mfp/food-dehydrators |
| gis-ocena | 200 | 6c367cf82860 | https://www.gov.pl/web/gis/kto-moze-oceniac-grzyby |
| gis-grzyby | 200 | d8c29c5c593a | https://www.gov.pl/web/gis/grzyby-i-przetwory-grzybowe |
| psse-glogow | 200 | b8d126216ca0 | https://www.gov.pl/web/psse-glogow/poznaj-grzyby |
| mu-deh | 200 | c762e97677e3 | https://extension.missouri.edu/publications/gh1562 |
| il-faq | 200 | 13a5faccde8e | https://extension.illinois.edu/food-preservation/drying-faq |
| psu-pep | 200 | 64be93ae5f95 | https://extension.psu.edu/preserving-those-colorful-garden-peppers |
| csu-news | 200 | 074431e9155e | https://sam.extension.colostate.edu/wp-content/uploads/sites/39/2018/02/NewsYouCanUseFebruary_12.2017_Snacking.pdf |
| osu-store | 200 | 102a294d8d9e | https://extension.oregonstate.edu/sites/extd8/files/2023-08/pnw612.pdf |
| psse-waw | 200 | 82ec8c1c4783 | https://www.gov.pl/web/psse-warszawa/grzyby--wybieraj-bezpiecznie |
| psse-mysl | 200 | 981a882e90fc | https://www.gov.pl/web/psse-mysliborz/poznaj-grzyby-unikniesz-zatrucia---kania-czubajka-vs-muchomor-sromotnikowy |
| psse-pila | 200 | d4a1beeaaa28 | https://www.gov.pl/web/psse-pila/grzyby--podstawowe-zasady-bezpiecznego-grzybobrania |
| psse-gdansk | 200 | 6865268bfdd2 | https://www.gov.pl/web/psse-gdansk/bezpieczne-grzybobranie---wiedza-rozwaga-i-zdrowie |
| dz2026-258 | 200 | 69b1e01152b0 | https://api.sejm.gov.pl/eli/acts/DU/2026/258/text.pdf |

Bez cytatu w tym pliku: strony 404 (CSU, Penn State i UMN pod starymi adresami jerky; UMN wild mushrooms), 403 (Clemson ×3, FSIS), oraz pobrane do porównania: `nchfp-jerky2` (ta sama treść co `nchfp-jerky`, adres z rejestru MIE-036), `nchfp-pack`, `nchfp-sun`, `psu-gamesafe`, `psu-terms`, `umn-meat`, `umn-drying`, `usu-meat`, `usu-venison`, `usu-dry`, `osu-deh`, `mu-deh`, `il-faq`. Utah State `usu-dry` odrzucone dla warzyw: etykiety w tabeli przesunięte o wiersz (np. pod „Green Beans” opis chrzanu) i suszenie warzyw na słońcu, sprzeczne z SUS-003. Utah State `usu-meat` odrzucone (B7-D2). Szczeble: NCHFP i Dz.U. 1; extension (CSU, MSU, Penn State, UMN, OSU) oraz GIS i PSSE 3.

## 3. Twierdzenia (do wklejenia przez tor A)

### S7: chipsy i warzywa III

**SUS-123** (S7; jedno źródło)

- pl: Niektóre cienko krojone warzywa, np. chipsy z cukinii, wysychają na chrupko.
- en: Some thinly sliced vegetables, such as zucchini chips, dry crisp.
- źródło (szczebel 3, sha12 ff5144006bb6): Penn State Extension, Let's Preserve: Drying Fruits and Vegetables; Preparing the Food (https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration): „Some thinly sliced fruits and vegetables, such as apple chips or zucchini chips, will dry crisp.”
- uwaga: Drugie źródło dla SUS-039 (Clemson 403 w dniu odczytu).
- warianty: leafy-greens-v10, zucchini-v16, beetroot-v15, parsnip-parsley-v09

**SUS-124** (S7; jedno źródło)

- pl: Suszone plastry warzyw można jeść jako chipsy do dipów.
- en: Dried vegetable slices can be eaten as vegetable chips for dips.
- źródło (szczebel 3, sha12 84367dff6361): Univ. of Minnesota Extension, Drying food; Using dried vegetables (https://extension.umn.edu/preserving-and-preparing/drying-food): „Dried sliced vegetables can be eaten as tasty vegetable chips for dips.”
- warianty: leafy-greens-v10, zucchini-v16, beetroot-v15, parsnip-parsley-v09

**SUS-125** (S7; jedno źródło)

- pl: Według CSU chrupkie chipsy z jarmużu, buraków lub cukinii można bezpiecznie zrobić w piekarniku, gdy nie ma suszarki.
- en: According to CSU, crispy chips from kale, beets or zucchini can safely be made in the oven when no dehydrator is available.
- źródło (szczebel 3, sha12 074431e9155e): Colorado State Univ. Extension, News You Can Use, luty 2018 (PDF, pdftotext); s. 3, „Dehydrated Snacks” (https://sam.extension.colostate.edu/wp-content/uploads/sites/39/2018/02/NewsYouCanUseFebruary_12.2017_Snacking.pdf): „Crispy chips made from kale, beets, or zucchini can safely be made using the oven, if you don’t have access to a food dehydrator.”
- uwaga: Biuletyn hrabstwa CSU, nie publikacja recenzowana: jedno źródło, atrybucja w treści. Piekarnik według SUS-069–072.
- warianty: leafy-greens-v10, zucchini-v16, beetroot-v15

**SUS-126** (S7, S8; krytyczne)

- pl: Buraki: ugotować jak zwykle, ostudzić, obrać i kroić w słupki grubości 1/8 cala (ok. 3 mm); bez blanszowania (już ugotowane); suszyć 10–12 godzin, do stanu łamliwego, ciemnoczerwonego.
- en: Beets: cook as usual, cool, peel and cut into shoestring strips 1/8 inch (about 3 mm) thick; no blanching (already cooked); dry 10–12 hours, until brittle and dark red.
- źródło (szczebel 3, sha12 3f112e49d126): Colorado State Univ. Extension, Drying Vegetables; Table 2, wiersz Beets (https://extension.colostate.edu/resource/drying-vegetables/): „Beets | Cook as usual. Cool, peel. Cut into shoestring strips 1/8″ thick. | None | 10-12 | Brittle, dark red”
- źródło (szczebel 3, sha12 674501531474): Montana State Univ. Extension, MontGuide Drying Vegetables (recenzja: E. Andress, NCHFP); tabela suszenia warzyw, wiersz Beets (https://extension-store.montana.edu/montguides/drying-vegetables): „Cook as usual. Cool and peel. Cut into shoestring strips ¹⁄8 inch thick. | Already cooked. No further blanching required. | 10-12”
- uproszczenie: Chipsy (beetroot-v15) to plastry, źródła podają słupki; grubość 1/8 cala i stan łamliwy bez zmian.
- warianty: beetroot-v15, beetroot-v16

**SUS-127** (S7; krytyczne; jedno źródło)

- pl: Marchew i pasternak: tylko jędrne, delikatne korzenie; umyć, odciąć korzonki i nać, obrać, kroić w plastry lub paski grubości 1/8 cala (ok. 3 mm); blanszować 4 minuty, suszyć 6–10 godzin, do stanu twardego lub łamliwego.
- en: Carrots and parsnips: use only crisp, tender roots; wash, cut off roots and tops, peel, cut in slices or strips 1/8 inch (about 3 mm) thick; blanch 4 minutes, dry 6–10 hours, until tough to brittle.
- źródło (szczebel 3, sha12 3f112e49d126): Colorado State Univ. Extension, Drying Vegetables; Table 2, wiersz Carrots, parsnips (https://extension.colostate.edu/resource/drying-vegetables/): „Carrots, parsnips | Use only crisp, tender vegetables. Wash. Cut off roots and tops; peel. Cut in slices or strips 1/8″ thick. | 4 | 6-10 | Tough to brittle”
- uwaga: MSU ma tylko marchew. Pietruszki korzeniowej (nazwa wariantu „pasternak/pietruszka”) nie ma w żadnej tabeli: karta tylko o pasternaku.
- warianty: parsnip-parsley-v09

**SUS-128** (S7; krytyczne)

- pl: Cukinia (dynia letnia): umyć, oczyścić, kroić w plastry 1/4 cala (ok. 6 mm); blanszować (CSU: 4 minuty; MSU: parą 2,5–3 minuty albo w wodzie 0,5 minuty); suszyć 10–16 godzin (CSU) albo 10–12 godzin (MSU), do stanu skórzastego lub łamliwego.
- en: Zucchini (summer squash): wash, trim, cut into 1/4 inch (about 6 mm) slices; blanch (CSU: 4 minutes; MSU: steam 2.5–3 minutes or water 0.5 minutes); dry 10–16 hours (CSU) or 10–12 hours (MSU), until leathery to brittle.
- źródło (szczebel 3, sha12 3f112e49d126): Colorado State Univ. Extension, Drying Vegetables; Table 2, wiersz Squash, summer or banana (https://extension.colostate.edu/resource/drying-vegetables/): „Squash, summer or banana | Wash, trim, cut into 1/4″ slices. | 4 | 10-16 | Leathery to brittle”
- źródło (szczebel 3, sha12 674501531474): Montana State Univ. Extension, MontGuide Drying Vegetables (recenzja: E. Andress, NCHFP); tabela suszenia warzyw, wiersz Squash, summer (https://extension-store.montana.edu/montguides/drying-vegetables): „Squash, summer | Wash, trim and cut into ¼ inch slices. | 2.5-3 | 0.5 | 10-12”
- uwaga: Różnica między źródłami tego samego szczebla pokazana. Chipsy suszy się do stanu łamliwego (SUS-017, SUS-123).
- warianty: zucchini-v16

**SUS-129** (S7, S8)

- pl: Chrzan: umyć, usunąć drobne korzonki i resztki, obrać lub oskrobać, zetrzeć na tarce; bez blanszowania; suszyć 6–10 godzin (CSU) albo 4–10 godzin (MSU), do stanu łamliwego, sypkiego jak proszek.
- en: Horseradish: wash, remove small rootlets and stubs, peel or scrape the roots, grate; no blanching; dry 6–10 hours (CSU) or 4–10 hours (MSU), until brittle and powdery.
- źródło (szczebel 3, sha12 3f112e49d126): Colorado State Univ. Extension, Drying Vegetables; Table 2, wiersz Horseradish (https://extension.colostate.edu/resource/drying-vegetables/): „Horseradish | Wash, remove small rootlets and stubs. Peel or scrape roots. Grate. | None | 6-10 | Brittle, powdery”
- źródło (szczebel 3, sha12 674501531474): Montana State Univ. Extension, MontGuide Drying Vegetables (recenzja: E. Andress, NCHFP); tabela suszenia warzyw, wiersz Horseradish (https://extension-store.montana.edu/montguides/drying-vegetables): „Horseradish | Wash, remove small rootlets and stubs. Peel or scrape roots. Grate. | No blanching needed | 4-10”
- uwaga: Źródła opisują chrzan tarty, nie plastry (horseradish-v11): patrz bez_zrodla i B7-D5.
- warianty: horseradish-v11, horseradish-v12

**SUS-130** (S7, S8; jedno źródło)

- pl: Według MSU zapach chrzanu podczas suszenia jest bardzo silny; potrzebna dobra wentylacja.
- en: According to MSU, the odor of horseradish during drying is extremely strong; use adequate ventilation.
- źródło (szczebel 3, sha12 674501531474): Montana State Univ. Extension, MontGuide Drying Vegetables (recenzja: E. Andress, NCHFP); tabela przydatności, przypis 3 (https://extension-store.montana.edu/montguides/drying-vegetables): „Odor extremely strong during processing; use adequate ventilation.”
- warianty: horseradish-v11, horseradish-v12

**SUS-131** (S7, S8; jedno źródło)

- pl: Według MSU przydatność do suszenia: buraki „dostateczna do dobrej”, kapusta „dostateczna”, marchew „dobra”, chrzan „dobra”, jarmuż „słaba”, cebula „dobra do bardzo dobrej”, czosnek „dobra”, grzyby „dobra”, papryka „dobra”, cukinia „słaba do dostatecznej”.
- en: According to MSU, suitability for drying: beets “fair to good”, cabbage “fair”, carrots “good”, horseradish “good”, kale “poor”, onions “good to excellent”, garlic “good”, mushrooms “good”, peppers “good”, zucchini “poor to fair”.
- źródło (szczebel 3, sha12 674501531474): Montana State Univ. Extension, MontGuide Drying Vegetables (recenzja: E. Andress, NCHFP); tabela Suitability for Drying (https://extension-store.montana.edu/montguides/drying-vegetables): „Beets | Fair to good | Broccoli | Not recommended | Brussels sprouts | Poor 1 | Cabbage | Fair 2 | Carrots | Good … Garlic | Good … Horseradish | Good 3 | Kale | Poor … Mushrooms | Good … Onions | Good to Excellent … Peppers, green or red | Good … Zucchini | Poor to fair”
- uwaga: Ocena jakości, nie bezpieczeństwa; uzupełnia SUS-121 (brokuł, szpinak). Dla płatków chili: wiersz „Peppers, green or red”.
- warianty: beetroot-v15, beetroot-v16, red-savoy-cabbage-v12, parsnip-parsley-v09, horseradish-v11, horseradish-v12, leafy-greens-v10, onion-v14, garlic-v16, chili-pepper-v18, zucchini-v16, cultivated-mushrooms-v11

**SUS-137** (S7, S8)

- pl: Suszone warzywa przechowuje się w szczelnych pojemnikach, żeby nie wchłaniały wilgoci z powietrza; suche produkty poza szczelnym pojemnikiem wchłaniają wilgoć, a proszki się zbrylają.
- en: Store dried vegetables in airtight containers so they do not absorb moisture from the air; dry foods kept out of airtight containers absorb moisture, and powders clump.
- źródło (szczebel 3, sha12 ff5144006bb6): Penn State Extension, Let's Preserve: Drying Fruits and Vegetables; Conditioning and storing (https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration): „Store dried vegetables in air-tight containers to prevent food from absorbing the moisture in the air.”
- źródło (szczebel 3, sha12 102a294d8d9e): Oregon State Univ. Extension, PNW 612 Storing Food for Safety and Quality (PDF, pdftotext); s. 3, Dry storage (https://extension.oregonstate.edu/sites/extd8/files/2023-08/pnw612.pdf): „Dry foods not stored in airtight containers may absorb moisture, resulting in powders that clump”
- uwaga: PDF OSU ma dwie kolumny; cytat złożony z kolejnych wierszy prawej kolumny, sprawdzony na tekście pdftotext bez -layout.
- warianty: horseradish-v11, leafy-greens-v10, green-beans-v14, zucchini-v16, beetroot-v15, parsnip-parsley-v09, red-savoy-cabbage-v12, broccoli-v11, leafy-greens-v11, chili-pepper-v18, beetroot-v16, onion-v14, horseradish-v12, garlic-v16

### S8: proszki

**SUS-132** (S8; jedno źródło)

- pl: Według MSU suszona kapusta łatwo wchłania wilgoć z powietrza i dobrze się przechowuje tylko w bardzo niskiej temperaturze.
- en: According to MSU, dried cabbage readily absorbs moisture from the air and keeps well only if stored at extremely cold temperatures.
- źródło (szczebel 3, sha12 674501531474): Montana State Univ. Extension, MontGuide Drying Vegetables (recenzja: E. Andress, NCHFP); tabela przydatności, przypis 2 (https://extension-store.montana.edu/montguides/drying-vegetables): „Cabbage readily absorbs moisture from the air. Keeps well only if stored at extremely cold temperatures.”
- warianty: red-savoy-cabbage-v12

**SUS-133** (S8; krytyczne; jedno źródło)

- pl: Czerwone papryczki chili: dokładnie umyć, pokroić w plastry albo małe zostawić w całości; blanszować 4 minuty; suszyć 12–24 godzin, aż strąki będą skurczone, ciemnoczerwone i giętkie.
- en: Red chili peppers: wash thoroughly, slice or leave whole if small; blanch 4 minutes; dry 12–24 hours, until the pods are shrunken, dark red and flexible.
- źródło (szczebel 3, sha12 3f112e49d126): Colorado State Univ. Extension, Drying Vegetables; Table 2, wiersz Chili peppers, red (https://extension.colostate.edu/resource/drying-vegetables/): „Chili peppers, red | Wash thoroughly. Slice or leave whole if small. | 4 | 12-24 | Shrunken, dark red pods, flexible”
- uwaga: Penn State nie blanszuje papryki słodkiej (SUS-113 ma różnicę); dla chili przyjęte CSU z blanszowaniem (wariant ostrożniejszy, SUS-014).
- warianty: chili-pepper-v18

**SUS-134** (S8; krytyczne; jedno źródło)

- pl: Chili pokrojone w kostkę schnie szybciej niż całe, z lepszą barwą i aromatem; przy przygotowaniu ostrych papryczek do suszenia nosi się rękawiczki.
- en: Diced chili peppers dry faster than whole ones, with better color and aroma; wear gloves when preparing hot peppers for drying.
- źródło (szczebel 3, sha12 64be93ae5f95): Penn State Extension, Preserving Those Colorful Garden Peppers; Drying Peppers (https://extension.psu.edu/preserving-those-colorful-garden-peppers): „Diced chili peppers dry faster than whole ones, resulting in better color and aroma. … Remember to wear gloves when preparing hot peppers for drying.”
- warianty: chili-pepper-v18

**SUS-135** (S8; jedno źródło)

- pl: Suszoną paprykę można posiekać albo zmielić na proszek w blenderze; całe suszone strąki ostrej papryki miele się na proszek chili.
- en: Dried peppers can be chopped or ground to a powder in a blender; whole pods of dried hot peppers are blended to a chili powder.
- źródło (szczebel 3, sha12 64be93ae5f95): Penn State Extension, Preserving Those Colorful Garden Peppers; Drying Peppers, Note (https://extension.psu.edu/preserving-those-colorful-garden-peppers): „Reduce this problem by chopping or grinding peppers to a powder in a blender. … Whole pods of dried hot peppers can be blended to a powder to make cayenne pepper of chili powder.”
- uproszczenie: Płatki (chili-pepper-v18) to grubsze rozdrobnienie tego samego suszu; źródło mówi o proszku i siekaniu.
- warianty: chili-pepper-v18

**SUS-136** (S8; jedno źródło)

- pl: Proszek cebulowy: plastry cebuli suszy się do chrupkości i miele w blenderze.
- en: Onion powder: dry onion slices until crisp and powder them in a blender.
- źródło (szczebel 3, sha12 84367dff6361): Univ. of Minnesota Extension, Drying food; Using dried vegetables (https://extension.umn.edu/preserving-and-preparing/drying-food): „Make your own onion powder by drying onion slices until crisp and powder in the blender.”
- uwaga: Drugie źródło dla SUS-040 (Clemson 403 w dniu odczytu).
- warianty: onion-v14

### S9: grzyby dzikie (oraz shiitake z S7)

**SUS-138** (S9, S7; krytyczne; jedno źródło)

- pl: Suszy się tylko grzyby uprawne albo dzikie, które na pewno są jadalne; kto nie jest ekspertem w rozpoznawaniu grzybów, powinien utrwalać tylko grzyby kupione w handlu.
- en: Dry only cultivated or wild mushrooms that are safe to eat; unless you are an expert in mushroom identification, preserve only commercially sold mushrooms.
- źródło (szczebel 3, sha12 690aff0e0d7c): Oregon State Univ. Extension, SP 50-919 Preserving mushrooms; wstęp; Drying mushrooms (https://extension.oregonstate.edu/catalog/sp-50-919-preserving-mushrooms): „Unless you are an expert in mushroom identification, it is advisable to only preserve commercially sold mushrooms. … Only dry cultivated or wild mushrooms that are safe to eat.”
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09, cultivated-mushrooms-v11

**SUS-139** (S9, S7; jedno źródło)

- pl: Według OSU większość grzybów dobrze się suszy; do suszenia nadają się m.in. pieczarki, kurki, shiitake, boczniaki i smardze.
- en: According to OSU, most mushrooms dry well; good varieties for drying include button mushrooms, chanterelles, shiitake, oyster mushrooms and morels.
- źródło (szczebel 3, sha12 690aff0e0d7c): Oregon State Univ. Extension, SP 50-919 Preserving mushrooms; Drying mushrooms (https://extension.oregonstate.edu/catalog/sp-50-919-preserving-mushrooms): „Most mushrooms dry well. Good varieties for drying are button mushrooms, Chanterelles, Shitake, Oyster, Lobster and Morels.”
- uwaga: Borowików OSU nie wymienia; dla borowików zostaje ogólna procedura SUS-036.
- warianty: chanterelle-milkcap-v13, cultivated-mushrooms-v11

**SUS-140** (S9, S7; jedno źródło; sprzeczne)

- pl: Według OSU grzyby (zamknięte kapelusze) czyści się miękką szczoteczką lub ściereczką i szybko płucze, wycina wątpliwe części i zdrewniałe trzony, suszy w całości lub przekrojone na pół, grubość ok. 1/2 cala (ok. 13 mm), w suszarce w 120 °F (ok. 49 °C), aż będą chrupkie lub łamliwe.
- en: According to OSU, mushrooms (closed caps) are cleaned with a soft brush or cloth and quickly rinsed, questionable parts and woody stems are cut away, and they are dried whole or halved, about 1/2 inch (about 13 mm) thick, in a dehydrator at 120 °F (about 49 °C) until crisp or brittle.
- źródło (szczebel 3, sha12 690aff0e0d7c): Oregon State Univ. Extension, SP 50-919 Preserving mushrooms; Drying mushrooms (https://extension.oregonstate.edu/catalog/sp-50-919-preserving-mushrooms): „Select fresh mushrooms with closed caps and visible gills under the cap. Clean them with a soft brush or cloth and quickly rinse to remove any dirt. Cut away any questionable parts and trim woody portions from the stem. Dry whole or sliced in half. Thickness should be approximately ½ inch. | Dry mushrooms in a dehydrator at 120ºF until are crisp or brittle.”
- uwaga: Sprzeczne z SUS-036 (CSU: plastry 1/4 cala, 8–12 h, „suche i skórzaste”) na tym samym szczeblu. Decyzja B7-D4: karty zostają przy SUS-036, OSU tylko jako pokazana różnica; nie mieszamy procedur.
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09, cultivated-mushrooms-v11

**SUS-141** (S9; krytyczne; jedno źródło)

- pl: Najczęstsze i najgroźniejsze zatrucia grzybami w Polsce powoduje muchomor sromotnikowy, mylony z jadalnymi gatunkami, takimi jak czubajka kania i gąska zielona.
- en: The most frequent and most dangerous mushroom poisonings in Poland are caused by the death cap, which is mistaken for edible species such as the parasol mushroom and the yellow knight (Tricholoma equestre).
- źródło (szczebel 3, sha12 82ec8c1c4783): PSSE Warszawa, Grzyby – wybieraj bezpiecznie; akapit o zatruciach (https://www.gov.pl/web/psse-warszawa/grzyby--wybieraj-bezpiecznie): „Najczęstsze i najbardziej niebezpieczne zatrucia spowodowane są po zjedzeniu muchomora sromotnikowego, który mylony jest z takimi grzybami jadalnymi jak: czubajka kania, gąska zielona.”
- źródło (szczebel 3, sha12 6865268bfdd2): PSSE Gdańsk, Bezpieczne grzybobranie; akapit o zatruciach (https://www.gov.pl/web/psse-gdansk/bezpieczne-grzybobranie---wiedza-rozwaga-i-zdrowie): „Najgroźniejsze zatrucia są spowodowane spożyciem muchomora sromotnikowego, który bywa mylony z jadalnymi gatunkami, takimi jak kania czubajka czy gąska zielona.”
- źródło (szczebel 3, sha12 981a882e90fc): PSSE Myślibórz, Kania czubajka vs muchomor sromotnikowy; akapit 1 (https://www.gov.pl/web/psse-mysliborz/poznaj-grzyby-unikniesz-zatrucia---kania-czubajka-vs-muchomor-sromotnikowy): „jednym z najbardziej niebezpiecznych błędów jest mylenie kani z muchomorem sromotnikowym, który jest wyjątkowo trujący”
- uwaga: Trzy stacje PSSE (szczebel 3, urząd); możliwe źródło wspólne, więc liczone ostrożnie jako jedno. Nazwa „Poland” w en: źródła są polskie (jurysdykcja, zasada 2 modułu).
- warianty: wild-mushrooms-v09

**SUS-142** (S9; krytyczne)

- pl: W razie wątpliwości, czy grzyby są jadalne, zanosi się je do stacji sanitarno-epidemiologicznej, gdzie grzyboznawcy lub klasyfikatorzy grzybów bezpłatnie ocenią, czy są jadalne, niejadalne czy trujące.
- en: If in doubt whether mushrooms are edible, take them to a sanitary-epidemiological station, where mushroom experts or classifiers assess free of charge whether they are edible, inedible or poisonous.
- źródło (szczebel 3, sha12 82ec8c1c4783): PSSE Warszawa, Grzyby – wybieraj bezpiecznie; akapit o ocenie (https://www.gov.pl/web/psse-warszawa/grzyby--wybieraj-bezpiecznie): „W takiej sytuacji najlepiej przynieść je do najbliższej stacji sanitarno-epidemiologicznej, w której dyżury pełnią grzyboznawcy lub klasyfikatorzy grzybów. Specjalista bezpłatnie oceni czy grzyby są jadalne, niejadalne, czy też trujące”
- źródło (szczebel 3, sha12 6865268bfdd2): PSSE Gdańsk, Bezpieczne grzybobranie; akapit o ocenie (https://www.gov.pl/web/psse-gdansk/bezpieczne-grzybobranie---wiedza-rozwaga-i-zdrowie): „W razie wątpliwości, warto udać się do najbliższej stacji sanitarno-epidemiologicznej, gdzie dyżurują grzyboznawcy lub klasyfikatorzy. Ocena grzybów jest bezpłatna.”
- uwaga: Polska; dla innych rynków instytucji nie ustalono (otwarte pytanie B7-P2).
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

**SUS-143** (S9; krytyczne; jedno źródło)

- pl: Do oceny przynosi się całe owocniki (kapelusz i trzon), bo ważne cechy rozpoznawcze są też na trzonie.
- en: Bring whole fruiting bodies (cap and stem) for assessment, because important identifying features are also on the stem.
- źródło (szczebel 3, sha12 d4a1beeaaa28): PSSE Piła, Grzyby – podstawowe zasady bezpiecznego grzybobrania; akapit o ocenie (https://www.gov.pl/web/psse-pila/grzyby--podstawowe-zasady-bezpiecznego-grzybobrania): „Ważne aby do oceny grzybów przynosić całe owocniki (kapelusz oraz trzon) ponieważ istotne cechy diagnostyczne znajdują się również na trzonie owocnika.”
- uwaga: Wniosek redakcji do weta (B7-D3): ocena przed krojeniem i suszeniem, bo susz z samych kapeluszy (wild-mushrooms-v09) nie ma trzonu.
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

**SUS-144** (S9; krytyczne; jedno źródło)

- pl: Grzyboznawca ma uprawnienia do oceny przydatności do spożycia grzybów świeżych i suszonych.
- en: A mushroom expert (grzyboznawca) is authorised to assess whether fresh and dried mushrooms are fit to eat.
- źródło (szczebel 3, sha12 6c367cf82860): GIS, Kto może oceniać grzyby; Grzyboznawca (https://www.gov.pl/web/gis/kto-moze-oceniac-grzyby): „Grzyboznawca ma prawo oceniać przydatność do spożycia i sprzedaży nie tylko grzybów świeżych, ale i suszonych.”
- uwaga: Polska (GIS).
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

**SUS-145** (S9; krytyczne)

- pl: Pierwsze objawy zatrucia grzybami często pojawiają się długo po zjedzeniu, czasem nawet po kilku dniach; po chwilowej poprawie stan chorego może się gwałtownie pogorszyć. Przy objawach trzeba natychmiast wezwać lekarza albo zgłosić się do szpitala.
- en: The first symptoms of mushroom poisoning often appear long after eating, sometimes only after several days; after a temporary improvement the condition can worsen rapidly. With symptoms, call a doctor at once or go to hospital.
- źródło (szczebel 3, sha12 b8d126216ca0): PSSE Głogów, Poznaj grzyby; Najczęściej mylone grzyby; Zatrucie grzybami (https://www.gov.pl/web/psse-glogow/poznaj-grzyby): „Pierwsze objawy zatrucia często pojawiają się długo po spożyciu, w niektórych przypadkach nawet po kilku dniach. … powinniśmy natychmiast wezwać lekarza lub zgłosić się do szpitala !”
- źródło (szczebel 3, sha12 d4a1beeaaa28): PSSE Piła, Grzyby – podstawowe zasady bezpiecznego grzybobrania; akapit o zatruciu (https://www.gov.pl/web/psse-pila/grzyby--podstawowe-zasady-bezpiecznego-grzybobrania): „może nastąpić chwilowa poprawa samopoczucia, po której stan chorego gwałtownie się pogarsza.”
- uwaga: Pozostałe zalecenia pierwszej pomocy z PSSE Głogów (wywoływanie wymiotów) pominięte: aplikacja nie udziela porad medycznych (moduł tresci-krytyczne, zasada 5), B7-D6.
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

**SUS-146** (S9; krytyczne; jedno źródło)

- pl: Minister Zdrowia przypomina, by jeść wyłącznie grzyby jadalne poddane obróbce termicznej, np. smażeniu lub gotowaniu.
- en: The Polish Minister of Health reminds people to eat only edible mushrooms that have been heat-treated, such as fried or cooked.
- źródło (szczebel 3, sha12 b8d126216ca0): PSSE Głogów, Poznaj grzyby; akapit wstępny (https://www.gov.pl/web/psse-glogow/poznaj-grzyby): „Minister Zdrowia przypomina, aby spożywać wyłącznie grzyby jadalne poddane obróbce termicznej, takiej jak smażenie lub gotowanie.”
- uwaga: Dotyczy też pudru borowikowego (boletes-v12): używać w potrawach gotowanych, nie na surowo (wniosek redakcji, B7-D3).
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

**SUS-147** (S9; krytyczne)

- pl: Polska: w wykazie grzybów dopuszczonych do obrotu są m.in. borowik szlachetny, czubajka kania i pieprznik jadalny (kurka); dopuszczone są też jako grzyby suszone. Wykaz dotyczy obrotu i nie mówi, że grzyb zebrany samodzielnie jest bezpieczny.
- en: Poland: the list of mushrooms permitted for trade includes the king bolete, the parasol mushroom and the chanterelle; they are also permitted as dried mushrooms. The list concerns trade and does not say that a self-picked mushroom is safe.
- źródło (szczebel 1, sha12 69b1e01152b0): Dz.U. 2026 poz. 258, jednolity tekst rozporządzenia MZ z 17.05.2011 w sprawie grzybów (PDF, pdftotext); zał. 1 pkt 8, 10, 44; zał. 2 cz. A ust. 5 pkt 1 (https://api.sejm.gov.pl/eli/acts/DU/2026/258/text.pdf): „8) borowik szlachetny (prawdziwek – wszystkie odmiany) – Boletus edulis Bull.; … 10) czubajka kania – Macrolepiota procera (Scop.) Singer; … 44) pieprznik jadalny (kurka) – Cantharellus cibarius Fr.; … do ich sporządzenia użyto jednego z gatunków grzybów świeżych wymienionych w pkt 5, 8, 10 i 11, 14–17, 19 i 20, 24–36,”
- uwaga: Zdanie „wykaz … nie mówi, że …” to granica zastosowania (zakres przepisu: obrót), nie twierdzenie źródła; analogia B6-D3 (normy produktowe tylko jako kontekst).
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

**SUS-148** (S9)

- pl: Polska, obrót: grzyby suszone (całe owocniki, same kapelusze, krajanka, płatki, grysik lub mączka) nie mogą zawierać więcej niż 12% wody.
- en: Poland, trade: dried mushrooms (whole fruiting bodies, caps only, slices, flakes, grits or flour) may contain no more than 12% water.
- źródło (szczebel 1, sha12 69b1e01152b0): Dz.U. 2026 poz. 258, jednolity tekst rozporządzenia MZ z 17.05.2011 w sprawie grzybów (PDF, pdftotext); zał. 2 cz. A ust. 5 (https://api.sejm.gov.pl/eli/acts/DU/2026/258/text.pdf): „Grzyby suszone w postaci całych owocników, samych kapeluszy lub krajanki, płatków, grysiku lub mączki, … nie zawierają więcej niż 12 % wody.”
- uwaga: Wymóg handlowy, nie próg domowy: tylko kontekst (analogia B6-D3). W domu nie da się zmierzyć; karta zostaje przy teście SUS-036/SUS-017.
- warianty: boletes-v11, boletes-v12, wild-mushrooms-v09

**SUS-149** (S9; krytyczne)

- pl: Polska: grzyby świeże i suszone z naturalnych stanowisk można oferować konsumentom tylko w sklepach lub na targowiskach i tylko z atestem; atest na grzyby suszone wystawia grzyboznawca.
- en: Poland: fresh and dried wild mushrooms may be offered to consumers only in shops or at markets and only with a certificate; the certificate for dried mushrooms is issued by a mushroom expert.
- źródło (szczebel 3, sha12 d8c29c5c593a): GIS, Grzyby i przetwory grzybowe; akapity 5 i 7 (https://www.gov.pl/web/gis/grzyby-i-przetwory-grzybowe): „Atesty na grzyby świeże są wydawane przez klasyfikatora grzybów lub grzyboznawcę, natomiast atesty na grzyby suszone są wydawane przez grzyboznawcę. … Grzyby świeże i suszone mogą być oferowane konsumentowi finalnemu wyłącznie w placówkach handlowych lub na targowiskach pod warunkiem uzyskania atestu na grzyby świeże lub atestu na grzyby suszone.”
- źródło (szczebel 1, sha12 69b1e01152b0): Dz.U. 2026 poz. 258, jednolity tekst rozporządzenia MZ z 17.05.2011 w sprawie grzybów (PDF, pdftotext); § 4 ust. 1 (https://api.sejm.gov.pl/eli/acts/DU/2026/258/text.pdf): „wyłącznie w placówkach handlowych lub na targowiskach; | pod warunkiem uzyskania atestu na grzyby świeże lub atestu na grzyby suszone.”
- warianty: boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09

### M: jerky

**MIE-100** (M; krytyczne)

- pl: Surowe mięso może być zanieczyszczone drobnoustrojami chorobotwórczymi, które łatwo namnażają się na wilgotnej, bogatej w białko żywności.
- en: Raw meat can be contaminated with disease-causing microorganisms, which easily multiply on moist, high-protein foods.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; akapit 2 (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Raw meats can be contaminated with microorganisms that cause disease. These harmful bacteria can easily multiply on moist, high protein foods like meat and poultry”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-101** (M; krytyczne)

- pl: Zamrożenie mięsa przeciw włośniom nie usuwa z niego bakterii.
- en: Freezing meat against trichinella does not eliminate bacteria from it.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; akapit 2 (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Freezing will not eliminate bacteria from the meat.”
- źródło (szczebel 3, sha12 6d41d3b7a796): Penn State Extension, Proper Processing of Wild Game and Fish (C. Cutter, 2023); Temperature control (https://extension.psu.edu/proper-processing-of-wild-game-and-fish): „Freezing prevents bacterial growth, but it does not kill them.”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-102** (M; krytyczne; jedno źródło)

- pl: Surowa lub niedogotowana dziczyzna może zawierać bakterie chorobotwórcze, np. Salmonella i chorobotwórcze szczepy E. coli; mięso zanieczyszcza się przez ranę postrzałową, przy patroszeniu, obróbce i transporcie.
- en: Raw or undercooked game meat can contain disease-causing bacteria such as Salmonella and pathogenic strains of E. coli; meat is contaminated through the wound, during field dressing, handling and transport.
- źródło (szczebel 3, sha12 6d41d3b7a796): Penn State Extension, Proper Processing of Wild Game and Fish (C. Cutter, 2023); wstęp (https://extension.psu.edu/proper-processing-of-wild-game-and-fish): „raw or undercooked game meat can contain harmful bacteria such as salmonellae and pathogenic strains of Escherichia coli. … Contamination of meat or fish may occur through the initial wound as well as during field dressing, handling, and transport.”
- warianty: game-lamb-v09

**MIE-103** (M; krytyczne)

- pl: Tuszę jelenia schładza się szybko, żeby nie rozwijały się bakterie.
- en: Deer carcasses are chilled rapidly to avoid bacterial growth.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; akapit o dziczyźnie (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Deer carcasses should be rapidly chilled to avoid bacterial growth.”
- warianty: game-lamb-v09

**MIE-104** (M; krytyczne)

- pl: Według Penn State zalecenie USDA dla jerky: przed suszeniem ogrzać mięso do 160°F (71°C), a drób do 165°F (74°C).
- en: According to Penn State, the USDA recommendation for jerky is to heat meat to 160°F (71°C) and poultry to 165°F (74°C) before drying.
- źródło (szczebel 3, sha12 6d41d3b7a796): Penn State Extension, Proper Processing of Wild Game and Fish (C. Cutter, 2023); Jerky (https://extension.psu.edu/proper-processing-of-wild-game-and-fish): „The USDA's current recommendation for making jerky safely is to heat meat to 160°F (71°C) and poultry to 165°F (74°C) before the dehydrating process.”
- źródło (szczebel 3, sha12 f17a0e4c9176): Penn State Extension, Let's Preserve: Meat and Poultry (2023); Drying (jerky) (https://extension.psu.edu/lets-preserve-meat-and-poultry): „The USDA’s current recommendation for making jerky safely is to heat meat to 160°F (71°C) before the dehydrating process.”
- uwaga: Źródło pochodne: oryginału FSIS nie przeczytano (HTTP 403, bez obchodzenia). Szczebel 3, nie 1. Dla mięsa zgodne z NCHFP (MIE-036, szczebel 1). 165°F dotyczy drobiu; drób na jerky odradzany (MIE-042), wariantu drobiowego w M nie ma.
- warianty: beef-veal-v08, game-lamb-v09

**MIE-105** (M; krytyczne)

- pl: Sama suszarka nie zabija drobnoustrojów, tylko je unieczynnia; większość instrukcji suszarek nie ma etapu ogrzania, a suszarka może nie ogrzać mięsa do 160°F (71°C), więc mięso trzeba najpierw upiec lub ugotować.
- en: A dehydrator alone does not kill microorganisms, it only inactivates them; most dehydrator instructions lack the heating step, and a dehydrator may not heat meat to 160°F (71°C), so the meat must first be baked or simmered.
- źródło (szczebel 3, sha12 6d41d3b7a796): Penn State Extension, Proper Processing of Wild Game and Fish (C. Cutter, 2023); Jerky (https://extension.psu.edu/proper-processing-of-wild-game-and-fish): „But most dehydrator instructions do not include this step, and a dehydrator may not reach temperatures high enough to heat meat to 160°F (71°C). Thus, the meat must be cooked first by baking or simmering before being placed in the dehydrator. Using the dehydrator alone will inactivate microorganisms but not kill them.”
- źródło (szczebel 3, sha12 5ba3ca71fe24): Penn State Extension, Drying Jerky; Dehydrator (https://extension.psu.edu/drying-jerky): „Using the dehydrator alone will inactivate microorganisms but not kill them.”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-106** (M; krytyczne; jedno źródło)

- pl: Według Penn State samo suszenie mięsa może nie dać bezpiecznego produktu: w 1995 r. jerky suszone w 140°F (60°C) przez 3 godziny, bez ogrzania do 160°F (71°C), wywołało zatrucie Salmonella u 93 osób; w tym samym roku jerky suszone w 124–135°F (51–57°C) wywołało zakażenie E. coli O157:H7 u 11 osób.
- en: According to Penn State, simply drying meat may not give a safe product: in 1995, jerky dried at 140°F (60°C) for 3 hours without heating to 160°F (71°C) caused Salmonella illness in 93 people; the same year, jerky dried at 124–135°F (51–57°C) caused E. coli O157:H7 infection in 11 people.
- źródło (szczebel 3, sha12 6d41d3b7a796): Penn State Extension, Proper Processing of Wild Game and Fish (C. Cutter, 2023); Jerky (https://extension.psu.edu/proper-processing-of-wild-game-and-fish): „Simply drying meat may not result in a safe product. In 1995, a Salmonella outbreak caused by jerky affected 93 people in New Mexico. Although the product had been dried at 140°F (60°C) for 3 hours and held at 115°F (46°C) for 19 hours, the jerky (beef) had not been heated to 160°F (71°C), thereby allowing the bacterium to survive. Another jerky outbreak occurred in Oregon in 1995, affecting 11 people with E. coli O157:H7. The jerky from this outbreak had been dried to 124–135°F (51– 57°C) for 12–18 hours, but not to 160°F (71°C).”
- uproszczenie: Pominięto stan (Nowy Meksyk, Oregon), 19 h w 115°F i 12–18 h; liczby przypadków i temperatury bez zmian.
- warianty: beef-veal-v08, game-lamb-v09

**MIE-107** (M; krytyczne)

- pl: Temperaturę kilku pasków sprawdza się metalowym termometrem szpilkowym, czy osiągnęły 160°F (71°C); paski grubsze niż 1/4 cala mogą wymagać dłuższego gotowania w marynacie.
- en: Check several strips with a metal stem-type thermometer to make sure 160°F (71°C) has been reached; strips thicker than 1/4 inch may need a longer boil in the marinade.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; Jerky Marinade (https://nchfp.uga.edu/how/dry/recipes/jerky/): „If strips are more than ¼ inch thick, the length of time may need to be increased. If possible, check the temperature of several strips with a metal stem-type thermometer to determine that 160ºF has been reached.”
- źródło (szczebel 3, sha12 5ba3ca71fe24): Penn State Extension, Drying Jerky; Heating (https://extension.psu.edu/drying-jerky): „Check the internal temperature of the meat using an instant-read thermometer to make sure the meat has reached 160°F.”
- uwaga: NCHFP: „If possible”; wybrano wariant ostrożniejszy (pomiar obowiązkowy, B7-D1), zgodnie z Penn State.
- warianty: beef-veal-v08, game-lamb-v09

**MIE-108** (M; krytyczne; jedno źródło)

- pl: Według Penn State drugą metodą ogrzania przed suszeniem jest pieczenie pasków na kratkach w piekarniku 325°F (163°C), z pomiarem termometrem, czy mięso osiągnęło 160°F (71°C).
- en: According to Penn State, the other way to heat before drying is to bake the strips on racks in a 325°F (163°C) oven, checking with a meat thermometer that the meat has reached 160°F (71°C).
- źródło (szczebel 3, sha12 6d41d3b7a796): Penn State Extension, Proper Processing of Wild Game and Fish (C. Cutter, 2023); Baking Jerky in an Oven (https://extension.psu.edu/proper-processing-of-wild-game-and-fish): „Place the jerky on cake racks placed on baking sheets, and bake in the oven at 325°F (163°C). Check the internal temperature using a properly calibrated meat thermometer to make sure meat has reached 160°F (71°C)”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-109** (M; krytyczne)

- pl: Mięso marynuje się w lodówce; marynaty nie zachowuje się do ponownego użycia.
- en: Marinate meat in the refrigerator; do not save and re-use the marinade.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; zasady bezpiecznego postępowania (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Marinate meat in the refrigerator. Do not save and re-use marinade.”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-110** (M; krytyczne)

- pl: Mięso trzyma się w lodówce w 40°F (ok. 4°C) lub niżej; mięso czerwone zużywa się w ciągu 3–5 dni albo zamraża.
- en: Keep meat refrigerated at 40°F (about 4°C) or below; use red meats within 3–5 days or freeze them.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; zasady bezpiecznego postępowania (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Keep meat and poultry refrigerated at 40ºF or below. Use ground beef and poultry within 2 days, red meats within 3 to 5 days or freeze for later use.”
- uwaga: Przeliczenie 40°F ≈ 4,4°C zaokrąglone w dół do 4°C (strona bezpieczna).
- warianty: beef-veal-v08, game-lamb-v09

**MIE-111** (M)

- pl: Z mięsa usuwa się cały tłuszcz, bo szybko jełczeje.
- en: Trim and discard all fat from the meat because it becomes rancid quickly.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; Preparing the Meat (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Trim and discard all fat from meat because it becomes rancid quickly.”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-112** (M; krytyczne)

- pl: Jerky suszy się, aż próbny kawałek przy zginaniu pęka, ale się nie łamie (10–24 godzin dla pasków nieogrzewanych w marynacie); paski ogrzane w marynacie schną szybciej, sprawdzać od 3 godzin.
- en: Dry jerky until a test piece cracks but does not break when bent (10–24 hours for strips not heated in marinade); strips heated in marinade dry faster, begin checking after 3 hours.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; Drying the Meat (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Dry until a test piece cracks but does not break when it is bent (10 to 24 hours for samples not heated in marinade). Samples heated in marinade will dry faster. Begin checking samples after 3 hours.”
- warianty: beef-veal-v08, game-lamb-v09

**MIE-113** (M)

- pl: Po wysuszeniu osusza się krople tłuszczu ręcznikiem papierowym, studzi i pakuje w słoiki szklane lub grube plastikowe torebki do żywności; dobre jest też pakowanie próżniowe.
- en: After drying, pat off beads of oil with absorbent towels, cool, and package in glass jars or heavy plastic food storage bags; vacuum packaging is also a good option.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; Drying the Meat (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Once drying is completed, pat off any beads of oil with clean, absorbent towels and cool. Remove strips from the racks. Cool. Package in glass jars or heavy plastic food storage bags. Vacuum packaging is also a good option.”
- uwaga: Pakowanie próżniowe nie zastępuje suszenia (SUS-025).
- warianty: beef-veal-v08, game-lamb-v09

**MIE-114** (M; krytyczne; jedno źródło)

- pl: Według Penn State jerky przechowuje się w szczelnym pojemniku w miejscu chłodnym i ciemnym i zjada w ciągu 1–3 tygodni, zależnie od mięsa; dłużej w zamrażarce. NCHFP podaje 2 tygodnie w temperaturze pokojowej (MIE-041): w kartach obowiązuje krótszy termin.
- en: According to Penn State, jerky is stored in an airtight container in a cool, dark place and eaten within 1–3 weeks, depending on the meat; longer in the freezer. NCHFP gives 2 weeks at room temperature (MIE-041): cards use the shorter time.
- źródło (szczebel 3, sha12 5ba3ca71fe24): Penn State Extension, Drying Jerky; Storage (https://extension.psu.edu/drying-jerky): „Store jerky in an airtight container because it will absorb moisture very easily from the air. | Store in a cool, dark place. | Depending upon the meat used, jerky should be eaten within one to three weeks. | For longer storage, freeze the jerky to prevent rancidity.”
- uwaga: Sprzeczność szczebel 1 (NCHFP, 2 tygodnie) vs 3 (do 3 tygodni): wygrywa NCHFP i krótszy termin (B7-D2).
- warianty: beef-veal-v08, game-lamb-v09

**MIE-115** (M; krytyczne)

- pl: Mięso mielone na jerky jest pominięte: drobnoustroje chorobotwórcze trudniej w nim zniszczyć niż w paskach z całego mięśnia, a do zniszczenia np. E. coli O157:H7 konieczna jest temperatura wewnętrzna 160°F (71°C).
- en: Ground meat for jerky is left out: disease-causing microorganisms are more difficult to eliminate in it than in whole-muscle strips, and an internal temperature of 160°F (71°C) is necessary to eliminate bacteria such as E. coli O157:H7.
- źródło (szczebel 1, sha12 b9a5d6a96f7a): NCHFP, Jerky; Making Jerky from Ground Meat (https://nchfp.uga.edu/how/dry/recipes/jerky/): „Disease-causing microorganisms are more difficult to eliminate in ground meat than in whole meat strips. … Again, an internal temperature of 160ºF is necessary to eliminate disease-causing bacteria such as E. coli O157:H7, if present.”
- uwaga: „Pominięte” to decyzja produktowa C2-D7, zdanie źródła to powód.
- warianty: beef-veal-v08, game-lamb-v09

## 4. Uzupełnienia istniejących twierdzeń

**SUS-039** (C2-10): Clemson HGIC w dniu odczytu znowu 403 (Cloudflare). Dopisać drugie źródło szczebla 3 dla chipsów.
- dopisać (szczebel 3, sha12 ff5144006bb6): Penn State Extension, Let's Preserve: Drying Fruits and Vegetables; Preparing the Food (https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration): „Some thinly sliced fruits and vegetables, such as apple chips or zucchini chips, will dry crisp.”
- dopisać (szczebel 3, sha12 84367dff6361): Univ. of Minnesota Extension, Drying food; Using dried vegetables (https://extension.umn.edu/preserving-and-preparing/drying-food): „Dried sliced vegetables can be eaten as tasty vegetable chips for dips.”

**SUS-040** (C2-10): Clemson 403. Dopisać drugie źródło dla proszków (blender, cebula, papryka).
- dopisać (szczebel 3, sha12 84367dff6361): Univ. of Minnesota Extension, Drying food; Using dried vegetables (https://extension.umn.edu/preserving-and-preparing/drying-food): „Make your own onion powder by drying onion slices until crisp and powder in the blender.”
- dopisać (szczebel 3, sha12 64be93ae5f95): Penn State Extension, Preserving Those Colorful Garden Peppers; Drying Peppers, Note (https://extension.psu.edu/preserving-those-colorful-garden-peppers): „Reduce this problem by chopping or grinding peppers to a powder in a blender.”

**SUS-035**: Trzecie niezależne źródło ostrzeżenia o toksynach (OSU).
- dopisać (szczebel 3, sha12 690aff0e0d7c): Oregon State Univ. Extension, SP 50-919 Preserving mushrooms; Drying mushrooms (https://extension.oregonstate.edu/catalog/sp-50-919-preserving-mushrooms): „Warning: The toxins in poisonous varieties of mushrooms are not destroyed by drying or by cooking. Only an expert can differentiate between poisonous and edible varieties.”

## 5. Przypisanie do wariantów

| Partia | Wariant | Nazwa | Twierdzenia w katalogu | Nowe (propozycja) | Bez źródła |
|---|---|---|---|---|---|
| S7 | horseradish-v11 | suszony korzeń chrzanu w plastrach | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022 | SUS-129, SUS-130, SUS-131, SUS-137 | nazwa „w plastrach”: CSU i MSU opisują tylko chrzan tarty (SUS-129); plastrów brak w źródłach |
| S7 | leafy-greens-v10 | chipsy z suszonego jarmużu | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022 | SUS-123, SUS-124, SUS-125, SUS-131, SUS-137 | — |
| S7 | green-beans-v14 | chińska fasolka suszona | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-003 | SUS-137 | „chińska fasolka” (fasolka długostrąkowa): tabele CSU/MSU mają tylko fasolkę szparagową (SUS-111); odmiany brak |
| S7 | cultivated-mushrooms-v11 | suszone shiitake | SUS-036, SUS-017, SUS-022 | SUS-131, SUS-138, SUS-139, SUS-140 | — |
| S7 | zucchini-v16 | suszone chipsy | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-039 | SUS-123, SUS-124, SUS-125, SUS-128, SUS-131, SUS-137 | — |
| S7 | beetroot-v15 | chipsy suszone | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-039 | SUS-123, SUS-124, SUS-125, SUS-126, SUS-131, SUS-137 | — |
| S7 | parsnip-parsley-v09 | chipsy z suszonego pasternaku | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-039 | SUS-123, SUS-124, SUS-127, SUS-131, SUS-137 | pietruszka korzeniowa bez źródła; pasternak ma SUS-127 (CSU, jedno źródło) |
| S8 | red-savoy-cabbage-v12 | puder | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-131, SUS-132, SUS-137 | — |
| S8 | broccoli-v11 | zielony proszek brokułowy | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-137 | — |
| S8 | leafy-greens-v11 | zielony puder szpinakowy | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-137 | — |
| S8 | chili-pepper-v18 | suszone płatki | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-131, SUS-133, SUS-134, SUS-135, SUS-137 | — |
| S8 | beetroot-v16 | proszek buraczany | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-126, SUS-131, SUS-137 | — |
| S8 | onion-v14 | proszek cebulowy | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-131, SUS-136, SUS-137 | — |
| S8 | horseradish-v12 | proszek chrzanowy | SUS-001, SUS-014, SUS-017, SUS-021, SUS-022, SUS-040 | SUS-129, SUS-130, SUS-131, SUS-137 | — |
| S8 | garlic-v16 | domowy czosnek granulowany | SUS-037, SUS-040, SUS-017 | SUS-131, SUS-137 | — |
| S9 | boletes-v11 | grzyby suszone w plastrach | SUS-035, SUS-036, SUS-017, SUS-022 | SUS-138, SUS-140, SUS-142, SUS-143, SUS-144, SUS-145, SUS-146, SUS-147, SUS-148, SUS-149 | — |
| S9 | boletes-v12 | puder borowikowy (umami) | SUS-035, SUS-036, SUS-017, SUS-022, SUS-040 | SUS-138, SUS-140, SUS-142, SUS-143, SUS-144, SUS-145, SUS-146, SUS-147, SUS-148, SUS-149 | — |
| S9 | chanterelle-milkcap-v13 | suszone kurki | SUS-035, SUS-036, SUS-017, SUS-022 | SUS-138, SUS-139, SUS-140, SUS-142, SUS-143, SUS-144, SUS-145, SUS-146, SUS-147, SUS-149 | — |
| S9 | wild-mushrooms-v09 | suszone kapelusze kani | SUS-035, SUS-036, SUS-017, SUS-022 | SUS-138, SUS-140, SUS-141, SUS-142, SUS-143, SUS-144, SUS-145, SUS-146, SUS-147, SUS-148, SUS-149 | procedura suszenia jest (SUS-036), ale bezpiecznej procedury rozpoznania kani źródła nie dają; muchomor sromotnikowy mylony z kanią (SUS-141) |
| M | beef-veal-v08 | amerykańskie beef jerky (cienkie paski marynowane w sosie sojowym/worcestershire i suszone w 140 °F (60 °C)) | MIE-036, MIE-037, MIE-038, MIE-039, MIE-040, MIE-041 | MIE-100, MIE-101, MIE-104, MIE-105, MIE-106, MIE-107, MIE-108, MIE-109, MIE-110, MIE-111, MIE-112, MIE-113, MIE-114, MIE-115 | — |
| M | game-lamb-v09 | jerky z jelenia (venison jerky) | MIE-035, MIE-033, MIE-043, MIE-036, MIE-037, MIE-038, MIE-039, MIE-040, MIE-041 | MIE-100, MIE-101, MIE-102, MIE-103, MIE-104, MIE-105, MIE-106, MIE-107, MIE-108, MIE-109, MIE-110, MIE-111, MIE-112, MIE-113, MIE-114, MIE-115 | — |

Procedury produktowe z B4 do przypisania razem z powyższymi (tor A): kapusta SUS-108 (red-savoy-cabbage-v12), brokuł SUS-110 i SUS-121 (broccoli-v11), fasolka SUS-111 (tylko jeśli B7-D5 zostanie zawetowane), cebula SUS-114 (onion-v14), szpinak i jarmuż SUS-120 i SUS-121 (leafy-greens-v10, leafy-greens-v11), papryka SUS-113 jako różnica dla chili; wspólne SUS-064–067, SUS-069–072, SUS-105–107 jak w B4.

Wariantów całkowicie bez źródła: 0. Bez źródła dla formy lub odmiany: 3 (horseradish-v11, green-beans-v14, parsnip-parsley-v09). Wariant ze źródłem procedury, ale bez bezpiecznego rozpoznania: wild-mushrooms-v09 (B7-D3).

## 6. Sprzeczności

| Wielkość | Źródło wyższe / przyjęte | Inne | Wynik |
|---|---|---|---|
| Gotowanie pasków w marynacie | NCHFP: wrzenie 5 minut (MIE-037) | Penn State: pełne wrzenie 1 minuta | 5 minut + pomiar 160°F (B7-D1) |
| Temperatura suszenia jerky | NCHFP 140°F (MIE-038) | Penn State 130–140°F (wild game), 140–150°F (Let's Preserve) | 140°F (B7-D2) |
| Trwałość jerky | NCHFP 2 tygodnie w temp. pokojowej (MIE-041) | Penn State 1–3 tygodnie (MIE-114) | 2 tygodnie (B7-D2) |
| Włośnie, zamrożenie | NCHFP 30 dni w 0°F + UE: część Trichinella u zwierzyny odporna (MIE-035, MIE-033) | Penn State: „at least three weeks” (niedźwiedź, dzik) | NCHFP + UE (B7-D2) |
| Obróbka mięsa przed suszeniem | NCHFP i USDA wg Penn State: 160°F | Utah State: „can be dried without pretreatments” | odrzucone (B7-D2) |
| Grzyby: grubość, temperatura, stan | CSU: 1/4 cala, 8–12 h, „suche i skórzaste” (SUS-036) | OSU: 1/2 cala, 120°F, „chrupkie lub łamliwe” (SUS-140) | CSU + 140°F (B7-D4) |
| Cukinia: blanszowanie i czas | CSU 4 min, 10–16 h | MSU parą 2,5–3 / wodą 0,5 min, 10–12 h | obie wartości pokazane (SUS-128) |
| Chrzan: czas | CSU 6–10 h | MSU 4–10 h | obie pokazane (SUS-129) |

## 7. Decyzje (tablica: `2026-11-02-jaratlas-06-b7-suszenie-s7-m`)

Analogia w repo trening (klon `--depth 1`, 2e4b0f8): grep `jerky|grzyb|mushroom|chips|powder|wild` w `*.md` daje tylko „jerky movements” (ćwiczenia). Dziedzinowej analogii brak; jedyna przeniesiona reguła to oznaczanie „jedno źródło” (trening `CLAUDE.md:113–115`). Pozostałe analogie z repo JarAtlas.

B7-D1. **analogia.** Jerky: ogrzanie do 160°F (71°C) przed suszeniem (gotowanie w marynacie 5 minut wg NCHFP, nie 1 minuta wg Penn State) albo po suszeniu (275°F, 10 min) jest obowiązkowym ostrzeżeniem, a pomiar termometrem kilku pasków obowiązkowym krokiem (NCHFP pisze „If you choose” i „If possible”). Odrzucone: wersja opcjonalna ze źródła. Analogia pełna: C2-D7 (docs/tresci/E1-suszenie-wzor-2026-11-02.md:187) i B6-D4 wariant ostrożniejszy (docs/tresci/E1-kiszenie-k3-k5-k6-2026-11-02.md:92).

B7-D2. **analogia.** Sprzeczności jerky rozstrzyga szczebel: suszenie 140°F (MIE-038, NCHFP) zamiast 130–140°F lub 140–150°F (Penn State); trwałość 2 tygodnie w temperaturze pokojowej (MIE-041) zamiast 1–3 tygodni (MIE-114); włośnie: 30 dni w 0°F i zastrzeżenie UE (MIE-035, MIE-033) zamiast 3 tygodni (Penn State, wild game). Utah State „Beef, mutton, venison … can be dried without pretreatments” odrzucone (przeczy NCHFP i USDA wg Penn State). Analogia pełna: hierarchia „przy sprzeczności wygrywa wyższy szczebel” (prompt roli, sekcja Rozstrzyganie) i B6-D4 (E1-kiszenie-k3-k5-k6-2026-11-02.md:92).

B7-D3. **decyzja Claude, do weta.** Grzyby dzikie (pytanie otwarte nr 6, docs/tresci/pytania-otwarte.md:108): kania (wild-mushrooms-v09) → ryzyko-wysokie, karta-ostrzeżenie bez przepisu (SUS-035, SUS-141, SUS-142, SUS-145). Borowiki i kurki zostają ok-zrodlo, ale requiredWarnings: SUS-035, SUS-138, SUS-142; zdania „rozpoznanie przed krojeniem” (SUS-143) i „puder tylko do potraw gotowanych” (SUS-146) to wnioski redakcji. Odrzucone: kania ok-zrodlo z samym ostrzeżeniem (źródła PL wskazują ją wprost jako gatunek mylony z muchomorem); wszystkie grzyby dzikie ryzyko-wysokie (borowik i kurka nie są w źródłach wskazane jako mylone). Analogia częściowa: karty-ostrzeżenia K3 (E1-kiszenie-k3-k5-k6-2026-11-02.md:109). Decyzja Claude, do weta.

B7-D4. **decyzja Claude, do weta.** Procedura grzybów: karty zostają przy SUS-036 (CSU: plastry 1/4 cala, 8–12 h) i ogólnych 140°F (SUS-001); OSU (120°F, 1/2 cala, SUS-140) tylko jako pokazana różnica, status sprzeczne. Powód: niższa temperatura początkowa sprzyja przeżyciu drobnoustrojów (SUS-002), więc 140°F jest wariantem ostrożniejszym. Odrzucone: mieszanie procedur. Decyzja Claude, do weta.

B7-D5. **decyzja Claude, do weta.** Warianty bez źródła dla formy lub odmiany (horseradish-v11 plastry, green-beans-v14 fasolka chińska, parsnip-parsley-v09 pietruszka): propozycja dla toru A: chrzan → „tarty” albo do-researchu, fasolka chińska → do-researchu, karta pasternaku bez pietruszki. Odrzucone: przeniesienie procedury z innego gatunku jako uproszczenie (rodzaj i wielkość warzywa zmienia czas suszenia i blanszowania). Decyzja Claude, do weta.

B7-D6. **analogia.** Zatrucie grzybami: z PSSE Głogów biorę tylko opóźnienie objawów i „natychmiast wezwać lekarza” (SUS-145); zalecenie wywoływania wymiotów pominięte. Analogia pełna: moduł tresci-krytyczne, zasada 5 „Aplikacja nie diagnozuje i nie leczy” (prompt roli 06).

B7-D7. **analogia (B4-D1).** Numeracja SUS-123–SUS-149 (27) i MIE-100–MIE-115 (16). MIE pasuje: jerky w rejestrze to MIE-033–043, MIE kończy się na MIE-095. Kolizje: rejestr, docs/tresci/E1-*.json i git grep na wszystkich origin/claude/*: 0 trafień. Wolne do toru: SUS-150–179, MIE-116–129.

B7-D8. **reguła z polecenia.** Clemson HGIC (3 strony) i USDA FSIS Jerky w dniu odczytu: HTTP 403, bez obchodzenia. SUS-039 i SUS-040 dostają drugie źródło (Penn State, UMN). Treść FSIS tylko jako źródło pochodne przez Penn State (MIE-104, szczebel 3), oryginał w otwartych pytaniach.

B7-D9. **analogia.** Źródła PL: PSSE i GIS jako szczebel 3 (urząd, strona informacyjna), rozporządzenie MZ (Dz.U. 2026 poz. 258) szczebel 1 o zakresie „obrót”. Wymogi handlowe (12% wody, atest) tylko jako kontekst, nie próg domowy. Analogia pełna: B6-D3 (E1-kiszenie-k3-k5-k6-2026-11-02.md:93). Twierdzenia z jednym źródłem szczebla 3 oznaczone jednoZrodlo (analogia: trening CLAUDE.md:113–115).

## 8. Otwarte pytania

- B7-P1 [DO USTALENIA] USDA FSIS „Jerky and Food Safety” (HTTP 403): przeczytać oryginał zalecenia 160°F/165°F przy następnym odczycie; do tego czasu MIE-104 jest źródłem pochodnym.
- B7-P2 [DO USTALENIA] Instytucja oceny grzybów dla rynków innych niż PL (35 języków): SUS-142 i SUS-144 są tylko dla Polski.
- B7-P3 [DO USTALENIA] Clemson HGIC 403: ponowny odczyt cytatów SUS-039 i SUS-040 (w B4 działało).
- B7-P4 [DO USTALENIA] Fasolka długostrąkowa i pietruszka korzeniowa: brak procedury w CSU, MSU, Penn State, UMN, OSU.

## 9. Dowód końcowy

- `npm run check` po zapisie obu plików: kod 0; testy 127/127, granice OK, katalog i treści OK, build OK, rozmiar `dist/` 991 B. UWAGI „bez słowa granicy” w `cultivated-mushrooms-v13` pochodzą z main (ta zmiana nie dotyka kart).
- Kontrola cytatów, mutacji i przekładu: sekcja 1. Skrypty robocze (tekst z HTML/PDF, sprawdzenie cytatów, generator) są w scratchpadzie sesji, poza zakresem commita.
- Czas agenta: ok. 1,5 h. Czeka się na: dostęp do FSIS i Clemson (B7-P1, B7-P3). Właściciel: weto B7-D3, B7-D4, B7-D5.
