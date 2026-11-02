# E1 suszenie: źródła dla wariantów dry-storage, partia 2 (tor C12, 2026-11-02)

- Rola 06-tresci, build, tryb dzienny bez właściciela. Gałąź `claude/jaratlas-c12-suszenie-zrodla-p2` od `claude/happy-brown-yncplj` = 0c7f53f. Zakres: tylko ten plik i `E1-suszenie-zrodla-p2-2026-11-02.json`. Katalog, karty, rejestry i pliki stanu bez zmian; statusy zmienia tor A w partii katalogowej (D-043).
- Wejście: `catalog/catalog-seed.json` (warianty 38–70 z 70 `dry-storage` + `do-researchu`, od cornelian-cherry-v10 do poultry-v14; partia 1 = C11), `docs/tresci/rejestr.json` oraz E1-suszenie-twierdzenia, -luki, -s7-m i -zrodla-p1 (C11): istniejące ID użyte zamiast duplikatów.
- Format jak C11 (sekcja „format” w .json). Research porcjami: 3 subagenty (A owoce dzikie i jagody, B cytrusy i kandyzowanie, C grzyby, zioła, nabiał, mięso); cytaty sprawdzone ponownie przeze mnie na własnych pobraniach (sekcja 1); 6 propozycji statusu subagentów zmienionych na ostrożniejsze lub zgodne z C11 (raspberry-blackberry-v15 C12-D3, rosehip-rowan-v11 C12-D4, lemon-v12 i orange-kumquat-v11 C12-D8, watermelon-melon-v07 C12-D9, garden-herbs-v13 C12-D10).

## 1. Wynik

Warianty w partii: 33. Proponowany status: ok-zrodlo 5, ryzyko-wysokie 10, zostaje do-researchu 18, nie-publikowac 0. Droga do zmiany przez minimalną poprawkę nazwy, zakresu lub decyzję toru A: raspberry-blackberry-v15, rosehip-rowan-v11, rosehip-rowan-v12, rhubarb-v08, lemon-v12, orange-kumquat-v11, grapefruit-v06, watermelon-melon-v07, walnut-nuts-v10, boletes-v13, garden-herbs-v13 (sekcja 3). Duplikatów z następcą ok-zrodlo: 0.

Nowe twierdzenia: 19 (SUS-324–SUS-342). Krytycznych: 10. Cytaty według szczebla źródła: szczebel 1: 9, szczebel 2: 4, szczebel 3: 12.

Kontrole (dowód):
- cytaty: 72 ciągłe fragmenty cytatów (19 twierdzeń, 31 źródeł-cytatów z 6 odrzuconymi, 29 adresów) dosłownie w tekście stron pobranych ponownie przeze mnie dziś curl (weryfikuj.py: tekst z HTML bez znaczników albo pdftotext z -layout i bez, normalizacja NFKC, spacji, cudzysłowów i myślników): 0 braków. Bez wyjątków: wszystkie 31 adresów odpowiedziały mi HTTP 200.
- liczby: Każda liczba z twierdzenie_en sprawdzona w cytacie: poza przeliczeniami (°C, mm, cm) zapisane słownie w źródle tylko „six to eight” (SUS-326), „three months” (SUS-330), „Twelve percent” (SUS-339); lata badań i numer PNW 632 z pola miejsce.
- mutacja: weryfikuj.py --mutacja: zmiana pierwszej cyfry w pierwszym cytacie z cyfrą (SUS-324, „18” → „28”) daje 1 błąd.
- przeklad: tools/i18n/niezmienniki.mjs porownaj(en, pl) na 19 parach: 0 różnic (przed poprawkami 2: SUS-324 „lat”, SUS-340 „CFU”).
- kolizje_id: git grep -E 'SUS-3(2[4-9]|[3-9][0-9])' na 25 gałęziach origin (docs, catalog): 0 trafień; najwyższy istniejący SUS-323 (C11).
- istniejace: 59 odwołań wariantów do ID (SUS, SLO, ACI, MIE, MLE, NAP) sprawdzone w docs/tresci/rejestr.json, E1-suszenie-*.json i nowych SUS-324–342: 0 brakujących.
- kolejnosc: 33 warianty = pozycje 38–70 z 70 dry-storage + do-researchu w kolejności catalog-seed.json (sprawdzone skryptem: assert w buduj.py).

Najważniejsze dla bezpieczeństwa:
- Czosnek niedźwiedzi suszony: pomyłki z zimowitem i konwalią (BfR, AGES, SUS-337) i jaja tasiemca lisiego, które giną ok. 60°C, a zioła suszy się w 35–46°C (SUS-338) → ryzyko-wysokie; SUS-338 dotyczy też pesto mrożonego wild-garlic-v07 (ok-zrodlo): do toru A.
- Proszek z trzonów kani i opieniek: opieńka jadalna tylko młode kapelusze (PSSE, SUS-335), toksyczna na surowo, gotować ≥20 min i wylać wodę (ATS Milano, SUS-336) → ryzyko-wysokie.
- Jarzębina surowa: kwas parasorbowy (CIAS, SUS-327) → ryzyko-wysokie dla kandyzowanej i suszonej; dotyczy też innych wariantów z jarzębiną (sekcja 9).
- Biltong (bez etapu cieplnego, SUS-341), kashk i kurt (S. aureus w 16–60% próbek kurutu, SUS-339) → ryzyko-wysokie.
- Jerky z indyka: ok-zrodlo tylko z obowiązkowym ogrzaniem do 165°F (74°C) i pomiarem (PNW 632, SUS-342).
- Kandyzowane niskokwasowe (zielona papaja, skórka arbuza i melona) i liście z surowym białkiem → ryzyko-wysokie (C11-D5, FDA SUS-333).

## 2. Źródła przeczytane dziś (curl, 2026-11-02)

| Adres | HTTP | bajty | sha12 | Uwaga |
|---|---|---|---|---|
| https://www.ema.europa.eu/documents/herbal-monograph/final-community-herbal-monograph-rubus-idaeus-l-folium_en.pdf | 200 | 118624 | 61ec70f3c655 | — |
| https://www.ontario.ca/page/introduction-sea-buckthorn | 200 | 106080 | 4546fa91078f | — |
| https://www.capecod.gov/wp-content/uploads/2022/03/rose-hip-recipes.pdf | 200 | 530406 | 4b6de8dcffd2 | — |
| https://uncommonfruit.cias.wisc.edu/?p=157 | 200 | 57386 | 3f3a43845fb2 | — |
| https://ucanr.edu/sites/LassenMFP/files/397668.pdf | 200 | 52586 | 16bf029b6021 | — |
| https://ucanr.edu/sites/sacmfp/files/293885.pdf | 200 | 254647 | 421f62f4ea23 | — |
| https://innovate.ucanr.edu/sites/default/files/2025-11/Citrus%20Without%20Canning%20Recipe%20Handout-1.pdf | 200 | 208742 | a89fc7c7d0e4 | — |
| https://class.ucanr.edu/sites/default/files/2020-09/335009.pdf | 200 | 91453 | 4525685436fa | — |
| https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety | 200 | 39211 | 3da77e24e73c | — |
| https://archive.sebs.rutgers.edu/wp-content/uploads/Edible-Flowers-Handout.pdf | 200 | 205824 | 02c6b8c79bfc | — |
| https://www.gov.pl/web/psse-golub-dobrzyn/pomylka-ktora-moze-byc-smiertelna-czyli-grzybowe-pomylki | 200 | 37077 | bc614e195382 | — |
| https://storico.comune.cesate.mi.it/wp-content/uploads/2020/09/Funghi-Locandina.pdf | 200 | 346148 | 1f94dd51177c | — |
| https://www.bfr.bund.de/presseinformation/verwechslungsgefahr-bei-baerlauch | 200 | 325233 | 7fbb661b0841 | — |
| https://www.bfr.bund.de/presseinformation/baerlauch-verwechslungen-fuehren-haeufig-zu-vergiftungen/ | 200 | 329592 | a9ba67007094 | — |
| https://www.ages.at/mensch/ernaehrung-lebensmittel/lebensmittelinformationen/baerlauch | 200 | 338917 | 82fe972128f7 | — |
| https://dergipark.org.tr/tr/download/article-file/5689747 | 200 | 430026 | 09d20c63b248 | — |
| https://journals.tubitak.gov.tr/veterinary/vol26/iss4/14 | 200 | 62572 | cc72da8458a4 | — |
| https://dergipark.org.tr/en/download/article-file/1147558 | 200 | 1001164 | 9e7eee7c28ca | — |
| https://mdpi-res.com/d_attachment/microorganisms/microorganisms-10-01308/article_deploy/microorganisms-10-01308.pdf | 200 | 3826056 | e5e8fa032de4 | — |
| https://www.nal.usda.gov/research-tools/food-safety-research-projects/filling-usda-fsis-food-safety-knowledge-gaps-safety-ambient-temperature-air-dried-beef-droewors | 200 | 42065 | b097252c5693 | — |
| https://blogs.cornell.edu/cceherkimer/files/2021/05/PNW0632-Making-Jerky-at-Home-Safely.pdf | 200 | 5902321 | dcc0fb3f01f6 | — |
| https://ohioline.osu.edu/factsheet/hyg-5362 | 200 | 125139 | 3b48354d2655 | — |
| https://publications.ca.uky.edu/sites/publications.ca.uky.edu/files/FCS3594.pdf | 200 | 77892 | c4ab9e4b3b7f | — |
| https://bookstore.ksre.ksu.edu/download/dry-meat-safely-at-home_MF3173 | 200 | 297541 | cdd67bd71486 | — |
| https://class.ucanr.edu/sites/default/files/2023-02/380659.pdf | 200 | 5812367 | 8ea39f1fa924 | — |
| https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/333958.pdf | 200 | 96081 | 989e69db8f49 | — |
| https://ccfruitandnuts.ucanr.edu/sites/default/files/2022-01/362038.pdf | 200 | 483462 | 18456179ab15 | — |
| https://gscarr.gsconlinepress.com/sites/default/files/fulltext_pdf/GSCARR-2022-0368.pdf | 200 | 1043601 | 659a6e2db047 | — |
| https://www.ccfruitandnuts.ucanr.edu/sites/default/files/2020-12/340439.pdf | 200 | 116922 | 8d9045ffb0c6 | — |
| https://extensionpubs.unl.edu/publication/ec3062/na/pdf/view | 200 | 904511 | ab40900cf68f | — |
| https://nchfp.uga.edu/how/dry/jerky | 200 | 64376 | da7f0fbdd52a | — |

