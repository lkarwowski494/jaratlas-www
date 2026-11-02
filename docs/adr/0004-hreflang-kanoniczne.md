---
status: przyjęta (fakty: Google localized-versions, odczyt 2026-11-01)
data: 2026-11-01
decyduje: hierarchia źródeł
---
# 0004. hreflang dwukierunkowy tylko między istniejącymi wersjami; kanoniczny = sam adres
## Kontekst i problem
Fale językowe: strona może istnieć w części języków. Google: „Each language version must list itself as well as all other language versions. Alternate URLs must be fully-qualified”; „you can omit some languages on some pages”.
## Rozważane opcje
- `<link rel="alternate" hreflang>` w `<head>` · hreflang w mapie strony · nagłówki HTTP
## Decyzja
`<link>` w `<head>`, bo nie zależy od hostingu. Każda strona: `rel="canonical"` na własny pełny adres; `alternate` dla siebie i każdego języka, w którym ta sama encja (ten sam ID) ma stronę; `x-default` → `https://{domena}/` (zmienione 2026-11-02: wersja en, patrz „Zmiana 2026-11-02” niżej). Kody hreflang: `es-419`, `pt-BR`, `zh-Hant` jak w liście 35 języków. Domena w konfiguracji (`[DO USTALENIA]` do zakupu).
### Konsekwencje
- Dobre: zbiory alternatyw są symetryczne z konstrukcji (liczone z jednego planu). · Złe: większy `<head>` przy 35 językach (ok. 35 linii).
### Potwierdzenie
Test: dla każdej pary stron A↔B z planu A wskazuje B i B wskazuje A; każda wskazuje siebie; adresy absolutne; brak odnośnika do nieistniejącej strony.

## Zmiana 2026-11-02 (rola 09, decyzja właściciela `2026-11-02-jaratlas-en-baza`)
`x-default` → pełny adres wersji **en** tej samej encji (`JEZYK_BAZOWY` w `site/konfiguracja.mjs`); encja bez wersji en nie ma `x-default` (Google: x-default jest opcjonalny; wskazanie `/` odpada, bo `/` ma kierować na `/en/`). Wariant „brak en → `/`” odrzucony: decyzja Claude, do weta. Test: `tests/site.test.mjs` „hreflang… x-default = wersja en”. `/` jako przekierowanie na `/en/`: otwarte (brak strony `/en/` i brak mechanizmu przekierowań na GitHub Pages, przekazanie roli 09 z 2026-11-02).

## Zmiana 2026-11-02 (rola 10 za 05): strony języka i `/`
- Strony `/{lang}/` to jedna encja `jezyk`: `alternate` między wszystkimi istniejącymi stronami języków, `x-default` → `https://jaratlas.com/en/` (ten sam mechanizm co wyżej), kanoniczny = własny adres.
- `/` nie ma `alternate` ani `x-default`; przy istniejącym `/en/` kanoniczny `/` = `https://jaratlas.com/en/` i refresh 0 s na `/en/` (ADR 0002, zmiana 2026-11-02). Otwarte zdanie wyżej („`/` jako przekierowanie na `/en/`: otwarte”) rozstrzygnięte tym wpisem.
- Testy: `tests/site.test.mjs` „strona języka: hreflang…”, „„/”: gdy /en/ jest w planie…”.
