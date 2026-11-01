# SZY – raport (wekowanie niskokwasowe), 2026-11-01

## Liczby
- Lista: 266 wariantów; wszystkie mają wpis w `warianty.json`.
- W obszarze SZY (112): ok-zrodlo 22, nie-publikowac 34, ryzyko-wysokie 56 (w tym 26/18 z dodatkowym `inny_klaster`).
- Poza obszarem: 154 (`do-researchu` + `inny_klaster`): ACI 53, SLO 35, FER 33, MIE 18, OLE 16, SUS 13, NAP 6, MLE 6. Dużo fałszywych trafień regexu (np. „kurk” → kurkuma, „galare” → galaretki owocowe, „w solance” → kiszonki).
- Rejestr: 54 twierdzenia, wszystkie `potwierdzone` (curl + grep -F). Najwyższy szczebel: 1 w 48 twierdzeniach, 2 w 1, 3 w 5. Cytowane adresy: 43 (NCHFP z Guide 1 i 5 w PDF, Europe PMC, PSU, Clemson, OSU, UC ANR, Ask Extension).

## Najważniejsze ustalenia
1. Cytat NCHFP sprawdzony dosłownie (strona i Guide 1 PDF): „all low-acid foods should be sterilized at temperatures of 240° to 250°F, attainable with pressure canners operated at 10 to 15 PSIG.” (SZY-003). Szybkowar to jedyna zalecana metoda dla mięsa, drobiu, ryb i owoców morza oraz warzyw; kąpiel wodna = realne ryzyko botulizmu (SZY-006).
2. Tyndalizacja: żadne źródło szczebla 1–3 jej nie dopuszcza. NCHFP podaje jedynie teoretyczne 7–11 h w kąpieli wodnej (SZY-005, bez procedury), a przegląd recenzowany (Front. Microbiol. 2018) pisze, że tyndalizacja nie jest w pełni niezawodna (przetrwalniki superdormant, SZY-009). Pozycja v0 „potrójna tyndalizacja w 100 °C” jako alternatywa dla mięsa, ryb, strączków i puree jest **błędna i niebezpieczna**; w 19 wariantach zastąpiłem ją szybkowarem tam, gdzie istnieje przetestowany proces, a w pozostałych dałem status nie-publikowac/ryzyko-wysokie.
3. Twarde zakazy szczebla 1: puree z warzyw, mięsa czerwonego i drobiu (SZY-014: pasztety, przeciery, kremy, hummus, kawiory); masło dyniowe i rozgnieciona dynia (SZY-015); zagęstniki, ryż, makaron, śmietana i mleko w zupach (SZY-017); grzyby dzikie (SZY-020); brokuł, kalafior i kapusta w mieszankach (SZY-022); dynia letnia bez marynowania (SZY-026); piekarnik, open kettle, mikrofalówka, zmywarka (SZY-010); wekowanie „na sucho” i dodatek tłuszczu spoza przepisu (SZY-012/013).
4. Ryby: NCHFP ma nie tylko słoiki pint. Ryby tłuste: pint/half-pint 100 min bez płynu; quart 160 min z osobną procedurą odpowietrzania (Guide 5, SZY-045). Ograniczenie „tylko pint” dotyczy ryb wędzonych (110 min) i kukurydzy kremowej (85 min). Tuńczyk wolno pakować w oleju; makreli i szprotów nie (bez płynów).
5. Dania mieszane (bigos, leczo, gołąbki, gulasz, ratatouille, paprykarz, flaczki, ryba po grecku): **brak przetestowanego procesu**. Przetestowane są tylko: zupy z ingredientów mających własny proces, bez zagęszczania (SZY-018/019), chili con carne, sos pomidorowy z mięsem i bez mięsa (bez zwiększania udziału cebuli, papryki i grzybów, SZY-028), pomidory z cukinią 3:1 (SZY-027), mieszanka warzyw (SZY-022/023), fasola w sosie pomidorowym (SZY-031).

## Sprzeczności z katalogiem v0
- „Tyndalizacja” jako metoda dla 19 wariantów (puree dyniowe, szpinak, ziemniaki, fasolka, kukurydza, szparagi, tuszonki, kurczak, kiełbasa słoikowa, grzyby): odrzucona.
- Hodowlane i dzikie grzyby w v0 są traktowane jednakowo; NCHFP dopuszcza wekowanie tylko hodowlanych (45 min, słoiki do pint).
- „Kukurydza kremowa”: przetestowana tylko wersja bez nabiału, w słoikach pint.
- v0 sugeruje słoiki z pasztetem, wątrobianką i mielonką: puree mięsne jest wprost zakazane.
- Wekowanie w piekarniku (biała kiełbasa zapiekana w słoikach): metoda niezalecana.
- Kalafior/brokuł/kapusta w solance lub sosie (v0: „wekowany”): brak procesu.

## Strony nieosiągalne / uwagi techniczne
- nchfp.uga.edu/faqs i kilka wpisów /resources/entry/ ładują treść przez JavaScript (curl dostaje pusty szablon); stary adres /how/can_01/... zwraca 404. pmc.ncbi.nlm.nih.gov zwraca stronę reCAPTCHA (użyłem pełnego tekstu z Europe PMC REST). extension.okstate.edu: 403; oc4h.ucanr.edu/…/340867.pdf: 404.
- Przed poprawką skryptu do `zrodla/indeks.tsv` trafiły puste/błędne strony (do usunięcia przez koordynatora; nie kasowałem, bo inne klastry dopisują do pliku równolegle): dd4189300e1a (404), f5b0c8de51b4 (szablon FAQ), eb61f666eea6 (pusty szablon, 2 adresy), 957fea4d36db (404), bd73a5bfe469 (403), 53b5174ce993 (reCAPTCHA PMC).
- Na pobranych stronach nie znalazłem instrukcji skierowanych do modelu.
- Propozycja do słownika: brak wartości dla „piekarnik/oven” w `preservationMethod` (użyłem `none` z wyjaśnieniem); można też rozważyć `preservationMethod` dla tyndalizacji, żeby v0 dało się mapować bez nadużywania `water-bath`.
- Konwencja: przy statusach nie-publikowac/ryzyko-wysokie `preservationMethod` opisuje metodę z v0 (zwykle `water-bath` dla „pasteryzacji/tyndalizacji”), a nie metodę zalecaną; bezpieczna alternatywa jest w `uwagi`.
