# E1: pytania otwarte, rozpoznanie źródeł (2026-11-02)

Rola 06-tresci, tryb dzienny bez właściciela. Gałąź `claude/jaratlas-pytania-otwarte` z `main` (747d2aa).
Zakres: 5 pytań z `docs/tresci/pytania-otwarte.md` (partie 11–15) i raportów `E3-karty-p10…p18`.
Hierarchia: wpis decisions `2026-11-01-jaratlas-hierarchia-zrodel` (liczby i granice tylko ze szczebla 1–3).
Ten plik **nie** zmienia rejestru ani kart. Twierdzenia poniżej to kandydaci (KAND-n). Numer nada sesja, która je dopisze.

Weryfikacja: `curl+grep` oznacza stronę pobraną curl-em 2026-11-02, przerobioną na tekst i przeszukaną grep-em.
`sha12` to pierwsze 12 znaków SHA-256 pobranego HTML. Cytaty przepisane dosłownie z tekstu strony (literówki źródła zostawione).

## Podsumowanie

| # | Pytanie | Wynik | Szczebel |
|---|---|---|---|
| 1 | Przechowywanie po otwarciu: syropy, przeciery, kompoty, soki, curd, sos żurawinowy, masło jabłkowe | **brak źródła wprost**; są 2 analogie NCHFP (słoik niezamknięty: 1 tydzień; curd po rozmrożeniu: 4 tygodnie) | 1 (analogia) |
| 2a | Mrożenie boćwiny i jarmużu | **źródło jest**: NDSU FN187 i MU GH1503 wymieniają chard i kale; czas 2 min jak „all other greens” w NCHFP | 3 (+1 dla czasu) |
| 2b | Mrożenie kapusty czerwonej i włoskiej | **brak źródła** | — |
| 3 | Czernica (borówka czarna) a blueberries w NCHFP | **częściowo**: pH czernicy 3,2–3,6 (szczebel 2); żadne źródło 1–3 nie mówi, że przepisy NCHFP obejmują czernicę | 2 |
| 4a | Mrożenie czarnej porzeczki | **brak źródła wprost** (NCHFP i NDSU: „bright red”; Penn State tylko „currants” bez koloru) | 3 (ogólnie) |
| 4b | Mrożenie tartej cukinii | **źródło jest** (NCHFP Freezing Summer Squash; MU GH1503 to samo) | 1 |
| 5 | FSIS 403: zamrażarka po awarii | **zamiennik szczebla 1**: FAQ NCHFP o ponownym zamrażaniu; FSIS i web.archive.org nadal niedostępne | 1 |

Zamknięte źródłem: 3 (2a, 4b, 5). Częściowo: 1 (3). Bez źródła: 3 (1, 2b, 4a).
Pytanie 1 ma analogię szczebla 1, ale nie źródło wprost.

## Ograniczenia środowiska (sprawdzone 2026-11-02)

- `fsis.usda.gov` (Shelf-Stable Food Safety, Freezing and Food Safety, power outage, `foodkeeper.json`, PDF „Keeping Food Safe During an Emergency”): 403 dla curl i WebFetch.
- `foodsafety.gov`, `usda.gov` (blog), `ready.gov`: 403.
- `web.archive.org`: API `archive.org/wayback/available` odpowiada i podaje kopie FSIS Freezing and Food Safety (20261004024429) i Leftovers (20261008003443). Samo pobranie kopii się nie udaje: curl przez proxy zrywa połączenie (`ws_closed_mid_exchange`), WebFetch: „unable to fetch”.
  Kopii Shelf-Stable Food Safety brak (`archived_snapshots: {}`).
- `webarchive.library.unt.edu` (archiwum EOT stron rządowych): curl kod 60 (certyfikat), WebFetch 503.
- `archive.ph`: 429.
- Kopie FoodKeeper na GitHubie (np. `josephb333/SmartPantry data/foodkeeper.json`) to dane przerobione przez osoby trzecie, a nie oryginalny JSON FSIS. Nie nadają się jako szczebel 1.

---

## 1. Przechowywanie po otwarciu słoików (syropy, przeciery, kompoty, soki, curd, sos żurawinowy, masło jabłkowe)

**Wynik: brak źródła szczebla 1–3, które podaje termin po otwarciu dla tych produktów domowych.** Są dwie analogie szczebla 1.

