# Wznowienie prac JarAtlas

Prace WSTRZYMANE 2026-11-02 ok. 14:45 UTC decyzją właściciela (tablica `2026-11-02-jaratlas-wstrzymanie-prac`). Ten dokument pozwala wznowić je w dowolnym terminie. Przeczytaj go w całości przed otwarciem pierwszej sesji.

## 1. Stan w chwili wstrzymania (sprawdzony)

| Co | Wartość | Dowód |
|---|---|---|
| Gałąź główna `claude/happy-brown-yncplj` | commit z tym dokumentem (rodzic `ad67930` = B33) | `git ls-remote` |
| `main` | `4e3dcaa` (bez zmian; przesuwa się tylko za zgodą właściciela w rozmowie) | `git ls-remote` |
| Kontrole | `npm run check` kod 0, testy 360/360 | uruchomione przez koordynatora 9 na `ad67930` |
| Katalog | 1.0.20, 1432 warianty, wszystkie `publication: ukryta` | `catalog/catalog-seed.json` |
| Statusy | ok-zrodlo 322, ryzyko-wysokie 200, nie-publikowac 185, do-researchu 725 | skrypt po `safetyStatus` |
| Karty | en 692 warianty (pełne 318, ostrzeżenia 374), pl 211 | `docs/tresci/karty/{en,pl}/warianty/` |
| Bez karty en | 740: do-researchu 725 + 15 (lista w Z2) | skrypt: katalog minus pliki kart |
| Rejestr twierdzeń | 2089 ID (B33: +12, usunięte 0) | `docs/tresci/rejestr.json` |
| Opublikowane strony | 0; dane użytkowników: brak | — |
| Sesje aktywne | brak (B33 i koordynator 8 zarchiwizowani); czuwanie wyłączone | `list_triggers`, `get_session` |

## 2. Jak wznowić (instrukcja startu koordynatora)

1. Właściciel otwiera nową sesję Claude Code na `lkarwowski494/jaratlas-www`, gałąź `claude/happy-brown-yncplj`, i wkleja: „Jesteś koordynatorem JarAtlas. ToolSearch select:ArtifactData; ArtifactData get url https://claude.ai/artifact/2m3gT4XfaeuMfT5EGqeT1i, collection prompty, doc_id koordynator-jaratlas (pole tekst, najpierw wpis WSTRZYMANE). Potem przeczytaj docs/WZNOWIENIE.md i zaproponuj pierwsze zadanie.”
2. Koordynator: dopisuje swoje id na początku tekstu koordynatora (str_replace z `if_version`), klonuje kopię roboczą (`git clone --depth 120 -b claude/happy-brown-yncplj https://github.com/lkarwowski494/jaratlas-www www`), uruchamia `npm run check` (oczekiwane: kod 0, 360/360).
3. Czuwanie: `update_trigger trig_01MQfd8BvdKPEQSE1f2Nw24g enabled=true` działa tylko, gdy ta sama sesja koordynatora 9 wraca; `update_trigger` NIE zmienia `persistent_session_id`. Nowy koordynator tworzy nowe zadanie (`create_trigger`, ten sam prompt, `CRON_TZ=Europe/Warsaw 41 7-20 * * *`, `persistent_session_id` = jego id) i usuwa stare.
4. Przegląda z właścicielem decyzje do weta (§4) — przynajmniej te, od których zależy pierwsze zadanie.
5. Otwiera sesje według §3, jedną na tor; procedura sprawdzania przekazania: wpis „WZÓR SPRAWDZANIA PRZEKAZANIA” w tekście koordynatora (fetch, diff --stat, ścieżki wrażliwe, porównanie wariantów po id, zbiór ID rejestru, grep na nazwy wydawców/ISBN, `npm run check`, push tylko fast-forward).

Zasady bez zmian: D-051 (sesje do ok. 35% kontekstu, od 30% zapis stanu), D-052 (analogia z repo `trening`), D-043 (przegląd ścieżek wrażliwych w świeżym kontekście), D-027 d (weryfikacja zastępcza: agent Opus, effort medium, świeży kontekst). Prompty ról: tablica, kolekcja `prompty` (06, 07, 08, 09, 10, 11 na `d32b4b8`); brakujące role (04) składa koordynator z prywatnego repo `prompts` (`node tools/assemble.mjs <rola> --tryb <tryb>`) i zapisuje do kolekcji.