Niedostępne albo bez treści (subagenci, nie obchodzono blokad):

| Adres | HTTP | Grupa | Uwaga |
|---|---|---|---|
| https://www.uaf.edu/ces/publications/database/food/files/pdfs/FNH-00114-Wild-Roses.pdf | 0 | A | Blad TLS (unable to get local issuer certificate), takze uaf.edu bez www; nie obchodzono |
| https://uaf.edu/ces/publications/database/food/wild-roses.php | 0 | A | Blad TLS jw. |
| https://www.uidaho.edu/-/media/UIdaho-Responsive/Files/Extension/county/Boundary/news/september-october-2022.pdf | 403 | A | Forbidden |
| https://hgic.clemson.edu/factsheet/drying-fruits/ | 403 | A | Cloudflare 'Attention Required' - blokada, nie obchodzono |
| https://store.extension.iastate.edu/product/15416 | 0 | A | Blad TLS |
| https://extension.umaine.edu/agriculture/aronia/food-and-nutraceutical-uses/ | 0 | A | Blad polaczenia/TLS |
| https://edis.ifas.ufl.edu/publication/FY1005 | 410 | A | Gone |
| https://www.ctahr.hawaii.edu/oc/freepubs/pdf/HC-2.pdf | 0 | A | Blad polaczenia |
| https://ask2.extension.org/kb/faq.php?id=601317 | 0 | A | Blad polaczenia |
| https://nchfp.uga.edu/how/dry/fruits | 200 | A | Strona 404 NCHFP (nieaktualny adres); uzyto /how/dry i podstron |
| https://web.archive.org/ (kopie UAF FNH-00114) | 0 | A | Nie pobierano - pobranie z archiwum zablokowane przez polityke sesji |
| https://www.ucanr.edu/media/249344 | 403 | B | strona kontroli bota 'Checking connection' (UC ANR candied citrus peel); nie obchodzono |
| https://www.ucanr.edu/node/106947 | 403 | B | jw. (San Joaquin MFP citrus workshop, candied peel w czekoladzie) |
| https://ucanr.edu/sites/mfp_of_cs/files/389364.pdf | 404 | B | plik usunięty (Central Sierra) |
| https://www.canr.msu.edu/news/candying_or_crystallizing_flowers_add_a_bit_of_elegance_to_your_next_desser | 200 | B | blokada Incapsula (iframe 'Request unsuccessful'), brak treści |
| https://www.canr.msu.edu/news/drying_citrus_peel_to_use_later | 200 | B | blokada Incapsula; treść dostępna w kopii UC (lassen_397668.pdf p. 1) |
| https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/shell-eggs-farm-table | 403 | B | Access Denied |
| https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/egg-products-preparation | 403 | B | Access Denied |
| https://www.cdc.gov/food-safety/foods/eggs.html | 403 | B | odmowa |
| https://www.cdc.gov/salmonella/about/index.html | 403 | B | odmowa |
| https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures | 403 | B | odmowa |
| https://news.ncsu.edu/2014/12/wms-fruitcake | 0 | B | błąd TLS serwera (unable to get local issuer certificate), także z --cacert; nie wyłączano weryfikacji |
| https://nchfp.uga.edu/how/dry/candied-fruit | 200 | B | treść '404: Page Not Found' (nowy serwis NCHFP); to samo dla /how/dry/candied_fruit.html |
| https://nchfp.uga.edu/publications/uga/uga_dry_fruit.pdf | 404 | B | brak |
| https://foodsafety.ces.ncsu.edu/wp-content/uploads/2015/09/Preserving-Other-Types-of-Fruit-Recipes-Watermelon-Scuppernog-Muscadine-from-NCHFP.pdf?fwd=no | 404 | B | brak |
| https://www.fda.gov/food/buy-store-serve-safe-food/playing-it-safe-eggs | 404 | B | brak |
| https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat/jerky-and-food-safety | 403 | C | Akamai 'Access Denied' (plik fsis_jerky.html 490 B) |
| https://www.fsis.usda.gov/es/node/3309 | 403 | C | Akamai |
| https://www.fsis.usda.gov/sites/default/files/import/Compliance-Guideline-Jerky-2014.pdf | 403 | C | Akamai |
| https://webarchive.library.unt.edu/web/20120915115241/http:/www.fsis.usda.gov/PDF/Jerky_and_Food_Safety.pdf | 0 | C | błąd certyfikatu TLS (curl 60); nie obchodzono |
| https://web.archive.org/ (kopia FSIS jerky) | 0 | C | próba odrzucona przez system uprawnień jako obejście blokady – nie wykonano |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC420069/ | 200 | C | strona reCAPTCHA zamiast treści; użyto abstraktu PubMed 14975056 |
| https://www.food.gov.uk/print/pdf/node/792 | 404 | C | — |
| https://www.food.gov.uk/sites/default/files/media/document/574-1-1007_B13015_Final_Report.pdf | 404 | C | — |
| https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20111150672/O/D20110672.pdf | 403 | C | użyto oficjalnego dziennikustaw.gov.pl |
| https://aj.tubitak.gov.tr/veterinary/issues/vet-02-26-4/vet-26-4-14-0103-17.pdf | 0 | C | CONNECT tunnel 502; użyto strony abstraktu |
| https://foodresearch.tabrizu.ac.ir/article_7178.html?lang=en | 0 | C | connection reset ×2 |
| https://doaj.org/article/db0c3016bab6444d8971fc4e45c9405e | 403 | C | — |
| https://mdpi.com/2311-7524/10/4/316/htm | 403 | C | — |
| https://aslbi.piemonte.it/wp-content/uploads/2025/08/Poster-NON-CONSUMARE-I-CHIODINI-CRUDI.pdf | 0 | C | connection reset ×2 |
| https://ask.ifas.ufl.edu/publication/PP324 | 307 | C | pętla przekierowań (curl 47) |
| https://hgic.clemson.edu/factsheet/drying-herbs-seeds-nuts/ | 403 | C | — |
| https://extension.oregonstate.edu/sites/default/files/documents/8836/sp50919preservingmushrooms.pdf | 404 | C | — |
| https://www.ats-brescia.it/documents/3432658/8053835/Report+2018+ispettorato+micologico.pdf/edd826a4-a735-0c80-0ebc-046a52665360 | 404 | C | — |
| https://nchfp.uga.edu/how/dry/vegetables | 404 | C | strona nie istnieje; użyto drying-general/drying-fruits-and-vegetables |

## 3. Wariant → status, twierdzenia, uwagi