Źródła przeczytane (analogie):

- A1. NCHFP, FAQ General Canning, odpowiedź o słoikach, które się nie zamknęły.
  Adres: https://nchfp.uga.edu/faqs/general-canning/category/faq-canning · `curl+grep` · sha12 `2476c1b95d7f` · szczebel 1.
  Cytat: „To preserve quality of food where jars failed to seal (and discovered within 24 hours of initial canning), refrigerate the jars and consume contents within one week.”
  Uwaga: zdanie dotyczy słoika niezamkniętego zaraz po wekowaniu i jest uzasadnione jakością („to preserve quality”). O słoiku otwartym po przechowywaniu nic nie mówi.
- A2. NCHFP, Lemon Curd (Canned), Shelf Life.
  Adres: https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/ · `curl+grep` · sha12 `cbd0e5647dd2` · szczebel 1.
  Cytat: „Plan to use canned lemon curd within 3 to 4 months.” oraz „To thaw, place container in a refrigerator at 40°F or lower for 24 hours before intended use. After thawing, consume within 4 weeks.”
  Uwaga: 4 tygodnie dotyczą curdu **mrożonego** po rozmrożeniu (już w rejestrze jako SLO-042), nie curdu wekowanego po otwarciu.
- A3. NCHFP, Storing Home Canned Jams and Jellies.
  Adres: https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/ · sha12 `bd24ec7fc7de` · szczebel 1.
  Cytat: „“Regular” – or pectin-added, full-sugar – cooked jams and jellies are best stored for 1 month in the refrigerator after opening.”
  Uwaga: dotyczy tylko dżemów i galaretek pełnocukrowych (już w rejestrze: SLO-018, SLO-213). Nie przenosić na syropy, soki, kompoty, przeciery ani masło jabłkowe.

Sprawdzone bez wyniku:
- NCHFP: FAQ Canning Vegetables, Meats, Miscellaneous Questions, General Freezing; strona „Store”; Lemon Curd (Freezer); Berry Syrup, Fruit Purées, Cranberries, Cranberry Sauce, Apple Butter (te z poprzednich partii).
- FSIS Shelf-Stable Food Safety i FoodKeeper (403, brak kopii w archiwum).
- Wyszukiwanie (2 zapytania): tylko poradniki popularne (szczebel 4–5) i dane o produktach kupnych.

Kandydat do rejestru (ostrożna reguła, oznaczona jako analogia):
- **KAND-1** (SLO): „Ostrożna reguła JarAtlas (analogia): NCHFP nie podaje, jak długo trzymać w lodówce otwarty słoik domowego syropu, soku, kompotu, przecieru, sosu żurawinowego, masła jabłkowego ani wekowanego curdu. Karta mówi: po otwarciu trzymać w lodówce i zużyć w ciągu tygodnia. Najkrótszy termin NCHFP dla słoika w lodówce to 1 tydzień (słoik, który się nie zamknął; NCHFP FAQ). Pleśń, zapach albo wyciek: wyrzucić.”
  Źródło: A1 (cytat wyżej). Typ: reguła JarAtlas z analogią, jak SLO-260.
  Decyzja do weta (D1, niżej): 1 tydzień dla wszystkich 7 grup, także dla curdu i masła jabłkowego, mimo że dla curdu jest analogia 4 tygodni (A2).

---

## 2a. Mrożenie boćwiny i jarmużu

**Wynik: źródło jest (szczebel 3 nazywa oba warzywa; czas 2 min zgodny z NCHFP, szczebel 1).**

- B1. NDSU Extension, FN187 „Freezing Vegetables” (Reviewed August 2026), Table 1.
  Adres: https://www.ndsu.edu/agriculture/extension/publications/freezing-vegetables · `curl+grep` · sha12 `27e8db26a437` · szczebel 3.
  Cytat: „GREENS, beet greens, collards, chard, kale, mustard greens, spinach, turnip greens Select tender leaves. Wash and remove stems. Blanch, cool and drain. Package, seal and freeze.” oraz „Collards – 3 minutes” / „Other greens – 2 minutes”.
