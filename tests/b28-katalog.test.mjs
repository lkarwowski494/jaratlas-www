// B28 (D-043): werdykty B26 (mięso i ryby lodówka/chłodnia, jaja, napoje fermentowane, 26 wariantów) w katalogu, MIE-150–164 i FER-120–127 w rejestrze; katalog 1.0.17.
// Decyzja: 2026-11-02-jaratlas-b28-katalog (decyzja Claude, do weta). Wejście: B26 JSON (po przeglądzie D-027 d), decyzje wariant-bez-zrodla,
// polityka-zrodel-ryzyko, przeglad-agent-zamiast-eksperta (D-027 d) i propozycja b26-research. Wzór: tests/b27-katalog.test.mjs.
import { test } from "node:test";
import { B32, B32_RW, B32_CLAIMS } from "./dane/b32-warianty.mjs"; // B32: warianty zmienione przez B32 (tests/b32-katalog.test.mjs)
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const b26 = JSON.parse(readFileSync("docs/tresci/B26-research-2026-11-02.json", "utf8"));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const W = new Map(b26.warianty.map((w) => [w.id, w]));
const DEC = "2026-11-02-jaratlas-b28-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));
const nota = (id) => V.get(id).notes?.find((n) => n.startsWith("[B28]") && n.includes(DEC));
// B29 (2026-11-02-jaratlas-b29-katalog): warianty z notatką [B29] (requiredWarnings kart-ostrzeżeń) sprawdza tests/b29-katalog.test.mjs.
const B29 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B29]"))).map((v) => v.id));
const B31 = new Set(["walnut-nuts-v07", "wild-mushrooms-v03", "fig-pomegranate-v09"]); // B31: werdykty B30 (3 warianty), pilnuje tests/b31-katalog.test.mjs