| Wariant | Nazwa | Rodzina | Status proponowany | Twierdzenia | Minimalna poprawka | Duplikat z | Uwagi dla partii katalogowej | Decyzja |
|---|---|---|---|---|---|---|---|---|
| cornelian-cherry-v10 | suszony dereń na napary | drying | zostaje do-researchu | — | — | — | Derenia (Cornus mas) brak w tabelach suszenia; tylko dwie prace o kinetyce suszenia (słońce; 50–70°C, Turcja 2017, sekcja 6). Wiersz „Cherries” CSU to inny gatunek (C11-D2). | C12-D2 |
| raspberry-blackberry-v15 | suszone maliny i liście | drying | zostaje do-researchu | SUS-122, SUS-184, SUS-031, SUS-076, SUS-079, SUS-324 | Ograniczyć do liści malin: nadal brak procedury 1:1 (NCHFP Herbs ogólna); jeśli tor A przyjmie NCHFP Herbs dla liści – requiredWarnings SUS-324. | — | Owoce: MSU i PNW odradzają (SUS-122, SUS-184), bez procedury. Liście: tylko ogólna procedura ziół NCHFP; EMA: nie w ciąży, karmieniu, poniżej 18 lat (SUS-324). Subagent proponował ryzyko-wysokie; zmienione (C12-D3). | C12-D3 |
| chokeberry-seabuckthorn-v10 | aronia kandyzowana w syropie | sweet-preserves | zostaje do-researchu | SLO-069, ACI-009 | — | — | Brak przepisu szczebla 1–3 na aronię kandyzowaną; SLO-069 (Missouri HES173, „adapted from AllRecipes”) nie podnosi statusu (C11, sekcja 7). | C12-D2 |
| chokeberry-seabuckthorn-v11 | suszona aronia na herbatę | drying | zostaje do-researchu | — | — | — | UNL EC3062 tylko „Fruit can be eaten raw, dried, juiced, or cooked” (sekcja 6), bez procedury. Iowa State i UMaine: błąd TLS. Bez zmian względem p25 (C7-D3). | C12-D2 |
| chokeberry-seabuckthorn-v12 | suszony rokitnik | drying | zostaje do-researchu | SUS-325 | — | — | OMAFRA: owoce chłodzić 4–6°C lub zamrażać, suszy się tylko młode liście (SUS-325); przegląd Foods 2023 tylko suszenie przemysłowe. Procedury liści nie przenoszę na owoce. | C12-D2 |
| rosehip-rowan-v10 | jarzębina kandyzowana w cukrze | sweet-preserves | ryzyko-wysokie | SUS-327, SLO-069 | Brak drogi w źródłach: jedyne badanie kandyzowanej jarzębiny dotyczy wyrobu fabrycznego z kwasem sorbowym (sekcja 6). | — | Surowa jarzębina zawiera kwas parasorbowy (kancerogen według CIAS); obróbka cieplna „may neutralize” bez warunków (SUS-327). | C12-D5 |
| rosehip-rowan-v11 | suszone owoce dzikiej róży | drying | zostaje do-researchu | SUS-326, SUS-001, SUS-002, SUS-063 | ok-zrodlo, gdy tor A przyjmie procedurę Cape Cod (SUS-326) z korektą według wyższych zasad: 140°F od początku (SUS-001, SUS-002), test suchości i kondycjonowanie owoców (SUS-063, SUS-018, SUS-019); albo gdy znajdzie się UAF FNH-00114 (błąd TLS). | — | Cape Cod Cooperative Extension (UMass) daje pełne suszenie całych owoców (SUS-326), ale start 110°F i koniec „nie do końca suche” stoją w sprzeczności z SUS-002 i SUS-063; brak czasu przechowywania. Połówki bez nasion: tylko Ask Extension (wolontariusz, bez parametrów). Subagent proponował ok-zrodlo; zmienione (C12-D4). | C12-D4 |
| rosehip-rowan-v12 | suszony głóg i jarzębina | drying | ryzyko-wysokie | SUS-327 | Rozdzielić: głóg osobno (bez źródła, do-researchu); jarzębina bez drogi. | — | Jarzębina: kwas parasorbowy (SUS-327, krytyczne). Głóg: tylko badanie plastrów głogu chińskiego (Crataegus pinnatifida), inny gatunek i forma. | C12-D5 |
| grapes-v09 | gruzińskie czurczchela (orzechy w zgęszczonym soku winogronowym) | drying | zostaje do-researchu | — | — | — | Jedyny opis: GSC Advanced Research and Reviews 2022 (wydawca o wątpliwej renomie, sekcja 7) – suszenie „until … no longer sticky”, bez parametrów. | C12-D2 |
| rhubarb-v08 | kandyzowane czipsy rabarbarowe | drying | zostaje do-researchu | SLO-069, SUS-184 | Zmiana na suszony rabarbar: OSU SP 50-882 (parowanie 1–2 min, „until tough to crisp”, sekcja 7) – bez temperatury i czasu, więc też do-researchu. | — | Brak przepisu na rabarbar w syropie suszony. PNW: rabarbar suszy się gorzej (SUS-184). | C12-D2 |
| lemon-v12 | kandyzowana skórka cytrynowa | sweet-preserves | zostaje do-researchu | SUS-328, SLO-069, SUS-001, SUS-018, SUS-019 | ok-zrodlo, gdy tor A przyjmie przechowywanie według SLO-069 (szczelnie w lodówce do tygodnia albo dosuszyć całkowicie i trzymać w chłodnym, ciemnym miejscu) dla procedury SUS-328 suszonej w 140°F (SUS-001). | — | Procedura szczebla 3 (Sacramento, SUS-328) bez czasu przechowywania. Pozostałe przepisy UC MFP: „Put ’em Up!” (książka, 1 miesiąc) i relacja wolontariuszki El Dorado (rok) – sekcja 7. Subagent proponował ok-zrodlo; zmienione (C12-D8). | C12-D8 |
| lemon-v13 | sól cytrynowa | drying | ok-zrodlo | SUS-329, SUS-330 | — | — | Brzmienie karty: 1 szklanka soli płatkowej na 3 łyżki skórki bez białej części; suszenie w suszarce 125°F (SUS-330) albo na powietrzu (SUS-329), aż skórka kruszy się w palcach; szczelnie w temperaturze pokojowej do 2 miesięcy (C12-D7). | C12-D7 |
| lemon-v15 | suszone plastry cytryny | drying | ok-zrodlo | SUS-331, SUS-001, SUS-018, SUS-019 | — | — | Brzmienie karty: plastry 3–6 mm, suszarka 140°F (SUS-001; źródło 130–135°F), do łamliwości, kondycjonowanie 7 dni, szczelnie z pochłaniaczem do 1 roku (SUS-331). | C12-D6 |
| lime-bergamot-v02 | bliskowschodnie czarne limonki suszone (loomi — gotowane w solance i suszone do pociemnienia) | drying | zostaje do-researchu | — | — | — | Brak źródła szczebla 1–3 (tylko serwisy kulinarne). | C12-D2 |
| lime-bergamot-v08 | kandyzowana skórka z limonki i bergamotki | sweet-preserves | zostaje do-researchu | SLO-069 | — | — | SUS-328 wymienia tylko pomarańczę, cytrynę i grejpfrut; „other thick-skinned citrus” tylko w przepisie z książki (sekcja 7). Limonka ma cienką skórkę; bergamotki brak. | C12-D2 |
| orange-kumquat-v10 | kandyzowane plastry pomarańczy w syropie (i w czekoladzie) | sweet-preserves | zostaje do-researchu | ACI-146, SLO-069 | — | — | Najbliższe: plastry pomarańczy w miodzie wekowane (Ball, przez UCCE) i kumkwaty kandyzowane w lodówce tydzień (blog, przez UCCE) – nie 1:1, szczebel oryginału 4–5. | C12-D2 |
| orange-kumquat-v11 | kandyzowana skórka pomarańczowa | sweet-preserves | zostaje do-researchu | SUS-328, SLO-069, SUS-001, SUS-018, SUS-019 | Jak lemon-v12: ok-zrodlo, gdy tor A przyjmie przechowywanie według SLO-069. | — | SUS-328: dla pomarańczy 2 gotowania. Przepis Solano-Yolo (suszenie na powietrzu 1–2 dni, bez czasu przechowywania) niczego nie dodaje. | C12-D8 |
| orange-kumquat-v14 | suszone plastry | drying | ok-zrodlo | SUS-331, SUS-001, SUS-018, SUS-019, SUS-184 | — | — | Brzmienie karty jak lemon-v15 (SUS-331, „any citrus fruits”); nazwa: „suszone plastry pomarańczy”. Jakość: SUS-184. | C12-D6 |
| grapefruit-v06 | gruba skórka z pomelo kandyzowana w syropie (bez goryczy po wielokrotnym blanszowaniu) | sweet-preserves | zostaje do-researchu | SUS-328, ACI-148, SLO-069 | Zmiana na skórkę grejpfruta suszoną według SUS-328 (5 gotowań) = droga jak lemon-v12. | — | Pomelo (Citrus maxima) to inny gatunek niż grejpfrut; przechowywania w syropie brak w źródłach. | C12-D8 |
| grapefruit-v09 | suszone plastry grejpfruta | drying | ok-zrodlo | SUS-331, SUS-001, SUS-018, SUS-019 | — | — | Brzmienie karty jak lemon-v15 (SUS-331). | C12-D6 |
| mango-papaya-v11 | kandyzowana zielona papaja | sweet-preserves | ryzyko-wysokie | SLO-026, SLO-057, SLO-069 | Brak drogi: nie ma przepisu na papaję kandyzowaną szczebla 1–3. | — | Papaja niskokwasowa (SLO-026; zielona bez danych); NCHFP przy wekowaniu papai zakwasza (SLO-057). Niskokwasowy produkt w cukrze bez procesu: pełna analogia C11-D5. | C12-D9 |
| mango-papaya-v12 | suszone paski mango | drying | zostaje do-researchu | SUS-030 | — | — | NCHFP ma tylko skórę z mango (SUS-030, SUS-216–221). CSU bez mango; Clemson 3084 403, UF FCS 8532 410, CTAHR brak połączenia. | C12-D2 |
| watermelon-melon-v07 | kandyzowana skórka arbuza i melona | sweet-preserves | ryzyko-wysokie | SUS-332, SLO-024, SLO-025, ACI-156, SLO-069 | Ograniczyć do skórki arbuza kandyzowanej i suszonej według UC MFP (SUS-332) → zostaje do-researchu (brak czasu przechowywania); melon usunąć. | — | Arbuz i melon niskokwasowe; dla skórki melona brak źródła; forma w syropie bez procesu. Pełna analogia C11-D5 (imbir: ryzyko-wysokie, po poprawce do-researchu). Subagent proponował ok-zrodlo; zmienione. | C12-D9 |
| walnut-nuts-v10 | orzechy w karmelu | drying | zostaje do-researchu | — | Propozycja dla roli 03: usunąć jako poza zakresem (wyrób cukierniczy; scope już „out-of-scope”). | — | Brak źródła o utrwalaniu orzechów w karmelu. | C12-D2 |
| boletes-v13 | sól borowikowa | drying | zostaje do-researchu | SUS-035, SUS-138, SUS-148 | Mieszanka proszku z boletes-v12 (ok-zrodlo) z solą dodaną po wysuszeniu – decyzja toru A, czy samo mieszanie wymaga procedury (jak C11-D11). | — | Brak procedury na sól grzybową; WSU: proszek z suszonych grzybów (bez soli). Pełna analogia C11-D11. | C12-D2 |
| wild-mushrooms-v10 | proszek z trzonów kani i opieniek | drying | ryzyko-wysokie | SUS-335, SUS-336, SUS-141, SUS-035, SUS-146 | Brak drogi: opieńki jadalne tylko młode kapelusze (SUS-335) po gotowaniu ≥20 min z wylaniem wody (SUS-336). | — | Trzony opieniek wbrew SUS-335; opieńka toksyczna na surowo (SUS-336); kania mylona ze śmiertelnie trującymi muchomorami (SUS-141). Analogia: wild-mushrooms-v09 (ryzyko-wysokie w katalogu). | C12-D11 |
| wild-garlic-v11 | suszone liście i sól zielona | drying | ryzyko-wysokie | SUS-337, SUS-338, SUS-031 | Brak drogi do ok-zrodlo w suszeniu: zioła suszy się w 35–46°C (SUS-031), a jaja tasiemca lisiego giną ok. 60°C (SUS-338); „sól zielona” bez źródła. | — | Pomyłki z konwalią i zimowitem (SUS-337); tasiemiec lisi (SUS-338). Ogólna procedura ziół NCHFP nie wymienia czosnku niedźwiedziego. Skutki dla innych wariantów wild-garlic: sekcja 9. | C12-D12 |
| garden-herbs-v13 | kandyzowane liście mięty i szałwii | sweet-preserves | ryzyko-wysokie | SUS-333, SUS-334 | Tylko z białkiem pasteryzowanym lub w proszku (SUS-333, SUS-334) → zostaje do-researchu (Rutgers opisuje kwiaty, nie liście). | — | Typowy przepis z surowym białkiem; FDA wymaga jaj pasteryzowanych do potraw z surowym jajem (SUS-333). Subagent proponował do-researchu; zmienione na ostrożniejsze (C12-D10). | C12-D10 |
| koji-ferments-v14 | suszone ziarna koji | drying | zostaje do-researchu | NAP-053 | — | — | Tylko badanie przemysłowe (Korea 1999, suszenie w 40°C, sekcja 6); BCCDC: koji w lodówce lub zamrażarce (NAP-053). | C12-D2 |
| yogurt-skyr-v11 | suszony jogurt kashk | drying | ryzyko-wysokie | SUS-339, SUS-340, MLE-021, MLE-022 | Brak drogi: brak procesu z parametrami (temperatura, aw) w źródłach szczebla 1–3. | — | Pokrewny Katık Keş suszony na powietrzu: aw 0,76, bakterie coli 3,36 log (SUS-340); kurut z handlu z S. aureus (SUS-339). | C12-D13 |
| quark-acid-cheese-v12 | suszony na kamień twaróg (kurt) | drying | ryzyko-wysokie | SUS-339 | Brak drogi: brak procesu domowego. | — | Kurut z handlu: S. aureus w 16–60%, E. coli w 12% próbek (SUS-339). | C12-D13 |
| beef-veal-v09 | południowoafrykański biltong (grube kawałki moczone w occie, obtaczane w kolendrze i suszone na powietrzu) | drying | ryzyko-wysokie | SUS-341, SUS-047, SUS-003, MIE-044, MIE-045 | Brak drogi domowej: walidacja tylko w komorze z kontrolą warunków (MIE-044, MIE-045). | — | Bez etapu letalnego cieplnego (SUS-341); NCHFP: jerky do 160°F (SUS-047), mięsa nie suszy się na wolnym powietrzu (SUS-003). Analogia B7-D1. | C12-D14 |
| poultry-v14 | jerky z piersi indyka | drying | ok-zrodlo | SUS-342, MIE-021, MIE-036, MIE-037, MIE-038, MIE-039, MIE-040, MIE-041, MIE-042 | — | — | Brzmienie karty: pierś bez skóry i tłuszczu, paski do 1/4 cala, obowiązkowe ogrzanie do 165°F (74°C) przed suszeniem albo zaraz po nim z pomiarem termometrem (SUS-342, B7-D1), suszenie 140°F (MIE-038), przechowywanie 2 tygodnie w temperaturze pokojowej (MIE-041, szczebel 1 wygrywa z PNW 1–2 miesiące). | C12-D15 |

