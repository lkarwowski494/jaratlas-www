# C3: audyt spójności kart en/pl (snapshot 403d18a, 2026-11-02)

Rola 07-jakosc, tryb AUDYT (raport tylko do odczytu; kod, treści i katalog bez zmian). Jeden przebieg na snapshot `403d18a` (gałąź `claude/jaratlas-c3-audyt`). Zasada bez pętli: repo trening, `CLAUDE.md` linie 96–97; ocena realności: repo trening, `CLAUDE.md` linie 102–105. Naprawy P1 sprawdza test odtwarzający (sekcja 5), nie kolejny audyt.

## 0. Zakres i metoda

- Karty: `docs/tresci/karty/{en,pl}/warianty/*.json` (źródło ze znacznikami `[T:ID]`) i ich pochodne `site/tresci/{en,pl}/warianty/*.json`. Stan: **89 wariantów, 178 kart** (51 kąpiel wodna, 35 mrożenie, 2 lodówka, 1 karta-ostrzeżenie). Wszystkie mają `publication: ukryta`, więc żaden użytkownik ich dziś nie widzi. Realność oceniam dla stanu po publikacji.
- Rejestr `docs/tresci/rejestr.json`, katalog `catalog/catalog-seed.json`, szablony `site/szablony.mjs`, `site/plan.mjs`, `site/kontrole.mjs`.
- Skrypty audytu leżą w scratchpadzie sesji (nie w repo): a1 (struktura en↔pl, znaczniki, rejestr, liczby, requiredWarnings), a2 (rozkłady wartości między kartami, grupy po znacznikach), cyt.py (curl + normalizacja + wyszukanie cytatu), symulacja buildu z dwiema kartami odkrytymi.
- Środowisko: Linux, Node 22, sieć przez proxy (curl działa), bez przeglądarki do zrzutów (niepotrzebna).

## 1. Wynik zbiorczy

| Kontrola | Wynik |
|---|---|
| (1) Spójność twierdzeń między kartami | wolna przestrzeń, granice wysokości (1000→300, 3000→900, 6000→1800 m), pint 473 / quart 946 / cup 237 ml, 95 °F (35 °C), 0 °F (−18 °C), 8–12 mies. w zamrażarce, „bez wolnej przestrzeni” (6 kart, zawężone do woreczków i szerokich pojemników): **spójne**. Ocet: 7 kart spójnych, 1 słabsza wersja (C3-04). **Luka: 24 z 51 kart kąpieli wodnej bez bloku po wekowaniu (C3-01, C3-02).** |
| (2) en↔pl | 89/89 par: ta sama struktura (sekcje, akapity, ostrzeżenia), identyczne znaczniki `[T:]` zdanie po zdaniu, identyczne liczby w każdym zdaniu (po ujednoliceniu „half-pint” = „1/2 pinty”). 0 pominiętych zdań. |
| (3) D-027 (c) i reklamy | Szablon wstawia `<aside data-uwaga="D-027c">` na każdej stronie wariantu (`site/szablony.mjs:40`), produktu i rodziny. Symulacja buildu z odkrytymi `strawberry-v14` i `white-cabbage-v13` (zastępcze teksty UI): uwaga D-027 (c) na 4/4 stronach wariantów, sekcja ostrzeżeń na karcie-ostrzeżeniu; kod reklam w `site/` i w wyniku: 0 trafień. |
| (4) requiredWarnings | 3 karty mają je w katalogu (`white-cabbage-v13` SUS-035, `apricot-v08` E3-002, `bell-pepper-v09` OLE-002): obecne w en i pl. Odwrotnie: `apricot-v06` ma ostrzeżenie ACI-308, którego katalog nie wymaga (C3-03). |
| (5) Cytaty | 454 ID rejestru użyte w kartach, 379 krytycznych. Każde zdanie ma znacznik (2 × `[T:-]` bez liczb, konwencja z `tools/kontrole-tresci.mjs:9`); 0 ID spoza rejestru; 0 o statusie innym niż potwierdzone; 0 krytycznych bez adresu i cytatu. **Próbka losowa (ziarno 403): 22 cytaty z 22 różnych adresów, 22/22 występuje dosłownie u źródła** (tabela w sekcji 4). Czasy w 21 zdaniach kart wobec tabel z cytatu: 21/21 zgodne. |