const Z26 = [...Array.from({ length: 15 }, (_, i) => `MIE-${150 + i}`), ...Array.from({ length: 8 }, (_, i) => `FER-${120 + i}`)];
// FER-128: brzmienie z przeglądu D-027 d B28 (P2-4) dla karty zakwasu imbirowego, źródło jak FER-127.
export const NOWE = [...Z26, "FER-128"];
// Po D-027 d B28: brzmienie poprawione, B26 w brzmienieB26 (MIE-150 venison, MIE-152 bolonia, MIE-155 bez „je się na surowo” na początku, MIE-158 peklowanie, MIE-162 covered, MIE-164, FER-127).
const POPRAWIONE = ["MIE-150", "MIE-152", "MIE-155", "MIE-158", "MIE-162", "MIE-164", "FER-127"];
// requiredWarnings (B28-D2, po D-027 d B28): tylko twierdzenia ostrzegawcze, bez terminów przechowywania (wyjątki niżej).
// Wędliny i kiełbasy peklowane gotowane: MIE-021 (160°F) + MIE-011 (azotyn); podsuszane + MIE-023; gotowane bez sterylizacji + OLE-047;
// boczek: MIE-156 (boczek 160°F), MIE-011, MIE-164 (przed jedzeniem przyrządzić); surowe dojrzewające: MIE-154, MIE-155, MIE-011;
// ryba: MIE-079, OLE-047; jaja w solance: MIE-087, MIE-084; zakwas imbirowy: FER-128, NAP-024; kombucha F2: NAP-005, NAP-014, NAP-010; jun: FER-123, FER-125, NAP-014, SLO-036.
const PEKL = ["MIE-021", "MIE-011"], PODS = [...PEKL, "MIE-023"], GOT = [...PEKL, "OLE-047"], BOCZEK = ["MIE-156", "MIE-011", "MIE-164"];
export const RW = { "fermented-beverages-v02": ["NAP-005", "NAP-014", "NAP-010"], "fermented-beverages-v03": ["FER-123", "FER-125", "NAP-014", "SLO-036"] };
export const NP = {
  "pork-loin-ham-v01": PEKL, "pork-belly-jowl-v01": BOCZEK, "pork-belly-jowl-v02": BOCZEK, "pork-belly-jowl-v09": ["MIE-021", "OLE-047"],
  "smoked-cooked-sausages-v02": PODS, "smoked-cooked-sausages-v03": PEKL, "smoked-cooked-sausages-v04": PODS, "smoked-cooked-sausages-v05": PODS,
  "smoked-cooked-sausages-v07": PEKL, "smoked-cooked-sausages-v08": PEKL, "smoked-cooked-sausages-v15": GOT, "smoked-cooked-sausages-v16": GOT,
  "pork-loin-ham-v11": ["MIE-154", "MIE-155", "MIE-011"], "dry-cured-sausages-v12": ["MIE-021", "MIE-023", "MIE-011"], "freshwater-fish-v08": ["MIE-079", "OLE-047"],
  "eggs-v05": ["MIE-087", "MIE-084"], "ginger-turmeric-v03": ["FER-128", "NAP-024"],
};
// Po zmianie (B26): tylko notatka [B28], status do-researchu (jak B21, B25); karta po decyzji toru A / 03.
const PO_ZMIANIE = ["smoked-cooked-sausages-v06", "eggs-v01", "eggs-v02"];
// Wycofane w katalogu (retired, katalog-v1-e1 albo duplikat): B26 tego pola nie uwzględnił; bez zmiany statusu, notatka (analogia B27).
const WYCOFANE = ["pork-loin-ham-v06", "smoked-cooked-sausages-v09", "eggs-v04", "eggs-v08"];
// Twierdzenia z terminem przechowywania (dni, tygodnie): nigdy w requiredWarnings kart-ostrzeżeń porcji (nie sugerują bezpiecznego czasu).
// Kontrola po tekście (D-043 B28 P2-2), nie ręczna lista; wyjątki nazwane: NAP-005 (NCHFP, szczebel 1: bez F2, lodówka do 2 dni = krótszy i ostrożny),
// MIE-084 (granica zagrożenia: najwyżej 2 godziny poza lodówką, nie czas przechowywania).
const TERMIN_RE = /\d+\s*(–\s*\d+\s*)?(dni|dnia|dzień|tygodni|tydzień|godzin|godziny|h\b|miesi|min\b)/;
const TERMIN_WYJATKI = ["NAP-005", "MIE-084"];
const ZMIENIAJA = [...Object.keys(RW), ...Object.keys(NP)];
// Skrót pól spoza listy sprzed B28 (katalog 1.0.16, d85a8aa): RW/NP bez safetyStatus, cardType, claims, requiredWarnings, notes; reszta bez notes.
const SNAP = {"pork-loin-ham-v01":"c1d3f92d0956","pork-loin-ham-v06":"5e4da6179ee4","pork-loin-ham-v11":"48635fd76dee","pork-belly-jowl-v01":"9d914781c8bb","pork-belly-jowl-v02":"2ad5a5d2a9e8","pork-belly-jowl-v09":"61e7a84c8267","smoked-cooked-sausages-v02":"c01e953bf684","smoked-cooked-sausages-v03":"a07c12b576e3","smoked-cooked-sausages-v04":"7d583b84f5e9","smoked-cooked-sausages-v05":"9d9bf722efd0","smoked-cooked-sausages-v06":"bf852aceaf6f","smoked-cooked-sausages-v07":"5696ee31ad56","smoked-cooked-sausages-v08":"56578fb339da","smoked-cooked-sausages-v09":"3108b2765c42","smoked-cooked-sausages-v15":"f96f3977ee8a","smoked-cooked-sausages-v16":"e73cb375abc0","dry-cured-sausages-v12":"eff42258641a","freshwater-fish-v08":"709f8ae9ee31","eggs-v01":"dee2e307506e","eggs-v02":"09724a0e0216","eggs-v04":"fad0f410a84f","eggs-v05":"7faf132c6fb4","eggs-v08":"ec6a1b452f5b","fermented-beverages-v02":"7902736fe4f2","fermented-beverages-v03":"90c49fbf4331","ginger-turmeric-v03":"9fcd0fe78bf7"};
// (h) koordynator: requiredWarnings dla 25 kart-ostrzeżeń z pustym requiredWarnings (propozycje p36 dla kart en, sprawdzone w B28);
// Po D-043 B28 (przebieg 2): z propozycji odrzucone parametry procesu i warunki zgody (SZY-044 przy v14, MIE-066 przy v10, MIE-024 w T3; B28-D6),
// dopisane MIE-011 (v08, v09), MIE-079 (v15), MIE-049 (v02); sea-fish-v08 wycofany.
const T3 = ["MIE-023", "MIE-025"];
export const H = {"dry-cured-sausages-v02":T3,"dry-cured-sausages-v03":T3,"dry-cured-sausages-v04":T3,"dry-cured-sausages-v05":T3,"dry-cured-sausages-v06":T3,"dry-cured-sausages-v07":T3,"dry-cured-sausages-v11":T3,"dry-cured-sausages-v13":T3,"dry-cured-sausages-v01":["MIE-022","MIE-076"],"dry-cured-sausages-v08":["MIE-022","MIE-076","MIE-011"],"dry-cured-sausages-v09":["MIE-022","MIE-025","MIE-011"],"dry-cured-sausages-v10":["MIE-022","MIE-023","MIE-025"],"sea-fish-v02":["MIE-050","MIE-053","MIE-067","MIE-049"],"sea-fish-v06":["MIE-049","MIE-053"],"sea-fish-v08":["MIE-059","MIE-076","MIE-077"],"sea-fish-v15":["MIE-059","MIE-076","MIE-077","MIE-079"],"sea-fish-v10":["MIE-061","MIE-067"],"sea-fish-v14":["SZY-006","SZY-013"],"garlic-v01":["FER-068"],"garlic-v02":["FER-068"],"ginger-turmeric-v08":["FER-068"],"garlic-v03":["FER-070","SLO-036","SLO-037"],"garlic-v11":["OLE-033"],"pumpkin-v08":["SLO-045","SLO-046"],"pumpkin-v09":["SLO-044","SLO-045","SLO-046"]};
// Skrót pól poza requiredWarnings i notes sprzed (h) (d85a8aa).
const SNAP_H = {"dry-cured-sausages-v02":"e7c81fec0dd6","dry-cured-sausages-v03":"e2023a8e750a","dry-cured-sausages-v04":"855e7d155199","dry-cured-sausages-v05":"8bf58063bc7a","dry-cured-sausages-v06":"80614ba192a9","dry-cured-sausages-v07":"c0b0b8618f68","dry-cured-sausages-v11":"d9775be9d510","dry-cured-sausages-v13":"e58342f1749a","dry-cured-sausages-v01":"d8f0f310f679","dry-cured-sausages-v08":"787a0839615f","dry-cured-sausages-v09":"745eb9470c5e","dry-cured-sausages-v10":"4ffbb1000cfe","sea-fish-v02":"63d0f19a8beb","sea-fish-v06":"fd66518c0ecf","sea-fish-v08":"115f1aca5190","sea-fish-v15":"15eae98b9bec","sea-fish-v10":"8eacabe36f7f","sea-fish-v14":"95ca6779c3eb","garlic-v01":"55930abadbe5","garlic-v02":"b02d9033ab9b","ginger-turmeric-v08":"275852f8ba3d","garlic-v03":"fbe5b0bfec84","garlic-v11":"2e43d2ad3f35","pumpkin-v08":"d166970810dc","pumpkin-v09":"89dc5c849ad2"};
// Claims sprzed B28 (d85a8aa): nic nie znika, dochodzą twierdzenia B26 i ostrzeżenia.
const PRZED = JSON.parse(readFileSync(new URL("./dane/b28-claims-przed.json", import.meta.url), "utf8"));

