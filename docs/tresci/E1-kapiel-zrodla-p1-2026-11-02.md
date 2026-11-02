# E1 kąpiel wodna: źródła dla wariantów do-researchu, partia 1 (tor C8, 2026-11-02)

- Rola 06-tresci, build, tryb bez właściciela (decyzja dnia `2026-11-02-jaratlas-tryb-decyzji-dzien`). Gałąź `claude/jaratlas-c8-kapiel-zrodla` od `claude/happy-brown-yncplj` = 99a9b87. Zakres: tylko ten plik i `E1-kapiel-zrodla-p1-2026-11-02.json`. Katalog, karty i rejestry bez zmian; zmiany statusów robi tor A w partii katalogowej (D-043).
- Wejście: 240 wariantów `preservationMethod: water-bath` ze statusem `do-researchu` w `catalog/catalog-seed.json`; partia 1 = 38 wariantów (wybór: C8-D2).
- Format jak C7/B4: pola rejestru plus `twierdzenie_en`, `warianty`, `jednoZrodlo`, `robocze_id`; `status: robocze`, `przeglad: null`. Cytaty: „ | ” fragmenty kolejno, „ … ” przerwa.
- ID tylko z zakresu ACI-400–499 (użyte: ACI-400–496).

## 1. Wynik

Warianty: 38. Proponowane statusy: ok-zrodlo 3, ryzyko-wysokie 14, do-researchu 21 (w tym 17 z opisaną poprawką albo dalszą drogą w kolumnie „Minimalna poprawka”; poprawki dające ok-zrodlo: C8-D9–D11 i tabela), nie-publikowac 0 (żadne źródło szczebla 1 nie odradza wprost tych produktów; C8-D6, C8-D7).
Nowe twierdzenia: 97 (ACI-400–496), wszystkie krytyczne; szczebel 1: 70, szczebel 2: 1, szczebel 3: 26 (jedno źródło). Szczebel 4 (Ball, arkusze UC MFP z przepisami Ball, prasa) nie wchodzi do twierdzeń, tylko do uwag (C8-D3).

Kontrole (dowód):
- cytaty: 97 cytatów (204 fragmenty) dosłownie w tekście z curl/pdftotext; normalizacja NFKC, spacji, cudzysłowów i ułamków; 0 braków i 0 błędów kolejności (verify.py w notatkach sesji)
- mutacja: zmiana „¼ inch” na „½ inch” w cytacie ACI-461 wykryta (BRAK, kod 1)
- sha12: sha12 każdego pobranego pliku przeliczone ponownie z raw: zgodne (UC ANR 8568: PDF 70ed416d854c)
- przeklad: porownaj(en, pl): 65/97 par z różnicami formalnymi; 10 par z liczbą en bez pl przejrzane ręcznie, 0 sprzecznych (C8-D14)
- przeklad_id: ['ACI-400', 'ACI-401', 'ACI-402', 'ACI-403', 'ACI-404', 'ACI-405', 'ACI-406', 'ACI-407', 'ACI-408', 'ACI-409', 'ACI-410', 'ACI-411', 'ACI-412', 'ACI-413', 'ACI-414', 'ACI-415', 'ACI-416', 'ACI-417', 'ACI-418', 'ACI-420', 'ACI-421', 'ACI-422', 'ACI-423', 'ACI-424', 'ACI-425', 'ACI-426', 'ACI-428', 'ACI-429', 'ACI-430', 'ACI-432', 'ACI-433', 'ACI-434', 'ACI-435', 'ACI-436', 'ACI-437', 'ACI-438', 'ACI-447', 'ACI-454', 'ACI-456', 'ACI-459', 'ACI-461', 'ACI-462', 'ACI-463', 'ACI-464', 'ACI-466', 'ACI-468', 'ACI-470', 'ACI-471', 'ACI-473', 'ACI-474', 'ACI-476', 'ACI-480', 'ACI-481', 'ACI-482', 'ACI-483', 'ACI-485', 'ACI-487', 'ACI-488', 'ACI-489', 'ACI-490', 'ACI-491', 'ACI-492', 'ACI-494', 'ACI-495', 'ACI-496']
- kolizje_id: git grep ACI-4[0-9][0-9] na 17 gałęziach origin: 0 trafień
- npm_run_check: npm run check: kod 0, testy 138/138; 3 ostrzeżenia UWAGA (cultivated-mushrooms-v13) były już w bazie 99a9b87

## 2. Tabela: wariant → proponowany status, twierdzenia, uwagi dla partii katalogowej