## 4. Twierdzenia SUS-324–SUS-342 (do wklejenia przez tor A)

### SUS-324 (krytyczne)

- pl: Według monografii EMA bezpieczeństwo liści malin w ciąży i w okresie karmienia piersią nie zostało ustalone, więc ich stosowanie w tym czasie nie jest zalecane; nie zaleca się go też dzieciom i młodzieży poniżej 18 lat.
- en: According to the EMA monograph, the safety of raspberry leaf during pregnancy and lactation has not been established, so its use then is not recommended; use in children and adolescents under 18 years of age is not recommended either.
- źródło (szczebel 1, pdftotext+grep, sha12 61ec70f3c655, odczyt 2026-11-02): https://www.ema.europa.eu/documents/herbal-monograph/final-community-herbal-monograph-rubus-idaeus-l-folium_en.pdf — EMA/HMPC/44211/2012, Community herbal monograph on Rubus idaeus L., folium; 4.2 Posology, 4.6 Fertility, pregnancy and lactation: „The use in children and adolescents under 18 years of age is not recommended … In the absence of sufficient data, the use during pregnancy and lactation is not recommended.”
- warianty: raspberry-blackberry-v15; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Monografia leku roślinnego (herbata 1,5–8 g na 150 ml, 3 razy dziennie), nie procedura suszenia. Ostrzeżenie do requiredWarnings, jeśli wariant (liście) zostanie.

### SUS-325

- pl: Według ministerstwa rolnictwa Ontario (OMAFRA) owoce rokitnika przetwarza się możliwie szybko po zbiorze, a do tego czasu przechowuje w 4–6°C (do 2 tygodni) albo szybko zamraża; suszy się i miele na herbatę młode liście, nie owoce.
- en: According to the Ontario agriculture ministry (OMAFRA), sea buckthorn berries are processed as soon as possible after harvest and until then stored at 4–6°C (up to 2 weeks) or flash frozen; young leaves, not berries, are dried and ground for tea.
- źródło (szczebel 1, curl+grep, sha12 4546fa91078f, odczyt 2026-11-02): https://www.ontario.ca/page/introduction-sea-buckthorn — Ontario.ca (OMAFRA), Introduction to sea buckthorn; Harvesting and post-harvest handling, Uses: „After cleaning, the berries should be processed as soon as possible, but may be either stored at low temperature (4 to 6°C), or flash frozen if immediate processing is not feasible. The shelf life of berries stored at low temperature can be up to 2 weeks. … Young leaves have been dried and ground for use as a tea.”
- warianty: chokeberry-seabuckthorn-v12; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uproszczenie: „Nie owoce” to wniosek redakcji: źródło wymienia suszenie tylko przy liściach.
- uwaga: Strona opisuje sad doświadczalny (Wingham); nie jest procedurą domową.

### SUS-326

- pl: Według Cape Cod Cooperative Extension (UMass Extension) twarde, świeże owoce dzikiej róży do herbaty suszy się w całości, bez szypułek i końcówek, w piekarniku od bardzo niskiej temperatury 110°F (ok. 43°C) przy otwartych drzwiach, stopniowo podnosząc ją do 130–140°F (ok. 54–60°C) przez 6–8 godzin; suszenie przerywa się, gdy owoce uginają się pod naciskiem palca, bez dosuszania do końca.
- en: According to Cape Cod Cooperative Extension (UMass Extension), hard, fresh rose hips for tea are dried whole, with stems and ends cut off, in an oven starting at a very low 110°F (about 43°C) with the door open, gradually raising it to 130–140°F (about 54–60°C) over 6–8 hours; drying stops when the hips yield to finger pressure, without drying completely.
- źródło (szczebel 3, pdftotext+grep, sha12 4b6de8dcffd2, odczyt 2026-11-02): https://www.capecod.gov/wp-content/uploads/2022/03/rose-hip-recipes.pdf — Cape Cod Cooperative Extension, Rose Hip Jams, Jellies and Tea, s. 1, ramka „Rose Hip Tea”: „To dry the hard, fresh rose hips, inspect, clean and cut off stems or ends. … put in the oven at a very low temperature, (110˚ F) with the oven door left open. The temperature can be gradually raised to 130˚ F-140˚ F over a period of six to eight hours. The drying should be stopped as soon as the berries yield to the pressure of a finger. They should not be dried completely because they again become hard and too difficult to handle.”
- warianty: rosehip-rowan-v11; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Start 110°F stoi w sprzeczności z SUS-002 (zbyt niska temperatura na początku) i SUS-001 (140°F); koniec „nie do końca suche” – z testem suchości owoców (SUS-063). Brak czasu przechowywania (tylko „airtight container”). C12-D4.

### SUS-327 (krytyczne)

- pl: Według UW-Madison CIAS surowe owoce jarzębiny pospolitej (Sorbus aucuparia) zawierają kwas parasorbowy, opisany jako znany kancerogen; obróbka cieplna (gotowanie, suszenie w cieple) i w mniejszym stopniu mrożenie mogą go neutralizować, a nasiona prawdopodobnie zawierają cyjanowodór.
- en: According to UW-Madison CIAS, raw European mountain ash (rowan, Sorbus aucuparia) berries contain parasorbic acid, described as a known carcinogen; heat treatment (cooking, heat drying) and to a lesser extent freezing may neutralize it, and the seeds probably contain hydrogen cyanide.
- źródło (szczebel 3, curl+grep, sha12 3f3a43845fb2, odczyt 2026-11-02): https://uncommonfruit.cias.wisc.edu/?p=157 — UW-Madison Center for Integrated Agricultural Systems, Uncommon Fruits: European Mountain Ash, akapit o spożyciu: „Raw European mountain ash, which is too astringent to be eaten, contains parasorbic acid, which is a known carcinogen (Pieters and Vlietinck, 1991). … Heat treatment (cooking, heat drying, etc.) and to a lesser extent, freezing, may neutralize parasorbic acid. The seeds probably contain hydrogen cyanide, also toxic (Plants for a Future).”
- warianty: rosehip-rowan-v10, rosehip-rowan-v12; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Źródło pośrednie (cytuje Pieters i Vlietinck 1991 oraz Plants for a Future); „may neutralize” bez warunków (temperatura, czas). Szczebel 3 jako ośrodek uczelni, nie extension (C12-D16). Dotyczy też innych wariantów z jarzębiną (rosehip-rowan-v02, v07) – dla toru A.

### SUS-328

