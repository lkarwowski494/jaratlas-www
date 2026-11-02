// Niezmienniki przekładu kart (rola 09, zasada roli 3: „przekład twierdzenia to nowe twierdzenie”).
// Zdanie przetłumaczone przez model przechodzi tylko wtedy, gdy zachowuje: znaczniki [T:ID] (te same, w tej samej kolejności), wartości liczb
// (z minusem i ułamkami), symbole jednostek (°F, °C, ml, l, cm, mm, m, kg, g, %, pH), jednostki słowne (minuty, godziny, cale, stopy, szklanki,
// łyżki, funty, galony, metry; pint i quart zostają jako nazwy słoików US) oraz nazwy własne (NCHFP, USDA, JarAtlas).
// Dlaczego mechanicznie: zła liczba, °F zamiast °C albo „pinte” (pinta brytyjska ≈ 568 ml) zamiast pint US (≈ 473 ml) szkodzi tak samo jak w oryginale,
// a przegląd człowieka bywa nieuważny. Kontrola ma fałszywe alarmy po stronie ostrożnej: wątpliwe zdanie wraca do przeglądu, nigdy odwrotnie.
// Kalibracja: istniejące karty pl przechodzą względem en z zerem problemów (tests/przeklad.test.mjs).

const ZNACZNIK = /\[T:[^\]]*\]/g;
/* „half-pint” w źródle en to „1/2 pint” (karty pl piszą „1/2 pinty”): liczba 1/2 jest częścią rozmiaru słoika i musi przejść do przekładu. */
const bezZnacznikow = (t) => String(t ?? '').replace(ZNACZNIK, ' ').replace(/(?<![\p{L}])half-pint/giu, '1/2 pint');

export const znaczniki = (t) => String(t ?? '').match(ZNACZNIK) ?? [];

/* Liczby: znak minus (U+2212 albo „-”) tylko wtedy, gdy przed nim nie stoi litera ani cyfra; półpauza „–” to zakres, nie minus. */
const LICZBA = /(^|[^\p{L}\p{N}])([−-])?(\d+(?:[.,]\d+)*)(?:\/(\d+))?/gu;

/** Wartości liczb jako tekst znormalizowany ('-18', '1.3', '1/2'), posortowane; `problemy` — formaty niejednoznaczne.
 * Źródło en: kropka dziesiętna, przecinek tylko jako separator tysięcy (1,000). Język docelowy (fr, es, de, it, pl): przecinek dziesiętny,
 * bez separatora tysięcy; kropka między cyframi jest odrzucana, bo „1.000” po niemiecku i włosku to tysiąc, a po angielsku jeden. */
export function liczby(t, jezyk) {
  const wartosci = []; const problemy = [];
  for (const m of bezZnacznikow(t).matchAll(LICZBA)) {
    let s = m[3];
    if (jezyk === 'en') {
      if (s.includes(',')) { if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, ''); else problemy.push(s); }
    } else {
      if (s.includes('.')) { problemy.push(s); wartosci.push(`?${s}`); continue; }
      s = s.replace(',', '.');
      if (s.includes(',')) { problemy.push(m[3]); wartosci.push(`?${m[3]}`); continue; }
    }
    const v = String(Number(s));
    wartosci.push(`${m[2] ? '-' : ''}${v}${m[4] ? `/${m[4]}` : ''}`);
  }
  return { wartosci: [...wartosci].sort(), kolejne: wartosci, problemy };
}

/* Pary liczba–jednostka w kolejności występowania. Jednostka to symbol albo pojęcie z leksykonu w pierwszym słowie po liczbie; liczba, po której stoi
 * zakres („70–75 °F”) albo ułamek („1 1/2 inches”), dziedziczy jednostkę następnej. Dlaczego: same zbiory liczb i jednostek przepuszczały zamianę
 * „10 minut … 12 godzin” na „10 godzin … 12 minut” i „6000 ft (1800 m)” na „1800 ft (6000 m)” (przegląd D-043, 2026-11-02).
 * Porównanie jako zbiór par: para bez jednostki po jednej stronie pasuje do tej samej liczby z jednostką po drugiej („quarts for 20” ↔ „quart 20 minut”),
 * sprzeczne jednostki nie. Kolejność nie odrzuca (polski szyk przestawia liczby w poprawnych przekładach), ale daje uwagę dla recenzenta: uwagi(). */
