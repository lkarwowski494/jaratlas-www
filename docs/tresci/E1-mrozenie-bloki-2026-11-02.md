# E1 mrożenie: bloki A4 (kwas askorbinowy, syropy) i A6 (czosnek w oleju, pesto), propozycje twierdzeń (tor B5, 2026-11-02)

- Rola 06-tresci, build, tryb bez właściciela. Gałąź `claude/jaratlas-b5-bloki-mrozenia` od `main` = 40ff670. Zakres: tylko ten plik i `E1-mrozenie-bloki-2026-11-02.json`. Rejestr, karty i katalog bez zmian; wkleja tor A.
- Wejście: `rejestr.json` (FRZ-001–065, OLE-001–050, SLO-247–295), `catalog/catalog-seed.json` (warianty mrożenia), backlog kart p14–p20 („osobne bloki: kwas askorbinowy, czosnek w oleju, pesto”; figi i granat odłożone w p20; czereśnie w p18).
- Format JSON: pola rejestru plus `twierdzenie_en`, `blok`, `warianty`, `uwaga`, `jednoZrodlo`. `status: robocze`, `przeglad: null`. Cytaty: fragmenty „ | ” stoją w tekście kolejno, „ … ” to przerwa (jak B4-D7).

## 1. Wynik

| Blok | Nowe twierdzenia | Krytyczne | Szczebel 1 | Tylko szczebel 3, jedno źródło |
|---|---|---|---|---|
| A4 | 21 (FRZ-066–FRZ-086) | 0 | 18 | 3 |
| A6 | 7 (OLE-051–OLE-057) | 5 | 2 | 3 |

Razem 28 nowych twierdzeń. Bloki uzupełniają, nie dublują: czosnek w oleju i pesto mają już w rejestrze OLE-001–005, 019, 027, 029, 042–044 (przegląd zastępczy), syropy 40% i 50% to SLO-253 i SLO-269.

Kontrole (dowód):
- cytaty: 33 cytaty (51 ciągłych fragmentów) w 28 twierdzeniach są dosłownie w tekście stron pobranych dziś curl (HTML → tekst skryptem, PDF → pdftotext; normalizacja spacji i cudzysłowów; fragmenty „ | ” i „ … ” sprawdzane osobno i w kolejności). Wynik: 0 braków.
- mutacja_cytatu: zmiana „3/4 teaspoon (2250 mg)” na „(2500 mg)” w cytacie FRZ-072 daje 1 błąd; zmiana „preparation date” na „purchase date” w cytacie OLE-052 daje 1 błąd.
- przeklad: tools/i18n/niezmienniki.mjs porownaj(en, pl) na 28 parach: 0 różnic (liczby, pary liczba–jednostka, symbole, jednostki słowne, nazwy). Mutacja: pl „2500” zamiast „2250” (FRZ-072) wykryta jako „liczby”; zamiana „40°F (4°C)” na „40°C (4°F)” (OLE-057) wykryta jako „liczby z jednostkami”.
- kolizje_id: rejestr.json na main: FRZ kończy się na FRZ-065, OLE na OLE-050; git grep FRZ-066+, OLE-051+ i SLO-296+ na wszystkich 9 gałęziach origin: 0 trafień. Skrypt sprawdza też, że żadne nowe ID nie istnieje w rejestrze.
- odsylacze: wszystkie warianty istnieją w catalog-seed.json; wszystkie przypisane istniejące ID (FRZ, OLE, SLO, SUS) istnieją w rejestrze.
- okno_D-051: get_session: used_tokens 0, max_tokens 1000000 (pole nieaktualizowane, jak w C3); szacunek ostrożny około 15% okna, poniżej progu 30%.

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Klucz | HTTP | sha12 | Szczebel | Adres |
|---|---|---|---|---|
| nchfp-swc | 200 | 009c5abfb8a5 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-cherries-sweet/ |
| nchfp-soc | 200 | a41a1855f760 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-cherries-sour/ |
| nchfp-pea | 200 | 20d3fcf644b3 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-peaches-or-nectarines/ |
| nchfp-apr | 200 | 82644c6ae34c | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-apricots/ |
| nchfp-app | 200 | bc4f401f9ae9 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-apples/ |
| nchfp-fig | 200 | f1a00b3983d7 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-figs/ |
| nchfp-pom | 200 | 9052305df98f | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-pomegranates/ |
| nchfp-pear | 200 | 4b270a487d22 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-pears/ |
| nchfp-plum | 200 | 120e21243333 | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-plums/ |
| nchfp-mel | 200 | 0da9455c0bec | 1 | https://nchfp.uga.edu/how/freeze/fruits/freezing-melons/ |
| nchfp-syr | 200 | c00122d069e6 | 1 | https://nchfp.uga.edu/how/freeze/fruits/syrups/ |
| nchfp-tray | 200 | c24d0fa89a44 | 1 | https://nchfp.uga.edu/how/freeze/freeze-general-information/dry-or-tray-packing-for-fruits/ |
| nchfp-gar | 200 | 449989d91d4b | 1 | https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/ |
| nchfp-pes | 200 | 5f74156002bf | 1 | https://nchfp.uga.edu/how/freeze/vegetable/freezing-pesto/ |
| fda-stor | 200 | f340dc271515 | 1 | https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely |
| csu-ff | 200 | f09265a3d9a8 | 3 | https://extension.colostate.edu/resource/freezing-fruits/ |
| osu-oil | 200 | d12776b93fa1 | 3 | https://extension.oregonstate.edu/es/catalog/pub/sp-50-701-herbs-vegetables-oil |
| ucd-8568 | 200 | 71c5f5d86e0a | 3 | https://ucfoodsafety.ucdavis.edu/files/250352.pdf |
| umn-cot | 200 | 48116db3eba9 | 3 | https://extension.umn.edu/cottage-food-connection/chili-oil-and-oil-based-products |
| fpt-num | 200 | 01a2e2cba47a | 2 | https://www.foodprotection.org/files/food-protection-trends/Jun-11-Nummer.pdf |

Czytane bez cytatu w tym pliku:

| Klucz | sha12 | Adres | Po co |
|---|---|---|---|
| nchfp-soc | a41a1855f760 | https://nchfp.uga.edu/how/freeze/fruits/freezing-cherries-sour/ | wiśnie: strona bez kwasu askorbinowego (A4 nie dotyczy, B5-D8) |
| nchfp-head | b7709a5a70b6 | https://nchfp.uga.edu/how/freeze/freeze-general-information/headspace-to-allow/ | ponowny odczyt SLO-249 (bez zmian treści) |
| nchfp-ptr | c4ba22331f3e | https://nchfp.uga.edu/how/freeze/freeze-general-information/freezing-pointers/ | kontekst; bez nowych twierdzeń |
| nchfp-unsw | 788d2379803e | https://nchfp.uga.edu/how/freeze/unsweet_pack.html | odnośnik „other unsweetened packs” przekierowuje na Dry or Tray Packing |
| nchfp-fruits | 6222d13c7d0b | https://nchfp.uga.edu/how/freeze/fruits/ | brak ogólnej strony NCHFP o kwasie askorbinowym przy mrożeniu |
| nchfp-es | 5ca1d20411f0 | https://nchfp.uga.edu/how/freeze/fruits/la-congelacion-de-frutas-spanish/ | jw. |
| osu-gar | ca4f927a085f | https://extension.oregonstate.edu/food/preservation/preserving-garlic | źródło OLE-004, OLE-005 (ponowny odczyt; zgodne) |
| ucd-gar | 70ed416d854c | https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf | źródło OLE-002, 006–008; ta sama publikacja co UC ANR 8568 (pochodne, jedno źródło) |
| pnw-oil | 62fcb3e61e09 | https://objects.lib.uidaho.edu/uiext/uiext33171.pdf | źródło OLE-019 (PNW 664); bez nowych twierdzeń |
| fpt-num | 01a2e2cba47a | https://www.foodprotection.org/files/food-protection-trends/Jun-11-Nummer.pdf | tabela zaleceń dla pesto i opis CSU 2006 (10 dni w lodówce): podstawa B5-D2 |