| Wariant | Nazwa | Status proponowany | Twierdzenia | Minimalna poprawka | Uwagi dla partii katalogowej | Decyzja |
|---|---|---|---|---|---|---|
| cucumber-v10 | konserwowe | ok-zrodlo | ACI-400, ACI-401, ACI-402, ACI-403, ACI-016, ACI-017, ACI-018, ACI-021 | — | Nazwa „konserwowe” jest ogólna; najbliższy i jedyny octowy przepis NCHFP na całe ogórki z koprem (8 funtów ogórków 3–5 cali, ocet 5%, gorczyca, koper, przyprawa do marynat; solanka 12 h; raw pack, ½ cala; pint 10/15/20, quart 15/20/25 min; albo pasteryzacja 180–185°F 30 min). Karta musi trzymać skład 1:1 – bez typowo polskich dodatków spoza przepisu (chrzan, liście, dodatkowy czosnek, inne proporcje octu/wody). Jeśli redakcja uzna, że „konserwowe” sugeruje inny polski skład, zmienić nazwę na „konserwowe z koprem (szybkie, octowe)”. Wersja hiszpańska (Proceso Rápido…) to ten sam przepis. | C8-D4 |
| cucumber-v12 | plastry bread and butter | ok-zrodlo | ACI-404, ACI-405, ACI-406, ACI-407, ACI-016, ACI-017, ACI-018, ACI-021, ACI-025 | — | Dopasowanie 1:1 (plastry ogórka z cebulą, ocet 5%, cukier, gorczyca, seler, kurkuma). Hot pack, ½ cala, pint lub quart 10/15/20 min albo pasteryzacja niskotemperaturowa 180–185°F 30 min. Wariant z wapnem opcjonalny (ostrożność: pył wapna, 3× płukanie). ACI-025 (wariant z cukinią) już w rejestrze – nie mylić z tym wariantem. | C8-D4 |
| cucumber-v11 | korniszony francuskie | do-researchu | ACI-408, ACI-409, ACI-016, ACI-018 | Zmienić nazwę na „słodkie korniszony (sweet gherkins)” i podać przepis NCHFP Sweet Gherkin 1:1 → ok-zrodlo. | „Korniszony francuskie” (cornichons) to kwaśne, niesłodzone mini-ogórki zwykle w occie winnym z estragonem i szalotką – nie znaleziono przepisu szczebla 1–3 (tylko blogi/Ball). Przepis NCHFP jest słodki (8 szklanek cukru na 6 szklanek octu), 4-dniowy, sterylne słoiki pint, raw 5/10/15 min. Ocet winny = ocet o niepewnej kwasowości dla NCHFP (ACI-018). | — |
| cucumber-v19 | w oleju z czosnkiem | ryzyko-wysokie | OLE-036, OLE-028, OLE-001, ACI-437, ACI-438, ACI-016, ACI-017 | — | Brak przetestowanego przepisu szczebla 1–3 na pikle z olejem i surowym czosnkiem; USDA ma tylko 3 procedury warzyw z olejem (papryka, pieczarki, sałatka z fasoli – OLE-036), żadna z ogórkiem. UC ANR 8568: zakwaszanie całych ząbków w occie jest zmienne (3 dni–ponad tydzień) i nie ma domowych wytycznych; czosnek w oleju tylko lodówka ≤4 dni lub zamrażarka. Olej może utrudniać równomierne zakwaszenie (ACI-017) – to wniosek, nie cytat. Karta tylko ostrzegawcza; ewentualnie odesłać do cucumber-v10/v12 bez oleju. | C8-D8 |
| green-cherry-tomato-v03 | zielone w occie z papryką | ok-zrodlo | ACI-410, ACI-411, ACI-412, ACI-413, ACI-016, ACI-017, ACI-050 | — | Wcześniejsza notatka („bez papryki”) była błędna: przepis zawiera 6 zielonych papryk słodkich w ćwiartkach (4 ćwiartki na słoik quart), małe zielone pomidory ok. 1 cala w całości, biały ocet destylowany 5%, seler, czosnek, koper. Papryka = słodka, nie ostra; tylko słoiki quart, raw pack, 15/20/25 min, ½ cala. Nazwa nie wymienia selera, czosnku i kopru – zalecane doprecyzowanie: „zielone pomidorki po koszersku z koprem i papryką”. Jeśli redakcja stosuje regułę E3 dosłownie do nazwy (wszystkie przyprawy w nazwie), przejść na do-researchu z tą zmianą nazwy. Pickled Sweet Green Tomatoes (plastry, z cebulą, bez papryki) nie pasuje. | C8-D4 |
| chili-pepper-v04 | jalapeno w occie (escabeche) | do-researchu | ACI-414, ACI-415, ACI-416, ACI-417, ACI-016, ACI-017, ACI-005, ACI-094 | Usunąć „escabeche” (marchew/cebula) i nazwać „krążki jalapeño w occie jabłkowym” wg NCHFP Pickled Jalapeño Rings (wapno, 3× płukanie, ocet jabłkowy 5%, pint raw 10/15/20 min) → ok-zrodlo. | Brak przepisu szczebla 1–3 na escabeche (jalapeño + marchew + cebula). Jedyny znaleziony przepis mieszany to Ball (karta UC MFP San Diego, szczebel 4, inny skład, warzywa opalane). Alternatywa: NCHFP Pickled Hot Peppers (jalapeño z papryką słodką, pint/½ pt raw 10/15/20) – sprawdzić, czy nie jest już użyta w chili-pepper-v08 (ryzyko duplikatu). Ostrzeżenie o rękawicach: ACI-267. | — |
| carrot-v04 | meksykańskie escabeche z jalapeno | ryzyko-wysokie | ACI-418, ACI-016, ACI-017, ACI-005, ACI-105 | — | Mieszanka niskokwasowych warzyw (marchew pH 5,88–6,40) z jalapeño i cebulą bez testowanego przepisu szczebla 1–3; NCHFP ma osobno Pickled Carrots (bez papryczek, ocet biały 5%, hot pack pint 15/20/25) i Pickled Jalapeño Rings. Przepis Ball (karta UC MFP SD) nie wystarcza. Nie da się poprawić minimalnie bez utraty tożsamości wariantu; jeśli redakcja chce kartę z przepisem, jedyna droga to zmiana na „marchewka w occie z gorczycą i selerem (NCHFP Pickled Carrots)” – to nowy wariant, nie poprawka (carrot-v05 to inny skład, nie duplikat). Alternatywnie: escabeche tylko lodówkowe/mrożone. | C8-D8 |
| corn-v03 | ziarna kukurydzy w occie z papryką | do-researchu | ACI-421, ACI-422, ACI-423, ACI-016, ACI-017, ACI-005, ACI-122 | Przyjąć skład NCHFP Pickled Corn Relish (z selerem, cebulą, musztardą) → ok-zrodlo, ALE to duplikat corn-v04 („amerykański corn relish z gorczycą i selerem”, już ok-zrodlo). Zalecenie: scalić z corn-v04 albo wycofać corn-v03. | Brak przepisu szczebla 1–3 na same ziarna kukurydzy z papryką w occie (kukurydza pH 5,90–7,30, gęsta). Wersja uproszczona bez selera/cebuli = zmiana proporcji (ACI-016). Corn relish: ½ pt lub pt, hot, ½ cala, 15/20/25 min; opcjonalna pasta z mąki tylko w tym przepisie. | C8-D9 |
| onion-v03 | w zalewie octowej z gorczycą | do-researchu | ACI-419, ACI-420, ACI-016, ACI-017, ACI-005, ACI-107 | Zawęzić do „cebulki perłowe w occie z gorczycą i selerem” (NCHFP Pickled Pearl Onions) → ok-zrodlo, ALE to duplikat shallot-pearl-onion-v05 (cebulki perłowe w białym occie, już ok-zrodlo). Zalecenie: wycofać onion-v03 albo przenieść jako odsyłacz. | Przepis NCHFP dotyczy wyłącznie obranych białych cebulek perłowych w całości (biały ocet 5%, cukier, gorczyca, seler; hot pack, 1 cal/½ cala; pint 10/15/20). Zwykła cebula krojona w zalewie z gorczycą – brak przepisu szczebla 1–3. Pickled Pepper-Onion Relish (NCHFP) to inny produkt (gęsty relish, bez gorczycy). | C8-D9 |
| garlic-v04 | w occie winnym z ziołami | ryzyko-wysokie | ACI-431, ACI-432, ACI-433, ACI-434, ACI-435, ACI-436, ACI-437, ACI-439, ACI-440, ACI-016, ACI-018, ACI-106 | Zmienić na „czosnek w nierozcieńczonym occie winnym z suszonymi przyprawami – przechowywanie w lodówce (ok. 4 miesiące)”; bez świeżych ziół, bez wekowania → ok-zrodlo (UC ANR 8568, szczebel 3). | C8: status zaostrzony z do-researchu (propozycja subagenta) do ryzyko-wysokie, bo UC ANR 8568 odradza wekowanie czosnku i nie ma wytycznych zakwaszania całych ząbków (ACI-436, ACI-437). Brak przepisu szczebla 1–3 na wekowany czosnek w occie (jedyny przepis z kąpielą wodną to Ball, szczebel 4, z białym octem). UC ANR 8568 i OSU: wekowanie czosnku niezalecane; czosnek w nierozcieńczonym winie/occie (biały lub winny) tylko w lodówce, ok. 4 mies., dodatki: suszone przyprawy. Świeże zioła nie są objęte źródłem – usunąć lub zastąpić suszonymi. Niebieski kolor – bezpieczny (ACI-406). | C8-D5 |
| garlic-v06 | w occie balsamicznym | ryzyko-wysokie | ACI-431, ACI-432, ACI-434, ACI-435, ACI-436, ACI-437, ACI-439, ACI-440, ACI-016, ACI-018, ACI-106 | Zmienić na wersję lodówkową w occie winnym lub białym (UC ANR 8568) – wtedy to duplikat garlic-v04 po poprawce; zalecenie: scalić z garlic-v04 albo wycofać. | C8: status zaostrzony z do-researchu (propozycja subagenta) do ryzyko-wysokie, bo UC ANR 8568 odradza wekowanie czosnku i nie ma wytycznych zakwaszania całych ząbków (ACI-436, ACI-437). UC ANR 8568 nie wyklucza balsamicznego ze względów bezpieczeństwa, ale go nie poleca („may be too strongly flavored”) i wymaga octu nierozcieńczonego; kwasowość balsamicznego bywa różna/nieoznaczona (ACI-016). Wekowanie czosnku niezalecane. Ostrożnie: nie publikować jako przetwór do spiżarni. | C8-D5 |
| garlic-v08 | w zalewie chili | ryzyko-wysokie | ACI-431, ACI-433, ACI-434, ACI-435, ACI-436, ACI-437, ACI-439, ACI-440, ACI-016, ACI-017, ACI-005, ACI-106 | Zmienić na „czosnek w nierozcieńczonym occie (białym lub winnym) z suszonymi płatkami chili – lodówka, ok. 4 miesiące” → ok-zrodlo (UC ANR 8568). Bez wody/cukru w zalewie, bez świeżych papryczek, bez wekowania. | C8: status zaostrzony z do-researchu (propozycja subagenta) do ryzyko-wysokie, bo UC ANR 8568 odradza wekowanie czosnku i nie ma wytycznych zakwaszania całych ząbków (ACI-436, ACI-437). „Zalewa” zwykle oznacza ocet rozcieńczony wodą – UC wymaga octu nierozcieńczonego. Świeże chili (niskokwasowe) nie są objęte źródłem. Brak przepisu szczebla 1–3 na wekowanie. Po poprawce wariant blisko garlic-v04 – rozważyć scalenie. | C8-D5 |
| peach-nectarine-v04 | pikantna salsa brzoskwiniowa z jalapeno do słoików | do-researchu | ACI-424, ACI-425, ACI-426, ACI-037, ACI-038, ACI-040, ACI-041, E3-001 | Zmienić na „pikantna salsa brzoskwiniowo-jabłkowa” wg NCHFP Peach Apple Salsa 1:1 (ostrość z płatków chili) → ok-zrodlo. Wariant z jalapeño możliwy tylko jako zamiana części 2 szklanek zielonej papryki na jalapeño bez zwiększania łącznej ilości papryki (ACI-040) – patrz pytania otwarte. | Nie znaleziono przetestowanego przepisu szczebla 1–3 na salsę brzoskwiniową z jalapeño. USU „Peach Salsa” (papryka czerwona, płatki chili, czosnek, imbir; pint 15/20/25) – brak jalapeño, a podane źródło (USDA Complete Guide) niepotwierdzone. Wpis NC Extension z jalapeño – bez źródła testu i tabeli wysokości. NCHFP Peach Apple Salsa: twarde niedojrzałe brzoskwinie, jabłka, pomidory Roma, ocet jabłkowy 5%; hot pack, pint, 1¼ cala dla części stałych + ½ cala płyn; 15/20/25 min. Brzoskwinie o białym miąższu wykluczyć (E3-001). | — |
| tomatillo-v06 | pieczona salsa verde do słoików (pasteryzacja) | do-researchu | ACI-427, ACI-428, ACI-429, ACI-430, ACI-037, ACI-038, ACI-041, ACI-060 | Usunąć „pieczona”: „salsa verde z tomatillo do słoików” wg NCHFP Tomatillo Green Salsa 1:1 (chili wolno opalić do obrania skórki) → ok-zrodlo. | Pieczenie tomatillo nie występuje w przepisie NCHFP; NCHFP dopuszcza jedynie zmianę ilości przypraw/ziół i zamianę tomatillo na zielone pomidory. Pieczone wersje znalezione tylko u Ball (szczebel 4). Pieczenie zmienia zawartość wody i objętość odmierzonych warzyw, więc ma wpływ na proporcje warzyw do kwasu (wniosek, nie cytat). Hot pack, pint, ½ cala, 15/20/25 min; sok z cytryny/limonki butelkowany, nie zamieniać na ocet. Uwaga: green-cherry-tomato-v11 (salsa verde z zielonych pomidorów) może już używać tego przepisu – to inny produkt, nie duplikat. | — |
| chili-pepper-v17 | wędzone chipotle w sosie adobo | ryzyko-wysokie | ACI-449 | — | Chipotle w adobo: nie znaleziono przepisu szczebla 1–3 (wyniki to wyłącznie blogi: Creative Canning, Daring Gourmet itp. – szczebel 5, część sama przyznaje brak testów NCHFP). Sos z pomidorów, cebuli, czosnku i papryczek to mieszanka niskokwasowa/kwaśna, z natury pH > 4,6 bez dość kwasu (ACI-006/SZY-002); NCHFP dla salsy: nie wekować przepisów nieprzetestowanych, mrozić lub lodówka (ACI-041) i nie zagęszczać (ACI-042). Papryka bez zalewy tylko w szybkowarze (SZY-039). Wędzenie poza zakresem. Karta ostrzegawcza; alternatywa: mrożenie porcji. | C8-D8 |
| potato-sunchoke-v05 | niemiecka sałatka ziemniaczana w zalewie octowej (wekowana) | ryzyko-wysokie | ACI-446, ACI-449 | — | Niemiecka sałatka ziemniaczana wekowana: brak testowanego przepisu szczebla 1–3. NCHFP ma dla ziemniaków tylko szybkowar (ACI-446, SZY-029; woda z gotowania zakazana – za dużo skrobi). Specjalistka OSU Extension: nie da się jej bezpiecznie wekować w domu (B-07 (robocze, nieprzyjęte: szczebel 4 albo kontekst), szczebel 4 – relacja prasowa). Mieszanka gęsta, skrobiowa, niskokwasowa z dodatkami (cebula, boczek/olej). Karta tylko ostrzegawcza; sałatkę robić na świeżo i trzymać w lodówce. | C8-D8 |
| beetroot-v11 | barszcz czerwony skoncentrowany | ryzyko-wysokie | ACI-447, ACI-448, ACI-449 | — | Koncentrat barszczu czerwonego (płyn z buraków, zakwaszony octem/cytryną albo zakwasem): nie znaleziono testowanego procesu w kąpieli wodnej ani w szybkowarze dla barszczu/soku z buraków. NCHFP: buraki tylko w szybkowarze i NIE w wodzie z gotowania (ACI-447, SZY-053); zupy tylko w szybkowarze, bez zagęszczania i tylko ze składników mających własne zalecenia (ACI-448, SZY-017/018). Jedyny testowany kwaśny produkt z buraków to NCHFP Pickled Beets (ACI-212…227) – inna forma i proporcje, nie przenosi się na koncentrat. Zakwaszenie bez testowanego przepisu nie wystarcza (ACI-449, ACI-006). Karta ostrzegawcza; alternatywa: mrożenie koncentratu albo wekowanie buraków w occie wg Pickled Beets i robienie barszczu na świeżo. | C8-D8 |
| pumpkin-v03 | w occie korzennym z goździkami i cynamonem | ryzyko-wysokie | ACI-441, ACI-442, ACI-444, ACI-445 | — | Dynia marynowana (w occie korzennym z goździkami i cynamonem): nie znaleziono żadnego przetestowanego przepisu szczebla 1–3 na dynię w occie do kąpieli wodnej (NCHFP, UGA, Wisconsin, wyszukiwanie extension). NCHFP: dynia niskokwasowa, jedyny proces to kostka 1 cal w szybkowarze (ACI-036, SZY-016); UGA: brak przetestowanych przepisów na przetwory z dyni do temperatury pokojowej (ACI-445). Karta tylko ostrzegawcza; alternatywa: wersja lodówkowa/mrożenie (FRZ-007). Kandydat do nie-publikowac, jeśli uda się potwierdzić archiwalny tekst NCHFP „Resources for Home Preserving Pumpkins” (patrz niedostepne). | C8-D6 |
| pumpkin-v04 | w occie jabłkowym | ryzyko-wysokie | ACI-441, ACI-442, ACI-444, ACI-445 | — | Dynia marynowana (w occie jabłkowym): nie znaleziono żadnego przetestowanego przepisu szczebla 1–3 na dynię w occie do kąpieli wodnej (NCHFP, UGA, Wisconsin, wyszukiwanie extension). NCHFP: dynia niskokwasowa, jedyny proces to kostka 1 cal w szybkowarze (ACI-036, SZY-016); UGA: brak przetestowanych przepisów na przetwory z dyni do temperatury pokojowej (ACI-445). Karta tylko ostrzegawcza; alternatywa: wersja lodówkowa/mrożenie (FRZ-007). Kandydat do nie-publikowac, jeśli uda się potwierdzić archiwalny tekst NCHFP „Resources for Home Preserving Pumpkins” (patrz niedostepne). | C8-D6 |
| pumpkin-v05 | pikantna w occie z chili | ryzyko-wysokie | ACI-441, ACI-442, ACI-444, ACI-445 | — | Dynia marynowana (pikantna w occie z chili): nie znaleziono żadnego przetestowanego przepisu szczebla 1–3 na dynię w occie do kąpieli wodnej (NCHFP, UGA, Wisconsin, wyszukiwanie extension). NCHFP: dynia niskokwasowa, jedyny proces to kostka 1 cal w szybkowarze (ACI-036, SZY-016); UGA: brak przetestowanych przepisów na przetwory z dyni do temperatury pokojowej (ACI-445). Karta tylko ostrzegawcza; alternatywa: wersja lodówkowa/mrożenie (FRZ-007). Kandydat do nie-publikowac, jeśli uda się potwierdzić archiwalny tekst NCHFP „Resources for Home Preserving Pumpkins” (patrz niedostepne). | C8-D6 |
| pumpkin-v07 | z kurkumą | ryzyko-wysokie | ACI-441, ACI-442, ACI-444, ACI-445 | — | Dynia marynowana (z kurkumą): nie znaleziono żadnego przetestowanego przepisu szczebla 1–3 na dynię w occie do kąpieli wodnej (NCHFP, UGA, Wisconsin, wyszukiwanie extension). NCHFP: dynia niskokwasowa, jedyny proces to kostka 1 cal w szybkowarze (ACI-036, SZY-016); UGA: brak przetestowanych przepisów na przetwory z dyni do temperatury pokojowej (ACI-445). Karta tylko ostrzegawcza; alternatywa: wersja lodówkowa/mrożenie (FRZ-007). Kandydat do nie-publikowac, jeśli uda się potwierdzić archiwalny tekst NCHFP „Resources for Home Preserving Pumpkins” (patrz niedostepne). | C8-D6 |
| pumpkin-v11 | chutney z dyni i jabłek | ryzyko-wysokie | ACI-441, ACI-442, ACI-443, ACI-444, ACI-445 | — | Chutney z dyni i jabłek: brak przetestowanego przepisu. Dynia w chutneyu rozpada się do konsystencji przecieru, a NCHFP wprost odradza wekowanie każdej rozgniecionej/zmiksowanej dyni (SZY-015, ACI-036) i stwierdza, że dodatek octu/soku z cytryny nie daje jednego bezpiecznego zalecenia (ACI-441, ACI-442), a konsystencja wymagałaby badań penetracji ciepła (ACI-443). Ostrożniej: rozważyć nie-publikowac (szczebel 1 odradza każdą rozgniecioną dynię; czy chutney = „mashed” – decyzja 06). Karta co najwyżej ostrzegawcza + wersja lodówkowa/mrożona. | C8-D6 |
| elderberry-elderflower-v01 | zielone pąki i niedojrzałe owoce czarnego bzu w occie (po obróbce cieplnej — kapary z bzu) | ryzyko-wysokie | ACI-450, ACI-451, ACI-452, ACI-453 | — | „Kapary” z zielonych pąków i niedojrzałych owoców bzu: brak jakiegokolwiek przepisu. Źródła szczebla 3 mówią wprost, że niedojrzałe owoce są niebezpieczne i że przetwarzać wolno tylko w pełni dojrzałe owoce (ACI-450, ACI-451), OSU: zbierać w pełni dojrzałe (ACI-452); badanie recenzowane: najwyższy potencjał cyjanogenny w szypułkach i zielonych owocach, zalecane ich oddzielanie (ACI-453); kwiaty mają więcej sambunigryny niż owoce (B-15 (robocze, nieprzyjęte: szczebel 4 albo kontekst), dane wtórne). Istniejące: SLO-061 (gotować), SLO-062/063 (szypułki/liście – więcej toksyn), SLO-064 (pH bzu nie stale < 4,6, tylko przepisy wysokocukrowe), SLO-066 (bez koralowy). Sam produkt opiera się na częściach, których źródła każą unikać → silny kandydat do nie-publikowac; brief wymaga do tego szczebla 1 (CDC MMWR 1984 niedostępne – 403), więc formalnie ryzyko-wysokie. Rekomendacja: decyzja 06, ostrożniej nie-publikowac. | C8-D7 |
| apple-v08 | jabłka prażone na szarlotkę | do-researchu | ACI-454, ACI-455, ACI-456, ACI-457, ACI-458 | Opcja A (najbliższa „prażonym jabłkom”): nazwa „jabłka prażone na szarlotkę – mus jabłkowy z kawałkami (NCHFP Applesauce, chunk-style)”: jabłka obrane, 1/2 szklanki wody, podgrzane do miękkości bez przecierania, opcjonalnie 1/8 szklanki cukru na quart, bez cynamonu, mąki i skrobi (przyprawy dodać przy pieczeniu); czasy SLO-123…126. Opcja B: „nadzienie jabłkowe do szarlotki z Clear Jel” 1:1 wg NCHFP Apple Pie Filling (ACI-454…ACI-458): plastry blanszowane, Clear Jel, sok z cytryny 2 łyżki/quart, 25 min do 1000 ft. | Jabłka są kwaśne, kategoria nie jest wysokiego ryzyka, ale „prażone na szarlotkę” nie pasuje 1:1 do żadnego przepisu: NCHFP Applesauce dopuszcza mus z kawałkami (SLO-121) bez przypraw; Apples-Sliced to plastry gotowane 5 min w syropie/wodzie (SLO-215); Apple Pie Filling wymaga Clear Jel i soku z cytryny w stałej ilości (SLO-058: „Other available starches break down”; ilości soku z cytryny nie zmieniać). Prażenie z mąką lub zwykłą skrobią – brak testowanego procesu (NCHFP: tylko Clear Jel, inne skrobie się rozpadają; ogólna zasada NCHFP dla zup/salsy: nie zagęszczać). Dodatek cynamonu/goździków do musu = poza przepisem (reguła E3). | C8-D13 |
| strawberry-v07 | dżem truskawkowy klasyczny i niskosłodzony (z pektyną) | do-researchu | ACI-459, ACI-460, ACI-461, ACI-462, ACI-463, ACI-464, ACI-465, SLO-001, SLO-003, SLO-006, SLO-012, SLO-018, SLO-072 | Podzielić wariant na dwa. (a) „dżem truskawkowy z pektyną w proszku (klasyczny, pełny cukier)”: NCHFP 1:1, czyli ok-zrodlo (ACI-459…ACI-462, ACI-463, SLO-072). (b) „dżem truskawkowy niskosłodzony na pektynie do mniejszej ilości cukru”: zostaje do-researchu albo jest kartą odsyłającą do ulotki producenta pektyny (ACI-464, SLO-006), bez własnych proporcji i czasów. | Wersja klasyczna to dokładnie przepis NCHFP: 5½ szklanki rozgniecionych truskawek, 1 opakowanie pektyny w proszku (1,75 oz), 8 szklanek cukru, 1/4 cala wolnej przestrzeni, słoiki sterylne 1/2 pinty lub pinty, 5/10/15 min. Kwasu nie dodaje się. Strona NCHFP „Making Reduced-Sugar Fruit Spreads” nie ma przepisu truskawkowego na pektynie niskometylowanej. Mówi tylko o smarowidłach z żelatyną (bez wekowania, SLO-008), a w treści o pektynie LM nic nie ma. NCHFP (ACI-464) i USDA odsyłają do ulotek producenta. Jedyny znaleziony przepis extension na wersję niskosłodzoną (NDSU FN590, C-10 (robocze, nieprzyjęte: szczebel 4 albo kontekst)) jest niekompletny: nie ma kroku dodania cukru ani czasu powyżej 6000 ft. Podaje też 5 min, co kłóci się z SLO-006 (dłuższe wekowanie). Nie używać go. | C8-D11 |
| strawberry-v12 | dżem z rabarbarem | do-researchu | ACI-466, ACI-467, ACI-468, ACI-469, ACI-470, SLO-001, SLO-004 | Zmienić nazwę na „dżem truskawkowo-rabarbarowy z pektyną płynną” i trzymać się proporcji z ACI-466. Wtedy ok-zrodlo na szczeblu 3: WSU i NDSU zgodnie przedrukowują przepis NCHFP/USDA. | Przepis: 1 szklanka ugotowanego rabarbaru o czerwonych łodygach (ok. 1 funt rabarbaru + 1/4 szklanki wody), 2½ szklanki rozgniecionych truskawek, 6½ szklanki cukru, 1 saszetka pektyny płynnej. Owoce z cukrem gotować 1 min, pektynę wmieszać po zdjęciu z ognia. 1/4 cala wolnej przestrzeni, słoiki sterylne 1/2 pinty lub pinty, 5/10/15 min. Na obecnej stronie NCHFP jest tylko galaretka (C-19 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). Przepis na dżem znamy z przedruków WSU i NDSU (szczebel 3), które powołują się na NCHFP 2005 i USDA HG-56. Na nchfp.uga.edu nie udało się go potwierdzić, stąd ostrożnie do-researchu do czasu zmiany nazwy. Proporcje są inne niż w wersji Ball (UC MFP 335063: 2+2 szklanki, pektyna w proszku, 1/4 szklanki soku z cytryny, 10 min). Nie mieszać tych dwóch przepisów. | C8-D10 |
| rhubarb-v07 | dżem rabarbarowo-truskawkowy i rabarbarowo-pomarańczowy | do-researchu | ACI-466, ACI-467, ACI-468, ACI-469, ACI-470, SLO-001, SLO-004 | Podzielić wariant. (a) „dżem rabarbarowo-truskawkowy z pektyną płynną”: tak jak strawberry-v12, ok-zrodlo szczebla 3 (albo scalić z strawberry-v12, żeby nie dublować karty). (b) „dżem rabarbarowo-pomarańczowy”: do-researchu, bo jest tylko przepis Ball (szczebel 4, C-20 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). | Nazwa obejmuje dwa różne produkty. Rabarbar z truskawką ma przepis szczebla 3 (opis przy strawberry-v12). Dla rabarbaru z pomarańczą znaleziono wyłącznie przepis Ball Blue Book w arkuszu UC MFP: 2½ funta rabarbaru, sok z 2 pomarańczy, pektyna Ball Classic, 6 szklanek cukru, 10 min. To szczebel 4, więc nie daje ok-zrodlo. | C8-D10 |
| lemon-v11 | marmolada cytrynowa | do-researchu | ACI-471, ACI-472, SLO-086, SLO-234, SLO-235, SLO-004 | Nie da się tego zrobić małą zmianą. Marmoladę z samej cytryny trzeba zastąpić „marmoladą cytrusową (grejpfrut, pomarańcza, cytryna)” wg NCHFP Citrus Marmalade, która ma już SLO-086/234/235, a to inny produkt. | W NCHFP i USDA nie ma marmolady z samej cytryny. Cytryna jest w grupie I NCHFP (dość pektyny i kwasu, C-30 (robocze, nieprzyjęte: szczebel 4 albo kontekst)), ale to nie zastępuje przepisu. Arkusz UC MFP „Quick Lemon Ginger Marmalade” to przepis Ball (szczebel 4) z imbirem, z pektyną w proszku i 10 min (C-29 (robocze, nieprzyjęte: szczebel 4 albo kontekst)), więc nie daje ok-zrodlo. | — |
| orange-kumquat-v07 | tradycyjna szkocka marmolada z gorzkich pomarańczy (seville) | do-researchu | ACI-471, ACI-472, ACI-473, ACI-474, ACI-475, ACI-476, SLO-004 | Zmienić wariant na „marmolada pomarańczowa z cytryną (pomarańcze słodkie, np. navel)” według NCHFP Orange Marmalade. Wtedy ok-zrodlo, ale nie jest to już „szkocka marmolada z Seville”. | NCHFP Orange Marmalade wprost opracowano na pomarańczach navel (ACI-472). Skład: 4 szklanki skórki z albedo, 4 szklanki miąższu, 1 szklanka plasterków cytryny, 6 szklanek wody, 6 szklanek cukru. Tylko słoiki 1/2 pinty: 5/10/15 min przy słoikach sterylnych, 10/15/20 min przy niesterylnych. Gorzka pomarańcza (Citrus aurantium) to inny gatunek, o innej kwasowości i pektynie. Przepisu szczebla 1–3 na Seville nie znaleziono: wyszukiwanie, w tym UF/IFAS, dało tylko blogi i wydawców w UK. | — |
| currant-v06 | klarowna galaretka z czerwonej lub białej porzeczki | do-researchu | ACI-481, ACI-482, ACI-483, SLO-001, SLO-002, SLO-004, SLO-230, SLO-231 | — | NCHFP zalicza porzeczki do grupy I (dość naturalnej pektyny i kwasu, C-30 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). Tabela 2 proporcji galaretki bez pektyny obejmuje jednak tylko jabłka, jeżyny, jabłka rajskie, winogrona i śliwki (ACI-483), a porzeczek w niej nie ma. USDA Guide 7 przy galaretce porzeczkowej odsyła do ulotki pektyny, czyli szczebla 4 (C-33 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). NDSU FN1423 dla rodzimej porzeczki złotej (Ribes aureum/odoratum) mówi tylko „follow general directions” (C-40 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). Proporcje cukru dobiera się tam testem alkoholowym, a to nie jest przepis testowany 1:1. UAF (Alaska) był niedostępny (TLS). | — |
| currant-v08 | dżem z czarnej porzeczki | do-researchu | ACI-478, ACI-479, ACI-480, SLO-001, SLO-004 | Zmiana nazwy na „dżem z borówki amerykańskiej i porzeczki (bez pektyny)” według NCHFP dałaby ok-zrodlo. To jednak inny produkt. NCHFP nie podaje gatunku porzeczki. | NCHFP Blueberry-Currant: 1 kwarta borówek, 2 szklanki porzeczek przetartych przez sito, 2 szklanki wody, 3 szklanki cukru. Tylko słoiki 1/2 pinty, 5/10/15 min, 1/4 cala wolnej przestrzeni. USDA Guide 7 przy dżemie porzeczkowym odsyła do ulotki pektyny (C-33 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). Przepisu na dżem z samej Ribes nigrum nie znaleziono w NCHFP, USDA ani extension (wyszukiwanie dało tylko blogi). UAF niedostępny. | C8-D12 |
| rosehip-rowan-v06 | gładki dżem z owoców dzikiej róży (przecierany z włosków) | do-researchu | ACI-484, ACI-485, SLO-001 | Można zmienić wariant na „gładki dżem z owoców dzikiej róży do lodówki (do 1 miesiąca) lub zamrażarki” według NDSU FN1423 (ACI-484, ACI-485). Wtedy karta nie jest wekowaniem. Dla wersji wekowanej brak źródła. | Ostrożnie: NDSU (szczebel 3, rev. 2020) daje przepis na gładki dżem z dzikiej róży z sokiem z cytryny i pektyną, ale bez wekowania, choć w tej samej publikacji inne przepisy wekuje (ACI-485). Wskazuje też, że dzika róża ma mało pektyny (C-41 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). Cape Cod Extension podaje wersję przecieraną, 1:1 cukru do przecieru, 220 °F i 10 min (C-44 (robocze, nieprzyjęte: szczebel 4 albo kontekst)), bez kwasu, bez wolnej przestrzeni, bez tabeli wysokości i bez opisu testu. To za mało do ok-zrodlo. Do rozważenia ryzyko-wysokie, jeśli karta miałaby dotyczyć wekowania. UAF FNH-00114 Wild Roses był niedostępny (TLS). | — |
| rosehip-rowan-v08 | syrop z dzikiej róży | do-researchu | SLO-049, SLO-089, SLO-185 | — | NCHFP Berry Syrup ogranicza się do borówek, wiśni i czereśni, winogron, malin i truskawek (SLO-049), więc dzikiej róży nie obejmuje. UMN FSN 25 z 1974 r. (2 szklanki soku i 2 szklanki cukru, 5 min gotowania, 10 min wekowania, C-45 (robocze, nieprzyjęte: szczebel 4 albo kontekst)) jest nieaktualny. Ogólny przepis NDSU na syrop z soku (C-46 (robocze, nieprzyjęte: szczebel 4 albo kontekst)) nie wymienia dzikiej róży i nie ma tabeli wysokości. UAF (rose hip syrup w FNH-00114 i FNH-00120) był niedostępny (TLS). To pierwszy kandydat na ponowną próbę. | — |
| chokeberry-seabuckthorn-v07 | dżem z aronii i jabłek | do-researchu | SLO-001 | — | Abstrakt pracy magisterskiej UNL (2024, C-47 (robocze, nieprzyjęte: szczebel 4 albo kontekst)) mówi o opracowaniu przepisów na dżem i salsę z aronii z badaniami letalności cieplnej i trwałości. Pełny tekst zwrócił HTTP 403, więc nie wiadomo, czy dżem zawiera jabłko, ani jakie są proporcje i czasy. Iowa State, NDSU, Nebraska, Maine i Wisconsin nie dały przepisu w wynikach wyszukiwania. Następny krok: pełny tekst UNL lub ewentualna publikacja Nebraska Extension na jego podstawie. | — |
| cranberry-lingonberry-v07 | borówka brusznica z gruszką lub jabłkiem do mięs i oscypka | do-researchu | SLO-105, SLO-233 | — | NCHFP Cranberry Sauce (SLO-105/233) dotyczy żurawiny (Vaccinium macrocarpon), a nie brusznicy (V. vitis-idaea), i nie zawiera gruszki ani jabłka. Mieszanka z gruszką podnosi pH i zmienia gęstość: gruszki są w grupie III NCHFP (ACI-477), więc bez testowanego przepisu nie wolno przenosić czasów. UAF FNH-00110 Lingonberries był niedostępny (TLS). Z wyników wyszukiwania wynika, że widoczny przepis to „Lingonberry Banana Jam”, ale nie przeczytano go. Jeśli UAF nie da przepisu z jabłkiem lub gruszką, rozważyć ryzyko-wysokie. | — |
| blueberry-bilberry-v08 | dżem jagodowy z cytryną | do-researchu | ACI-477, ACI-486, ACI-487, ACI-488, SLO-146, SLO-001, SLO-004 | Zmiana na „dżem z borówki amerykańskiej z cytryną i przyprawą (z pektyną)” według NCHFP Blueberry-Spice Jam dałaby ok-zrodlo. Zmienia się jednak gatunek owocu, a przepis zawiera gałkę lub cynamon. | NCHFP Blueberry-Spice: 2½ pinty borówek, 1 łyżka soku z cytryny, 1/2 łyżeczki gałki lub cynamonu, 3/4 szklanki wody, 1¾ oz pektyny w proszku, 5½ szklanki cukru. 1/2 pinty lub pinty, 5/10/15 min. Lista „berries” w NCHFP Berry Jams without Pectin (SLO-146) nie obejmuje borówek, huckleberries ani jagody czarnej. Borówki są w grupie III, czyli zawsze wymagają dodatku kwasu lub pektyny (ACI-477). Przenoszenie przepisu na V. myrtillus to założenie: jagoda czarna jest zwykle kwaśniejsza, ale żadne źródło tego nie testuje. UAF (wild blueberry) niedostępny. | C8-D12 |
| apple-v11 | galaretka pektynowa z ogryzków | do-researchu | ACI-481, ACI-489, ACI-490, ACI-491, ACI-492, SLO-048, SLO-230, SLO-231, SLO-004 | Zmiana na „galaretka jabłkowa bez dodatku pektyny z całych jabłek (nieobranych, z gniazdami nasiennymi)” według NCHFP dałaby ok-zrodlo szczebla 1. | NCHFP: 4 szklanki soku (ok. 3 funty jabłek i 3 szklanki wody), opcjonalnie 2 łyżki soku z cytryny, 3 szklanki cukru. 1/4 niedojrzałych jabłek, nie obierać i nie wycinać gniazd. Gotować do 8 °F powyżej wrzenia wody, 1/4 cala wolnej przestrzeni, 1/2 pinty lub pinty, 5/10/15 min. NCHFP przyznaje, że obierki i gniazda dodają pektyny (ACI-481), ale zawsze razem z miąższem. Galaretkę z samych resztek podaje tylko arkusz UC MFP (C-55 (robocze, nieprzyjęte: szczebel 4 albo kontekst)): pektyna w proszku, 4½ szklanki soku, 5 szklanek cukru, 5 min. To adaptacja przepisu Ball, bez opisu własnego testu, czyli faktycznie szczebel 4. SLO-048 (świeże, zdrowe jabłka) dotyczy też resztek. | — |
| peach-nectarine-v08 | masło brzoskwiniowe (peach butter) | do-researchu | ACI-477, ACI-493, ACI-494, ACI-495, ACI-496, SLO-087, SLO-226 | Do rozważenia: karta „masło brzoskwiniowe według ogólnego schematu OSU SP 50-304”. Wymaga to decyzji, czy ogólny przepis szczebla 3 (bez tabeli wysokości) wystarcza. Bez tego zostaje do-researchu. | NCHFP i USDA nie mają masła brzoskwiniowego: mają masło jabłkowe z octem (SLO-087/226) i przeciery owocowe (ACI-496: pinty i kwarty 15/20/25 min). OSU (rev. 2025) wymienia brzoskwinie jako odpowiednie na masło (C-56 (robocze, nieprzyjęte: szczebel 4 albo kontekst)). Podaje schemat: 2 kwarty przecieru, 4 szklanki cukru, 1/4 cala wolnej przestrzeni, 10 min (ACI-493, ACI-494). Brak jednak tabeli wysokości i odrębnego testu, a odesłanie do tabeli masła jabłkowego (z octem) jest niejasne. Przepis z sokiem z cytryny pochodzi tylko z Ball (C-62 (robocze, nieprzyjęte: szczebel 4 albo kontekst), szczebel 4). Penn State potwierdza 5 min przy słoikach sterylnych albo 10 min przy czystych, ale bez przepisu brzoskwiniowego (ACI-495). Brzoskwinie są w grupie III NCHFP (ACI-477). Ostrożniej byłoby dodać sok z cytryny, ale żadne źródło 1–3 tego nie podaje dla masła. | — |

