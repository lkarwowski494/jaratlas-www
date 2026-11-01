# Raport katalogu v0 → v1

Data: 2026-11-01. Katalog: `catalog/catalog-seed.json` 1.0.1. Źródło v0: Słoik `docs/jaratlas/01-katalog-v0.md` (nagłówek: 105 produktów, 1360 wariantów).

## Liczby

| | v0 | v1 |
|---|---|---|
| Produkty | 105 | 105 |
| Pozycje wariantów | 1360 (po parsowaniu 1358) | 1395 aktywnych + 37 wycofanych |
| Rodziny procesów | 0 (wytyczne bez źródeł) | 15 |

| Status v1 | Wariantów |
|---|---|
| ok-zrodlo | 288 |
| do-researchu | 921 |
| ryzyko-wysokie | 139 |
| nie-publikowac | 47 |

| Rodzina | ok | do-res. | ryzyko | nie-publ. |
|---|---|---|---|---|
| (nieustalona) | 0 | 1 | 0 | 0 |
| canned-foods | 50 | 34 | 50 | 30 |
| dairy-cheese | 8 | 76 | 1 | 0 |
| drying | 69 | 46 | 0 | 0 |
| egg-preservation | 1 | 3 | 3 | 0 |
| fermented-beverages | 1 | 24 | 0 | 0 |
| fish-curing-smoking | 9 | 3 | 4 | 1 |
| freezing | 68 | 0 | 0 | 0 |
| koji-soy-ferments | 0 | 28 | 1 | 0 |
| lacto-fermentation | 7 | 186 | 5 | 0 |
| meat-curing-smoking | 4 | 52 | 13 | 0 |
| oil-and-fat | 17 | 26 | 54 | 4 |
| salt-preservation | 2 | 18 | 1 | 0 |
| sweet-preserves | 20 | 155 | 7 | 0 |
| vinegar-making | 7 | 43 | 0 | 0 |
| vinegar-pickling | 25 | 226 | 0 | 12 |

Nowe w v1: 68 wariantów mrożenia (NCHFP) i 6 z rozdzielenia 3 pozycji v0.

## Usunięte (wycofane) warianty

