---
status: przyjęta (2026-11-01, tablica `2026-11-01-jaratlas-hosting`)
data: 2026-11-01
decyduje: właściciel (koszt, konto); fakty o limitach: dokumentacja hostingu
---
# 0007. Hosting statyczny: GitHub Pages teraz, Cloudflare jako znana droga wyjścia
## Kontekst i problem
`dist/` to czyste pliki statyczne. Potrzebne: koszt 0 zł, własna domena z HTTPS, bez automatycznych przekierowań językowych. Od decyzji 2026-11-01 (`2026-11-01-jaratlas-adresy-i-repo`) adresy po publikacji się nie zmieniają, więc serwerowe 301 jest tylko na wyjątki (literówka w slugu, zmiana domeny).
## Czynniki decyzji
- Analogia z repo Trening (zasada `2026-11-01-zasada-analogia-trening`): apps4brew.com działa na GitHub Pages z osobnego repo z CNAME (trening `docs/monetyzacja.md` pkt 4, `docs/40-lekcje.md` R-017). Różnica: JarAtlas ma mieć reklamy.
- Skala (rachunek z katalogu 1.0.2, 2026-11-01): fala 1 (6 języków) ok. 3 600 stron; 35 języków przy dzisiejszych kartach ok. 20 800; cały katalog ok. 53 000; ok. 8 KB na stronę → ok. 420 MB.
- GitHub Pages (docs.github.com, odczyt 2026-11-01): „Published GitHub Pages sites may be no larger than 1 GB”; „soft bandwidth limit of 100 GB per month”; nie wolno używać jako darmowego hostingu dla „online business… primarily directed at… commercial transactions” (strona z treścią i reklamami: strefa szara). Bez serwerowego 301.
- Cloudflare Pages Free (developers.cloudflare.com/pages/platform/limits, odczyt 2026-11-01): „up to 20,000 files on the Free plan”; płatne plany do 100 000; 500 buildów/mies.; plik do 25 MiB; `_redirects` do 2 000 statycznych przekierowań 301.
- Cloudflare Workers Paid (developers.cloudflare.com/workers/platform/pricing i /limits, odczyt 2026-11-01): „minimum charge of $5 USD per month for an account”; „Requests to static assets are free and unlimited”; pliki statyczne na wersję: Free 20 000, Paid 100 000.
- Cloudflare Pro (cloudflare.com/plans, odczyt 2026-11-01): 20 USD/mies. przy płatności rocznej, 25 USD miesięcznie.
## Rozważane opcje
- GitHub Pages · Cloudflare Pages Free · Cloudflare Workers Paid (5 USD/mies.) · Cloudflare Pro (20–25 USD/mies.) · Netlify (nie sprawdzono)
## Decyzja
Właściciel 2026-11-01: **GitHub Pages teraz** („przeniesienie nie boli”), jak apps4brew.com w Treningu. Cloudflare zostaje znaną drogą wyjścia: przy regulaminowym problemie z reklamami albo przy limicie.
### Konsekwencje
- Dobre: 0 zł, zgodne z Treningiem, bez limitu liczby plików (tylko 1 GB).
- Złe: brak serwerowego 301 (wyjątki obsłużone stroną z `rel=canonical` do następcy); ryzyko wyłączenia przy reklamach; przenosiny = przerwa od godzin do 1–2 dni, jeśli zapas nie jest przygotowany.
- Droga wyjścia (rekomendacja przy przenosinach): Workers Paid za 5 USD/mies. mieści 100 000 plików (wystarczy na cały katalog w 35 językach) i nie liczy żądań do plików statycznych; Pro za 20–25 USD/mies. daje ten sam limit plików na Pages, ale jest 4–5× droższy. Obsługa `_redirects` w Workers static assets: `[DO USTALENIA]` w dniu przenosin. Koszt to wyjątek od zasady 13 biblioteki (narzędzia 0 zł), do decyzji właściciela.
- Od czego zależy: decyzja o reklamach (02/04); wzrost liczby stron powyżej ok. 500 MB.
### Potwierdzenie
- Build rozmiaru: kontrola rozmiaru `dist/` (ostrzeżenie przy 800 MB) do dodania przez 07.
- Po wdrożeniu: kontrola adresów na żywo (każdy adres z mapy = 200, treść = `dist/`) według trening `scripts/check-urls.mjs`.
- Workflow publikacji Pages: osobna zgoda właściciela (push na `main`, domena).
