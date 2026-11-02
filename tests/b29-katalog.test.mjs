// B29 (porcja katalogowa, D-043): requiredWarnings dla kart-ostrzeżeń z pustym requiredWarnings (lista z B28-katalog, 136 wariantów, 2 wycofane bez zmian).
// Decyzja: 2026-11-02-jaratlas-b29-katalog (decyzja Claude, do weta). Reguła ogólna metody (B29-D1, wzór B18-D2, B21-D1, B28-D2):
// requiredWarnings = claims wariantu ∩ lista ostrzeżeń OSTRZ (kolejność listy); SZY-006 nie przy szybkowarze; twierdzenia SZY nie przy lodówce i zamrażarce;
// OLE-016 tylko przy lodówce i zamrażarce. Bez terminów przechowywania, czasów, temperatur procesu i dawek (wyjątki nazwane niżej). Nowe ID rejestru: 0.
// Po D-043 B29: bez SZY-008 (P2-1), MIE-092 (P2-2), MIE-087 (P3-d); notatki „potrzebny research” przy RESEARCH (P2-2, P2-3, P2-4).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = "2026-11-02-jaratlas-b29-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const nota = (id) => V.get(id).notes?.find((n) => n.startsWith("[B29]") && n.includes(DEC));

// Lista z docs/tresci/B28-katalog-2026-11-02.md (cardType warning, requiredWarnings puste, stan 1dab596).
export const LISTA = "cucumber-v09 white-cabbage-v14 red-savoy-cabbage-v07 red-savoy-cabbage-v09 napa-cabbage-v13 cauliflower-v08 cauliflower-v09 cauliflower-v11 cauliflower-v12 broccoli-v07 broccoli-v08 brussels-kohlrabi-v11 zucchini-v10 zucchini-v11 zucchini-v12 pattypan-squash-v07 pattypan-squash-v08 pattypan-squash-v09 pumpkin-v10 pumpkin-v13 leafy-greens-v06 vine-leaves-greens-v07 vine-leaves-greens-v08 bell-pepper-v13 bell-pepper-v16 chili-pepper-v11 chili-pepper-v14 chili-pepper-v15 eggplant-v07 eggplant-v08 eggplant-v09 eggplant-v13 eggplant-v14 potato-sunchoke-v10 green-beans-v10 green-beans-v12 peas-chickpeas-v09 peas-chickpeas-v10 peas-chickpeas-v11 peas-chickpeas-v12 beans-soy-v07 beans-soy-v10 beetroot-v09 beetroot-v14 carrot-v14 garlic-v13 garlic-v14 onion-v10 onion-v11 shallot-pearl-onion-v11 shallot-pearl-onion-v12 leek-chives-v07 leek-chives-v10 daikon-black-radish-v09 daikon-black-radish-v11 daikon-black-radish-v13 radish-v08 horseradish-v10 celeriac-celery-v07 celeriac-celery-v08 celeriac-celery-v10 parsnip-parsley-v08 asparagus-v07 asparagus-v08 fennel-artichoke-v06 fennel-artichoke-v07 fennel-artichoke-v09 corn-v07 corn-v10 olives-v09 olives-v10 olives-v13 ginger-turmeric-v14 european-mixed-veg-v08 european-mixed-veg-v09 european-mixed-veg-v10 european-mixed-veg-v11 balkan-oriental-mix-v08 balkan-oriental-mix-v09 balkan-oriental-mix-v11 balkan-oriental-mix-v12 asian-american-mix-v08 asian-american-mix-v12 asian-american-mix-v13 apricot-v07 elderberry-elderflower-v07 cultivated-mushrooms-v08 cultivated-mushrooms-v10 cultivated-mushrooms-v12 miso-garum-v10 yogurt-skyr-v10 kefir-cream-v03 fresh-brined-cheese-v07 fresh-brined-cheese-v14 mold-ripened-cheese-v05 butter-whey-cheese-v05 pork-loin-ham-v12 pork-loin-ham-v13 pork-loin-ham-v14 pork-loin-ham-v15 pork-shoulder-neck-v08 pork-shoulder-neck-v09 pork-shoulder-neck-v11 pork-shoulder-neck-v12 pork-shoulder-neck-v13 pork-belly-jowl-v08 smoked-cooked-sausages-v11 smoked-cooked-sausages-v12 beef-veal-v05 beef-veal-v07 poultry-v08 poultry-v09 poultry-v13 game-lamb-v03 game-lamb-v08 game-lamb-v10 offal-pates-v01 offal-pates-v02 offal-pates-v03 offal-pates-v04 offal-pates-v05 offal-pates-v07 offal-pates-v08 offal-pates-v09 offal-pates-v10 offal-pates-v11 sea-fish-v12 sea-fish-v13 freshwater-fish-v07 freshwater-fish-v09 freshwater-fish-v11 eggs-v06 eggs-v07 eggs-v09 eggs-v10 kefir-cream-v13".split(" ");
const WYCOFANE = ["kefir-cream-v03", "eggs-v10"];
const OSTRZ = ['SZY-006', 'SZY-007', 'SZY-014', 'SZY-015', 'ACI-036', 'SZY-009', 'SZY-010', 'SZY-011', 'SZY-017', 'SZY-024', 'SZY-025', 'SZY-026', 'SZY-028', 'SZY-013', 'OLE-028', 'OLE-027', 'OLE-016', 'OLE-001', 'OLE-026', 'OLE-046', 'OLE-049', 'OLE-034', 'OLE-035', 'OLE-047', 'OLE-048', 'MLE-060', 'MLE-062', 'MLE-063', 'MLE-043', 'MLE-045', 'MLE-001', 'MLE-002', 'MLE-003', 'MLE-004', 'MLE-005', 'SLO-037', 'SLO-036', 'SLO-023', 'SLO-070', 'SLO-061', 'SLO-062', 'SLO-064', 'NAP-047', 'NAP-048', 'MIE-033', 'MIE-034', 'MIE-043', 'MIE-061', 'MIE-067', 'MIE-070', 'MIE-091', 'MIE-093', 'MIE-095', 'MIE-083',];
// Wynik reguły na 2d839e3 (katalog 1.0.17), przypięty: zmiana danych wymaga zmiany tej tabeli.
const MAPA = {"cucumber-v09":["SZY-006","SZY-007","SZY-014"],"white-cabbage-v14":["SZY-006","SZY-007","SZY-017","SZY-024","SZY-025"],"red-savoy-cabbage-v07":["SZY-006","SZY-007","SZY-025"],"red-savoy-cabbage-v09":["SZY-006","SZY-017","SZY-025"],"napa-cabbage-v13":["SZY-006","SZY-007"],"cauliflower-v08":["OLE-028","OLE-027","OLE-016"],"cauliflower-v09":["SZY-024","SZY-025"],"cauliflower-v11":["SZY-006","SZY-014","SZY-024"],"cauliflower-v12":["SZY-006","SZY-024","SZY-025"],"broccoli-v07":["OLE-028","OLE-027","OLE-016"],"broccoli-v08":["SZY-006","SZY-014","SZY-024","SZY-013"],"brussels-kohlrabi-v11":["SZY-025"],"zucchini-v10":["OLE-028","OLE-027","OLE-016"],"zucchini-v11":["SZY-006","SZY-026","SZY-028"],"zucchini-v12":["SZY-006","SZY-014","SZY-026"],"pattypan-squash-v07":["OLE-028","OLE-027","OLE-016"],"pattypan-squash-v08":["SZY-006","SZY-026"],"pattypan-squash-v09":["SZY-006","SZY-026","SZY-028"],"pumpkin-v10":["SZY-006","SZY-014","SZY-015","SZY-009"],"pumpkin-v13":["SZY-015","ACI-036"],"leafy-greens-v06":["SZY-006","SZY-009","SZY-013"],"vine-leaves-greens-v07":["OLE-028","OLE-027","OLE-016"],"vine-leaves-greens-v08":["SZY-006","SZY-017"],"bell-pepper-v13":["SZY-006","SZY-028"],"bell-pepper-v16":["OLE-028","OLE-027","OLE-016"],"chili-pepper-v11":["OLE-028","OLE-001"],"chili-pepper-v14":["SLO-037","SLO-036"],"chili-pepper-v15":["OLE-028","OLE-027","OLE-016"],"eggplant-v07":["OLE-028","OLE-027","OLE-016"],"eggplant-v08":["SZY-006","SZY-014"],"eggplant-v09":["SZY-006","SZY-014"],"eggplant-v13":["SZY-006","SZY-007"],"eggplant-v14":["OLE-028","OLE-027","OLE-016"],"potato-sunchoke-v10":["OLE-028","OLE-027","OLE-016"],"green-beans-v10":["OLE-028","OLE-027","OLE-016"],"green-beans-v12":["SZY-006","SZY-013"],"peas-chickpeas-v09":["SZY-007"],"peas-chickpeas-v10":["OLE-028","OLE-027","OLE-016"],"peas-chickpeas-v11":["SZY-006","SZY-014"],"peas-chickpeas-v12":["SZY-006","SZY-017"],"beans-soy-v07":["SZY-006","SZY-009","SZY-017"],"beans-soy-v10":["SZY-006","SZY-014"],"beetroot-v09":["SZY-006","SZY-017"],"beetroot-v14":["OLE-028","OLE-027","OLE-016"],"carrot-v14":["OLE-028","OLE-027","OLE-016"],"garlic-v13":["SZY-006","SZY-014"],"garlic-v14":["OLE-001","OLE-034","OLE-035"],"onion-v10":["SZY-006","SZY-007","OLE-028","OLE-027"],"onion-v11":["SLO-037","SLO-036"],"shallot-pearl-onion-v11":["OLE-028","OLE-027","OLE-016"],"shallot-pearl-onion-v12":["SZY-006","SZY-007","SZY-013"],"leek-chives-v07":["OLE-028","OLE-027","OLE-016"],"leek-chives-v10":["SZY-007"],"daikon-black-radish-v09":["SLO-037","SLO-036","SLO-023"],"daikon-black-radish-v11":["SZY-006","SZY-007"],"daikon-black-radish-v13":["OLE-028","OLE-027","OLE-016"],"radish-v08":["OLE-028","OLE-027","OLE-016"],"horseradish-v10":["OLE-028","OLE-027","OLE-016"],"celeriac-celery-v07":["SZY-006","SZY-007"],"celeriac-celery-v08":["OLE-028","OLE-027","OLE-016"],"celeriac-celery-v10":["SZY-006","SZY-007"],"parsnip-parsley-v08":["SZY-006","SZY-014","SZY-009"],"asparagus-v07":["OLE-028","OLE-027","OLE-016","OLE-046"],"asparagus-v08":["SZY-006","SZY-014","SZY-017"],"fennel-artichoke-v06":["OLE-028","OLE-027","OLE-016"],"fennel-artichoke-v07":["OLE-028","OLE-046","OLE-049"],"fennel-artichoke-v09":["OLE-028","OLE-027","OLE-016"],"corn-v07":["SZY-006"],"corn-v10":["SZY-006","SZY-007"],"olives-v09":["OLE-028","OLE-046"],"olives-v10":["OLE-028","OLE-046","OLE-049"],"olives-v13":["OLE-028","OLE-046","OLE-049"],"ginger-turmeric-v14":["OLE-028","OLE-027","OLE-016"],"european-mixed-veg-v08":["OLE-028","OLE-027","OLE-016"],"european-mixed-veg-v09":["SZY-006","SZY-026","SZY-028"],"european-mixed-veg-v10":["SZY-006","SZY-026","SZY-013"],"european-mixed-veg-v11":["SZY-006","SZY-028"],"balkan-oriental-mix-v08":["OLE-028","OLE-027","OLE-016","OLE-046"],"balkan-oriental-mix-v09":["OLE-028","OLE-027","OLE-016","OLE-046"],"balkan-oriental-mix-v11":["OLE-028","OLE-027","OLE-016"],"balkan-oriental-mix-v12":["SZY-006","SZY-007","SZY-013"],"asian-american-mix-v08":["OLE-028","OLE-027","OLE-016"],"asian-american-mix-v12":["SZY-025"],"asian-american-mix-v13":["OLE-028","OLE-001"],"apricot-v07":["SLO-070"],"elderberry-elderflower-v07":["SLO-061","SLO-062","SLO-064"],"cultivated-mushrooms-v08":["SZY-006","SZY-007","OLE-026"],"cultivated-mushrooms-v10":["SZY-006","SZY-014"],"cultivated-mushrooms-v12":["SZY-007"],"miso-garum-v10":["NAP-047","NAP-048"],"yogurt-skyr-v10":["MLE-060","MLE-062","MLE-063"],"fresh-brined-cheese-v07":["MLE-060","MLE-062","MLE-063","MLE-043"],"fresh-brined-cheese-v14":["MLE-060","MLE-062","MLE-063"],"mold-ripened-cheese-v05":["MLE-060","MLE-062","MLE-063","MLE-045"],"butter-whey-cheese-v05":["OLE-001","OLE-034","OLE-035"],"pork-loin-ham-v12":["SZY-006","SZY-007","SZY-009"],"pork-loin-ham-v13":["SZY-007","SZY-013"],"pork-loin-ham-v14":["OLE-046","OLE-047","OLE-048"],"pork-loin-ham-v15":["SZY-006","SZY-007"],"pork-shoulder-neck-v08":["SZY-006","SZY-014","SZY-009"],"pork-shoulder-neck-v09":["SZY-006","SZY-007"],"pork-shoulder-neck-v11":["SZY-006","SZY-007","SZY-017"],"pork-shoulder-neck-v12":["OLE-046","OLE-047","OLE-048"],"pork-shoulder-neck-v13":["SZY-006","SZY-007"],"pork-belly-jowl-v08":["SZY-006","SZY-007","SZY-009"],"smoked-cooked-sausages-v11":["SZY-006","SZY-010","SZY-011"],"smoked-cooked-sausages-v12":["SZY-006","SZY-014","SZY-009"],"beef-veal-v05":["SZY-006","SZY-007","SZY-017"],"beef-veal-v07":["SZY-006","SZY-007","SZY-017"],"poultry-v08":["OLE-046","OLE-047","OLE-048"],"poultry-v09":["OLE-046","OLE-047","OLE-048"],"poultry-v13":["OLE-046","OLE-047","OLE-048"],"game-lamb-v03":["MIE-033","MIE-034","MIE-043"],"game-lamb-v08":["SZY-006","SZY-014"],"game-lamb-v10":["OLE-046","OLE-047","OLE-048"],"offal-pates-v01":["SZY-006","SZY-014"],"offal-pates-v02":["OLE-046","OLE-047","OLE-048"],"offal-pates-v03":["SZY-006","SZY-007"],"offal-pates-v04":["SZY-006","SZY-014"],"offal-pates-v05":["SZY-006","SZY-014"],"offal-pates-v07":["SZY-006","SZY-007"],"offal-pates-v08":["SZY-006","SZY-007","SZY-017"],"offal-pates-v09":["SZY-006","SZY-017"],"offal-pates-v10":["SZY-006","SZY-007"],"offal-pates-v11":["SZY-006","SZY-007"],"sea-fish-v12":["SZY-006","SZY-007","SZY-017"],"sea-fish-v13":["SZY-006","SZY-007"],"freshwater-fish-v07":["SZY-007"],"freshwater-fish-v09":["SZY-006","SZY-007"],"freshwater-fish-v11":["MIE-061","MIE-067","MIE-070"],"eggs-v06":["MIE-091"],"eggs-v07":["OLE-028","OLE-001","MIE-095","MIE-083"],"eggs-v09":["MIE-093"],"kefir-cream-v13":["MLE-001","MLE-002","MLE-003","MLE-004","MLE-005"]};
const TERMIN_RE = /\d+\s*(–\s*\d+\s*)?(dni|dnia|dzień|tygodni|tydzień|godzin|godziny|h\b|miesi|min\b)|°\s*[FC]|\d\s*g\b|PSI/;
// SLO-070: dawka referencyjna EFSA dla pestek moreli (granica zagrożenia, nie zgoda; B29-D4, do weta). OLE-048: „100°C nie wystarcza” (zaprzeczenie procesu).
const TERMIN_WYJATKI = ["SLO-070", "OLE-048"];
// Warianty z drugą notatką [B29] „potrzebny research” (twierdzenie o zagrożeniu do znalezienia).
const RESEARCH = ["eggs-v06","apricot-v07","peas-chickpeas-v09","leek-chives-v10","cultivated-mushrooms-v12","freshwater-fish-v07","pork-loin-ham-v13"];