test("B28: katalog 1.0.17 przechodzi walidację bez błędów", () => {
  assert.ok(Number(cat.version.split(".")[2]) >= 17 && cat.version.startsWith("1.0."), cat.version); // B29: 1.0.18
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B28: każdy z 26 wariantów B26 rozliczony dokładnie raz, werdykty jak w JSON", () => {
  const wsz = [...ZMIENIAJA, ...PO_ZMIANIE, ...WYCOFANE];
  assert.equal(new Set(wsz).size, wsz.length, "bez powtórzeń");
  assert.deepEqual([...wsz].sort(), [...W.keys()].sort());
  for (const id of Object.keys(RW)) assert.equal(W.get(id).werdykt_B26, "ryzyko-wysokie", id);
  for (const id of Object.keys(NP)) { assert.equal(W.get(id).werdykt_B26, "nie-publikowac-kandydat", id); assert.ok(W.get(id).przebieg >= 2, `${id}: przebieg ≥ 2`); }
  for (const id of PO_ZMIANIE) assert.equal(W.get(id).werdykt_B26, "ok-zrodlo-po-zmianie", id);
  assert.deepEqual(WYCOFANE.filter((id) => V.get(id).retired).sort(), [...WYCOFANE].sort(), "wycofane w katalogu");
  assert.deepEqual(ZMIENIAJA.filter((id) => V.get(id).retired), [], "zmiana statusu tylko dla niewycofanych");
  assert.deepEqual([Object.keys(RW).length, Object.keys(NP).length, PO_ZMIANIE.length, WYCOFANE.length], [2, 17, 3, 4]);
});

