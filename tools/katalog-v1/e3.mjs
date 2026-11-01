// E3: wprowadza werdykty weryfikacji zastępczej (D-027) do katalogu i rejestru. Kolejność: scal.mjs → e2.mjs → e3.mjs.
import { readFileSync, writeFileSync } from 'node:fs';
const S = process.argv[2], J = (p) => JSON.parse(readFileSync(p, 'utf8'));
const cat = J(`${S}/v1/catalog-seed.json`), rej = J(`${S}/v1/rejestr.json`), log = { twierdzenia: {}, warianty: [], recznie: [] };
const R = new Map(rej.map((t) => [t.id, t])), V = new Map(cat.variants.map((v) => [v.id, v]));
const norm = (s) => s.replace(/[   ]/g, ' ').replace(/[‐–]/g, '-').replace(/\s+/g, ' ').trim();

// 1. Werdykty twierdzeń: POPARTE → zweryfikowane; CZĘŚCIOWO/SPRZECZNE z poprawką → brzmienie weryfikatora, zweryfikowane po poprawce.
const zweryfikowane = new Set();
for (const g of ['A', 'B', 'C']) for (const w of J(`${S}/e3/wyniki/twierdzenia-${g}.json`)) {
  const t = R.get(w.id); log.twierdzenia[w.werdykt] = (log.twierdzenia[w.werdykt] ?? 0) + 1;
  if (!w.cytat_ok) continue;
  if (w.werdykt === 'POPARTE') zweryfikowane.add(w.id);
  else if (['CZĘŚCIOWO', 'SPRZECZNE'].includes(w.werdykt) && w.poprawka) { t.brzmienieE2 = t.twierdzenie; t.twierdzenie = w.poprawka; t.weryfikacjaE3 = w.dlaczego; zweryfikowane.add(w.id); }
  else t.status = 'robocze';
}
// 2. Uwagi redakcyjne: wartości z przepisów, których nie wolno przenosić na karty jako instrukcji.
const NIE = { 'MIE-013': 'dawka azotynu 2× limit USA (MIE-002); nie przenosić na karty', 'MIE-032': '140°F poniżej temperatury letalnej dla włośni 144°F (MIE-026); nie podawać jako granicy', 'MIE-030': 'wymóg FSIS z 2014; 9 CFR 318.10 obecnie [Reserved]; nie przedstawiać jako obowiązującego' };
for (const [id, u] of Object.entries(NIE)) R.get(id).nieDoKart = u;

// 3. Nowe twierdzenie z przeczytanego źródła (E3, autor: rola 06; weryfikacja osobna).
const add = (t) => { rej.push(t); R.set(t.id, t); };
const tekst = (h) => readFileSync(`${S}/zrodla/${h}.txt`, 'utf8');
const q1 = 'Do not use this process to can white-flesh peaches.';
if (!norm(tekst('245688b4abb6')).includes(norm(q1))) throw new Error('E3-001 cytat');
add({ id: 'E3-001', twierdzenie: 'NCHFP: procesu wekowania brzoskwiń nie stosować do brzoskwiń o białym miąższu; niektóre odmiany mają wyższe pH i nie ma dla nich przetestowanego procesu ani zakwaszenia.', zrodla: [{ adres: 'https://nchfp.uga.edu/how/can/canning-fruits-and-fruit-products/peaches-halved-or-sliced/', miejsce: 'NCHFP, Peaches – Halved or Sliced, CAUTION', cytat: q1, odczyt: '2026-11-01', szczebel: 1, weryfikacja: 'curl+grep', sha12: '245688b4abb6' }], status: 'potwierdzone', uproszczenie: null, krytyczne: true, przeglad: null, wazne_do: '2027-11-01', klaster: 'E3' });

// 4. Produkt: gruszka kwaśna (FDA: Bartlett 3,50–4,60, granica włączna; azjatyckich gruszek brak w katalogu).
const pear = cat.products.find((p) => p.id === 'pear'); pear.acidity = 'acid'; pear.acidityNote = 'E3: gruszki europejskie kwaśne (ACI-127); gruszki azjatyckie graniczne (NCHFP), w katalogu brak.';