| ID | Nazwa v0 | Powód | Następca |
|---|---|---|---|
| eggplant-v10 | gruziński bakłażan z pastą orzechową | poza zakresem: danie do zjedzenia w ciągu kilku dni, nie przetwór | — |
| tomatillo-v10 | miechunka w czekoladzie | poza zakresem: wyrób cukierniczy (owoc w czekoladzie), nie przetwór utrwalany | — |
| peas-chickpeas-v06 | wodny zakwas z ciecierzycy | poza zakresem: zaczyn piekarski | — |
| peas-chickpeas-v13 | prażona chrupiąca ciecierzyca | poza zakresem: przekąska prażona/pieczona, nie przetwór | — |
| peas-chickpeas-v15 | mąka z ciecierzycy | poza zakresem: mielenie kupnych suchych nasion, nie utrwalanie | — |
| beans-soy-v11 | smalec z białej fasoli z jabłkiem i majerankiem | poza zakresem: pasta kanapkowa na bieżąco | — |
| beetroot-v01 | zakwas buraczany klasyczny | duplikat | fermented-beverages-v06 |
| onion-v12 | cebula prażona domowa | poza zakresem: smażona cebula jako dodatek na bieżąco; jeśli w oleju na zapas, OLE | — |
| capers-v09 | smażone chrupiące kapary w oliwie | poza zakresem: dodatek do potrawy na bieżąco, nie przetwór | — |
| asian-american-mix-v09 | tajskie pikle ajad | poza zakresem: dodatek na bieżąco, nie przetwór do przechowywania | — |
| apple-v01 | żywy ocet jabłkowy z całych jabłek i ze skórek | duplikat | artisanal-vinegars-v01 |
| pear-v03 | żywy ocet gruszkowy (perry vinegar) | duplikat | artisanal-vinegars-v04 |
| raspberry-blackberry-v01 | klasyczny ocet malinowy (macerowany i żywy) | rozdzielony na raspberry-blackberry-v16 i raspberry-blackberry-v17 (dwa procesy w jednej pozycji v0) | raspberry-blackberry-v16 |
| rosehip-rowan-v05 | woda różana domowa | poza zakresem: hydrolat/napar, brak rodziny w słowniku (propozycja w raporcie) | — |
| grapes-v01 | żywy ocet winny czerwony i biały | duplikat | artisanal-vinegars-v02 |
| mango-papaya-v03 | filipińska atchara z zielonej papai | duplikat | asian-american-mix-v05 |
| walnut-nuts-v08 | włoski krem czekoladowo-orzechowy (gianduja) | poza zakresem: wyrób cukierniczy (krem orzechowy), nie typowy przetwór owocowy; do decyzji redakcji | — |
| walnut-nuts-v09 | solone migdały prażone | poza zakresem: prażenie orzechów to krok kulinarny, nie utrwalanie | — |
| walnut-nuts-v10 | orzechy w karmelu | poza zakresem: wyrób cukierniczy, nie przetwór | — |
| koji-ferments-v11 | zakwas chlebowy przyspieszany koji | poza zakresem: zaczyn piekarski | — |
| yogurt-skyr-v05 | turecki ayran (jogurt z wodą i solą) | poza zakresem: napój przygotowywany na bieżąco z gotowego jogurtu | — |
| yogurt-skyr-v13 | lassi mango | poza zakresem: napój podawany od razu, nie przetwór | — |
| kefir-cream-v03 | zsiadłe mleko z mleka niepasteryzowanego lub zaszczepianego | rozdzielony na kefir-cream-v13 i kefir-cream-v14 (dwa procesy w jednej pozycji v0) | kefir-cream-v14 |
| kefir-cream-v12 | napój z serwatki i soku pomarańczowego | poza zakresem: napój mieszany na bieżąco | — |
| quark-acid-cheese-v11 | gzik z rzodkiewką | poza zakresem: danie podawane od razu, nie przetwór | — |
| fresh-brined-cheese-v03 | świeży skrzep (junket) | poza zakresem: deser na bieżąco | — |
| pork-loin-ham-v06 | szynka pieczona w soli | poza zakresem: danie pieczone na bieżąco | — |
| pork-shoulder-neck-v06 | szarpana wieprzowina (pulled pork) wędzona | poza zakresem: danie na bieżąco (barbecue) | — |
| smoked-cooked-sausages-v09 | frankfurterki | duplikat | smoked-cooked-sausages-v08 |
| beef-veal-v14 | sezonowany na sucho rostbef (dry-aged) | poza zakresem: etap przygotowania mięsa, nie przetwór | — |
| sea-fish-v03 | śledzie po kaszubsku z powidłami i koncentratem | poza zakresem: danie z gotowych płatów śledziowych | — |
| sea-fish-v05 | śledzie w śmietanie z jabłkiem | poza zakresem: danie z gotowych płatów śledziowych | — |
| sea-fish-v07 | szwedzkie śledzie w musztardzie i koprze | poza zakresem: danie z gotowych płatów śledziowych | — |
| sea-fish-v08 | łosoś wędzony na zimno (poniżej $25^\circ\text{C}$) oraz na gorąco (stremel) | rozdzielony na sea-fish-v15 i sea-fish-v16 (dwa procesy w jednej pozycji v0) | sea-fish-v16 |
| eggs-v04 | azjatyckie jaja marynowane w sosie sojowym i mirinie (ajitsuke tamago do ramenu) | poza zakresem: dodatek przygotowywany na bieżąco | — |
| eggs-v08 | jajka marynowane po wietnamsku (thit kho) | poza zakresem: danie na bieżąco | — |
| eggs-v10 | domowy majonez na fermentowanym czosnku | poza zakresem: sos przygotowywany na bieżąco | — |

## Przeniesione warianty (proces v0 sprzeczny z bezpieczeństwem albo zmieniona metoda)

Wariant z metodą z v0 przeniesioną do `preservationMethodV0` albo z nazwą v0 zawierającą proces niezalecany (tyndalizacja).

