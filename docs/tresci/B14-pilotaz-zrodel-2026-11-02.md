# 06-tresci build · B14 · pilotaż polityki źródeł wg ryzyka (tylko raport)

Data: 2026-11-02 · gałąź `claude/jaratlas-b14-pilotaz-zrodel` z `claude/happy-brown-yncplj` = 1f123be · decyzja właściciela: tablica `decisions/2026-11-02-jaratlas-polityka-zrodel-ryzyko` (opcja 1, na próbę) · dane: `B14-pilotaz-zrodel-2026-11-02.json` (wszystkie 257 wariantów E1 z klasą, ryzykiem i podstawą).

Zakres: bez zmian w `catalog-seed.json`, rejestrze i kartach. Bez nowego szerokiego researchu: odczyt raportów E1 (kąpiel p1/p2, lodówka p1/p2, suszenie p1/p2), B12/B13 i źródeł wskazanych w tych raportach. Nowy odczyt tylko dla punktu (b).

## 1. Wynik w skrócie

- **Punkt (b), Ball:** potwierdzony **warunkowo**. Dwie niezależne instytucje szczebla 3 (University of Illinois Extension; UC ANR, program Master Food Preserver) wskazują przepisy Ball jako bezpieczne lub zatwierdzone. Rutgers wymienia je na liście źródeł (słabiej). Warunek: tylko wskazane wydania (§2). **USDA/NCHFP:** w przeczytanych stronach nie wskazują przepisów Ball. **Bernardin:** nie potwierdzony, zostaje szczeblem 4.
- **Pilotaż na 257 wariantach E1** (238 bez ok-zrodlo): **15 zmian statusu** (4 bez zmiany wariantu, 11 po zmianie nazwy, zakresu albo metody), w tym 2 z ryzyko-wysokie na ok-zrodlo (Ball). **39 kandydatów (K):** polityka zdjęła blokadę, ale trzeba przeczytać przepis Ball albo źródło szczebla 4. **184 bez zmian.** ok-zrodlo: 19 → 34.
- **Sześć wariantów B12/B13 wstrzymanych błędem koordynatora:** 5 przechodzi na ok-zrodlo (w tym 4 po zmianie nazwy z C10/C11), olives-v14 nadal stoi (robocze twierdzenia, nie szczebel).
- **Pula 872 do-researchu w katalogu** (zlecenie: ok. 830; `catalog-seed.json` na 1f123be ma 872): teraz zmiana dla ok. 14 wariantów (1,6%). Ścieżkę otwiera dla ok. 90 (zakres 65–130, 7–15%) **pod warunkiem odczytu źródeł**. Ponad połowa puli (492, wysokie ryzyko: fermentacja, mięso, nabiał, olej, pasteryzacja, ocet) praktycznie bez zmian.
- **Największa zmiana jest w dżemach i galaretkach wysokocukrowych** (kąpiel słodkie: 55% odblokowanych). W marynatach octowych prawie nic się nie zmienia (0 zmian, 16% kandydatów, wszystkie przez Ball).

## 2. Punkt (b): czy USDA/NCHFP lub extension wskazują Ball/Bernardin jako przepisy testowane

Odczyt 2026-11-02, curl + pdftotext + grep na surowym tekście. Cytaty dosłowne.

| ID | źródło (szczebel) | cytat | wniosek |
|---|---|---|---|
| B14-S1 | University of Illinois Extension, „Credible Food Preservation Resources” (3), https://extension.illinois.edu/media/9390/download | „Commercial canning recipes from brands such as *Ball®, *Mrs. Wages® or pectin manufacturers (e.g., *Sure-Jell®, *Certo®, etc.) are considered safe.” oraz na liście książek „The Ball® Blue Book” | Ball wprost „considered safe”, bez wskazania wydania |
| B14-S2 | UC ANR, „UC Master Food Preserver Internal Recipe Sources” (3), https://class.ucanr.edu/sites/default/files/2025-02/408181.pdf | „The general rule of thumb is if the process has any risk involved (canning, fermentation), we are limited to USDA, University and some Ball recipes.”; „Ball Blue Book, 2014, 2020, 2024”; „Ball Complete Book of Home Preserving 2012, & 2020 editions”; „Note: Ball cucumbers and cabbage recipes; no others”; „Note: the original 2016 edition included multiple recipes that conflicted with USDA testing” | Ball dopuszczony także przy ryzyku, ale **tylko wybrane wydania**; fermentacja tylko ogórki i kapusta; All New Ball 2016 (pierwotny druk) z błędami |
| B14-S3 | UCCE MFP Orange County (UC ANR) (3), https://ucanr.edu/media/279621 | „Canning recipes from Ball books. Note: Not all Ball books are approved, but these have our approval: Ball® Complete Book of Home Preserving editions 2012, 2020 … Ball® Blue Book: Guide to Preserving Edition 37” | ta sama instytucja co S2, liczę razem |
| B14-S4 | UCCE MFP Orange County (UC ANR), starsza ulotka (3), https://class.ucanr.edu/sites/default/files/2020-01/318727.pdf | „Ball® Complete Book of Home Preserving, editions 2006 & 2012 recommended”; „Water Bath Canning recipes with fresh lemon juice for salsa or broth are not recommended” (o stronie Ball) | wydanie 2006 też zatwierdzone; ograniczenie dla salsy i bulionu |
| B14-S5 | Rutgers Cooperative Extension, lista zasobów 2019 (3), https://warren.njaes.rutgers.edu/wp-content/uploads/2023/03/FCHS.food_.preservation.Resource.list-2019-1.pdf | „Ball™ Home Canning: http://www.freshpreserving.com/home”; „Ball Blue Book Guide to Preserving 37th edition, 2014” | lista źródeł (słabiej); wymienia też All New Ball 2016, który UC ANR uznaje za wadliwy |
| B14-S6 | WSU Extension Skagit (3), https://extension.wsu.edu/skagit/food-and-health/fam-old/food-preservation/additional-resources-for-food-preservation/ | „Ball Canning Jar and pectin manufacturer with recommendations for use and recipes.” | samo wymienienie; nie liczę |
| B14-S7 | NCHFP (1): `/resources/category/faqs`, `/how/can/`, `/resources/entry/where-can-i-find-tested-recipes` | grep „Ball|Bernardin”: jedyne trafienie to pektyna „Ball® No-Sugar Needed Pectin” | **USDA/NCHFP: nie potwierdzone** |

