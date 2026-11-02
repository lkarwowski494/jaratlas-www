# Pakiet dla eksperta: treści krytyczne JarAtlas (2026-11-02)

Dla: technolog żywności, przegląd przed pierwszą publikacją (D-027 d). Przygotował: rola 06-tresci (Claude), tor B3. Wersja: rejestr `docs/tresci/rejestr.json` sha256/12 `69a05a034640`, karty z `main` `4c02e8d`. Plik maszynowy z tymi samymi punktami: `docs/tresci/pakiet-ekspert-2026-11-02.json`.

## Jak czytać (ok. 1–2 godziny)

JarAtlas to statyczna strona z kartami domowego przetwórstwa (wekowanie w kąpieli wodnej, kiszenie, mrożenie), na razie po polsku i angielsku, oparta głównie na NCHFP/USDA. Żadna strona nie jest jeszcze opublikowana. Każde zdanie karty ma znacznik twierdzenia `[T:ID]`; każde twierdzenie ma dosłowny cytat źródła, adres i datę odczytu. Do tej pory cytaty sprawdzała tylko weryfikacja zastępcza (subagent: cytat jest w surowym tekście źródła, zdanie nie mówi więcej niż źródło). Ekspert ocenia to, czego ta weryfikacja nie umie: czy twierdzenie jest merytorycznie poprawne i bezpieczne dla czytelnika w Europie, i czy nasze reguły ostrożności mają sens.

Proponowana kolejność:

1. **Część 3, pytania wprost (ok. 30 min):** 18 punktów spornych, każdy z opcjami i naszą rekomendacją.
2. **Część 2, reguły JarAtlas (ok. 20 min):** 48 twierdzeń z rejestru i 14 reguł zapisanych w decyzjach, gdzie przyjęliśmy regułę ostrożniejszą od źródła albo bez źródła.
3. **Część 1, lista twierdzeń (ok. 30–60 min):** 379 twierdzeń krytycznych użytych w kartach, w grupach od największego ryzyka. Grupę G1 (kwasowość, jad kiełbasiany) proszę czytać w całości; w grupach G2–G6 wystarczy przejrzeć i zaznaczyć tylko punkty z uwagami, a potem zatwierdzić grupę zbiorczo.

**Formularz:** przy każdym punkcie zaznacz jedno pole: „zatwierdzam”, „poprawka” (wpisz poprawne brzmienie, liczbę albo źródło) albo „odrzucam” (twierdzenie ma zniknąć z kart). Brak zaznaczenia = punkt nieoceniony, nie „zatwierdzony”. Można też odpowiedzieć w pliku JSON (pola `odpowiedz`: `zatwierdzam` | `poprawka` | `odrzucam`, `poprawka`, `uwagi`).

**Zakres:** twierdzenia krytyczne (`krytyczne: true`) użyte w kartach `docs/tresci/karty/{pl,en}/warianty/` (86 kart pl ze znacznikami, te same ID w kartach en). Rejestr ma więcej twierdzeń krytycznych (947), ale pozostałe nie trafiają na stronę i nie są tu pokazane; wejdą do kolejnego pakietu, gdy pojawią się w kartach. Twierdzenia niekrytyczne (opis, ilości bez wpływu na bezpieczeństwo) są poza pakietem.

**Odnośniki:** `plik.md:linia` wskazuje zdanie w `docs/tresci/teksty/pl/warianty/` (tekst polski karty ze znacznikami). Decyzje projektu mają identyfikatory `RRRR-MM-DD-jaratlas-…` (tablica decyzji właściciela). Przeliczenia jednostek (°F→°C, stopy→m, cale→cm) to rachunek JarAtlas, nie zdanie źródła; przy każdym jest kierunek zaokrąglenia.

**Skróty:** NCHFP = National Center for Home Food Preservation (USDA, University of Georgia); UC = University of California (Master Food Preservers); OSU = Oregon State University; PSU = Penn State Extension; szczebel 1 = urzędowe (NCHFP/USDA, FDA, CFR), 2 = recenzowane, 3 = extension services i instytuty.

## Podsumowanie

| Część | Punkty |
|---|---|
| 1 · G1 Kwasowość, zakwaszanie, żywność niskokwasowa, olej (ryzyko jadu kiełbasianego) | 99 |
| 1 · G2 Obróbka cieplna: czasy, wysokość n.p.m., temperatury, sterylizacja słoików, wolna przestrzeń, zamknięcie | 206 |
| 1 · G3 Fermentacja (kiszenie): sól, temperatura, kożuch i pleśń | 21 |
| 1 · G4 Przechowywanie, oznaki zepsucia, po otwarciu, kiedy wyrzucić | 20 |
| 1 · G5 Mrożenie: blanszowanie, pakowanie, rozmrażanie, awaria zamrażarki | 16 |
| 1 · G6 Pozostałe: zakres przepisu, surowiec, ilości, miary | 17 |
| 2 · Reguły JarAtlas z rejestru | 48 |
| 2 · Reguły JarAtlas z decyzji | 14 |
| 3 · Pytania wprost | 18 |

## Część 1. Twierdzenia krytyczne w kartach, według ryzyka

### G1. Kwasowość, zakwaszanie, żywność niskokwasowa, olej (ryzyko jadu kiełbasianego) (99)

#### ACI-001 · szczebel 1

- **Twierdzenie:** Żywność kwaśna (acid foods, USA) to żywność o naturalnym pH 4,6 lub niższym.
- **Źródło (szczebel 1):** „Acid foods means foods that have a natural pH of 4.6 or below.” — 21 CFR 114.3 Definitions (eCFR, stan na 2026-10-29), USA, <https://www.ecfr.gov/api/versioner/v1/full/2026-10-29/title-21.xml?part=114&section=114.3>, odczyt 2026-11-01, curl+grep
- **Karty (3):** `apricot-v06.md:7`, `apricot-v08.md:7`, `bell-pepper-v09.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-006 · szczebel 1

- **Twierdzenie:** Większość mieszanin żywności niskokwasowej i kwaśnej ma pH powyżej 4,6, chyba że przepis zawiera dość soku z cytryny, kwasu cytrynowego lub octu.
- **Źródło (szczebel 1):** „and all fresh vegetables except for most tomatoes. Most mixtures of low-acid and acid foods also” — USDA Complete Guide to Home Canning (2015), Guide 1: Principles of Home Canning, <https://nchfp.uga.edu/papers/guide/GUIDE01_HomeCan_rev0715.pdf>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „have pH values above 4.6 unless their recipes include enough lemon juice, citric acid, or vinegar” — USDA Complete Guide to Home Canning (2015), Guide 1: Principles of Home Canning, <https://nchfp.uga.edu/papers/guide/GUIDE01_HomeCan_rev0715.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `tomato-v11.md:17`, `tomato-v13.md:13`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-008 · szczebel 1

- **Twierdzenie:** Niektóre pomidory i figi mają pH nieco powyżej 4,6; jeśli mają być wekowane jako żywność kwaśna, trzeba je zakwasić do pH 4,6 lub niższego sokiem z cytryny lub kwasem cytrynowym; prawidłowo zakwaszone można pasteryzować w kąpieli wodnej (wrzątku).
- **Źródło (szczebel 1):** „slightly above 4.6. Figs also have pH values slightly above 4.6. Therefore, if they are to be canned” — USDA Complete Guide to Home Canning (2015), Guide 1: Principles of Home Canning, <https://nchfp.uga.edu/papers/guide/GUIDE01_HomeCan_rev0715.pdf>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „as acid foods, these products must be acidified to a pH of 4.6 or lower with lemon juice or citric” — USDA Complete Guide to Home Canning (2015), Guide 1: Principles of Home Canning, <https://nchfp.uga.edu/papers/guide/GUIDE01_HomeCan_rev0715.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `tomato-v11.md:7`, `tomato-v11.md:9`, `tomato-v13.md:7`, `tomato-v13.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-015 · szczebel 1

- **Twierdzenie:** Żywność kwaśna w kąpieli wodnej może się zepsuć, jeśli powyżej 1000 stóp n.p.m. nie wydłuży się czasu, skróci się czas lub schłodzi słoiki w zimnej wodzie.
- **Źródło (szczebel 1):** „The food may spoil if you fail to add process time for lower boiling-water temperatures at elevations above 1,000 feet, process for fewer minutes than specified, or cool jars in cold water.” — NCHFP (nchfp.uga.edu): Selecting the Correct Processing Time, <https://nchfp.uga.edu/how/can/general-information/selecting-the-correct-processing-time/>, odczyt 2026-11-01, curl+grep
- **Karty (53):** `apple-v09.md:35`, `apple-v09.md:45`, `apple-v10.md:53`, `apple-v10.md:61` i 98 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-016 · szczebel 1

- **Twierdzenie:** Nie wolno zmieniać proporcji octu, warzyw/owoców i wody w przepisie ani używać octu o nieznanej kwasowości; używać tylko przepisów o przetestowanych proporcjach.
- **Źródło (szczebel 1):** „Do not alter vinegar, food, or water proportions in a recipe or use a vinegar with unknown acidity.” — NCHFP (nchfp.uga.edu): General Information on Pickling, <https://nchfp.uga.edu/how/pickle/general-information-pickling/general-information-on-pickling/>, odczyt 2026-11-01, curl+grep
- **Karty (4):** `beetroot-v06.md:13`, `bell-pepper-v01.md:9`, `tomato-v13.md:13`, `zucchini-v05.md:15`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-017 · szczebel 1

- **Twierdzenie:** W całym produkcie musi być minimalny, równomierny poziom kwasu, aby zapobiec rozwojowi bakterii jadu kiełbasianego.
- **Źródło (szczebel 1):** „There must be a minimum, uniform level of acid throughout the mixed product to prevent the growth of botulinum bacteria.” — NCHFP (nchfp.uga.edu): General Information on Pickling, <https://nchfp.uga.edu/how/pickle/general-information-pickling/general-information-on-pickling/>, odczyt 2026-11-01, curl+grep
- **Karty (5):** `beetroot-v06.md:11`, `bell-pepper-v01.md:7`, `bell-pepper-v09.md:15`, `zucchini-v05.md:13` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-018 · szczebel 1

- **Twierdzenie:** Do pikli zalecany jest biały ocet destylowany i ocet jabłkowy o kwasowości 5% (50 grain).
- **Źródło (szczebel 1):** „White distilled and cider vinegars of 5 percent acidity (50 grain) are recommended.” — NCHFP (nchfp.uga.edu): General Information on Pickling, <https://nchfp.uga.edu/how/pickle/general-information-pickling/general-information-on-pickling/>, odczyt 2026-11-01, curl+grep
- **Karty (7):** `beetroot-v06.md:15`, `beetroot-v06.md:19`, `bell-pepper-v01.md:11`, `bell-pepper-v01.md:15` i 9 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-026 · szczebel 3

- **Twierdzenie:** Bakłażan, dynia letnia (cukinia, patison) i melony są żywnością niskokwasową o pH powyżej 4,6.
- **Źródło (szczebel 3):** „Eggplant, summer squash, and melon are low acid foods having a pH above 4.6 .” — Penn State Extension: The Uncanny Trio—Eggplant, Summer Squash, Melon (2024), <https://extension.psu.edu/the-uncanny-trio-eggplant-summer-squash-melon>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `zucchini-v05.md:7`, `zucchini-v08.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-044 · szczebel 1

- **Twierdzenie:** Do pomidorów całych, kruszonych i soku dodaje się na słoik 1 qt (ok. 0,95 l) 2 łyżki butelkowanego soku z cytryny albo 1/2 łyżeczki kwasu cytrynowego.
- **Źródło (szczebel 1):** „To ensure safe acidity in whole, crushed, or juiced tomatoes, add two tablespoons of bottled lemon juice or 1/2 teaspoon of citric acid per quart of tomatoes.” — NCHFP (nchfp.uga.edu): Canning Tomatoes, Introduction, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/canning-tomatoes-introduction/>, odczyt 2026-11-01, curl+grep
- **Karty (3):** `tomato-v08.md:31`, `tomato-v09.md:13`, `tomato-v10.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-045 · szczebel 1

- **Twierdzenie:** Na słoik 1 pt (ok. 0,47 l) pomidorów: 1 łyżka butelkowanego soku z cytryny albo 1/4 łyżeczki kwasu cytrynowego.
- **Źródło (szczebel 1):** „For pints, use one tablespoon bottled lemon juice or 1/4 teaspoon citric acid.” — NCHFP (nchfp.uga.edu): Canning Tomatoes, Introduction, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/canning-tomatoes-introduction/>, odczyt 2026-11-01, curl+grep
- **Karty (3):** `tomato-v08.md:33`, `tomato-v09.md:15`, `tomato-v10.md:23`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-047 · szczebel 1

- **Twierdzenie:** Do pomidorów można dodać cukier dla złagodzenia smaku, ale nie wolno pominąć kwasu.
- **Źródło (szczebel 1):** „If desired, add sugar to balance the acidic taste, but do not leave acid out.” — NCHFP (nchfp.uga.edu): Tomato acidification directions, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-acidification-directions/>, odczyt 2026-11-01, curl+grep
- **Karty (3):** `tomato-v08.md:9`, `tomato-v09.md:9`, `tomato-v10.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-049 · szczebel 1

- **Twierdzenie:** Nie wekować pomidorów z obumarłych lub przemarzniętych krzaków.
- **Źródło (szczebel 1):** „Caution: Do not can tomatoes from dead or frost-killed vines.” — NCHFP (nchfp.uga.edu): Canning Tomatoes, Introduction, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/canning-tomatoes-introduction/>, odczyt 2026-11-01, curl+grep
- **Karty (4):** `tomato-v08.md:15`, `tomato-v09.md:19`, `tomato-v11.md:11`, `tomato-v13.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-051 · szczebel 1

- **Twierdzenie:** Sok pomidorowy (zakwaszony), kąpiel wodna, hot pack, 0–1000 stóp: słoiki 1 pt 35 min, 1 qt 40 min.
- **Źródło (szczebel 1):** „Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — NCHFP (nchfp.uga.edu): Tomato Juice, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v09.md:3`, `tomato-v09.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-052 · szczebel 1

- **Twierdzenie:** Standardowy sos pomidorowy (passata, zakwaszony), kąpiel wodna, 0–1000 stóp: 1 pt 35 min, 1 qt 40 min.
- **Źródło (szczebel 1):** „Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v08.md:3`, `tomato-v08.md:41`, `tomato-v08.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-053 · szczebel 1

- **Twierdzenie:** Pomidory całe lub połówki w soku pomidorowym (zakwaszone), kąpiel wodna, 0–1000 stóp: 85 min dla słoików 1 pt i 1 qt.
- **Źródło (szczebel 1):** „Hot & Raw Pints or Quarts 85 min 90 95 100” — NCHFP (nchfp.uga.edu): Whole or Halved Tomatoes (packed in tomato juice), <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v10.md:3`, `tomato-v10.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-063 · szczebel 1

- **Twierdzenie:** Wszystkie domowe gruszki azjatyckie muszą być zakwaszone przed kąpielą wodną (1 łyżka butelkowanego soku z cytryny na 1 pt, 2 łyżki na 1 qt).
- **Źródło (szczebel 1):** „All home canned Asian Pears must be acidified before canning in a boiling water canner to make them safe from the microorganism that causes botulism.” — NCHFP (nchfp.uga.edu): Pears, Asian, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-asian/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Add 1 tablespoon bottled lemon juice per pint jar or 2 tablespoons per quart jar.” — NCHFP (nchfp.uga.edu): Pears, Asian, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-asian/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `pear-v07.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-086 · szczebel 1

