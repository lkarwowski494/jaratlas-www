# Stan sztafety
Ścieżka: greenfield (strona JarAtlas.com) · Aktualizacja: 2026-11-01

| Rola | Tryb | Stan | Commit | Artefakty | Otwarte decyzje |
|---|---|---|---|---|---|
| 02 Monetyzacja | audit (oplacalnosc) | zakończona 2026-11-01 | 8133524 | tablica `2026-11-01-jaratlas-bramka-wynik` | odświeżenie bramki po 3–6 mies. Search Console |
| 06 Treści | build (tresci-krytyczne, kontrole-mechaniczne) | zakończona 2026-11-01 (zadanie B; decyzja E3 zastosowana, katalog 1.0.2) | f1ddab4 | `catalog/`, `docs/tresci/` (rejestr, parametry, konfiguracja, raporty E0–E3, raport v0→v1) | reguła statusu kąpieli wodnej (E3 §4.1); następna rola |
| 05 Architekt | build | zakończona 2026-11-01 (E0–E4, szkielet z wyjątkiem ADR 0006) | de8b7d2 + E2–E4 | `docs/architektura/` (README, ryzyka, konfiguracja, prywatnosc, narzedzia/granice.mjs), `docs/adr/0001–0007`, `site/`, `tools/buduj-strone.mjs`, `tests/site.test.mjs`, `tests/build.test.mjs` | domena; tekst D-027 (c) (rola 04); moment przeniesienia do czystego repo |
| 07 Jakość | audit (przegląd szkieletu, ADR 0006) | STOP E3 2026-11-01: ZABLOKOWANE (3 × P1, 5 × P2) | 08f2ae2 | `docs/jakosc/07-jakosc-2026-11-01.md` | wykonawca naprawy (07 fix / 08 fix); strategia testów |

## Następny krok
1. **07 Jakość, tryb fix** (po decyzji właściciela o wykonawcy): `node tools/assemble.mjs 07-jakosc --tryb fix --zadania 07-jakosc-001,07-jakosc-002,07-jakosc-003,07-jakosc-004,07-jakosc-005,07-jakosc-006,07-jakosc-007,07-jakosc-008`, potem `--tryb reaudit --baza 08f2ae2`; nowa sesja opus/high. Paczka: `docs/jakosc/07-jakosc-2026-11-01.md`, `docs/architektura/ryzyka.md`.
2. Potem **06-tresci**, tryb `build`: treść pierwszych kart fali 1 (`site/tresci/{lang}/warianty/{id}.json`: `tytul`, `wstep`, `sekcje[]`, `ostrzezenia[{claim,tekst}]`, `obraz`) i slugi `site/slugi/{lang}.json` (ADR 0002); bez zaślepek (R2), każda karta z ostrzeżeniami wymaganymi w katalogu; nowa sesja: opus, wysiłek high. Paczka: `docs/architektura/konfiguracja.md`, `catalog/README.md`, `docs/tresci/parametry.json`.
3. 08 (kod dalej): najpierw domena i kontrole z testami, potem adapter wdrożenia (po ADR 0007), na końcu wygląd (po 04).