Nieudane (sprawdzone, brak treści):

- umn-gar: 404, https://extension.umn.edu/preserving-and-preparing/preserving-garlic
- umn-herb: 404, https://extension.umn.edu/preserving-and-preparing/preserving-herbs
- umn-pesto: 404, https://extension.umn.edu/preserving-and-preparing/freezing-pesto
- umn-ff: 404, https://extension.umn.edu/preserving-and-preparing/freezing-fruit
- umn-ff2: 404, https://extension.umn.edu/preserving-and-preparing/freezing-fruits
- csu-oil: 404, https://extension.colostate.edu/resource/flavored-vinegars-and-oils/
- csu-herb: 404, https://extension.colostate.edu/resource/preserving-herbs/
- ucd-pesto: 403, https://ucfoodsafety.ucdavis.edu/
- fda-114: 200, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-114 (przekierowanie na stronę blokady unblock.federalregister.gov, bez treści)
- usda-ask: TLS, https://ask.usda.gov/s/article/Is-it-safe-to-store-garlic-in-oil (błąd certyfikatu, bez pliku)
- msu-gar: 200, https://www.canr.msu.edu/resources/michigan_fresh_garlic (860 bajtów, bez treści)

Szczeble: NCHFP i FDA 1; Food Protection Trends (recenzowane) 2; CSU, OSU, UC ANR, UMN 3 (jak w rejestrze). sha12 stron NCHFP różni się od wcześniejszych odczytów (strony dynamiczne, znane z backlogu p18); cytaty sprawdzone na dzisiejszym tekście.

## 3. Twierdzenia (do wklejenia przez tor A)

### A4: kwas askorbinowy, syrop 30%, owoce

**FRZ-066** (niekrytyczne)

- pl: Syrop 30% (średni) do mrożenia owoców: 1 3/4 szklanki cukru na 4 szklanki wody, z czego wychodzi ok. 5 szklanek syropu; przygotowuje się go i dawkuje tak jak syrop 40% (SLO-253).
- en: Medium (30%) syrup for freezing fruit: 1 3/4 cups sugar to 4 cups water, yielding about 5 cups of syrup; make and use it like the 40% syrup (SLO-253).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 c00122d069e6): https://nchfp.uga.edu/how/freeze/fruits/syrups/, NCHFP, Syrups for Use in Freezing Fruits (So Easy to Preserve 6th ed.); tabela, wiersz Medium; przypis *. Cytat: „Medium 30% 1 3/4 4 5 cups | * Approximate”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f09265a3d9a8): https://extension.colostate.edu/resource/freezing-fruits/, Colorado State Univ. Extension, Freezing Fruits (peer-reviewed; publ. 08.1994, przegląd 04.2013; P. Kendall); Methods of Packing Fruits, Syrup pack. Cytat: „A 30-percent syrup (1 3/4 cup sugar per 4 cups water) is recommended for most fruits.”
- warianty: fig-pomegranate-v12, watermelon-melon-v11
- uwaga: Liczby „40%” i „SLO-253” to odsyłacz do istniejącego twierdzenia o przygotowaniu syropu (to samo źródło, ta sama strona).

**FRZ-067** (niekrytyczne)

- pl: Czereśnie do mrożenia: wybrać jaskrawe, w pełni dojrzałe owoce ciemnych odmian; umyć, usunąć szypułki i pestki; w syropie: zimny syrop 40%, a dla lepszej jakości 1/2 łyżeczki (1500 mg) kwasu askorbinowego na każdą kwartę (ok. 0,95 l) syropu; owoce zapakować, zalać syropem, zostawić wolną przestrzeń, zamknąć i zamrozić.
- en: Sweet cherries for freezing: select bright, fully ripened cherries of dark-coloured varieties; wash, stem and pit; syrup pack: cold 40% syrup, and for better quality add 1/2 teaspoon (1500 mg) ascorbic acid to each quart (about 0.95 l) of syrup; pack the fruit, cover with syrup, leave headspace, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 009c5abfb8a5): https://nchfp.uga.edu/how/freeze/fruits/freezing-cherries-sweet/, NCHFP, Freezing Cherries: Sweet (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Preparation – Select bright, fully ripened cherries of dark colored varieties. Wash, stem and pit. | Syrup Pack – Use cold, 40 percent syrup. For a better quality product add 1/2 teaspoon (1500 mg) ascorbic acid to each quart syrup. Pack fruit and cover with syrup, leaving headspace. Seal and freeze.”
- warianty: sweet-cherry-v13
- uproszczenie: Przeliczenie kwarty US na 0,95 l to rachunek JarAtlas (1 quart = 0,946 l), zaokrąglony jak w SLO-249.

**FRZ-068** (niekrytyczne)

- pl: Brzoskwinie i nektarynki do mrożenia: wybrać dobrze dojrzałe owoce i obchodzić się z nimi ostrożnie, żeby się nie poobijały; przebrać, umyć i obrać. W syropie: syrop 40%, a dla lepszej jakości 1/2 łyżeczki (1500 mg) kwasu askorbinowego na kwartę (ok. 0,95 l) syropu; owoce wkładać od razu do zimnego syropu w pojemniku, zaczynając od 1/2 szklanki syropu na pojemnik pinta (ok. 0,47 l); docisnąć owoce i dolać syropu do przykrycia, zostawiając wolną przestrzeń; na wierzchu położyć zgnieciony kawałek papieru odpornego na wodę, żeby przytrzymał owoce; zamknąć i zamrozić.
- en: Peaches and nectarines for freezing: select well-ripened fruit and handle carefully to avoid bruising; sort, wash and peel. Syrup pack: 40% syrup, and for better quality add 1/2 teaspoon (1500 mg) ascorbic acid per quart (about 0.95 l) of syrup; put the fruit directly into cold syrup in the container, starting with 1/2 cup syrup to a pint (about 0.47 l) container; press the fruit down and add syrup to cover, leaving headspace; place a small piece of crumpled water-resistant paper on top to hold the fruit down; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 20d3fcf644b3): https://nchfp.uga.edu/how/freeze/fruits/freezing-peaches-or-nectarines/, NCHFP, Freezing Peaches or Nectarines (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Preparation – Select well-ripened fruit and handle carefully to avoid bruising. Sort, wash and peel. | Syrup Pack – Use 40 percent syrup. For a better quality product, add 1/2 teaspoon (1500 mg) ascorbic acid per quart of syrup. Put peaches directly into cold syrup in container – starting with 1/2 cup syrup to a pint container. Press fruit down and add syrup to cover, leaving headspace. Place a small piece of crumpled water-resistant paper on top to hold fruit down. Seal and freeze.”
- warianty: peach-nectarine-v15
- uproszczenie: Strona mówi „Put peaches”; tytuł strony obejmuje nektarynki, więc zdanie mówi „owoce”. Przeliczenia kwarty i pinty to rachunek JarAtlas (SLO-249).

**FRZ-069** (niekrytyczne)

- pl: Brzoskwinie i nektarynki z cukrem: na każdą kwartę (1 1/3 funta, ok. 0,6 kg) przygotowanych owoców 2/3 szklanki cukru, dobrze wymieszać; delikatnie mieszać, aż cukier się rozpuści, albo odstawić na 15 minut. Żeby spowolnić ciemnienie, przed dodaniem cukru skropić owoce roztworem 1/4 łyżeczki (750 mg) kwasu askorbinowego w 3 łyżkach zimnej wody na każdą kwartę owoców. Zapakować do pojemników, zostawiając wolną przestrzeń, zamknąć i zamrozić.
- en: Peaches and nectarines, sugar pack: to each quart (1 1/3 pounds, about 0.6 kg) of prepared fruit add 2/3 cup sugar and mix well; stir gently until the sugar dissolves or let stand for 15 minutes. To slow darkening, before adding sugar sprinkle the fruit with 1/4 teaspoon (750 mg) ascorbic acid dissolved in 3 tablespoons cold water for each quart of fruit. Pack into containers, leaving headspace, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 20d3fcf644b3): https://nchfp.uga.edu/how/freeze/fruits/freezing-peaches-or-nectarines/, NCHFP, Freezing Peaches or Nectarines (So Easy to Preserve 6th ed.); Sugar Pack. Cytat: „Sugar Pack – To each quart (1 1/3 pounds) of prepared fruit add 2/3 cup sugar and mix well. Stir gently until sugar is dissolved or let stand for 15 minutes. To slow darkening, sprinkle ascorbic acid dissolved in water over the peaches before adding sugar. Use 1/4 teaspoon (750 mg) ascorbic acid in 3 tablespoons cold water to each quart of fruit. Pack into containers, leaving headspace. Seal and freeze.”
- warianty: peach-nectarine-v15
- uproszczenie: 1 1/3 funta = 0,605 kg, zaokrąglone do ok. 0,6 kg (rachunek JarAtlas, jak SLO-281).