Znaleziska: **P1: 2** (oba realne), **P2: 7** (realne: 3, brzegowe: 3, teoretyczne: 1).

| ID | Poziom | Realność | Tytuł |
|---|---|---|---|
| 07-jakosc-C3-01 | P1 | realny | 24 karty kąpieli wodnej nie mówią, jak sprawdzić zamknięcie słoika i co zrobić z niezamkniętym |
| 07-jakosc-C3-02 | P1 | realny | 14 z tych kart nie ma też oznak zepsucia (SLO-190, SLO-191), a 15 reguły pokrywek dwuczęściowych (SLO-223) |
| 07-jakosc-C3-03 | P2 | brzegowy | Ostrzeżenie ACI-308 (morele, pH do 4,80) w `apricot-v06` bez `requiredWarnings`: jego usunięcie nie zatrzyma buildu |
| 07-jakosc-C3-04 | P2 | brzegowy | `apple-v10`: słabsze brzmienie reguły octu niż w 7 pozostałych kartach |
| 07-jakosc-C3-05 | P2 | brzegowy | `tomato-v08`–`v10`: brak progu pH 4,6 w „Why acid is needed” (zaległość z p3) |
| 07-jakosc-C3-06 | P2 | realny | Niejednolita odmiana miar w pl (pint/pinta, 4 galony, 1/2 galon / pół galona) |
| 07-jakosc-C3-07 | P2 | realny | Liczby w dokumentach (91 wariantów / 182 karty / 36 mrożenia, main = d9a1dba) niezgodne z repo (89 / 178 / 35, main = 403d18a) |
| 07-jakosc-C3-08 | P2 | realny | Różny zapis tej samej temperatury (40 °F (4.4 °C) vs (about 4 °C); 60 °F (16 °C) vs (about 16 °C)) |
| 07-jakosc-C3-09 | P2 | teoretyczny | Kontrola R3 pomija język bez tekstów UI; dziś zabezpiecza ją wcześniejszy błąd w `site/generuj.mjs:23` |

## 2. Szczegóły: P1 (lista dla toru A)