- B2. University of Missouri Extension, GH1503 (Reviewed August 2026), Greens.
  Adres: https://extension.missouri.edu/publications/gh1503 · `curl+grep` · sha12 `6a449cba9835` · szczebel 3.
  Cytat: „Types: Beet, chard, collard, kale, mustard, spinach and turnip greens. Select tender young green leaves. Wash thoroughly, and cut off woody stems. Cut leaves of chard into pieces.” oraz „Water blanch collards 3 minutes and all other greens 2 minutes.”
  Uwaga: na tej samej stronie są czasy blanszowania na parze („Steam blanch collards 5 minutes and all other greens 3 minutes”), a zaraz pod nimi „Do not steam blanch greens.” Strona sama sobie przeczy. Karta tylko blanszowanie w wodzie (zgodnie z NCHFP).
- B3. NCHFP, Freezing Greens (Including Spinach) i tabela Blanching Times.
  Adresy: https://nchfp.uga.edu/how/freeze/vegetable/freezing-greens-including-spinach/ (sha12 `3d5934044281`), https://nchfp.uga.edu/how/freeze/freeze-general-information/blanching-times/ (sha12 `9a7d7565d706`) · szczebel 1.
  Cytat: „Water blanch collards 3 minutes and all other greens 2 minutes.” (już w rejestrze, SLO-270). NCHFP nie wymienia z nazwy boćwiny ani jarmużu.

Kandydat:
- **KAND-2** (SLO): „NDSU FN187 i MU GH1503 zaliczają boćwinę (chard) i jarmuż (kale) do liści mrożonych jak szpinak: blanszować w wodzie 2 minuty (collards 3 minuty), schłodzić, odsączyć, zapakować i zamrozić. Ten sam czas dla »all other greens« podaje NCHFP (SLO-270).”
  Źródła: B1, B2 (cytaty wyżej), B3 do czasu. Status: dwa niezależne źródła szczebla 3, zgodne ze szczeblem 1.
  Skutek dla karty (nie w tej partii): karta liści z p16 może nazwać boćwinę i jarmuż. Nazwa wariantu „szpinak i boćwina” przestaje być szersza niż karta.

## 2b. Mrożenie kapusty czerwonej i włoskiej

**Wynik: brak źródła.** Żadne przeczytane źródło szczebla 1–3 nie wymienia kapusty czerwonej ani włoskiej przy mrożeniu.

Sprawdzone:
- NCHFP Freezing Cabbage or Chinese Cabbage (sha12 `40a2322a7d05`): „Frozen cabbage or Chinese cabbage are suitable for use only as a cooked vegetable.” Odmian nie wymienia.
- NCHFP Blanching Times: „Cabbage or Chinese Cabbage (shredded) 1 1/2”.
- NDSU FN187: „CABBAGE (for cooked dishes)”, bez odmian.
- Penn State „Let's Preserve: Freezing Vegetables” (sha12 `4b4307d8e093`): „Cabbage, quarters: 4 minutes; wedges: 2 minutes; shredded: 1½ minutes”, bez odmian.
- MU GH1503: „Cabbage (including Chinese cabbage)”, bez odmian.
- MSU HNI09 i E3195, U. Idaho (broszura o kapuście): odpowiedź HTML (zapora Incapsula) albo „Forbidden”, nieprzeczytane.
- Clemson HGIC: 404/403.
- Wyszukiwanie: streszczenie wyszukiwarki pisze, że czerwoną i włoską traktuje się „generally” jak białą. To opinia (szczebel 5), nie źródło.

Kandydat: brak (twierdzenia nie proponuję). Propozycja dla katalogu (D-043, do roli 06/07): wariant red-savoy-cabbage-v13 zostaje bez karty mrożenia albo zawęża nazwę. Patrz D3.

---

## 3. Czernica (Vaccinium myrtillus) a borówka amerykańska w przepisach NCHFP

**Wynik: częściowy.** pH czernicy ze szczebla 2 jest. Brak źródła 1–3, że przepisy NCHFP na blueberries obejmują czernicę.