test("B28: MIE-150–164 i FER-120–127 w rejestrze 1:1 z B26 JSON, potwierdzone, przegląd D-027 d, wersja en, bez ścieżek spoza repo", () => {
  const Z = new Map(b26.twierdzenia.map((t) => [t.id, t]));
  assert.deepEqual([...Z.keys()].sort(), [...Z26].sort());
  for (const id of Z26) {
    const t = R.get(id), o = Z.get(id);
    assert.ok(t && o, id);
    assert.equal(t.status, "potwierdzone", id);
    assert.equal(POPRAWIONE.includes(id) ? t.brzmienieB26 : t.twierdzenie, o.twierdzenie, `${id}: brzmienie`);
    if (POPRAWIONE.includes(id)) assert.notEqual(t.twierdzenie, o.twierdzenie, `${id}: poprawione`); else assert.equal(t.brzmienieB26, undefined, id);
    assert.equal(t.krytyczne, o.krytyczne, `${id}: krytyczne`);
    assert.equal(t.uproszczenie, o.uproszczenie, `${id}: uproszczenie`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", `${id}: przegląd D-027 d`);
    else assert.equal(t.przeglad, null, `${id}: bez przeglądu (niekrytyczne)`);
    assert.equal(t.weryfikacjaZastepcza, "2026-11-02", id);
    assert.equal(t.wazne_do, "2027-11-02", id);
    assert.equal(t.klaster, id.slice(0, 3), id);
    assert.ok(t.pochodzenie?.includes("B26-research-2026-11-02"), `${id}: pochodzenie`);
    assert.ok(t.twierdzenie_en?.length > 20, `${id}: twierdzenie_en`);
    for (const k of ["wielkosc", "wartosc", "jednostka"]) assert.equal(t[k], o[k], `${id}: ${k}`);
    assert.equal(t.zrodla.length, o.zrodla.length, `${id}: liczba źródeł`);
    t.zrodla.forEach((s, i) => {
      for (const k of ["adres", "szczebel", "odczyt", "cytat", "miejsce", "sha12"]) assert.equal(s[k], o.zrodla[i][k], `${id}: ${k}`);
      assert.equal(s.kopia, undefined, `${id}: bez kopii spoza repo`);
      assert.equal(s.plik, undefined, `${id}: bez ścieżki scratchpadu`);
    });
  }
  assert.equal(new Set(rej.map((t) => t.id)).size, rej.length, "ID w rejestrze unikalne");
  assert.ok(!JSON.stringify(rej).includes("/tmp/claude-0/"), "rejestr bez ścieżek scratchpadu");
  // D-043 B28 P2-1 (zawężone po rebase na 8fc8fa6, koordynator): treść starych twierdzeń, na których stoją ostrzeżenia porcji i (h),
  // bez cichych zmian; skrót [twierdzenie, zrodla] na 8fc8fa6. Pola, których B28 nie dotyka (np. przeglad.sha), mogą zmieniać inne partie.
  const STARE_H = {"FER-068":"623b1337d1f7","FER-070":"d8833c5db120","MIE-011":"979e942b2bb8","MIE-021":"6339e45580bf","MIE-022":"0442dfa01005","MIE-023":"f9f0acba0ffd","MIE-025":"5e9cf1f23c90","MIE-049":"08ad604058c4","MIE-050":"082d22184fc6","MIE-053":"7ce2f5adb953","MIE-059":"0d025694c50b","MIE-061":"bfef295e2def","MIE-067":"ceda2547f986","MIE-076":"d6e596eb4cab","MIE-077":"3ef64f8cfbb2","MIE-079":"da1110b80c12","MIE-084":"1273e19df5b2","MIE-087":"6b4e3a623775","NAP-005":"358b4fe54136","NAP-010":"95d0c5ff6f2f","NAP-014":"a064362ec61e","NAP-024":"3300f0edd7f1","OLE-033":"2cb230321a1d","OLE-047":"18c4059e315b","SLO-036":"f37ecf92bd15","SLO-037":"f87f45636e90","SLO-044":"8b23a8eeba12","SLO-045":"314725c65e0c","SLO-046":"0a884410ca8a","SZY-006":"90be232407a3","SZY-013":"2591b4fcf8e4"};
  const uzyte = new Set(cat.variants.filter((v) => W.has(v.id) || v.id in H).flatMap((v) => v.requiredWarnings ?? []).filter((c) => !NOWE.includes(c)));
  assert.deepEqual([...uzyte].sort(), Object.keys(STARE_H).sort(), "każde stare ostrzeżenie porcji ma skrót");
  for (const [id, x] of Object.entries(STARE_H)) assert.equal(h([R.get(id).twierdzenie, R.get(id).zrodla]), x, `${id}: stary wpis bez zmian`);
});

test("B28: FER-128 z tego samego źródła co FER-127, krytyczne, z przeglądem; liczby w pl i en zgodne (D-043 B28 P3-4)", () => {
  const t = R.get("FER-128"), f = R.get("FER-127");
  assert.equal(t.status, "potwierdzone"); assert.equal(t.krytyczne, true); assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)");
  assert.ok(t.zrodla.every((z) => z.adres === f.zrodla[0].adres && z.szczebel === 3 && z.sha12 === "11a2faef1fe0"));
  assert.ok(t.zrodla[0].cytat.startsWith("Never make this recipe in a glass container.") && !TERMIN_RE.test(t.twierdzenie));
  // p37 (decyzja Claude, do weta): przypięta treść wpisu bez pól przeglądu; przeglad.sha zmienia pierwsza karta z FER-128 (ginger-turmeric-v03),
  // tak jak STARE_H wyżej dopuszcza zmianę pól, których B28 nie dotyka. Wartość policzona na 67db60d (przed p37) = treść B28 bez zmian.
  const { przeglad: _p, weryfikacjaZastepcza: _w, ...tresc } = t;
  assert.equal(h(tresc), "f93a0f8aa96c", "FER-128 przypięte (D-043 B28 P2-4)");
  const num = (x) => (x.match(/\d+(?:[.,]\d+)?/g) ?? []).map((n) => n.replace(",", ".")).sort().join(" ");
  for (const id of NOWE) assert.equal(num(R.get(id).twierdzenie_en), num(R.get(id).twierdzenie), `${id}: liczby pl/en`);
});

