# Kosztorys przekładu kart i slugów en → fr, es, de, it (2026-11-02)

**Nic nie wysłano, nic nie zapłacono.** Liczba to **szacunek**, nie pomiar: `node tools/i18n/przeklad-api.mjs` (albo `npm run przeklad:szacuj`), bez sieci i bez klucza API.
Rola 09-lokalizacja, tryb build (noc, decyzje „do weta”). Wzór (analogia pełna, D-052): repo trening, `docs/lokalizacja/kosztorys-przekladu-2026-10-23.md`.

## Zakres
- Źródło: 8 kart partii 1–2 (`docs/tresci/karty/en/warianty/*.json`, ze znacznikami `[T:ID]`) = 197 segmentów (tytuł, wstęp, ostrzeżenia, nagłówki, akapity) + 14 slugów (`site/slugi/en.json`) = **211 segmentów**.
- Karta pl idzie do żądania jako drugi tekst odniesienia (ten sam sens innymi słowami, gotowy wzór dla „pint”, „quart”, ułamków).
- Języki: fr, es, de, it (fala 1 bez en i pl). Jedno żądanie na język w jednym Message Batch.

## Cennik i model (odczyt u źródła 2026-11-01)
- Model: **Claude Opus 5.5** (`claude-opus-5-5`). platform.claude.com/docs/en/models/overview.md: „If you're unsure which model to use, start with Claude Opus 5.5 for most workloads.” Tańsza opcja: Sonnet 5.5; droższa: Fable 5.1 (najwyższe możliwości).
- platform.claude.com/docs/en/about-claude/pricing.md, „Batch processing”: „The Batch API allows asynchronous processing of large volumes of requests with a 50 percent discount on both input and output tokens.” Batch: Opus 5.5 2 / 10 USD za mln tokenów (wejście / wyjście), Sonnet 5.5 1 / 5, Fable 5.1 5 / 25.
- platform.claude.com/docs/en/build-with-claude/token-counting.md: „Token counting is free to use”. Workflow z kluczem liczy wejście dokładnie (`count_tokens`) jeszcze przed decyzją o wysyłce.
- Batch: „most batches completing within 1 hour … Batches expire if processing does not complete within 24 hours” (batch-processing.md). Skrypt czeka do 120 min, potem kod 4 i odbiór przez `--wznow msgbatch_…`.

## Założenia szacunku (zawyżone celowo)
- Wejście: instrukcja + 211 pozycji JSON (id, en, pl) ≈ 18,75 tys. tokenów na język. Przybliżenie: łacinka ~2,8 znaku na token, czyli więcej tokenów niż zwykle w tekście angielskim (zapas na tokenizer Opus 4.7+).
- Wyjście: tokeny en × 1,25 (fr, es, it) albo 1,35 (de) + identyfikator i obwiednia JSON na segment + **8000 tokenów myślenia na język** (effort medium).

## Wynik

| Wariant | Języki × segmenty | Tokeny wejścia | Tokeny wyjścia | Opus 5.5, Batch | Sonnet 5.5, Batch | Fable 5.1, Batch |
|---|---|---|---|---|---|---|
| **Podstawowy** (myślenie 8 tys. na język) | 4 × 211 | 75 006 | 86 652 | **ok. 1,02 USD** | ok. 0,51 USD | ok. 2,54 USD |
| Ostrożny (myślenie 20 tys. na język) | 4 × 211 | 75 006 | 134 652 | ok. 1,50 USD | ok. 0,75 USD | ok. 3,74 USD |
| Bez rabatu Batch (podstawowy) | 4 × 211 | 75 006 | 86 652 | ok. 2,03 USD | ok. 1,02 USD | ok. 5,08 USD |
| Przebieg dowodowy: tylko fr | 1 × 211 | 18 751 | 21 493 | ok. 0,25 USD | ok. 0,13 USD | ok. 0,63 USD |

Wiersze na język (podstawowy): fr 18 751 / 21 493, es 18 754 / 21 493, de 18 751 / 22 173, it 18 750 / 21 493 (wejście / wyjście).
Ponowny przekład odrzuconych zdań i drugi przegląd AI w świeżym kontekście (moduł `tlumaczenie`) to osobne koszty tego samego rzędu.

