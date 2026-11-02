# E1 suszenie: źródła dla wariantów dry-storage, partia 1 (tor C11, 2026-11-02)

- Rola 06-tresci, build, tryb dzienny bez właściciela. Gałąź `claude/jaratlas-c11-suszenie-zrodla-p1` od `claude/happy-brown-yncplj` = 35b86f3. Zakres: tylko ten plik i `E1-suszenie-zrodla-p1-2026-11-02.json`. Katalog, karty, rejestry i pliki stanu bez zmian; statusy zmienia tor A w partii katalogowej (D-043).
- Wejście: `catalog/catalog-seed.json` (pierwsze 37 z 70 wariantów `dry-storage` + `do-researchu`, od cucumber-v20 do apricot-v14; partia 2 zaczyna od cornelian-cherry-v10), `docs/tresci/rejestr.json` oraz E1-suszenie-twierdzenia (B4), E1-suszenie-luki (C7), E1-suszenie-s7-m (B7): istniejące SUS użyte zamiast duplikatów.
- Format jak C10 (sekcja „format” w .json). Research porcjami: 3 subagenty (A warzywa poza tabelami, B proszki, sole, wędzenie i wyroby specjalne, C kandyzowanie); cytaty i statusy sprawdzone ponownie przeze mnie (sekcja 1), 3 propozycje subagentów zmienione (C11-D9, C11-D13, C11-D4).

## 1. Wynik

Warianty w partii: 37. Proponowany status: ok-zrodlo 2, ryzyko-wysokie 7, zostaje do-researchu 28, nie-publikowac 0. Droga do ok-zrodlo przez minimalną poprawkę nazwy lub zakresu: bell-pepper-v18, celeriac-celery-v11, parsnip-parsley-v10, sour-cherry-v16, apricot-v14; przez duplikat z następcą ok-zrodlo: 6 (sekcja 3).

Nowe twierdzenia: 24 (SUS-300–SUS-323). Krytycznych: 13. Cytaty według szczebla źródła: szczebel 1: 4, szczebel 2: 1, szczebel 3: 22.

Kontrole (dowód):
- cytaty: 70 ciągłych fragmentów cytatów (24 twierdzenia, 27 źródeł-cytatów, 22 adresy) dosłownie w tekście stron pobranych ponownie przeze mnie dziś curl (weryfikuj.py: tekst z HTML albo pdftotext z -layout i bez, normalizacja NFKC, spacji, cudzysłowów i myślników): 0 braków. Wyjątek C11-D3: 2 adresy (UC ANR 8267, MSU HNI50) sprawdzone na plikach subagentów pobranych dziś curl.
- liczby: Każda liczba z twierdzenie_en sprawdzona w tekście źródła: brakują tylko przeliczenia (°C, mm, m, g, l).
- mutacja: weryfikuj.py --mutacja: zmiana pierwszej cyfry w pierwszym cytacie z cyfrą (SUS-302, „125” → „225”) daje 1 błąd.
- przeklad: tools/i18n/niezmienniki.mjs porownaj(en, pl) na 24 parach: 0 różnic (przed poprawką SUS-310 „WWA” 1).
- kolizje_id: git grep SUS-3[0-9][0-9] na 23 gałęziach origin: 0 trafień; w rejestrze i raportach E1-suszenie-* najwyższy SUS-205.
- istniejace: Odwołania do istniejących ID (SUS, SLO-045, SLO-069, ACI-125, NAP-052, NAP-062) sprawdzone w docs/tresci/rejestr.json i E1-suszenie-*.json: 0 brakujących.
- duplikaty: Następcy sprawdzeni w catalog-seed.json: ok-zrodlo – bell-pepper-v17, horseradish-v12, parsnip-parsley-v09, pear-v13, plum-v17, sweet-cherry-v12; warunkowi (do-researchu) – capers-v01, carrot-v15.
- kolejnosc: 37 wariantów = pierwsze 37 z 70 dry-storage + do-researchu w kolejności catalog-seed.json (sprawdzone skryptem).

Najważniejsze dla bezpieczeństwa:
- Domowe wędzenie owoców i warzyw (papryka, gruszki, śliwki): NCHFP ma tylko wyroby mięsne (SUS-309), żywność wędzona to główne źródło WWA (SUS-310) → ryzyko-wysokie; bez wędzenia to duplikaty istniejących wariantów ok-zrodlo.
- Dynia kandyzowana i imbir w syropie: niskokwasowe w cukrze bez procesu (SUS-318, ACI-125) → ryzyko-wysokie.
- Douchi: zatrucie B. cereus z cereulidem (139 osób, SUS-312); kukurydza suszona w domu: aflatoksyny zależne od wilgotności ziarna 13% (SUS-313) i brak odtruwania (SUS-314) → ryzyko-wysokie.
- Miechunka: niedojrzałe owoce, łodygi i liście zawierają toksyny (SUS-301, krytyczne); mąka (także z ciecierzycy) to produkt surowy (SUS-311).
- SLO-069 (owoce kandyzowane: lodówka tydzień albo dosuszyć) stoi na przepisie Missouri „adapted from AllRecipes” (sekcja 7): do oceny przez tor A.

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Adres | HTTP | bajty | sha12 | Uwaga |
|---|---|---|---|---|
| https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-21-Kohlrabi-Preserve_It.pdf | 200 | 2970051 | 6935b621d7e6 | — |
| https://extension.psu.edu/growing-ground-cherries | 200 | 385314 | b79d252b1825 | — |
| https://extension.oregonstate.edu/food/preservation/preserving-tomatillos | 200 | 101164 | 6085db8b19e4 | — |
| https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-39-Tomatillo-Preserve_It.pdf | 200 | 4160112 | e64788e3b78b | — |
| https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-22-Leek-Preserve_It.pdf | 200 | 2671509 | 19c1ca9c2e83 | — |
| https://www.canr.msu.edu/uploads/resources/pdfs/radishes_(hni50).pdf | 200/plik-subagenta | 439556 | 7dfa568366b7 | moje pobranie: 852 B strony Incapsula; cytat sprawdzony na pliku subagenta A pobranym dziś curl (C11-D3) |
| https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-14-Celery-Preseve_It.pdf | 200 | 2702119 | ffd054c01b66 | — |
| https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-41-Turnip_Rutabaga-Preserve_It.pdf | 200 | 2821107 | e0a62d1e0cc6 | — |
| https://apps.chhs.colostate.edu/preservesmart/produce/drying/rutabaga/ | 200 | 19255 | 3a39fd59cdbb | — |
| https://caldwell.ces.ncsu.edu/news/ginger-and-turmeric-tropical-superfoods-for-the-garden/ | 200 | 83272 | 2ba97bf1c2a3 | — |
| https://nchfp.uga.edu/how/cure-smoke | 200 | 55475 | 3d90f3f4dd86 | — |
| https://www.gov.uk/government/publications/benzoapyrene-properties-incident-management-and-toxicology/benzoapyrene-or-pahs-general-information | 200 | 90325 | 34d49275eec4 | — |
| https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know | 200 | 35710 | fb9c48881930 | — |
| https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25188780&rettype=abstract&retmode=text | 200 | 2211 | e98d4234e65a | — |
| https://extension.missouri.edu/g4155 | 200 | 44659 | 3aad8ef3f069 | — |
| https://crops.extension.iastate.edu/cropnews/2012/09/aflatoxin-and-grain-storage | 200 | 43290 | 2b5973848e1c | — |
| https://escholarship.org/content/qt55d9628m/qt55d9628m.pdf | 202/plik-subagenta | 627868 | 66830cf199b1 | moje pobranie: HTTP 202 bez treści; cytaty sprawdzone na pliku subagenta B pobranym dziś curl (C11-D3) |
| https://site.extension.uga.edu/forsyth/have-your-pumpkin-and-eat-it-too/ | 200 | 102101 | 44a479641622 | — |
| https://www.ucanr.edu/sites/default/files/2022-07/369703.pdf | 200 | 402136 | 44826e2e181a | — |
| https://ccfruitandnuts.ucanr.edu/sites/default/files/2021-01/343262.pdf | 200 | 1068429 | f59015262153 | — |
| https://hgic.clemson.edu/factsheet/drying-fruits/ | 200 | 152653 | 178fb3efe46e | — |
| https://plants.ces.ncsu.edu/plants/chaenomeles-japonica/ | 200 | 83204 | 56e17ec28601 | — |

Niedostępne (bez obchodzenia blokad):

