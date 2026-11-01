# Raport klastra MIE (2026-11-01)

Zakres: 155 wariantów (mięso, ryby, jaja). Rejestr: 95 twierdzeń, wszystkie `potwierdzone` (curl+grep, 26 źródeł; 10 szczebla 1, 1 szczebla 2, reszta szczebla 3).

## Statusy
- ok-zrodlo: 20 (jerky wołowe, z indyka, z dziczyzny; boczek wędzony x2; kiełbasa polska, świeża biała, bratwurst, chorizo świeże; gravlax; marynowane śledzie i sielawa; ryby wędzone na gorąco x5; jaja marynowane x3)
- ryzyko-wysokie: 21 (kiełbasy surowe dojrzewające i smarowne, surowa dziczyzna dojrzewająca, łosoś wędzony na zimno, szproty niewypatroszone, śledzie solone w domu, boquerones, peklowane żółtka, jaja w oliwie z czosnkiem, water glassing, majonez z surowych jaj)
- nie-publikowac: 1 (wobła/taran: niewypatroszona ryba solona i suszona, FDA CPG 540.650)
- do-researchu: 113. `inny_klaster`: SZY 35 (wekowanie), OLE 16 (smalec, confit, rillettes, łój, pod tłuszczem; w tym eggs-v07 z ryzyko-wysokie)
- poza_zakresem: 9 (potrawy na bieżąco: pulled pork, śledzie w śmietanie, thit kho, majonez itd.); duplikaty `scalic_z`: 4.

## Najważniejsze ustalenia
1. Azotyny. USA: najwyżej 200 ppm azotynu w produkcie gotowym, 1 oz azotynu sodu na 100 lb przy peklowaniu na sucho, boczek 120 ppm (nastrzyk) / 200 ppm (na sucho) (9 CFR 424.21–22). UE od 9.10.2025: 80 mg/kg dodanych azotynów w produktach niepoddanych i poddanych obróbce cieplnej (sterylizowane 55), pozostałość do 45 mg/kg, azotany 90 mg/kg (rozp. 2023/2108); azotyn „do żywności” tylko w mieszaninie z solą (zał. II 1333/2008). Extension (UGA) zaleca gotową mieszankę peklującą.
2. Przepis Virginia Tech na szynkę dojrzewającą dopuszcza 2 oz azotynu sodu na 100 lb, czyli 2x limit USA. Nie przenosić.
3. Kiełbasy surowe: UGA każe w pełni ugotować surowe kiełbasy wędzone; trwałość dopiero przy aw < 0,85 i pH < 5,3; E. coli O157:H7 wymaga kontrolowanej fermentacji i podgrzania do 145°F. Brak domowego procesu z weryfikacją pH/aw, stąd ryzyko-wysokie dla salami, metki, teewurstu, nduji.
4. Dziczyzna: NCHFP każe zamrozić wieprzowinę i dziczyznę na jerky (0°F, 30 dni), a UE (2015/1375) stwierdza, że część gatunków Trichinella u zwierzyny jest odporna na zamrażanie. Dla dzika liczy się badanie i ogrzanie (144°F zabija włośnie wg UGA; jerky 160°F).
5. Ryby: pasożyty zabija zamrażanie (FDA -20°C 7 dni; UE -20°C 24 h lub -35°C 15 h w całej masie), nie sól ani ocet (larwy przeżywały 28 dni w 21% solance). Wędzenie na gorąco w domu: 160°F przez 30 min (UW Sea Grant, UAF), lodówka. Na zimno: brak zabicia bakterii, C. botulinum typu E rośnie od 3,3°C. Niewypatroszone ryby solone/suszone/wędzone > 5 cali: FDA uznaje za potencjalnie śmiertelne.
6. Jaja marynowane: NCHFP nie ma instrukcji wekowania, tylko lodówka; w temperaturze pokojowej był jad kiełbasiany. Water glassing: USU „unsafe”.

## Sprzeczności z katalogiem v0
- beef-veal-v08: v0 „suszone w 65°C” bez podgrzania do 160°F; NCHFP wymaga podgrzania (przed albo po suszeniu), suszenie w 140°F.
- eggs-v09: v0 „do 12 miesięcy w spiżarni”; USU: metoda niebezpieczna.
- freshwater-fish-v11: v0 traktuje wobłę jak zwykły przetwór; FDA: zagrożenie jadem kiełbasianym (kapchunka: 3 zgony).
- sea-fish-v08: v0 łączy wędzenie na zimno i na gorąco w jednym wariancie.
- pork-loin-ham-v10: suszenie 5–7 dni nie daje parametrów trwałości.
- freshwater-fish-v10: v0 „ikra solona 3–5%”; FDA dla kawioru chłodzonego: co najmniej 5% soli w fazie wodnej (inna miara).
- eggs-v02: v0 zakwas buraczany zamiast soku z buraków z przepisu NCHFP.
- Sprzeczności między źródłami: zamrażanie ryb (UW 4 dni vs FDA 7 dni vs UE 24 h), trwałość ryby wędzonej (2 tyg. vs miesiąc), jaja marynowane (1, 2–3, 3–4 mies.; jakość), kiełbasa polska UGA (150°F w przepisie vs 160°F zalecenie).

## Strony nieosiągalne
- eur-lex.europa.eu: HTTP 202 bez treści (wszystkie warianty adresu); obejście przez publications.europa.eu/resource/celex (cellar).
- NCHFP: przegląd literatury o peklowaniu i wędzeniu (404 po zmianie serwisu); strona o olejach z czosnkiem (treść ładowana skryptem).
- foodsafety.gov (403), FSIS i CDC nie próbowano (403 wg briefu).
- uaf.edu, webarchive.library.unt.edu, ir.library.oregonstate.edu: błąd TLS (niepełny łańcuch); pubs.extension.wsu.edu PNW 238: 404; digitalcommons.usu.edu PDF: 403 (użyto abstraktu).
- Treści stron nie zawierały instrukcji skierowanych do modelu.

## Uwagi do słownika
- Jerky przypisane do `drying` (dry-storage), biltong do `meat-curing-smoking`; do ujednolicenia.
- Wyroby dojrzewające dostały `cool-storage`; proponuję regułę „cool-storage tylko po spełnieniu MIE-016/MIE-023”.
