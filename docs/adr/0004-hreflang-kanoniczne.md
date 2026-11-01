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
`<link>` w `<head>`, bo nie zależy od hostingu. Każda strona: `rel="canonical"` na własny pełny adres; `alternate` dla siebie i każdego języka, w którym ta sama encja (ten sam ID) ma stronę; `x-default` → `https://{domena}/`. Kody hreflang: `es-419`, `pt-BR`, `zh-Hant` jak w liście 35 języków. Domena w konfiguracji (`[DO USTALENIA]` do zakupu).
### Konsekwencje
- Dobre: zbiory alternatyw są symetryczne z konstrukcji (liczone z jednego planu). · Złe: większy `<head>` przy 35 językach (ok. 35 linii).
### Potwierdzenie
Test: dla każdej pary stron A↔B z planu A wskazuje B i B wskazuje A; każda wskazuje siebie; adresy absolutne; brak odnośnika do nieistniejącej strony.