| Adres | HTTP | Grupa |
|---|---|---|
| https://nchfp.uga.edu/how/dry/vegetables | 404 | A |
| https://nchfp.uga.edu/publications/uga/uga_dry_fruit.pdf | 404 | A |
| https://extension.usu.edu/preserve-the-harvest/research/drying-vegetables | 404 | A |
| https://www.uaf.edu/ces/publications/database/food/drying-vegetables.php | 000 (brak połączenia) | A |
| https://www.uaf.edu/ces/publications/database/food/drying-fruits-and-vegetables.php | 000 | A |
| https://extension.psu.edu/lets-preserve-drying-vegetables | 404 | A |
| https://extension.umn.edu/preserving-and-preparing/drying-vegetables | 404 | A |
| https://extension.umaine.edu/food-health/2021/09/09/making-dehydrated-cucumber-and-zucchini-chips/ | 000 / WebFetch 503 | A |
| https://www.canr.msu.edu/news/cabbage_and_chinese_cabbage_storage_and_preserving_tips | 200, ale blokada Incapsula (brak treści) | A |
| https://ucanr.edu/node/152083 | 403 | A |
| https://hgic.clemson.edu/chinese-red-noodle-bean-how-to-grow-this-heat-loving-yardlong-bean-in-south-carolina/ | 403 | A |
| https://ask.ifas.ufl.edu/publication/HS1268 | 307 | A |
| https://extension.purdue.edu/foodlink/includes/pubs/Print4perpaper/4VegetablesPrint/4RADISHprint.pdf | 000 | A |
| https://extension.okstate.edu/programs/oklahoma-gardening/recipes/drying-fruits-and-vegetables | 403 | A |
| https://anrcatalog.ucanr.edu/pdf/8267.pdf | 403 | B |
| https://www.cdc.gov/food-safety/foods/flour.html | 403 | B |
| https://www.efsa.europa.eu/en/efsajournal/pub/724 | 403 (curl) / 301→wiley 403 (WebFetch) | B |
| https://efsa.onlinelibrary.wiley.com/doi/pdf/10.2903/j.efsa.2008.724 | 403 | B |
| https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0915 | 202 pusta (także /PDF/ i /eli/reg/2023/915/oj/eng) | B |
| https://www.food.gov.uk/sites/default/files/media/document/CXP_068e.pdf | 404 | B |
| https://www.food.gov.uk/sites/default/files/media/document/research-report-polycyclic-aromatic-hydrocarbons-survey.pdf | 404 | B |
| https://www.bfr.bund.de/cd/201317 | 404 | B |
| https://www.bfr.bund.de/en/faq/polycyclic-aromatic-hydrocarbons-pahs/ | 404 | B |
| https://food.ec.europa.eu/food-safety/chemical-safety/contaminants/catalogue/polycyclic-aromatic-hydrocarbons_en | 404 | B |
| https://ccuh.ucdavis.edu/sites/g/files/dgvnsk1376/files/inline-files/Olive%20Curing-%20Pam%20Geisel.pdf | 403 | B |
| https://ucanr.edu/program/uc-master-food-preserver-program/article/making-and-using-dehydrated-tomato-skins-august | 403 curl (WebFetch 200) | B |
| https://blogs.oregonstate.edu/extendingtheharvest/tag/recipes/ | 000 (brak połączenia) | B |
| https://fses.oregonstate.edu/content/evaluating-polycyclic-aromatic-hydrocarbon-pah-exposure-traditional-native-american-food | 404 | B |
| https://pubs.extension.wsu.edu/drying-fruits-and-vegetables | 403 | C |
| https://www.ndsu.edu/agriculture/sites/default/files/2022-03/fn1587.pdf | 404 | C |
| https://www.extension.uidaho.edu/publishing/pdf/PNW/PNW0397.pdf | 200, ale przekierowanie na katalog publikacji (brak PDF) | C |
| https://ucanr.edu/sites/MFPOC/Food_Preservation/Pumpkins | 404 | C |
| https://www.arboretum.purdue.edu/explorer/plant_genus/chaenomeles-flowering-quince-quince-flowering/ | 000 (brak połączenia) | C |
| https://nchfp.uga.edu/how/make-jam-jelly/candied-fruit | 200, pusta powłoka strony (brak treści) | C |
| https://hgic.clemson.edu/factsheet/drying-fruits/ | 403 – tylko z nagłówkiem User-Agent przeglądarki; zwykły curl: 200 (użyty) | C11 |

## 3. Wariant → status, twierdzenia, uwagi