## 3. Plan kolejnych zadań (w kolejności)

Szacunki czasu to czas agenta, zgrubne, z tempa sesji B19–B33 (otwarte, niesprawdzone). Zakresy ID: nowe ID w prefiksie ciągną numerację od maksimum w rejestrze (B33-D5); koordynator podaje sesji wolny zakres przed startem.

### Z0. ZMIANA ZASAD — model „strona grupy + lista wariantów” (PIERWSZE ZADANIE; decyzja właściciela `2026-11-02-jaratlas-model-grup`, 2026-11-02 ~21:37 UTC)
Zmienia kolejność i zakres Z1–Z8: najpierw zasady, potem research z tekstów repo `lkarwowski494/prywatne`, potem dopracowanie kart.
- **Model strony:** dla każdej grupy (rodzina procesu × metoda) jedna strona: ważne procesy bezpieczeństwa ze źródeł szczebla 1–3 + lista wariantów, które je spełniają + krótka sekcja „Tego nie rób w domu” (popularne groźne warianty, jedno zdanie z powodem, z istniejących kart-ostrzeżeń). Zastępuje „pełna karta albo karta-ostrzeżenie dla każdego wariantu” (część `wydanie-pl-en`).
- **Kwalifikacja wariantu:** grupy, w których bezpieczeństwo wynika ze składu i przechowywania (kiszonki, marynaty w lodówce, napoje fermentowane, jogurt/kefir, ocet): wariant na liście, gdy skład (dowolny znany przepis, własnymi słowami) spełnia liczby zasad grupy; najostrożniejsza wartość przy rozbieżności; niespełniający odpada. Wekowanie (kąpiel, szybkowar): zasadą grupy zostaje czas z testowanego przepisu szczebla 1–3. Zamiast pomiaru pH znaki ostrzegawcze ze źródeł — **otwarte, do potwierdzenia przez badacza**.
- **Źródła z repo `prywatne`:** seria BCCDC „Safety of Fermented Foods” (publiczna, szczebel 1, cytowana z adresem bccdc.ca; rozdz. 3.1–3.14 — dotyczy ok. 250 wariantów do-researchu) oraz kupiona książka z testowanymi przepisami (szczebel 3, tylko własne słowa, bez nazwy publicznie; ADR 0008 — szczegóły nadal do weta). Dopasowanie indeksu tytułów książki (2026-11-02, poza repo publicznym): +5 pewnych, +34 możliwych ponad indeks P1.
- **Do zrobienia w Z0:** (a) dokumenty: `catalog/README.md` (definicja statusów, w tym nowy status/kryterium „spełnia zasady grupy”), ADR nowego modelu (05), zasada w CLAUDE.md; (b) model danych grup (`processFamilies[].thresholds` już istnieje — rozszerzyć o zasady grupy i `doNotDo`), walidator, `site/plan.mjs`, `site/szablony.mjs` (ścieżki wrażliwe, D-043); (c) testy przed kodem; (d) dopiero potem research grup z tekstów `prywatne` i kwalifikacja wariantów (dawne Z5/Z6), na końcu karty (dawne Z2/Z7).
- **Uwagi z researchu literatury 2026-11-02 (do rejestru):** ISS Linee guida 2016 s. 100 — ok. 500 g soli na 1,5 kg kapusty (~33%), prawdopodobnie błąd, nie przenosić; AESAN „Conservas caseras” — nie jako źródło liczb (czasy bez przepisu, pH ≤ 4,5, odwracanie słoików). Nowe źródła spoza rejestru (EFSA 2024 pasożyty w rybach, EFSA 2017 azotyny, FSAI GN 43, IBPRS-PIB ogórki/kapusta 2024 i peklowanie 2025, WA DoH, K-State MF3672 i inne) — lista u właściciela; kopia robocza do przeniesienia do `docs/tresci/` przy wznowieniu.