- C1. Aliman J. i in. (2020), „Study of the physicochemical properties of highbush blueberry and wild bilberry fruit in central Bosnia”, Turkish Journal of Agriculture and Forestry 44(2): 156–168, https://doi.org/10.3906/tar-1902-36 .
  Strona: https://journals.tubitak.gov.tr/agriculture/vol44/iss2/5 · `curl+grep` (abstrakt) · sha12 `9a2adad5c001` · szczebel 2 (recenzowane).
  Cytat: „In the case of wild bilberry, the following values were obtained: average weight 0.28-0.32 g, soluble solids content 11.1-11.3 °Brix, total sugars 7.23%-7.37%, titratable acidity 0.99%-1.02%, and total phenols 431-455 mg/100 g. Blueberry and wild bilberry also had a fairly uniform pH (3.2-3.6).”
  Ograniczenie: jeden region (Bośnia), przeczytany tylko abstrakt (PDF: `cgi/viewcontent.cgi?article=1119&context=agriculture`, nie pobierany). Zakres pH podany łącznie dla obu gatunków.
- C2. NCHFP: Freezing Blueberries or Huckleberries (sha12 `94199fb94ce7`) i Berries-Whole (ACI-068, ACI-244). Czernicy nie wymieniają. Huckleberry w USA to nazwa kilku gatunków Vaccinium i Gaylussacia, nie czernica (wiedza ogólna, niesprawdzona u źródła; do karty nie wchodzi).

Sprawdzone bez wyniku: wyszukiwanie „bilberry pH”. Dało też Akın i in. (TJAF, pH 2,22, wartość odstająca, nieczytane) i encyclopedia.pub (szczebel 5).

Kandydaci:
- **KAND-3** (ACI): „Owoce czernicy (Vaccinium myrtillus) z Bośni miały pH 3,2–3,6, w tym samym zakresie co borówka wysoka z tego samego badania (Aliman i in. 2020). To produkt kwaśny (pH poniżej 4,6), ale żaden przetestowany przepis NCHFP nie wymienia czernicy.”
  Źródło: C1. Szczebel 2, jedno źródło.
- **KAND-4** (SLO, mrożenie): „Mrożenie nie zależy od kwasowości. Kartę NCHFP »Blueberries or Huckleberries« można pokazać przy czernicy z dopiskiem, że NCHFP czernicy osobno nie opisuje.” Rozszerza istniejące zdanie SLO-248; decyzja D2.

---

## 4a. Mrożenie czarnej porzeczki

**Wynik: brak źródła szczebla 1–3 wprost dla czarnych porzeczek.**