**FRZ-070** (niekrytyczne)

- pl: Brzoskwinie i nektarynki rozgniecione lub jako przecier: obrane owoce bez pestek zgrubnie rozgnieść; na przecier przetrzeć przez sito albo zmiksować w blenderze lub malakserze (podgrzanie owoców bez pestek przez 4 minuty w takiej ilości wody, żeby się nie przypaliły, ułatwia miksowanie); dla lepszej jakości dodać 1/8 łyżeczki (375 mg) kwasu askorbinowego na każdą kwartę owoców; zapakować do pojemników, zostawić wolną przestrzeń, zamknąć i zamrozić.
- en: Peaches and nectarines, crushed or purée: coarsely crush peeled and pitted fruit; for purée, press through a sieve or blend in a blender or food processor (heating the pitted fruit for 4 minutes in just enough water to prevent scorching makes it easier to purée); for better quality add 1/8 teaspoon (375 mg) ascorbic acid to each quart of fruit; pack into containers, leave headspace, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 20d3fcf644b3): https://nchfp.uga.edu/how/freeze/fruits/freezing-peaches-or-nectarines/, NCHFP, Freezing Peaches or Nectarines (So Easy to Preserve 6th ed.); Crushed or Purée. Cytat: „Crushed or Purée – Coarsely crush peeled and pitted peaches. For purée, press through a sieve or purée in a blender or food processor. (Heating pitted peaches for 4 minutes in just enough water to prevent scorching makes them easier to purée. For better quality, add 1/8 teaspoon (375 mg) ascorbic acid to each quart of fruit. Pack into containers. Leave headspace. Seal and freeze.”
- warianty: peach-nectarine-v15
- uwaga: W źródle brak nawiasu zamykającego po zdaniu o podgrzewaniu; sens jednoznaczny. Wolna przestrzeń jak dla pakowania z płynem (przypis tabeli Headspace to Allow obejmuje owoce rozgniecione i przetarte, SLO-249).

**FRZ-071** (niekrytyczne)

- pl: Morele do mrożenia: wybrać jędrne, dojrzałe, równomiernie żółte owoce; przebrać, umyć, przekroić na połówki i usunąć pestki; można obrać i pokroić w plasterki; nieobrane morele zanurzyć na 1/2 minuty we wrzącej wodzie, żeby skórka nie stwardniała podczas mrożenia, potem schłodzić w zimnej wodzie i odsączyć.
- en: Apricots for freezing: select firm, ripe, uniformly yellow apricots; sort, wash, halve and pit; peel and slice if desired; if not peeled, heat them in boiling water for 1/2 minute to keep the skins from toughening during freezing, then cool in cold water and drain.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 82644c6ae34c): https://nchfp.uga.edu/how/freeze/fruits/freezing-apricots/, NCHFP, Freezing Apricots (So Easy to Preserve 6th ed.); Preparation. Cytat: „Preparation – Select firm, ripe, uniformly yellow apricots. Sort, wash, halve and pit. Peel and slice if desired. If apricots are not peeled, heat them in boiling water 1/2 minute to keep skins from toughening during freezing. Cool in cold water and drain.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f09265a3d9a8): https://extension.colostate.edu/resource/freezing-fruits/, Colorado State Univ. Extension, Freezing Fruits (peer-reviewed; publ. 08.1994, przegląd 04.2013; P. Kendall); tabela owoców, Apricots. Cytat: „If apricots are not peeled, heat in boiling water for 1/2 minute to keep skins from toughening during freezing.”
- warianty: apricot-v15

**FRZ-072** (niekrytyczne)

- pl: Morele w syropie: zimny syrop 40%, a dla lepszej jakości 3/4 łyżeczki (2250 mg) kwasu askorbinowego na każdą kwartę (ok. 0,95 l) syropu; morele wkładać prosto do pojemników, zalać syropem, zostawiając wolną przestrzeń; na wierzchu położyć zgnieciony kawałek papieru odpornego na wodę, żeby przytrzymał owoce; zamknąć i zamrozić.
- en: Apricots, syrup pack: cold 40% syrup, and for better quality add 3/4 teaspoon (2250 mg) ascorbic acid to each quart (about 0.95 l) of syrup; pack the apricots directly into containers and cover with syrup, leaving headspace; place a small piece of crumpled water-resistant paper on top to hold the fruit down; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 82644c6ae34c): https://nchfp.uga.edu/how/freeze/fruits/freezing-apricots/, NCHFP, Freezing Apricots (So Easy to Preserve 6th ed.); Syrup Pack. Cytat: „Syrup Pack – Use cold 40 percent syrup. For a better quality frozen product, add 3/4 teaspoon (2250 mg) ascorbic acid to each quart of syrup. Pack apricots directly into containers. Cover with syrup, leaving headspace. Place a small piece of crumpled water-resistant paper on top to hold fruit down. Seal and freeze.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f09265a3d9a8): https://extension.colostate.edu/resource/freezing-fruits/, Colorado State Univ. Extension, Freezing Fruits (peer-reviewed; publ. 08.1994, przegląd 04.2013; P. Kendall); tabela owoców, Apricots. Cytat: „Pack in 40 percent syrup, adding 3/4 teaspoon crystalline ascorbic acid per quart of syrup.”
- warianty: apricot-v15

**FRZ-073** (niekrytyczne)

- pl: Morele z cukrem: przed połączeniem z cukrem, żeby owoce nie ciemniały, rozpuścić 1/4 łyżeczki (750 mg) kwasu askorbinowego w 3 łyżkach zimnej wody i skropić nim 1 kwartę (7/8 funta, ok. 0,4 kg) owoców; z każdą kwartą owoców wymieszać 1/2 szklanki cukru i mieszać, aż się rozpuści; zapakować do pojemników i docisnąć, aż owoce przykryje sok, zostawiając wolną przestrzeń; na wierzchu położyć zgnieciony kawałek papieru odpornego na wodę; zamknąć i zamrozić.
- en: Apricots, sugar pack: before combining with sugar, to prevent darkening dissolve 1/4 teaspoon (750 mg) ascorbic acid in 3 tablespoons cold water and sprinkle it over 1 quart (7/8 pound, about 0.4 kg) of fruit; mix 1/2 cup sugar with each quart of fruit and stir until it dissolves; pack into containers and press down until the fruit is covered with juice, leaving headspace; place a small piece of crumpled water-resistant paper on top; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 82644c6ae34c): https://nchfp.uga.edu/how/freeze/fruits/freezing-apricots/, NCHFP, Freezing Apricots (So Easy to Preserve 6th ed.); Sugar Pack. Cytat: „Sugar Pack – Before combining apricots with sugar, give the fruit the following treatment to prevent darkening: | Dissolve 1/4 teaspoon (750 mg) ascorbic acid in 3 tablespoons cold water and sprinkle over 1 quart (7/8 pound) of fruit. Mix 1/2 cup sugar with each quart of fruit. Stir until sugar is dissolved. Pack apricots into containers and press down until fruit is covered with juice, leaving headspace. Place a small piece of crumpled water-resistant paper on top to hold fruit down. Seal and freeze.”
- warianty: apricot-v15
- uproszczenie: 7/8 funta = 0,397 kg, zaokrąglone do ok. 0,4 kg (rachunek JarAtlas).

**FRZ-074** (niekrytyczne)

