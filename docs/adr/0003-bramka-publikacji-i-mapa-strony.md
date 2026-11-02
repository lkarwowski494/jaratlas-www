---
status: przyjęta (wynika z decyzji i przekazania §6.7)
data: 2026-11-01
decyduje: hierarchia źródeł (Google) + decyzje właściciela o publikacji
---
# 0003. Strona powstaje tylko z treścią; mapa strony tylko z powstałych stron
## Kontekst i problem
Google (przekazanie §6.7, „doorway abuse”) i zasada „bez zaślepek”. Dziś 0 z 1432 wariantów jest opublikowanych.
## Rozważane opcje
- Bramka liczona w generatorze z katalogu i plików treści · ręczna lista stron do publikacji
## Decyzja
Jedna czysta funkcja `planStron(katalog, slugi, tresci)` zwraca listę stron; generator, hreflang i mapa strony korzystają tylko z niej.
- Wariant w języku L: `publication: opublikowana`, `scope: in`, nie `retired`, status ≠ `do-researchu`, przy `ryzyko-wysokie`/`nie-publikowac` `cardType: warning`, istnieje treść karty w L i slug w L (walidator katalogu już pilnuje trzech pierwszych warunków).
- Produkt w L: ≥ 1 wariant opublikowany w L.
- Rodzina w L: własna treść rodziny w L (rodziny nie mają dziś treści).
- `/` (wybór języka): zawsze; języki na liście tylko z ≥ 1 stroną.
- Mapa strony: wszystkie strony z planu poza `/`; przy > 50 000 adresów podział i `sitemap-index.xml` (Google: „limit a single sitemap to 50MB (uncompressed) or 50,000 URLs”). Wycofane warianty nie trafiają do mapy.
### Konsekwencje
- Dobre: jedno miejsce reguły; mapa nie może zawierać zaślepki. · Złe: strona produktu znika, gdy wycofamy jedyny wariant (wtedy przekierowanie, ADR hostingu).
### Potwierdzenie
Testy: ukryty wariant nie ma pliku i nie jest w mapie; produkt bez opublikowanych wariantów nie ma pliku; podział mapy przy 50 001 adresach.

## Zmiana 2026-11-02 (rola 10 za 05)
- Strona języka `/{lang}/`: tylko przy ≥ 1 stronie encji (wariant, produkt, rodzina) w tym języku; wymienia tylko produkty i rodziny ze stronami. Jest w mapie strony; `/` nadal nie.
- `/`: lista języków = języki ze stroną języka. Test: „każdy odnośnik wewnętrzny prowadzi do strony z planu”.
