---
status: przyjęta (wyjątek nazwany, zasada 7)
data: 2026-11-01
decyduje: właściciel (tablica `2026-11-01-jaratlas-szkielet-e0`)
---
# 0006. Wyjątek: kod szkieletu pisze rola 05, przegląd rola 07 w świeżym kontekście
## Kontekst i problem
Kontrakt roli 05 wyklucza kod aplikacji (kod: 08). Szkielet strony to głównie egzekucja ADR 0002–0005.
## Rozważane opcje
- 05 pisze kod z testami, kontrola zastępcza przegląd 07 · 05 tylko ADR, kod 08
## Decyzja
05 pisze generator i testy. Kontrola zastępcza: przegląd w świeżym kontekście (rola 07 albo `/code-review`) przed scaleniem z `main`.
### Konsekwencje
- Dobre: jedna sesja mniej. · Złe: autor ADR ocenia własny kod; łagodzi to przegląd 07.
### Potwierdzenie
Wpis w `docs/sztafeta.md`: przegląd 07 jako warunek scalenia.
