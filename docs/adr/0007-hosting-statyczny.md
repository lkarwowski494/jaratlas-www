---
status: proponowana (decyzja właściciela; limity do odczytu w dniu decyzji)
data: 2026-11-01
decyduje: właściciel (koszt, konto); fakty o limitach: dokumentacja hostingu
---
# 0007. Hosting statyczny strony
## Kontekst i problem
`dist/` to czyste pliki statyczne. Potrzebne: koszt 0 zł, własna domena z HTTPS, przekierowania 301 dla wycofanych i przemianowanych adresów (ADR 0002, 0003), bez automatycznych przekierowań językowych.
## Rozważane opcje
- GitHub Pages (repo publiczne) · Cloudflare Pages · Netlify (plan darmowy)
## Do ustalenia przed decyzją `[DO USTALENIA]`
- Limity darmowe (rozmiar witryny, liczba plików, przepustowość, buildy) i obsługa 301 po stronie serwera: odczyt dokumentacji każdej opcji w dniu decyzji, z cytatem.
- Bez obsługi 301 (np. GitHub Pages) wycofany adres wymagałby strony z `rel=canonical` do następcy: słabsze niż 301.
## Decyzja
Brak. Generator jest niezależny od hostingu; dodamy plik przekierowań w formacie wybranego hostingu.
### Potwierdzenie
Po wyborze: test wygenerowanego pliku przekierowań i sprawdzenie `curl -I` na wdrożeniu (kod 301).