| Wariant | Nazwa | Rodzina | Status proponowany | Twierdzenia | Minimalna poprawka | Duplikat z | Uwagi dla partii katalogowej | Decyzja |
|---|---|---|---|---|---|---|---|---|
| cucumber-v20 | suszone plastry | drying | zostaje do-researchu | SUS-039, SUS-001, SUS-017, SUS-021 | — | — | Ogórek tylko w zdaniu Clemson „Vegetables to try include … cucumber … chips” (SUS-039); brak wiersza w tabelach CSU, NDSU, MSU, PreserveSmart. Jedyny trop (UMaine, wolontariusz MFP) niedostępny (503). Bez zmian względem E3. | C11-D2 |
| napa-cabbage-v14 | suszone liście | drying | zostaje do-researchu | SUS-108, SUS-200 | — | — | Kapusta pekińska (Brassica rapa) nie ma procedury suszenia; procedury kapusty głowiastej (SUS-108) nie przenoszę (B7-D5). Artykuł MSU Michigan o kapuście pekińskiej zablokowany (Incapsula). | C11-D2 |
| napa-cabbage-v15 | puder kimchi | drying | zostaje do-researchu | SUS-040 | — | — | Puder z suszonego kimchi: brak procedury szczebla 1–3 (tylko badania liofilizacji i blogi). SUS-040 dotyczy proszków z warzyw świeżych, nie z produktu fermentowanego (często z sosem rybnym). | C11-D2 |
| brussels-kohlrabi-v12 | chipsy z suszonej kalarepy | drying | zostaje do-researchu | SUS-300, SUS-121 | Brak drogi do ok-zrodlo w suszeniu; propozycja dla toru A: wycofać wariant albo zastąpić mrożeniem (osobny research). | — | SDSU (za NCHFP): suszenia kalarepy się nie zaleca (SUS-300); MSU: „Fair” bez procedury. Powód nie jest podany (prawdopodobnie jakość): bez podstaw do ryzyko-wysokie. | C11-D2 |
| pumpkin-v14 | dynia kandyzowana | sweet-preserves | ryzyko-wysokie | SUS-318, SLO-045, SLO-069 | Brak przepisu na dynię kandyzowaną; jedyne formy ze źródłem to suszona dynia (pumpkin-v15) i mrożenie. Wariant bez drogi do ok-zrodlo. | — | Dynia niskokwasowa (SLO-045); brak przetestowanej metody przechowywania przetworów z dyni w temperaturze pokojowej (SUS-318, NCHFP, UGA). Kandyzowanie w syropie trzymane poza lodówką to niskokwasowy produkt bez procesu. SLO-069 (lodówka 1 tydzień albo dosuszyć) opiera się na przepisie Missouri „adapted from AllRecipes” (sekcja 9). | C11-D5 |
| tomato-v18 | puder ze skórek | drying | zostaje do-researchu | SUS-040, SUS-202 | Po potwierdzeniu dosłownym artykułu UC MFP o skórkach pomidorów (sekcja 6) możliwe ok-zrodlo bez zmiany nazwy. | — | UC Master Food Preserver (UC ANR, 2025): skórki suszone 135°F 6–12 h i mielone – pasuje 1:1, ale curl 403, treść tylko przez WebFetch („z odczytu narzędziem, niesprawdzony dosłownie”); autorka wolontariuszka MFP (szczebel 3/4 do ustalenia). 135°F < 140°F (SUS-001). | C11-D4 |
| bell-pepper-v18 | wędzona mielona | drying | ryzyko-wysokie | SUS-309, SUS-310, SUS-113, SUS-134, SUS-135 | Usunąć wędzenie: „papryka suszona mielona” = bell-pepper-v17 (paski, SUS-113) + mielenie na proszek (SUS-135) → ok-zrodlo. | bell-pepper-v17 | Suszenie i mielenie papryki mają źródła; domowe wędzenie owoców i warzyw nie ma procedury szczebla 1 (SUS-309), a żywność wędzona jest głównym źródłem WWA (SUS-310). | C11-D6 |
| potato-sunchoke-v11 | chipsy z suszonego topinamburu | drying | zostaje do-researchu | — | — | — | Topinambur nie ma procedury suszenia (tylko pikle NCHFP i przechowywanie świeże); procedury ziemniaka nie przenoszę (C7-D6, B7-D5). | C11-D2 |
| potato-sunchoke-v13 | skrobia domowa | drying | zostaje do-researchu | — | Propozycja dla roli 03/toru A: usunąć jako poza zakresem (ekstrakcja skrobi, nie utrwalanie). | — | Brak procedury szczebla 1–3 na domową skrobię ziemniaczaną (tylko blogi, dokument KALRO). | C11-D2 |
| tomatillo-v11 | suszona miechunka (złote jagody) | drying | zostaje do-researchu | SUS-301, SUS-302 | Nazwa: wariant opisuje miechunkę (Physalis, złote jagody), nie tomatillo – zmiana nazwy lub produktu do toru A. Jeśli zostaje: requiredWarnings SUS-301 (tylko dojrzałe owoce). | — | Penn State: „Dry them like raisins” bez procedury; ostrzeżenie o toksynach w niedojrzałych owocach, łodygach i liściach (SUS-301, krytyczne). Dla tomatillo (P. philadelphica) OSU i SDSU/NCHFP są sprzeczne (SUS-302). | C11-D2 |
| green-beans-v14 | chińska fasolka suszona | drying | zostaje do-researchu | SUS-111, SUS-182 | Zmiana na fasolkę szparagową = green-beans-v13 (inny gatunek; zmienia tożsamość wariantu). | — | Fasolka długostrąkowa (Vigna unguiculata subsp. sesquipedalis) nie ma procedury; nie przenoszę procedury Phaseolus (B7-D5). Strona Clemson o yardlong bean: 403. | C11-D2 |
| peas-chickpeas-v15 | mąka z ciecierzycy | drying | zostaje do-researchu | SUS-311 | Jeśli wariant zostaje: requiredWarnings SUS-311 (mąka tylko po ugotowaniu lub upieczeniu). | — | Brak procedury mielenia suchej ciecierzycy w źródłach szczebla 1–3. FDA: mąka to produkt surowy (SUS-311). Lektyny: Bad Bug Book opisuje tylko fasolę Phaseolus (sekcja 7), nie przenoszę. | C11-D2 |
| beans-soy-v05 | czarna fasola fermentowana z imbirem (douchi) | koji-soy-ferments | ryzyko-wysokie | SUS-312, NAP-062, NAP-052 | — | — | Brak domowej przetestowanej procedury douchi (NAP-062: tylko proces najbliższy). Spontaniczna fermentacja gotowanej soi: udokumentowane zatrucie B. cereus z cereulidem (139 osób) z douchi (SUS-312, szczebel 2); NAP-052: Bacillus w gotowanym ziarnie. | C11-D7 |
| carrot-v15 | suszona włoszczyzna | drying | zostaje do-researchu | SUS-127, SUS-303, SUS-305, SUS-040 | Skład tylko z warzyw z procedurą, każde suszone osobno według własnej procedury i mieszane po wysuszeniu: marchew i pasternak (SUS-127), seler naciowy (SUS-305); bez korzenia pietruszki i selera korzeniowego. Por (SUS-303) dopiero po rozstrzygnięciu leek-chives-v11. | — | Korzeń pietruszki i seler korzeniowy nie mają procedury szczebla 1–3; pasternak to inny gatunek niż pietruszka korzeniowa. | C11-D8 |
| leek-chives-v11 | suszone krążki pora do zup | drying | zostaje do-researchu | SUS-303, SUS-017, SUS-114 | ok-zrodlo, gdy znajdzie się źródło z czasem i testem suchości dla pora albo tor A przyjmie SUS-017 (do stanu łamliwego) jako ogólny test dla warzyw. | — | SDSU podaje krojenie i 145°F, bez czasu, testu suchości i blanszowania (SUS-303). Najbliższa cebula (SUS-114) jest blanszowana 4 min wg B4-D2; dla pora nie ma czasu blanszowania w źródle. | C11-D9 |
| daikon-black-radish-v12 | koreańskie suszone paski rzodkwi (mumallaengi) | drying | zostaje do-researchu | SUS-304, SUS-038, SUS-003 | — | — | Brak procedury dla daikonu; MSU Michigan i Montana nie zalecają utrwalania rzodkiewek (powód: woda, jakość). Tradycyjne suszenie mumallaengi na słońcu: dla warzyw niezalecane (SUS-003) – karta, jeśli kiedyś powstanie, tylko suszarka. | C11-D2 |
| daikon-black-radish-v14 | chipsy z rzodkwi | drying | zostaje do-researchu | SUS-304, SUS-038 | — | — | Chipsy z rzodkwi: brak procedury; SUS-038 i SUS-304 (jakość). | C11-D2 |
| horseradish-v11 | suszony korzeń chrzanu w plastrach | drying | zostaje do-researchu | SUS-129, SUS-130 | Zmiana formy na „tarty”, suszony do proszku (SUS-129) = horseradish-v12 → duplikat. | horseradish-v12 | CSU Table 2, PreserveSmart, MSU i UC ANR opisują tylko chrzan tarty (B7-D5). | C11-D10 |
| celeriac-celery-v11 | suszony seler korzeniowy i naciowy | drying | zostaje do-researchu | SUS-305 | Ograniczyć do selera naciowego (łodygi i liście): SUS-305 → ok-zrodlo; seler korzeniowy usunąć. | — | Seler naciowy ma procedurę (SDSU, SUS-305; także CSU PreserveSmart); bulwa selera nie ma procedury szczebla 1–3 (tylko prace o suszeniu przemysłowym). | C11-D8 |
| celeriac-celery-v12 | sól selerowa domowa | drying | zostaje do-researchu | SUS-040, SUS-305 | — | — | Sól selerowa: proszek selerowy ma wzmiankę (SUS-040), ale mieszanie z solą bez procedury. Clemson „Finishing Salts” obejmuje tylko wymienione zioła (sekcja 7). | C11-D11 |
| parsnip-parsley-v10 | suszona natka i korzeń | drying | zostaje do-researchu | SUS-127, SUS-076, SUS-079, SUS-081 | Rozdzielić: natka pietruszki według NCHFP Herbs (SUS-076–084) → ok-zrodlo; pasternak = parsnip-parsley-v09 (SUS-127); korzeń pietruszki usunąć. | parsnip-parsley-v09 | Korzeń pietruszki (Petroselinum crispum var. tuberosum) nie ma procedury; procedury pasternaka nie przenoszę. | C11-D8 |
| turnip-rutabaga-v10 | suszona rzepa | drying | ok-zrodlo | SUS-306, SUS-307, SUS-017, SUS-021, SUS-001 | Brzmienie karty: blanszowanie 5 minut (górna granica SDSU 3–5 min, w zakresie PreserveSmart dla brukwi powyżej 5000 stóp; C11-D12), 140°F, do stanu łamliwego (SUS-307, SUS-017). | — | SDSU S-0001-41 (źródło: NCHFP) dla rzepy i brukwi: kawałki 1/4–1/2 cala, blanszowanie 3–5 min, 140°F, 10–12 h; CSU PreserveSmart dla brukwi: test „brittle”. Zastępuje podstawę E3 (zdanie Clemson o chipsach, SUS-039). | C11-D12 |
| corn-v11 | suszone ziarna na nixtamalizację | drying | ryzyko-wysokie | SUS-313, SUS-314 | Droga: zawęzić do kupnego suchego ziarna (bez domowego suszenia) – zmienia metodę wariantu. | — | Brak procedury domowego suszenia ziarna kukurydzy zwykłej; jedyna procedura extension dotyczy popcornu (sekcja 7). Aflatoksyny zależą od wilgotności ziarna (13% do przechowywania, SUS-313), której w domu nie zmierzy się bez przyrządu; nie ma zatwierdzonego odtruwania (SUS-314). | C11-D13 |
| olives-v14 | suszone oliwki | drying | ok-zrodlo | SUS-315, SUS-316, SUS-003 | Brzmienie karty: tylko dojrzałe czarne oliwki z obróbką UC ANR (3 min wrzątek, 3 dni w solance) albo oliwki już ługowane; tylko suszarka 140°F (bez słońca); przechowywanie 3–4 miesiące w chłodzie, rok w lodówce lub zamrażarce. | — | UC ANR 8267 „Drying Olives” daje pełną procedurę od świeżych dojrzałych oliwek (SUS-315, SUS-316). Wersja „w soli na sucho” to olives-v08 (SUS-317, poza partią). | C11-D14 |
| capers-v10 | kapary suszone do młynka z solą | drying | zostaje do-researchu | — | — | capers-v01 (warunkowo) | Brak procedury szczebla 1–3 dla kaparów solonych i suszonych (tylko serwisy kulinarne). Etap solenia jak capers-v01 (też do-researchu). | C11-D2 |
| ginger-turmeric-v09 | imbir kandyzowany w syropie (stem ginger) i na sucho | sweet-preserves | ryzyko-wysokie | SUS-319, ACI-125, SLO-069 | Usunąć formę w syropie i kurkumę; zostaje imbir kandyzowany na sucho według UCCE (SUS-319) – po poprawce do-researchu (przepis powiatowy bez czasu przechowywania). | — | Imbir niskokwasowy (pH 5,60–5,90, ACI-125); forma w syropie (stem ginger) bez źródła szczebla 1–3. Analogia C10-D9 (imbir w cukrze lub miodzie: ryzyko-wysokie). | C11-D5 |
| ginger-turmeric-v15 | suszony imbir i kurkuma | drying | zostaje do-researchu | SUS-308, ACI-125 | — | — | Jedyne źródło (artykuł powiatowy NC State, SUS-308) bez temperatury, czasu i testu suchości. | C11-D2 |
| european-mixed-veg-v13 | domowa jarzynka z solą (vegeta) | drying | zostaje do-researchu | SUS-040 | Przeformułować na mieszankę osobno wysuszonych i zmielonych warzyw z procedurą, z solą dodaną po wysuszeniu – nadal bez procedury dla mieszanki (decyzja toru A). | — | Brak procedury na warzywa z solą suszone razem; Clemson „Finishing Salts” dotyczy tylko wymienionych ziół, a sól zmienia suszenie (sekcja 7). | C11-D11 |
| european-mixed-veg-v14 | susz warzywny do bulionu | drying | zostaje do-researchu | SUS-127, SUS-305, SUS-040 | Jak carrot-v15: skład tylko z warzyw z procedurą, każde suszone osobno. | carrot-v15 (warunkowo) | Mieszanka bez ustalonego składu; po poprawce taka sama jak carrot-v15 – zostawić jeden z dwóch wariantów. | C11-D8 |
| balkan-oriental-mix-v13 | bałkańska szarena sól z ziołami | drying | zostaje do-researchu | SUS-031, SUS-076, SUS-135 | Mieszanka suchych składników z procedurą (zioła NCHFP, papryka SUS-113/135) i soli dodanej po wysuszeniu – decyzja toru A, czy samo mieszanie wymaga procedury. | — | Szarena sól (cząber, kozieradka, papryka, sól): brak procedury; kozieradki brak w źródłach suszenia. | C11-D11 |
| pear-v14 | gruszki wędzone | drying | ryzyko-wysokie | SUS-309, SUS-310, SUS-089, SUS-090 | Usunąć wędzenie: gruszki suszone (SUS-089, SUS-090) = pear-v13 → duplikat. | pear-v13 | Domowe wędzenie owoców bez procedury szczebla 1 (SUS-309), WWA (SUS-310). | C11-D6 |
| quince-v12 | kandyzowana pigwa | sweet-preserves | zostaje do-researchu | SLO-069 | — | — | Brak przepisu na kandyzowaną pigwę (Cydonia) szczebla 1–3; Missouri hes173 ogólny (sekcja 9), lista syrup-blanching Clemson bez pigwy. | C11-D2 |
| quince-v13 | suszone owoce pigwowca | drying | zostaje do-researchu | SUS-323 | — | — | Owoce pigwowca jadalne (SUS-323), ale brak procedury suszenia i danych o nasionach. | C11-D2 |
| plum-v18 | śliwki wędzone dymem owocowym | drying | ryzyko-wysokie | SUS-309, SUS-310, SUS-100 | Usunąć wędzenie: śliwki suszone (SUS-100) = plum-v17 → duplikat. | plum-v17 | Suska sechlońska: suszenie w dymie bez procedury domowej (SUS-309), WWA (SUS-310). Rozporządzenie UE 2023/915 niedostępne. | C11-D6 |
| sour-cherry-v16 | kandyzowane wiśnie | sweet-preserves | zostaje do-researchu | SUS-320, SUS-321, SUS-102, SLO-069 | Zmiana nazwy na „wiśnie suszone po blanszowaniu w syropie” (Clemson: produkt „similar to candied fruit”; SUS-320, SUS-321) → ok-zrodlo. | — | Brak przepisu na wiśnie kandyzowane; Clemson daje dla wiśni kwaśnych syrop 10 min i suszenie 8–12 h. | C11-D15 |
| sweet-cherry-v11 | kandyzowane czereśnie | sweet-preserves | zostaje do-researchu | SUS-321, SUS-102, SLO-069 | Zmiana na czereśnie suszone (SUS-102) = sweet-cherry-v12 → duplikat; kandyzowania czereśni brak w źródłach. | sweet-cherry-v12 | Clemson podaje syrop tylko „for sour cherries” (SUS-321), nie przenoszę na czereśnie. | C11-D15 |
| apricot-v14 | glazurowane morele | sweet-preserves | zostaje do-researchu | SUS-320, SUS-322, SUS-093, SLO-069 | Zmiana nazwy na „morele suszone po blanszowaniu w syropie” (SUS-320, SUS-322) → ok-zrodlo. | — | Glacé (wielodniowe zagęszczanie syropu, glazura) nie ma źródła; Clemson ma morele na liście syrup-blanching (10 min, 24–36 h). | C11-D15 |

