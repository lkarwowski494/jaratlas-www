# E1 suszenie: luki bez źródła i „not recommended” (tor C7, 2026-11-02)

- Rola 06-tresci, build, tryb bez właściciela (decyzja dnia `2026-11-02-jaratlas-tryb-decyzji-dzien`). Gałąź `claude/jaratlas-c7-suszenie-luki` od `claude/happy-brown-yncplj` = 80b7fc8. Zakres: tylko ten plik i `E1-suszenie-luki-2026-11-02.json`. Rejestr, karty i katalog bez zmian; wkleja tor A.
- Wejście: `E1-suszenie-twierdzenia-2026-11-02.md` (B4), sekcje 4–7: luki „bez źródła” i uwagi MSU „Not recommended”.
- Format jak B4: pola rejestru plus `twierdzenie_en`, `luka`, `partie`, `warianty`, `uwaga`, `jednoZrodlo`; `status: robocze`, `przeglad: null`. Cytaty: „ | ” fragmenty kolejno, „ … ” przerwa (B4-D7).
- ID tylko z zakresu SUS-180–199 (użyte: SUS-180–184).

## 1. Wynik

Nowe twierdzenia: 5 (SUS-180–SUS-184), krytycznych 3, wszystkie szczebla 3, jedno źródło. Uzupełnienia źródeł: SUS-110 (brokuł), SUS-115 (dynia). Luki bez źródła szczebla 1–3 po researchu: 5 z 10 (rokitnik, aronia, topinambur, maliny w całości, słodzenie żurawiny sokiem jabłkowym); dla kostki i całych strąków źródła opisują inny kształt, więc wariant się zmienia.

Źródła szczebla 1 (NCHFP, USDA, FDA, EFSA, instytucje polskie i unijne): dla żadnej z luk nie znalazłem procedury szczebla 1. NCHFP „Drying Fruits and Vegetables” odsyła do CSU i MSU; materiał NCHFP/UGA „Put It Up! Method 5” (pobrany) nie podaje procedur dla tych luk (truskawki tylko w skórze owocowej).

Kontrole (dowód):
- cytaty: 8 cytatów (17 ciągłych fragmentów) dosłownie w tekście z curl/pdftotext; normalizacja NFKC, spacji i cudzysłowów; 0 braków.
- mutacja: zmiana „9 hours” na „8 hours” w cytacie SUS-181 wykryta (kod 1).
- przeklad: tools/i18n/niezmienniki.mjs porownaj(en, pl) i uwagi: 0 różnic w 5 parach.
- kolizje_id: git grep SUS-18x/19x na 14 gałęziach origin: 0 trafień.
- Skrypty: `verify.py` (cytaty) i wywołanie `porownaj` w notatkach sesji; nie wchodzą do repo (zakres: tylko dwa pliki).

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Klucz | HTTP | sha12 | Adres |
|---|---|---|---|
| psu-straw | 200 | 734c833760ba | https://extension.psu.edu/drying-strawberries |
| pnw651 | 200 | fe98b5692f65 | https://objects.lib.uidaho.edu/uiext/uiext32185.pdf |
| msu-fruit | 200 | e01e6dc597fd | https://extension-store.montana.edu/montguides/drying-fruits |
| ps-squash-winter | 200 | d20c62592cda | https://apps.chhs.colostate.edu/preservesmart/produce/drying/squash-winter |
| ps-broccoli | 200 | ef53f1df4bd6 | https://apps.chhs.colostate.edu/preservesmart/produce/drying/broccoli |
| ps-potatoes | 200 | 1ee65e64ba65 | https://apps.chhs.colostate.edu/preservesmart/produce/drying/potatoes |
| ps-berries | 200 | d203bf948492 | https://apps.chhs.colostate.edu/preservesmart/produce/drying/berries |
| ne-aronia | 200 | f4be016321ff | https://www.education.ne.gov/wp-content/uploads/2022/11/Aronia-Berries-2.pdf |
| psu-dfv | 200 | ff5144006bb6 | https://extension.psu.edu/lets-preserve-drying-fruits-and-vegetables-dehydration |
| csu-veg | 200 | 1e97ff079a64 | https://extension.colostate.edu/resource/drying-vegetables/ |
| csu-fruit | 200 | 99cc1ffd7735 | https://extension.colostate.edu/resource/drying-fruits/ |
| msu-veg | 200 | 16ad5ac3606e | https://extension-store.montana.edu/montguides/drying-vegetables |
| nchfp-dfv | 200 | 0b6efafe2863 | https://nchfp.uga.edu/how/dry/drying-general/drying-fruits-and-vegetables/ |
| umn-dry | 200 | 72ad57367d4a | https://extension.umn.edu/preserving-and-preparing/drying-strawberries (przekierowanie na drying-food) |
| uga-put-it-up | 200 | 0566086bebb5 | https://newt.fcs.uga.edu/nchfp/putitup/Method%205%20-%20Drying%202015rev.pdf |
| clemson-veg | 403 | — | https://hgic.clemson.edu/factsheet/drying-vegetables/ |
| clemson-fruit | 403 | — | https://hgic.clemson.edu/factsheet/drying-fruits/ |
| ps-pumpkin, ps-green-beans | 404 | — | https://apps.chhs.colostate.edu/preservesmart/produce/drying/{pumpkin,green-beans} |

