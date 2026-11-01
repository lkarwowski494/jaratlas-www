# 06-tresci build · zadanie B (katalog v0 → v1) · E0 rozpoznanie

Data: 2026-11-01. Sesja: session_01T66VBydUNZSWLkpAUxjXNL. Prompt: `assemble.mjs 06-tresci --tryb build --moduly tresci-krytyczne,kontrole-mechaniczne` (kod 0, prompts@eb3b4e7).

## 1. Środowisko (sprawdzone komendami)
| Sprawdzenie | Wynik |
|---|---|
| System, Node | Linux 6.18, Node v22.23.4 |
| Repo | `jaratlas-www` publiczne (API bez logowania: 200), gałąź `claude/happy-brown-yncplj`, push na gałąź działa; brak CI, brak `CLAUDE.md`, `docs/sztafeta.md`, `docs/decyzje.md` |
| Repo Słoika | sklonowane (publiczne, `GIT_LFS_SKIP_SMUDGE=1`), tylko do odczytu |
| Biblioteka `prompts` | dodana do sesji, sklonowana; `assemble.mjs` uruchomiony (kod 0) |
| Sieć, UA `Apps4Brew-research/1.0` | 200: nchfp.uga.edu, fda.gov, efsa.europa.eu, fao.org (Codex), gov.pl/web/gis, extension.psu.edu, pmc.ncbi.nlm.nih.gov; 202: eur-lex. **403 (Akamai): cdc.gov, fsis.usda.gov** |
| Tablica decyzji | odczyt działa (116 wpisów); wpisy `2026-11-01-*` przeczytane |

Skutek blokady CDC i FSIS: cytatów z tych serwisów nie sprawdzę dosłownie przez `curl`. Plan: (a) to samo twierdzenie ze źródła szczebla 1, które działa (NCHFP, FDA, EFSA, Codex, eur-lex); (b) gdy to jedyne źródło: odczyt narzędziem z oznaczeniem „z odczytu narzędziem, niesprawdzony dosłownie” i krok właściciela. FSIS jest ważny dla mięsa (azotyny, jerky, temperatury).

## 2. Wejście: założenia z poprzednich artefaktów (hipotezy, nie prawda)
| Założenie | Źródło | Status |
|---|---|---|
| Zakres C (całe domowe przetwórstwo, z mlekiem, mięsem i rybami) i wejście A (strona produktu) | nagłówek katalogu v0, przekazanie §4 | decyzja właściciela; mięso może trafić gdzie indziej, katalog pełny |
| 105 produktów, 1360 wariantów | katalog v0 | **podważone mechanicznie:** skrypt policzył 1365 pozycji; 8 grup ma inną liczbę niż w nagłówku (np. `mold-ripened-cheese` 5 zamiast 7). Dokładne liczenie w E1 |
| „Potrójna tyndalizacja 100 °C lub szybkowar 121 °C” jako alternatywy (wytyczna nr 2 katalogu) | katalog v0 | **sprzeczne** z NCHFP (cytat w przekazaniu §5.2); weryfikuję u źródła w E1 |
| Research 27 (fala 1) | raport agenta | opinia; 3 cytaty sprawdzone ręcznie, reszta [WF] do sprawdzenia |
| BRD 0.1 | Słoik `docs/brd/` | nie jest źródłem wartości (decyzja 2026-11-01) |

Brakujące wejście wymagane przez kontrakt roli: `docs/scope-contract.md` (rola 03) i `docs/design/` (rola 04). **Wyjątek nazwany:** v1 to dane katalogu bez tekstów dla użytkownika, więc przewodnik głosu nie jest potrzebny; zakres biorę z decyzji na tablicy (zakres C, wejście A, fale C). Kontrola zastępcza: każda decyzja o zakresie (usunięcie, scalenie, „poza zakresem”) idzie do właściciela na bramce E1. Bramka opłacalności (zasada 20): wynik jest na tablicy (`2026-11-01-jaratlas-bramka-wynik`); raport `audit/02-…` z poprzedniego kontenera nie istnieje w repo.

## 3. Inwentarz twierdzeń (czego katalog „twierdzi”)
Katalog v1 nie zawiera treści kart, ale sam jest zbiorem twierdzeń bezpieczeństwa: przypisanie wariantu do rodziny, metody utrwalania i `safetyStatus` mówi użytkownikowi „to da się zrobić tak” albo „tego nie rób”.

| Kategoria twierdzeń | Gdzie w v1 | Krytyczne |
|---|---|---|
| Progi rodzin (pH, sól, temperatura, czas, ciśnienie, azotyny, aw) | `processFamily.thresholds[]` → ID w rejestrze | tak |
| Klasyfikacja kwasowości produktu (kwaśny / niskokwasowy / graniczny, np. pomidor, figa) | `product.acidity` → ID | tak |
| Reguła „niskokwasowe tylko szybkowar” i zakaz tyndalizacji | walidator + rejestr | tak |
| Reguły zakazów: olej z czosnkiem i ziołami, surowe mleko, wędzenie na zimno, surowe dojrzewające, water glassing, jaja w oleju, kawior domowy, puree niskokwasowe | `safetyStatus` + ID | tak |
| Przetestowany przepis dla wariantu (`ok-zrodlo`) | `variant.sources[]` | tak |
| Cechy filtrów (czas do gotowości, sprzęt, przechowywanie) | `variant` | czas i przechowywanie: tak, jeśli wynikają z reguły bezpieczeństwa |
| Sezon, kategoria składnika, smak, trudność | `product`, `variant` | nie (sezon zależny od regionu: TRE-03) |
| Granice z aplikacjami portfela (Piekarz, Piwowar, Napar), destylacja wykluczona, status prawny alkoholi | mosty | prawne: tak (35 krajów) |