- pl: Jabłka do mrożenia: pakowanie w syropie jest lepsze do deserów bez gotowania i sałatek owocowych, a z cukrem albo bez dodatków (na sucho) do ciast; wybrać jabłka o pełnym smaku, chrupiące i jędrne, nie mączyste; umyć, obrać i usunąć gniazda nasienne; średnie jabłka pokroić na 12 części, duże na 16.
- en: Apples for freezing: a syrup pack is preferred for uncooked desserts and fruit cocktail, a sugar or dry pack for pie making; select full-flavoured apples that are crisp and firm, not mealy; wash, peel and core; slice medium apples into 12 pieces (twelfths), large ones into 16 (sixteenths).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 bc4f401f9ae9): https://nchfp.uga.edu/how/freeze/fruits/freezing-apples/, NCHFP, Freezing Apples (So Easy to Preserve 6th ed.); Preparation. Cytat: „Preparation – Syrup Pack is preferred for apples to be used for uncooked desserts or fruit cocktail. A sugar or dry pack is good for pie making. | Select full-flavored apples that are crisp and firm, not mealy in texture. Wash, peel and core. Slice medium apples into twelfths, large ones into sixteenths.”
- warianty: apple-v19

**FRZ-075** (niekrytyczne)

- pl: Jabłka w syropie: zimny syrop 40%; żeby jabłka nie brązowiały, dodać 1/2 łyżeczki (1500 mg) kwasu askorbinowego na każdą kwartę (ok. 0,95 l) syropu; plasterki kroić od razu do syropu w pojemniku, zaczynając od 1/2 szklanki syropu na pojemnik pinta (ok. 0,47 l); docisnąć owoce i dolać syropu do przykrycia, zostawiając wolną przestrzeń; na wierzchu położyć zgnieciony kawałek papieru odpornego na wodę; zamknąć i zamrozić.
- en: Apples, syrup pack: cold 40% syrup; to prevent browning add 1/2 teaspoon (1500 mg) ascorbic acid to each quart (about 0.95 l) of syrup; slice the apples directly into syrup in the container, starting with 1/2 cup syrup to a pint (about 0.47 l) container; press the fruit down and add syrup to cover, leaving headspace; place a small piece of crumpled water-resistant paper on top; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 bc4f401f9ae9): https://nchfp.uga.edu/how/freeze/fruits/freezing-apples/, NCHFP, Freezing Apples (So Easy to Preserve 6th ed.); Syrup Pack. Cytat: „Syrup Pack – Use cold 40 percent syrup. To prevent browning, add 1/2 teaspoon (1500 mg) ascorbic acid to each quart of syrup. | Slice apples directly into syrup in container starting with 1/2 cup syrup to a pint container. Press fruit down in containers and add enough syrup to cover. Leave headspace. Place a small piece of crumpled water-resistant paper on top to hold fruit down. Seal and freeze.”
- warianty: apple-v19

**FRZ-076** (niekrytyczne)

- pl: Jabłka z cukrem: żeby nie ciemniały, rozpuścić 1/2 łyżeczki (1500 mg) kwasu askorbinowego w 3 łyżkach wody i skropić owoce; na 1 kwartę (1 1/4 funta, ok. 0,57 kg) owoców dodać 1/2 szklanki cukru i wymieszać; zapakować do pojemników i docisnąć, zostawiając wolną przestrzeń; zamknąć i zamrozić.
- en: Apples, sugar pack: to prevent darkening, dissolve 1/2 teaspoon (1500 mg) ascorbic acid in 3 tablespoons water and sprinkle it over the fruit; mix 1/2 cup sugar with 1 quart (1 1/4 pounds, about 0.57 kg) of fruit; pack into containers and press the fruit down, leaving headspace; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 bc4f401f9ae9): https://nchfp.uga.edu/how/freeze/fruits/freezing-apples/, NCHFP, Freezing Apples (So Easy to Preserve 6th ed.); Sugar Pack. Cytat: „Sugar Pack – To prevent darkening, dissolve 1/2 teaspoon (1500 mg) ascorbic acid in 3 tablespoons water. Sprinkle over the fruit. … Mix 1/2 cup sugar with 1 quart (1 1/4 pounds) of fruit. Pack apples into containers and press fruit down, leaving headspace. Seal and freeze.”
- warianty: apple-v19
- uproszczenie: Pominięta alternatywa NCHFP „steam blanched for 11/2 to 2 minutes” (w źródle „11/2”, prawdopodobnie 1 1/2; nie da się potwierdzić dosłownie, decyzja B5-D4). 1 1/4 funta = 0,567 kg, ok. 0,57 kg (rachunek JarAtlas).

**FRZ-077** (niekrytyczne)

- pl: Jabłka bez cukru (na sucho): postępować jak przy pakowaniu z cukrem (FRZ-076), tylko bez cukru; plasterki skropione roztworem kwasu askorbinowego można też najpierw zamrozić na tacy i zapakować do pojemników zaraz po zamrożeniu.
- en: Apples, dry pack: follow the sugar pack directions (FRZ-076) but omit the sugar; slices treated with the ascorbic acid solution can also be frozen first on a tray and packed into containers as soon as they are frozen.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 bc4f401f9ae9): https://nchfp.uga.edu/how/freeze/fruits/freezing-apples/, NCHFP, Freezing Apples (So Easy to Preserve 6th ed.); Dry Pack. Cytat: „Dry Pack – Follow the directions for Sugar Pack, omitting the sugar. Treated apple slices can also be frozen first on a tray and then packed into containers as soon as they are frozen.”
- warianty: apple-v19
- uproszczenie: „Treated” oddane jako „skropione roztworem kwasu askorbinowego”, bo jedyną obróbką w FRZ-076 jest kwas askorbinowy (alternatywa parowa pominięta, B5-D4). Numer w nawiasie to odsyłacz.

**FRZ-078** (niekrytyczne)

- pl: Figi do mrożenia: wybrać w pełni dojrzałe owoce, umyć, a obrać według uznania; w syropie: syrop 40%, a dla lepszego produktu 3/4 łyżeczki (2250 mg) kwasu askorbinowego albo 1/2 szklanki soku z cytryny na każdą kwartę (ok. 0,95 l) syropu; figi zapakować do pojemników i zalać zimnym syropem, zostawiając wolną przestrzeń; zamknąć i zamrozić.
- en: Figs for freezing: select fully ripe fruit, wash, and peel if desired; syrup pack: 40% syrup, and for a better product add 3/4 teaspoon (2250 mg) ascorbic acid or 1/2 cup lemon juice to each quart (about 0.95 l) of syrup; pack the figs into containers and cover with cold syrup, leaving headspace; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f1a00b3983d7): https://nchfp.uga.edu/how/freeze/fruits/freezing-figs/, NCHFP, Freezing Figs (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Preparation – Select fully ripe fruit, wash and peel if desired. | Syrup Pack – Use 40 percent syrup. For a better product, add 3/4 teaspoon (2250 mg) ascorbic acid or 1/2 cup lemon juice to each quart of syrup. Pack figs into containers and cover with cold syrup, leaving headspace. Seal and freeze.”
- warianty: fig-pomegranate-v11

**FRZ-079** (niekrytyczne)

- pl: Figi bez dodatków (na sucho): żeby jasne figi nie ciemniały, rozpuścić 3/4 łyżeczki (2250 mg) kwasu askorbinowego w 3 łyżkach zimnej wody i skropić nim 1 kwartę owoców; zapakować do pojemników, zostawiając wolną przestrzeń; figi można też najpierw zamrozić na tacy i zapakować zaraz po zamrożeniu; zamknąć i zamrozić.
- en: Figs, dry pack: to prevent darkening of light-coloured figs, dissolve 3/4 teaspoon (2250 mg) ascorbic acid in 3 tablespoons cold water and sprinkle it over 1 quart of fruit; pack into containers, leaving headspace; figs can also be frozen first on a tray and packed as soon as they are frozen; seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f1a00b3983d7): https://nchfp.uga.edu/how/freeze/fruits/freezing-figs/, NCHFP, Freezing Figs (So Easy to Preserve 6th ed.); Dry Pack. Cytat: „Dry Pack – To prevent darkening of light colored figs, dissolve 3/4 teaspoon (2250 mg) of ascorbic acid in 3 tablespoons cold water and sprinkle over 1 quart of fruit. Pack figs into containers, leaving headspace. Figs can also be frozen first on a tray and then packed into containers as soon as they are frozen. Seal containers and freeze.”
- warianty: fig-pomegranate-v11

