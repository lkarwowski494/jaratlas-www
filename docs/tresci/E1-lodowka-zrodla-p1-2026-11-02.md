# E1 lodówka: źródła dla wariantów lodówkowych, partia 1 (tor B9, 2026-11-02)

- Rola 06-tresci, build, tryb dzienny bez właściciela (decyzja `2026-11-02-jaratlas-tryb-decyzji-dzien`). Gałąź `claude/jaratlas-b9-lodowka-zrodla` od `claude/happy-brown-yncplj` = 8c70388. Zakres: tylko ten plik i `E1-lodowka-zrodla-p1-2026-11-02.json`. Katalog, karty, rejestry i pliki stanu bez zmian; statusy zmienia tor A w partii katalogowej (D-043).
- Wejście: `catalog/catalog-seed.json` (107 wariantów `refrigerator` + `do-researchu` w rodzinach vinegar-pickling: 53 i sweet-preserves: 54), `docs/tresci/rejestr.json` (istniejące twierdzenia lodówkowe użyte zamiast duplikatów: ACI-005, 018, 022–024, 035, 211, SLO-019, 020, 023, 036, 037, 044, 062, 068, OLE-002, MIE-059, NAP-055).
- Format JSON: pola rejestru plus `twierdzenie_en`, `klaster`, `jednoZrodlo`, `warianty`, `uwaga`; `status: robocze`, `przeglad: null` (przegląd zastępczy D-027 po wklejeniu robi tor A). Twierdzenia innych rejestrów: `id: null`, `klucz_tymczasowy`, `rejestr_docelowy`, „ID do nadania przez koordynatora”.
- Cytaty: fragmenty rozdzielone „ | ” stoją w tekście kolejno, „ … ” to przerwa (B4-D7). Research porcjami: 3 subagenty (pikle octowe; produkty niskokwasowe, miód, syropy; dżemy lodówkowe), cytaty sprawdzone ponownie przeze mnie (sekcja 1).

## 1. Wynik

Warianty w partii: 40. Proponowany status: ok-zrodlo 8, zostaje do-researchu 21, ryzyko-wysokie 11, nie-publikowac 0.

Nowe twierdzenia: 26 w ACI (ACI-500–ACI-525) i 15 do innych rejestrów bez numeru (SLO 14, NAP 1). Krytycznych: 38 z 41.

Kontrole (dowód):
- 62 cytaty (41 twierdzeń) dosłownie w tekście stron pobranych dziś curl (skrypt: tekst z HTML albo pdftotext, normalizacja spacji, cudzysłowów i myślników; każdy ciągły fragment osobno): 0 braków. Wyjątek nazwany: WSU FSM 288 przy ponownym pobraniu HTTP 403, sprawdzony na pliku z pobrania subagenta B tego dnia (B9-D11).
- Zmiana „5 percent” na „6 percent” w cytacie ACI-500 daje 1 błąd i kod 1.
- tools/i18n/niezmienniki.mjs porownaj(en, pl) na 41 parach: 0 różnic (po przeniesieniu numeru CPG 525.825 z treści do pola miejsce).
- docs/tresci/rejestr.json: ACI kończy się na ACI-325; git grep ACI-5[0-9][0-9] na 17 gałęziach origin: 0 trafień.
- Odwołania do istniejących twierdzeń (20 ID) sprawdzone w docs/tresci/rejestr.json: wszystkie istnieją, status potwierdzone.

Najważniejsze dla bezpieczeństwa:
- Brak polskiego ani unijnego źródła urzędowego z czasem przechowywania pikli lub dżemów lodówkowych. PSSE Szczecinek podaje ok. 10°C w drzwiach lodówki (tam poleca słoiki z przetworami) i poniżej 5°C na środkowej półce; przepisy USA zakładają 40°F (4,4°C) lub niżej. Stąd ostrożna reguła ACI-523 (środkowa półka).
- Limity dni w przeczytanych przepisach lodówkowych: 4 dni (UNL), ok. tydzień (Mississippi State), 2 tygodnie (B2267, NC State/UC MFP, reguła dla nieprzetestowanych), 1 miesiąc (ogólnie B2267), 3 miesiące (OSU, odrzucone), 4 miesiące (czosnek w occie UC ANR, jakość). Na przeczytanych dziś stronach NCHFP nie ma limitu dni dla pikli lodówkowych (stare adresy FAQ: 404), więc limity mają szczebel 3.
- Marynaty bez octu (sos sojowy, sam sok cytrusowy) i warzywa w cukrze lub miodzie nie mają źródła ani limitu; tam status ryzyko-wysokie albo zostaje do-researchu, nigdy ok-zrodlo.

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Adres | HTTP | bajty | sha12 | uwaga |
|---|---|---|---|---|
| https://door.extension.wisc.edu/files/2010/10/B2267-Homemade-Pickles-Relishes.pdf | 200 | 828083 | 825261722dc2 |  |
| https://www.ndsu.edu/agriculture/extension/publications/food-preservation-making-pickled-products | 200 | 107176 | 0f706b9a027d |  |
| https://ccfruitandnuts.ucanr.edu/sites/default/files/2018-07/287722.pdf | 200 | 62630 | 813ba68800a1 |  |
| https://foodsafety.ces.ncsu.edu/news/how-to-make-quick-refrigerator-pickles/ | 200 | 71023 | a301a5eaa241 |  |
| https://ccfruitandnuts.ucanr.edu/sites/default/files/2025-07/MFP%20Quick%20Refrigerator%20Pickles.pdf | 200 | 740369 | 276cacc014c5 |  |
| https://oconto.extension.wisc.edu/files/2017/04/Time-to-Make-Pickles-2.pdf | 200 | 589181 | fe88c89b9233 |  |
| https://www.ndsu.edu/agriculture/sites/default/files/2023-08/fn2102.pdf | 200 | 443905 | 9346581f172a |  |
| https://happyhealthy.extension.msstate.edu/recipes/quick-pickle-cucumbers-and-onions | 200 | 20841 | 6332a207e223 |  |
| https://food.unl.edu/recipe/quick-pickled-daikon-radish-and-carrots/ | 200 | 143122 | b16b08255db9 |  |
| https://ucanr.edu/sites/default/files/2023-09/388534.pdf | 200 | 523361 | 8679aec48f7a |  |
| https://ccfruitandnuts.ucanr.edu/sites/default/files/2023-08/387906.pdf | 200 | 383769 | 02e38bf401db |  |
| https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-horseradish-sauce/ | 200 | 74455 | b7a249a2f04b |  |
| https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cpg-sec-525825-vinegar-definitions-adulteration-vinegar-eels | 200 | 39448 | 71452b268553 |  |
| https://news.vt.edu/articles/2023/07/low_acidity_vinegar_warning_expert.html | 200 | 122394 | cd318f907439 |  |
| https://ucanr.edu/site/uc-master-food-preservers-central-sierra/article/central-sierra-about-vinegar-read-label-edc | 200 | 68817 | b20c5efe19ee |  |
| https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/pickling | 200 | 109323 | f3734150f6a3 |  |
| https://extension.oregonstate.edu/ask-extension/featured/can-i-use-fresh-lemon/lime-juice-salsa | 200 | 93894 | ca226460c1e1 |  |
| https://extension.colostate.edu/resource/making-pickles/ | 200 | 148682 | 7f6cc85cbd7f |  |
| https://www.gov.pl/web/psse-szczecinek/przechowywanie-zywnosci-w-lodowce | 200 | 22953 | d1a80ab9e163 |  |
| https://ask.extension.org/kb/faq.php?id=596012 | 200 | 73256 | ce2a79bc3823 |  |
| https://www.cdc.gov/botulism/prevention/index.html | 200 | 63328 | 232e4422a63b |  |
| https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jam-uncooked/ | 200 | 81237 | 2ac94b15adf0 |  |
| https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/ | 200 | 84227 | 1de99ec9e98e |  |
| https://nchfp.uga.edu/how/make-jam-jelly/reduced-sugar-recipes/refrigerator-jelly-with-splenda/ | 200 | 81360 | 8c1cf462c5cb |  |
| https://nchfp.uga.edu/how/freeze/fruits/freezing-strawberries/ | 200 | 78546 | 1b2930bb603d |  |
| https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf | 200 | 1276247 | 257458d1bb16 |  |
| https://ncez.pzh.gov.pl/dzieci-i-mlodziez/rozszerzanie-diety-niemowlat-co-warto-o-nim-wiedziec/ | 200 | 299756 | a26d33f580a5 |  |
| https://extension.oregonstate.edu/catalog/em-9446-play-it-safe-when-preserving-elderberries | 200 | 83992 | cd102f2ef770 |  |
| https://extension.psu.edu/elderberry-in-the-garden-and-the-kitchen | 200 | 390477 | df6ed9f4aa92 |  |
| https://extension.oregonstate.edu/ask-extension/featured/jelly-made-dandelion-or-grape-hyacinth-tea-considered-safe | 200 | 97907 | a8e5dc7ebb2d |  |
| https://oc4h.ucanr.edu/sites/default/files/2021-11/360435.pdf | 200 | 121582 | dfa1e4c93a64 |  |
| https://news.cahnrs.wsu.edu/podcasts/fsm-288-storing-opened-soy-sauce-refrigerator-of-pantry/ | 200 | 68334 | ef6f0fb9e6e4 | ponowne pobranie w kontroli: HTTP 403; tekst z pobrania subagenta B tego dnia (HTTP 200, plik lokalny), B9-D11 |

## 3. Wariant → status, twierdzenia, uwagi

