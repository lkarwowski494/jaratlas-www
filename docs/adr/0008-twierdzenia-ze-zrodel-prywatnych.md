---
status: proponowana (2026-11-02, tablica `2026-11-02-jaratlas-r1-rejestr-prywatny`; decyzja Claude, do weta właściciela)
data: 2026-11-02
decyduje: właściciel (zasada: kupionego źródła nie podajemy publicznie, decyzja `2026-11-02-jaratlas-zrodla-prywatne`); model danych i kontrole: rola 05/06 (decyzja Claude, do weta)
---
# 0008. Twierdzenia ze źródeł prywatnych (kupionych)
## Kontekst i problem
Właściciel kupił publikację z testowanymi przepisami i trzyma jej tekst w prywatnym repo `lkarwowski494/prywatne`. Zasady właściciela (2026-11-02): wiedzę z kupionych źródeł opisujemy własnymi słowami, nie cytujemy; źródła kupionego nie podajemy nigdzie publicznie: ani na stronie, ani w publicznym repo `jaratlas-www` (nazwa, wydawca, tytuł, wydanie, numery stron, cytaty — także w commitach, testach i raportach). Zakres: tylko źródła kupione; źródła publiczne (NCHFP, extension) zostają jak dziś.

Dzisiejszy rejestr (`docs/tresci/rejestr.json`) wymaga przy każdym źródle twierdzenia potwierdzonego adresu, cytatu lub miejsca, daty odczytu i szczebla (`tools/kontrole-tresci.mjs`, `sprawdzRejestr`). Źródło kupione nie może spełnić tej reguły bez ujawnienia. CI (GitHub Actions w repo publicznym) nie ma dostępu do repo prywatnego.

## Czynniki decyzji
- Repo publiczne czyta każdy; historia git jest trwała (usunięcie nazwy z pliku nie usuwa jej z historii) — wyciek jest nieodwracalny, więc ocena: realny, priorytet.
- Hierarchia źródeł (`2026-11-01-jaratlas-hierarchia-zrodel`): liczby, granice i oceny bezpieczeństwa tylko ze szczebla 1–3; przy sprzeczności z NCHFP wygrywa NCHFP (`2026-11-02-jaratlas-zrodla-prywatne`).
- Przegląd D-027 d robi niezależny agent Claude (`2026-11-02-jaratlas-przeglad-agent-zamiast-eksperta`); musi móc sprawdzić twierdzenie u źródła, więc zapis weryfikacji jest potrzebny — tylko nie publicznie.
- Analogia w repo Trening: brak (Trening 09.10.2026 wybrał darmowe źródła zamiast płatnych, `docs/18-archiwum-do-11.10.md:259`; rejestru prywatnego nie ma). Stąd decyzja Claude, do weta.

## Rozważane opcje
### A. Gdzie oznaczyć prywatność
- **A1. Prefiks ID twierdzenia `PRV-`** (całe twierdzenie prywatne). Plus: widać na pierwszy rzut oka. Minus: twierdzenie traci klaster (`FER-`, `SLO-`…), na którym opierają się listy `WSPOLNE` i kontrola metod (`tools/twierdzenia-metody.mjs`); nie da się w jednym twierdzeniu połączyć źródła publicznego i prywatnego (np. NCHFP + potwierdzenie z kupionego przepisu); zmiana źródła = zmiana ID w kartach.
- **A2. Źródło z typem `prywatne` w tablicy `zrodla`** (wybór). ID twierdzenia bez zmian; jedno twierdzenie może mieć źródła publiczne i prywatne; reguły rejestru działają per źródło. Minus: prywatność widać dopiero w polu źródła (łagodzi to stały kształt `ref: PRV-0000`).

### B. Dowód spójności z rejestrem prywatnym
- **B1. Brak skrótu.** Zero informacji publicznie. Minus: nikt nie zauważy, że rekord prywatny zmieniono albo pomylono `ref` (np. po przenumerowaniu).
- **B2. Skrót sha256 rekordu prywatnego bez soli.** Wykrywa rozjazd. Minus: rekord ma małą entropię (tytuł z krótkiej listy znanych książek × numery stron), więc ktoś, kto zgaduje źródło, może potwierdzić zgadnięcie, licząc skróty kandydatów — to ujawnienie.
- **B3. Skrót z solą 128 bit trzymaną tylko w rekordzie prywatnym** (wybór). Wykrywa rozjazd jak B2; bez soli zgadywanie nic nie daje. Koszt: pole `sol` w każdym rekordzie i przeliczenie skrótu przy zmianie pól tożsamości.

