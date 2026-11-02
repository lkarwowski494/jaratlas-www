# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBxP4vaADnUxrBWDpgS). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-06-karty-p7.md`).

## Rola i etap
06-tresci · build · partia 8 kart fali 1 (en, pl), kąpiel wodna z cytatem · **STOP** (przekazanie do koordynatora session_01T66VBwcMqoZMzzYKc7CF9o, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Partia 8 en+pl (8 kart):
  - tomato-v13 = NCHFP Tomato Ketchup;
  - tomato-v11 = NCHFP Tomato Paste;
  - apricot-v06 = NCHFP Apricot Jam without Pectin, z ostrzeżeniem pH ACI-308;
  - garden-herbs-v12 = NCHFP Mint Jelly Pectin.
- Nowe twierdzenia ACI-295–323. ACI-265 rozszerzone. Slugi: nowy produkt garden-herbs/ziola-ogrodowe. Łącznie 29 wariantów, 58 kart.
- Weryfikacja zastępcza D-027:
  - przebieg 1: 115 POPARTE, 3 CZĘŚCIOWO, 0 NIEPOPARTE/SPRZECZNE, 80/80 cytatów, luki L1 (pomidory z przemarzniętych krzaków) i L2 (bez innych warzyw w koncentracie);
  - przebieg 2: 9/9 POPARTE.
- Przegląd zastępczy wpisany dla 56 twierdzeń. Raport: `docs/tresci/E3-karty-p8-2026-11-02.md`.
- Kontrole: `npm run check` kod 0 (testy 113/113, granice, katalog, treści 0/0, build, rozmiar). Karty `publication: ukryta`, katalog bez zmian.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p8`)
- Zakres: 4 warianty. Odłożone: apricot-v11, pineapple-banana-v07 (katalog `acidified` bez dodatku kwasu), peach-nectarine-v12 (żywność dla niemowląt).
- ACI-314: butelkowany sok z cytryny, gdy NCHFP pisze tylko „lemon juice”.
- ACI-308: ostrzeżenie pH dla dżemu morelowego.
- Dżem i galaretka: słoiki sterylizowane, 5/10/15 min.
- corn-v09 `acidBasis`: niewykonane, bo walidator nie pozwala bez zmiany reguły; backlog z opcjami (raport E3 p8).

## Otwarte
- corn-v09, apricot-v11, pineapple-banana-v07: `acidBasis` w katalogu a przepis bez dodatku kwasu. Zmiana katalogu idzie z przeglądem D-043.
- Uwagi opcjonalne weryfikatora (raport E3 p8).
- `przeglad.sha` e3b0c44298fc dla twierdzeń bez zdań (do decyzji 05/07).
- Bez zmian z poprzednich stanów: D1–D11 czystego repo, morele E3-002 (ekspert), Clemson SZY-026, teksty UI i D-027 (c).

## Następny krok
06-tresci partia 9: zostały 32 warianty kąpieli wodnej z cytatem bez kart (260 ok-zrodlo bez kart łącznie). Kandydaci: owoce w syropie i dżemy, np. sour-cherry-v09/v10, strawberry-v08/v14, plum-v14, pear-v07, grapes-v06/v07. Przed apricot-v11 i pineapple-banana-v07 potrzebna zmiana katalogu.