Nieprzeczytane (sygnał przeciwny, `[DO USTALENIA]`): Iowa State AnswerLine `?p=12460` (curl bez odpowiedzi, WebFetch HTTP 503) i Ask Extension #763046 (host poza siecią sesji). Według streszczenia wyszukiwarki, które nie jest źródłem, Iowa State zaleca tylko edycje 37 i 38 Ball Blue Book, a wpis Ask Extension mówi „no longer recommending … Ball”. Clemson HGIC „safe canning recipes”: HTTP 403, blokady nie obchodziłem.

**Bernardin:** żadne przeczytane źródło go nie wymienia. Jedyny ślad to przedruk przepisu z dopiskiem „Source: Bernardin.ca” w ulotce UCCE El Dorado (raport E1 lodówka p2, sekcja odrzucone). To przedruk, nie rekomendacja. Bernardin zostaje szczeblem 4.

**Reguła przyjęta w pilotażu (decyzja Claude, do weta):** przepis Ball liczy się jak szczebel 3 („przepis Ball, rekomendacja extension: Illinois, UC ANR”), z atrybucją w treści, tylko gdy:

1. pochodzi z Ball Blue Book ed. 37 (2014), 2020 lub 2024, z Ball Complete Book of Home Preserving 2006, 2012 lub 2020, ze strony Ball albo z przedruku w ulotce extension;
2. nie pochodzi z pierwotnego wydania All New Ball 2016;
3. nie jest fermentacją warzyw innych niż ogórki i kapusta;
4. nie jest salsą ani bulionem ze świeżym sokiem z cytryny.

Przy sprzeczności z NCHFP wygrywa NCHFP. Wydań 38 i 2024 nie rozstrzygam ponad S2 (2024 jest tylko u UC ANR).

## 3. Reguły zastosowane do ponownej oceny

- **R1 (naprawa błędu koordynatora):** ok-zrodlo wymaga szczebla 1–3, nie samego szczebla 1.
- **R2 (b):** przepis Ball spełniający warunki z §2 jest przetestowany (szczebel 3), także przy wysokim ryzyku.
- **R3 (c):** niskie ryzyko obejmuje mrożenie, suszenie ziół i owoców kwaśnych, dżemy, galaretki i marmolady wysokocukrowe oraz krótkie przechowywanie owoców kwaśnych z cukrem w lodówce. Szczebel 4 dla parametru tylko wtedy, gdy liczba mieści się w ogólnej regule szczebla 1–3 metody:
  - SLO-020 (szczebel 1): owoce z cukrem bez obróbki cieplnej do 3 tygodni w lodówce;
  - SUS-020 (szczebel 1): susz owocowy 6–12 mies.;
  - SUS-028 (szczebel 1): skóra owocowa 1 mies. w temp. pokojowej;
  - ACI-508 (szczebel 3): przepisy nieprzetestowane do 2 tygodni w lodówce.
- **R4 (d), decyzja Claude, ostrożnie, do weta:** wpis nie klasyfikuje części metod, więc poza listą (c) liczę jako **wysokie**:
  - kąpiel wodną marynat, owoców w syropie, syropów, maseł i chutneyów;
  - syropy z naparów ziołowych i kwiatowych;
  - suszenie warzyw, grzybów, orzechów i mieszanek;
  - marynaty lodówkowe z warzyw niskokwasowych (**scenariusz A**, zastosowany).

  **Scenariusz B** (do decyzji): marynaty lodówkowe na occie 5% białym lub jabłkowym jako „krótkie przechowywanie w lodówce” (ACI-508, ACI-509). Dodaje 6 kandydatów (§4, kolumna B).
- **R5:** status zmieniam teraz (Z1, Z2) tylko tam, gdzie raport E1 już przeczytał źródło z liczbami. Jeśli źródło jest tylko wskazane albo nieprzeczytane, wariant dostaje K, a status zostaje.

Klasy: **Z1**: zmiana bez zmiany wariantu; **Z2**: zmiana po zmianie nazwy, zakresu albo metody (decyzja toru A lub roli 03); **K**: blokada polityki zdjęta, trzeba przeczytać źródło; **B**: bez zmian. Każdy wynik Z wymaga jeszcze wpisu twierdzeń (C-xx lub nowe ID) do rejestru z adresem i cytatem oraz weryfikacji D-027 (agent w świeżym kontekście). Raport niczego nie wpisuje.

## 4. Tabela przed/po (pilotaż: 257 wariantów E1)

