# SLO (sweet-preserves): raport, 2026-11-01

**Wynik:** 242/242 warianty, 109 twierdzeń (wszystkie `curl+grep`, status `potwierdzone`), 1 rodzina (`sweet-preserves`: 24 progi z twierdzeniem, 2 pytania, 18 reguł zakazu).

| status | wszystkie | bez `inny_klaster` |
|---|---|---|
| ok-zrodlo | 49 | 22 |
| do-researchu | 174 | 135 |
| ryzyko-wysokie | 18 | 18 |
| nie-publikowac | 1 | 1 |

`inny_klaster`: SZY 40 (kompoty, owoce w syropie, soki, musy: rodzina `canned-foods`, ale wypełnione źródłami NCHFP), ACI 7, MIE 7, NAP 5, SUS 3, FER 2, MLE 2. `poza_zakresem`: 2 (gianduja, orzechy w karmelu).

## Reguła dopasowania
`ok-zrodlo` tylko wtedy, gdy skład i proces są takie jak w przetestowanym przepisie (NCHFP, UC ANR, OSU). Dodatek spoza przepisu (wanilia, alkohol, orzechy, zioła, czekolada, inny gatunek owocu) daje `do-researchu`, a w `uwagi` podaję najbliższy przetestowany przepis. Warzywo niskokwasowe w słodkim przetworze bez przetestowanego przepisu, gdy mam pH ze źródła szczebla 1, daje `ryzyko-wysokie`.

## Najważniejsze ustalenia
1. **Pleśń na dżemie: wyrzucić cały słoik** (NCHFP FAQ i Storing, szczebel 1: USDA i mikrobiolodzy odradzają zdejmowanie; mykotoksyny; pleśń podnosi pH). Parafina niezalecana. Open kettle niezalecane, co dotyczy tradycyjnych powideł „zakręcanych na gorąco”.
2. **Masło dyniowe: `nie-publikowac` jako przetwór wekowany.** NCHFP: „We do not have a process we can recommend”; tylko lodówka krótko albo zamrażarka. Dżem dyniowy i warzywne „konfitury” (cebula, burak, marchew, cukinia, patison) mają `ryzyko-wysokie` (pH ze źródeł FDA i NCHFP, brak przepisu).
3. **Lemon curd ma przetestowany przepis** (NCHFP/UGA 2004): butelkowany sok, woda w wekowniku do 180 °F przed włożeniem słoików, 15 min (1/2 pinty), spożyć w 3–4 miesiące; albo zamrażarka do roku. Lime curd to wariant tego przepisu; innych kurdów NCHFP nie zaleca do wekowania.
4. **Czarny bez** (OSU EM 9446, szczebel 3): owoce zawsze gotować, usuwać szypułki i liście. Bez europejski (czyli polski) wekować tylko według proporcji wysokocukrowej (16 oz soku lub miąższu : 19,5 oz cukru, ważone). Bez koralowy (czerwony) wykluczyć. Sok z bzu jest wykluczony z procedury soków z sokownika (UC), więc mrozić.
5. **Miód:** nie dla niemowląt poniżej 12. miesiąca (FDA Bad Bug Book). Czosnek fermentowany w surowym miodzie ma `ryzyko-wysokie` (K-State: niskokwasowy, nieznana aktywność wody, botulizm). Cebulę, rzodkiew i chili w miodzie oznaczyłem `ryzyko-wysokie` przez analogię; zaznaczyłem to w `uwagi`.
6. Dżemy niegotowane i owoce ucierane na surowo z cukrem: w temperaturze pokojowej pleśnieją lub fermentują; lodówka do 3 tygodni, zamrażarka do roku (NCHFP). Dla tradycyjnej piwnicy nie ma źródła.
7. Sok z sokownika: „bottling” (nalanie na gorąco i zakręcenie bez wekowania) nie jest bezpieczny (UC ANR). Procedura UC (IV 2026) z wekowaniem obejmuje jabłka, winogrona i kwaśne soki (porzeczki, maliny itd.), a wyklucza czarny bez, melony, banany i figi.
8. Pestki moreli w dżemie: `ryzyko-wysokie` (EFSA 2016: ARfD 20 µg/kg; 0,37 g surowych pestek dla dorosłego).
9. Owoce w alkoholu, syropy kwiatowe i ziołowe oraz owoce kandyzowane w syropie nie mają przetestowanego przepisu szczebla 1–3. Mam tylko reguły: napar nie jest kwaśny (OSU); kandyzowane owoce trzymać do tygodnia w lodówce albo całkowicie dosuszyć (NCFSEN/Missouri).
10. NCHFP (FAQ): stare jabłka mogą mieć wyższe pH. Przepisy pozostają bez zmian, ale trzeba używać świeżych jabłek, a przy wątpliwości chłodzić lub mrozić.