test("B28: ryzyko-wysokie i nie-publikowac jako karta-ostrzeżenie; ostrzeżenia z reguły B28-D2, bez terminów; nic nie znika z claims", () => {
  for (const [id, ostrz] of Object.entries({ ...RW, ...NP })) {
    const v = V.get(id), np = id in NP;
    assert.equal(v.safetyStatus, np ? "nie-publikowac" : "ryzyko-wysokie", id);
    assert.equal(v.cardType, "warning", id);
    // B32 (E3 p37 V1 P2): MIE-021 → MIE-161 (pork-loin-ham-v01) i MIE-156 (pork-belly-jowl-v09); przypięte w tests/dane/b32-warianty.mjs (B32-D5, do weta).
    assert.deepEqual(v.requiredWarnings, B32_RW[id] ?? ostrz, `${id}: requiredWarnings`);
    const oczek = [...new Set([...PRZED[id], ...W.get(id).twierdzenia, ...ostrz, ...(B32_CLAIMS[id] ?? [])])];
    assert.deepEqual(v.claims, oczek, `${id}: claims = przed ∪ B26 ∪ ostrzeżenia`);
    for (const c of [...v.claims, ...v.requiredWarnings]) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    for (const c of v.requiredWarnings) assert.ok(TERMIN_WYJATKI.includes(c) || !TERMIN_RE.test(R.get(c).twierdzenie), `${id}: ${c} ma termin przechowywania`);
    if (np) assert.ok(nota(id)?.includes("2026-11-02-jaratlas-wariant-bez-zrodla") && nota(id).includes("brak sprawdzonego źródła"), `${id}: notatka [B28] z decyzją właściciela`);
    else assert.ok(nota(id)?.includes("ryzyko-wysokie") && nota(id).includes("B26-D4"), `${id}: notatka [B28]`);
    assert.ok(nota(id).includes(W.get(id).podstawa), `${id}: podstawa B26 w notatce`);
  }
  assert.ok(nota("pork-belly-jowl-v01").includes("B26-Q6"), "boczek v01: Q6 = zostaje nie-publikowac");
});

