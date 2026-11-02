# E1 suszenie: wzór karty, obsługa w kodzie, partie (tor C2, 2026-11-02)

- Rola 06-tresci, build, tryb dzienny bez właściciela. Gałąź `claude/jaratlas-c2-suszenie` od `main` = 5295e54. Zakres: tylko ten plik i `E1-suszenie-wzor-2026-11-02.json` (partie, luki, cytaty). Katalog, `site/`, `tools/`, `tests/`, rejestr bez zmian.
- Repo trening (klon `--depth 1`, 2e4b0f8): grep `susz|drying|dehydrat|wzór karty|partie po|partia` w `*.md` daje tylko „partia mięśniowa” (aplikacja treningowa). Brak analogii dziedzinowej, więc wybory niżej to „decyzja Claude, do weta” (tablica `2026-11-02-jaratlas-06-c2-suszenie`).
- Wzór formy: karta mrożenia `docs/tresci/karty/en/warianty/corn-v12.json` i raport `E3-karty-p19-2026-11-02.md` (sekcje, znaczniki, przegląd zastępczy D-027).

## 1. Ile suszenia jest w katalogu

Komenda: odczyt `catalog/catalog-seed.json` (node), `preservationMethod: dry-storage`.

| Status | Wariantów | Uwagi |
|---|---|---|
| ok-zrodlo | 69 | wszystkie w rodzinie `drying` (w tym 2 jerky z twierdzeniami MIE), `publication: ukryta`, 0 z kartą |
| do-researchu | 65 | drying 45, sweet-preserves 17, koji-soy-ferments 2, meat-curing-smoking 1 |
| nie-publikowac | 1 | freshwater-fish-v11 (wobła, FDA CPG 540.650) |

Kolejka do kart: 69 `ok-zrodlo`, zgodnie z E3 p13 („dry-storage 69 (suszenie)”). Źródła w wariantach: 1–3 na wariant; twierdzenia wspólne: SUS-022 (63 warianty), SUS-001 (48), SUS-017 (35), SUS-021 (29), SUS-014 (28), SUS-011/016/018/020 (po 18). Ostrzeżenia wymagane (`requiredWarnings`): SUS-035 (4 warianty grzybów dzikich), SUS-041 (owoce bzu).

## 2. Czy kod i kontrole obsługują suszenie tak jak mrożenie

Wynik: generator, plan, szablony i kontrole nie zależą od metody. Karta suszenia przechodzi tę samą drogę co karta mrożenia. Luki są w danych (rejestr, katalog) i w dwóch miejscach kontroli przekładu.

Dowód z kodu:
- `tools/validate-catalog.mjs:8`: `dry-storage` jest na liście metod; rodzina `drying` ma `allowedMethods: ["dry-storage","none","refrigerator"]`, 14 progów i 9 zakazów z twierdzeniami (katalog, `processFamilies`). Reguły zależne od metody dotyczą tylko `water-bath` (`validate-catalog.mjs:74`).
- `tools/karty-tresci.mjs:15-30`: karta to `tytul`, `wstep`, `ostrzezenia[]`, `sekcje[]`; bez pola metody.
- `site/plan.mjs:189-195` (bramka publikacji) i `:239-241` (wymagane ostrzeżenia): bez warunku na metodę.
- `site/szablony.mjs:140-161`: ta sama strona wariantu, uwaga D-027 (c) zawsze, Recipe tylko z obrazem.
- `site/kontrole.mjs:89-100`: ostrzeżenia i uwaga D-027 bez warunku na metodę.

Test na kopii repo (`/tmp/.../scratchpad/kopia`, bez commita): próbna karta `apple-v17` en/pl (krążki jabłek, SUS-001, 011, 012, 016, 018, 019, 020, 022) i slugi.

