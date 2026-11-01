# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBzeAaBqAvj8Qu1pbEj). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-karty-p2.md`).

## Rola i etap
09-lokalizacja · build · skrypt przekładu kart i slugów en → fr, es, de, it przez Claude API · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `09-lokalizacja-build-d32b4b8`.

## Wynik
- `tools/i18n/przeklad-api.mjs`: Message Batches, domyślnie tylko szacunek (płatnie wyłącznie `--wyslij`), `--limit` USD (domyślnie 2), `--zgoda-koszt`, `--jezyki`, `--wznow msgbatch_…`, `--zastosuj` → `docs/tresci/przeklady/` ze statusem „do przeglądu” (nigdy `docs/tresci/karty/` ani `site/`).
- `tools/i18n/niezmienniki.mjs`: kontrola każdego zdania — [T:ID], liczby (minus, ułamki, przecinek dziesiętny), °F/°C i symbole, jednostki słowne, pint/quart, nazwy własne. Kalibracja: karty pl vs en 0 problemów; >300 mutacji wykrytych w 100%.
- `.github/workflows/przeklad-tlumaczen.yml` (workflow_dispatch, nieuruchamiany), `tests/przeklad.test.mjs` (atrapa API, offline).
- Szacunek lokalny (przybliżenie): 4 języki × 211 segmentów, Opus 5.5 Batch ok. 1,02 USD; `docs/lokalizacja/kosztorys-przekladu-2026-11-02.md`.
- Nic płatnego nie uruchomiono; brak sekretu; karty `publication: ukryta`.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-09-skrypt-tlumaczen`)
Domyślnie szacunek; limit 2 USD; Opus 5.5 effort medium; kontrola niezmienników; status „do przeglądu” poza kartami; fetch bez SDK (ADR 0001).

## Otwarte
Zgoda właściciela na kwotę i model; sekret `ANTHROPIC_API_KEY`; workflow na main; forma zwracania się (rola 04); przegląd człowieka treści krytycznej przed publikacją języka; nadal otwarte z 06: krok „woda 1 cal nad słoikami”, ACI-015, SLO-018, teksty UI i D-027 (c).

## Backlog przed pierwszą publikacją
07-jakosc-004, 005, 008; asercja segmentów `.`/`..` w ścieżkach buildu; niewidoczne znaki w slugach (U+3164, U+034F); sprzątanie katalogów `ja-*` po testach build; zbędna stara reguła cardType przy publikacji (`tools/validate-catalog.mjs`, P2).

## Następny krok
Kolejka koordynatora: partia 3 en/pl (06). Przekład: po zgodzie właściciela — `tylko_szacuj=true` (count_tokens), przebieg dowodowy fr, drugi przegląd AI w świeżym kontekście, przegląd człowieka.