- **Twierdzenie:** Przybliżone pH: Zucchini, cooked — 5,69–6,10 (lista FDA/CFSAN; po ugotowaniu, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Zucchini, cooked 5.69 - 6.10” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Źródło: kopia wydruku strony FDA z 2007 r. hostowana przez lokalny urząd zdrowia (riverstonehealth.org); oryginał na fda.gov niedostępny.
- **Karty (2):** `zucchini-v05.md:9`, `zucchini-v08.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-093 · szczebel 1

- **Twierdzenie:** Przybliżone pH: Tomatoes — 4,30–4,90 (lista FDA/CFSAN; część jadalna w stanie naturalnym, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Tomatoes 4.30 - 4.90” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Considerable variation exists between varieties, condition of growing and processing methods, etc.” — FDA/CFSAN Approximate pH of Foods, wstęp, <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-02, pdftotext+normalizacja spacji+grep
- **Uproszczenie / wniosek JarAtlas:** Źródło: kopia wydruku strony FDA z 2007 r. hostowana przez lokalny urząd zdrowia (riverstonehealth.org); oryginał na fda.gov niedostępny.
- **Karty (5):** `tomato-v08.md:7`, `tomato-v09.md:7`, `tomato-v10.md:7`, `tomato-v11.md:7` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-094 · szczebel 1

- **Twierdzenie:** Przybliżone pH: Peppers — 4,65–5,45 (lista FDA/CFSAN; część jadalna w stanie naturalnym, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Peppers 4.65 - 5.45” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Źródło: kopia wydruku strony FDA z 2007 r. hostowana przez lokalny urząd zdrowia (riverstonehealth.org); oryginał na fda.gov niedostępny.
- **Karty (2):** `bell-pepper-v09.md:11`, `chili-pepper-v13.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-104 · szczebel 1

- **Twierdzenie:** Przybliżone pH: Beets — 5,30–6,60 (lista FDA/CFSAN; część jadalna w stanie naturalnym, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Beets 5.30 - 6.60” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Źródło: kopia wydruku strony FDA z 2007 r. hostowana przez lokalny urząd zdrowia (riverstonehealth.org); oryginał na fda.gov niedostępny.
- **Karty (1):** `beetroot-v06.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-117 · szczebel 1

- **Twierdzenie:** Przybliżone pH: Parsley — 5,70–6,00 (lista FDA/CFSAN; część jadalna w stanie naturalnym, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Parsley 5.70 - 6.00” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Źródło: kopia wydruku strony FDA z 2007 r. hostowana przez lokalny urząd zdrowia (riverstonehealth.org); oryginał na fda.gov niedostępny.
- **Karty (1):** `garden-herbs-v12.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-135 · szczebel 1

- **Twierdzenie:** Przybliżone pH: Apricots — 3,30–4,80 (lista FDA/CFSAN; część jadalna w stanie naturalnym, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Apricots 3.30 - 4.80” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Źródło: kopia wydruku strony FDA z 2007 r. hostowana przez lokalny urząd zdrowia (riverstonehealth.org); oryginał na fda.gov niedostępny.
- **Karty (1):** `apricot-v06.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-171 · szczebel 1

- **Twierdzenie:** NCHFP sok pomidorowy: butelkowany sok z cytryny lub kwas cytrynowy dodać do słoików, sok ponownie doprowadzić do wrzenia, napełnić słoiki gorącym sokiem, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Add bottled lemon juice or citric acid to jars (See acidification instructions ). Heat juice again to boiling.” — Tomato Juice, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Fill jars with hot tomato juice, leaving 1/2-inch headspace.” — Tomato Juice, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v09.md:23`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-180 · szczebel 1

- **Twierdzenie:** NCHFP wiśnie i czereśnie całe: oberwać szypułki i umyć; pestki można usunąć; wydrylowane włożyć do wody z kwasem askorbinowym, żeby nie ciemniały przy szypułce; niedrylowane nakłuć czystą igłą z dwóch przeciwnych stron, żeby nie pękały; wekować można w wodzie, soku jabłkowym, soku z białych winogron albo w syropie.
- **Źródło (szczebel 1):** „Procedure: Stem and wash cherries. Remove pits if desired. If pitted, place cherries in water containing ascorbic acid to prevent stem-end discoloration. If canned unpitted, prick skins on opposite sides with a clean needle to prevent splitting. Cherries may be canned in water, apple juice, white-grape juice, or syrup .” — Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:7`, `sour-cherry-v11.md:11`, `sour-cherry-v11.md:13`, `sour-cherry-v11.md:15`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-193 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla zakwaszania pomidorów w słoikach metrycznych: do słoika większego niż pinta, do 946 ml (np. 0,5 l albo 0,9 l), dodać kwas jak na quart: 2 łyżki butelkowanego soku z cytryny albo 1/2 łyżeczki kwasu cytrynowego.
- **Źródło (szczebel 1):** „To ensure safe acidity in whole, crushed, or juiced tomatoes, add two tablespoons of bottled lemon juice or 1/2 teaspoon of citric acid per quart of tomatoes.” — NCHFP (nchfp.uga.edu): Canning Tomatoes, Introduction, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/canning-tomatoes-introduction/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „For pints, use one tablespoon bottled lemon juice or 1/4 teaspoon citric acid.” — NCHFP (nchfp.uga.edu): Canning Tomatoes, Introduction, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/canning-tomatoes-introduction/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: dawka na pint w słoiku 0,5 l dałaby ok. 5% mniej kwasu na ml niż przepis (473/500); dawka na quart w słoiku do 946 ml daje co najmniej tyle kwasu na ml, ile przepis (strona bezpieczna, kwaśniej). Uwaga weryfikacji E3 2026-11-01.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p2`
- **Karty (3):** `tomato-v08.md:35`, `tomato-v09.md:17`, `tomato-v10.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-196 · szczebel 1

- **Twierdzenie:** NCHFP pomidory całe lub połówki w soku: pomidory umyć, zanurzyć we wrzącej wodzie na 30–60 sekund, aż skórka pęknie, potem w zimnej wodzie; zdjąć skórkę, usunąć twarde gniazdo przy szypułce, zostawić całe albo przekroić na pół; do słoików dodać butelkowany sok z cytryny albo kwas cytrynowy; sól opcjonalnie, 1 łyżeczka na słoik quart.
- **Źródło (szczebel 1):** „Wash tomatoes. Dip in boiling water for 30 to 60 seconds or until skins split, then dip in cold water. Slip off skins and remove cores. Leave whole or halve.” — Whole or Halved Tomatoes (packed in tomato juice), Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Add bottled lemon juice or citric acid to the jars (See acidification instructions ). Add 1 teaspoon of salt per quart to the jars, if desired.” — Whole or Halved Tomatoes (packed in tomato juice), Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v10.md:13`, `tomato-v10.md:15`, `tomato-v10.md:19`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-202 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana (Pickled Bell Peppers), na ok. 9 słoików pint: 7 funtów (ok. 3,2 kg) jędrnej papryki, 3 1/2 szklanki cukru, 3 szklanki octu o kwasowości 5%, 3 szklanki wody, 9 ząbków czosnku i 4 1/2 łyżeczki soli do konserw i pikli.
- **Źródło (szczebel 1):** „7 lbs firm bell peppers 3-1/2 cups sugar 3 cups vinegar (5 percent) 3 cups water” — Pickled Bell Peppers, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „9 cloves garlic 4-1/2 tsp canning or pickling salt Yield: About 9 pints” — Pickled Bell Peppers, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1 funt = 0,4536 kg, 7 × 0,4536 = 3,18 kg, w treści ok. 3,2 kg (masa warzyw; proporcje zalewy podane w szklankach bez zmian).
- **Karty (1):** `bell-pepper-v01.md:3`, `bell-pepper-v01.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-203 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana: paprykę umyć, pokroić na ćwiartki, usunąć gniazda i nasiona oraz wyciąć uszkodzone miejsca, pokroić w paski; cukier, ocet i wodę gotować 1 minutę, dodać paprykę i doprowadzić do wrzenia.
- **Źródło (szczebel 1):** „Wash peppers, cut into quarters, remove cores and seeds, and cut away any blemishes. Slice peppers in strips.” — Pickled Bell Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Boil sugar, vinegar, and water for 1 minute. Add peppers and bring to a boil.” — Pickled Bell Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v01.md:33`, `bell-pepper-v01.md:35`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-204 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana: do każdego sterylnego słoika 1/2 pinty włożyć 1/2 ząbka czosnku i 1/4 łyżeczki soli, do słoika pint podwójnie (1 ząbek i 1/2 łyżeczki); dodać paski papryki i zalać gorącą zalewą octową, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Place 1/2 clove of garlic and 1/4 teaspoon salt in each sterile half-pint jar; double the amounts for pint jars.” — Pickled Bell Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Add pepper strips and cover with hot vinegar mixture, leaving 1/2-inch headspace.” — Pickled Bell Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Adjust lids and process according to the recommendations in Table 1.” — Pickled Bell Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v01.md:3`, `bell-pepper-v01.md:39`, `bell-pepper-v01.md:41`, `bell-pepper-v01.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-209 · szczebel 3

- **Twierdzenie:** Penn State Extension (szczebel 3, jedno źródło): do domowych przetworów ocet o kwasowości w zakresie 5–7%; octy do sprzątania i ogrodnicze (11–30%) nie są przeznaczone do przetworów.
- **Źródło (szczebel 3):** „Stay in the range of 5–7% acidity for home food preservation.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „Do not use vinegars intended for cleaning or for horticultural purposes.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Jedno źródło ze szczebla 3; NCHFP (szczebel 1) zaleca 5% (ACI-018) i nie podaje górnej granicy.
- **Karty (7):** `beetroot-v06.md:17`, `bell-pepper-v01.md:13`, `bell-pepper-v09.md:21`, `chili-pepper-v13.md:17` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-210 · szczebel 3

- **Twierdzenie:** Penn State Extension (szczebel 3, jedno źródło): nie rozcieńczać octu wodą, chyba że przepis przebadany naukowo wyraźnie to nakazuje.
- **Źródło (szczebel 3):** „Do not dilute the vinegar with water unless it specifically says so in a research-tested recipe.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Karty (7):** `beetroot-v06.md:17`, `bell-pepper-v01.md:13`, `bell-pepper-v09.md:21`, `chili-pepper-v13.md:17` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-211 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla przepisów NCHFP z octem 5%: używać białego octu destylowanego (spirytusowego) albo jabłkowego z etykietą 5% albo 6%; octu 10% nie używać i nie rozcieńczać go wodą, żeby uzyskać 5%; wody dodawać tylko tyle, ile podaje przepis.
- **Źródło (szczebel 1):** „Do not alter vinegar, food, or water proportions in a recipe or use a vinegar with unknown acidity.” — NCHFP (nchfp.uga.edu): General Information on Pickling, <https://nchfp.uga.edu/how/pickle/general-information-pickling/general-information-on-pickling/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „Stay in the range of 5–7% acidity for home food preservation.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „Do not dilute the vinegar with water unless it specifically says so in a research-tested recipe.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „If your research-tested recipe does not specify a particular type of vinegar, you may safely use either white or cider vinegar as long as it is labeled as 5% acidity.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „Specialty vinegars include red or white wine vinegar, malt vinegar, balsamic, and other flavored vinegars. Use these only when specified in a research-tested recipe.” — Penn State Extension: Advice about Vinegar (M. Zepp, aktualizacja 2026-07-08), Other Tips, <https://extension.psu.edu/advice-about-vinegar>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła. Ocet 6% w miejscu 5% daje ok. 1,2 raza więcej kwasu (strona bezpieczna, smak kwaśniejszy) i mieści się w zakresie Penn State 5–7% (ACI-209). Ocet 10% jest poza tym zakresem, a rozcieńczenie 1:1 zmienia proporcję wody w przepisie (ACI-016) i nie jest w przepisie przebadanym (ACI-210); błąd odmierzenia obniżyłby kwasowość. Odrzucone: tylko 5% (bez zysku dla bezpieczeństwa, trudno dostępny w części Europy — teza niesprawdzona, nie trafia do kart); 10% rozcieńczony 1:1 (sprzeczny z ACI-210). Rodzaj octu: Penn State dopuszcza biały albo jabłkowy z etykietą 5%, octy specjalne (winne, słodowe, balsamiczne, smakowe) tylko gdy przepis je podaje; „ocet spirytusowy” to polski odpowiednik octu białego destylowanego (z alkoholu destylowanego) — przekład nazwy, do przeglądu eksperta. Brzmienie „nie rozcieńczaj, żeby uzyskać 5%; tylko woda z przepisu” według uwagi weryfikacji zastępczej 2026-11-02.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p4`
- **Karty (8):** `apple-v10.md:17`, `beetroot-v06.md:19`, `bell-pepper-v01.md:15`, `bell-pepper-v09.md:23` i 4 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-212 · szczebel 1

- **Twierdzenie:** NCHFP buraczki w occie (Pickled Beets), na ok. 8 słoików pint: 7 funtów (ok. 3,2 kg) buraków o średnicy 2–2 1/2 cala (ok. 5–6,4 cm), 4 szklanki octu o kwasowości 5%, 1 1/2 łyżeczki soli do konserw i pikli, 2 szklanki cukru, 2 szklanki wody, 2 laski cynamonu, 12 całych goździków i opcjonalnie 4–6 cebul o średnicy 2–2 1/2 cala.
- **Źródło (szczebel 1):** „7 lbs of 2- to 2-1/2-inch diameter beets 4 cups vinegar (5 percent) 1-1/2 teaspoons canning or pickling salt 2 cups sugar 2 cups water” — NCHFP (nchfp.uga.edu): Pickled Beets, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „2 cinnamon sticks 12 whole cloves 4 to 6 onions (2- to 2-1/2-inch diameter) if desired Yield: About 8 pints” — NCHFP (nchfp.uga.edu): Pickled Beets, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 7 × 0,4536 = 3,18 kg, w treści ok. 3,2 kg (masa warzyw; zalewa w szklankach bez zmian); 2 × 2,54 = 5,08 cm, 2,5 × 2,54 = 6,35 cm.
- **Karty (1):** `beetroot-v06.md:3`, `beetroot-v06.md:25`, `beetroot-v06.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-214 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets: połączyć ocet, sól, cukier i świeżą wodę; przyprawy włożyć do woreczka z gazy i dodać do zalewy; doprowadzić do wrzenia; dodać buraki i cebulę i gotować na małym ogniu 5 minut; wyjąć woreczek z przyprawami.
- **Źródło (szczebel 1):** „Combine vinegar, salt, sugar, and fresh water. Put spices in cheesecloth bag and add to vinegar mixture. Bring to a boil. Add beets and onions. Simmer 5 minutes. Remove spice bag.” — NCHFP (nchfp.uga.edu): Pickled Beets, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `beetroot-v06.md:3`, `beetroot-v06.md:45`, `beetroot-v06.md:47`, `beetroot-v06.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-229 · szczebel 1

- **Twierdzenie:** NCHFP Standard Tomato Sauce: butelkowany sok z cytryny albo kwas cytrynowy dodać do słoików (według wskazówek zakwaszania); opcjonalnie 1 łyżeczka soli na słoik quart; słoiki napełnić, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni, zamknąć i wekować.
- **Źródło (szczebel 1):** „Add bottled lemon juice or citric acid to jars (See acidification directions ). Add 1 teaspoon of salt per quart to the jars, if desired.” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Fill jars, leaving ¼-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v08.md:31`, `tomato-v08.md:39`, `tomato-v08.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-236 · szczebel 1

- **Twierdzenie:** NCHFP Cherries-Whole: usunąć szypułki i umyć; pestki można usunąć; owoce wydrylowane trzymać w wodzie z kwasem askorbinowym, żeby nie ciemniały przy szypułce; owoce z pestkami nakłuć czystą igłą z dwóch przeciwnych stron, żeby nie pękały.
- **Źródło (szczebel 1):** „Stem and wash cherries. Remove pits if desired.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „If pitted, place cherries in water containing ascorbic acid to prevent stem-end discoloration. If canned unpitted, prick skins on opposite sides with a clean needle to prevent splitting.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:11`, `sour-cherry-v09.md:13`, `sour-cherry-v09.md:15`, `sweet-cherry-v07.md:15` i 5 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-253 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Bread-and-Butter Zucchini, składniki: 16 szklanek pokrojonej świeżej cukinii, 4 szklanki cienko pokrojonej cebuli, 1/2 szklanki soli do konserw i pikli, 4 szklanki białego octu (5%), 2 szklanki cukru, 4 łyżki gorczycy, 2 łyżki nasion selera, 2 łyżeczki mielonej kurkumy; wydajność ok. 8–9 słoików pint.
- **Źródło (szczebel 1):** „16 cups fresh zucchini, sliced” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „4 cups onions, thinly sliced” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „1/2 cup canning or pickling salt” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „4 cups white vinegar (5%)” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „2 cups sugar” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „4 tbsp mustard seed” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „2 tbsp celery seed” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „2 tsp ground turmeric” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Yield: About 8 to 9 pints” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v05.md:3`, `zucchini-v05.md:27`, `zucchini-v05.md:29`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-255 · szczebel 1

- **Twierdzenie:** NCHFP Bread-and-Butter Zucchini: ocet, cukier i przyprawy połączyć i zagotować, dodać cukinię i cebulę, gotować na małym ogniu 5 minut, napełnić słoiki warzywami i zalewą, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; założyć pokrywki i wekować według tabeli 1.
- **Źródło (szczebel 1):** „Combine vinegar, sugar, and spices. Bring to a boil and add zucchini and onions. Simmer 5 minutes and fill jars with mixture and pickling solution, leaving 1/2-inch headspace.” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Adjust lids and process according to the recommendations in Table 1” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v05.md:3`, `zucchini-v05.md:37`, `zucchini-v05.md:39`, `zucchini-v05.md:41` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-259 · szczebel 1

- **Twierdzenie:** NCHFP Zucchini-Pineapple, składniki na ok. 8–9 słoików pint: 4 quarty (ok. 3,8 l) cukinii w kostkę albo startej, 46 uncji niesłodzonego soku ananasowego z puszki, 1 1/2 szklanki butelkowanego soku z cytryny, 3 szklanki cukru.
- **Źródło (szczebel 1):** „4 qts cubed or shredded zucchini 46 oz canned unsweetened pineapple juice 1½ cups bottled lemon juice 3 cups sugar Yield: About 8 to 9 pints” — NCHFP (nchfp.uga.edu): Zucchini-Pineapple, składniki, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/zucchini-pineapple/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** 4 quarty = 4 × 946 ml ≈ 3,79 l (ACI-174), w karcie „ok. 3,8 l”.
- **Karty (1):** `zucchini-v08.md:3`, `zucchini-v08.md:19`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-260 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Uncja płynu USA (fl oz) to 29,573 53 ml, więc 46 uncji płynu to ok. 1360 ml (ok. 1,36 l). Ostrożne odczytanie JarAtlas: „46 oz” soku w przepisie NCHFP karta liczy jako uncje płynu (ok. 1,36 l); to większa z dwóch możliwych ilości soku (46 uncji wagi to ok. 1,30 kg), czyli więcej kwaśnego soku, nie mniej.
- **Źródło (szczebel 1):** „1 fluid ounce (fl oz) = 0.001 044 379 29.573 53 0.029 573 53” — NIST Handbook 44 (2025), Appendix C, Units of Liquid Volume, <https://nvlpubs.nist.gov/nistpubs/hb/2025/NIST.HB.44-2025.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 46 × 29,573 53 = 1360,4 ml. Przepis pisze „46 oz” bez „fl”; odczytanie jako uncje płynu to wniosek JarAtlas, nie zdanie źródła.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p7`
- **Karty (1):** `zucchini-v08.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-265 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla przepisów NCHFP zakwaszanych octem, sokiem z cytryny albo kwasem cytrynowym: nie zmieniaj ilości składników kwaśnych (ocet, sok z cytryny, sok owocowy, kwas cytrynowy) ani warzyw, owoców i naparów (np. naparu miętowego); nie dodawaj innych warzyw; nie zmniejszaj ilości octu; przepis jest przetestowany tylko w podanych proporcjach.
- **Źródło (szczebel 1):** „The addition of vinegar to the low-acid sweet and hot peppers makes this recipe safe for boiling water canning. Do not reduce the amount of vinegar.” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Notes (3), <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Uogólnienie JarAtlas z uwagi NCHFP do Golden Pepper Jelly i z ACI-016 (proporcje octu, warzyw i wody) na inne przepisy zakwaszane (sok z cytryny, sok ananasowy); działa w stronę bezpieczną. Rozszerzenie 2026-11-02 (partia 8, weryfikacja zastępcza): kwas cytrynowy, napary, zakaz dodawania innych warzyw.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p7`
- **Karty (6):** `bell-pepper-v09.md:17`, `chili-pepper-v13.md:13`, `chili-pepper-v13.md:27`, `garden-herbs-v12.md:9` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-266 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers (papryka słodka, węgierska, bananowa albo jalapeño), składniki na ok. 9 słoików 1/2 pinty: 4 funty (ok. 1,8 kg) jędrnej papryki, 1 szklanka butelkowanego soku z cytryny, 2 szklanki białego octu (5%), 1 łyżka liści oregano, 1 szklanka oliwy albo oleju sałatkowego, 1/2 szklanki posiekanej cebuli, 2 ząbki czosnku pokrojone na ćwiartki (opcjonalnie), 2 łyżki gotowego chrzanu (opcjonalnie).
- **Źródło (szczebel 1):** „Bell, Hungarian, Banana, or Jalapeno 4 lbs firm peppers* 1 cup bottled lemon juice 2 cups white vinegar (5 percent) 1 tbsp oregano leaves 1 cup olive or salad oil 1/2 cup chopped onions 2 cloves garlic, quartered (optional) 2 tbsp prepared horseradish (optional) Yield: About 9 half-pints.” — NCHFP (nchfp.uga.edu): Marinated Peppers, składniki, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** 4 funty = 4 × 0,4536 kg ≈ 1,81 kg, w karcie „ok. 1,8 kg”.
- **Karty (1):** `bell-pepper-v09.md:3`, `bell-pepper-v09.md:29`, `bell-pepper-v09.md:31`, `bell-pepper-v09.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-270 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers: pozostałe składniki wymieszać w garnku i doprowadzić do wrzenia; do każdego słoika 1/2 pinty włożyć 1/4 ząbka czosnku (opcjonalnie) i 1/4 łyżeczki soli, do słoika pint 1/2 łyżeczki soli; napełnić słoiki papryką, zalać gorącą, dobrze wymieszaną zalewą z olejem, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; założyć pokrywki i wekować według tabeli 1.
- **Źródło (szczebel 1):** „Mix all remaining ingredients in a saucepan and heat to boiling. Place 1/4 garlic clove (optional) and 1/4 teaspoon salt in each half pint or 1/2 teaspoon per pint. Fill jars with peppers, add hot, well-mixed oil/pickling solution over peppers, leaving 1/2-inch headspace. Adjust lids and process according to the recommendations in Table 1.” — NCHFP (nchfp.uga.edu): Marinated Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v09.md:3`, `bell-pepper-v09.md:53`, `bell-pepper-v09.md:55`, `bell-pepper-v09.md:57` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-282 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly: do testów użyto pektyny SURE-JELL Premium Fruit Pectin; przepis w przetestowanej postaci daje galaretkę kwaśną.
- **Źródło (szczebel 1):** „* For testing, SURE-JELL Premium Fruit Pectin was used. 1) This recipe does produce an acidic jelly as tested.” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Additional Notes, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `corn-v09.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-283 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla galaretki z kolb (NCHFP Corncob Jelly): NCHFP potwierdza kwaśność galaretki tylko w przetestowanej postaci (kolby czerwonej kukurydzy pastewnej, pektyna w proszku użyta w teście: SURE-JELL Premium Fruit Pectin, opakowanie 1 3/4 uncji, ok. 50 g), a sama kukurydza jest niskokwasowa; JarAtlas nie zna danych dla kolb kukurydzy cukrowej ani innych zamian, więc zaleca trzymać się przepisu dokładnie, bez zamiany kolb ani pektyny i bez zmiany proporcji.
- **Źródło (szczebel 1):** „1) This recipe does produce an acidic jelly as tested.” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Additional Notes, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: „as tested” ogranicza potwierdzenie kwaśności do przetestowanej postaci; pH kukurydzy cukrowej 7,3 (SLO-035). 1 3/4 uncji = 1,75 × 28,35 g ≈ 49,6 g, w karcie „ok. 50 g”.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p7`
- **Karty (1):** `corn-v09.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-284 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly, składniki na ok. 5 słoików 1/2 pinty: 5 szklanek posiekanej żółtej papryki (ok. 4 duże mięsiste papryki), 1/2 szklanki posiekanych papryczek serrano (ok. 5 sztuk), 1 1/2 szklanki białego octu destylowanego (5%), 5 szklanek cukru, 1 saszetka (3 uncje) pektyny w płynie.
- **Źródło (szczebel 1):** „5 cups chopped yellow bell peppers (about 4 large fleshy peppers as purchased) 1/2 cup chopped Serrano chile peppers (about 5 peppers as purchased) 1-1/2 cups white distilled vinegar (5%) 5 cups sugar 1 pouch (3 ounces) liquid pectin Yield: About 5 half-pint jars” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:3`, `chili-pepper-v13.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-285 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly, sok z papryki: papryki umyć, usunąć ogonki i nasiona (w ostrych papryczkach zostawić błony, bo tam jest ostrość); zmiksować z taką ilością octu, żeby powstało purée; purée i resztę octu przełożyć do garnka 8–10 quartów, doprowadzić do wrzenia i gotować 10 minut; zdjąć z ognia i przecedzić przez worek do galaretek (albo kilka warstw gazy).
- **Źródło (szczebel 1):** „Wash all peppers thoroughly; remove stems and seeds from the peppers. Do not remove the membrane from the hot peppers, since the remaining capsaicin for pepper heat is located there. 3. Place sweet and hot peppers in a blender or food processor. Add enough vinegar to purée the peppers, then purée. 4. Combine the pepper-vinegar purée and remaining vinegar into an 8- or 10-quart saucepan. Heat to a boil; then boil 10 minutes to extract flavors and color. 5. Remove from heat and strain through a jelly bag into a bowl. (The jelly bag is preferred; several layers of cheesecloth may also be used.)” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Procedure 2–5, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:33`, `chili-pepper-v13.md:35`, `chili-pepper-v13.md:37`, `chili-pepper-v13.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-286 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly, galaretka: odmierzyć 2 1/4 szklanki przecedzonego soku z papryki i octu, wmieszać cukier do rozpuszczenia i znowu doprowadzić do wrzenia; dodać pektynę, doprowadzić do pełnego, burzliwego wrzenia i gotować mocno 1 minutę, cały czas mieszając; zdjąć z ognia i szybko zebrać pianę.
- **Źródło (szczebel 1):** „Measure 2-1/4 cups of the strained pepper-vinegar juice into the 8- to 10-quart saucepan. Stir in sugar until dissolved and return mixture to a boil. Add the pectin, return to a full rolling boil and boil hard for 1 minute, stirring constantly. Remove from heat; skim off foam quickly.” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Procedure 6, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:3`, `chili-pepper-v13.md:43`, `chili-pepper-v13.md:45`, `chili-pepper-v13.md:47` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-291 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly: dodatek octu do niskokwasowej papryki słodkiej i ostrej sprawia, że ten przepis jest bezpieczny do wekowania w kąpieli wodnej; nie zmniejszać ilości octu; ilości octu i cukru są też potrzebne, żeby pektyna utworzyła żel.
- **Źródło (szczebel 1):** „The addition of vinegar to the low-acid sweet and hot peppers makes this recipe safe for boiling water canning. Do not reduce the amount of vinegar. The amounts of vinegar and sugar are also necessary to provide the conditions required to form a gel with the added pectin.” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Notes (3), <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:9`, `chili-pepper-v13.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-295 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup, składniki na 6–7 słoików pint: 24 funty (ok. 10,9 kg) dojrzałych pomidorów, 3 szklanki posiekanej cebuli, 3/4 łyżeczki mielonej ostrej papryki (cayenne), 3 szklanki octu jabłkowego (5%), 4 łyżeczki goździków, 3 pokruszone laski cynamonu, 1 1/2 łyżeczki ziela angielskiego, 3 łyżki nasion selera, 1 1/2 szklanki cukru, 1/4 szklanki soli.
- **Źródło (szczebel 1):** „3 cups cider vinegar (5 percent)” — NCHFP (nchfp.uga.edu): Tomato Ketchup, składniki, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Yield: 6 to 7 pints” — NCHFP (nchfp.uga.edu): Tomato Ketchup, składniki, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:3`, `tomato-v13.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-297 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup: przyprawy w woreczku zagotować z octem w rondlu 2 quart (ok. 1,9 l); wyjąć woreczek, połączyć ocet z masą pomidorową, gotować ok. 30 min; przetrzeć przez młynek albo sito; dodać cukier i sól, gotować na wolnym ogniu, często mieszając, aż objętość zmniejszy się o połowę albo masa ułoży się na łyżce bez oddzielania.
- **Źródło (szczebel 1):** „Remove spice bag and combine vinegar and tomato mixture. Boil about 30 minutes. Put boiled mixture through a food mill or sieve. Return to pot. Add sugar and salt, boil gently, and stir frequently until volume is reduced by one-half or until mixture rounds up on spoon without separation.” — NCHFP (nchfp.uga.edu): Tomato Ketchup, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:3`, `tomato-v13.md:39`, `tomato-v13.md:41`, `tomato-v13.md:43` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-300 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, składniki na ok. 8–9 słoików 1/2 pinty: 14 funtów (ok. 6,35 kg) pomidorów typu Roma, 1 łyżeczka kwasu cytrynowego, 2 liście laurowe, 1 łyżeczka soli do przetworów, 1 ząbek czosnku (opcjonalnie).
- **Źródło (szczebel 1):** „14 pounds Roma- or paste-type tomatoes 1 teaspoon citric acid” — NCHFP (nchfp.uga.edu): Tomato Paste, składniki, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Yield: About 8 or 9 half-pint jars” — NCHFP (nchfp.uga.edu): Tomato Paste, składniki, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:3`, `tomato-v11.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-302 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, krok 4 i uwaga: kwas cytrynowy dokładnie wmieszać do przetartych pomidorów przed odparowaniem na koncentrat (dodanie do słoików nie rozprowadza kwasu równo); proporcja kwasu cytrynowego do funtów pomidorów musi być stała; dodać sól, liście laurowe, czosnek (opcjonalnie); gotować powoli bez przykrycia ok. 2 1/2 h, aż masa ułoży się na łyżce, a objętość znów zmniejszy się o połowę; uwaga na pryskanie.
- **Źródło (szczebel 1):** „The citric acid in this recipe needs to be added into the sieved tomatoes before they are cooked down into paste (Step 4). Adding it to the jars, as with other canned tomato products, does not allow for adequate distribution of the acid throughout the product. The ratio of citric acid to pounds of tomatoes must be kept consistent.” — NCHFP (nchfp.uga.edu): Tomato Paste, Note, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Return sieved tomatoes to stockpot. Stir in citric acid thoroughly.” — NCHFP (nchfp.uga.edu): Tomato Paste, Procedure 4, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:3`, `tomato-v11.md:13`, `tomato-v11.md:15`, `tomato-v11.md:35` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-303 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, kroki 5–6: wyjąć liście laurowe i czosnek; gorący koncentrat nałożyć do czystych, gorących słoików 1/2 pinty, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; usunąć pęcherzyki, przetrzeć brzegi, założyć pokrywki; wekować w kąpieli wodnej; studzić bez ruszania 12–24 h i sprawdzić zamknięcie.
- **Źródło (szczebel 1):** „Fill hot paste into clean, hot half-pint jars, leaving ½-inch headspace.” — NCHFP (nchfp.uga.edu): Tomato Paste, Procedure 5, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Let cool, undisturbed, 12 to 24 hours and check for seals.” — NCHFP (nchfp.uga.edu): Tomato Paste, Procedure 6, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:45`, `tomato-v11.md:47`, `tomato-v11.md:49`, `tomato-v11.md:69`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-305 · szczebel 1

- **Twierdzenie:** NCHFP Apricot Jam without Pectin, składniki na ok. 10 słoików 1/2 pinty: 2 quarty (ok. 1,9 l) rozgniecionych obranych moreli, 1/4 szklanki soku z cytryny, 6 szklanek cukru.
- **Źródło (szczebel 1):** „2 quarts crushed, peeled apricots ¼ cup lemon juice 6 cups sugar” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Yield: About 10 half-pint jars” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v06.md:3`, `apricot-v06.md:13`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-308 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożne ostrzeżenie JarAtlas dla dżemu morelowego NCHFP: pH moreli według listy FDA wynosi 3,30–4,80, więc górna granica jest powyżej 4,6 (ACI-135, ACI-001), a przepis jest przetestowany z sokiem z cytryny i pełną ilością cukru; soku z cytryny nie pomijać ani nie zmniejszać, cukru nie zmniejszać.
- **Źródło (szczebel 1):** „¼ cup lemon juice” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas na wzór E3-002 (morele, pH 3,30–4,80): NCHFP nie mówi wprost, że sok z cytryny jest tu potrzebny dla bezpieczeństwa; JarAtlas traktuje go jako składnik przetestowanej proporcji (ACI-265) i zakazuje zmniejszania (wariant ostrożniejszy). Cukier: SLO-001.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p8`
- **Karty (1):** `apricot-v06.md:7`, `apricot-v06.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-309 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin, składniki na ok. 3–4 słoiki 1/2 pinty: 1 3/4 szklanki naparu miętowego (1 1/2 szklanki mocno ubitej świeżej mięty i 2 1/4 szklanki wody), 3 1/2 szklanki cukru, 2 łyżki soku z cytryny, 1 saszetka (3 uncje) pektyny w płynie.
- **Źródło (szczebel 1):** „1-¾ cups mint juice (1½ cups firmly packed fresh mint and 2¼ cups water)” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „2 tablespoons lemon juice 1 pouch liquid pectin (3 oz.)” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Yield: About 3 or 4 half-pint jars” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:3`, `garden-herbs-v12.md:17`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-311 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin: odmierzyć 1 3/4 szklanki naparu do dużego garnka, wmieszać cukier i sok z cytryny; na dużym ogniu, stale mieszając, doprowadzić do pełnego wrzenia, którego nie da się zatrzymać mieszaniem; dodać pektynę w płynie, znów doprowadzić do pełnego wrzenia i gotować intensywnie 1 min; zdjąć z ognia i szybko zebrać pianę.
- **Źródło (szczebel 1):** „Measure 1-¾ cups mint juice into a large saucepot. Stir in the sugar and lemon juice. Place on high heat, stir constantly and bring to a full boil that cannot be stirred down. Add the liquid pectin and heat again to a full rolling boil. Boil hard for 1 minute. Remove from heat; quickly skim off foam.” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:3`, `garden-herbs-v12.md:41`, `garden-herbs-v12.md:43`, `garden-herbs-v12.md:45` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-314 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas: gdy przepis NCHFP na dżem albo galaretkę podaje „lemon juice” bez dookreślenia, JarAtlas zaleca butelkowany sok z cytryny w podanej ilości, bo NCHFP zaznacza (przy lemon curd), że kwasowość świeżego soku z cytryny bywa różna, a do pomidorów i fig wymaga soku butelkowanego.
- **Źródło (szczebel 1):** „Fresh lemon juice can vary in acidity and is not recommended.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, Ingredients, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Uogólnienie JarAtlas ze strony Lemon Curd (SLO-039) i z zakwaszania pomidorów i fig (ACI-044, ACI-061) na dżemy i galaretki z sokiem z cytryny; NCHFP w tych przepisach nie wymaga soku butelkowanego. Działa w stronę bezpieczną (stała kwasowość).
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p8`
- **Karty (2):** `apricot-v06.md:15`, `garden-herbs-v12.md:19`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-325 · szczebel 1

- **Twierdzenie:** Lista FDA/CFSAN przybliżonego pH żywności wymienia renklody wśród śliwek („Plums, Green Gage”) z pH 3,60–4,30 (część jadalna w stanie naturalnym, duża zmienność odmian i warunków).
- **Źródło (szczebel 1):** „Plums, Green Gage 3.60 - 4.30” — FDA/CFSAN Approximate pH of Foods and Food Products (kopia Riverstone Health), s. 6, Plums, Green Gage, <https://www.riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:3`, `plum-v14.md:7`, `plum-v14.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### E3-001 · szczebel 1

- **Twierdzenie:** NCHFP: procesu wekowania brzoskwiń nie stosować do brzoskwiń o białym miąższu; niektóre odmiany mają wyższe pH i nie ma dla nich przetestowanego procesu ani zakwaszenia.
- **Źródło (szczebel 1):** „Do not use this process to can white-flesh peaches.” — NCHFP, Peaches – Halved or Sliced, CAUTION, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### E3-002 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożne ostrzeżenie JarAtlas dla moreli w słoikach: według listy FDA pH moreli wynosi 3,30–4,80, więc górna granica jest powyżej 4,6; NCHFP podaje przetestowany proces kąpieli wodnej bez dodatku kwasu (bez soku z cytryny i kwasu cytrynowego; roztwór kwasu askorbinowego służy tylko ochronie przed ciemnieniem), a JarAtlas nie zna przetestowanej ilości kwasu dla tego przepisu; ostrożniejsza możliwość to mrożenie moreli według NCHFP.
- **Źródło (szczebel 1):** „Apricots 3.30 - 4.80” — FDA/CFSAN „Approximate pH of Foods and Food Products” (IV 2007), kopia wydruku strony FDA na riverstonehealth.org (oryginał cfsan.fda.gov niedostępny), <https://riverstonehealth.org/wp-content/uploads/FDA-Approximate-pH-of-Foods.pdf>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 30 35 40 Raw Pints 25 30 35 40 Quarts 30 35 40 45” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Syrup Pack – Use cold 40 percent syrup .” — NCHFP, How do I Freeze, freezing-apricots, <https://nchfp.uga.edu/how/freeze/fruits/freezing-apricots/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: NCHFP (szczebel 1, przetestowany przepis) nie dodaje kwasu i nie ostrzega o odmianach; lista FDA podaje zakres pH części jadalnej w stanie naturalnym. Przepisy SDSU Extension i UC Master Food Preserver (odczyt 2026-11-02) też nie dodają kwasu do moreli w syropie (sok z cytryny tylko w dżemach), więc karta nie podaje dawki kwasu. Punkt dla eksperta (D-027 d). Odrzucone: zakwaszenie bez źródła dawki; status do-researchu (przepis szczebla 1 istnieje); brak uwagi.
- **Decyzja:** `2026-11-02-jaratlas-06-katalog-p4`
- **Karty (1):** `apricot-v08.md:7`, `apricot-v08.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-001 · szczebel 1

- **Twierdzenie:** USA (21 CFR 114.3): żywność kwaśna to żywność o naturalnym pH 4,6 lub niższym.
- **Źródło (szczebel 1):** „Acid foods means foods that have a natural pH of 4.6 or below.” — § 114.3(a), <https://www.law.cornell.edu/cfr/text/21/114.3>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `beetroot-v06.md:7`, `beetroot-v06.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-042 · szczebel 1

- **Twierdzenie:** NCHFP ogórki kiszone (dill pickles), na galon pojemności: 4 funty ogórków 4-calowych, 1/2 szklanki soli, 1/4 szklanki octu 5%, 8 szklanek wody; czosnek i suszona czerwona papryka opcjonalnie.
- **Źródło (szczebel 1):** „4 lbs of 4-inch pickling cucumbers 2 tbsp dill seed or 4 to 5 heads fresh or dry dill weed 1/2 cup salt 1/4 cup vinegar (5 percent) 8 cups water” — Dill Pickles, składniki, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:3`, `cucumber-v01.md:7`, `cucumber-v01.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### OLE-002 · szczebel 1

- **Twierdzenie:** Czosnek w oleju: przygotować na świeżo, przechowywać w lodówce w 40°F (4,4°C) lub niżej, nie dłużej niż 4 dni.
- **Źródło (szczebel 1):** „Garlic-in-oil should be made fresh and stored in the refrigerator at 40°F or lower for no more than 4 days.” — Freezing Garlic-In-Oil, akapit 1, <https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „the refrigerator for no more than 4 days.” — s. 3, Storing Garlic in Oil, <https://ccfruitandnuts.ucanr.edu/sites/default/files/2020-09/335681.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `bell-pepper-v09.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### OLE-024 · szczebel 2

- **Twierdzenie:** W ogniskach jadu kiełbasianego z warzyw i ziół w oleju (głównie wyroby domowe) występowały: papryka, czosnek, grzyby i bakłażan.
- **Źródło (szczebel 2):** „foods include peppers, garlic, mushrooms, and eggplant.” — s. 336, Abstract, <https://www.foodprotection.org/files/food-protection-trends/Jun-11-Nummer.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `bell-pepper-v09.md:13`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### OLE-029 · szczebel 2

- **Twierdzenie:** Najbezpieczniejsze zalecenie dla warzyw i ziół w oleju to zamrożenie; jeśli produkt nie jest zamrożony, trzymać w lodówce i zjeść w ciągu 4 dni albo wyrzucić.
- **Źródło (szczebel 2):** „acidifying as alternatives.The safest recommendation is to freeze” — s. 336, Abstract, <https://www.foodprotection.org/files/food-protection-trends/Jun-11-Nummer.pdf>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 2):** „should be refrigerated and then either consumed within four days” — s. 336, Abstract, <https://www.foodprotection.org/files/food-protection-trends/Jun-11-Nummer.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `bell-pepper-v09.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### OLE-036 · szczebel 2

- **Twierdzenie:** USDA Complete Guide zawiera tylko 3 przetestowane procedury warzyw z olejem: marynowana papryka, marynowane całe pieczarki i marynowana sałatka z trzech fasol; wszystkie z kwasem.
- **Źródło (szczebel 2):** „for marinated whole mushrooms (35)” — s. 337, <https://www.foodprotection.org/files/food-protection-trends/Jun-11-Nummer.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `bell-pepper-v09.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-035 · szczebel 1

- **Twierdzenie:** pH: kukurydzy cukrowej wynosi 7,3 (tabela FDA, wartości przybliżone).
- **Źródło (szczebel 1):** „Corn, Sweet 7.3” — FDA Bad Bug Book, 2nd ed., Appendix: Approximate pH of foods, wiersz Corn, Sweet, <https://www.fda.gov/media/83271/download>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `corn-v09.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-039 · szczebel 1

- **Twierdzenie:** W lemon curd używa się butelkowanego soku z cytryny dla standaryzacji kwasowości; świeży sok nie jest zalecany.
- **Źródło (szczebel 1):** „Fresh lemon juice can vary in acidity and is not recommended.” — Lemon Curd, Canned, Preparation Notes, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Karty (4):** `apricot-v06.md:15`, `garden-herbs-v12.md:19`, `lemon-v10.md:9`, `lime-bergamot-v06.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-048 · szczebel 1

- **Twierdzenie:** NCHFP utrzymuje swoje przepisy z jabłek, ale zaleca używanie świeżych, zdrowych jabłek; przy wątpliwości co do pH produkty z jabłek należy chłodzić lub mrozić zamiast przechowywać w temp. pokojowej.
- **Źródło (szczebel 1):** „In addition to following proper canning guidelines, we advise always using fresh apples” — FAQ: Should I add acid to apple recipes intended for canning?, <https://nchfp.uga.edu/faqs/canning-vegetables/category/faq-canning>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „individuals are encouraged to refrigerate or freeze products made with apples if there is” — jw., <https://nchfp.uga.edu/faqs/canning-vegetables/category/faq-canning>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Ensure that the apples are free from any signs of decay or mold.” — jw., <https://nchfp.uga.edu/faqs/canning-vegetables/category/faq-canning>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `apple-v09.md:7`, `apple-v10.md:13`, `apple-v13.md:7`, `apple-v16.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-052 · szczebel 3

- **Twierdzenie:** Procedura UC dla soku z sokownika: kwaśne soki z moreli, owoców jagodowych (bez czarnego bzu), wiśni, cytrusów, porzeczek, kiwi, żółtych brzoskwiń i nektarynek, gruszek, ananasa, granatów, śliwek, rabarbaru i pigwy. Nie stosować jej do soków niskokwasowych ani granicznych, osobno ani w mieszance; wykluczone są m.in. gruszki azjatyckie, banany, kokos, daktyle, czarny bez, figi, dojrzałe mango, melony, papaja, białe brzoskwinie i nektaryny, persymony, opuncja i pomidory (lista otwarta).
- **Źródło (szczebel 3):** „Apricots; berries (except elderberries), cherries; citrus; currents; kiwi;” — Steam Juicing Basics, Canned High-Acid Fruit Juices from Steamed Juice, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „Asian pears; bananas; coconut; dates, elderberries; figs; ripe mangoes; melons;” — jw., lista wykluczen, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `currant-v10.md:7`, `currant-v10.md:9`, `currant-v10.md:11`, `raspberry-blackberry-v07.md:7` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-068 · szczebel 3

- **Twierdzenie:** Zioła, kwiaty i napar z nich nie są naturalnie kwaśne; do wekowania wymagają przetestowanego przepisu z dodanym kwasem i/lub cukrem, nawet gdy napar jest przecedzony.
- **Źródło (szczebel 3):** „The tea itself is likely not acidic enough to prevent pathogen growth.” — OSU Extension, Ask Extension: Is jelly made from dandelion or grape hyacinth tea considered safe?, <https://extension.oregonstate.edu/ask-extension/featured/jelly-made-dandelion-or-grape-hyacinth-tea-considered-safe>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „To be safe for canning, you would need to add a tested amount of acid (like lemon juice), sugar or a combination of the two.” — jw., <https://extension.oregonstate.edu/ask-extension/featured/jelly-made-dandelion-or-grape-hyacinth-tea-considered-safe>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `garden-herbs-v12.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-086 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Citrus Marmalade" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki half-pint lub pint, a czas zależy od wysokości n.p.m.: 5 min do 1000 stóp, 10 min do 6000 stóp, 15 min powyżej (słoiki wcześniej wysterylizowane). Skład: skórka grejpfruta, pomarańczy i cytryny oraz miąższ grejpfruta i pomarańczy.
- **Źródło (szczebel 1):** „Recommended process time for Citrus Marmalade in a boiling water canner” — Citrus Marmalade, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/marmalades/citrus-marmalade/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `grapefruit-v02.md:3`, `grapefruit-v02.md:9`, `grapefruit-v02.md:55`, `grapefruit-v02.md:59` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-087 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Apple Butter" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m. Przepis zawiera ocet.
- **Źródło (szczebel 1):** „Recommended process time for Apple Butter in a boiling-water canner” — Apple Butter, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apple-v10.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-108 · szczebel 3

- **Twierdzenie:** UC ANR (Master Food Preservers) podaje procedurę wekowania soku z sokownika parowego (sok jabłkowy, winogronowy i kwaśne soki owocowe) w kąpieli wodnej lub atmosferycznym wekowniku parowym.
- **Źródło (szczebel 3):** „Canned High-Acid Fruit Juices from Steamed Juice” — Steam Juicing Basics (IV 2026), s. 7, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „Canned Apple or Grape Juice from Steamed Juice” — jw., s. 6, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `currant-v10.md:3`, `grapes-v07.md:3`, `raspberry-blackberry-v07.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-118 · szczebel 1

- **Twierdzenie:** NCHFP sterylizacja pustych słoików: gotować 10 minut na wysokości poniżej 1000 stóp, a wyżej o 1 minutę dłużej na każde kolejne 1000 stóp; słoiki sterylne są wymagane dla dżemów, galaretek i pikli wekowanych krócej niż 10 minut.
- **Źródło (szczebel 1):** „Boil 10 minutes at elevations of less than 1,000 ft.” — Sterilization of Empty Jars, <https://nchfp.uga.edu/how/can/general-information/sterilization-of-empty-jars/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „At higher elevations, boil 1 additional minute for each additional 1,000 ft.” — Sterilization of Empty Jars, <https://nchfp.uga.edu/how/can/general-information/sterilization-of-empty-jars/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „All jams, jellies, and pickled products processed less than 10 minutes should be filled into sterile empty jars.” — Sterilization of Empty Jars, <https://nchfp.uga.edu/how/can/general-information/sterilization-of-empty-jars/>, odczyt 2026-11-01, curl+grep
- **Karty (14):** `apple-v10.md:25`, `apple-v16.md:19`, `apricot-v06.md:25`, `bell-pepper-v01.md:27` i 11 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-119 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla sterylizacji słoików w metrach: 10 minut do 300 m, a wyżej 1 minuta więcej za każde kolejne rozpoczęte 300 m.
- **Źródło (szczebel 1):** „At higher elevations, boil 1 additional minute for each additional 1,000 ft.” — Sterilization of Empty Jars, <https://nchfp.uga.edu/how/can/general-information/sterilization-of-empty-jars/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas: 1000 stóp = 304,8 m zaokrąglone w dół do 300 m (ACI-176), a każde rozpoczęte 300 m liczy się jak pełne (dłuższe gotowanie).
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p2`
- **Karty (14):** `apple-v10.md:27`, `apple-v16.md:21`, `apricot-v06.md:27`, `bell-pepper-v01.md:29` i 10 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-121 · szczebel 1

- **Twierdzenie:** NCHFP mus jabłkowy: jabłka umyć, obrać i usunąć gniazda nasienne; opcjonalnie kroić do wody z kwasem askorbinowym, żeby nie ciemniały; odsączone plastry włożyć do garnka 8–10 quart (ok. 7,5–9,5 l) i dodać 1/2 szklanki wody; mieszając od czasu do czasu, żeby nie przypalić, szybko podgrzewać do miękkości (5–20 minut, zależnie od dojrzałości i odmiany); przetrzeć przez sito albo młynek do przecierania albo pominąć przecieranie, jeśli mus ma być z kawałkami.
- **Źródło (szczebel 1):** „Wash, peel, and core apples. If desired, slice apples into water containing ascorbic acid to prevent browning.” — Applesauce, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Placed drained slices in an 8- to 10-quart pot. Add ½ cup water.” — Applesauce, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Stirring occasionally to prevent burning, heat quickly until tender (5 to 20 minutes, depending on maturity and variety). Press through a sieve or food mill, or skip the pressing step if you prefer chunk-style sauce.” — Applesauce, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 8 × 0,946 = 7,57 l, 10 × 0,946 = 9,46 l (quart ACI-174), w treści ok. 7,5–9,5 l; wielkość garnka nie wpływa na bezpieczeństwo.
- **Karty (1):** `apple-v09.md:13`, `apple-v09.md:15`, `apple-v09.md:17`, `apple-v09.md:19` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-127 · szczebel 1

- **Twierdzenie:** NCHFP: naturalne pH niektórych brzoskwiń o białym miąższu może przekraczać 4,6 (żywność niskokwasowa); nie ma dla nich procesu w szybkowarze ani zbadanego zakwaszenia do kąpieli wodnej, a zalecaną metodą ich przechowywania jest mrożenie.
- **Źródło (szczebel 1):** „The natural pH of some white peaches can exceed 4.6, making them a low-acid food for canning purposes.” — Peaches-Halved or Sliced, CAUTION, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „At this time there is no low-acid pressure process available for white-flesh peaches nor a researched acidification procedure for safe boiling water canning. Freezing is the recommended method of preserving white-flesh peaches.” — Peaches-Halved or Sliced, CAUTION, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `peach-nectarine-v06.md:11`, `peach-nectarine-v06.md:13`, `peach-nectarine-v07.md:13`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-136 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin (sproszkowana pektyna): 3 3/4 szklanki rozgniecionych brzoskwiń (ok. 3 funtów brzoskwiń), 1/4 szklanki soku z cytryny, 1 opakowanie sproszkowanej pektyny, 5 szklanek cukru; wychodzi ok. 6 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „3¾ cups crushed peaches (about 3 pounds peaches) ¼ cup lemon juice 1 package powdered pectin 5 cups sugar Yield: About 6 half-pint jars” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:3`, `peach-nectarine-v07.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-138 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin: odmierzone rozgniecione brzoskwinie przełożyć do garnka, dodać sok z cytryny i pektynę, dobrze wymieszać; na dużym ogniu, stale mieszając, szybko doprowadzić do pełnego wrzenia (bąble na całej powierzchni); dodać cukier, mieszając znów doprowadzić do pełnego wrzenia, gotować intensywnie 1 minutę, stale mieszając; zdjąć z ognia i zebrać pianę.
- **Źródło (szczebel 1):** „Measure crushed peaches into a kettle. Add lemon juice and pectin; stir well. Place on high heat and, stirring constantly, bring quickly to a full boil with bubbles over the entire surface.” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Add sugar, continue stirring, and heat again to full bubbling boil. Boil hard for 1 minute, stirring constantly. Remove from heat; skim.” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:31`, `peach-nectarine-v07.md:33`, `peach-nectarine-v07.md:35`, `peach-nectarine-v07.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-144 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas: do dżemu brzoskwiniowego NCHFP używać brzoskwiń o żółtym miąższu, bo NCHFP nie ma przetestowanego procesu wekowania brzoskwiń o białym miąższu (część odmian ma pH powyżej 4,6), a strona przepisu na dżem nie mówi, czy jego badanie obejmowało brzoskwinie o białym miąższu. Przepis NCHFP na dżem dotyczy brzoskwiń i nie obejmuje nektarynek (strona ich nie wymienia).
- **Źródło (szczebel 1):** „Do not use this process to can white-flesh peaches.” — NCHFP (nchfp.uga.edu): Peaches-Halved or Sliced, White-flesh peaches, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Sort and wash fully ripe peaches. Remove stems, skins, and pits. Crush peaches.” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „3¾ cups crushed peaches (about 3 pounds peaches)” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: strona dżemu nie wyklucza brzoskwiń o białym miąższu ani ich nie wymienia; kierunek ostrożny (jak E3-001). Odrzucone: brak uwagi (cicha zgoda na odmiany bez danych).
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p4`
- **Karty (1):** `peach-nectarine-v07.md:13`, `peach-nectarine-v07.md:15`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-156 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla dżemu bez pestek według NCHFP Berry Jams without Pectin: 9 szklanek rozgniecionych owoców odmierzać przed podgrzaniem i przetarciem (kolejność z przepisu: rozgniecione owoce → podgrzanie i przetarcie → cukier); odmierzenie 9 szklanek już przetartej masy dałoby mniej cukru na masę owoców niż odmierzenie przed przetarciem. Wydajność 7–8 słoików 1/2 pinty NCHFP podaje dla przepisu podstawowego (z pestkami).
- **Źródło (szczebel 1):** „9 cups crushed berries 6 cups sugar Yield: About 7 or 8 half-pint jars” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „NOTE : If seedless jam is preferred, crushed berries may be heated until soft and pressed through a sieve or food mill; then add sugar and proceed as above.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, NOTE, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Interpretacja JarAtlas: NCHFP nie mówi wprost, kiedy odmierzać 9 szklanek w wersji bez pestek; ogólna strona NCHFP „Making Jam without added Pectin” przeciera owoce przed odmierzeniem, ale w proporcji 4 szklanki owoców na 4 szklanki cukru. Reguła wybiera wariant z większą ilością cukru na owoce (zgodny z SLO-001). NCHFP nie podaje wydajności wersji bez pestek.
- **Karty (1):** `raspberry-blackberry-v08.md:7`, `raspberry-blackberry-v08.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-165 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves: słoiki wysterylizować, a dwuczęściowe pokrywki przygotować według producenta; wybrać duże, jędrne, kwaskowe truskawki; umyć, odsączyć i usunąć szypułki z listkami.
- **Źródło (szczebel 1):** „Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions.” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Select large, firm, tart strawberries. Wash and drain berries; remove caps.” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:17`, `strawberry-v08.md:25`, `strawberry-v08.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-202 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics, przepisy na sok jabłkowy albo winogronowy (s. 6) i na kwaśne soki owocowe (s. 7) z sokownika parowego, te same kroki: sok uzyskać według instrukcji sokownika, w razie potrzeby przecedzić przez sitko albo gazę, żeby usunąć pestki; podgrzać w czystym garnku z niereaktywnego materiału, z cukrem do smaku, jeśli się go dodaje, tylko do zagotowania, mieszając do rozpuszczenia cukru; gorący sok nalewać chochlą do gorącego słoika, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni, brzeg słoika przetrzeć zwilżonym czystym ręcznikiem papierowym albo ściereczką, nałożyć pokrywkę i zakrętkę dokręconą tylko palcami.
- **Źródło (szczebel 3):** „Prepare fruit. Extract juice according to your steam juicer’s instructions. If necessary, strain juice through a strainer or cheesecloth to remove any seeds.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned High-Acid Fruit Juices from Steamed Juice, s. 7, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „Add juice to a clean, non-reactive saucepan along with sugar to taste, if desired. Heat juice just to a boil, stirring to dissolve sugar (if applicable).” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), jw., <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „Ladle hot juice into a hot jar, leaving ¼-inch headspace. Wipe jar rims with a dampened clean paper towel or cloth. Place lid and ring on jar, tightening ring only finger-tip tight” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), jw., <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „Ladle the juice into a hot jar, leaving ¼-inch headspace.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned Apple or Grape Juice from Steamed Juice, krok 4, s. 6, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Karty (3):** `currant-v10.md:33`, `currant-v10.md:35`, `currant-v10.md:39`, `currant-v10.md:41` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-203 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics, kwaśne soki owocowe z sokownika: słoiki pint lub quart w kąpieli wodnej (albo atmosferycznym wekowniku parowym) 15 minut na 0–1000 stóp, 20 minut na 1001–3000 stóp, 25 minut na 3001–6000 stóp, 30 minut na 6001–8000 stóp; tabela kończy się na przedziale 6001–8000 stóp (wyżej przepis nie podaje czasu) i nie podaje czasu dla słoików większych niż quart.
- **Źródło (szczebel 3):** „Process pint or quart jars in a boiling water or atmospheric steam canner as follows: 15 minutes at 0-1,000 feet elevation 20 minutes at 1,001-3,000 feet elevation 25 minutes at 3,001-6,000 feet elevation 30 minutes at 6,001-8,000 feet elevation” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned High-Acid Fruit Juices from Steamed Juice, s. 7, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Karty (2):** `currant-v10.md:3`, `currant-v10.md:43`, `currant-v10.md:47`, `currant-v10.md:49` i 10 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-204 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics (przepisy na sok jabłkowy albo winogronowy, krok 7, s. 6, i na kwaśne soki, krok 6, s. 7; ten sam tekst): po wekowaniu w kąpieli wodnej wyłączyć ogień, zdjąć pokrywę garnka i odczekać 5 minut; potem wyjąć słoiki na kratkę albo ręcznik, studzić bez poruszania 12–24 godziny i sprawdzić zamknięcie; niezamknięte słoiki trzymać w lodówce albo wekować ponownie; zamknięte przechowywać w chłodnym, suchym, ciemnym miejscu.
- **Źródło (szczebel 3):** „For boiling water canning, turn off heat, remove canner lid and wait 5 minutes.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned High-Acid Fruit Juices from Steamed Juice, krok 6, s. 7, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „Remove jars to a rack or towel and let cool, undisturbed, for 12-24 hours and then check seals. Store unsealed jars in the refrigerator or reprocess.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), jw., <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „For boiling water canning, turn off heat, remove canner lid and wait 5 minutes.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned Apple or Grape Juice from Steamed Juice, krok 7, s. 6, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Karty (3):** `currant-v10.md:69`, `grapes-v07.md:71`, `raspberry-blackberry-v07.md:69`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-215 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Apples-Sliced: średnio 12 1/4 funta (ok. 5,6 kg) jabłek na wsad 9 słoików pint i 19 funtów (ok. 8,6 kg) na 7 słoików quart; wybierać jabłka soczyste, chrupkie, najlepiej słodko-kwaśne; umyć, obrać, usunąć gniazda nasienne, kroić do wody z kwasem askorbinowym przeciw ciemnieniu; raw pack daje słabą jakość; odsączone plastry gotować 5 minut w garnku z 1 pintą (ok. 0,47 l) wody albo syropu bardzo lekkiego, lekkiego lub średniego na 5 funtów (ok. 2,3 kg) plastrów, mieszając; napełnić słoiki gorącymi plastrami i gorącym syropem lub wodą, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; tabela 1 (kąpiel wodna, hot, pint lub quart): 0–1000 stóp 20 min, 1001–3000 stóp 25 min, 3001–6000 stóp 30 min, wyżej 35 min.
- **Źródło (szczebel 1):** „An average of 19 pounds is needed per canner load of 7 quarts; an average of 12-1/4 pounds is needed per canner load of 9 pints.” — NCHFP (nchfp.uga.edu): Apples-Sliced, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Select apples that are juicy, crispy, and preferably both sweet and tart.” — NCHFP (nchfp.uga.edu): Apples-Sliced, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Wash, peel, and core apples. To prevent discoloration, slice apples into water containing ascorbic acid. Raw packs make poor quality products.” — NCHFP (nchfp.uga.edu): Apples-Sliced, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Place drained slices in large saucepan and add 1 pint water or very light, light, or medium syrup per 5 pounds of sliced apples. Boil 5 minutes, stirring occasionally to prevent burning.” — NCHFP (nchfp.uga.edu): Apples-Sliced, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Fill jars with hot slices and hot syrup or water, leaving 1/2-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Apples-Sliced, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 Hot Pints or Quarts 20 min 25 30 35” — NCHFP (nchfp.uga.edu): Apples-Sliced, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia funtów, pint i cali to rachunek JarAtlas (1 funt ≈ 0,454 kg, pint ≈ 473 ml, 1 cal = 2,54 cm), zaokrąglone.
- **Karty (1):** `apple-v13.md:3`, `apple-v13.md:9`, `apple-v13.md:11`, `apple-v13.md:17` i 11 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-224 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Apple Butter: 8 funtów (ok. 3,6 kg) jabłek, 2 szklanki apple cider (nazwa z przepisu; osobny składnik, nie ocet), 2 szklanki octu, 2 1/4 szklanki białego cukru, 2 1/4 szklanki ubitego brązowego cukru, 2 łyżki mielonego cynamonu, 1 łyżka mielonych goździków; wychodzi ok. 9–10 słoików pint; odmiany: Jonathan, Winesap, Stayman, Golden Delicious, McIntosh lub inne smaczne. Przepis nie podaje mocy octu.
- **Źródło (szczebel 1):** „Use Jonathan, Winesap, Stayman, Golden Delicious,” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „8 lbs apples 2 cups apple cider 2 cups vinegar 2¼ cups white sugar 2¼ cups packed brown sugar 2 tbsp ground cinnamon 1 tbsp ground cloves Yield: About 9 to 10 pints” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie funtów to rachunek JarAtlas (1 lb = 0,4536 kg), zaokrąglone. Źródło pisze „Maclntosh” (literówka), karta „McIntosh”. „Nie ocet” to odczyt z listy składników (cider i vinegar wymienione osobno); źródło nie definiuje „apple cider” (pytania otwarte, partia 13).
- **Karty (1):** `apple-v10.md:3`, `apple-v10.md:7`, `apple-v10.md:9`, `apple-v10.md:11` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-228 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Quince Jelly without Pectin: 3 3/4 szklanki soku z pigwy (ok. 3 1/2 funta, ok. 1,6 kg, pigwy i 7 szklanek wody), 1/4 szklanki soku z cytryny, 3 szklanki cukru; wychodzi ok. 4 słoików 1/2 pinty; słoiki wysterylizować, dwuczęściowe pokrywki przygotować według producenta; sok: wybrać ok. 1/4 pigw lekko niedojrzałych i 3/4 w pełni dojrzałych, przebrać, umyć, usunąć szypułki i resztki kwiatów, nie obierać i nie wycinać gniazd; pokroić bardzo cienko lub na małe kawałki, dodać wodę, przykryć, zagotować na dużym ogniu, zmniejszyć ogień i gotować 25 minut; wydobyć sok.
- **Źródło (szczebel 1):** „3¾ cups quince juice (about 3½ pounds quince and 7 cups water) ¼ cups lemon juice 3 cups sugar Yield: About 4 half-pint jars” — NCHFP (nchfp.uga.edu): Quince Jelly without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/quince-jelly-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions.” — NCHFP (nchfp.uga.edu): Quince Jelly without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/quince-jelly-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Select about one-fourth underripe and three fourths fully ripe quince. Sort, wash, and remove stems and blossom ends; do not pare or core. Slice quince very thin or cut into small pieces. Add water, cover, and bring to boil on high heat. Reduce heat and simmer for 25 minutes. Extract juice.” — NCHFP (nchfp.uga.edu): Quince Jelly without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/quince-jelly-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie funtów to rachunek JarAtlas, zaokrąglone. Identyfikacja „quince” jako Cydonia oblonga (pl: pigwa pospolita) oraz wyłączenie pigwowca (Chaenomeles, w Polsce potocznie też „pigwa”) to zakres JarAtlas (ostrożny), nie zdanie źródła. Źródło pisze „¼ cups” (liczba mnoga przy 1/4), karta „1/4 szklanki”.
- **Karty (1):** `quince-v08.md:3`, `quince-v08.md:7`, `quince-v08.md:9`, `quince-v08.md:17` i 4 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-229 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Quince Jelly without Pectin, galaretka: odmierzony sok przelać do garnka, dodać sok z cytryny i cukier, dobrze wymieszać; gotować na dużym ogniu do temperatury o 8 °F (ok. 4,4 °C) wyższej od temperatury wrzenia wody albo aż masa spływa z łyżki płatem (test łyżki); zdjąć z ognia, szybko zebrać pianę; gorącą galaretkę od razu nalać do gorących, sterylnych słoików, 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; przetrzeć brzegi zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki, wekować w kąpieli wodnej; tabela 1 (hot, 1/2 pinty lub pint): 0–1000 stóp 5 min, 1001–6000 stóp 10 min, wyżej 15 min.
- **Źródło (szczebel 1):** „Measure quince juice into a kettle. Add lemon juice and sugar and stir well. Boil over high heat to 8 degrees F. above the boiling point of water, or until jelly mixture sheets from a spoon. Remove from heat; skim off foam quickly. Pour hot jelly immediately into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids.” — NCHFP (nchfp.uga.edu): Quince Jelly without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/quince-jelly-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Quince Jelly without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/quince-jelly-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia °F i cali to rachunek JarAtlas (różnica 8 °F = 4,4 °C), zaokrąglone.
- **Karty (1):** `quince-v08.md:41`, `quince-v08.md:43`, `quince-v08.md:51`, `quince-v08.md:57` i 5 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-234 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Citrus Marmalade: przy obieraniu zostawić trochę białej błony pod skórką (tam jest większość pektyny); składniki: 3/4 szklanki skórki grejpfruta, 3/4 szklanki skórki pomarańczy (1 pomarańcza), 1/3 szklanki skórki cytryny (1 cytryna), 1 quart (ok. 0,95 l) zimnej wody, miąższ 1 grejpfruta, miąższ 4 średnich pomarańczy, 2 szklanki wrzącej wody, 3 szklanki cukru; wychodzi ok. 3–4 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „When peeling citrus fruits for marmalades, be sure to include some of the white membrane found just under the skin. This is where most of the pectin is located.” — NCHFP (nchfp.uga.edu): Citrus Marmalade, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/marmalades/citrus-marmalade/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „¾ cup grapefruit peel (from grapefruit) ¾ cup orange peel (1 orange) 1/3 cup lemon peel (1 lemon) 1 quart cold water pulp of 1 grapefruit pulp of 4 medium-sized oranges 2 cups boiling water 3 cups sugar Yield: About 3 or 4 half-pint jars” — NCHFP (nchfp.uga.edu): Citrus Marmalade, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/marmalades/citrus-marmalade/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie quarta to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `grapefruit-v02.md:3`, `grapefruit-v02.md:7`, `grapefruit-v02.md:9`, `grapefruit-v02.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-236 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Lemon Curd, Canned, składniki: 2 1/2 szklanki drobnego cukru (superfine; jeśli go brak, zwykły cukier zmielić 1 minutę w młynku lub malakserze, odstawić, użyć; nie używać cukru pudru), 1/2 szklanki świeżo startej skórki cytryny (opcjonalnie), 1 szklanka butelkowanego soku z cytryny, 3/4 szklanki zimnego niesolonego masła w kawałkach ok. 3/4 cala (ok. 1,9 cm), 7 dużych żółtek, 4 duże całe jajka; sprzęt: tarka do skórki, trzepaczka balonowa, garnek do gotowania na parze (podwójny) 1 1/2 quarta (ok. 1,4 l) albo większy, sitko, termometr kuchenny mierzący do 180 °F (ok. 82 °C) albo wyżej, miska szklana lub ze stali nierdzewnej, szpatułka silikonowa lub łyżka, sprzęt do wekowania w kąpieli wodnej; wychodzi ok. 3–4 słoików 1/2 pinty; wariant lime curd: ten sam przepis z 1 szklanką butelkowanego soku z limonki i 1/4 szklanki świeżej skórki limonki zamiast soku i skórki z cytryny.
- **Źródło (szczebel 1):** „2½ cups superfine sugar* ½ cup lemon zest (freshly zested), optional 1 cup bottled lemon juice** ¾ cup unsalted butter, chilled, cut into approximately ¾" pieces 7 large egg yolks 4 large whole eggs” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „lemon zester, balloon whisk, 1½ quart double boiler*** (the top double boiler pan should be at least 1½-quart volume), strainer, kitchen thermometer measuring at least up to 180°F, glass or stainless steel medium mixing bowl, silicone spatula or cooking spoon, and equipment for boiling water canning. Yield: About 3 to 4 half-pint jars” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Variation: For Lime Curd, use the same recipe but substitute 1 cup bottled lime juice and ¼ cup fresh lime zest for the lemon juice and zest.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „If superfine sugar is not available, run granulated sugar through a grinder or food processor for 1 minute, let settle, and use in place of superfine sugar. Do not use powdered sugar.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia to rachunek JarAtlas, zaokrąglone.
- **Karty (2):** `lemon-v10.md:3`, `lemon-v10.md:7`, `lemon-v10.md:11`, `lemon-v10.md:19` i 5 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SUS-035 · szczebel 3

- **Twierdzenie:** Toksyny grzybów trujących nie są niszczone przez suszenie ani gotowanie; odróżnić gatunki jadalne od trujących może tylko ekspert.
- **Źródło (szczebel 3):** „WARNING: The toxins of poisonous varieties of mushrooms are not destroyed by drying or by cooking.” — Colorado State Univ. Extension, Drying Vegetables (peer-reviewed); przypis do Table 2, <https://extension.colostate.edu/resource/drying-vegetables/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „Only a certified expert can differentiate between poisonous and edible varieties.” — Montana State Univ. Extension, MontGuide MT200907HR Drying Vegetables (2017); przypis *** do tabeli, <https://extension-store.montana.edu/montguides/drying-vegetables>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v13.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-001 · szczebel 1

- **Twierdzenie:** Żywność niskokwasowa ma pH wyższe niż 4,6; obejmuje mięso czerwone, owoce morza i ryby, drób, mleko i wszystkie świeże warzywa poza większością pomidorów (USA, USDA/NCHFP).
- **Źródło (szczebel 1):** „Low-acid foods have pH values higher than 4.6. They include red meats, seafood, poultry, milk, and all fresh vegetables except for most tomatoes.” — treść strony, <https://nchfp.uga.edu/how/can/general-information/ensuring-safe-canned-foods/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v13.md:12`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-020 · szczebel 1