| ID | Nazwa v0 | Metoda v0 | v1: rodzina / metoda / status |
|---|---|---|---|
| cucumber-v09 | przecier na zupę | water-bath | canned-foods / nieustalona / nie-publikowac |
| white-cabbage-v13 | wekowana z grzybami | water-bath | canned-foods / nieustalona / nie-publikowac |
| white-cabbage-v14 | bigos w słoikach | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| red-savoy-cabbage-v07 | czerwona duszona z rodzynkami i cynamonem (wekowana) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| red-savoy-cabbage-v09 | gołąbki w liściach kapusty włoskiej w sosie pomidorowym | water-bath | canned-foods / nieustalona / nie-publikowac |
| napa-cabbage-v13 | kimchi duszone (wekowane) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| cauliflower-v11 | przecier kalafiorowy pasteryzowany | water-bath | canned-foods / nieustalona / nie-publikowac |
| cauliflower-v12 | kalafior w sosie pomidorowym | water-bath | canned-foods / nieustalona / nie-publikowac |
| broccoli-v08 | pesto z brokuła i pestek dyni (pasteryzowane) | water-bath | oil-and-fat / nieustalona / nie-publikowac |
| zucchini-v11 | leczo cukiniowe do słoików | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| zucchini-v12 | kawior z cukinii (ikra) | water-bath | canned-foods / nieustalona / nie-publikowac |
| pattypan-squash-v08 | patisony w sosie pomidorowym | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pattypan-squash-v09 | leczo z patisonem | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pumpkin-v10 | puree dyniowe (tyndalizacja) | water-bath | canned-foods / nieustalona / nie-publikowac |
| leafy-greens-v06 | szpinak duszony z czosnkiem (tyndalizacja) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| vine-leaves-greens-v08 | gołąbki w liściach winogron w słoikach | water-bath | canned-foods / nieustalona / nie-publikowac |
| bell-pepper-v10 | bałkański ajwar | water-bath | canned-foods / nieustalona / do-researchu |
| bell-pepper-v11 | pindżur z pomidorami | water-bath | canned-foods / nieustalona / do-researchu |
| bell-pepper-v12 | ljutenica | water-bath | canned-foods / nieustalona / do-researchu |
| bell-pepper-v13 | baza do leczo | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| bell-pepper-v15 | dżem paprykowy | water-bath | sweet-preserves / nieustalona / do-researchu |
| chili-pepper-v12 | dżem chili z pektyną | water-bath | sweet-preserves / nieustalona / do-researchu |
| eggplant-v08 | pieczony kawior bakłażanowy (ikra) | water-bath | canned-foods / nieustalona / nie-publikowac |
| eggplant-v09 | baba ghanoush pasteryzowane | water-bath | canned-foods / nieustalona / nie-publikowac |
| eggplant-v11 | caponata sycylijska w słoikach | water-bath | canned-foods / nieustalona / do-researchu |
| eggplant-v12 | ajwar z bakłażanem | water-bath | canned-foods / nieustalona / do-researchu |
| eggplant-v13 | w sosie pomidorowym | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| potato-sunchoke-v08 | młode ziemniaki w solance (szybkowar/tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / ok-zrodlo |
| green-beans-v08 | konserwowa w solance (tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / ok-zrodlo |
| green-beans-v12 | duszona z czosnkiem (wekowana) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| peas-chickpeas-v11 | hummus pasteryzowany | water-bath | canned-foods / nieustalona / nie-publikowac |
| peas-chickpeas-v12 | groch z kapustą w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| beans-soy-v07 | fasolka po bretońsku w słoikach (tyndalizacja) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| beans-soy-v10 | meksykańskie refried beans | water-bath | canned-foods / nieustalona / nie-publikowac |
| beetroot-v09 | tarte buraczki zasmażane do słoików | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| carrot-v10 | marchewka z groszkiem (tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / ok-zrodlo |
| garlic-v13 | pasteryzowany krem czosnkowy | water-bath | oil-and-fat / nieustalona / nie-publikowac |
| onion-v10 | cebula duszona w oleju do słoików | water-bath | oil-and-fat / nieustalona / ryzyko-wysokie |
| shallot-pearl-onion-v12 | grecki stifado cebulowy w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| daikon-black-radish-v11 | daikon duszony w bulionie sojowym (wekowany) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| celeriac-celery-v07 | sałatka waldorfska bazowa w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| celeriac-celery-v10 | sok z selera naciowego pasteryzowany | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| parsnip-parsley-v08 | puree z pieczonego pasternaku (tyndalizacja) | water-bath | canned-foods / nieustalona / nie-publikowac |
| asparagus-v06 | białe i zielone szparagi konserwowe w solance (tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / ok-zrodlo |
| asparagus-v08 | krem szparagowy w słoikach | water-bath | canned-foods / nieustalona / nie-publikowac |
| corn-v06 | ziarna kukurydzy w solance (szybkowar/tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / ok-zrodlo |
| corn-v07 | kukurydza w sosie meksykańskim z fasolą | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| corn-v10 | meksykański grzyb kukurydziany huitlacoche w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| capers-v08 | sycylijska caponata z kaparami | water-bath | canned-foods / nieustalona / do-researchu |
| european-mixed-veg-v09 | węgierskie leczo warzywne w słoikach | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| european-mixed-veg-v10 | francuskie ratatouille pasteryzowane | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| european-mixed-veg-v11 | sałatka paprykowo-pieczarkowa w pomidorach | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| balkan-oriental-mix-v10 | marokańska matbucha (pomidory z pieczoną papryką) | water-bath | canned-foods / nieustalona / do-researchu |
| balkan-oriental-mix-v12 | gruzińskie adżapsandali w słoikach | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| elderberry-elderflower-v08 | dżem z owoców czarnego bzu i jabłek | water-bath | sweet-preserves / nieustalona / do-researchu |
| mango-papaya-v08 | gładkie puree z mango (pasteryzowane) | water-bath | canned-foods / nieustalona / do-researchu |
| mango-papaya-v09 | dżem z mango i marakui | water-bath | sweet-preserves / nieustalona / do-researchu |
| pineapple-banana-v06 | dżem ananasowy z wanilią i rumem | water-bath | sweet-preserves / nieustalona / do-researchu |
| fig-pomegranate-v06 | konfitura z fig z orzechami włoskimi i rozmarynem (do serów) | water-bath | sweet-preserves / nieustalona / do-researchu |
| fig-pomegranate-v07 | całe zielone figi w gęstym syropie | water-bath | sweet-preserves / nieustalona / do-researchu |
| fig-pomegranate-v09 | galaretka z granatu | water-bath | sweet-preserves / nieustalona / do-researchu |
| watermelon-melon-v06 | konfitura z białej skórki arbuza z wanilią i cytryną | water-bath | sweet-preserves / nieustalona / do-researchu |
| walnut-nuts-v05 | gruzińskie zielone orzechy włoskie w syropie (kaklis muraba — po moczeniu w wodzie wapiennej) | water-bath | sweet-preserves / nieustalona / do-researchu |
| boletes-v07 | grzyby duszone w maśle klarowanym i tyndalizowane w słoikach | water-bath | oil-and-fat / nieustalona / nie-publikowac |
| boletes-v09 | grzyby wekowane w solance na zupę | water-bath | canned-foods / nieustalona / nie-publikowac |
| boletes-v10 | sos grzybowy w słoikach | water-bath | canned-foods / nieustalona / nie-publikowac |
| chanterelle-milkcap-v09 | kurki duszone w maśle (tyndalizacja) | water-bath | canned-foods / nieustalona / nie-publikowac |
| chanterelle-milkcap-v10 | kurki w solance | water-bath | canned-foods / nieustalona / nie-publikowac |
| chanterelle-milkcap-v11 | kawior grzybowy z maślaków i cebuli | water-bath | canned-foods / nieustalona / nie-publikowac |
| chanterelle-milkcap-v12 | pasztet grzybowy w słoiku | water-bath | canned-foods / nieustalona / nie-publikowac |
| wild-mushrooms-v06 | opieńki duszone z cebulą do słoików (na pierogi i uszka) | water-bath | canned-foods / nieustalona / nie-publikowac |
| wild-mushrooms-v07 | flaczki z boczniaków i kani w słoiku | water-bath | canned-foods / nieustalona / nie-publikowac |
| wild-mushrooms-v08 | gąski w solance | water-bath | canned-foods / nieustalona / nie-publikowac |
| cultivated-mushrooms-v07 | greckie pieczarki à la grecque (w oliwie, białym winie i kolendrze) | water-bath | vinegar-pickling / nieustalona / do-researchu |
| cultivated-mushrooms-v08 | boczniaki w oleju z cebulą i majerankiem | water-bath | oil-and-fat / nieustalona / ryzyko-wysokie |
| cultivated-mushrooms-v10 | pasta truflowo-pieczarkowa (duxelles) pod oliwą | water-bath | oil-and-fat / nieustalona / nie-publikowac |
| pork-loin-ham-v12 | szynka konserwowa w słoiku (tyndalizacja) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pork-loin-ham-v15 | wędzonka ze słoika | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pork-shoulder-neck-v07 | klasyczna tuszonka wieprzowa z łopatki w galarecie (potrójna tyndalizacja w $100^\circ\text{C}$ lub szybkowar/autoklaw w $121^\circ\text{C}$) | (w nazwie) | canned-foods / pressure-canning / do-researchu |
| pork-shoulder-neck-v08 | mielonka wieprzowa słoikowa z peklosolą | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pork-shoulder-neck-v09 | golonka w słoiku w galarecie piwnej | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pork-shoulder-neck-v11 | gulasz wieprzowy wekowany | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pork-shoulder-neck-v13 | galaretka z nóżek (zimne nóżki w słoiku) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| pork-belly-jowl-v08 | boczek pieczony lub parzony w słoiku (tyndalizacja w galarecie) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| smoked-cooked-sausages-v12 | kiełbasa słoikowa (mięso kiełbasiane z peklosolą tyndalizowane bez jelit — „kiełbasa ze słoika”) | water-bath | canned-foods / nieustalona / nie-publikowac |
| beef-veal-v04 | tuszonka wołowa w słoikach (tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / ok-zrodlo |
| beef-veal-v05 | gulasz wołowy wekowany | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| beef-veal-v07 | policzki wołowe w winie w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| poultry-v10 | kurczak w galarecie w słoiku (tyndalizacja) | (w nazwie) | canned-foods / pressure-canning / do-researchu |
| game-lamb-v07 | gulasz myśliwski z jelenia z grzybami i jałowcem (tyndalizacja) | water-bath | canned-foods / nieustalona / nie-publikowac |
| game-lamb-v08 | pasztet z dzika lub zająca z żurawiną wekowany w słoikach | water-bath | canned-foods / nieustalona / nie-publikowac |
| offal-pates-v01 | pasztet wieprzowo-drobiowy pieczony i pasteryzowany w słoikach | water-bath | canned-foods / nieustalona / nie-publikowac |
| offal-pates-v04 | niemiecka wątrobianka (leberwurst) w słoikach i jelitach | water-bath | canned-foods / nieustalona / nie-publikowac |
| offal-pates-v05 | pasztetowa słoikowa z podgardla i wątróbki | water-bath | canned-foods / nieustalona / nie-publikowac |
| offal-pates-v07 | salceson biały i czarny (włoski i ozorkowy — również w wersji z szynkowaru lub słoika) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| offal-pates-v08 | kaszanka domowa z kaszą gryczaną i krwią (parzona oraz słoikowa) | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| offal-pates-v09 | flaczki wołowe w rosole zawekowane w słoikach | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| offal-pates-v10 | ozorki wieprzowe w galarecie w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| offal-pates-v11 | żołądki drobiowe w sosie własnym | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| sea-fish-v12 | kultowy paprykarz szczeciński z ryżem i pomidorami w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| sea-fish-v13 | ryba po grecku zawekowana | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
| freshwater-fish-v09 | karp w galarecie w słoiku | water-bath | canned-foods / nieustalona / ryzyko-wysokie |
