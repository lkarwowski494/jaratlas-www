// Jedyne miejsce liczb i list konfiguracyjnych strony (ADR 0001–0005).
// Lista 35 języków: przekazanie Słoika §4 (decyzja 2026-11-01-sloik-atlas-domena-jezyki).
export const JEZYKI = ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'es-419', 'et', 'fi', 'fr', 'hr', 'hu', 'id', 'it', 'ja', 'ko', 'lt', 'lv', 'ms', 'nb', 'nl', 'pl', 'pt', 'pt-BR', 'ro', 'ru', 'sk', 'sl', 'sr', 'sv', 'tr', 'uk', 'vi', 'zh-Hant'];
// Fala 1 (przekazanie §4). Generator buduje każdy język, który ma slugi i treść; lista służy raportom.
export const FALA_1 = ['en', 'fr', 'es', 'de', 'it', 'pl'];
// Język bazowy (decyzja właściciela 2026-11-02-jaratlas-en-baza): cel hreflang x-default (ADR 0004).
export const JEZYK_BAZOWY = 'en';
// Pisma niełacińskie: slug w swoim piśmie (ADR 0002).
export const PISMA_NIELACINSKIE = ['bg', 'el', 'ja', 'ko', 'ru', 'sr', 'uk', 'zh-Hant'];
// Domena: kupiona 2026-11-01 (Porkbun, ważna do 2027-11-01). Bez końcowego ukośnika.
export const DOMENA = process.env.JARATLAS_DOMENA || 'https://jaratlas.com';
// Google build-sitemap (odczyt 2026-11-01): „50MB (uncompressed) or 50,000 URLs”.
export const LIMIT_ADRESOW_MAPY = 50000;
export const katalogJezyka = (kod) => kod.toLowerCase(); // /pt-br/, /zh-hant/; hreflang zachowuje kod
// Znaczniki zaślepek: strona z nimi nie powstaje (ścieżka ryzyka R2, docs/architektura/ryzyka.md).
// Źródło: konwencje projektu ([PRZYKŁAD] — testy, [DO USTALENIA] — zasada 3 biblioteki, [ZAŁOŻENIE], [DO DECYZJI] — dokumenty ról); TODO/lorem — typowe zaślepki.
// TODO z wielkością liter: hiszpańskie i portugalskie „todo” to zwykłe słowo (07-jakosc-004).
export const ZNACZNIKI_ZASLEPEK = [/\[PRZYKŁAD\]/, /\[DO USTALENIA\]/, /\[ZAŁOŻENIE\]/, /\[DO DECYZJI\]/, /\bTODO\b/, /lorem ipsum/i];
// Rozmiar dist/ (07-jakosc-008): GitHub Pages „Published GitHub Pages sites may be no larger than 1 GB” (ADR 0007, odczyt 2026-11-01);
// ostrzeżenie przy 800 MB (ADR 0007 „Potwierdzenie”). Jednostki dziesiętne: niższy z dwóch odczytów „GB”, więc ostrożniej.
export const ROZMIAR_DIST_OSTRZEZENIE = 800e6;
export const ROZMIAR_DIST_LIMIT = 1e9;

// Powód karty-ostrzeżenia (C13, B18-D2, E3-karty-p33 §2; decyzja Claude, do weta, 2026-11-02-jaratlas-c13-kod): słownik zamknięty
// powód → statusy, przy których wolno go podać. „Brak sprawdzonego źródła” tylko przy nie-publikowac: przy ryzyko-wysokie zaniżałby ryzyko.
// Pole opcjonalne (istniejące karty-ostrzeżenia go nie mają); tekst na stronie tylko z site/teksty/{lang}.json → powodyOstrzezenia (rola 04).
export const POWODY_OSTRZEZENIA = Object.freeze({
  'brak-sprawdzonego-zrodla': Object.freeze({ statusy: Object.freeze(['nie-publikowac']) }),
});
// Jedna reguła dla walidatora katalogu i buildu (przegląd D-043 C13 P2-1): null = poprawny, inaczej opis błędu.
export function bladPowoduOstrzezenia(v) {
  const pw = typeof v.warningReason === 'string' && Object.hasOwn(POWODY_OSTRZEZENIA, v.warningReason) ? POWODY_OSTRZEZENIA[v.warningReason] : undefined;
  if (!pw) return `warningReason „${v.warningReason}” spoza słownika (${Object.keys(POWODY_OSTRZEZENIA).join(', ')})`;
  if (v.cardType !== 'warning') return 'warningReason tylko na karcie-ostrzeżeniu (cardType warning)';
  if (!pw.statusy.includes(v.safetyStatus)) return `warningReason „${v.warningReason}” niedozwolony przy ${v.safetyStatus} (tylko ${pw.statusy.join(', ')})`;
  return null;
}
