# Stan pracy JarAtlas

Aktualizacja: 2026-11-01 (sesja session_01T66VBydUNZSWLkpAUxjXNL). Historia: `docs/archiwum/`.

## Rola i etap
06-tresci · build · zadanie B (katalog v0 → v1) **zakończone 2026-11-01 (E0–E3)**, STOP: czeka na decyzje właściciela (raport E3 §4).

## Wynik (dowody)
- Raporty: `docs/tresci/E0-…`, `E1-…`, `E2-…`, `E3-weryfikacja-2026-11-01.md`, `docs/tresci/raport-v0-v1.md`; sztafeta `docs/sztafeta.md`.
- `catalog/catalog-seed.json` 1.0.1: 1432 rekordy; ok-zrodlo 288, do-researchu 921, ryzyko-wysokie 139, nie-publikowac 47, wycofane 37; wszystkie ukryte.
- Rejestr 820 twierdzeń (807 potwierdzonych; 656 krytycznych z przeglądem zastępczym D-027). Kontrole: `npm test` 20/20; `npm run check:catalog` kod 0; `npm run check:tresci` kod 0.

## Decyzje czekające na właściciela
1. Reguła statusu dla wariantów niskokwasowych z kąpielą wodną w v0 (42; ryzyko-wysokie vs nie-publikowac).
2. Następna rola: szkielet strony (zalecane, przekazanie Słoika §7.1) albo treść kart fali 1.

## Otwarte (najważniejsze)
Słoiki USA pint/quart vs 0,5/1 l; procedury głównie USA; oliwki (UC ANR 8267 tylko przez narzędzie); 133 pytania w `docs/tresci/pytania-otwarte.md`; przegląd eksperta później (D-027 d).

## Zalecana sesja
Następna rola w nowej sesji z pustym kontekstem: opus, wysiłek high dla architektury/szkieletu strony (medium wystarczy dla samych testów). Kopie tekstów źródeł nie są w repo; przy pracy z treścią pobrać z `docs/tresci/badania/zrodla-indeks.tsv`.

## Następny krok
Po decyzjach: rola dla szkieletu strony według `docs/sztafeta.md` (paczka wejściowa tam).
