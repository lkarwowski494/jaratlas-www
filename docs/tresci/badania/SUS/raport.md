# SUS (drying, freezing): raport, 2026-11-01

## Liczby
- Wariantów: 173 (wszystkie z listy). Twierdzeń: 60 (wszystkie `potwierdzone`, curl+grep; 68 cytatów sprawdzonych `grep -F`). Źródeł: 24 pliki w `zrodla/`.
- `ok-zrodlo`: 70. `do-researchu`: 103, w tym 60 z `inny_klaster` (OLE 18, ACI 15, MIE 10, SLO 7, SZY 5, MLE 4, NAP 1); poza tym currant-v05 ma `ok-zrodlo` dla części suszonej i `inny_klaster` FER, 5 `poza_zakresem` i 38 własnych bez przepisu.
- `ryzyko-wysokie`: 0. `nie-publikowac`: 0. Nie znalazłem źródła szczebla 1, które wprost odradza któryś wariant suszenia.
- Około 1/3 listy SUS to nie suszenie: przypisanie do klastra łapało słowo „susz” w nazwie grupy v0 (np. „Ocet, olej i susz”), stąd pikle, sałatki, sosy i pasty z `inny_klaster`.

## Najważniejsze ustalenia
1. **Rama rodziny `drying` jest dobrze udokumentowana.** NCHFP (So Easy to Preserve, wyd. 6) + CSU (peer-reviewed, z badaniami Sofos/Kendall) + MSU + Clemson dają: 140°F/60°C (SUS-001), blanszowanie warzyw (SUS-014), obróbkę kwasem owoców zwiększającą redukcję E. coli O157:H7, Salmonella, Listeria (SUS-011), wilgotność końcową 20%/10% (SUS-016/017), kondycjonowanie 7–10 dni (SUS-018), pakowanie po ostygnięciu, trwałość i oznaki zepsucia (SUS-020–024).
2. **Zakazy z twardych źródeł:** NCHFP nie zaleca suszenia warzyw i mięsa na wolnym powietrzu (SUS-003); sita ocynkowane/miedziane/aluminiowe (SUS-008); toksyny grzybów nie znikają przy suszeniu ani gotowaniu (SUS-035); pakowanie próżniowe to nie utrwalanie (SUS-025).
3. **Suszone owoce bzu:** OSU EM 9446 (2024): suszyć można na surowo, ale przed spożyciem trzeba gotować (cyjanogenne glikozydy, SUS-041). To musi być na karcie.
4. **Czarny czosnek to nie susz:** aw spada tylko z 0,97 do 0,93 (PMC8401630, SUS-044), parametry procesu w literaturze są rozrzucone (30–90°C, 10–80 dni, SUS-043). Brak przepisu domowego; `do-researchu`, przechowywanie wstępnie lodówka. Przegląd bezpieczeństwa NCCEH jest zablokowany (403).
5. **Susz w oleju nie jest bezpieczny tylko dlatego, że susz jest suchy:** UGA C1334 (SUS-045) i NCHFP garlic-in-oil (SUS-046). Dotyczy suszonych pomidorów w oliwie, fig w oliwie, fasolki z suszonymi pomidorami (przekazane OLE z tymi twierdzeniami).
6. Skóry owocowe (tklapi, qamar al-din, aam papad, skóra jabłkowa) mają bezpośredni odpowiednik w przepisach NCHFP Fruit Leathers i Mango Leather; trwałość w temp. pokojowej do 1 miesiąca (SUS-028).
7. Pestki dyni: NCHFP ma przepis (suszenie, potem prażenie), więc zostają w zakresie. Prażone migdały i ciecierzyca, mąka z ciecierzycy, cebula smażona, miechunka w czekoladzie: `poza_zakresem`.

## Mrożenie (`freezing`)
Zebrane z NCHFP: 0°F/-18°C (SUS-050), wstępne -10°F (SUS-051), limit ładowania (SUS-052), blanszowanie konieczne i niedoblanszowanie gorsze od braku (SUS-053/054), technika i schładzanie (SUS-055/056), mikrofalówka nieskuteczna (SUS-057), trwałość 8–12 mies. dla owoców i warzyw (SUS-058), bezpieczne, dopóki zamrożone, rozmrażanie (SUS-059/060), grzyby (SUS-061). **Rekomendacja:** rodzina ma sens jako uzupełnienie. NCHFP ma ok. 90 przetestowanych instrukcji mrożenia (warzywa, owoce, mięso, ryby, nabiał), łatwo je dopasować, a mrożenie jest bezpieczną alternatywą dla wariantów bez przepisu (np. półsuszone pomidory, czosnek w oleju, pesto). Karty mrożenia najlepiej jako warianty przy istniejących produktach, nie jako osobny dział.

## Sprzeczności z katalogiem v0 i między źródłami
- v0 „koktajlowe półsuszone” (green-cherry-tomato-v13) sugeruje susz; półsuszone nie spełnia kryterium warzyw (kruche, ok. 10%): lodówka/zamrażarka.
- v0 „czarny czosnek (60°C)” w grupie „susz”: to nie suszenie (aw ok. 0,93).
- v0 „suszone kapelusze kani”, „proszek z opieniek”: ryzyko identyfikacji; opieńki bez źródła.
- MSU ocenia brokuł i rzodkiewki jako „Not recommended” do suszenia (jakość), a CSU/Clemson podają procedurę dla brokuła.
- Siarkowanie: CSU zakazuje spalania siarki, Clemson je opisuje (SUS-009).
- Trwałość suszu warzywnego: MSU dłużej niż NCHFP/Clemson (SUS-021). Kondycjonowanie: CSU 4–10 dni, NCHFP 7–10 dni.
- Przeliczenia °F→°C i jednostek zrobiłem sam; oznaczone w `uproszczenie`.

## Strony nieosiągalne / problemy
- ncceh.ca (czarny czosnek): 403 dla curl i WebFetch.
- anrcatalog.ucanr.edu/pdf/8267.pdf (oliwki): 403.
- catalog.extension.oregonstate.edu/pnw397: błąd certyfikatu TLS (self-signed w łańcuchu); strona opisu na extension.oregonstate.edu działa, PDF jest na verso.uidaho.edu (nie pobrałem).
- extension.umn.edu i extension.psu.edu (strony suszenia): 404 pod sprawdzonymi adresami.
- ask2.extension.org: proxy odrzuca połączenie.
- Nie znalazłem instrukcji wstrzykniętych w treść stron.
- Plik `zrodla/indeks.tsv` jest wspólny i dopisują do niego inne klastry; moje wpisy dodawałem tylko przez `>>`, bez duplikatów sha12.