**FRZ-080** (niekrytyczne)

- pl: Granat do mrożenia: wybrać w pełni dojrzałe owoce; umyć i przekroić na pół; położyć przekrojem w dół i opukać skórkę tępym narzędziem, np. trzonkiem młotka, żeby pękły przegrody i otworzyły się woreczki z sokiem; sok i miąższ zapakować do pojemników, zalać zimnym syropem 30% (FRZ-066), zostawić wolną przestrzeń, zamknąć i zamrozić.
- en: Pomegranates for freezing: select fully ripe fruit; wash and cut in half; place cut side down and rap the shell with a blunt instrument such as a hammer handle to break the section walls and open the juice sacs; pack the juice and pulp into containers, cover with cold 30% syrup (FRZ-066), leave headspace, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 9052305df98f): https://nchfp.uga.edu/how/freeze/fruits/freezing-pomegranates/, NCHFP, Freezing Pomegranates (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Preparation – Select fully ripe pomegranates. Wash and cut in half. Place cut side down and rap the shell with a blunt instrument such as a hammer handle. This will break section walls and open juice sacs. | Syrup Pack – Pack juice and pulp into containers. Cover with a cold 30 percent syrup, leaving headspace. Seal and freeze.”
- warianty: fig-pomegranate-v12
- uwaga: Strona nie podaje kwasu askorbinowego; jedyny sposób to syrop 30%. Odnośnik „other unsweetened packs” prowadzi do Dry or Tray Packing (SLO-252), ale strona granatu nie podaje pakowania bez syropu dla soku i miąższu; karta nie powinna go dopowiadać.

**FRZ-081** (niekrytyczne)

- pl: Melon w syropie: przygotowane plastry, kostki lub kulki melona zapakować do pojemników i zalać zimnym syropem 30% (FRZ-066); zostawić wolną przestrzeń, zamknąć i zamrozić.
- en: Melon, syrup pack: pack the prepared melon slices, cubes or balls into containers and cover with cold 30% syrup (FRZ-066); leave headspace, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 0da9455c0bec): https://nchfp.uga.edu/how/freeze/fruits/freezing-melons/, NCHFP, Freezing Melons (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Cut melons into slices, cubes or balls. | Syrup Pack – Pack into containers and cover with cold 30 percent syrup. Leave headspace. Seal and freeze.”
- warianty: watermelon-melon-v11
- uwaga: Uzupełnia kartę melona (p20 pominęła syrop 30% z braku przepisu w rejestrze); przygotowanie owoców w SLO-288.

**FRZ-082** (niekrytyczne)

- pl: Gruszki do mrożenia: wybrać gruszki o pełnym smaku, chrupiące i jędrne, nie mączyste; umyć, obrać i usunąć gniazda nasienne; średnie pokroić na 12 części, duże na 16; w syropie: gotować we wrzącym syropie 40% 1–2 minuty, zależnie od wielkości kawałków, odsączyć i ostudzić; zapakować i zalać zimnym syropem 40%, a dla lepszego produktu dodać 3/4 łyżeczki (2250 mg) kwasu askorbinowego na kwartę (ok. 0,95 l) zimnego syropu; zostawić wolną przestrzeń, położyć zgnieciony kawałek papieru odpornego na wodę, zamknąć i zamrozić.
- en: Pears for freezing: select full-flavoured pears that are crisp and firm, not mealy; wash, peel and core; slice medium pears into 12 pieces, large ones into 16; syrup pack: heat in boiling 40% syrup for 1–2 minutes, depending on the size of the pieces, drain and cool; pack and cover with cold 40% syrup, and for a better product add 3/4 teaspoon (2250 mg) ascorbic acid to a quart (about 0.95 l) of cold syrup; leave headspace, place a small piece of crumpled water-resistant paper on top, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 4b270a487d22): https://nchfp.uga.edu/how/freeze/fruits/freezing-pears/, NCHFP, Freezing Pears (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Preparation – Select full-flavored pears that are crisp and firm, not mealy in texture. Wash, peel and core. Slice medium pears into twelfths, large ones into sixteenths. | Syrup Pack – Heat pears in boiling 40 percent syrup for 1 to 2 minutes, depending on size of pieces. Drain and cool. | Pack pears and cover with cold 40 percent syrup. For a better product, add 3/4 teaspoon (2250 mg) ascorbic acid to a quart of cold syrup. Leave headspace. Place a small piece of crumpled water-resistant paper on top to hold the fruit down. Seal and freeze.”
- warianty: pear-v15

**FRZ-083** (niekrytyczne)

- pl: Śliwki do mrożenia: wybrać jędrne, dojrzałe owoce, na tyle miękkie, że lekko uginają się pod naciskiem; przebrać i umyć; zostawić całe albo przekroić na połówki lub ćwiartki i usunąć pestki; w syropie: zimny syrop 40–50%, zależnie od kwaśności owoców, a dla lepszej jakości 1/2 łyżeczki (1500 mg) kwasu askorbinowego na kwartę (ok. 0,95 l) syropu; śliwki wkładać od razu do zimnego syropu w pojemniku, zaczynając od 1/2 szklanki syropu na pojemnik pinta (ok. 0,47 l); docisnąć i dolać syropu do przykrycia, zostawiając wolną przestrzeń; położyć zgnieciony kawałek papieru odpornego na wodę, zamknąć i zamrozić.
- en: Plums for freezing: select firm, ripe fruit soft enough to yield to slight pressure; sort and wash; leave whole or cut in halves or quarters and pit; syrup pack: cold 40–50% syrup, depending on the tartness of the fruit, and for better quality add 1/2 teaspoon (1500 mg) ascorbic acid per quart (about 0.95 l) of syrup; put the plums directly into cold syrup in the container, starting with 1/2 cup syrup to a pint (about 0.47 l) container; press down and add syrup to cover, leaving headspace; place a small piece of crumpled water-resistant paper on top, seal and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 120e21243333): https://nchfp.uga.edu/how/freeze/fruits/freezing-plums/, NCHFP, Freezing Plums (So Easy to Preserve 6th ed.); Preparation; Syrup Pack. Cytat: „Preparation – Select firm, ripe fruit soft enough to yield to slight pressure. Sort and wash. Leave whole or cut in halves or quarters and pit. | Syrup Pack – Use cold 40 to 50 percent syrup, depending on tartness of fruit. For a better quality product, add 1/2 teaspoon (1500 mg) ascorbic acid per quart of syrup. Put plums directly into cold syrup in container, starting with 1/2 cup syrup to a pint container. Press fruit down and add syrup to cover, leaving headspace. Place a small piece of crumpled water-resistant paper on top to hold fruit down. Seal and freeze.”
- warianty: plum-v19
- uwaga: Sos śliwkowy (Plum Sauce) z tej samej strony poza zakresem B5 (bez kwasu askorbinowego).

**FRZ-084** (niekrytyczne; jedno źródło)

- pl: Kwas askorbinowy (witamina C) skutecznie chroni kolor i smak mrożonych owoców; krystaliczny albo w proszku rozpuszcza się w odrobinie zimnej wody, a tabletki najpierw się kruszy, żeby łatwo się rozpuściły; do syropu dodaje się go krótko przed użyciem i miesza delikatnie, żeby nie wmieszać powietrza.
- en: Ascorbic acid (vitamin C) is effective in preserving the colour and flavour of frozen fruit; dissolve the crystalline or powdered form in a little cold water and crush tablets first so they dissolve easily; add it to syrup shortly before use and stir gently so as not to stir in air.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f09265a3d9a8): https://extension.colostate.edu/resource/freezing-fruits/, Colorado State Univ. Extension, Freezing Fruits (peer-reviewed; publ. 08.1994, przegląd 04.2013; P. Kendall); Preventing Darkening. Cytat: „Ascorbic acid (vitamin C) is effective in preserving color and flavor and adds nutritive value. … To use, dissolve crystalline or powdered forms in a little cold water. When using tablets, crush first so they dissolve easily. | For syrup packs, dissolve 1/2 teaspoon crystalline ascorbic acid or 1,500 milligrams vitamin C in each quart of cold syrup shortly before using. Stir it in gently so as not to stir in air.”
- warianty: sweet-cherry-v13, peach-nectarine-v15, apricot-v15, apple-v19, fig-pomegranate-v11, pear-v15, plum-v19
- uwaga: Dawki bierze się z NCHFP dla każdego owocu (FRZ-067–083); CSU podaje inne dawki dla części owoców (np. 1/4 łyżeczki w 1/4 szklanki wody) i syrop 30–40% dla czereśni i brzoskwiń; przy sprzeczności wygrywa NCHFP (B5-D3).