Liczby z katalogu v0 (regexem, przybliżone): tyndalizacja 18 pozycji, szybkowar/autoklaw 7, olej/oliwa/tłuszcz 104, „na zimno” 7, surowe mleko 1, woda wapienna 2, mięso dojrzewające/suszone 32, puree/przecier/krem 23. Rachunki na danych użytkownika: w v1 brak.

## 4. Hierarchia źródeł (decyzja merytoryczna)
Z przekazania §3.4 (projekt ją ustalił), zaostrzona modułem `tresci-krytyczne`:
1. przepisy i wytyczne urzędowe: NCHFP/USDA (Complete Guide), FDA, CDC, FSIS, Codex, EFSA, rozporządzenia UE (eur-lex), GIS;
2. publikacje recenzowane i monografie;
3. extension services uczelni, instytuty;
4. serwisy popularne ze źródłami: tylko kontekst z atrybucją, **nigdy granica ani ocena bezpieczeństwa**;
5. Wikipedia: tylko wskazówka.

Dla liczb, granic i ocen bezpieczeństwa wymagany szczebel 1–3. Jurysdykcja: NCHFP to USA; rynki fali 1 (fr, es, de, it, pl) są w UE, więc tam, gdzie UE ma przepis (azotany i azotyny w mięsie, surowe mleko), podaję oba i różnicę.

## 5. Moduły
- `tresci-krytyczne`: tak; bezpieczeństwo żywności (jad kiełbasiany, listeria, azotyny, pasożyty, ołów).
- `kontrole-mechaniczne`: tak; skrypt na rejestrze i na każdym tekście z liczbami (opisy rodzin, `notes`, raport v0→v1).
- `historia-i-miejsca`: nie; nazwy regionalne potraw nie są twierdzeniami historycznymi (nie piszemy pochodzenia bez źródła).

## 6. Proponowany model danych v1 (do decyzji w pytaniach)
- `processFamily`: id, nazwa, `thresholds[]` (wielkość, wartość, jednostka, granica `<=`/`<`, ID twierdzenia albo `null` + pytanie otwarte), `allowedMethods[]`.
- `product`: id (z v0), kategoria, `acidity` (`acid` / `low-acid` / `borderline` + ID twierdzenia), sezon (opcjonalnie, z regionem).
- `variant`: id (stały, angielski kebab), `productId`, `processFamilyId`, `preservationMethod` (lodówka, kąpiel wodna, szybkowar, suszenie, zamrażanie, przechowywanie w temperaturze pokojowej), filtry, `safetyStatus`, `sources[]`, `claims[]`, `notes`, `publication`.
- `publication`: `ukryta` (domyślnie) / `opublikowana`; walidator pozwala na `opublikowana` tylko przy pełnej treści i statusie `ok-zrodlo` (decyzja `2026-11-01-jaratlas-bramka-wynik`: karty bez pełnej treści ukryte, poza mapą strony).
- Testy walidatora (z przekazania §5.4 i własne): niskokwasowy + kąpiel wodna = błąd; `ok-zrodlo` bez źródła = błąd; tyndalizacja dla niskokwasowych = błąd; `ryzyko-wysokie`/`nie-publikowac` z `publication: opublikowana` jako instrukcja = błąd; próg bez ID twierdzenia = błąd; duplikat ID = błąd.

## 7. Plan i szacunek (czas agenta)
| Etap | Co | Agent | Oczekiwanie | Właściciel |
|---|---|---|---|---|
| E1 | research po rodzinach (do 8 agentów badaczy równolegle), samodzielne sprawdzenie kluczowych progów w surowym tekście, rejestr `rejestr.json`, klasyfikacja 1365 pozycji (scalenia, przeniesienia, „poza zakresem” do decyzji) | 3–5 h [ZAŁOŻENIE] | sieć, limity serwisów (429) | decyzje E1: ok. 20 min |
| E2 | schemat, walidator, testy (najpierw czerwone), `catalog-seed.json`, skrypt kontroli z `--przed-przegladem` | 1–2 h | — | — |
| E3 | niezależna weryfikacja (subagent w świeżym kontekście), drugi werdykt dla `ryzyko-wysokie` i `nie-publikowac`, skrypt `--przeglad zastępczy`, raport v0→v1, przekazanie | 1–2 h | — | akceptacja: ok. 15 min |

Zużycie tokenów: wysokie (badacze równolegle; rząd kilku mln) [ZAŁOŻENIE, do kalibracji].

## 8. Miejsce treści (domyślna decyzja, weto właściciela)
Brak `CLAUDE.md`, więc domyślnie `docs/tresci/` w tym repo: rejestr z cytatami najwyżej 1–2 zdania, kontrola, raporty. Kopie surowych stron źródeł **nie** trafiają do publicznego repo: zapisuję adres, datę odczytu i SHA-256 pobranego tekstu, a kopie trzymam w scratchpadzie (znikną z kontenerem; da się je pobrać ponownie). Opcja: prywatne repo „warsztat” na kopie (krok właściciela, 0 zł).