## 3. Decyzje (decyzja Claude, do weta, o ile nie zaznaczono inaczej)

- **C8-D1** (proceduralna): Numeracja ACI-400–496 z zakresu zarezerwowanego ACI-400–499. git grep ACI-4xx na 17 gałęziach origin: 0 trafień. Twierdzenia z jednego przepisu i tabeli wysokości scalone w jedno (np. pint i quart, trzy przedziały wysokości), żeby zmieścić partię w zakresie.
- **C8-D2** (do weta): Partia 1 = 38 z 240 wariantów: (a) 14 pikli warzywnych z istniejącym przepisem NCHFP o podobnej nazwie, (b) 10 kandydatów do ryzyko-wysokie (dynia, ziemniaki, barszcz, chipotle, niedojrzały bez, jabłka prażone), (c) 14 dżemów, galaretek, marmolad i syropów popularnych w Polsce. Odrzucone: kolejność z katalogu (pierwsze 38), sałatki wielowarzywne (osobna partia). Analogii w repo trening brak (aplikacja treningowa, bez przetwórstwa).
- **C8-D3** (zgodna z zasadą projektu): Szczebel 4 (Ball Blue Book, arkusze UC Master Food Preservers z przepisami Ball, artykuł prasowy z wypowiedzią OSU) nie wchodzi do twierdzeń, tylko do uwag. Podstawa: docs/tresci/pytania-otwarte.md:57 („Ball/Bernardin to nie szczebel 1–3”) i moduł treści krytycznych (szczebel 4 nigdy jako granica).
- **C8-D4** (do weta): ok-zrodlo dla cucumber-v10 (NCHFP Quick Fresh-Pack Dill; ACI-400, ACI-401, ACI-402), cucumber-v12 (NCHFP Bread-and-Butter; ACI-404, ACI-405, ACI-406) i green-cherry-tomato-v03 (NCHFP Kosher Style Dill Green Tomato; ACI-410, ACI-411, ACI-412, ACI-413, tylko słoiki quart). Wcześniejsza notatka „bez papryki” przy v03 była błędna: przepis ma słodką zieloną paprykę. Karty muszą trzymać skład 1:1; nazwa v10 „konserwowe” jest ogólna (pytanie otwarte o doprecyzowanie). Odrzucone: do-researchu z samą zmianą nazwy.
- **C8-D5** (do weta): garlic-v04, v06, v08 (czosnek w occie w kąpieli wodnej) → ryzyko-wysokie, ostrzej niż propozycja subagenta (do-researchu z poprawką). UC ANR 8568: „Canning garlic is not recommended” i brak domowych wytycznych zakwaszania całych ząbków (ACI-436, ACI-437); OSU tak samo (ACI-440). Alternatywa dla toru A: osobny wariant lodówkowy (nierozcieńczony ocet lub wino, suszone przyprawy, ok. 4 miesiące; ACI-431, ACI-432, ACI-433, ACI-434, ACI-435) przy zmianie preservationMethod. Odrzucone: przepis Ball z kąpielą wodną (szczebel 4).
- **C8-D6** (do weta): Dynia w occie (pumpkin-v03, v04, v05, v07) i chutney z dyni (v11) → ryzyko-wysokie, nie nie-publikowac: brak przetestowanego przepisu; NCHFP o maśle dyniowym: dodatek octu lub soku z cytryny nie daje jednego bezpiecznego zalecenia (ACI-441, ACI-442, ACI-443), UGA: USDA nie ma przetestowanych przepisów na przetwory z dyni w temperaturze pokojowej (ACI-444, ACI-445). Do nie-publikowac brakuje źródła szczebla 1, które odradza właśnie pikle z dyni (archiwalna strona NCHFP niedostępna: TLS). Jeśli tor A uzna, że rozgotowany chutney to „mashed” (ACI-036), v11 → nie-publikowac.
- **C8-D7** (do weta): elderberry-elderflower-v01 (zielone pąki i niedojrzałe owoce bzu w occie) → ryzyko-wysokie: Ask Extension „It is dangerous to eat unripe elderberries” (ACI-450, ACI-451), OSU EM 9446 (ACI-452), praca recenzowana (ACI-453). nie-publikowac wymagałby źródła szczebla 1 (CDC MMWR 1984: HTTP 403).
- **C8-D8** (do weta): ryzyko-wysokie dla mieszanek niskokwasowych bez przetestowanego przepisu: potato-sunchoke-v05 (ziemniaki tylko w szybkowarze, ACI-446), beetroot-v11 (buraki tylko w szybkowarze, zup się nie zagęszcza, ACI-447, ACI-448, ACI-449), chili-pepper-v17 (chipotle w adobo, tylko blogi), cucumber-v19 (olej z surowym czosnkiem, ACI-437, ACI-438), carrot-v04 (escabeche marchew + jalapeño, tylko Ball).
- **C8-D9** (do weta): corn-v03 i onion-v03: jedyne dopasowanie to przepisy już użyte przez corn-v04 (Pickled Corn Relish) i shallot-pearl-onion-v05 (Pickled Pearl Onions). Zalecenie dla toru A: wycofać z następcą (corn-v04, shallot-pearl-onion-v05), nie dublować kart. Nowe twierdzenia z tych przepisów można dopiąć do corn-v04 i shallot-pearl-onion-v05.
- **C8-D10** (do weta): strawberry-v12 i rhubarb-v07: przepis Rhubarb-Strawberry Jam z pektyną płynną (NCHFP 2005, adaptacja USDA HG-56) dziś tylko w przedrukach WSU i NDSU, szczebel 3, liczony jako jedno źródło (ACI-466, ACI-467, ACI-468, ACI-469, ACI-470). Po zmianie nazwy na „z pektyną płynną” ok-zrodlo; rhubarb-v07 podzielić (wersja z pomarańczą tylko u Ball → do-researchu) albo scalić część truskawkową ze strawberry-v12.
- **C8-D11** (do weta): strawberry-v07 podzielić: klasyczny z pektyną w proszku i pełnym cukrem = NCHFP 1:1 (ACI-459, ACI-460, ACI-461, ACI-462) → ok-zrodlo; niskosłodzony → do-researchu (NCHFP odsyła do instrukcji producenta pektyny, ACI-464, ACI-465; przepis NDSU niekompletny, nieprzyjęty).
- **C8-D12** (do weta): Nie zalecam poprawek przez zmianę gatunku: jagoda czarna (V. myrtillus) → borówka amerykańska (blueberry-bilberry-v08) i czarna porzeczka → dżem borówkowo-porzeczkowy (currant-v08). To inne produkty; warianty zostają do-researchu. Brak źródła, które pozwala zamienić te gatunki.
- **C8-D13** (do weta): apple-v08 (jabłka prażone na szarlotkę) zostaje do-researchu z dwiema opcjami: A) mus jabłkowy z kawałkami wg NCHFP Applesauce bez przypraw i zagęstników, B) NCHFP Apple Pie Filling z Clear Jel 1:1 (ACI-454, ACI-455, ACI-456, ACI-457, ACI-458). Zagęszczanie mąką lub skrobią odrzucone: NCHFP w nadzieniach dopuszcza tylko Clear Jel (ACI-458). Uwaga: NCHFP Pickled Corn Relish dopuszcza pastę z mąki (ACI-423), więc mąka jest dozwolona tylko tam, gdzie przepis ją podaje.
- **C8-D14** (wyjątek nazwany): twierdzenie_en jest roboczym skrótem: 65 z 97 par en/pl różni się w niezmiennikach (tools/i18n/niezmienniki.mjs porownaj); 10 par ma w en liczbę bez odpowiednika w pl, wszystkie sprawdzone ręcznie jako różnica zapisu (15/20/25 zamiast trzech przedziałów wysokości, „Table 1”, „1 week” = „tygodnia”), 0 sprzecznych liczb. Brzmienie wiążące = pl z cytatem; en przepisuje tor A przed kartami. Tańsza kontrola zamiast pełnej poprawy: lista ID w kontrole.przeklad_id.

## 4. Źródła przeczytane dziś (curl, 2026-11-02)

| Klucz | HTTP | sha12 | Szczebel | Użyte w twierdzeniach | Adres |
|---|---|---|---|---|---|
| A-nchfp-dill | 200 | 900db207065c | 1 | tak | https://nchfp.uga.edu/how/pickle/cucumber-pickles/quick-fresh-pack-dill-pickles/ |
| A-nchfp-bb | 200 | 5ee749761f7f | 1 | tak | https://nchfp.uga.edu/how/pickle/cucumber-pickles/bread-and-butter-pickles/ |
| A-nchfp-gherkin | 200 | 61e8c5a72d09 | 1 | tak | https://nchfp.uga.edu/how/pickle/cucumber-pickles/sweet-gherkin-pickles/ |
| A-nchfp-kosher-gt | 200 | 668d163df2ef | 1 | tak | https://nchfp.uga.edu/how/pickle/vegetable-pickles/kosher-style-dill-green-tomato-pickles/ |
| A-nchfp-sweet-gt | 200 | 0640944cffd2 | 1 | nie | https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-sweet-green-tomatoes/ |
| A-nchfp-jalring | 200 | 71b2ed7a2462 | 1 | tak | https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-jalapeno-rings/ |
| A-nchfp-hotpep | 200 | 84fa2bfe09de | 1 | nie | https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-hot-peppers/ |
| A-nchfp-carrots | 200 | 25b8717c7280 | 1 | tak | https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-carrots/ |
| A-nchfp-pearl | 200 | f81277cd65ac | 1 | tak | https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-pearl-onions/ |
| A-nchfp-cornrel | 200 | df70ddabd69d | 1 | tak | https://nchfp.uga.edu/how/pickle/relishes-salads/pickled-corn-relish/ |
| A-nchfp-peachsalsa | 200 | 73e1af901f2c | 1 | tak | https://nchfp.uga.edu/how/can/canning-salsa/peach-apple-salsa/ |
| A-nchfp-tomsalsa | 200 | 89e543c35e57 | 1 | tak | https://nchfp.uga.edu/how/can/canning-salsa/tomatillo-green-salsa/ |
| A-nchfp-salsa-ingr | 200 | 8e84ce9ec2ce | 1 | nie | https://nchfp.uga.edu/how/can/canning-salsa/ingredients-for-salsa-recipes/ |
| A-nchfp-pickle-idx | 200 | 7d2c1cfb1bd3 | 1 | nie | https://nchfp.uga.edu/how/pickle/ |
| A-usda-guide03 | 200 | 6f8d166be89c | 1 | nie | https://nchfp.uga.edu/papers/guide/GUIDE03_HomeCan_rev0715.pdf |
| A-ucanr-8568 | 200 | 70ed416d854c | 3 | tak | https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf |
| A-osu-garlic | 200 | 716044b68339 | 3 | tak | https://extension.oregonstate.edu/food/preservation/preserving-garlic |
| A-ask-159998 | 200 | 81cb64275028 | 4 | nie | https://ask.extension.org/kb/faq.php?id=159998 |
| A-ask-864913 | 200 | 6c57efd16a39 | 3 | nie | https://ask.extension.org/kb/faq.php?id=864913 |
| A-usu-peachsalsa | 200 | 95c376a628aa | 3 | nie | https://extension.usu.edu/utah/files/PeachSalsaRecipe.pdf |
| A-ncsu-peachsalsa | 200 | 27db71db7509 | 3 | nie | https://washington.ces.ncsu.edu/2021/07/peach-salsa |
| A-ucsd-escabeche | 200 | 719b92ea2f55 | 4 | nie | https://ucanr.edu/sites/default/files/2025-05/Template%20Escobeche%20Recipe%20Fair%20Checked.pdf |
| nchfp-pumpkin-cubed | 200 | e23ec0215832 | 1 | nie | https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/pumpkins-and-winter-squash-cubed/ |
| nchfp-pumpkin-butter-blog | 200 | d18602843711 | 1 | tak | https://nchfp.uga.edu/blog/beware-pumpkin-butter |
| nchfp-faq-canning-veg | 200 | 338b7770d0f5 | 1 | tak | https://nchfp.uga.edu/faqs/canning-vegetables/category/faq-canning |
| uga-fieldreport-pumpkin | 200 | ea7624d1b2ae | 3 | tak | https://fieldreport.caes.uga.edu/news/following-proper-guidelines-is-key-for-safe-pumpkin-preserves/ |
| nchfp-potatoes | 200 | 71d0df3bd3fc | 1 | tak | https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/potatoes-white-cubed-or-whole/ |
| shaw-german-potato | 200 | 82c80ada9fb1 | 4 | nie | https://www.shawlocal.com/2013/09/03/canning-german-potato-salad/aws727w/ |
| nchfp-beets | 200 | f74dc6b2d769 | 1 | tak | https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/beets-whole-cubed-or-sliced/ |
| nchfp-soups | 200 | 6c44b4f0a743 | 1 | tak | https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/soups/ |
| ucd-beets-infosheet | 200 | 5f77b4b04be2 | 3 | tak | https://ucfoodsafety.sf.ucdavis.edu/sites/g/files/dgvnsk7366/files/inline-files/210867.pdf |
| askext-605114 | 200 | 214e6d2d398f | 3 | tak | https://ask.extension.org/kb/faq.php?id=605114 |
| osu-em9446 | 200 | cb2599f9ac8a | 3 | tak | https://extension.oregonstate.edu/catalog/pub/em-9446-play-it-safe-when-preserving-elderberries |
| mdpi-elder-2021 | 200 | 369ddf953f54 | 2 | tak | https://mdpi-res.com/d_attachment/molecules/molecules-26-01384/article_deploy/molecules-26-01384.pdf |
| nchfp-pie-fillings | 200 | 9b2f14313981 | 1 | tak | https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/ |
| nchfp-apple-pie-filling | 200 | c4d87b91f16f | 1 | tak | https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/apple-pie-filling |
| nchfp-applesauce | 200 | 7a5eacd8b1e2 | 1 | nie | https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/ |
| nchfp-apples-sliced | 200 | 932027668e9b | 1 | nie | https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/ |
| n-strawjam | 200 | 908799611485 | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/jams/strawberry-jam-pectin/ |
| n-reduced | 200 | 8cf8e6816bcd | 1 | nie | https://nchfp.uga.edu/how/make-jam-jelly/reduced-sugar-recipes/making-reduced-sugar-fruit-spreads/ |
| n-ingred | 200 | 7dc16001e9f5 | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/jellied-product-ingredients/ |
| n-strawrhubjelly | 200 | f009938daea4 | 1 | nie | https://nchfp.uga.edu/how/make-jam-jelly/jellies/strawberry-rhubarb-jelly-pectin/ |
| n-orangemarm | 200 | f62561821df9 | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/ |
| n-bluecurrant | 200 | e5266ee74cb6 | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-currant-jam-without-pectin/ |
| n-bluespice | 200 | b010a4d5e5b7 | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-spice-jam-with-pectin/ |
| n-jellynopectin | 200 | 8a2ce53df5f8 | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/making-jelly-without-added-pectin/ |
| n-applejelly | 200 | 45016b7129ca | 1 | tak | https://nchfp.uga.edu/how/make-jam-jelly/jellies/apple-jelly-without-pectin/ |
| n-purees | 200 | b72e2c30ddf5 | 1 | tak | https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/ |
| usda-g7 | 200 | 6023faf9ea45 | 1 | nie | https://nchfp.uga.edu/papers/guide/GUIDE07_HomeCan_rev0715.pdf |
| wsu-straw | 200 | 6b76a1b08e8b | 3 | tak | https://wpcdn.web.wsu.edu/extension/uploads/sites/77/2018/06/Preserving-Strawberries.pdf |
| ndsu-fn590 | 200 | 46e3148cf86b | 3 | tak | https://www.ag.ndsu.edu/publications/food-nutrition/from-the-garden-or-orchard-to-the-table-jams-and-jellies-from-north-dakota-fruits/fn590.pdf |
| ndsu-node2146 | 200 | 08cff3a6b6c3 | 3 | tak | https://ndsu.edu/agriculture/node/2146 |
| ucanr-335062 | 200 | 82e04ae9416c | 4 | nie | https://www.ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335062.pdf |
| ucanr-335063 | 200 | 9c0c744b1246 | 4 | nie | https://www.ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335063.pdf |
| ucanr-lemonginger | 200 | 8a4597260a7c | 4 | nie | https://class.ucanr.edu/sites/default/files/2025-03/MFP%20Recipe%20Quick%20Lemon%20Ginger%20Marmalade.pdf |
| ucanr-333956 | 200 | c6091c290718 | 3 | nie | https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/333956.pdf |
| capecod | 200 | 4b6de8dcffd2 | 3 | nie | https://www.capecod.gov/wp-content/uploads/2022/03/rose-hip-recipes.pdf |
| umn-conserv | 200 | 0257971ece81 | 3 | nie | https://conservancy.umn.edu/server/api/core/bitstreams/64c32dbf-cb29-443d-a459-63436bd60746/content |
| unl-thesis155 | 200 | 558abc96ff1d | 3 | nie | https://digitalcommons.unl.edu/foodscidiss/155 |
| osu-butters | 200 | ffdecdeaac53 | 3 | tak | https://extension.oregonstate.edu/food/preservation/fruit-butters-sp-50-304 |
| psu-butters | 200 | 77aae75d3a47 | 3 | tak | https://extension.psu.edu/fruit-butters |
| ucanr-fruitbutters | 200 | 7cfd38504dba | 4 | nie | https://ucanr.edu/blog/preservation-notes-san-joaquin-master-food-preservers/article/fruit-butters-more-just-apple |

