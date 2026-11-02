# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, dzień (partia 37, koniec kroku). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-06-karty-p36.md`).

## Rola i etap
06-tresci · build · tor A: partia 37 zakończona (19 kart-ostrzeżeń, 17 pełnych kart szybkowaru, 18 kart ok-zrodlo; wszystko en). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`. Koordynator 8: session_01T66VBzWTjLqKsWH1RERm3H.
Baza: rebase na 6e3dbbe (B31, katalog 1.0.19).

## Decyzje właściciela 2026-11-02 (tablica)
- `2026-11-02-jaratlas-en-baza`: nowe karty tylko en.
- `2026-11-02-jaratlas-wydanie-pl-en` (+ `wariant-bez-zrodla`): pełny katalog = każdy wariant z kartą pełną albo kartą-ostrzeżeniem.
- `2026-11-02-jaratlas-p1-q1-olej`: olej — najkrótszy czas (BfR: następny dzień).
- `2026-11-02-jaratlas-przeglad-agent-zamiast-eksperta`: D-027 d (agent Opus, świeży kontekst).

## Wynik p37
- en 503 → 557 (karty-ostrzeżenia z kartą en 239), pl 211. Nowe twierdzenia: SZY-055–079, SUS-420–424, ACI-960–963, NAP-090–094, SLO-880. Test T1-szybkowar.
- Weryfikacja zastępcza: V1, V2a, V2b, V3a, V3b, P2; P0 0, P1 1 (seler, poprawione). Raport: `docs/tresci/E3-karty-p37-2026-11-02.md`. Decyzje: tablica `2026-11-02-jaratlas-06-karty-p37` (proposed).

## Ważne dla następnej partii
- Push tylko warunkowo: `npm run check && git push origin HEAD:claude/happy-brown-yncplj`, check i przeglad.sha na czystej kopii HEAD (git worktree).
- Rejestr zapisywać `JSON.stringify(R, null, 1)`; przy konflikcie rebase łączyć 3-way po ID (skrypt z p37: base :1, upstream :2, nasz :3).
- Testy migawkowe innych torów przypinają treść wpisów, nie przeglad.sha (B28 FER-128, B31 po p37).

## Następny krok (p38, kolejność)
1. 135 kart-ostrzeżeń z requiredWarnings po B29 (raport `docs/tresci/B29-katalog-2026-11-02.md`) + walnut-nuts-v07.
2. Po decyzjach katalogowych (raport p37 §5): vine-leaves-greens-v09, game-lamb-v06, mirabelle-v06/v07.
3. DO SPRAWDZENIA na żywo: FER-121, SUS-420/321/322, SZY-051; P3 z p35–p37.
