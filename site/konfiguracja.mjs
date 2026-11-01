// Jedyne miejsce liczb i list konfiguracyjnych strony (ADR 0001–0005).
// Lista 35 języków: przekazanie Słoika §4 (decyzja 2026-11-01-sloik-atlas-domena-jezyki).
export const JEZYKI = ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'es-419', 'et', 'fi', 'fr', 'hr', 'hu', 'id', 'it', 'ja', 'ko', 'lt', 'lv', 'ms', 'nb', 'nl', 'pl', 'pt', 'pt-BR', 'ro', 'ru', 'sk', 'sl', 'sr', 'sv', 'tr', 'uk', 'vi', 'zh-Hant'];
// Fala 1 (przekazanie §4). Generator buduje każdy język, który ma slugi i treść; lista służy raportom.
export const FALA_1 = ['en', 'fr', 'es', 'de', 'it', 'pl'];
// Pisma niełacińskie: slug w swoim piśmie (ADR 0002).
export const PISMA_NIELACINSKIE = ['bg', 'el', 'ja', 'ko', 'ru', 'sr', 'uk', 'zh-Hant'];
// Domena: [DO USTALENIA] do zakupu (przekazanie §8). Bez końcowego ukośnika.
export const DOMENA = process.env.JARATLAS_DOMENA || 'https://jaratlas.com';
// Google build-sitemap (odczyt 2026-11-01): „50MB (uncompressed) or 50,000 URLs”.
export const LIMIT_ADRESOW_MAPY = 50000;
export const katalogJezyka = (kod) => kod.toLowerCase(); // /pt-br/, /zh-hant/; hreflang zachowuje kod
// Znaczniki zaślepek: strona z nimi nie powstaje (ścieżka ryzyka R2, docs/architektura/ryzyka.md).
// Źródło: konwencje projektu ([PRZYKŁAD] — testy, [DO USTALENIA] — zasada 3 biblioteki); TODO/lorem — typowe zaślepki.
export const ZNACZNIKI_ZASLEPEK = [/\[PRZYKŁAD\]/, /\[DO USTALENIA\]/, /\bTODO\b/, /lorem ipsum/i];