### 07-jakosc-C3-01 · 24 karty kąpieli wodnej nie mówią, jak sprawdzić zamknięcie słoika i co zrobić z niezamkniętym
- Pozycja listy kontrolnej: spójność treści krytycznych między kartami (C3 pkt 1)
- Poziom: P1 · Realność: realny (każdy czytelnik tych 24 kart po publikacji) · Pewność: wysoka · Rodzaj: M
- Dowód: wyszukanie w `site/tresci/en/warianty/*.json` dla 51 kart `water-bath`. Brakuje: test zamknięcia (`springs up|concave|press the middle`), niezamknięty słoik → lodówka, przechowywanie ≤ 95 °F (35 °C), zakaz próbowania (`Do not taste`). Dotyczy kart: apple-v09, apricot-v06, apricot-v08, beetroot-v06, bell-pepper-v01, bell-pepper-v09, chili-pepper-v13, corn-v09, garden-herbs-v12, grapes-v06, peach-nectarine-v06, peach-nectarine-v07, plum-v13, plum-v14, raspberry-blackberry-v08, sour-cherry-v08, strawberry-v08, tomato-v08, tomato-v09, tomato-v10, tomato-v11, tomato-v13, zucchini-v05, zucchini-v08. Pozostałe 27 kart ma ten blok (wzór: `site/tresci/en/warianty/strawberry-v14.json`, sekcja „Cooling and storing”: SLO-196, SLO-212, SLO-223, SLO-197, SLO-198; sekcja „When to throw it out”: SLO-190, SLO-191; w kartach z raw pack dodatkowo SLO-210).
- Mechanizm: wzór bloku powstał w p10–p13. Do starszych kart dopisano go wybiórczo: p10 dodał 4 karty i 7 starszych dżemów tylko zdaniem SLO-181 (`docs/tresci/E3-karty-p10-2026-11-02.md:72`), p12 dodał 5 + 10 starszych kart (`docs/tresci/E3-karty-p12-2026-11-02.md:16`, `docs/tresci/E3-karty-p12-2026-11-02.md:79`). Lista pozostałych 24 nie trafiła do żadnego backlogu.
- Powraca: tak, ta sama luka L1 z p10 (`docs/tresci/E3-karty-p10-2026-11-02.md:142`) → trwała kontrola: test w sekcji 5.
- Wzorzec lub źródło: NCHFP Cooling Jars i Storing Home Canned Foods (cytaty już w rejestrze pod SLO-196–198, SLO-210, SLO-212; odczyty w rejestrze).
- Kroki: czytelnik karty pomidorów (np. `tomato-v09`) kończy na czasie wekowania. Nie wie, że słoik z płaską lub wypukłą pokrywką trzeba trzymać w lodówce i zjeść w kilka dni ani że nie wolno przechowywać powyżej 35 °C.
- Opcje: (a) dopisać do 24 kart sekcję „Cooling and storing” / „Studzenie i przechowywanie” ze wzoru strawberry-v14 (te same ID rejestru, zdanie raw pack tam, gdzie karta ma raw pack). Koszt: 24 × 2 pliki, weryfikacja zastępcza jak w p12. Daje pełną spójność. (b) jedna wspólna strona „po wekowaniu” z odnośnikiem z każdej karty. Mniej tekstu, ale zmienia szablon (ścieżka wrażliwa, rola 04) i wymaga kliknięcia przy treści bezpieczeństwa. **Rekomendacja: (a)**, wariant ostrożniejszy: treść bezpieczeństwa na samej karcie.
- Zadanie dla toru A (rola 06, karty; pliki źródłowe, potem `node tools/karty-tresci.mjs`): w każdej z 24 kart w `docs/tresci/karty/{en,pl}/warianty/<id>.json` dodać sekcję po ostatniej sekcji wekowania. Ostatni nagłówek, przy którym wstawić: apple-v09 l.32, apricot-v08 l.36, beetroot-v06 l.55, bell-pepper-v01 l.43, bell-pepper-v09 l.54, peach-nectarine-v06 l.42, plum-v13 l.29, tomato-v08 l.39, tomato-v09 l.23, tomato-v10 l.40, tomato-v11 l.38, tomato-v13 l.40, zucchini-v05 l.39, zucchini-v08 l.34 (sekcja „Processing” / „Filling and processing”; wstawić po niej). W kartach z istniejącą sekcją „Storing” albo „When to throw it out” (apricot-v06 l.55, chili-pepper-v13 l.64, garden-herbs-v12 l.61, corn-v09 l.58, grapes-v06 l.65, peach-nectarine-v07 l.58, plum-v14 l.60, raspberry-blackberry-v08 l.68, sour-cherry-v08 l.55, strawberry-v08 l.59) wstawić blok studzenia i zamknięcia przed nimi. Numery linii są takie same w en i pl.
- Test akceptacyjny: sekcja 5, T1.
- Status: otwarte

### 07-jakosc-C3-02 · 14 kart nie ma oznak zepsucia słoika, a 15 reguły pokrywek dwuczęściowych (SLO-223)
- Pozycja listy kontrolnej: C3 pkt 1 · Poziom: P1 · Realność: realny · Pewność: wysoka · Rodzaj: M
- Dowód: tym samym wyszukaniem brak `spurting|mould|mold` oraz `two-piece` w: apple-v09, apricot-v08, beetroot-v06, bell-pepper-v01, bell-pepper-v09, peach-nectarine-v06, plum-v13, tomato-v08, tomato-v09, tomato-v10, tomato-v11, tomato-v13, zucchini-v05, zucchini-v08 (oznak zepsucia brak w tych 14; reguły dwuczęściowych pokrywek brak w tych 14 i dodatkowo w chili-pepper-v13, razem 15). p13 dopisał SLO-223 do „20 starszych kart” (`docs/tresci/E3-karty-p13-2026-11-02.md:34`); te nie były wśród nich.
- Mechanizm: jak C3-01. Karty pomidorów, papryki i cukinii (produkty graniczne lub niskokwasowe, zakwaszane) nie mają sekcji „When to throw it out”. To grupa, w której zepsucie ma najcięższe skutki.
- Opcje: (a) dopisać „When to throw it out” / „Kiedy wyrzucić” (SLO-190, SLO-191) i zdania SLO-223 ze wzoru strawberry-v14 razem z C3-01 (jedna zmiana na kartę); (b) tylko oznaki zepsucia, bez reguły pokrywek. Pozostaje wtedy niespójność z 36 kartami kąpieli wodnej, które regułę mają. **Rekomendacja: (a)**.
- Zadanie dla toru A: w tych samych plikach i miejscach co C3-01 dodać sekcję „When to throw it out” (SLO-190, SLO-191 według wzoru) i dwa zdania reguły pokrywek (SLO-223) w sekcji studzenia. W chili-pepper-v13 tylko SLO-223.
- Test akceptacyjny: sekcja 5, T1 (te same znaczniki).
- Status: otwarte