| Wariant | Nazwa | Rodzina | Status proponowany | Twierdzenia | Uwagi dla partii katalogowej |
|---|---|---|---|---|---|
| cucumber-v17 | szwedzkie pressgurka | vinegar-pickling | ok-zrodlo | ACI-503, ACI-504, ACI-510, ACI-501, ACI-509, ACI-523 | Karta według jednego przepisu: B2267 (ocet 5% nierozcieńczony, 2 tygodnie) albo Mississippi State (1:1, ok. 1 tydzień); limit z tego przepisu, którego proporcje podaje (B9-D3). Szwedzka ättika 12% rozcieńczana wodą nie ma źródła: karta jej nie podaje. |
| european-mixed-veg-v05 | sałatka z ogórków, papryki i cebuli | vinegar-pickling | ok-zrodlo | ACI-503, ACI-504, ACI-501, ACI-523 | B2267 wprost dopuszcza ogórki z cebulą albo papryką, kalafiorem, marchwią; 2 tygodnie, 40°F lub niżej. |
| european-mixed-veg-v03 | polska sałatka szwedzka | vinegar-pickling | ok-zrodlo | ACI-503, ACI-504, ACI-501, ACI-523 | Tylko wersja lodówkowa według B2267 (ogórki, cebula, papryka, marchew). Polska sałatka szwedzka pasteryzowana w słoikach to wekowanie bez przetestowanego przepisu: osobny wariant, nie ten status. |
| shallot-pearl-onion-v01 | szybka czerwona cebula w occie (quick pickled) | vinegar-pickling | ok-zrodlo | ACI-507, ACI-501, ACI-509, ACI-523 | UC MFP Pickled Onions: 1:1 ocet 5% biały/jabłkowy, 2 tygodnie. Nie ocet ryżowy ani winny (ACI-509). |
| radish-v03 | w occie jabłkowym z pieprzem | vinegar-pickling | ok-zrodlo | ACI-505, ACI-506, ACI-501, ACI-509, ACI-523 | NC State/UC MFP: rzodkiewki wymienione wprost, ocet jabłkowy dozwolony, pieprz z listy przypraw; 2 tygodnie. Przepis UC „Refrigerated Sweet Pickled Radish” z limitem 4 miesięcy (Ball) odrzucony (B9-D5). |
| radish-v05 | meksykańskie pikle z rzodkiewki i oregano | vinegar-pickling | ok-zrodlo | ACI-505, ACI-506, ACI-501, ACI-509, ACI-523 | Jak radish-v03; oregano jest na liście świeżych przypraw NC State. Wersja z sokiem z limonki zamiast octu nie ma źródła (ACI-517, ACI-518). |
| daikon-black-radish-v03 | wietnamskie do-chua (daikon z marchewką w occie do banh mi) | vinegar-pickling | ok-zrodlo | ACI-511, ACI-501, ACI-509, ACI-523 | UNL: ocet jabłkowy 1:1, do 4 dni. Przepis WSU MFP z octem ryżowym 1:3 i 3 tygodniami odrzucony (słaby kwas, przepis szefa kuchni; B9-D5). Ocet z etykietą 5% (ACI-509). |
| garlic-v07 | chiński zielony czosnek laba | vinegar-pickling | ok-zrodlo | ACI-512, ACI-513, ACI-509, ACI-516, ACI-523 | Laba: obrany czosnek w nierozcieńczonym occie z etykietą 5% (UC ANR nie podaje kwasowości; JarAtlas wymaga 5%); ok. 4 miesiące (jakość). Tradycyjny ocet ryżowy ma często ok. 4% (ACI-515): karta wymaga 5%. |
| european-mixed-veg-v07 | brytyjskie mixed pickles | vinegar-pickling | zostaje do-researchu | ACI-509, ACI-516, ACI-502 | Brytyjskie mixed pickles robi się na occie słodowym; Wisconsin wyklucza octy winne, Penn State dopuszcza octy specjalne tylko w przepisie (ACI-211). Kandydat: wersja według B2267 z octem 5% białym, ale to zmiana tożsamości wariantu. |
| daikon-black-radish-v04 | daikon w occie ryżowym (pickled danmuji) | vinegar-pickling | zostaje do-researchu | ACI-515, ACI-516, ACI-509 | Ocet ryżowy: minimum handlowe 4% (FDA), w przetworach tylko 5%. Brak przepisu na danmuji. Etykieta ≥5% to warunek, nie źródło. |
| radish-v04 | w occie ryżowym z imbirem | vinegar-pickling | zostaje do-researchu | ACI-515, ACI-516, ACI-509 | Jak daikon-black-radish-v04 (ocet ryżowy, imbir). |
| napa-cabbage-v09 | pikle w occie ryżowym z sezamem | vinegar-pickling | zostaje do-researchu | ACI-515, ACI-516, ACI-509 | Ocet ryżowy z sezamem: brak przepisu; olej sezamowy to obszar OLE (sprawdzić ilość). |
| brussels-kohlrabi-v09 | kalarepa w occie ryżowym | vinegar-pickling | zostaje do-researchu | ACI-515, ACI-516, ACI-509, ACI-508 | Kalarepa nie jest na liście NC State ani B2267; brak przepisu. Reguła 2 tygodni dla przepisów nieprzetestowanych (ACI-508) nie daje ok-zrodlo (B9-D4). |
| turnip-rutabaga-v05 | japońska rzepa kabu w occie (senmaizuke) | vinegar-pickling | zostaje do-researchu | ACI-515, ACI-516, ACI-509 | Senmaizuke: ocet ryżowy i kombu, brak przepisu. |
| onion-v05 | cebula marynowana w cytrynie i sumaku | vinegar-pickling | zostaje do-researchu | ACI-517, ACI-518, ACI-509, ACI-005 | Sam sok z cytryny: źródła wskazują sok do owoców, chutneyów i pomidorów, nie do warzyw; Wisconsin: nie używać soku z cytryny w szybkich piklach. Brak przepisu. |
| shallot-pearl-onion-v02 | czerwona cebula kiszona z limonką | vinegar-pickling | zostaje do-researchu | ACI-517, ACI-518, ACI-509, ACI-005 | Cebula w limonce: jak onion-v05. Kandydat na kartę „na bieżąco” dopiero ze źródłem limitu. |
| shallot-pearl-onion-v03 | meksykańska cebula z habanero (xnipec) | vinegar-pickling | zostaje do-researchu | ACI-517, ACI-518, ACI-509, ACI-005 | Xnipec (cebula, habanero, sok z gorzkiej pomarańczy lub limonki): brak źródła; świeża salsa wymaga osobnego researchu. |
| horseradish-v02 | tarty na soku z cytryny | vinegar-pickling | zostaje do-researchu | ACI-517, ACI-509, ACI-035, ACI-514 | Sok z cytryny nie jest wskazanym kwasem dla warzyw. Alternatywa ze źródłem: sos chrzanowy NCHFP na occie 5% (ACI-035), ostrość 1–2 miesiące (ACI-514). |
| horseradish-v04 | ćwikła chrzanowa (70% chrzanu) | vinegar-pickling | zostaje do-researchu | ACI-035, ACI-514, ACI-005 | Ćwikła (burak z chrzanem): NCHFP, NDSU i Wisconsin mają tylko chrzan w occie; NCHFP Pickled Beets to przepis do wekowania. Brak przepisu lodówkowego. |
| carrot-v06 | po koreańsku (morkovcha) | vinegar-pickling | zostaje do-researchu | ACI-508, ACI-509, OLE-002 | Morkovcha: ocet, czosnek i gorący olej; czosnek w oleju to reguła 4 dni (OLE-002). Brak przepisu; rozważyć ryzyko-wysokie, jeśli przepis wariantu zawiera czosnek w oleju. |
| white-cabbage-v11 | po koreańsku z chili | vinegar-pickling | zostaje do-researchu | ACI-508, ACI-509 | Kapusta po koreańsku: brak przepisu szczebla 1–3. |
| cranberry-lingonberry-v05 | relish żurawinowo-chrzanowy | vinegar-pickling | zostaje do-researchu | ACI-141, ACI-113 | Surowy relish żurawina–chrzan: brak źródła; żurawina kwaśna, chrzan niskokwasowy, mieszanina bez pomiaru. |
| napa-cabbage-v11 | pak choi w sosie sojowym i occie chinkiang | vinegar-pickling | ryzyko-wysokie | SLO-023, ACI-005, MIE-059, NAP-055, K-NAP-1 | Sos sojowy nie zakwasza (chroni go sól, a w marynacie sól rozcieńcza woda z warzyw); pH sosu sojowego bez źródła szczebla 1–3; C. botulinum nieproteolityczny rośnie od 3,3°C. Ocet chinkiang o nieznanej kwasowości. Karta-ostrzeżenie (B9-D7). |
| daikon-black-radish-v07 | w sosie sojowym | vinegar-pickling | ryzyko-wysokie | SLO-023, ACI-005, ACI-111, MIE-059, K-NAP-1 | Jak napa-cabbage-v11 (rzodkiew pH 5,52–5,69). |
| wild-garlic-v06 | w sosie sojowym (koreańskie myongi-namul) | vinegar-pickling | ryzyko-wysokie | SLO-023, ACI-005, MIE-059, K-NAP-1 | Jak napa-cabbage-v11; liście czosnku niedźwiedziego w sosie bez kwasu. |
| cultivated-mushrooms-v05 | grzyby shiitake marynowane w sosie sojowym i mirinie | vinegar-pickling | ryzyko-wysokie | SLO-023, ACI-159, MIE-059, K-NAP-1 | Shiitake (pH 6,00–6,70) w sosie sojowym i mirinie, bez kwasu. NCHFP Marinated Whole Mushrooms wymaga octu 5% i soku z cytryny i jest przepisem do wekowania, nie lodówkowym. |
| strawberry-v09 | syrop truskawkowy zasypowy | sweet-preserves | zostaje do-researchu | SLO-020, K-SLO-1, K-SLO-5 | Syrop zasypowy (bez gotowania): SLO-020 dotyczy dżemu niegotowanego z pektyną, nie soku puszczonego z cukrem; brak limitu dla syropu. Alternatywa ze źródłem: Berry Syrup NCHFP (SLO-182–186) albo mrożenie. |
| raspberry-blackberry-v09 | maliny zasypane cukrem w słoikach (do herbaty) | sweet-preserves | zostaje do-researchu | SLO-020, K-SLO-1, K-SLO-5 | Maliny zasypane cukrem: jak strawberry-v09. |
| blueberry-bilberry-v07 | jagody zasypane cukrem | sweet-preserves | zostaje do-researchu | SLO-020, K-SLO-1, K-SLO-5 | Jagody zasypane cukrem: jak strawberry-v09. |
| cranberry-lingonberry-v02 | szwedzka rårörda lingon (ucierana na surowo z cukrem) | sweet-preserves | zostaje do-researchu | SLO-020, K-SLO-1 | Rårörda lingon: Marthaförbundet (organizacja fińska, szczebel 3) pisze o długiej trwałości w lodówce dzięki kwasowi benzoesowemu, bez liczby; źródła urzędowego (Livsmedelsverket, Ruokavirasto) nie znaleziono. |
| currant-v04 | czarna porzeczka w miodzie | sweet-preserves | ryzyko-wysokie | K-SLO-6, K-SLO-7, K-SLO-8, K-SLO-10, K-SLO-11, SLO-036 | Owoce w miodzie konserwuje tylko niska aktywność wody; OSU dopuszcza najwyżej 15% świeżych owoców masy naparu. Przepisy „porzeczka w miodzie” zwykle przekraczają tę proporcję. Karta-ostrzeżenie może podać metodę OSU (do 15%) jako bezpieczną alternatywę (B9-D8). |
| lemon-v05 | cytryny w miodzie (fermentowane) | sweet-preserves | ryzyko-wysokie | K-SLO-6, K-SLO-7, K-SLO-8, K-SLO-10, SLO-036 | Cytryny w miodzie „fermentowane”: proporcja zwykle ok. 1:1, fermentacja zwiększa wilgotność; jak currant-v04. |
| lemon-v09 | cytryny z imbirem w miodzie | sweet-preserves | ryzyko-wysokie | K-SLO-6, K-SLO-7, K-SLO-8, K-SLO-9, K-SLO-10, SLO-036 | Cytryna z imbirem w miodzie: imbir jako składnik wilgotny niskokwasowy (wniosek JarAtlas): tylko na gorąco i do 15% (OSU). |
| ginger-turmeric-v10 | imbir z cytryną w miodzie | sweet-preserves | ryzyko-wysokie | K-SLO-6, K-SLO-7, K-SLO-9, K-SLO-10, SLO-036 | Jak lemon-v09. |
| elderberry-elderflower-v06 | syrop z kwiatów czarnego bzu z cytryną | sweet-preserves | zostaje do-researchu | K-SLO-12, SLO-062, SLO-068 | Jest przepis szczebla 3 (OSU EM 9446, Penn State): cytryna i 1,5 łyżeczki kwasu cytrynowego, tylko lodówka albo mrożenie. Limit „kilka tygodni” bez liczby: kandydat na ok-zrodlo po decyzji koordynatora o brzmieniu (B9-D9). |
| foraged-blossoms-v02 | syrop („miód”) z kwiatów mniszka lekarskiego z cytryną | sweet-preserves | zostaje do-researchu | K-SLO-13, SLO-068 | Syrop („miód”) z mniszka: napar niekwaśny; jedyna wskazówka OSU: mrozić. Brak limitu lodówkowego. |
| pumpkin-v12 | syrop korzenny (pumpkin spice) | sweet-preserves | zostaje do-researchu | SLO-044, K-SLO-14, SLO-023 | Syrop korzenny z puree dyniowym: tylko lodówka albo mrożenie, bez liczby dni (NCHFP, UCCE). Sam syrop cukrowy z przyprawami (bez dyni) to inny produkt: brak źródła. |
| onion-v07 | karmelizowana konfitura cebulowa z winem | sweet-preserves | ryzyko-wysokie | ACI-524, ACI-005, ACI-107, SLO-023, MIE-059 | Konfitura cebulowa: warzywo niskokwasowe, brak przepisu i limitu lodówkowego; wino i ocet bez ustalonej dawki. Analogia w repo: pumpkin-v08 (dżem z dyni, ryzyko-wysokie). Karta-ostrzeżenie (B9-D10). |
| carrot-v11 | dżem marchewkowo-pomarańczowy (portugalski) | sweet-preserves | ryzyko-wysokie | ACI-005, SLO-031, SLO-023, MIE-059 | Dżem marchewkowo-pomarańczowy: jak onion-v07. Istnieje przepis do wekowania „Carrot Cake Jam” (Ball, w WSU): marchew z gruszką, ananasem i sokiem z cytryny; to inny wariant (kandydat na kartę wekowania). |
| beetroot-v13 | konfitura z buraka i czerwonego wina | sweet-preserves | ryzyko-wysokie | ACI-005, SLO-032, SLO-023, MIE-059 | Konfitura z buraka i wina: jak onion-v07. |