## 4. Twierdzenia SUS-300–SUS-323 (do wklejenia przez tor A)

### SUS-300

- PL: Według SDSU Extension, powołującej się na NCHFP, suszenia kalarepy się nie zaleca.
- EN: According to SDSU Extension, citing NCHFP, drying kohlrabi is not recommended.
- Źródło (szczebel 3, pdftotext+grep, sha12 6935b621d7e6): https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-21-Kohlrabi-Preserve_It.pdf — SDSU Extension, Preserve It! Kohlrabi (S-0001-21), kolumna Drying. Cytat: „The National Center for Home Food Preservation does not recommend drying kohlrabi.”
- Warianty: brussels-kohlrabi-v12; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Arkusz nie podaje powodu. MSU daje kalarepie ocenę „Fair” (SUS-121): obie oceny bez procedury.

### SUS-301 (krytyczne)

- PL: Niedojrzałe owoce miechunki (Physalis, złote jagody) oraz jej łodygi i liście zawierają toksyny, jak u innych roślin psiankowatych; je się tylko owoce dojrzałe.
- EN: Unripe ground cherry (Physalis) fruits and the plant’s stems and leaves contain toxins, as in other nightshade plants; only ripe fruits are eaten.
- Źródło (szczebel 3, curl+grep, sha12 b79d252b1825): https://extension.psu.edu/growing-ground-cherries — Penn State Extension, Growing Ground Cherries; How do you prepare ground cherries to eat?. Cytat: „Dry them like raisins. Warning: Like other nightshade plants, the unripe fruits of ground cherries, as well as their stems and leaves, contain toxins.”
- Uproszczenie: „Je się tylko owoce dojrzałe” to wniosek redakcji z ostrzeżenia (źródło nie podaje tego zdania wprost).
- Warianty: tomatillo-v11; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: „Dry them like raisins” nie jest procedurą (brak obróbki, temperatury, czasu, testu).

### SUS-302

- PL: Według Oregon State Extension tomatillo kroi się w plastry ok. 1/4 cala (ok. 6 mm) i suszy w 125–135°F (ok. 52–57°C) do całkowitej suchości bez kieszeni wilgoci; SDSU Extension (za NCHFP) pisze, że suszenia tomatillo się nie zaleca.
- EN: According to Oregon State Extension, tomatillos are sliced about 1/4 inch (about 6 mm) thick and dried at 125–135°F (about 52–57°C) until completely dry with no moisture pockets; SDSU Extension (citing NCHFP) states that drying tomatillos is not recommended.
- Źródło (szczebel 3, curl+grep, sha12 6085db8b19e4): https://extension.oregonstate.edu/food/preservation/preserving-tomatillos — Oregon State University Extension, Preserving tomatillos; Drying. Cytat: „Slice tomatillos about ¼ inch thick OR they can be chopped or diced. … Dehydrate 125 -135⁰F until tomatillos are completely dry with no moisture pockets.”
- Źródło (szczebel 3, pdftotext+grep, sha12 e64788e3b78b): https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-39-Tomatillo-Preserve_It.pdf — SDSU Extension, Preserve It! Tomatillo (S-0001-39), kolumna Drying. Cytat: „The National Center for Home Food Preservation does not recommend drying tomatillos.”
- Warianty: tomatillo-v11; jedno źródło: nie; ważne do 2027-11-02.
- Uwaga: Sprzeczne na tym samym szczeblu (3); 125–135°F jest poniżej 140°F z SUS-001. Dotyczy Physalis philadelphica, nie złotych jagód z wariantu: tylko kontekst. Status do weryfikatora: sprzeczne.

### SUS-303

- PL: Według SDSU Extension por do suszenia: odciąć korzenie, umyć, kroić w plastry 1/4 cala (ok. 6 mm), ustawić suszarkę na 145°F (ok. 63°C) i układać plastry w jednej warstwie.
- EN: According to SDSU Extension, leeks for drying: trim off the roots, wash, cut 1/4 inch (about 6 mm) slices, set the dehydrator at 145°F (about 63°C) and arrange the slices in a single layer.
- Źródło (szczebel 3, pdftotext+grep, sha12 19c1ca9c2e83): https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-22-Leek-Preserve_It.pdf — SDSU Extension, Preserve It! Leek (S-0001-22), kolumna Drying. Cytat: „Trim off roots … Wash … Cut ¼ inch slices … Set dehydrator at 145 degrees F … Arrange slices in single layer on drying racks”
- Warianty: leek-chives-v11, carrot-v15, european-mixed-veg-v14; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Arkusz nie podaje czasu, blanszowania ani testu suchości; stopka: materiał uzupełniający, nie przewodnik dla początkujących. Kopia na extension.illinois.edu identyczna.

### SUS-304

- PL: Według Michigan State University Extension rzodkiewek (ulotka obejmuje też typ daikon) nie zaleca się utrwalać, także mrozić, z powodu dużej zawartości wody.
- EN: According to Michigan State University Extension, radishes (the leaflet also covers the daikon type) are not recommended for preserving, including freezing, because of their high water content.
- Źródło (szczebel 3, pdftotext+grep, sha12 7dfa568366b7): https://www.canr.msu.edu/uploads/resources/pdfs/radishes_(hni50).pdf — Michigan State University Extension, Michigan Fresh: Radishes (HNI50); How to preserve. Cytat: „Radishes are not recommended for preserving, including freezing, because of their high water content.”
- Uproszczenie: Powód jakościowy (woda), nie bezpieczeństwa; uzupełnia SUS-038.
- Warianty: daikon-black-radish-v12, daikon-black-radish-v14; jedno źródło: tak; ważne do 2027-11-02.

### SUS-305

- PL: Według SDSU Extension łodygi selera naciowego kroi się w paski 1/2 cala (ok. 13 mm), blanszuje 2 minuty we wrzątku lub parze i suszy 10–16 godzin, zależnie od wielkości pasków.
- EN: According to SDSU Extension, celery stalks are cut into 1/2 inch (about 13 mm) strips, blanched in boiling water or steam for 2 minutes and dried for 10–16 hours, depending on the size of the strips.
- Źródło (szczebel 3, pdftotext+grep, sha12 ffd054c01b66): https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-14-Celery-Preseve_It.pdf — SDSU Extension, Preserve It! Celery (S-0001-14), kolumna Drying. Cytat: „Trim and cut stalks into ½ inch strips … Place in boiling water or steam for 2 minutes … Dry 10-16 hours, depending on size of strips”
- Warianty: celeriac-celery-v11, carrot-v15; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Seler naciowy; selera korzeniowego (bulwy) nie ma w żadnym źródle szczebla 1–3.

### SUS-306 (krytyczne)

- PL: Według SDSU Extension (źródło: NCHFP) rzepę i brukiew do suszenia: zdjąć nać, obrać, kroić na kawałki grubości 1/4–1/2 cala (ok. 6–13 mm), blanszować 3–5 minut, suszyć w suszarce w 140°F (60°C) w jednej warstwie 10–12 godzin.
- EN: According to SDSU Extension (source: NCHFP), turnips and rutabagas for drying: remove the tops, peel, cut into 1/4–1/2 inch (about 6–13 mm) thick pieces, blanch for 3–5 minutes and dry in a dehydrator at 140°F (60°C) in a single layer for 10–12 hours.
- Źródło (szczebel 3, pdftotext+grep, sha12 e0a62d1e0cc6): https://extension.sdstate.edu/sites/default/files/2024-04/S-0001-41-Turnip_Rutabaga-Preserve_It.pdf — SDSU Extension, Preserve It! Turnip/Rutabaga (S-0001-41), Drying, Process: Electric Dehydrator. Cytat: „Remove tops, peel and cut into ¼-½ inch … thick pieces … Blanch for 3-5 minutes … Set dehydrator to 140 degrees F … Arrange strips in single layer on drying racks … Dry 10-12 hours”
- Warianty: turnip-rutabaga-v10; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Arkusz ma w tytule „Turnip/Rutabaga”, w tekście „Dried turnips”; stopka: Source: National Center for Home Food Preservation.

