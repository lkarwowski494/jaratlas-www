#!/usr/bin/env node
// P1 (pokrycie źródeł, 2026-11-02): dopasowanie wariantów do-researchu z catalog-seed.json do indeksu NAZW przepisów
// testowanych (docs/tresci/P1-indeks-przepisow-*.json). Wynik: „pewne” / „mozliwe” / „brak” to tylko lista kandydatów
// do sesji research — nie ocena źródła i nie zmiana statusu (decyzja 2026-11-02-jaratlas-pokrycie-zrodel, B14-D3).
// Użycie: node tools/dopasuj-indeks.mjs <catalog-seed.json> <indeks.json> [--wynik <plik.json>]
// Kod 1: błąd danych wejściowych (format indeksu). Bez zależności npm (ADR 0001).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const METODY = ['kapiel-wodna', 'szybkowar', 'lodowka', 'mrozenie', 'suszenie', 'fermentacja', 'peklowanie-wedzenie',
  'nabial', 'napoj-fermentowany', 'ocet', 'olej', 'jaja', 'inne'];

export function normalizuj(s) {
  return String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l').replace(/Ł/g, 'L')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

// Rodzaj przepisu z nazwy angielskiej. Kolejność ma znaczenie (pierwsze trafienie wygrywa).
const TYPY_EN = [
  ['kiszonka', /\b(sauerkraut|kimchi|fermented|lacto)\b/],
  ['nadzienie', /\bpie fillings?\b/],
  ['relish', /\brelish(es)?\b/],
  ['chutney', /\bchutneys?\b/],
  ['salsa', /\bsalsas?\b/],
  ['galaretka', /\bjell(y|ies)\b/],
  ['marmolada', /\bmarmalades?\b/],
  ['dzem', /\bjams?\b/],
  ['konfitura', /\b(preserves|conserves?)\b/],
  ['marynata', /\b(pickles?|pickled|pickling|dilly|giardiniera|piccalilli|escabeche|chow chow)\b/],
  ['mus', /\bbutters?\b/],
  ['sos', /\b(ketchup|catsup|sauces?|barbecue)\b/],
  ['syrop', /\b(syrups?|juices?|cordials?|shrub)\b/],
  ['suszone', /\b(jerky|dried|drying|dehydrated|leathers?|chips|powder)\b/],
  ['musztarda', /\bmustard\b(?!\s+(seed|greens))/],
  ['pasta', /\bpastes?\b/],
];
export function typPrzepisu(nazwa) {
  const n = normalizuj(nazwa);
  if (/\bbread and butter\b/.test(n)) return 'marynata';
  if (/\b(apple|pear|peach|plum|pumpkin|fruit) ?sauce\b|\bapplesauce\b/.test(n)) return 'mus';
  for (const [typ, re] of TYPY_EN) {
    if (re.test(n)) return typ;
  }
  return null;
}

// Rodzaj wariantu z polskiej nazwy (rdzenie po normalizacji) i domyślny z rodziny procesu.
const TYPY_PL = [
  ['dzem', /\bdzem/], ['galaretka', /\bgalaret/], ['konfitura', /\bkonfitur/], ['mus', /\b(powidl|mus\b|musy\b|maslo|krem)/],
  ['marmolada', /\bmarmolad/], ['syrop', /\b(syrop|sok\b|soki\b|kordial|cordial|shrub|oxymel)/], ['nadzienie', /\bfruzelin/],
  ['sos', /\b(sos\b|sosy\b|ketchup|keczup)/], ['chutney', /\bchutney/], ['relish', /\brelish/], ['salsa', /\bsalsa/],
  ['marynata', /\b(marynow|marynat|occie|octow|konserwow|zalew)/], ['kiszonka', /\b(kiszon|kisz|malosol|fermentow|kimchi)/],
  ['suszone', /\b(suszon|susz\b|chipsy|czipsy|pastil|skork|proszek|jerky)/], ['musztarda', /\bmusztard/], ['pasta', /\bpast[ay]\b/],
];
const TYP_RODZINY = { 'vinegar-pickling': 'marynata', 'lacto-fermentation': 'kiszonka', drying: 'suszone' };
export function typyWariantu(w) {
  const n = normalizuj(w?.name?.pl);
  const s = new Set();
  for (const [typ, re] of TYPY_PL) if (re.test(n)) s.add(typ);
  if (s.has('marmolada')) s.add('dzem');
  if (s.size === 0 && TYP_RODZINY[w.processFamilyId]) s.add(TYP_RODZINY[w.processFamilyId]);
  return s;
}

// Terminy angielskie produktu: [mocne, słabe]. Słabe liczą się tylko, gdy nazwa przepisu nie trafia mocnego terminu innego produktu.
const T = (mocne, slabe) => [mocne, slabe];
const SLOWNIK = {
  cucumber: T('cucumbers?|gherkins?|cornichons?', 'pickles|bread and butter'),
  'white-cabbage': T('cabbage|sauerkraut|kraut|coleslaw'),
  'red-savoy-cabbage': T('red cabbage|savoy'),
  'napa-cabbage': T('napa|chinese cabbage|bok choy', 'kimchi'),
  cauliflower: T('cauliflower'), broccoli: T('broccoli'),
  'brussels-kohlrabi': T('brussels sprouts?|kohlrabi'),
  zucchini: T('zucchini|courgettes?|summer squash'), 'pattypan-squash': T('pattypan|scallop squash', 'summer squash'),
  pumpkin: T('pumpkins?|winter squash|butternut'), 'leafy-greens': T('spinach|kale|chard|collards?|greens'),
  'vine-leaves-greens': T('grape leaves|vine leaves|watercress|celtuce'),
  tomato: T('tomato(es)?'), 'green-cherry-tomato': T('green tomato(es)?|cherry tomato(es)?'),
  'bell-pepper': T('bell peppers?|sweet peppers?|pimientos?|roasted (red )?peppers?|red peppers?', 'peppers?'),
  'chili-pepper': T('hot peppers?|chiles?|chilis?|chillies|chilli|jalapenos?|habaneros?|cayenne|hot sauce|sriracha|pepper jelly', 'peppers?'),
  eggplant: T('eggplants?|aubergines?'), 'potato-sunchoke': T('potato(es)?|sunchokes?|jerusalem artichokes?'),
  tomatillo: T('tomatillos?|ground cherr(y|ies)|husk tomato(es)?|physalis|cape gooseberr(y|ies)'),
  'green-beans': T('green beans|snap beans|string beans|wax beans|dilly beans', 'beans'),
  'peas-chickpeas': T('peas|chickpeas|garbanzos?'), 'beans-soy': T('dry beans|dried beans|kidney beans|soybeans?|edamame|baked beans', 'beans'),
  beetroot: T('beets?|beetroots?'), carrot: T('carrots?'), garlic: T('garlic'), onion: T('onions?'),
  'shallot-pearl-onion': T('shallots?|pearl onions?|cocktail onions?'), 'leek-chives': T('leeks?|chives|scallions?|green onions?'),
  'daikon-black-radish': T('daikon|black radish(es)?', 'radish(es)?'), radish: T('radish(es)?'), horseradish: T('horseradish'),
  'celeriac-celery': T('celery|celeriac'), 'parsnip-parsley': T('parsnips?|parsley root'), 'turnip-rutabaga': T('turnips?|rutabagas?'),
  asparagus: T('asparagus'), 'fennel-artichoke': T('fennel|artichokes?'), corn: T('corn|maize'), olives: T('olives?'),
  capers: T('capers?|nasturtium'), 'ginger-turmeric': T('ginger|turmeric|galangal'),
  'european-mixed-veg': T('mixed vegetables?|vegetable soup|giardiniera|piccalilli|chow chow|mixed pickles?'),
  'balkan-oriental-mix': T('ajvar|lutenica|turshi|torshi|zacusca'),
  'asian-american-mix': T('curtido|escabeche|achara?|atchara'),
  apple: T('apples?|applesauce|cider'), pear: T('pears?'), quince: T('quinces?'), plum: T('plums?|prunes?|damsons?'),
  mirabelle: T('mirabelles?|cherry plums?|greengages?'),
  'sour-cherry': T('sour cherr(y|ies)|tart cherr(y|ies)|morello|pie cherr(y|ies)', 'cherr(y|ies)'),
  'sweet-cherry': T('sweet cherr(y|ies)|bing cherr(y|ies)', 'cherr(y|ies)'),
  'peach-nectarine': T('peach(es)?|nectarines?'), apricot: T('apricots?'), 'cornelian-cherry': T('cornelian|cornel|dogwood'),
  strawberry: T('strawberr(y|ies)'), 'raspberry-blackberry': T('raspberr(y|ies)|blackberr(y|ies)|boysenberr(y|ies)|marionberr(y|ies)|dewberr(y|ies)|loganberr(y|ies)'),
  currant: T('currants?'), gooseberry: T('(?<!cape )gooseberr(y|ies)'), 'blueberry-bilberry': T('blueberr(y|ies)|bilberr(y|ies)|huckleberr(y|ies)'),
  'cranberry-lingonberry': T('cranberr(y|ies)|lingonberr(y|ies)'), 'chokeberry-seabuckthorn': T('chokeberr(y|ies)|aronia|sea ?buckthorn|seaberr(y|ies)'),
  'elderberry-elderflower': T('elderberr(y|ies)|elder ?flowers?'), 'rosehip-rowan': T('rose ?hips?|rowan|mountain ash'),
  grapes: T('grapes?(?! leaves)|muscadines?|scuppernongs?'), rhubarb: T('rhubarb'), lemon: T('lemons?'), 'lime-bergamot': T('limes?|bergamot'),
  'orange-kumquat': T('oranges?|kumquats?|tangerines?|mandarins?|clementines?'), grapefruit: T('grapefruits?'),
  'mango-papaya': T('mangos?|mangoes|papayas?'), 'pineapple-banana': T('pineapples?|bananas?'), 'fig-pomegranate': T('figs?|pomegranates?'),
  'watermelon-melon': T('watermelons?|melons?|cantaloupes?'), 'walnut-nuts': T('walnuts?|hazelnuts?|almonds?|pecans?|chestnuts?|nuts'),
  boletes: T('porcini|boletes?|cep', 'mushrooms?'), 'chanterelle-milkcap': T('chanterelles?|milk ?caps?', 'mushrooms?'),
  'wild-mushrooms': T('wild mushrooms?|morels?', 'mushrooms?'), 'cultivated-mushrooms': T('button mushrooms?|oyster mushrooms?|shiitake', 'mushrooms?'),
  'wild-garlic': T('ramps?|wild garlic|ramsons|wild leeks?'), 'garden-herbs': T('herbs?|basil|mint|rosemary|thyme|oregano|sage|pesto|tarragon'),
  'foraged-blossoms': T('flowers?|blossoms?|lavender|violets?|dandelions?|rose petals?'),
  'koji-ferments': T('koji|amazake'), 'miso-garum': T('miso|shoyu|soy sauce|tamari|garum|fish sauce'), mustard: T('mustard(?! greens)'),
  'artisanal-vinegars': T('vinegars?'), 'fermented-beverages': T('kombucha|kvass|water kefir|ginger beer|mead|switchel|tepache'),
  'yogurt-skyr': T('yogh?urts?|skyr'), 'kefir-cream': T('kefir|sour cream|creme fraiche|buttermilk|cultured cream'),
  'quark-acid-cheese': T('quark|cottage cheese|ricotta|paneer|farmers? cheese|queso blanco|acid cheese'),
  'fresh-brined-cheese': T('feta|halloumi|brined cheese|queso fresco|cotija'),
  'pasta-filata-cheese': T('mozzarella|string cheese|pasta filata|kashkaval'),
  'aged-hard-cheese': T('cheddar|gouda|hard cheese|parmesan|colby|monterey jack|swiss cheese|tilsit', 'cheese'),
  'mold-ripened-cheese': T('camembert|brie|blue cheese|roquefort', 'cheese'),
  'butter-whey-cheese': T('ghee|whey|brunost|mysost', 'butter'),
  'pork-loin-ham': T('hams?|pork loin|canadian bacon', 'pork'), 'pork-shoulder-neck': T('pork shoulder|coppa|capicola', 'pork'),
  'pork-belly-jowl': T('bacon|pork belly|jowl|guanciale|pancetta|salt pork|lardo'),
  'smoked-cooked-sausages': T('kielbasa|frankfurters?|bologna|smoked sausages?', 'sausages?'),
  'dry-cured-sausages': T('salami|pepperoni|chorizo|summer sausages?|dry sausages?|fermented sausages?', 'sausages?'),
  'beef-veal': T('beef|veal|pastrami|bresaola', 'jerky'), poultry: T('chicken|turkey|duck|poultry|goose'),
  'game-lamb': T('venison|game|lamb|mutton|elk|rabbit|goat|moose'), 'offal-pates': T('liver|pates?|tongue|offal|head cheese|scrapple'),
  'sea-fish': T('salmon|tuna|mackerel|herring|sardines?|cod|seafood|clams?|shrimp|crab|oysters?', 'fish'),
  'freshwater-fish': T('trout|carp|pike|whitefish|perch|catfish|walleye', 'fish'), eggs: T('eggs?'),
};
const re = (alt) => (alt ? new RegExp(`\\b(?:${alt})\\b`) : null);
const TERMINY = Object.fromEntries(Object.entries(SLOWNIK).map(([id, [m, s]]) => [id, { mocne: re(m), slabe: re(s) }]));
export function terminyProduktu(id) {
  const t = TERMINY[id];
  if (!t) return [re(id.split('-').join('|'))];
  return [t.mocne, t.slabe].filter(Boolean);
}
function produktyPrzepisu(nazwa) {
  const n = normalizuj(nazwa);
  const mocne = new Set(Object.entries(TERMINY).filter(([, t]) => t.mocne?.test(n)).map(([id]) => id));
  if (mocne.size) return mocne;
  return new Set(Object.entries(TERMINY).filter(([, t]) => t.slabe?.test(n)).map(([id]) => id));
}

// Zgodność metody: segment wariantu (preservationMethod × processFamilyId) → metody indeksu „główne” i „pomocnicze”.
const RODZINY = {
  'sweet-preserves': { glowne: { 'water-bath': ['kapiel-wodna'], refrigerator: ['lodowka'], freezer: ['mrozenie'], 'dry-storage': ['suszenie'] }, pomocnicze: ['kapiel-wodna', 'lodowka', 'mrozenie'] },
  'vinegar-pickling': { glowne: { 'water-bath': ['kapiel-wodna'], refrigerator: ['lodowka'] }, pomocnicze: ['kapiel-wodna', 'lodowka'] },
  'canned-foods': { glowne: { 'pressure-canning': ['szybkowar'], 'water-bath': ['kapiel-wodna'] }, pomocnicze: ['szybkowar', 'kapiel-wodna'] },
  drying: { glowne: { '*': ['suszenie'] }, pomocnicze: [] },
  'lacto-fermentation': { glowne: { '*': ['fermentacja'] }, pomocnicze: [] },
  'meat-curing-smoking': { glowne: { '*': ['peklowanie-wedzenie'] }, pomocnicze: ['suszenie'] },
  'fish-curing-smoking': { glowne: { '*': ['peklowanie-wedzenie'] }, pomocnicze: ['lodowka'] },
  'dairy-cheese': { glowne: { '*': ['nabial'] }, pomocnicze: [] },
  'fermented-beverages': { glowne: { '*': ['napoj-fermentowany'] }, pomocnicze: ['fermentacja'] },
  'vinegar-making': { glowne: { '*': ['ocet'] }, pomocnicze: [] },
  'oil-and-fat': { glowne: { '*': ['olej'] }, pomocnicze: [] },
  'egg-preservation': { glowne: { '*': ['jaja'] }, pomocnicze: ['lodowka', 'kapiel-wodna'] },
  'koji-soy-ferments': { glowne: { '*': ['fermentacja'] }, pomocnicze: [] },
  'salt-preservation': { glowne: { '*': ['inne'] }, pomocnicze: ['fermentacja', 'lodowka'] },
};
export function zgodnoscMetody(w, metoda) {
  const r = RODZINY[w.processFamilyId];
  if (!r) return null;
  const glowne = r.glowne[w.preservationMethod] ?? r.glowne['*'] ?? [];
  if (glowne.includes(metoda)) return 'glowna';
  if (r.pomocnicze.includes(metoda)) return 'pomocnicza';
  return null;
}

// Dodatki w nazwie wariantu (rdzeń polski → wymagany termin angielski w nazwie przepisu).
const DODATKI = [
  [/^(chili|chilli|ostr|pikant|jalapen|habaner)/, /\b(hot|chil|jalapeno|habanero|cayenne|spicy|pepper)/],
  [/^czosn/, /\bgarlic/], [/^(koper|koprem|koprz)/, /\bdill/], [/^miod/, /\bhoney/], [/^cynamon/, /\bcinnamon/],
  [/^wanili/, /\bvanilla/], [/^imbir/, /\bginger/], [/^kurkum/, /\bturmeric/], [/^(gorczyc|musztard)/, /\bmustard/],
  [/^chrzan/, /\bhorseradish/], [/^cebul/, /\bonion/], [/^marchew/, /\bcarrot/], [/^papryk/, /\bpepper/], [/^pomidor/, /\btomato/],
  [/^(jablk|jablek|jablon)/, /\bapple/], [/^cytryn/, /\blemon/], [/^pomarancz/, /\borange/], [/^limonk/, /\blime/],
  [/^pektyn/, /\bpectin/], [/^bazyli/, /\bbasil/], [/^rozmaryn/, /\brosemary/], [/^tymiank/, /\bthyme/], [/^miet/, /\bmint/],
  [/^lawend/, /\blavender/], [/^(burak|burac)/, /\bbeet/], [/^seler/, /\bcelery/], [/^cukini/, /\bzucchini/], [/^(kminek|kmink)/, /\bcaraway/],
  [/^estragon/, /\btarragon/], [/^(wino|wina|winem|winn)/, /\bwine/], [/^rum/, /\brum\b/], [/^whisk/, /\b(whiskey|whisky|bourbon)/],
  [/^orzech/, /\b(nut|walnut|pecan)/], [/^migdal/, /\balmond/], [/^curry/, /\bcurry/], [/^(przypraw|korzen)/, /\bspice/],
  [/^(niskoslod|bezcukr)/, /\b(no sugar|low sugar|reduced sugar|less sugar|sugar free|no added sugar)/],
];
const NEUTRALNE = new Set(('w z ze na i oraz do po od dla a lub o jak bez klasyczny klasyczna klasyczne klasyczne tradycyjny tradycyjna tradycyjne ' +
  'domowy domowa domowe prosty prosta proste caly cala cale calych calymi plastry plastrach polowki polowkach kawalki kawalkach kostka kostki kostce ' +
  'krazki krazkach slupki slupkach owoce owocow owocowy owocowa owocowe sloiku sloikach sloiki wekowane wekowany pasteryzowane pasteryzowany ' +
  'cukrem cukru syropie syropem lekkim srednim ciezkim zalewie').split(/\s+/));
function prefiksWspolny(a, b) { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; }
function analizaNazwy(w, produkty) {
  const tokeny = normalizuj(w?.name?.pl).split(' ').filter(Boolean);
  const nazwaProduktu = normalizuj(produkty.find((p) => p.id === w.productId)?.name?.pl).split(' ').filter((t) => t.length >= 3);
  const dodatki = [];
  const nieznane = [];
  for (let i = 0; i < tokeny.length; i++) {
    const t = tokeny[i];
    if (t === 'bez' && /^cukr/.test(tokeny[i + 1] ?? '')) { dodatki.push(DODATKI.at(-1)[1]); i++; continue; }
    if (NEUTRALNE.has(t) || t.length < 3) continue;
    if (TYPY_PL.some(([, r]) => r.test(t))) continue;
    if (nazwaProduktu.some((p) => { const k = prefiksWspolny(t, p); return k >= 4 && k >= 0.6 * Math.min(t.length, p.length); })) continue;
    const d = DODATKI.find(([r]) => r.test(t));
    if (d) { dodatki.push(d[1]); continue; }
    nieznane.push(t);
  }
  return { dodatki, nieznane };
}

export function dopasujWariant(w, przepisy, produkty = []) {
  const typy = typyWariantu(w);
  const { dodatki, nieznane } = analizaNazwy(w, produkty);
  const trafienia = [];
  for (const p of przepisy) {
    const metoda = zgodnoscMetody(w, p.metoda);
    if (!metoda) continue;
    if (!produktyPrzepisu(p.nazwa).has(w.productId)) continue;
    const n = normalizuj(p.nazwa);
    const typ = typPrzepisu(p.nazwa);
    const typOk = typ ? typy.has(typ) : typy.size === 0;
    const dodatkiOk = dodatki.every((r) => r.test(n));
    const pewne = metoda === 'glowna' && typOk && dodatkiOk && nieznane.length === 0;
    trafienia.push({ nazwa: p.nazwa, adres: p.adres, metoda: p.metoda, zrodlo: p.zrodlo, szczebel: p.szczebel,
      wynik: pewne ? 'pewne' : 'mozliwe', typ_przepisu: typ });
  }
  trafienia.sort((a, b) => (a.wynik === b.wynik ? 0 : a.wynik === 'pewne' ? -1 : 1) || (a.szczebel ?? 9) - (b.szczebel ?? 9));
  const wynik = trafienia.length === 0 ? 'brak' : trafienia[0].wynik;
  return { wynik, trafienia, nieznane, typy_wariantu: [...typy] };
}

export function walidujIndeks(idx) {
  if (!idx || !Array.isArray(idx.zrodla)) return ['brak tablicy "zrodla"'];
  const bledy = [];
  const adresy = new Set();
  idx.zrodla.forEach((z, i) => {
    const gdzie = `zrodla[${i}] (${z?.zrodlo ?? '?'})`;
    for (const pole of ['zrodlo', 'adres', 'data_odczytu']) if (!z?.[pole]) bledy.push(`${gdzie}: brak pola ${pole}`);
    if (![1, 2, 3, 4].includes(z?.szczebel)) bledy.push(`${gdzie}: szczebel spoza 1–4 (${z?.szczebel})`);
    if (z?.adres && adresy.has(z.adres)) bledy.push(`${gdzie}: powtórzony adres źródła ${z.adres}`);
    if (z?.adres) adresy.add(z.adres);
    if (!Array.isArray(z?.przepisy)) { bledy.push(`${gdzie}: brak tablicy przepisy`); return; }
    z.przepisy.forEach((p, j) => {
      if (!p?.nazwa) bledy.push(`${gdzie} przepisy[${j}]: pusta nazwa`);
      if (!p?.adres) bledy.push(`${gdzie} przepisy[${j}]: brak adresu`);
      if (!METODY.includes(p?.metoda)) bledy.push(`${gdzie} przepisy[${j}]: metoda spoza listy (${p?.metoda})`);
    });
  });
  return bledy;
}

export const segment = (w) => `${w.preservationMethod ?? 'brak'} × ${w.processFamilyId ?? 'brak'}`;

export function dopasujWszystko(katalog, idx) {
  const przepisy = idx.zrodla.flatMap((z) => z.przepisy.map((p) => ({ ...p, zrodlo: z.zrodlo, szczebel: z.szczebel })));
  return katalog.variants.filter((v) => v.safetyStatus === 'do-researchu')
    .map((v) => ({ id: v.id, segment: segment(v), ...dopasujWariant(v, przepisy, katalog.products ?? []) }));
}

export function podsumuj(wyniki) {
  const pusty = () => ({ warianty: 0, pewne: 0, mozliwe: 0, brak: 0 });
  const razem = pusty();
  const segmenty = {};
  for (const w of wyniki) {
    segmenty[w.segment] ??= pusty();
    for (const s of [razem, segmenty[w.segment]]) { s.warianty++; s[w.wynik]++; }
  }
  return { razem, segmenty };
}

function main(argv) {
  const [kat, idxPlik] = argv.filter((a, i) => !a.startsWith('--') && argv[i - 1] !== '--wynik');
  const wi = argv.indexOf('--wynik');
  if (!kat || !idxPlik) { console.error('Użycie: node tools/dopasuj-indeks.mjs <catalog-seed.json> <indeks.json> [--wynik plik.json]'); return 1; }
  const katalog = JSON.parse(readFileSync(kat, 'utf8'));
  const idx = JSON.parse(readFileSync(idxPlik, 'utf8'));
  const bledy = walidujIndeks(idx);
  if (bledy.length) { console.error(`Indeks: ${bledy.length} błędów\n` + bledy.slice(0, 30).join('\n')); return 1; }
  const wyniki = dopasujWszystko(katalog, idx);
  const s = podsumuj(wyniki);
  const linia = (k, v) => `${k}: warianty ${v.warianty}, pewne ${v.pewne}, mozliwe ${v.mozliwe}, brak ${v.brak}`;
  console.log(linia('razem', s.razem));
  for (const [k, v] of Object.entries(s.segmenty).sort((a, b) => b[1].warianty - a[1].warianty)) console.log('  ' + linia(k, v));
  if (wi >= 0) {
    const wyj = wyniki.map((w) => ({ ...w, trafienia: w.trafienia.slice(0, 5), liczba_trafien: w.trafienia.length }));
    writeFileSync(argv[wi + 1], JSON.stringify({ katalog: katalog.version ?? null, podsumowanie: s, warianty: wyj }, null, 1) + '\n');
  }
  return 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) process.exitCode = main(process.argv.slice(2));