const KOTWICE = {};
const kotwice = (jezyk) => (KOTWICE[jezyk] ??= Object.entries(LEKSYKON[jezyk]).map(([k, re]) => [k, new RegExp(re.source, 'iuy')]));
const SYMBOL_PO = /[\s]?(°F|°C|ml|mL|cm|mm|kg|g|l|L|m|%)(?![\p{L}])/uy;
export function pary(t, jezyk) {
  const s = bezZnacznikow(t); const wynik = [];
  const lista = [...s.matchAll(LICZBA)].map((m) => ({ koniec: m.index + m[0].length, poczatek: m.index + m[1].length }));
  const wart = liczby(t, jezyk).kolejne;
  for (let i = 0; i < lista.length; i++) {
    const k = lista[i].koniec;
    SYMBOL_PO.lastIndex = k; const sym = SYMBOL_PO.exec(s);
    let jedn = sym ? (sym[1] === 'mL' ? 'ml' : sym[1] === 'L' ? 'l' : sym[1]) : null;
    if (!jedn) {
      const ws = /[\s]*-?/uy; ws.lastIndex = k; ws.exec(s); const pocz = ws.lastIndex;
      const nast = lista[i + 1];
      if (nast && (nast.poczatek === pocz || /^[–-]$/.test(s.slice(k, nast.poczatek).trim()))) jedn = '→';
      else for (const [nazwa, re] of kotwice(jezyk)) { re.lastIndex = pocz; if (re.test(s)) { jedn = nazwa; break; } }
    }
    wynik.push({ w: wart[i], j: jedn });
  }
  for (let i = wynik.length - 1; i >= 0; i--) if (wynik[i].j === '→') wynik[i].j = wynik[i + 1]?.j ?? null;
  return wynik.map((x) => `${x.w}${x.j ? ` ${x.j}` : ''}`);
}

/* Symbole jednostek bezpośrednio po liczbie (ze spacją, także nierozdzielającą, albo bez) oraz każde „pH”. */
const SYMBOL = /\d\s?(°F|°C|ml|mL|cm|mm|kg|g|l|L|m|%)(?![\p{L}])/gu;
export function symbole(t) {
  const s = bezZnacznikow(t);
  const wynik = [...s.matchAll(SYMBOL)].map((m) => (m[1] === 'mL' ? 'ml' : m[1] === 'L' ? 'l' : m[1]));
  for (const _ of s.matchAll(/(?<![\p{L}])pH(?![\p{L}])/gu)) wynik.push('pH');
  return wynik.sort();
}

/* Jednostki słowne: pojęcie → wzorce w każdym języku (granice słowa przez \p{L}, bo \b nie działa dla ą, ó, ü). Porównanie jako zbiór:
 * model może powtórzyć albo pominąć powtórzone słowo („pints for 20 minutes and quarts for 25”), ale nie może zgubić ani dodać pojęcia. */
const S = (w) => new RegExp(`(?<![\\p{L}])(?:${w})(?![\\p{L}])`, 'iu');
const SLOIKI = { pint: S('pints?'), quart: S('quarts?') };
export const LEKSYKON = {
  en: { day: S('days?'), week: S('weeks?'), month: S('months?'), year: S('years?'), minute: S('minutes?'), hour: S('hours?'), inch: S('inch|inches'), foot: S('feet|foot|ft'), cup: S('cups?'), pound: S('pounds?|lbs?'), gallon: S('gallons?'), tablespoon: S('tablespoons?|tbsp'), teaspoon: S('teaspoons?|tsp'), metre: S('metres?|meters?'), ...SLOIKI },
  pl: { day: S('dzień|dni|dnia|dniach'), week: S('tydzień|tygodni[eau]?|tygodniach'), month: S('miesiąc[ea]?|miesięcy|miesiącach'), year: S('rok[ui]?|lat[a]?'), minute: S('minut[aęy]?|minutach|minutami'), hour: S('godzin[aęy]?|godzinach|godzinami'), inch: S('cal[ae]?|cali|calach'), foot: S('stóp|stop[aęy]|stopach'), cup: S('szklan(?:ka|ki|kę|ek|kach|kami)'), pound: S('funt(?:a|y|ów)?'), gallon: S('galon(?:a|u|owi|em|ie|y|ów|om|ami|ach)?'), tablespoon: S('łyż(?:ka|ki|kę|ek|kach|kami)'), teaspoon: S('łyżecz(?:ka|ki|kę|ek|kach|kami)'), metre: S('metr(?:a|y|ów|ach)?'),
    /* polskie karty odmieniają nazwy słoików (pinta, pintę, pincie; kwarta, kwartę, kwarcie; quart, quarta, quartem, quarcie) — tylko w pl, języki fali 1 zostawiają pint i quart */
    pint: S('pint(?:a|y|ę|ach)?|pincie'), quart: S('quart(?:s|a|owi|em|y|ów|om|ami|ach)?|quarcie|kwart(?:a|y|ę|ach)?|kwarcie') },
  fr: { day: S('jours?'), week: S('semaines?'), month: S('mois'), year: S('ans?|années?'), minute: S('minutes?'), hour: S('heures?'), inch: S('pouces?'), foot: S('pieds?'), cup: S('tasses?'), pound: S('livres?'), gallon: S('gallons?'), tablespoon: S('cuillères? à soupe|c\\. à s\\.'), teaspoon: S('cuillères? à café|c\\. à c\\.'), metre: S('mètres?'), ...SLOIKI },
  es: { day: S('días?'), week: S('semanas?'), month: S('mes|meses'), year: S('años?'), minute: S('minutos?'), hour: S('horas?'), inch: S('pulgadas?'), foot: S('pies?'), cup: S('tazas?'), pound: S('libras?'), gallon: S('galón|galones'), tablespoon: S('cucharadas?'), teaspoon: S('cucharaditas?'), metre: S('metros?'), ...SLOIKI },
  de: { day: S('Tag|Tage|Tagen'), week: S('Wochen?'), month: S('Monat|Monate|Monaten'), year: S('Jahr|Jahre|Jahren'), minute: S('Minuten?'), hour: S('Stunden?'), inch: S('Zoll'), foot: S('Fuß'), cup: S('Tassen?'), pound: S('Pfund'), gallon: S('Gallonen?'), tablespoon: S('Esslöffeln?'), teaspoon: S('Teelöffeln?'), metre: S('Metern?'), ...SLOIKI },
  it: { day: S('giorn[oi]'), week: S('settiman[ae]'), month: S('mes[ei]'), year: S('ann[oi]'), minute: S('minut[oi]'), hour: S('ore|(?<=\\d[\\s]?)ora'), inch: S('pollic[ei]'), foot: S('piedi|piede'), cup: S('tazz[ae]'), pound: S('libbr[ae]'), gallon: S('galloni|gallone'), tablespoon: S('cucchiai[o]?'), teaspoon: S('cucchiain[oi]'), metre: S('metr[oi]'), ...SLOIKI },
};
export function jednostki(t, jezyk) {
  const lex = LEKSYKON[jezyk]; if (!lex) throw new Error(`brak leksykonu jednostek dla języka ${jezyk}`);
  const s = bezZnacznikow(t);
  return Object.entries(lex).filter(([, re]) => re.test(s)).map(([k]) => k).sort();
}