- pl: Według UCCE Master Food Preservers hrabstwa Sacramento skórkę kandyzowaną z suszarki robi się tak: skórkę kroi się w paski 1/4 cala (ok. 6 mm), moczy 1–2 godziny w zimnej wodzie, zagotowuje i odlewa wodę, a gotowanie w świeżej wodzie powtarza 2 razy dla pomarańczy, 3 dla cytryny i 5 dla grejpfruta; potem gotuje 20 minut z cukrem (50% masy skórki), zostawia w syropie na kilka godzin, odsącza i suszy w 135°F (ok. 57°C) 5–6 godzin, aż będzie sucha, ale giętka.
- en: According to the Sacramento County UCCE Master Food Preservers, dehydrator candied peel is made like this: peel is cut into 1/4-inch (about 6 mm) slices, soaked 1–2 hours in cold water, brought to a boil and drained, and boiling in fresh water is repeated 2 times for orange, 3 for lemon and 5 for grapefruit; then it is simmered 20 minutes with sugar (50% of the peel weight), left in the syrup for a few hours, drained and dried at 135°F (about 57°C) for 5–6 hours until dry but pliable.
- źródło (szczebel 3, pdftotext+grep, sha12 16bf029b6021, odczyt 2026-11-02): https://ucanr.edu/sites/LassenMFP/files/397668.pdf — UCCE MFP Sacramento, Candied Lemon Peel Using a Dehydrator (17.02.2021), kroki 3–12: „3. Cut peel to 1/4" thick slices. … Use 50% of the weight of the peel … 5. Soak the peel in cold water for 1-2 hrs to lessen the bitter taste in the peel. … 7. Repeat the boiling process with fresh cold water: | i. 2 x for orange | ii. 3 x for lemon | iii. 5 x for grapefruit … 8.Drain the liquid, add sugar, and simmer the peel for 20 minutes. … 11. Dehydrate the peel at 135° for 5 to 6 hours. | 12. Peel is done when it is dry, but pliable.”
- warianty: lemon-v12, orange-kumquat-v11, grapefruit-v06; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Przepis bez czasu i warunków przechowywania. 135°F poniżej 140°F (SUS-001). Grejpfrut ≠ pomelo (grapefruit-v06).

### SUS-329

- pl: Według UCCE Master Food Preservers hrabstwa Sacramento sól cytrusową robi się z 1 szklanki soli płatkowej lub gruboziarnistej i 3 łyżek otartej skórki cytrusów: skórkę wciera się palcami w sól, rozkłada na blasze i suszy na powietrzu do całkowitego wyschnięcia (8 godzin do nocy); przechowuje się ją szczelnie zamkniętą w temperaturze pokojowej do 2 miesięcy.
- en: According to the Sacramento County UCCE Master Food Preservers, citrus salt is made from 1 cup flake or coarse salt and 3 tablespoons citrus zest: the zest is worked into the salt with the fingers, spread on a baking tray and air-dried until completely dry (8 hours to overnight); it is kept airtight at room temperature for up to 2 months.
- źródło (szczebel 3, pdftotext+grep, sha12 421f62f4ea23, odczyt 2026-11-02): https://ucanr.edu/sites/sacmfp/files/293885.pdf — UCCE MFP Sacramento, Citrus All Year (17.01.2018), s. 7 „Citrus Salt”: „1 cup flake salt or coarse salt | 3 tablespoons citrus zest (any kind) … 1. Mix salt and zest in a bowl; work zest into salt with your fingers to release oils and flavor. | 2. Spread on a baking tray. | 3. Air-dry until dried completely, 8 hours to overnight. | 4. Keep airtight at room temperature for up to 2 months.”
- warianty: lemon-v13; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)

### SUS-330

- pl: Według UC Master Food Preserver Program (2025) sól cytrusową z otartej skórki (bez białej części) i soli suszy się w suszarce w 125°F (ok. 52°C) albo w piekarniku 220°F (105°C), aż skórka będzie sucha i kruszy się w palcach; przechowuje się ją w szczelnych słoikach, a najlepszy smak ma przez pierwsze 3 miesiące.
- en: According to the UC Master Food Preserver Program (2025), citrus salt from zest (without the white pith) and salt is dried in a dehydrator at 125°F (about 52°C) or in a 220°F (105°C) oven until the zest feels dry and crumbles when pinched; it is stored in airtight jars and has its best flavor in the first 3 months.
- źródło (szczebel 3, pdftotext+grep, sha12 a89fc7c7d0e4, odczyt 2026-11-02): https://innovate.ucanr.edu/sites/default/files/2025-11/Citrus%20Without%20Canning%20Recipe%20Handout-1.pdf — UC MFP, Preserving Citrus without Canning (styczeń 2025), s. 2 „Citrus Salts”: „Zest the colorful exterior; avoiding the white pith. … Dehydrate at 125°F or bake in a 220°F / 105°C oven. … The salts are done when the zest feels dry and crumbles when pinched. … Your salts will be shelf-stable indefinitely, but will have their best flavor in the first three months.”
- warianty: lemon-v13; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Przechowywanie: Sacramento „do 2 miesięcy” (SUS-329), UC MFP „bezterminowo, najlepszy smak 3 miesiące”: karta podaje 2 miesiące (część wspólna, wariant ostrożniejszy, C12-D7).

### SUS-331

- pl: Według UC Master Food Preserver Program (2025) plastry cytrusów (dowolny gatunek) kroi się równo na grubość 1/8–1/4 cala (ok. 3–6 mm), suszy w suszarce 12–18 godzin w 130–135°F (ok. 54–57°C), odwracając w połowie, aż będą łamliwe; potem kondycjonuje 7 dni w pojemniku, codziennie potrząsając, i przechowuje w szczelnym pojemniku z pochłaniaczem wilgoci do 1 roku.
- en: According to the UC Master Food Preserver Program (2025), citrus slices (any kind) are cut evenly 1/8–1/4 inch (about 3–6 mm) thick, dried in a dehydrator for 12–18 hours at 130–135°F (about 54–57°C), flipped halfway, until brittle; then conditioned for 7 days in a container, shaken daily, and stored in an airtight container with a desiccant pack for up to 1 year.
- źródło (szczebel 3, pdftotext+grep, sha12 a89fc7c7d0e4, odczyt 2026-11-02): https://innovate.ucanr.edu/sites/default/files/2025-11/Citrus%20Without%20Canning%20Recipe%20Handout-1.pdf — UC MFP, Preserving Citrus without Canning (styczeń 2025), s. 1 „Dehydrated Citrus Wheels”: „Wash and slice citrus evenly (1/8 to 1/4 inch thick) … Use any citrus fruits for this method … Set dehydrator to 130-135 °F … Dry 12-18 hours, flipping halfway … Check for doneness (brittle with a leathery texture) … Condition the citrus slices for 7 days after drying by placing them in a container and shake daily to evenly distribute the moisture … Store in an airtight container with a food safe dessicant packet for up to one year.”
- warianty: lemon-v15, orange-kumquat-v14, grapefruit-v09; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uproszczenie: „Brittle with a leathery texture” oddane jako „łamliwe”.
- uwaga: Temperatura w karcie 140°F według SUS-001 (szczebel 1 wygrywa, kierunkowo bezpieczniej; C12-D6). PNW: pomarańcze suszą się gorzej (SUS-184, jakość).

### SUS-332

- pl: Według UC Master Food Preserver Program skórkę arbuza kandyzuje się tak: odcina się różowy miąższ i zieloną skórę, kroi białą część w kostki ok. 1 cala (2,5 cm), gotuje w syropie z 1 szklanki cukru i 2 szklanek wody około 7 minut z każdej strony, aż będzie prawie przezroczysta, i suszy w suszarce w 135°F (ok. 57°C) do 4–6 godzin, aż będzie giętka, ale nie lepka.
- en: According to the UC Master Food Preserver Program, watermelon rind is candied like this: the pink flesh and green skin are trimmed off, the white rind is cut into about 1-inch (2.5 cm) squares, simmered in a syrup of 1 cup sugar and 2 cups water about 7 minutes on each side until fairly translucent, and dried in a dehydrator at 135°F (about 57°C) for up to 4–6 hours until pliable but not tacky.
- źródło (szczebel 3, pdftotext+grep, sha12 4525685436fa, odczyt 2026-11-02): https://class.ucanr.edu/sites/default/files/2020-09/335009.pdf — UC MFP Program, Melon: Preserve It, „Candied Watermelon Rinds”, File 1-0042: „1 cup sugar | 2 cups water … 1. Trim the pink flesh and outer green skin from thick watermelon rinds. Cut into 1-inch squares or fancy shapes as desired. … 3. Add just enough rinds to have a single layer. Simmer on each side for about 7 minutes. Rinds should be fairly translucent when finished. | 4. Dry at 135°F in dehydrator, turning pieces over halfway through. It can take up to 4-6 hours until rinds are pliable but not tacky.”
- warianty: watermelon-melon-v07; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Brak czasu i warunków przechowywania; arbuz niskokwasowy (SLO-024, ACI-156); kantalupy brak. C12-D9.

### SUS-333 (krytyczne)

- pl: Według FDA do potraw, w których jaja są surowe lub niedogotowane w chwili podania, używa się jaj w skorupkach poddanych obróbce niszczącej Salmonellę (pasteryzacji lub innej zatwierdzonej metodzie) albo pasteryzowanych produktów jajecznych.
- en: According to FDA, for dishes in which eggs are raw or undercooked when served, use shell eggs treated to destroy Salmonella (by pasteurization or another approved method) or pasteurized egg products.
- źródło (szczebel 1, curl+grep, sha12 3da77e24e73c, odczyt 2026-11-02): https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety — FDA, What You Need to Know About Egg Safety; sekcja „Preparing”: „For recipes that call for eggs that are raw or undercooked when the dish is served — like Caesar salad dressing and homemade ice cream — use either shell eggs that have been treated to destroy Salmonella, by pasteurization or another approved method, or pasteurized egg products.”
- warianty: garden-herbs-v13; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Kandyzowane liście i kwiaty zwykle smaruje się surowym białkiem (SUS-334).

### SUS-334

- pl: Według Rutgers Cooperative Extension (hrabstwo Ocean) kwiaty jadalne kandyzuje się, smarując je pędzelkiem mieszaniną 1 białka albo 1 łyżeczki białka w proszku z 1 łyżeczką wody lub wódki i obsypując drobnym cukrem; suszy się je 4–24 godziny i przechowuje w szczelnym pojemniku do 2 tygodni.
- en: According to Rutgers Cooperative Extension (Ocean County), edible flowers are crystallized by brushing them with a mix of 1 egg white or 1 teaspoon powdered egg whites with 1 teaspoon water or vodka and sprinkling with superfine sugar; they are dried 4–24 hours and stored in an airtight container for up to 2 weeks.
- źródło (szczebel 3, pdftotext+grep, sha12 02c6b8c79bfc, odczyt 2026-11-02): https://archive.sebs.rutgers.edu/wp-content/uploads/Edible-Flowers-Handout.pdf — Rutgers Cooperative Extension of Ocean County, Edible Flowers handout, „Crystallized / Candied / Sugared Edible Flowers”: „1 egg white or 1 teaspoon powdered egg whites | 1 teaspoon water or vodka (vodka dries the flowers faster) | ½ cup superfine sugar … With a small paintbrush, apply the egg white mix lightly to the front and back of the flower. … Let dry for 4-24 hours. Can be stored in an airtight container for up to 2 weeks”
- warianty: garden-herbs-v13; jedno źródło: tak; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Kwiaty, nie liście mięty i szałwii: nie 1:1. Źródło nie wymaga białka pasteryzowanego (zob. SUS-333).