## 4. Twierdzenia ACI-500–ACI-525 (do wklejenia przez tor A)

**ACI-500** (krytyczne; jedno źródło)

- pl: Według Wisconsin B2267 niektóre przepisy na pikle z wystarczającą ilością octu 5% można bezpiecznie przechowywać w lodówce w 40°F (4,4°C) lub niżej do 1 miesiąca.
- en: According to Wisconsin B2267, some pickle recipes with enough 5% vinegar can be stored safely in the refrigerator at 40°F (4.4°C) or colder for up to 1 month.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 825261722dc2): https://door.extension.wisc.edu/files/2010/10/B2267-Homemade-Pickles-Relishes.pdf, Univ. of Wisconsin Extension, B2267 Homemade Pickles and Relishes (B. Ingham); s. 2, Refrigerator pickles. Cytat: „Some pickle recipes that call for enough vinegar (5 percent acetic acid) can be stored safely in the refrigerator at 40° F or colder for up to 1 month.”
- warianty: ogólne
- uwaga: Górna granica ogólna; karta podaje krótszy limit z przepisu, którego proporcje przytacza (B9-D3).

**ACI-501** (krytyczne)

- pl: Pikle lodówkowe nie są pasteryzowane, więc muszą stać w lodówce; nie zmniejsza się w nich ilości octu (może powstać produkt niebezpieczny), a łagodniejszy smak uzyskuje się, dodając cukru, nie odejmując octu.
- en: Refrigerator pickles are not heat processed, so they must be kept refrigerated; do not decrease the vinegar in them (an unsafe product may result); for a milder taste add sugar rather than decrease vinegar.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 825261722dc2): https://door.extension.wisc.edu/files/2010/10/B2267-Homemade-Pickles-Relishes.pdf, Univ. of Wisconsin Extension, B2267; s. 2, Refrigerator pickles. Cytat: „These pickles do not require heat processing, but they must be kept refrigerated. Do not decrease the amount of vinegar in these recipes; an unsafe product may result.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 0f706b9a027d): https://www.ndsu.edu/agriculture/extension/publications/food-preservation-making-pickled-products, North Dakota State Univ. Extension, Food Preservation: Making Pickled Products; Vinegar. Cytat: „Do not dilute vinegar unless the recipe so specifies. If a less sour pickle is preferred, add sugar rather than decrease vinegar.”
- warianty: ogólne

**ACI-502** (krytyczne; jedno źródło)

- pl: Wiele pikli typu fresh pack można bez pasteryzacji trzymać w lodówce krótko (kilka tygodni), ale ich jakość szybko spada, a przy długim przechowywaniu mogą stać się niebezpieczne.
- en: Many fresh-pack pickles can be kept in the refrigerator for short periods (several weeks) without heat processing, but quality deteriorates rapidly and they may become unsafe if stored for extended periods.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 813ba68800a1): https://ccfruitandnuts.ucanr.edu/sites/default/files/2018-07/287722.pdf, Univ. of Wisconsin Extension, B2267 (kopia na serwerze UC ANR); s. 52, Refrigerator pickle recipes. Cytat: „Many fresh pack pickles can be stored in the refrigerator for short periods of time (several weeks) without heat processing. However, quality will deteriorate rapidly, and these products may become unsafe if stored for extended periods.”
- warianty: ogólne

**ACI-503** (krytyczne; jedno źródło)

- pl: Przepis Wisconsin B2267 „Cucumber pickles with onions or vegetable medley”: 8 szklanek cienko pokrojonych ogórków i 1 szklanka pokrojonej cebuli albo tyle samo innych warzyw (kalafior, papryka, marchew); zalewa: 4 szklanki octu 5% i 2 szklanki cukru (plus sól i przyprawy według przepisu).
- en: Wisconsin B2267 recipe “Cucumber pickles with onions or vegetable medley”: 8 cups thinly sliced cucumbers and 1 cup sliced onion or an equal amount of other vegetables (cauliflower, peppers, carrots); pickling solution: 4 cups 5% vinegar and 2 cups sugar (plus salt and spices as in the recipe).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 813ba68800a1): https://ccfruitandnuts.ucanr.edu/sites/default/files/2018-07/287722.pdf, Univ. of Wisconsin Extension, B2267 (kopia na serwerze UC ANR); s. 52, przepis Cucumber pickles with onions or vegetable medley. Cytat: „8 cups cucumbers, thinly sliced | 1 cup onion, peeled and sliced | an equal amount of other vegetables such as cauliflower, peppers or carrots as desired | 4 cups vinegar (5% acetic acid) | 2 cups sugar”
- warianty: cucumber-v17, european-mixed-veg-v03, european-mixed-veg-v05
- uproszczenie: Lista zalewy nie zawiera wody (ocet nierozcieńczony). Pominięto sól (1/3 szklanki) i przyprawy: ułamek w PDF rozbity przez pdftotext; karta przytacza je z przepisu po odczycie strony 52.

**ACI-504** (krytyczne; jedno źródło)

- pl: Wisconsin B2267, ten przepis: słoiki opisać datą i trzymać w lodówce w 40°F (4,4°C) lub niżej do 2 tygodni; pikle nie są pasteryzowane i muszą stać w lodówce.
- en: Wisconsin B2267, this recipe: label and date the jars and store in the refrigerator at 40°F (4.4°C) or colder for up to 2 weeks; the pickle is not heat processed and must be kept refrigerated.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 813ba68800a1): https://ccfruitandnuts.ucanr.edu/sites/default/files/2018-07/287722.pdf, Univ. of Wisconsin Extension, B2267 (kopia na serwerze UC ANR); s. 52, przepis Cucumber pickles with onions or vegetable medley. Cytat: „Label and date, and store in the refrigerator at 40° F or colder for up to 2 weeks. This pickle is not heat processed and must be kept refrigerated.”
- warianty: cucumber-v17, european-mixed-veg-v03, european-mixed-veg-v05