Szczeble: Penn State, PNW 651 (Univ. of Idaho, Oregon State, Washington State), MSU, CSU (fact sheet i Preserve Smart) to 3 (extension, jak w rejestrze); Nebraska Department of Education (karta szkolna) to 4. Clemson HGIC dziś zwraca 403 (w B4 odpowiadał). Wyniki WebSearch (publikacje badawcze o rokitniku, aronii, topinamburze) nie zostały otwarte i nie są źródłem.

## 3. Twierdzenia (propozycje)

**SUS-180** (krytyczne; jedno źródło; C7: strawberry-v16 plastry)

- pl: Truskawki można przekroić wzdłuż na połówki albo pokroić w plastry grubości ok. ¼ cala (6 mm); układa się je skórką w dół i w połowie suszenia przewraca, żeby nie przywierały; plastry schną szybciej.
- en: Strawberries may be cut in half lengthwise or sliced about ¼ inch (6 mm) thick; place them skin side down and turn them halfway through drying to prevent sticking; slices dry faster.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 734c833760ba): https://extension.psu.edu/drying-strawberries, Penn State Extension, Drying Strawberries (M. Zepp; updated 2026-03-02; źródła: So Easy to Preserve 6th ed., UMN, Penn State Let's Preserve); Drying Procedure, Drying Time; Drying Procedure. Cytat: „Berries may be cut in half lengthwise or sliced about ¼ inch (6 mm) thick. | Dry skin side down to prevent sticking to the drying racks. | Sliced berries will dry faster but the cut side may stick to the rack. | Turning the berries over halfway through drying helps to prevent sticking.”
- warianty: strawberry-v16
- uwaga: Zamyka lukę B4 „plastry bez źródła”. Zanurzenie w roztworze kwasu askorbinowego (SUS-094, CSU) zostaje także dla plastrów. Temperatura z SUS-001 (140°F, 60°C): Penn State pisze „130°F to 140°F” i „140°F (54°C)”, przeliczenie 54°C jest błędem strony, nie używać.

**SUS-181** (krytyczne; jedno źródło; C7: strawberry-v16 plastry)

- pl: Suszenie truskawek trwa od ok. 9 godzin (małe plastry) do 36 godzin (całe owoce); suche truskawki są giętkie i skórzaste, bez kropli wilgoci po ściśnięciu w palcach.
- en: Drying strawberries takes from about 9 hours (small slices) to 36 hours (whole berries); dry strawberries are pliable and leathery, with no beads of moisture when pressed between the fingers.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 734c833760ba): https://extension.psu.edu/drying-strawberries, Penn State Extension, Drying Strawberries (M. Zepp; updated 2026-03-02; źródła: So Easy to Preserve 6th ed., UMN, Penn State Let's Preserve); Drying Procedure, Drying Time; Drying Time. Cytat: „Berries may take anywhere from 9 hours for small slices to 36 hours for whole berries. | When sufficiently dry, strawberries should be pliable and leathery with no beads of moisture when pressed between your fingers.”
- warianty: strawberry-v16
- uwaga: Test suchości zgodny kierunkowo z CSU (SUS-094/SUS-062: studzenie przed testem).

**SUS-182** (krytyczne; jedno źródło; C7: green-beans-v13 strąki)

