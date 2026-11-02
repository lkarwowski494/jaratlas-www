# R7: szacunek zainteresowania per przepis (2026-11-02)

Rola 11-wzrost, tryb build. Zlecenie właściciela przez koordynatora: „ustalić ruch per przepis w internecie, skrypt PS z Wikimedia”.
Wyjątek nazwany (zasada 7): rola 11 w trybie build nie pisze kodu. Tu zlecenie wprost obejmuje skrypt, a pliki są wyłącznie narzędziami w `tools/ruch/` i nie dotykają strony.

## Decyzje właściciela (2026-11-02, w rozmowie R7)

- **Metoda: A + E.** „Ok A+E”. A to Google Ads Keyword Planner, czyli wyszukiwania fraz per wariant. E to Wikimedia Pageviews, czyli zainteresowanie produktem i techniką. Odrzucone: tylko E (nie mierzy przepisów), Google Trends (porównuje najwyżej 5 fraz naraz, a API jest w fazie alfa tylko na zaproszenie), Bing Webmaster (wymaga weryfikacji domeny, mały udział w rynku). Search Console zostaje na czas po publikacji.
- **Języki** przyjęte bez weta z rekomendacji agenta: Wikimedia dla 6 języków fali 1 (en, pl, fr, es, de, it), Keyword Planner dla pl i en. Zmienia się je parametrem `-Jezyki` w skrypcie i dodatkowymi plikami KP.

## Co to mierzy (uczciwość metody)

| Źródło | Mierzy | Nie mierzy |
|---|---|---|
| Keyword Planner (A) | średnią miesięczną liczbę wyszukiwań frazy w Google, np. „ogórki kiszone z koprem”, „fermented dill pickles”, w wybranym kraju i języku | ruchu na konkretnej stronie; konta bez wydatków widzą podobno tylko przedziały (np. 1K–10K) `[DO USTALENIA]`, a rzadkie frazy dostają „brak danych” |
| Wikimedia Pageviews (E) | odsłony artykułów Wikipedii (tylko ludzie, `agent=user`) w ostatnich 12 pełnych miesiącach | wyszukiwań i przepisów; artykuł o surowcu („Cucumber”) mierzy zainteresowanie warzywem, nie przetworem; wariant dziedziczy liczby z produktu i rodziny procesu, nie ma własnych |

Dlatego ranking wariantów bierze się z A, a E daje tło: popularność produktów i technik oraz porównanie rynków językowych.

## Pliki

- `tools/ruch/tytuly-zrodlowe.json`: ręczny dobór tytułów angielskiej Wikipedii dla 105 produktów i 15 rodzin procesu, plus `nadpisania` w pl tam, gdzie Wikidata dawała zły albo żaden artykuł (np. Pumpkin → „Dynia” zamiast „Dynia ozdobna”).
- `tools/ruch/mapuj-wikipedia.mjs` → `tools/ruch/mapa-wikipedia.json`: tytuł en → przekierowanie → element Wikidata → tytuły w 6 językach (sitelinks). Zawiera pole `pewnosc` (wysoka / srednia przy przekierowaniu / brak), `brakJezykow`, `reczneJezyki` i listę `doWeryfikacji`.
- `tools/ruch/Pobierz-Odslony.ps1`: pobiera odsłony i zapisuje `artykuly.csv`, `produkty.csv` i `warianty.csv`.
- `tools/ruch/frazy-wariantow.json`: fraza pl i en dla każdego z 1432 wariantów (2–6 słów, bez „przepis”). Napisali je agenci z nazwy pl i tytułu karty en.
- `tools/ruch/kp.mjs`: `eksport` przygotowuje pliki do wgrania w KP (`tools/ruch/kp/kp-{pl,en}-N.csv`, kolumna `Keyword`, najwyżej 700 fraz w pliku), a `scal` łączy eksport z KP z wariantami.
- `tests/r7-ruch.test.mjs`: pokrycie produktów i rodzin, 95% wariantów, format fraz, brak e-maili, parser KP.

## Pokrycie mapy (2026-11-02, katalog 1.0.17)

- Produkty 105/105 i rodziny 15/15 mają artykuł en. Artykułów jest 245, unikalnych par (język, tytuł) 1257.
- Artykuły z tytułem w danym języku: en 245, pl 195, fr 231, es 224, de 208, it 199.
- Do weryfikacji API: 0. Wszystkie tytuły en istnieją, a przekierowania zamieniłem na tytuły docelowe, bo Pageviews liczy tylko tytuł dokładny.
- **Do ręcznej weryfikacji przez człowieka** `[DO USTALENIA]`: dobór tematów en i tytuły pl przejrzał tylko agent. Tytuły fr/es/de/it pochodzą wprost z Wikidata i nikt ich nie przeglądał (np. es „Calabaza gigante” dla Pumpkin). Znane uproszczenia: Pickling → pl „Kiszenie” (w pl obejmuje kiszenie, nie tylko marynowanie). Ten sam artykuł bywa w dwóch produktach (Ajvar, Confit, Vinegar, Smoked fish), więc sum produktów nie dodawaj do siebie.

## Próbka (uruchomiona w kontenerze 2026-11-02)

Skryptu PowerShell nie uruchomiłem: w kontenerze nie ma pwsh, a klasyfikator uprawnień zablokował pobranie pwsh z GitHub. Logikę skryptu (ten sam adres API, kodowanie tytułu, mediana, suma, ponowienia przy 429/5xx) uruchomiłem w Node na 20 produktach × en/pl. Wynik: 68 zapytań, 0 ponowień, 16,5 s, okres 2025-11-01 do 2026-10-31. Przykłady (suma 12 miesięcy):