**ACI-505** (krytyczne; jedno źródło)

- pl: NC State i UC MFP, szybkie pikle lodówkowe: na początek nadają się cebula, ogórki, szparagi, pasternak, rzodkiewki i strąki groszku; zalewa kwaśna: 3 szklanki octu białego (albo jabłkowego), 3 szklanki wody i 3 łyżki soli do przetworów.
- en: NC State and UC MFP, quick refrigerator pickles: onions, cucumbers, asparagus, parsnips, radishes and pea pods are good vegetables to start with; sour brine: 3 cups white (or cider) vinegar, 3 cups water and 3 tbsp canning/pickling salt.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a301a5eaa241): https://foodsafety.ces.ncsu.edu/news/how-to-make-quick-refrigerator-pickles/, NC State Extension, How to Make Quick Refrigerator Pickles; wstęp i krok 4 (Sour Brine). Cytat: „Onions, cucumbers, asparagus, parsnips, radishes, and pea pods are great vegetables to start making quick refrigerator pickles. … 3 cups white vinegar (or apple cider) | 3 cups water | 3 Tbsp. canning/pickling salt”
- warianty: radish-v03, radish-v05
- uwaga: Przepis UC MFP powtarza tekst NC State (źródło pochodne, liczone raz).

**ACI-506** (krytyczne; jedno źródło)

- pl: NC State i UC MFP, szybkie pikle lodówkowe: zalewę gotować 2 minuty, wlać do słoików do 1/2 cala (ok. 1,3 cm) od brzegu, zamknąć i wstawić do lodówki; smak rozwija się 1–2 dni; zużyć w ciągu 2 tygodni.
- en: NC State and UC MFP, quick refrigerator pickles: boil the brine for 2 minutes, fill jars to within 1/2 inch (about 1.3 cm) of the rim, close and refrigerate; flavour develops in 1–2 days; use within 2 weeks.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a301a5eaa241): https://foodsafety.ces.ncsu.edu/news/how-to-make-quick-refrigerator-pickles/, NC State Extension, Home and Community Food Safety, How to Make Quick Refrigerator Pickles (C. Christian, 2020/2021); krok 5. Cytat: „Carefully fill the jars with brine to within 1/2 inch of the top of the rim. Place the lids on the jars and refrigerate. Allow flavor to develop for 1 – 2 days before serving. Use within 2 weeks.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 276cacc014c5): https://ccfruitandnuts.ucanr.edu/sites/default/files/2025-07/MFP%20Quick%20Refrigerator%20Pickles.pdf, UC Master Food Preserver Program, Quick Refrigerator Pickles (07.2025; źródła: UMaine Let’s Preserve, NC State); krok 5. Cytat: „Allow flavor to develop for 1–2 days before serving. Use within 2 weeks.”
- warianty: radish-v03, radish-v05
- uwaga: Źródło pochodne (UC za NC State).

**ACI-507** (krytyczne; jedno źródło)

- pl: UC MFP, cebula marynowana (Pickled Onions): na słoik 1 szklanka octu białego (albo jabłkowego), 1 szklanka wody i 1 łyżka soli do przetworów; smak rozwija się dzień lub dwa; zużyć w ciągu 2 tygodni.
- en: UC MFP, Pickled Onions: per jar 1 cup white (or cider) vinegar, 1 cup water and 1 tbsp canning/pickling salt; flavour develops in a day or two; use within 2 weeks.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 276cacc014c5): https://ccfruitandnuts.ucanr.edu/sites/default/files/2025-07/MFP%20Quick%20Refrigerator%20Pickles.pdf, UC Master Food Preserver Program, Quick Refrigerator Pickles (07.2025); s. 2, Pickled Onions, składniki. Cytat: „1 cup white vinegar (or apple cider) | 1 cup water | 1 Tbsp canning/pickling salt”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 276cacc014c5): https://ccfruitandnuts.ucanr.edu/sites/default/files/2025-07/MFP%20Quick%20Refrigerator%20Pickles.pdf, UC Master Food Preserver Program, Quick Refrigerator Pickles (07.2025); s. 2, Pickled Onions, krok 4. Cytat: „Give a day or two for flavor to develop. Use within 2 weeks.”
- warianty: shallot-pearl-onion-v01

**ACI-508** (krytyczne)

- pl: Przepisy nieprzetestowane można przygotować i trzymać w lodówce do 2 tygodni, nie na blacie (Wisconsin); ulubiony przepis na pikle, który nie nadaje się do wekowania, można trzymać w lodówce do 2 tygodni (NDSU).
- en: Untested recipes can be prepared and stored in the refrigerator for up to 2 weeks, not on the counter (Wisconsin); a favourite pickle recipe that is not safe for canning can be kept in the refrigerator for up to 2 weeks (NDSU).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 fe88c89b9233): https://oconto.extension.wisc.edu/files/2017/04/Time-to-Make-Pickles-2.pdf, Univ. of Wisconsin Extension, Oconto County, Time to Make Pickles (2017); No approved recipe?. Cytat: „Untested recipes can be prepared and stored in the refrigerator for up to 2 weeks. Do not store on the counter.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 9346581f172a): https://www.ndsu.edu/agriculture/sites/default/files/2023-08/fn2102.pdf, NDSU Extension FN2102 (2023), Pickles; Kitchen tip. Cytat: „Try refrigerating a favorite pickle recipe that isn’t safe for canning. Store in the refrigerator for up to two weeks.”
- warianty: ogólne
- uwaga: Nie podnosi statusu do ok-zrodlo (B9-D4): to reguła ostrożności dla przepisów bez testu, nie przepis.

**ACI-509** (krytyczne; jedno źródło)

- pl: Wisconsin (szybkie pikle): tylko ocet o kwasowości 5%; biały i jabłkowy zamiennie; nie używać octów winnych, octu domowego ani soku z cytryny.
- en: Wisconsin (quick pickles): use only 5% vinegar; white and cider vinegar are interchangeable; do not use wine vinegars, homemade vinegar or lemon juice.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 fe88c89b9233): https://oconto.extension.wisc.edu/files/2017/04/Time-to-Make-Pickles-2.pdf, Univ. of Wisconsin Extension, Oconto County, Time to Make Pickles (2017); Pickles in a „flash” – Quick Process Pickles. Cytat: „Use only 5% acetic acid vinegar. White or cider vinegar can be used interchangeably; do not use wine vinegars or homemade vinegar. Do not use lemon juice.”
- warianty: ogólne
- uwaga: Sprzeczne z OSU (ocet ryżowy, balsamiczny „można”): wygrywa ostrożniejsze, B9-D5.

**ACI-510** (krytyczne; jedno źródło)

- pl: Mississippi State, szybkie ogórki z cebulą: 2 duże ogórki, 1 średnia cebula, 1 ząbek czosnku, 1 szklanka octu białego destylowanego albo jabłkowego i 1 szklanka wody; warzywa mają być przykryte zalewą; trzymają się ok. tygodnia w lodówce.
- en: Mississippi State, quick-pickle cucumbers and onions: 2 large cucumbers, 1 medium onion, 1 garlic clove, 1 cup white distilled or cider vinegar and 1 cup water; the vegetables must be covered; they keep for about a week in the refrigerator.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 6332a207e223): https://happyhealthy.extension.msstate.edu/recipes/quick-pickle-cucumbers-and-onions, Mississippi State Univ. Extension, Quick-Pickle Cucumbers and Onions; Ingredients. Cytat: „2 large cucumbers | 1 medium onion | 1 garlic clove | 1 cup white distilled or apple cider vinegar | 1 cup water”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 6332a207e223): https://happyhealthy.extension.msstate.edu/recipes/quick-pickle-cucumbers-and-onions, Mississippi State Univ. Extension, Quick-Pickle Cucumbers and Onions; Directions. Cytat: „Pour into the jar, making sure the vegetables are covered. Cover and refrigerate until chilled, or overnight. The vegetables keep for about a week.”
- warianty: cucumber-v17

**ACI-511** (krytyczne; jedno źródło)

- pl: Nebraska–Lincoln, szybki daikon z marchewką: 1 szklanka daikonu i 1 szklanka marchwi w słupkach, 1/2 szklanki octu jabłkowego i 1/2 szklanki wody (plus cukier i sól); resztki w szczelnym słoiku w lodówce do 4 dni.
- en: Nebraska–Lincoln, quick pickled daikon and carrots: 1 cup daikon and 1 cup carrots, julienned, 1/2 cup cider vinegar and 1/2 cup water (plus sugar and salt); leftovers in a sealed jar in the refrigerator for up to 4 days.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 b16b08255db9): https://food.unl.edu/recipe/quick-pickled-daikon-radish-and-carrots/, Univ. of Nebraska–Lincoln Extension, Quick Pickled Daikon Radish and Carrots; Ingredients. Cytat: „1 cup daikon radish, scrubbed with clean vegetable brush under running water, peeled and julienned | 1 cup carrots, scrubbed with clean vegetable brush under running water, peeled and julienned | ½ cup apple cider vinegar | ½ cup water”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 b16b08255db9): https://food.unl.edu/recipe/quick-pickled-daikon-radish-and-carrots/, Univ. of Nebraska–Lincoln Extension, Quick Pickled Daikon Radish and Carrots; Directions. Cytat: „Store leftovers in a sealed jar or container in the refrigerator for up to four days.”
- warianty: daikon-black-radish-v03
- uproszczenie: Pominięto ilości cukru i soli (nieistotne dla limitu; karta przytacza je z przepisu).

**ACI-512** (krytyczne; jedno źródło)