Niedostępne:
- https://pubs.extension.wsu.edu/download/sample/4120: 404 — PNW 395 Salsa Recipes for Canning – próbka PDF zwraca stronę HTML 404; nie znaleziono innego publicznego PDF w czasie pracy.
- https://webarchive.library.unt.edu/eot2008/20090116024520/http:/www.uga.edu/nchfp/tips/fall/pumpkins.html: 0 — curl (60) TLS: unable to get local issuer certificate; kopia Wayback: connection reset
- https://www.cdc.gov/mmwr/preview/mmwrhtml/00000311.htm: 403 — CDC zwraca 403 (415 B); nie obchodzono blokady
- https://laurel.o2.boa.ca.uky.edu/sites/laurel.ca.uky.edu/files/fcs3586.pdf: 0 — TLS: self-signed; fcs-hes.ca.uky.edu: certyfikat wygasł
- https://ucanr.edu/node/134373: 403 — 403
- https://ucanr.edu/sites/MFPOC/Food_Preservation/Pumpkins: 404 — 404
- https://www.canr.msu.edu/uploads/resources/pdfs/hni29_pumpkins.pdf: 200 — zwraca stronę Incapsula (bot check), nie PDF; bluedynamo.msu.edu: 502
- https://www.uaf.edu/ces/publications/database/food/files/pdfs/FNH-00114-Wild-Roses.pdf: 0 — curl (60): unable to get local issuer certificate; łańcuch z korzeniem emSign Root TLS CA - G1 spoza pakietu CA; próbę przez web.archive.org zablokowano (polityka)
- https://uaf.edu/ces/publications/database/food/files/pdfs/FNH-00110_Lingonberries.pdf: 0 — ten sam błąd TLS co wyżej
- https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1158&context=foodscidiss: 403 — pełny tekst pracy UNL o przepisach z aronii; przeczytano tylko stronę z abstraktem
- https://ask2.extension.org/kb/faq.php?id=273812: 502 — CONNECT tunnel failed (Ask Extension, aronia)
- https://ucanr.edu/sites/LassenMFP/files/397940.pdf: 403 — strona „Checking connection” (ochrona przed botami)
- https://foodsafety.ces.ncsu.edu/wp-content/uploads/2015/09/Preserving-Peaches-Recipes-from-NCHFP.pdf?fwd=no: 404 — nie istnieje

## 5. Twierdzenia (propozycje)

**ACI-400** (krytyczne; robocze A-01; warianty: cucumber-v10)

- pl: NCHFP Quick Fresh-Pack Dill Pickles, składniki na 7–9 słoików pint: 8 funtów (ok. 3,6 kg) ogórków gruntowych 3–5 cali (ok. 7,5–12,5 cm), 1 1/4 szklanki soli kamiennej (do wekowania), 1 1/2 kwarty octu 5%, 1/4 szklanki cukru, 2 kwarty wody, 2 łyżki przyprawy do marynat (whole mixed pickling spice), ok. 3 łyżki gorczycy, ok. 14 baldachów świeżego kopru albo 4 1/2 łyżki nasion kopru; plus 2 galony wody do solanki.
- en: NCHFP Quick Fresh-Pack Dill Pickles ingredients (yield 7–9 pints): 8 lbs 3–5-inch pickling cucumbers, 2 gal water, 1 1/4 cups canning/pickling salt, 1 1/2 qts vinegar (5%), 1/4 cup sugar, 2 qts water, 2 tbsp whole mixed pickling spice, about 3 tbsp whole mustard seed, about 14 heads fresh dill or 4 1/2 tbsp dill seed.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 900db207065c): https://nchfp.uga.edu/how/pickle/cucumber-pickles/quick-fresh-pack-dill-pickles/, NCHFP: Quick Fresh-Pack Dill Pickles (NCHFP (UGA), adapt. USDA Complete Guide 2015); lista składników. Cytat: „8 lbs of 3- to 5-inch pickling cucumbers 2 gals water 1¼ cups canning or pickling salt 1½ qts vinegar (5 percent) ¼ cup sugar 2 quarts water 2 tbsp whole mixed pickling spice”

**ACI-401** (krytyczne; robocze A-02; warianty: cucumber-v10)

- pl: NCHFP Quick Fresh-Pack Dill: ogórki moczyć 12 godzin w solance (3/4 szklanki soli na 2 galony wody); zalewa = ocet, 1/2 szklanki soli, cukier i 2 kwarty wody z przyprawą w woreczku, zagotowana; do każdego słoika pint 1 łyżeczka gorczycy i 1 1/2 baldachu kopru; zalać wrzącą zalewą, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; nakładanie na surowo (raw).
- en: Soak cucumbers 12 h in brine (3/4 cup salt in 2 gal water); combine vinegar, 1/2 cup salt, sugar and 2 qts water with spices, boil; add 1 tsp mustard seed and 1 1/2 heads dill per pint; cover with boiling solution leaving 1/2-inch headspace; raw pack.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 900db207065c): https://nchfp.uga.edu/how/pickle/cucumber-pickles/quick-fresh-pack-dill-pickles/, NCHFP: Quick Fresh-Pack Dill Pickles (NCHFP (UGA), adapt. USDA Complete Guide 2015); Procedure. Cytat: „Dissolve ¾ cup salt in 2 gals water. Pour over cucumbers and let stand 12 hours. Drain. Combine vinegar, ½ cup salt, sugar and 2 quarts water. … Fill jars with cucumbers. Add 1 tsp mustard seed and 1½ heads fresh dill per pint. Cover with boiling pickling solution, leaving ½-inch headspace.”

**ACI-402** (krytyczne; robocze A-03+A-04+A-05; warianty: cucumber-v10)

- pl: NCHFP Quick Fresh-Pack Dill, kąpiel wodna, raw pack, 0–1000 stóp: pint 10 min, quart 15 min; pint 15 min, quart 20 min; pint 20 min, quart 25 min.
- en: Quick Fresh-Pack Dill Pickles, boiling-water canner, raw pack, 0–1,000 ft: pints 10 min, quarts 15 min; pints 15 min, quarts 20 min; pints 20 min, quarts 25 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 900db207065c): https://nchfp.uga.edu/how/pickle/cucumber-pickles/quick-fresh-pack-dill-pickles/, NCHFP: Quick Fresh-Pack Dill Pickles (NCHFP (UGA), adapt. USDA Complete Guide 2015); Tabela 1 (Table 1), kąpiel wodna. Cytat: „0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Raw | Pints | 10 min | 15 | 20 | Quarts | 15 | 20 | 25”

**ACI-403** (krytyczne; robocze A-06; warianty: cucumber-v10)

- pl: NCHFP Quick Fresh-Pack Dill: zamiast kąpieli wodnej wolno użyć pasteryzacji niskotemperaturowej (szczegóły: ACI-021).
- en: Quick Fresh-Pack Dill Pickles may use the low-temperature pasteurization treatment instead of Table 1.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 900db207065c): https://nchfp.uga.edu/how/pickle/cucumber-pickles/quick-fresh-pack-dill-pickles/, NCHFP: Quick Fresh-Pack Dill Pickles (NCHFP (UGA), adapt. USDA Complete Guide 2015); Procedure. Cytat: „Adjust lids and process according to the recommendations in Table 1 or use the low- temperature pasteurization treatment.”

**ACI-404** (krytyczne; robocze A-07; warianty: cucumber-v12)

- pl: NCHFP Bread-and-Butter Pickles, na ok. 8 słoików pint: 6 funtów (ok. 2,7 kg) ogórków gruntowych 4–5 cali, 8 szklanek cienko pokrojonej cebuli (ok. 3 funty), 1/2 szklanki soli do wekowania, 4 szklanki octu 5%, 4 1/2 szklanki cukru, 2 łyżki gorczycy, 1 1/2 łyżki nasion selera, 1 łyżka mielonej kurkumy (wapno do marynat tylko w wariancie opcjonalnym).
- en: NCHFP Bread-and-Butter Pickles (about 8 pints): 6 lbs 4–5-inch pickling cucumbers, 8 cups thinly sliced onions, 1/2 cup canning salt, 4 cups vinegar (5%), 4 1/2 cups sugar, 2 tbsp mustard seed, 1 1/2 tbsp celery seed, 1 tbsp ground turmeric.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 5ee749761f7f): https://nchfp.uga.edu/how/pickle/cucumber-pickles/bread-and-butter-pickles/, NCHFP: Bread-and-Butter Pickles (NCHFP (UGA), adapt. USDA Complete Guide); lista składników. Cytat: „6 lbs of 4- to 5-inch pickling cucumbers 8 cups thinly sliced onions (about 3 pounds) 1/2 cup canning or pickling salt 4 cups vinegar (5 percent) 4-1/2 cups sugar 2 tbsp mustard seed 1-1/2 tbsp celery seed 1 tbsp ground turmeric”

**ACI-405** (krytyczne; robocze A-08; warianty: cucumber-v12)

- pl: NCHFP Bread-and-Butter: ogórki kroić w plastry 3/16 cala (ok. 5 mm), wymieszać z cebulą i solą, przykryć 2 calami lodu i chłodzić 3–4 godziny; resztę składników gotować 10 minut, dodać warzywa, powoli doprowadzić do wrzenia, napełnić słoiki plastrami i zalewą z 1/2 cala (ok. 1,3 cm) wolnej przestrzeni (hot pack).
- en: Cut cucumbers into 3/16-inch slices, combine with onions and salt, cover with 2 inches ice, refrigerate 3–4 h; boil remaining ingredients 10 min, add vegetables, reheat to boiling, fill jars leaving 1/2-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 5ee749761f7f): https://nchfp.uga.edu/how/pickle/cucumber-pickles/bread-and-butter-pickles/, NCHFP: Bread-and-Butter Pickles (NCHFP (UGA), adapt. USDA Complete Guide); krok 1–2. Cytat: „Cut into 3/16-inch slices. Combine cucumbers and onions in a large bowl. Add salt. Cover with 2 inches crushed or cubed ice. Refrigerate 3 to 4 hours, adding more ice as needed. … Combine remaining ingredients in a large pot. Boil 10 minutes. Add cucumbers and onions and slowly reheat to boiling. Fill jars with slices and cooking syrup, leaving 1/2-inch headspace.”

**ACI-406** (krytyczne; robocze A-09+A-10+A-11; warianty: cucumber-v12)

- pl: NCHFP Bread-and-Butter Pickles, kąpiel wodna, hot pack, pint lub quart, 0–1000 stóp: 10 min; 15 min; 20 min.
- en: Bread-and-Butter Pickles, hot pack, pints or quarts, 0–1,000 ft: 10 min; 15 min; 20 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 5ee749761f7f): https://nchfp.uga.edu/how/pickle/cucumber-pickles/bread-and-butter-pickles/, NCHFP: Bread-and-Butter Pickles (NCHFP (UGA), adapt. USDA Complete Guide); Tabela 1 (Table 1), kąpiel wodna. Cytat: „0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Hot | Pints or Quarts | 10 min | 15 | 20”

**ACI-407** (krytyczne; robocze A-12; warianty: cucumber-v12)

- pl: NCHFP Bread-and-Butter: alternatywnie pasteryzacja niskotemperaturowa — woda utrzymywana w 180–185°F (ok. 82–85°C) przez 30 minut dla słoików pint i quart, kontrola termometrem.
- en: Low-temperature pasteurization alternative: maintain 180–185°F water for 30 min for pint or quart jars.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 5ee749761f7f): https://nchfp.uga.edu/how/pickle/cucumber-pickles/bread-and-butter-pickles/, NCHFP: Bread-and-Butter Pickles (NCHFP (UGA), adapt. USDA Complete Guide); krok 3. Cytat: „Heat the water enough to maintain 180 to 185ºF water temperature for 30 minutes for pint or quart jars.”

**ACI-408** (krytyczne; robocze A-13; warianty: cucumber-v11)

- pl: NCHFP Sweet Gherkin Pickles (słodkie korniszony), na 6–7 słoików pint: 7 funtów ogórków do 1 1/2 cala (ok. 3,8 cm), 1/2 szklanki soli, 8 szklanek cukru, 6 szklanek octu 5%, 3/4 łyżeczki kurkumy, 2 łyżeczki nasion selera, 2 łyżeczki przyprawy do marynat, 2 laski cynamonu, opcjonalnie koper włoski i wanilia; proces 4-dniowy z kolejnymi zalewami.
- en: NCHFP Sweet Gherkin Pickles (6–7 pints): 7 lbs cucumbers 1 1/2 inch or less, 1/2 cup salt, 8 cups sugar, 6 cups vinegar (5%), turmeric, celery seeds, pickling spice, cinnamon sticks, optional fennel and vanilla; multi-day syrup process.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 61e8c5a72d09): https://nchfp.uga.edu/how/pickle/cucumber-pickles/sweet-gherkin-pickles/, NCHFP: Sweet Gherkin Pickles (NCHFP (UGA), adapt. USDA Complete Guide 2015); lista składników. Cytat: „7 lbs cucumbers (1-1/2 inch or less) 1/2 cup canning or pickling salt 8 cups sugar 6 cups vinegar (5 percent) 3/4 tsp turmeric 2 tsp celery seeds 2 tsp whole mixed pickling spice 2 cinnamon sticks”

**ACI-409** (krytyczne; robocze A-14; warianty: cucumber-v11)

- pl: NCHFP Sweet Gherkin: napełniać wysterylizowane słoiki pint, zalać gorącym syropem z 1/2 cala wolnej przestrzeni; kąpiel wodna raw pack, pint: 0–1000 stóp 5 min, 1001–6000 stóp 10 min, powyżej 6000 stóp 15 min (albo pasteryzacja niskotemperaturowa).
- en: Fill sterile pint jars leaving 1/2-inch headspace; raw pack pints 5 min (0–1,000 ft), 10 (1,001–6,000 ft), 15 (above 6,000 ft).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 61e8c5a72d09): https://nchfp.uga.edu/how/pickle/cucumber-pickles/sweet-gherkin-pickles/, NCHFP: Sweet Gherkin Pickles (NCHFP (UGA), adapt. USDA Complete Guide 2015); Procedure; Table 1. Cytat: „Fill sterile pint jars, with pickles and cover with hot syrup, leaving 1/2-inch headspace. … 0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Raw | Pints | 5 min | 10 | 15”
- uproszczenie: Trzy przedziały wysokości w jednym twierdzeniu, bo wariant potrzebuje tego przepisu tylko jako podstawy poprawki nazwy.

**ACI-410** (krytyczne; robocze A-15; warianty: green-cherry-tomato-v03)

- pl: NCHFP Kosher Style Dill Green Tomato Pickles, na ok. 6 słoików quart: małe, jędrne zielone pomidory ok. 1 cala (ok. 2,5 cm; ok. 5–6 funtów), 6 łodyg selera naciowego w kawałkach 2-calowych, 6 małych/średnich zielonych papryk słodkich bez gniazd, w ćwiartkach, 6 ząbków czosnku, 2 kwarty wody, 1 kwarta białego octu destylowanego 5%, 1 szklanka soli do wekowania, świeży koper do smaku.
- en: NCHFP Kosher Style Dill Green Tomato Pickles (about 6 quarts): small firm green tomatoes (~1 inch, 5–6 lbs), 6 celery stalks, 6 small-medium sweet green peppers quartered, 6 garlic cloves, 2 qts water, 1 qt distilled white vinegar (5%), 1 cup canning salt, fresh dill to taste.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 668d163df2ef): https://nchfp.uga.edu/how/pickle/vegetable-pickles/kosher-style-dill-green-tomato-pickles/, NCHFP: Kosher Style Dill Green Tomato Pickles (NCHFP (UGA), adapt. So Easy to Preserve 6th ed.); lista składników. Cytat: „Small green firm tomatoes (you will need about 5-6 pounds of 1-inch tomatoes as purchased, or about 5 quarts in volume) 6 stalks celery, cut in 2-inch lengths 6 small to medium sweet green peppers, seeded and quartered 6 cloves garlic 2 quarts water 1 quart distilled white vinegar (5%) 1 cup canning or pickling salt Fresh dill to taste”

**ACI-411** (krytyczne; robocze A-16; warianty: green-cherry-tomato-v03)

- pl: NCHFP Kosher Style Dill Green Tomato: pomidory całe, surowe, do gorących słoików; do każdego słoika quart 1 ząbek czosnku, 1 łodyga selera i 4 ćwiartki zielonej papryki; wodę, ocet i sól gotować z koprem 5 minut i zalać warzywa, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- en: Pack whole raw tomatoes; per quart add 1 garlic clove, 1 celery stalk, 4 green pepper quarters; boil water, vinegar, salt with dill 5 min; pour over leaving 1/2-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 668d163df2ef): https://nchfp.uga.edu/how/pickle/vegetable-pickles/kosher-style-dill-green-tomato-pickles/, NCHFP: Kosher Style Dill Green Tomato Pickles (NCHFP (UGA), adapt. So Easy to Preserve 6th ed.); Procedure. Cytat: „Pack washed tomatoes in hot jars. Add to each quart jar: 1 clove of garlic, 1 stalk of celery and 4 quarters of green pepper. Combine water, vinegar and salt. Boil with the dill for 5 minutes. Pour the hot brine over the vegetables in jars, leaving ½ inch headspace.”

**ACI-412** (krytyczne; robocze A-17; warianty: green-cherry-tomato-v03)

- pl: NCHFP Kosher Style Dill Green Tomato, kąpiel wodna, raw pack, tylko słoiki quart: 0–1000 stóp 15 min, 1001–6000 stóp 20 min, powyżej 6000 stóp 25 min.
- en: Kosher Style Dill Green Tomato Pickles, raw pack, quarts only: 15 min (0–1,000 ft), 20 (1,001–6,000 ft), 25 (above 6,000 ft).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 668d163df2ef): https://nchfp.uga.edu/how/pickle/vegetable-pickles/kosher-style-dill-green-tomato-pickles/, NCHFP: Kosher Style Dill Green Tomato Pickles (NCHFP (UGA), adapt. So Easy to Preserve 6th ed.); Tabela 1 (Table 1), kąpiel wodna. Cytat: „0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Raw | Quarts | 15 min | 20 | 25”
- uproszczenie: Trzy przedziały wysokości w jednym twierdzeniu (tabela ma jeden wiersz, jeden rozmiar słoika).

**ACI-413** (krytyczne; robocze A-18; warianty: green-cherry-tomato-v03)

- pl: NCHFP Kosher Style Dill Green Tomato: tabela podaje czas tylko dla słoików quart (brak czasu dla pint).
- en: Table 1 lists quart jars only.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 668d163df2ef): https://nchfp.uga.edu/how/pickle/vegetable-pickles/kosher-style-dill-green-tomato-pickles/, NCHFP: Kosher Style Dill Green Tomato Pickles (NCHFP (UGA), adapt. So Easy to Preserve 6th ed.); Tabela 1 (Table 1), kąpiel wodna. Cytat: „Raw | Quarts | 15 min | 20 | 25”

**ACI-414** (krytyczne; robocze A-20; warianty: chili-pepper-v04)

- pl: NCHFP Pickled Jalapeño Rings, na ok. 6 słoików pint: 3 funty (ok. 1,4 kg) jalapeño, 1 1/2 szklanki wapna do marynat, 1 1/2 galona wody (moczenie), 7 1/2 szklanki octu jabłkowego 5%, 1 3/4 szklanki wody, 2 1/2 łyżki soli, 3 łyżki nasion selera, 6 łyżek gorczycy.
- en: NCHFP Pickled Jalapeño Rings (about 6 pints): 3 lbs jalapeños, 1 1/2 cups pickling lime, 1 1/2 gal water, 7 1/2 cups cider vinegar (5%), 1 3/4 cups water, 2 1/2 tbsp canning salt, 3 tbsp celery seed, 6 tbsp mustard seed.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 71b2ed7a2462): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-jalapeno-rings/, NCHFP: Pickled Jalapeño Rings (NCHFP (UGA), opracowany w UGA 2003); lista składników. Cytat: „3 pounds jalapeño peppers 1½ cups pickling lime 1½ gallons water 7½ cups cider vinegar (5%) 1¾ cups water 2½ tablespoons canning salt 3 tablespoons celery seed 6 tablespoons mustard seed”

**ACI-415** (krytyczne; robocze A-21; warianty: chili-pepper-v04)

- pl: NCHFP Pickled Jalapeño Rings: krążki 1/4 cala (ok. 6 mm) moczyć w wodzie z wapnem w lodówce 18 godzin (dopuszczalne 12–24 h), potem trzykrotnie płukać, moczyć 1 godzinę w zimnej wodzie i odsączać; nadmiar wapna wchłonięty przez krążki trzeba usunąć, aby pikle były bezpieczne dla zalecanego procesu.
- en: Slice 1/4 inch, soak in lime water in refrigerator 18 h (12–24 h), then rinse/soak 1 h/drain three times; excess lime must be removed for safe pickles.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 71b2ed7a2462): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-jalapeno-rings/, NCHFP: Pickled Jalapeño Rings (NCHFP (UGA), opracowany w UGA 2003); Procedure, kroki 1–3. Cytat: „Excess lime absorbed by the pepper rings must be removed to make safe pickles for the canning process recommended. … Soak pepper slices in the lime water, in refrigerator, for 18 hours, stirring occasionally (12 to 24 hours may be used). … Repeat the rinsing, soaking and draining steps two more times.”

**ACI-416** (krytyczne; robocze A-22; warianty: chili-pepper-v04)

- pl: NCHFP Pickled Jalapeño Rings: na dno każdego słoika pint 1 łyżka gorczycy i 1 1/2 łyżeczki nasion selera, krążki z 1/2 cala wolnej przestrzeni, zalać wrzącą zalewą (ocet jabłkowy, woda, sól) z 1/2 cala wolnej przestrzeni; raw pack.
- en: Per pint 1 tbsp mustard seed and 1 1/2 tsp celery seed; pack rings, cover with boiling brine, 1/2-inch headspace; raw pack.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 71b2ed7a2462): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-jalapeno-rings/, NCHFP: Pickled Jalapeño Rings (NCHFP (UGA), opracowany w UGA 2003); kroki 5–6. Cytat: „Place 1 tablespoon mustard seed and 1½ teaspoons celery seed in the bottom of each clean, hot pint jar. Pack drained pepper rings into the jars, leaving ½-inch headspace.”