Sprawdzone:
- NCHFP Freezing Currants (sha12 `8de6e5e8a02a`): „Select plump, fully ripe bright-red currants.” (SLO-268).
- NDSU Extension „Freezing Fruits” (https://www.ndsu.edu/agriculture/extension/publications/freezing-fruits, sha12 `de2d63d12052`): „Select plump, fully ripe, bright red currants. Wash in cold water and remove stems.” Ten sam tekst co NCHFP.
- Penn State „Let's Preserve: Freezing Fruits” (https://extension.psu.edu/lets-preserve-freezing-fruits, sha12 `3e49bb72cac7`), szczebel 3, bez koloru:
  „Fruits such as strawberries, cranberries, blueberries, cherries, gooseberries, currants, raspberries, rhubarb, and grapes may be frozen individually on a tray before packing in containers.”
- UMN Extension „Freezing fruits”: 404.
- Wyszukiwanie: praca rumuńska (protmed.uoradea.ro, nieczytana) i strony sprzedawców (szczebel 4).

Kandydat (słaby, tylko metoda na tacy):
- **KAND-5** (SLO): „Penn State Extension wymienia porzeczki (bez koloru) wśród owoców, które można zamrozić pojedynczo na tacy przed zapakowaniem.” Źródło: Penn State (cytat wyżej), szczebel 3.
  Bez syropu 50% i bez proporcji cukru dla czarnych (te są tylko dla czerwonych). Decyzja D4.

## 4b. Mrożenie tartej cukinii

**Wynik: źródło jest (szczebel 1).**

- D-1. NCHFP Freezing Summer Squash.
  Adres: https://nchfp.uga.edu/how/freeze/vegetable/freezing-summer-squash/ · `curl+grep` · sha12 `e57ee5f9397b` · szczebel 1.
  Cytat: „Grated Zucchini (for Baking) – Choose young tender zucchini. Wash and grate. Steam blanch in small quantities 1 to 2 minutes until translucent. Pack in measured amounts into containers, leaving 1/2-inch headspace. Cool by placing the containers in cold water. Seal and freeze.”
- D-2. MU GH1503, Grated zucchini (szczebel 3, zgodne).
  Cytat: „Wash, and grate without peeling. Steam blanch in small quantities for 1 to 2 minutes, or until translucent. Drain well, and pack in containers in amounts needed for recipes. Cool by placing the containers in cold water. Seal and freeze. If watery when thawed, drain the liquid before using the zucchini.”
- NDSU FN187 (zgodne): „ZUCCHINI, grated Steam in small quantities until translucent. … Put containers in cold water to cool. Seal and freeze. Drain before using in baking. In steam – 1 to 2 minutes”.

Kandydat:
- **KAND-6** (SLO): „NCHFP Freezing Summer Squash, tarta cukinia do pieczenia: wybrać młodą, delikatną cukinię; umyć i zetrzeć; blanszować na parze małymi porcjami 1–2 minuty, aż stanie się półprzezroczysta; zapakować odmierzone porcje z 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; schłodzić, wstawiając pojemniki do zimnej wody; zamknąć i zamrozić. MU GH1503: jeśli po rozmrożeniu jest wodnista, odlać płyn przed użyciem.”
  Źródła: D-1 (szczebel 1), D-2 (szczebel 3). Uwaga: inaczej niż przy plastrach (woda, 3 min, SLO-263), tu jest para i chłodzenie w pojemniku. Karta lub sekcja osobno (D5).

---

## 5. FSIS 403: awaria zamrażarki

**Wynik: FSIS nadal niedostępny (adres główny, kopia web.archive.org, archiwum UNT). Zamiennik szczebla 1: FAQ NCHFP.**

- E1. NCHFP, FAQ General Freezing.
  Adres: https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing · `curl+grep` · sha12 `32b611f405ab` · szczebel 1.
  Cytaty:
  - „Can food be refrozen if it has thawed? Foods can be refrozen if at least one ot these two conditions are met: 1) Foods have only partially thawed and still have ice crystals in the package; 2) The freezer temperature has remained at 40°F or below. Before using, check to see that color and odor of the food are good. Quality of the food will be lower.”
  - „How long will food remain frozen if the power goes off? … Usually food in a loaded freezer will stay frozen for two to four days, depending on its size. A half-filled freezer will keep food frozen only about 24 hours. Cover the freezer with blankets, keeping them away from the compressor, to help hold the cold.”
- Porównanie z FDA (SLO-259):
  - Warunek ponownego zamrożenia ten sam: kryształki lodu albo 40°F (ok. 4°C) lub mniej.
  - NCHFP też nie mówi, co zrobić, gdy żaden warunek nie jest spełniony. Ostrożna reguła JarAtlas „wyrzuć” (SLO-260) zostaje bez zmian.
  - Rozbieżność czasu: FDA podaje 48 godzin dla pełnej zamrażarki, NCHFP „two to four days” zależnie od wielkości. Przy połowie zamrażarki oba źródła podają ok. 24 godzin.
  - Ostrożniej: FDA 48 h (krócej). Karty tego nie zmieniają.
  - Dodatek NCHFP: przed użyciem sprawdzić kolor i zapach.

Kandydaci:
- **KAND-7** (SLO): „NCHFP (FAQ General Freezing): rozmrożoną żywność można ponownie zamrozić, jeśli spełniony jest co najmniej jeden warunek: ma jeszcze kryształki lodu albo temperatura w zamrażarce nie przekroczyła 40°F (ok. 4°C). Przed użyciem sprawdzić kolor i zapach. Jakość będzie niższa.” Drugie źródło szczebla 1 obok FDA dla SLO-259/260.
- **KAND-8** (SLO): „NCHFP: przykryć zamrażarkę kocami, z dala od sprężarki, żeby dłużej trzymała zimno.” Opcjonalnie. Czas 2–4 dni **nie** do kart; zostaje 48 h z FDA (wariant ostrożniejszy).

Sprawdzone bez wyniku (FSIS): adresy fsis.usda.gov (4), foodsafety.gov (4), usda.gov, ready.gov, web.archive.org (curl i WebFetch), UNT EOT (curl i WebFetch), archive.ph, NCHFP Care of the Freezer, Freezer Management, Thawing and Preparing Foods.

---

## Decyzje do weta (wpis decisions `2026-11-02-jaratlas-06-pytania-otwarte`)

