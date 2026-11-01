# Stan pracy JarAtlas

Aktualizacja: 2026-11-01 (sesja session_01T66VBydUNZSWLkpAUxjXNL). Historia: `docs/archiwum/`.

## Gdzie jesteśmy
- Rola: 06-tresci, tryb build, moduły tresci-krytyczne, kontrole-mechaniczne. Zadanie B: katalog v0 → v1 (decyzja `2026-11-01-jaratlas-katalog-b`).
- E0 zrobione (`docs/tresci/E0-rozpoznanie-2026-11-01.md`); decyzje: `2026-11-01-jaratlas-katalog-v1-model`, `2026-11-01-jaratlas-hierarchia-zrodel`.
- **E1 zrobione, STOP:** raport `docs/tresci/E1-rejestr-2026-11-01.md`; rejestr `docs/tresci/rejestr.json` (759 twierdzeń), katalog roboczy `catalog/catalog-seed.json` (1.0.0-e1, walidator 0 błędów), parametry `docs/tresci/parametry.json`, pytania `docs/tresci/pytania-otwarte.md`, wyniki badaczy `docs/tresci/badania/`. Decyzje E1: `2026-11-01-jaratlas-katalog-v1-e1`.
- **E2 zrobione, STOP:** `docs/tresci/E2-katalog-2026-11-01.md`; `catalog/catalog-seed.json` 1.0.0 (1432 rekordy; ok 312, do-res. 886, ryzyko 148, nie-publ. 49, wycofane 37), `catalog/README.md`.
- Odtworzenie: `node tools/katalog-v1/scal.mjs <S>` wymaga kopii tekstów źródeł (scratchpad, poza repo; indeks `docs/tresci/badania/zrodla-indeks.tsv`).
- Bramka 02 zamknięta: wynik graniczny, budujemy (tablica `2026-11-01-jaratlas-bramka-wynik`); przegląd treści krytycznych zastępczy + drugi werdykt dla ryzyko-wysokie/nie-publikowac (`2026-11-01-jaratlas-bramka-zakres`).

## Ograniczenia środowiska
- cdc.gov i fsis.usda.gov: 403 (Akamai) dla UA `Apps4Brew-research/1.0`; reszta źródeł 200.
- Repo `jaratlas-www` publiczne: bez kopii surowych stron źródeł.

## Wejście
- Słoik (publiczne): `docs/jaratlas/00-PRZEKAZANIE.md` (§5 zadanie B, §6 SEO), `01-katalog-v0.md`, `docs/research/27-atlas-fala1-zrodla.md`.
- Biblioteka: `lkarwowski494/prompts` (prywatne; add_repo za zgodą właściciela).

## Następny krok
E3: weryfikacja zastępcza (D-027) + drugi werdykt dla ryzyko-wysokie/nie-publikowac, raport v0→v1, przekazanie.