„Przed” = status proponowany w E1. „Po” = po nowej polityce, łącznie ze zmianami Z2, które czekają na zmianę nazwy lub metody.

| metoda | warianty | przed ok / do / rw | po ok / do / rw | Z1 | Z2 | K | B | +K w scen. B | ryzyko niskie / wysokie (bez ok) |
|---|---|---|---|---|---|---|---|---|---|
| kąpiel wodna | 80 | 4 / 46 / 30 | 9 / 42 / 29 | 2 | 3 | 22 | 49 | 0 | 21 / 55 |
| lodówka | 107 | 8 / 57 / 42 | 11 / 55 / 41 | 0 | 3 | 10 | 86 | 6 | 9 / 90 |
| suszenie | 70 | 7 / 46 / 17 | 14 / 39 / 17 | 2 | 5 | 7 | 49 | 0 | 20 / 43 |
| **razem** | 257 | 19 / 149 / 89 | 34 / 136 / 87 | 4 | 11 | 39 | 184 | 6 | 50 / 188 |

Skąd się biorą zmiany (15):

- **R1, szczebel 3** (5): currant-v11, celeriac-celery-v11, sour-cherry-v16, apricot-v14, leek-chives-v04.
- **R2, Ball** (6): rhubarb-v07, lemon-v11, apple-v11, peach-nectarine-v10, shallot-pearl-onion-v10, mustard-v10. Dwa ostatnie tylko po zmianie metody na kąpiel wodną; tor lodówkowy bez zmian.
- **R3, szczebel 4 zgodny z regułą ogólną** (4): lemon-v12, orange-kumquat-v11, grapefruit-v06, raspberry-blackberry-v15 (liście).

Kandydaci K (39):

- 13 przez Ball (przepis wskazany, nieprzeczytany albo niedopasowany 1:1);
- 26 przez (c): dżemy i galaretki z ulotek pektyny lub blogów, syropy owocowe zasypane cukrem z limitem z SLO-020, owoce kwaśne do suszenia.

Kierunek odwrotny (ok → niżej): **0**. Żadne ok-zrodlo z E1 nie stało na Ball ani na szczeblu 4 (C8-D3, C9-D3: szczebel 4 tylko w uwagach).

## 5. Sześć wariantów B12/B13 wstrzymanych błędem koordynatora

| wariant | decyzja | po nowej polityce | podstawa |
|---|---|---|---|
| leek-chives-v04 | B12-D3 | ok-zrodlo po zmianie nazwy na „ocet smakowy z kwiatów szczypiorku” (C10-D3) | OSU SP 50-736, szczebel 3 (NAP-064/065); 4–6 mies. jako limit jakości |
| turnip-rutabaga-v10 | B13-D2 | ok-zrodlo (propozycja C11-D12) | SDSU, CSU PreserveSmart, UC ANR 8267: szczebel 3 |
| olives-v14 | B13-D2 | **bez zmian** (do-researchu) | sam szczebel nie wystarcza: SUS-315/316 robocze, źródło niedostępne (B13, §46) |
| sour-cherry-v16 | B13-D5 | ok-zrodlo („wiśnie suszone po blanszowaniu w syropie”) | Clemson, szczebel 3 (SUS-321); SUS-320 robocze poza claims |
| apricot-v14 | B13-D5 | ok-zrodlo („morele suszone po blanszowaniu w syropie”) | Clemson, szczebel 3 (SUS-322); SUS-320 robocze poza claims |
| celeriac-celery-v11 | B13-D5 | ok-zrodlo („suszony seler naciowy”) | SDSU/CSU, szczebel 3 (SUS-305) |

Nazwy sour-cherry-v16, apricot-v14 i celeriac-celery-v11 są już zmienione w katalogu (B13-D5). leek-chives-v04 czeka na zmianę nazwy.

Poza tymi sześcioma w katalogu jest jeszcze 6 wariantów z propozycją ok-zrodlo z E1, które czekają na partię katalogową: peach-nectarine-v01, lemon-v13, lemon-v15, orange-kumquat-v14, grapefruit-v09, poultry-v14. R1 oznacza, że partia nie może ich zatrzymać wymogiem szczebla 1. Nie liczę ich jako zmiany B14.

## 6. Ekstrapolacja na pulę do-researchu

Pula: **872** warianty do-researchu w `catalog-seed.json` na 1f123be (zlecenie podaje ok. 830). Z tego 167 jest w pilotażu, a 705 poza nim. Rachunek na danych projektu; wynik to przybliżenie.

**W pilotażu i w puli (167, wynik bezpośredni):** Z = 13, K = 35, E1-ok czekające na katalog = 8, B = 111. Do tego turnip-rutabaga-v10 (R1). **Zmiana w katalogu teraz: ok. 14 wariantów.**

**Poza pilotażem (705), stopy z pilotażu wg segmentu.** Stopa (Z+K) dotyczy wariantów już zbadanych. W niezbadanych nic nie zmienia się od razu: każde odblokowanie wymaga odczytu źródła, więc to K.