Analogia z repo `trening` jest częściowa: pewność „uproszczenie (analogia)” to wariant niebadany osobno, pokazany z dopiskiem (`docs/research/24-przypisanie-partii.md`). Pełnej analogii brak, więc to są decyzje Claude, do weta.

- **D1. Po otwarciu (pytanie 1)**
  - Opcje: (a) jedna ostrożna reguła „lodówka, do 1 tygodnia” dla 7 grup, analogia z NCHFP FAQ; (b) różne terminy z analogii: curd 4 tygodnie (A2), masło jabłkowe jak dżem 1 miesiąc, reszta 1 tydzień; (c) bez terminu, tylko „w lodówce” (stan obecny).
  - Kompromis: (a) jest najprostsze i najostrożniejsze, ale może skracać termin bez potrzeby; (b) jest dłuższe, ale opiera się na przeniesieniu z innego stanu produktu; (c) nie daje czytelnikowi liczby.
  - **Rekomendacja: (a)**, bo przy bezpieczeństwie żywności wariant ostrożniejszy.
- **D2. Czernica (pytanie 3)**
  - Opcje: (a) mrożenie: karta blueberries pokazana przy czernicy z dopiskiem; wekowanie: bez karty dla czernicy do czasu źródła 1–3, które ją nazywa; (b) obie metody z dopiskiem „analogia, pH 3,2–3,6”; (c) zawęzić nazwę wariantu w katalogu do borówki amerykańskiej (D-043).
  - Kompromis: (a) daje czytelnikowi mrożenie (bez ryzyka kwasowego) i nie twierdzi, że proces wekowania jest przetestowany; (b) daje więcej treści, ale proces wekowania nie był testowany dla mniejszych owoców; (c) traci polski owoc.
  - **Rekomendacja: (a).**
- **D3. Kapusta czerwona i włoska (pytanie 2b)**
  - Opcje: (a) red-savoy-cabbage-v13 bez karty mrożenia, oznaczony brakiem źródła; (b) karta z białej kapusty z dopiskiem „analogia”.
  - Ryzyko mrożenia jest jakościowe, nie zdrowotne (blanszowanie, potem gotowanie), więc (b) jest dopuszczalne, ale bez źródła.
  - **Rekomendacja: (a)** do czasu źródła. Kolejne miejsca do sprawdzenia: MSU E3195 (PDF za zaporą, pobrać ręcznie), U. Idaho, poradniki kanadyjskie lub brytyjskie.
- **D4. Czarna porzeczka (pytanie 4a)**
  - Opcje: (a) czarne nadal poza zakresem karty currant-v15; (b) dopisać tylko metodę na tacy (KAND-5, Penn State), bez syropu i proporcji cukru.
  - **Rekomendacja: (b)**: źródło szczebla 3, ryzyko tylko jakościowe, liczby wyłącznie dla czerwonych.
- **D5. Tarta cukinia (pytanie 4b)**
  - Opcje: (a) osobna sekcja w karcie zucchini-v17; (b) osobna karta lub wariant.
  - **Rekomendacja: (a)**: to samo źródło NCHFP, mniej duplikacji.
- **D6. Boćwina i jarmuż (pytanie 2a)**: nazwać je w karcie liści (KAND-2). Jedna sensowna opcja, bo dwa źródła szczebla 3 są zgodne ze szczeblem 1. Do weta tylko co do formy.

## Co dalej (dla sesji edytującej rejestr i karty)

1. Dopisać KAND-2, -6, -7 (źródło wprost), a KAND-1, -3, -4, -5, -8 dopiero po wecie D1–D4.
2. W `pytania-otwarte.md`: zamknąć wpisy z partii 14 (FSIS → NCHFP FAQ) i 15 (tarta cukinia); częściowo boćwina/jarmuż (p16). Wpisy po otwarciu, czernica, kapusta czerwona/włoska i czarne porzeczki zostają otwarte z listą sprawdzonych miejsc z tego raportu.
3. Ręcznie (właściciel lub inna sieć): FSIS „Freezing and Food Safety” z web.archive.org (kopia 20261004024429 istnieje), FSIS „Shelf-Stable Food Safety” (termin 5–7 dni dla otwartych puszek kwaśnych: liczba niesprawdzona, znana tylko ze streszczenia wyszukiwarki), PDF Aliman i in. 2020.
