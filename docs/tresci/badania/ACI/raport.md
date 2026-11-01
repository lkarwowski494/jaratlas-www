# ACI — raport (2026-11-01)

Zakres: rodzina `vinegar-pickling` + wekowanie żywności kwaśnej w kąpieli wodnej w `canned-foods`. 307 wariantów z listy, 170 twierdzeń (wszystkie `potwierdzone`, curl+grep), 105 produktów sklasyfikowanych pod względem kwasowości.

## Liczby
- Statusy: ok-zrodlo 57, do-researchu 237, nie-publikowac 11, ryzyko-wysokie 2.
- `inny_klaster` oznaczono w 89 wariantach (SLO 26, OLE 15, FER 15, MIE 12, SZY 10, MLE 5, NAP 4, SUS 2); wypełniono rodzinę/metodę, status zwykle do-researchu.
- Kwasowość produktów: low-acid 77, acid 23, borderline 5 (tomato, green-cherry-tomato, tomatillo, pear, apricot).
- Źródła: 115 tekstów pobranych (NCHFP ok. 105 stron, USDA Complete Guide 2015: Guide 1, 2, 3, 6, 7; eCFR 21 CFR 114.3; lista pH FDA/CFSAN; UMN, PSU, SDSU Extension).

## Najważniejsze ustalenia
1. Definicje USA (21 CFR 114.3, eCFR): żywność kwaśna ma naturalne pH 4,6 lub niższe; zakwaszana ma końcowe pH 4,6 lub niższe przy aw > 0,85; pomidory z pH < 4,7 nie są „low-acid”. USDA Guide 1: wszystkie świeże warzywa (poza większością pomidorów), mięso, ryby, mleko są niskokwasowe, a mieszaniny zwykle też.
2. Pikle: ocet biały lub jabłkowy 5%; nie zmieniać proporcji octu, warzyw i wody; nie używać octu o nieznanej kwasowości. Dla ok. 60 wariantów v0 „w occie winnym/balsamicznym/ryżowym/słodowym” nie ma przetestowanego przepisu (do-researchu).
3. Pomidory: zakwaszanie jest obowiązkowe (2 łyżki butelkowanego soku z cytryny albo 1/2 łyżeczki kwasu cytrynowego na quart; 1 łyżka albo 1/4 łyżeczki na pint; albo 4 łyżki octu 5% na quart), także przy szybkowarze. Pomidory z cukinią, sos z mięsem i sos spaghetti tylko w szybkowarze. FDA: pH pomidorów 4,30–4,90.
4. Figi i gruszki azjatyckie trzeba zakwasić (figi: tyle samo co pomidory). Melony i arbuz są niskokwasowe (FDA: arbuz 5,18–5,60, kantalup 6,13–6,58), nie mają czasów wekowania samodzielnego, a NCHFP nie zaleca wekowania arbuza. Wolno tylko w przetestowanych piklach (skórka arbuza, kantalup). Przecierów NCHFP nie stosuje się do bananów, fig, melonów, papai ani dojrzałego mango.
5. Wyłącznie lodówka: jaja marynowane (domowe jaja w temp. pokojowej powodowały botulizm, maks. 2 h poza lodówką), sos chrzanowy NCHFP, „quick pickles”. Grzybów leśnych nie wekować (NCHFP), stąd 11 wariantów grzybów leśnych w occie ma status nie-publikowac.

## Sprzeczności z katalogiem v0
- v0 grupuje marynowane grzyby leśne (borowiki, rydze, kurki, maślaki, opieńki, gąski) jako zwykłe wekowane pikle, a NCHFP mówi: nie wekować grzybów leśnych.
- v0 „Pasteryzacja” obejmuje produkty niskokwasowe: kalafior, fasolkę, patisony i bakłażan w sosie pomidorowym, gołąbki, sos boloński, cukinię w pomidorach. Według USDA to szybkowar albo brak procesu.
- Keczup dyniowy jest przecierem z dyni, a NCHFP zakazuje wekowania rozgniecionej dyni: ryzyko-wysokie. Syrop z soku arbuza: ryzyko-wysokie. Keczup bananowy, dżem z kantalupa i galaretka arbuzowa to sygnały ryzyka.
- „Kompot truskawkowy”: truskawek nie ma na liście NCHFP Berries whole. „Połówki jabłek”: NCHFP podaje czas tylko dla plastrów.
- Brytyjski piccalilli (kalafior w musztardzie, zagęszczany) nie jest NCHFP Piccalilli (zielone pomidory z kapustą). NCHFP Piccalilli odpowiada natomiast kreolskiemu relishowi z zielonych pomidorów i kapusty.
- „Cukinia a la ananas” (syrop z octem) nie jest NCHFP Zucchini-Pineapple (sok ananasowy z sokiem z cytryny).
- Wiele wariantów v0 z grupy „Kiszenie i ocet” to fermentacja, oznaczone `inny_klaster: FER`.

## Uproszczenia i decyzje
- ok-zrodlo dla zamiany octu białego 5% na jabłkowy 5% (oba zalecane; biały tylko dla koloru, ACI vin_color) oraz dla kompotów jako „owoców w syropie very light” (patrz pytania.md).
- Lista pH FDA pochodzi z kopii wydruku strony FDA z 2007 r. (riverstonehealth.org), bo oryginał na fda.gov nie istnieje. Oznaczono szczebel 1 z uproszczeniem w każdym twierdzeniu.
- Produkty łączące składniki (mieszanki, pineapple-banana, mango-papaya, fig-pomegranate, elderberry-elderflower, pear z gruszką azjatycką) mają najniższą kwasowość składnika.
- `rejestr.json` ma dodatkowe pole `klucz` (czytelna nazwa twierdzenia), a `kwasowosc-produktow.json` pola `claimsDodatkowe` i `opis`.

## Strony nieosiągalne / odrzucone
- webharvest.gov (archiwum FDA pH): limit zapytań (archive.org rate limit). ucanr.edu/media/307390: 403. extension.usu.edu refrigerator-pickles: strona 404. MSU melons PDF: brak treści. Wisconsin safepreserving/pickles: brak treści merytorycznej. Wpisy usunięto z indeksu.
- eCFR renderer API zwrócił 404, użyto versioner API (z kompresją).
- Na pobranych stronach nie znaleziono instrukcji skierowanych do modelu.
