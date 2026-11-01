# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBw6UFcN2TdTYVWJDJR). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-09-skrypt.md`).

## Rola i etap
06-tresci · build · partia 3 kart fali 1 (en, pl) · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Partia 3 en+pl (8 kart): tomato-v10 (pomidory całe w soku), apple-v09 (mus jabłkowy), peach-nectarine-v06 (brzoskwinie, ostrzeżenie E3-001), bell-pepper-v01 (papryka marynowana, słoiki sterylne); twierdzenia SLO-120–135, ACI-196–208 (29, cytaty curl + grep, odczyt 2026-11-02); slugi en/pl.
- Otwarte z p2 zamknięte: SLO-120 woda 1 cal nad słoikami (dżem wiśniowy, papryka), ACI-015 bez „ok. 305 m”, SLO-018 bez uciętego cytatu.
- Weryfikacja zastępcza D-027: 92 + 8 POPARTE, 5 CZĘŚCIOWO poprawione, 0 NIEPOPARTE/SPRZECZNE; przegląd zastępczy dla 48 twierdzeń krytycznych. Raport: `docs/tresci/E3-karty-p3-2026-11-02.md`.
- Kontrole: `npm test` 85/85 (niezmienniki pl–en dla 12 par kart: 0 problemów), `check:granice`, `check:catalog`, `check:tresci`, `build` — kod 0. Karty `publication: ukryta`.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p3`)
Zakres partii 3; papryka zawsze w słoikach sterylnych i tylko do 473 ml; brzoskwinie o białym miąższu: ostrzeżenie + mrożenie; slugi (brzoskwinia-nektarynka).

## Otwarte
Ocet 10%/6% w PL przy piklach (nowe twierdzenie albo reguła JarAtlas); katalog peach-nectarine-v06 (nektarynki, „lekki syrop”); SLO-048 cytat o zdrowych jabłkach; „use smaller jars” w kartach p1–p2 bez przypisania JarAtlas; teksty UI `site/teksty/{en,pl}.json` i tekst D-027 (c) (rola 04).

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, P2).

## Następny krok
Kolejka koordynatora: partia 4 en/pl (kandydaci: buraczki w occie beetroot-v06, brzoskwinie/morele w syropie apricot-v08, dżem brzoskwiniowy peach-nectarine-v07) albo ocet w PL. Przekład: po zgodzie właściciela (rola 09).