// 5. Werdykty wariantów: przyjmuję propozycje, z wyjątkami poniżej (uzasadnienie w raporcie E3).
const BEZ_TYND = ['potato-sunchoke-v08', 'green-beans-v08', 'carrot-v10', 'asparagus-v06', 'corn-v06', 'pork-shoulder-neck-v07', 'beef-veal-v04', 'poultry-v10'];
const OCET = ['brussels-kohlrabi-v07', 'carrot-v05'];
for (const f of ['warianty-ok-1', 'warianty-ok-2', 'warianty-ostrzezenia']) for (const w of J(`${S}/e3/wyniki/${f}.json`)) {
  const v = V.get(w.id); if (w.werdykt === 'POTWIERDZAM') { v.e3 = 'potwierdzony'; continue; }
  if (BEZ_TYND.includes(v.id)) { v.notes.push(`[E3] Weryfikator: ${w.dlaczego} Rozstrzygnięcie: ok-zrodlo dla procesu w szybkowarze; „tyndalizacja” usunięta z nazwy (zostaje w nameV0).`); v.e3 = 'nazwa poprawiona'; log.recznie.push(`${v.id}: ok-zrodlo, nazwa bez tyndalizacji`); continue; }
  if (OCET.includes(v.id)) { v.notes.push('[E3] Ocet jabłkowy 5% w miejsce białego 5%: oba zalecane przez NCHFP (ACI-018/019), w tej samej ilości (uproszczenie nazwane).'); v.e3 = 'uproszczenie: ocet 5%'; log.recznie.push(`${v.id}: ok-zrodlo zachowane (ocet 5%)`); continue; }
  const z = v.safetyStatus; v.safetyStatus = w.proponowany_status; v.e3 = `zmieniony z ${z}`; v.notes.push(`[E3] ${z} → ${w.proponowany_status}: ${w.dlaczego}`);
  if (v.safetyStatus !== 'ok-zrodlo') v.sources = [];
  if (v.safetyStatus === 'do-researchu' && v.preservationMethod === 'water-bath' && ['low-acid', 'not-applicable'].includes(v.acidBasis)) { v.preservationMethodV0 = v.preservationMethod; v.preservationMethod = null; }
  log.warianty.push(`${v.id}: ${z} → ${v.safetyStatus}`);
}
for (const id of ['SZY-015', 'SLO-044', 'SLO-046']) if (!V.get('pumpkin-v13').claims.includes(id)) V.get('pumpkin-v13').claims.push(id);
for (const id of ['pear-v07', 'pear-v12']) V.get(id).acidBasis = 'natural-acid';

// 6. Nazwy: bez zapisu LaTeX z v0, bez „tyndalizacji” przy procesie w szybkowarze, bez parametrów spoza źródła.
const latex = (s) => s.replace(/\$([^$]*)\$/g, (_, x) => x.replace(/\^\\circ\\text\{C\}/g, '°C').replace(/\\text\{--\}/g, '–').replace(/\\text\{([^}]*)\}/g, '$1').replace(/\\%/g, '%').replace(/\\times/g, '×').replace(/\\circ/g, '°').replace(/\\\\/g, '').replace(/\s+/g, ' ').trim());
for (const v of cat.variants) { const n = latex(v.name.pl); if (n !== v.name.pl) { v.nameV0 ??= v.name.pl; v.name.pl = n; } }
const NAZWY = {
  'pasta-filata-cheese-v01': 'włoska mozzarella świeża (rozciągana w gorącej wodzie)',
  'bell-pepper-v09': 'papryka pieczona marynowana w oliwie z octem i sokiem z cytryny',
};
for (const id of BEZ_TYND) NAZWY[id] = V.get(id).name.pl.replace(/\s*\((?:szybkowar\/)?tyndalizacja[^)]*\)/, '').replace(/\s*\(potrójna tyndalizacja[^)]*\)/, '').replace(/\s*\(tyndalizacja w galarecie\)/, ' w galarecie').trim() + ' (szybkowar)';
for (const [id, n] of Object.entries(NAZWY)) { const v = V.get(id); v.nameV0 ??= v.name.pl; v.name.pl = n; log.recznie.push(`${id}: nazwa „${n}”`); }

