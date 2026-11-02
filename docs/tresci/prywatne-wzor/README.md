# Wzór katalogu `jaratlas/` w repo prywatnym (ADR 0008)

Skopiuj cztery pliki do repo prywatnego jako `jaratlas/README.md`, `jaratlas/rejestr-prywatny.json`, `jaratlas/zakazane-nazwy.json`, `jaratlas/wyjatki-nazw.json`. Wzór w repo publicznym jest pusty i taki zostaje.

## Zasady (właściciel, 2026-11-02)
1. Wiedzę z kupionych źródeł opisujemy własnymi słowami; nie cytujemy na stronie ani w repo publicznym.
2. Źródła kupionego nie podajemy publicznie: ani na stronie, ani w `jaratlas-www` (nazwa, wydawca, tytuł, wydanie, strony, cytaty — także w commitach, testach, raportach, tablicy decyzji).
3. Tylko źródła kupione; źródła publiczne zostają w rejestrze publicznym jak dotąd.
4. Przy sprzeczności z wytycznymi szczebla 1 (np. NCHFP) wygrywa szczebel 1. Ograniczenia zakresu z decyzji właściciela obowiązują dalej.

## Co jest gdzie
- Repo prywatne `jaratlas/rejestr-prywatny.json`: `zrodla` (ZP-xx → tytuł, wydanie, wydawca, plik) i `wpisy` (PRV-0000 → `zrodlo`, `miejsce`, `cytatWeryfikacji` (krótki), `sol` (32 hex, losowa, np. `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`), `szczebel`, `twierdzenie` (ID publiczne), `przegladD027d`, `notatka`).
- Repo prywatne `jaratlas/zakazane-nazwy.json`: `nazwy` do wyszukiwania w repo publicznym.
- Repo prywatne `jaratlas/wyjatki-nazw.json`: stan zastany (nazwy z cytatów publicznych ulotek sprzed ADR 0008), plik → numer nazwy → liczba; nowe wpisy tylko z decyzją.
- Repo publiczne `docs/tresci/rejestr.json`: w `zrodla[]` tylko `{ typ: "prywatne", ref, szczebel, odczyt, weryfikacja, skrot }`; skrót = `skrotRekordu(wpis)` z `tools/zrodla-prywatne.mjs`.

## Przed każdym pushem do `jaratlas-www`, który dotyka twierdzeń ze źródłem prywatnym
```
node tools/zrodla-prywatne.mjs --prywatne <ścieżka klonu repo prywatnego>
```
Kod 0 = brak zakazanych nazw w plikach i wiadomościach commitów oraz zgodne skróty. Raport nie powtarza nazw.

## Gałęzie
Zmiany w repo prywatnym na gałęzi roboczej (np. `jaratlas-r1`), nie na `main`, chyba że właściciel zgodzi się inaczej.
