# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VByhQ1S4DV3HaACudAv). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-01-karty-p1.md`).

## Rola i etap
06-tresci · build · partia 2 kart fali 1 (en, pl) · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- E1 (warunki przed publikacją partii 1): wolna przestrzeń (FER-095, FER-097, ACI-171), czasy powyżej 1000 stóp jako twierdzenia atomowe po przedziale (FER-096, 098–101, ACI-172, 177, 178), metry zaokrąglone w dół 300/900/1800 m (ACI-176), słoiki pint/quart (NIST, ACI-174) i reguły JarAtlas dla słoików metrycznych (ACI-175, ACI-193 kwas), kożuch przy kapuście (FER-035), FER-047 83–85 °C, SZY-054 z cytatem „research-based process times”.
- Partia 2 en+pl: sour-cherry-v08 (dżem), sour-cherry-v11 (wiśnie w słoikach), plum-v13 (śliwki w słoikach), strawberry-v17 (truskawki mrożone); twierdzenia SLO-110–119, ACI-179–195, FRZ-061–065; slugi en/pl.
- Weryfikacja zastępcza D-027 trzy przebiegi: 22+170+20 POPARTE, 10 CZĘŚCIOWO poprawione, 0 NIEPOPARTE/SPRZECZNE; przegląd zastępczy wpisany dla 55 twierdzeń krytycznych. Raport: `docs/tresci/E3-karty-p2-2026-11-02.md`.
- Kontrole: `npm test` 54/54, `check:granice`, `check:catalog`, `check:tresci` (0 błędów, 0 uwag), `build` — kod 0. Symulacja publikacji 8 wariantów: 0 błędów, 16 stron kart.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p2`)
1. Słoiki metryczne: do 473 ml czas pint; do 946 ml czas quart; większe bez czasu; tabela tylko do pinty → słoik do 473 ml (0,5 l bez czasu); pomidory w słoiku > pint kwas jak na quart.
2. Wysokość w metrach zaokrąglona w dół (300/900/1800 m); sterylizacja +1 min za każde rozpoczęte 300 m.
3. FER-047 83–85 °C; pasteryzacja nadal poza kartą ogórków.
4. Zakres partii 2 (4 warianty) i odrzucenie pesto/czosnku w oleju.

## Otwarte
Krok „woda 1 cal nad słoikami” przy sterylizacji (nowe twierdzenie); ACI-015 „ok. 305 m”; zbędny ucięty cytat SLO-018; teksty UI `site/teksty/{en,pl}.json` i tekst D-027 (c) (rola 04) przed realną publikacją.

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, P2).

## Następny krok
Kolejka koordynatora: skrypt tłumaczeń kart en → fr, es, de, it (bez płatnych wywołań w nocy), potem partia 3 en/pl. Narzędzie: `node tools/karty-tresci.mjs`, kontrola `npm run check:tresci`; po każdej zmianie zdań krytycznych weryfikacja zastępcza i nowy `przeglad.sha`.