| segment | poza pilotażem | stopa z pilotażu (Z+K)/n | szac. odblokowanych | zakres (przybl.) |
|---|---|---|---|---|
| kąpiel: dżemy, galaretki, syropy, owoce w syropie | 50 | 21/38 = 55% | ok. 28 | 19–36 |
| kąpiel: marynaty octowe, konserwy | 150 | 6/38 = 16% | ok. 24 | 9–47 |
| suszenie (z suszem słodkim) | 8 | 14/63 = 22% | ok. 2 | 0–4 |
| lodówka: słodkie | 5 | 10/54 = 19% | ok. 1 | 0–2 |
| wysokie ryzyko (fermentacja 186, nabiał 81, mięso i ryby 62, olej 30, koji 29, napoje fermentowane 26, ocet 45, sól 18, jaja 5, szybkowar 11, inne 2) | 492 | brak danych w pilotażu | 0–15 | założenie 0–3% |
| **razem poza pilotażem** | 705 | | **ok. 55** | **ok. 30–100** |

**Cała pula:** teraz ok. 14 zmian (1,6% z 872). Z kandydatami: ok. 35 + 55 = **ok. 90 (zakres ok. 65–130, czyli 7–15%)**, ale dopiero po odczycie źródeł. Scenariusz B dodaje 6 (wszystkie marynaty lodówkowe są już w pilotażu).

Niepewność, nazwana jawnie:

1. **Próba nielosowa:** E1 to warianty już przeszukane w szczeblu 1–3, czyli trudniejsze przypadki. W niezbadanych część ma przepis szczebla 1–3, którego nikt jeszcze nie szukał. To nie jest zmiana polityki, ale też zmniejszy pulę.
2. **Małe n w segmentach:** 38 w kąpieli słodkiej, 38 w octowej. Zakresy to przybliżony 95% przedział dla proporcji, nie model.
3. **Segment wysokiego ryzyka (56% puli) bez danych.** Polityka (d) go nie zmienia. Ball (b) obejmuje tylko fermentację ogórków i kapusty (S2). 0–3% to założenie, nie pomiar.
4. **Każdy K zależy od tego, czy przepis Ball lub szczebla 4 istnieje i pasuje 1:1.** W pilotażu około połowa wskazanych przepisów Ball nie pasowała do wariantu (escabeche, chutney, cebula z tymiankiem).
5. **Niejasne granice ryzyka w R4** (marynaty lodówkowe, syropy, owoce niekwaśne): wybór szerszej wersji podniesie liczby, głównie w lodówce (scenariusz B).

## 7. Decyzje (zapis od razu, do weta) i otwarte pytania

- **B14-D1** (decyzja Claude, do weta): Ball = szczebel 3 z warunkami z §2. Bernardin = szczebel 4. Odrzucone: (i) Ball bez listy wydań, bo UC ANR wprost wyklucza część książek; (ii) Ball jak szczebel 4, bo dwie instytucje szczebla 3 go polecają.
- **B14-D2** (decyzja Claude, do weta): granice ryzyka R4 i scenariusz A (marynaty lodówkowe z warzyw niskokwasowych = wysokie). Odrzucone: scenariusz B jako domyślny, bo mniej ostrożny przy bezpieczeństwie żywności.
- **B14-D3** (decyzja Claude, do weta): zmiana statusu teraz tylko przy źródle już przeczytanym z liczbami (R5).
- **Pytanie do właściciela P-B14-1:** Illinois (S1) i UC ANR (S2) polecają tak samo przepisy producentów pektyny (Sure-Jell, Certo, Mrs. Wages). Rozszerzyć (b) na nie?
  - Tak: dżemy niskosłodzone i część galaretek dostają K także przy wysokim ryzyku (np. strawberry-v07 wersja niskosłodzona).
  - Nie: zostają tylko przy niskim ryzyku przez (c).
  - Rekomendacja: tak, z tym samym warunkiem co Ball (przepis z ulotki aktualnego produktu, bez zmian).
