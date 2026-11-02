// B30 research (06-tresci, tor C): nowe twierdzenia OLE-090–093 i SLO-900–904, kontrola źródeł z błędem HTTP, werdykty dla
// fig-pomegranate-v09, walnut-nuts-v07, wild-mushrooms-v03 (propozycja; katalog zmienia następna porcja katalogowa).
// Decyzja: 2026-11-02-jaratlas-b30-research (decyzja Claude, do weta). Raport: docs/tresci/B30-research-2026-11-02.md.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const b30 = JSON.parse(readFileSync("docs/tresci/B30-research-2026-11-02.json", "utf8"));
const raport = readFileSync("docs/tresci/B30-research-2026-11-02.md", "utf8");
const R = new Map(rej.map((t) => [t.id, t]));
const ZAKRESY = { SLO: [900, 949], OLE: [90, 99], SUS: [400, 419] };
const wZakresie = (id) => { const [p, n] = id.split("-"); return !!ZAKRESY[p] && +n >= ZAKRESY[p][0] && +n <= ZAKRESY[p][1]; };

test("B30: nowe ID są w rejestrze, w zakresach toru C i potwierdzone ze źródłem szczebla 1", () => {
  assert.equal(b30.uzyte_id.length, 9);
  for (const id of b30.uzyte_id) {
    assert.ok(wZakresie(id), `${id} poza zakresem B30`);
    const t = R.get(id);
    assert.ok(t, `${id} brak w rejestrze`);
    assert.equal(t.status, "potwierdzone", id);
    assert.ok(t.zrodla.length && t.zrodla.every((z) => z.szczebel === 1 && z.adres && z.cytat && z.odczyt === "2026-11-02" && /^[0-9a-f]{12}$/.test(z.sha12)), id);
    assert.ok(t.twierdzenie_en, id);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", id);
  }
});

test("B30: żadne ID z rejestru bazowego (18f38d1) nie zostało usunięte", () => {
  let n = 0;
  for (const [p, zakresy] of Object.entries(b30.ids_bazy)) for (const z of zakresy.split(",")) {
    const [a, b = a] = z.split("-").map(Number);
    for (let i = a; i <= b; i++) { const id = `${p}-${String(i).padStart(3, "0")}`; n++; assert.ok(R.has(id), `usunięte ${id}`); }
  }
  assert.equal(n, 2028);
});

test("B30: źródła z błędem HTTP sprawdzone inną drogą i nieusunięte", () => {
  for (const { id } of b30.zrodla_bledy) {
    const t = R.get(id);
    assert.ok(t, id);
    assert.equal(t.status, "potwierdzone", id);
    assert.equal(t.kontrolaB30?.data, "2026-11-02", id);
    assert.match(t.kontrolaB30.metoda, /WebFetch/, id);
  }
  assert.match(R.get("OLE-025").kontrolaB30.wynik, /\[DO SPRAWDZENIA\]/);
});

test("B30: proponowane werdykty przechodzą walidator na kopii katalogu (bez nowych błędów)", () => {
  const przed = new Set(validateCatalog(cat, rej).errors);
  const kopia = structuredClone(cat);
  for (const w of b30.warianty) {
    const v = kopia.variants.find((x) => x.id === w.id);
    assert.ok(v, w.id);
    // B31: werdykty wpisane do katalogu, więc stan bieżący = werdykt (przed B31 był „przed”).
    assert.equal(v.safetyStatus, w.werdykt, w.id);
    if (w.werdykt === "do-researchu") continue;
    Object.assign(v, { safetyStatus: w.werdykt, cardType: w.cardType, claims: w.claims, requiredWarnings: w.requiredWarnings });
    for (const id of [...w.claims, ...w.requiredWarnings]) assert.equal(R.get(id)?.status, "potwierdzone", `${w.id}: ${id}`);
  }
  const nowe = validateCatalog(kopia, rej).errors.filter((e) => !przed.has(e));
  assert.deepEqual(nowe, []);
});

// B31 (2026-11-02-jaratlas-b31-katalog): werdykty z JSON wpisane do katalogu. Wyjątek B31-D1: wild-mushrooms-v03 ma w claims także SUS-035
// (było już w requiredWarnings; requiredWarnings ⊆ claims).
test("B30: werdykty z JSON wpisane do katalogu (B31)", () => {
  const V = new Map(cat.variants.map((v) => [v.id, v]));
  for (const w of b30.warianty) {
    const v = V.get(w.id);
    assert.equal(v.safetyStatus, w.werdykt, w.id);
    if (w.werdykt === "do-researchu") { assert.deepEqual(v.claims, w.claims, w.id); assert.equal(v.cardType, undefined, w.id); continue; }
    assert.equal(v.cardType, w.cardType, w.id);
    for (const c of w.claims) assert.ok(v.claims.includes(c), `${w.id}: ${c} w claims`);
    assert.deepEqual(v.claims.filter((c) => !w.claims.includes(c)), w.id === "wild-mushrooms-v03" ? ["SUS-035"] : [], `${w.id}: claims spoza JSON`);
    assert.deepEqual(v.requiredWarnings, w.requiredWarnings, w.id);
  }
});

test("B30: bez nazw firm i wydawców w raporcie, JSON i nowych twierdzeniach", () => {
  const tekst = [raport, JSON.stringify(b30), JSON.stringify(b30.uzyte_id.map((id) => R.get(id)))].join("\n");
  for (const n of ["Jif", "Smucker", "Ball ", "Kerr", "Bernardin", "Newell", "Jarden", "Fresh Preserving", "Penguin", "Random House", "Wiley", "Springer", "Elsevier"]) assert.ok(!tekst.includes(n), n);
});