### SUS-307 (krytyczne)

- PL: Według CSU Extension (PreserveSmart) brukiew do suszenia: umyć, zdjąć nać, obrać, kroić w plastry 1/4–1/2 cala (ok. 6–13 mm), blanszować 3 1/2–4 1/2 minuty (poniżej 5000 stóp, ok. 1500 m; wyżej 4 1/2–5 1/2 minuty), suszyć w 140°F (60°C), aż będzie łamliwa.
- EN: According to CSU Extension (PreserveSmart), rutabagas for drying: wash, remove tops and peel, cut into 1/4–1/2 inch (about 6–13 mm) slices, blanch for 3 1/2–4 1/2 minutes (below 5,000 ft, about 1500 m; above, 4 1/2–5 1/2 minutes) and dry at 140°F (60°C) until brittle.
- Źródło (szczebel 3, curl+grep, sha12 3a39fd59cdbb): https://apps.chhs.colostate.edu/preservesmart/produce/drying/rutabaga/ — Colorado State University Extension, PreserveSmart: Drying Rutabaga; kroki 3–4. Cytat: „Wash, remove tops and peel. Cut into slices 1/4-1/2" thick. … Below 5,000 ft. 5,000 ft. and above 3 1/2-4 1/2 minutes 4 1/2-5 1/2 minutes … Dry at 140 ° F in an oven or dehydrator. … Dried rutabagas should be brittle.”
- Warianty: turnip-rutabaga-v10; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: C7-D10: PreserveSmart i CSU Table 2 to różne źródła CSU; brukwi nie ma w Table 2, więc nie ma konfliktu.

### SUS-308

- PL: Według artykułu NC State Extension (Caldwell County) imbir i kurkumę do suszenia kroi się na kawałki 1–2 cale (ok. 2,5–5 cm) i suszy w suszarce do pełnej suchości; kurkumę przed suszeniem gotuje się 45 minut.
- EN: According to an NC State Extension article (Caldwell County), ginger and turmeric for drying are cut into 1–2 inch (about 2.5–5 cm) pieces and dried in a food dehydrator until very dry; turmeric is boiled for 45 minutes before drying.
- Źródło (szczebel 3, curl+grep, sha12 2ba97bf1c2a3): https://caldwell.ces.ncsu.edu/news/ginger-and-turmeric-tropical-superfoods-for-the-garden/ — NC State Extension, Caldwell County Center: Ginger and Turmeric: Tropical Superfoods for the Garden; akapit o przechowywaniu. Cytat: „To dry, cut into 1-2” pieces and place in a food dehydrator until very dry. … Turmeric should be boiled for 45 minutes before dried.”
- Warianty: ginger-turmeric-v15; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Artykuł powiatowy bez temperatury suszarki, czasu i testu suchości: nie wystarcza do karty.

### SUS-309 (krytyczne)

- PL: NCHFP w dziale „Curing & Smoking” opisuje tylko wyroby z mięsa (wieprzowina: boczek, szynka, kiełbasa); nie ma tam przetestowanej domowej procedury wędzenia owoców ani warzyw.
- EN: In its “Curing & Smoking” section NCHFP covers only meat products (pork: bacon, ham, sausage); it has no tested home procedure for smoking fruits or vegetables.
- Źródło (szczebel 1, curl+grep, sha12 3d90f3f4dd86): https://nchfp.uga.edu/how/cure-smoke — NCHFP, Curing & Smoking; menu działu i wstęp. Cytat: „Curing & Smoking Pork Bacon Ham Sausage … Once cured, the meats are subjected to the gentle, controlled application of smoke, which imparts a rich, smoky taste and acts as an additional preservative.”
- Uproszczenie: Twierdzenie o braku: oparte na zawartości działu w dniu odczytu.
- Warianty: bell-pepper-v18, pear-v14, plum-v18; jedno źródło: nie; ważne do 2027-11-02.
- Uwaga: Szukane także: extension „smoking fruit”, „cold smoking” (sekcja 6).

### SUS-310 (krytyczne)

- PL: Według brytyjskiej agencji UKHSA żywność jest głównym źródłem narażenia ogółu ludzi na wielopierścieniowe węglowodory aromatyczne, które występują głównie w żywności wędzonej lub przyrządzanej przez grillowanie i smażenie; benzo(a)piren IARC klasyfikuje jako rakotwórczy dla ludzi.
- EN: According to the UK agency UKHSA, food is the major source of exposure to PAHs for the general public, found mainly in food that has been smoked or cooked by charbroiling, grilling and frying; IARC classifies benzo(a)pyrene as causing cancer in humans.
- Źródło (szczebel 1, curl+grep, sha12 34d49275eec4): https://www.gov.uk/government/publications/benzoapyrene-properties-incident-management-and-toxicology/benzoapyrene-or-pahs-general-information — UKHSA, Benzo(a)pyrene or PAHs: general information; Exposure to PAHs; PAHs and cancer. Cytat: „For the general public, food is the major source of exposure to PAHs . PAHs largely found in food that has been smoked or cooked using methods such as in charbroiling, grilling and frying. … BaP has been classified by the International Agency for Research on Cancer ( IARC ) as causing cancer in humans.”
- Warianty: bell-pepper-v18, pear-v14, plum-v18; jedno źródło: nie; ważne do 2027-11-02.
- Uwaga: Urząd (UKHSA) jako szczebel 1, analogia C10-D13 (BfR). Rozporządzenie UE 2023/915 (limity WWA) niedostępne (eur-lex 202).

### SUS-311 (krytyczne)

- PL: Według FDA mielenie ziarna na mąkę nie zabija bakterii chorobotwórczych, a domowa obróbka mąki może nie zabić wszystkich bakterii i nie czyni jej bezpieczną do jedzenia na surowo.
- EN: According to FDA, processing raw grains into flour does not kill harmful bacteria, and home treatments of flour may not kill all bacteria and do not make it safe to eat raw.
- Źródło (szczebel 1, curl+grep, sha12 fb9c48881930): https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know — FDA, Handling Flour Safely: What You Need to Know. Cytat: „Processing raw grains into flour does not kill harmful bacteria. … Home treatments of flour may not effectively kill all bacteria and do not make it safe to eat raw.”
- Uproszczenie: Źródło mówi o mące ze zbóż (grains); zastosowanie do mąki z ciecierzycy to uproszczenie kierunkowo zgodne (surowy produkt rolny).
- Warianty: peas-chickpeas-v15; jedno źródło: nie; ważne do 2027-11-02.

### SUS-312 (krytyczne)

- PL: Douchi (fermentowana czarna soja) było przyczyną zatrucia Bacillus cereus u 139 osób w Chinach; szczepy wyizolowano z wymiocin i z niegotowanego douchi, dwa wytwarzały toksynę wymiotną cereulid.
- EN: Douchi (fermented black soybeans) caused a Bacillus cereus outbreak in China involving 139 persons; the strains were isolated from vomit and from unprepared douchi, and two of them produced the emetic toxin cereulide.
- Źródło (szczebel 2, curl+grep, sha12 e98d4234e65a): https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25188780&rettype=abstract&retmode=text — PubMed 25188780: Zhou i in., Foodborne Pathogens and Disease 2014; abstrakt. Cytat: „The outbreak involved 139 persons who had nausea, vomiting, and diarrhea. … The strains were isolated from vomit and the unprepared douchi. Two of the strains produced the emetic toxin cereulide”
- Warianty: beans-soy-v05; jedno źródło: nie; ważne do 2027-11-02.
- Uwaga: Szczebel 2 (recenzowane, D-013: jedno wystarcza). Rejestr docelowy może być NAP (NAP-052 Bacillus); numer SUS z puli C11, do przeniesienia przez koordynatora.

### SUS-313 (krytyczne)

- PL: Wilgotność ziarna jest najważniejszym czynnikiem rozwoju pleśni wytwarzających aflatoksyny w przechowywanej kukurydzy; ziarno do długiego przechowywania suszy się do 13% wilgotności, a aflatoksyny powstają najszybciej w 75–95°F (ok. 24–35°C) przy wilgotności ziarna powyżej 18%.
- EN: Moisture content is the most important factor in the growth of aflatoxin-producing molds in stored corn; grain for long-term storage is dried to 13 percent moisture, and aflatoxin production is optimal at 75–95°F (about 24–35°C) with moistures greater than 18 percent.
- Źródło (szczebel 3, curl+grep, sha12 3aad8ef3f069): https://extension.missouri.edu/g4155 — University of Missouri Extension, G4155 Aflatoxins in Corn; przechowywanie i ramka Management practices. Cytat: „Moisture content is the most important variable affecting growth of aflatoxin-producing molds in stored corn. … Grain going into long-term storage should be dried to 13 percent moisture.”
- Źródło (szczebel 3, curl+grep, sha12 2b5973848e1c): https://crops.extension.iastate.edu/cropnews/2012/09/aflatoxin-and-grain-storage — Iowa State University Extension, ICM News 2012: Aflatoxin and Grain Storage. Cytat: „The optimum temperature for aflatoxin production is 75-95F with moistures greater than 18 percent.”
- Warianty: corn-v11; jedno źródło: nie; ważne do 2027-11-02.
- Uwaga: Wilgotności ziarna w domu nie da się zmierzyć bez wilgotnościomierza (wniosek redakcji, bez źródła).