- pl: Fasolka szparagowa w strąkach: odrzucić wadliwe strąki, w razie potrzeby usunąć nitki i przekroić strąki wzdłuż, żeby przyspieszyć suszenie; suszyć 8–14 godzin, do stanu łamliwego.
- en: Green beans in pods: discard defective pods, remove strings if necessary and split the pods lengthwise to hasten drying; dry 8–14 hours, until brittle.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 fe98b5692f65): https://objects.lib.uidaho.edu/uiext/uiext32185.pdf, Pacific Northwest Extension PNW 651, Drying Project Manual (Univ. of Idaho, Oregon State, Washington State; 4-H Home Food Preservation Series; 2013); tabela Preparing vegetables for drying, wiersz Green beans (komórki rozdzielone |). Cytat: „Remove defective pods. Remove strings if necessary. split pods lengthwise to hasten drying. … Brittle (8–14 hours)”
- warianty: green-beans-v13
- uwaga: Blanszowanie według SUS-111 (CSU, 4 min); PNW podaje 2–3 min w wodzie lub 3–4 min w parze: krótsze, nieprzyjęte (B4-D2, wariant ostrożniejszy). Całe, nieprzekrojone strąki i suszenie na nitce na powietrzu („leather britches”): bez źródła szczebla 1–3; NCHFP każe suszyć warzywa w pomieszczeniu (SUS-001, Sun Drying).

**SUS-183** (niekrytyczne; jedno źródło; C7: cranberry-lingonberry-v13 sok jabłkowy)

- pl: Owoce można przed suszeniem zanurzyć na 3–5 minut w soku bogatym w witaminę C (np. pomarańczowym, cytrynowym, ananasowym, winogronowym, jabłkowym wzbogaconym witaminą C lub żurawinowym), potem dobrze odsączyć; działa to słabiej niż czysty kwas askorbinowy.
- en: Before drying, fruit can be soaked for 3–5 minutes in a juice high in vitamin C (e.g. orange, lemon, pineapple, grape, vitamin C–fortified apple or cranberry juice), then drained well; this is less effective than pure ascorbic acid.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 e01e6dc597fd): https://extension-store.montana.edu/montguides/drying-fruits, Montana State Univ. Extension, MontGuide MT200909HR Drying Fruits (rev. 05.2017; recenzja: E. Andress, NCHFP); Pretreatments, Fruit juice dip. Cytat: „A fruit juice that is high in vitamin C can also be used as a pretreatment, though it is not as effective as pure ascorbic acid. | Juices high in vitamin C include orange, lemon, pineapple, grape, fortified apple and cranberry. … Soak 3 to 5 minutes, remove fruit, drain well and place on dryer trays.”
- warianty: cranberry-lingonberry-v13
- uproszczenie: Zastosowanie do żurawiny po pęknięciu skórki: MSU opisuje zanurzenie dla owoców ogólnie (uproszczenie).
- uwaga: Tylko dla opcji B w C7-D7. To obróbka wstępna (kolor, smak), nie słodzenie i nie zamiennik pękania skórki (SUS-104). Użycie dla żurawiny to uproszczenie: MSU opisuje zanurzenie ogólnie dla owoców krojonych.

**SUS-184** (niekrytyczne; jedno źródło; C7: MSU not recommended, maliny/jeżyny)

- pl: Według przewodnika PNW jeżyny, kantalupa, pomarańcze, arbuz i rabarbar suszą się gorzej niż inne owoce (powód jakościowy).
- en: According to the PNW guide, blackberries, cantaloupe, oranges, watermelon and rhubarb do not dry as well as other fruits (a quality reason).
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 fe98b5692f65): https://objects.lib.uidaho.edu/uiext/uiext32185.pdf, Pacific Northwest Extension PNW 651, Drying Project Manual (Univ. of Idaho, Oregon State, Washington State; 4-H Home Food Preservation Series; 2013); Fruits suitable for drying (lista owoców). Cytat: „Fruits such as blackberries, cantaloupe, oranges, watermelon, and rhubarb do not dry as well.”
- warianty: raspberry-blackberry-v15, watermelon-melon-v10
- uwaga: Drugie źródło szczebla 3 kierunkowo zgodne z SUS-122 (MSU). PNW nie wymienia malin.

## 4. Uzupełnienia istniejących propozycji B4

**SUS-110** (C7: MSU not recommended, brokuł; brzmienie bez zmian)

