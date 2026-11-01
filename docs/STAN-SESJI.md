# Stan pracy JarAtlas

Aktualizacja: 2026-11-01, noc (sesja session_01T66VBwxWZ4JeV5CUXfpvfz). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-01-07-fix.md`).

## Rola i etap
06-tresci · build · partia 1 kart fali 1 (en, pl) · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- `cardType: warning` przy 189 wariantach ryzyko-wysokie/nie-publikowac, reguła walidatora z testem (najpierw czerwony), katalog 1.0.3 (d779d6c). Przegląd D-043 (subagent): może być scalona, bez P0/P1; uwaga P2 o wycofanych opisana w README (ae74a5a).
- Karty en+pl: cucumber-v01, white-cabbage-v01, tomato-v09, white-cabbage-v13 (karta-ostrzeżenie, SUS-035 + SZY-020). Źródło `docs/tresci/karty/`, pochodne `docs/tresci/teksty/` i `site/tresci/` przez `node tools/karty-tresci.mjs` (`--sprawdz` w teście). Slugi `site/slugi/{en,pl}.json` (02747d0).
- E3: weryfikacja zastępcza D-027 dwa przebiegi (`docs/tresci/E3-karty-p1-2026-11-01.md`): 94 zdania → 84 POPARTE, 10 CZĘŚCIOWO, poprawione; ponowna: 10 POPARTE, 2 CZĘŚCIOWO, poprawione. Przegląd zastępczy wpisany dla 28 twierdzeń krytycznych (0caf35e).
- Kontrole na 0caf35e: `npm test` 54/54, `check:granice`, `check:catalog`, `check:tresci` (bez `--przed-przegladem`), `build` — kod 0. Build: 0 stron (wszystko `ukryta`); symulacja w pamięci z odsłoniętą partią: 0 błędów, 15 stron.

## Decyzje Claude, do weta (tablica `2026-11-01-jaratlas-06-karty-p1`)
1. Format źródła kart: JSON ze znacznikami + pliki pochodne (odrzucone: usuwanie znaczników w buildzie; `.md` jako źródło).
2. `cardType` zawsze przy ryzyko-wysokie/nie-publikowac, także ukrytych (odrzucone: tylko przy publikacji).
3. Passata (tomato-v08) odłożona, w zamian sok (tomato-v09). Pominięte zdanie OSU „różowa kapusta bezpieczna” i zdanie o pasteryzacji niskotemperaturowej (ostrożnie).

## Warunki przed publikacją tych kart (rejestr, E1)
Twierdzenia o wolnej przestrzeni w słoiku (ogórki, kapusta, sok) i czasach powyżej 1000 ft; FER-047: 82 °C to 179,6 °F, czyli zaokrąglenie w stronę niebezpieczną; SZY-054: fragment „tylko według przetestowanego przepisu” bez cytatu; twierdzenie o słoikach USA pint/quart a słoikach 0,5/1 l; zbieranie kożucha przy kapuście. `przeglad.sha = e3b0c44298fc` przy nieużytych twierdzeniach to skrót pustego zbioru zdań (poprawny stan „brak użyć”).

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, podwójny błąd, P2).

## Następny krok
06-tresci build, partia 2 kart en/pl (ok-zrodlo z przeczytanym źródłem; najpierw uzupełnić twierdzenia z listy warunków), potem skrypt tłumaczeń na pozostałe języki fali 1. Narzędzie: `node tools/karty-tresci.mjs`, kontrola `npm run check:tresci`, po każdej zmianie zdań krytycznych weryfikacja zastępcza i nowy `przeglad.sha` (`--skroty`).