- **Twierdzenie:** Nie wolno wekować grzybów dzikich (leśnych).
- **Źródło (szczebel 1):** „Caution: Do not can wild mushrooms.” — treść strony, <https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/mushrooms-whole-or-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v13.md:8`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-026 · szczebel 1

- **Twierdzenie:** Wekowanie dyni letniej (cukinia, patison) bez marynowania nie jest (już) zalecane z powodu niepewności co do czasów obróbki opartych na badaniach.
- **Źródło (szczebel 1):** „Canning summer squash (without pickling) is not recommended” — treść strony, <https://nchfp.uga.edu/blog/so-long-summer-squash...see-you-this-winter>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „The reason for withdrawal is uncertainty about the determination of adequate processing times.” — treść strony, <https://hgic.clemson.edu/preserving-summer-squash/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „There is uncertainty related to the determination of research-based processing times.” — treść strony, <https://extension.oregonstate.edu/es/catalog/sp-50-447-preserving-summer-squash>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `zucchini-v05.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-054 · szczebel 1

- **Twierdzenie:** Wekowania żywności niskokwasowej nie wolno prowadzić w kąpieli wodnej: kąpiel wodna nadaje się wyłącznie do żywności kwaśnej (pH 4,6 lub niższe), np. owoców, pikli, kiszonej kapusty, dżemów, i tylko według przetestowanego przepisu; pomidory i figi wolno w niej wekować dopiero po zakwaszeniu sokiem z cytryny lub kwasem cytrynowym.
- **Źródło (szczebel 1):** „Acid foods have a pH of 4.6 or lower. They include fruits, pickles, sauerkraut, jams, jellies, marmalades, and fruit butters.” — treść strony, <https://nchfp.uga.edu/how/can/general-information/ensuring-safe-canned-foods/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Using boiling water canners for these foods poses a real risk of botulism poisoning.” — treść strony, <https://nchfp.uga.edu/how/can/general-information/for-safetys-sake/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Blanching also helps, but the vital controls are the method of canning and making sure the recommended research-based process times found in the USDA's Complete Guide to Home Canning are used.” — treść strony (Ensuring Safe Canned Foods), <https://nchfp.uga.edu/how/can/general-information/ensuring-safe-canned-foods/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Synteza SZY-001/006: źródło nie używa słowa „wyłącznie”; wniosek z podziału pH i zakazu dla mięsa/warzyw. Klauzula „tylko według przetestowanego przepisu” oddaje „research-based process times … are used” (to samo źródło, 2026-11-01): „przetestowany” = oparty na badaniach USDA.
- **Karty (1):** `white-cabbage-v13.md:20`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### G2. Obróbka cieplna: czasy, wysokość n.p.m., temperatury, sterylizacja słoików, wolna przestrzeń, zamknięcie (206)

**Grupa G2 zbiorczo:** ☐ zatwierdzam wszystkie punkty grupy poza oznaczonymi niżej · ☐ nie zatwierdzam zbiorczo

#### ACI-069 · szczebel 1

- **Twierdzenie:** Całe owoce jagodowe z listy NCHFP, kąpiel wodna, 0–1000 stóp: hot pack (tylko borówki, porzeczki, agrest, huckleberry) 1 pt i 1 qt 15 min; raw pack (wszystkie z listy) 1 pt 15 min, 1 qt 20 min.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 15 min 20 20 25 Raw Pints 15 20 20 25 Quarts 20 25 30 35” — NCHFP (nchfp.uga.edu): Berries-Whole, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (4):** `currant-v13.md:37`, `gooseberry-v09.md:39`, `gooseberry-v11.md:39`, `raspberry-blackberry-v14.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-070 · szczebel 1

- **Twierdzenie:** Wiśnie i czereśnie całe, kąpiel wodna, 0–1000 stóp: hot pack 1 pt 15 min, 1 qt 20 min; raw pack 25 min.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — NCHFP (nchfp.uga.edu): Cherries-Whole, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (4):** `sour-cherry-v09.md:37`, `sour-cherry-v11.md:37`, `sweet-cherry-v07.md:43`, `sweet-cherry-v08.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-071 · szczebel 1

- **Twierdzenie:** Jabłka w plastrach (hot pack; raw pack daje słabą jakość), kąpiel wodna, 0–1000 stóp: 20 min dla 1 pt i 1 qt.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 20 min 25 30 35” — NCHFP (nchfp.uga.edu): Apples-Sliced, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apple-v13.md:33`, `apple-v13.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-072 · szczebel 1

- **Twierdzenie:** Morele połówki/plastry, kąpiel wodna, 0–1000 stóp: hot pack 1 pt 20 min, 1 qt 25 min; raw pack 1 pt 25 min, 1 qt 30 min.
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 30 35 40 Raw Pints 25 30 35 40 Quarts 30 35 40 45” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apricot-v08.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-074 · szczebel 1

- **Twierdzenie:** Gruszki połówki (hot pack), kąpiel wodna, 0–1000 stóp: 1 pt 20 min, 1 qt 25 min.
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 min 30 35 40” — NCHFP (nchfp.uga.edu): Pears-Halved, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `pear-v07.md:33`, `pear-v07.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-075 · szczebel 1

- **Twierdzenie:** Śliwki połówki lub całe, kąpiel wodna, 0–1000 stóp: 1 pt 20 min, 1 qt 25 min.
- **Źródło (szczebel 1):** „Hot and Raw Pints 20 min 25 30 35 Quarts 25 min 30 35 40” — NCHFP (nchfp.uga.edu): Plums-Halved or Whole, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:35`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-077 · szczebel 1

- **Twierdzenie:** Rabarbar duszony z cukrem (hot pack), kąpiel wodna, 0–1000 stóp: 15 min dla 1 pt i 1 qt.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 15 min 20 25” — NCHFP (nchfp.uga.edu): Rhubarb-Stewed, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `rhubarb-v05.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-079 · szczebel 1

- **Twierdzenie:** Sok jabłkowy (hot, do wysterylizowanych słoików), kąpiel wodna, 0–1000 stóp: 1 pt i 1 qt 5 min, 1/2 galona 10 min.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 5 min 10 15 Half-Gallons 10 min 15 20” — NCHFP (nchfp.uga.edu): Apple Juice, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apple-v16.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-172 · szczebel 1

- **Twierdzenie:** NCHFP sok pomidorowy, kąpiel wodna, hot pack, Table 1, na wysokości 1001–3000 stóp: pint 40 min, quart 45 min.
- **Źródło (szczebel 1):** „Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — Table 1 (boiling-water canner), kolumny 0 - 1,000 ft / 1,001 - 3,000 ft / 3,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v09.md:29`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-174 · szczebel 1

- **Twierdzenie:** Pinta płynu USA to 473,1765 ml (ok. 473 ml), a quart płynu USA to 946,3529 ml (ok. 946 ml). Rachunek: słoik 0,5 l mieści ok. 27 ml więcej niż pinta i mniej niż 1 1/2 pinty (ok. 710 ml); słoik 1 l mieści ok. 54 ml więcej niż quart.
- **Źródło (szczebel 1):** „1 liquid pint (pt) = 0.016 710 07 473.176 5 0.473 176 5” — NIST Handbook 44 (2025), Appendix C, Units of Liquid Volume, s. C-17 (strona PDF 539), <https://nvlpubs.nist.gov/nistpubs/hb/2025/NIST.HB.44-2025.pdf>, odczyt 2026-11-01, pdftotext -layout+grep
- **Źródło (szczebel 1):** „1 liquid quart (qt) = 0.033 420 14 946.352 9 0.946 352 9” — jak wyżej, <https://nvlpubs.nist.gov/nistpubs/hb/2025/NIST.HB.44-2025.pdf>, odczyt 2026-11-01, pdftotext -layout+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek ze źródła: 1,5 × 473,1765 = 709,76 ml; 500 − 473,18 = 26,82 ml; 1000 − 946,35 = 53,65 ml. Wyniki przybliżone do 1 ml.
- **Karty (51):** `apple-v09.md:47`, `apple-v10.md:63`, `apple-v13.md:55`, `apple-v16.md:55` i 47 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-175 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla słoików metrycznych (NCHFP nie podaje czasów dla słoików metrycznych): słoik do 473 ml — czas dla pint; słoik większy niż pinta, do 946 ml, np. 0,5 l albo 0,9 l — czas dla quart (czas dla quart obowiązuje już od słoików 1 1/2 pinty, ok. 710 ml, a słoik 0,5 l jest mniejszy); słoik większy niż quart, np. 1 l — ten przepis NCHFP nie podaje dla niego czasu, więc JarAtlas zaleca mniejszy słoik.
- **Źródło (szczebel 1):** „Process times for ½-pint and pint jars are the same, as are times for 1-½ pint and quart jars.” — Using tables for determining proper process times, <https://nchfp.uga.edu/how/can/general-information/selecting-the-correct-processing-time/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: źródło nie mówi o słoikach metrycznych. Kierunek ostrożny: słoik między dwoma przetestowanymi rozmiarami dostaje czas większego z nich, a słoik większy niż największy przetestowany nie dostaje czasu. Granice 473 i 946 ml zaokrąglone w dół (rachunek ACI-174).
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p2`
- **Karty (28):** `apple-v09.md:49`, `apple-v09.md:51`, `apple-v10.md:65`, `apple-v10.md:67` i 53 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-176 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** 1 stopa = 0,3048 m dokładnie, więc 1000 stóp = 304,8 m, 3000 stóp = 914,4 m, 6000 stóp = 1828,8 m. Karty podają te granice w metrach zaokrąglone w dół, w stronę dłuższego czasu: 1000 stóp jako 300 m, 3000 stóp jako 900 m, 6000 stóp jako 1800 m.
- **Źródło (szczebel 1):** „1 foot = 0.3048 meter” — NIST Handbook 44 (2025), Appendix C, General Tables of Units of Measurement (definicja stopy międzynarodowej), <https://nvlpubs.nist.gov/nistpubs/hb/2025/NIST.HB.44-2025.pdf>, odczyt 2026-11-01, pdftotext -layout+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek; zaokrąglenie w dół granicy górnej przedziału przenosi użytkownika tuż poniżej granicy do przedziału z dłuższym czasem (strona bezpieczna).
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p2`
- **Karty (53):** `apple-v09.md:33`, `apple-v09.md:37`, `apple-v09.md:39`, `apple-v09.md:41` i 233 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-177 · szczebel 1

- **Twierdzenie:** NCHFP sok pomidorowy, kąpiel wodna, hot pack, Table 1, na wysokości 3001–6000 stóp: pint 45 min, quart 50 min.
- **Źródło (szczebel 1):** „Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — Table 1 (boiling-water canner), kolumny 0 - 1,000 ft / 1,001 - 3,000 ft / 3,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v09.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-178 · szczebel 1

- **Twierdzenie:** NCHFP sok pomidorowy, kąpiel wodna, hot pack, Table 1, powyżej 6000 stóp: pint 50 min, quart 55 min.
- **Źródło (szczebel 1):** „Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — Table 1 (boiling-water canner), kolumny 0 - 1,000 ft / 1,001 - 3,000 ft / 3,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `tomato-v09.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-179 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas: gdy tabela przepisu NCHFP podaje czasy tylko dla słoików do pinty, słoik większy niż pinta (473 ml), np. 0,5 l, nie ma przetestowanego czasu, więc JarAtlas zaleca słoik do 473 ml (np. 0,2 l albo 0,25 l lub słoik 1/2 pinty).
- **Źródło (szczebel 1):** „Process times for ½-pint and pint jars are the same, as are times for 1-½ pint and quart jars.” — Using tables for determining proper process times, <https://nchfp.uga.edu/how/can/general-information/selecting-the-correct-processing-time/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła (jak ACI-175): słoik większy niż największy przetestowany rozmiar nie dostaje czasu. Granica 473 ml zaokrąglona w dół (ACI-174).
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p2`
- **Karty (18):** `apricot-v06.md:61`, `bell-pepper-v01.md:61`, `bell-pepper-v09.md:79`, `corn-v09.md:65` i 14 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-181 · szczebel 1

- **Twierdzenie:** NCHFP wiśnie i czereśnie całe, hot pack: na każdą kwartę odsączonych owoców 1/2 szklanki wody, soku albo syropu, zagotować; napełnić słoiki owocami i płynem z gotowania, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Hot pack – In a large saucepan add ½ cup water, juice, or syrup for each quart of drained fruit and bring to boil. Fill jars with cherries and cooking liquid, leaving ½-inch headspace.” — Hot pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:25`, `sour-cherry-v11.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-182 · szczebel 1

- **Twierdzenie:** NCHFP wiśnie i czereśnie całe, raw pack: do każdego słoika 1/2 szklanki gorącej wody, soku albo syropu; napełnić odsączonymi owocami, delikatnie potrząsając; dolać gorącego płynu, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni. Potem założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Raw pack – Add ½ cup hot water, juice, or syrup to each jar. Fill jars with drained cherries, shaking down gently as you fill. Add more hot liquid, leaving ½-inch headspace.” — Raw pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Add more hot liquid, leaving ½-inch headspace. Adjust lids and process.” — Raw pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:29`, `sour-cherry-v11.md:31`, `sour-cherry-v11.md:35`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-183 · szczebel 1

- **Twierdzenie:** NCHFP wiśnie i czereśnie całe, Table 1, kąpiel wodna, na wysokości 1001–3000 stóp: hot pack pint 20 min, quart 25 min; raw pack (pint albo quart) 30 min.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — Table 1, kolumna 1,001 - 3,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-184 · szczebel 1

- **Twierdzenie:** NCHFP wiśnie i czereśnie całe, Table 1, kąpiel wodna, na wysokości 3001–6000 stóp: hot pack pint 20 min, quart 30 min; raw pack (pint albo quart) 35 min.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — Table 1, kolumna 3,001 - 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-185 · szczebel 1

- **Twierdzenie:** NCHFP wiśnie i czereśnie całe, Table 1, kąpiel wodna, powyżej 6000 stóp: hot pack pint 25 min, quart 35 min; raw pack (pint albo quart) 40 min.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-187 · szczebel 1

- **Twierdzenie:** NCHFP śliwki, hot pack: śliwki włożyć do wody albo gorącego syropu i gotować 2 minuty, przykryć i odstawić na 20–30 minut; napełnić słoiki gorącymi śliwkami i płynem, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Hot pack – Add plums to water or hot syrup and boil 2 minutes. Cover saucepan and let stand 20 to 30 minutes. Fill jars with hot plums and cooking liquid or syrup, leaving 1/2-inch headspace.” — Hot pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:25`, `plum-v13.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-188 · szczebel 1

- **Twierdzenie:** NCHFP śliwki, raw pack: ciasno napełnić słoiki surowymi śliwkami i dolać gorącej wody albo syropu, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Raw pack – Fill jars with raw plums, packing firmly. Add hot water or syrup, leaving 1/2-inch headspace.” — Raw pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:29`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-189 · szczebel 1

- **Twierdzenie:** NCHFP śliwki połówki lub całe, Table 1, kąpiel wodna (hot i raw pack), na wysokości 1001–3000 stóp: pint 25 min, quart 30 min.
- **Źródło (szczebel 1):** „Hot and Raw Pints 20 min 25 30 35 Quarts 25 min 30 35 40” — Table 1, kolumna 1,001 - 3,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-190 · szczebel 1

- **Twierdzenie:** NCHFP śliwki połówki lub całe, Table 1, kąpiel wodna (hot i raw pack), na wysokości 3001–6000 stóp: pint 30 min, quart 35 min.
- **Źródło (szczebel 1):** „Hot and Raw Pints 20 min 25 30 35 Quarts 25 min 30 35 40” — Table 1, kolumna 3,001 - 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-191 · szczebel 1

- **Twierdzenie:** NCHFP śliwki połówki lub całe, Table 1, kąpiel wodna (hot i raw pack), powyżej 6000 stóp: pint 35 min, quart 40 min.
- **Źródło (szczebel 1):** „Hot and Raw Pints 20 min 25 30 35 Quarts 25 min 30 35 40” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-194 · szczebel 1

- **Twierdzenie:** NCHFP śliwki: po napełnieniu słoików (hot albo raw pack) założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „leaving 1/2-inch headspace. Adjust lids and process.” — Procedure, po Raw pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-197 · szczebel 1

- **Twierdzenie:** NCHFP pomidory w soku, na surowo (raw pack): podgrzać sok pomidorowy w garnku; napełnić słoiki surowymi pomidorami, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni, i zalać je gorącym sokiem pomidorowym, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Raw pack – Heat tomato juice in a saucepan. Fill jars with raw tomatoes, leaving ½-inch headspace.” — Whole or Halved Tomatoes (packed in tomato juice), Raw pack, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Cover tomatoes in the jars with hot tomato juice, leaving ½-inch headspace.” — Whole or Halved Tomatoes (packed in tomato juice), Raw pack, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v10.md:29`, `tomato-v10.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-198 · szczebel 1

- **Twierdzenie:** NCHFP pomidory w soku, na gorąco (hot pack): pomidory włożyć do dużego garnka, zalać sokiem pomidorowym tak, żeby były całkiem przykryte, i gotować łagodnie 5 minut; napełnić słoiki gorącymi pomidorami, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni, dolać gorącego soku do przykrycia pomidorów, zostawiając 1/2 cala (ok. 1,3 cm); założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Hot pack – Put tomatoes in a large saucepan and add enough tomato juice to completely cover them. Boil tomatoes and juice gently for 5 minutes.” — Whole or Halved Tomatoes (packed in tomato juice), Hot pack, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Fill jars with hot tomatoes, leaving ½-inch headspace. Add hot tomato juice to the jars to cover the tomatoes, leaving ½-inch headspace.” — Whole or Halved Tomatoes (packed in tomato juice), Hot pack, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Adjust lids and process according to the recommendations in Table 1” — Whole or Halved Tomatoes (packed in tomato juice), Hot pack, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v10.md:33`, `tomato-v10.md:35`, `tomato-v10.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-199 · szczebel 1

- **Twierdzenie:** NCHFP pomidory całe lub połówki w soku, kąpiel wodna, 1001–3000 stóp: 90 minut dla słoików pint i quart (hot i raw pack).
- **Źródło (szczebel 1):** „Hot & Raw Pints or Quarts 85 min 90 95 100” — Table 1, kolumna 1,001 - 3,000 ft, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v10.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-200 · szczebel 1

- **Twierdzenie:** NCHFP pomidory całe lub połówki w soku, kąpiel wodna, 3001–6000 stóp: 95 minut dla słoików pint i quart (hot i raw pack).
- **Źródło (szczebel 1):** „Hot & Raw Pints or Quarts 85 min 90 95 100” — Table 1, kolumna 3,001 - 6,000 ft, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v10.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-201 · szczebel 1

- **Twierdzenie:** NCHFP pomidory całe lub połówki w soku, kąpiel wodna, powyżej 6000 stóp: 100 minut dla słoików pint i quart (hot i raw pack).
- **Źródło (szczebel 1):** „Hot & Raw Pints or Quarts 85 min 90 95 100” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/whole-or-halved-tomatoes-packed-in-tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v10.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-205 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana, kąpiel wodna, hot pack, 0–1000 stóp: słoiki 1/2 pinty i pint 5 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna 0 - 1,000 ft, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v01.md:3`, `bell-pepper-v01.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-206 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana, kąpiel wodna, hot pack, 1001–6000 stóp: słoiki 1/2 pinty i pint 10 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna 1,001 - 6,000 ft, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v01.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-207 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana, kąpiel wodna, hot pack, powyżej 6000 stóp: słoiki 1/2 pinty i pint 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v01.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-208 · szczebel 1

- **Twierdzenie:** NCHFP papryka marynowana: tabela 1 podaje czasy tylko dla słoików 1/2 pinty i pint.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Pickled Bell Peppers, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bell-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v01.md:59`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-213 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets: odciąć liście, zostawiając 1 cal (ok. 2,5 cm) łodygi i korzenie, żeby buraki nie traciły barwy; dokładnie umyć, posortować według wielkości; buraki podobnej wielkości zalać wrzącą wodą i gotować do miękkości (ok. 25–30 minut); uwaga (wyróżniona w źródle): wodę odlać i wylać; buraki ostudzić, odciąć korzenie i łodygi, zdjąć skórkę i pokroić w plastry grubości 1/4 cala (ok. 0,6 cm); cebulę obrać i cienko pokroić.
- **Źródło (szczebel 1):** „Trim off beet tops, leaving 1 inch of stem and roots to prevent bleeding of color. Wash thoroughly. Sort for size. Cover similar sizes together with boiling water and cook until tender (about 25 to 30 minutes).” — NCHFP (nchfp.uga.edu): Pickled Beets, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Caution: Drain and discard liquid. Cool beets. Trim off roots and stems and slip off skins. Slice into 1/4-inch slices. Peel and thinly slice onions.” — NCHFP (nchfp.uga.edu): Pickled Beets, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1 cal = 2,54 cm; 1/4 cala = 0,635 cm, w treści ok. 0,6 cm.
- **Karty (1):** `beetroot-v06.md:31`, `beetroot-v06.md:33`, `beetroot-v06.md:35`, `beetroot-v06.md:37` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-215 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets: napełnić słoiki burakami i cebulą, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; dolać gorącej zalewy octowej, zostawiając 1/2 cala wolnej przestrzeni; założyć pokrywki i wekować według tabeli 1.
- **Źródło (szczebel 1):** „Fill jars with beets and onions, leaving 1/2-inch headspace. Add hot vinegar solution, allowing 1/2-inch headspace. Adjust lids and process according to the recommendations in Table 1.” — NCHFP (nchfp.uga.edu): Pickled Beets, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1/2 cala = 1,27 cm, w treści ok. 1,3 cm.
- **Karty (1):** `beetroot-v06.md:51`, `beetroot-v06.md:53`, `beetroot-v06.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-216 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets, tabela 1, kąpiel wodna, hot pack, ten sam czas dla słoików pint i quart; 0–1000 stóp: 30 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 30 min 35 40 45” — NCHFP (nchfp.uga.edu): Pickled Beets, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `beetroot-v06.md:3`, `beetroot-v06.md:63`, `beetroot-v06.md:79`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-217 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets, wariant: całe małe buraczki o średnicy 1–1 1/2 cala (ok. 2,5–3,8 cm), przygotowane jak wyżej, ale nakładane w całości, bez krojenia; cebulę można pominąć.
- **Źródło (szczebel 1):** „Variation: Pickled whole baby beets. Follow above directions but use beets that are 1- to 1-1/2 inches in diameter. Pack whole; do not slice. Onions may be omitted.” — NCHFP (nchfp.uga.edu): Pickled Beets, Variation, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1,5 × 2,54 = 3,81 cm, w treści ok. 3,8 cm.
- **Karty (1):** `beetroot-v06.md:59`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-220 · szczebel 1

- **Twierdzenie:** NCHFP morele, na gorąco (hot pack): odsączone owoce włożyć do dużego garnka z syropem, wodą albo sokiem i doprowadzić do wrzenia; napełnić słoiki gorącymi owocami i płynem, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; połówki układać warstwami, przekrojem w dół.
- **Źródło (szczebel 1):** „Hot pack – In a large saucepan place drained fruit in syrup, water, or juice and bring to boil. Fill jars with hot fruit and cooking liquid, leaving ½-inch headspace. Place halves in layers, cut side down.” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1/2 cala = 1,27 cm, w treści ok. 1,3 cm.
- **Karty (1):** `apricot-v08.md:31`, `apricot-v08.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-221 · szczebel 1

- **Twierdzenie:** NCHFP morele, na surowo (raw pack): napełnić słoiki surowymi owocami przekrojem w dół i dolać gorącej wody, soku albo syropu, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; w obu sposobach założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Raw pack – Fill jars with raw fruit, cut side down, and add hot water, juice, or syrup, leaving ½-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1/2 cala = 1,27 cm, w treści ok. 1,3 cm.
- **Karty (1):** `apricot-v08.md:35`, `apricot-v08.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-222 · szczebel 1

- **Twierdzenie:** NCHFP morele, kąpiel wodna, 1001–3000 stóp: hot pack słoiki pint 25 minut, quart 30 minut; raw pack słoiki pint 30 minut, quart 35 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints 20 min 25 30 35 Quarts 25 30 35 40 Raw Pints 25 30 35 40 Quarts 30 35 40 45” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v08.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-223 · szczebel 1

- **Twierdzenie:** NCHFP morele, kąpiel wodna, 3001–6000 stóp: hot pack słoiki pint 30 minut, quart 35 minut; raw pack słoiki pint 35 minut, quart 40 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints 20 min 25 30 35 Quarts 25 30 35 40 Raw Pints 25 30 35 40 Quarts 30 35 40 45” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v08.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-224 · szczebel 1

- **Twierdzenie:** NCHFP morele, kąpiel wodna, powyżej 6000 stóp: hot pack słoiki pint 35 minut, quart 40 minut; raw pack słoiki pint 40 minut, quart 45 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints 20 min 25 30 35 Quarts 25 30 35 40 Raw Pints 25 30 35 40 Quarts 30 35 40 45” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v08.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-225 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets, tabela 1, kąpiel wodna, hot pack, słoiki pint lub quart, 1001–3000 stóp: 35 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 30 min 35 40 45” — NCHFP (nchfp.uga.edu): Pickled Beets, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `beetroot-v06.md:67`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-226 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets, tabela 1, kąpiel wodna, hot pack, słoiki pint lub quart, 3001–6000 stóp: 40 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 30 min 35 40 45” — NCHFP (nchfp.uga.edu): Pickled Beets, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `beetroot-v06.md:69`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-227 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Beets, tabela 1, kąpiel wodna, hot pack, słoiki pint lub quart, powyżej 6000 stóp: 45 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 30 min 35 40 45” — NCHFP (nchfp.uga.edu): Pickled Beets, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-beets/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `beetroot-v06.md:71`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-230 · szczebel 1

- **Twierdzenie:** NCHFP Standard Tomato Sauce, kąpiel wodna, hot pack, Table 1, na wysokości 1001–3000 stóp: pint 40 min, quart 45 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 f t 3,001 - 6,000 ft Above 6,000 ft Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v08.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-231 · szczebel 1

- **Twierdzenie:** NCHFP Standard Tomato Sauce, kąpiel wodna, hot pack, Table 1, na wysokości 3001–6000 stóp: pint 45 min, quart 50 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 f t 3,001 - 6,000 ft Above 6,000 ft Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v08.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-232 · szczebel 1

- **Twierdzenie:** NCHFP Standard Tomato Sauce, kąpiel wodna, hot pack, Table 1, powyżej 6000 stóp: pint 50 min, quart 55 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 f t 3,001 - 6,000 ft Above 6,000 ft Hot Pints 35 min 40 45 50 Quarts 40 45 50 55” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v08.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-233 · szczebel 1

- **Twierdzenie:** NCHFP sok pomidorowy (przygotowanie, gdy rozwarstwienie soku nie przeszkadza): pomidory umyć, usunąć szypułki, wyciąć obite lub przebarwione miejsca; pokroić w plastry lub ćwiartki do dużego garnka, rozgnieść, podgrzać i gotować na wolnym ogniu 5 minut; gorącą masę przetrzeć przez sito lub przecierak, żeby usunąć skórki i pestki.
- **Źródło (szczebel 1):** „Wash, remove stems, and trim off bruised or discolored portions.” — NCHFP (nchfp.uga.edu): Tomato Juice, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „If you are not concerned about juice separation, simply slice or quarter tomatoes into a large saucepan. Crush, heat, and simmer for 5 minutes before juicing.” — NCHFP (nchfp.uga.edu): Tomato Juice, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Press both types of heated juice through a sieve or food mill to remove skins and seeds.” — NCHFP (nchfp.uga.edu): Tomato Juice, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-juice/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Pominięto wariant NCHFP przeciwdziałający rozwarstwieniu soku (szybkie krojenie i wrzucanie do wrzącej masy); dotyczy jakości, nie bezpieczeństwa.
- **Karty (1):** `tomato-v08.md:17`, `tomato-v08.md:19`, `tomato-v08.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-238 · szczebel 1

- **Twierdzenie:** NCHFP Cherries-Whole, hot pack: w dużym garnku dodać 1/2 szklanki wody, soku lub syropu na każdy quart (ok. 0,95 l) odsączonych owoców i zagotować; napełnić słoiki owocami i płynem z gotowania, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Hot pack – In a large saucepan add ½ cup water, juice, or syrup for each quart of drained fruit and bring to boil. Fill jars with cherries and cooking liquid, leaving ½-inch headspace.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:25`, `sour-cherry-v09.md:27`, `sweet-cherry-v07.md:31`, `sweet-cherry-v07.md:33` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-239 · szczebel 1

