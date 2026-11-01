// E2 (decyzja 2026-11-01-jaratlas-katalog-v1-e1): wycofanie 28 pozycji poza zakresem, 3 rozdzielenia, warianty mrożenia NCHFP.
import { readFileSync, writeFileSync } from 'node:fs';
const S = process.argv[2], J = (p) => JSON.parse(readFileSync(p, 'utf8'));
const cat = J(`${S}/v1/catalog-seed.json`), rej = J(`${S}/v1/rejestr.json`), log = [];
const V = new Map(cat.variants.map((v) => [v.id, v]));
const nextId = (pid) => { const n = Math.max(...cat.variants.filter((v) => v.productId === pid).map((v) => +v.id.split('-v').pop())); return `${pid}-v${String(n + 1).padStart(2, '0')}`; };
const norm = (s) => s.replace(/[   ]/g, ' ').replace(/\s+/g, ' ').trim();

// 1. Poza zakresem → wycofane
for (const v of cat.variants) if (v.scope === 'out-of-scope' && !v.retired) {
  v.retired = { reason: `poza zakresem: ${v.scopeNote ?? 'nie przetwór'}`, decision: '2026-11-01-jaratlas-katalog-v1-e1' };
  log.push(`wycofany (poza zakresem): ${v.id}`);
}

// 2. Rozdzielenia: oryginał wycofany na rzecz wariantu bezpieczniejszego; drugi wariant osobno.
function split(id, a, b) {
  const o = V.get(id), base = { productId: o.productId, groupV0: o.groupV0, lineV0: o.lineV0, filters: o.filters, scope: 'in', publication: 'ukryta', splitFrom: id, researchedBy: o.researchedBy };
  const A = { id: nextId(o.productId), ...base, ...a }; cat.variants.push(A); V.set(A.id, A);
  const B = { id: nextId(o.productId), ...base, ...b }; cat.variants.push(B); V.set(B.id, B);
  o.retired = { reason: `rozdzielony na ${A.id} i ${B.id} (dwa procesy w jednej pozycji v0)`, replacedBy: (a.safe ? A : B).id, decision: '2026-11-01-jaratlas-katalog-v1-e1' };
  for (const x of [A, B]) delete x.safe;
  log.push(`rozdzielony: ${id} → ${A.id}, ${B.id}`);
}
const k3 = V.get('kefir-cream-v03'), s8 = V.get('sea-fish-v08'), r1 = V.get('raspberry-blackberry-v01');
const hot = cat.variants.find((v) => v.productId === 'freshwater-fish' && v.safetyStatus === 'ok-zrodlo' && /na gorąco/.test(v.name.pl));
split('kefir-cream-v03',
  { name: { pl: 'zsiadłe mleko z mleka niepasteryzowanego (samoistne kwaśnienie)' }, processFamilyId: 'dairy-cheese', preservationMethod: 'refrigerator', acidBasis: 'not-applicable', safetyStatus: 'ryzyko-wysokie', claims: k3.claims, sources: [], notes: ['[E2] Ścieżka z mleka surowego z kefir-cream-v03 (MLE: produkt wysokiego ryzyka wg FDA).'] },
  { safe: true, name: { pl: 'zsiadłe mleko z mleka pasteryzowanego, zaszczepiane kulturą' }, processFamilyId: 'dairy-cheese', preservationMethod: 'refrigerator', acidBasis: 'not-applicable', safetyStatus: 'do-researchu', claims: [], sources: [], notes: ['[E2] Ścieżka szczepiona z kefir-cream-v03; brak przetestowanego przepisu domowego (MLE).'] });
split('sea-fish-v08',
  { name: { pl: 'łosoś wędzony na zimno' }, processFamilyId: 'fish-curing-smoking', preservationMethod: 'refrigerator', acidBasis: 'not-applicable', safetyStatus: 'ryzyko-wysokie', claims: s8.claims.filter((c) => c !== 'MIE-071'), sources: [], notes: ['[E2] Część „na zimno” z sea-fish-v08: temperatury nie zabijają bakterii (MIE-076), C. botulinum typu E rośnie od 3,3 °C (MIE-059).'] },
  { safe: true, name: { pl: 'łosoś wędzony na gorąco (stremel)' }, processFamilyId: 'fish-curing-smoking', preservationMethod: 'refrigerator', acidBasis: 'not-applicable', safetyStatus: hot ? 'ok-zrodlo' : 'do-researchu', claims: hot ? hot.claims : ['MIE-071'], sources: hot ? hot.sources : [], notes: [`[E2] Część „na gorąco” z sea-fish-v08; przepis jak ${hot?.id ?? '(brak)'} (wędzenie ryb na gorąco, MIE-071).`] });
