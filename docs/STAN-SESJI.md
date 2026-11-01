# Stan pracy JarAtlas

Aktualizacja: 2026-11-01 (sesja session_01T66VBydUNZSWLkpAUxjXNL). Historia: `docs/archiwum/`.

## Rola i etap
06-tresci · build · moduły tresci-krytyczne, kontrole-mechaniczne · zadanie B (katalog v0 → v1). E0, E1, E2 zrobione; **E3 prawie gotowe**: werdykty 6 weryfikatorów wprowadzone (`docs/tresci/badania/E3/`, `tools/katalog-v1/e3.mjs`), katalog 1.0.1 (ok 294, do-res. 915, ryzyko 139, nie-publ. 47, wycofane 37), przegląd zastępczy 655 twierdzeń; czeka 1 werdykt (E3-001 i rozstrzygnięcia agenta, `rozstrzygniecia.json`), potem kontrola bez flagi kod 0, sztafeta, przekazanie.

## Co zrobione (dowody)
- E0: `docs/tresci/E0-rozpoznanie-2026-11-01.md`. E1: `docs/tresci/E1-rejestr-2026-11-01.md`. E2: `docs/tresci/E2-katalog-2026-11-01.md`.
- Katalog `catalog/catalog-seed.json` 1.0.0, model `catalog/README.md`; walidator `tools/validate-catalog.mjs`; testy `npm test` 20/20; `npm run check:catalog` kod 0.
- Rejestr `docs/tresci/rejestr.json`: 819 twierdzeń (806 potwierdzonych curl+grep, 13 roboczych). `tools/kontrole-tresci.mjs docs/tresci/rejestr.json <pusty katalog> --przed-przegladem` kod 0 (655 uwag: krytyczne bez przeglądu).
- Parametry `docs/tresci/parametry.json` (148, 102 z wektorami); pytania `docs/tresci/pytania-otwarte.md` (133); wyniki badaczy `docs/tresci/badania/<klaster>/`; skrypty `tools/katalog-v1/`.

## Liczby (catalog-seed 1.0.0)
1432 rekordy wariantów: ok-zrodlo 312 · do-researchu 886 · ryzyko-wysokie 148 · nie-publikowac 49 · wycofane 37 (28 poza zakresem, 6 duplikatów, 3 rozdzielone). Wszystkie `publication: ukryta`.

## Decyzje (tablica, 2026-11-01)
`jaratlas-hierarchia-zrodel`, `jaratlas-katalog-v1-model`, `jaratlas-katalog-v1-e1`, `jaratlas-katalog-v1-e3-zakres` (E3: twierdzenia krytyczne + drugi werdykt dla 197 ostrzeżeń + odpowiedniość 312 ok-zrodlo). Rozstrzygnięcia agenta do weta: raport E1 §4.

## E3: gdzie przerwano
- 6 weryfikatorów uruchomionych w poprzedniej sesji (instrukcja `docs/tresci/badania/E3/BRIEF-WERYFIKATOR.md`); ich wyniki były tylko w scratchpadzie poprzedniego kontenera. **Nowa sesja uruchamia weryfikację od nowa.**
- Wejście weryfikatorów: twierdzenia krytyczne potwierdzone z `rejestr.json` (podział A: FER+ACI 227, B: SZY+SLO+OLE 206, C: SUS+NAP+MLE+MIE+E2-FRZ 222), warianty ryzyko-wysokie/nie-publikowac (197), ok-zrodlo (312, dwie połowy), `produkty`; bez pól `notes` (niezależność).
- Teksty źródeł nie są w repo: pobrać ponownie z `docs/tresci/badania/zrodla-indeks.tsv` (sha12, URL, data; UA `Apps4Brew-research/1.0`) do `<scratchpad>/zrodla/<sha12>.txt` (HTML → tekst jak w BRIEF badacza; PDF `pdftotext -layout`). Uwaga: kilka źródeł pobrano przez Europe PMC API i publications.europa.eu, a 13 twierdzeń jest roboczych.

## Ograniczenia
cdc.gov, fsis.usda.gov, efsa.europa.eu, anrcatalog.ucanr.edu: 403; eur-lex: 202 bez treści; pmc.ncbi.nlm.nih.gov: reCAPTCHA. Repo publiczne: bez kopii stron źródeł.

## Otwarte (najważniejsze)
- Słoiki: czasy USDA dla pint/quart (0,47/0,95 l), nie 0,5/1 l [DO USTALENIA].
- Procedury niemal wyłącznie USA; brak unijnego/polskiego odpowiednika domowego wekowania.
- Oliwki: UC ANR 8267 tylko przez narzędzie (krok właściciela: pobrać PDF w przeglądarce).
- Kroki właściciela później: przegląd eksperta treści krytycznych, gdy strona zyska użytkowników (D-027 d).

## Następny krok
E3: (1) pobrać źródła z indeksu; (2) uruchomić 6 weryfikatorów według BRIEF-WERYFIKATOR; (3) poprawki według werdyktów (CZĘŚCIOWO → brzmienie, NIEPOPARTE/SPRZECZNE → robocze/usunięcie, statusy wariantów); (4) `przeglad: { kto: "weryfikacja zastępcza (subagent)", data, sha }` dla POPARTE, `kontrole-tresci --przeglad zastępczy` bez `--przed-przegladem` kod 0; (5) raport v0 → v1, `docs/sztafeta.md`, przekazanie → STOP.