- **Twierdzenie:** NCHFP Cherries-Whole, raw pack: do każdego słoika wlać 1/2 szklanki gorącej wody, soku lub syropu; napełnić słoik odsączonymi owocami, delikatnie potrząsając; dolać gorącego płynu, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; zamknąć i wekować.
- **Źródło (szczebel 1):** „Raw pack – Add ½ cup hot water, juice, or syrup to each jar. Fill jars with drained cherries, shaking down gently as you fill.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Add more hot liquid, leaving ½-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:29`, `sour-cherry-v09.md:31`, `sour-cherry-v09.md:33`, `sweet-cherry-v07.md:35` i 5 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-240 · szczebel 1

- **Twierdzenie:** NCHFP czereśnie lub wiśnie całe, kąpiel wodna, 1001–3000 stóp: hot pack słoiki pint 20 minut, quart 25 minut; raw pack słoiki pint lub quart 30 minut.
- **Źródło (szczebel 1):** „Process at Elevations of: Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — NCHFP (nchfp.uga.edu): Cherries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:41`, `sweet-cherry-v07.md:47`, `sweet-cherry-v08.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-241 · szczebel 1

- **Twierdzenie:** NCHFP czereśnie lub wiśnie całe, kąpiel wodna, 3001–6000 stóp: hot pack słoiki pint 20 minut, quart 30 minut; raw pack słoiki pint lub quart 35 minut.
- **Źródło (szczebel 1):** „Process at Elevations of: Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — NCHFP (nchfp.uga.edu): Cherries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:43`, `sweet-cherry-v07.md:49`, `sweet-cherry-v08.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-242 · szczebel 1

- **Twierdzenie:** NCHFP czereśnie lub wiśnie całe, kąpiel wodna, powyżej 6000 stóp: hot pack słoiki pint 25 minut, quart 35 minut; raw pack słoiki pint lub quart 40 minut.
- **Źródło (szczebel 1):** „Process at Elevations of: Style of Pack Jar Size 0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints 15 min 20 20 25 Quarts 20 25 30 35 Raw Pints or Quarts 25 30 35 40” — NCHFP (nchfp.uga.edu): Cherries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:45`, `sweet-cherry-v07.md:51`, `sweet-cherry-v08.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-243 · szczebel 1

- **Twierdzenie:** NCHFP Cherries-Whole: tabela czasów dla kąpieli wodnej dotyczy całych czereśni i wiśni (sweet or sour cherries).
- **Źródło (szczebel 1):** „Table 1. Recommended Process Time for Sweet or Sour Cherries, Whole in boiling-water canner.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `sour-cherry-v09.md:3`, `sour-cherry-v10.md:9`, `sweet-cherry-v07.md:3`, `sweet-cherry-v08.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-247 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Berries-Whole: myć po 1–2 quart (ok. 0,95–1,9 l) owoców naraz, odsączyć, w razie potrzeby usunąć szypułki i działki (cap, stem); agrestowi obciąć nożyczkami ogonki i resztki kwiatów (heads and tails); do każdego czystego słoika wlać 1/2 szklanki syropu, soku albo wody.
- **Źródło (szczebel 1):** „Wash 1 or 2 quarts of berries at a time. Drain, cap, and stem if necessary. For gooseberries, snip off heads and tails with scissors.” — NCHFP (nchfp.uga.edu): Berries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Add ½ cup syrup, juice, or water to each clean jar.” — NCHFP (nchfp.uga.edu): Berries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie quartów na litry to rachunek JarAtlas (quart US ≈ 0,946 l), zaokrąglony; ilość mytych naraz owoców nie wpływa na bezpieczeństwo.
- **Karty (4):** `currant-v13.md:13`, `currant-v13.md:27`, `gooseberry-v09.md:13`, `gooseberry-v09.md:15` i 6 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-249 · szczebel 1

- **Twierdzenie:** NCHFP Berries-Whole, raw pack: napełnić słoiki surowymi owocami, delikatnie potrząsając, zalać gorącym syropem, sokiem albo wodą, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Raw pack – Fill jars with any of the raw berries, shaking down gently while filling. Cover with hot syrup, juice, or water, leaving ½-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Berries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `currant-v13.md:3`, `currant-v13.md:15`, `currant-v13.md:29`, `currant-v13.md:31` i 16 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-250 · szczebel 1

- **Twierdzenie:** NCHFP owoce jagodowe całe, kąpiel wodna, raw pack, 1001–3000 stóp: słoiki pint 20 minut, quart 25 minut.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 15 min 20 20 25 Raw Pints 15 20 20 25 Quarts 20 25 30 35” — NCHFP (nchfp.uga.edu): Berries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `currant-v13.md:41`, `gooseberry-v09.md:43`, `gooseberry-v11.md:43`, `raspberry-blackberry-v14.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-251 · szczebel 1

- **Twierdzenie:** NCHFP owoce jagodowe całe, kąpiel wodna, raw pack, 3001–6000 stóp: słoiki pint 20 minut, quart 30 minut.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 15 min 20 20 25 Raw Pints 15 20 20 25 Quarts 20 25 30 35” — NCHFP (nchfp.uga.edu): Berries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `currant-v13.md:43`, `gooseberry-v09.md:45`, `gooseberry-v11.md:45`, `raspberry-blackberry-v14.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-252 · szczebel 1

- **Twierdzenie:** NCHFP owoce jagodowe całe, kąpiel wodna, raw pack, powyżej 6000 stóp: słoiki pint 25 minut, quart 35 minut.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 15 min 20 20 25 Raw Pints 15 20 20 25 Quarts 20 25 30 35” — NCHFP (nchfp.uga.edu): Berries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `currant-v13.md:45`, `gooseberry-v09.md:47`, `gooseberry-v11.md:47`, `raspberry-blackberry-v14.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-254 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Bread-and-Butter Zucchini: plastry cukinii i cebuli zalać wodą na 1 cal (ok. 2,5 cm) z solą, odstawić na 2 godziny i dokładnie odsączyć.
- **Źródło (szczebel 1):** „Cover zucchini and onion slices with 1 inch of water and salt. Let stand 2 hours and drain thoroughly.” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Brzmienie „zalać wodą na 1 cal” to odczytanie JarAtlas zdania „cover … with 1 inch of water and salt”; 1 cal = 2,54 cm (ok. 2,5 cm).
- **Karty (1):** `zucchini-v05.md:33`, `zucchini-v05.md:35`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-256 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Bread-and-Butter Zucchini, tabela 1, kąpiel wodna, hot pack, ten sam czas dla słoików pint i quart; 0–1000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 10 min 15 20” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v05.md:3`, `zucchini-v05.md:47`, `zucchini-v05.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-257 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Bread-and-Butter Zucchini, tabela 1, kąpiel wodna, hot pack, słoiki pint lub quart, 1001–6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 10 min 15 20” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v05.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-258 · szczebel 1

- **Twierdzenie:** NCHFP Pickled Bread-and-Butter Zucchini, tabela 1, kąpiel wodna, hot pack, słoiki pint lub quart, powyżej 6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 10 min 15 20” — NCHFP (nchfp.uga.edu): Pickled Bread-and-Butter Zucchini, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/pickled-bread-and-butter-zucchini/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v05.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-261 · szczebel 1

- **Twierdzenie:** NCHFP Zucchini-Pineapple: cukinię obrać i pokroić w kostkę 1/2 cala (ok. 1,3 cm) albo zetrzeć; wymieszać z pozostałymi składnikami w dużym garnku, doprowadzić do wrzenia i gotować na małym ogniu 20 minut; napełnić słoiki gorącą mieszaniną i płynem z gotowania, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Peel zucchini and either cut into ½-inch cubes or shred. Mix zucchini with other ingredients in a large saucepan and bring to a boil. Simmer 20 minutes. Fill jars with hot mixture and cooking liquid, leaving ½-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Zucchini-Pineapple, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/zucchini-pineapple/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v08.md:3`, `zucchini-v08.md:25`, `zucchini-v08.md:27`, `zucchini-v08.md:29` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-262 · szczebel 1

- **Twierdzenie:** NCHFP Zucchini-Pineapple, tabela 1 (kąpiel wodna, nakładanie na gorąco): czasy podane tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Zucchini-Pineapple, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/zucchini-pineapple/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v08.md:3`, `zucchini-v08.md:37`, `zucchini-v08.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-263 · szczebel 1

- **Twierdzenie:** NCHFP Zucchini-Pineapple, tabela 1: słoiki 1/2 pinty i pint, 1001–6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Zucchini-Pineapple, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/zucchini-pineapple/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v08.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-264 · szczebel 1

- **Twierdzenie:** NCHFP Zucchini-Pineapple, tabela 1: słoiki 1/2 pinty i pint, powyżej 6000 stóp: 25 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Zucchini-Pineapple, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/zucchini-pineapple/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `zucchini-v08.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-269 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers: papryki ostudzić, włożyć do garnka i przykryć wilgotną ściereczką (łatwiej obrać); po kilku minutach obrać każdą paprykę; całe papryki spłaszczyć.
- **Źródło (szczebel 1):** „Allow peppers to cool. Place in pan and cover with a damp cloth. This will make peeling the peppers easier. After several minutes of cooling, peel each pepper. Flatten whole peppers.” — NCHFP (nchfp.uga.edu): Marinated Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v09.md:47`, `bell-pepper-v09.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-271 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers, tabela 1 (kąpiel wodna, nakładanie na surowo, czasy tylko dla słoików 1/2 pinty i pint): 0–1000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Raw Half-pints and pints 15 min 20 20 25” — NCHFP (nchfp.uga.edu): Marinated Peppers, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v09.md:3`, `bell-pepper-v09.md:63`, `bell-pepper-v09.md:77`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-272 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers, tabela 1 (kąpiel wodna, nakładanie na surowo, czasy tylko dla słoików 1/2 pinty i pint): 1001–3000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Raw Half-pints and pints 15 min 20 20 25” — NCHFP (nchfp.uga.edu): Marinated Peppers, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v09.md:67`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-273 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers, tabela 1 (kąpiel wodna, nakładanie na surowo, czasy tylko dla słoików 1/2 pinty i pint): 3001–6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Raw Half-pints and pints 15 min 20 20 25” — NCHFP (nchfp.uga.edu): Marinated Peppers, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v09.md:69`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-274 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers, tabela 1 (kąpiel wodna, nakładanie na surowo, czasy tylko dla słoików 1/2 pinty i pint): powyżej 6000 stóp: 25 minut.
- **Źródło (szczebel 1):** „Raw Half-pints and pints 15 min 20 20 25” — NCHFP (nchfp.uga.edu): Marinated Peppers, Table 1, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `bell-pepper-v09.md:71`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-275 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly with Pectin, składniki: na wywar 12 (tuzin) średnich świeżych kolb czerwonej kukurydzy pastewnej (same kolby) i 2 quarty (ok. 1,9 l) wody; na galaretkę 3 szklanki wywaru, 1 opakowanie (1 3/4 uncji) pektyny w proszku, 3 szklanki cukru; wychodzi ok. 4 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „1 dozen medium-sized fresh red corncobs from field corn (cobs only) 2 quarts water To make jelly: 3 cups corncob juice 1 (1¾ ounce) package powdered pectin* 3 cups sugar Yield: About 4 half-pint jars” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** 2 quarty = 2 × 946 ml ≈ 1,89 l, w karcie „ok. 1,9 l”.
- **Karty (1):** `corn-v09.md:3`, `corn-v09.md:19`, `corn-v09.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-277 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly: odmierzyć 3 szklanki wywaru (w razie potrzeby dolać wody do 3 szklanek), wmieszać pektynę i doprowadzić do wrzenia; dodać cały cukier naraz i mieszając doprowadzić znowu do pełnego, burzliwego wrzenia; gotować 5 minut; zdjąć z ognia i szybko zebrać pianę.
- **Źródło (szczebel 1):** „Measure 3 cups of corncob juice into a large saucepot. (Water may be added if needed to make 3 cups liquid.) Stir in the pectin and bring to a boil. Add the sugar all at once, and bring the mixture back to a full roiling boil while stirring. Boil for 5 minutes. Remove from heat; skim off foam quickly.” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Procedure, To Make Jelly, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `corn-v09.md:35`, `corn-v09.md:37`, `corn-v09.md:39`, `corn-v09.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-278 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly: gorącą galaretkę od razu nalać do gorących słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Pour hot jelly immediately into hot, sterile jars, leaving ¼-inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner.” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** 1/4 cala = 0,635 cm, w karcie „ok. 0,6 cm” (o 0,035 cm mniej wolnej przestrzeni; bez znaczenia dla bezpieczeństwa, jak SLO-003).
- **Karty (1):** `corn-v09.md:3`, `corn-v09.md:47`, `corn-v09.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-279 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly, tabela 1: czasy podane tylko dla słoików 1/2 pinty i pint. Uwaga (2): zamiast wcześniejszej sterylizacji słoików można je umyć i wypłukać w gorącej wodzie i trzymać gorące do napełnienia; wtedy czas kąpieli wodnej wydłuża się i wynosi 10 minut na 0–1000 stóp.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Instead of pre-sterilizing jars, you have the option of washing and rinsing jars in hot water and then keeping them hot until filling. Then the process time is increased and becomes 10 min. (0-1,000 ft), 15 min. (1,001-6,000 ft.) or 20 min. (above 6,000 ft).” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Additional Notes (2), <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `corn-v09.md:3`, `corn-v09.md:45`, `corn-v09.md:51`, `corn-v09.md:63`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-280 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly, słoiki niesterylizowane wcześniej (uwaga 2), 1001–6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Then the process time is increased and becomes 10 min. (0-1,000 ft), 15 min. (1,001-6,000 ft.) or 20 min. (above 6,000 ft).” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Additional Notes (2), <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `corn-v09.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-281 · szczebel 1

- **Twierdzenie:** NCHFP Corncob Jelly, słoiki niesterylizowane wcześniej (uwaga 2), powyżej 6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Then the process time is increased and becomes 10 min. (0-1,000 ft), 15 min. (1,001-6,000 ft.) or 20 min. (above 6,000 ft).” — NCHFP (nchfp.uga.edu): Corncob Jelly with Pectin, Additional Notes (2), <https://nchfp.uga.edu/how/make-jam-jelly/jellies/corncob-jelly-with-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `corn-v09.md:57`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-287 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly: gorącą galaretkę od razu nalać do gorących słoików 1/2 pinty, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć pokrywki i wekować w kąpieli wodnej według tabeli 1; po wekowaniu zostawić słoiki do ostygnięcia bez ruszania na 12–24 godziny i sprawdzić, czy pokrywki się zassały.
- **Źródło (szczebel 1):** „Fill hot jelly immediately into hot, pre-sterilized half-pint jars, leaving 1/4-inch headspace. Wipe rims of jars with a dampened clean paper towel. Apply and adjust prepared lids. 8. Process filled jars in a boiling water canner according to the recommendations in Table 1 . 9. Let processed jars cool, undisturbed, 12 to 24 hours and check for vacuum seals.” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Procedure 7–9, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** 1/4 cala = 0,635 cm, w karcie „ok. 0,6 cm”.
- **Karty (1):** `chili-pepper-v13.md:57`, `chili-pepper-v13.md:59`, `chili-pepper-v13.md:77`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-288 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly, tabela 1: czasy tylko dla słoików 1/2 pinty. Opcjonalny proces 10-minutowy (może dać silniejsze podciśnienie w słoiku): słoików nie trzeba wcześniej sterylizować, wystarczy je umyć, wypłukać i trzymać gorące do napełnienia; 0–1000 stóp: 10 minut.
- **Źródło (szczebel 1):** „The following optional 10-minute boiling water process can also be used and may provide a stronger vacuum in the jar. Jars would not need to be pre-sterilized, but could be washed, rinsed and kept hot until filling. Hot Half-pints 10 min 15 20” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:3`, `chili-pepper-v13.md:53`, `chili-pepper-v13.md:55`, `chili-pepper-v13.md:61` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-289 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly, proces 10-minutowy (słoiki 1/2 pinty niesterylizowane wcześniej), 1001–6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints 10 min 15 20” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:65`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-290 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly, proces 10-minutowy (słoiki 1/2 pinty niesterylizowane wcześniej), powyżej 6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Hot Half-pints 10 min 15 20” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:67`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-294 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas: gdy tabela przepisu NCHFP podaje czasy tylko dla słoików 1/2 pinty, słoik 1/2 pinty to połowa pinty, ok. 236,6 ml (473,18 ml / 2); słoik większy, np. 0,25 l albo 0,5 l, nie ma przetestowanego czasu, więc JarAtlas zaleca słoik do 236 ml (np. 0,2 l albo słoik 1/2 pinty).
- **Źródło (szczebel 1):** „Hot Half-pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła (jak ACI-179). Granica 236,6 ml zaokrąglona w dół do 236 ml, jak 473 ml w ACI-179.
- **Decyzja:** `2026-11-02-jaratlas-06-karty-p7`
- **Karty (2):** `chili-pepper-v13.md:75`, `tomato-v11.md:67`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-296 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup: pomidory umyć, zanurzyć we wrzącej wodzie na 30–60 s albo do pęknięcia skórki, potem w zimnej; zdjąć skórkę, usunąć gniazda, pokroić na ćwiartki do garnka 4 galony (ok. 15 l); dodać cebulę i paprykę, doprowadzić do wrzenia i gotować bez przykrycia 20 min; przykryć, wyłączyć ogień i odstawić na 20 min.
- **Źródło (szczebel 1):** „Quarter tomatoes into 4-gallon stock pot or a large kettle. Add onions and red pepper. Bring to boil and simmer 20 minutes, uncovered. Cover, turn off heat and let stand for 20 minutes.” — NCHFP (nchfp.uga.edu): Tomato Ketchup, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:31`, `tomato-v13.md:33`, `tomato-v13.md:35`, `tomato-v13.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-298 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup: napełnić gorące słoiki pint, zostawiając 1/8 cala (ok. 0,3 cm) wolnej przestrzeni; usunąć pęcherzyki powietrza i poprawić wolną przestrzeń; przetrzeć brzegi zwilżonym ręcznikiem papierowym; założyć pokrywki i wekować według tabeli 1.
- **Źródło (szczebel 1):** „Fill hot pint jars, leaving 1/8-inch headspace. Remove air bubbles and adjust headspace if needed. Wipe rims of jars with a dampened clean paper towel.” — NCHFP (nchfp.uga.edu): Tomato Ketchup, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:49`, `tomato-v13.md:51`, `tomato-v13.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-299 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup, tabela 1 (kąpiel wodna, hot): czasy tylko dla słoików pint; 0–1000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Tomato Ketchup, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:3`, `tomato-v13.md:55`, `tomato-v13.md:67`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-301 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, kroki 1–3: słoiki 1/2 pinty umyć, wypłukać i trzymać gorące; pomidory opłukać, usunąć gniazda, nie obierać; pokroić na kawałki 1/2–3/4 cala (ok. 1,3–1,9 cm), zagotować pod przykryciem, potem gotować bez przykrycia ok. 1 h do zmniejszenia objętości o połowę; przetrzeć przez drobne sito albo młynek, nie używać blendera ani robota (wprowadzają powietrze).
- **Źródło (szczebel 1):** „Wash and rinse half-pint canning jars; keep hot until ready to fill.” — NCHFP (nchfp.uga.edu): Tomato Paste, Procedure 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Rinse tomatoes thoroughly under running water and remove cores; do not peel.” — NCHFP (nchfp.uga.edu): Tomato Paste, Procedure 2, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „(Do not use a blender or food processor, as these will incorporate undesired air into the tomatoes.)” — NCHFP (nchfp.uga.edu): Tomato Paste, Procedure 3, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:25`, `tomato-v11.md:27`, `tomato-v11.md:29`, `tomato-v11.md:31` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-304 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, tabela 1 (kąpiel wodna, hot): czasy tylko dla słoików 1/2 pinty; 0–1000 stóp: 45 minut.
- **Źródło (szczebel 1):** „Hot Half-pints 45 50 55 60” — NCHFP (nchfp.uga.edu): Tomato Paste, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:3`, `tomato-v11.md:51`, `tomato-v11.md:65`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-306 · szczebel 1

- **Twierdzenie:** NCHFP Apricot Jam without Pectin: wysterylizować słoiki; połączyć wszystkie składniki, powoli doprowadzić do wrzenia, mieszając, aż cukier się rozpuści; gotować szybko do zgęstnienia ok. 25 min, często mieszając; zdjąć z ognia, gorący dżem nałożyć do gorących sterylnych słoików z 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; przetrzeć brzegi, założyć dwuczęściowe pokrywki, wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Combine all ingredients; slowly bring to boiling, stirring occasionally until sugar dissolves. Cook rapidly until thick, about 25 minutes.” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Remove from heat and fill hot jam into hot, sterile jars, leaving ¼ inch headspace.” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v06.md:3`, `apricot-v06.md:21`, `apricot-v06.md:33`, `apricot-v06.md:35` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-307 · szczebel 1

- **Twierdzenie:** NCHFP Apricot Jam without Pectin, tabela 1 (kąpiel wodna, hot, słoiki sterylne): czasy tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 5 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v06.md:3`, `apricot-v06.md:47`, `apricot-v06.md:59`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-312 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin: gorącą galaretkę od razu wlać do gorących sterylnych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; przetrzeć brzegi, założyć dwuczęściowe metalowe pokrywki, wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Pour hot jelly immediately into hot, sterile jars, leaving ¼ inch headspace.” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:53`, `garden-herbs-v12.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-313 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin, tabela 1 (kąpiel wodna, hot, słoiki sterylne): czasy tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 5 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:3`, `garden-herbs-v12.md:57`, `garden-herbs-v12.md:69`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-315 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup, tabela 1: słoiki pint, 1001–6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Tomato Ketchup, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:59`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-316 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Ketchup, tabela 1: słoiki pint, powyżej 6000 stóp: 25 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Tomato Ketchup, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-ketchup/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v13.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-317 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, tabela 1: słoiki 1/2 pinty, 1001–3000 stóp: 50 minut.
- **Źródło (szczebel 1):** „Hot Half-pints 45 50 55 60” — NCHFP (nchfp.uga.edu): Tomato Paste, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-318 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, tabela 1: słoiki 1/2 pinty, 3001–6000 stóp: 55 minut.
- **Źródło (szczebel 1):** „Hot Half-pints 45 50 55 60” — NCHFP (nchfp.uga.edu): Tomato Paste, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:57`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-319 · szczebel 1

- **Twierdzenie:** NCHFP Tomato Paste, tabela 1: słoiki 1/2 pinty, powyżej 6000 stóp: 60 minut.
- **Źródło (szczebel 1):** „Hot Half-pints 45 50 55 60” — NCHFP (nchfp.uga.edu): Tomato Paste, Table 1, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/tomato-paste/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v11.md:59`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-320 · szczebel 1

- **Twierdzenie:** NCHFP Apricot Jam without Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, 1001–6000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v06.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-321 · szczebel 1

- **Twierdzenie:** NCHFP Apricot Jam without Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, powyżej 6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Apricot Jam without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/apricot-jam-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v06.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-322 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, 1001–6000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-323 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, powyżej 6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:63`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-324 · szczebel 1

- **Twierdzenie:** NCHFP Cherries-Whole, ilość: średnio 17,5 funta (ok. 7,9 kg) owoców na wsad 7 słoików quart i 11 funtów (ok. 5 kg) na wsad 9 słoików pint.
- **Źródło (szczebel 1):** „An average of 17½ pounds is needed per canner load of 7 quarts; an average of 11 pounds is needed per canner load of 9 pints.” — NCHFP (nchfp.uga.edu): Cherries-Whole, Quantity, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `sour-cherry-v09.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-038 · szczebel 1

- **Twierdzenie:** NCHFP (UGA, 2004) ma przetestowany przepis na wekowany lemon curd: słoiki 1/2 pinty, gorący wsad, 15 min w kąpieli wodnej do 1000 stóp (20 min do 6000, 25 min powyżej).
- **Źródło (szczebel 1):** „Recommended process time for Canned Lemon Curd in a boiling-water canner” — Lemon Curd, Canned, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Hot Half-pints 15 min 20 25” — jw., Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `lemon-v10.md:3`, `lemon-v10.md:53`, `lemon-v10.md:57`, `lemon-v10.md:59` i 6 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-040 · szczebel 1

- **Twierdzenie:** Przy lemon curd wody w wekowniku nie podgrzewa się powyżej 180 °F (ok. 82 °C) przed włożeniem słoików, bo czas procesu byłby za krótki.
- **Źródło (szczebel 1):** „Do not heat the water in the canner to more than 180°F before jars are added.” — Lemon Curd, Canned, Procedure p. 2, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `lemon-v10.md:29`, `lime-bergamot-v06.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-050 · szczebel 1

- **Twierdzenie:** Soki owocowe w słoikach muszą być wekowane we wrzącej kąpieli wodnej wystarczająco długo, by zniszczyć drobnoustroje psujące.
- **Źródło (szczebel 1):** „Filled jars of juices should be processed in a boiling water canner long enough to destroy spoilage organisms.” — Causes and Possible Solutions for Problems with Canned Fruit Juices, <https://nchfp.uga.edu/how/can/general-information/causes-and-possible-solutions-for-problems-with-canned-fruit-juices/>, odczyt 2026-11-01, curl+grep
- **Karty (4):** `apple-v16.md:11`, `currant-v10.md:17`, `grapes-v07.md:9`, `raspberry-blackberry-v07.md:17`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-077 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Berry Jams without Pectin" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki half-pint lub pint, a czas zależy od wysokości n.p.m.: 5 min do 1000 stóp, 10 min do 6000 stóp, 15 min powyżej (słoiki wcześniej wysterylizowane). Wariant bez pestek: owoce podgrzane i przetarte przez sito.
- **Źródło (szczebel 1):** „Recommended process time for Berry Jams in a boiling water canner” — Berry Jams without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-083 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Quince Jelly without Pectin" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki half-pint lub pint, a czas zależy od wysokości n.p.m.: 5 min do 1000 stóp, 10 min do 6000 stóp, 15 min powyżej (słoiki wcześniej wysterylizowane).
- **Źródło (szczebel 1):** „Recommended process time for Quince Jelly in a boiling water canner” — Quince Jelly without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/quince-jelly-without-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `quince-v08.md:3`, `quince-v08.md:61`, `quince-v08.md:65`, `quince-v08.md:67` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-089 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Berry Syrup" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki half-pint lub pint, a czas zależy od wysokości n.p.m.: 10 min do 1000 stóp, 15 min do 6000 stóp, 20 min powyżej.
- **Źródło (szczebel 1):** „Recommended process time for Berry Syrup in a boiling-water canner” — Berry Syrup, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:3`, `sour-cherry-v10.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-090 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Apple Juice" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m.
- **Źródło (szczebel 1):** „Recommended process time for Apple Juice in a boiling-water canner” — Apple Juice, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-juice/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apple-v16.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-092 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Applesauce" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m.
- **Źródło (szczebel 1):** „Recommended process time for Applesauce in a boiling-water canner” — Applesauce, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apple-v09.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-093 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Fruit Purées" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki pint lub quart, a czas zależy od wysokości n.p.m.: 15 min do 1000 stóp, 20 min do 6000 stóp, 25 min powyżej.
- **Źródło (szczebel 1):** „Recommended process time for Fruit Purees in a boiling-water canner” — Fruit Pureés, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:3`, `raspberry-blackberry-v12.md:33`, `strawberry-v14.md:3`, `strawberry-v14.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-095 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Cherries-Whole" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m. Dotyczy czereśni i wiśni.
- **Źródło (szczebel 1):** „Recommended Process Time for Sweet or Sour Cherries, Whole in boiling-water canner” — Cherries-Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v11.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-096 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Apples-Sliced" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki pint lub quart (na gorąco), a czas zależy od wysokości n.p.m.: 20 min do 1000 stóp, 25 min do 3000 stóp, 30 min do 6000 stóp, 35 min powyżej.
- **Źródło (szczebel 1):** „Recommended process time for Apples, sliced in a boiling-water canner” — Apples-Sliced, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apples-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apple-v13.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-097 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Apricots-Halved or Sliced" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m.
- **Źródło (szczebel 1):** „Recommended process time for Apricots, halved or sliced in a boiling-water canner” — Apricots-Halved or Sliced, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `apricot-v08.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-098 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Peaches-Halved or Sliced" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m.
- **Źródło (szczebel 1):** „Recommended process time for Peaches , halved or sliced in a boiling-water canner” — Peaches-Halved or Sliced, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-099 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Pears-Halved" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m.
- **Źródło (szczebel 1):** „Recommended process time for Pears , halved in a boiling-water canner” — Pears-Halved, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `pear-v07.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-100 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Plums-Halved or Whole" z wekowaniem w kąpieli wodnej; czas według tabeli 1 zależy od wielkości słoika i wysokości n.p.m.
- **Źródło (szczebel 1):** „Recommended process time for Plums , halved or whole in a boiling-water canner” — Plums-Halved or Whole, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-102 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Rhubarb-Stewed" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki pint lub quart (na gorąco), a czas zależy od wysokości n.p.m.: 15 min do 1000 stóp, 20 min do 6000 stóp, 25 min powyżej.
- **Źródło (szczebel 1):** „Recommended process time for Rhubarb , stewed in a boiling-water canner” — Rhubarb-Stewed, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `rhubarb-v05.md:3`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-103 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Grapefruit and Orange Sections" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki pint lub quart (na surowo), a czas zależy od wysokości n.p.m.: 10 min do 1000 stóp, 15 min do 6000 stóp, 20 min powyżej.
- **Źródło (szczebel 1):** „Recommended process time for Grapefruit and Orange Sections in a boiling-water canner” — Grapefruit and Orange Sections, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grapefruit-and-orange-sections/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `grapefruit-v04.md:3`, `grapefruit-v04.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-104 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Cranberries" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki pint lub quart (na gorąco), a czas zależy od wysokości n.p.m.: 15 min do 1000 stóp, 20 min do 3000 stóp, 20 min do 6000 stóp, 25 min powyżej. Żurawina w gęstym syropie.
- **Źródło (szczebel 1):** „Recommended process time for Cranberries in a boiling-water canner” — Cranberries, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberries/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cranberry-lingonberry-v09.md:3`, `cranberry-lingonberry-v09.md:29`, `cranberry-lingonberry-v09.md:33`, `cranberry-lingonberry-v09.md:35` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-105 · szczebel 1

- **Twierdzenie:** NCHFP podaje przetestowany przepis "Cranberry Sauce" z wekowaniem w kąpieli wodnej; tabela 1 obejmuje tylko słoiki half-pint lub pint, a czas zależy od wysokości n.p.m.: 15 min do 1000 stóp, 20 min do 3000 stóp, 20 min do 6000 stóp, 25 min powyżej. Żurawina przetarta przez sito, z cukrem.
- **Źródło (szczebel 1):** „Recommended process time for Cranberry Sauce in a boiling-water canner” — Cranberry Sauce, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberry-sauce/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cranberry-lingonberry-v10.md:3`, `cranberry-lingonberry-v10.md:29`, `cranberry-lingonberry-v10.md:33`, `cranberry-lingonberry-v10.md:35` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-110 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin (sproszkowana pektyna): 4 szklanki zmielonych lub drobno posiekanych wiśni bez pestek (ok. 3 funtów, czyli 2 pudełek po kwarcie wiśni), 1 opakowanie sproszkowanej pektyny, 5 szklanek cukru; wychodzi ok. 6 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „4 cups ground or finely chopped pitted cherries (about 3 pounds or 2 quart boxes sour cherries) 1 package powdered pectin 5 cups sugar” — Cherry Jam Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Yield: About 6 half-pint jars” — Cherry Jam Pectin, Yield, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:3`, `sour-cherry-v08.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-111 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin: słoiki wysterylizować, a dwuczęściowe pokrywki przygotować według producenta; w pełni dojrzałe wiśnie przebrać i umyć, usunąć szypułki i pestki, zmielić albo drobno posiekać.
- **Źródło (szczebel 1):** „Procedure: Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions.” — Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Sort and wash fully ripe cherries; remove any stems and pits. Grind cherries or chop fine.” — To prepare fruit, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:15`, `sour-cherry-v08.md:23`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-112 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin: odmierzone wiśnie wymieszać z pektyną, na dużym ogniu, stale mieszając, szybko doprowadzić do pełnego wrzenia (bąble na całej powierzchni); dodać cukier, mieszając znów doprowadzić do pełnego wrzenia, gotować intensywnie 1 minutę, stale mieszając; zdjąć z ognia i zebrać pianę.
- **Źródło (szczebel 1):** „Measure prepared cherries into a kettle. Add pectin and stir well. Place on high heat and, stirring constantly, bring quickly to a full boil with bubbles over the entire surface.” — To make jam, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Add sugar, continue stirring and heat again to full bubbling boil. Boil hard for 1 minute, stirring constantly. Remove from heat; skim” — To make jam, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:27`, `sour-cherry-v08.md:29`, `sour-cherry-v08.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-113 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin: gorący dżem od razu nalać do gorących, wysterylizowanych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Fill hot jam immediately into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner .” — Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:37`, `sour-cherry-v08.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-114 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin, Table 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, na wysokości 0–1000 stóp: 5 min.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna 0 - 1,000 ft, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-115 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin, Table 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, na wysokości 1001–6000 stóp: 10 min.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna 1,001 - 6,000 ft, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-116 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin, Table 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, powyżej 6000 stóp: 15 min.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-117 · szczebel 1

- **Twierdzenie:** NCHFP Cherry Jam Pectin, Table 1 podaje czasy tylko dla słoików 1/2 pinty i pinty.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — Table 1, kolumna Jar Size, <https://nchfp.uga.edu/how/make-jam-jelly/jams/cherry-jam-pectin/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `sour-cherry-v08.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-120 · szczebel 1

- **Twierdzenie:** NCHFP sterylizacja pustych słoików: postawić słoiki otworem do góry na kratce w garnku do wekowania w kąpieli wodnej, napełnić garnek i słoiki gorącą (nie wrzącą) wodą do 1 cala (ok. 2,5 cm) ponad górną krawędź słoików; po gotowaniu wyjmować i odsączać gorące słoiki pojedynczo.
- **Źródło (szczebel 1):** „To sterilize empty jars, put them right side up on the rack in a boiling-water canner. Fill the canner and jars with hot (not boiling) water to 1 inch above the tops of the jars.” — Sterilization of Empty Jars, <https://nchfp.uga.edu/how/can/general-information/sterilization-of-empty-jars/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Remove and drain hot sterilized jars one at a time.” — Sterilization of Empty Jars, <https://nchfp.uga.edu/how/can/general-information/sterilization-of-empty-jars/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1 cal = 2,54 cm, w treści „ok. 2,5 cm”; poziom wody to minimum („do 1 cala ponad”), więcej wody nie szkodzi.
- **Karty (14):** `apple-v10.md:23`, `apple-v10.md:45`, `apple-v16.md:17`, `apple-v16.md:23` i 24 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-122 · szczebel 1

