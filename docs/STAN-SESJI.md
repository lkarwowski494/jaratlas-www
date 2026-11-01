# Stan pracy JarAtlas

Aktualizacja: 2026-11-01 (sesja session_01T66VBynJwE9R3enQnFumVg). Historia: `docs/archiwum/`.

## Rola i etap
05-architekt · build · E0–E4 zakończone 2026-11-01. **STOP** po E4. Prompt: `node /home/user/prompts/tools/assemble.mjs 05-architekt --tryb build` (prompts @ c9a47cd).

## Wynik E2–E4 (dowody)
- `docs/architektura/README.md` (moduły z sygnaturami, polityka błędów, budżety z pomiarem, definicja ukończenia), `ryzyka.md` (R1–R9 + lista kontroli dla 07), `konfiguracja.md`, `prywatnosc.md`, `narzedzia/granice.mjs`.
- Kod (wyjątek ADR 0006): `site/kontrole.mjs` (zaślepki, ostrzeżenia, 301), bramka zamknięta domyślnie w `site/plan.mjs`, adapter I/O przeniesiony do `tools/buduj-strone.mjs` (zapis atomowy), rejestr `site/adresy.json`, domena tylko z `konfiguracja.mjs`.
- `npm test` 43/43; `check:granice`, `check:catalog`, `check:tresci`, `build`: kod 0. Testy nowych kontroli czerwone przed kodem; mutacje R1, R2, R4, R5, K1 wykryte.
- Lighthouse 12.8.2 (próbka, mobilny symulowany, mediana z 5): LCP karty 752 ms, produktu 807 ms, CLS 0.

## Decyzje właściciela (obowiązują)
`2026-11-01-jaratlas-e3-stop` (zastosowana), `-tlumaczenia-api` (otwarte: kwota, termin, konto, limit, klucz w sekretach), `-szkielet-e0`, przyciski: E2–E4 potem przegląd 07; D-051 budżet kontekstu.

## Decyzje 2026-11-01 (tablica `2026-11-01-jaratlas-e4-decyzje`)
- Tekst uwagi D-027 (c): przygotuje rola 04.
- CI: `.github/workflows/kontrole.yml` (zastosowane na gałęzi; na `main` po scaleniu, za zgodą).
- `CLAUDE.md` ze ścieżkami wrażliwymi: dodany.

## Decyzje 2026-11-01 (tablica `2026-11-01-jaratlas-adresy-i-repo`)
- Publikujemy tylko dopracowane karty; adresów po publikacji nie zmieniamy; klasyfikacja bezpieczeństwa ustalana przed publikacją i potem bez zmian. Kontrola R4 zostaje: to ona pilnuje niezmienności. 301 tylko jako wyjątek (błąd slugu, zmiana domeny).
- R1b: teraz A (treść robocza w publicznym repo, nazwany wyjątek). Później czysta wersja w nowym repo, obecne zarchiwizowane, część materiałów na Dysk, według wzorca Trening `docs/46-przeniesienie-1.0.md`.

## Decyzje czekające
1. Hosting (ADR 0007): 301 przestaje być warunkiem. GitHub Pages: limit 1 GB witryny, miękki limit 100 GB/mies., zakaz użycia jako darmowego hostingu dla „online business… primarily directed at… commercial transactions” (docs.github.com, odczyt 2026-11-01); strona z reklamami to strefa szara `[DO USTALENIA]`. Cloudflare Pages: limity do odczytu.
2. Moment przeniesienia do czystego repo (przed pierwszą publikacją albo po niej).
3. Przyszłe nowe źródło sprzeczne z opublikowaną kartą: adres zostaje, treść karty aktualizowana (wyjątek od „bez zmian” tylko dla bezpieczeństwa).

## Następny krok
Przegląd 07 w świeżym kontekście (gałąź `claude/happy-brown-yncplj`, od `de8b7d2`), potem 06: treść kart fali 1 i slugi `site/slugi/{lang}.json`.