- **Pytanie P-B14-2:** scenariusz A czy B dla marynat lodówkowych (6 kandydatów różnicy)? Rekomendacja: A, dopóki nie ma źródła szczebla 1–3 mówiącego, że ACI-508 obejmuje warzywa niskokwasowe bez proporcji 1:1.
- `[DO USTALENIA]` Iowa State (AnswerLine, Ask Extension #763046): możliwy sygnał przeciwny co do Ball. Nieprzeczytany (503, host poza siecią).
- Każdy Z przed wpisem do katalogu: twierdzenia do rejestru z adresem i cytatem, weryfikacja D-027 (agent), przegląd D-043 przy zmianie `catalog-seed.json`.

## 8. Listy wariantów

### Z1

| wariant | nazwa | metoda | ryzyko | przed | po | podstawa |
|---|---|---|---|---|---|---|
| apple-v11 | galaretka pektynowa z ogryzków | kapiel | niskie | do-researchu | ok-zrodlo | (b)+(c): arkusz UC MFP Apple Scrap Jelly (adaptacja Ball, C-55: pektyna w proszku, 4½ szkl. soku, 5 szkl. cukru, 5 min); galaretka wysokocukrowa = niskie ryzyko, parametry zgodne z ogólną regułą NCHFP dla galaretek (słoiki sterylne, 5 min) |
| currant-v11 | syrop z czarnej porzeczki | kapiel | wysokie | do-researchu | ok-zrodlo | naprawa błędu koordynatora: OSU SP 50-632 (szczebel 3) ma przetestowany przepis na syrop z soków jagodowych i wymienia porzeczki (ACI-610, ACI-611); E1 czekał tylko na zgodę na szczebel 3 |
| lemon-v12 | kandyzowana skórka cytrynowa | suszenie | niskie | do-researchu | ok-zrodlo | (c): procedura szczebla 3 (SUS-328) + przechowywanie z przedruku UC MFP „Put ’em Up!” (szczebel 4: „up to 1 month”, szczelnie) zgodne z regułą ogólną szczebla 1 (SUS-020: susz owocowy 6–12 mies.; SUS-028: skóra owocowa 1 mies. w temp. pokojowej) |
| orange-kumquat-v11 | kandyzowana skórka pomarańczowa | suszenie | niskie | do-researchu | ok-zrodlo | (c): jak lemon-v12 (SUS-328 dla pomarańczy, 2 gotowania; przechowywanie 1 mies. zgodne z SUS-020/SUS-028) |

### Z2

| wariant | nazwa | metoda | ryzyko | przed | po | podstawa |
|---|---|---|---|---|---|---|
| rhubarb-v07 | dżem rabarbarowo-truskawkowy i rabarbarowo-pomarańczowy | kapiel | niskie | do-researchu | ok-zrodlo | po podziale: (a) rabarbar+truskawka z pektyną płynną (WSU/NDSU, szczebel 3, już w E1); (b) rabarbar+pomarańcza wg Ball Blue Book w arkuszu UC MFP 335062 (C-20: 2½ funta, sok z 2 pomarańczy, pektyna, 6 szkl. cukru, 10 min); dżem wysokocukrowy |
| lemon-v11 | marmolada cytrynowa | kapiel | niskie | do-researchu | ok-zrodlo | po zmianie nazwy na „szybka marmolada cytrynowo-imbirowa”: Ball „Quick Lemon Ginger Marmalade” w arkuszu UC MFP (C-29: pektyna w proszku, 10 min); marmolada wysokocukrowa |
| peach-nectarine-v10 | brzoskwinie w syropie z bourbonem/brandy | kapiel | wysokie | ryzyko-wysokie | ok-zrodlo | ryzyko-wysokie → ok-zrodlo po zawężeniu do bourbona: Ball „Drunken Peaches” w przedruku UCCE MFP El Dorado (2 łyżki bourbona na pint, 25 min); brandy bez przepisu; wysokie ryzyko, ale (b) uznaje Ball za przetestowany |
| mustard-v10 | musztarda piwna na ciemnym porterze | lodowka | wysokie | do-researchu | ok-zrodlo | po zmianie metody na kąpiel wodną: Ball 2012 w UC ANR NSJMFP 388435 „Oktoberfest Beer Mustard” (cytat: „process for 10 minutes”); warunki: ocet słodowy z etykietą ≥5% (ACI-516), korekta wysokości z ogólnej tabeli; tor lodówkowy bez zmian |
| leek-chives-v04 | kwiaty szczypiorku w occie | lodowka | wysokie | do-researchu | ok-zrodlo | naprawa błędu koordynatora (B12-D3): ocet smakowy z kwiatów szczypiorku, OSU SP 50-736 (szczebel 3, NAP-064/065), po zmianie nazwy i zakresu (C10-D3); 4–6 mies. jako limit jakości |
| shallot-pearl-onion-v10 | konfitura z czerwonej cebuli i żurawiny | lodowka | wysokie | ryzyko-wysokie | ok-zrodlo | ryzyko-wysokie → ok-zrodlo tylko po zmianie metody na kąpiel wodną: UC MFP 334005 „Red Onion Marmalade” z suszoną żurawiną (cytat: „Source: Ball Complete Book of Home Preserving, 2006/2012”, 15 min do 1000 stóp); wersja lodówkowa bez zmian (ryzyko-wysokie) |
| celeriac-celery-v11 | suszony seler korzeniowy i naciowy | suszenie | wysokie | do-researchu | ok-zrodlo | naprawa błędu koordynatora (B13-D5): seler naciowy SDSU/CSU (SUS-305, szczebel 3); bulwa usunięta |
| sour-cherry-v16 | kandyzowane wiśnie | suszenie | niskie | do-researchu | ok-zrodlo | naprawa błędu koordynatora (B13-D5): „wiśnie suszone po blanszowaniu w syropie”, Clemson (szczebel 3, SUS-321); SUS-320 robocze poza claims |
| apricot-v14 | glazurowane morele | suszenie | niskie | do-researchu | ok-zrodlo | naprawa błędu koordynatora (B13-D5): „morele suszone po blanszowaniu w syropie”, Clemson (szczebel 3, SUS-322); SUS-320 robocze poza claims |
| raspberry-blackberry-v15 | suszone maliny i liście | suszenie | niskie | do-researchu | ok-zrodlo | (c): po zawężeniu do liści malin: zioła = niskie ryzyko, ogólna procedura NCHFP Herbs (szczebel 1) + requiredWarnings SUS-324 (EMA); owoce nadal bez procedury (MSU, PNW odradzają) |
| grapefruit-v06 | gruba skórka z pomelo kandyzowana w syropie (bez goryczy po wielokrotnym blanszowaniu) | suszenie | niskie | do-researchu | ok-zrodlo | po zmianie na skórkę grejpfruta (SUS-328, 5 gotowań) i przechowywaniu jak lemon-v12 (reguła c) |

### K

| wariant | nazwa | metoda | ryzyko | przed | po | podstawa |
|---|---|---|---|---|---|---|
| cucumber-v11 | korniszony francuskie | kapiel | wysokie | do-researchu | do-researchu | (b): raport wskazuje „tylko blogi/Ball” bez odczytu przepisu Ball na korniszony; ocet winny tylko, jeśli przepis Ball go podaje (ACI-702) |
| chili-pepper-v04 | jalapeno w occie (escabeche) | kapiel | wysokie | do-researchu | do-researchu | (b): escabeche Ball w karcie UC MFP San Diego przeczytane tylko co do składu (warzywa opalane, inny skład); karta możliwa po zmianie wariantu na przepis Ball 1:1 |
| carrot-v04 | meksykańskie escabeche z jalapeno | kapiel | wysokie | ryzyko-wysokie | ryzyko-wysokie | (b): jak chili-pepper-v04; do czasu odczytu ryzyko-wysokie |
| tomatillo-v06 | pieczona salsa verde do słoików (pasteryzacja) | kapiel | wysokie | do-researchu | do-researchu | (b): pieczona salsa verde tylko u Ball, nieprzeczytana; uwaga UC OC 318727: salsy Ball ze świeżym sokiem z cytryny niezalecane |
| orange-kumquat-v07 | tradycyjna szkocka marmolada z gorzkich pomarańczy (seville) | kapiel | niskie | do-researchu | do-researchu | (c): marmolada Seville tylko u wydawców UK i na blogach; inny gatunek — przepis musi go wymieniać |
| currant-v06 | klarowna galaretka z czerwonej lub białej porzeczki | kapiel | niskie | do-researchu | do-researchu | (c): galaretka wysokocukrowa; USDA Guide 7 odsyła do ulotki pektyny (szczebel 4) — ulotki nie przeczytano |
| currant-v08 | dżem z czarnej porzeczki | kapiel | niskie | do-researchu | do-researchu | (c): jak currant-v06 (dżem z czarnej porzeczki, ulotka pektyny) |
| chokeberry-seabuckthorn-v07 | dżem z aronii i jabłek | kapiel | niskie | do-researchu | do-researchu | (c): przepis UNL 2024 (praca dyplomowa z testem) niedostępny (403); szczebel 4 też dopuszczalny |
| blueberry-bilberry-v08 | dżem jagodowy z cytryną | kapiel | niskie | do-researchu | do-researchu | (c): jagoda czarna zamiast borówki; potrzebny przepis szczebla 4 na Vaccinium myrtillus |
| peach-nectarine-v08 | masło brzoskwiniowe (peach butter) | kapiel | wysokie | do-researchu | do-researchu | (b): przepis Ball z sokiem z cytryny (C-62) bez adresu i edycji w raporcie; wymaga odczytu i sprawdzenia edycji |
| grapefruit-v07 | galaretka grejpfrutowa | kapiel | niskie | do-researchu | do-researchu | (b): „Ball/Bernardin mogą mieć przepis” — nie szukano |
| raspberry-blackberry-v10 | galaretka jeżynowa z jabłkiem | kapiel | niskie | do-researchu | do-researchu | (c): jeżyna z jabłkiem; potrzebny przepis szczebla 4 |
| gooseberry-v08 | galaretka agrestowa | kapiel | niskie | do-researchu | do-researchu | (c): agrest na liście ulotek pektyny USDA (ACI-609); UMN 403 |
| orange-kumquat-v09 | dżem mandarynkowy | kapiel | niskie | do-researchu | do-researchu | (b)+(c): felieton UC MFP z ulotką Ball „dowolny cytrus” (10 min) — pełnego przepisu nie przeczytano; karta dopiero jako marmolada |
| grapes-v08 | konfitura z bezpestkowych winogron | kapiel | niskie | do-researchu | do-researchu | (c): winogrona bezpestkowe tylko wg ulotki pektyny (ACI-626) |
| pear-v09 | dżem gruszkowy z imbirem lub kardamonem | kapiel | niskie | do-researchu | do-researchu | (c): imbir/kardamon spoza przepisu; potrzebny przepis szczebla 4 |
| apple-v12 | dżem jabłkowo-miętowy | kapiel | niskie | do-researchu | do-researchu | (c): dodatek mięty spoza przepisu (SLO-068); potrzebny przepis szczebla 4 (np. Ball) z miętą |
| sour-cherry-v07 | konfitura z całych wydrylowanych wiśni | kapiel | niskie | do-researchu | do-researchu | (b)/(c): OSU odsyła do ulotek pektyny i książek; konfitura wysokocukrowa |
| quince-v09 | dżem z pigwy i jabłek | kapiel | niskie | do-researchu | do-researchu | (c): pigwa z jabłkiem: blogi i Pomona (szczebel 4), nieprzeczytane |
| gooseberry-v10 | dżem agrestowo-truskawkowy | kapiel | niskie | do-researchu | do-researchu | (c): mieszanka dwóch przetestowanych dżemów; potrzebny przepis szczebla 4 na mieszankę |
| rhubarb-v03 | pikantny chutney rabarbarowy z cebulą i rodzynkami | kapiel | wysokie | ryzyko-wysokie | ryzyko-wysokie | (b): ulotki UC MFP z chutneyem rabarbarowym niepobrane; jeśli to przedruk Ball z zatwierdzonej edycji, droga do ok-zrodlo; do tego czasu ryzyko-wysokie |
| chili-pepper-v05 | kandyzowane jalapeno (cowboy candy) | kapiel | wysokie | ryzyko-wysokie | ryzyko-wysokie | (b): cowboy candy „blogowe/Ball, nie zweryfikowano”; do odczytu przepisu Ball ryzyko-wysokie |
| strawberry-v09 | syrop truskawkowy zasypowy | lodowka | niskie | do-researchu | do-researchu | (c): owoce zasypane cukrem bez gotowania = SLO-020 (3 tygodnie); przepis szczebla 4 do odczytu |
| raspberry-blackberry-v09 | maliny zasypane cukrem w słoikach (do herbaty) | lodowka | niskie | do-researchu | do-researchu | (c): jak strawberry-v09 |
| blueberry-bilberry-v07 | jagody zasypane cukrem | lodowka | niskie | do-researchu | do-researchu | (c): jak strawberry-v09 |
| cranberry-lingonberry-v02 | szwedzka rårörda lingon (ucierana na surowo z cukrem) | lodowka | niskie | do-researchu | do-researchu | (c): rårörda lingon; Marthaförbundet (szczebel 3) bez liczby; limit ≤ SLO-020 |
| napa-cabbage-v10 | syczuańska kapusta słodko-kwaśna z chili | lodowka | wysokie | do-researchu | do-researchu | (b): wg Ask Extension (niepobrane) jedyne przepisy na marynowaną czerwoną kapustę to Ball — tylko po zmianie metody na wekowanie; tor lodówkowy w scenariuszu A bez zmian |
| quince-v03 | surowy syrop z pigwowca zasypanego cukrem (bez gotowania) | lodowka | niskie | do-researchu | do-researchu | (c): macerat pigwowca z cukrem; SLO-020 (owoce z cukrem bez obróbki: do 3 tygodni w lodówce) jako reguła ogólna; przepis szczebla 4 do odczytu |
| lime-bergamot-v09 | syrop limonkowy (cordial) | lodowka | niskie | do-researchu | do-researchu | (c): cordial limonkowy: blogi/producenci nieprzeczytani; limit ≤ SLO-020 |
| onion-v08 | dżem cebulowy z tymiankiem | lodowka | wysokie | ryzyko-wysokie | ryzyko-wysokie | (b): marmolady cebulowe Ball w UC MFP (334004/334005) bez tymianku; po zmianie metody i składu; do tego czasu ryzyko-wysokie |
| quince-v07 | hiszpański twardy ser pigwowy (dulce de membrillo) | lodowka | niskie | do-researchu | do-researchu | (c): membrillo: kwaśna pigwa + cukier = niskie; liczby z blogów (3 tyg.–6 mies.) nieprzeczytane; limit nie dłuższy niż SLO-020 (3 tygodnie, szczebel 1) |
| sour-cherry-v12 | domowe wiśnie koktajlowe maraschino w syropie | lodowka | niskie | do-researchu | do-researchu | (c): maraschino: blogi 4 tyg.–6 mies., nieprzeczytane; limit ≤ SLO-020 (3 tygodnie) |
| quince-v12 | kandyzowana pigwa | suszenie | niskie | do-researchu | do-researchu | (c): pigwa kandyzowana; procedura szczebla 4 do odczytu |
| quince-v13 | suszone owoce pigwowca | suszenie | niskie | do-researchu | do-researchu | (c): owoce pigwowca (jadalne, SUS-323, kwaśne); procedura szczebla 4 do odczytu |
| cornelian-cherry-v10 | suszony dereń na napary | suszenie | niskie | do-researchu | do-researchu | (c): dereń kwaśny, reguła ogólna suszenia owoców; procedura szczebla 4 do odczytu |
| chokeberry-seabuckthorn-v10 | aronia kandyzowana w syropie | suszenie | niskie | do-researchu | do-researchu | (c): Missouri HES173 (adaptacja AllRecipes = szczebel 4) wymienia drobne jagody; kwasowość aronii do potwierdzenia; po przeglądzie D-043 SLO-069 wycofane z kart-ostrzeżeń |
| chokeberry-seabuckthorn-v11 | suszona aronia na herbatę | suszenie | niskie | do-researchu | do-researchu | (c): aronia — kwasowość do potwierdzenia szczeblem 1–3; procedura szczebla 4 do odczytu |
| rhubarb-v08 | kandyzowane czipsy rabarbarowe | suszenie | niskie | do-researchu | do-researchu | (c): po zmianie na suszony rabarbar: OSU SP 50-882 (przygotowanie) + reguła ogólna temperatury (SUS-001/002); kwasowość rabarbaru (SLO-052) — droga bez nowego źródła, ale wymaga decyzji toru A |
| lime-bergamot-v02 | bliskowschodnie czarne limonki suszone (loomi — gotowane w solance i suszone do pociemnienia) | suszenie | niskie | do-researchu | do-researchu | (c): loomi — limonka kwaśna; tylko serwisy kulinarne, nieprzeczytane |

### B (bez zmian), 184 wariantów

| wariant | metoda | ryzyko | status | podstawa (skrót) |
|---|---|---|---|---|
| cucumber-v19 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| corn-v03 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| onion-v03 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| garlic-v04 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| garlic-v06 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| garlic-v08 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| peach-nectarine-v04 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| chili-pepper-v17 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| potato-sunchoke-v05 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| beetroot-v11 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pumpkin-v03 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pumpkin-v04 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pumpkin-v05 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pumpkin-v07 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pumpkin-v11 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| elderberry-elderflower-v01 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| apple-v08 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| strawberry-v07 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| strawberry-v12 | kapiel | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| rosehip-rowan-v06 | kapiel | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| rosehip-rowan-v08 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| cranberry-lingonberry-v07 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| apple-v15 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| pear-v12 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| peach-nectarine-v13 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| plum-v11 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| plum-v12 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| sweet-cherry-v10 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| blueberry-bilberry-v06 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| blueberry-bilberry-v12 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| strawberry-v10 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| blueberry-bilberry-v10 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| rhubarb-v06 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| cranberry-lingonberry-v11 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| chokeberry-seabuckthorn-v06 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| cornelian-cherry-v08 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| chokeberry-seabuckthorn-v09 | kapiel | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| plum-v09 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pear-v10 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| plum-v10 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| cultivated-mushrooms-v01 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| cultivated-mushrooms-v06 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| european-mixed-veg-v01 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| cauliflower-v05 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| bell-pepper-v02 | kapiel | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| tomato-v05 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| peach-nectarine-v09 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pear-v11 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| green-cherry-tomato-v10 | kapiel | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| european-mixed-veg-v07 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| daikon-black-radish-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| radish-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| napa-cabbage-v09 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| brussels-kohlrabi-v09 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| turnip-rutabaga-v05 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| onion-v05 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| shallot-pearl-onion-v02 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| shallot-pearl-onion-v03 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| horseradish-v02 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| horseradish-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu; scen. B → K |
| carrot-v06 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| white-cabbage-v11 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu; scen. B → K |
| cranberry-lingonberry-v05 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| napa-cabbage-v11 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| daikon-black-radish-v07 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| wild-garlic-v06 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| cultivated-mushrooms-v05 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| currant-v04 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| lemon-v05 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| lemon-v09 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| ginger-turmeric-v10 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| elderberry-elderflower-v06 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| foraged-blossoms-v02 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| pumpkin-v12 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| onion-v07 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| carrot-v11 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| beetroot-v13 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| mustard-v02 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| mustard-v03 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v05 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v06 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v07 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v08 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v09 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| mustard-v11 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| mustard-v12 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| horseradish-v05 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu; scen. B → K |
| horseradish-v08 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| horseradish-v09 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| peas-chickpeas-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| shallot-pearl-onion-v08 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| daikon-black-radish-v10 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu; scen. B → K |
| radish-v09 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu; scen. B → K |
| capers-v03 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| capers-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| ginger-turmeric-v02 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| ginger-turmeric-v07 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| european-mixed-veg-v06 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| asian-american-mix-v03 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| elderberry-elderflower-v05 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| foraged-blossoms-v09 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu; scen. B → K |
| potato-sunchoke-v09 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| ginger-turmeric-v11 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| rosehip-rowan-v01 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| rosehip-rowan-v04 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| lime-bergamot-v04 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| grapefruit-v08 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| watermelon-melon-v05 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| garden-herbs-v08 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| garden-herbs-v09 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| garden-herbs-v10 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| garden-herbs-v11 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| foraged-blossoms-v01 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| foraged-blossoms-v03 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| foraged-blossoms-v04 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| foraged-blossoms-v05 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| foraged-blossoms-v06 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| foraged-blossoms-v07 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| zucchini-v13 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pattypan-squash-v10 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| beans-soy-v13 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| carrot-v12 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| fennel-artichoke-v08 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| ginger-turmeric-v13 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| quince-v11 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| sour-cherry-v13 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| strawberry-v15 | lodowka | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| currant-v12 | lodowka | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| elderberry-elderflower-v09 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| pineapple-banana-v09 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| fig-pomegranate-v08 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| watermelon-melon-v08 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| watermelon-melon-v09 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| walnut-nuts-v08 | lodowka | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| cucumber-v20 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| napa-cabbage-v14 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| napa-cabbage-v15 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| brussels-kohlrabi-v12 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| pumpkin-v14 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| tomato-v18 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| bell-pepper-v18 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| potato-sunchoke-v11 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| potato-sunchoke-v13 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| tomatillo-v11 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| green-beans-v14 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| peas-chickpeas-v15 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| beans-soy-v05 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| carrot-v15 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| leek-chives-v11 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| daikon-black-radish-v12 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| daikon-black-radish-v14 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| horseradish-v11 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| celeriac-celery-v12 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| parsnip-parsley-v10 | suszenie | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| corn-v11 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| capers-v10 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| ginger-turmeric-v09 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| ginger-turmeric-v15 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| european-mixed-veg-v13 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| european-mixed-veg-v14 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| balkan-oriental-mix-v13 | suszenie | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| pear-v14 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| plum-v18 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| sweet-cherry-v11 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| chokeberry-seabuckthorn-v12 | suszenie | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| rosehip-rowan-v10 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| rosehip-rowan-v11 | suszenie | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| rosehip-rowan-v12 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| grapes-v09 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| lime-bergamot-v08 | suszenie | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| orange-kumquat-v10 | suszenie | niskie | do-researchu | niskie, ale przeszkoda nie w szczeblu (nazwa, gatunek, brak przepisu) |
| mango-papaya-v11 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| mango-papaya-v12 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| watermelon-melon-v07 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| walnut-nuts-v10 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| boletes-v13 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| wild-mushrooms-v10 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| wild-garlic-v11 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| garden-herbs-v13 | suszenie | niskie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| koji-ferments-v14 | suszenie | wysokie | do-researchu | wymagany szczebel 1–3, brak; przeszkoda nie w szczeblu |
| yogurt-skyr-v11 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| quark-acid-cheese-v12 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
| beef-veal-v09 | suszenie | wysokie | ryzyko-wysokie | wysokie ryzyko, brak szczebla 1–3 i pasującego Ball |