- **Twierdzenie:** NCHFP mus jabłkowy: mus można pakować bez cukru albo dodać 1/8 szklanki cukru na quart musu i więcej do smaku; mus ponownie doprowadzić do wrzenia, napełnić słoiki gorącym musem, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni, założyć pokrywki i wekować (tylko hot pack).
- **Źródło (szczebel 1):** „Sauce may be packed without sugar. If desired, add 1/8 cup sugar per quart of sauce.” — Applesauce, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Taste and add more, if preferred. Reheat sauce to boiling.” — Applesauce, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Fill jars with hot sauce, leaving ½-inch headspace. Adjust lids and process.” — Applesauce, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apple-v09.md:3`, `apple-v09.md:23`, `apple-v09.md:27`, `apple-v09.md:29`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-123 · szczebel 1

- **Twierdzenie:** NCHFP mus jabłkowy, kąpiel wodna, hot pack, 0–1000 stóp: słoiki pint 15 minut, quart 20 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35” — Table 1, kolumna 0 - 1,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apple-v09.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-124 · szczebel 1

- **Twierdzenie:** NCHFP mus jabłkowy, kąpiel wodna, hot pack, 1001–3000 stóp: słoiki pint 20 minut, quart 25 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35” — Table 1, kolumna 1,001 - 3,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apple-v09.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-125 · szczebel 1

- **Twierdzenie:** NCHFP mus jabłkowy, kąpiel wodna, hot pack, 3001–6000 stóp: słoiki pint 20 minut, quart 30 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35” — Table 1, kolumna 3,001 - 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apple-v09.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-126 · szczebel 1

- **Twierdzenie:** NCHFP mus jabłkowy, kąpiel wodna, hot pack, powyżej 6000 stóp: słoiki pint 25 minut, quart 35 minut.
- **Źródło (szczebel 1):** „Hot Pints 15 min 20 20 25 Quarts 20 25 30 35” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/applesauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apple-v09.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-130 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie, na gorąco (hot pack): odsączone owoce włożyć do dużego garnka z syropem, wodą albo sokiem i doprowadzić do wrzenia; napełnić słoiki gorącymi owocami i płynem, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; połówki układać warstwami, przekrojem w dół.
- **Źródło (szczebel 1):** „Hot pack – In a large saucepan place drained fruit in syrup, water, or juice and bring to boil. Fill jars with hot fruit and cooking liquid, leaving ½-inch headspace.” — Peaches-Halved or Sliced, Hot pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Place halves in layers, cut side down.” — Peaches-Halved or Sliced, Hot pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:35`, `peach-nectarine-v06.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-131 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie, na surowo (raw pack): napełnić słoiki surowymi owocami przekrojem w dół i dolać gorącej wody, soku albo syropu, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; w obu sposobach założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „Raw pack – Fill jars with raw fruit, cut side down, and add hot water, juice, or syrup, leaving ½-inch headspace.” — Peaches-Halved or Sliced, Raw pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Adjust lids and process.” — Peaches-Halved or Sliced, Raw pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:39`, `peach-nectarine-v06.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-132 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie, kąpiel wodna, 0–1000 stóp: hot pack słoiki pint 20 minut, quart 25 minut; raw pack słoiki pint 25 minut, quart 30 minut.
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 min 30 35 40 Raw Pints 25 min 30 35 40 Quarts 30 min 35 40 45” — Table 1, kolumna 0 - 1,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-133 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie, kąpiel wodna, 1001–3000 stóp: hot pack słoiki pint 25 minut, quart 30 minut; raw pack słoiki pint 30 minut, quart 35 minut.
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 min 30 35 40 Raw Pints 25 min 30 35 40 Quarts 30 min 35 40 45” — Table 1, kolumna 1,001 - 3,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-134 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie, kąpiel wodna, 3001–6000 stóp: hot pack słoiki pint 30 minut, quart 35 minut; raw pack słoiki pint 35 minut, quart 40 minut.
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 min 30 35 40 Raw Pints 25 min 30 35 40 Quarts 30 min 35 40 45” — Table 1, kolumna 3,001 - 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-135 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie, kąpiel wodna, powyżej 6000 stóp: hot pack słoiki pint 35 minut, quart 40 minut; raw pack słoiki pint 40 minut, quart 45 minut.
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 min 30 35 40 Raw Pints 25 min 30 35 40 Quarts 30 min 35 40 45” — Table 1, kolumna Above 6,000 ft, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-137 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin: słoiki wysterylizować, a dwuczęściowe pokrywki przygotować według producenta; w pełni dojrzałe brzoskwinie przebrać i umyć, usunąć szypułki, skórki i pestki, owoce rozgnieść.
- **Źródło (szczebel 1):** „Procedure: Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions.” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Sort and wash fully ripe peaches. Remove stems, skins, and pits. Crush peaches.” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:19`, `peach-nectarine-v07.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-139 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin: gorący dżem od razu nalać do gorących, wysterylizowanych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Fill hot jam immediately into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner .” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek: 1/4 cala = 0,635 cm, w treści ok. 0,6 cm.
- **Karty (1):** `peach-nectarine-v07.md:43`, `peach-nectarine-v07.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-140 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin, tabela 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, na wysokości 0–1000 stóp: 5 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-141 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin, tabela 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, na wysokości 1001–6000 stóp: 10 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-142 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin, tabela 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, powyżej 6000 stóp: 15 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:51`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-143 · szczebel 1

- **Twierdzenie:** NCHFP Peach Jam Pectin, tabela 1 podaje czasy tylko dla słoików 1/2 pinty i pinty.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Peach Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/peach-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v07.md:57`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-145 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin: 9 szklanek rozgniecionych owoców jagodowych i 6 szklanek cukru; wychodzi ok. 7–8 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „9 cups crushed berries 6 cups sugar Yield: About 7 or 8 half-pint jars” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-147 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin: słoiki wysterylizować; owoce umyć przed rozgnieceniem; połączyć owoce z cukrem; powoli doprowadzić do wrzenia, mieszając od czasu do czasu, aż cukier się rozpuści; potem gotować szybko do punktu żelowania albo prawie do niego, zależnie od tego, czy dżem ma być gęsty, czy miękki; gdy masa gęstnieje, często mieszać, żeby nie przywierała.
- **Źródło (szczebel 1):** „Sterilize canning jars . Wash berries before crushing. Combine berries and sugar.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Bring slowly to a boil, stirring occasionally until sugar dissolves. Once sugar is dissolved, cook rapidly to , or almost to, the jellying point , depending upon whether a firm or soft jam is desired.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „As mixture thickens, stir frequently to prevent sticking.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:19`, `raspberry-blackberry-v08.md:27`, `raspberry-blackberry-v08.md:33`, `raspberry-blackberry-v08.md:35` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-148 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin: zdjąć z ognia i nalać gorący dżem do gorących, sterylnych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi słoików przetrzeć zwilżonym czystym ręcznikiem papierowym; nałożyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Remove from heat and fill hot jam into hot, sterile jars, leaving ¼-inch headspace.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:55`, `raspberry-blackberry-v08.md:57`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-150 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin, tabela 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, na wysokości 0–1000 stóp: 5 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:59`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-151 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin, tabela 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, na wysokości 1001–6000 stóp: 10 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-152 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin, tabela 1, kąpiel wodna, słoiki 1/2 pinty lub pinty, powyżej 6000 stóp: 15 min.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:63`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-153 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin, tabela 1 podaje czasy tylko dla słoików 1/2 pinty i pinty.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:69`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-157 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin (sproszkowana pektyna): 6 szklanek rozgniecionych śliwek (ok. 3,5 funta śliwek), 1 opakowanie sproszkowanej pektyny, 8 szklanek cukru; wychodzi ok. 9 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „6 cups crushed plums (about 3½ pounds plums) 1 package powdered pectin 8 cups sugar Yield: About 9 half-pint jars” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:3`, `plum-v14.md:9`, `plum-v14.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-158 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin: słoiki wysterylizować, a dwuczęściowe pokrywki przygotować według producenta; w pełni dojrzałe śliwki przebrać, umyć, pokroić i usunąć pestki; gdy miąższ mocno przylega do pestek, gotować śliwki powoli w małej ilości wody kilka minut do zmięknięcia, potem usunąć pestki; owoce rozgnieść.
- **Źródło (szczebel 1):** „Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions.” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Sort fully ripe plums, wash, cut into pieces, and remove pits. If flesh clings tightly to pits, cook plums slowly in a small amount of water for a few minutes until they are softened, then remove pits. Crush fruit.” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:19`, `plum-v14.md:27`, `plum-v14.md:29`, `plum-v14.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-159 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin: odmierzone rozgniecione śliwki wymieszać z pektyną, na dużym ogniu, stale mieszając, szybko doprowadzić do pełnego wrzenia (bąble na całej powierzchni); dodać cukier, mieszając znów doprowadzić do pełnego wrzenia, gotować intensywnie 1 minutę; zdjąć z ognia i zebrać pianę.
- **Źródło (szczebel 1):** „Measure crushed plums into a kettle. Add pectin and stir well. Place on high heat and, stirring constantly, bring quickly to a full boil with bubbles over the entire surface. Add sugar, continue stirring, and heat again to a full bubbling boil. Boil hard for 1 minute. Remove from heat; skim.” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:35`, `plum-v14.md:37`, `plum-v14.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-160 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin: gorący dżem od razu nalać do gorących, wysterylizowanych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Fill hot jam immediately into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner .” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:45`, `plum-v14.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-161 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin, tabela 1 (kąpiel wodna, hot, słoiki sterylne): czasy tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 5 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:49`, `plum-v14.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-162 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, 1001–6000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-163 · szczebel 1

- **Twierdzenie:** NCHFP Plum Jam Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, powyżej 6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Plum Jam Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jams/plum-jam-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `plum-v14.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-164 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves: 6 szklanek przygotowanych truskawek (ok. 2 pudełek po kwarcie), 4,5 szklanki cukru; wychodzi ok. 4 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „6 cups prepared strawberries (about 2 quart boxes strawberries) 4½ cups sugar Yield: About 4 half-pint jars” — NCHFP (nchfp.uga.edu): Strawberry Preserves, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:3`, `strawberry-v08.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-167 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves: masę owocową podgrzać do wrzenia, delikatnie mieszając; gotować szybko, mieszając w razie potrzeby, żeby nie przywarła; gotować do temperatury o 9 °F (5 °C) wyższej od temperatury wrzenia wody albo do lekkiego zgęstnienia syropu (ok. 15–20 minut); zdjąć z ognia i zebrać pianę.
- **Źródło (szczebel 1):** „Heat the fruit mixture to a boiling, stirring gently. Boil rapidly, stirring as needed to prevent sticking. Cook to 9 degrees F. above the boiling point of water, or until the syrup is somewhat thick (about 15 or 20 minutes). Remove from heat; skim.” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:3`, `strawberry-v08.md:33`, `strawberry-v08.md:35`, `strawberry-v08.md:37` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-168 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves: gorące konfitury od razu nalać do gorących, wysterylizowanych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Fill hot preserves immediately into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner .” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:45`, `strawberry-v08.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-169 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves, tabela 1 (kąpiel wodna, hot, słoiki sterylne): czasy tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 5 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:49`, `strawberry-v08.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-170 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, 1001–6000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-171 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, powyżej 6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-172 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin: 5 szklanek soku winogronowego (ok. 3,5 funta winogron Concord i 1 szklanka wody), 1 opakowanie sproszkowanej pektyny, 7 szklanek cukru; wychodzi ok. 8–9 słoików 1/2 pinty.
- **Źródło (szczebel 1):** „5 cups grape juice (about 3½ pounds Concord grapes and 1 cup water) 1 package powdered pectin 7 cups sugar Yield: About 8 or 9 half-pint jars” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, składniki, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:3`, `grapes-v06.md:7`, `grapes-v06.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-173 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin: słoiki wysterylizować, a dwuczęściowe pokrywki przygotować według producenta; w pełni dojrzałe winogrona przebrać, umyć i usunąć szypułki; rozgnieść, dodać wodę, przykryć i zagotować na dużym ogniu; zmniejszyć ogień i gotować na wolnym ogniu 10 minut; wydobyć sok.
- **Źródło (szczebel 1):** „Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions.” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Sort, wash, and remove stems from fully ripe grapes. Crush grapes, add water, cover, bring to boil on high heat. Reduce heat and simmer for 10 minutes. Extract juice.” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:17`, `grapes-v06.md:27`, `grapes-v06.md:29`, `grapes-v06.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-175 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin: odmierzony sok wymieszać z pektyną, na dużym ogniu, stale mieszając, szybko doprowadzić do pełnego, burzliwego wrzenia, którego nie da się zatrzymać mieszaniem; dodać cukier, mieszając znów doprowadzić do pełnego, burzliwego wrzenia, gotować intensywnie 1 minutę; zdjąć z ognia i szybko zebrać pianę.
- **Źródło (szczebel 1):** „Measure juice into a kettle. Add pectin and stir well. Place on high heat and, stirring constantly, bring quickly to a full rolling boil that cannot be stirred down. Add sugar, continue stirring, and heat again to a full rolling boil. Boil hard for 1 minute. Remove from heat; skim off foam quickly.” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:37`, `grapes-v06.md:39`, `grapes-v06.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-176 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin: gorącą galaretkę od razu nalać do gorących, wysterylizowanych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; brzegi przetrzeć zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki i wekować w kąpieli wodnej.
- **Źródło (szczebel 1):** „Pour hot jelly immediately into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids. Process in a Boiling Water Canner .” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:47`, `grapes-v06.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-177 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin, tabela 1 (kąpiel wodna, hot, słoiki sterylne): czasy tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 5 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:51`, `grapes-v06.md:63`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-178 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, 1001–6000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:55`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-179 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin, tabela 1 (słoiki sterylne): słoiki 1/2 pinty i pint, powyżej 6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Table 1, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:57`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-185 · szczebel 1

- **Twierdzenie:** NCHFP Berry Syrup, napełnianie: zdjąć z ognia, zebrać pianę, nalać do czystych słoików 1/2 pinty lub pint, zostawiając ½ cala (ok. 1,3 cm) wolnej przestrzeni; założyć pokrywki i wekować według tabeli 1.
- **Źródło (szczebel 1):** „Remove from heat, skim off foam, and fill into clean half-pint or pint jars, leaving ½-inch headspace. Adjust lids and process according to the recommendations in Table 1 .” — NCHFP (nchfp.uga.edu): Berry Syrup, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:37`, `raspberry-blackberry-v06.md:39`, `sour-cherry-v10.md:37`, `sour-cherry-v10.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-186 · szczebel 1

- **Twierdzenie:** NCHFP Berry Syrup, tabela 1 (kąpiel wodna, hot): czasy tylko dla słoików 1/2 pinty i pint; 0–1000 stóp: 10 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 10 min 15 20” — NCHFP (nchfp.uga.edu): Berry Syrup, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:41`, `raspberry-blackberry-v06.md:53`, `sour-cherry-v10.md:41`, `sour-cherry-v10.md:53`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-187 · szczebel 1

- **Twierdzenie:** NCHFP Fruit Purées, przygotowanie: owoce oczyścić z szypułek, umyć, odsączyć, obrać i w razie potrzeby usunąć pestki; odmierzyć do dużego rondla, ewentualnie lekko rozgnieść; dodać 1 szklankę gorącej wody na każdy quart owoców; gotować powoli do miękkości, często mieszając; przetrzeć przez sito albo młynek do przecierania.
- **Źródło (szczebel 1):** „Stem, wash, drain, peel, and remove pits if necessary. Measure fruit into large saucepan, crushing slightly if desired. Add 1 cup hot water for each quart of fruit.” — NCHFP (nchfp.uga.edu): Fruit Pureés, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Cook slowly until fruit is soft, stirring frequently. Press through sieve or food mill.” — NCHFP (nchfp.uga.edu): Fruit Pureés, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:3`, `raspberry-blackberry-v12.md:15`, `raspberry-blackberry-v12.md:17`, `raspberry-blackberry-v12.md:19` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-188 · szczebel 1

- **Twierdzenie:** NCHFP Fruit Purées, napełnianie: dla smaku można dodać cukier do smaku; przecier ponownie zagotować albo podgrzać do rozpuszczenia cukru, jeśli dodany; nałożyć na gorąco do czystych słoików, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; założyć pokrywki i wekować.
- **Źródło (szczebel 1):** „If desired for flavor, add sugar to taste. Reheat pulp to boil, or until sugar dissolves if added. Fill hot into clean jars, leaving 1/4-inch headspace. Adjust lids and process.” — NCHFP (nchfp.uga.edu): Fruit Pureés, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:27`, `raspberry-blackberry-v12.md:29`, `raspberry-blackberry-v12.md:31`, `raspberry-blackberry-v12.md:33` i 4 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-189 · szczebel 1

- **Twierdzenie:** NCHFP Fruit Purées, tabela 1 (kąpiel wodna, hot): czasy tylko dla słoików pint i quart; 0–1000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 15 min 20 25” — NCHFP (nchfp.uga.edu): Fruit Pureés, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:35`, `raspberry-blackberry-v12.md:49`, `strawberry-v14.md:35`, `strawberry-v14.md:49`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-192 · szczebel 1

- **Twierdzenie:** NCHFP Berry Syrup, tabela 1 (kąpiel wodna, hot): słoiki 1/2 pinty i pint, 1001–6000 stóp: 15 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 10 min 15 20” — NCHFP (nchfp.uga.edu): Berry Syrup, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:45`, `sour-cherry-v10.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-193 · szczebel 1

- **Twierdzenie:** NCHFP Berry Syrup, tabela 1 (kąpiel wodna, hot): słoiki 1/2 pinty i pint, powyżej 6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 10 min 15 20” — NCHFP (nchfp.uga.edu): Berry Syrup, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:47`, `sour-cherry-v10.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-194 · szczebel 1

- **Twierdzenie:** NCHFP Fruit Purées, tabela 1 (kąpiel wodna, hot): słoiki pint i quart, 1001–6000 stóp: 20 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 15 min 20 25” — NCHFP (nchfp.uga.edu): Fruit Pureés, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:39`, `strawberry-v14.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-195 · szczebel 1

- **Twierdzenie:** NCHFP Fruit Purées, tabela 1 (kąpiel wodna, hot): słoiki pint i quart, powyżej 6000 stóp: 25 minut.
- **Źródło (szczebel 1):** „Process Time at Elevations of Style of Pack Jar Size 0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 15 min 20 25” — NCHFP (nchfp.uga.edu): Fruit Pureés, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:41`, `strawberry-v14.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-196 · szczebel 1

- **Twierdzenie:** NCHFP Cooling Jars and Testing Jar Seals: słoiki studzić w temperaturze pokojowej 12–24 godziny, potem sprawdzić zamknięcie: jeśli wciśnięty środek pokrywki odskakuje po zdjęciu palca, słoik nie jest zamknięty; pokrywka powinna być wklęsła (lekko wgięta w środku), a płaski albo wypukły środek oznacza, że słoik może nie być zamknięty.
- **Źródło (szczebel 1):** „Cool the jars at room temperature for 12 to 24 hours.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Cooling jars, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Press the middle of the lid with a finger or thumb. If the lid springs up when you release your finger, the lid is unsealed.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Testing jar seals, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „The lid should be concave (curved down slightly in the center). If center of the lid is either flat or bulging, it may not be sealed.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Testing jar seals, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Karty (27):** `apple-v10.md:75`, `apple-v10.md:81`, `apple-v13.md:67`, `apple-v13.md:73` i 50 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-197 · szczebel 1

- **Twierdzenie:** NCHFP Cooling Jars and Testing Jar Seals: jedzenie z pojedynczego niezamkniętego słoika można trzymać w lodówce i zjeść w ciągu kilku dni.
- **Źródło (szczebel 1):** „Foods in single unsealed jars could be stored in the refrigerator and consumed within several days.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Reprocessing unsealed jars, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Karty (27):** `apple-v10.md:83`, `apple-v13.md:75`, `apple-v16.md:75`, `cranberry-lingonberry-v09.md:61` i 23 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-205 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics, sok jabłkowy albo winogronowy z sokownika: słoiki 1/2 pinty albo pint w kąpieli wodnej 5 minut na 0–1000 stóp (słoiki muszą być najpierw wysterylizowane), 10 minut na 1001–6000 stóp, 15 minut wyżej; słoiki quart 10 minut na 0–1000 stóp, 15 minut na 1001–6000 stóp, 25 minut wyżej; słoiki 1/2 galona tylko w kąpieli wodnej (nie w wekowniku parowym) i tylko dla soku jabłkowego albo winogronowego.
- **Źródło (szczebel 3):** „Process half-pint or pint jars in a boiling water or atmospheric steam canner as follows: 5 minutes* at 0-1,000 feet elevation *(jars must first be sterilized) 10 minutes at 1,001-6,000 feet elevation 15 minutes above 6,000 feet elevation” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned Apple or Grape Juice from Steamed Juice, s. 6, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „Process quart jars in a boiling water canner or atmospheric steam canner as follows: 10 minutes at 0-1,000 feet elevation 15 minutes at 1,001-6,000 feet elevation 25 minutes above 6,000 feet elevation” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), jw., <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „IMPORTANT!! Half-gallon canning jars may be used ONLY for apple or grape juices.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), jw., <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Karty (1):** `grapes-v07.md:3`, `grapes-v07.md:31`, `grapes-v07.md:47`, `grapes-v07.md:49` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-206 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Reguła JarAtlas (ostrożna): NCHFP Grape Juice (sok z rozgniecionych i gotowanych winogron) podaje dla słoików pint i quart jeden czas: 5 minut na 0–1000 stóp, 10 na 1001–6000, 15 powyżej; UC dla soku z sokownika daje słoikom quart dłuższe czasy (10, 15, 25 minut), więc karta soku z sokownika stosuje czasy UC.
- **Źródło (szczebel 1):** „Hot Pints or Quarts 5 min 10 15 Half-Gallons 10min 15 20” — NCHFP (nchfp.uga.edu): Grape Juice, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grape-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 3):** „10 minutes at 0-1,000 feet elevation 15 minutes at 1,001-6,000 feet elevation 25 minutes above 6,000 feet elevation” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned Apple or Grape Juice from Steamed Juice, s. 6, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Uproszczenie / wniosek JarAtlas:** Przy dwóch źródłach różnych szczebli z różnymi czasami: dłuższy czas (strona bezpieczna); UC to przepis właściwy dla soku z sokownika.
- **Karty (1):** `grapes-v07.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-208 · szczebel 3 · reguła JarAtlas (część 2)

- **Twierdzenie:** Reguła JarAtlas (ostrożna) dla słoików metrycznych w przepisach UC na soki z sokownika: słoik do 473 ml — czas dla pint; większy, do 946 ml (np. 0,5 l albo 0,9 l) — czas dla quart; słoików większych niż quart karty nie opisują (UC dopuszcza słoiki 1/2 galona tylko dla soku jabłkowego i winogronowego, tylko w kąpieli wodnej), więc JarAtlas zaleca mniejsze słoiki.
- **Źródło (szczebel 3):** „IMPORTANT!! Half-gallon canning jars may be used ONLY for apple or grape juices.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Canned Apple or Grape Juice from Steamed Juice, s. 6, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Uproszczenie / wniosek JarAtlas:** Reguła analogiczna do ACI-175 (pint/quart); pominięcie słoików 1/2 galona upraszcza kartę w stronę bezpieczną.
- **Karty (3):** `currant-v10.md:63`, `currant-v10.md:65`, `grapes-v07.md:65`, `grapes-v07.md:67` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-209 · szczebel 1

- **Twierdzenie:** 8000 stóp = 2438,4 m (1 stopa = 0,3048 m dokładnie). Karty podają tę granicę jako 2400 m, zaokrągloną w dół, więc zakres wysokości bez podanego czasu zaczyna się w karcie niżej niż w źródle (strona bezpieczna).
- **Źródło (szczebel 1):** „1 foot = 0.3048 meter” — NIST Handbook 44 (2025), Appendix C, General Tables of Units of Measurement (definicja stopy międzynarodowej), <https://nvlpubs.nist.gov/nistpubs/hb/2025/NIST.HB.44-2025.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Uproszczenie / wniosek JarAtlas:** Rachunek; zaokrąglenie granicy w dół rozszerza zakres „brak czasu w przepisie”.
- **Karty (2):** `currant-v10.md:51`, `currant-v10.md:53`, `currant-v10.md:57`, `raspberry-blackberry-v07.md:51` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-212 · szczebel 1

- **Twierdzenie:** NCHFP Cooling Jars and Testing Jar Seals: po 12–24 godzinach studzenia zdjąć zakrętki (screw bands) i dopiero wtedy sprawdzić zamknięcie słoików; NCHFP Recommended Jars and Lids: typowe samozamykające zamknięcie to płaska metalowa pokrywka trzymana podczas wekowania przez metalowy pierścień zakręcany (screw band), więc zdejmuje się pierścień, a płaska pokrywka zostaje na słoiku.
- **Źródło (szczebel 1):** „After cooling jars for 12 to 24 hours, remove the screw bands and test seals with one of the following options:” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Testing jar seals, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „The common self-sealing lid consists of a flat metal lid held in place by a metal screw band during processing.” — NCHFP (nchfp.uga.edu): Recommended Jars and Lids, <https://nchfp.uga.edu/how/can/general-information/recommended-jars-and-lids/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Screw bands are not needed on stored jars. They can be removed easily after jars are cooled.” — NCHFP (nchfp.uga.edu): Recommended Jars and Lids, <https://nchfp.uga.edu/how/can/general-information/recommended-jars-and-lids/>, odczyt 2026-11-02, curl+grep
- **Karty (27):** `apple-v10.md:75`, `apple-v10.md:77`, `apple-v13.md:67`, `apple-v13.md:69` i 50 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-217 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Pears-Halved: średnio 11 funtów (ok. 5 kg) gruszek na wsad 9 słoików pint i 17 1/2 funta (ok. 7,9 kg) na 7 słoików quart; wybierać dojrzałe owoce jakości do jedzenia na surowo lub gotowania; umyć, obrać, przekroić wzdłuż na połówki, usunąć gniazdo (np. łyżeczką do melona albo metalową miarką); przeciw ciemnieniu trzymać w roztworze kwasu askorbinowego; syrop bardzo lekki, lekki lub średni albo sok jabłkowy, sok z białych winogron lub woda; raw pack daje słabą jakość; odsączone gruszki gotować 5 minut w syropie, soku lub wodzie; napełnić słoiki gorącymi owocami i płynem, 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; tabela 1 (kąpiel wodna, hot): 0–1000 stóp: pint 20 min, quart 25 min; 1001–3000 stóp: pint 25 min, quart 30 min; 3001–6000 stóp: pint 30 min, quart 35 min; wyżej: pint 35 min, quart 40 min.
- **Źródło (szczebel 1):** „An average of 17½ pounds is needed per canner load of 7 quarts; an average of 11 pounds is needed per canner load of 9 pints.” — NCHFP (nchfp.uga.edu): Pears-Halved, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Choose ripe, mature fruit of ideal quality for eating fresh or cooking.” — NCHFP (nchfp.uga.edu): Pears-Halved, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Wash and peel pears. Cut lengthwise in halves and remove core. A melon baller or metal measuring spoon is suitable for coring pears. To prevent discoloration, keep pears in an ascorbic acid solution” — NCHFP (nchfp.uga.edu): Pears-Halved, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Prepare a very light, light, or medium syrup or pack pears in apple juice, white grape juice, or water. Raw packs make poor quality pears. Boil drained pears 5 minutes in syrup, juice, or water. Fill jars with hot fruit and cooking liquid, leaving 1/2-inch headspace.” — NCHFP (nchfp.uga.edu): Pears-Halved, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Hot Pints 20 min 25 30 35 Quarts 25 min 30 35 40” — NCHFP (nchfp.uga.edu): Pears-Halved, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia funtów i cali to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `pear-v07.md:3`, `pear-v07.md:11`, `pear-v07.md:13`, `pear-v07.md:17` i 10 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-219 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Rhubarb-Stewed: średnio 7 funtów (ok. 3,2 kg) rabarbaru na wsad 9 słoików pint i 10 1/2 funta (ok. 4,8 kg) na 7 słoików quart; wybierać młode, delikatne, dobrze wybarwione łodygi z wiosennego albo późnojesiennego zbioru; obciąć liście, umyć łodygi, pokroić na kawałki 1/2–1 cala (ok. 1,3–2,5 cm); w dużym garnku dodać 1/2 szklanki cukru na każdy quart (ok. 0,95 l) owoców, odstawić, aż pojawi się sok; delikatnie podgrzać do wrzenia; bez zwłoki napełnić słoiki, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; tabela 1 (kąpiel wodna, hot, pint lub quart): 0–1000 stóp 15 min, 1001–6000 stóp 20 min, wyżej 25 min.
- **Źródło (szczebel 1):** „An average of 10-1/2 pounds is needed per canner load of 7 quarts; an average of 7 pounds is needed per canner load of 9 pints.” — NCHFP (nchfp.uga.edu): Rhubarb-Stewed, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Select young, tender, well-colored stalks from the spring or late fall crop.” — NCHFP (nchfp.uga.edu): Rhubarb-Stewed, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Trim off leaves. Wash stalks and cut into 1/2-inch to 1-inch pieces. In a large saucepan add 1/2 cup sugar for each quart of fruit. Let stand until juice appears. Heat gently to boiling. Fill jars without delay, leaving 1/2-inch headspace.” — NCHFP (nchfp.uga.edu): Rhubarb-Stewed, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 15 min 20 25” — NCHFP (nchfp.uga.edu): Rhubarb-Stewed, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/rhubarb-stewed/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia funtów, cali i quartów to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `rhubarb-v05.md:3`, `rhubarb-v05.md:7`, `rhubarb-v05.md:9`, `rhubarb-v05.md:13` i 7 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-220 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Grapefruit and Orange Sections: średnio 13 funtów (ok. 5,9 kg) owoców na wsad 9 słoików pint i 15 funtów (ok. 6,8 kg) na 7 słoików quart; wybierać jędrne, dojrzałe, słodkie owoce jakości do jedzenia na surowo; grejpfruta można wekować bez pomarańczy; cząstki zalewać wodą, sokiem cytrusowym albo syropem; umyć i obrać owoce, usunąć białą skórkę (inaczej gorzki smak); syrop bardzo lekki, lekki lub średni zagotować; napełnić słoiki cząstkami i gorącym syropem, 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; tabela 1 (kąpiel wodna, raw, pint lub quart): 0–1000 stóp 10 min, 1001–6000 stóp 15 min, wyżej 20 min.
- **Źródło (szczebel 1):** „An average of 15 pounds is needed per canner load of 7 quarts; an average of 13 pounds is needed per canner load of 9 pint” — NCHFP (nchfp.uga.edu): Grapefruit and Orange Sections, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grapefruit-and-orange-sections/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Select firm, mature, sweet fruit of ideal quality for eating fresh.” — NCHFP (nchfp.uga.edu): Grapefruit and Orange Sections, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grapefruit-and-orange-sections/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Grapefruit may be canned without oranges. Sections may be packed in your choice of water, citrus juice or syrup” — NCHFP (nchfp.uga.edu): Grapefruit and Orange Sections, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grapefruit-and-orange-sections/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Wash and peel fruit and remove white tissue to prevent a bitter taste. If you use syrup, prepare a very light, light, or medium syrup and bring to boil. Fill jars with sections and water, juice or hot syrup, leaving 1/2-inch headspace.” — NCHFP (nchfp.uga.edu): Grapefruit and Orange Sections, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grapefruit-and-orange-sections/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Raw Pints or Quarts 10 min 15 20” — NCHFP (nchfp.uga.edu): Grapefruit and Orange Sections, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/grapefruit-and-orange-sections/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia funtów i cali to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `grapefruit-v04.md:3`, `grapefruit-v04.md:7`, `grapefruit-v04.md:9`, `grapefruit-v04.md:11` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-223 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Recommended Jars and Lids: najlepszym wyborem są słoiki do domowego wekowania typu Mason (zwykłe i z szerokim otworem, gwintowane) z samouszczelniającymi pokrywkami; inne słoiki handlowe (po produktach ze sklepu), których otworu nie da się zamknąć dwuczęściowymi pokrywkami do wekowania, nie są zalecane do domowego wekowania żadnej żywności.
- **Źródło (szczebel 1):** „Regular and wide-mouth Mason-type, threaded, home-canning jars with self-sealing lids are the best choice.” — NCHFP (nchfp.uga.edu): Recommended Jars and Lids, <https://nchfp.uga.edu/how/can/general-information/recommended-jars-and-lids/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Other commercial jars with mouths that cannot be sealed with two-piece canning lids are not recommended for use in canning any food at home.” — NCHFP (nchfp.uga.edu): Recommended Jars and Lids, <https://nchfp.uga.edu/how/can/general-information/recommended-jars-and-lids/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Zdanie w kartach łączy to twierdzenie z SLO-212 (samouszczelniająca pokrywka = płaska pokrywka + pierścień); „test i metoda z tej karty opierają się na nich” oraz reguła JarAtlas (ostrożna) „korzystaj z karty tylko ze słoikami zamykanymi dwuczęściowymi pokrywkami; karta nie podaje metody dla słoików twist-off ani ze szklanymi pokrywkami, więc nie używaj ich do tego przepisu” to opis zakresu karty, nie zdanie źródła; kierunek ostrożny.
- **Karty (27):** `apple-v10.md:77`, `apple-v10.md:79`, `apple-v13.md:69`, `apple-v13.md:71` i 50 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-225 · szczebel 1

- **Twierdzenie:** NCHFP Apple Butter, procedura: jabłka umyć, usunąć szypułki, pokroić na ćwiartki i wyciąć gniazda; gotować powoli w cydrze i occie do miękkości; przetrzeć przez durszlak, młynek (food mill) lub sito; miąższ gotować z cukrem i przyprawami, często mieszając; test gotowości: łyżka masy trzymana 2 minuty z dala od pary zostaje kopczykiem albo wokół porcji na talerzu nie oddziela się obwódka płynu.
- **Źródło (szczebel 1):** „Wash, remove stems, quarter and core fruit. Cook slowly in cider and vinegar until soft. Press fruit through a colander, food mill, or strainer. Cook fruit pulp with sugar and spices, stirring frequently.” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „To test for doneness, remove a spoonful and hold it away from steam for 2 minutes. It is done if the butter remains mounded on the spoon.” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „When a rim of liquid does not separate around the edge of the butter, it is ready for canning.” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apple-v10.md:3`, `apple-v10.md:9`, `apple-v10.md:31`, `apple-v10.md:33` i 4 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-226 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Apple Butter: nalewać na gorąco do sterylnych słoików 1/2 pinty lub pint, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; słoików quart nie trzeba wcześniej sterylizować; tabela 1 (kąpiel wodna, hot): 1/2 pinty lub pint: 0–1000 stóp 5 min, 1001–6000 stóp 10 min, wyżej 15 min; quart: 0–1000 stóp 10 min, 1001–6000 stóp 15 min, wyżej 20 min.
- **Źródło (szczebel 1):** „Fill hot into sterile half-pint or pint jars, leaving ¼-inch headspace. Quart jars need not be presterilized.” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-Pints or Pints 5 min 10 15 Quarts 10 min 15 20” — NCHFP (nchfp.uga.edu): Apple Butter, Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie cali to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `apple-v10.md:21`, `apple-v10.md:47`, `apple-v10.md:49`, `apple-v10.md:51` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-232 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Cranberries, hot pack: przygotować syrop ciężki; żurawinę umyć i usunąć szypułki; ostrożnie, ale szybko wrzucić do wrzącego syropu i gotować 3 minuty; owoce nałożyć do gorących słoików, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni, zalać wrzącym syropem do 1/2 cala; usunąć pęcherzyki powietrza, poprawić wolną przestrzeń, przetrzeć brzegi zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki, wekować w kąpieli wodnej; tabela 1 (hot, pint lub quart): 0–1000 stóp 15 min, 1001–3000 stóp 20 min, 3001–6000 stóp 20 min, wyżej 25 min.
- **Źródło (szczebel 1):** „Hot Pack – Make a heavy syrup . Wash and remove stems from cranberries. Carefully but quickly add to boiling syrup. Boil 3 minutes. Fill fruit into hot jars, leaving ½ inch headspace. Cover with boiling syrup, leaving ½ inch headspace. Remove air bubbles and adjust headspace if needed. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids.” — NCHFP (nchfp.uga.edu): Cranberries, Hot Pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberries/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 15 min 20 20 25” — NCHFP (nchfp.uga.edu): Cranberries, Hot Pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberries/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie cali to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `cranberry-lingonberry-v09.md:3`, `cranberry-lingonberry-v09.md:7`, `cranberry-lingonberry-v09.md:15`, `cranberry-lingonberry-v09.md:19` i 7 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-233 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Cranberry Sauce, hot pack: 4 szklanki żurawiny, 1 szklanka wody, 2 szklanki cukru, ok. 4 słoików 1/2 pinty; żurawinę umyć, gotować w wodzie do miękkości, przetrzeć przez drobne sito, dodać cukier i gotować 3 minuty; wrzący sos nalać do gorących słoików, 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; usunąć pęcherzyki, poprawić wolną przestrzeń, przetrzeć brzegi, założyć dwuczęściowe metalowe pokrywki, wekować w kąpieli wodnej; tabela 1 (hot, 1/2 pinty lub pint): 0–1000 stóp 15 min, 1001–3000 stóp 20 min, 3001–6000 stóp 20 min, wyżej 25 min.
- **Źródło (szczebel 1):** „4 cups cranberries 1 cup water 2 cups sugar Yield: About 4 half-pint jars” — NCHFP (nchfp.uga.edu): Cranberry Sauce, Hot Pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberry-sauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Hot Pack – Wash cranberries. Cook berries in water until soft. Press through a fine sieve. Add sugar and boil 3 minutes. Pour boiling hot sauce into hot jars, leaving ½-inch headspace. Remove air bubbles and adjust headspace if needed. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids.” — NCHFP (nchfp.uga.edu): Cranberry Sauce, Hot Pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberry-sauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 3,000 ft 3,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 15 min 20 20 25” — NCHFP (nchfp.uga.edu): Cranberry Sauce, Hot Pack, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cranberry-sauce/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie cali to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `cranberry-lingonberry-v10.md:3`, `cranberry-lingonberry-v10.md:7`, `cranberry-lingonberry-v10.md:9`, `cranberry-lingonberry-v10.md:15` i 10 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-235 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Citrus Marmalade, procedura: słoiki wysterylizować, dwuczęściowe pokrywki przygotować według producenta; owoce umyć i obrać; skórkę pokroić w cienkie paski do garnka, zalać zimną wodą i gotować pod przykryciem do miękkości (ok. 30 minut), odcedzić; z obranych owoców usunąć pestki i błony, pokroić na małe kawałki; połączyć skórkę i owoce, dodać wrzącą wodę i cukier; gotować szybko na dużym ogniu, często mieszając, do temperatury o 8 °F (ok. 4,4 °C) wyższej od temperatury wrzenia wody (220 °F, ok. 104 °C, na poziomie morza), ok. 20 minut; zdjąć z ognia, zebrać pianę; gorącą marmoladę nalać do gorących, sterylnych słoików, 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; przetrzeć brzegi, założyć dwuczęściowe metalowe pokrywki, wekować w kąpieli wodnej; tabela 1 (hot, 1/2 pinty lub pint): 0–1000 stóp 5 min, 1001–6000 stóp 10 min, wyżej 15 min.
- **Źródło (szczebel 1):** „Sterilize canning jars and prepare two-piece canning lids according to manufacturer's directions. To Prepare Fruit — Wash and peel fruit. Cut peel in thin strips into a saucepan. Add cold water and simmer, covered, until tender (about 30 minutes). Drain. Remove seeds and membrane from peeled fruit. Cut fruit into small pieces.” — NCHFP (nchfp.uga.edu): Citrus Marmalade, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/marmalades/citrus-marmalade/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Combine peel and fruit in saucepan, add boiling water and sugar. Boil rapidly over high heat, stirring frequently, until the temperature measures 8°F above the boiling point of water (220°F at sea level), about 20 minutes. Remove from heat; skim. Pour hot marmalade into hot, sterile jars, leaving ¼ inch headspace. Wipe rims of jars with a dampened clean paper towel; adjust two-piece metal canning lids.” — NCHFP (nchfp.uga.edu): Citrus Marmalade, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/marmalades/citrus-marmalade/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Half-pints or Pints 5 min 10 15” — NCHFP (nchfp.uga.edu): Citrus Marmalade, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/marmalades/citrus-marmalade/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia °F i cali to rachunek JarAtlas, zaokrąglone.
- **Karty (1):** `grapefruit-v02.md:19`, `grapefruit-v02.md:29`, `grapefruit-v02.md:31`, `grapefruit-v02.md:33` i 9 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-237 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Lemon Curd, Canned, kroki 1–2: umyć 4 słoiki 1/2 pinty w ciepłej wodzie z detergentem, dobrze wypłukać, trzymać gorące do napełnienia, pokrywki przygotować według producenta; garnek do wekowania napełnić wodą tak, żeby przykryła napełnione słoiki o 1–2 cale (ok. 2,5–5 cm); termometrem podgrzać wodę do 180 °F (ok. 82 °C) na czas, gdy słoiki będą gotowe; po włożeniu słoików dojście do wrzenia trwa zwykle 25–30 minut; czas wekowania liczy się od pełnego wrzenia wody nad słoikami.
- **Źródło (szczebel 1):** „Wash 4 half-pint canning jars with warm, soapy water. Rinse well; keep hot until ready to fill. Prepare canning lids according to manufacturer's directions.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Fill boiling water canner with enough water to cover the filled jars by 1 to 2 inches. Use a thermometer to preheat the water to 180°F by the time filled jars are ready to be added.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „The time it takes for the canner to reach boiling after the jars are added is expected to be 25 to 30 minutes for this product. Process time starts after the water in the canner comes to a full boil over the tops of the jars.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia to rachunek JarAtlas, zaokrąglone.
- **Karty (2):** `lemon-v10.md:23`, `lemon-v10.md:25`, `lemon-v10.md:27`, `lemon-v10.md:51` i 4 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-241 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas dla lemon/lime curd: tabela 1 NCHFP podaje czas tylko dla słoików 1/2 pinty (1 szklanka amerykańska, cup, ok. 236,6 ml, połowa pinty 473 ml; granica zaokrąglona w dół do 236 ml); słoik większy, np. 0,25 l albo 0,3 l, nie ma przetestowanego czasu, więc karta zaleca słoiki do 236 ml (np. 0,2 l).
- **Źródło (szczebel 1):** „Hot Half-pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: źródło nie mówi o słoikach metrycznych. 1/2 pinty = 236,6 ml (rachunek z ACI-174), zaokrąglone w dół do 236 ml; kierunek ostrożny jak ACI-179.
- **Karty (2):** `lemon-v10.md:65`, `lemon-v10.md:67`, `lime-bergamot-v06.md:69`, `lime-bergamot-v06.md:71`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-006 · szczebel 1

