# 10. Przeniesienie JarAtlas do czystego repo: lista kontrolna i narzędzie (2026-11-02)

Dokument przygotowawczy roli 10-wydanie (build, tryb nocny). **Przeniesienia nie wykonano.** Są: lista, narzędzie podglądu i pytania do właściciela. Nie utworzono żadnego repo, niczego nie wypchnięto poza gałąź roboczą.

Wzór (analogia pełna, D-052): repo trening, `docs/46-przeniesienie-1.0.md` + `scripts/przeniesienie-1.0.mjs` + `scripts/przeniesienie-1.0.json` + `tests/przeniesienie-1.0.test.ts` (klon tylko do odczytu, HEAD z 2026-11-02). Różnice wobec wzoru są w pkt 6.

## 1. Cel i zasady

- Nowe, **publiczne** repo: **jeden początkowy commit**, bez historii obecnego repo `jaratlas-www` (CLAUDE.md, „Przed pierwszą publikacją: przeniesienie do czystego repo”). Obecna historia ma w komunikatach commitów stopki i adresy sesji narzędzia, a w plikach z dawnych commitów ID sesji i login właściciela. Jeden commit to usuwa w całości; samo usunięcie plików na gałęzi tego nie robi.
- Stare repo zostaje jako **prywatne archiwum**: nie usuwamy (trening `docs/46-przeniesienie-1.0.md:37`, krok 8: „Change visibility → Private (nie usuwać)”).
- Nie przechodzą: dane osobowe (login, imię i nazwisko, e-mail), sekrety, ślady narzędzi (ID sesji, adresy sesji, stopki commitów), robocze raporty sesji. Nazwy cudzych firm tylko jako cytowane źródło albo fakt publiczny, każdy przypadek z wyjątkiem i powodem.
- Hosting: GitHub Pages z własną domeną (ADR 0007, przyjęta). Workflow publikacji, DNS i domena tylko za zgodą właściciela (ADR 0007, „Workflow publikacji Pages: osobna zgoda właściciela”).
- Narzędzie: `node tools/przeniesienie.mjs` (**tylko podgląd**). Z `git archive HEAD` buduje drzewo w katalogu tymczasowym, stosuje `tools/przeniesienie.json` (usunięcia, kopia na Dysk, przepisanie odnośników, zamiany), uruchamia strażnika i wypisuje raport. Kod wyjścia 1 przy błędzie. Przełączniki: `--zachowaj` (drzewo `drzewo/` i `na-dysk/` do obejrzenia), `--testy` (`npm run check` w zbudowanym drzewie, czyli testy, granice, katalog, treści, build i rozmiar), `--decyzje=usun` (wariant: pozycje „decyzja” znikają), `--json`, `--lista=`, `--repo=`. Test logiki: `tests/przeniesienie.test.mjs`.

## 2. Decyzje dla właściciela (D1–D11)

Każda ma co najmniej dwie opcje i rekomendację. W trybie nocnym przyjąłem rekomendacje jako **decyzję Claude, do weta** (tablica `2026-11-02-jaratlas-10-czyste-repo`). Lista `tools/przeniesienie.json` już je odzwierciedla, więc nie ma pozycji „decyzja”. Weto = zmiana akcji w liście i ponowny podgląd.

**D1: gdzie powstaje nowe repo** (analogia częściowa: trening przeniósł do osobnej organizacji).
- A (rekomendacja): nowa, darmowa organizacja GitHub dla JarAtlas. Login właściciela nie pojawia się w adresie publicznego repo, a projekt jest oddzielony od studia. Kosztem jest jedna organizacja więcej do prowadzenia. Nazwa organizacji i repo: `[DO USTALENIA]` (nie sprawdzałem, czy jest wolna).
- B: istniejąca organizacja studia: mniej administracji, ale wiąże markę studia z JarAtlas.
- C: konto właściciela: najprościej, ale login jest w adresie repo.

**D2: dokumenty robocze** (`docs/STAN-SESJI.md`, `docs/sztafeta.md`, `docs/archiwum/`). Analogia pełna: trening `docs/46`, D2 A.
- A (rekomendacja): w nowym repo świeży, krótki `STAN-SESJI` i sztafeta od dnia przeniesienia, bez ID sesji. Archiwum stanów idzie na Dysk.
- B: kopiujemy wszystko: ID sesji i przebieg pracy stają się publiczne, strażnik zgłasza błąd.