- pl: UC ANR: obrane ząbki czosnku zalewa się nierozcieńczonym winem albo octem i trzyma w lodówce; wino lub ocet dają środowisko kwaśne (pH poniżej 4,6), w którym Clostridium botulinum nie rośnie.
- en: UC ANR: peeled garlic cloves are covered with undiluted wine or vinegar and kept in the refrigerator; the wine or vinegar provides an acidic environment (below pH 4.6) in which Clostridium botulinum cannot grow.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 8679aec48f7a): https://ucanr.edu/sites/default/files/2023-09/388534.pdf, UC ANR (UC Master Food Preservers, za publikacją 8568), Storing Garlic in Wine or Vinegar and Refrigerating. Cytat: „Peeled cloves may be submerged in undiluted (full-strength) wine or vinegar and stored in the refrigerator.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 8679aec48f7a): https://ucanr.edu/sites/default/files/2023-09/388534.pdf, UC ANR (UC Master Food Preservers, za publikacją 8568), Storing Garlic in Wine or Vinegar and Refrigerating. Cytat: „Adding wine or vinegar to garlic provides an acidic environment (less than pH 4.6) so Clostridium botulinum cannot grow.”
- warianty: garlic-v07
- uwaga: Źródło nie podaje kwasowości octu; JarAtlas: tylko ocet z etykietą 5% (ACI-509, ACI-516).

**ACI-513** (krytyczne)

- pl: UC ANR: czosnek w occie albo winie trzyma się w lodówce ok. 4 miesięcy (opisać datą przygotowania i „najlepiej do”); dłuższe przechowywanie nie powinno dać produktu niebezpiecznego, ale może pojawić się pleśń; nie trzymać w temperaturze pokojowej.
- en: UC ANR: garlic in vinegar or wine keeps about 4 months in the refrigerator (label with the preparation date and a “best before” date); longer storage should not make it unsafe, but mould may develop; do not store at room temperature.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 8679aec48f7a): https://ucanr.edu/sites/default/files/2023-09/388534.pdf, UC ANR (UC Master Food Preservers, za publikacją 8568), Storing Garlic in Wine or Vinegar and Refrigerating. Cytat: „The garlic–liquid mixture should keep for about 4 months in the refrigerator. Label the refrigerated garlic–liquid mixtures to show the preparation date and a “best before” date. Longer storage should not result in an unsafe product, but mold growth may develop, and flavors may change.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 02e38bf401db): https://ccfruitandnuts.ucanr.edu/sites/default/files/2023-08/387906.pdf, UCCE Master Food Preservers of El Dorado County, Garlic in Wine. Cytat: „Cap, label and date the jar, and store in the refrigerator, where it will keep for about 4 months.”
- warianty: garlic-v07
- uwaga: Limit 4 miesięcy dotyczy jakości; źródło 8568 (oryginał) zwróciło 403, odczyt z dwóch dokumentów UC.

**ACI-514** (niekrytyczne)

- pl: NCHFP: ostrość świeżego chrzanu zanika w ciągu 1–2 miesięcy nawet w lodówce, więc robi się małe ilości.
- en: NCHFP: the pungency of fresh horseradish fades within 1–2 months even when refrigerated, so make small quantities.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 b7a249a2f04b): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-horseradish-sauce/, NCHFP, Pickled Horseradish Sauce; Procedure. Cytat: „Procedure: The pungency of fresh horseradish fades within 1 to 2 months, even when refrigerated. Therefore, make only small quantities at a time.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 0f706b9a027d): https://www.ndsu.edu/agriculture/extension/publications/food-preservation-making-pickled-products, North Dakota State Univ. Extension, Food Preservation: Making Pickled Products; Pickled Horseradish Sauce. Cytat: „Procedure: The pungency of fresh horseradish fades within one to two months, even when refrigerated.”
- warianty: horseradish-v02, horseradish-v04
- uwaga: Limit jakościowy; uzupełnia ACI-035 (sos chrzanowy NCHFP w lodówce).

**ACI-515** (krytyczne; jedno źródło)

- pl: FDA (wytyczna CPG dla octu): odmiany octu w obrocie w USA powinny mieć 4 g kwasu octowego na 100 ml (20°C), czyli mniej niż 5% wymagane w przepisach do przetworów.
- en: FDA (vinegar CPG): vinegars sold in the USA should contain 4 g of acetic acid per 100 mL (20°C), i.e. less than the 5% required in preserving recipes.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 71452b268553): https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cpg-sec-525825-vinegar-definitions-adulteration-vinegar-eels, U.S. FDA, CPG Sec. 525.825 Vinegar, Definitions; Policy. Cytat: „Each of the varieties of vinegar listed below should contain 4 grams of acetic acid per 100 mL.(20oC).”
- warianty: napa-cabbage-v09, brussels-kohlrabi-v09, daikon-black-radish-v04, radish-v04, turnip-rutabaga-v05
- uwaga: Druga część zdania („mniej niż 5%”) to porównanie z ACI-018, nie treść CPG.

**ACI-516** (krytyczne)

- pl: Octu o kwasowości poniżej 5% nie używa się w domowych przetworach (Virginia Tech); wszystkie przetestowane przepisy zakładają ocet 5% (UC MFP Central Sierra).
- en: Vinegar below 5% acidity should never be used in home food preservation (Virginia Tech); all tested recipes use 5% vinegar (UC MFP Central Sierra).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 cd318f907439): https://news.vt.edu/articles/2023/07/low_acidity_vinegar_warning_expert.html, Virginia Tech (Virginia Cooperative Extension), komunikat 07.2023 o occie o niskiej kwasowości. Cytat: „“Vinegars with less than 5 percent acetic acid concentration should never be used in home food preservation, as they can lead to unsafe pH levels and spoilage.””
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 b20c5efe19ee): https://ucanr.edu/site/uc-master-food-preservers-central-sierra/article/central-sierra-about-vinegar-read-label-edc, UC Master Food Preservers Central Sierra, About That Vinegar—Read The Label!. Cytat: „All our tested, safe recipes for home food preservation use 5-percent acidity vinegars. This one percent drop makes a big difference in preserving and pickling your foods safely.”
- warianty: ogólne

**ACI-517** (krytyczne; jedno źródło)

- pl: Univ. of Minnesota: sok z cytryny albo limonki (pH 2,0–2,60) stosuje się do pikli owocowych, chutneyów i zakwaszania przetworów pomidorowych; źródło nie wymienia warzyw.
- en: University of Minnesota: lemon or lime juice (pH 2.0–2.60) is used for pickled fruits, chutneys and acidified tomato products; the source does not list vegetables.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f3734150f6a3): https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/pickling, Univ. of Minnesota Extension, Pickling; Acid. Cytat: „Lemon or lime juice can be used to make pickled fruits, chutneys and acidified tomato products. Both kinds of juice have a pH between 2.0 and 2.60. The pH of bottled lemon or lime juice is more consistent than freshly squeezed juice.”
- warianty: onion-v05, shallot-pearl-onion-v02, shallot-pearl-onion-v03, horseradish-v02

**ACI-518** (krytyczne)

- pl: pH świeżo wyciśniętego soku z cytryny lub limonki jest zmienne (dojrzalsze owoce są mniej kwaśne); przepisy oparte na badaniach używają soku butelkowanego.
- en: The pH of freshly squeezed lemon or lime juice varies (riper fruit is less acidic); research-based recipes use bottled juice.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ca226460c1e1): https://extension.oregonstate.edu/ask-extension/featured/can-i-use-fresh-lemon/lime-juice-salsa, Oregon State Univ. Extension, Ask Extension: Can I use fresh lemon/lime juice in salsa?. Cytat: „Most research-based recipes call for bottled lemon or lime juice because the pH (acidity) of the bottled juice is consistent. The pH level can vary with fresh lemons and limes. As they get more ripe, they get less acidic.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f3734150f6a3): https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/pickling, Univ. of Minnesota Extension, Pickling; Acid. Cytat: „The pH of bottled lemon or lime juice is more consistent than freshly squeezed juice.”
- warianty: onion-v05, shallot-pearl-onion-v02, shallot-pearl-onion-v03, horseradish-v02

**ACI-519** (krytyczne; jedno źródło)

- pl: Univ. of Minnesota: nie ma uniwersalnej proporcji składnika zakwaszającego do ilości warzyw lub owoców.
- en: University of Minnesota: there is no standard ratio of acidifying ingredient to produce.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 f3734150f6a3): https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/pickling, Univ. of Minnesota Extension, Pickling; Acid. Cytat: „There is no standard ratio for the amount of acidifying ingredient to the amount of produce.”
- warianty: ogólne
- uwaga: Dlatego proporcje karty pochodzą z jednego przepisu, nie z „reguły 1:1” (B9-D3).

**ACI-520** (krytyczne; jedno źródło)

- pl: Colorado State: lodówka (do 6 miesięcy) to dopuszczalny sposób przechowywania tylko produktów w pełni ukiszonych; dla pikli typu fresh pack jedyną zalecaną procedurą jest wekowanie.
- en: Colorado State: refrigeration (up to 6 months) is acceptable short-term storage only for fully fermented products; canning is the only recommended procedure for fresh-pack pickles.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 7f6cc85cbd7f): https://extension.colostate.edu/resource/making-pickles/, Colorado State Univ. Extension, Making Pickles; przechowywanie. Cytat: „Refrigeration is an acceptable short-term (up to six months) storage method for fully fermented products such as sauerkraut and long-brined dills. Canning is a better way to store fully fermented pickles and sauerkraut and is the only recommended procedure for fresh-pack pickle products.”
- warianty: ogólne
- uwaga: Ostrzejsze niż Wisconsin, NC State i UC (pikle lodówkowe z limitem); kontekst ostrożności, nie granica.

**ACI-521** (krytyczne; jedno źródło)