- **Twierdzenie:** Wekowanie w szybkowarze (pressure canning) to jedyna zalecana metoda wekowania mięsa, drobiu, ryb i owoców morza oraz warzyw; kąpiel wodna dla tych produktów oznacza realne ryzyko zatrucia jadem kiełbasianym.
- **Źródło (szczebel 1):** „Pressure canning is the only recommended method for canning meat, poultry, seafood, and vege” — treść strony, <https://nchfp.uga.edu/how/can/general-information/for-safetys-sake/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Using boiling water canners for these foods poses a real risk of botulism poisoning.” — treść strony, <https://nchfp.uga.edu/how/can/general-information/for-safetys-sake/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Cytat 1 urwany na znaku miękkiego dzielenia w słowie „vege­tables” w źródle.
- **Karty (1):** `white-cabbage-v13.md:14`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-025 · szczebel 3

- **Twierdzenie:** Brokuł, kalafior, kapusta, kalarepa i brukselka nie nadają się do wekowania w szybkowarze (Penn State Extension).
- **Źródło (szczebel 3):** „Broccoli, cauliflower, cabbage, kohlrabi, and Brussels sprouts are not suitable for pressure canning.” — treść strony, <https://extension.psu.edu/preserving-late-season-fall-vegetables>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v13.md:16`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### G3. Fermentacja (kiszenie): sól, temperatura, kożuch i pleśń (21)

**Grupa G3 zbiorczo:** ☐ zatwierdzam wszystkie punkty grupy poza oznaczonymi niżej · ☐ nie zatwierdzam zbiorczo

#### FER-011 · szczebel 1

- **Twierdzenie:** Nie robić kiszonej kapusty ani kiszonych ogórków ze zmniejszoną ilością soli.
- **Źródło (szczebel 1):** „Caution: Do not attempt to make sauerkraut or fermented pickles by cutting back on the salt required.” — Pickles with reduced salt content, <https://nchfp.uga.edu/how/ferment/general-information-on-fermenting/general-information-on-fermenting/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „Therefore, do not attempt to make sauerkraut or fermented pickles by cutting back on the salt required.” — Salt in Canning, <https://extension.psu.edu/salt-in-canning>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `cucumber-v01.md:17`, `white-cabbage-v01.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-021 · szczebel 1

- **Twierdzenie:** Kapusta i ogórki muszą być podczas fermentacji 1–2 cale (ok. 2,5–5 cm) pod solanką.
- **Źródło (szczebel 1):** „Cabbage and cucumbers must be kept 1 to 2 inches under brine while fermenting.” — Suitable Containers, <https://nchfp.uga.edu/how/ferment/general-information-on-fermenting/suitable-containers-covers-and-weights-for-fermenting-food/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `cucumber-v01.md:21`, `white-cabbage-v01.md:15`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-029 · szczebel 1

- **Twierdzenie:** NCHFP kapusta kiszona: 25 funtów kapusty na 3/4 szklanki soli do konserw; praca partiami po 5 funtów z 3 łyżkami soli.
- **Źródło (szczebel 1):** „25 lbs cabbage 3/4 cup canning or pickling salt” — Sauerkraut, składniki, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „and add 3 tablespoons of salt.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:3`, `white-cabbage-v01.md:7`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-030 · szczebel 1

- **Twierdzenie:** Jeśli sok nie przykrywa kapusty, dolać przegotowanej i ostudzonej solanki: 1,5 łyżki soli na kwartę wody.
- **Źródło (szczebel 1):** „If juice does not cover cabbage, add boiled and cooled brine (1-1/2 tablespoons of salt per quart of water).” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:17`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-031 · szczebel 3

- **Twierdzenie:** Wisconsin (szczebel 3): do kapusty 2,25–2,5% soli wagowo, sól do konserw bez jodu (3 łyżki na 5 funtów).
- **Źródło (szczebel 3):** „sauerkraut. Add 2.25 to 2.5 percent salt by weight (see Procedure 3” — Ingredients, Salt, <https://oc4h.ucanr.edu/sites/default/files/2020-12/341219.pdf>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-034 · szczebel 1

- **Twierdzenie:** NCHFP kapusta: zalecana temperatura fermentacji 70–75 °F (21–24 °C), pełna fermentacja w ok. 3–4 tygodnie; w 60–65 °F (16–18 °C) 5–6 tygodni; poniżej 60 °F (16 °C) kapusta może nie fermentować; powyżej 75 °F (24 °C) może zmięknąć.
- **Źródło (szczebel 1):** „the USDA recommendation is to store at 70º to 75ºF while fermenting.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „At temperatures lower than 60ºF, kraut may not ferment. Above 75ºF, kraut may become soft.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:19`, `white-cabbage-v01.md:21`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-035 · szczebel 1

- **Twierdzenie:** NCHFP kapusta: przy obciążeniu workiem z solanką nie ruszać naczynia do końca fermentacji (gdy ustanie bąbelkowanie); przy obciążeniu słoikami sprawdzać 2–3 razy w tygodniu i zbierać kożuch.
- **Źródło (szczebel 1):** „If you use jars as weight, you will have to check the kraut 2 to 3 times each week and remove scum if it forms.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „If you weigh the cabbage down with a brine-filled bag, do not disturb the crock until normal fermentation is completed (when bubbling ceases).” — Sauerkraut, Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:23`, `white-cabbage-v01.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-036 · szczebel 1

- **Twierdzenie:** NCHFP: w pełni ukiszoną kapustę można trzymać szczelnie przykrytą w lodówce przez kilka miesięcy albo zawekować.
- **Źródło (szczebel 1):** „Fully fermented kraut may be kept tightly covered in the refrigerator for several months or it may be canned as follows:” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:29`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-037 · szczebel 1

- **Twierdzenie:** NCHFP: wekowanie kapusty w kąpieli wodnej, 0–1000 stóp n.p.m.: hot pack słoiki pint 10 min, quart 15 min; raw pack pint 20 min, quart 25 min (wyżej dłużej wg tabeli).
- **Źródło (szczebel 1):** „Hot Pints 10 min 15 15 20 Quarts 15 20 20 25 Raw Pints 20 25 30 35 Quarts 25 30 35 40” — Table 1, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-043 · szczebel 1

- **Twierdzenie:** NCHFP ogórki: fermentacja w 70–75 °F (21–24 °C) ok. 3–4 tygodnie; 55–65 °F (13–18 °C) dopuszczalne, ale 5–6 tygodni; unikać powyżej 80 °F (27 °C), bo ogórki zmiękną.
- **Źródło (szczebel 1):** „Store where temperature is between 70ºF and 75ºF for about 3 to 4 weeks while fermenting.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Avoid temperatures above 80ºF, or pickles will become too soft during fermentation.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:23`, `cucumber-v01.md:25`, `cucumber-v01.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-044 · szczebel 1

- **Twierdzenie:** NCHFP ogórki: sprawdzać naczynie kilka razy w tygodniu i od razu zbierać kożuch lub pleśń z powierzchni; jeśli ogórki zmiękną, staną się śliskie lub nieprzyjemnie pachną, wyrzucić.
- **Źródło (szczebel 1):** „Check the container several times a week and promptly remove surface scum or mold.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Caution: If the pickles become soft, slimy, or develop a disagreeable odor, discard them.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:29`, `cucumber-v01.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-045 · szczebel 1

- **Twierdzenie:** NCHFP ogórki: w pełni ukiszone można trzymać w oryginalnym naczyniu ok. 4–6 miesięcy w lodówce, regularnie zbierając kożuch i pleśń; wekowanie jest lepszym sposobem przechowywania.
- **Źródło (szczebel 1):** „Fully fermented pickles may be stored in the original container for about 4 to 6 months, provided they are refrigerated and surface scum and molds are removed regularly.” — Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:33`, `cucumber-v01.md:35`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-046 · szczebel 1

- **Twierdzenie:** NCHFP ogórki: wekowanie w kąpieli wodnej, raw pack, 0–1000 stóp: pint 10 min, quart 15 min (solankę przelać do garnka, powoli doprowadzić do wrzenia i gotować na małym ogniu 5 min).
- **Źródło (szczebel 1):** „Raw Pints 10 min 15 20 Quarts 15 20 25” — Table 1, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „To can them, pour the brine into a pan, heat slowly to a boil, and simmer 5 minutes.” — Fermented Dill Pickles, Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:37`, `cucumber-v01.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-055 · szczebel 3

- **Twierdzenie:** OSU (kapusta): małe plamy pleśni można zebrać, przy dużej ilości wyrzucić całą partię; śliska kapusta oznacza zepsucie, wyrzucić; różowa bezpieczna, jeśli nie jest śliska; gnijące części wyrzucić.
- **Źródło (szczebel 3):** „Moldy kraut (small mold patches may be skimmed off, but large amounts require discarding)” — Moldy kraut, <https://extension.oregonstate.edu/food/preservation/sauerkraut-problems-solutions-sp-50-745>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „Discard the batch if large amounts of mold are visible.” — Moldy kraut, <https://extension.oregonstate.edu/food/preservation/sauerkraut-problems-solutions-sp-50-745>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 3):** „Slimy kraut (indicates spoilage; discard kraut)” — Slimy kraut, <https://extension.oregonstate.edu/food/preservation/sauerkraut-problems-solutions-sp-50-745>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:57`, `white-cabbage-v01.md:59`, `white-cabbage-v01.md:61`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-095 · szczebel 1

- **Twierdzenie:** NCHFP ogórki (wekowanie po fermentacji): słoik napełnić ogórkami i gorącą solanką, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Fill jar with pickles and hot brine, leaving 1/2-inch headspace.” — Fermented Dill Pickles, Procedure, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-096 · szczebel 1

- **Twierdzenie:** NCHFP ogórki, kąpiel wodna, raw pack, Table 1, na wysokości 1001–6000 stóp: pint 15 min, quart 20 min.
- **Źródło (szczebel 1):** „Raw Pints 10 min 15 20 Quarts 15 20 25” — Table 1, kolumny 0 - 1,000 ft / 1,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-097 · szczebel 1

- **Twierdzenie:** NCHFP kapusta kiszona do wekowania: hot pack (kapustę z sokiem powoli doprowadzić do wrzenia, często mieszając, zdjąć z ognia, napełnić słoiki dość ciasno kapustą i sokiem) albo raw pack (słoiki ciasno kapustą, zalać sokiem); w obu 1/2 cala (ok. 1,3 cm) wolnej przestrzeni.
- **Źródło (szczebel 1):** „Hot pack – Bring kraut and liquid slowly to a boil in a large kettle, stirring frequently.” — Sauerkraut, Hot pack, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Remove from heat and fill jars rather firmly with kraut and juices, leaving 1/2-inch headspace.” — Sauerkraut, Hot pack, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Raw pack – Fill jars firmly with kraut and cover with juices, leaving 1/2-inch headspace.” — Sauerkraut, Raw pack, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:31`, `white-cabbage-v01.md:33`, `white-cabbage-v01.md:35`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-098 · szczebel 1

- **Twierdzenie:** NCHFP kapusta, kąpiel wodna, Table 1, na wysokości 1001–3000 stóp: hot pack pint 15 min, quart 20 min; raw pack pint 25 min, quart 30 min.
- **Źródło (szczebel 1):** „Hot Pints 10 min 15 15 20 Quarts 15 20 20 25 Raw Pints 20 25 30 35 Quarts 25 30 35 40” — Table 1, kolumny 0 - 1,000 ft / 1,001 - 3,000 ft / 3,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:39`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-099 · szczebel 1

- **Twierdzenie:** NCHFP ogórki, kąpiel wodna, raw pack, Table 1, powyżej 6000 stóp: pint 20 min, quart 25 min.
- **Źródło (szczebel 1):** „Raw Pints 10 min 15 20 Quarts 15 20 25” — Table 1, kolumny 0 - 1,000 ft / 1,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/ferment/recipes/dill-pickles/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `cucumber-v01.md:47`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-100 · szczebel 1

- **Twierdzenie:** NCHFP kapusta, kąpiel wodna, Table 1, na wysokości 3001–6000 stóp: hot pack pint 15 min, quart 20 min; raw pack pint 30 min, quart 35 min.
- **Źródło (szczebel 1):** „Hot Pints 10 min 15 15 20 Quarts 15 20 20 25 Raw Pints 20 25 30 35 Quarts 25 30 35 40” — Table 1, kolumny 0 - 1,000 ft / 1,001 - 3,000 ft / 3,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:41`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### FER-101 · szczebel 1

- **Twierdzenie:** NCHFP kapusta, kąpiel wodna, Table 1, powyżej 6000 stóp: hot pack pint 20 min, quart 25 min; raw pack pint 35 min, quart 40 min.
- **Źródło (szczebel 1):** „Hot Pints 10 min 15 15 20 Quarts 15 20 20 25 Raw Pints 20 25 30 35 Quarts 25 30 35 40” — Table 1, kolumny 0 - 1,000 ft / 1,001 - 3,000 ft / 3,001 - 6,000 ft / Above 6,000 ft, <https://nchfp.uga.edu/how/ferment/recipes/sauerkraut/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v01.md:43`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### G4. Przechowywanie, oznaki zepsucia, po otwarciu, kiedy wyrzucić (20)

**Grupa G4 zbiorczo:** ☐ zatwierdzam wszystkie punkty grupy poza oznaczonymi niżej · ☐ nie zatwierdzam zbiorczo

#### ACI-293 · szczebel 1

- **Twierdzenie:** NCHFP Golden Pepper Jelly: galaretkę, która została po napełnieniu słoików, trzymać w lodówce; po otwarciu zamkniętego słoika trzymać galaretkę w lodówce.
- **Źródło (szczebel 1):** „Refrigerate any leftover jelly from filling jars, if any, and enjoy freshly made. Refrigerate the jelly once sealed jars are opened for use.” — NCHFP (nchfp.uga.edu): Golden Pepper Jelly, Notes (4), <https://nchfp.uga.edu/how/make-jam-jelly/jellies/golden-pepper-jelly/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `chili-pepper-v13.md:81`, `chili-pepper-v13.md:83`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-310 · szczebel 1

- **Twierdzenie:** NCHFP Mint Jelly Pectin: wysterylizować słoiki i przygotować pokrywki; miętę umyć, liście i łodygi zgnieść albo drobno posiekać; w rondlu dodać wodę i szybko zagotować; zdjąć z ognia, przykryć, odstawić 10 min; odcedzić i wyrzucić miętę (opcjonalnie kilka kropli zielonego barwnika).
- **Źródło (szczebel 1):** „Wash mint, crush leaves and stems or finely chop. Place in saucepan, add water and bring quickly to a boil. Remove from heat, cover and let stand 10 minutes.” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Strain to remove mint. Discard mint.” — NCHFP (nchfp.uga.edu): Mint Jelly Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/mint-jelly-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `garden-herbs-v12.md:23`, `garden-herbs-v12.md:31`, `garden-herbs-v12.md:33`, `garden-herbs-v12.md:35` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-001 · szczebel 1

- **Twierdzenie:** W tradycyjnych przepisach na dżemy i galaretki nie wolno zmniejszać ilości cukru: za mało cukru uniemożliwia żelowanie i może pozwolić na rozwój drożdży i pleśni.
- **Źródło (szczebel 1):** „Do not try to reduce the amount of sugar in traditional recipes. Too little sugar prevents gelling and may allow yeasts and molds to grow.” — General Information on Canning Jams, Jellies, and Marmalades, sekcja Ingredients, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/general-information-on-canning-jams-jellies-and-marmalades/>, odczyt 2026-11-01, curl+grep
- **Karty (11):** `apricot-v06.md:7`, `apricot-v06.md:17`, `corn-v09.md:13`, `garden-herbs-v12.md:11` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-012 · szczebel 1

- **Twierdzenie:** Dżem lub galaretkę z pleśnią należy wyrzucić; USDA i mikrobiolodzy odradzają zbieranie pleśni i jedzenie reszty.
- **Źródło (szczebel 1):** „Discard jams and jellies with mold on them.” — FAQ General Jams and Jellies: What do I do if there's mold on my jellied fruit product?, <https://nchfp.uga.edu/faqs/general-jams-and-jellies/category/faq-jams-and-jellies>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „USDA and microbiologists recommend against scooping out the mold and using the remaining jam or jelly.” — jw., <https://nchfp.uga.edu/faqs/general-jams-and-jellies/category/faq-jams-and-jellies>, odczyt 2026-11-01, curl+grep
- **Karty (12):** `apricot-v06.md:69`, `chili-pepper-v13.md:85`, `corn-v09.md:69`, `garden-herbs-v12.md:77` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-013 · szczebel 1

- **Twierdzenie:** Przy jakiejkolwiek pleśni lub innych oznakach zepsucia wyrzuca się całą zawartość słoika.
- **Źródło (szczebel 1):** „If there is any mold on a jar of jam or jelly, or signs of other spoilage, discard the entire contents of the jar or container.” — Storing Home-Canned Jams and Jellies, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-01, curl+grep
- **Karty (13):** `apple-v10.md:101`, `apricot-v06.md:71`, `chili-pepper-v13.md:87`, `corn-v09.md:79` i 11 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-018 · szczebel 1

- **Twierdzenie:** Otwarte domowe dżemy trzyma się w lodówce w 40 °F (ok. 4 °C) lub niżej; „zwykłe” gotowane dżemy pełnocukrowe (także z dodaną pektyną) najlepiej trzymać w lodówce przez 1 miesiąc od otwarcia.
- **Źródło (szczebel 1):** „Opened home-canned jams and jellies should be kept in the refrigerator at 40°F or lower.” — Storing Home-Canned Jams and Jellies, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „“Regular” – or pectin-added, full-sugar – cooked jams and jellies are best stored for 1 month in the refrigerator after opening.” — Storing Home-Canned Jams and Jellies, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-01, curl+grep
- **Karty (11):** `apricot-v06.md:65`, `apricot-v06.md:67`, `corn-v09.md:71`, `corn-v09.md:73` i 16 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-041 · szczebel 1

- **Twierdzenie:** Wekowany lemon curd zużywa się w ciągu 3-4 miesięcy; brązowienie lub rozwarstwienie oznacza wyrzucenie.
- **Źródło (szczebel 1):** „Plan to use canned lemon curd within 3 to 4 months.” — Lemon Curd, Canned, Shelf Life, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Browning and/or separation may occur with longer storage; discard any time these changes are observed.” — jw., <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `lemon-v10.md:87`, `lemon-v10.md:95`, `lime-bergamot-v06.md:91`, `lime-bergamot-v06.md:99`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-051 · szczebel 3

- **Twierdzenie:** Nalewanie soku z sokownika parowego prosto do sterylnych słoików, zakręcanie i przechowywanie w temp. pokojowej bez dalszej obróbki ("bottling") nie jest bezpieczne; sok trzeba wekować według zaleceń zgodnych z NCHFP.
- **Źródło (szczebel 3):** „temperature without any further processing, a process known as “bottling”. This is not safe!” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), SAFETY NOTE, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `currant-v10.md:15`, `grapes-v07.md:7`, `raspberry-blackberry-v07.md:15`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-166 · szczebel 1

- **Twierdzenie:** NCHFP Strawberry Preserves: owoce i cukier ułożyć naprzemiennymi warstwami i odstawić na 8–10 godzin albo na noc do lodówki lub innego chłodnego miejsca.
- **Źródło (szczebel 1):** „Combine prepared fruit and sugar in alternate layers and let stand for 8 to 10 hours or overnight in the refrigerator or other cool place.” — NCHFP (nchfp.uga.edu): Strawberry Preserves, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/preserves/strawberry-preserves/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `strawberry-v08.md:3`, `strawberry-v08.md:31`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-181 · szczebel 1

- **Twierdzenie:** NCHFP, Storing Home-Canned Jams and Jellies: otwarty słoik dżemu lub galaretki regularnie sprawdzać pod kątem oznak zepsucia, takich jak pleśń, drożdże i obcy zapach (w tym zapach fermentacji, drożdży albo alkoholu); po ich wykryciu wyrzucić całą zawartość.
- **Źródło (szczebel 1):** „Do examine the container regularly during storage for any signs of spoilage like molds, yeasts and off odors (including a fermented, “yeasty’,” or “alcohol” odor), once it is opened.” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Discard the entire contents of the container if these are detected.” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Karty (12):** `apricot-v06.md:71`, `chili-pepper-v13.md:87`, `corn-v09.md:79`, `garden-herbs-v12.md:79` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-190 · szczebel 1

- **Twierdzenie:** NCHFP Identifying and Handling Spoiled Canned Food: nie próbować jedzenia ze słoika z niezamkniętą pokrywką ani jedzenia z oznakami zepsucia.
- **Źródło (szczebel 1):** „Do not taste food from a jar with an unsealed lid or food that shows signs of spoilage.” — NCHFP (nchfp.uga.edu): Identifying and Handling Spoiled Canned Food, pierwszy akapit, <https://nchfp.uga.edu/how/can/general-information/identifying-and-handling-spoiled-canned-food/>, odczyt 2026-11-02, curl+grep
- **Karty (27):** `apple-v10.md:97`, `apple-v10.md:99`, `apple-v13.md:87`, `apple-v13.md:89` i 50 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-191 · szczebel 1

- **Twierdzenie:** NCHFP Identifying and Handling Spoiled Canned Food: oznaki zepsucia słoika z przetworami: pokrywka nieszczelna lub bez podciśnienia (dobre zamknięcie ma wklęsły środek), zaschnięte zacieki jedzenia od góry słoika, unoszące się pęcherzyki powietrza i nienaturalny kolor; przy otwieraniu nienaturalny zapach, tryskający płyn i pleśń przypominająca watę na powierzchni jedzenia albo pod pokrywką.
- **Źródło (szczebel 1):** „As each stored jar is selected for use, examine its lid for tightness and vacuum. Lids with concave centers have good seals.” — NCHFP (nchfp.uga.edu): Identifying and Handling Spoiled Canned Food, akapit o sprawdzaniu słoików, <https://nchfp.uga.edu/how/can/general-information/identifying-and-handling-spoiled-canned-food/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Next, while holding the jar upright at eye level, rotate the jar and examine its outside surface for streaks of dried food originating at the top of the jar. Look at the contents for rising air bubbles and unnatural color.” — NCHFP (nchfp.uga.edu): Identifying and Handling Spoiled Canned Food, akapit o sprawdzaniu słoików, <https://nchfp.uga.edu/how/can/general-information/identifying-and-handling-spoiled-canned-food/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „While opening the jar, smell for unnatural odors and look for spurting liquid and cotton-like mold growth (white, blue, black, or green) on the top food surface and underside of lid.” — NCHFP (nchfp.uga.edu): Identifying and Handling Spoiled Canned Food, akapit o sprawdzaniu słoików, <https://nchfp.uga.edu/how/can/general-information/identifying-and-handling-spoiled-canned-food/>, odczyt 2026-11-02, curl+grep
- **Karty (27):** `apple-v10.md:91`, `apple-v10.md:93`, `apple-v10.md:95`, `apple-v13.md:81` i 77 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-198 · szczebel 1

- **Twierdzenie:** NCHFP Storing Home Canned Foods: słoiki przechowywać w czystym, chłodnym, ciemnym i suchym miejscu; nie przechowywać ich powyżej 95 °F (35 °C) ani przy gorących rurach, kuchence, piecu, na nieocieplonym strychu czy w pełnym słońcu, bo w takich warunkach przetwór traci jakość i może się zepsuć.
- **Źródło (szczebel 1):** „Label and date the jars and store them in a clean, cool, dark, dry place.” — NCHFP (nchfp.uga.edu): Storing Home Canned Foods, Storing Canned Foods, <https://nchfp.uga.edu/how/can/general-information/storing-home-canned-foods/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Do not store jars above 95° F or near hot pipes, a range, a furnace, in an uninsulated attic, or in direct sunlight. Under these conditions, food will lose quality in a few weeks or months and may spoil.” — NCHFP (nchfp.uga.edu): Storing Home Canned Foods, Storing Canned Foods, <https://nchfp.uga.edu/how/can/general-information/storing-home-canned-foods/>, odczyt 2026-11-02, curl+grep
- **Karty (27):** `apple-v10.md:85`, `apple-v13.md:77`, `apple-v16.md:77`, `cranberry-lingonberry-v09.md:63` i 23 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-210 · szczebel 1

- **Twierdzenie:** NCHFP Cooling Jars and Testing Jar Seals: po wyjęciu gorących słoików z garnka nie dokręcać pokrywek ani metalowych pierścieni (screw bands) (może to przeciąć uszczelkę i zepsuć zamknięcie); w słoikach nakładanych na surowo poziom jedzenia i płynu po wystudzeniu będzie wyraźnie niższy; jeśli słoik straci dużo płynu podczas wekowania, nie otwierać go, żeby dolać płynu.
- **Źródło (szczebel 1):** „When you remove hot jars from a canner, do not retighten their jar lids.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Cooling jars, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „The food level and liquid volume of raw-packed jars will be noticeably lower after cooling.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Cooling jars, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „If a jar loses excessive liquid during processing, do not open it to add more liquid.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Cooling jars, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Retightening of hot lids may cut through the gasket and cause seal failures.” — NCHFP (nchfp.uga.edu): Cooling Jars and Testing Jar Seals, Cooling jars, <https://nchfp.uga.edu/how/can/general-information/cooling-jars-and-testing-jar-seals/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Fill jars with food, add lids, and tighten screw bands.” — NCHFP (nchfp.uga.edu): Recommended Jars and Lids, <https://nchfp.uga.edu/how/can/general-information/recommended-jars-and-lids/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Do not retighten lids after processing jars.” — NCHFP (nchfp.uga.edu): Recommended Jars and Lids, <https://nchfp.uga.edu/how/can/general-information/recommended-jars-and-lids/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** „Pokrywki ani pierścienie”: NCHFP zakłada zamknięcie dwuczęściowe (pokrywka + pierścień zakręcany), zakazuje dokręcania pokrywek po wekowaniu; zakaz obejmuje dokręcanie pierścienia, który dociska pokrywkę.
- **Karty (23):** `apple-v10.md:73`, `apple-v13.md:63`, `apple-v13.md:65`, `apple-v16.md:63` i 41 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-211 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics: do soku z sokownika wybierać owoce dobrej jakości, dojrzałe, ale nie przejrzałe; owoce uszkodzone albo spleśniałe wyrzucić; owoców spadłych z drzewa (windfall) nie używać do soku ani do wekowania.
- **Źródło (szczebel 3):** „Choose good quality fruit and vegetables. Fruit should be ripe (but not overripe); vegetables and herbs should be very fresh. Discard any damaged or moldy produce” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Selecting and Preparing Produce for Steam Juicing, s. 3, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Źródło (szczebel 3):** „it is recommended that windfall fruit not be eaten fresh, used for making juice or cider, baked, or canned.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Windfall Fruit, s. 3, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Karty (3):** `currant-v10.md:29`, `currant-v10.md:31`, `grapes-v07.md:21`, `grapes-v07.md:23` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-213 · szczebel 1

- **Twierdzenie:** NCHFP Storing Home-Canned Jams and Jellies: trwałość otwartego dżemu lub galaretki skraca częste otwieranie pojemnika i długie trzymanie go w temperaturze pokojowej; można nakładać potrzebną porcję do miseczki i szybko odstawiać słoik do lodówki; otwarty słoik trzymać w lodówce do zużycia, często sprawdzać oznaki zepsucia (pleśń, drożdże, zapach fermentacji, alkoholu lub drożdży) i przy każdej z nich natychmiast wyrzucić.
- **Źródło (szczebel 1):** „The expected shelf life will be shortened by keeping the container frequently open and/or out at room temperature for long periods of time during use.” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, Q: How long can I keep… once I open them?, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „At each use, you can spoon out the quantity of jam or jelly that you may require into a bowl, and replace the jar in the refrigerator quickly” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, Q: How long can I keep… once I open them?, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „examine it frequently for signs of spoilage (like mold or yeast growth, or off-odors, including “fermented,” “alcohol” or “yeasty” odors).” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, Q: How long can I keep… once I open them?, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „store your opened jar of jam or jelly in the refrigerator until consumed” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, Q: How long can I keep… once I open them?, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Discard the product immediately if any signs of spoilage are detected.” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, Q: How long can I keep… once I open them?, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `corn-v09.md:75`, `corn-v09.md:77`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-216 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Apple Juice: dobry sok z mieszanki odmian, najlepiej świeży sok z lokalnej tłoczni w ciągu 24 godzin od tłoczenia; sok schłodzić 24–48 godzin, bez mieszania zlać klarowny płyn, osad wyrzucić, klarowny płyn przecedzić przez papierowy filtr do kawy albo podwójną warstwę wilgotnej gazy; szybko podgrzać, mieszając, aż zacznie wrzeć; od razu wlać do wysterylizowanych słoików pint lub quart (albo czystych słoików 1/2 galona), zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; tabela 1 (kąpiel wodna, hot): pint lub quart: 0–1000 stóp 5 min, 1001–6000 stóp 10 min, wyżej 15 min; 1/2 galona odpowiednio 10, 15 i 20 min.
- **Źródło (szczebel 1):** „Good quality apple juice is made from a blend of varieties. For best results, buy fresh juice from a local cider maker within 24 hours after it has been pressed.” — NCHFP (nchfp.uga.edu): Apple Juice, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Refrigerate juice for 24 to 48 hours. Without mixing, carefully pour off clear liquid and discard sediment. Strain clear liquid through a paper coffee filter or double layers of damp cheesecloth.” — NCHFP (nchfp.uga.edu): Apple Juice, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Heat quickly, stirring occasionally, until juice begins to boil. Fill immediately into sterile pint or quart jars or fill into clean half-gallon jars, leaving 1/4-inch headspace.” — NCHFP (nchfp.uga.edu): Apple Juice, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-juice/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „0 - 1,000 ft 1,001 - 6,000 ft Above 6,000 ft Hot Pints or Quarts 5 min 10 15 Half-Gallons 10 min 15 20” — NCHFP (nchfp.uga.edu): Apple Juice, Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-juice/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Słoiki 1/2 galona pominięte na karcie (jak SLO-208); przeliczenie 1/4 cala ≈ 0,6 cm to rachunek JarAtlas.
- **Karty (1):** `apple-v16.md:3`, `apple-v16.md:9`, `apple-v16.md:15`, `apple-v16.md:27` i 9 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-227 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas: otwarty słoik masła jabłkowego NCHFP (pełnocukrowego) trzymać w lodówce. NCHFP mówi to wprost dla wekowanego masła jabłkowego o obniżonej zawartości cukru („Once opened, jars that were processed should then be stored in the refrigerator”) i dla otwartych domowych dżemów i galaretek (40 °F lub niżej); dla pełnocukrowego masła jabłkowego NCHFP nie podaje czasu przechowywania po otwarciu.
- **Źródło (szczebel 1):** „Once opened, jars that were processed should then be stored in the refrigerator.” — NCHFP (nchfp.uga.edu): Apple Butter, Reduced Sugar, Additional Notes, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apple-butter-reduced-sugar/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Opened home-canned jams and jellies should be kept in the refrigerator at 40°F or lower.” — NCHFP (nchfp.uga.edu): Storing Home-Canned Jams and Jellies, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła o tym przepisie: przeniesienie zalecenia z wersji o obniżonej zawartości cukru i z dżemów na masło pełnocukrowe. Kierunek ostrożny (lodówka zamiast spiżarni), bez podawania czasu.
- **Karty (1):** `apple-v10.md:87`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-238 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Lemon Curd, Canned, kroki 3–7: cukier ze skórką wymieszać i odstawić ok. 30 minut; odmierzyć sok, przygotować masło; wodę w dolnym garnku podgrzać do łagodnego wrzenia (nie burzliwego), woda nie może dotykać dna górnego naczynia; w górnym naczyniu ubić żółtka z jajkami, stopniowo wmieszać cukier ze skórką, potem sok i masło; postawić nad wrzącą wodą i mieszać delikatnie, ale bez przerwy, aż masa osiągnie 170 °F (ok. 77 °C), mierząc termometrem; zdjąć z ognia, mieszać, aż krem zgęstnieje (ok. 5 minut); przecedzić przez sitko do miski, skórkę wyrzucić.
- **Źródło (szczebel 1):** „Combine the sugar and lemon zest in a small bowl, stir to mix, and set aside about 30 minutes.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „The water should not boil vigorously or touch the bottom of the top double boiler pan or bowl in which the curd is to be cooked.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „In the top of the double boiler, on the counter top or table, whisk the egg yolks and whole eggs together until thoroughly mixed. Slowly whisk in the sugar and zest, blending until well mixed and smooth. Blend in the lemon juice and then add the butter pieces to the mixture.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Continue cooking until the mixture reaches a temperature of 170°F. Use a food thermometer to monitor the temperature.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Continue to stir gently until the curd thickens (about 5 minutes). Strain curd through a mesh strainer into a glass or stainless steel bowl; discard collected zest.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie °F to rachunek JarAtlas, zaokrąglone.
- **Karty (2):** `lemon-v10.md:33`, `lemon-v10.md:35`, `lemon-v10.md:37`, `lemon-v10.md:39` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-239 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Lemon Curd, Canned, kroki 8–9: gorący przecedzony krem nalać do czystych, gorących słoików 1/2 pinty, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; usunąć pęcherzyki, poprawić wolną przestrzeń, przetrzeć brzegi zwilżonym czystym ręcznikiem papierowym, założyć dwuczęściowe metalowe pokrywki; wekować według tabeli 1 (hot, 1/2 pinty): 0–1000 stóp 15 min, 1001–6000 stóp 20 min, wyżej 25 min; studzić bez ruszania 12–24 godziny i sprawdzić zamknięcie; dla najlepszej jakości przechowywać w chłodnym, ciemnym miejscu.
- **Źródło (szczebel 1):** „Fill hot strained curd into the clean, hot half-pint jars, leaving ½-inch headspace. Remove air bubbles and adjust headspace if needed. Wipe rims of jars with a dampened, clean paper towel; apply two-piece metal canning lids.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Hot Half-pints 15 min 20 25” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Let cool, undisturbed, for 12 to 24 hours and check for seals.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „For best quality, store in a cool, dark place (away from light).” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie cali to rachunek JarAtlas, zaokrąglone.
- **Karty (2):** `lemon-v10.md:47`, `lemon-v10.md:49`, `lemon-v10.md:53`, `lemon-v10.md:57` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### G5. Mrożenie: blanszowanie, pakowanie, rozmrażanie, awaria zamrażarki (16)

**Grupa G5 zbiorczo:** ☐ zatwierdzam wszystkie punkty grupy poza oznaczonymi niżej · ☐ nie zatwierdzam zbiorczo

#### ACI-268 · szczebel 1

- **Twierdzenie:** NCHFP Marinated Peppers: papryki można zostawić w całości, duże pokroić na ćwiartki; umyć, naciąć każdą 2–4 razy i zblanszować we wrzącej wodzie albo opalić skórkę, żeby obrać ostre papryki o twardej skórce. Opalanie: w gorącym piekarniku (400 °F, ok. 204 °C) albo pod grillem 6–8 minut, aż skórka zrobi bąble, albo na palniku przykrytym grubą siatką drucianą przez kilka minut.
- **Źródło (szczebel 1):** „Peppers may be left whole. Large peppers may be quartered. Wash, slash two to four slits in each pepper, and blanch in boiling water or blister in order to peel tough-skinned hot peppers.” — NCHFP (nchfp.uga.edu): Marinated Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Oven or broiler method: Place peppers in a hot oven (400ºF) or broiler for 6-8 minutes or until skins blister. Range-top method: Cover hot burner, either gas or electric, with heavy wire mesh. Place peppers on burner for several minutes until skins blister.” — NCHFP (nchfp.uga.edu): Marinated Peppers, Procedure, <https://nchfp.uga.edu/how/pickle/vegetable-pickles/marinated-peppers/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** 400 °F = (400 − 32) × 5/9 = 204,4 °C, w karcie „ok. 204 °C”.
- **Karty (1):** `bell-pepper-v09.md:39`, `bell-pepper-v09.md:41`, `bell-pepper-v09.md:43`, `bell-pepper-v09.md:45`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-042 · szczebel 1

- **Twierdzenie:** Lemon curd można zamrozić do 1 roku; po rozmrożeniu (w lodówce) zjeść w ciągu 4 tygodni.
- **Źródło (szczebel 1):** „Prepared lemon curd can also be frozen instead of canned for up to 1 year without quality changes when thawed.” — Lemon Curd, Canned, Shelf Life, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „After thawing, consume within 4 weeks.” — jw., <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `lemon-v10.md:89`, `lemon-v10.md:91`, `lime-bergamot-v06.md:93`, `lime-bergamot-v06.md:95`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-183 · szczebel 1