### SUS-335 (krytyczne)

- pl: Według Państwowej Inspekcji Sanitarnej (PSSE Golub-Dobrzyń) opieńka miodowa jest grzybem jadalnym, ale do spożycia nadają się tylko młode kapelusze.
- en: According to the Polish State Sanitary Inspection (PSSE Golub-Dobrzyń), the honey fungus is an edible mushroom, but only young caps are fit to eat.
- źródło (szczebel 1, curl+grep, sha12 bc614e195382, odczyt 2026-11-02): https://www.gov.pl/web/psse-golub-dobrzyn/pomylka-ktora-moze-byc-smiertelna-czyli-grzybowe-pomylki — gov.pl, PSSE Golub-Dobrzyń, „Pomyłka, która może być śmiertelna, czyli grzybowe pomyłki” (27.08.2024), sekcja „Opieńka miodowa, a maślanka wiązkowa”: „Opieńka miodowa jest jadalnym grzybem, jednak do spożycia nadają się tylko młode kapelusze.”
- warianty: wild-mushrooms-v10; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Proszek z trzonów opieniek jest sprzeczny z tym zaleceniem.

### SUS-336 (krytyczne)

- pl: Według ATS Milano (agencja zdrowia publicznego) opieńka miodowa (Armillaria mellea) jest toksyczna na surowo lub niedogotowana; żeby była jadalna, trzeba ją najpierw gotować co najmniej 20 minut bez przykrycia i wylać wodę, bo zawiera toksyny niszczone ciepłem.
- en: According to ATS Milano (public health agency), honey fungus (Armillaria mellea) is toxic raw or undercooked; to make it edible it must first be boiled for at least 20 minutes uncovered and the water discarded, because it contains heat-labile toxins.
- źródło (szczebel 1, pdftotext+grep, sha12 1f94dd51177c, odczyt 2026-11-02): https://storico.comune.cesate.mi.it/wp-content/uploads/2020/09/Funghi-Locandina.pdf — ATS Milano, ulotka „I funghi: consigli per la raccolta, il consumo e la conservazione” (kopia na stronie gminy Cesate), sekcja o spożyciu: „L’Armillaria mellea (chiodino), per esempio, è considerato un fungo tossico se consumato crudo o poco cotto … di almeno 20 minuti, senza coperchio e con eliminazione dell’acqua in quanto contiene delle tossine termolabili che si disattivano se esposte al calore”
- warianty: wild-mushrooms-v10; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Kopia ulotki na stronie gminy; oryginał ATS Milano (szczebel nadaje oryginał, C12-D16). Suszenie bez wcześniejszego gotowania nie spełnia tego wymogu.

### SUS-337 (krytyczne)

- pl: Według BfR młode liście czosnku niedźwiedziego są podobne do liści trującej konwalii majowej i bardzo trującego zimowitu jesiennego; w razie wątpliwości lepiej ich nie jeść. Według AGES czosnek niedźwiedzi bywa mylony także z obrazkami plamistymi, kokoryczem wielokwiatowym i zdziczałymi tulipanami.
- en: According to BfR, young wild garlic leaves resemble those of the poisonous lily of the valley and the very poisonous autumn crocus; when in doubt, it is better not to eat them. According to AGES, wild garlic is also confused with spotted arum, Solomon’s seal and wild tulips.
- źródło (szczebel 1, curl+grep, sha12 a9ba67007094, odczyt 2026-11-02): https://www.bfr.bund.de/presseinformation/baerlauch-verwechslungen-fuehren-haeufig-zu-vergiftungen/ — BfR, Presseinformation 07/2023 „Bärlauch-Verwechslungen führen häufig zu Vergiftungen”, akapit 2: „Die jungen Blätter ähneln denen des giftigen Maiglöckchens (Convallaria majalis) und der sehr giftigen Herbstzeitlosen (Colchicum autumnale).”
- źródło (szczebel 1, curl+grep, sha12 7fbb661b0841, odczyt 2026-11-02): https://www.bfr.bund.de/presseinformation/verwechslungsgefahr-bei-baerlauch — BfR, Presseinformation 10/2005 „Verwechslungsgefahr bei Bärlauch”, akapit 3: „rät Sammlern daher, im Zweifelsfall besser auf den Verzehr zu verzichten.”
- źródło (szczebel 1, curl+grep, sha12 82fe972128f7, odczyt 2026-11-02): https://www.ages.at/mensch/ernaehrung-lebensmittel/lebensmittelinformationen/baerlauch — AGES, Lebensmittelinformationen „Bärlauch”, sekcja o pomyłkach: „Der Bärlauch wird beim Sammeln in heimischen Laub- und Mischwäldern immer wieder mit Herbstzeitlosen, Maiglöckchen, geflecktem Aronstab, vielblütiger Weißwurz (Salomonssiegel) und verwilderten Tulpen verwechselt.”
- warianty: wild-garlic-v11; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Dotyczy wszystkich wariantów wild-garlic (dla toru A). Przypadki zatrucia zimowitem pomylonym z czosnkiem niedźwiedzim: Brvar 2004 (sekcja 6, kontekst).

### SUS-338 (krytyczne)

- pl: Według AGES liście czosnku niedźwiedziego mogą być zanieczyszczone jajami tasiemca lisiego, które wywołują u ludzi zagrażającą życiu chorobę; jaja przeżywają zamrażanie w -18°C i giną dopiero w temperaturze około 60°C, dlatego liście przed jedzeniem lub zamrożeniem myje się pojedynczo pod gorącą bieżącą wodą.
- en: According to AGES, wild garlic leaves may be contaminated with fox tapeworm eggs, which cause a life-threatening disease in humans; the eggs survive freezing at -18°C and are killed only at around 60°C, so the leaves are washed one by one under hot running water before eating or freezing.
- źródło (szczebel 1, curl+grep, sha12 82fe972128f7, odczyt 2026-11-02): https://www.ages.at/mensch/ernaehrung-lebensmittel/lebensmittelinformationen/baerlauch — AGES, Lebensmittelinformationen „Bärlauch”, sekcja o przygotowaniu: „Bärlauchblätter vor dem Verzehr bzw. dem Einfrieren einzeln gründlich unter heißem fließendem Wasser waschen, da diese u.a. mit Fuchsbandwurm-Eiern, Keimen und sonstigen Verunreinigungen kontaminiert sein können. Fuchsbandwurm-Eier können beim Menschen eine lebensbedrohliche Erkrankung mit tumorartigen Wucherungen, meist in der Leber, auslösen … Sie sind mit bloßem Auge nicht erkennbar und überleben übliche Tiefkühltemperaturen von -18° Celsius. Bei Temperaturen um +60° Celsius werden die Eier abgetötet.”
- warianty: wild-garlic-v11; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Suszenie ziół w 95–115°F (35–46°C, SUS-031) nie osiąga ok. 60°C. Dotyczy też wild-garlic-v07 (pesto mrożone, ok-zrodlo) – dla toru A.

### SUS-339 (krytyczne)

- pl: W badaniach kurutu (suszonego twarogu lub jogurtu) z handlu w Turcji Staphylococcus aureus wykryto w 16% (Elazığ, 2002) i 60% próbek (Van, 2026), a Escherichia coli w 12% próbek (2002).
- en: In studies of retail kurut (dried curd or yoghurt) in Turkey, Staphylococcus aureus was found in 16% (Elazığ, 2002) and 60% of samples (Van, 2026), and Escherichia coli in 12% of samples (2002).
- źródło (szczebel 2, curl+grep, sha12 cc72da8458a4, odczyt 2026-11-02): https://journals.tubitak.gov.tr/veterinary/vol26/iss4/14 — Patır, Ateş, Turk J Vet Anim Sci 2002;26(4), abstrakt: „Twelve percent of samples contained Escherichia coli 1, and 16% had Staphylococcus aureus microorganisms.”
- źródło (szczebel 2, pdftotext+grep, sha12 09d20c63b248, odczyt 2026-11-02): https://dergipark.org.tr/tr/download/article-file/5689747 — Tuncay i in., Vet Hekim Der Derg 2026;97(2):143-153, abstrakt EN: „Coliform bacteria were present in 36% of samples, S. aureus in 60%, and yeast-mold in all samples (100%).”
- warianty: quark-acid-cheese-v12, yogurt-skyr-v11; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uproszczenie: Przedział z dwóch badań tego samego szczebla podany z różnicą (16% i 60%).
- uwaga: Produkty handlowe, nie domowe; pokazują, że tradycyjne suszenie nie zapewnia bezpieczeństwa mikrobiologicznego.

### SUS-340

- pl: W badaniu tureckiego Katık Keş (suszony odciekany jogurt) produkt formuje się w stożki i suszy na wolnym powietrzu 10–15 dni; średnia aktywność wody próbek wyniosła 0,76, a liczba bakterii z grupy coli 3,36 log CFU/g (jtk/g).
- en: In a study of Turkish Katık Keş (dried strained yoghurt), the product is shaped into cones and dried in open air for 10–15 days; the mean water activity of samples was 0.76 and coliform count 3.36 log CFU/g.
- źródło (szczebel 2, pdftotext+grep, sha12 9e7eee7c28ca, odczyt 2026-11-02): https://dergipark.org.tr/en/download/article-file/1147558 — Coşkun i in., GIDA 2020;45(3):564-571, abstrakt i Materials and Methods: „The desired shape (usually symmetric cone shape) is given to the Keş and dried in open air for 10-15 days. … The numbers of yeasts & molds and coliforms of the samples were 5.98 and 3.36 log CFU/g, respectively. Mean water activity value was obtained as 0.76.”
- warianty: yogurt-skyr-v11; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Katık Keş to produkt pokrewny kashk, nie identyczny; brak procesu z parametrami dla kashk.