- dopisać źródło (szczebel 3, 2026-11-02, sha12 fe98b5692f65): https://objects.lib.uidaho.edu/uiext/uiext32185.pdf, Pacific Northwest Extension PNW 651, Drying Project Manual (Univ. of Idaho, Oregon State, Washington State; 4-H Home Food Preservation Series; 2013); tabela Preparing vegetables for drying, wiersz Broccoli (komórki rozdzielone |). Cytat: „trim and cut as for serving. Quarter stalks lengthwise. … Crisp (12–15 hours)”
- uwaga: Drugie źródło szczebla 3 dla przygotowania i czasu (12–15 h). Blanszowanie: PNW 2–3 min w wodzie, 3–5 min w parze; CSU Preserve Smart 2–3 min (poniżej 5000 ft); zostaje 4 min CSU Table 2 (B4-D2, ostrożniej). Niezależności PNW od CSU nie da się wykazać (obie tabele mogą pochodzić z tego samego starszego materiału USDA), więc jednoZrodlo zostaje true.

**SUS-115** (C7: MSU not recommended, dynia zimowa; brzmienie bez zmian)

- dopisać źródło (szczebel 3, 2026-11-02, sha12 fe98b5692f65): https://objects.lib.uidaho.edu/uiext/uiext32185.pdf, Pacific Northwest Extension PNW 651, Drying Project Manual (Univ. of Idaho, Oregon State, Washington State; 4-H Home Food Preservation Series; 2013); tabela Preparing vegetables for drying, wiersz Squash (Hubbard or winter types) (komórki rozdzielone |). Cytat: „Squash (Hubbard or winter types) Chop into strips about 1 inch wide. peel off rind; scrape off fiber and seeds. … tough to brittle (10–16 hours)”
- dopisać źródło (szczebel 3, 2026-11-02, sha12 d20c62592cda): https://apps.chhs.colostate.edu/preservesmart/produce/drying/squash-winter, Colorado State Univ. Extension, Preserve Smart, Drying Winter Squash; kroki 4. Dry. Cytat: „Dried squash should be tough to brittle. Total Drying Time: 10-16 hours in a dehydrator (may take up to twice as long in a conventional oven)”
- uwaga: PNW i CSU Preserve Smart podają procedurę i czas 10–16 h; MSU sam podaje procedurę dla „Pumpkin and hubbard squash”, a w tabeli przydatności ocenia dynie „Fair to good”, „Squash, winter” „Not recommended” (jakość). Blanszowanie: PNW do miękkości (1 min w wodzie), Preserve Smart 1–2 min; zostaje 4 min CSU Table 2 (B4-D2). Cytat PNW po normalizacji NFKC (ligatura „ﬀ” w PDF). jednoZrodlo zostaje true (CSU Preserve Smart i CSU Table 2 to jedna instytucja).

## 5. Luki: wynik researchu

| Wariant | Co | Wynik | Zalecenie |
|---|---|---|---|
| chokeberry-seabuckthorn-v12 | rokitnik | brak źródła szczebla 1–3 z procedurą domowego suszenia. Sprawdzone: NCHFP, CSU (fact sheet i Preserve Smart), MSU, Penn State, PNW 651, UMN; wyszukiwanie: extension (NDSU, Alaska, Saskatchewan, Alberta), polskie instytucje (ODR, Instytut Ogrodnictwa), EFSA. Są publikacje badawcze o kinetyce suszenia przemysłowego (wyniki wyszukiwania, nie otwarte; szczebel 2, ale nie opisują bezpieczeństwa suszenia domowego). | do-researchu, wariant ukryty |
| chokeberry-seabuckthorn-v11 | aronia na herbatę | jedyne znalezione: Nebraska Department of Education, Harvest of the Month „Aronia Berries” (karta szkolna, aktywność dla dzieci, bez źródeł dla suszenia): „Dry the berries at 140-150℉ in an oven or food dehydrator for 6-16 hours.” Szczebel 4 bez podanych źródeł, bez obróbki wstępnej. Nie wystarcza dla twierdzenia krytycznego. Polskie wyniki: Instytut Ogrodnictwa o wytłokach (przemysł), nie owoce w domu. | do-researchu, wariant ukryty |
| cranberry-lingonberry-v13 | słodzenie sokiem jabłkowym | brak źródła dla słodzenia żurawiny sokiem jabłkowym. Są: pękanie skórki (SUS-104), zanurzenie w soku z witaminą C (SUS-183, MSU, ogólnie dla owoców), blanszowanie w syropie (Penn State i PNW, ale ze sprzecznymi przepisami: 1 szkl. cukru + 1 szkl. syropu kukurydzianego + 2 szkl. wody, 10 min i 30 min odstania; PNW 1:2 cukier:woda, 5 min). | zmiana wariantu (C7-D7) |
| green-beans-v13 | całe nieprzekrojone strąki | brak; PNW każe przekroić strąki wzdłuż (SUS-182), CSU kroić na kawałki lub paski (SUS-111). | zmiana wariantu na strąki przekrojone wzdłuż (C7-D5) |
| potato-sunchoke-v12 | topinambur | brak w NCHFP, CSU, MSU, Penn State, PNW 651, UMN; wyniki wyszukiwania to badania suszenia przemysłowego i proszków (nie otwarte). | usunąć topinambur z wariantu; do-researchu |
| potato-sunchoke-v12 | kostka do zup | brak; CSU słupki 1/4″ lub plastry 1/8″ (SUS-117), MSU słupki ¼″ lub plastry ⅛″, PNW słupki 3/16″ lub plastry ¼″. Kostka jest grubsza niż każdy wymiar źródeł. | zmiana wariantu na słupki (C7-D6) |
| raspberry-blackberry-v15 | maliny i jeżyny suszone w całości; liście | brak procedury gatunkowej; MSU (SUS-122) i PNW (SUS-184) odradzają suszenie (jakość), MSU ocenia skórę owocową „Excellent”. Liście malin: tylko ogólne NCHFP Herbs. | do-researchu teraz; po S7 zmiana na skórę owocową (C7-D9) |