## 3. Szczegóły: P2 (backlog)

- **C3-03 (brzegowy):** `apricot-v06` ma ostrzeżenie ACI-308 (`docs/tresci/karty/en/warianty/apricot-v06.json:4`), ale wpis katalogu `catalog/catalog-seed.json:29712` nie ma `requiredWarnings`. Kontrola `site/plan.mjs:60` wymaga tylko ostrzeżeń z katalogu, więc usunięcie ACI-308 z karty przejdzie build. Analogiczny `apricot-v08` ma E3-002 w katalogu. Opcje: (a) dopisać `requiredWarnings: ["ACI-308"]` (ścieżka wrażliwa, przegląd D-043; tania kontrola); (b) zostawić. Rekomendacja: (a), tania naprawa przy bezpieczeństwie żywności (repo trening, `CLAUDE.md` linie 103–104: brzegowy → naprawa, jeśli tania).
- **C3-04 (brzegowy):** zdanie w `docs/tresci/karty/en/warianty/apple-v10.json:14` każe użyć octu 5% albo 6% i zakazuje tylko rozcieńczania octu 10% (cytat: „do not dilute 10% vinegar with water to make 5%”), a 7 kart (ACI-211) mówi „do not use 10% vinegar and do not dilute it”. Bezpieczeństwo nie cierpi (rozcieńczanie jest zakazane w obu), ale brzmienie nie jest spójne. Rekomendacja: brzmienie z 7 kart.
- **C3-05 (brzegowy):** `tomato-v08`, `tomato-v09`, `tomato-v10`: w sekcji „Why acid is needed” (`docs/tresci/karty/en/warianty/tomato-v09.json:7`) brak progu pH 4,6, który mają `tomato-v11` i `tomato-v13`. Zaległość z p3 (`docs/tresci/E3-karty-p3-2026-11-02.md:32`). Nakaz zakwaszenia jest obecny, więc instrukcja jest kompletna.
- **C3-06 (realny, szlif):** pl: forma „pinta” (np. `docs/tresci/karty/pl/warianty/apricot-v06.json:51`, cytat: „pinta to ok. 473 ml”) obok nieodmiennego „pint” w strawberry-v14, „garnka 4 galony” w `tomato-v13` (ketchup), „1/2 galon” (45×) obok „pół galona” (2×). Liczby bez zmian. Do roli 09 (leksykon z 747d2aa) i 06.
- **C3-07 (realny, dokumenty):** `CLAUDE.md:5` (91 wariantów, 36 mrożenia, main = d9a1dba) i `docs/STAN-SESJI.md:9` (91 wariantów, 182 karty) wobec repo: 89 wariantów, 178 kart, 35 mrożenia, main = 403d18a. Na cb038d0 (p20) było również 89 kart en, więc to błąd sumowania w p20, nie utrata kart. Rekomendacja: poprawić w następnym commicie roli 06; dopisać do `tools/karty-tresci.mjs --sprawdz` wypisywanie liczby kart.
- **C3-08 (realny, szlif):** `docs/tresci/karty/en/warianty/bell-pepper-v09.json:7` ma „40 °F (4.4 °C)”, 150 innych miejsc „40 °F (about 4 °C)”. Tak samo „60 °F (16 °C)” (1×) i „(about 16 °C)” (20×). Wartości zgodne.
- **C3-09 (teoretyczny):** kontrola w `site/kontrole.mjs:37` sprawdza pustą uwagę D-027 (c) tylko wtedy, gdy `ui[lang]` istnieje. Dziś `site/teksty/` nie istnieje, a build kończy się kodem 1 wcześniej, w `site/generuj.mjs:23` (symulacja wypisała: BŁĄD en: brak tekstów interfejsu), więc publikacja bez uwagi jest niemożliwa. Notatka jednolinijkowa; teksty UI dostarcza rola 04.