## Sprzeczności z katalogiem v0
- `elderberry-v07` „zawsze gotowany dla rozkładu sambunigryny”: kierunek jest zgodny z OSU, ale v0 nie wspomina o wymaganej proporcji cukru. Sam gęsty sok bez cukru nie ma procesu wekowania.
- `pumpkin-v09` (masło dyniowe) i `pumpkin-v08` w grupie „pasteryzacja”: wekowanie jest niezgodne z NCHFP.
- `chokeberry-v08` „syrop pasteryzowany w niskiej temperaturze”: NCHFP dopuszcza pasteryzację niskotemperaturową tylko tam, gdzie przewiduje ją przepis.
- `garlic-v03`, `sour-cherry-v06`, `blueberry-v02`, `lemon-v05` („fermentowane w miodzie”) w v0 bez ostrzeżeń.
- `strawberry-v10` (kompot truskawkowy): truskawek nie ma na liście NCHFP owoców jagodowych do wekowania w całości.
- `currant-v09`, `cranberry-v12` (frużelina): NCHFP dopuszcza w nadzieniach do wekowania tylko Clear Jel.
- `apricot-v07`: pestki moreli w dżemie podane bez ostrzeżenia o cyjanku.

## Źródła i dostęp
Pobrano 106 unikalnych tekstów (strony i PDF) do `S/zrodla/` (indeks w `indeks.tsv`). Szczebel 1: NCHFP (strony i FAQ), FDA Bad Bug Book 2nd ed. (PDF fda.gov/media/83271), eCFR 21 CFR 172.575, EFSA Journal 2016;14(4):4424 (kopia PDF z air.unimi.it). Szczebel 3: OSU EM 9446, OSU Ask Extension, K-State, UC ANR MFP, NCFSEN/Missouri.
**Nieosiągalne:** efsa.europa.eu i efsa.onlinelibrary.wiley.com (403), pmc.ncbi.nlm.nih.gov (reCAPTCHA), NCHFP search (403). CDC i FSIS nie były potrzebne: twierdzenia o pleśni i miodzie mają źródło szczebla 1 (NCHFP, FDA).
**Uwaga techniczna:** dla 2 PDF (OSU EM 9446, NCFSEN) poza tekstem `-layout` zapisałem też tekst bez `-layout` ze znormalizowanymi spacjami (osobne sha12: d87a241c8da7, e54a4863f5da), bo w układzie dwukolumnowym zdania były łamane; cytaty sprawdzane są na tej wersji. Kilka cytatów NCHFP skróciłem, żeby ominąć twarde spacje (nbsp) w tekście.
**Instrukcje na stronach:** nie znalazłem.

## Propozycje do słownika
- `sweet-preserves` obejmuje też owoce w syropie „konfiturowym” (preserves NCHFP), więc granica z `canned-foods` (kompot) wymaga reguły: kryterium jest wypełnienie syropem lekkim/średnim i czasy dla owoców (canned-foods) albo gęsty syrop i krótki proces (sweet-preserves).
- Brakuje statusu na „bezpieczne tylko w lodówce/zamrażarce, wekować nie wolno” (masło dyniowe). Teraz to `nie-publikowac` z `preservationMethod: freezer`.