## 6. Wariant → zalecenie dla toru A

| Wariant | Nazwa obecna | Zalecenie | Co zrobić | Decyzja |
|---|---|---|---|---|
| strawberry-v16 | suszone plastry | zostaje | dopisać SUS-180, SUS-181 (Penn State); SUS-094 (zanurzenie) i SUS-001 (140°F) bez zmian | C7-D4 |
| green-beans-v13 | suszona w strąkach | zmiana wariantu | nazwa np. „suszona w strąkach przekrojonych wzdłuż”; SUS-182 + SUS-111 (blanszowanie 4 min) | C7-D5 |
| potato-sunchoke-v12 | suszona kostka ziemniaczana do zup | zmiana wariantu | „suszone słupki ziemniaczane do zup”, SUS-117; topinambur usunąć (do-researchu) | C7-D6 |
| cranberry-lingonberry-v13 | żurawina suszona słodzona sokiem jabłkowym | zmiana wariantu | opcja A (zalecana): „żurawina suszona”, SUS-104; opcja B: + zanurzenie w soku jabłkowym wzbogaconym witaminą C, SUS-183 (uproszczenie) | C7-D7 |
| chokeberry-seabuckthorn-v11 | suszona aronia na herbatę | do-researchu | ukryty; nie wchodzi do kart | C7-D3 |
| chokeberry-seabuckthorn-v12 | suszony rokitnik | do-researchu | ukryty; nie wchodzi do kart | C7-D2 |
| broccoli-v10 | suszone różyczki brokuła | zostaje | SUS-110 + źródło PNW; uwaga jakościowa SUS-121 (MSU) w karcie lub w opisie, decyzja 04 | C7-D8 |
| pumpkin-v15 | suszony miąższ | zostaje | SUS-115 + źródła PNW i CSU Preserve Smart; uwaga jakościowa SUS-121 | C7-D8 |
| raspberry-blackberry-v15 | suszone maliny i liście | do-researchu | teraz ukryty; po S7 (skóry owocowe NCHFP) zmiana na „skóra owocowa z malin”; liście osobno | C7-D9 |

Status „do-researchu” oznacza: wariant ukryty, nie wchodzi do kart, wraca, gdy znajdzie się źródło szczebla 1–3. Nazwy wariantów to propozycje treści; brzmienie w interfejsie należy do roli 04.

## 7. Decyzje do weta

Tablica: `2026-11-02-jaratlas-06-c7-suszenie-luki`. Repo trening (klon `--depth 1`, 2e4b0f8): pełna analogia tylko dla C7-D2; reszta to decyzje Claude, do weta. Przy bezpieczeństwie żywności wybrany wariant ostrożniejszy.

