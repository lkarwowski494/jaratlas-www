# MLE (dairy-cheese): raport badacza, 2026-11-01

## Liczby
- Wariantów: 98 (wszystkie z `lista-MLE.json`). Twierdzeń: 65, cytatów: 70, wszystkie przeszły `grep -F` (curl+grep), status `potwierdzone`.
- `ok-zrodlo`: 8. Jogurt naturalny, grecki i bułgarski (Illinois Extension 2024), paneer (odpowiednik: queso blanco NMSU E-216), queso fresco/blanco (PNW539, NMSU), mozzarella z kulturą (NMSU) i na kwasku (UCCE/U. Alaska), ricotta z serwatki (UCCE 2020).
- `ryzyko-wysokie`: 5. Zsiadłe mleko z mleka niepasteryzowanego, kulki labneh w oliwie, ser w oliwie z ziołami, feta w oliwie z chili, nakládaný hermelín.
- `nie-publikowac`: 0. Żadne źródło szczebla 1 nie mówi „not recommended” o całym procesie; FDA klasyfikuje produkty z mleka surowego jako „High Risk Choices”.
- `do-researchu`: 85, w tym 5 z `poza_zakresem` (ajran, lassi, gzik, junket, napój serwatkowy; ostatni też `inny_klaster: NAP`), 1 `inny_klaster: FER` (jogurt roślinny).
- Rodziny: `dairy-cheese` 91, `oil-and-fat` 4 (sery i labneh w oleju), `drying` 2 (kashk, kurt), `lacto-fermentation` 1 (jogurt roślinny).

## Najważniejsze ustalenia
1. **Mleko surowe = wysokie ryzyko** (FDA): Salmonella, E. coli, Listeria, Campylobacter; grupy ryzyka: ciąża, dzieci, osoby starsze, obniżona odporność. Listeria w ciąży: poronienie, śmierć noworodka.
2. **Domowa pasteryzacja**: 63 °C (145 °F) przez 30 min, licząc od nowa po spadku temperatury, albo 72 °C (161 °F) przez 15 s (21 CFR 1240.61, USA; Ohio State, Oregon State, PNW539). Dla śmietany od 10% tłuszczu temperatura +3 °C. Mikrofalówka: nie (Ohio State, UCCE).
3. **60 dni dojrzewania nie czyni sera z mleka surowego bezpiecznym.** 21 CFR 133.113 i 133.182 (USA) wymagają dosłownie „not less than 35 °F for at least/not less than 60 days” (35 °F to ok. 1,7 °C; FDA/HC zaokrągla do 2 °C). E. coli O157:H7 przeżywa ponad 270 dni w goudzie i cheddarze (D'Amico 2010). Ser miękki dojrzewający z mleka surowego: ryzyko listeriozy 50–160 razy wyższe, a 60 dni dojrzewania je zwiększa (FDA/Health Canada 2015).
4. **Sery świeże i Listeria**: FDA zaleca osobom podatnym unikanie wszystkich serów typu queso fresco/queso blanco, także z mleka pasteryzowanego; Listeria rośnie w lodówce. Domowe sery świeże wytrzymują w lodówce 5–7 dni (NMSU, PNW539, UCCE).
5. **Ser w oleju**: CFIA wycofało labneh w oleju z powodu C. botulinum; zioła i warzywa w oleju najwyżej 4 dni w lodówce albo zamrożenie (OSU). Toksyna nie zmienia wyglądu ani zapachu.
6. **Fermentacja mleka**: pH 4,6 lub niższe w 48 h (USU); sama fermentacja nie daje produktu trwałego w temperaturze pokojowej. Jogurt (Illinois): 82–85 °C, studzenie do 42–46 °C, inkubacja 6–10 h, lodówka do 4,4 °C, 14 dni.
7. **UE (853/2004)**: mleko surowe to mleko nieogrzane powyżej 40 °C; państwo członkowskie może zakazać sprzedaży mleka surowego do bezpośredniego spożycia; schładzanie u producenta do 8 °C/6 °C; napis „made with raw milk”.

## Sprzeczności z katalogiem v0
- Ricotta z serwatki: v0 90 °C, źródło 85 °C (185 °F).
- Ghee „trwałe miesiącami poza lodówką”: jedyne źródło (BC FOODSAFE, gastronomia) podaje 3 miesiące w temperaturze pokojowej i rok w lodówce.
- Feta „dojrzewająca w solance 7–10%”: przetestowany jest tylko świeży ser typu feta w solance z serwatki 3,5% (NMSU).
- Mozzarella „80 °C, pH 5,2”: NMSU rozciąga w wodzie 180 °F (82 °C), UCCE w serwatce 170–175 °F; pH 5,2 nie występuje w źródłach.
- Kulki labneh, feta i hermelín w oleju podane w v0 jako zwykłe przetwory; według źródeł to sygnał C. botulinum.
- „Zsiadłe mleko z mleka niepasteryzowanego lub zaszczepianego” łączy ścieżkę wysokiego ryzyka z bezpieczną; proponuję rozdzielić.
- Neufchâtel: NMSU ma przepis na świeży neufchâtel (amerykański), nie na pleśniowy AOP w kształcie serca; nie stosowałem go jako odpowiednika.
- Temperatury jogurtu z v0 (85 °C i 42 °C) są zgodne ze źródłem.

## Sprzeczności między źródłami
- NMSU E-216: pasteryzacja 140–145 °F przez 30 min; FDA, Ohio State, Oregon State i PNW539: co najmniej 145 °F. Na kartach 63 °C (szczebel 1).

## Strony nieosiągalne lub zastąpione
- eur-lex.europa.eu: 202 z pustą treścią. Tekst 853/2004 (pierwotny, OJ L 139) pobrany z publications.europa.eu/resource/celex/32004R0853. Wersja skonsolidowana niesprawdzona.
- EFSA (efsa.europa.eu, efsa.onlinelibrary.wiley.com): 403, także WebFetch. Opinia o surowym mleku niewykorzystana.
- Larimer County (CSU, ricotta): 403. ask2.extension.org: 502. extension.psu.edu/home-cheesemaking: przekierowanie na stronę zbiorczą bez przepisu. CSU 9.336 (jogurt): 404. Codex CXS 284 (sery serwatkowe): 404. ucanr.edu/node/150368: 403.
- CDC nie pobierane (403 według BRIEF); FDA pokrywa te same twierdzenia.
- W treści pobranych stron nie znalazłem instrukcji skierowanych do modelu.
- Nieudane pobrania usunięto z `zrodla/indeks.tsv` (puste pliki 404/403).
