# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBxeDk4kzrsWBbDCwU8). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-07-fix-p2.md`).

## Rola i etap
10-wydanie · build · przygotowanie przeniesienia do czystego repo (tylko podgląd) · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `10-wydanie-build-d32b4b8` (części o sklepach z aplikacjami pominięte).

## Wynik
- `docs/wydanie/10-przeniesienie-czyste-repo.md`: cel, zasady, kroki właściciela i koordynatora, rejestr tego, co przechodzi, ryzyka R-CZ-1…4, decyzje D1–D11.
- `tools/przeniesienie.mjs` + `tools/przeniesienie.json` (analogia pełna: trening `docs/46` + `scripts/przeniesienie-1.0.*`): git archive HEAD → katalog tymczasowy → reguły → strażnik (dane osobowe, sekrety, ślady, nazwy firm) → raport; `--zachowaj`, `--testy` (`npm run check` w drzewie), `--decyzje`, `--json`. Nic nie wypycha, nie tworzy repo.
- `tests/przeniesienie.test.mjs` 12/12 (czerwony przed: `docs/wydanie/dowody/przeniesienie-test-przed.txt`), dopisany do `tests/sprzatanie.test.mjs`. `.gitignore` obejmuje `.env` (D8).
- Podgląd `--zachowaj --testy` (`docs/wydanie/dowody/przeniesienie-podglad.txt`): 330 plików → 271 zostaje, 59 usuniętych (54 na Dysk), 0 kodu czytającego usunięte pliki, `npm run check` w drzewie kod 0 (100/100). Jedyny błąd strażnika: ID sesji w tym pliku (oczekiwane, D2 „popraw”).
- Podgląd znalazł realny błąd listy: `tests/sprzatanie.test.mjs` wymieniał usuwany test po samej nazwie. Naprawione zamianą w liście i wykrywaniem krótkich nazw w literałach (test).
- Kontrole na HEAD: `npm run check` kod 0.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-10-czyste-repo`)
D1 nowa organizacja · D2 świeży STAN/sztafeta, archiwum na Dysk · D3 `docs/jakosc/`, `docs/lokalizacja/` na Dysk · D4 raporty treści zostają · D5 CLAUDE.md po przeglądzie, ID tablicy zostaje · D6 Ball jako źródło · D7 Porkbun zostaje · D8 `.env` w `.gitignore` (zrobione) · D9 ślady miękkie zostają · D10 Pages przez Actions + weryfikacja domeny · D11 przeniesienie tuż przed pierwszym workflow Pages.

## Otwarte
Nazwa organizacji/repo (D1, `[DO USTALENIA]`). Bez zmian z `docs/archiwum/STAN-SESJI-2026-11-02-07-fix-p2.md` (morele E3-002, cukry żelujące, Clemson SZY-026, teksty UI i D-027 (c), backlog przed publikacją).

## Następny krok
Koordynator: weto/akceptacja D1–D11; CI `kontrole` na HEAD gałęzi. Samo przeniesienie: kroki pkt 3–4 dokumentu, tylko za zgodą właściciela.