### SUS-314 (krytyczne)

- PL: Według University of Missouri Extension nie ma zatwierdzonej przez FDA metody „odtruwania” kukurydzy zawierającej aflatoksyny.
- EN: According to University of Missouri Extension, there is no FDA-approved method for “detoxifying” corn that contains aflatoxins.
- Źródło (szczebel 3, curl+grep, sha12 3aad8ef3f069): https://extension.missouri.edu/g4155 — University of Missouri Extension, G4155 Aflatoxins in Corn; Reducing aflatoxins in corn and feed. Cytat: „Currently, there is no FDA-approved or sanctioned method for “detoxifying” — through ammoniation or other means — corn that contains aflatoxins.”
- Uproszczenie: Nixtamalizacja nie jest w źródle wymieniona; zdanie nie mówi, że nixtamalizacja usuwa lub nie usuwa aflatoksyn.
- Warianty: corn-v11; jedno źródło: tak; ważne do 2027-11-02.

### SUS-315 (krytyczne)

- PL: Według UC ANR (publikacja 8267) dojrzałe naturalnie czarne oliwki przed suszeniem zanurza się na 3 minuty we wrzątku i trzyma 3 dni w mocnej solance (1 funt, 1 1/2 szklanki, soli do pikli na galon zimnej wody; ok. 450 g na 3,8 l), a potem suszy w całości w suszarce w 140°F (60°C) w jednej warstwie, ok. 20–24 godzin; oliwki ługowane suszy się bez dodatkowej obróbki.
- EN: According to UC ANR (publication 8267), naturally black ripe olives are placed in boiling water for 3 minutes and kept 3 days in strong brine (1 pound, 1 1/2 cups, of pickling salt per gallon of cool water; about 450 g per 3.8 l) before drying, then dried whole in a dehydrator at 140°F (60°C) in a single layer for approximately 20–24 hours; lye-cured olives are dried without further treatment.
- Źródło (szczebel 3, pdftotext+grep na pliku pobranym dziś curl przez subagenta B (moje ponowne pobranie: HTTP 202 bez treści; C11-D3), sha12 66830cf199b1): https://escholarship.org/content/qt55d9628m/qt55d9628m.pdf — UC ANR Publication 8267, Olives: Safe Methods for Home Pickling (2007); Drying Olives, Naturally black ripe olive pretreatment, Dehydrator drying (s. 18–19). Cytat: „You can successfully dry lye-cured green and dark ripe style olives, without further treatment, in the sun or in a home dehydrator. … Naturally black ripe olive pretreatment: Place olives in boiling water for 3 minutes. … Cover the olives with strong brine made by adding 1 pound (11⁄2 cups) of pickling salt per gallon of cool water; close container loosely. Store olives in brine for 3 days, and then drain off the brine. … Set the dehydrator temperature at 140°F. … Arrange whole pretreated black ripe olives or lye-cured olives on drying trays in a single layer so the fruits do not touch or overlap. … Olives will be dry in approximately 20 to 24 hours.”
- Warianty: olives-v14; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Suszenie na słońcu źródło odsyła do innych publikacji: w karcie tylko suszarka (SUS-003 ostrożniej). Wydanie 06/2007: aktualność do sprawdzenia przy przeglądzie.

### SUS-316 (krytyczne)

- PL: Według UC ANR (publikacja 8267) suszone oliwki zachowują jakość 3–4 miesiące w chłodnym miejscu, a dłużej w temperaturze pokojowej jełczeją; w lodówce lub zamrażarce (0°F, -18°C) około roku.
- EN: According to UC ANR (publication 8267), dried olives keep 3–4 months in a cool place but tend to become rancid if stored longer at room temperature; in the refrigerator or home freezer (0°F, -18°C) about a year.
- Źródło (szczebel 3, pdftotext+grep na pliku pobranym dziś curl przez subagenta B (moje ponowne pobranie: HTTP 202 bez treści; C11-D3), sha12 66830cf199b1): https://escholarship.org/content/qt55d9628m/qt55d9628m.pdf — UC ANR Publication 8267; Drying Olives, Packaging and storage (s. 19). Cytat: „The dried olives will keep for 3 to 4 months in a cool place, but they tend to become rancid if stored longer at room temperature. You can keep dried olives in the refrigerator or home freezer (0°F) for about a year.”
- Warianty: olives-v14; jedno źródło: tak; ważne do 2027-11-02.

### SUS-317 (krytyczne)

- PL: Według UC ANR (publikacja 8267) do oliwek suszonych w soli na sucho daje się ok. 1 funt (1 1/2 szklanki) soli do pikli na 2 funty oliwek (ok. 450 g na 900 g); gotowe oliwki trzyma się w chłodnym miejscu najwyżej 1 miesiąc, w lodówce do 6 miesięcy, w zamrażarce do roku.
- EN: According to UC ANR (publication 8267), dry salt cured olives take about 1 pound (1 1/2 cups) of pickling salt for every 2 pounds of olives (about 450 g per 900 g); finished olives are stored in a cool place for up to 1 month, refrigerated for up to 6 months or frozen for up to a year.
- Źródło (szczebel 3, pdftotext+grep na pliku pobranym dziś curl przez subagenta B (moje ponowne pobranie: HTTP 202 bez treści; C11-D3), sha12 66830cf199b1): https://escholarship.org/content/qt55d9628m/qt55d9628m.pdf — UC ANR Publication 8267; Dry Salt Cured Olives, Preparation pkt 3 i 7 (s. 11–12). Cytat: „Add about 1 pound (11⁄2 cups) of pickling salt for every 2 pounds of olives. … Store in a cool place and use within 1 month, or refrigerate for up to 6 months, or store in a home freezer for up to a year.”
- Warianty: olives-v08; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: olives-v08 (salt-preservation, cool-storage) jest poza tą partią: do toru, który ma oliwki; tu tylko jako granica dla olives-v14.

### SUS-318 (krytyczne)

- PL: Dynia jest warzywem niskokwasowym; dla przetworów z dyni (np. masła dyniowego, dyni rozgniecionej) nie ma przetestowanej, bezpiecznej domowej metody przechowywania w temperaturze pokojowej.
- EN: Pumpkin is a low-acid vegetable; for pumpkin products (such as pumpkin butter or mashed pumpkin) there is no properly tested, safe home method for room-temperature storage.
- Źródło (szczebel 3, curl+grep (strona HTML; subagent czytał przez wp-json), sha12 44a479641622): https://site.extension.uga.edu/forsyth/have-your-pumpkin-and-eat-it-too/ — University of Georgia Extension (Forsyth County), Have Your Pumpkin and Eat It Too; Home-canned products to avoid (Andress, Harrison, 2019). Cytat: „Pumpkin is a low acid vegetable and requires special attention when preserving for later use to avoid food safety issues. Even though pumpkin butters are popular, there is no properly-tested, safe home canning method for room temperature storage.”
- Źródło (szczebel 1, pdftotext+grep, sha12 44826e2e181a): https://www.ucanr.edu/sites/default/files/2022-07/369703.pdf — NCHFP, Home Preserving Pumpkins (09/2015), w materiałach UC Master Food Preservers. Cytat: „We have no properly researched directions to recommend for canning mashed or pureed pumpkin or winter squash, or pumpkin butter.”
- Uproszczenie: Źródła mówią o wekowaniu; przeniesienie na dynię kandyzowaną w syropie to uproszczenie kierunkowo zgodne (niskokwasowy produkt w temperaturze pokojowej bez procesu).
- Warianty: pumpkin-v14; jedno źródło: nie; ważne do 2027-11-02.

### SUS-319

- PL: Według przepisu UCCE Master Food Preservers (Solano/Yolo) imbir kandyzowany na sucho gotuje się 45 minut w syropie z cukru i wody, osusza 30 minut na kratce, obtacza w cukrze, suszy na papierze woskowanym i przechowuje w szczelnym pojemniku.
- EN: According to a UCCE Master Food Preservers (Solano/Yolo) recipe, dry candied ginger is boiled for 45 minutes in a sugar-and-water syrup, dried on a rack for 30 minutes, tossed with sugar, dried on wax paper and stored in an airtight container.
- Źródło (szczebel 3, pdftotext+grep, sha12 f59015262153): https://ccfruitandnuts.ucanr.edu/sites/default/files/2021-01/343262.pdf — UCCE Master Food Preserver Program Solano/Yolo; Candied Ginger (s. 2). Cytat: „When sugar is dissolved, add ginger and boil for 45 minutes until tender. … Place ginger on rack to dry for 30 minutes. … Toss with sugar to coat and dry on wax paper. … Store in airtight container.”
- Warianty: ginger-turmeric-v09; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Przepis powiatowy bez opisu badań i bez czasu przechowywania; nie obejmuje kurkumy ani formy w syropie.

### SUS-320