### C. Jak karta mówi o pochodzeniu
- **C1. Nic o pochodzeniu prywatnym.** Najprostsze, zgodne z zasadą właściciela dosłownie. Minus: karta oparta głównie na kupionym przepisie wygląda na mniej udokumentowaną niż jest.
- **C2. Ogólna formuła bez nazwy** (np. „parametry z testowanego przepisu wydawniczego, sprawdzone z wytycznymi publicznymi”), tylko gdy karta używa twierdzenia ze źródłem prywatnym. Plus: uczciwość wobec czytelnika. Minus: tekst interfejsu = system roli 04; ryzyko, że formuła zawęzi krąg zgadywania.
- Rekomendacja: **C1 teraz, C2 do decyzji właściciela/roli 04**. Uwaga D-027 (c) zostaje bez zmian na każdej karcie (`site/szablony.mjs`, `[data-uwaga="D-027c"]`). Źródła publiczne nadal na liście źródeł karty.

## Decyzja (proponowana)
A2 + B3 + C1. Szczebel źródła prywatnego ustala się i zapisuje w repo prywatnym; publiczny wpis niesie tylko jego numer (sama liczba nie identyfikuje źródła), a kontrola lokalna sprawdza zgodność.

### Model danych
Rejestr publiczny `docs/tresci/rejestr.json`, element `zrodla[]` (dokładnie te pola, inne = błąd):
```json
{ "typ": "prywatne", "ref": "PRV-0001", "szczebel": 2, "odczyt": "2026-11-03",
  "weryfikacja": "odczyt pliku + grep (repo prywatne)", "skrot": "<12 hex>" }
```
Szczebel źródła prywatnego 2–5 (szczebel 1 = urzędowe; CI nie zweryfikuje deklaracji). `weryfikacja` z zamkniętej listy (`WERYFIKACJE` w `tools/zrodla-prywatne.mjs`), bo wolny tekst mógłby nieść nazwę. Każde `typ` inne niż brak albo `publiczne` i każdy `ref` zaczynający się od `prv` (dowolna wielkość liter) jest traktowany jako prywatny.
Bez `adres`, `cytat`, `miejsce`. Treść `twierdzenie`/`twierdzenie_en` własnymi słowami, bez nazwy źródła (dziś wiele twierdzeń zaczyna się od nazwy instytucji — przy źródle prywatnym nie wolno). Pozostałe pola twierdzenia (`krytyczne`, `przeglad`, `wartosc`, `wielkosc`…) jak dotąd.

Repo prywatne, plik `jaratlas/rejestr-prywatny.json`:
```json
{ "zrodla": { "ZP-01": { "tytul": "…", "wydanie": "…", "wydawca": "…", "plik": "…" } },
  "wpisy": { "PRV-0001": { "zrodlo": "ZP-01", "miejsce": "plik:Lx-Ly / s. N", "cytatWeryfikacji": "krótki fragment",
                           "sol": "<32 hex>", "szczebel": 2, "twierdzenie": "ID w rejestrze publicznym",
                           "przegladD027d": { "kto": "…", "data": "…", "wynik": "…" }, "notatka": "…" } } }
```
Skrót = pierwsze 12 hex z sha256 kanonicznego JSON pól `zrodlo, miejsce, cytatWeryfikacji, sol, szczebel` (klucze posortowane; `tools/zrodla-prywatne.mjs`, `skrotRekordu`). Notatki i przegląd nie zmieniają skrótu. Plik `jaratlas/zakazane-nazwy.json` (`{ "nazwy": [...] }`): tytuły, wydawcy, marki, autorzy, numery ISBN do wyszukiwania.

