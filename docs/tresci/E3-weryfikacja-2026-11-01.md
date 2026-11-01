# 06-tresci build · zadanie B · E3: weryfikacja zastępcza i przekazanie

Data: 2026-11-01. Decyzje: `2026-11-01-jaratlas-bramka-zakres` (przegląd zastępczy D-027), `2026-11-01-jaratlas-katalog-v1-e3-zakres` (zakres rozszerzony o ok-zrodlo).

## 1. Weryfikacja (7 subagentów w świeżym kontekście, bez notatek badaczy)
Instrukcja: `badania/E3/BRIEF-WERYFIKATOR.md`; wyniki: `badania/E3/*.json`; wprowadzenie: `tools/katalog-v1/e3.mjs` (deterministyczne, log `badania/E3/e3-log.json`).

| Weryfikacja | Zakres | Wynik |
|---|---|---|
| Twierdzenia krytyczne A (FER, ACI) | 227 | POPARTE 188, CZĘŚCIOWO 38, SPRZECZNE 1; cytaty 281/281 |
| Twierdzenia krytyczne B (SZY, SLO, OLE) | 206 | POPARTE 163, CZĘŚCIOWO 43; cytaty 274/274 |
| Twierdzenia krytyczne C (SUS, NAP, MLE, MIE, FRZ) | 222 | POPARTE 204, CZĘŚCIOWO 18; cytaty 264/264 |
| Drugi werdykt: ryzyko-wysokie i nie-publikowac | 197 | potwierdzone 181, zmiana 16 |
| Odpowiedniość ok-zrodlo (2 połowy) | 312 | potwierdzone 284, zmiana 28 |
| Rozstrzygnięcia agenta z E3 (osobny weryfikator) | 1 twierdzenie, 1 produkt, 15 wariantów | E3-001 POPARTE; gruszka CZĘŚCIOWO; 6 wariantów do do-researchu, 8 z dodatkowymi ostrzeżeniami |

- CZĘŚCIOWO i SPRZECZNE (100 twierdzeń): brzmienie zastąpione poprawką weryfikatora, poprzednie zachowane w `brzmienieE2`. Przykłady: SZY-005 (zdanie bez pokrycia w źródle), ACI-073 (bez brzoskwiń o białym miąższu), FER-013 („sól do konserw” ≠ peklosól), ACI-057/059 (dodane ciśnienie), MIE-030 (9 CFR 318.10 obecnie „[Reserved]”), MIE-035 (Trichinella w dziczyźnie odporna na mrożenie), MIE-055 (mrożenie ryb: limit FDA).
- `nieDoKart` (3): MIE-013 (2× limit azotynu USA), MIE-032 (140°F poniżej 144°F), MIE-030.
- Nowe twierdzenie E3-001 (NCHFP: nie wekować brzoskwiń o białym miąższu), zweryfikowane osobno.
- Moje rozstrzygnięcia odrzucone przez weryfikatora i cofnięte: ocet jabłkowy zamiast białego (2), „w galarecie” (2), kompoty (2). Przyjęte: proces w szybkowarze zamiast nazwy z „tyndalizacją” (5 z 8; 2 „w galarecie” → do-researchu), z ostrzeżeniami SZY-006/009.
- Obowiązkowe ostrzeżenia (`requiredWarnings`): 74 warianty (oleje i pesto, dzikie grzyby, gravlax, queso fresco, domowy ocet, brzoskwinie, gruszki/nashi, miód dla niemowląt, szybkowar).

## 2. Definicja ukończenia (build), punkt po punkcie
| Punkt | Dowód |
|---|---|
| Skrypt kontroli bez `--przed-przegladem` kod 0 na rejestrze, treściach i parametrach; przegląd zastępczy zapisany dla bieżącej wersji | `npm run check:tresci` → „0 błędów, 0 uwag”, kod 0 (`--przeglad zastępczy --konfiguracja docs/tresci/konfiguracja.json`); 656 twierdzeń krytycznych z `przeglad: { kto: "weryfikacja zastępcza (subagent)", data, sha }` |
| Potwierdzone twierdzenia mają źródło przeczytane w dniu pracy; żadne tylko na szczeblu 5; szczebel 3–4 z jednym źródłem oznaczony | 807 potwierdzonych, curl+grep, odczyt 2026-11-01; najwyższy szczebel 1–3 dla wszystkich; 183 z jednym źródłem szczebla 3 wyliczone w E1 |
| Sprzeczności rozstrzygnięte i zapisane; czego nie potwierdzono, w pytaniach | raport E1 §4–5, tu §1; `pytania-otwarte.md` (133); 13 twierdzeń roboczych poza statusami |
| Każde twierdzenie krytyczne ma werdykt weryfikatora, który nie był autorem | weryfikatorzy A/B/C + osobny dla E3-001; przegląd człowieka zastąpiony D-027 (wyjątek nazwany) |
| Parametry i wektory z ID twierdzeń | `parametry.json` (148; 102 z wektorami; zgodność ścisła 105, liczba w tekście 37, słownie 6); `konfiguracja.json` (105) sprawdzana skryptem |
| Publiczne repo bez kopii źródeł | w repo tylko indeks `badania/zrodla-indeks.tsv` (sha12, URL, data) i cytaty ≤ 1–2 zdania |
| Katalog (przekazanie §5.4) | `npm test` 20/20 (m.in. niskokwasowe w kąpieli wodnej i ok-zrodlo bez źródła = błąd); `npm run check:catalog` kod 0; raport `raport-v0-v1.md` |

D-027 dalej: (b) werdykty ostrożnościowe: przyjęte zawsze ostrzejsze propozycje; (c) przy każdej karcie z oceną bezpieczeństwa widoczna uwaga „ogólna wskazówka; w razie wątpliwości …” (do wdrożenia z rolą 04 przy kartach); (d) krok właściciela: przegląd eksperta, gdy strona zyska użytkowników.

## 3. Stan końcowy
`catalog/catalog-seed.json` 1.0.1: 1432 rekordy; ok-zrodlo 288, do-researchu 921, ryzyko-wysokie 139, nie-publikowac 47, wycofane 37; wszystkie `publication: ukryta`. Rejestr: 820 twierdzeń (807 potwierdzonych, 13 roboczych; 665 krytycznych).

## 4. Do decyzji właściciela
1. Reguła statusu dla 42 wariantów z kąpielą wodną w v0 dla żywności niskokwasowej: dziś `ryzyko-wysokie` (karta-ostrzeżenie) przy części, `nie-publikowac` przy innych (np. gołąbki vs bigos). Weryfikator wskazał niespójność; to decyzja o regule, nie o dowodach.
2. Następna rola (przekazanie §7): szkielet strony (repo, generator, hreflang, mapa strony tylko z opublikowanych) albo najpierw treść kart fali 1.