test("B28: 3 „po zmianie” zostają do-researchu z notatką (zmiana i twierdzenia z B26), bez zmian claims", () => {
  for (const id of PO_ZMIANIE) {
    const v = V.get(id), w = W.get(id);
    assert.equal(v.safetyStatus, "do-researchu", id);
    assert.equal(v.cardType, undefined, id);
    assert.deepEqual(v.claims, PRZED[id], `${id}: claims bez zmian`);
    assert.ok(nota(id)?.includes("ok-zrodlo-po-zmianie") && nota(id).includes(w.zmiana) && w.twierdzenia.every((c) => nota(id).includes(c)), `${id}: notatka [B28]`);
    for (const c of w.twierdzenia) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c} w rejestrze`);
  }
  assert.ok(nota("smoked-cooked-sausages-v06").includes("B26-D1"));
  assert.ok(nota("eggs-v02").includes("B26-D3"));
});

test("B28 (B26-Q3): wycofane bez zmiany statusu, z notatką; dania i duplikat już wycofane w katalogu", () => {
  for (const id of WYCOFANE) { const v = V.get(id); assert.equal(v.safetyStatus, "do-researchu", id); assert.equal(v.cardType, undefined, id); assert.ok(nota(id)?.includes("wycofany") && nota(id).includes(W.get(id).werdykt_B26.replace("-kandydat", "")), id); }
  for (const id of ["pork-loin-ham-v06", "smoked-cooked-sausages-v09", "eggs-v08"]) assert.ok(nota(id).includes("B26-Q3"), `${id}: Q3`);
  assert.equal(V.get("smoked-cooked-sausages-v09").retired.replacedBy, "smoked-cooked-sausages-v08");
});

test("B28: poza polami z listy warianty bez cichych zmian; publication ukryta w całym katalogu", () => {
  assert.deepEqual(Object.keys(SNAP).sort(), [...W.keys()].sort());
  for (const id of W.keys()) assert.equal(h(bez(V.get(id), ZMIENIAJA.includes(id) ? ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"] : ["notes"])), SNAP[id], `${id}: pola spoza listy bez zmian`);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: 0 zmian, wszystko ukryta");
  assert.equal(h(cat.variants.filter((v) => !W.has(v.id) && !(v.id in H) && !B29.has(v.id) && !B31.has(v.id) && !B32.has(v.id))), "ac19038017da", "warianty spoza B28, (h), B29 i B31 bez zmian (B31: przeliczony na f36b7b0, stary 88f71f5574bc; skrót na 1.0.16, d85a8aa; B29: przeliczony, stary 90b9723fbdd2; B32: przeliczony na 7b422b9 bez 41 wariantów B32, stary bf6ac1ef220b)");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6", "categories, products, processFamilies bez zmian");
});

test("B28 (ADR 0008): treść dodana w B28 (twierdzenia, notatki) bez numerów ISBN", () => {
  // Nazw i tytułów nie wpisujemy do repo publicznego, także do testów (ADR 0008, koordynator B28): sprawdza je kontrola lokalna tools/zrodla-prywatne.mjs z listą prywatną.
  const s = JSON.stringify(NOWE.map((id) => R.get(id))) + JSON.stringify(cat.variants.flatMap((v) => (v.notes ?? []).filter((n) => n.startsWith("[B28]"))));
  assert.doesNotMatch(s, /ISBN/);
});

test("B28 (h): 25 kart-ostrzeżeń dostaje requiredWarnings z claims; poza requiredWarnings i notes bez zmian; status bez zmian", () => {
  assert.equal(Object.keys(H).length, 25);
  for (const [id, w] of Object.entries(H)) {
    const v = V.get(id);
    assert.equal(v.cardType, "warning", id);
    assert.deepEqual(v.requiredWarnings, w, `${id}: requiredWarnings`);
    for (const c of w) { assert.ok(v.claims.includes(c), `${id}: ${c} w claims`); assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`); }
    // MIE-050: „28 dni” to przeżywalność larw w solance, nie termin przechowywania (wyjątek nazwany, D-043 B28 P3-2).
    for (const c of w) assert.ok(c === "MIE-050" || !TERMIN_RE.test(R.get(c).twierdzenie), `${id}: ${c} ma termin albo czas procesu`);
    assert.equal(h(bez(v, ["requiredWarnings", "notes"])), SNAP_H[id], `${id}: reszta bez zmian`);
    assert.ok(v.notes.some((n) => n.startsWith("[B28] (h)") && n.includes(DEC) && w.every((c) => n.includes(c))), `${id}: notatka [B28] (h)`);
  }
  assert.ok(V.get("sea-fish-v08").retired && ["sea-fish-v14", "sea-fish-v10", "dry-cured-sausages-v02"].every((id) => V.get(id).notes.some((n) => n.includes("B28-D6"))));
});