### Kontrole
- **CI (strukturalna, `npm run check`)**: przy każdym statusie twierdzenia (także roboczym) `sprawdzRejestr` przyjmuje źródło prywatne bez adresu i cytatu, ale wymaga `ref` (`PRV-0000`), szczebla 2–5, daty odczytu, metody weryfikacji z listy i skrótu 12 hex; każde inne pole (np. `adres`, `cytat`, `tytul`) = błąd. Liczba krytyczna nadal wymaga źródła szczebla 1–3 (prywatne się liczy). `validate-catalog` zgłasza błąd, gdy źródło prywatne albo źródło bez adresu trafi do `sources` wariantu (renderowane na karcie przez `site/szablony.mjs`).
- **Lokalna (sesja z dostępem do repo prywatnego)**: `node tools/zrodla-prywatne.mjs --prywatne <klon repo prywatnego>` — (1) zakazane nazwy w plikach z indeksu git (nie z dysku; plik binarny = błąd), w nazwach plików, w dodanych liniach, wiadomościach i autorach commitów wszystkich referencji po `bazaHistorii` oraz w nazwach gałęzi i tagów, po normalizacji (wielkość liter, znaki diakrytyczne, odstępy, łączniki, całe słowa); (2) każdy `ref` ma rekord prywatny wskazujący to samo twierdzenie, z solą 32 hex, wszystkimi polami skrótu, tym samym szczeblem i skrótem. Nazwy porównywane także w postaci sklejonej (domeny, ISBN bez łączników) dla nazw od 8 znaków; ligatury (ø, æ, ß…) rozkładane. Raport podaje numer nazwy z listy, nigdy nazwę. Stan zastany: przed tym ADR część tytułów, które teraz są na liście, trafiła do repo publicznego jako nazwy z cytatów publicznych ulotek extension (wskazują publikację jako źródło przedruku; pomiar 2026-11-02: 43 pary plik–nazwa, `docs/tresci/R1-rejestr-prywatny-2026-11-02.md`). Te wystąpienia są w historii git i nie mówią, że projekt ma publikację; kontrola przepuszcza je przez `jaratlas/wyjatki-nazw.json` w repo prywatnym (plik → numer nazwy → dozwolona liczba wystąpień), a łapie każde nowe wystąpienie. Bez repo prywatnego albo rejestru publicznego kod 2 (żaden cichy sukces). Obowiązkowa przed każdym pushem, który dotyka twierdzeń ze źródłem prywatnym, i przed publikacją.
- Granica (nazwana, zasada 7): CI nie widzi listy nazw, więc wyciek w tekście wolnym (twierdzenie, raport, commit) łapie tylko kontrola lokalna; kontrola zastępcza tańsza niż żadna: whitelista pól źródła prywatnego w CI. Nie łapie parafrazy zbyt bliskiej oryginałowi (ocena prawna parafrazy otwarta w decyzji właściciela).

### Konsekwencje
- Dobre: twierdzenia z kupionych przepisów przechodzą przez te same reguły (szczebel, przegląd D-027 d, wartości) bez ujawnienia źródła; rozjazd rekordów wykrywalny.
- Złe: kontrola nazw tylko lokalna; wariant oparty wyłącznie na przepisie prywatnym nie może dziś mieć `ok-zrodlo` (katalog wymaga przepisu z adresem szczebla 1–3) — do osobnej decyzji (`[DO USTALENIA]`).
- Od czego zależy: decyzja właściciela `2026-11-02-jaratlas-zrodla-prywatne`; przy zmianie zakresu (np. ukrywanie innych źródeł) ADR do przeglądu.

### Potwierdzenie
Testy `tests/r1-zrodla-prywatne.test.mjs` (17, w tym 6 z poprawek przeglądu D-043): wpis prywatny przechodzi bez adresu, brak pól = błąd, pole spoza whitelisty = błąd, regresja źródła publicznego, szczebel liczby krytycznej, skrót (kolejność kluczy, sól, notatki), normalizacja nazw, spójność, katalog bez źródeł prywatnych, kontrola lokalna (plik, commit, brak repo = kod 2, raport bez nazwy), wyjątki bazowe (stan zastany przechodzi, nowe wystąpienie w tym samym pliku = błąd).