test("B29: katalog 1.0.18 przechodzi walidację bez błędów", () => {
  assert.ok(Number(cat.version.split(".")[2]) >= 18 && cat.version.startsWith("1.0."), cat.version); // B31: 1.0.19
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B29: lista 136 wariantów (2 wycofane), każda karta-ostrzeżenie ma requiredWarnings albo notatkę [B29] z „potrzebny research”", () => {
  assert.equal(LISTA.length, 136);
  assert.equal(new Set(LISTA).size, 136);
  assert.deepEqual(LISTA.filter((id) => V.get(id)?.retired).sort(), [...WYCOFANE].sort());
  for (const id of LISTA) {
    const v = V.get(id);
    assert.equal(v.cardType, "warning", id);
    if (v.retired) continue;
    assert.ok((v.requiredWarnings ?? []).length > 0 || /^\[B29\].*potrzebny research/.test(nota(id) ?? ""), `${id}: requiredWarnings albo [B29] potrzebny research`);
  }
});

test("B29-D1: requiredWarnings = reguła ogólna metody, tylko z claims, potwierdzone, bez terminów", () => {
  assert.deepEqual(Object.keys(MAPA).sort(), LISTA.filter((id) => !WYCOFANE.includes(id)).sort());
  for (const [id, w] of Object.entries(MAPA)) {
    const v = V.get(id), m = v.preservationMethod ?? "brak", zimno = m === "refrigerator" || m === "freezer";
    const regula = OSTRZ.filter((c) => v.claims.includes(c) && !(c === "SZY-006" && m === "pressure-canning") && !(c.startsWith("SZY-") && zimno) && !(c === "OLE-016" && !zimno));
    assert.deepEqual(w, regula, `${id}: tabela = reguła`);
    assert.deepEqual(v.requiredWarnings ?? [], w, `${id}: requiredWarnings`);
    for (const c of w) {
      assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
      assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
      assert.ok(TERMIN_WYJATKI.includes(c) || !TERMIN_RE.test(R.get(c).twierdzenie), `${id}: ${c} ma termin albo czas procesu`);
    }
    if (w.length) assert.deepEqual(nota(id)?.match(/: ([A-Z]{3}-\d{3}(, [A-Z]{3}-\d{3})*) \(/)?.[1].split(", "), w, `${id}: notatka [B29] z dokładną listą ostrzeżeń`);
    const res = V.get(id).notes.filter((n) => n.startsWith("[B29] potrzebny research") && n.includes(DEC));
    assert.equal(res.length, RESEARCH.includes(id) ? 1 : 0, `${id}: notatka potrzebny research`);
  }
  for (const c of OSTRZ) assert.equal(R.get(c)?.status, "potwierdzone", c);
});

test("B29: zmienione tylko requiredWarnings i notatka [B29]; safetyStatus, publication, claims bez zmian; wycofane i reszta katalogu bez zmian", () => {
  const L = new Set(LISTA);
  const bez = (v) => { const { requiredWarnings, ...r } = v; return { ...r, notes: (v.notes ?? []).filter((n) => !n.startsWith("[B29]")) }; };
  assert.equal(h(cat.variants.filter((v) => L.has(v.id)).map(bez)), "a3e7271f6006", "warianty z listy poza requiredWarnings i [B29] bez zmian (skrót na 2d839e3)");
  // B31 zmienia 3 warianty spoza listy (walnut-nuts-v07, wild-mushrooms-v03, fig-pomegranate-v09); ich pilnuje tests/b31-katalog.test.mjs. Skrót na f36b7b0 bez nich.
  const B31 = new Set(["walnut-nuts-v07", "wild-mushrooms-v03", "fig-pomegranate-v09"]);
  assert.equal(h(cat.variants.filter((v) => !L.has(v.id) && !B31.has(v.id))), "910053358d99", "warianty spoza listy bez zmian (skrót na f36b7b0, bez wariantów B31)");
  for (const id of WYCOFANE) { assert.equal(V.get(id).requiredWarnings, undefined, id); assert.equal(nota(id), undefined, id); }
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: 0 zmian, wszystko ukryta");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6", "categories, products, processFamilies bez zmian");
});

test("B29: twierdzenia użyte w ostrzeżeniach bez zmian w rejestrze (twierdzenie, status, źródła); nowe ID 0", () => {
  const uzyte = [...new Set(Object.values(MAPA).flat())].sort();
  assert.equal(h(uzyte.map((id) => [id, R.get(id).twierdzenie, R.get(id).status, R.get(id).zrodla])), "ff5ab5a34364");
  assert.ok(uzyte.every((id) => OSTRZ.includes(id)));
});

test("B29 (ADR 0008): notatki [B29] bez numerów ISBN", () => {
  // Nazw firm, wydawców i tytułów nie wpisujemy do repo publicznego, także do testów; nazwy sprawdza kontrola lokalna tools/zrodla-prywatne.mjs.
  assert.doesNotMatch(JSON.stringify(cat.variants.flatMap((v) => (v.notes ?? []).filter((n) => n.startsWith("[B29]")))), /ISBN/);
});
