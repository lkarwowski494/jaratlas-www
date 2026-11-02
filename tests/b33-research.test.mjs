// B33 research (06-tresci, tor C): nowe twierdzenia SZY-080–086, MIE-165, SLO-905–908; propozycje werdyktów dla 7 wariantów B29
// „potrzebny research” i 6 pozycji listy B32 (propozycja; katalog zmienia następna porcja katalogowa).
// Decyzja: 2026-11-02-jaratlas-b33-research (decyzja Claude, do weta). Raport: docs/tresci/B33-research-2026-11-02.md.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const catTekst = readFileSync("catalog/catalog-seed.json", "utf8");
const cat = JSON.parse(catTekst);
const b33 = JSON.parse(readFileSync("docs/tresci/B33-research-2026-11-02.json", "utf8"));
const raport = readFileSync("docs/tresci/B33-research-2026-11-02.md", "utf8");
const R = new Map(rej.map((t) => [t.id, t]));
const V = new Map(cat.variants.map((v) => [v.id, v]));
// Zakresy toru C (SLO, OLE, SUS) i pozostałe prefiksy od maksimum bazy 0adc4a2 (SZY 79, MIE 164).
const ZAKRESY = { SLO: [905, 949], OLE: [94, 99], SUS: [400, 419], SZY: [80, 99], MIE: [165, 199] };
const wZakresie = (id) => { const [p, n] = id.split("-"); return !!ZAKRESY[p] && +n >= ZAKRESY[p][0] && +n <= ZAKRESY[p][1]; };

test("B33: nowe ID w zakresach, w rejestrze, potwierdzone, ze źródłem i sha12", () => {
  assert.deepEqual(b33.uzyte_id, ["SZY-080", "SZY-081", "SZY-082", "SZY-083", "SZY-084", "SZY-085", "SZY-086", "MIE-165", "SLO-905", "SLO-906", "SLO-907", "SLO-908"]);
  assert.deepEqual(rej.filter((t) => t.pochodzenie?.startsWith("B33")).map((t) => t.id), b33.uzyte_id);
  for (const id of b33.uzyte_id) {
    assert.ok(wZakresie(id), `${id} poza zakresem B33`);
    const t = R.get(id);
    assert.equal(t.status, "potwierdzone", id);
    assert.ok(t.twierdzenie_en, id);
    assert.ok(t.zrodla.length && t.zrodla.every((z) => [1, 3].includes(z.szczebel) && z.adres && z.cytat && z.odczyt === "2026-11-02" && /^[0-9a-f]{12}$/.test(z.sha12)), id);
    if (t.zrodla.every((z) => z.szczebel === 3)) assert.match(t.twierdzenie, /^Według /, `${id}: szczebel 3 z atrybucją`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", id);
  }
});

test("B33: żadne ID z rejestru bazowego (0adc4a2) nie zostało usunięte", () => {
  let n = 0;
  for (const [p, zakresy] of Object.entries(b33.ids_bazy)) for (const z of zakresy.split(",")) {
    const [a, b = a] = z.split("-").map(Number);
    for (let i = a; i <= b; i++) { const id = `${p}-${String(i).padStart(3, "0")}`; n++; assert.ok(R.has(id), `usunięte ${id}`); }
  }
  assert.equal(n, 2077);
  assert.equal(n, b33.liczba_bazy);
  assert.equal(rej.length, 2077 + b33.uzyte_id.length);
});

test("B33: katalog bez zmian (stan bazy 0adc4a2)", () => {
  assert.equal(createHash("sha256").update(catTekst).digest("hex").slice(0, 12), "5ddb7f38e7ec");
  for (const w of b33.warianty) {
    const v = V.get(w.id);
    assert.ok(v, w.id);
    assert.deepEqual(v.claims, w.przed.claims, w.id);
    assert.deepEqual(v.requiredWarnings, w.przed.requiredWarnings, w.id);
    assert.equal(v.safetyStatus, w.propozycja.safetyStatus, `${w.id}: status bez zmian`);
  }
});

test("B33: propozycje przechodzą walidator na kopii katalogu (bez nowych błędów), requiredWarnings ⊆ claims", () => {
  const przed = new Set(validateCatalog(cat, rej).errors);
  const kopia = structuredClone(cat);
  for (const w of b33.warianty) {
    const v = kopia.variants.find((x) => x.id === w.id);
    const p = w.propozycja;
    for (const id of p.requiredWarnings) assert.ok(p.claims.includes(id), `${w.id}: ${id} w claims`);
    for (const id of [...p.claims, ...p.requiredWarnings]) assert.equal(R.get(id)?.status, "potwierdzone", `${w.id}: ${id}`);
    for (const id of w.przed.claims) assert.ok(p.claims.includes(id), `${w.id}: claims nie tracą ${id}`);
    Object.assign(v, { claims: p.claims, requiredWarnings: p.requiredWarnings });
  }
  assert.deepEqual(validateCatalog(kopia, rej).errors.filter((e) => !przed.has(e)), []);
});

test("B33: pokrycie zakresu (7 wariantów A, 6 pozycji B) i SZY-017 tylko przy zupach", () => {
  const ids = new Set(b33.warianty.map((w) => w.id));
  for (const id of ["eggs-v06", "apricot-v07", "peas-chickpeas-v09", "leek-chives-v10", "cultivated-mushrooms-v12", "freshwater-fish-v07", "pork-loin-ham-v13",
    "asian-american-mix-v12", "eggs-v07", "fresh-brined-cheese-v07", "chili-pepper-v14", "onion-v11", "daikon-black-radish-v09", "brussels-kohlrabi-v11"]) assert.ok(ids.has(id), id);
  for (const v of cat.variants.filter((x) => (x.requiredWarnings || []).includes("SZY-017"))) assert.ok(ids.has(v.id), `${v.id} z SZY-017 bez propozycji`);
  const zSzy017 = b33.warianty.filter((w) => w.propozycja.requiredWarnings.includes("SZY-017")).map((w) => w.id).sort();
  assert.deepEqual(zSzy017, ["asparagus-v08", "offal-pates-v09"]);
  for (const w of b33.warianty) if (w.przed.requiredWarnings.length) assert.ok(w.propozycja.requiredWarnings.length >= w.przed.requiredWarnings.length || w.przed.requiredWarnings.includes("SZY-017"), `${w.id}: mniej ostrzeżeń`);
});

test("B33: bez nazw firm i wydawców w raporcie, JSON i nowych twierdzeniach", () => {
  const tekst = [raport, JSON.stringify(b33), JSON.stringify(b33.uzyte_id.map((id) => R.get(id)))].join("\n");
  for (const n of ["Jif", "Smucker", "Ball ", "Ball®", "Kerr", "Bernardin", "Newell", "Jarden", "Fresh Preserving", "Clear Jel", "Arla", "Apetina", "UNFI", "Penguin", "Random House", "Wiley", "Springer", "Elsevier"]) assert.ok(!tekst.includes(n), n);
});