- **Twierdzenie:** NCHFP Berry Syrup, przygotowanie soku: 6½ szklanki świeżych lub mrożonych owoców z listy; świeże owoce umyć, oczyścić z szypułek i rozgnieść w rondlu; zagotować i dusić do miękkości (5–10 minut); odcedzić na gorąco przez durszlak i zostawić do ostygnięcia na tyle, by dało się je dotknąć; zebrany sok przecedzić przez podwójną gazę albo worek do galaretek; suchą miazgę wyrzucić; wydajność soku ok. 4½–5 szklanek.
- **Źródło (szczebel 1):** „Select 6½ cups of fresh or frozen fruit of your choice from the list above. Wash, cap, and stem fresh fruit and crush in a saucepan.” — NCHFP (nchfp.uga.edu): Berry Syrup, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Heat to boiling and simmer until soft (5 to 10 minutes). Strain hot through a colander and drain until cool enough to handle.” — NCHFP (nchfp.uga.edu): Berry Syrup, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Strain the collected juice through a double layer of cheesecloth or jelly bag. Discard the dry pulp. The yield of the pressed juice should be about 4½ to 5 cups.” — NCHFP (nchfp.uga.edu): Berry Syrup, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:11`, `raspberry-blackberry-v06.md:19`, `raspberry-blackberry-v06.md:21`, `raspberry-blackberry-v06.md:23` i 8 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-184 · szczebel 1

- **Twierdzenie:** NCHFP Berry Syrup, gotowanie: sok połączyć z 6¾ szklanki cukru w dużym rondlu, zagotować i gotować na małym ogniu 1 minutę; syrop z kawałkami owoców: odłożyć 1–2 szklanki świeżych lub mrożonych owoców, połączyć je z cukrem i gotować jak zwykły syrop.
- **Źródło (szczebel 1):** „Combine the juice with 6¾ cups of sugar in a large saucepan, bring to boil, and simmer 1 minute.” — NCHFP (nchfp.uga.edu): Berry Syrup, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „To make a syrup with whole fruit pieces, save 1 or 2 cups of the fresh or frozen fruit, combine these with the sugar, and simmer as in making regular syrup.” — NCHFP (nchfp.uga.edu): Berry Syrup, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:11`, `raspberry-blackberry-v06.md:31`, `raspberry-blackberry-v06.md:33`, `sour-cherry-v10.md:11` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-207 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics, przechowywanie świeżego soku (bez wekowania): w lodówce do tygodnia, dłużej tylko zamrożony.
- **Źródło (szczebel 3):** „Store juice in the refrigerator for up to one week; for longer storage, freeze it.” — UCCE Master Food Preservers of El Dorado County, Steam Juicing Basics (IV 2026), Storing Fresh Juice, s. 4, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, pdftotext -layout+grep
- **Karty (3):** `currant-v10.md:19`, `grapes-v07.md:11`, `raspberry-blackberry-v07.md:19`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-214 · szczebel 3

- **Twierdzenie:** UC Steam Juicing Basics (szczebel 3), mrożenie soku: pojemniki do zamrażarki (metalowe, ze sztywnego plastiku albo słoiki); sok rozszerza się przy zamrażaniu, więc trzeba zostawić wolną przestrzeń; przy słoikach szklanych zalecane słoiki o prostych ściankach, żeby nie pękały.
- **Źródło (szczebel 3):** „When freezing, choose freezer-safe containers, such as metal or rigid plastic or glass jars.” — UC ANR, Steam Juicing Basics (IV 2026), s. 4, Storing Fresh Juice, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+pdftotext+grep
- **Źródło (szczebel 3):** „Juice will expand when frozen so use the appropriate amount of head space: about ½” in rigid containers;” — UC ANR, Steam Juicing Basics (IV 2026), s. 4, Storing Fresh Juice, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+pdftotext+grep
- **Źródło (szczebel 3):** „Note: When using glass jars, the use of straight-sides jars is recommended to help prevent breakage.” — UC ANR, Steam Juicing Basics (IV 2026), s. 4, Storing Fresh Juice, <https://www.ucanr.edu/sites/default/files/2026-05/Steam%20Juicing%20Basics-ADA-2026April-v1.pdf>, odczyt 2026-11-02, curl+pdftotext+grep
- **Uproszczenie / wniosek JarAtlas:** Wartości wolnej przestrzeni karta podaje według tabeli NCHFP Headspace to Allow (SLO-222), bo skrót w zdaniu UC jest niejednoznaczny.
- **Karty (3):** `currant-v10.md:21`, `currant-v10.md:25`, `grapes-v07.md:13`, `grapes-v07.md:17` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-222 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Headspace to Allow (mrożenie), soki: w pojemnikach z szerokim otworem 1/2 cala (ok. 1,3 cm) dla pinty (ok. 0,47 l) i 1 cal (ok. 2,5 cm) dla quarta (ok. 0,95 l); w pojemnikach z wąskim otworem 1 1/2 cala (ok. 3,8 cm) dla obu pojemności.
- **Źródło (szczebel 1):** „Container with wide top opening Container with narrow top opening Pint Quart Pint Quart” — NCHFP (nchfp.uga.edu): Headspace to Allow, tabela, <https://nchfp.uga.edu/how/freeze/freeze-general-information/headspace-to-allow/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Juices ½ inch 1 inch 1½ inch 1½ inch” — NCHFP (nchfp.uga.edu): Headspace to Allow, tabela, <https://nchfp.uga.edu/how/freeze/freeze-general-information/headspace-to-allow/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia cali, pint i quartów to rachunek JarAtlas, zaokrąglone.
- **Karty (3):** `currant-v10.md:23`, `grapes-v07.md:15`, `raspberry-blackberry-v07.md:23`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-240 · szczebel 1

- **Twierdzenie:** NCHFP Lemon Curd, Canned, mrożenie zamiast wekowania: krem po przecedzeniu i wystudzeniu do temperatury pokojowej zapakować do pojemników do zamrażarki; rozmrażać w lodówce w 40 °F (ok. 4 °C) lub niżej przez 24 godziny przed użyciem.
- **Źródło (szczebel 1):** „Package in freezer containers after straining and cooling to room temperature. To thaw, place container in a refrigerator at 40°F or lower for 24 hours before intended use.” — NCHFP (nchfp.uga.edu): Lemon Curd, Canned, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `lemon-v10.md:89`, `lemon-v10.md:91`, `lime-bergamot-v06.md:93`, `lime-bergamot-v06.md:95`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-249 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Headspace to Allow (mrożenie): pakowanie z płynem (owoce w soku, cukrze, syropie albo wodzie; owoce zgniecione lub przetarte): w pojemniku z szerokim otworem 1/2 cala (ok. 1,3 cm) dla pinty (ok. 0,47 l) i 1 cal (ok. 2,5 cm) dla quarta (ok. 0,95 l), w pojemniku z wąskim otworem 3/4 cala (ok. 1,9 cm) dla pinty i 1 1/2 cala (ok. 3,8 cm) dla quarta; pakowanie bez dodatków (owoce albo warzywa bez dodanego cukru i płynu): 1/2 cala (ok. 1,3 cm) we wszystkich czterech przypadkach. Reguła JarAtlas (ostrożna; NCHFP nie podaje wolnej przestrzeni dla pojemników metrycznych): pojemnik większy niż pinta (ok. 0,47 l) traktować jak quart; pojemników większych niż quart (ok. 0,95 l; pojemnik 1 l jest już większy) nie używać do owoców pakowanych z płynem ani na sucho, mimo ogólnego limitu 1/2 galonu, bo tabela NCHFP obejmuje tylko pinty i quarty i nie podaje dla nich wolnej przestrzeni (NCHFP dopuszcza pojemniki do 1/2 galonu, ok. 1,9 l, SLO-251).
- **Źródło (szczebel 1):** „Container with wide top opening Container with narrow top opening Pint Quart Pint Quart Liquid Pack* ½ inch 1 inch ¾ inch 1 ½ inch Dry Pack** ½ inch ½ inch ½ inch ½ inch” — NCHFP, Headspace to Allow, tabela, <https://nchfp.uga.edu/how/freeze/freeze-general-information/headspace-to-allow/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „*Fruit packed in juice, sugar, syrup or water; crushed or pureéd fruit. **Fruit or vegetable packed without added sugar or liquid.” — NCHFP, Headspace to Allow, przypisy, <https://nchfp.uga.edu/how/freeze/freeze-general-information/headspace-to-allow/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia cali, pint i quartów to rachunek JarAtlas, zaokrąglone; „½”, „¾” w źródle zapisane jako 1/2, 3/4. Reguły dla pojemników metrycznych i większych niż quart to wnioski JarAtlas (kierunek ostrożny: większa wolna przestrzeń albo mniejszy pojemnik), nie zdania źródła.
- **Karty (9):** `blueberry-bilberry-v14.md:31`, `blueberry-bilberry-v14.md:33`, `blueberry-bilberry-v14.md:49`, `cranberry-lingonberry-v14.md:25` i 20 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-251 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Containers for Freezing: opakowanie ma być odporne na parę wodną i wilgoć, trwałe i szczelne, nie kruszyć się w niskiej temperaturze; owoców i warzyw nie mrozić w pojemnikach większych niż 1/2 galonu (ok. 1,9 l), bo zamarzają za wolno; zwykłe słoiki szklane łatwo pękają w temperaturze zamrażarki, więc ze szkła tylko słoiki z szerokim otworem do mrożenia i wekowania; w zwykłych słoikach do wekowania z wąskim otworem zostawić dodatkową wolną przestrzeń, bo rozszerzający się płyn może rozsadzić słoik przy szyjce; z woreczków przed zamknięciem wycisnąć jak najwięcej powietrza.
- **Źródło (szczebel 1):** „Do not freeze fruits and vegetables in containers with a capacity over one-half gallon. Foods in larger containers freeze too slowly to result in a satisfactory product.” — NCHFP, Containers for Freezing, <https://nchfp.uga.edu/how/freeze/freeze-general-information/containers-for-freezing/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Moisture vapor resistant Durable and leakproof Not become brittle and crack at low temperatures” — NCHFP, Containers for Freezing, <https://nchfp.uga.edu/how/freeze/freeze-general-information/containers-for-freezing/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Regular glass jars break easily at freezer temperatures. If using glass jars, choose wide mouth dual purpose jars made for freezing and canning.” — NCHFP, Containers for Freezing, Rigid Containers, <https://nchfp.uga.edu/how/freeze/freeze-general-information/containers-for-freezing/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „If standard canning jars (those with narrow mouths) are used for freezing, leave extra headspace to allow for expansion of foods during freezing. Expansion of the liquid could cause the jars to break at the neck.” — NCHFP, Containers for Freezing, Rigid Containers, <https://nchfp.uga.edu/how/freeze/freeze-general-information/containers-for-freezing/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Regardless of type, press to remove as much air as possible before closing.” — NCHFP, Containers for Freezing, Flexible Bags, <https://nchfp.uga.edu/how/freeze/freeze-general-information/containers-for-freezing/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie galonu to rachunek JarAtlas, zaokrąglone. Zawężenie „bez wolnej przestrzeni” (strony produktów) do woreczków i pojemników z szerokim otworem, z dodatkową wolną przestrzenią w słoikach z wąskim otworem, to zestawienie dwóch stron NCHFP przez JarAtlas (ostrożne, zawęża zalecenie).
- **Karty (31):** `asparagus-v11.md:31`, `asparagus-v11.md:33`, `asparagus-v11.md:35`, `asparagus-v11.md:37` i 157 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-256 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Thawing, Fruits: mrożone owoce podawać, gdy mają jeszcze trochę kryształków lodu (mniej papkowate); owoce w opakowaniu rozmrażać w lodówce, pod bieżącą wodą albo w mikrofalówce, jeśli tuż przed użyciem; paczka 1 funta (ok. 0,45 kg) owoców w syropie rozmraża się w lodówce 6 do 8 godzin, pod bieżącą chłodną wodą 1/2 do 1 godziny; owoce z cukrem rozmrażają się trochę szybciej niż w syropie, a obie wersje szybciej niż bez cukru; rozmrażać tylko tyle, ile potrzeba; resztki rozmrożonych owoców lepiej się trzymają, gdy się je ugotuje.
- **Źródło (szczebel 1):** „When serving frozen fruits for dessert, serve them while there are still a few ice crystals in the fruit.” — NCHFP, Thawing and Preparing Foods for Serving, Fruits, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Frozen fruit in the package can be thawed in the refrigerator, under running water, or in a microwave oven if thawed immediately before use.” — NCHFP, Thawing and Preparing Foods for Serving, Fruits, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Allow 6 to 8 hours in the refrigerator for thawing a 1 pound package of fruit packed in syrup. Allow ½ to 1 hour for thawing in running cool water. Fruit packed with dry sugar thaws slightly faster than that packed in syrup. Both sugar and syrup packs thaw faster than unsweetened packs. Thaw only as much as you need at one time. If you have leftover thawed fruit, it will keep better if you cook it.” — NCHFP, Thawing and Preparing Foods for Serving, Fruits, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie funta to rachunek JarAtlas, zaokrąglone; „½” w źródle zapisane jako 1/2.
- **Karty (9):** `blueberry-bilberry-v14.md:67`, `blueberry-bilberry-v14.md:69`, `blueberry-bilberry-v14.md:71`, `blueberry-bilberry-v14.md:73` i 31 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-258 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** NCHFP Thawing: nigdy nie rozmrażać żywności w temperaturze pokojowej ani w ciepłej wodzie, bo zewnętrzna warstwa jest wtedy w „strefie zagrożenia” 40–140°F (ok. 4–60°C), w której bakterie szybko się namnażają; rozmrażać w lodówce w 40°F (ok. 4°C) lub niżej, w zimnej bieżącej wodzie poniżej 70°F (ok. 21°C) albo w mikrofalówce, jeśli żywność od razu się gotuje lub podaje; rozmrażanie w zimnej wodzie tylko wtedy, gdy woda pozostaje zimna (poniżej 70°F) i żywność rozmrozi się w mniej niż 2 godziny, a opakowanie albo woreczek jest szczelny.
- **Źródło (szczebel 1):** „Never thaw food at room temperature or in warm water. Even though the center of a package may still be frozen as it thaws on the counter or in the warm water, the outer layer of the food is in the "Danger Zone," between 40 and 140°F. These are temperatures where bacteria multiply rapidly.” — NCHFP, Thawing and Preparing Foods for Serving, akapit 1, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Thaw food in the refrigerator at 40°F or less, in cold running water less than 70°F, or in the microwave if you'll be cooking or serving it immediately.” — NCHFP, Thawing and Preparing Foods for Serving, akapit 1, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „This should only be used if the water is kept cold (less than 70°F) and the food will thaw in under 2 hours. The food must be in a leak-proof package or plastic bag.” — NCHFP, Thawing and Preparing Foods for Serving, rozmrażanie w zimnej wodzie, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenia °F na °C to rachunek JarAtlas, zaokrąglone. Karty świadomie pomijają wariant źródła z wodą zmienianą co 30 minut (mówią mniej niż źródło).
- **Karty (31):** `asparagus-v11.md:69`, `asparagus-v11.md:71`, `asparagus-v11.md:73`, `beetroot-v17.md:57` i 89 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-259 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** FDA (Food and Water Safety During Power Outages and Floods): przy braku prądu trzymać drzwi zamrażarki zamknięte; pełna zamrażarka utrzymuje temperaturę ok. 48 godzin (24 godziny, gdy jest w połowie pełna), jeśli drzwi pozostają zamknięte; po powrocie prądu: jeśli termometr w zamrażarce pokazuje 40°F (ok. 4°C) lub mniej, żywność jest bezpieczna i można ją ponownie zamrozić; bez termometru sprawdzić każde opakowanie, nie można polegać na wyglądzie ani zapachu; jeśli żywność ma jeszcze kryształki lodu albo ma 40°F (ok. 4°C) lub mniej, można ją bezpiecznie ponownie zamrozić albo ugotować.
- **Źródło (szczebel 1):** „A full freezer will keep the temperature for approximately 48 hours (24 hours if it is half full) if the door remains closed.” — FDA, Food and Water Safety During Power Outages and Floods, When the Power Goes Out, <https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „If the freezer thermometer reads 40° F or below, the food is safe and may be refrozen. If a thermometer has not been kept in the freezer, check each package of food to determine its safety. You can’t rely on appearance or odor. If the food still contains ice crystals or is 40° F or below, it is safe to refreeze or cook.” — FDA, Food and Water Safety During Power Outages and Floods, Once Power is Restored, <https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Przeliczenie °F na °C to rachunek JarAtlas, zaokrąglone (jak SUS-059).
- **Karty (31):** `asparagus-v11.md:79`, `asparagus-v11.md:81`, `beetroot-v17.md:67`, `beetroot-v17.md:69` i 58 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-260 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Ostrożna reguła JarAtlas po awarii zamrażarki: FDA podaje tylko, kiedy mrożonka jest bezpieczna (ma kryształki lodu albo nie więcej niż 40°F, ok. 4°C); jeśli opakowanie nie ma kryształków lodu i ma powyżej 40°F (ok. 4°C) albo nie da się tego sprawdzić, karta zaleca je wyrzucić; FDA każe też wyrzucić łatwo psującą się żywność trzymaną w temperaturze pokojowej 2 godziny lub dłużej (1 godzinę, gdy na zewnątrz jest powyżej 90°F, ok. 32°C).
- **Źródło (szczebel 1):** „If the food still contains ice crystals or is 40° F or below, it is safe to refreeze or cook.” — FDA, Food and Water Safety During Power Outages and Floods, Once Power is Restored, <https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „However, if perishable food has been held at room temperature for 2 hours or more (or 1 hour if outdoor temperatures are above 90 º F) — discard it .” — FDA, Food and Water Safety During Power Outages and Floods, When the Power Goes Out, <https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Wniosek JarAtlas, nie zdanie źródła: FDA nie mówi wprost, co zrobić z mrożonką bez kryształków lodu i cieplejszą niż 40°F; karta wybiera wariant ostrożny (wyrzuć), zgodnie z D-027 (b). Przeliczenia °F na °C to rachunek JarAtlas.
- **Karty (31):** `asparagus-v11.md:83`, `asparagus-v11.md:85`, `beetroot-v17.md:71`, `beetroot-v17.md:73` i 58 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SUS-050 · szczebel 1

- **Twierdzenie:** Zamraża się w 0°F (-18°C) lub niżej.
- **Źródło (szczebel 1):** „Freeze foods at 0°F or lower.” — NCHFP, Freezing Pointers; Freezing Pointers, <https://nchfp.uga.edu/how/freeze/freeze-general-information/freezing-pointers/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** przeliczenie °F na °C zaokrąglone przez badacza
- **Karty (32):** `asparagus-v11.md:3`, `asparagus-v11.md:49`, `beetroot-v17.md:3`, `beetroot-v17.md:43` i 59 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SUS-059 · szczebel 1

- **Twierdzenie:** Żywność zamrożona jest bezpieczna, dopóki pozostaje zamrożona; po rozmrożeniu powyżej 40°F (ok. 4°C) bakterie obecne przed zamrożeniem mogą się namnażać.
- **Źródło (szczebel 1):** „as soon as food begins to defrost and become warmer than 40°F, any bacteria that may have been present before freezing can begin to multiply.” — NCHFP, Thawing and Preparing Foods; akapit 1, <https://nchfp.uga.edu/how/freeze/freeze-general-information/thawing-and-preparing-foods-for-serving/>, odczyt 2026-11-01, curl+grep
- **Uproszczenie / wniosek JarAtlas:** przeliczenie °F na °C zaokrąglone przez badacza
- **Karty (32):** `asparagus-v11.md:77`, `beetroot-v17.md:65`, `bell-pepper-v19.md:87`, `blueberry-bilberry-v14.md:83` i 28 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### G6. Pozostałe: zakres przepisu, surowiec, ilości, miary (17)

**Grupa G6 zbiorczo:** ☐ zatwierdzam wszystkie punkty grupy poza oznaczonymi niżej · ☐ nie zatwierdzam zbiorczo

#### ACI-186 · szczebel 1

- **Twierdzenie:** NCHFP śliwki: oberwać szypułki i umyć; całe śliwki nakłuć widelcem z dwóch stron, żeby nie pękały; odmiany z łatwo odchodzącą pestką można przekroić na pół i wydrylować; wekuje się je w wodzie albo w syropie bardzo lekkim, lekkim lub średnim.
- **Źródło (szczebel 1):** „Procedure: Stem and wash plums. To can whole, prick skins on two sides of plums with fork to prevent splitting. Freestone varieties may be halved and pitted. If you use syrup, prepare very light, light, or medium syrup.” — Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Plums may be packed in water or syrup .” — Quality, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/plums-halved-or-whole/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `plum-v13.md:7`, `plum-v13.md:11`, `plum-v13.md:13`, `plum-v13.md:15`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-218 · szczebel 1

- **Twierdzenie:** NCHFP morele: wybierać jędrne, dobrze wybarwione, dojrzałe owoce jakości do jedzenia na surowo; skórkę można zdjąć (opcjonalnie): umyte owoce zanurzyć we wrzącej wodzie na 30–60 sekund, aż skórka zacznie odchodzić, szybko zanurzyć w zimnej wodzie i zdjąć skórkę; jeśli skórki się nie zdejmuje, owoce dobrze umyć; przekroić na pół, usunąć pestki, opcjonalnie pokroić w plastry; obrane owoce trzymać w roztworze kwasu askorbinowego, żeby nie ciemniały.
- **Źródło (szczebel 1):** „Select firm, well-colored mature fruit of ideal quality for eating fresh.” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Quality, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Wash fruit well if skins are not removed. (Optional procedure for removal of skins - Dip washed fruit in boiling water for 30 to 60 seconds until skins loosen. Dip quickly in cold water and slip off skins.)” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Cut prepared apricots in half, remove pits and slice if desired. To prevent darkening, keep peeled fruit in ascorbic acid solution .” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (2):** `apricot-v06.md:29`, `apricot-v08.md:7`, `apricot-v08.md:11`, `apricot-v08.md:13` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-219 · szczebel 1

- **Twierdzenie:** NCHFP morele: przygotować i zagotować syrop bardzo lekki, lekki albo średni albo pakować morele w wodzie, soku jabłkowym lub soku z białych winogron; pakowanie na surowo daje morele słabej jakości.
- **Źródło (szczebel 1):** „Prepare and boil a very light, light, or medium syrup or pack apricots in water, apple juice, or white grape juice. Raw packs make poor quality apricots.” — NCHFP (nchfp.uga.edu): Apricots-Halved or Sliced, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/apricots-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `apricot-v08.md:21`, `apricot-v08.md:37`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-228 · szczebel 1

- **Twierdzenie:** NCHFP Standard Tomato Sauce: pomidory przygotować i przetrzeć jak sok pomidorowy; gotować w szerokim garnku do pożądanej gęstości: odparować o ok. 1/3 objętości (sos rzadki) albo o 1/2 (sos gęsty).
- **Źródło (szczebel 1):** „Prepare and press as for making tomato juice .” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Simmer in large-diameter saucepan until sauce reaches desired consistency Boil until volume is reduced by about one-third for thin sauce, or by one-half for thick sauce.” — NCHFP (nchfp.uga.edu): Standard Tomato Sauce, Procedure, <https://nchfp.uga.edu/how/can/how-do-i-can-tomatoes/standard-tomato-sauce/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `tomato-v08.md:3`, `tomato-v08.md:21`, `tomato-v08.md:25`, `tomato-v08.md:27`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-237 · szczebel 1

- **Twierdzenie:** NCHFP Cherries-Whole: czereśnie i wiśnie można wekować w wodzie, soku jabłkowym, soku z białych winogron albo w syropie.
- **Źródło (szczebel 1):** „Cherries may be canned in water, apple juice, white-grape juice, or syrup .” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (3):** `sour-cherry-v09.md:3`, `sour-cherry-v09.md:17`, `sour-cherry-v09.md:19`, `sweet-cherry-v07.md:3` i 3 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-244 · szczebel 1

- **Twierdzenie:** NCHFP Berries-Whole: instrukcje stosować tylko do owoców z listy (jeżyny, borówki, porzeczki, dewberry, agrest, huckleberry, loganberry, morwy, maliny).
- **Źródło (szczebel 1):** „Use these directions only with the berries listed.” — NCHFP (nchfp.uga.edu): Berries-Whole, wstęp, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Blackberries, blueberries, currants, dewberries, gooseberries, huckleberries, loganberries, mulberries, raspberries.” — NCHFP (nchfp.uga.edu): Berries-Whole, wstęp, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `currant-v13.md:3`, `currant-v13.md:7`, `gooseberry-v09.md:3`, `gooseberry-v09.md:7` i 4 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### ACI-248 · szczebel 1

- **Twierdzenie:** NCHFP Berries-Whole: hot pack tylko dla borówek, porzeczek, agrestu i huckleberry; raw pack dla każdego owocu z listy (więc jeżyny i maliny tylko na surowo).
- **Źródło (szczebel 1):** „Hot pack – For blueberries, currants, gooseberries, and huckleberries.” — NCHFP (nchfp.uga.edu): Berries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Raw pack – Fill jars with any of the raw berries, shaking down gently while filling.” — NCHFP (nchfp.uga.edu): Berries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berries-whole/>, odczyt 2026-11-02, curl+grep
- **Karty (4):** `currant-v13.md:25`, `gooseberry-v09.md:27`, `gooseberry-v11.md:27`, `raspberry-blackberry-v14.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-043 · szczebel 1

- **Twierdzenie:** Lime curd robi się według tego samego przepisu z butelkowanym sokiem z limonki; inne kurdy cytrusowe i owocowe nie są obecnie zalecane do wekowania.
- **Źródło (szczebel 1):** „Variation: For Lime Curd, use the same recipe but substitute 1 cup bottled lime juice and ¼ cup fresh lime zest for the lemon juice and zest.” — Lemon Curd, Canned, Variation, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Other citrus or fruit curds are not recommended for canning at this time.” — jw., <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/lemon-curd-canned/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `lemon-v10.md:15`, `lime-bergamot-v06.md:3`, `lime-bergamot-v06.md:7`, `lime-bergamot-v06.md:11` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-049 · szczebel 1

- **Twierdzenie:** Przepis NCHFP na syrop owocowy (Berry Syrup) dotyczy tylko soków z borówek amerykańskich, wiśni/czereśni, winogron, malin (czarnych lub czerwonych) i truskawek.
- **Źródło (szczebel 1):** „Juices from fresh or frozen blueberries, cherries, grapes, raspberries (black or red), and strawberries can be made into toppings for use on ice cream and pastries.” — Berry Syrup, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „Use these directions only with the berries listed.” — jw., <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/berry-syrup/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `raspberry-blackberry-v06.md:3`, `raspberry-blackberry-v06.md:7`, `raspberry-blackberry-v06.md:9`, `sour-cherry-v10.md:3` i 2 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-054 · szczebel 1

- **Twierdzenie:** Przepis NCHFP na przeciery owocowe nie dotyczy bananów, daktyli, fig, gruszek azjatyckich, pomidorów, melonów, papai, persymon, dojrzałego mango ani kokosa; dla przecierów z tych owoców nie ma zaleceń domowego wekowania.
- **Źródło (szczebel 1):** „There are no home canning recommendations available for purees of these products.” — Fruit Purees, Caution, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-01, curl+grep
- **Źródło (szczebel 1):** „These recommendations should not be used with bananas, dates, figs, Asian pears, tomatoes, cantaloupe and other melons, papaya, persimmons, ripe mango or coconut.” — jw., <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/fruit-purees/>, odczyt 2026-11-01, curl+grep
- **Karty (2):** `raspberry-blackberry-v12.md:7`, `raspberry-blackberry-v12.md:9`, `strawberry-v14.md:7`, `strawberry-v14.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-128 · szczebel 1

- **Twierdzenie:** NCHFP brzoskwinie: wybierać dojrzałe brzoskwinie o żółtym miąższu; zanurzyć we wrzącej wodzie na 30–60 sekund, aż skórka zacznie odchodzić, szybko zanurzyć w zimnej wodzie i zdjąć skórkę; przekroić na pół, usunąć pestki, opcjonalnie pokroić w plastry; obrane owoce trzymać w roztworze kwasu askorbinowego, żeby nie ciemniały.
- **Źródło (szczebel 1):** „Choose ripe, mature yellow-flesh peaches of ideal quality for eating fresh or cooking.” — Peaches-Halved or Sliced, Quality i Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Dip fruit in boiling water for 30 to 60 seconds until skins loosen. Dip quickly in cold water and slip off skins.” — Peaches-Halved or Sliced, Quality i Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Źródło (szczebel 1):** „Cut in half, remove pits and slice if desired. To prevent darkening, keep peeled fruit in ascorbic acid solution .” — Peaches-Halved or Sliced, Quality i Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `peach-nectarine-v06.md:3`, `peach-nectarine-v06.md:17`, `peach-nectarine-v06.md:19`, `peach-nectarine-v06.md:21` i 1 innych miejsc
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-146 · szczebel 1

- **Twierdzenie:** NCHFP (dżemy bez dodanej pektyny): do owoców jagodowych („berries”) zalicza jeżyny, boysenberry, dewberry, agrest, loganberry, maliny i truskawki.
- **Źródło (szczebel 1):** „* Includes blackberries, boysenberries, dewberries, gooseberries, loganberries, raspberries, and strawberries.” — NCHFP (nchfp.uga.edu): Making Jam without added Pectin, Table 1, przypis, <https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/making-jam-without-added-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:3`, `raspberry-blackberry-v08.md:11`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-149 · szczebel 1

- **Twierdzenie:** NCHFP Berry Jams without Pectin, dżem bez pestek: rozgniecione owoce podgrzać do zmięknięcia i przetrzeć przez sito lub przecierak; potem dodać cukier i postępować jak w przepisie.
- **Źródło (szczebel 1):** „NOTE : If seedless jam is preferred, crushed berries may be heated until soft and pressed through a sieve or food mill; then add sugar and proceed as above.” — NCHFP (nchfp.uga.edu): Berry Jams without Pectin, NOTE, <https://nchfp.uga.edu/how/make-jam-jelly/jams/berry-jams-without-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `raspberry-blackberry-v08.md:3`, `raspberry-blackberry-v08.md:9`, `raspberry-blackberry-v08.md:29`, `raspberry-blackberry-v08.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-174 · szczebel 1

- **Twierdzenie:** NCHFP Grape Jelly Powdered Pectin: żeby w galaretce nie tworzyły się kryształy winianu, sok odstawić na noc w chłodne miejsce, a potem przecedzić przez dwie warstwy wilgotnej gazy, żeby usunąć powstałe kryształy.
- **Źródło (szczebel 1):** „To prevent formation of tartrate crystals in the jelly, let juice stand in a cool place overnight, then strain through two thicknesses of damp cheesecloth to remove crystals that have formed.” — NCHFP (nchfp.uga.edu): Grape Jelly Powdered Pectin, Procedure, <https://nchfp.uga.edu/how/make-jam-jelly/jellies/grape-jelly-powdered-pectin/>, odczyt 2026-11-02, curl+grep
- **Karty (1):** `grapes-v06.md:33`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-201 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Reguła JarAtlas (ostrożna): przepis NCHFP Cherries-Whole wymienia jako płyn tylko wodę, sok jabłkowy, sok z białych winogron albo syrop i nie wspomina o wanilii ani innych dodatkach; JarAtlas nie ma przetestowanego źródła dla dodawania wanilii, więc karta opisuje przepis bez niej.
- **Źródło (szczebel 1):** „Cherries may be canned in water, apple juice, white-grape juice, or syrup .” — NCHFP (nchfp.uga.edu): Cherries-Whole, Procedure, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/cherries-whole/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Reguła ostrożna z braku źródła (D-027 b): pominięcie dodatku spoza przepisu.
- **Karty (1):** `sweet-cherry-v07.md:7`, `sweet-cherry-v07.md:9`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SLO-218 · szczebel 1 · reguła JarAtlas (część 2)

- **Twierdzenie:** Reguła JarAtlas (ostrożna): przepis NCHFP Pears-Halved wymienia jako płyn tylko syrop (bardzo lekki, lekki, średni), sok jabłkowy, sok z białych winogron albo wodę i nie wspomina o wanilii ani innych dodatkach; JarAtlas nie ma przetestowanego źródła dla dodawania wanilii, więc karta opisuje przepis bez niej.
- **Źródło (szczebel 1):** „Prepare a very light, light, or medium syrup or pack pears in apple juice, white grape juice, or water.” — NCHFP (nchfp.uga.edu): Pears-Halved, Quantity/Quality/Procedure, Table 1, <https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/pears-halved/>, odczyt 2026-11-02, curl+grep
- **Uproszczenie / wniosek JarAtlas:** Reguła ostrożna z braku źródła (D-027 b): pominięcie dodatku spoza przepisu, jak SLO-201.
- **Karty (1):** `pear-v07.md:23`, `pear-v07.md:25`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

#### SZY-022 · szczebel 1

- **Twierdzenie:** W przepisie na mieszankę warzyw (Mixed Vegetables) wolno zmieniać proporcje i zamieniać warzywa z wyjątkiem warzyw liściastych, suchej fasoli, kukurydzy kremowej, dyni zimowej, batatów, brokułu, kalafiora i kapusty.
- **Źródło (szczebel 1):** „substitute other favorite vegetables except leafy greens, dried beans, cream-style corn, winter squash, sweet potatoes, broccoli, cauliflower or cabbage.” — treść strony, <https://nchfp.uga.edu/how/can/canning-vegetables-and-vegetable-products/mixed-vegetables/>, odczyt 2026-11-01, curl+grep
- **Karty (1):** `white-cabbage-v13.md:18`
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

## Część 2. Reguły JarAtlas: ostrożniejsze od źródła albo bez źródła

Tu ocenia się samą regułę (czy kierunek jest bezpieczny i czy nie brakuje warunku), nie cytat. Cytaty i pełne brzmienie są w części 1 pod tym samym ID.

### 2a. Reguły zapisane w rejestrze