| Przebieg | Wynik | Co pokazał |
|---|---|---|
| 1: en z „2 1/2 tablespoons”, bez pl | `npm run check` kod 1 | `en/apple-v17:7: liczba 2 nie występuje w SUS-012`: kontrola czyta „2 1/2” jako 2, 1 i 2, a twierdzenie ma „2,5” |
| 2: en + pl, „20 percent”, „E. coli O157:H7” | kod 1, testy 116/119 | test 54: „percent” w en i „%” w pl to różne symbole; test 55: mutacja „O157:H7” → „O158:H7” niewykryta (liczba sklejona z literą nie jest liczbą) |
| 3: „20%”, bez serotypu | testy 119/119, kod 1 tylko z `check:tresci` | `BŁĄD rejestr SUS-016/018/019/022: przegląd dotyczy innej wersji zdań (e3b0c44298fc …)`: przegląd zastępczy był dla zera zdań; tak samo jak w mrożeniu, partia odnawia `przeglad.sha` |
| 4: `planStron` + `stronaWariantu` (pl) | ścieżka `/pl/jablko/suszone-krazki/`, 0 błędów | `<main data-typ="karta" data-status="ok-zrodlo">`, uwaga D-027c, sekcje, źródła |
| 5: boletes-v11 opublikowany bez ostrzeżenia | błąd planu | `pl/boletes-v11: treść bez wymaganego ostrzeżenia SUS-035`: bramka ostrzeżeń działa dla suszenia |

Pełny build z publikacją w kopii zatrzymuje się na `BŁĄD en: brak tekstów interfejsu (site/teksty/en.json)`. To dotyczy każdej metody (teksty interfejsu robi rola 04), nie suszenia.

### Luki

P1 oznacza: do zrobienia przed pierwszą kartą tej grupy. Realność według zasady 5.

| ID | P | Kto | Luka | Dowód | Realność | Wpływa na |
|---|---|---|---|---|---|---|
| C2-01 | P1 | 06 (w partii) | Brak twierdzeń dla konkretnych produktów: wszystkie 69 wariantów mają tylko twierdzenia wspólne (np. warzywa SUS-001, 014, 017, 021, 022). Brak przygotowania, czasu blanszowania, czasu suszenia i testu suchości dla danego produktu. W mrożeniu każdy wariant dostał własne SLO-xxx ze strony produktu. | odczyt katalogu, sekcja 1 | realny (karta bez kroków dla produktu) | wszystkie partie |
| C2-02 | P1 | 06 (przed S5) | SUS-001 (140 °F) ma źródła tylko dla suszarek i owoców; weryfikacja E3 zapisała: „żadne z podanych źródeł nie mówi o warzywach”. 48 wariantów, w tym warzywne, wskazuje SUS-001. | `rejestr.json:14271` (`weryfikacjaE3`) | realny (zdanie bez źródła w zakresie) | S5–S8 |
| C2-03 | P1 | 06 (w partii) | Brak twierdzeń wzoru: test suchości owoców (CSU), suszenie w piekarniku z termometrem (CSU Drying Vegetables), pojemniki i miejsce przechowywania (NCHFP), studzenie przed testem suchości. Cytaty przeczytane dziś są w sekcji 3. | sekcja 3 | realny | wszystkie |
| C2-04 | P1 | tor A (katalog, D-043) | Jerky bez `requiredWarnings`: beef-veal-v08 i game-lamb-v09 nie wymagają ostrzeżenia o 160 °F (MIE-036) ani o włośniach (MIE-035, MIE-033). | odczyt katalogu, sekcja 1 | realny (bezpieczeństwo) | blok M |
| C2-05 | P1 | tor A (katalog, D-043) | Nazwa beef-veal-v08: „suszone w 65°C”. NCHFP: „preheated to 140ºF” (60 °C). | katalog; NCHFP Jerky (sekcja 3) | realny (liczba w danych sprzeczna ze źródłem szczebla 1) | blok M |
| C2-06 | P2 | tor A | Niezmienniki przekładu: „percent” w en nie odpowiada „%” w pl; „mg” nie jest symbolem jednostki (`SYMBOL`, `tools/i18n/niezmienniki.mjs:45,67`). Obejście: w en pisać „%”, a mg dopisać słownie z liczbą w twierdzeniu. | test na kopii, przebieg 2 | brzegowy | S2, S4 |
| C2-07 | P2 | tor A | Liczby sklejone z literami („O157:H7”) nie są porównywane między językami; test mutacji 55 to zgłasza. Obejście: w kartach „E. coli” bez serotypu (decyzja niżej). | test na kopii, przebieg 2 | brzegowy (nazwa w zdaniu pobocznym) | S2–S4 |
| C2-08 | P2 | tor A albo 06 | Ułamki mieszane: `tools/kontrole-tresci.mjs:12` (`LICZBA`) czyta „2 1/2” jako trzy liczby. Obejście: twierdzenie zawiera zapis ze źródła („2 1/2 tablespoons”) albo karta podaje tylko gramy. | test na kopii, przebieg 1 | brzegowy | S2, S4 |
| C2-09 | P2 | 05 | Jerky są w rodzinie `drying`, a progi mięsa (MIE-035–041) w rodzinie `meat-curing-smoking`; nic nie sprawdza progów na poziomie rodziny wariantu. | katalog, `processFamilies` | teoretyczny | blok M |
| C2-10 | P2 | właściciel / 06 | Dziś niedostępne: Clemson HGIC (Cloudflare „Sorry, you have been blocked”), PMC (167 bajtów), USDA FSIS Jerky („Access Denied”). Twierdzenia SUS-039 (chipsy) i SUS-040 (proszki) stoją tylko na Clemson (szczebel 3, jedno źródło). | `pobrane.txt`: pliki 06, 08, 16, 22 | realny dla S7–S8 | S7, S8 |