### Z1. Porcja katalogowa z werdyktów B33 (tor B)
- Cel: wprowadzić do katalogu propozycje `docs/tresci/B33-research-2026-11-02.json` (requiredWarnings i claims 7 wariantów B29 i pozycji z listy B32; SZY-017 → SZY-080 + SZY-083 przy daniach niebędących zupą); katalog 1.0.21; dopasować karty en wariantów ze zmienionymi requiredWarnings.
- Rola i tryb: 06-tresci build; prompt `prompty/06-tresci-build-d32b4b8`.
- Wejście: raport B33 (.md, .json), `catalog/catalog-seed.json`, `docs/tresci/rejestr.json`, karty en dotkniętych wariantów.
- Zakres ID: zwykle bez nowych; jeśli potrzebne — od maksimum prefiksu.
- Zrobione gdy: walidator i `npm run check` kod 0; skrypt po id pokazuje tylko zamierzone zmiany; `publication` 0 zmian; D-043 (catalog-seed.json jest ścieżką wrażliwą) bez P0/P1; decyzje do weta na tablicy.
- Ryzyka: SZY-017 jest w requiredWarnings 13 wariantów (11 dań niebędących zupą wymienionych w raporcie B33 §B.1 + 2 zupy bez zmian); wiadomość przekazania B33 podała omyłkowo „dziesięć” — źródłem jest raport, sesja i tak liczy z katalogu. Najpierw weto B33-D1..D6 (§4).
- Czas: ok. 1 sesja.

### Z2. Karty en dla 15 wariantów bez karty (tor A)
- Cel: każdy wariant spoza do-researchu ma kartę en (pełny katalog).
- Lista: nie-publikowac `vine-leaves-greens-v09` (karta-ostrzeżenie, SLO-880); ok-zrodlo `apple-v01`, `mirabelle-v06`, `mirabelle-v07`, `game-lamb-v06`; ryzyko-wysokie `zucchini-v13`, `bell-pepper-v18`, `horseradish-v08`, `horseradish-v09`, `pear-v14`, `plum-v18`, `cultivated-mushrooms-v06`, `kefir-cream-v03`, `sea-fish-v08`, `eggs-v10`.
- Rola: 06-tresci build, partia toru A wprost na gałęzi głównej. Wejście: E3-karty-p37 §5, E3-karty-p38 §5, B32 (powody braku kart), rejestr.
- Zrobione gdy: 15 kart lub nazwany powód pominięcia każdej; D-027 d bez P0/P1; `npm run check` kod 0.
- Ryzyka: część mogła czekać na decyzję katalogową — sprawdzić przed pisaniem, nie zgadywać.
- Czas: ok. 1 sesja (można połączyć z Z1 po jej scaleniu).

### Z3. Reguła walidatora: requiredWarnings ⊆ claims (decyzja właściciela)
- Problem (B32 raport, P2-2): 51 wariantów ma ostrzeżenia spoza listy twierdzeń; walidator tego nie sprawdza. Realność: brzegowy (spójność danych, nie treść na stronie), ale dotyczy kart-ostrzeżeń.
- Opcje: (A) sama naprawa danych 51 wariantów w porcji katalogowej, bez reguły — tanio, problem może wrócić; (B) reguła w `tools/validate-catalog.mjs` + naprawa 51 wariantów, testy czerwone przed kodem, przegląd D-043 — trwałe, ok. 1 sesja. Rekomendacja koordynatora 8 i 9: B.
- Rola: 07-jakosc fix albo 08-programista build (prompty w kolekcji).

### Z4. Teksty interfejsu powodu ostrzeżenia (rola 04)
- Cel: tekst klucza `ui.powodyOstrzezenia` (C13-D3) en/pl; bez niego pole `warningReason` jest nieużywalne (brak tekstu = błąd buildu). Wtedy wpisać `warningReason: brak-sprawdzonego-zrodla` wariantom nie-publikowac z tego powodu.
- Rola: 04 (system wyglądu i tekstów; prompt złożyć z repo `prompts`). Otwarte także: tekst uwagi D-027 (c), standard marki.
- Zrobione gdy: teksty w systemie 04, build kod 0, test na kluczu.