**D3: raporty jakości i kosztorys** (`docs/jakosc/` z dowodami, `docs/lokalizacja/`).
- A (rekomendacja): na Dysk. W repo zostają testy, które utrwalają naprawy z raportów. Raporty mają login właściciela i ścieżki sesji, a kosztorys to roboczy budżet. Odnośniki w kodzie zmieniają się na „Dysk: …”, co narzędzie robi automatycznie.
- B: zostają po wycięciu loginu: dowody jakości są jawne, ale to ok. 40 plików do ręcznej redakcji.

**D4: raporty treści i badania** (`docs/tresci/E0–E3`, `docs/tresci/badania/`, rejestr). Analogia pełna: trening `docs/46`, D4 A (źródła zostają).
- A (rekomendacja): zostają, bo pokazują pochodzenie twierdzeń i przegląd zastępczy (D-027). Z nagłówka `docs/tresci/E0-rozpoznanie-2026-11-01.md` usuwamy ID sesji (zamiana w liście).
- B: raporty E0–E3 na Dysk, w repo tylko rejestr. Wtedy przegląd zastępczy przestaje być sprawdzalny w repo.

**D5: `CLAUDE.md` i identyfikator tablicy decyzji.** Analogia pełna: trening `docs/46`, D3 B (zostaje po przeglądzie).
- A (rekomendacja): `CLAUDE.md` zostaje po przeglądzie: stan projektu od przeniesienia, bez odwołań do usuniętych dokumentów. Identyfikator tablicy zostaje, bo sesje muszą ją znaleźć. Artefakt jest prywatny i otwiera go tylko konto właściciela (wyjątek strażnika z powodem). W `docs/architektura/E0-rozpoznanie-2026-11-01.md` identyfikator zamieniamy na opis.
- B: identyfikator tylko w promptach sesji, poza repo. Repo jest wtedy czystsze, ale każda sesja zależy od promptu.

**D6: nazwy producentów jako cytowane źródła** (Ball w `catalog/catalog-seed.json` i w `docs/tresci/`). Analogia pełna: trening `docs/46`, D4 A.
- A (rekomendacja): zostają jako cytowane źródło przepisu („UCCE MFP za Ball”), nie reklama. Katalog ma wyjątek z powodem, a w dokumentach to sekcja „poza zakresem”.
- B: redakcja nazw: psuje cytaty i ślad pochodzenia przepisu.

**D7: rejestrator domeny (Porkbun)** w `CLAUDE.md`, `site/konfiguracja.mjs`, `docs/architektura/konfiguracja.md`. Ocena realności: teoretyczny, bo rejestrator jest publiczny w RDAP.
- A (rekomendacja): zostaje (wyjątek z powodem).
- B: zamiana na „rejestrator”, czyli trzy zamiany w liście i bez skutku dla bezpieczeństwa.

**D8: `.gitignore` bez `.env`.** Ocena realności: brzegowy (klucz API jest tylko w sekretach środowiska, ale repo jest publiczne). Kontrola jest tania.
- A (rekomendacja, **zrobione w tym commicie**): `.env`, `.env.*`, `!.env.example` w `.gitignore` już teraz. Narzędzie sprawdza to w drzewie.
- B: dopiero w nowym repo, co zostawia okno w obecnym publicznym repo.

**D9: ślady miękkie w kodzie i dokumentach** („decyzja Claude, do weta”, odwołania do repo trening, nazwa organizacji studia; 13 plików, lista w raporcie).
- A (rekomendacja): zostają jako jawny opis procesu, bo to nie dane osobowe ani sekrety. W dniu przeniesienia dopiski „do weta” przy decyzjach już rozstrzygniętych przez właściciela zamieniamy na wynik decyzji.
- B: wszystkie zamieniamy na neutralne opisy: ok. 13 plików do ręcznej zmiany i utrata odnośników do wzorców.

**D10: sposób publikacji Pages z własną domeną** (ADR 0007).
- A (rekomendacja): workflow GitHub Actions (build w CI, `npm run check`, potem wdrożenie). Źródło (docs.github.com, „Managing a custom domain for your GitHub Pages site”, odczyt 2026-11-02): „If you are publishing from a custom GitHub Actions workflow, no `CNAME` file is created” oraz „any existing `CNAME` file is ignored and is not required”. Domenę ustawia się w ustawieniach Pages. Wcześniej trzeba **zweryfikować domenę** na koncie lub w organizacji: „We recommend verifying your custom domain prior to adding it to your repository… to improve security and avoid takeover attacks”.
- B: publikacja z gałęzi (np. `gh-pages` z `dist/` i plikiem `CNAME`): bez workflowu, ale wynik buildu trafia do historii repo.