## Limit kosztu i bezpieczniki
- `LIMIT_KOSZTU_USD = 2` na przebieg (decyzja Claude, do weta). Limit sprawdza **najgorszy przypadek**: wejście + `max_tokens` (32 000) × liczba języków = Opus 5.5 ok. 1,43 USD za 4 języki (szacunek 1,02 USD); Fable 5.1 (ok. 3,6 USD) staje bez `--zgoda-koszt`. Powyżej limitu: kod 3 bez wysyłki.
- Domyślnie **tylko szacunek**; płatny batch wyłącznie z `--wyslij` (w workflow: `tylko_szacuj = false`). Bez klucza przebieg płatny jest niemożliwy (kod 2).
- Każde zdanie przechodzi kontrolę niezmienników (`tools/i18n/niezmienniki.mjs`): znaczniki `[T:ID]` znak w znak i w kolejności; wartości liczb (z minusem i ułamkami, przecinek dziesiętny, bez separatora tysięcy, bo „1.000” po niemiecku to tysiąc); symbole °F, °C, ml, l, cm, m, %, pH; jednostki słowne (minuty, godziny, cale, stopy, szklanki, łyżki, funty, galony, metry; „pint” i „quart” zostają, bo „pinte” to ≈ 568 ml); nazwy własne. Liczby są też wiązane z jednostką, która po nich stoi („10 minut … 12 godzin” ↔ „10 godzin … 12 minut” to odrzut), w tym dni, tygodnie, miesiące i lata. Niezgodne zdanie trafia do „odrzucone” z powodem; liczby w innej kolejności niż w źródle dają uwagę dla recenzenta w raporcie.
- Kalibracja na prawdziwych danych (`tests/przeklad.test.mjs`): wszystkie 8 kart pl przechodzą kontrolę względem en (0 problemów); ponad 300 mutacji kart pl (każda liczba +1, °F↔°C, usunięty znacznik) jest wykrywanych w 100%. Pierwsza kalibracja znalazła 9 luk kontroli (polska odmiana „pinta/kwarta”, „half-pint” = „1/2 pinty”), nie błędy treści.
- Wynik ma status **„do przeglądu”**; `--zastosuj` zapisuje tylko kompletne karty o niezmienionym źródle do `docs/tresci/przeklady/<język>/`, nigdy do `docs/tresci/karty/` ani `site/`. Karty w katalogu zostają `publication: ukryta`.

## Przegląd w świeżym kontekście (D-043, 2026-11-02) i znane granice
Recenzent (subagent, bez notatek autora) znalazł luki, które poprawiono testem przed kodem: zamiana wartości między jednostkami (6000 ft/1800 m, °F/°C, minuty/godziny), brak dni/tygodni/miesięcy, „half-pints” → „1/2 quarts”, limit liczony tylko od szacunku, nadpisywanie przejrzanych plików przez `--zastosuj`, `--wznow` przy „tylko szacunek”, `results_url` spoza api.anthropic.com, `--wyjscie` w katalogach źródłowych.
Granice kontroli mechanicznej (zostają dla drugiego przeglądu AI i człowieka): odwrócony kierunek porównania („powyżej” → „poniżej”, „co najmniej” → „najwyżej”); zdania zamienione miejscami pod tymi samymi znacznikami; zamiana czasów pint/quart przy tych samych jednostkach (tylko uwaga w raporcie); akcje w workflow przypięte do tagów, nie SHA (jak w `kontrole.yml` i wzorze).

## Kroki właściciela (nic z tego nie zostało zrobione)
1. Zgoda na kwotę (np. przebieg dowodowy fr ok. 0,25 USD, potem 4 języki ok. 1 USD) i na model.
2. Sekret środowiska `ANTHROPIC_API_KEY` w ustawieniach repozytorium (nigdy w plikach).
3. Plik workflow na gałęzi domyślnej (push na main za zgodą), uruchomienie „Use workflow from” z tej gałęzi; najpierw z `tylko_szacuj = true` (dokładny szacunek przez count_tokens).

## Otwarte
- Forma zwracania się w przepisach (fr „vous”, de „Sie” albo bezokolicznik, es, it): rola 04 `[DO USTALENIA]`; do tego czasu żądanie prosi o formę zwykłą w przepisach danego języka.
- Przegląd człowieka znającego język dla treści krytycznej (zasada roli 3, kontrola (a) przy polityce „szerokiej”) przed publikacją któregokolwiek języka.
- Format liczb: przekład używa przecinka dziesiętnego; brzmienie jednostek US (cup, quart) w fr/es/de/it do przeglądu roli 06 (glosariusz).