| ID | Reguła (skrót) | Decyzja | Karty | Odpowiedź |
|---|---|---|---|---|
| ACI-175 | Ostrożna reguła JarAtlas dla słoików metrycznych (NCHFP nie podaje czasów dla słoików metrycznych): słoik do 473 ml — czas dla pint; słoik większy niż pinta, do 946 ml, np. 0,5 l albo 0,9 l — czas dla quart (czas dla quart obowiązuje już od słoików 1 1/2 pi… | `2026-11-02-jaratlas-06-karty-p2` | apple-v09, apple-v10, apple-v13 (+25) | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-176 | 1 stopa = 0,3048 m dokładnie, więc 1000 stóp = 304,8 m, 3000 stóp = 914,4 m, 6000 stóp = 1828,8 m. Karty podają te granice w metrach zaokrąglone w dół, w stronę dłuższego czasu: 1000 stóp jako 300 m, 3000 stóp jako 900 m, 6000 stóp jako 1800 m. | `2026-11-02-jaratlas-06-karty-p2` | apple-v09, apple-v10, apple-v13 (+50) | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-179 | Ostrożna reguła JarAtlas: gdy tabela przepisu NCHFP podaje czasy tylko dla słoików do pinty, słoik większy niż pinta (473 ml), np. 0,5 l, nie ma przetestowanego czasu, więc JarAtlas zaleca słoik do 473 ml (np. 0,2 l albo 0,25 l lub słoik 1/2 pinty). | `2026-11-02-jaratlas-06-karty-p2` | apricot-v06, bell-pepper-v01, bell-pepper-v09 (+15) | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-193 | Ostrożna reguła JarAtlas dla zakwaszania pomidorów w słoikach metrycznych: do słoika większego niż pinta, do 946 ml (np. 0,5 l albo 0,9 l), dodać kwas jak na quart: 2 łyżki butelkowanego soku z cytryny albo 1/2 łyżeczki kwasu cytrynowego. | `2026-11-02-jaratlas-06-karty-p2` | tomato-v08, tomato-v09, tomato-v10 | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-211 | Ostrożna reguła JarAtlas dla przepisów NCHFP z octem 5%: używać białego octu destylowanego (spirytusowego) albo jabłkowego z etykietą 5% albo 6%; octu 10% nie używać i nie rozcieńczać go wodą, żeby uzyskać 5%; wody dodawać tylko tyle, ile podaje przepis. | `2026-11-02-jaratlas-06-karty-p4` | apple-v10, beetroot-v06, bell-pepper-v01 (+5) | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-247 | NCHFP Berries-Whole: myć po 1–2 quart (ok. 0,95–1,9 l) owoców naraz, odsączyć, w razie potrzeby usunąć szypułki i działki (cap, stem); agrestowi obciąć nożyczkami ogonki i resztki kwiatów (heads and tails); do każdego czystego słoika wlać 1/2 szklanki syrop… | — | currant-v13, gooseberry-v09, gooseberry-v11 (+1) | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-254 | NCHFP Bread-and-Butter Zucchini: plastry cukinii i cebuli zalać wodą na 1 cal (ok. 2,5 cm) z solą, odstawić na 2 godziny i dokładnie odsączyć. | — | zucchini-v05 | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-260 | Uncja płynu USA (fl oz) to 29,573 53 ml, więc 46 uncji płynu to ok. 1360 ml (ok. 1,36 l). Ostrożne odczytanie JarAtlas: „46 oz” soku w przepisie NCHFP karta liczy jako uncje płynu (ok. 1,36 l); to większa z dwóch możliwych ilości soku (46 uncji wagi to ok. … | `2026-11-02-jaratlas-06-karty-p7` | zucchini-v08 | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-265 | Ostrożna reguła JarAtlas dla przepisów NCHFP zakwaszanych octem, sokiem z cytryny albo kwasem cytrynowym: nie zmieniaj ilości składników kwaśnych (ocet, sok z cytryny, sok owocowy, kwas cytrynowy) ani warzyw, owoców i naparów (np. naparu miętowego); nie dod… | `2026-11-02-jaratlas-06-karty-p7` | bell-pepper-v09, chili-pepper-v13, garden-herbs-v12 (+3) | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-283 | Ostrożna reguła JarAtlas dla galaretki z kolb (NCHFP Corncob Jelly): NCHFP potwierdza kwaśność galaretki tylko w przetestowanej postaci (kolby czerwonej kukurydzy pastewnej, pektyna w proszku użyta w teście: SURE-JELL Premium Fruit Pectin, opakowanie 1 3/4 … | `2026-11-02-jaratlas-06-karty-p7` | corn-v09 | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-294 | Ostrożna reguła JarAtlas: gdy tabela przepisu NCHFP podaje czasy tylko dla słoików 1/2 pinty, słoik 1/2 pinty to połowa pinty, ok. 236,6 ml (473,18 ml / 2); słoik większy, np. 0,25 l albo 0,5 l, nie ma przetestowanego czasu, więc JarAtlas zaleca słoik do 23… | `2026-11-02-jaratlas-06-karty-p7` | chili-pepper-v13, tomato-v11 | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-308 | Ostrożne ostrzeżenie JarAtlas dla dżemu morelowego NCHFP: pH moreli według listy FDA wynosi 3,30–4,80, więc górna granica jest powyżej 4,6 (ACI-135, ACI-001), a przepis jest przetestowany z sokiem z cytryny i pełną ilością cukru; soku z cytryny nie pomijać … | `2026-11-02-jaratlas-06-karty-p8` | apricot-v06 | ☐ Z · ☐ P: ____ · ☐ O |
| ACI-314 | Ostrożna reguła JarAtlas: gdy przepis NCHFP na dżem albo galaretkę podaje „lemon juice” bez dookreślenia, JarAtlas zaleca butelkowany sok z cytryny w podanej ilości, bo NCHFP zaznacza (przy lemon curd), że kwasowość świeżego soku z cytryny bywa różna, a do … | `2026-11-02-jaratlas-06-karty-p8` | apricot-v06, garden-herbs-v12 | ☐ Z · ☐ P: ____ · ☐ O |
| E3-002 | Ostrożne ostrzeżenie JarAtlas dla moreli w słoikach: według listy FDA pH moreli wynosi 3,30–4,80, więc górna granica jest powyżej 4,6; NCHFP podaje przetestowany proces kąpieli wodnej bez dodatku kwasu (bez soku z cytryny i kwasu cytrynowego; roztwór kwasu … | `2026-11-02-jaratlas-06-katalog-p4` | apricot-v08 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-119 | Ostrożna reguła JarAtlas dla sterylizacji słoików w metrach: 10 minut do 300 m, a wyżej 1 minuta więcej za każde kolejne rozpoczęte 300 m. | `2026-11-02-jaratlas-06-karty-p2` | apple-v10, apple-v16, apricot-v06 (+11) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-144 | Ostrożna reguła JarAtlas: do dżemu brzoskwiniowego NCHFP używać brzoskwiń o żółtym miąższu, bo NCHFP nie ma przetestowanego procesu wekowania brzoskwiń o białym miąższu (część odmian ma pH powyżej 4,6), a strona przepisu na dżem nie mówi, czy jego badanie o… | `2026-11-02-jaratlas-06-karty-p4` | peach-nectarine-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-156 | Ostrożna reguła JarAtlas dla dżemu bez pestek według NCHFP Berry Jams without Pectin: 9 szklanek rozgniecionych owoców odmierzać przed podgrzaniem i przetarciem (kolejność z przepisu: rozgniecione owoce → podgrzanie i przetarcie → cukier); odmierzenie 9 szk… | — | raspberry-blackberry-v08 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-201 | Reguła JarAtlas (ostrożna): przepis NCHFP Cherries-Whole wymienia jako płyn tylko wodę, sok jabłkowy, sok z białych winogron albo syrop i nie wspomina o wanilii ani innych dodatkach; JarAtlas nie ma przetestowanego źródła dla dodawania wanilii, więc karta o… | — | sweet-cherry-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-206 | Reguła JarAtlas (ostrożna): NCHFP Grape Juice (sok z rozgniecionych i gotowanych winogron) podaje dla słoików pint i quart jeden czas: 5 minut na 0–1000 stóp, 10 na 1001–6000, 15 powyżej; UC dla soku z sokownika daje słoikom quart dłuższe czasy (10, 15, 25 … | — | grapes-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-208 | Reguła JarAtlas (ostrożna) dla słoików metrycznych w przepisach UC na soki z sokownika: słoik do 473 ml — czas dla pint; większy, do 946 ml (np. 0,5 l albo 0,9 l) — czas dla quart; słoików większych niż quart karty nie opisują (UC dopuszcza słoiki 1/2 galon… | — | currant-v10, grapes-v07, raspberry-blackberry-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-215 | NCHFP Apples-Sliced: średnio 12 1/4 funta (ok. 5,6 kg) jabłek na wsad 9 słoików pint i 19 funtów (ok. 8,6 kg) na 7 słoików quart; wybierać jabłka soczyste, chrupkie, najlepiej słodko-kwaśne; umyć, obrać, usunąć gniazda nasienne, kroić do wody z kwasem askor… | — | apple-v13 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-216 | NCHFP Apple Juice: dobry sok z mieszanki odmian, najlepiej świeży sok z lokalnej tłoczni w ciągu 24 godzin od tłoczenia; sok schłodzić 24–48 godzin, bez mieszania zlać klarowny płyn, osad wyrzucić, klarowny płyn przecedzić przez papierowy filtr do kawy albo… | — | apple-v16 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-217 | NCHFP Pears-Halved: średnio 11 funtów (ok. 5 kg) gruszek na wsad 9 słoików pint i 17 1/2 funta (ok. 7,9 kg) na 7 słoików quart; wybierać dojrzałe owoce jakości do jedzenia na surowo lub gotowania; umyć, obrać, przekroić wzdłuż na połówki, usunąć gniazdo (np… | — | pear-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-218 | Reguła JarAtlas (ostrożna): przepis NCHFP Pears-Halved wymienia jako płyn tylko syrop (bardzo lekki, lekki, średni), sok jabłkowy, sok z białych winogron albo wodę i nie wspomina o wanilii ani innych dodatkach; JarAtlas nie ma przetestowanego źródła dla dod… | — | pear-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-219 | NCHFP Rhubarb-Stewed: średnio 7 funtów (ok. 3,2 kg) rabarbaru na wsad 9 słoików pint i 10 1/2 funta (ok. 4,8 kg) na 7 słoików quart; wybierać młode, delikatne, dobrze wybarwione łodygi z wiosennego albo późnojesiennego zbioru; obciąć liście, umyć łodygi, po… | — | rhubarb-v05 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-220 | NCHFP Grapefruit and Orange Sections: średnio 13 funtów (ok. 5,9 kg) owoców na wsad 9 słoików pint i 15 funtów (ok. 6,8 kg) na 7 słoików quart; wybierać jędrne, dojrzałe, słodkie owoce jakości do jedzenia na surowo; grejpfruta można wekować bez pomarańczy; … | — | grapefruit-v04 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-222 | NCHFP Headspace to Allow (mrożenie), soki: w pojemnikach z szerokim otworem 1/2 cala (ok. 1,3 cm) dla pinty (ok. 0,47 l) i 1 cal (ok. 2,5 cm) dla quarta (ok. 0,95 l); w pojemnikach z wąskim otworem 1 1/2 cala (ok. 3,8 cm) dla obu pojemności. | — | currant-v10, grapes-v07, raspberry-blackberry-v07 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-223 | NCHFP Recommended Jars and Lids: najlepszym wyborem są słoiki do domowego wekowania typu Mason (zwykłe i z szerokim otworem, gwintowane) z samouszczelniającymi pokrywkami; inne słoiki handlowe (po produktach ze sklepu), których otworu nie da się zamknąć dwu… | — | apple-v10, apple-v13, apple-v16 (+24) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-224 | NCHFP Apple Butter: 8 funtów (ok. 3,6 kg) jabłek, 2 szklanki apple cider (nazwa z przepisu; osobny składnik, nie ocet), 2 szklanki octu, 2 1/4 szklanki białego cukru, 2 1/4 szklanki ubitego brązowego cukru, 2 łyżki mielonego cynamonu, 1 łyżka mielonych goźd… | — | apple-v10 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-226 | NCHFP Apple Butter: nalewać na gorąco do sterylnych słoików 1/2 pinty lub pint, zostawiając 1/4 cala (ok. 0,6 cm) wolnej przestrzeni; słoików quart nie trzeba wcześniej sterylizować; tabela 1 (kąpiel wodna, hot): 1/2 pinty lub pint: 0–1000 stóp 5 min, 1001–… | — | apple-v10 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-227 | Ostrożna reguła JarAtlas: otwarty słoik masła jabłkowego NCHFP (pełnocukrowego) trzymać w lodówce. NCHFP mówi to wprost dla wekowanego masła jabłkowego o obniżonej zawartości cukru („Once opened, jars that were processed should then be stored in the refrige… | — | apple-v10 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-228 | NCHFP Quince Jelly without Pectin: 3 3/4 szklanki soku z pigwy (ok. 3 1/2 funta, ok. 1,6 kg, pigwy i 7 szklanek wody), 1/4 szklanki soku z cytryny, 3 szklanki cukru; wychodzi ok. 4 słoików 1/2 pinty; słoiki wysterylizować, dwuczęściowe pokrywki przygotować … | — | quince-v08 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-229 | NCHFP Quince Jelly without Pectin, galaretka: odmierzony sok przelać do garnka, dodać sok z cytryny i cukier, dobrze wymieszać; gotować na dużym ogniu do temperatury o 8 °F (ok. 4,4 °C) wyższej od temperatury wrzenia wody albo aż masa spływa z łyżki płatem … | — | quince-v08 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-232 | NCHFP Cranberries, hot pack: przygotować syrop ciężki; żurawinę umyć i usunąć szypułki; ostrożnie, ale szybko wrzucić do wrzącego syropu i gotować 3 minuty; owoce nałożyć do gorących słoików, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni, zalać wrząc… | — | cranberry-lingonberry-v09 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-233 | NCHFP Cranberry Sauce, hot pack: 4 szklanki żurawiny, 1 szklanka wody, 2 szklanki cukru, ok. 4 słoików 1/2 pinty; żurawinę umyć, gotować w wodzie do miękkości, przetrzeć przez drobne sito, dodać cukier i gotować 3 minuty; wrzący sos nalać do gorących słoikó… | — | cranberry-lingonberry-v10 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-234 | NCHFP Citrus Marmalade: przy obieraniu zostawić trochę białej błony pod skórką (tam jest większość pektyny); składniki: 3/4 szklanki skórki grejpfruta, 3/4 szklanki skórki pomarańczy (1 pomarańcza), 1/3 szklanki skórki cytryny (1 cytryna), 1 quart (ok. 0,95… | — | grapefruit-v02 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-235 | NCHFP Citrus Marmalade, procedura: słoiki wysterylizować, dwuczęściowe pokrywki przygotować według producenta; owoce umyć i obrać; skórkę pokroić w cienkie paski do garnka, zalać zimną wodą i gotować pod przykryciem do miękkości (ok. 30 minut), odcedzić; z … | — | grapefruit-v02 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-236 | NCHFP Lemon Curd, Canned, składniki: 2 1/2 szklanki drobnego cukru (superfine; jeśli go brak, zwykły cukier zmielić 1 minutę w młynku lub malakserze, odstawić, użyć; nie używać cukru pudru), 1/2 szklanki świeżo startej skórki cytryny (opcjonalnie), 1 szklan… | — | lemon-v10, lime-bergamot-v06 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-237 | NCHFP Lemon Curd, Canned, kroki 1–2: umyć 4 słoiki 1/2 pinty w ciepłej wodzie z detergentem, dobrze wypłukać, trzymać gorące do napełnienia, pokrywki przygotować według producenta; garnek do wekowania napełnić wodą tak, żeby przykryła napełnione słoiki o 1–… | — | lemon-v10, lime-bergamot-v06 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-238 | NCHFP Lemon Curd, Canned, kroki 3–7: cukier ze skórką wymieszać i odstawić ok. 30 minut; odmierzyć sok, przygotować masło; wodę w dolnym garnku podgrzać do łagodnego wrzenia (nie burzliwego), woda nie może dotykać dna górnego naczynia; w górnym naczyniu ubi… | — | lemon-v10, lime-bergamot-v06 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-239 | NCHFP Lemon Curd, Canned, kroki 8–9: gorący przecedzony krem nalać do czystych, gorących słoików 1/2 pinty, zostawiając 1/2 cala (ok. 1,3 cm) wolnej przestrzeni; usunąć pęcherzyki, poprawić wolną przestrzeń, przetrzeć brzegi zwilżonym czystym ręcznikiem pap… | — | lemon-v10, lime-bergamot-v06 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-241 | Ostrożna reguła JarAtlas dla lemon/lime curd: tabela 1 NCHFP podaje czas tylko dla słoików 1/2 pinty (1 szklanka amerykańska, cup, ok. 236,6 ml, połowa pinty 473 ml; granica zaokrąglona w dół do 236 ml); słoik większy, np. 0,25 l albo 0,3 l, nie ma przetest… | — | lemon-v10, lime-bergamot-v06 | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-249 | NCHFP Headspace to Allow (mrożenie): pakowanie z płynem (owoce w soku, cukrze, syropie albo wodzie; owoce zgniecione lub przetarte): w pojemniku z szerokim otworem 1/2 cala (ok. 1,3 cm) dla pinty (ok. 0,47 l) i 1 cal (ok. 2,5 cm) dla quarta (ok. 0,95 l), w … | — | blueberry-bilberry-v14, cranberry-lingonberry-v14, currant-v15 (+6) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-251 | NCHFP Containers for Freezing: opakowanie ma być odporne na parę wodną i wilgoć, trwałe i szczelne, nie kruszyć się w niskiej temperaturze; owoców i warzyw nie mrozić w pojemnikach większych niż 1/2 galonu (ok. 1,9 l), bo zamarzają za wolno; zwykłe słoiki s… | — | asparagus-v11, beetroot-v17, bell-pepper-v19 (+28) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-256 | NCHFP Thawing, Fruits: mrożone owoce podawać, gdy mają jeszcze trochę kryształków lodu (mniej papkowate); owoce w opakowaniu rozmrażać w lodówce, pod bieżącą wodą albo w mikrofalówce, jeśli tuż przed użyciem; paczka 1 funta (ok. 0,45 kg) owoców w syropie ro… | — | blueberry-bilberry-v14, cranberry-lingonberry-v14, currant-v15 (+6) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-258 | NCHFP Thawing: nigdy nie rozmrażać żywności w temperaturze pokojowej ani w ciepłej wodzie, bo zewnętrzna warstwa jest wtedy w „strefie zagrożenia” 40–140°F (ok. 4–60°C), w której bakterie szybko się namnażają; rozmrażać w lodówce w 40°F (ok. 4°C) lub niżej,… | — | asparagus-v11, beetroot-v17, bell-pepper-v19 (+28) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-259 | FDA (Food and Water Safety During Power Outages and Floods): przy braku prądu trzymać drzwi zamrażarki zamknięte; pełna zamrażarka utrzymuje temperaturę ok. 48 godzin (24 godziny, gdy jest w połowie pełna), jeśli drzwi pozostają zamknięte; po powrocie prądu… | — | asparagus-v11, beetroot-v17, bell-pepper-v19 (+28) | ☐ Z · ☐ P: ____ · ☐ O |
| SLO-260 | Ostrożna reguła JarAtlas po awarii zamrażarki: FDA podaje tylko, kiedy mrożonka jest bezpieczna (ma kryształki lodu albo nie więcej niż 40°F, ok. 4°C); jeśli opakowanie nie ma kryształków lodu i ma powyżej 40°F (ok. 4°C) albo nie da się tego sprawdzić, kart… | — | asparagus-v11, beetroot-v17, bell-pepper-v19 (+28) | ☐ Z · ☐ P: ____ · ☐ O |

Z = zatwierdzam, P = poprawka, O = odrzucam.

### 2b. Reguły zapisane tylko w decyzjach

| # | Decyzja | Reguła | Karty | Odpowiedź |
|---|---|---|---|---|
| R-01 | `2026-11-01-jaratlas-06-karty-p1 (4)` | Pominięte zdanie OSU „różowa kapusta jest bezpieczna, jeśli nie jest śliska” (FER-055) — karta go nie podaje. | white-cabbage-v01 | ☐ Z · ☐ P: ____ · ☐ O |
| R-02 | `2026-11-02-jaratlas-06-karty-p3 (2)` | Papryka marynowana: słoiki sterylizowane zawsze, także gdy na danej wysokości czas wynosi 10 min lub więcej; tylko słoiki do 473 ml. | bell-pepper-v01 | ☐ Z · ☐ P: ____ · ☐ O |
| R-03 | `2026-11-02-jaratlas-06-karty-p6 (2)` | Agrest tylko na surowo (raw pack), choć NCHFP dopuszcza też na gorąco; czas raw pack ≥ hot pack. | gooseberry-v09 | ☐ Z · ☐ P: ____ · ☐ O |
| R-04 | `2026-11-02-jaratlas-06-karty-p6 (3)` | Pikle z cukinii: bez opcji pasteryzacji niskotemperaturowej, tylko czasy kąpieli wodnej z Table 1. | zucchini-v05 | ☐ Z · ☐ P: ____ · ☐ O |
| R-05 | `2026-11-02-jaratlas-06-karty-p7 (2)` | Galaretki: tylko opcja NCHFP bez sterylizacji słoików z dłuższym czasem 10/15/20 min (zamiast 5/10/15 ze sterylizacją). | corn-v09, chili-pepper-v13 | ☐ Z · ☐ P: ____ · ☐ O |
| R-06 | `2026-11-02-jaratlas-06-karty-p10 (6), (7)` | Oznaki zepsucia słoika: NCHFP mówi „nie próbuj”, karta dodaje „wyrzuć taki słoik”. Słoik niezamknięty po 12–24 h: lodówka i „kilka dni” (krótszy niż „tydzień” ze strony Storing). | karty kąpieli wodnej p10+ | ☐ Z · ☐ P: ____ · ☐ O |
| R-07 | `2026-11-02-jaratlas-06-karty-p13 (1)` | Karta tylko dla słoików z pokrywkami dwuczęściowymi (płaska pokrywka + pierścień), nie dla twist-off ani szklanych pokrywek. | 27 kart kąpieli wodnej | ☐ Z · ☐ P: ____ · ☐ O |
| R-08 | `2026-11-02-jaratlas-06-karty-p13 (2)` | Masło jabłkowe: słoik metryczny do 473 ml sterylizować (quart w źródle bez sterylizacji). | apple-v10 | ☐ Z · ☐ P: ____ · ☐ O |
| R-09 | `2026-11-02-jaratlas-06-karty-p14 (6)` | Rozmrażanie w zimnej wodzie tylko w szczelnym opakowaniu, poniżej 70 °F i poniżej 2 h; wariant z wodą zmienianą co 30 min pominięty. | karty mrożenia | ☐ Z · ☐ P: ____ · ☐ O |
| R-10 | `2026-11-02-jaratlas-06-karty-p15 (4), p18 (5), p19 (1)` | „Bez wolnej przestrzeni” tylko w woreczkach i pojemnikach z szerokim otworem; w słoikach z wąskim otworem dodatkowa wolna przestrzeń (bez liczby, bo NCHFP jej nie podaje). | asparagus-v11, brussels-kohlrabi-v13/v14, celeriac-celery-v13, broccoli-v12, bell-pepper-v19, cauliflower-v14 | ☐ Z · ☐ P: ____ · ☐ O |
| R-11 | `2026-11-02-jaratlas-06-karty-p16 (3)` | Liście: jako przykład „innych liści” (2 min blanszowania) tylko szpinak; boćwina i jarmuż nienazwane (decyzja D6 z 2026-11-02 dopuszcza je nazwać, jeszcze nie w karcie). | leafy-greens-v13 | ☐ Z · ☐ P: ____ · ☐ O |
| R-12 | `2026-11-02-jaratlas-06-karty-p17 (5)` | Buraki do mrożenia tylko małe albo średnie (NCHFP nie podaje czasu gotowania dużych). | beetroot-v17 | ☐ Z · ☐ P: ____ · ☐ O |
| R-13 | `2026-11-02-jaratlas-06-karty-p18 (4), p19 (2)` | Pominięte sposoby bez podanej w źródle wolnej przestrzeni: puree z brukwi, kolby kukurydzy w całości. | turnip-rutabaga-v11, corn (mrożenie) | ☐ Z · ☐ P: ____ · ☐ O |
| R-14 | `2026-11-02-jaratlas-06-e1-kiszenie (D-f)` | Status „ok-zrodlo” (karta) tylko przy przepisie dla tego surowca i procesu, bez analogii surowca. | katalog | ☐ Z · ☐ P: ____ · ☐ O |

## Część 3. Punkty sporne i pytania do eksperta

### P-01. Pleśń w kiszonej kapuście: zbierać małe plamy czy wyrzucić całość

- **Stan:** Karta white-cabbage-v01 (docs/tresci/teksty/pl/warianty/white-cabbage-v01.md:57) mówi za OSU (szczebel 3): „małe plamy pleśni można zebrać, ale przy dużej ilości pleśni trzeba wyrzucić całą partię”. NCHFP dla ogórków (FER-044, szczebel 1) też każe „promptly remove surface scum or mold”. Późniejsza decyzja D-d (E1 kiszenie, docs/tresci/E1-kiszenie-2026-11-02.md:335) proponuje dla kart regułę ostrożniejszą: pleśń poza cienkim kożuchem, śluz, obcy zapach albo miękkość = wyrzuć całość; zebranie małych plam tylko jako informacja ze źródła dla kapusty w dużym naczyniu. Karta z partii 1 nie ma jeszcze tej ramy.
- **Twierdzenia:** FER-055, FER-044, FER-035 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-e1-kiszenie (D-d)`; `2026-11-01-jaratlas-06-karty-p1 (4)`
- **Pytanie:** Czy w kartach kiszenia dopuszczalne jest usuwanie pleśni z powierzchni i dalsze jedzenie, a jeśli tak, to w jakich granicach (rodzaj pleśni, ilość, naczynie)?
- **Opcje:** A) wyrzuć całość przy każdej pleśni poza cienkim białym kożuchem (D-d) · B) jak OSU/NCHFP: małe plamy zebrać, dużo pleśni = wyrzuć partię · C) inna granica (proszę podać)
- **Rekomendacja JarAtlas:** A (wariant ostrożniejszy, D-027 b)
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-02. Morele w słoikach bez zakwaszenia (pH do 4,80)

- **Stan:** Karta apricot-v08 podaje przetestowany proces NCHFP (kąpiel wodna, bez soku z cytryny i kwasu cytrynowego). Lista pH FDA podaje dla moreli 3,30–4,80, czyli górna granica jest powyżej 4,6. Karta ma ostrzeżenie E3-002 i odsyła do mrożenia jako możliwości ostrożniejszej. JarAtlas nie zna przetestowanej dawki kwasu dla tego przepisu (SDSU i UC MFP też nie zakwaszają, odczyt 2026-11-02).
- **Twierdzenia:** E3-002, ACI-001, ACI-135 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-katalog-p4 (1)`
- **Pytanie:** Czy przetestowany proces NCHFP dla moreli bez dodatku kwasu można pokazać czytelnikom w Europie (odmiany o możliwie wyższym pH)? Jeśli trzeba zakwasić: jaka dawka i jakie źródło?
- **Opcje:** A) zostaje jak jest: proces NCHFP + ostrzeżenie E3-002 + mrożenie jako alternatywa · B) dodać kwas (proszę podać dawkę i źródło) · C) nie publikować karty wekowania moreli, tylko mrożenie
- **Rekomendacja JarAtlas:** A, chyba że ekspert zna dawkę ze źródła; przy wątpliwości C
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-03. Dżem morelowy: sok z cytryny i cukru nie zmniejszać

- **Stan:** Karta apricot-v06 (NCHFP Apricot Jam without Pectin) ma ostrzeżenie: pH moreli 3,30–4,80, przepis przetestowany z sokiem z cytryny i pełną ilością cukru; nie pomijać soku i nie zmniejszać cukru. NCHFP nie mówi wprost, że sok jest tu potrzebny dla bezpieczeństwa (wniosek JarAtlas). ACI-314: gdy przepis pisze „lemon juice”, JarAtlas zaleca butelkowany sok (analogia z NCHFP Lemon Curd).
- **Twierdzenia:** ACI-308, ACI-314 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p8 (2), (3)`
- **Pytanie:** Czy ostrzeżenie jest merytorycznie poprawne i czy zalecenie butelkowanego soku z cytryny w dżemach i galaretkach jest właściwe?
- **Opcje:** A) zatwierdzam oba · B) poprawka (proszę wskazać)
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-04. Lista pH FDA cytowana z kopii na riverstonehealth.org

- **Stan:** Wszystkie wartości pH z listy FDA/CFSAN „Approximate pH of Foods and Food Products” (w rejestrze ACI-081…ACI-170, E3-002, ACI-325) są cytowane z kopii PDF na riverstonehealth.org (lokalny urząd zdrowia w USA), nie z domeny fda.gov. Weryfikacja zastępcza sprawdziła cytat w tej kopii, nie w oryginale.
- **Twierdzenia:** E3-002, ACI-325, ACI-135 (cytaty w części 1, jeśli użyte w kartach)
- **Pytanie:** Czy ta kopia listy jest akceptowalnym źródłem wartości pH? Czy ekspert zna aktualne miejsce tej listy u FDA albo lepsze źródło pH dla moreli, renklod i brzoskwiń?
- **Opcje:** A) kopia akceptowalna · B) wymienić źródło (proszę podać)
- **Rekomendacja JarAtlas:** [DO USTALENIA] — nie sprawdzałem, czy FDA nadal publikuje listę
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-05. Ocet 5% albo 6%, bez rozcieńczania octu 10%

- **Stan:** Przepisy NCHFP są testowane z octem 5% (ACI-018) i zakazują zmiany proporcji octu i wody (ACI-016). Reguła JarAtlas ACI-211 dla czytelników spoza USA: ocet z etykietą 5% albo 6%; octu 10% (popularnego w Polsce) nie używać i nie rozcieńczać. Górną granicę opiera na jednym źródle szczebla 3 (Penn State: „Stay in the range of 5–7% acidity”, „Do not dilute … unless … research-tested recipe”).
- **Twierdzenia:** ACI-211, ACI-016, ACI-018, ACI-209, ACI-210 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p4 (1)`
- **Pytanie:** Czy ocet 6% zamiast 5% w przepisach NCHFP jest dopuszczalny? Czy zakaz rozcieńczania octu 10% jest właściwy, czy istnieje przetestowana metoda rozcieńczenia?
- **Opcje:** A) zatwierdzam regułę ACI-211 · B) tylko 5% · C) dopuszczam rozcieńczenie 10% → 5% (proszę podać metodę i źródło)
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-06. Galaretka z kolb kukurydzy i galaretki bez sterylizacji słoików

- **Stan:** corn-v09 (NCHFP Corncob Jelly with Pectin): kukurydza jest niskokwasowa (pH ok. 7,3), przepis nie dodaje kwasu, NCHFP pisze tylko „This recipe does produce an acidic jelly as tested”. Karta ma regułę ACI-283: dokładnie według przepisu, kolby czerwonej kukurydzy pastewnej, bez zamian. W katalogu wariant ma acidBasis „acidified”, choć kwasu nie dodaje (sprawa otwarta w backlogu). Galaretki corn-v09 i chili-pepper-v13: karta podaje tylko opcję NCHFP bez sterylizacji słoików z dłuższym czasem 10/15/20 min zamiast 5/10/15 min ze sterylizacją.
- **Twierdzenia:** ACI-283, ACI-265 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p7 (2), (3)`; `2026-11-02-jaratlas-06-karty-p8 (6)`
- **Pytanie:** Czy galaretkę z kolb (niskokwasowy surowiec, bez dodanego kwasu) można pokazać jako przepis do kąpieli wodnej? Czy wybór opcji „bez sterylizacji, dłuższy czas” jest właściwy?
- **Opcje:** A) zatwierdzam obie decyzje · B) galaretka z kolb bez karty (nie publikować) · C) poprawka (proszę wskazać)
- **Rekomendacja JarAtlas:** A dla czasu; przy wątpliwości co do kwasowości B
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-07. Słoiki metryczne: 0,5 l = czas dla quart, 1 l bez czasu

- **Stan:** NCHFP podaje czasy dla słoików amerykańskich (1/2 pinty ok. 236,6 ml, pinta ok. 473 ml, quart ok. 946 ml). Reguła JarAtlas: słoik do 473 ml = czas dla pint; większy, do 946 ml (np. 0,5 l, 0,72 l, 0,9 l) = czas dla quart; większy niż quart (1 l) = brak czasu, zalecenie mniejszego słoika; gdy tabela kończy się na pincie albo 1/2 pinty, większy słoik nie ma czasu. Pomidory w słoiku 0,5–0,9 l: kwas jak na quart (ACI-193).
- **Twierdzenia:** ACI-175, ACI-179, ACI-193, ACI-294, SLO-241, SLO-208, ACI-174 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p2 (1)`; `2026-11-02-jaratlas-06-karty-p7 (4)`
- **Pytanie:** Czy reguła przypisania słoików metrycznych do czasów i dawek kwasu NCHFP jest bezpieczna? Czy brak czasu dla 1 l (zamiast np. czasu dla quart) jest właściwy?
- **Opcje:** A) zatwierdzam · B) poprawka (proszę wskazać)
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-08. Wysokość n.p.m. w metrach (granice zaokrąglone w dół)

- **Stan:** Granice 1000/3000/6000/8000 stóp karty podają jako 300/900/1800/2400 m (dokładnie 304,8/914,4/1828,8/2438,4 m), czyli w dół, w stronę dłuższego czasu. Sterylizacja słoików: 10 min do 300 m, potem +1 min za każde rozpoczęte 300 m (SLO-119).
- **Twierdzenia:** ACI-176, SLO-119, SLO-209 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p2 (2)`; `2026-11-02-jaratlas-06-karty-p11 (10)`
- **Pytanie:** Czy przeliczenie i kierunek zaokrąglenia są właściwe?
- **Opcje:** A) zatwierdzam · B) poprawka
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-09. Kiszenie w miodzie: szalotka i rzodkiewka jako „ryzyko wysokie” przez analogię do czosnku

- **Stan:** Warianty shallot-pearl-onion-v06 i radish-v07 (warzywa niskokwasowe fermentowane w miodzie) nie mają źródła. Propozycja: status „ryzyko-wysokie” (karta-ostrzeżenie) przez nazwaną analogię do K-State 2020: „Garlic is a low acid plant food, and honey varies from low to high acidity”; „Other concerns are the risk of botulism, due to the fact that botulism has occurred in garlic in oil.” Zmiana jeszcze nie weszła do katalogu (partia D-043). Owoce w miodzie (G5a, 6 wariantów) zostają ukryte.
- **Twierdzenia:** FER-004 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-e1-kiszenie (D-a)`
- **Pytanie:** Czy analogia do czosnku w miodzie wystarcza, żeby oznaczyć szalotkę i rzodkiewkę w miodzie jako ryzyko wysokie (ostrzeżenie zamiast przepisu)? Czy owoce fermentowane w miodzie wymagają takiego samego ostrzeżenia?
- **Opcje:** A) ryzyko-wysokie dla G5b, G5a ukryte · B) G5b też ukryte bez ostrzeżenia · C) ostrzeżenie także dla G5a
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-10. Kiszenie: temperatura na blacie i metoda ogólna

- **Stan:** NCHFP (szczebel 1) podaje 70–75 °F (21–24 °C) dla kapusty i ogórków; USU (szczebel 3): „Fermenting on your counter is NOT safe as temperatures vary…”. Decyzja D-e: karta podaje zakres NCHFP i termometr. D-b: ogólna metoda UMN/K-State nie jest podstawą kart 81 wariantów (zostają ukryte); najwyżej jedna ogólna strona z obowiązkowym pomiarem pH.
- **Twierdzenia:** FER-034, FER-043 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-e1-kiszenie (D-b, D-e)`
- **Pytanie:** Czy zakres temperatury NCHFP z zaleceniem termometru wystarcza? Czy ogólna strona kiszenia z pomiarem pH (bez przepisu dla danego warzywa) jest dopuszczalna?
- **Opcje:** A) zatwierdzam D-e i D-b · B) poprawka
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-11. Czernica (Vaccinium myrtillus) a przepisy NCHFP na borówkę

- **Stan:** NCHFP opisuje blueberries/huckleberries, nie czernicę. Jedyne znalezione pH czernicy: 3,2–3,6 (Aliman i in. 2020, jeden region, przeczytany tylko abstrakt). Decyzja D2: mrożenie według NCHFP Blueberries z dopiskiem; wekowanie bez karty, dopóki źródło 1–3 nie nazwie czernicy. Karta blueberry-bilberry-v14 (mrożenie) obecnie obejmuje tylko borówkę.
- **Decyzje:** `2026-11-02-jaratlas-06-pytania-otwarte (D2)`
- **Pytanie:** Czy przepisy NCHFP na borówkę (wekowanie i mrożenie) można stosować do czernicy?
- **Opcje:** A) tylko mrożenie (D2) · B) mrożenie i wekowanie · C) żadne
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-12. Czarna porzeczka

- **Stan:** Przepisy mrożenia NCHFP i NDSU mówią o „bright-red currants”; Penn State wymienia „currants” bez koloru tylko przy mrożeniu na tacy. Decyzja D4: dla czarnej porzeczki tylko mrożenie na tacy, bez syropu i cukru. Uwaga: karty wekowania currant-v13 i currant-v10 (NCHFP Berries-Whole; UC sok z sokownika) mówią o „porzeczkach” bez koloru, jak lista NCHFP.
- **Twierdzenia:** ACI-244, SLO-268 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-pytania-otwarte (D4)`; `2026-11-02-jaratlas-06-karty-p15 (3)`
- **Pytanie:** Czy przepisy wekowania NCHFP dla „currants” obejmują czarną porzeczkę? Czy mrożenie czarnej porzeczki tylko na tacy jest właściwe?
- **Opcje:** A) wekowanie obejmuje czarne, mrożenie wg D4 · B) wekowanie tylko czerwone (karty do zawężenia) · C) poprawka
- **Rekomendacja JarAtlas:** [DO USTALENIA] — pytanie merytoryczne bez źródła
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-13. Po otwarciu słoika: „lodówka, do 1 tygodnia”

- **Stan:** Brak źródła 1–3 z terminem po otwarciu dla domowych syropów, soków, kompotów, przecierów, sosu żurawinowego, masła jabłkowego i wekowanego curdu. Decyzja D1 (jeszcze nie w kartach): ostrożna reguła „lodówka, do 1 tygodnia” przez analogię do NCHFP FAQ („…where jars failed to seal … refrigerate the jars and consume contents within one week”, zdanie o jakości słoika niezamkniętego). Inne analogie: dżem pełnocukrowy 1 miesiąc (SLO-018), curd rozmrożony 4 tygodnie, sok z sokownika niewekowany do tygodnia (UC, SLO-207).
- **Twierdzenia:** SLO-207, SLO-018, SLO-227 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-pytania-otwarte (D1)`; `2026-11-02-jaratlas-06-karty-p11 (2)`
- **Pytanie:** Czy 1 tydzień w lodówce po otwarciu jest właściwym ostrożnym terminem dla tych grup? Czy dla curdu lub masła jabłkowego potrzebny jest krótszy albo inny termin?
- **Opcje:** A) 1 tydzień dla wszystkich (D1) · B) różne terminy (proszę podać) · C) bez terminu, tylko „w lodówce”
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-14. Brzoskwinie tylko o żółtym miąższu, bez nektarynek

- **Stan:** NCHFP: „Do not use this process to can white-flesh peaches.” Reguła JarAtlas SLO-144 przenosi to na dżem brzoskwiniowy (strona dżemu nie mówi o białych). Nektarynki wyłączone z kart brzoskwiń.
- **Twierdzenia:** E3-001, SLO-144, SLO-128 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p4 (4)`; `2026-11-02-jaratlas-06-katalog-p4 (2), (3)`
- **Pytanie:** Czy wykluczenie białych brzoskwiń także z dżemu (z pektyną, z kwasem w przepisie) jest właściwe? Czy nektarynki można wekować według przepisu na brzoskwinie?
- **Opcje:** A) zatwierdzam wykluczenia · B) poprawka
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-15. Renklody według przepisu NCHFP na dżem śliwkowy

- **Stan:** plum-v14: przepis NCHFP Plum Jam Pectin zastosowany do renklod, bo lista pH FDA wymienia „Plums, Green Gage” 3,60–4,30 (cały zakres poniżej 4,6). NCHFP nie wymienia odmian.
- **Twierdzenia:** ACI-325 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p9 (3)`
- **Pytanie:** Czy zastosowanie przepisu na dżem śliwkowy do renklod jest dopuszczalne?
- **Opcje:** A) tak · B) nie
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-16. Sok z sokownika parowego: źródło UC (szczebel 3)

- **Stan:** Karty grapes-v07, currant-v10, raspberry-blackberry-v07 opierają się na UC Master Food Preservers (El Dorado, „Steam Juicing Basics”, 2026), szczebel 3, jedno źródło. Dla quart karta stosuje dłuższe czasy UC (10/15/25 min) zamiast NCHFP Grape Juice (5/10/15). 5 min tylko w słoikach sterylizowanych.
- **Twierdzenia:** SLO-202, SLO-203, SLO-204, SLO-205, SLO-206, SLO-207, SLO-208 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p11 (7), (8)`
- **Pytanie:** Czy UC wystarcza jako jedyne źródło procesu soku z sokownika? Czy wybór dłuższych czasów jest właściwy?
- **Opcje:** A) zatwierdzam · B) nie publikować tych kart · C) poprawka
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-17. Awaria zamrażarki: kiedy wyrzucić

- **Stan:** FDA podaje tylko, kiedy mrożonka jest bezpieczna (kryształki lodu albo 40 °F, ok. 4 °C, lub mniej). Reguła JarAtlas: bez kryształków i cieplej niż 40 °F albo nie da się sprawdzić = wyrzuć.
- **Twierdzenia:** SLO-260 (cytaty w części 1, jeśli użyte w kartach)
- **Decyzje:** `2026-11-02-jaratlas-06-karty-p14 (4)`
- **Pytanie:** Czy reguła jest właściwa?
- **Opcje:** A) zatwierdzam · B) poprawka
- **Rekomendacja JarAtlas:** A
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

### P-18. Sól do kiszonej kapusty: NCHFP i Wisconsin

- **Stan:** Karta white-cabbage-v01 podaje NCHFP (25 funtów kapusty na 3/4 szklanki soli; 3 łyżki na 5 funtów) i Wisconsin (szczebel 3: 2,25–2,5% soli wagowo). Nie przeliczałem, czy obie ilości są zgodne (gęstość soli zależy od rodzaju).
- **Twierdzenia:** FER-029, FER-031 (cytaty w części 1, jeśli użyte w kartach)
- **Pytanie:** Czy obie podane ilości soli są spójne i bezpieczne dla soli stosowanej w Polsce (sól kamienna/warzona bez jodu)?
- **Opcje:** A) zatwierdzam · B) poprawka
- **Rekomendacja JarAtlas:** [DO USTALENIA]
- **Odpowiedź:** ☐ zatwierdzam · ☐ poprawka: ________________ · ☐ odrzucam

## Część 4. Podpis i zwrot

- Imię i nazwisko, kwalifikacje: ____________________
- Data przeglądu: ____________________
- Zakres przeczytany: ☐ część 1 w całości · ☐ tylko G1 i zbiorczo G2–G6 · ☐ część 2 · ☐ część 3
- Uwagi ogólne (np. czego brakuje w kartach, co powinno być ostrzeżeniem): ____________________

Po zwrocie: rola 06 wprowadza poprawki do rejestru i kart, każda zmiana treści krytycznej przechodzi ponowną weryfikację, a w polu `przeglad` twierdzenia pojawia się wpis eksperta z datą i skrótem wersji tego pakietu. Twierdzenie „odrzucone” znika z kart przed publikacją.