split('raspberry-blackberry-v01',
  { safe: true, name: { pl: 'ocet malinowy macerowany (na occie kupnym)' }, processFamilyId: 'vinegar-making', preservationMethod: r1.preservationMethod, acidBasis: 'not-applicable', safetyStatus: r1.safetyStatus, claims: r1.claims, sources: r1.sources, notes: ['[E2] Wersja macerowana z raspberry-blackberry-v01 (UGA/NCHFP Raspberry Vinegar).'] },
  { name: { pl: 'żywy ocet malinowy (fermentowany)' }, processFamilyId: 'vinegar-making', preservationMethod: null, acidBasis: 'not-applicable', safetyStatus: 'do-researchu', claims: [], sources: [], notes: ['[E2] Wersja fermentowana z raspberry-blackberry-v01; domowego octu nie używać do marynat (NAP).'] });

// 3. Mrożenie (NCHFP „How do I freeze”), cytaty sprawdzane na zapisanym tekście strony.
const RECZNE = { 'freezing-cabbage-or-chinese-cabbage': 'Water blanch 1½ minutes.', 'freezing-garlic-in-oil': 'It may be frozen for long term storage for up to several months.', 'freezing-pesto': 'It may be frozen for long term storage.', 'freezing-bananas': 'Add 1/2 teaspoon (1500 mg) ascorbic acid per cup of mashed banana.', 'freezing-eggs': 'Select fresh eggs and break each separately into a clean saucer.', 'freezing-cheese': 'Recommended freezer shelf life: Hard cheese (such as cheddar and Swiss), 6 months', 'freezing-onions': 'No blanching is required.' };
const POMIN = new Set(['freezing-hot-peppers']); // brak czytelnej treści instrukcji na stronie
const NAZWA = { 'freezing-onions': 'cebula pokrojona mrożona' };
const wynik = J(`${S}/mroz/wynik.json`), claimByUrl = new Map(); let nr = 0;
const fam = cat.processFamilies.find((f) => f.id === 'freezing');
for (const o of wynik) {
  const slug = o.slug.split('/').pop(); if (POMIN.has(slug)) continue;
  const tekst = readFileSync(`${S}/zrodla/${o.sha12}.txt`, 'utf8');
  if (!claimByUrl.has(o.url)) {
    const q = RECZNE[slug] ?? o.cytat;
    if (!q || !norm(tekst).includes(norm(q))) throw new Error(`cytat nie w tekście: ${o.url}`);
    const id = `FRZ-${String(++nr).padStart(3, '0')}`;
    rej.push({ id, twierdzenie: `NCHFP podaje instrukcję domowego mrożenia: ${o.slug.split('/').pop().replace(/^freezing-/, '').replace(/-/g, ' ')} (strona „How do I freeze”).`, zrodla: [{ adres: o.url, miejsce: `NCHFP, How do I Freeze, ${slug}`, cytat: q, odczyt: '2026-11-01', szczebel: 1, weryfikacja: 'curl+grep', sha12: o.sha12 }], status: 'potwierdzone', uproszczenie: null, krytyczne: /garlic|pesto/.test(slug), przeglad: null, wazne_do: '2027-11-01', klaster: 'E2-FRZ' });
    claimByUrl.set(o.url, id);
  }
  const id = claimByUrl.get(o.url), c = rej.find((t) => t.id === id);
  const extra = slug === 'freezing-onions' ? ['Uwaga ze źródła: „Freezing is usually not recommended for preserving whole onions”; wariant dotyczy cebuli pokrojonej.'] : slug === 'freezing-cheese' ? ['Uwaga ze źródła: część serów (m.in. ricotta, twarożek) źle znosi mrożenie; wariant dotyczy serów twardych.'] : [];
  const v = { id: nextId(o.prod), productId: o.prod, name: { pl: NAZWA[slug] ?? o.name }, groupV0: null, lineV0: null, processFamilyId: 'freezing', preservationMethod: 'freezer', acidBasis: 'not-applicable', safetyStatus: 'ok-zrodlo', claims: [id, 'SUS-050', 'SUS-059'], sources: [{ ...c.zrodla[0] }], filters: { flavor: null, readyTime: null, equipment: null, difficulty: null }, notes: ['[E2] Wariant dodany: mrożenie wg NCHFP (decyzja 2026-11-01-jaratlas-katalog-v1-e1).', ...extra], scope: 'in', publication: 'ukryta', researchedBy: ['E2-FRZ'] };
  if (['boletes', 'chanterelle-milkcap', 'wild-mushrooms'].includes(o.prod)) v.requiredWarnings = ['SUS-035'];
  cat.variants.push(v); V.set(v.id, v);
}
fam.allowedMethods = ['freezer'];
log.push(`mrożenie: ${cat.variants.filter((v) => v.processFamilyId === 'freezing').length} wariantów, ${nr} twierdzeń FRZ`);
cat.version = '1.0.0';
writeFileSync(`${S}/v1/catalog-seed.json`, JSON.stringify(cat, null, 1));
writeFileSync(`${S}/v1/rejestr.json`, JSON.stringify(rej, null, 1));
writeFileSync(`${S}/v1/e2-log.json`, JSON.stringify(log, null, 1));
console.log(log.filter((l) => !l.startsWith('wycofany')).join('\n'), `\nwycofane poza zakresem: ${log.filter((l) => l.startsWith('wycofany')).length}`);