**ACI-417** (krytyczne; robocze A-23; warianty: chili-pepper-v04)

- pl: NCHFP Pickled Jalapeño Rings, kąpiel wodna, raw pack, pint: 0–1000 stóp 10 min, 1001–6000 stóp 15 min, powyżej 6000 stóp 20 min.
- en: Pickled Jalapeño Rings, raw pack pints: 10/15/20 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 71b2ed7a2462): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-jalapeno-rings/, NCHFP: Pickled Jalapeño Rings (NCHFP (UGA), opracowany w UGA 2003); Tabela 1 (Table 1), kąpiel wodna. Cytat: „0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Raw | Pints | 10 min | 15 | 20”
- uproszczenie: Trzy przedziały w jednym twierdzeniu; przy przenoszeniu do rejestru można rozbić na trzy.

**ACI-418** (krytyczne; robocze A-25; warianty: carrot-v04)

- pl: NCHFP Pickled Carrots (same marchewki, bez papryczek), na ok. 4 pint: 2 3/4 funta obranej marchwi, 5 1/2 szklanki białego octu destylowanego 5%, 1 szklanka wody, 2 szklanki cukru, 2 łyżeczki soli, 8 łyżeczek gorczycy, 4 łyżeczki nasion selera; hot pack, pint: 15/20/25 min (0–1000 / 1001–6000 / >6000 stóp).
- en: NCHFP Pickled Carrots: 2 3/4 lbs peeled carrots, 5 1/2 cups white distilled vinegar (5%), 1 cup water, 2 cups sugar, 2 tsp salt, 8 tsp mustard seed, 4 tsp celery seed; hot pack pints 15/20/25 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 25b8717c7280): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-carrots/, NCHFP: Pickled Carrots (NCHFP (UGA), opracowany w UGA 2005); lista składników; Table 1. Cytat: „2¾ pounds peeled carrots (about 3½ pounds as purchased) 5½ cups white distilled vinegar (5%) 1 cup water 2 cups sugar 2 teaspoons canning salt 8 teaspoons mustard seed 4 teaspoons celery seed … Hot | Pints | 15 min | 20 | 25”
- uproszczenie: Skład i czasy razem; przepis jest tylko punktem odniesienia (nie zawiera jalapeño).

**ACI-419** (krytyczne; robocze A-26; warianty: onion-v03)

- pl: NCHFP Pickled Pearl Onions, na 3–4 słoiki pint: 8 szklanek obranych białych cebulek perłowych, 5 1/2 szklanki białego octu destylowanego 5%, 1 szklanka wody, 2 łyżeczki soli, 2 szklanki cukru, 8 łyżeczek gorczycy, 4 łyżeczki nasion selera.
- en: NCHFP Pickled Pearl Onions (3–4 pints): 8 cups peeled white pearl onions, 5 1/2 cups white distilled vinegar (5%), 1 cup water, 2 tsp salt, 2 cups sugar, 8 tsp mustard seed, 4 tsp celery seed.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f81277cd65ac): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-pearl-onions/, NCHFP: Pickled Pearl Onions (NCHFP (UGA), opracowany w UGA 2005); lista składników. Cytat: „8 cups peeled white pearl onions (four 10-ounce bags unpeeled pearl onions as purchased) 5½ cups white distilled vinegar (5%) 1 cup water 2 teaspoons canning salt 2 cups sugar 8 teaspoons mustard seed 4 teaspoons celery seed”

**ACI-420** (krytyczne; robocze A-27; warianty: onion-v03)

- pl: NCHFP Pickled Pearl Onions: cebulki podgotować w zalewie ok. 5 minut (do połowy ugotowania), do słoika pint 2 łyżeczki gorczycy i 1 łyżeczka selera, cebulki z 1 calem wolnej przestrzeni, zalać gorącą zalewą z 1/2 cala wolnej przestrzeni; hot pack, pint: 10/15/20 min (0–1000 / 1001–6000 / >6000 stóp).
- en: Half-cook onions in brine ~5 min; per pint 2 tsp mustard seed, 1 tsp celery seed; fill leaving 1 inch, cover with liquid leaving 1/2 inch; hot pack pints 10/15/20 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f81277cd65ac): https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-pearl-onions/, NCHFP: Pickled Pearl Onions (NCHFP (UGA), opracowany w UGA 2005); Procedure; Table 1. Cytat: „Fill hot jars with the hot onions, leaving 1-inch headspace. Cover with hot pickling liquid, leaving ½-inch headspace. … Hot | Pints | 10 min | 15 | 20”
- uproszczenie: Procedura i czasy razem.

**ACI-421** (krytyczne; robocze A-28; warianty: corn-v03)

- pl: NCHFP Pickled Corn Relish, na ok. 9 pint: 10 szklanek ziaren kukurydzy (16–20 kolb, albo mrożone), 2 1/2 szklanki czerwonej papryki słodkiej w kostce, 2 1/2 szklanki zielonej papryki słodkiej w kostce, 2 1/2 szklanki selera naciowego, 1 1/4 szklanki cebuli, 1 3/4 szklanki cukru, 5 szklanek octu 5%, 2 1/2 łyżki soli, 2 1/2 łyżeczki nasion selera, 2 1/2 łyżki suchej musztardy, 1 1/4 łyżeczki kurkumy.
- en: NCHFP Pickled Corn Relish (about 9 pints): 10 cups corn kernels, 2 1/2 cups each diced sweet red and green peppers, 2 1/2 cups celery, 1 1/4 cups onions, 1 3/4 cups sugar, 5 cups vinegar (5%), salt, celery seed, dry mustard, turmeric.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 df70ddabd69d): https://nchfp.uga.edu/how/pickle/relishes-salads/pickled-corn-relish/, NCHFP: Pickled Corn Relish (NCHFP (UGA), adapt. USDA Complete Guide 2015); lista składników. Cytat: „10 cups fresh whole kernel corn (16 to 20 medium-size ears), or six 10-ounce packages of frozen corn 2-1/2 cups diced sweet red peppers 2-1/2 cups diced sweet green peppers 2-1/2 cups chopped celery 1-1/4 cups diced onions 1-3/4 cups sugar 5 cups vinegar (5 percent)”

**ACI-422** (krytyczne; robocze A-29; warianty: corn-v03)

- pl: NCHFP Pickled Corn Relish: napełniać gorącą mieszanką z 1/2 cala wolnej przestrzeni; hot pack, 1/2 pinty lub pint: 0–1000 stóp 15 min, 1001–6000 stóp 20 min, powyżej 6000 stóp 25 min.
- en: Fill hot, 1/2-inch headspace; hot pack half-pints or pints 15/20/25 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 df70ddabd69d): https://nchfp.uga.edu/how/pickle/relishes-salads/pickled-corn-relish/, NCHFP: Pickled Corn Relish (NCHFP (UGA), adapt. USDA Complete Guide 2015); Procedure; Table 1. Cytat: „Fill jars with hot mixture, leaving 1/2-inch headspace. … Hot | Half-pints or Pints | 15 min | 20 | 25”

**ACI-423** (krytyczne; robocze A-30; warianty: corn-v03)

- pl: NCHFP Pickled Corn Relish dopuszcza opcjonalne zagęszczenie pastą z mąki (1/4 szklanki mąki w 1/4 szklanki wody) — wyjątek w przepisie; nie przenosić na inne przetwory.
- en: Optional flour-paste thickening is part of this recipe only.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 df70ddabd69d): https://nchfp.uga.edu/how/pickle/relishes-salads/pickled-corn-relish/, NCHFP: Pickled Corn Relish (NCHFP (UGA), adapt. USDA Complete Guide 2015); Procedure. Cytat: „If desired, thicken mixture with flour paste (1/4 cup flour blended in 1/4 cup water) and stir frequently.”

**ACI-424** (krytyczne; robocze A-31; warianty: peach-nectarine-v04)

- pl: NCHFP Peach Apple Salsa, na ok. 7 pint: 6 szklanek posiekanych pomidorów Roma, 2 1/2 szklanki żółtej cebuli, 2 szklanki zielonej papryki słodkiej, 10 szklanek twardych, niedojrzałych brzoskwiń, 2 szklanki jabłek Granny Smith, 4 łyżki przyprawy do marynat, 1 łyżka soli, 2 łyżeczki płatków chili, 3 3/4 szklanki jasnego brązowego cukru, 2 1/4 szklanki octu jabłkowego 5%; brak jalapeño w przepisie.
- en: NCHFP Peach Apple Salsa (about 7 pints): 6 cups Roma tomatoes, 2 1/2 cups onions, 2 cups green bell peppers, 10 cups hard unripe peaches, 2 cups Granny Smith apples, pickling spice, salt, 2 tsp red pepper flakes, 3 3/4 cups brown sugar, 2 1/4 cups cider vinegar (5%); no jalapeño.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 73e1af901f2c): https://nchfp.uga.edu/how/can/canning-salsa/peach-apple-salsa/, NCHFP: Peach Apple Salsa (NCHFP (UGA), opracowany w UGA 2003); lista składników. Cytat: „6 cups (2¼ pounds) chopped Roma tomatoes … 2 cups chopped green bell peppers (about 1½ large peppers as purchased) 10 cups (3½ pounds) chopped hard, unripe peaches … 2 teaspoons crushed red pepper flakes 3¾ cups (1¼ pound) packed light brown sugar 2¼ cups cider vinegar (5%)”

**ACI-425** (krytyczne; robocze A-32; warianty: peach-nectarine-v04)

- pl: NCHFP Peach Apple Salsa: brzoskwinie i jabłka po obraniu moczyć 10 minut w roztworze kwasu askorbinowego (1500 mg na pół galona wody); gotować 30 minut; łyżką cedzakową napełnić słoiki pint stałymi składnikami z 1 1/4 cala wolnej przestrzeni (ok. 3/4 funta na słoik), zalać płynem z gotowania z 1/2 cala wolnej przestrzeni.
- en: Soak peaches/apples 10 min in ascorbic acid solution; simmer 30 min; fill solids leaving 1 1/4-inch headspace (~3/4 lb per jar), cover with liquid leaving 1/2-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 73e1af901f2c): https://nchfp.uga.edu/how/can/canning-salsa/peach-apple-salsa/, NCHFP: Peach Apple Salsa (NCHFP (UGA), opracowany w UGA 2003); kroki 4–6. Cytat: „With a slotted spoon, fill salsa solids into hot, clean pint jars, leaving 1¼-inch headspace (about ¾ pound solids in each jar). Cover with cooking liquid, leaving ½-inch headspace.”

**ACI-426** (krytyczne; robocze A-33; warianty: peach-nectarine-v04)

- pl: NCHFP Peach Apple Salsa, kąpiel wodna, hot pack, pint: 0–1000 stóp 15 min, 1001–6000 stóp 20 min, powyżej 6000 stóp 25 min.
- en: Peach-Apple Salsa, hot pack pints: 15/20/25 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 73e1af901f2c): https://nchfp.uga.edu/how/can/canning-salsa/peach-apple-salsa/, NCHFP: Peach Apple Salsa (NCHFP (UGA), opracowany w UGA 2003); Tabela 1 (Table 1), kąpiel wodna. Cytat: „0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Hot | Pints | 15 min | 20 | 25”

**ACI-427** (krytyczne; robocze A-36; warianty: tomatillo-v06)

- pl: NCHFP Tomatillo Green Salsa, na ok. 5 pint: 5 szklanek posiekanych tomatillo, 1 1/2 szklanki długich zielonych chili, 1/2 szklanki jalapeño, 4 szklanki cebuli, 1 szklanka butelkowanego soku z cytryny lub limonki, 6 ząbków czosnku; opcjonalnie kumin i oregano; sól, pieprz.
- en: NCHFP Tomatillo Green Salsa (about 5 pints): 5 cups chopped tomatillos, 1 1/2 cups long green chiles, 1/2 cup jalapeños, 4 cups onions, 1 cup bottled lemon or lime juice, 6 garlic cloves; optional cumin, oregano.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 89e543c35e57): https://nchfp.uga.edu/how/can/canning-salsa/tomatillo-green-salsa/, NCHFP: Tomatillo Green Salsa (NCHFP (UGA), adapt. USDA Complete Guide 2015); lista składników. Cytat: „5 cups chopped tomatillos 1-½ cups seeded, chopped long green chiles ½ cup seeded, finely chopped jalapeño peppers 4 cups chopped onions 1 cup bottled lemon or lime juice 6 cloves garlic, finely chopped”

**ACI-428** (krytyczne; robocze A-37; warianty: tomatillo-v06)

- pl: NCHFP Tomatillo Green Salsa: wszystkie składniki surowe łączy się w garnku, doprowadza do wrzenia i gotuje 20 minut; nakładać gorącą do słoików pint z 1/2 cala wolnej przestrzeni (hot pack); tomatillo nie są pieczone — opalanie w piekarniku (400°F) dotyczy tylko skórki długich chili.
- en: Combine all ingredients, boil, simmer 20 min, ladle hot into pints with 1/2-inch headspace; only chiles may be blistered (400°F oven) for peeling.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 89e543c35e57): https://nchfp.uga.edu/how/can/canning-salsa/tomatillo-green-salsa/, NCHFP: Tomatillo Green Salsa (NCHFP (UGA), adapt. USDA Complete Guide 2015); Preparing Peppers; Hot Pack. Cytat: „Oven or broiler method to blister skins - Place chiles in a hot oven (400°F) or broiler for 6 to 8 minutes until skins blister. … Combine all ingredients in a large saucepan and stir frequently over high heat until mixture begins to boil, then reduce heat and simmer for 20 minutes, stirring occasionally. Ladle hot into clean, hot pint jars, leaving ½-inch headspace.”
- uproszczenie: „Tomatillo nie są pieczone” = wniosek z treści przepisu (pieczenie opisane tylko dla chili).

**ACI-429** (krytyczne; robocze A-38; warianty: tomatillo-v06)

- pl: NCHFP Tomatillo Green Salsa, kąpiel wodna, hot pack, pint: 0–1000 stóp 15 min, 1001–6000 stóp 20 min, powyżej 6000 stóp 25 min.
- en: Tomatillo Green Salsa, hot pack pints: 15/20/25 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 89e543c35e57): https://nchfp.uga.edu/how/can/canning-salsa/tomatillo-green-salsa/, NCHFP: Tomatillo Green Salsa (NCHFP (UGA), adapt. USDA Complete Guide 2015); Tabela 1 (Table 1), kąpiel wodna. Cytat: „0 - 1,000 ft | 1,001 - 6,000 ft | Above 6,000 ft | Hot | Pints | 15 min | 20 | 25”

**ACI-430** (krytyczne; robocze A-39; warianty: tomatillo-v06)

- pl: NCHFP Tomatillo Green Salsa: jedyną inną bezpieczną zmianą (poza zamianą tomatillo na zielone pomidory) jest ilość przypraw i ziół; nie zmieniać proporcji warzyw do kwasu; nie zastępować soku z cytryny octem.
- en: The only other safe change is the amount of spices and herbs; do not alter vegetable-to-acid proportions; do not substitute vinegar for lemon juice.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 89e543c35e57): https://nchfp.uga.edu/how/can/canning-salsa/tomatillo-green-salsa/, NCHFP: Tomatillo Green Salsa (NCHFP (UGA), adapt. USDA Complete Guide 2015); IMPORTANT (pod tabelą). Cytat: „Note: You may use green tomatoes in this recipe instead of tomatillos. IMPORTANT: The only other change you can safely make in this salsa recipe is to change the amount of spices and herbs. Do not alter the proportions of vegetables to acid and tomatoes because it might make the salsa unsafe. Do not substitute vinegar for the lemon juice.”

**ACI-431** (krytyczne; jedno źródło; robocze A-41; warianty: garlic-v04, garlic-v06, garlic-v08)

- pl: UC ANR 8568: obrane ząbki czosnku można zalać nierozcieńczonym winem lub octem i przechowywać w lodówce; wino/ocet daje środowisko kwaśne (pH < 4,6), w którym Clostridium botulinum nie rośnie.
- en: UC ANR 8568: peeled cloves may be submerged in undiluted (full-strength) wine or vinegar and stored in the refrigerator; acidic environment (below pH 4.6) prevents C. botulinum growth.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 3, Storing Garlic in Wine or Vinegar and Refrigerating. Cytat: „Peeled cloves may be submerged in undiluted (full-strength) wine or vinegar and stored in the refrigerator. Adding wine or vinegar to garlic provides an acidic environment (less than pH 4.6) so that Clostridium botulinum cannot grow.”

**ACI-432** (krytyczne; jedno źródło; robocze A-42; warianty: garlic-v04, garlic-v06)

- pl: UC ANR 8568: sugerowane jest wytrawne białe lub czerwone wino; ocet biały lub winny też się sprawdza, a ocet balsamiczny może mieć zbyt intensywny smak.
- en: A dry white or red wine is suggested; white or wine vinegars work well, but balsamic may be too strongly flavored.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 3, jw.. Cytat: „A dry white or red wine is suggested; white or wine vinegars also work well, but balsamic vinegar may be too strongly flavored.”

**ACI-433** (krytyczne; jedno źródło; robocze A-43; warianty: garlic-v04, garlic-v08)

- pl: UC ANR 8568: do czosnku w winie/occie można dodać niewielką ilość suszonych przypraw, np. pieprzu w ziarnach, płatków chili, kuminu lub liści laurowych (mowa o suszonych przyprawach, nie o świeżych ziołach).
- en: A small amount of dried spices (peppercorns, hot chili flakes, cumin seeds, bay leaves) may be added.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 3, jw.. Cytat: „You may also add a small amount of dried spices, such as peppercorns, hot chili flakes, cumin seeds, or bay leaves, if desired.”
- uproszczenie: „Nie o świeżych ziołach” to wniosek z brzmienia (dried spices); źródło nie omawia świeżych ziół.

**ACI-434** (krytyczne; jedno źródło; robocze A-44; warianty: garlic-v04, garlic-v06, garlic-v08)

- pl: UC ANR 8568: mieszanina czosnku z winem/octem powinna wytrzymać ok. 4 miesiące w lodówce; opisać datą przygotowania i „najlepiej spożyć przed”.
- en: The garlic–liquid mixture should keep about 4 months in the refrigerator; label with preparation and best-before dates.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 3, jw.. Cytat: „The garlic–liquid mixture should keep for about 4 months in the refrigerator. Label the refrigerated garlic–liquid mixtures to show the preparation date and a “best before” date.”

**ACI-435** (krytyczne; jedno źródło; robocze A-45; warianty: garlic-v04, garlic-v06, garlic-v08)

- pl: UC ANR 8568: mieszaniny czosnku z winem/octem nie przechowywać w temperaturze pokojowej, bo szybko pleśnieje; przy oznakach pleśni lub drożdży na powierzchni wyrzucić ząbki i płyn.
- en: Do not store the garlic–liquid mixture at room temperature (rapid mold); discard cloves and liquid if mold or yeast appear.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 3, jw.. Cytat: „Do not store the garlic–liquid mixture at room temperature because it will rapidly develop mold growth. Discard both the cloves and the liquid if there are signs of mold or yeast growth on the surface of the wine or vinegar.”

**ACI-436** (krytyczne; jedno źródło; robocze A-46; warianty: garlic-v04, garlic-v06, garlic-v08)

- pl: UC ANR 8568: wekowanie czosnku nie jest zalecane — czosnek jest warzywem niskokwasowym wymagającym szybkowaru, a odpowiednie czasy procesu nie zostały ustalone.
- en: Canning garlic is not recommended; garlic is low-acid, requires a pressure canner, and adequate process times have not been determined.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 3, Canning Garlic. Cytat: „CAUTION: Canning garlic is not recommended. Garlic is a lowacid vegetable that requires a pressure canner to be properly processed. Garlic loses most of its flavor when heated in this way. For this reason, adequate processing times have not been determined for canning garlic.”

**ACI-437** (krytyczne; jedno źródło; robocze A-47; warianty: cucumber-v19, garlic-v04, garlic-v06, garlic-v08)

- pl: UC ANR 8568: zakwaszanie całych ząbków czosnku w occie jest długie i bardzo zmienne (od 3 dni do ponad tygodnia), dlatego nie ma domowych wytycznych zakwaszania całych ząbków.
- en: Acidifying whole garlic cloves in vinegar is lengthy and highly variable (3 days to more than 1 week); there are no home guidelines for acidifying whole cloves.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 4, Acidified Garlic in Oil. Cytat: „Acidifying whole garlic in vinegar is a lengthy and highly variable process; a whole clove of garlic covered with vinegar can take from 3 days to more than 1 week to sufficiently acidify. For this reason there are no guidelines for adequately acidifying whole garlic cloves in the home.”

**ACI-438** (krytyczne; jedno źródło; robocze A-48; warianty: cucumber-v19)

