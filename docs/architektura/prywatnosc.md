# Inwentarz prywatności strony (wejście dla roli 10)

Stan: 2026-11-01. Strona statyczna bez kont, formularzy, cookies i skryptów stron trzecich (test R5 w `tests/site.test.mjs`). Jedyny skrypt własny: `site/static/filtry.js` (czyta fragment adresu `#…`, nic nie zapisuje i nie wysyła).

| Dane | Skąd | Gdzie trzymane | Czy opuszczają przeglądarkę (dokąd, kiedy) | Cel | Czas życia |
|---|---|---|---|---|---|
| Adres IP, User-Agent, adres strony | żądanie HTTP | dzienniki hostingu | do hostingu przy każdym żądaniu | dostarczenie strony | `[DO USTALENIA]`: polityka hostingu po ADR 0007 |
| Fragment adresu (`#status=…`) | użytkownik | tylko przeglądarka | nie (fragment nie jest wysyłany do serwera) | filtr tabeli wariantów | karta przeglądarki |

- **Cookies i localStorage:** brak.
- **Zasoby zewnętrzne:** brak. Odnośniki do źródeł to zwykłe `<a rel="nofollow">`; nic nie ładuje się samo.
- **Required reason API (Apple):** nie dotyczy. To strona WWW, nie aplikacja iOS.
- **Zmiana stanu:** reklamy, analityka, czcionki albo obrazy z CDN wymagają decyzji właściciela, wpisu tutaj, oceny zgody (RODO/ePrivacy, `[DO USTALENIA]` dla roli 10) i zmiany testu R5.
- **Sekrety:** strona nie ma sekretów. Skrypt tłumaczeń (decyzja `2026-11-01-jaratlas-tlumaczenia-api`) bierze klucz API ze zmiennej środowiska; repo jest publiczne (zasada 14).
