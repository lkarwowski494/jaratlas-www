// B32 (06-tresci, tor B, porcja katalogowa): propozycje katalogowe z E3 p37 §5 i E3 p38 §5.
// Decyzja: 2026-11-02-jaratlas-b32-katalog (decyzja Claude, do weta). Raport: docs/tresci/B32-katalog-2026-11-02.md.
// Skróty „przed” policzone na 7b422b9 (katalog 1.0.19).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const R = new Map(rej.map((t) => [t.id, t]));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const DEC = "2026-11-02-jaratlas-b32-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const karta = (id) => JSON.parse(readFileSync(`docs/tresci/karty/en/warianty/${id}.json`, "utf8"));
const nota = (id) => V.get(id).notes?.find((n) => n.startsWith("[B32]") && n.includes(DEC));
const POLA = ["name", "safetyStatus", "cardType", "claims", "requiredWarnings", "notes", "preservationMethod"];

// Przed (7b422b9): skróty wariantów bez pól POLA.
export const SNAP = {"pork-loin-ham-v01":"35d264c016c5","pork-belly-jowl-v09":"0120051ba170","white-cabbage-v14":"d53e3b517696","cultivated-mushrooms-v10":"7553d23bf6f1","vine-leaves-greens-v09":"f38fa8435766","beans-soy-v08":"8bd8b80bf6ae","green-beans-v08":"3277d0b32379","peas-chickpeas-v07":"477156c4307b","peas-chickpeas-v08":"2b8dd5ca2d72","beans-soy-v09":"f8a1aaa50b73","carrot-v09":"cc1eada68099","zucchini-v15":"44a76405a6ca","elderberry-elderflower-v10":"9c82b55d6008","artisanal-vinegars-v01":"57d398d9ebb3","garden-herbs-v06":"fe3b42aca0bb","green-cherry-tomato-v14":"17b86043283e","foraged-blossoms-v13":"7868c73695f2","garden-herbs-v01":"e3b6aeb57766","red-savoy-cabbage-v09":"773cdbc4e55f","vine-leaves-greens-v08":"97e30f3ff331","beetroot-v09":"ff1889c93702","beans-soy-v07":"b31f81667ae2","pork-shoulder-neck-v11":"81510c0f4632","beef-veal-v05":"51b8681f51b5","beef-veal-v07":"09f6e5b3e0c7","offal-pates-v08":"269aad2a6ceb","sea-fish-v12":"f1f4211326b5","pork-loin-ham-v13":"7ed8d90fe247","european-mixed-veg-v09":"5bc774f8de64","asian-american-mix-v12":"3a4fdfbd5b56","eggs-v07":"7e30a81799d6","fresh-brined-cheese-v07":"b2d0939a8d79","asparagus-v07":"ffaab39c37d3","balkan-oriental-mix-v08":"62baf59b0798","balkan-oriental-mix-v09":"c406062d602e","olives-v09":"411c801500d6","chili-pepper-v14":"37f852a4ce19","onion-v11":"fecc39f47ead","daikon-black-radish-v09":"1f068eb1522a","brussels-kohlrabi-v11":"ecd60c105154","strawberry-v12":"9c2ad6c3212f"};
export const B32 = Object.keys(SNAP);

// Zmiany przyjęte (pola po B32).
export const OCZEKIWANE = {
  "pork-loin-ham-v01": { requiredWarnings: ["MIE-161", "MIE-011"] },
  "pork-belly-jowl-v09": { claims: ["MIE-021", "OLE-047", "MIE-156"], requiredWarnings: ["MIE-156", "OLE-047"] },
  "white-cabbage-v14": { requiredWarnings: ["SZY-006", "SZY-007", "SZY-017", "SZY-025"] },
  "cultivated-mushrooms-v10": { claims: ["SZY-001", "SZY-003", "SZY-006", "SZY-008", "SZY-014", "OLE-028", "OLE-024"], requiredWarnings: ["SZY-006", "SZY-014", "OLE-028", "OLE-024"] },
  "vine-leaves-greens-v09": { safetyStatus: "nie-publikowac", cardType: "warning", claims: ["OLE-042", "OLE-043", "OLE-044", "SLO-880"], requiredWarnings: ["SLO-880"] },
  "foraged-blossoms-v13": { claims: ["SUS-031", "SUS-033", "SUS-022", "SLO-489"], requiredWarnings: ["SLO-489"] },
  "elderberry-elderflower-v10": { name: { pl: "suszone kwiaty czarnego bzu" }, claims: ["SUS-031", "SUS-033", "SUS-022", "ACI-450"], requiredWarnings: ["ACI-450"] },
  "garden-herbs-v01": { claims: ["OLE-042", "OLE-043", "OLE-044", "OLE-054", "SLO-303"], requiredWarnings: ["OLE-043", "OLE-054", "SLO-303"] },
  "garden-herbs-v06": { preservationMethod: "refrigerator", claims: ["OLE-010", "OLE-011", "OLE-012", "OLE-013", "OLE-014", "OLE-015", "OLE-017", "OLE-018", "OLE-002", "OLE-019", "OLE-077"] },
  "beans-soy-v08": { name: { pl: "fasola z suchych nasion w sosie pomidorowym (szybkowar)" } },
  "green-beans-v08": { name: { pl: "konserwowa w zalewie (szybkowar)" } },
  "peas-chickpeas-v07": { name: { pl: "zielony groszek w zalewie (szybkowar)" } },
  "peas-chickpeas-v08": { name: { pl: "ciecierzyca w zalewie" } },
  "beans-soy-v09": { name: { pl: "czerwona i biała fasola w zalewie" } },
  "carrot-v09": { name: { pl: "marchewka konserwowa w kostkę w zalewie" } },
  "zucchini-v15": { name: { pl: "pomidory z cukinią (szybkowar)" } },
  "artisanal-vinegars-v01": { name: { pl: "domowy ocet jabłkowy (matka octowa odfiltrowana)" } },
};
// Karty en, w których zmieniły się ostrzeżenia (B32-D2).
const KARTY = ["pork-loin-ham-v01", "pork-belly-jowl-v09", "white-cabbage-v14", "cultivated-mushrooms-v10", "foraged-blossoms-v13", "elderberry-elderflower-v10", "garden-herbs-v01"];