### SUS-341 (krytyczne)

- pl: Biltong wytwarza się bez etapu letalnego cieplnego, co budzi wątpliwości, czy podczas produkcji następuje skuteczna redukcja patogenów; wołowina suszona na powietrzu (biltong, droëwors) różni się od amerykańskiego jerky, które podgrzewa się do 160°F (ok. 71°C) lub wyżej.
- en: Biltong is manufactured without a heat lethality step, raising concerns about whether effective pathogen reduction occurs during processing; air-dried beef (biltong, droëwors) differs from US beef jerky, which is heated to 160°F (about 71°C) or more.
- źródło (szczebel 2, pdftotext+grep, sha12 e5e8fa032de4, odczyt 2026-11-02): https://mdpi-res.com/d_attachment/microorganisms/microorganisms-10-01308/article_deploy/microorganisms-10-01308.pdf — Gavai, Karolenko, Muriana, Microorganisms 2022;10:1308, abstrakt: „Biltong is a dry beef product that is manufactured without a heat lethality step, raising concerns of whether effective microbial pathogen reduction can occur during biltong processing.”
- źródło (szczebel 3, curl+grep, sha12 b097252c5693, odczyt 2026-11-02): https://www.nal.usda.gov/research-tools/food-safety-research-projects/filling-usda-fsis-food-safety-knowledge-gaps-safety-ambient-temperature-air-dried-beef-droewors — USDA NAL, Food Safety Research Projects: „Filling USDA FSIS Food Safety Knowledge Gaps: Safety of Ambient Temperature Air-Dried Beef (Droëwors)”, opis projektu: „Air-dried beef such as biltong and droëwors areprocessed differently than traditional US dried beef (beef jerky) which is heated tolethal temperaturesof 160*F or more.”
- warianty: beef-veal-v09; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: Walidacja (MIE-044, MIE-045) tylko w komorze z kontrolą temperatury i 55% RH; domowe suszenie na powietrzu nie jest nią objęte. Cytat NAL z błędami spacji w oryginale.

### SUS-342 (krytyczne)

- pl: Według PNW 632 (University of Idaho, Oregon State, Washington State) jerky jest gotowe i bezpieczne dopiero, gdy mięso zostało ogrzane do 160°F (ok. 71°C), a drób do 165°F (ok. 74°C), przed suszeniem albo zaraz po nim; najlepsze części drobiu to pierś, udo i podudzie, bez skóry i tłuszczu.
- en: According to PNW 632 (University of Idaho, Oregon State, Washington State), jerky is done and safe only when meat has been heated to 160°F (about 71°C) and poultry to 165°F (about 74°C), before or immediately after dehydration; the best poultry cuts are breast, thigh and leg, without skin and fat.
- źródło (szczebel 3, pdftotext+grep, sha12 dcc0fb3f01f6, odczyt 2026-11-02): https://blogs.cornell.edu/cceherkimer/files/2021/05/PNW0632-Making-Jerky-at-Home-Safely.pdf — PNW 632 Making Jerky at Home Safely (rev. 08/2020), s. 2 i s. 5 „Poultry and rabbit”: „Jerky can be considered “done” and safe to eat only when meat has been heated sufficiently to 160°F and poultry to 165°F before or immediately after the dehydration process. … Poultry and rabbit. The best cuts of poultry include the breast, thigh, and leg. … Remove the skin and fat before drying.”
- źródło (szczebel 3, curl+grep, sha12 3b48354d2655, odczyt 2026-11-02): https://ohioline.osu.edu/factsheet/hyg-5362 — Ohio State University Extension, Ohioline HYG-5362, metoda podgrzania przed suszeniem: „Heat the meat strips to an internal temperature of 160 degrees Fahrenheit (165°F for poultry).”
- źródło (szczebel 3, pdftotext+grep, sha12 c4ab9e4b3b7f, odczyt 2026-11-02): https://publications.ca.uky.edu/sites/publications.ca.uky.edu/files/FCS3594.pdf — University of Kentucky, FCS3-594, kolumna 1: „USDA currently recommends heating meat to 160°F and poultry to 165°F before the dehydrating process begins to make jerky.”
- warianty: poultry-v14; jedno źródło: nie; status: robocze; przegląd: brak (D-027, tor A)
- uwaga: PNW 632 podaje trwałość 1–2 miesiące w temperaturze pokojowej; NCHFP (szczebel 1) 2 tygodnie (MIE-041): karta podaje 2 tygodnie (C12-D15). NCHFP: surowy drób „generally not recommended” z powodu tekstury i smaku (MIE-042).

## 5. Bez źródła szczebla 1–3 (szukane, nie znalezione)

- **dereń, aronia, rokitnik (owoce), głóg, mango w paskach, czurczchela: procedura suszenia** (cornelian-cherry-v10, chokeberry-seabuckthorn-v11, chokeberry-seabuckthorn-v12, rosehip-rowan-v12, mango-papaya-v12, grapes-v09): NCHFP (tylko skóra z mango), CSU Drying Fruits, UNL EC3062, NDSU F2195, OMAFRA, PMC (rokitnik przemysłowo, głóg chiński), dergipark (dereń, kinetyka). Clemson 3084: 403; UAF FNH-00114, Iowa State, UMaine, CTAHR: błąd TLS lub brak połączenia; UF FCS 8532: 410.
- **liście malin: procedura suszenia** (raspberry-blackberry-v15): Tylko ogólna procedura ziół NCHFP i monografia EMA (SUS-324).
- **kandyzowanie: aronia, jarzębina, pomelo, limonka i bergamotka, plastry pomarańczy, rabarbar, zielona papaja, liście mięty i szałwii; loomi** (chokeberry-seabuckthorn-v10, rosehip-rowan-v10, grapefruit-v06, lime-bergamot-v08, orange-kumquat-v10, rhubarb-v08, mango-papaya-v11, garden-herbs-v13, lime-bergamot-v02): NCHFP candied-fruit: strona „404: Page Not Found” (HTTP 200); UC MFP (statewide i powiaty), Missouri HES173, Rutgers, NDSU, MSU (blokada botów); FSIS, CDC, foodsafety.gov: 403.
- **sól grzybowa, koji suszone, kashk, kurt: proces z parametrami** (boletes-v13, koji-ferments-v14, yogurt-skyr-v11, quark-acid-cheese-v12): WSU (proszek grzybowy), Penn State, Dz.U. 2011 nr 115 poz. 672, badanie koreańskie 1999, prace tureckie o kurut i Katık Keş; Tabriz (kashk) i ASL Biella: brak połączenia.
- **biltong: wytyczne domowe; FSIS jerky z drobiu (oryginał)** (beef-veal-v09, poultry-v14): FSIS: 403 na wszystkich adresach (cytat 165°F przez PNW 632, OSU, UKy, K-State); UK FSA biltong: 404.

## 6. Kontekst przeczytany, bez twierdzenia

- Dereń (Cornus mas): dwie prace o kinetyce suszenia (dergipark 312611 – słońce; 346243 – 50, 60, 70ºC), bez procedury domowej.
- Koji: Kim, Roh, Kim, Korean J. Food Sci. Technol. 1999 – suszenie w 40°C, badanie przemysłowe.
- Zatrucia zimowitem pomylonym z czosnkiem niedźwiedzim: Brvar i in. 2004 (PubMed 15088997, 14975056) – potwierdzają SUS-337.
- Ann Ist Super Sanità 2022;58(3) – Chlorophyllum mylony z kanią; Dz.U. 2011 nr 115 poz. 672 – grzyby suszone z kapeluszy z trzonami, trzonów nie więcej niż kapeluszy (SUS-148 dotyczy wody).
- Kandyzowana jarzębina fabryczna z kwasem sorbowym (ŻNTJ, journal.pttz.org/?p=1252) – jakość, nie bezpieczeństwo domowe.

## 7. Źródła odrzucone (przeczytane, nieużyte jako granica)