- pl: UC ANR 8568: w przetestowanej metodzie zakwaszania czosnku do oleju użyto kwasu cytrynowego; ani soku z cytryny, ani octu nie testowano i nie wolno ich podstawiać.
- en: Neither lemon juice nor vinegar were tested for acidifying garlic and should not be substituted.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 70ed416d854c): https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf, Garlic: Safe Methods to Store, Preserve, and Enjoy (ANR Publication 8568, 10.2016) (UC ANR (University of California), L. J. Harris); s. 4, jw.. Cytat: „Neither lemon juice nor vinegar were tested for acidifying garlic and should not be substituted here.”

**ACI-439** (krytyczne; jedno źródło; robocze A-51; warianty: garlic-v04, garlic-v06, garlic-v08)

- pl: OSU Extension: obrane ząbki można zalać nierozcieńczonym winem lub octem i przechowywać w lodówce; nie trzymać w temperaturze pokojowej (pleśń); źródło: UC ANR 8568.
- en: OSU Extension: peeled garlic cloves in undiluted wine or vinegar, refrigerated; not at room temperature; source UC ANR 8568.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 716044b68339): https://extension.oregonstate.edu/food/preservation/preserving-garlic, Preserving garlic (Oregon State University Extension); Garlic stored in wine or vinegar. Cytat: „Peeled garlic cloves may be submerged in undiluted wine or vinegar and then stored in the refrigerator.”

**ACI-440** (krytyczne; jedno źródło; robocze A-52; warianty: garlic-v04, garlic-v06, garlic-v08)

- pl: OSU Extension: czosnek jest żywnością niskokwasową; jako niezakwaszone warzywo wymagałby szybkowaru, a czasy procesu w szybkowarze nie zostały opracowane.
- en: OSU: garlic is low-acid; pressure canning times have not been developed for plain garlic.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 716044b68339): https://extension.oregonstate.edu/food/preservation/preserving-garlic, Preserving garlic (Oregon State University Extension); Canning garlic. Cytat: „Garlic is a low acid food that would require the extreme heat of a pressure canner to process safely as a plain, unacidified vegetable. Pressure canning processing times have not been developed for plain garlic”

**ACI-441** (krytyczne; robocze B-01; warianty: pumpkin-v03, pumpkin-v04, pumpkin-v05, pumpkin-v07, pumpkin-v11)

- pl: NCHFP: nawet przy dodaniu octu lub soku z cytryny zmienność pH masła dyniowego nie pozwala na jedno zalecenie zapewniające bezpieczny produkt; duża ilość cukru też może nie hamować patogenów.
- en: NCHFP: even with added vinegar or lemon juice, pH variability in pumpkin butter prevents a single recommendation for a safe product; a large amount of sugar may not inhibit pathogens.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 d18602843711): https://nchfp.uga.edu/blog/beware-pumpkin-butter, Beware: Pumpkin Butter (blog, 2012-12-07) (NCHFP / University of Georgia); blog „Beware: Pumpkin Butter”, akapit „Basically, the concern is over variability”. Cytat: „Even though a large quantity of sugar is often added to make pumpkin butter, it may not be enough to inhibit pathogens. Vinegar or lemon juice may be added to increase acidity (and thereby decrease pH), but with such variability in pH levels, a single recommendation cannot be made to ensure a safe product at this time.”

**ACI-442** (krytyczne; robocze B-02; warianty: pumpkin-v03, pumpkin-v04, pumpkin-v05, pumpkin-v07, pumpkin-v11)

- pl: NCHFP/UGA nie ma danych badawczych o proporcjach i parametrach zakwaszania produktów z przecieru dyniowego do wekowania w kąpieli wodnej i nie tworzy ani nie szacuje procesów dla żywności niskokwasowej.
- en: NCHFP/UGA has no research data on proportions and parameters for acidifying pureed pumpkin products for boiling-water canning and does not make up or estimate low-acid canning processes.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 338b7770d0f5): https://nchfp.uga.edu/faqs/canning-vegetables/category/faq-canning, FAQ – Canning Vegetables (NCHFP / University of Georgia); FAQ „Can you provide a process time for pumpkin butter?”, akapit 1. Cytat: „Some recipes may have some added acid ingredients, but we do not have access to research data that shows what proportions and parameters are needed for proper acidification for boiling water canning like acid fruit butters. If it is a recipe considered to result in a low-acid butter, then we do not make up or estimate low-acid canning processes.”

**ACI-443** (krytyczne; robocze B-03; warianty: pumpkin-v11)

- pl: Nawet zakwaszony do pH poniżej 4,6 produkt z przecieru dyniowego wymagałby badań wpływu konsystencji na penetrację ciepła w słoiku.
- en: Even if acidified below pH 4.6, a pureed pumpkin product's consistency would need study for its effect on heat penetration in the jar.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 338b7770d0f5): https://nchfp.uga.edu/faqs/canning-vegetables/category/faq-canning, FAQ – Canning Vegetables (NCHFP / University of Georgia); FAQ „Can you provide a process time for pumpkin butter?”, akapit 2 (ostatnie zdanie). Cytat: „Even if the pumpkin butter would be acidified to less than pH 4.6 to control for botulism, the consistency would require studying for its effect on heat penetration throughout the jar during processing to control for other bacterial concerns.”

**ACI-444** (krytyczne; jedno źródło; robocze B-04; warianty: pumpkin-v03, pumpkin-v04, pumpkin-v05, pumpkin-v07, pumpkin-v11)

- pl: UGA (E. Andress): dynia jest żywnością niskokwasową i do bezpiecznego wekowania wymaga obróbki w szybkowarze, tak jak warzywa i mięso.
- en: UGA (E. Andress): pumpkins are a low-acid food and require pressure processing for safe canning, like vegetables and meats.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ea7624d1b2ae): https://fieldreport.caes.uga.edu/news/following-proper-guidelines-is-key-for-safe-pumpkin-preserves/, Following proper guidelines is key for safe pumpkin preserves (2015-09-24) (UGA CAES Newswire (cytaty E. Andress, UGA Extension)); UGA CAES Newswire 2015-09-24, akapit 3 (cytat E. Andress). Cytat: „“Since pumpkins are a low-acid food, they require pressure processing for safe canning, just like vegetables and meats,” Andress said.”

**ACI-445** (krytyczne; jedno źródło; robocze B-05; warianty: pumpkin-v03, pumpkin-v04, pumpkin-v05, pumpkin-v07, pumpkin-v11)

- pl: USDA nie ma przetestowanych przepisów, które pozwalałyby bezpiecznie wekować niektóre przetwory z dyni i przechowywać je w temperaturze pokojowej; dla dyni w kostce zaleca się tylko szybkowar.
- en: USDA has no tested recipes to recommend for safely canning certain pumpkin preserves for room-temperature storage; only pressure canning is recommended for cubed pumpkin.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ea7624d1b2ae): https://fieldreport.caes.uga.edu/news/following-proper-guidelines-is-key-for-safe-pumpkin-preserves/, Following proper guidelines is key for safe pumpkin preserves (2015-09-24) (UGA CAES Newswire (cytaty E. Andress, UGA Extension)); UGA CAES Newswire 2015-09-24, akapit 4 | sekcja „Canned, cubed pumpkin”. Cytat: „Also, the U.S. Department of Agriculture does not have any tested recipes to recommend for safely canning certain pumpkin preserves and storing them at room temperature. | Only pressure canning methods are recommended for canning cubed pumpkin.”

**ACI-446** (krytyczne; robocze B-06; warianty: potato-sunchoke-v05)

- pl: NCHFP podaje dla ziemniaków białych (kostka 1/2 cala lub całe) wyłącznie procesy w szybkowarze (manometr tarczowy i obciążnikowy); brak procesu w kąpieli wodnej.
- en: NCHFP gives only pressure-canner processes (dial and weighted gauge) for white potatoes (1/2-inch cubes or whole); no boiling-water process.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 71d0df3bd3fc): https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/potatoes-white-cubed-or-whole/, Potatoes, White – Cubed or Whole (NCHFP / University of Georgia); Potatoes, White – Cubed or Whole: nagłówki tabel 1 i 2. Cytat: „Table 1. Recommended process time for White Potatoes in a dial-gauge pressure canner. … Table 2. Recommended process time for White Potatoes in a weighted-gauge pressure canner.”

**ACI-447** (krytyczne; robocze B-08; warianty: beetroot-v11)

- pl: NCHFP: buraki (całe, kostka, plastry) wekuje się tylko w szybkowarze; słoiki zalewa się świeżą zagotowaną wodą, nie wodą z gotowania buraków, z 1 calem (ok. 2,5 cm) wolnej przestrzeni.
- en: NCHFP: beets (whole, cubed, sliced) are pressure canned only; jars are filled with fresh boiled water, not the beet cooking water, with 1-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f74dc6b2d769): https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/beets-whole-cubed-or-sliced/, Beets – Whole, Cubed, or Sliced (NCHFP / University of Georgia); Beets – Whole, Cubed, or Sliced: Procedure | nagłówek tabeli 1. Cytat: „Fill jars with hot beets and fresh hot water that has been brought to a boil first (not the water you used to boil the beets with), leaving 1-inch headspace. | Table 1. Recommended process time for Beets in a dial-gauge pressure canner.”

**ACI-448** (krytyczne; robocze B-09; warianty: beetroot-v11)

- pl: NCHFP: zup wekowanych nie zagęszcza się; procedura zup to szybkowar.
- en: NCHFP: home canned soups must not be thickened; the soup procedure is pressure canning.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 6c44b4f0a743): https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/soups/, Soups (NCHFP / University of Georgia); Soups: Procedure | nagłówek tabeli 1. Cytat: „Caution: Do not thicken. … Table 1. Recommended process time for Soups in a dial-gauge pressure canner.”

**ACI-449** (krytyczne; jedno źródło; robocze B-10; warianty: beetroot-v11, chili-pepper-v17, potato-sunchoke-v05)

- pl: Żywności niskokwasowej (pH > 4,6), np. buraków, nie da się bezpiecznie wekować w kąpieli wodnej, chyba że jest zakwaszona według przetestowanego przepisu (Oregon 2012: 3 hospitalizacje z jadem kiełbasianym po burakach z kąpieli wodnej).
- en: Low-acid foods (pH > 4.6) like beets cannot be safely canned in a boiling water bath unless acidified according to a tested recipe (Oregon 2012: 3 botulism hospitalizations from water-bath beets).
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 5f77b4b04be2): https://ucfoodsafety.sf.ucdavis.edu/sites/g/files/dgvnsk7366/files/inline-files/210867.pdf, Food safety infosheet 2012-08-02: Home-canned beets in Oregon linked to botulism (foodsafetyinfosheets.com (hostowane przez UC Davis Food Safety)); Food safety infosheet 2012-08-02, punkty na dole strony. Cytat: „Low acid foods (pH greater than 4.6) like beets cannot be safely canned using a boiling water bath unless acidified according to a tested recipe.”

**ACI-450** (krytyczne; jedno źródło; robocze B-11; warianty: elderberry-elderflower-v01)

- pl: Ask Extension: jedzenie niedojrzałych owoców czarnego bzu oraz innych części rośliny (szypułki, liście, kora) jest niebezpieczne; surowe niedojrzałe owoce i inne części zawierają glikozydy cyjanogenne (sambunigryna).
- en: Ask Extension: it is dangerous to eat unripe elderberries and other plant parts (stems, leaves, bark); raw unripe berries and other parts contain cyanogenic glycosides (sambunigrin).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 214e6d2d398f): https://ask.extension.org/kb/faq.php?id=605114, Safety of elderberries – Ask Extension (FAQ 605114) (Ask Extension (sieć Cooperative Extension; ekspert nienazwany)); Ask Extension FAQ 605114, „Expert Response”, akapity 1–2. Cytat: „It is dangerous to eat unripe elderberries as well as any other parts of the plant (stems, leaves, bark, etc); … Raw, unripe elderberries and other parts of the elderberry plant (stems, leaves, bark, etc) contain some compounds that can become poisonous.”

**ACI-451** (krytyczne; jedno źródło; robocze B-12; warianty: elderberry-elderflower-v01)

- pl: Ask Extension: znane zatrucia bzem wiązano z obecnością liści w produkcie albo z niedojrzałymi owocami; przetwarzać i jeść wolno tylko w pełni dojrzałe owoce, usuwając szypułki, liście i niedojrzałe owoce.
- en: Ask Extension: elderberry poisonings were traced to leaves in the product or unripe berries; only fully ripe berries should be processed or eaten, removing stems, leaves and unripe berries.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 214e6d2d398f): https://ask.extension.org/kb/faq.php?id=605114, Safety of elderberries – Ask Extension (FAQ 605114) (Ask Extension (sieć Cooperative Extension; ekspert nienazwany)); Ask Extension FAQ 605114, „Expert Response”, akapity 2–3. Cytat: „There have been elderberry poisonings, but they have been traced back to the presence of other plant material (leaves) in the product (juice, tea) or that the berries were not ripe. … make sure that you remove all of the stems, leaves, and any unripe berries before pressing them. … only fully ripe berries should be processed or eaten.”

**ACI-452** (krytyczne; jedno źródło; robocze B-13; warianty: elderberry-elderflower-v01)

- pl: OSU Extension (EM 9446): owoce czarnego bzu zbiera się w pełni dojrzałe; suszyć tylko ciemnoniebieskie dojrzałe owoce.
- en: OSU Extension (EM 9446): harvest elderberries when fully ripe; dry only dark blue ripe berries.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 cb2599f9ac8a): https://extension.oregonstate.edu/catalog/pub/em-9446-play-it-safe-when-preserving-elderberries, EM 9446 Play it safe when preserving elderberries (Oregon State University Extension); EM 9446, sekcja zbioru | przepis na suszenie. Cytat: „Harvest elderberries when the fruits are fully ripe. … Dry only dark blue ripe berries.”

**ACI-453** (krytyczne; robocze B-14; warianty: elderberry-elderflower-v01)

- pl: Badanie (Appenteng i in. 2021, bez amerykański): całkowity potencjał cyjanogenny był najwyższy w szypułkach i zielonych (niedojrzałych) owocach; mimo niskich poziomów zaleca się oddzielać szypułki, zielone owoce i liście przy przygotowaniu produktów.
- en: Study (Appenteng et al. 2021, American elderberry): total cyanogenic potential was highest in stems and green berries; although levels were low, stems, green berries and leaves should be separated out during product preparation.
- źródło (szczebel 2, 2026-11-02, curl+pdftotext+grep, sha12 369ddf953f54): https://mdpi-res.com/d_attachment/molecules/molecules-26-01384/article_deploy/molecules-26-01384.pdf, Appenteng et al. 2021, Cyanogenic Glycoside Analysis in American Elderberry, Molecules 26:1384, doi:10.3390/molecules26051384 (University of Missouri (recenzowane, MDPI)); Molecules 2021, 26:1384, 4. Conclusions. Cytat: „TCP assessed in both pure and pooled AE sample tissues were generally low with higher concentrations recorded in pooled stems and unripe (green) berries. … it is advisable to separate out the stems, green berries and leaves [36] from AE ripe berries during product preparation.”
- uproszczenie: Badanie dotyczy S. nigra subsp. canadensis (bez amerykański); autorzy oceniają poziomy jako niskie – źródło nie mówi o „kaparach” z pąków.

**ACI-454** (krytyczne; robocze B-16; warianty: apple-v08)

- pl: NCHFP Apple Pie Filling (na 1 quart): 3 1/2 szklanki blanszowanych plastrów świeżych jabłek, 3/4 szklanki + 2 łyżki cukru, 1/4 szklanki Clear Jel, 1/2 łyżeczki cynamonu, 1/2 szklanki zimnej wody, 3/4 szklanki soku jabłkowego, 2 łyżki butelkowanego soku z cytryny, opcjonalnie 1/8 łyżeczki gałki muszkatołowej.
- en: NCHFP Apple Pie Filling (per quart): 3-1/2 cups blanched sliced fresh apples, 3/4 cup + 2 tbsp sugar, 1/4 cup Clear Jel, 1/2 tsp cinnamon, 1/2 cup cold water, 3/4 cup apple juice, 2 tbsp bottled lemon juice, nutmeg 1/8 tsp optional.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 c4d87b91f16f): https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/apple-pie-filling, Apple Pie Filling (NCHFP / University of Georgia); Apple Pie Filling, Table 1 (kolumna 1 Quart). Cytat: „Blanched, sliced fresh apples 3-1/2 cups 6 quarts Granulated sugar 3/4 cup + 2 tbsp 5-1/2 cups Clear Jel® 1/4 cup 1-1/2 cup Cinnamon 1/2 tsp 1 tbsp Cold Water 1/2 cup 2-1/2 cups Apple juice 3/4 cup 5 cups Bottled lemon juice 2 tbsp 3/4 cup Nutmeg (optional) 1/8 tsp 1 tsp”

**ACI-455** (krytyczne; robocze B-17; warianty: apple-v08)

- pl: NCHFP Apple Pie Filling: jabłka jędrne i chrupkie; jeśli mało kwaśne, dodać 1/4 szklanki soku z cytryny na każde 6 quartów plastrów.
- en: NCHFP Apple Pie Filling: use firm, crisp apples; if apples lack tartness, add 1/4 cup lemon juice per 6 quarts of slices.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 c4d87b91f16f): https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/apple-pie-filling, Apple Pie Filling (NCHFP / University of Georgia); Apple Pie Filling, Quality. Cytat: „Use firm, crisp apples. Stayman, Golden Delicious, Rome, and other varieties of similar quality are suitable. If apples lack tartness, use an additional 1/4 cup of lemon juice for each 6 quarts of slices.”

**ACI-456** (krytyczne; robocze B-18; warianty: apple-v08)

- pl: NCHFP Apple Pie Filling: plastry 1/2 cala (ok. 1,3 cm) w wodzie z kwasem askorbinowym; blanszować partiami po 6 szklanek w 1 galonie wrzątku 1 minutę; zagotować cukier, Clear Jel i cynamon z wodą i sokiem jabłkowym do zgęstnienia, dodać sok z cytryny i gotować 1 minutę; wmieszać jabłka, od razu napełnić słoiki z 1 calem (ok. 2,5 cm) wolnej przestrzeni i natychmiast wekować.
- en: NCHFP Apple Pie Filling: 1/2-inch slices in ascorbic acid water; blanch 6 cups at a time in 1 gallon boiling water for 1 minute; cook sugar, Clear Jel and cinnamon with water and apple juice until thick and bubbling, add lemon juice and boil 1 minute; fold in apples, fill jars immediately with 1-inch headspace, process immediately.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 c4d87b91f16f): https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/apple-pie-filling, Apple Pie Filling (NCHFP / University of Georgia); Apple Pie Filling, Procedure. Cytat: „Prepare slices 1/2-inch wide and place in water containing ascorbic acid to prevent browning. For fresh fruit, place 6 cups at a time in 1 gallon of boiling water. Boil each batch 1 minute after the water returns to a boil. … Add lemon juice and boil 1 minute, stirring constantly. Fold in drained apple slices immediately and fill jars with mixture without delay, leaving 1 inch headspace. Adjust lids and process immediately according to the recommendations in Table 2.”

**ACI-457** (krytyczne; robocze B-19; warianty: apple-v08)

- pl: NCHFP Apple Pie Filling, kąpiel wodna, hot pack, słoiki pint lub quart: 0–1000 stóp 25 min, 1001–3000 stóp 30 min, 3001–6000 stóp 35 min, powyżej 6000 stóp 40 min.
- en: NCHFP Apple Pie Filling, boiling-water canner, hot pack, pints or quarts: 0–1,000 ft 25 min, 1,001–3,000 ft 30, 3,001–6,000 ft 35, above 6,000 ft 40.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 c4d87b91f16f): https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/apple-pie-filling, Apple Pie Filling (NCHFP / University of Georgia); Apple Pie Filling, Table 2. Cytat: „Table 2. Recommended process time for Apple Pie Filling in a boiling-water canner. Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 25 min 30 35 40”

**ACI-458** (krytyczne; robocze B-20; warianty: apple-v08)

- pl: NCHFP: w nadzieniach używać tylko 1/4 szklanki Clear Jel na quart; do nadzienia jabłkowego tylko świeże owoce.
- en: NCHFP: use only 1/4 cup Clear Jel per quart; use fresh fruit in the apple pie filling recipe.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 9b2f14313981): https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pie-fillings/, Pie Fillings (NCHFP / University of Georgia); Pie Fillings, General, akapit 3. Cytat: „Use only 1/4 cup Clear Jel® per quart, or 1-3/4 cups for 7 quarts. Use fresh fruit in the apple and peach pie filling recipes.”

**ACI-459** (krytyczne; robocze C-01; warianty: strawberry-v07)

- pl: NCHFP Strawberry Jam Pectin: 5½ szklanki rozgniecionych truskawek (ok. 3 kwartowe pojemniki), 1 opakowanie pektyny w proszku, 8 szklanek cukru; wychodzi ok. 9–10 słoików 1/2 pinty.
- en: NCHFP Strawberry Jam Pectin: 5½ cups crushed strawberries, 1 package powdered pectin, 8 cups sugar; yield about 9–10 half-pint jars.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 908799611485): https://nchfp.uga.edu/how/make-jam-jelly/jams/strawberry-jam-pectin/, Strawberry Jam Pectin (NCHFP (UGA)); lista składników. Cytat: „5½ cups crushed strawberries (about 3 quart boxes strawberries) 1 package powdered pectin 8 cups sugar Yield: About 9 or 10 half-pint jars”