// 7. Obowiązkowe ostrzeżenia (twierdzenia, które karta musi pokazać).
const W = (id, ...c) => { const v = V.get(id); v.requiredWarnings = [...new Set([...(v.requiredWarnings ?? []), ...c])]; };
for (const v of cat.variants.filter((x) => !x.retired && x.safetyStatus === 'ok-zrodlo' && x.processFamilyId === 'oil-and-fat')) W(v.id, ...(/pesto|chimichurri|salsa verde|chermoula|pasta/i.test(v.name.pl) ? ['OLE-043'] : ['OLE-002', 'OLE-019']));
W('bell-pepper-v09', 'OLE-002');
for (const id of ['peach-nectarine-v06', 'peach-nectarine-v12', 'peach-nectarine-v13']) W(id, 'E3-001');
W('sea-fish-v01', 'MIE-056', 'MIE-057'); W('elderberry-elderflower-v11', 'SUS-041'); W('wild-garlic-v09', 'OLE-018', 'OLE-019');
W('fresh-brined-cheese-v05', 'MLE-043', 'MLE-046', 'MLE-047'); W('artisanal-vinegars-v01', 'NAP-029', 'NAP-030');
for (const id of ['butter-whey-cheese-v06', 'game-lamb-v07', 'white-cabbage-v13']) W(id, 'SUS-035');

// 7b. Niezależna weryfikacja rozstrzygnięć agenta (rozstrzygniecia.json): werdykty przyjęte w całości.
const RZ = J(`${S}/e3/wyniki/rozstrzygniecia.json`);
for (const w of RZ.twierdzenia) if (w.werdykt === 'POPARTE' && w.cytat_ok !== false) zweryfikowane.add(w.id);
pear.acidityClaim = 'SLO-099'; pear.acidityNote = 'Tylko gruszki europejskie: przetestowany proces NCHFP bez zakwaszania (SLO-099, ACI-074; pomocniczo ACI-127 Bartlett 3,50–4,60). Gruszek azjatyckich (nashi) nie obejmuje: graniczne, wymagają zakwaszenia (ACI-064, ACI-063).';
for (const w of RZ.warianty) {
  const v = V.get(w.id); if (w.werdykt === 'POTWIERDZAM') { v.e3 = 'potwierdzony (rozstrzygnięcie)'; continue; }
  const z = v.safetyStatus; v.safetyStatus = w.proponowany_status ?? z;
  if (v.safetyStatus !== 'ok-zrodlo') v.sources = [];
  if (w.proponowane_requiredWarnings?.length) W(v.id, ...w.proponowane_requiredWarnings);
  v.notes.push(`[E3, weryfikacja rozstrzygnięć] ${z} → ${v.safetyStatus}: ${w.dlaczego}`); v.e3 = `rozstrzygnięcie zweryfikowane: ${z} → ${v.safetyStatus}`;
  log.warianty.push(`${v.id}: ${z} → ${v.safetyStatus} (weryfikacja rozstrzygnięć)`);
}
V.get('potato-sunchoke-v08').name.pl = 'małe ziemniaki (2,5–5 cm) w zalewie (szybkowar)';

// 8. Status twierdzeń: oznacz zweryfikowane (pole przeglad uzupełnia krok ze skrótami).
for (const t of rej) if (zweryfikowane.has(t.id)) t.weryfikacjaZastepcza = '2026-11-01';
cat.version = '1.0.1';
writeFileSync(`${S}/v1/catalog-seed.json`, JSON.stringify(cat, null, 1));
writeFileSync(`${S}/v1/rejestr.json`, JSON.stringify(rej, null, 1));
writeFileSync(`${S}/v1/e3-log.json`, JSON.stringify(log, null, 1));
console.log(JSON.stringify(log.twierdzenia), '| warianty zmienione', log.warianty.length, '| ręczne', log.recznie.length, '| zweryfikowane tw.', zweryfikowane.size);
