# Stan pracy JarAtlas

Aktualizacja: 2026-11-02, noc (sesja session_01T66VBwyJvmX8oKW8dPtqL2). Historia: `docs/archiwum/` (poprzedni stan: `STAN-SESJI-2026-11-02-10-czyste-repo.md`).

## Rola i etap
06-tresci · build · partia 7 kart fali 1 (en, pl), kąpiel wodna z cytatem · **STOP** (przekazanie do koordynatora, tryb nocny). Prompt: tablica, kolekcja `prompty`, `06-tresci-build-d32b4b8`.

## Wynik
- Partia 7 en+pl (8 kart), warianty zakwaszane o najwyższym ryzyku:
  - zucchini-v08 = NCHFP Zucchini-Pineapple;
  - bell-pepper-v09 = NCHFP Marinated Peppers, z ostrzeżeniem OLE-002, OLE-036 i OLE-029;
  - corn-v09 = NCHFP Corncob Jelly with Pectin;
  - chili-pepper-v13 = NCHFP Golden Pepper Jelly.
- Nowe twierdzenia ACI-259–294, slugi en/pl (nowe produkty corn/kukurydza, chili-pepper/papryczka-chili). Łącznie 25 wariantów, 50 kart.
- Weryfikacja zastępcza D-027:
  - przebieg 1: 114 POPARTE, 5 CZĘŚCIOWO, 0 NIEPOPARTE, 0 SPRZECZNE, 67/67 cytatów, plus luka L1 (papryka w oleju poza przepisem);
  - przebieg 2: 6/6 POPARTE.
- Przegląd zastępczy wpisany dla 53 twierdzeń. Raport: `docs/tresci/E3-karty-p7-2026-11-02.md`.
- Kontrole: `npm run check` kod 0 (testy 113/113, granice, katalog, treści 0/0, build, rozmiar). Karty `publication: ukryta`, katalog bez zmian.

## Decyzje Claude, do weta (tablica `2026-11-02-jaratlas-06-karty-p7`)
- Zakres: 4 warianty; green-cherry-tomato-v14 odłożony (pomidorki koktajlowe nie są wymienione w NCHFP).
- Galaretki tylko bez wcześniejszej sterylizacji słoików (czasy 10/15/20 min).
- corn-v09: przepis dokładnie, z kolbami pastewnymi i pektyną z testu (ACI-283).
- „46 oz” liczone jako uncje płynu (ACI-260).
- Słoik 1/2 pinty: do 236 ml (ACI-294).
- Wspólna reguła proporcji (ACI-265).

## Otwarte
- corn-v09 ma w katalogu `acidBasis: acidified`, choć przepis nie dodaje kwasu („acidic as tested”). Zmiana katalogu jest osobną zmianą z przeglądem D-043.
- `przeglad.sha` e3b0c44298fc dla twierdzeń bez zdań (do decyzji 05/07).
- Uwagi opcjonalne weryfikatora (raport E3 p7).
- Bez zmian z `docs/archiwum/STAN-SESJI-2026-11-02-10-czyste-repo.md`: D1–D11 czystego repo, morele E3-002, Clemson SZY-026, teksty UI i D-027 (c).

## Następny krok
06-tresci partia 8: 36 wariantów kąpieli wodnej z cytatem bez kart (264 ok-zrodlo bez kart łącznie). Kandydaci: tomato-v11, tomato-v13, apricot-v06/v11, pineapple-banana-v07, garden-herbs-v12, peach-nectarine-v12.
