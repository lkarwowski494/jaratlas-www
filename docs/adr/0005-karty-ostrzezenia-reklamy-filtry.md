---
status: przyjęta
data: 2026-11-01
decyduje: decyzje właściciela (reklamy tylko na stronie, nigdy przy ostrzeżeniach; D-027 c) + Google (Recipe, fragmenty)
---
# 0005. Karty-ostrzeżenia bez Recipe i bez reklam; filtry na fragmencie adresu
## Kontekst i problem
Bezpieczeństwo żywności to problem realny (przekazanie §3.5). Reklamy dozwolone tylko na stronie, nigdy przy ostrzeżeniach.
## Rozważane opcje
- Szablon karty z typem (`recipe` / `warning`) i miejscami reklam jawnie wyłączonymi · jeden szablon z warunkami w treści
## Decyzja
- Typ szablonu z katalogu: `cardType: warning` dla `ryzyko-wysokie`/`nie-publikowac` (walidator już wymaga). Taka karta: bez `Recipe`, bez elementów `[data-ad-slot]`, pokazuje `requiredWarnings`.
- Każda karta z oceną bezpieczeństwa (wszystkie warianty) ma uwagę D-027 (c) w stałym elemencie `[data-uwaga="D-027c"]`; tekst uwagi pisze rola 06/04 (do tego czasu `[DO USTALENIA]` w pliku tekstów interfejsu).
- Strona produktu z jakimkolwiek wariantem-ostrzeżeniem: miejsca reklam tylko poza tabelą wariantów (decyzja: `[DO USTALENIA]` z rolą 02/04; szkielet nie wstawia reklam wcale).
- `Recipe` tylko dla `ok-zrodlo` z obrazem gotowej potrawy (dziś brak obrazów, więc 0 stron z `Recipe`).
- Filtry: stan w `#…`, JavaScript po stronie klienta, bez nowych adresów (Google: „If your filtering mechanism is based on URL fragments, it will have no impact on crawling”).
### Potwierdzenie
Testy: karta-ostrzeżenie bez `application/ld+json` typu Recipe i bez `data-ad-slot`; każda karta ma `data-uwaga="D-027c"`; brak linków z `?` w wygenerowanych stronach.