test("B32: katalog 1.0.20 przechodzi walidację bez błędów", () => {
  assert.equal(cat.version, "1.0.20");
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B32: zmiany przyjęte wpisane; requiredWarnings ⊆ claims; twierdzenia potwierdzone", () => {
  for (const [id, o] of Object.entries(OCZEKIWANE)) {
    const v = V.get(id);
    for (const [k, w] of Object.entries(o)) assert.deepEqual(v[k], w, `${id}.${k}`);
    for (const c of v.requiredWarnings ?? []) assert.ok(v.claims.includes(c), `${id}: ${c} w requiredWarnings bez pokrycia w claims`);
    for (const c of v.claims) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
  }
});

test("B32: odrzucone i odłożone zostają bez zmian pól bezpieczeństwa (wariant ostrożniejszy)", () => {
  const BEZ = { "european-mixed-veg-v09": "SZY-026", "eggs-v07": "MIE-083", "fresh-brined-cheese-v07": "MLE-043", "asparagus-v07": "OLE-046", "balkan-oriental-mix-v08": "OLE-046", "balkan-oriental-mix-v09": "OLE-046", "olives-v09": "OLE-046", "chili-pepper-v14": "SLO-037", "onion-v11": "SLO-037", "daikon-black-radish-v09": "SLO-037", "brussels-kohlrabi-v11": "SZY-025", "pork-loin-ham-v13": "SZY-013", "asian-american-mix-v12": "SZY-025" };
  for (const [id, c] of Object.entries(BEZ)) assert.ok(V.get(id).requiredWarnings.includes(c), `${id}: ${c} zostaje`);
  for (const id of ["white-cabbage-v14", "red-savoy-cabbage-v09", "vine-leaves-greens-v08", "beetroot-v09", "beans-soy-v07", "pork-shoulder-neck-v11", "beef-veal-v05", "beef-veal-v07", "offal-pates-v08", "sea-fish-v12"]) assert.ok(V.get(id).requiredWarnings.includes("SZY-017"), `${id}: SZY-017 zostaje do researchu`);
  assert.ok(!V.get("strawberry-v12").requiredWarnings.includes("ACI-733"), "ACI-733 (jakość) nie jest ostrzeżeniem");
});

test("B32: każdy z wariantów ma notatkę [B32] z decyzją; bez warningReason", () => {
  for (const id of B32) assert.ok(nota(id), `${id}: notatka [B32]`);
  for (const id of B32) assert.equal(V.get(id).warningReason, undefined, `${id}: warningReason`);
  assert.ok(!V.get("beans-soy-v08").notes.some((n) => n.includes("Beans, Baked")), "beans-soy-v08: notes bez „Beans, Baked”");
  assert.ok(!V.get("garden-herbs-v06").notes.some((n) => /lodówka do 4 dni/.test(n)), "garden-herbs-v06: notes bez „lodówka do 4 dni”");
  assert.match(nota("green-cherry-tomato-v14"), /ACI-960/);
});

test("B32: karty en zmienionych wariantów mają dokładnie wymagane ostrzeżenia (bez SZY-024 i MIE-021)", () => {
  for (const id of KARTY) assert.deepEqual(karta(id).ostrzezenia.map((o) => o.claim).sort(), [...V.get(id).requiredWarnings].sort(), id);
});

test("B32: poza polami decyzji nic się nie zmieniło; publication 0 zmian; reszta katalogu bez zmian", () => {
  for (const id of B32) { const r = { ...V.get(id) }; for (const k of POLA) delete r[k]; assert.equal(h(r), SNAP[id], `${id}: pola poza decyzją`); }
  assert.equal(h(cat.variants.filter((v) => !B32.includes(v.id))), "5867958b86df", "reszta katalogu bez zmian (skrót na 7b422b9)");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6");
  assert.equal(cat.variants.length, 1432);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0);
  assert.ok(rej.length >= 2077, "rejestr: bez usuniętych ID");
});

test("B32: raport ma decyzje per propozycja, D-043, decyzje do weta, tor A i research; bez nazw wydawców", () => {
  const raport = readFileSync("docs/tresci/B32-katalog-2026-11-02.md", "utf8");
  for (const s of [...Object.keys(OCZEKIWANE), "SZY-017", "SLO-037", "OLE-046", "B32-D1", "D-043", "toru A", "potrzebny research", DEC]) assert.ok(raport.includes(s), s);
  for (const n of ["Ball ", "Kerr", "Bernardin", "Penguin", "Random House", "Wiley", "Springer", "Elsevier"]) assert.ok(!raport.includes(n), n);
});