- pl: PSSE Szczecinek: w drzwiach lodówki, gdzie zwykle stawia się słoiki z przetworami, musztardę, ketchup i chrzan, temperatura wynosi ok. 10°C.
- en: PSSE Szczecinek: in the refrigerator door, where jars of preserves, mustard, ketchup and horseradish are usually kept, the temperature is about 10°C.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 d1a80ab9e163): https://www.gov.pl/web/psse-szczecinek/przechowywanie-zywnosci-w-lodowce, PSSE Szczecinek (Państwowa Inspekcja Sanitarna), Przechowywanie żywności w lodówce. Cytat: „Boczne półki, czyli drzwi lodówki służą do przechowywania słoików z przetworami, musztardy, ketchupu, chrzanu, soków w kartonie. Na drzwiach lodówki znajduje się również pojemnik na jajka. Temperatura tu panująca to ok. 10°C.”
- warianty: ogólne

**ACI-522** (krytyczne; jedno źródło)

- pl: PSSE Szczecinek: na środkowej półce lodówki temperatura jest niższa niż 5°C.
- en: PSSE Szczecinek: on the middle shelf of the refrigerator the temperature is below 5°C.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 d1a80ab9e163): https://www.gov.pl/web/psse-szczecinek/przechowywanie-zywnosci-w-lodowce, PSSE Szczecinek (Państwowa Inspekcja Sanitarna), Przechowywanie żywności w lodówce; zasady układania. Cytat: „Środkowa półka to temperatura poniżej 5°C.”
- warianty: ogólne

**ACI-523** (krytyczne)

- pl: Ostrożna reguła JarAtlas: przetwory lodówkowe (pikle, dżemy, syropy) trzyma się na środkowej półce, nie w drzwiach: amerykańskie przepisy zakładają 40°F (4,4°C) lub niżej, a w drzwiach bywa ok. 10°C.
- en: Cautious JarAtlas rule: refrigerator preserves (pickles, jams, syrups) are kept on the middle shelf, not in the door: US recipes assume 40°F (4.4°C) or colder, while the door can be about 10°C.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 825261722dc2): https://door.extension.wisc.edu/files/2010/10/B2267-Homemade-Pickles-Relishes.pdf, Univ. of Wisconsin Extension, B2267 Homemade Pickles and Relishes (B. Ingham); s. 2, Refrigerator pickles. Cytat: „Some pickle recipes that call for enough vinegar (5 percent acetic acid) can be stored safely in the refrigerator at 40° F or colder for up to 1 month.”
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 d1a80ab9e163): https://www.gov.pl/web/psse-szczecinek/przechowywanie-zywnosci-w-lodowce, PSSE Szczecinek (Państwowa Inspekcja Sanitarna), Przechowywanie żywności w lodówce. Cytat: „Boczne półki, czyli drzwi lodówki służą do przechowywania słoików z przetworami, musztardy, ketchupu, chrzanu, soków w kartonie. Na drzwiach lodówki znajduje się również pojemnik na jajka. Temperatura tu panująca to ok. 10°C.”
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 d1a80ab9e163): https://www.gov.pl/web/psse-szczecinek/przechowywanie-zywnosci-w-lodowce, PSSE Szczecinek (Państwowa Inspekcja Sanitarna), Przechowywanie żywności w lodówce; zasady układania. Cytat: „Środkowa półka to temperatura poniżej 5°C.”
- warianty: ogólne
- uwaga: Reguła (decyzja B9-D6), nie twierdzenie źródła.

**ACI-524** (krytyczne; jedno źródło)

- pl: Ask Extension: cebula jest warzywem niskokwasowym, więc jej wekowanie wymaga szybkowaru (jad kiełbasiany).
- en: Ask Extension: onions are a low-acid vegetable, so they must be pressure canned (botulism).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ce2a79bc3823): https://ask.extension.org/kb/faq.php?id=596012, Ask Extension (eXtension Foundation), odpowiedź #596012 Canning onions. Cytat: „Because onions are a low acid vegetable they must be pressure canned to prevent botulism.”
- warianty: onion-v07

**ACI-525** (krytyczne; jedno źródło)

- pl: CDC: każdy wekowany albo marynowany produkt po otwarciu słoika trzyma się w lodówce.
- en: CDC: refrigerate any canned or pickled food after opening the jar.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 232e4422a63b): https://www.cdc.gov/botulism/prevention/index.html, CDC, Botulism Prevention; Home-canned foods. Cytat: „Refrigerate any canned or pickled foods after opening the jar.”
- warianty: ogólne

## 5. Twierdzenia do innych rejestrów (ID do nadania przez koordynatora)

**K-SLO-1 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: NCHFP, dżem niegotowany: po otwarciu pojemnika trzyma się go w lodówce i zużywa w ciągu kilku dni.
- en: NCHFP, uncooked jam: once a container is opened, keep it in the refrigerator and use within a few days.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 2ac94b15adf0): https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jam-uncooked/, NCHFP, Berry Jam (Uncooked); To store. Cytat: „Once a container is opened, jam should be stored in the refrigerator and used within a few days. If kept at room temperature they will mold or ferment in a short time.”
- warianty: strawberry-v09, raspberry-blackberry-v09, blueberry-bilberry-v07, cranberry-lingonberry-v02
- uwaga: Uzupełnia SLO-020.

**K-SLO-2 → rejestr SLO, ID do nadania przez koordynatora** (niekrytyczne; jedno źródło)

- pl: NCHFP: dżemy mrożone po rozmrożeniu trzyma się w lodówce; dobrą jakość zachowują 3–4 tygodnie od otwarcia.
- en: NCHFP: freezer jams must be kept in the refrigerator after thawing; they keep good quality for 3–4 weeks after opening.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 1de99ec9e98e): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/, NCHFP, Storing Home-Canned Jams and Jellies; pytanie o otwarte słoiki. Cytat: „Freezer jams also have to be stored in the refrigerator after thawing and will only retain good quality for 3 to 4 weeks after opening.”
- warianty: ogólne
- uwaga: Limit jakościowy.

**K-SLO-3 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: NCHFP: smarowidła o obniżonej zawartości cukru albo bez dodatku cukru mogą mieć w lodówce krótszą trwałość niż tradycyjne.
- en: NCHFP: lower-sugar or no-sugar-added spreads may have a shorter refrigerated shelf life than traditional ones.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 1de99ec9e98e): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/, NCHFP, Storing Home-Canned Jams and Jellies; pytanie o otwarte słoiki. Cytat: „Lower-sugar or no-sugar-added spreads may have a shorter refrigerated shelf life than those made with the traditional amounts of sugar.”
- warianty: ogólne
- uwaga: Bez liczby.

**K-SLO-4 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: NCHFP: kto eksperymentuje ze smarowidłami owocowymi bez przetestowanego przepisu, powinien je mrozić albo trzymać w lodówce.
- en: NCHFP: if you experiment with such fruit spreads without a tested recipe, freezing or refrigeration is recommended for storage.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 8c1cf462c5cb): https://nchfp.uga.edu/how/make-jam-jelly/reduced-sugar-recipes/refrigerator-jelly-with-splenda/, NCHFP, Refrigerator Jelly with Splenda; panel FAQ. Cytat: „If you want to experiment with making these kind of fruit spreads we recommend freezing or refrigeration for storage.”
- warianty: ogólne

**K-SLO-5 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: NCHFP: w mrożonych owocach cukier nie jest konserwantem; służy tylko smakowi, barwie i strukturze.
- en: NCHFP: in frozen fruit sugar is not used as a preservative, only to maintain flavour, colour and texture.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 1b2930bb603d): https://nchfp.uga.edu/how/freeze/fruits/freezing-strawberries/, NCHFP, Freezing Strawberries; panel FAQ. Cytat: „Yes; sugar is not used as a preservative but only to maintain flavor, color and texture.”
- warianty: strawberry-v09, raspberry-blackberry-v09, blueberry-bilberry-v07
- uwaga: Mówi o mrożeniu; dla owoców zasypanych cukrem w lodówce to tylko wskazówka (uproszczenie nazwane w raporcie).

**K-SLO-6 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: Oregon State EM 9885: zanurzenie produktu w miodzie go nie konserwuje; w badaniach bakterie rosły na granicy zanurzonego składnika i miodu.
- en: Oregon State EM 9885: submerging food in honey does not preserve it; lab trials found bacteria growing at the interface between the submerged ingredient and the honey.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885; Honey’s antimicrobial reputation. Cytat: „Lab trials have confirmed that bacteria grow at the interface between the submerged ingredient and the honey, despite honey’s reputed antimicrobial properties.”
- warianty: currant-v04, lemon-v05, lemon-v09, ginger-turmeric-v10

**K-SLO-7 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: Oregon State EM 9885: pH miodu waha się od 3,1 do 6,1, a niektóre patogeny rosną już przy pH 3,7; miód chroni niska aktywność wody, nie kwasowość.
- en: Oregon State EM 9885: honey pH ranges from 3.1 to 6.1, and some pathogens can grow at pH as low as 3.7; honey is kept safe by its low water activity, not its acidity.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885 Honey infusions; Honey’s acidity, s. 2–3. Cytat: „honey can range in pH from 3.1 to 6.1, and some pathogens can grow at a pH as low as 3.7.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885; Honey’s acidity, s. 3. Cytat: „Honey’s low water activity, not its acidity or antimicrobial components, is what keeps it safe during long storage periods.”
- warianty: currant-v04, lemon-v05, lemon-v09, ginger-turmeric-v10

**K-SLO-8 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: Oregon State EM 9885: świeże owoce wilgotne i kwaśne (jagody, cytrusy, pestkowe) w naparze miodowym najwyżej 15% masy całości.
- en: Oregon State EM 9885: fresh high-moisture, high-acid fruit (berries, citrus, stone fruit) at most 15% of the total honey infusion by weight.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885; Category 2: High-moisture, high-acid additions, s. 4. Cytat: „You can use highmoisture, high-acid additions for hot or cold honey infusions, but cap the amount of fresh fruit added at no more than 15% of the total infusion by weight.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885; Category 2: High-moisture, high-acid additions. Cytat: „Berries, citrus and stone fruits can introduce moisture to honey infusions. Don't use over 15% of the total infusion by weight.”
- warianty: currant-v04, lemon-v05, lemon-v09

