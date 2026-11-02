# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VC11n5retNdpK9TZuxt). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-06-karty-p8.md`).

## Rola i etap
06-tresci · build · partia 9 kart fali 1 (en, pl), owoce w syropie i dżemy, kąpiel wodna z cytatem · **STOP** (przekazanie do koordynatora session_01T66VBwcMqoZMzzYKc7CF9o, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Partia 9 en+pl (8 kart):
  - sour-cherry-v09 = NCHFP Cherries-Whole, w wodzie bez cukru;
  - plum-v14 = NCHFP Plum Jam Pectin z renklod (pH renklod według FDA, ACI-325);
  - strawberry-v08 = NCHFP Strawberry Preserves;
  - grapes-v06 = NCHFP Grape Jelly Powdered Pectin (tylko Concord).
- Nowe twierdzenia: ACI-324–325, SLO-157–181. Nowy produkt w slugach: grapes/winogrona. Łącznie 33 warianty, 66 kart.
- Weryfikacja zastępcza D-027:
  - przebieg 1: 110 POPARTE, 2 CZĘŚCIOWO, 0 NIEPOPARTE/SPRZECZNE, 62/62 cytatów, luki L1 (drożdże i fermentacja) i L2 (tylko Concord);
  - przebieg 2: 6/6 POPARTE.
- Przegląd zastępczy wpisany dla 47 twierdzeń. Raport: `docs/tresci/E3-karty-p9-2026-11-02.md`.
- Kontrole: `npm run check` kod 0 (testy 113/113, granice, katalog, treści 0/0, build, rozmiar). Karty `publication: ukryta`, katalog bez zmian.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p9`)
- Zakres: 4 warianty. apricot-v11, pineapple-banana-v07 i peach-nectarine-v12 nietknięte (polecenie).
- sour-cherry-v09: woda bez cukru (ACI-237); nazwa w katalogu „we własnym soku” do zmiany (D-043).
- plum-v14: przepis na dżem śliwkowy dla renklod (FDA „Plums, Green Gage” 3,60–4,30), dokładnie według przepisu.
- strawberry-v08: zalecenia dla otwartych dżemów i galaretek zastosowane do konfitur, bez terminu 1 miesiąca.
- Dżem, konfitura, galaretka: słoiki sterylizowane, 5/10/15 min.

## Otwarte
- Backlog z raportu E3 p9:
  - ACI-067 bez cytatu do „w soku lub wodzie”;
  - L3: rodzaj pektyny;
  - L1 (drożdże i fermentacja) w kartach dżemów z wcześniejszych partii;
  - nazwa sour-cherry-v09 w katalogu.
- Bez zmian z p8: corn-v09, apricot-v11 i pineapple-banana-v07 mają w katalogu `acidBasis` niezgodny z przepisem (zmiana katalogu z przeglądem D-043); `przeglad.sha` e3b0c44298fc; D1–D11 czystego repo; morele E3-002 (ekspert); Clemson SZY-026; teksty UI i D-027 (c).

## Następny krok
06-tresci partia 10: zostało 28 wariantów kąpieli wodnej z cytatem bez kart (256 ok-zrodlo bez kart łącznie, 237 z cytatem). Kandydaci: sour-cherry-v10 (Berry Syrup), strawberry-v14 (Fruit Purées), grapes-v07 (sok), mirabelle-v06/v07, currant-v10/v13, raspberry-blackberry-v06/v07/v12. Warto też dopisać L1 do starszych kart dżemów.
