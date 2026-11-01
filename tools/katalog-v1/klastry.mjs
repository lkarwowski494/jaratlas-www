import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const S = process.argv[2]; const d = JSON.parse(readFileSync(`${S}/v0.json`, 'utf8'));
const kat = Object.fromEntries(d.produkty.map((p) => [p.id, p.kategoria]));
const R = {
  FER: [/kiszon|kiszen|kisz |fermentow|kimchi|w solance|solank|kraut|curtido|turšija|torshi|tsukemono|takuan|umeboshi|sotto sale|pao cai|murături|turşu|sambal|sriracha|tabasco|adżyka|dongchimi|kkakdugi|chonggak|oi-sobagi|rasol|brovada|makdous|laba|jangajji|achar|nimbu|l'hamd|limonki kiszone|cytryny kiszone|naturalnie przez rok|manzanilla|ługowan/i],
  ACI: [/occie|zalew|marynow|pikle|piccalilli|relish|chutney|escabeche|keczup|ketchup|salsa|ajwar|pindżur|ljutenica|passata|sok pomidorowy|pelati|koncentrat|sos boloński|pomidor|tkemali|kompot|w syropie|we własnym soku|w soku|figi|melon|arbuz|caponata|giardiniera|mostarda/i],
  SZY: [/tyndaliz|szybkowar|autoklaw|ciśnieniow|wekowan|wekowa|w słoik|zawekow|do słoików|pasteryzowan|w solance|puree|przecier|krem|bulion|gulasz|tuszonk|pasztet|w sosie|leczo|ratatouille|bigos|gołąbki|po bretońsku|baked beans|refried|hummus|grzyb|borowik|podgrzyb|rydz|kurk|maślak|opieńk|gąsk|kani|pieczark|boczniak|shiitake|huitlacoche|creamed|duszon|mielonka|rillettes|konserw|kawior (z cukinii|bakłażan|grzyb)|flaczki|galare/i],
  SLO: [/dżem|konfitur|galaretk|marmolad|powidł|syrop|kompot|kandyz|butter|masło (dyniowe|jabłkowe|brzoskwiniowe)|curd|frużelin|sok |sok$|mus |mus$|melasa|membrillo|ser pigwowy|z cukrem|cukrem|w miodzie|miodzie|miód|w koniaku|w rumie|bourbon|amaretto|w winie|cordial|badagi|saba|czurczchela|silan|pontack|cumberland|gianduja|karmel/i],
  OLE: [/olej|oleju|oliw|smalc|tłuszcz|masł|ghee|confit|konfitow|rillettes|pesto|sott'olio|la-yu|harissa|achar|chimichurri|chermoula|salsa verde z kaparami|duxelles|pod warstwą|smen|tallow|łój/i],
  SUS: [/susz|chips|czips|proszek|puder|skóra|leather|tklapi|papad|qamar|rodzynki|jerky|wobła|taran|granulowan|sól (selerowa|cytrynowa|zielona|borowikowa)|sól$|mąka|skrobia|loomi|prażon|czarny czosnek|mumallaengi|kurt|kashk|biltong|vegeta|szarena/i],
  NAP: [/\bocet\b|octy|zakwas|kwas |napój|shrub|tepache|kombucha|kefir wodny|tibicos|ginger bug|piwo|lemoniad|kanji|oksymel|fire cider|podpiwek|żur|koji|miso|shoyu|tamari|garum|natto|tempeh|douchi|amazake|musztard|kanzuri|bettarazuke|woda różana/i],
};
const CAT = { 9: 'MLE', 10: 'MIE' };
const k = { FER: [], ACI: [], SZY: [], SLO: [], OLE: [], SUS: [], NAP: [], MLE: [], MIE: [], INNE: [] };
for (const w of d.warianty) {
  const c = kat[w.produkt]; let hit = [];
  if (CAT[c]) hit.push(CAT[c]);
  for (const [n, [re]] of Object.entries(R)) if (re.test(w.nazwa_v0) || re.test(w.grupa_v0) && n === 'NAP' && ['koji-ferments','miso-garum','mustard','artisanal-vinegars','fermented-beverages'].includes(w.produkt)) hit.push(n);
  if (['koji-ferments','miso-garum','mustard','artisanal-vinegars','fermented-beverages'].includes(w.produkt) && !hit.includes('NAP')) hit.push('NAP');
  if (CAT[c] === 'MIE' && /słoik|tyndaliz|szybkowar|autoklaw|wekow|konserw|tuszonk|gulasz|bulion|pasztet/i.test(w.nazwa_v0) && !hit.includes('SZY')) hit.push('SZY');
  if (!hit.length) for (const [n, [re]] of Object.entries(R)) if (re.test(w.grupa_v0.replace(/susz/i, 'susz'))) hit.push(n);
  const G = { 'Kiszenie': 'FER', 'Fermentacja': 'FER', 'Ocet': 'ACI', 'ocet': 'ACI', 'olej': 'OLE', 'Olej': 'OLE', 'susz': 'SUS', 'Pasteryzacja': 'SZY', 'pasteryzacja': 'SZY', 'słodkie': 'SLO', 'Słodkie': 'SLO', 'Cukier': 'SLO', 'cukier': 'SLO', 'Sól': 'FER', 'sól': 'FER', 'pasty': 'OLE', 'Pasty': 'OLE', 'Miód': 'SLO', 'miód': 'SLO', 'Dodatki': 'ACI', 'wędzenie': 'SUS' };
  if (!hit.length) for (const [s, n] of Object.entries(G)) if (w.grupa_v0.includes(s)) hit.push(n);
  if (!hit.length) hit = ['INNE'];
  w.klastry = [...new Set(hit)]; for (const h of w.klastry) k[h].push(w.id);
}
mkdirSync(`${S}/badania`, { recursive: true });
writeFileSync(`${S}/v0.json`, JSON.stringify(d, null, 1));
for (const [n, ids] of Object.entries(k)) writeFileSync(`${S}/badania/lista-${n}.json`, JSON.stringify(d.warianty.filter((w) => w.klastry.includes(n)).map(({ id, produkt, grupa_v0, nazwa_v0 }) => ({ id, produkt, grupa_v0, nazwa_v0 })), null, 0));
console.log(Object.fromEntries(Object.entries(k).map(([a, b]) => [a, b.length])));
console.log(d.warianty.filter(w => w.klastry[0]==='INNE').map(w=>w.id+' '+w.nazwa_v0).join('\n'));