- PL: Według Clemson HGIC (tabela za UGA So Easy to Preserve) blanszowanie owoców w syropie: 1 szklanka cukru, 1 szklanka jasnego syropu kukurydzianego i 2 szklanki wody zagotować, dodać 1 funt (ok. 450 g) przygotowanych owoców, gotować na małym ogniu 10 minut, zostawić w gorącym syropie 30 minut, wyjąć, lekko opłukać zimną wodą, osączyć i suszyć; produkt przypomina owoce kandyzowane.
- EN: According to Clemson HGIC (table after UGA So Easy to Preserve), syrup blanching of fruit: bring 1 cup sugar, 1 cup light corn syrup and 2 cups water to a boil, add 1 pound (about 450 g) of prepared fruit, simmer 10 minutes, let stand in the hot syrup 30 minutes, lift out, rinse lightly in cold water, drain and dry; the product is similar to candied fruit.
- Źródło (szczebel 3, curl+grep, sha12 178fb3efe46e): https://hgic.clemson.edu/factsheet/drying-fruits/ — Clemson HGIC, Drying Fruits; Syrup-Blanching. Cytat: „The resulting product is similar to candied fruit. … Combine 1 cup sugar, 1 cup light corn syrup and 2 cups water in a pot. Bring to a boil. Add 1 pound of prepared fruit and simmer 10 minutes. Remove from heat and let fruit stand in hot syrup for 30 minutes. Lift fruit out of syrup, rinse lightly in cold water, drain on paper towels and place on dryer trays.”
- Warianty: sour-cherry-v16, apricot-v14; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Lista owoców w tej sekcji (jabłka, morele, figi, nektaryny, brzoskwinie, gruszki, śliwki) nie ma wiśni; tabela ma wiśnie z czasem syropu „for sour cherries” (SUS-321).

### SUS-321

- PL: Według tabeli Clemson HGIC wiśnie (kwaśne) po usunięciu szypułek i pestek można blanszować w syropie 10 minut, a czas suszenia wiśni w suszarce to 8–12 godzin.
- EN: According to the Clemson HGIC table, sour cherries, stemmed and pitted, may be syrup-blanched for 10 minutes, and the dehydrator drying time for cherries is 8–12 hours.
- Źródło (szczebel 3, curl+grep, sha12 178fb3efe46e): https://hgic.clemson.edu/factsheet/drying-fruits/ — Clemson HGIC, Drying Fruits; tabela Drying Fruits at Home, kolumny: Preparation | Sulfur | Steam | Syrup | Others | Drying Times; wiersz Cherries. Cytat: „Cherries | Stem, wash, drain and pit fully ripe cherries. Cut in half, chop or leave whole. | | | 10 (for sour cherries) | Whole: Dip in boiling water 30 seconds or more to check skins. Cut and pitted: no treatment necessary. | 8 to 12”
- Warianty: sour-cherry-v16, sweet-cherry-v11; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Syrop tylko dla wiśni; dla czereśni brak (sweet-cherry-v11).

### SUS-322

- PL: Według tabeli Clemson HGIC morele (bez pestek, połówki, ewentualnie plastry) można blanszować w syropie 10 minut; suszenie w suszarce 24–36 godzin, plastry krócej.
- EN: According to the Clemson HGIC table, apricots (pitted, halved, optionally sliced) may be syrup-blanched for 10 minutes; dehydrator drying takes 24–36 hours, shorter for slices.
- Źródło (szczebel 3, curl+grep, sha12 178fb3efe46e): https://hgic.clemson.edu/factsheet/drying-fruits/ — Clemson HGIC, Drying Fruits; tabela Drying Fruits at Home, wiersz Apricots i przypis **. Cytat: „Apricots | Pit and halve. May slice if desired. | 2 | 3 to 4 | 10 | Ascorbic acid solution, ascorbic acid mixture, fruit juice dip, sulfite dip | 24 to 36** … **Drying times are shorter for slices and other cuts of fruit.”
- Warianty: apricot-v14; jedno źródło: tak; ważne do 2027-11-02.

### SUS-323

- PL: Według NC State Extension owoce pigwowca japońskiego (Chaenomeles japonica) są jadalne, na surowo gorzkie; używa się ich do galaretek i innych przetworów.
- EN: According to NC State Extension, the fruits of Japanese flowering quince (Chaenomeles japonica) are edible but bitter when eaten raw; they are used for jellies and other preserves.
- Źródło (szczebel 3, curl+grep, sha12 56e17ec28601): https://plants.ces.ncsu.edu/plants/chaenomeles-japonica/ — NC State Extension Gardener Plant Toolbox, Chaenomeles japonica; opis i pole Edibility. Cytat: „The fruits are edible, although have a bitter taste when eaten raw. They can be used in making jellies and other preserves.”
- Warianty: quince-v13; jedno źródło: tak; ważne do 2027-11-02.
- Uwaga: Brak procedury suszenia w źródłach szczebla 1–3.

## 5. Bez źródła szczebla 1–3 (szukane, nie znalezione)

- **ogórek, kapusta pekińska, topinambur, fasolka długostrąkowa, korzeń pietruszki, seler korzeniowy: procedura suszenia** (cucumber-v20, napa-cabbage-v14, potato-sunchoke-v11, green-beans-v14, parsnip-parsley-v10, celeriac-celery-v11, carrot-v15): Sprawdzone tabele: CSU Table 2 i PreserveSmart, NDSU FN1588 (kopia CSU), MSU MontGuide, Clemson, SDSU Preserve It!, UC ANR (kopia MontGuide). USU, UAF, Penn State, UMN: 404 lub brak połączenia; UMaine (ogórek) 503; MSU Michigan (kapusta pekińska) Incapsula; Clemson yardlong bean 403.
- **daikon: procedura suszenia (mumallaengi, chipsy)** (daikon-black-radish-v12, daikon-black-radish-v14): Tylko oceny „nie zalecane” (MSU Montana SUS-038, MSU Michigan SUS-304); Purdue: brak połączenia.
- **imbir i kurkuma: pełna procedura suszenia z temperaturą i testem** (ginger-turmeric-v15): Tylko artykuł powiatowy NC State (SUS-308).
- **puder z kimchi, skrobia ziemniaczana, kapary solone i suszone, mąka z ciecierzycy** (napa-cabbage-v15, potato-sunchoke-v13, capers-v10, peas-chickpeas-v15): WebSearch (extension, NCHFP, FDA): tylko badania, blogi, serwisy kulinarne, dokument KALRO (Kenia).
- **skórki pomidorów: dosłowny tekst artykułu UC MFP** (tomato-v18): Adres https://ucanr.edu/program/uc-master-food-preserver-program/article/making-and-using-dehydrated-tomato-skins-august: curl 403, treść tylko przez WebFetch. Fragment z odczytu narzędziem, niesprawdzony dosłownie: „Set the temperature to 135oF and dry for 6 - 12 hours. … Next, pulverize the skins in a food processor, blender, or spice grinder to form tomato powder.” Nie obchodzono blokady.
- **sole z suszem (sól selerowa, vegeta, szarena sól)** (celeriac-celery-v12, european-mixed-veg-v13, balkan-oriental-mix-v13): Jedyne pokrewne: Clemson HGIC Finishing Salts (tylko wymienione zioła, sekcja 7).
- **WWA: limity UE i opinie EFSA/BfR** (bell-pepper-v18, pear-v14, plum-v18): eur-lex 2023/915: 202 pusta; EFSA 724: 403; BfR, FSA, KE: 404. Ryzyko oparte na UKHSA (SUS-310).
- **kukurydza zwykła: domowe suszenie ziarna** (corn-v11): Iowa State i Utah State opisują tylko popcorn; Missouri G4155 i ISU tylko ryzyko aflatoksyn.
- **owoce kandyzowane: pigwa, czereśnie, glacé, dynia, imbir w syropie** (quince-v12, sweet-cherry-v11, apricot-v14, pumpkin-v14, ginger-turmeric-v09): NCHFP candied-fruit: pusta powłoka; USU, UAF, Penn State, NDSU: brak publikacji; UGA So Easy to Preserve (książka płatna, nie pobrana); WSU 403; NDSU fn1587 404.
- **pigwowiec: suszenie i nasiona** (quince-v13): NC State: tylko jadalność (SUS-323); Purdue: brak połączenia.

## 6. Źródła odrzucone (przeczytane, nieużyte jako granica)

