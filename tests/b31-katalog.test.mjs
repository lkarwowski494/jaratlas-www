// B31 (06-tresci, tor C, porcja katalogowa): wpis werdyktów B30 do katalogu (walnut-nuts-v07, wild-mushrooms-v03, fig-pomegranate-v09).
// Decyzja: 2026-11-02-jaratlas-b31-katalog (decyzja Claude, do weta). Raport: docs/tresci/B31-katalog-2026-11-02.md.
// Skróty „przed” policzone na f36b7b0 (katalog 1.0.18, rejestr 2037).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const raport = readFileSync("docs/tresci/B31-katalog-2026-11-02.md", "utf8");
const R = new Map(rej.map((t) => [t.id, t]));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const DEC = "2026-11-02-jaratlas-b31-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const nota = (id) => V.get(id).notes?.find((n) => n.startsWith("[B31]") && n.includes(DEC));
const B31 = ["walnut-nuts-v07", "wild-mushrooms-v03", "fig-pomegranate-v09"];
const POLA = ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"];

export const OCZEKIWANE = {
  "walnut-nuts-v07": { safetyStatus: "nie-publikowac", cardType: "warning", claims: ["OLE-090", "OLE-091", "OLE-092", "OLE-093"], requiredWarnings: ["OLE-092", "OLE-091"] },
  // B31-D1: SUS-035 było w requiredWarnings bez pokrycia w claims; dopisane do claims (wariant ostrożniejszy niż usunięcie ostrzeżenia).
  "wild-mushrooms-v03": { safetyStatus: "nie-publikowac", cardType: "warning", claims: ["ACI-030", "ACI-159", "SUS-035", "SLO-900", "SLO-901", "SLO-902", "SLO-903", "SLO-904"], requiredWarnings: ["SUS-035", "SLO-901"] },
  "fig-pomegranate-v09": { safetyStatus: "do-researchu", cardType: undefined, claims: [], requiredWarnings: undefined },
};

test("B31: katalog 1.0.19 przechodzi walidację bez błędów", () => {
  assert.equal(cat.version, "1.0.19");
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B31: werdykty B30 wpisane (safetyStatus, cardType, claims, requiredWarnings) i requiredWarnings ⊆ claims", () => {
  for (const [id, o] of Object.entries(OCZEKIWANE)) {
    const v = V.get(id);
    for (const k of ["safetyStatus", "cardType", "claims", "requiredWarnings"]) assert.deepEqual(v[k], o[k], `${id}.${k}`);
    for (const c of v.requiredWarnings ?? []) assert.ok(v.claims.includes(c), `${id}: ${c} w requiredWarnings bez pokrycia w claims`);
    for (const c of [...v.claims, ...(v.requiredWarnings ?? [])]) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
  }
});

test("B31: każdy z 3 wariantów ma notatkę [B31] z decyzją; fig-pomegranate-v09 z wynikiem B30-D1", () => {
  for (const id of B31) assert.ok(nota(id), `${id}: notatka [B31]`);
  assert.match(nota("fig-pomegranate-v09"), /B30-D1/);
  assert.match(nota("fig-pomegranate-v09"), /szczebla 1/);
  assert.match(nota("walnut-nuts-v07"), /B30-D2/);
  assert.match(nota("wild-mushrooms-v03"), /B30-D3/);
  assert.match(nota("wild-mushrooms-v03"), /B31-D1/);
});

test("B31: poza polami werdyktu i notatką [B31] nic się nie zmieniło; publication 0 zmian; rejestr bez zmian", () => {
  const SNAP = { "walnut-nuts-v07": "318b0e28bf56", "wild-mushrooms-v03": "1a7bb3516cf5", "fig-pomegranate-v09": "6c9f2c8f3980" };
  for (const id of B31) { const r = { ...V.get(id) }; for (const k of POLA) delete r[k]; assert.equal(h(r), SNAP[id], `${id}: pola poza werdyktem bez zmian`); }
  for (const id of B31) assert.deepEqual(V.get(id).notes.filter((n) => !n.startsWith("[B31]")).length, V.get(id).notes.length - 1, `${id}: dokładnie jedna notatka [B31]`);
  assert.equal(h(cat.variants.filter((v) => !B31.includes(v.id))), "8a88b91f03b1", "reszta katalogu bez zmian (skrót na f36b7b0)");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6", "categories, products, processFamilies bez zmian");
  assert.equal(cat.variants.length, 1432);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: wszystko ukryta");
  assert.equal(rej.length, 2037, "rejestr: bez nowych i bez usuniętych ID");
  // D-027 d: nowe zdanie ostrzeżenia SLO-901 na karcie en wild-mushrooms-v03 → zmienia się tylko przeglad SLO-901 (skrót zdań).
  const bezPrzegladu = rej.map((t) => (t.id === "SLO-901" ? (({ przeglad, ...x }) => x)(t) : t));
  assert.equal(h(bezPrzegladu), "211640cbffc3", "rejestr bez zmian poza przeglad SLO-901 (skrót na f36b7b0)");
  assert.deepEqual(R.get("SLO-901").przeglad, { kto: "weryfikacja zastępcza (subagent)", data: "2026-11-02", sha: "8b8e89615aa8" });
});

test("B31: raport ma zmiany po id, decyzje do weta, wynik D-043 i zadania dla toru A; bez nazw firm i wydawców", () => {
  for (const s of [...B31, "B31-D1", "D-043", "toru A", DEC]) assert.ok(raport.includes(s), s);
  for (const n of ["Jif", "Smucker", "Ball ", "Kerr", "Bernardin", "Newell", "Jarden", "Fresh Preserving", "Penguin", "Random House", "Wiley", "Springer", "Elsevier"]) assert.ok(!raport.includes(n), n);
});