**ACI-460** (krytyczne; robocze C-02; warianty: strawberry-v07)

- pl: NCHFP Strawberry Jam Pectin, procedura: owoce z pektyną szybko doprowadzić do pełnego wrzenia, dodać cukier, ponownie do pełnego wrzenia i gotować intensywnie 1 minutę, stale mieszając; zdjąć z ognia, zebrać pianę.
- en: NCHFP Strawberry Jam Pectin: bring fruit with pectin to a full boil, add sugar, return to a full bubbling boil, boil hard 1 minute stirring constantly; remove from heat and skim.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 908799611485): https://nchfp.uga.edu/how/make-jam-jelly/jams/strawberry-jam-pectin/, Strawberry Jam Pectin (NCHFP (UGA)); Procedure, To make jam. Cytat: „Add pectin and stir well. Place on high heat and, stirring constantly, bring quickly to a full boil with bubbles over the entire surface. Add sugar, continue stirring, and heat again to a full bubbling boil. Boil hard for 1 minute, stirring constantly. Remove from heat; skim.”

**ACI-461** (krytyczne; robocze C-03; warianty: strawberry-v07)

- pl: NCHFP Strawberry Jam Pectin: gorący dżem od razu nalać do gorących, sterylnych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni.
- en: NCHFP Strawberry Jam Pectin: fill hot jam immediately into hot, sterile jars leaving 1/4-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 908799611485): https://nchfp.uga.edu/how/make-jam-jelly/jams/strawberry-jam-pectin/, Strawberry Jam Pectin (NCHFP (UGA)); Procedure. Cytat: „Fill hot jam immediately into hot, sterile jars, leaving ¼ inch headspace.”

**ACI-462** (krytyczne; robocze C-04+C-05+C-06; warianty: strawberry-v07)

- pl: NCHFP Strawberry Jam Pectin, tabela 1 (kąpiel wodna, hot, słoiki 1/2 pinty lub pinty), 0–1000 stóp: 5 min (uszczegółowienie SLO-072); 10 min (uszczegółowienie SLO-072); 15 min (uszczegółowienie SLO-072).
- en: NCHFP Strawberry Jam Pectin, Table 1 (boiling water, hot, half-pints or pints), 0–1000 ft: 5 min; 10 min; 15 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 908799611485): https://nchfp.uga.edu/how/make-jam-jelly/jams/strawberry-jam-pectin/, Strawberry Jam Pectin (NCHFP (UGA)); Table 1. Cytat: „Hot Half-pints or Pints 5 min 10 15”

**ACI-463** (krytyczne; robocze C-07; warianty: strawberry-v07)

- pl: NCHFP: przepisy na stronie testowano ze standardowymi opakowaniami pektyny w proszku 1,75 oz (ok. 50 g) lub pektyny płynnej 3 fl oz (ok. 89 ml); pektyny w proszku i płynnej nie można stosować zamiennie.
- en: NCHFP: recipes on the website were tested with standard 1.75 oz boxes of powdered pectin or 3 fl oz packages of liquid pectin; powdered and liquid forms are not interchangeable.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 7dc16001e9f5): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/jellied-product-ingredients/, Jellied Product Ingredients (NCHFP (UGA)); Pectin. Cytat: „The powdered and liquid forms are not interchangeable in recipes. The recipes featured on this website were tested with standard 1.75oz boxes of powdered pectin or 3 fl oz packages of liquid pectin.”

**ACI-464** (krytyczne; robocze C-08; warianty: strawberry-v07)

- pl: NCHFP: istnieją specjalne pektyny do przetworów bez cukru lub z mniejszą ilością cukru; przepisy są w ulotkach w opakowaniach i trzeba ich dokładnie przestrzegać (NCHFP nie podaje własnego przepisu).
- en: NCHFP: special pectins exist for products with no or less sugar; specific recipes are on the package inserts and must be followed carefully.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 7dc16001e9f5): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/jellied-product-ingredients/, Jellied Product Ingredients (NCHFP (UGA)); Pectin. Cytat: „There are special pectins available to use for making jellied products with no added sugar or with less sugar than regular recipes. Specific recipes will be found on the package inserts, and directions should be followed carefully.”

**ACI-465** (krytyczne; robocze C-09; warianty: strawberry-v07)

- pl: NCHFP: cukier jest konserwantem przetworu i zapobiega rozwojowi mikroorganizmów; nigdy nie zmniejszać ilości cukru z przepisu, chyba że celem jest syrop.
- en: NCHFP: sugar is the preservative preventing growth of microorganisms; never cut down the sugar a recipe calls for unless syrup is the desired result.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 7dc16001e9f5): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/jellied-product-ingredients/, Jellied Product Ingredients (NCHFP (UGA)); Sugar. Cytat: „Sugar is the preservative for the product, preventing the growth of microorganisms. | Never cut down on the amount of sugar a recipe calls for unless syrup is the desired end result.”

**ACI-466** (krytyczne; jedno źródło; robocze C-11; warianty: rhubarb-v07, strawberry-v12)

- pl: Rhubarb-Strawberry Jam (z pektyną płynną; przedruk WSU przepisu NCHFP z 2005 r., adaptacja USDA HG-56): 1 szklanka ugotowanego rabarbaru o czerwonych łodygach (ok. 1 funt, ok. 450 g, rabarbaru i 1/4 szklanki wody), 2½ szklanki rozgniecionych truskawek, 6½ szklanki cukru, 1 saszetka pektyny płynnej; ok. 7–8 słoików 1/2 pinty.
- en: Rhubarb-Strawberry Jam with liquid pectin (WSU reprint of NCHFP 2005, adapted from USDA HG-56): 1 cup cooked red-stalked rhubarb (about 1 lb rhubarb and 1/4 cup water), 2½ cups crushed strawberries, 6½ cups sugar, 1 pouch liquid pectin; about 7–8 half-pints.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 6b76a1b08e8b): https://wpcdn.web.wsu.edu/extension/uploads/sites/77/2018/06/Preserving-Strawberries.pdf, Preserving Strawberries (przepisy NCHFP/USDA) (Washington State University Extension); Rhubarb-Strawberry Jam, lista składników. Cytat: „Rhubarb-Strawberry Jam with liquid pectin Yield: About 7 or 8 half-pint jars 1 cup cooked red-stalked rhubarb (about 1 pound rhubarb and ¼ cup water) 2½ cups crushed strawberries (about 1½ quart boxes) 6½ cups sugar 1 pouch liquid pectin”

**ACI-467** (krytyczne; jedno źródło; robocze C-12; warianty: rhubarb-v07, strawberry-v12)

- pl: Rhubarb-Strawberry Jam (WSU/NCHFP), procedura: rabarbar pokroić cienko, nie obierać, dusić pod przykryciem z wodą do miękkości (ok. 1 min); truskawki rozgnieść; owoce z cukrem doprowadzić do pełnego wrzenia, gotować intensywnie 1 minutę, zdjąć z ognia i wmieszać pektynę.
- en: Rhubarb-Strawberry Jam (WSU/NCHFP): slice rhubarb, do not peel, simmer covered with water until tender (~1 min); crush strawberries; boil fruit with sugar hard 1 minute, remove from heat and stir in pectin.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 6b76a1b08e8b): https://wpcdn.web.wsu.edu/extension/uploads/sites/77/2018/06/Preserving-Strawberries.pdf, Preserving Strawberries (przepisy NCHFP/USDA) (Washington State University Extension); Procedure. Cytat: „Wash rhubarb and slice thin or chop; do not peel. Add water, cover, and simmer until rhubarb is tender (about 1 minute). | Boil hard for 1 minute, stirring constantly. Remove from heat and stir in pectin.”

**ACI-468** (krytyczne; jedno źródło; robocze C-13; warianty: rhubarb-v07, strawberry-v12)

- pl: Rhubarb-Strawberry Jam (WSU/NCHFP): gorący dżem od razu do gorących, sterylnych słoików, 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; kąpiel wodna.
- en: Rhubarb-Strawberry Jam (WSU/NCHFP): fill hot jam immediately into hot, sterile jars, leaving 1/4-inch headspace.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 6b76a1b08e8b): https://wpcdn.web.wsu.edu/extension/uploads/sites/77/2018/06/Preserving-Strawberries.pdf, Preserving Strawberries (przepisy NCHFP/USDA) (Washington State University Extension); Procedure. Cytat: „Fill hot jam immediately into hot, sterile jars, leaving ¼ inch headspace.”

**ACI-469** (krytyczne; jedno źródło; robocze C-14+C-15+C-16; warianty: rhubarb-v07, strawberry-v12)

- pl: Rhubarb-Strawberry Jam (WSU/NCHFP), tabela 1 (kąpiel wodna, hot, słoiki 1/2 pinty lub pinty), 0–1000 stóp: 5 min; 10 min; 15 min.
- en: Rhubarb-Strawberry Jam (WSU/NCHFP), Table 1 (boiling water, hot, half-pints or pints), 0–1000 ft: 5 min; 10 min; 15 min.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 6b76a1b08e8b): https://wpcdn.web.wsu.edu/extension/uploads/sites/77/2018/06/Preserving-Strawberries.pdf, Preserving Strawberries (przepisy NCHFP/USDA) (Washington State University Extension); Table 1. Cytat: „Hot Half-pints 5 min 10 15 or Pints”

**ACI-470** (krytyczne; jedno źródło; robocze C-18; warianty: rhubarb-v07, strawberry-v12)

- pl: NDSU FN590 „Rhubarb-Strawberry Jam With Pectin”: te same proporcje (1 szklanka ugotowanego rabarbaru, 2½ szklanki rozgniecionych truskawek, 6½ szklanki cukru, 1 saszetka pektyny płynnej), 1/4 cala wolnej przestrzeni, czasy wg tabeli 6: słoiki 1/2 pinty lub pinty 5 / 10 / 15 min (0–1000 / 1001–6000 / powyżej 6000 stóp).
- en: NDSU FN590 Rhubarb-Strawberry Jam With Pectin: same proportions; 1/4-inch headspace; Table 6 half-pints or pints 5/10/15 min.
- źródło (szczebel 3, 2026-11-02, curl+pdftotext+grep, sha12 46e3148cf86b): https://www.ag.ndsu.edu/publications/food-nutrition/from-the-garden-or-orchard-to-the-table-jams-and-jellies-from-north-dakota-fruits/fn590.pdf, FN590 From the Garden or Orchard to the Table: Jams and Jellies from North Dakota Fruits (adres PDF przekierowuje na stronę HTML) (NDSU Extension); Rhubarb-Strawberry Jam With Pectin; Table 6. Cytat: „Table 6. Recommended water bath process time for jams and jellies in a boiling water bath canner. Style of Pack Jar Size 0-1,000 ft. 1,001-6,000 ft Above 6,000 ft. Hot Half-pints or Pints 5 min. 10 min. 15 min. … 1 cup cooked red-stalked rhubarb (about 1 pound rhubarb and ¼ cup water) 2½ cups crushed strawberries (about 1½ quart boxes) 6½ cups sugar 1 pouch liquid pectin … leaving ¼-inch head space.”

**ACI-471** (krytyczne; robocze C-21; warianty: lemon-v11, orange-kumquat-v07)

- pl: NCHFP Orange Marmalade (UGA 2018): 4 szklanki cienko krojonej skórki pomarańczy z albedo (ok. 2,5–3 funtów pomarańczy), 4 szklanki miąższu pomarańczy, 1 szklanka cienko krojonej cytryny (ok. 1 duża cytryna), 6 szklanek wody, 6 szklanek cukru; ok. 7–8 słoików 1/2 pinty.
- en: NCHFP Orange Marmalade (UGA 2018): 4 cups sliced orange peel with albedo, 4 cups orange pulp, 1 cup thinly sliced lemon, 6 cups water, 6 cups sugar; about 7–8 half-pints.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f62561821df9): https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/, Orange Marmalade (NCHFP (UGA)); lista składników. Cytat: „4 cups thinly sliced orange peel with albedo (about 2.5 to 3 lbs. oranges as purchased) 4 cups orange pulp, cut up 1 cup thinly sliced lemon (about 1 large lemon as purchased) 6 cups of water 6 cups of sugar Yield: About 7 or 8 half-pint jars”

**ACI-472** (krytyczne; robocze C-22; warianty: lemon-v11, orange-kumquat-v07)

- pl: NCHFP Orange Marmalade: przepis opracowano na pomarańczach navel (słodkich), nie na gorzkich pomarańczach.
- en: NCHFP Orange Marmalade: navel oranges were used for recipe development.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f62561821df9): https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/, Orange Marmalade (NCHFP (UGA)); Notes (3). Cytat: „(3) For recipe development, navel oranges were used.”

**ACI-473** (krytyczne; robocze C-23; warianty: orange-kumquat-v07)

- pl: NCHFP Orange Marmalade, procedura: owoce z wodą gotować do miękkości skórki (ok. 1 godz.), dodać cukier, gotować szybko do punktu żelowania (ok. 45 min).
- en: NCHFP Orange Marmalade: cook fruit with water until peel tender (~1 hour); add sugar and cook rapidly to the jellying point (~45 minutes).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f62561821df9): https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/, Orange Marmalade (NCHFP (UGA)); Procedure 5–6. Cytat: „Bring to a boil and cook over medium heat until peel is tender, about 1 hour. | Cook rapidly to the jellying point, about 45 minutes, stirring occasionally.”

**ACI-474** (krytyczne; robocze C-24; warianty: orange-kumquat-v07)

- pl: NCHFP Orange Marmalade: tylko słoiki 1/2 pinty, wcześniej wysterylizowane; gorącą marmoladę nalać zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni.
- en: NCHFP Orange Marmalade: half-pint jars only, pre-sterilized; fill hot leaving 1/4-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f62561821df9): https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/, Orange Marmalade (NCHFP (UGA)); Procedure 1, 7. Cytat: „Wash and rinse half-pint canning jars; pre-sterilize and keep hot until ready to fill. | Fill hot marmalade into hot pre-sterilized jars, leaving ¼" headspace.”

**ACI-475** (krytyczne; robocze C-25+C-26+C-27; warianty: orange-kumquat-v07)

- pl: NCHFP Orange Marmalade, tabela 1 (kąpiel wodna, hot, tylko słoiki 1/2 pinty, sterylne), 0–1000 stóp: 5 min; 10 min; 15 min.
- en: NCHFP Orange Marmalade, Table 1 (boiling water, hot, half-pints only, pre-sterilized), 0–1000 ft: 5 min; 10 min; 15 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f62561821df9): https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/, Orange Marmalade (NCHFP (UGA)); Table 1. Cytat: „Hot Half-pints 5 min 10 15”

**ACI-476** (krytyczne; robocze C-28; warianty: orange-kumquat-v07)

- pl: NCHFP Orange Marmalade: przy słoikach niesterylizowanych (umytych i gorących) czas rośnie do 10 min (0–1000 stóp), 15 min (1001–6000 stóp), 20 min (powyżej 6000 stóp).
- en: NCHFP Orange Marmalade: with non-presterilized hot jars, process 10 / 15 / 20 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 f62561821df9): https://nchfp.uga.edu/how/make-jam-jelly/marmalades/orange-marmalade/, Orange Marmalade (NCHFP (UGA)); Notes (2). Cytat: „Then the process time is increased and becomes 10 min. (0-1,000 ft), 15 min. (1,001-6,000 ft.) or 20 min. (above 6,000 ft).”

**ACI-477** (krytyczne; robocze C-32; warianty: blueberry-bilberry-v08, peach-nectarine-v08)

- pl: NCHFP, grupa III (zawsze wymaga dodatku kwasu, pektyny lub obu): morele, borówki (blueberries), figi, winogrona Western Concord, guawy, brzoskwinie, gruszki, śliwki włoskie, maliny, truskawki.
- en: NCHFP Group III (always needs added acid, pectin or both): apricots, blueberries, figs, Western Concord grapes, guavas, peaches, pears, Italian plums, raspberries, strawberries.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 7dc16001e9f5): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/jellied-product-ingredients/, Jellied Product Ingredients (NCHFP (UGA)); Pectin and Acid Content of Common Fruits Used to Make Jelly. Cytat: „Group III: Always needs added acid, pectin or both. … Apricots Blueberries Figs Grapes (Western Concord) Guavas Peaches Pears Plums (Italian) Raspberries Strawberries”

**ACI-478** (krytyczne; robocze C-34; warianty: currant-v08)

- pl: NCHFP Blueberry-Currant Jam without Pectin: 1 kwarta borówek bez szypułek i 1 szklanka wody, 2 szklanki porzeczek bez szypułek i 1 szklanka wody, 3 szklanki cukru; ok. 4 słoików 1/2 pinty (gatunek porzeczki nie jest podany).
- en: NCHFP Blueberry-Currant Jam without Pectin: 1 quart blueberries + 1 cup water, 2 cups currants + 1 cup water, 3 cups sugar; about 4 half-pints (currant species not stated).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 e5266ee74cb6): https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-currant-jam-without-pectin/, Blueberry-Currant Jam without Pectin (NCHFP (UGA)); lista składników. Cytat: „1 quart stemmed blueberries 1 cup water 2 cups stemmed currants 1 cup water 3 cups sugar Yield: About 4 half-pint jars”

**ACI-479** (krytyczne; robocze C-35; warianty: currant-v08)

- pl: NCHFP Blueberry-Currant Jam: porzeczki gotować z wodą 10 min i przetrzeć przez sito lub przecierak, połączyć z borówkami, po dodaniu cukru gotować szybko do zgęstnienia (ok. 20 min); gorący dżem do gorących słoików, 1/4 cala wolnej przestrzeni.
- en: NCHFP Blueberry-Currant Jam: cook currants 10 min and press through sieve; combine, add sugar, cook rapidly until thick (~20 min); 1/4-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 e5266ee74cb6): https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-currant-jam-without-pectin/, Blueberry-Currant Jam without Pectin (NCHFP (UGA)); Procedure. Cytat: „In another pan, combine currants and 1 cup water; cook slowly 10 minutes, then press through a sieve or food mill to remove seeds. … Cook rapidly until thick, about 20 minutes, stirring frequently to prevent sticking. Pour hot mixture into hot jars, leaving 1/4-inch headspace.”

**ACI-480** (krytyczne; robocze C-36; warianty: currant-v08)

- pl: NCHFP Blueberry-Currant Jam, tabela 1 (kąpiel wodna, hot, tylko słoiki 1/2 pinty): 5 min (0–1000 stóp), 10 min (1001–6000 stóp), 15 min (powyżej 6000 stóp).
- en: NCHFP Blueberry-Currant Jam, Table 1 (hot, half-pints only): 5 / 10 / 15 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 e5266ee74cb6): https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-currant-jam-without-pectin/, Blueberry-Currant Jam without Pectin (NCHFP (UGA)); Table 1. Cytat: „Hot Half-pints 5 min 10 15”

**ACI-481** (krytyczne; robocze C-37; warianty: apple-v11, currant-v06)

- pl: NCHFP Making Jelly without added Pectin: używać tylko jędrnych owoców naturalnie bogatych w pektynę (3/4 dojrzałych, 1/4 niedojrzałych); obierki i gniazda nasienne gotowane z owocami dodają pektyny do soku.
- en: NCHFP: use only firm fruits naturally high in pectin; using the peels and cores adds pectin to the juice during cooking.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 8a2ce53df5f8): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/making-jelly-without-added-pectin/, Making Jelly without added Pectin (NCHFP (UGA)); wstęp. Cytat: „Use only firm fruits naturally high in pectin. Select a mixture of about 3/4 ripe and 1/4 underripe fruit. … Using the peels and cores adds pectin to the juice during cooking.”

**ACI-482** (krytyczne; robocze C-38; warianty: currant-v06)

- pl: NCHFP Making Jelly without added Pectin: naraz nie więcej niż 6–8 szklanek soku; sok cedzić bez wyciskania (wyciskanie mętni galaretkę); 1/4 cala wolnej przestrzeni; tabela 1 (hot, słoiki 1/2 pinty lub pinty): 5 / 10 / 15 min (0–1000 / 1001–6000 / powyżej 6000 stóp).
- en: NCHFP Jelly without added Pectin: max 6–8 cups juice per batch; do not squeeze the bag; 1/4-inch headspace; Table 1 half-pints or pints 5/10/15 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 8a2ce53df5f8): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/making-jelly-without-added-pectin/, Making Jelly without added Pectin (NCHFP (UGA)); Extracting Juices and Making Jelly; Table 1. Cytat: „Pressing or squeezing the bag or cloth will cause cloudy jelly. Using no more than 6 to 8 cups of extracted fruit juice at a time … leaving 1/4-inch headspace. … Hot Half-pints or pints 5 min 10 15”

**ACI-483** (krytyczne; robocze C-39; warianty: currant-v06)