**FRZ-085** (niekrytyczne; jedno źródło)

- pl: Kwas cytrynowy albo sok z cytryny można stosować przy niektórych owocach, ale żaden z nich nie działa tak skutecznie jak kwas askorbinowy; według CSU rozpuszcza się 1/4 łyżeczki krystalicznego kwasu cytrynowego albo 3 łyżki soku z cytryny w każdej kwarcie (ok. 0,95 l) zimnej wody, zanurza w tym owoce na 1–2 minuty, odsącza i pakuje z cukrem, syropem, wodą albo sokiem.
- en: Citric acid or lemon juice may be used for some fruits, but neither is as effective as ascorbic acid; according to CSU, dissolve 1/4 teaspoon crystalline citric acid or 3 tablespoons lemon juice in each quart (about 0.95 l) of cold water, dip the fruit in it for 1–2 minutes, drain and pack with sugar, syrup, water or juice.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f09265a3d9a8): https://extension.colostate.edu/resource/freezing-fruits/, Colorado State Univ. Extension, Freezing Fruits (peer-reviewed; publ. 08.1994, przegląd 04.2013; P. Kendall); Preventing Darkening. Cytat: „Citric acid or lemon juice may be used for treating some fruits. However, neither is as effective as ascorbic acid. Dissolve 1/4 teaspoon crystalline citric acid or 3 tablespoons of lemon juice in each quart of cold water. Dip the prepared fruit in the solution and leave for one to two minutes. Drain and pack with sugar, syrup, water, or fruit juice.”
- warianty: sweet-cherry-v13, peach-nectarine-v15, apricot-v15, apple-v19, fig-pomegranate-v11, pear-v15, plum-v19
- uwaga: Szczebel 3, jedno źródło: w treści atrybucja („według CSU”). Rekomendacja B5-D6: karta podaje kwas askorbinowy według NCHFP; zamiennik cytrynowy najwyżej jako uwaga „słabiej działa”, sok z cytryny w dawce NCHFP tylko dla fig (FRZ-078).

**FRZ-086** (niekrytyczne; jedno źródło)

- pl: Do spowolnienia ciemnienia można też użyć gotowych preparatów (kwas askorbinowy z cukrem albo z cukrem i kwasem cytrynowym) zgodnie z instrukcją producenta.
- en: Commercial anti-darkening preparations (ascorbic acid mixed with sugar, or with sugar and citric acid) may also be used to slow darkening; follow the manufacturer’s directions.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f09265a3d9a8): https://extension.colostate.edu/resource/freezing-fruits/, Colorado State Univ. Extension, Freezing Fruits (peer-reviewed; publ. 08.1994, przegląd 04.2013; P. Kendall); Preventing Darkening. Cytat: „Ascorbic acid mixtures. Special commercial anti-darkening preparations (ascorbic acid mixed with sugar or with sugar and citric acid) also may be used to slow darkening. Follow manufacturer’s directions.”
- warianty: sweet-cherry-v13, peach-nectarine-v15, apricot-v15, apple-v19, fig-pomegranate-v11, pear-v15, plum-v19

### A6: czosnek w oleju i pesto

**OLE-051** (krytyczne)

- pl: Czosnek w oleju do zamrożenia pakuje się w szklane słoiki do mrożenia albo plastikowe pojemniki do zamrażarki z 1/2 cala (ok. 1,3 cm) wolnej przestrzeni, opisuje, datuje i zamraża.
- en: Package garlic-in-oil for freezing in glass freezer jars or plastic freezer boxes with 1/2 inch (about 1.3 cm) headspace, then label, date and freeze.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 449989d91d4b): https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/, NCHFP, Freezing Garlic-In-Oil; akapit 2. Cytat: „Package in glass freezer jars or plastic freezer boxes, leaving ½-inch headspace. Label, date and freeze.”
- warianty: garlic-v17
- uwaga: Uzupełnia OLE-003 (to samo zdanie źródła) o nakaz opisania i datowania; OLE-003 bez zmian, bo ma przegląd.

**OLE-052** (krytyczne)

- pl: Czosnek w oleju trzymany w lodówce opisuje się datą przygotowania, a najlepiej także datą „wyrzucić po”, czyli 4 dni później.
- en: Label garlic-in-oil kept in the refrigerator with the preparation date and preferably also a “discard after” date, that is 4 days later.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 71c5f5d86e0a): https://ucfoodsafety.ucdavis.edu/files/250352.pdf, UC ANR Publication 8568, Garlic: Safe Methods to Store, Preserve, and Enjoy (10.2016), s. 4 (UC Davis Food Safety); Storing Garlic in Oil, s. 4. Cytat: „Label refrigerated garlic in oil mixtures to show the preparation date (or preferably with a “discard after date” label).”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 d12776b93fa1): https://extension.oregonstate.edu/es/catalog/pub/sp-50-701-herbs-vegetables-oil, Oregon State Univ. Extension, SP 50-701 Herbs and Vegetables in Oil; akapit o przechowywaniu olejów smakowych. Cytat: „Label containers with the date that the oil mixture was prepared as well as the date (four days later) by which the mixture must be used or else frozen for longer storage.”
- warianty: garlic-v17, garden-herbs-v16
- uproszczenie: Dwa źródła szczebla 3 (UC ANR, OSU), niezależni wydawcy. Dla pesto 4 dni zastępuje 3 dni NCHFP (OLE-043), więc karta pesto podaje datę „wyrzucić po” 3 dni później (B5-D2).

**OLE-053** (krytyczne)

- pl: Czosnku w oleju nie przechowuje się w temperaturze pokojowej: niska kwasowość, brak tlenu w oleju i ciepło to idealne warunki, w których Clostridium botulinum rośnie i wytwarza toksynę; to samo zagrożenie dotyczy innych niskokwasowych dodatków w oleju, np. ziół i papryczek chili.
- en: Do not store garlic in oil at room temperature: low acidity, no free oxygen in the oil and warmth are ideal conditions for Clostridium botulinum to grow and produce toxin; the same hazard applies to other low-acid foods in oil, such as herbs and chili peppers.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 71c5f5d86e0a): https://ucfoodsafety.ucdavis.edu/files/250352.pdf, UC ANR Publication 8568, Garlic: Safe Methods to Store, Preserve, and Enjoy (10.2016), s. 4 (UC Davis Food Safety); Storing Garlic in Oil, s. 4. Cytat: „Do not store garlic in oil at room temperature. Garlic in oil mixtures stored at room temperature provide an ideal environment for Clostridium botulinum to grow and produce toxin (low acidity, no free oxygen in the oil, and warm temperature).”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 48116db3eba9): https://extension.umn.edu/cottage-food-connection/chili-oil-and-oil-based-products, Univ. of Minnesota Extension, Minnesota cottage food law: Chili oil and oil-based products; akapit o środowisku beztlenowym. Cytat: „Oil creates a low-oxygen (anaerobic) environment and when low-acid foods such as garlic, herbs, or chili peppers are submerged in oil, the combination of low oxygen, low acidity and room temperature storage creates the ideal condition for the foodborne illness-causing microorganism Clostridium botulinum to grow and produce a dangerous neurotoxin called botulinum toxin that causes botulism.”
- warianty: garlic-v17, garden-herbs-v16

**OLE-054** (krytyczne; jedno źródło)