**K-SLO-9 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: Oregon State EM 9885: składniki wilgotne i niskokwasowe (np. świeży czosnek, zioła) najwyżej 15% masy i tylko metodą na gorąco, z miodem stale powyżej 140°F (60°C).
- en: Oregon State EM 9885: high-moisture, low-acid ingredients (e.g. fresh garlic, herbs) at most 15% by weight and only by hot infusion, keeping the honey above 140°F (60°C).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885; Category 3: High-moisture, low-acid additions, s. 4. Cytat: „Cap high-moisture, low-acid ingredients at no more than 15% of the total infusion by weight, using hot infusion processes only.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 257458d1bb16): https://extension.oregonstate.edu/sites/extd8/files/catalog/auto/EM9885.pdf, Oregon State Univ. Extension, EM 9885; hot infusions, s. 5. Cytat: „Monitor temperature to ensure honey remains above 140°F”
- warianty: lemon-v09, ginger-turmeric-v10
- uwaga: Imbir zaliczony do niskokwasowych to wniosek JarAtlas (brak pH imbiru w przeczytanych źródłach).

**K-SLO-10 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: CDC: niemowlętom (poniżej 1 roku) nie podaje się miodu ani produktów z miodem.
- en: CDC: do not give honey or products made with it to infants (younger than 1 year).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 232e4422a63b): https://www.cdc.gov/botulism/prevention/index.html, CDC, Botulism Prevention; Infant botulism. Cytat: „Do not feed honey to a child who is younger than 1 year old.”
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 232e4422a63b): https://www.cdc.gov/botulism/prevention/index.html, CDC, Botulism Prevention; Health Alert (infant botulism). Cytat: „Do not give honey or products made with it, including honey pacifiers, to infants.”
- warianty: currant-v04, lemon-v05, lemon-v09, ginger-turmeric-v10
- uwaga: Rozszerza SLO-036 o produkty z miodem.

**K-SLO-11 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: NCEŻ (PL): miód jest na liście produktów, których niemowlę ma unikać z powodu ryzyka zatrucia.
- en: NCEŻ (Poland): honey is on the list of foods an infant should avoid because of the risk of poisoning.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 a26d33f580a5): https://ncez.pzh.gov.pl/dzieci-i-mlodziez/rozszerzanie-diety-niemowlat-co-warto-o-nim-wiedziec/, NCEŻ, NIZP PZH-PIB, Rozszerzanie diety niemowląt – co warto o nim wiedzieć. Cytat: „Miód, niedogotowane mięso, ryby i jaja oraz grzyby leśne – ryzyko zatrucia”
- warianty: currant-v04, lemon-v05, lemon-v09, ginger-turmeric-v10
- uwaga: Źródło polskie, bez podanego wieku.

**K-SLO-12 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: Oregon State EM 9446 i Penn State, syrop z kwiatów czarnego bzu (z cytryną i kwasem cytrynowym): trzymać w lodówce i zużyć w ciągu kilku tygodni albo zamrozić; po przechowywaniu w temperaturze pokojowej albo wekowaniu nie nadaje się do spożycia.
- en: Oregon State EM 9446 and Penn State, elderflower syrup (with lemon and citric acid): keep in the refrigerator and use within a few weeks or freeze; it cannot be safely consumed after room-temperature storage or canning.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 cd102f2ef770): https://extension.oregonstate.edu/catalog/em-9446-play-it-safe-when-preserving-elderberries, Oregon State Univ. Extension, EM 9446 Play it safe when preserving elderberries; Elderflower syrup. Cytat: „Pour the clear syrup into a bottle and store in the refrigerator. Use within a few weeks or freeze for later.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 cd102f2ef770): https://extension.oregonstate.edu/catalog/em-9446-play-it-safe-when-preserving-elderberries, Oregon State Univ. Extension, EM 9446; Elderflower syrup, Note. Cytat: „Note: Elderflower syrup made from this recipe cannot be safely consumed after being stored at room temperature or canned.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 df6ed9f4aa92): https://extension.psu.edu/elderberry-in-the-garden-and-the-kitchen, Penn State Extension, Elderberry in the Garden and the Kitchen; Elderflower Syrup. Cytat: „Note: Elderflower syrup made from this recipe cannot be safely consumed after being stored at room temperature or canned.”
- warianty: elderberry-elderflower-v06
- uwaga: „Kilka tygodni” bez liczby; Penn State to ten sam tekst (źródło pochodne).

**K-SLO-13 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: Oregon State (Ask Extension): napar z kwiatów (np. mniszka) prawdopodobnie nie jest dość kwaśny, by zapobiec rozwojowi patogenów; zmienione przepisy bezpieczniej mrozić niż wekować.
- en: Oregon State (Ask Extension): a flower tea (e.g. dandelion) is likely not acidic enough to prevent pathogen growth; freezing such modified recipes rather than canning them is a safe alternative.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a8e5dc7ebb2d): https://extension.oregonstate.edu/ask-extension/featured/jelly-made-dandelion-or-grape-hyacinth-tea-considered-safe, Oregon State Univ. Extension, Ask Extension: Is jelly made from dandelion or grape hyacinth tea considered safe?. Cytat: „The tea itself is likely not acidic enough to prevent pathogen growth.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 a8e5dc7ebb2d): https://extension.oregonstate.edu/ask-extension/featured/jelly-made-dandelion-or-grape-hyacinth-tea-considered-safe, Oregon State Univ. Extension, Ask Extension: Is jelly made from dandelion or grape hyacinth tea considered safe?. Cytat: „Freezing these modified jam or jelly recipes rather than canning them is a safe alternative for storage.”
- warianty: foraged-blossoms-v02
- uwaga: Uzupełnia SLO-068.

**K-SLO-14 → rejestr SLO, ID do nadania przez koordynatora** (krytyczne; jedno źródło)

- pl: UCCE MFP Orange County: USDA wycofał zalecenia wekowania masła dyniowego i nie ma bezpiecznej metody domowej; trzymać je w lodówce albo zamrozić.
- en: UCCE MFP Orange County: USDA withdrew its recommendations and there is no safe home canning method for pumpkin butter; refrigerate it or freeze it.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 dfa1e4c93a64): https://oc4h.ucanr.edu/sites/default/files/2021-11/360435.pdf, UCCE Master Food Preservers Orange County, (Not) Canning Pumpkin Butter (2021). Cytat: „Based on this research, the USDA withdrew its canning recommendations, and currently there are no safe methods for the home canning of pumpkin butter.”
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 dfa1e4c93a64): https://oc4h.ucanr.edu/sites/default/files/2021-11/360435.pdf, UCCE Master Food Preservers Orange County, (Not) Canning Pumpkin Butter (2021). Cytat: „In summary, refrigerate pumpkin butter or freeze it for longer-term storage.”
- warianty: pumpkin-v12
- uwaga: Uzupełnienie SLO-044 (dopisać źródło); nadal bez liczby dni.

**K-NAP-1 → rejestr NAP, ID do nadania przez koordynatora** (niekrytyczne; jedno źródło)

- pl: WSU: sos sojowy chroni przed zepsuciem wysokie zasolenie; po otwarciu dla jakości trzyma się go w lodówce i zużywa w ciągu 1 miesiąca.
- en: WSU: soy sauce is protected from spoilage by its high salt content; after opening refrigerate it for quality and use it within 1 month.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ef6f0fb9e6e4): https://news.cahnrs.wsu.edu/podcasts/fsm-288-storing-opened-soy-sauce-refrigerator-of-pantry/, Washington State Univ. Extension, Food Safety Minute 288: Storing Opened Soy Sauce. Cytat: „High salt concentration inhibits growth of microorganisms causing food spoilage. However, to maintain quality, refrigerate soy sauce after opening. When refrigerated, soy sauce should be used in one month.”
- warianty: napa-cabbage-v11, daikon-black-radish-v07, wild-garlic-v06, cultivated-mushrooms-v05
- uwaga: Dotyczy samego sosu, nie warzyw w sosie (B9-D7).

## 6. Bez źródła szczebla 1–3 (szukane, nie znalezione)

| Temat | Warianty | Co sprawdzone |
|---|---|---|
| kapusta po koreańsku, morkovcha | white-cabbage-v11, carrot-v06 | brak źródła szczebla 1–3 z przepisem lub limitem |
| kalarepa w occie | brussels-kohlrabi-v09 | tylko strony o przechowywaniu surowej kalarepy |
| cebula wyłącznie w soku cytrusowym | onion-v05, shallot-pearl-onion-v02, -v03 | UMN ogranicza sok do owoców, chutneyów i pomidorów; Wisconsin: nie używać soku z cytryny |
| surowy relish żurawina–chrzan | cranberry-lingonberry-v05 | brak |
| ćwikła lodówkowa | horseradish-v04 | NCHFP/NDSU/Wisconsin: tylko chrzan z octem; Pickled Beets to wekowanie |
| pH sosu sojowego, jangajji, marynaty sojowe bez octu | napa-cabbage-v11, daikon-black-radish-v07, wild-garlic-v06, cultivated-mushrooms-v05 | tabela Clemson nie ma sosu sojowego; FSIS i FoodKeeper: 403 |
| musztarda domowa: czas w lodówce | mustard-v02–v10 (poza partią 1) | brak; FSIS/FoodKeeper 403 |
| syropy ziołowe i kwiatowe (mięta, lipa, pędy sosny, mniszek), syrop prosty | foraged-blossoms-v02 (i v01, v03–v07, garden-herbs-v08–v11 poza partią) | brak limitu lodówkowego |
| surowe owoce zasypane cukrem: limit w lodówce | strawberry-v09, raspberry-blackberry-v09, blueberry-bilberry-v07 | brak; NCHFP: sugar pack tylko do mrożenia |
| dżemy warzywne (cebula, marchew, burak, cukinia): limit lodówkowy | onion-v07, carrot-v11, beetroot-v13 | brak; Ask Extension: cebula do szybkowaru |
| domowe maraschino w lodówce, owoce w alkoholu | sour-cherry-v12, sour-cherry-v13 (poza partią) | jedyny przepis extension (OSU SP 50-492, 1992) jest do wekowania |
| masło/syrop dyniowy: liczba dni w lodówce | pumpkin-v12 | NCHFP i UCCE: lodówka albo mrożenie, bez liczby |
| PL/UE: GIS, NCEŻ, EFSA o piklach i dżemach lodówkowych | wszystkie | tylko PSSE (temperatury półek) i NCEŻ (miód a niemowlęta) |
| UC ANR 8568 (oryginał), Clemson HGIC, Michigan State | garlic-v07 i ogólne | 403/Incapsula przy curl; nie cytowano |