**D11: moment przeniesienia.** CLAUDE.md mówi „przed pierwszą publikacją”, a 0 stron jest opublikowanych.
- A (rekomendacja): po zamknięciu otwartych pozycji publikacji (tekst D-027 (c) i wygląd roli 04, przegląd treści, domena), tuż przed pierwszym workflow Pages. Nowe repo dostaje od razu stan do publikacji.
- B: od razu, czyli przed dalszą pracą. Historia nowego repo znów rośnie o robocze commity sesji, chyba że praca toczy się dalej w starym repo i przenosimy wynik jeszcze raz.

## 3. Kroki właściciela (po decyzjach)

Wartości sekretów **nie wklejamy do czatu**.
1. Organizacja lub konto według D1. Puste repo: **Public**, bez README, `.gitignore` i licencji. Dodaj repo do aplikacji Claude (Repository access).
2. Weryfikacja domeny `jaratlas.com` w ustawieniach organizacji lub konta (Pages → Verified domains). Rekord TXT ustawiasz u rejestratora (D10 A).
3. Ustawienia: Secret scanning i Push protection **Enable**. Ochrona `main` (wymagane sprawdzenie `kontrole` po pierwszym przebiegu, blokada force-push). Automatically delete head branches.
4. Sekret `ANTHROPIC_API_KEY` tylko wtedy, gdy przekład ma działać w nowym repo (sekrety starego repo się nie przenoszą). Kwota i zgoda według decyzji roli 09.
5. Po zielonym pierwszym przebiegu w nowym repo: stare repo → Settings → Change visibility → **Private** (nie usuwać). Usuń sekrety starego repo.
6. Pages (Source: GitHub Actions) i domena: dopiero po osobnej zgodzie na workflow publikacji (ADR 0007).

## 4. Kroki koordynatora (po D1–D11 i krokach 1–3 właściciela)

1. `main` zielony (`kontrole`), brak otwartych P0/P1.
2. Pozycje „popraw” (pkt 5) w starym repo zwykłym commitem z `npm run check`: świeży `STAN-SESJI` i sztafeta (D2), przegląd `CLAUDE.md` (D5), ślady według D9.
3. `node tools/przeniesienie.mjs --zachowaj --testy`. Raport musi pokazać: **0 błędów strażnika**, 0 zbędnych wyjątków, 0 zamian niewykonanych, 0 plików czytających usunięte pliki, `npm run check w drzewie: kod 0` i `WYNIK: OK`.
4. Kopia `na-dysk/` z podglądu do folderu projektu na Dysku (właściciel ją zachowuje).
5. Wykonanie (poza narzędziem, tylko za zgodą właściciela): w drzewie z kroku 3 `rm -rf .git && git init -b main`, jeden commit (autor według ustawień właściciela, bez e-maila w treści, przed commitem `git diff --cached`), `git remote add origin …`, `git push -u origin main`. Nie przenosimy tagów ani gałęzi.
6. Pierwszy przebieg `kontrole` w nowym repo (zielony), potem wpis w nowym `STAN-SESJI` z datą przeniesienia i adresem repo.

## 5. Co przechodzi, a co nie (wejście: `tools/przeniesienie.json`)

Akcje: **zostaje** (domyślnie), **usun**, **dysk** (usunięte z repo, kopia dla właściciela), **decyzja** (czeka na właściciela), **popraw** (zostaje, zmiana ręczna w dniu przeniesienia).

| pozycja | akcja | uwagi |
|---|---|---|
| `docs/archiwum/` | dysk | D2: stany sesji (ID sesji) |
| `docs/STAN-SESJI.md`, `docs/sztafeta.md` | popraw | D2: świeże od przeniesienia; do tego czasu strażnik zgłasza ID sesji w `STAN-SESJI` (oczekiwane) |
| `docs/jakosc/` | dysk | D3: raporty 07 i dowody (login, ścieżki sesji) |
| `docs/lokalizacja/` | dysk | D3: kosztorys przekładu |
| `docs/tresci/E0-rozpoznanie-2026-11-01.md` | popraw | D4: zamiana usuwa ID sesji |
| `docs/architektura/E0-rozpoznanie-2026-11-01.md` | popraw | D5: identyfikator tablicy zamieniony na opis |
| `CLAUDE.md` | popraw | D5 |
| `.gitignore` | popraw | D8 (zrobione) |
| ten dokument, `docs/wydanie/dowody/`, `tools/przeniesienie.*`, `tests/przeniesienie.test.mjs` | usun | narzędzie jednorazowe; lista zawiera wzorce danych osobowych (wzór: trening `docs/46`, pkt 5) |
| `tests/sprzatanie.test.mjs` | zostaje, zamiana | z listy plików testu znika `przeniesienie.test.mjs` (wykryte w podglądzie `--testy` 2026-11-02: test sprzątania padał w drzewie; od tej poprawki narzędzie łapie też krótkie nazwy w literałach) |
| historia git, gałęzie, tagi, komunikaty commitów | nie przechodzi | jeden commit (pkt 4.5) |
| wszystko inne | zostaje | `site/`, `tools/`, `tests/`, `catalog/`, `.github/workflows/`, `docs/adr/`, `docs/architektura/`, `docs/tresci/` |

