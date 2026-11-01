# FER: raport (lacto-fermentation, salt-preservation), 2026-11-01

## Liczby
- Wariantów na liście: 260; wszystkie w `warianty.json`.
- safetyStatus: ok-zrodlo 24, do-researchu 222, ryzyko-wysokie 11, nie-publikowac 3.
- inny_klaster: 61 (SZY 18, ACI 16, NAP 8, MLE 6, OLE 5, MIE 5, SUS 2, SLO 1).
- Rejestr: 94 twierdzenia, 140 cytatów; wszystkie przechodzą `grep -F` na tekście w `S/zrodla/<sha12>.txt` (skrypt `_skrypty/weryfikuj.py`). 82 twierdzenia `potwierdzone` (curl+grep), 12 `robocze`: każde z nich ma źródło UC ANR 8267 z `weryfikacja: narzędzie` (PDF pobrany przez WebFetch po 403 dla curl).
- ok-zrodlo: kapusta kiszona biała i włoska z kminkiem (NCHFP + Wisconsin), ogórki klasyczne i z czosnkiem (tylko receptura NCHFP z octem), kimchi z kapusty pekińskiej w 4 wariantach (CSU, OSU), oliwki w 5 stylach (UC 8267), cytryny i limonki w soli (UCCE MFP), 8 warzyw niskokwasowych w solance (Guide 4, tylko autoklaw; inny_klaster SZY).

## Najważniejsze ustalenia
1. Trzy cytaty, które research 27 oznaczył jako sprawdzone ręcznie, są dosłownie zgodne z HTML NCHFP (FER-011, FER-092, FER-093). Pozostałe użyte [WF] z sekcji 1–2.8 też się zgadzają po pobraniu curl. Wyjątki: cytaty CDC (403) zastąpiłem USDA Guide 1 (FER-004, FER-005).
2. Ogórki „po polsku” (~2%, bez octu) i małosolne: żadne źródło szczebla 1–3 ich nie testuje. NCHFP ma tylko przepis z octem 5%; „refrigerator dills” (~1 tydz.) są wspomniane bez przepisu (FER-051). Przemysł: ≥5% NaCl (FER-053).
3. Sól jodowana: USDA Guide 6 (2015, szczebel 1) mówi, że pikle fermentowane można bezpiecznie robić na soli jodowanej lub niejodowanej (FER-014). UMN i Wisconsin piszą, że jod przeszkadza fermentacji (FER-015). Wniosek: sól bez jodu to zalecenie jakości, nie bezpieczeństwa.
4. Czosnek: ekspert Ask Extension (2026) pisze, że fermentacja czosnku nie jest zatwierdzoną metodą i nie ma zwalidowanych przepisów (FER-068); K-State: czosnek w miodzie jest ryzykowny (jad kiełbasiany) (FER-069). Status ryzyko-wysokie dla 6 wariantów z fermentowanym czosnkiem (szczebel 3, więc nie nie-publikowac).
5. Pleśń: NCHFP (ogórki) „promptly remove surface scum or mold”; OSU (kapusta): małe plamy zebrać, dużą ilość wyrzucić razem z partią; kimchi (UGA, CSU) i oliwki (8267): wyrzucić. Reguła zależy od produktu (FER-044, FER-055, FER-057, FER-058).
6. Naczynia: NCHFP dopuszcza stal nierdzewną jako przybory (FER-025), szczebel 3 wyklucza metalowe pojemniki (FER-026); mosiądz, miedź, cynk dyskwalifikują produkt (FER-024). Ołów w szkliwie: FDA (FER-028).
7. Wekowanie ukiszonych: tabele NCHFP dla kapusty (hot 10/15, raw 20/25 min) i ogórków (raw 10/15 min) przy 0–1000 stóp (FER-037, FER-046); pasteryzacja 180–185 °F przez 30 min tylko według przepisu (FER-047). UMN: wekowanie zabija Lactobacillus (FER-090), co zamyka pytanie 14 z research 27.
8. Oliwki (UC 8267): ługowane niefermentowane są niskokwasowe; wekować tylko w autoklawie; oliwki solankowe i hiszpańskie można trzymać rok w solance (FER-072–FER-082).
9. Grzyby leśne w solance: Guide 4 „Do not can wild mushrooms” → nie-publikowac (3 warianty, SZY).

## Sprzeczności z katalogiem v0
- v0 grupuje „w solance (tyndalizacja/szybkowar)” dla warzyw niskokwasowych; tyndalizacja nie jest przetestowaną metodą, tylko autoklaw według Guide 4 (FER-005). Kalafior, brukselka/kalarepa, por, brukiew i mieszanka stir-fry nie mają sekcji w Guide 4 → ryzyko-wysokie.
- v0 zakłada wiele kiszonek owocowych, kapary 7–10%, umeboshi, czosnek w miodzie i małosolne bez źródeł; nic z tego nie ma przetestowanego przepisu.
- Wiele pozycji v0 w grupie „Kiszenie” to marynaty octowe (sałatka szwedzka, mixed pickles, torshi w occie, morkovcha, chrzan na soku z cytryny) → inny_klaster ACI.
- Kimchi: Codex 223 dotyczy tylko kapusty pekińskiej; kkakdugi, dongchimi, pa-kimchi i inne nie są objęte przepisami.

## Strony nieosiągalne
- anrcatalog.ucanr.edu/pdf/8267.pdf i escholarship.org (403 dla curl). 8267 pobrany przez WebFetch, a tekst z pdftotext przechodzi grep.
- ucanr.org/freepubs (503), ucfoodsafety.ucdavis.edu (403), ucfoodquality.ucdavis.edu (403), PDF-y UC Davis linkowane z OSU (przekierowanie do strony głównej), OSU SP1009 (404), eur-lex 84/500/EWG (202, wyzwanie JS), archiwum UNT (błąd TLS).
- Na stronach nie znalazłem instrukcji skierowanych do modelu.

## Propozycje do słownika
- Brak rodziny dla roślinnych „serów” fermentowanych (walnut-nuts-v03); tymczasowo lacto-fermentation.
- Cytryny w soli są na granicy salt-preservation i lacto-fermentation (UC MFP pisze „they are fermented”); przyjąłem salt-preservation.