- UC ANR (A. Juarez), Dehydrating and Freezing Citrus, 2023 (https://class.ucanr.edu/sites/default/files/2023-02/380659.pdf): „Source : The Dehydrator Bible” — Czasy dla gatunków (130°F; cytryny 18–20 h, grejpfrut 22–24 h) przepisane z książki: źródło pochodne, szczebel oryginału 4. Nieużyte; SUS-331 z własnego handoutu UC MFP.
- UC MFP File 1-0040 Candied Citrus Peel (https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/333958.pdf): „Source: Put ‘em Up! … 5. Peels keep, stored in an airtight container, for up to 1 month.” — Przedruk z książki (szczebel oryginału 4): nie wyznacza granicy przechowywania (C12-D8).
- UCCE MFP El Dorado, Candied Citrus Peel (2022) (https://ccfruitandnuts.ucanr.edu/sites/default/files/2022-01/362038.pdf): „If dehydrated properly it will keep for a year. If not, it will mold.” — Relacja wolontariuszki („What I do”), nie przepis programu; sprzeczna z 1 miesiącem z przedruku. Nieużyta jako granica.
- Oregon State SP 50-882 Preserving Rhubarb (kopia UC ANR) (https://www.ccfruitandnuts.ucanr.edu/sites/default/files/2020-12/340439.pdf): „To Dry: Wash, trim and slice into 1-inch slices. Steam for 1-2 minutes or until slightly tender, but not soft. Dry on dehydrator trays until tough to crisp.” — Suszony rabarbar bez temperatury i czasu; nie kandyzowany (rhubarb-v08 – tylko droga).
- UNL Extension EC3062, Chokeberry (Aronia) (https://extensionpubs.unl.edu/publication/ec3062/na/pdf/view): „Fruit can be eaten raw, dried, juiced, or cooked, or it can also be used to make wine.” — Wzmianka, nie procedura (chokeberry-seabuckthorn-v11).
- GSC Advanced Research and Reviews 2022 (czurczchela) (https://gscarr.gsconlinepress.com/sites/default/files/fulltext_pdf/GSCARR-2022-0368.pdf): „Churchkhela strings are then left to dry for several days until they are no longer sticky to the touch (to prevent moisture or mold growth).” — Wydawca o wątpliwej renomie; opis tradycji bez parametrów i badań bezpieczeństwa (grapes-v09).

## 8. Decyzje (tablica: `2026-11-02-jaratlas-06-c12-suszenie-zrodla-p2`, decyzja Claude, do weta)

| ID | Decyzja | Odrzucone |
|---|---|---|
| C12-D1 | Numeracja SUS-324–SUS-342 z puli C12 (SUS-324–399). Kolizje: git grep SUS-3(2[4-9]\|[3-9][0-9]) na 25 gałęziach origin (docs, catalog): 0 trafień; najwyższy istniejący SUS-323 (C11). | osobne klucze dla MLE i MIE (SUS-339–341 mogą należeć do MLE i MIE: przeniesienie decyduje koordynator, jak C11-D1) |
| C12-D2 | Bez źródła szczebla 1–3 pasującego 1:1 wariant zostaje do-researchu; procedur innego gatunku lub formy nie przenoszę (dereń, aronia, rokitnik, mango w paskach, czurczchela, loomi, koji, kandyzowanie aronii, plastrów pomarańczy, limonki, rabarbaru; sól borowikowa jak C11-D11). Pełna analogia: C11-D2. | ryzyko-wysokie dla wszystkich bez źródła |
| C12-D3 | raspberry-blackberry-v15: zostaje do-researchu. Ostrzeżenie EMA (SUS-324) dotyczy stosowania liści jak leku roślinnego, nie utrwalania; trafia do requiredWarnings. Subagent proponował ryzyko-wysokie. | ryzyko-wysokie (propozycja subagenta) |
| C12-D4 | rosehip-rowan-v11: zostaje do-researchu, choć Cape Cod (UMass Extension) pasuje 1:1. Start 110°F i koniec „nie do końca suche” są sprzeczne z SUS-002 i SUS-063 (ten sam szczebel), brak czasu przechowywania. Droga: korekta według SUS-001/002/063/018/019 decyzją toru A albo UAF FNH-00114. Subagent proponował ok-zrodlo. | ok-zrodlo (propozycja subagenta); poprawianie procedury źródła bez decyzji toru A |
| C12-D5 | Jarzębina (rosehip-rowan-v10, v12): ryzyko-wysokie – kwas parasorbowy w surowych owocach (SUS-327, krytyczne), neutralizacja ciepłem tylko „may”, bez warunków. Głóg w v12: do rozdzielenia (do-researchu). Decyzja Claude bez analogii, wariant ostrożniejszy (tryb dzienny). | do-researchu (źródło pośrednie, „may neutralize”) |
| C12-D6 | Suszone plastry cytrusów (lemon-v15, orange-kumquat-v14, grapefruit-v09): ok-zrodlo według własnego handoutu UC MFP 2025 (SUS-331, szczebel 3, „any citrus fruits”, z kondycjonowaniem i przechowywaniem). Temperatura w karcie 140°F (SUS-001, szczebel 1 wygrywa; kierunkowo bezpieczniej niż 130–135°F). Handouty przepisane z książki („The Dehydrator Bible”, Sunkist) odrzucone jako pochodne. | 130–135°F ze źródła; czasy z „The Dehydrator Bible” |
| C12-D7 | lemon-v13: ok-zrodlo (SUS-329, SUS-330, dwa handouty UC MFP bez zewnętrznego oryginału). Przechowywanie 2 miesiące: część wspólna („do 2 miesięcy” i „bezterminowo, najlepiej 3 miesiące”), wariant ostrożniejszy. | bezterminowo (UC MFP 2025) |
| C12-D8 | Kandyzowana skórka (lemon-v12, orange-kumquat-v11; grapefruit-v06 po zmianie na grejpfrut): zostaje do-researchu z drogą. Procedura szczebla 3 (SUS-328) bez przechowywania; 1 miesiąc pochodzi z książki „Put ’em Up!” (oryginał szczebla 4), rok – z relacji wolontariuszki. Pełna analogia: C11 imbir na sucho (przepis powiatowy bez czasu przechowywania) i C11 sekcja 7 (SLO-069). Subagent proponował ok-zrodlo. | ok-zrodlo z 1 miesiącem (granica ze szczebla 4) |
| C12-D9 | Niskokwasowe kandyzowane (mango-papaya-v11, watermelon-melon-v07): ryzyko-wysokie. watermelon-melon-v07 po ograniczeniu do skórki arbuza suszonej według SUS-332 → do-researchu (brak przechowywania). Pełna analogia: C11-D5. Subagent proponował ok-zrodlo dla arbuza. | ok-zrodlo dla skórki arbuza (propozycja subagenta) |
| C12-D10 | garden-herbs-v13: ryzyko-wysokie – typowy przepis z surowym białkiem, FDA wymaga jaj pasteryzowanych (SUS-333); po zmianie na białko pasteryzowane lub w proszku zostaje do-researchu (Rutgers opisuje kwiaty, SUS-334). Decyzja Claude bez analogii, wariant ostrożniejszy. | do-researchu (propozycja subagenta) |
| C12-D11 | wild-mushrooms-v10: ryzyko-wysokie – trzony opieniek wbrew PSSE (SUS-335), opieńka toksyczna na surowo (SUS-336), kania mylona z muchomorem (SUS-141). Pełna analogia: wild-mushrooms-v09 (ryzyko-wysokie). | do-researchu |
| C12-D12 | wild-garlic-v11: ryzyko-wysokie – pomyłki z zimowitem i konwalią (SUS-337) oraz jaja tasiemca lisiego, które giną ok. 60°C, a zioła suszy się w 35–46°C (SUS-338); „sól zielona” bez źródła. Decyzja Claude bez analogii, wariant ostrożniejszy. Skutki dla wild-garlic-v07 (pesto mrożone, ok-zrodlo): do toru A. | do-researchu z requiredWarnings |
| C12-D13 | Kashk i kurt (yogurt-skyr-v11, quark-acid-cheese-v12): ryzyko-wysokie – brak procesu z parametrami, kurut z handlu z S. aureus w 16–60% próbek (SUS-339), pokrewny Katık Keş aw 0,76 (SUS-340). | do-researchu |
| C12-D14 | beef-veal-v09 (biltong): ryzyko-wysokie – bez etapu letalnego cieplnego (SUS-341), walidacja tylko w kontrolowanej komorze (MIE-044/045), NCHFP: 160°F i bez suszenia mięsa na wolnym powietrzu (SUS-047, SUS-003). Analogia: B7-D1. | do-researchu |
| C12-D15 | poultry-v14: ok-zrodlo według PNW 632 (SUS-342: drób 165°F przed suszeniem albo zaraz po nim; potwierdzają OSU i UKy za USDA). NCHFP odradza surowy drób tylko z powodu tekstury i smaku (MIE-042). Przechowywanie 2 tygodnie (NCHFP MIE-041, szczebel 1 wygrywa z PNW 1–2 miesiące); pomiar termometrem obowiązkowy (B7-D1). | zostaje do-researchu do zmiany nazwy na wędzoną pierś indyka (E3) |
| C12-D16 | Szczeble nazwane: CIAS (UW-Madison) = 3 jako ośrodek uczelni, nie extension; ATS Milano = 1 mimo kopii na stronie gminy (szczebel nadaje oryginał); OMAFRA = 1 (urząd), USDA NAL (opis projektu) = 3. Wszystkie cytaty sprawdzone na moich pobraniach (bez wyjątku jak C11-D3). | szczebel 4 dla CIAS |

## 9. Uwagi dla partii katalogowej (tor A)

- Zmiany statusu do wprowadzenia w catalog-seed.json (D-043): ok-zrodlo – lemon-v13, lemon-v15, orange-kumquat-v14, grapefruit-v09, poultry-v14 (z brzmieniem z sekcji 3); ryzyko-wysokie – rosehip-rowan-v10, rosehip-rowan-v12, mango-papaya-v11, watermelon-melon-v07, wild-mushrooms-v10, wild-garlic-v11, garden-herbs-v13, yogurt-skyr-v11, quark-acid-cheese-v12, beef-veal-v09.
- Decyzje toru A otwierające ok-zrodlo: lemon-v12, orange-kumquat-v11 (przechowywanie według SLO-069); rosehip-rowan-v11 (korekta Cape Cod według SUS-001/002/063/018/019).
- Zmiany nazw i zakresu: rosehip-rowan-v12 rozdzielić (głóg / jarzębina), watermelon-melon-v07 tylko arbuz, grapefruit-v06 grejpfrut zamiast pomelo, raspberry-blackberry-v15 tylko liście, orange-kumquat-v14 „suszone plastry pomarańczy”.
- Skutki poza partią: SUS-327 (jarzębina) dla rosehip-rowan-v02 i v07; SUS-337 i SUS-338 dla wszystkich wariantów wild-garlic, zwłaszcza v07 (pesto mrożone, ok-zrodlo: -18°C nie zabija jaj tasiemca); SUS-342 jako drugie źródło dla jerky z drobiu w klastrze MIE.
- Poza zakresem do roli 03: walnut-nuts-v10 (wyrób cukierniczy).
- requiredWarnings: SUS-324 (raspberry-blackberry-v15, jeśli liście zostaną), SUS-337/SUS-338 (wild-garlic), SUS-335/SUS-336/SUS-141 (wild-mushrooms), SUS-342 (poultry-v14), SUS-327 (jarzębina, jeśli zostanie jako karta-ostrzeżenie).
- SUS-339 i SUS-340 (nabiał) oraz SUS-341 (biltong) mogą należeć do rejestrów MLE i MIE: numer z puli C12, przeniesienie decyduje koordynator (C12-D1).