- pl: Pesto trzeba trzymać w lodówce albo zamrozić, nigdy w temperaturze pokojowej: czosnek i zioła to żywność niskokwasowa, która może zawierać Clostridium botulinum, a olej tworzy środowisko beztlenowe sprzyjające tej bakterii.
- en: Pesto must be kept in the refrigerator or frozen, never at room temperature: garlic and herbs are low-acid foods that can carry Clostridium botulinum, and oil creates an oxygen-free environment in which this bacterium grows.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 d12776b93fa1): https://extension.oregonstate.edu/es/catalog/pub/sp-50-701-herbs-vegetables-oil, Oregon State Univ. Extension, SP 50-701 Herbs and Vegetables in Oil; wstęp i akapit o przechowywaniu. Cytat: „These low-acid foods can be a source of Clostridium botulinum bacteria, which are found in soil, water, and air. Low acid foods stored in oil create an oxygen-free environment which is perfect for growth of Clostridium botulinum bacteria. | It is essential for all other flavored oils made at home, including pesto, to be stored in the refrigerator for up to 4 days or frozen for long term storage.”
- warianty: garden-herbs-v16
- uproszczenie: „Nigdy w temperaturze pokojowej” to zaprzeczenie nakazu źródła („essential … refrigerator … or frozen”), kierunek zgodny z NCHFP (OLE-043: lodówka, nie dłużej niż 3 dni). Czas w lodówce bierze się z OLE-043 (3 dni), nie z OSU (4 dni), B5-D2. Strona NCHFP o pesto nie nazywa ryzyka botulizmu; robi to OSU (szczebel 3) i Nummer 2011 (szczebel 2, tabela zaleceń: pesto „Refrigerate”).

**OLE-055** (niekrytyczne; jedno źródło)

- pl: Pesto można zamrozić w foremkach do lodu; zamrożone kostki zawija się pojedynczo w folię i przechowuje w pojemniku do zamrażarki; kostki nadają się do przyprawiania zup, gulaszy i sosów.
- en: Pesto can be frozen in ice cube trays; when frozen, wrap the cubes individually in plastic wrap and store them in a freezer container; the cubes can be used to season soups, stews and sauces.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 d12776b93fa1): https://extension.oregonstate.edu/es/catalog/pub/sp-50-701-herbs-vegetables-oil, Oregon State Univ. Extension, SP 50-701 Herbs and Vegetables in Oil; Basic Pesto, Hint. Cytat: „Hint: Pesto can be frozen in ice cube trays. When frozen, wrap individual cubes in plastic wrap and store in a freezer container. These cubes can be used for seasoning soups, stews and sauces.”
- warianty: garden-herbs-v16

**OLE-056** (niekrytyczne; jedno źródło)

- pl: Rozgniecione warzywa i zioła w oleju, np. czosnek, można zamrozić w foremkach do lodu, a potem zapakować do szczelnych pojemników jako gotowe porcje przyprawy; mrożone oleje smakowe pakuje się szczelnie, np. w małe słoiki szklane lub plastikowe, żeby zapach nie przechodził na inne produkty w zamrażarce.
- en: Crushed vegetables and herbs in oil, such as garlic, can be frozen in ice cube trays and then packed in airtight containers as ready seasoning portions; pack frozen flavoured oils airtight, for example in small glass or plastic jars, so their aroma does not penetrate other foods in the freezer.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 d12776b93fa1): https://extension.oregonstate.edu/es/catalog/pub/sp-50-701-herbs-vegetables-oil, Oregon State Univ. Extension, SP 50-701 Herbs and Vegetables in Oil; Fresh vegetables/herbs in oil; Hint. Cytat: „Hint: Package flavored oils to be frozen in airtight containers such as small glass or plastic jars to prevent vibrant aroma of the herbs and vegetables from penetrating other foods in freezer. | Crushed vegetables and herbs in oil can be frozen in ice cube trays and then packaged in airtight containers to be used as seasonings.”
- warianty: garlic-v17
- uproszczenie: „Np. czosnek”: publikacja wymienia czosnek wśród warzyw w oleju („vegetables (such as garlic, mushrooms, chili peppers)”). Kolejność zdań w pl odwrotna niż w źródle.

**OLE-057** (krytyczne)

- pl: Zamrażanie nie zabija większości bakterii, tylko zatrzymuje ich wzrost; zamrażarkę trzyma się w 0°F (-18°C), a lodówkę w 40°F (4°C) lub niżej.
- en: Freezing does not kill most bacteria, it only stops them from growing; keep the freezer at 0 °F (-18 °C) and the refrigerator at or below 40 °F (4 °C).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f340dc271515): https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely, FDA Consumer Updates, Are You Storing Food Safely?; Keep your appliances at the proper temperatures; Freezer Facts. Cytat: „Keep the refrigerator temperature at or below 40° F (4° C). The freezer temperature should be 0° F (-18° C). | While freezing does not kill most bacteria, it does stop bacteria from growing.”
- warianty: garlic-v17, garden-herbs-v16
- uwaga: Podstawa zdania karty: rozmrożony czosnek w oleju i pesto to znowu produkt z ryzykiem; rozmrażać w lodówce (SLO-258). Czas zużycia po rozmrożeniu: bez źródła (pytanie B5-P1).

## 4. Warianty katalogu: przypisanie twierdzeń

| Wariant | Istniejące w rejestrze | Nowe (B5) |
|---|---|---|
| sweet-cherry-v13 | FRZ-034, SLO-253, SLO-249, SLO-256, SUS-050, SUS-059 | FRZ-067, FRZ-084, FRZ-085, FRZ-086 |
| sour-cherry-v17 | FRZ-033, SLO-281, SLO-269, SLO-249 | brak (A4 nie dotyczy, B5-D8) |
| peach-nectarine-v15 | FRZ-035, SLO-253, SLO-249, SLO-256, SUS-050, SUS-059 | FRZ-068, FRZ-069, FRZ-070, FRZ-084, FRZ-085, FRZ-086 |
| apricot-v15 | FRZ-036, SLO-253, SLO-249, SLO-256, SUS-050, SUS-059 | FRZ-071, FRZ-072, FRZ-073, FRZ-084, FRZ-085, FRZ-086 |
| apple-v19 | FRZ-030, SLO-253, SLO-249, SLO-252, SLO-256, SUS-050, SUS-059 | FRZ-074, FRZ-075, FRZ-076, FRZ-077, FRZ-084, FRZ-085, FRZ-086 |
| fig-pomegranate-v11 | FRZ-051, SLO-253, SLO-249, SLO-252, SLO-256, SUS-050, SUS-059 | FRZ-078, FRZ-079, FRZ-084, FRZ-085, FRZ-086 |
| fig-pomegranate-v12 | FRZ-052, SLO-249, SLO-256, SUS-050, SUS-059 | FRZ-066, FRZ-080 |
| pear-v15 | FRZ-031, SLO-253, SLO-249, SLO-256, SUS-050, SUS-059 | FRZ-082, FRZ-084, FRZ-085, FRZ-086 |
| plum-v19 | FRZ-032, SLO-253, SLO-269, SLO-249, SLO-256, SUS-050, SUS-059 | FRZ-083, FRZ-084, FRZ-085, FRZ-086 |
| watermelon-melon-v11 | FRZ-053, SLO-288, SLO-249 | FRZ-066, FRZ-081 |
| garlic-v17 | FRZ-019, OLE-001, OLE-002, OLE-003, OLE-004, OLE-005, OLE-019, OLE-027, OLE-029, SLO-258, SUS-050, SUS-059 | OLE-051, OLE-052, OLE-053, OLE-056, OLE-057 |
| garden-herbs-v16 | FRZ-028, OLE-042, OLE-043, OLE-044, OLE-019, OLE-027, OLE-029, SLO-258, SUS-050, SUS-059 | OLE-052, OLE-053, OLE-054, OLE-055, OLE-057 |

Wariant bez źródła: żaden. Luki częściowe w rozdziale 5.

## 5. Bez źródła (nie do kart)

