# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, dzień (partia 36, STOP D-051). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-06-karty-p35.md`).

## Rola i etap
06-tresci · build · tor A: partia 36 zakończona (karty-ostrzeżenia en ryzyko-wysokie i nie-publikowac, karty oleju B27, B24-Q1, OLE-025, 24 karty po B28). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`. Koordynator 8: session_01T66VBzWTjLqKsWH1RERm3H.
Baza: rebase na B28 (2d839e3, katalog 1.0.17).

## Decyzje właściciela 2026-11-02 (tablica)
- `2026-11-02-jaratlas-en-baza`: nowe karty tylko en.
- `2026-11-02-jaratlas-wydanie-pl-en` (+ `wariant-bez-zrodla`): pełny katalog = każdy wariant z kartą pełną albo kartą-ostrzeżeniem.
- `2026-11-02-jaratlas-p1-q1-olej`: olej — procedura klasy szczebla 1, najkrótszy czas (BfR: następny dzień); w kartach od p36.
- `2026-11-02-jaratlas-przeglad-agent-zamiast-eksperta`: D-027 d (agent Opus, świeży kontekst).

## Wynik p36
- en 341 → 503 (karty-ostrzeżenia z kartą en 220), pl 211. Nowe twierdzenie SLO-821; przeglad.sha 81 + 139.
- Weryfikacja zastępcza: 8 przebiegów (V1 ×6, P2 ×2), P0 0, P1 2 (poprawione). `npm run check` kod 0 (302/302).
- Raport: `docs/tresci/E3-karty-p36-2026-11-02.md`. Decyzje: tablica `2026-11-02-jaratlas-06-karty-p36` (proposed).

## Ważne dla następnej partii
- Karta-ostrzeżenie wymaga niepustego `requiredWarnings` (test kart ≥1 ostrzeżenie + A2: tylko z requiredWarnings). 134 warianty warning bez requiredWarnings → najpierw porcja katalogowa (wzór B28).
- Wariantom `retired` kart nie piszemy.
- Liczyć `przeglad.sha` i `npm run check` na czystej kopii HEAD (git worktree), gdy w drzewie są pliki autorów w toku.

## Następny krok (p37, kolejność)
1. 19 wariantów z requiredWarnings bez karty en (lista w raporcie p36 §5 Niezrobione).
2. Porcja katalogowa: requiredWarnings dla 134 wariantów warning (rw 68, np 66), potem ich karty.
3. ok-zrodlo 39 bez karty en (szybkowar 18 i inne).
4. P3 z p35 §5 i p36 §5.