Odnośniki do usuniętych dokumentów w `.github/workflows/`, `tools/`, `docs/adr/`, `docs/architektura/`, `docs/tresci/` i `CLAUDE.md` narzędzie zmienia na „Dysk: …”.

**Strażnik** (`straznik` w liście): błąd w **całym** drzewie to dane osobowe (login, nazwisko, imię, e-mail), sekrety (klucz prywatny, klucz Anthropic, token GitHub, przypisanie `*_API_KEY/TOKEN/PASSWORD/SECRET`; wzorce za narzędziem `sprawdz-wydanie.mjs` roli 10) i ślady (ID sesji, adres sesji claude.ai, identyfikator tablicy, stopka commitu). Nazwy firm są błędem tylko w zakresie (`site/`, `tools/`, `tests/`, `catalog/`, `.github/`, `package.json`, `CLAUDE.md`), w dokumentach trafiają do osobnej sekcji raportu. Wyjątek ma zawsze powód. Wyjątek z polem `wartosci` obejmuje tylko pasujące trafienia, np. atrapy kluczy `sk-ant-test-…` w `tests/przeklad.test.mjs`: inny klucz w tym samym pliku to nadal błąd. Raport nie powtarza wartości trafień.

**Wynik podglądu na HEAD tego commitu** (`docs/wydanie/dowody/przeniesienie-podglad.txt`, `--zachowaj --testy`): liczby w nagłówku raportu, niżej skrót. Liczb nie przepisujemy tu ręcznie, poza stanem z dnia przygotowania:
- 1 błąd strażnika: `docs/STAN-SESJI.md` (ID sesji). To oczekiwana pozycja „popraw” D2, którą zamyka świeży stan w dniu przeniesienia.
- 0 kodu i testów czytających usunięte pliki. `npm run check` w drzewie: wynik w pliku dowodu.

## 6. Różnice wobec wzoru (trening)

- Strażnik jest w liście (`straznik`), nie w osobnym `forbidden-names.json`, i ma kategorie dane, sekrety, ślady. JarAtlas nie ma testu nazw firm, więc dane osobowe i sekrety są błędem w całym drzewie, także w `docs/`.
- `--testy` uruchamia `npm run check` zamiast Jest. JarAtlas nie ma zależności npm (ADR 0001), więc nie podłączamy `node_modules`.
- Bez generatorów: README nie jest generowany. Bez skrótów `docs/NN`, bo dokumenty JarAtlas nie są numerowane.
- Przepisanie odnośników zmienia pełne ścieżki i katalogi; puste katalogi po usunięciach znikają.
- Odwołania: nazwa w apostrofach lub cudzysłowie liczy się jako odczyt (wzór liczy tylko linie z read/join/…). Lista plików w `tests/sprzatanie.test.mjs` nie ma takiego słowa, a test padał.

## 7. Ryzyka

- **R-CZ-1**: przejęcie domeny między dodaniem jej do Pages a konfiguracją DNS. Warunek: domena zweryfikowana przed dodaniem (D10, krok 3.2).
- **R-CZ-2**: dane w dawnej historii publicznego repo. Jeden commit w nowym repo nie czyści starego. Warunek: stare repo prywatne po przeniesieniu (krok 3.5). Kopie i forki starego repo już mogą istnieć, czego nie sprawdzałem.
- **R-CZ-3**: strażnik szuka znanych wzorców, nie wszystkich możliwych danych. Przed commitem w kroku 4.5 obowiązuje dodatkowo przegląd `git diff --cached` (CLAUDE.md).
- **R-CZ-4**: lista się starzeje, bo nowe pliki domyślnie „zostają”. Przed przeniesieniem trzeba przejrzeć sekcję „WPISY LISTY BEZ PLIKU” i drzewo `docs/` w raporcie.