- pl: NCHFP Making Jelly without added Pectin, tabela 2 (proporcje): podaje tylko jabłka (3/4 szklanki cukru i opcjonalnie 1½ łyżeczki soku z cytryny na szklankę soku), jeżyny, jabłka rajskie (1 szklanka cukru), winogrona i śliwki; porzeczek w tabeli nie ma.
- en: NCHFP Jelly without added Pectin, Table 2 lists only apples, blackberries, crab apples, grapes and plums; currants are not listed.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 8a2ce53df5f8): https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/making-jelly-without-added-pectin/, Making Jelly without added Pectin (NCHFP (UGA)); Table 2. To Extract Juice. Cytat: „Apples 1 20 to 25 3/4 1-1/2 (opt) 4 to 5 Blackberries None or 1/4 5 to 10 3/4 to 1 None 7 to 8 Crab Apples 1 20 to 25 1 None 4 to 5 Grapes None or 1/4 5 to 10 3/4 to 1 None 8 to 9 Plums 1/2 15 to 20 3/4 None 8 to 9”

**ACI-484** (krytyczne; jedno źródło; robocze C-42; warianty: rosehip-rowan-v06)

- pl: NDSU FN1423 Rose Hip Jam (gładki, miksowany): 1 szklanka oczyszczonych owoców (bez nasion), 3/4 szklanki wody, 4 łyżki butelkowanego soku z cytryny, 3 szklanki cukru, 1 opakowanie pektyny w proszku w 3/4 szklanki wody.
- en: NDSU FN1423 Rose Hip Jam (blended smooth): 1 cup prepared rose hips, 3/4 cup water, 4 Tbsp bottled lemon juice, 3 cups sugar, 1 package powdered pectin in 3/4 cup water.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 08cff3a6b6c3): https://ndsu.edu/agriculture/node/2146, FN1423 Jams and Jellies from Native (Wild) Fruits (rev. 2020) (NDSU Extension); Rose Hip Jam. Cytat: „1 cup prepared rose hips ¾ cup water 4 Tablespoons lemon juice, bottled Put the above ingredients in a blender and blend until perfectly smooth. Gradually add 3 cups of sugar”

**ACI-485** (krytyczne; jedno źródło; robocze C-43; warianty: rosehip-rowan-v06)

- pl: NDSU FN1423 Rose Hip Jam NIE jest wekowany: słoiki z nakrętką, przechowywanie w lodówce do 1 miesiąca albo w zamrażarce (inne przepisy w tej samej publikacji mają kąpiel wodną wg tabeli 1).
- en: NDSU FN1423 Rose Hip Jam is not water-bath processed: keep refrigerated up to one month or freeze.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 08cff3a6b6c3): https://ndsu.edu/agriculture/node/2146, FN1423 Jams and Jellies from Native (Wild) Fruits (rev. 2020) (NDSU Extension); Rose Hip Jam. Cytat: „Pour the mixture into small screw-cap jars immediately and seal. This jam may be kept in your refrigerator one month or otherwise stored in the freezer.”

**ACI-486** (krytyczne; robocze C-48; warianty: blueberry-bilberry-v08)

- pl: NCHFP Blueberry-Spice Jam with Pectin: 2½ pinty dojrzałych borówek (blueberries), 1 łyżka soku z cytryny, 1/2 łyżeczki mielonej gałki muszkatołowej lub cynamonu, 5½ szklanki cukru, 3/4 szklanki wody, 1 opakowanie (1¾ oz) pektyny w proszku; ok. 5 słoików 1/2 pinty.
- en: NCHFP Blueberry-Spice Jam with Pectin: 2½ pints blueberries, 1 Tbsp lemon juice, 1/2 tsp nutmeg or cinnamon, 5½ cups sugar, 3/4 cup water, 1 box (1¾ oz) powdered pectin; about 5 half-pints.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 b010a4d5e5b7): https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-spice-jam-with-pectin/, Blueberry-Spice Jam with Pectin (NCHFP (UGA)); lista składników. Cytat: „2-1/2 pints ripe blueberries 1 tbsp lemon juice 1/2 tsp ground nutmeg or cinnamon 5-1/2 cups sugar 3/4 cup water 1 box (1-3/4 oz) powdered pectin Yield: About 5 half-pints”

**ACI-487** (krytyczne; robocze C-49; warianty: blueberry-bilberry-v08)

- pl: NCHFP Blueberry-Spice Jam: owoce z sokiem z cytryny, przyprawą, wodą i pektyną do pełnego wrzenia, dodać cukier, ponownie pełne wrzenie, gotować intensywnie 1 min; nalać do sterylnych słoików, 1/4 cala wolnej przestrzeni.
- en: NCHFP Blueberry-Spice Jam: boil with pectin, add sugar, boil hard 1 minute; fill sterile jars leaving 1/4-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 b010a4d5e5b7): https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-spice-jam-with-pectin/, Blueberry-Spice Jam with Pectin (NCHFP (UGA)); Procedure. Cytat: „Add lemon juice, spice, and water. Stir in the pectin and bring mixture to a full, rolling boil over high heat, stirring frequently. Add the sugar and return to a full rolling boil. Boil hard for 1 minute, stirring constantly. Remove from heat, quickly skim off foam, and fill sterile jars, leaving 1/4-inch headspace.”

**ACI-488** (krytyczne; robocze C-50; warianty: blueberry-bilberry-v08)

- pl: NCHFP Blueberry-Spice Jam, tabela 1 (kąpiel wodna, hot, słoiki 1/2 pinty lub pinty): 5 min (0–1000 stóp), 10 min (1001–6000 stóp), 15 min (powyżej 6000 stóp).
- en: NCHFP Blueberry-Spice Jam, Table 1 (hot, half-pints or pints): 5 / 10 / 15 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 b010a4d5e5b7): https://nchfp.uga.edu/how/make-jam-jelly/jams/blueberry-spice-jam-with-pectin/, Blueberry-Spice Jam with Pectin (NCHFP (UGA)); Table 1. Cytat: „Hot Half-pints or pints 5 min 10 15”

**ACI-489** (krytyczne; robocze C-51; warianty: apple-v11)

- pl: NCHFP Apple Jelly without Pectin: 4 szklanki soku jabłkowego (ok. 3 funty, ok. 1,4 kg, jabłek i 3 szklanki wody), 2 łyżki przecedzonego soku z cytryny (opcjonalnie), 3 szklanki cukru; ok. 4–5 słoików 1/2 pinty.
- en: NCHFP Apple Jelly without Pectin: 4 cups apple juice (about 3 lb apples and 3 cups water), 2 Tbsp strained lemon juice if desired, 3 cups sugar; about 4–5 half-pints.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 45016b7129ca): https://nchfp.uga.edu/how/make-jam-jelly/jellies/apple-jelly-without-pectin/, Apple Jelly without Pectin (NCHFP (UGA)); lista składników. Cytat: „4 cups apple juice (about 3 pounds apples and 3 cups water) 2 tablespoons strained lemon juice, if desired 3 cups sugar Yield: About 4 or 5 half-pint jars”

**ACI-490** (krytyczne; robocze C-52; warianty: apple-v11)

- pl: NCHFP Apple Jelly without Pectin: ok. 1/4 niedojrzałych i 3/4 w pełni dojrzałych kwaśnych jabłek; usunąć szypułki i resztki kwiatów, NIE obierać i NIE wycinać gniazd nasiennych; kroić na małe kawałki, gotować pod przykryciem 20–25 min do miękkości, odcedzić sok.
- en: NCHFP Apple Jelly without Pectin: about 1/4 underripe and 3/4 ripe tart apples; remove stem and blossom ends; do not pare or core; simmer 20–25 minutes; extract juice.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 45016b7129ca): https://nchfp.uga.edu/how/make-jam-jelly/jellies/apple-jelly-without-pectin/, Apple Jelly without Pectin (NCHFP (UGA)); To prepare juice. Cytat: „Select about one-fourth underripe and three-fourths fully ripe tart apples. Sort, wash, and remove stem and blossom ends; do not pare or core. Cut apples into small pieces. Add water, cover, and bring to boil on high heat. Reduce heat and simmer for 20 to 25 minutes, or until apples are soft.”

**ACI-491** (krytyczne; robocze C-53; warianty: apple-v11)

- pl: NCHFP Apple Jelly without Pectin: gotować na dużym ogniu do temperatury 8 °F (ok. 4,4 °C) powyżej temperatury wrzenia wody albo do testu łyżki; gorącą galaretkę od razu do gorących sterylnych słoików, 1/4 cala wolnej przestrzeni.
- en: NCHFP Apple Jelly without Pectin: boil to 8°F above the boiling point of water or until it sheets; fill hot sterile jars leaving 1/4-inch headspace.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 45016b7129ca): https://nchfp.uga.edu/how/make-jam-jelly/jellies/apple-jelly-without-pectin/, Apple Jelly without Pectin (NCHFP (UGA)); To make jelly. Cytat: „Boil over high heat to 8 degrees F. above the boiling point of water, or until jelly mixture sheets from a spoon. … Pour hot jelly immediately into hot, sterile jars, leaving ¼ inch headspace.”

**ACI-492** (krytyczne; robocze C-54; warianty: apple-v11)

- pl: NCHFP Apple Jelly without Pectin, tabela 1 (kąpiel wodna, hot, słoiki 1/2 pinty lub pinty): 5 min (0–1000 stóp), 10 min (1001–6000 stóp), 15 min (powyżej 6000 stóp).
- en: NCHFP Apple Jelly without Pectin, Table 1 (hot, half-pints or pints): 5 / 10 / 15 min.
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 45016b7129ca): https://nchfp.uga.edu/how/make-jam-jelly/jellies/apple-jelly-without-pectin/, Apple Jelly without Pectin (NCHFP (UGA)); Table 1. Cytat: „Hot Half-pints or Pints 5 min 10 15”

**ACI-493** (krytyczne; jedno źródło; robocze C-58; warianty: peach-nectarine-v08)

- pl: OSU SP 50-304, brzoskwinie: sparzyć, obrać, usunąć pestki, rozgnieść; gdy suche, dodać ok. 1/4 tyle płynu co owoców; ugotowane przetrzeć; przepis podstawowy: 2 kwarty przecieru, 4 szklanki cukru, 2 łyżeczki cynamonu (cukru 1/4–1/2 szklanki na szklankę przecieru).
- en: OSU SP 50-304 peaches: dip, peel, pit, crush; ~1/4 as much liquid if dry; basic recipe 2 quarts pulp, 4 cups sugar, 2 tsp cinnamon (1/4–1/2 cup sugar per cup pulp).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ffdecdeaac53): https://extension.oregonstate.edu/food/preservation/fruit-butters-sp-50-304, Fruit Butters SP 50-304 (rev. October 2025) (Oregon State University Extension); Preparing the fruits; Basic fruit butter recipe. Cytat: „Peaches: Dip in boiling water to loosen skins. Peel, pit, and crush. Add a small amount of water or juice to prevent sticking if peaches seem dry. (approximately ¼ as much liquid as peaches.) … 2 quarts pulp 4 cups sugar 2 tsp. ground cinnamon … measure the pulp and add ¼-½ cup sugar to each cup of fruit pulp.”

**ACI-494** (krytyczne; jedno źródło; robocze C-59; warianty: peach-nectarine-v08)

- pl: OSU SP 50-304, wekowanie maseł (ogólne): gorące masło od razu do gorących słoików, 1/4 cala (ok. 0,6 cm) wolnej przestrzeni, 10 min w kąpieli wodnej; dla masła jabłkowego tabela: 1/2 pinty/pinty 5/10/15 min (słoiki sterylne), kwarty 10/15/20 min.
- en: OSU SP 50-304 general processing: 1/4-inch headspace, 10 minutes in a boiling water canner; apple butter table 5/10/15 (half-pints/pints, sterile) and 10/15/20 (quarts).
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 ffdecdeaac53): https://extension.oregonstate.edu/food/preservation/fruit-butters-sp-50-304, Fruit Butters SP 50-304 (rev. October 2025) (Oregon State University Extension); Processing the butter; Table 1 (Apple butter). Cytat: „Pack cooked butters immediately into hot jars leaving ¼ inch headspace. Adjust lids and process in a boiling water canner for 10 minutes.”
- uproszczenie: Ogólna reguła dla maseł; publikacja odsyła też do tabeli masła jabłkowego (które zawiera ocet). Brak tabeli wysokości dla „10 min”; brak osobnego, testowanego przepisu na masło brzoskwiniowe.

**ACI-495** (krytyczne; jedno źródło; robocze C-60; warianty: peach-nectarine-v08)

- pl: Penn State Extension, Fruit Butters: produkty niskokwasowe, np. masło dyniowe, nie mogą być bezpiecznie wekowane; trzymać w lodówce i zużyć w ciągu 4 tygodni; przy słoikach sterylnych część przepisów podaje 5 min, przy czystych 10 min.
- en: Penn State Extension: low-acid products such as pumpkin butter cannot be processed safely; refrigerate and use within four weeks; recipes use 5 min with sterilized jars or 10 min with clean jars.
- źródło (szczebel 3, 2026-11-02, curl+grep, sha12 77aae75d3a47): https://extension.psu.edu/fruit-butters, Fruit Butters (Penn State Extension); Process Fruit Butters…. Cytat: „Some recipes specify filling the heated butter into sterilized jars and processing for 5 minutes. Other recipes use clean jars and process the butter for 10 minutes. … Some products that are low in acid, such as pumpkin butter, cannot be processed safely and should be refrigerated and used within four weeks.”

**ACI-496** (krytyczne; robocze C-61; warianty: peach-nectarine-v08)

- pl: NCHFP Fruit Purées (dotyczy też brzoskwiń; nie dla bananów, fig, gruszek azjatyckich, pomidorów, melonów, papai, persymony, dojrzałego mango, kokosa): przecier na gorąco, 1/4 cala wolnej przestrzeni; kąpiel wodna, pinty lub kwarty: 15 min (0–1000 stóp), 20 min (1001–6000 stóp), 25 min (powyżej 6000 stóp).
- en: NCHFP Fruit Purées: hot pack, 1/4-inch headspace; boiling water, pints or quarts 15/20/25 min (not for bananas, figs, Asian pears, tomatoes, melons, papaya, persimmons, ripe mango, coconut).
- źródło (szczebel 1, 2026-11-02, curl+grep, sha12 b72e2c30ddf5): https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/, Fruit Purées (NCHFP (UGA)); Caution; Procedure; Table 1. Cytat: „Caution:These recommendations should not be used with bananas, dates, figs, Asian pears, tomatoes, cantaloupe and other melons, papaya, persimmons, ripe mango or coconut. … Fill hot into clean jars, leaving 1/4-inch headspace. … Hot Pints or Quarts 15 min 20 25”

## 6. Pytania otwarte

- [DO USTALENIA] peach-nectarine-v04: czy ogólna reguła NCHFP z „Ingredients for Salsa Recipes” (zamiana jednego rodzaju papryki na inny bez zwiększania łącznej ilości, ACI-040) obejmuje Peach Apple Salsa (przepis UGA, nie WSU)? Strona mówi „any recipe”, ale kontekst to przepisy WSU – decyzja redakcyjna/ekspercka (D-027 d).
- [DO USTALENIA] peach-nectarine-v04: skąd USU wzięło „Peach Salsa” z dopiskiem „Source: USDA Complete Guide” – w Guide 3 (2015) brak słowa „peach”; możliwe inne wydanie lub błędne przypisanie. Niepotwierdzone.
- [DO USTALENIA] cucumber-v10: czy redakcja akceptuje, że „konserwowe” = NCHFP Quick Fresh-Pack Dill (bez czosnku/chrzanu)? Jeśli nie – zmiana nazwy.
- [DO USTALENIA] green-cherry-tomato-v03: czy reguła E3 wymaga, by nazwa wymieniała seler, czosnek i koper (wtedy do-researchu z poprawką nazwy)?
- [DO USTALENIA] garlic-v04/v06/v08: czy katalog dopuszcza karty „vinegar-pickling” z przechowywaniem wyłącznie w lodówce (bez wekowania)? Od tego zależy, czy poprawki dają ok-zrodlo.
- [DO USTALENIA] chili-pepper-v04: czy NCHFP Pickled Hot Peppers jest już użyty w chili-pepper-v08 (piri-piri) – rejestr nie ma twierdzeń z tego przepisu, więc nie da się tego sprawdzić z claims.
- [DO USTALENIA] Rejestr nie zawiera jeszcze twierdzeń z konkretnych przepisów NCHFP tej grupy (dill, B&B, gherkin, kosher GT, jalapeño rings, pearl onions, corn relish, peach-apple, tomatillo salsa) – warianty corn-v04 i shallot-pearl-onion-v05 mają ok-zrodlo tylko z ACI-016/017/018; nowe twierdzenia A-xx można do nich podpiąć.
- [DO USTALENIA] PNW 395 „Salsa Recipes for Canning” (WSU/OSU/UI) niedostępne (404) – nie sprawdzono, czy zawiera salsę brzoskwiniową lub pieczoną salsę verde.
- [DO USTALENIA] Czy istnieje aktualna strona NCHFP odpowiadająca archiwalnej „Resources for Home Preserving Pumpkins” (uga.edu/nchfp/tips/fall/pumpkins.html), która wg wyszukiwarki mówi, że pikle/chutney/relish z dyni trzeba traktować jak świeże produkty w lodówce i nie można ich bezpiecznie wekować ani w kąpieli, ani w szybkowarze? Nie pobrano surowego tekstu (TLS) – po potwierdzeniu dynia v03–v11 → nie-publikowac.
- [DO USTALENIA] CDC MMWR 1984;33(13) „Poisoning from Elderberry Juice – California” – 403 z cdc.gov; nie zweryfikowano treści (szczebel 1 dla elderberry-elderflower-v01).
- [DO USTALENIA] UKY FCS3-586 (wg wyszukiwarki: brak przetestowanych przepisów na barszcz) – certyfikat TLS serwera błędny; nie zweryfikowano.
- [DO USTALENIA] UC MFP (ucanr.edu node 134373, Food_Preservation/Pumpkins) i MSU HNI29 Pumpkins – 403/404/blokada bota; wg wyszukiwarki mówią to samo co UGA o piklach z dyni (lodówka/zamrażarka).
- [DO USTALENIA] Ask Extension FAQ 605114 nie podaje nazwiska ani uczelni eksperta (pytanie z Lane County, Oregon) – przyjęto szczebel 3 z zastrzeżeniem.
- [DO USTALENIA] Czy dla chutneyu z dyni (pumpkin-v11) uznać, że rozgotowana dynia = „mashed or pureed” (wtedy szczebel 1 wprost odradza → nie-publikowac)?
- [DO USTALENIA] apple-v08: którą definicję „jabłek prażonych” przyjmuje katalog (mus z kawałkami bez przypraw vs nadzienie z Clear Jel)? Od tego zależy ok-zrodlo.
- [DO USTALENIA] UAF Cooperative Extension (FNH-00114 Wild Roses, FNH-00110 Lingonberries, FNH-00120 i inne): serwer uaf.edu podaje łańcuch TLS z korzeniem „emSign Root TLS CA - G1”, którego nie ma w pakiecie CA proxy. Pobranie było niemożliwe, a obejścia (archiwum) zablokowano. Potrzebna jest zgoda właściciela lub dostęp, żeby sprawdzić przepisy z Alaski na syrop i dżem z dzikiej róży, brusznicę z jabłkiem, porzeczki i jagodę.
- [DO USTALENIA] Rhubarb-Strawberry Jam z pektyną płynną: przepis znany z przedruków WSU i NDSU (za NCHFP 2005 i USDA HG-56). Nie potwierdzono go na obecnym nchfp.uga.edu, gdzie jest tylko galaretka. Czy przedruk szczebla 3 wystarcza do ok-zrodlo?
- [DO USTALENIA] strawberry-v07: decyzja o podziale wariantu (klasyczny i niskosłodzony) i o tym, czy wersja niskosłodzona ma być kartą odsyłającą do ulotki producenta pektyny (szczebel 4).
- [DO USTALENIA] peach-nectarine-v08: czy ogólny schemat maseł OSU SP 50-304 (10 min, bez tabeli wysokości, bez testu dla brzoskwiń) wystarcza do karty? Którą tabelę wysokości stosować? Odesłanie do tabeli masła jabłkowego (z octem) jest niejednoznaczne.
- [DO USTALENIA] chokeberry-seabuckthorn-v07: pełny tekst pracy UNL 2024 (viewcontent.cgi?article=1158&context=foodscidiss, HTTP 403). Czy zawiera dżem z aronii i jabłek oraz czasy wekowania?
- [DO USTALENIA] blueberry-bilberry-v08: brak źródła, które dopuszcza zamianę borówki amerykańskiej na jagodę czarną (V. myrtillus) w przepisach NCHFP.
- [DO USTALENIA] rosehip-rowan-v06: czy dla wersji wekowanej przyjąć ryzyko-wysokie? NDSU przechowuje gładki dżem z dzikiej róży wyłącznie w lodówce lub zamrażarce, a jedyna wersja wekowana (Cape Cod) nie ma kwasu, wolnej przestrzeni ani tabeli wysokości.
- [DO USTALENIA] cranberry-lingonberry-v07: brak testowanej mieszanki brusznicy z gruszką lub jabłkiem. Jeśli UAF też jej nie ma, rozważyć ryzyko-wysokie (gruszka jest w grupie III, zmienia pH i gęstość).