- Clemson HGIC, Finishing Salts recipe (https://hgic.clemson.edu/finishing-salts-recipe-preserve-fresh-herbs-from-the-garden/): „Herbs like basil, rosemary, oregano, dill, thyme, and chives can be used in this recipe. … Bake at 175 °F, or at your oven’s lowest setting, for 40-50 minutes.” — Nie 1:1 dla soli selerowej, vegety ani szareny (tylko wymienione zioła). Kandydat na osobny wariant „sól ziołowa” – decyzja toru A/roli 03.
- Iowa State Extension, Growing and harvesting popcorn (https://yardandgarden.extension.iastate.edu/how-to/growing-and-harvesting-popcorn-home-garden): „After harvest, remove the husks, place the ears in mesh bags, and hang them in a warm, dry, well-ventilated location away from rodents.” — Popcorn, nie kukurydza do nixtamalizacji; procedury nie przenoszę (B7-D5).
- FDA Bad Bug Book, Phytohaemagglutinin (https://www.fda.gov/media/83271/download): „PHA is destroyed by adequate cooking.” — Dotyczy fasoli Phaseolus, nie ciecierzycy; kontekst dla peas-chickpeas-v15.
- NDSU FN1588 Drying Vegetables (ocena UGA) (https://www.ndsu.edu/agriculture/extension/publications/food-preservation-drying-vegetables): „The following vegetables were rated as “excellent” or “good” by the University of Georgia for their quality after drying” — Ocena jakości bez procedury; tabela NDSU to kopia CSU (już w rejestrze).
- CSU PreserveSmart: Drying Horseradish, Drying Parsnips; SDSU Parsnip S-0001-26 (https://apps.chhs.colostate.edu/preservesmart/produce/drying/horseradish/): „Peel or scrape roots. … Grate. … Arrange grated horseradish in single layers on drying trays.” — Powtarzają SUS-129 i SUS-127; nowe twierdzenia niepotrzebne (drugie źródło do dopisania przez tor A, jeśli zechce).
- Missouri Extension HES173 How to Make Candied Fruit (https://extension.missouri.edu/publications/hes173): „Candied fruit process adapted from AllRecipes” — Źródło SLO-069; przepis ogólny, zaadaptowany z serwisu kulinarnego, wymienia tylko skórki cytrusów i drobne jagody. Nie nadaje statusu żadnemu wariantowi tej partii (sekcja 9).

## 7. Uwaga o SLO-069

Missouri HES173 (źródło SLO-069) podaje: „Candied fruit process adapted from AllRecipes”; z gatunków wymienia skórki cytrusów i drobne jagody. Zdanie o przechowywaniu (lodówka do tygodnia albo dosuszenie) pozostaje szczeblem 3, ale sam przepis nie jest przetestowaną procedurą: nie podnosi statusu żadnego wariantu kandyzowanego. Do decyzji toru A, czy oznaczyć SLO-069 uproszczeniem.

## 8. Decyzje (tablica: `2026-11-02-jaratlas-06-c11-suszenie-zrodla-p1`, decyzja Claude, do weta)

| ID | Decyzja | Odrzucone |
|---|---|---|
| C11-D1 | Numeracja SUS-300–SUS-323 z puli C11 (SUS-300–399). Kolizje: git grep SUS-3[0-9][0-9] na 23 gałęziach origin i w docs/tresci: 0 trafień. SUS-312 (douchi) i SUS-317 (oliwki w soli) mogą należeć do NAP i SOL: numer SUS z puli C11, przeniesienie do decyzji koordynatora. | osobne klucze tymczasowe K-C11-… dla innych rejestrów (zadanie dopuszcza tylko SUS-300–399) |
| C11-D2 | Bez źródła szczebla 1–3 pasującego 1:1 (produkt, forma, metoda) wariant zostaje do-researchu; procedur z innego gatunku nie przenoszę (ogórek, kapusta pekińska, topinambur, fasolka długostrąkowa, korzeń pietruszki, seler korzeniowy, daikon, kalarepa, pigwa, pigwowiec, imbir, puder kimchi, skrobia, kapary). Pełna analogia: C7-D2 i B7-D5. | przeniesienie procedury jako uproszczenie; ryzyko-wysokie dla wszystkich bez źródła (brak realnego zagrożenia poza brakiem danych) |
| C11-D3 | Nazwany wyjątek od „własnego pobrania”: UC ANR 8267 (eScholarship, moje pobranie HTTP 202 bez treści) i MSU HNI50 (strona Incapsula) – cytaty sprawdzone skryptem na plikach pobranych dziś curl przez subagentów (sha12 w sekcji 2). Tańsza kontrola: ten sam skrypt i normalizacja co dla pozostałych 20 adresów; nie obchodzono blokad. Clemson 403 tylko z nagłówkiem User-Agent przeglądarki; zwykły curl 200. | pominięcie tych źródeł (oliwki bez źródła) |
| C11-D4 | tomato-v18: zostaje do-researchu, choć artykuł UC MFP pasuje 1:1 – treść tylko przez WebFetch (curl 403), więc cytat niesprawdzony dosłownie; dodatkowo autor wolontariusz MFP i 135°F poniżej 140°F (SUS-001). | ok-zrodlo z oznaczeniem „z odczytu narzędziem” (standard dopuszcza znacznik, ale nie przy jedynym źródle statusu) |
| C11-D5 | Dynia kandyzowana (pumpkin-v14) i imbir w syropie (ginger-turmeric-v09): ryzyko-wysokie – niskokwasowe w cukrze bez procesu (SUS-318, SLO-045, ACI-125). Analogia pełna: C10-D9. | do-researchu (łagodniej niż analogia C10) |
| C11-D6 | Domowe wędzenie owoców i warzyw (bell-pepper-v18, pear-v14, plum-v18): ryzyko-wysokie – brak procedury szczebla 1 (SUS-309), WWA (SUS-310). Droga: usunąć wędzenie → duplikaty pear-v13, plum-v17, bell-pepper-v17. Decyzja Claude bez analogii, wariant ostrożniejszy (tryb dzienny). | do-researchu (brak źródła ≠ dowód szkody); nie-publikowac (zbyt mocne bez limitu UE) |
| C11-D7 | Douchi (beans-soy-v05): ryzyko-wysokie – spontaniczna fermentacja soi bez procedury domowej i udokumentowane zatrucie B. cereus z cereulidem (SUS-312, szczebel 2). Analogia częściowa: NAP-052. | do-researchu |
| C11-D8 | Mieszanki (carrot-v15, european-mixed-veg-v14) i warianty dwuskładnikowe (celeriac-celery-v11, parsnip-parsley-v10): zostają do-researchu; minimalna poprawka = tylko składniki z procedurą, każdy suszony osobno. european-mixed-veg-v14 po poprawce = carrot-v15 (zostawić jeden). | ok-zrodlo dla mieszanki z częściowymi źródłami |
| C11-D9 | leek-chives-v11: zostaje do-researchu – SDSU (SUS-303) bez czasu, testu suchości i blanszowania, a dla cebuli karta blanszuje 4 min (B4-D2). Subagent proponował ok-zrodlo; zmienione na ostrożniejsze. Droga: źródło z czasem albo decyzja toru A, że SUS-017 wystarcza jako test. | ok-zrodlo z ogólnym testem SUS-017 (propozycja subagenta A) |
| C11-D10 | horseradish-v11: plastry bez źródła; po zmianie na tarty = horseradish-v12 (ok-zrodlo): duplikat. Pełna analogia: B7-D5. | — |
| C11-D11 | Sole i mieszanki z solą (celeriac-celery-v12, european-mixed-veg-v13, balkan-oriental-mix-v13): zostają do-researchu; Clemson Finishing Salts tylko jako kandydat na osobny wariant (sekcja 7). | ok-zrodlo przez analogię do soli ziołowej Clemson |
| C11-D12 | turnip-rutabaga-v10: ok-zrodlo. SDSU S-0001-41 (źródło NCHFP) dla rzepy i brukwi + CSU PreserveSmart dla brukwi (test „brittle”). Blanszowanie w karcie 5 minut: górna granica SDSU (3–5), mieści się w PreserveSmart powyżej 5000 stóp; dłuższe blanszowanie jak B4-D2 (niedoblanszowanie gorsze, SUS-054). Zastępuje podstawę E3 (SUS-039). | 3–5 min jako przedział (laik wybierze 3); 3 1/2–4 1/2 min z PreserveSmart dla obu warzyw |
| C11-D13 | corn-v11: ryzyko-wysokie – brak procedury domowego suszenia ziarna, a ryzyko aflatoksyn zależy od wilgotności ziarna (13%), której w domu nie da się zmierzyć; brak odtruwania (SUS-313, SUS-314). Subagent B proponował do-researchu; zmienione na ostrożniejsze (tryb dzienny). | do-researchu (propozycja subagenta) |
| C11-D14 | olives-v14: ok-zrodlo według UC ANR 8267 (SUS-315, SUS-316) z doprecyzowaniem w karcie: tylko dojrzałe czarne oliwki z obróbką 3 min + 3 dni w solance albo oliwki ługowane; tylko suszarka (suszenie na słońcu źródło odsyła gdzie indziej). Wersja w soli na sucho należy do olives-v08 (SUS-317, poza partią). | do-researchu do czasu twierdzeń o ługowaniu (niepotrzebne: obróbka czarnych oliwek w źródle jest kompletna); suszenie na słońcu |
| C11-D15 | Owoce „kandyzowane” sour-cherry-v16 i apricot-v14: zostają do-researchu z minimalną poprawką nazwy na „suszone po blanszowaniu w syropie” (Clemson za UGA, SUS-320–322) → ok-zrodlo. sweet-cherry-v11: syrop tylko dla wiśni kwaśnych, poprawka = sweet-cherry-v12 (duplikat). Pełna analogia: C10-D3 i C10-D4 (zmiana nazwy = do-researchu z drogą). | ok-zrodlo od razu; przeniesienie syropu na czereśnie |

## 9. Uwagi dla partii katalogowej (tor A)

- Zmiany statusu do wprowadzenia w catalog-seed.json (D-043): ok-zrodlo – turnip-rutabaga-v10, olives-v14 (z brzmieniem z sekcji 3); ryzyko-wysokie – pumpkin-v14, bell-pepper-v18, beans-soy-v05, corn-v11, ginger-turmeric-v09, pear-v14, plum-v18.
- Duplikaty do decyzji (usunąć albo scalić): horseradish-v11 → v12, pear-v14 → v13, plum-v18 → v17, bell-pepper-v18 → v17, sweet-cherry-v11 → v12, parsnip-parsley-v10 (część pasternak) → v09, european-mixed-veg-v14 ↔ carrot-v15.
- Zmiany nazw dające ok-zrodlo: sour-cherry-v16, apricot-v14 („suszone po blanszowaniu w syropie”), celeriac-celery-v11 (tylko naciowy), parsnip-parsley-v10 (natka). tomatillo-v11: nazwa produktu (miechunka ≠ tomatillo).
- Poza zakresem do roli 03: potato-sunchoke-v13 (skrobia), brussels-kohlrabi-v12 (NCHFP nie zaleca suszenia kalarepy).
- requiredWarnings: SUS-301 (tomatillo-v11), SUS-311 (peas-chickpeas-v15), SUS-309/SUS-310 dla wariantów wędzonych, jeśli zostaną jako karty-ostrzeżenia.
- SUS-312 i SUS-317 mogą należeć do rejestrów NAP i SOL: numer z puli C11, przeniesienie decyduje koordynator (C11-D1).