Sprawdzone, brak luki: dozwolona metoda w rodzinie, wymagane ostrzeżenia (bramka planu działa), uwaga D-027, typ karty-ostrzeżenia, slugi (test kart wymaga slugów produktu i wariantu, jak w mrożeniu), jednostki °F/°C/%/h/min w `JEDN` (`tools/kontrole-tresci.mjs:31`), kwarta i pinta w leksykonie (`niezmienniki.mjs:78`). Dni i miesiące nie są w `JEDN`; to ta sama znana granica co w mrożeniu (moduł kontrole-mechaniczne).

## 3. Źródła przeczytane dziś (curl + tekst, 2026-11-02)

57 cytatów z rejestru dla SUS-001–048 i MIE-035–043 jest dosłownie w dzisiejszym tekście stron (skrypt `cytaty.mjs`, normalizacja spacji i cudzysłowów). Nie dało się sprawdzić 8: SUS-006, 009, 021, 039, 040 (część Clemson) i SUS-042–044 (PMC). NCHFP „Drying Fruits and Vegetables” (https://nchfp.uga.edu/how/dry/drying-general/drying-fruits-and-vegetables/) odsyła po procedury dla produktów do dwóch uczelni: „Resources: Colorado State University Extension: Drying Fruits Montana State University Extension: Drying Vegetables”. Dlatego kroki dla produktów biorę z CSU i MSU (szczebel 3, wskazane przez szczebel 1).

| Klucz | Adres | Cytat dosłowny | Do czego we wzorze |
|---|---|---|---|
| Z1 | https://nchfp.uga.edu/how/dry/drying-general/food-dehydrators/ | „Dehydrators are efficiently designed to dry foods fast at 140ºF.” | temperatura (SUS-001) |
| Z2 | https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/ | „First, cool completely. Warm food causes sweating which could provide enough moisture for mold to grow.” | pakowanie (SUS-024) |
| Z2 | jw. | „Store dried foods in clean, dry home canning jars, plastic freezer containers with tight-fitting lids or in plastic freezer bags. Vacuum packaging is also a good option.” | pojemniki (C2-03; nowe twierdzenie) |
| Z2 | jw. | „Dried foods should be stored in cool, dry, dark areas.” | miejsce (C2-03) |
| Z2 | jw. | „Most dried fruits can be stored for 1 year at 60ºF, 6 months at 80ºF. Vegetables have about half the shelf-life of fruits.” | trwałość (SUS-020, SUS-021) |
| Z2 | jw. | „Foods affected by moisture, but not spoiled, should be used immediately or redried and repackaged. Moldy foods should be discarded.” | zepsucie (SUS-022, SUS-023) |
| Z2 | jw. | „Seal the containers and let them stand for 7 to 10 days.” · „If condensation develops in the jar, return the fruit to the dehydrator for more drying.” | kondycjonowanie (SUS-018, SUS-019) |
| Z2 | jw. | „At this stage, they should contain about 10 percent moisture. Because they are so dry, they do not need conditioning like fruits.” | warzywa (SUS-017) |
| Z3 | https://nchfp.uga.edu/how/dry/drying-general/sun-drying/ | „Vegetables (with the exception of vine dried beans) and meats are not recommended for out-of-doors drying.” | zakres (SUS-003) |
| Z3 | jw. | „Avoid screens made from "hardware cloth." This is galvanized metal cloth that is coated with cadmium or zinc.” | sita (SUS-008) |
| Z4 | https://extension.colostate.edu/resource/drying-fruits/ | „Pretreating fruits prior to drying is highly recommended.” | obróbka wstępna (decyzja C2-D2) |
| Z4 | jw. | „Stir 2 1/2 tablespoons (34 grams) of pure ascorbic acid crystals into one quart (1000 milliliters) of cold water.” · „Soak for 10 minutes, remove with a slotted spoon, drain well, and dehydrate.” | kwas askorbinowy (SUS-012) |
| Z4 | jw. | „Caution: Pretreating with sodium metabisulfite is not recommended if you or others who will be consuming the dried fruit have known sulfite sensitivity.” | pominięcie siarczynów (SUS-010) |
| Z4 | jw. | „To crack skins, dip fruit in briskly boiling water for 30 to 60 seconds, then dip in very cold water.” | owoce w całości (SUS-015) |
| Z4 | jw. | „Dry at 140 degrees F (60°C) in an oven or dehydrator.” | temperatura owoców (SUS-001) |
| Z4 | jw. | „Squeeze a handful of the fruit. If no moisture is left on the hand and pieces spring apart when released, they are dry.” | test suchości (C2-03; nowe twierdzenie) |
| Z4 | jw. | „When warm or hot, fruits seem more soft, moist and pliable than they actually are.” | studzenie przed testem (C2-03) |
| Z5 | https://extension.colostate.edu/resource/drying-vegetables/ | „Blanch vegetables before drying to stop enzyme action and enhance destruction of microorganisms.” | blanszowanie (SUS-014) |
| Z5 | jw. | „If the temperature is too low in the beginning, microorganisms may survive and even grow before the food is adequately dried.” | temperatura (SUS-002) |
| Z5 | jw. | „To ensure maintenance of 140 to 150 degrees F, monitor oven temperature using a calibrated oven thermometer.” | piekarnik, warzywa (C2-02, C2-03) |
| Z6 | https://extension-store.montana.edu/montguides/drying-vegetables | „The optimum temperature for drying food is 140°F.” | źródło SUS-001 dla warzyw (C2-02) |
| Z6 | jw. | „Start counting blanching time as soon as the water returns to a boil.” | blanszowanie |
| Z6 | jw. | „Vacuum sealing foods can increase the shelf life of some foods, but it is NOT a food preservation method by itself.” | próżnia (SUS-025), para z Z2 |
| Z7 | https://nchfp.uga.edu/how/dry/recipes/jerky/ | „The risk of foodborne illness from home-dried jerky can be decreased by allowing the internal temperature of the meat to reach 160ºF, but in such a way as to prevent case hardening.” | blok M (MIE-036) |
| Z7 | jw. | „Slice meat no thicker than ¼ inch.” · „Place the racks in a dehydrator or oven preheated to 140ºF.” | blok M (MIE-040, MIE-038; C2-05) |
| Z7 | jw. | „Properly dried jerky will keep at room temperature two weeks in a sealed container.” | blok M (MIE-041) |

Ziół, skór owocowych, pestek i fasoli z krzaka dotyczą strony NCHFP Herbs, Fruit Leathers, Mango Leather, Pumpkin Seeds i Vine Drying. Ich cytaty z rejestru (SUS-026–034, SUS-048) też są dziś dosłownie na stronach.

## 4. Wzór karty suszenia (en/pl)

Zasady wzoru:
- Kolejność sekcji jak w mrożeniu: wybór i przygotowanie → obróbka wstępna → suszenie → test suchości (owoce: kondycjonowanie) → pakowanie i przechowywanie → kiedy wyrzucić.
- Ostrzeżenia na górze tylko z `requiredWarnings` wariantu (SUS-035, SUS-041; jerky: MIE-036, MIE-035 po C2-04).
- Liczby w °F ze źródła, °C w nawiasie z „about” / „ok.” poza wartością 60 °C, którą podaje CSU. W en „%”, nie „percent” (C2-06).
- Znacznik `[T:NOWE-…]` oznacza twierdzenie do dopisania w partii z cytatem z sekcji 3 (C2-01, C2-03). Dopóki go nie ma, zdanie nie wchodzi do karty.

### 4a. Owoce w kawałkach (S2), szkielet en

```json
{
  "tytul": "Dried <fruit> <form> (<source>)",
  "wstep": "This card describes how to dry <fruit> in a dehydrator or oven at 140 °F (60 °C), after a pretreatment in ascorbic acid solution. [T:SUS-001,SUS-012]",
  "ostrzezenia": [],
  "sekcje": [
    { "naglowek": "Choosing and preparing", "akapity": [
      "<product step from CSU Table 2> [T:NOWE-produkt]" ] },
    { "naglowek": "Pretreatment", "akapity": [
      "Stir 34 g of pure ascorbic acid crystals into 1 quart (about 1 l) of cold water, cut the peeled fruit straight into it and soak for 10 minutes; then drain well. [T:SUS-012]",
      "Pretreating with an acid solution also enhances the destruction of harmful bacteria, such as E. coli, Salmonella and Listeria, during drying. [T:SUS-011]",
      "This card does not describe sulfiting, because sulfites can cause reactions in people with sulfite sensitivity. [T:SUS-010]" ] },
    { "naglowek": "Drying", "akapity": [
      "Dry the pieces in a single layer at 140 °F (60 °C) in a dehydrator or oven. [T:SUS-001]",
      "Do not use trays or screens of galvanized, copper or aluminium mesh in contact with the food. [T:SUS-008]" ] },
    { "naglowek": "Testing for dryness and conditioning", "akapity": [
      "Let a few pieces cool before testing: warm fruit seems softer and moister than it is. [T:NOWE-test-suchosci]",
      "Squeeze a handful: the fruit is dry when no moisture is left on your hand and the pieces spring apart. [T:NOWE-test-suchosci]",
      "Home dried fruit should contain about 20% moisture. [T:SUS-016]",
      "Pack the cooled fruit loosely in jars, seal them and let them stand for 7 to 10 days, shaking them daily. [T:SUS-018]",
      "If condensation develops in a jar, return the fruit to the dehydrator. [T:SUS-019]" ] },
    { "naglowek": "Packing and storing", "akapity": [
      "Pack only completely cooled fruit: warm food sweats, and that moisture is enough for mould to grow. [T:SUS-024]",
      "<containers and a cool, dry, dark place> [T:NOWE-pojemniki]",
      "Vacuum sealing can help, but it is not a preservation method by itself. [T:SUS-025]",
      "Most dried fruits keep for 1 year at 60 °F (about 16 °C) and 6 months at 80 °F (about 27 °C). [T:SUS-020]" ] },
    { "naglowek": "When to throw away", "akapity": [
      "Check the fruit often; if it has taken up moisture but is not spoiled, use it at once or dry it again and repack it. [T:SUS-023]",
      "Throw away dried fruit that is mouldy or smells off. [T:SUS-022]" ] }
  ],
  "obraz": null
}
```

pl (to samo, zdanie po zdaniu; przykłady): „Rozpuść 34 g czystego kwasu askorbinowego w 1 kwarcie (ok. 1 l) zimnej wody, krój obrane owoce prosto do roztworu i mocz je przez 10 minut, potem dobrze odsącz. [T:SUS-012]” · „Domowy susz owocowy powinien mieć około 20% wilgotności. [T:SUS-016]” · „Kondycjonuj ostudzone owoce luźno w zamkniętych słojach przez 7–10 dni i codziennie nimi potrząsaj. [T:SUS-018]” Te trzy zdania przeszły test kart na kopii (przebieg 3).

### 4b. Różnice dla pozostałych grup

| Grupa | Zmiana względem 4a | Twierdzenia |
|---|---|---|
| S3 owoce w całości | zamiast kwasu: nacinanie skórki wrzątkiem 30–60 s i zimną wodą; kwas askorbinowy tylko, gdy źródło produktu go podaje | SUS-015 |
| S4 skóry owocowe | przecier z sokiem z cytryny albo kwasem askorbinowym, warstwa ok. 1/8 cala, 140 °F, test odciskiem palca; przechowywanie do 1 miesiąca w temperaturze pokojowej, do 1 roku w zamrażarce | SUS-026, 027, 028, 030 |
| S5–S7 warzywa | zamiast obróbki kwasem: blanszowanie (czas z tabeli produktu), schłodzenie, odsączenie; suszenie do stanu kruchego, ok. 10% wilgoci, bez kondycjonowania; trwałość „około połowy” trwałości owoców; tylko w suszarce albo piekarniku | SUS-014, 017, 021, 003; źródło warzyw dla SUS-001 (C2-02) |
| S1 zioła i kwiaty | 95–115 °F (ok. 35–46 °C), 1–4 h; zioła o miękkich liściach szybko, bo pleśnieją; bez słońca | SUS-031, 032, 033 |
| S1 pestki dyni, fasola z krzaka | strona NCHFP produktu; fasola: pasteryzacja suszu w zamrażarce albo piekarniku | SUS-034; SUS-048, 006, 007 |
| S9 grzyby dzikie | ostrzeżenie na górze: toksyn nie niszczy suszenie ani gotowanie, gatunek rozpozna tylko ekspert; bez blanszowania, plastry ok. 1/4 cala | SUS-035 (requiredWarnings), SUS-036 |
| M jerky | osobny blok, sekcja 4c | MIE-033–043 |

### 4c. Blok M: jerky (poza wzorem roślinnym)

Jerky ma inne zagrożenie: mięso, bakterie chorobotwórcze, włośnie w dziczyźnie i wieprzowinie. Karta będzie miała własny szkielet. Ostrzeżenie na górze: temperatura wewnętrzna 160 °F (ok. 71 °C) przez podgrzanie w marynacie przed suszeniem albo w piekarniku po suszeniu (MIE-036, 037, 039). Dla dziczyzny dochodzi zamrożenie przed krojeniem (MIE-035), ostrzeżenie UE, że zamrażanie nie zabija wszystkich Trichinella u zwierzyny łownej, i obowiązek badania (MIE-033, 034). Mięsa zanieczyszczonego treścią jelit nie używa się na jerky (MIE-043). Mięso mielone jest pominięte: NCHFP pisze, że drobnoustroje trudniej w nim zniszczyć. Blok M wymaga wcześniej C2-04 i C2-05 oraz przeglądu zastępczego wszystkich zdań.

## 5. Partie (po ok. 8, od najprostszych)

Kolejność: najpierw same źródła szczebla 1 i proste procedury, potem grupy z twierdzeniami produktowymi z tabel CSU/MSU, na końcu grupy z niedostępnym dziś źródłem, z ostrzeżeniem wymaganym albo z mięsem. Pełna lista: `E1-suszenie-wzor-2026-11-02.json`, klucz `partie`. Pokrycie sprawdzone skryptem: 69 w partiach, 69 unikalnych, 0 spoza kolejki.

| Partia | Warianty | Liczba | Warunek przed startem |
|---|---|---|---|
| S1 zioła, kwiaty, pestki, fasola z krzaka | garden-herbs-v14, foraged-blossoms-v13, elderberry-elderflower-v10, vine-leaves-greens-v11, vine-leaves-greens-v12, fennel-artichoke-v10, pumpkin-v16, beans-soy-v14 | 8 | C2-03 (pojemniki) |
| S2 owoce w kawałkach | apple-v17, pear-v13, peach-nectarine-v14, apricot-v13, strawberry-v16, pineapple-banana-v10, watermelon-melon-v10, chokeberry-seabuckthorn-v12 | 8 | C2-01, C2-03 |
| S3 owoce w całości | plum-v17, mirabelle-v11, sour-cherry-v15, sweet-cherry-v12, currant-v14, blueberry-bilberry-v13, chokeberry-seabuckthorn-v11, cranberry-lingonberry-v13 | 8 | C2-01; aronia i rokitnik mają po jednym źródle: sprawdzić tabelę CSU |
| S4 skóry owocowe i owoce z blokiem | apple-v18, plum-v16, mirabelle-v10, apricot-v09, mango-papaya-v10, grapes-v10, raspberry-blackberry-v15, elderberry-elderflower-v11 | 8 | elderberry-elderflower-v11 z ostrzeżeniem SUS-041 (requiredWarnings); rodzynki tylko w suszarce (C2-D1) |
| S5 warzywa I | white-cabbage-v16, red-savoy-cabbage-v11, cauliflower-v13, broccoli-v10, green-beans-v13, peas-chickpeas-v14, bell-pepper-v17, onion-v13 | 8 | C2-02 |
| S6 warzywa II | pumpkin-v15, eggplant-v15, potato-sunchoke-v12, shallot-pearl-onion-v14, asparagus-v10, tomato-v16, garlic-v15, leafy-greens-v12 | 8 | C2-02 |
| S7 warzywa III i chipsy | horseradish-v11, leafy-greens-v10, green-beans-v14, cultivated-mushrooms-v11, zucchini-v16, beetroot-v15, parsnip-parsley-v09 | 7 | C2-10 (SUS-039) |
| S8 proszki | red-savoy-cabbage-v12, broccoli-v11, leafy-greens-v11, chili-pepper-v18, beetroot-v16, onion-v14, horseradish-v12, garlic-v16 | 8 | C2-10 (SUS-040) |
| S9 grzyby dzikie | boletes-v11, boletes-v12, chanterelle-milkcap-v13, wild-mushrooms-v09 | 4 | pytanie otwarte E1 nr 6 (kania) |
| M jerky | beef-veal-v08, game-lamb-v09 | 2 | C2-04, C2-05 |

Szacunek (czas agenta): partia S1–S8 to ok. 1–1,5 h na partię (odczyt stron, twierdzenia, en/pl, weryfikacja zastępcza w dwóch porcjach, D-051). Czeka się na: dostęp do Clemson (S7, S8). Właściciel: weto decyzji z sekcji 6, bez innych kroków.

## 6. Decyzje do weta (decyzja Claude, brak analogii w repo trening)

Tablica: `2026-11-02-jaratlas-06-c2-suszenie`.

1. **C2-D1 Tylko suszarka i piekarnik.** Suszenia na słońcu i na krzaku karty nie opisują. Wyjątek: fasola z krzaka (beans-soy-v14), bo NCHFP opisuje ją tylko tak, z pasteryzacją. Rodzynki (grapes-v10) tylko w suszarce. Powód: NCHFP nazywa suszenie owoców na zewnątrz ryzykownym („drying fruits out-of-doors can be risky”), a warzyw i mięsa na zewnątrz nie zaleca. Odrzucone: karta z dwoma sposobami (więcej warunków pogody, których strona nie sprawdzi).
2. **C2-D2 Obróbka wstępna owoców w kawałkach zawsze.** Tylko kwas askorbinowy, kwas cytrynowy albo sok z cytryny. Pirosiarczynu i siarkowania karta nie opisuje (SUS-009, SUS-010). Powód: CSU pisze „highly recommended” i podaje działanie przeciw bakteriom (SUS-011); wariant ostrożniejszy. Odrzucone: obróbka jako opcja (słabsze działanie przeciw bakteriom) i siarczyny (alergia, zakaz spalania siarki).
3. **C2-D3 Kondycjonowanie 7–10 dni** (NCHFP, szczebel 1). CSU podaje 4–10 dni (zapis w SUS-018 bez zmian).
4. **C2-D4 Trwałość warzyw według NCHFP („około połowy” trwałości owoców),** nie 1 rok według MSU. Krótszy czas jest ostrożniejszy (pytania otwarte E1 nr 12 bez zmian).
5. **C2-D5 Próżnia razem z zastrzeżeniem.** NCHFP: „Vacuum packaging is also a good option”, MSU: „NOT a food preservation method by itself”. Zdania tylko w parze (SUS-025).
6. **C2-D6 Bez serotypu „O157:H7” i z „%” w en** do czasu C2-06/C2-07 (kontrola przekładu nie porówna tych zapisów).
7. **C2-D7 Jerky jako osobny blok M na końcu.** Podgrzanie do 160 °F obowiązkowe jako ostrzeżenie, choć NCHFP pisze „If you choose to heat the meat”. Bez mięsa mielonego. Start po C2-04 i C2-05. Powód: wariant ostrożniejszy przy mięsie.
8. **C2-D8 Partie S1–S9, M w kolejności z sekcji 5,** po ok. 8 wariantów; S7 i S8 po odzyskaniu dostępu do Clemson albo po znalezieniu innego źródła szczebla 1–3 dla chipsów i proszków. Odrzucone: kolejność według produktów (mieszałaby wzory owoców i warzyw w jednej partii).
9. **C2-D9 Kroki dla produktów z CSU i MSU (szczebel 3)** jako źródła wskazane przez NCHFP. Każde twierdzenie produktowe z jednym takim źródłem dostaje znak „jedno źródło” w rejestrze.

## 7. Otwarte pytania

- [DO USTALENIA] USDA FSIS „Jerky and Food Safety” dziś niedostępne („Access Denied”). Karta jerky stoi na NCHFP (szczebel 1, D-013 wystarcza). FSIS sprawdzić przy bloku M.
- [DO USTALENIA] Clemson HGIC dziś blokuje pobieranie (Cloudflare). SUS-039 i SUS-040 bez ponownego odczytu; szukać źródła chipsów i proszków w CSU, MSU albo PNW 397.
- Bez zmian: pytania otwarte E1 suszenia nr 1, 2, 5, 6, 9, 12, 13 w `pytania-otwarte.md`.