/* Nazwy własne: skróty z co najmniej trzech wielkich liter (NCHFP, USDA, UMN) i marka JarAtlas. */
export const nazwy = (t) => (bezZnacznikow(t).match(/(?<![\p{L}])(?:[A-Z]{3,}|JarAtlas)(?![\p{L}])/gu) ?? []).sort();

export const slugPoprawny = (s) => typeof s === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);

/** Pary bez wspólnego odpowiednika; para „v” (bez jednostki) pochłania „v j” z drugiej strony. */
function rozne(a, b) {
  const zlicz = (x) => x.reduce((m, k) => m.set(k, (m.get(k) ?? 0) + 1), new Map());
  const ma = zlicz(a); const mb = zlicz(b);
  for (const [k, n] of [...ma]) { const w = Math.min(n, mb.get(k) ?? 0); ma.set(k, n - w); mb.set(k, (mb.get(k) ?? 0) - w); }
  const pochlon = (x, y) => { for (const [k, n] of x) { const v = k.split(' ')[0]; if (k === v) continue; for (let i = 0; i < n && (y.get(v) ?? 0) > 0; i++) { x.set(k, x.get(k) - 1); y.set(v, y.get(v) - 1); } } };
  pochlon(ma, mb); pochlon(mb, ma);
  const lista = (m) => [...m].flatMap(([k, n]) => Array(Math.max(n, 0)).fill(k)).sort();
  return { zrodlo: lista(ma), przeklad: lista(mb) };
}

/** Uwagi dla recenzenta (nie odrzucają): liczby w innej kolejności niż w źródle — np. zamienione czasy dla pint i quart. */
export function uwagi(zrodlo, przeklad, jezyk) {
  const a = liczby(zrodlo, 'en').kolejne; const b = liczby(przeklad, jezyk).kolejne;
  return rowne([...a].sort(), [...b].sort()) && !rowne(a, b) ? [`kolejność liczb inna niż w źródle: ${a.join(' ')} → ${b.join(' ')}; sprawdź, czy wartości nie zamieniły się miejscami`] : [];
}

const rowne = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

/** Zdanie źródłowe en ↔ przekład w języku `jezyk` → lista problemów [{ rodzaj, zrodlo, przeklad }]; pusta = przekład zachował niezmienniki. */
export function porownaj(zrodlo, przeklad, jezyk) {
  const p = [];
  const dodaj = (rodzaj, a, b) => { if (!rowne(a, b)) p.push({ rodzaj, zrodlo: a, przeklad: b }); };
  dodaj('znaczniki', znaczniki(zrodlo), znaczniki(przeklad));
  const lz = liczby(zrodlo, 'en'); const lp = liczby(przeklad, jezyk);
  if (lz.problemy.length) p.push({ rodzaj: 'format liczby w źródle', zrodlo: lz.problemy, przeklad: [] });
  if (lp.problemy.length) p.push({ rodzaj: 'format liczby', zrodlo: [], przeklad: lp.problemy });
  dodaj('liczby', lz.wartosci, lp.wartosci);
  if (rowne(lz.wartosci, lp.wartosci)) { const r = rozne(pary(zrodlo, 'en'), pary(przeklad, jezyk)); if (r.zrodlo.length || r.przeklad.length) p.push({ rodzaj: 'liczby z jednostkami', ...r }); }
  dodaj('symbole', symbole(zrodlo), symbole(przeklad));
  dodaj('jednostki', jednostki(zrodlo, 'en'), jednostki(przeklad, jezyk));
  dodaj('nazwy', nazwy(zrodlo), nazwy(przeklad));
  return p;
}