- **C7-D1** (proceduralna) Numeracja SUS-180–SUS-184 z zakresu zarezerwowanego SUS-180–199 (SUS-123–179 ma tor B7). Sprawdzone git grep na wszystkich gałęziach origin: 0 trafień SUS-18x/19x.
- **C7-D2** (analogia) Bez źródła szczebla 1–3 wariant nie wchodzi do kart i dostaje status do-researchu (rokitnik, aronia, topinambur, maliny w całości). Pełna analogia: trening CLAUDE.md:121 („Czego nie da się potwierdzić, trafia do otwartych pytań, nie do aplikacji.”) i docs/research/30-cel-ogolny.md:169.
- **C7-D3** (do weta) Aronia: karta szkolna Nebraska Department of Education (szczebel 4, bez źródeł) nie potwierdza twierdzenia krytycznego; wariant do-researchu. Odrzucone: twierdzenie z atrybucją szczebla 4; uproszczenie „aronia jak owoce z woskowym nalotem” (SUS-104), bo żadne źródło nie zalicza aronii do tej grupy.
- **C7-D4** (do weta) strawberry-v16 zostaje: plastry ok. ¼ cala (6 mm) według Penn State (SUS-180, SUS-181); zanurzenie z SUS-094 i 140°F z SUS-001 bez zmian; przeliczenie „140°F (54°C)” ze strony Penn State nie jest używane (błąd źródła). Odrzucone: zmiana na połówki (niepotrzebna, plastry mają źródło).
- **C7-D5** (do weta) green-beans-v13: zmiana na strąki przekrojone wzdłuż (PNW, SUS-182), blanszowanie 4 min (SUS-111). Odrzucone: całe strąki i suszenie na nitce na powietrzu (bez źródła; NCHFP: warzywa suszyć w pomieszczeniu); kawałki (zmienia wariant bardziej niż trzeba).
- **C7-D6** (do weta) potato-sunchoke-v12: zmiana na słupki ziemniaczane do zup (SUS-117), topinambur usunięty z wariantu. Powód: kostka jest grubsza niż wymiary źródeł, a wolniej schnący środek to ryzyko bezpieczeństwa przy warzywach; wariant ostrożniejszy. Odrzucone: kostka z wydłużonym czasem (bez źródła).
- **C7-D7** (do weta) cranberry-lingonberry-v13: opcja A (zalecana) „żurawina suszona” z pękaniem skórki (SUS-104), bez słodzenia. Opcja B: dodatkowo zanurzenie 3–5 min w soku jabłkowym wzbogaconym witaminą C (SUS-183, uproszczenie). Odrzucone: blanszowanie w syropie (Penn State i PNW mają sprzeczne przepisy, a części wspólnej nie da się podać); słodzenie sokiem bez źródła.
- **C7-D8** (do weta) broccoli-v10 i pumpkin-v15 zostają. MSU „Not recommended” to ocena jakości; procedury mają CSU, PNW (oba) i CSU Preserve Smart (dynia). Blanszowanie 4 min z CSU Table 2 zostaje, choć PNW i Preserve Smart podają krócej (B4-D2, ostrożniej). Odrzucone: ukrycie wariantów (powód nie dotyczy bezpieczeństwa).
- **C7-D9** (do weta) raspberry-blackberry-v15: do-researchu teraz; po wpisaniu skór owocowych (S7, NCHFP Fruit Leathers, szczebel 1) zmiana na skórę owocową z malin (MSU „Excellent”). Liście malin osobno, tylko ogólne NCHFP Herbs. Odrzucone: suszenie malin w całości (brak procedury, dwa źródła szczebla 3 odradzają).
- **C7-D10** (znalezisko) Znalezisko: CSU Preserve Smart podaje krótsze blanszowanie niż CSU Table 2 (brokuł 2–3 min wobec 4, dynia 1–2 wobec 4, ziemniaki 5–6 wobec 7). Bez zmian w twierdzeniach: zostają dłuższe czasy (B4-D2). Do toru A: nie mieszać tych dwóch źródeł w jednej karcie.

## 8. Dla toru A (kolejność)

1. Wkleić SUS-180–184 z JSON do `rejestr.json`; dopisać źródła do SUS-110 i SUS-115 (sekcja 4).
2. Przegląd zastępczy D-027 dla SUS-180–182 (krytyczne) przed użyciem w kartach.
3. Warianty według tabeli w sekcji 6: zmiany nazw (green-beans-v13, potato-sunchoke-v12, cranberry-lingonberry-v13) i ukrycie (chokeberry-seabuckthorn-v11, -v12, raspberry-blackberry-v15).
4. Nie łączyć w jednej karcie czasów blanszowania z CSU Preserve Smart i CSU Table 2 (C7-D10).
