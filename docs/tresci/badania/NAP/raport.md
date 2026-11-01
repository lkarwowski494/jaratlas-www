# NAP – raport (fermented-beverages, vinegar-making, koji-soy-ferments), 2026-11-01

## Liczby
- Wariantów na liście: 197; w `warianty.json`: 197 (sprawdzone `node`).
- Status: `ok-zrodlo` 9, `ryzyko-wysokie` 1, `nie-publikowac` 0, `do-researchu` 187.
- Poza obszarem NAP (`inny_klaster`): 77 (ACI 52, SLO 10, MLE 4, MIE 4 z koji-v13, FER 4, SZY 1, SUS 1, INNE 1). Trafiły na listę przez słowa „ocet”, „musztard”, „zakwas” w nazwie lub grupie v0.
- `poza_zakresem`: 3 (2 zaczyny chlebowe, woda różana).
- Twierdzenia: 62 (`NAP-001`…`NAP-062`); 61 potwierdzonych curl+grep, 1 robocze (próg UE 1,2% za przeglądem). 21 źródeł w `zrodla/` (wszystkie w `indeks.tsv`).

## ok-zrodlo
- Kombucha F1 (fermented-beverages-v01): przepis NCHFP Kombucha Tea.
- Ocet jabłkowy z matką (artisanal-vinegars-v01, apple-v01 → scalić): PSU/OSU „Making Cider Vinegar at Home”.
- Octy smakowe jako macerat na occie komercyjnym: estragon (garden-herbs-v07), malina (raspberry-blackberry-v01, tylko wersja macerowana), jeżyna z rozmarynem, skórka cytryny, skórka pomarańczy, żurawina. Źródło: UGA/NCHFP „Flavored Vinegars” i OSU SP 50-736. Przy cytrynie, pomarańczy i żurawinie zakładam macerat; w v0 nie wiadomo, czy chodzi o macerat, czy o fermentację.

## Najważniejsze ustalenia
1. **Domowy ocet nigdy do marynat ani wekowania.** NCHFP: nie używać octu o nieznanej kwasowości. PSU i OSU: domowy ocet tylko do sałatek, gotowania i pikli lodówkowych lub mrożonych. Do konserwowania potrzebny ocet 5% (NAP-027…031). To wiąże też inne klastry (ACI): ich pikle nie mogą odsyłać do „żywych octów” z katalogu.
2. **Kombucha:** start pH 4,0 lub mniej, 7–10 dni w 20–25°C, potem lodówka do 30 dni; produkt końcowy pH 2,5–4,2 (NY A&M, BCCDC). Zakaz glazurowanej ceramiki: przypadki ołowicy (UGA, BCCDC, FDA). Szczelne butelki mogą wybuchnąć (NCHFP, BCCDC). F2 z cukrem lub owocami podnosi alkohol i ciśnienie, a przepis NCHFP jej nie obejmuje.
3. **Alkohol:** kombucha może przekroczyć 0,5% obj. (TTB, USA), a w butelce dojść do 3%. Kefir wodny ma udokumentowanie podwyższony alkohol; Health Canada wymienia też ginger beer. `NAP-011` (próg 0,5%) dołączyłem do 12 wariantów (kombucha F1 i F2, jun, kefir wodny, ginger beer, kwas, podpiwek, tepache, napoje z pigwy, jabłek, malin, bzu). Status prawny poza USA to pytanie otwarte.
4. **Koji, miso, natto, tempeh:** dobre źródło szczebla 1, czyli BCCDC Fermented Foods Guidance (2023/2024, sekcje 3.8–3.12). Produkty koji są niekwaśne (pH powyżej 4,6), więc bezpieczeństwo zależy od soli i aw (miso: sól powyżej 4%, aw 0,85 lub niższa; shoyu: 18% soli) oraz od chłodzenia ugotowanego ziarna w 2 h (Bacillus). Tylko komercyjne kultury, bez odnawiania z poprzedniej partii (aflatoksyny). Amazake inkubuje się powyżej 50°C. Tempeh z kokosa niesie ryzyko kwasu bongkrekowego. To wytyczne dla zakładów, nie przepisy domowe, więc warianty zostały `do-researchu` z twierdzeniami.
5. **Garum rybne = `ryzyko-wysokie`.** Fermentowane ryby są głównym źródłem botulizmu typu E (ponad 85% przypadków na Alasce, EID 2004). Fesikh z niewypatroszonych ryb wiązano z ogniskami (BCCDC). Codex dla sosu rybnego wymaga co najmniej 200 g/l soli i ok. 6 miesięcy fermentacji. Nie ma przetestowanej procedury domowej, a wersje z koji o niższej soli są tym bardziej niesprawdzone.

## Sprzeczności z v0 i propozycje
- v0 łączy w jednym wariancie ocet macerowany z „żywym” (raspberry-blackberry-v01, „macerowany i żywy”). To dwa różne procesy o różnym statusie, trzeba je rozdzielić.
- Duplikaty: apple-v01 = artisanal-vinegars-v01; grapes-v01 = artisanal-vinegars-v02; pear-v03 = artisanal-vinegars-v04; beetroot-v01 = fermented-beverages-v06; mango-papaya-v03 = asian-american-mix-v05.
- Fire cider, oksymel i shruby stoją w v0 jako „fermented-beverages”, ale to procesy octowe (macerat), nie fermentacja. Nadałem im `vinegar-making`.
- Słownik: brak rodziny dla hydrolatów i naparów (woda różana). Proponuję też rozważyć `vinegar-infusion` jako odrębną od `vinegar-making`, bo macerat na occie komercyjnym jest bezpieczny, a domowy ocet fermentowany nie nadaje się do konserwowania.
- `preservationMethod` = null przy wariantach innych klastrów i przy wodzie różanej, bo nie chciałem zgadywać.

## Strony nieosiągalne
- eur-lex.europa.eu: HTTP 202 dla każdego adresu (1169/2011, 1334/2008).
- health.alaska.gov monograph.pdf: zwraca JPEG; yk-health.org i stacks.cdc.gov: 403; pmc.ncbi.nlm.nih.gov: captcha (użyłem Europe PMC REST).
- ttb.gov/kombucha: 404 (użyłem general-requirements); agriculture.ny.gov/kombucha: 404 (użyłem food-safety/kombucha-processing).
- Ohio State ohioline HYG-5346: 404 (tekst przez PSU); manitowoc.extension.wisc.edu Vinegar 2023: 404; pubs.ext.vt.edu: błąd TLS; foodsmartcolorado (strona kombuchy) przekierowuje na stronę ogólną.
- Treści stron nie zawierały instrukcji skierowanych do modelu.
