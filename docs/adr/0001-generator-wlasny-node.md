---
status: przyjęta
data: 2026-11-01
decyduje: właściciel (tablica `2026-11-01-jaratlas-szkielet-e0`)
---
# 0001. Strona budowana własnym generatorem w Node bez zależności
## Kontekst i problem
Strona JarAtlas.com powstaje z `catalog/catalog-seed.json` (1432 warianty, 105 produktów, 15 rodzin) w do 35 językach. Generator musi egzekwować bramkę publikacji, hreflang i mapę strony, których żaden generator nie da gotowych dla tego modelu danych.
## Czynniki decyzji
- Logika SEO i bezpieczeństwa (bramka publikacji, karty-ostrzeżenia) jest specyficzna dla katalogu i tak musi być napisana.
- Repo już używa samego Node (`node --test`, brak `node_modules`); koszt 0 zł.
- Repo publiczne: każda zależność to ryzyko łańcucha dostaw i aktualizacje.
## Rozważane opcje
- Własny skrypt Node (ESM, `node:fs`, `node:test`) · Eleventy · Astro
## Decyzja
Wybrano własny skrypt Node, bo cała nietrywialna logika i tak jest własna, a generator bez zależności buduje się i testuje tym samym `npm test`.
### Konsekwencje
- Dobre: zero zależności; deterministyczny wynik; testy na czystych funkcjach. · Złe: szablony, escapowanie HTML i podział mapy strony piszemy sami. · Od czego zależy: gdy dojdzie interaktywny interfejs (rola 04), wraca pytanie o bibliotekę po stronie klienta (nowy ADR).
### Potwierdzenie
`package.json` bez `dependencies`; `npm run build` tworzy `dist/`; testy `tests/site-*.test.mjs` sprawdzają wynik.
## Opcje: zalety i wady
### Eleventy — dojrzałe szablony i paginacja / zależności npm, logika bramki i hreflang i tak własna
### Astro — komponenty, integracja mapy strony / najcięższy stos, nadmiar przy stronie bez interakcji