- apple-v19: parowe blanszowanie plasterków jako alternatywa kwasu askorbinowego: liczba w źródle zniekształcona („11/2”), B5-D4.
- garlic-v17, garden-herbs-v16: czas zużycia po rozmrożeniu czosnku w oleju i pesto: brak w NCHFP, OSU, UC ANR, UMN, FDA, Nummer 2011 (B5-P1, B5-D9).
- fig-pomegranate-v12: granat bez syropu: strona NCHFP podaje tylko syrop 30%; pakowanie na sucho soku i miąższu bez źródła.
- wszystkie A4: przeliczenie łyżeczek kwasu askorbinowego na gramy inne niż w źródle (np. dla innego produktu witaminy C): źródło podaje tylko mg obok łyżeczek; karta nie przelicza tabletek.
- A6 ogółem: obecna strona Colorado State Extension o olejach z czosnkiem (404 na sprawdzonych adresach), osobna strona konsumencka USDA (ask.usda.gov: błąd TLS) i FDA o czosnku w oleju (eCFR zablokowany dla curl): sprawdzone, brak. Nie są potrzebne do zdań kart (szczebel 1 daje NCHFP i FDA).

## 6. Pytania otwarte

- **B5-P1**: Ile wolno trzymać w lodówce rozmrożony czosnek w oleju i rozmrożone pesto? Brak źródła w przeczytanych (NCHFP, OSU, UC ANR, UMN, FDA, Nummer 2011). Do pakietu eksperta (D-027 d).
- **B5-P2**: Apple steam blanch: NCHFP online ma „11/2 to 2 minutes”. Potwierdzić w drukowanym So Easy to Preserve 6th ed. (Bulletin 989), czy to 1 1/2 minuty (B5-D4).
- **B5-P3**: Kwas askorbinowy w Polsce: czy dostępny jest czysty krystaliczny (apteka, sklepy z przetworami) i czy tabletki witaminy C z dodatkami nadają się jak w CSU (FRZ-084)? Pytanie dla roli 03/04 (tekst pomocniczy), nie fakt do karty.

## 7. Decyzje (do weta, wpis `2026-11-02-jaratlas-06-b5-bloki-mrozenia`)

- **B5-D1** (decyzja Claude, do weta): Numeracja: A4 w klastrze FRZ (FRZ-066–086, kontynuacja twierdzeń mrożenia NCHFP), A6 w klastrze OLE (OLE-051–057, kontynuacja czosnku w oleju i pesto). Sprawdzone: brak tych ID w rejestrze i na wszystkich gałęziach origin. Analogia w repo JarAtlas: B4-D1 (kontynuacja klastra). Odrzucone: klaster SLO (zdania kart p14–p20; rozbiłby bloki) i nowy prefiks. Ryzyko: równoległy tor, który dziś też doda FRZ/OLE, musi sprawdzić ten plik przed numeracją.
- **B5-D2** (pełna analogia: trening CLAUDE.md:122 (wyższy szczebel wygrywa) + zasada wariantu ostrożniejszego): Pesto w lodówce: 3 dni (NCHFP, szczebel 1, OLE-043) zamiast 4 dni (OSU SP 50-701, szczebel 3) i 10 dni (CSU 2006, według Nummer 2011, szczebel 2 opisujący szczebel 3; obecna strona CSU niedostępna, 404). Czosnek w oleju: 4 dni (NCHFP, OLE-002) zamiast 10 dni CSU 2006. Etykieta „wyrzucić po” (OLE-052) dla pesto liczy 3 dni. Odrzucone: część wspólna (to różne szczeble) i najdłuższy czas.
- **B5-D3** (pełna analogia: trening CLAUDE.md:122): Dawki kwasu askorbinowego i stężenia syropu dla każdego owocu tylko z NCHFP (szczebel 1). CSU Freezing Fruits (szczebel 3) podaje dla czereśni i brzoskwiń syrop 30–40% (NCHFP: 40%), dla posypki 1/4 łyżeczki w 1/4 szklanki wody (NCHFP: w 3 łyżkach), dla jabłek posypkę 1/4 łyżeczki (NCHFP: 1/2) i antyoksydacyjną kąpiel w soku z cytryny. CSU służy tylko jako drugie źródło tam, gdzie się zgadza (FRZ-066, 071, 072), i dla zdań ogólnych bez odpowiednika w NCHFP (FRZ-084–086, z atrybucją).
- **B5-D4** (decyzja Claude, do weta): Jabłka: pominięta alternatywa NCHFP „steam blanched for 11/2 to 2 minutes”. Surowy HTML ma „11/2” (najpewniej 1 1/2), więc liczby nie da się przepisać dosłownie bez zgadywania. To jakość (kolor), nie bezpieczeństwo: kwas askorbinowy wystarcza. Odrzucone: wpisać „1 1/2–2 minuty” jako poprawkę literówki (zgadywanie); zostawić „11/2” (myląca liczba). Do ewentualnego przywrócenia po potwierdzeniu w drukowanym So Easy to Preserve.
- **B5-D5** (decyzja Claude, do weta): Rozszerzenie zakresu o gruszki (pear-v15), śliwki (plum-v19) i melona w syropie 30% (watermelon-melon-v11): strony NCHFP gruszek i śliwek podają kwas askorbinowy (p19: „śliwki do sprawdzenia kwasu askorbinowego”), a p20 pominęła melona w syropie z braku przepisu 30%. Koszt: 3 twierdzenia (FRZ-081–083). Odrzucone: zostawić na osobny tor (powtórne pobranie tych samych stron).
- **B5-D6** (decyzja Claude, do weta): Kwas cytrynowy i sok z cytryny: karta podaje kwas askorbinowy według NCHFP. Sok z cytryny w dawce NCHFP tylko dla fig w syropie (FRZ-078). Kąpiel w kwasie cytrynowym/soku z cytryny (FRZ-085, CSU, jedno źródło szczebla 3) najwyżej jako zdanie z atrybucją „działa słabiej”, bez zastępowania dawek NCHFP. Odrzucone: równorzędny zamiennik (NCHFP go dla tych owoców nie podaje); pominąć całkiem (zlecenie wymienia kwas cytrynowy i sok).
- **B5-D7** (decyzja Claude, do weta): Krytyczność: A4 niekrytyczne (kwas askorbinowy i syrop służą jakości i kolorowi; NCHFP: „for a better quality product”, bezpieczeństwo mrożenia zapewniają SUS-050 i SUS-059). A6 krytyczne poza OLE-055 i OLE-056 (foremki do lodu, szczelne opakowanie: jakość). Odrzucone: wszystkie krytyczne (rozmywa przegląd człowieka).
- **B5-D8** (decyzja Claude, do weta): Wiśnie (sour-cherry-v17): strona NCHFP Freezing Cherries: Sour nie podaje kwasu askorbinowego (syrop 50% albo cukier), więc blok A4 ich nie dotyczy; istniejąca karta i SLO-281, SLO-269 bez zmian. Czereśnie (sweet-cherry-v13): jedyny sposób NCHFP to syrop 40% z kwasem askorbinowym (FRZ-067).
- **B5-D9** (decyzja Claude, do weta (wariant najostrożniejszy, botulizm)): Czosnek w oleju i pesto po rozmrożeniu: brak źródła czasu zużycia (pytanie B5-P1). Rekomendacja dla kart: tylko zdania ze źródłem: rozmrażać w lodówce (SLO-258), nigdy nie trzymać w temperaturze pokojowej (OLE-053, OLE-054), zamrażanie nie zabija bakterii (OLE-057), porcjować przed zamrożeniem (OLE-055, OLE-056), żeby rozmrażać tylko tyle, ile się zużyje. Bez liczby dni po rozmrożeniu. Odrzucone: przenieść 4 dni/3 dni z lodówki na produkt rozmrożony (wniosek bez źródła); „zużyć od razu” jako nakaz liczbowy (bez źródła).
- **B5-D10** (decyzja Claude, do weta): Nie zmieniam przeglądniętych OLE-003 ani OLE-043; nowe zdania (etykieta i data OLE-051, OLE-052) jako osobne twierdzenia, żeby nie unieważniać przeglądu zastępczego. Odrzucone: uzupełnienie OLE-003 (wymagałoby ponownego przeglądu).