## 4. Cytaty sprawdzone u źródła (curl, 2026-11-02)

Metoda: `curl -sSL`, HTML bez znaczników, PDF przez `pdftotext -layout`. Normalizacja: encje, cudzysłowy proste i drukarskie, myślniki, białe znaki, wielkość liter. Potem wyszukanie podciągu. 22/22 występuje dosłownie.

| ID | Adres | Wynik |
|---|---|---|
| SLO-217 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/ | dosłownie |
| ACI-273 | nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/ | dosłownie |
| ACI-015 | nchfp.uga.edu/how/can/general-information/selecting-the-correct-processing-time/ | dosłownie |
| SZY-026 | extension.oregonstate.edu/es/catalog/sp-50-447-preserving-summer-squash | dosłownie |
| ACI-250 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/ | dosłownie |
| ACI-263 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/zucchini-pineapple/ | dosłownie |
| E3-002 | nchfp.uga.edu/how/freeze/fruits/freezing-apricots/ | dosłownie |
| ACI-072 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/ | dosłownie |
| SLO-151 | nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/ | dosłownie |
| SLO-158 | nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/ | dosłownie |
| ACI-047 | nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-acidification-directions/ | dosłownie |
| ACI-049 | nchfp.uga.edu/how/can/how-do-i-can-tomatoes/canning-tomatoes-introduction/ | dosłownie |
| ACI-295 | nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/ | dosłownie |
| ACI-117 | riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf | dosłownie |
| SLO-227 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter-reduced-sugar/ | dosłownie |
| SLO-219 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/ | dosłownie |
| ACI-226 | nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/ | dosłownie |
| SLO-126 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/ | dosłownie |
| SLO-171 | nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/ | dosłownie |
| SUS-050 | nchfp.uga.edu/how/freeze/freeze-general-information/freezing-pointers/ | dosłownie |
| SLO-035 | www.fda.gov/media/83271/download | dosłownie |
| SLO-233 | nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberry-sauce/ | dosłownie |

Uzupełnienie: dla 10 z tych ID (tabele czasów) każda liczba minut w zdaniach kart z tym znacznikiem występuje w cytacie: 21/21 zdań. To test przynależności, nie pozycji w tabeli. Pozycje sprawdziła ręcznie E3 w partiach.

## 5. Testy odtwarzające dla napraw P1 (do napisania przez tor A przed poprawką)

- **T1 (C3-01, C3-02):** w `tests/` test: dla każdego wariantu `preservationMethod: water-bath` z kartą w `docs/tresci/karty/{en,pl}` karta zawiera znaczniki SLO-196, SLO-197, SLO-198, SLO-212, SLO-223, SLO-190 i SLO-191 (wzór strawberry-v14). Dziś czerwony na 24 kartach (z właściwego powodu), po naprawie zielony. Wyjątek tylko z ID decyzji w teście.
- **T2 (C3-03, jeśli przyjęte):** test: każda karta z niepustą listą `ostrzezenia` ma te claimy w `requiredWarnings` katalogu. Dziś czerwony na `apricot-v06`.

## 6. Decyzje (decyzja Claude, do weta; wpis `2026-11-02-jaratlas-07-c3-audyt`)

1. Brak bloku zamknięcia, przechowywania i zepsucia w 24 kartach = **P1**. Analogia częściowa: repo trening, `CLAUDE.md` linie 93–94 zalicza do blokujących błędne twierdzenia merytoryczne, a tu jest pominięcie treści bezpieczeństwa. Przyjęty wariant ostrożniejszy (bezpieczeństwo żywności).
2. ACI-308 bez `requiredWarnings` = P2 brzegowy, z zaleceniem taniej naprawy razem z P1 (repo trening, `CLAUDE.md` linie 103–104).
3. Okno D-051: `get_session` zwraca `used_tokens: 0` (pole nieaktualizowane). Przyjęto własne szacowanie zużycia kontekstu (około 10–15% z 1M), poniżej progu 30%.

## 7. Czego nie sprawdzono

- Pozycji każdej liczby w tabelach źródeł dla wszystkich 89 kart (to zakres E3 partii; tu próbka 22 cytatów i 21 zdań).
- Wyglądu stron (rola 04) ani tekstów UI (brak `site/teksty/`).
- Kart innych języków niż en i pl (fala 1 ma tylko je).
