# Raport OLE (oil-and-fat), 2026-11-01

**Zakres:** 146 wariantów z listy, 65 z nich oznaczonych `inny_klaster`: ACI 17, MLE 14, FER 10, SZY 8, SLO 6, MIE 6, SUS 4. Rejestr ma 50 twierdzeń, wszystkie `curl+grep` i `potwierdzone`. Źródeł jest 18: NCHFP 9 stron, ANSES, Eurosurveillance, Nummer 2011 i Abo 2014 (FPT, recenzowane), UGA C1334, PNW 664, UC ANR 8568, OSU SP 50-645, WSU ×2.

## Statusy
| status | OLE (81) | inny_klaster (65) |
|---|---|---|
| ok-zrodlo | 18 | 2 |
| ryzyko-wysokie | 42 | 10 |
| nie-publikowac | 1 | 1 |
| do-researchu | 20 | 52 |
Trzy pozycje mają `poza_zakresem`: capers-v09, eggplant-v10, beans-soy-v11.

## Reguły grupowe (zastosowane)
- **R1/R2: czosnek i zioła w oleju.** Niezakwaszone: lodówka ≤4 dni w 4,4°C lub niżej albo zamrażarka (NCHFP; OLE-002/003). Zakwaszone wg Idaho/UGA mogą stać w temperaturze pokojowej. Warunki: 3% kwas cytrynowy, 24 h, pH 4,2 lub niższe, proporcje 1:3 dla czosnku i 1:10 dla ziół. Metoda działa tylko dla czosnku, bazylii, oregano i rozmarynu, tylko na czosnku posiekanym (nie całych ząbkach), bez octu i bez soku z cytryny (OLE-010…017).
- **R3: inne warzywa w oleju (pieczone, grillowane, sott'olio).** Brak zwalidowanego procesu domowego (OLE-028). Status `ryzyko-wysokie`, lodówka ≤4 dni albo zamrażarka (OLE-029). Wyjątki `ok-zrodlo`: NCHFP Marinated Peppers i Marinated Whole Mushrooms, czyli olej z octem i sokiem z cytryny, kąpiel wodna 15 i 20 min.
- **R4: pesto i surowe pasty ziołowe.** Lodówka ≤3 dni, dłużej tylko zamrażarka (NCHFP). Chimichurri, salsa verde i chermoulę uznałem za odpowiedniki. Pesto pasteryzowane (broccoli-v08) ma status `ryzyko-wysokie`.
- **R5: suszone dodatki w oleju.** Źródła szczebla 3 są sprzeczne, więc `do-researchu` i lodówka.
- **R6: harissa i pasta curry pod olejem.** `ryzyko-wysokie`, zamrażarka.
- **R7: confit, rillettes, pasztet pod tłuszczem.** `ryzyko-wysokie`, lodówka. Tłuszcz nie jest barierą. ANSES: produkty gotowane, niesterylizowane wymagają łańcucha chłodniczego, a pasztet i terrina są wśród przyczyn jadu kiełbasianego.
- **R8: masła smakowe.** `ryzyko-wysokie`, zamrażarka. Nummer: brak badań nad ziołami w maśle; FDA (1993) ostrzegała przed takimi mieszankami.
- **R12: tapenada, pasty oliwkowe i karczochowe.** `ryzyko-wysokie`. ANSES wymienia tapenadę i oliwki; Eurosurveillance opisuje ognisko z pasty oliwkowej w 2011.
- **Dzikie grzyby w słoikach pod olejem lub tłuszczem** (boletes-v08, chanterelle-milkcap-v08): `nie-publikowac`, bo NCHFP mówi wprost „Do not can wild mushrooms”. Alternatywa: grzyby podsmażone na tłuszczu i zamrożone.

## 5 najważniejszych ustaleń
1. Przetestowane zakwaszanie istnieje tylko dla czosnku, bazylii, oregano i rozmarynu (Abo 2014, PNW 664, UGA C1334). Nie ma go dla papryki, grzybów, bakłażana ani innych warzyw.
2. Granica 4 dni w lodówce jest w NCHFP (szczebel 1), więc CDC nie jest potrzebne. Nummer 2011 rozszerza ją na wszystkie warzywa i zioła w oleju. Najbezpieczniejsze jest mrożenie.
3. USDA ma tylko 3 przetestowane przepisy warzyw z olejem: papryka, pieczarki i sałatka z trzech fasol. Wszystkie są zakwaszone.
4. Konfitowanie i rillettes poza lodówką nie mają żadnego źródła bezpieczeństwa. Klasyczne „przechowywanie pod tłuszczem w spiżarni” to ostrzeżenie, nie przepis.
5. Starsze wytyczne WSU (2004–2005) dawały „do 3 tygodni w lodówce” i „suszone pomidory w temperaturze pokojowej”. Są nieaktualne (OLE-022) i nie wolno ich cytować na kartach.

## Sprzeczności z v0
- ghee „trwałe miesiącami poza lodówką”: brak źródła, status `do-researchu`, lodówka;
- confit „zalane w słoikach tłuszczem” jako przetwór: `ryzyko-wysokie`;
- rydze i porcini „zamykane w słoikach pod tłuszczem”: `nie-publikowac`;
- pesto „pasteryzowane”: brak procesu;
- „pasta z 20% soli i oliwą (baza całoroczna)”: brak źródła, sól nie jest zalecana jako bariera;
- giardiniera, karczochy i bakłażan sott'olio: brak przetestowanego przepisu.

## Strony nieosiągalne / problemy
- anrcatalog.ucanr.edu/pdf/8568.pdf: 403. Użyłem kopii ccfruitandnuts.ucanr.edu (ta sama publikacja 8568).
- extension.umaine.edu: błąd certyfikatu TLS. Nie obchodziłem go.
- extension.colostate.edu 9.340: stara ścieżka PDF zwraca 404, a nowa prowadzi do ogólnej strony.
- edis.ifas.ufl.edu FY487: 410.
- foodsafety.ces.ncsu.edu: PDF zwraca 404.
- Strona Codex FAO: zwraca powłokę JavaScript bez treści.
- Strona NCHFP „How to Safely Infuse Oil” nie ma treści, tylko link do UGA C1334, z którego korzystałem.
- Na stronach nie było żadnych instrukcji ani poleceń.
- Z indeksu usunąłem 8 wierszy, które sam dodałem i które się nie przydały (strony błędów, strony główne, UKY).

## Propozycje do słownika
- `preservationMethod` nie ma wartości „temperatura pokojowa po zakwaszeniu”. Użyłem `cool-storage` dla garden-herbs-v06. Rozważyć `acidified-ambient`.
- Masło orzechowe i pasty orzechowe nie mają rodziny. Użyłem `oil-and-fat`.