## 7. Źródła odrzucone (przeczytane, nieużyte jako granica)

| Źródło | Adres | Cytat | Powód |
|---|---|---|---|
| Oregon State, Refrigerator Pickled Vegetables / Cucumbers | https://extension.oregonstate.edu/imported-publication/refrigerator-pickled-vegetables | „White, cider, white wine and rice vinegar are good choices.” / „Store jars only in the refrigerator. Use within 3 months.” | ocet ryżowy bez wymogu 5% i 3 miesiące: sprzeczne z Wisconsin, VT, UC MFP CS (B9-D5) |
| Penn State, Advice about Vinegar | https://extension.psu.edu/advice-about-vinegar | „The label does include a recipe for refrigerator pickles which would be safe.” | dotyczy przepisu producenta z octem 2,5%; nie uogólniać na octy <5% (B9-D5) |
| WSU Clark County MFP, Do Chua | https://s3.wp.wsu.edu/uploads/sites/2079/2016/05/Do-Chua.pdf | „… store in the refrigerator up to 3 weeks.” | ocet ryżowy z wodą 1:3, przepis szefa kuchni (B9-D5); do-chua według UNL |
| UC MFP, Refrigerated Sweet Pickled Radish | https://ucanr.edu/sites/default/files/2020-09/335051.pdf | „Store in refrigerator up to 4 months.” | przepis Ball (szczebel 4 w UC), limit 4 miesiące sprzeczny z 2 tygodniami NC State/UC dla rzodkiewek (B9-D5) |
| FDA, Fish and Fishery Products Hazards Guide, tabela A-2 | https://www.fda.gov/media/80390/download | „37.9-41°F (3.3-5°C) 7 days” | wytyczna dla ryb; nie przenosić na warzywa jako limit (MIE-059 wystarcza jako kontekst) |
| Marthaförbundet, Kallrörda lingon | https://martha.fi/recept/kallrorda-lingon | „Lingon innehåller bensoesyra, vilket gör att rårörda lingon har en lång hållbarhetstid i kylskåp.” | szczebel 3, bez liczby; za mało dla ok-zrodlo (cranberry-lingonberry-v02) |

## 8. Decyzje (tablica: `2026-11-02-jaratlas-06-b9-lodowka-zrodla-p1`)

- **B9-D1** Numeracja ACI-500–ACI-525 z puli zarezerwowanej dla B9 (ACI-500–599). Twierdzenia rejestrów SLO (14) i NAP (1) bez numeru, z kluczem tymczasowym K-…: „ID do nadania przez koordynatora”. Kolizje: rejestr.json kończy ACI na ACI-325, git grep ACI-5xx na wszystkich gałęziach origin: 0 trafień.
- **B9-D2** Partia 1 = 40 z 107 wariantów lodówkowych do-researchu w rodzinach vinegar-pickling i sweet-preserves: szybkie pikle (ogórki, cebula, rzodkiewka, daikon, czosnek, mieszanki), marynaty w occie ryżowym, w soku cytrusowym i w sosie sojowym, owoce z cukrem i w miodzie, syropy kwiatowe, dżemy warzywne. Musztardy (9) i pozostałe syropy ziołowe do partii 2: research nie dał źródła (sekcja 6).
- **B9-D3** Proporcje i limit dni karta bierze z jednego przepisu, którego proporcje przytacza (np. B2267: 2 tygodnie; Mississippi State: ok. tydzień; UNL: 4 dni). Ogólne „do 1 miesiąca” (ACI-500) to górna granica, nie limit karty. Odrzucone: część wspólna 1 tydzień dla wszystkich (gubi związek limitu z proporcją), „reguła 1:1” (UMN: nie ma standardowej proporcji, ACI-519). Decyzja Claude, do weta.
- **B9-D4** Status ok-zrodlo dla wariantu lodówkowego: przepis szczebla 3 (extension) z octem 5% białym albo jabłkowym, z proporcją z przepisu i z limitem dni; czosnek w occie według UC ANR (4 miesiące, jakość). Reguła „przepisy nieprzetestowane do 2 tygodni w lodówce” (ACI-508, Wisconsin, NDSU) nie podnosi statusu: to ostrożność dla przepisów bez testu, nie przepis. Decyzja Claude, do weta.
- **B9-D5** Sprzeczności tego samego szczebla przy bezpieczeństwie rozstrzygam w stronę ostrożniejszą: ocet tylko 5% (Wisconsin, VT, UC MFP CS, NCHFP ACI-018) wbrew OSU (ocet ryżowy, 3 miesiące) i Penn State (etykieta 2,5%); do-chua według UNL (1:1, 4 dni), nie WSU (1:3, 3 tygodnie); rzodkiewka 2 tygodnie (NC State/UC), nie 4 miesiące (Ball). Odrzucone źródła z cytatami w sekcji 7. Decyzja Claude, do weta.
- **B9-D6** Ostrożna reguła JarAtlas ACI-523: przetwory lodówkowe na środkowej półce, nie w drzwiach (PSSE: drzwi ok. 10°C, środkowa półka poniżej 5°C; przepisy USA: 40°F lub niżej). Odrzucone: pominięcie (PSSE poleca drzwi na słoiki z przetworami, co przy 10°C przeczy założeniu przepisów). Decyzja Claude, do weta.
- **B9-D7** Warzywa i grzyby w sosie sojowym bez octu: ryzyko-wysokie (karta-ostrzeżenie). Podstawa: SLO-023, ACI-005, MIE-059 (wzrost od 3,3°C), brak pH sosu sojowego w źródłach szczebla 1–3, sól rozcieńczona wodą z warzyw (bez pomiaru). Analogia w repo: catalog onion-v11 i daikon-black-radish-v09 (warzywo w miodzie, ryzyko-wysokie). Odrzucone: zostaje do-researchu (wariant „lodówkowy” bez limitu i bez kwasu). Wariant ostrożniejszy.
- **B9-D8** Owoce i imbir w miodzie (currant-v04, lemon-v05, lemon-v09, ginger-turmeric-v10): ryzyko-wysokie. OSU EM 9885: miód nie konserwuje zanurzonego składnika; świeże owoce do 15% masy, składniki niskokwasowe do 15% i tylko na gorąco; typowe przepisy przekraczają 15%. Karta-ostrzeżenie może podać metodę OSU jako alternatywę. Analogia w repo częściowa: chili-pepper-v14 (warzywo, nie owoc, w miodzie, ryzyko-wysokie); różnica: owoce kwaśne OSU dopuszcza do 15%. Decyzja Claude, do weta.
- **B9-D9** Syrop z kwiatów bzu (elderberry-elderflower-v06): zostaje do-researchu, choć OSU EM 9446 i Penn State mają przepis (cytryna, kwas cytrynowy, tylko lodówka albo mrożenie): limit „kilka tygodni” nie ma liczby. Alternatywa do weta: ok-zrodlo z brzmieniem źródła („w ciągu kilku tygodni albo zamrozić”). Decyzja Claude, do weta.
- **B9-D10** Dżemy i konfitury warzywne lodówkowe (onion-v07, carrot-v11, beetroot-v13): ryzyko-wysokie. Warzywo niskokwasowe (ACI-005, ACI-524), brak przepisu i limitu dni. Analogia w repo: pumpkin-v08 (dżem z dyni, ryzyko-wysokie). Wariant ostrożniejszy.
- **B9-D11** Źródło niedostępne przy ponownym pobraniu (WSU FSM 288: HTTP 403 dla curl): cytat sprawdzony na pliku, który subagent B pobrał tego dnia (HTTP 200, sha12 ef6f0fb9e6e4); bez obchodzenia blokady. Twierdzenie niekrytyczne (K-NAP-1). UC ANR 8568 (oryginał) 403: cytaty z dwóch dokumentów UC, które go powtarzają.
- **B9-D12** Szczeble: NCHFP, FDA, CDC, gov.pl (PSSE), NCEŻ = 1; uniwersytety extension, Ask Extension, UC MFP = 3. Subagent C nadał szczebel 1 kilku stronom extension; poprawione w tym raporcie.

## 9. Uwagi dla partii katalogowej (tor A)

- Pary zdań: ACI-500 („do 1 miesiąca”) obok ACI-504 („do 2 tygodni”) w jednej karcie sugeruje, że miesiąc dotyczy tego przepisu. Karta podaje tylko limit przepisu (B9-D3); ACI-500 najwyżej w zdaniu ogólnym.
- Pary zdań: ACI-512 („pH poniżej 4,6, botulinum nie rośnie”) obok ACI-513 („dłużej nie powinno być niebezpieczne”) nie może przejść na inne warzywa w occie: oba dotyczą czosnku w nierozcieńczonym occie lub winie.
- ok-zrodlo tylko z kartą, która przytacza proporcje i limit jednego przepisu oraz uwagę D-027 (c); ocet z etykietą 5% (ACI-018, ACI-509, ACI-516), środkowa półka (ACI-523).
- ryzyko-wysokie wymaga `cardType: warning` (reguła walidatora, catalog/README.md).
- Kandydaci do zmiany wariantu, nie statusu: sour-cherry-v12 (maraschino: jedyny przepis extension, OSU SP 50-492 z 1992, jest do wekowania), carrot-v11 (Carrot Cake Jam, Ball w WSU: wekowanie z dodanym kwasem), horseradish-v02 (sos chrzanowy NCHFP na occie zamiast soku z cytryny), european-mixed-veg-v07 (ocet biały 5% zamiast słodowego).
- Partia 2: 67 pozostałych wariantów, w tym musztardy mustard-v02–v12, syropy ziołowe i kwiatowe, owoce w alkoholu; research partii 1 nie dał dla nich źródła (sekcja 6).