### Z5. Research 725 wariantów do-researchu (największa praca, tory C i B)
- Rozkład metod: refrigerator 409, water-bath 130, cool-storage 50, dry-storage 46, bez metody 40, low-temp-pasteurization 25, none 12, pressure-canning 10, freezer 3.
- Kolejność wg decyzji `2026-11-02-jaratlas-pokrycie-zrodel`: (4) szybkie domknięcie wysokiego ryzyka („R6”, ok. 410 wariantów): tam, gdzie E1 znalazł 0 przepisów, E1 liczy się jako przebieg 1, drugi przebieg celowany, brak źródła → nie-publikowac z kartą-ostrzeżeniem (`2026-11-02-jaratlas-wariant-bez-zrodla`); (1)+(2) indeks przepisów testowanych i źródła spoza USA dla reszty; (5) luzowanie wysokiego ryzyka odłożone.
- Rola: 06-tresci build (research), sesje po ok. 30–45 wariantów (jak B19–B33), każda: rejestr + raport + JSON propozycji, bez zmian catalog/site/kart; potem porcja katalogowa (tor B) i karty en (tor A).
- Zrobione gdy: do-researchu = 0 (poza wycofanymi duplikatami), każdy wariant ma kartę en.
- Szacunek (otwarty): ok. 15–20 sesji research + porcje katalogowe + karty; koszt w decyzji `wydanie-pl-en`: ok. 300+ USD.
- Ryzyka: cytaty tylko sprawdzone na surowym pliku; repo publiczne — kopie źródeł w scratchpadzie, bez nazw wydawców płatnych książek.

### Z6. Research z kupionej książki (repo prywatne)
- Decyzja `2026-11-02-jaratlas-zrodla-prywatne`: tylko własne słowa, źródło nigdzie w publicznym repo ani na stronie; zapis w `lkarwowski494/prywatne`.
- Wymaga: zmiana walidatora pod nieprzejrzyste ID rejestru prywatnego (ścieżka wrażliwa, D-043), zgoda właściciela w rozmowie sesji, uruchomienie `tools/zrodla-prywatne.mjs` przez właściciela.

### Z7. Karty pl dla kart tylko-en (481 = 692 − 211)
- Opcje: (A) przekład przez API skryptem `tools/i18n/` (workflow `przeklad-tlumaczen.yml`; wymaga zgody na kwotę i sekret `ANTHROPIC_API_KEY`) + D-027 d na próbce — szybciej, koszt wg kosztorysu `docs/lokalizacja/`; (B) karty pl pisane w sesjach 06 — drożej w czasie, bez sekretu. Rekomendacja: A, po Z5 (żeby nie tłumaczyć dwa razy).

### Z8. Przed pierwszą publikacją (za zgodą właściciela)
- Weto wszystkich decyzji „do weta” (§4); przegląd D-027 d dla całości kart; 10-wydanie: przeniesienie do czystego repo (`docs/wydanie/10-przeniesienie-czyste-repo.md`, `node tools/przeniesienie.mjs --testy`); 08: wygląd po systemie 04; GitHub Pages + domena (ADR 0007); `tools/ruch` a czyste repo (rola 10).

## 4. Decyzje do weta (tablica, kolekcja `decisions`)
Status `proposed` lub `chosen` z dopiskiem „decyzja Claude, do weta”. Najnowsze najpierw:
- `2026-11-02-jaratlas-b33-research` (B33-D1..D6), `b32-katalog` (B32-D1..D5), `b31-katalog`, `b30-research`, `b29-katalog`, `b28-katalog` (B28-D1..D6), `c13-kod` (C13-D1..D5), `06-karty-p30` … `06-karty-p38`.
- `b14-pilotaz-zrodel`, `b15-katalog` … `b27-katalog`, `b16`/`b19`/`b20`/`b22`/`b23`/`b24`/`b26-research`, `d1-przeglad-p1` … `p4`, `09-leksykon`, `10-strony-jezyka`.
- Starsze `chosen` do weta: `06-karty-p1` … `p29`, `06-katalog-*`, `06-b*`/`06-c*`/`06-e1-*`, `07-*`, `09-skrypt-tlumaczen`, `10-czyste-repo` (D1–D11).

## 5. Sprawy właściciela (czekają)
- Usunąć w GitHub gałąź `claude/jaratlas-b28-katalog` (zawiera nazwę wydawcy w commicie aeabe5b; repo publiczne).
- Zarchiwizować sesje, których koordynator nie mógł: koordynator 7 (`session_01T66VBzNnMZvYgHqFwdUEq3`), sesja p36, R7 (`session_01T66VBwk8R95jMiAEZvUNM1`, scalona).
- Uruchomić `tools/zrodla-prywatne.mjs` dla B28/B29 (repo prywatne); R7: `tools/ruch/Pobierz-Odslony.ps1` i Keyword Planner u siebie.
- Decyzje projektu: Z3 (A/B), kwota i sekret przekładu (Z7), tekst D-027 (c) i standard marki (04), moment przeniesienia do czystego repo, domyślna gałąź repo, odnowienie domeny przed 2027-11-01.