| Produkt | en | pl |
|---|---|---|
| napa-cabbage (Kimchi, Napa cabbage, Bok choy) | 907 601 | 92 277 |
| cucumber (Pickled cucumber, Cucumber) | 675 638 | 22 742 |
| white-cabbage (Sauerkraut, Cabbage) | 542 132 | 17 949 |
| pattypan-squash | 55 194 | 16 472 |

Artykuł „Kimchi” sam ma 450 348 odsłon en w 12 miesięcy, „Sauerkraut” 318 053, „Pickled cucumber” 363 538. Przy ręcznych sprawdzeniach tytułów API en.wikipedia raz odmówiło z powodu zbyt wielu zapytań. Pageviews w próbce nie odmówiło ani razu, ale skrypt i tak ma przerwę 150 ms i ponowienia z wykładniczym odstępem.

## Jak uruchomić (właściciel)

**E: Wikimedia** (Windows PowerShell 5.1 albo PowerShell 7). W katalogu repo:

```powershell
# próbka: 5 produktów, en i pl (ok. 1 min)
powershell -ExecutionPolicy Bypass -File tools\ruch\Pobierz-Odslony.ps1 -Kontakt "<Twój e-mail lub strona>" -Jezyki en,pl -Limit 5
# pełny przebieg: 105 produktów, 6 języków, ok. 1257 zapytań, szacunek 5–15 min
powershell -ExecutionPolicy Bypass -File tools\ruch\Pobierz-Odslony.ps1 -Kontakt "<Twój e-mail lub strona>"
```

- `-Kontakt` jest wymagany przez politykę User-Agent Wikimedia. Trafia tylko do nagłówka zapytań, nie do plików.
- Wynik zapisuje się w `Dokumenty\jaratlas-ruch\` (poza repo). Pobrane odpowiedzi trafiają do `cache-…`, więc po przerwaniu ponowne uruchomienie dociąga tylko brakujące.
- Okres to domyślnie 12 ostatnich pełnych miesięcy. Można go zmienić, np. `-Od 20250101 -Do 20251231`.

**A: Keyword Planner** (około 1–2 h Twojej pracy, w tym konto):

1. Google Ads → Narzędzia → Planer słów kluczowych → „Sprawdź liczbę wyszukiwań i prognozy”. Konto wymaga podania danych rozliczeniowych (strona pomocy Google), ale do korzystania z planera nie trzeba uruchamiać kampanii.
2. Wgraj `tools/ruch/kp/kp-pl-1.csv`, `-2`, `-3` z lokalizacją Polska i językiem polskim. Pobierz wynik każdego pliku: „Pobierz słowa kluczowe” w formacie CSV.
3. To samo zrób z `kp-en-*.csv` dla lokalizacji USA i Wielka Brytania (albo innej, którą wybierzesz) i języka angielskiego.
4. Scal wyniki: `node tools/ruch/kp.mjs scal --jezyk pl <pobrany1.csv> <pobrany2.csv> <pobrany3.csv>` i tak samo dla `--jezyk en`. Wynik trafia do `~/jaratlas-ruch/kp-pl.csv`. Na ekranie pojawia się 15 produktów z najwyższą sumą.
5. Opcjonalnie: `node tools/ruch/kp.mjs eksport --z-przepisem` dopisuje do każdej frazy wariant z „przepis”/„recipe” (dwa razy więcej fraz).

Niepotwierdzone `[DO USTALENIA]`: limit fraz w jednym pliku (na forach podają 800, tu dzielę po 700), nagłówki kolumn eksportu w polskim interfejsie (parser rozpoznaje „Keyword”/„Słowo kluczowe” i „Avg. monthly searches”/„Średnia liczba wyszukiwań”) oraz to, czy konto bez wydatków pokazuje przedziały. Jeśli `scal` zgłosi brak nagłówka, prześlij agentowi pierwsze 5 wierszy eksportu.

## Jak czytać wynik

- `kp-*.csv`: `min`/`max` to przedział z KP, a `srodek` to średnia geometryczna min i max, używana tylko do sortowania. Przy przedziałach różnice w obrębie jednego przedziału nic nie znaczą. Status „brak danych KP” oznacza, że Google nie podaje wartości (zwykle bardzo rzadka fraza). „Brak w eksporcie” oznacza, że frazy nie było w wgranym pliku.
- `produkty.csv` (Wikimedia): suma odsłon artykułów produktu i mediana miesięczna. Porównuj w obrębie jednego języka. Między językami różni się wielkość Wikipedii.
- `warianty.csv` (Wikimedia): liczby wariantu to liczby jego produktu i rodziny (`poziom` = dziedziczone), nie własny ruch.
- Kolejność prac: najpierw warianty z najwyższym KP, a potem produkty z wysoką Wikimedią przy niskim KP, bo fraza może być źle dobrana.

## Źródła (odczyt 2026-11-02)

- Wikimedia REST API, per-article pageviews: `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Sauerkraut/monthly/20251001/20260930` (odpowiedź z `items[].views`, sprawdzona curl).
- Polityka User-Agent Wikimedia: https://meta.wikimedia.org/wiki/User-Agent_policy (wymaga danych kontaktowych w nagłówku; treść polityki nieodczytana dziś, `[DO USTALENIA]`).
- Keyword Planner: https://support.google.com/google-ads/answer/7337243 (dane rozliczeniowe wymagane do konfiguracji konta; CSV z jedną kolumną „Keyword”).
- Google Trends API (alfa): https://developers.google.com/search/blog/2025/07/trends-api („available only to a very limited number of testers”).
