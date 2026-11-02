// B27 (D-043): werdykty B24 (olej i tłuszcze, 30 wariantów) w katalogu, OLE-070–089 w rejestrze, OLE-025 wg MMWR 1995 (B24-Q4); katalog 1.0.16.
// Decyzja: 2026-11-02-jaratlas-b27-katalog (decyzja Claude, do weta). Wejście: B24 JSON, decyzje p1-q1-olej (właściciel), wariant-bez-zrodla,
// przeglad-agent-zamiast-eksperta (D-027 d), propozycja b24-research. Wzór: tests/b25-katalog.test.mjs.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const b24 = JSON.parse(readFileSync("docs/tresci/B24-research-2026-11-02.json", "utf8"));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = "2026-11-02-jaratlas-b27-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));
// B28 (2026-11-02-jaratlas-b28-katalog): warianty z notatką [B28] sprawdza tests/b28-katalog.test.mjs.
const B28 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B28]"))).map((v) => v.id));
const nota = (id) => V.get(id).notes.find((n) => n.startsWith("[B27]") && n.includes(DEC));

// Po D-027 d (P3): OLE-073 „zwykle”, OLE-088 dalszy ciąg zdania MMWR; brzmienie B24 w brzmienieB24, nowy cytat na końcu zrodla.
const POPRAWIONE = ["OLE-073", "OLE-088"];
export const NOWE = ["OLE-070","OLE-071","OLE-072","OLE-073","OLE-074","OLE-075","OLE-076","OLE-077","OLE-078","OLE-079","OLE-080","OLE-081","OLE-082","OLE-083","OLE-084","OLE-085","OLE-086","OLE-087","OLE-088","OLE-089"];
// Reguła klasy B24-R1 na karcie: lodówka ≤ 40°F/4 °C (OLE-057), następny dzień (OLE-077), nigdy temp. pokojowa (OLE-072), nie na zapas (OLE-076).
const KLASA = ["OLE-057", "OLE-077", "OLE-072", "OLE-076"];
// Twierdzenia z innym terminem niż reguła klasy (4 dni, 2 tygodnie, bez limitu, 1,5 roku): nigdy w requiredWarnings partii.
// Wyjątek nazwany (D-027 d P1): pork-belly-jowl-v10 (smalec z jabłkiem, nie warzywo w oleju) ma OLE-083 (lodówka, najwyżej 4 dni).
const WYJATEK_TERMIN = { "pork-belly-jowl-v10": ["OLE-083"] };
const INNY_TERMIN = ["OLE-002", "OLE-018", "OLE-029", "OLE-070", "OLE-071", "OLE-075", "OLE-078", "OLE-079", "OLE-080", "OLE-081", "OLE-083", "OLE-086"];
const OK = {"tomato-v15":{"claims":["OLE-028","OLE-029","OLE-070","OLE-077","OLE-078","OLE-002","OLE-076","OLE-072","OLE-073","OLE-001","OLE-027","OLE-057","OLE-058"],"ostrz":["OLE-057","OLE-077","OLE-072","OLE-076"],"zrodla":["OLE-070","OLE-077"]},"tomato-v17":{"claims":["OLE-037","OLE-022","OLE-020","SUS-045","SUS-046","OLE-070","OLE-077","OLE-078","OLE-002","OLE-076","OLE-072","OLE-073","OLE-001","OLE-027","OLE-029","OLE-057","OLE-058"],"ostrz":["OLE-057","OLE-077","OLE-072","OLE-076"],"zrodla":["OLE-070","OLE-077"]},"green-cherry-tomato-v12":{"claims":["OLE-028","OLE-029","OLE-070","OLE-077","OLE-078","OLE-002","OLE-076","OLE-072","OLE-073","OLE-001","OLE-027","OLE-057","OLE-058"],"ostrz":["OLE-057","OLE-077","OLE-072","OLE-076"],"zrodla":["OLE-070","OLE-077"]},"chili-pepper-v10":{"claims":["OLE-020","OLE-021","OLE-018","OLE-070","OLE-077","OLE-078","OLE-002","OLE-076","OLE-072","OLE-073","OLE-001","OLE-027","OLE-029","OLE-057","OLE-058"],"ostrz":["OLE-057","OLE-077","OLE-072","OLE-076"],"zrodla":["OLE-070","OLE-077"]},"shallot-pearl-onion-v13":{"claims":["OLE-020","OLE-021","OLE-018","OLE-070","OLE-077","OLE-078","OLE-002","OLE-076","OLE-072","OLE-073","OLE-001","OLE-027","OLE-029","OLE-057","OLE-058"],"ostrz":["OLE-057","OLE-077","OLE-072","OLE-076"],"zrodla":["OLE-070","OLE-077"]},"capers-v06":{"claims":["OLE-028","OLE-070","OLE-077","OLE-078","OLE-002","OLE-076","OLE-072","OLE-073","OLE-001","OLE-027","OLE-029","OLE-057","OLE-058"],"ostrz":["OLE-057","OLE-077","OLE-072","OLE-076"],"zrodla":["OLE-070","OLE-077"]}};
const RW = {"eggplant-v02":{"claims":["OLE-076","OLE-088","OLE-028","OLE-024","OLE-025","OLE-027","OLE-072"],"ostrz":["OLE-088","OLE-028","OLE-072","OLE-027"]},"asian-american-mix-v07":{"claims":["ACI-006","OLE-028","OLE-074","OLE-076","OLE-077","OLE-038","OLE-027"],"ostrz":["OLE-074","OLE-028","OLE-027"]},"pork-belly-jowl-v10":{"claims":["SZY-008","SZY-050","OLE-082","OLE-083","OLE-084","OLE-057"],"ostrz":["OLE-082","OLE-057","OLE-083","OLE-084"]}};
const NP = {"ginger-turmeric-v12":{"claims":["OLE-028","OLE-086","OLE-072","OLE-027"],"ostrz":["OLE-028","OLE-072","OLE-027"]},"cornelian-cherry-v03":{"claims":["OLE-028","OLE-027"],"ostrz":["OLE-028","OLE-027"]},"chokeberry-seabuckthorn-v04":{"claims":["OLE-020","OLE-021","OLE-018","OLE-072","OLE-028","OLE-027"],"ostrz":["OLE-028","OLE-027"]},"lemon-v03":{"claims":["OLE-033","OLE-028","OLE-027"],"ostrz":["OLE-028","OLE-027"]},"mango-papaya-v01":{"claims":["OLE-033","OLE-028","OLE-027"],"ostrz":["OLE-028","OLE-027"]},"pork-belly-jowl-v11":{"claims":["OLE-084","OLE-085"],"ostrz":["OLE-085","OLE-084"]},"pork-belly-jowl-v12":{"claims":["OLE-083","OLE-084","OLE-082","OLE-085"],"ostrz":["OLE-085","OLE-082","OLE-084"]},"pork-belly-jowl-v14":{"claims":["SZY-050","OLE-084","OLE-085","OLE-082"],"ostrz":["OLE-085","OLE-082","OLE-084"]},"beef-veal-v13":{"claims":["SZY-050","OLE-084","OLE-085"],"ostrz":["OLE-085","OLE-084"]},"poultry-v11":{"claims":["SZY-050","OLE-084","OLE-085"],"ostrz":["OLE-085","OLE-084"]},"offal-pates-v06":{"claims":["OLE-083","OLE-084","OLE-082","OLE-085"],"ostrz":["OLE-085","OLE-082","OLE-084"]}};
// B24-D2 (warunkowo): procedury urzędów nie obejmują oliwek, cytrusów ani fig; ok-zrodlo dopiero po decyzji właściciela.
const NOTA = ["olives-v05","olives-v11","olives-v12","lemon-v14","fig-pomegranate-v10"];
// Wycofane (retired, katalog-v1-e1) i walnut-nuts-v07 (nie-publikowac wymaga claims; brak reguły ogólnej w rejestrze): bez zmiany statusu, notatka.
const ZOSTAJE = ["eggplant-v10","beans-soy-v11","onion-v12","capers-v09","walnut-nuts-v07"];
const WYCOFANE = ["eggplant-v10", "beans-soy-v11", "onion-v12", "capers-v09"];
export const POLA = {"tomato-v15":["safetyStatus","claims","sources","requiredWarnings","notes"],"tomato-v17":["safetyStatus","claims","sources","requiredWarnings","notes"],"green-cherry-tomato-v12":["safetyStatus","claims","sources","requiredWarnings","notes"],"chili-pepper-v10":["safetyStatus","claims","sources","requiredWarnings","notes"],"shallot-pearl-onion-v13":["safetyStatus","claims","sources","requiredWarnings","notes"],"capers-v06":["safetyStatus","claims","sources","requiredWarnings","notes"],"eggplant-v02":["safetyStatus","cardType","claims","requiredWarnings","notes"],"asian-american-mix-v07":["safetyStatus","cardType","claims","requiredWarnings","notes"],"pork-belly-jowl-v10":["safetyStatus","cardType","claims","requiredWarnings","notes"],"ginger-turmeric-v12":["safetyStatus","cardType","claims","requiredWarnings","notes"],"cornelian-cherry-v03":["safetyStatus","cardType","claims","requiredWarnings","notes"],"chokeberry-seabuckthorn-v04":["safetyStatus","cardType","claims","requiredWarnings","notes"],"lemon-v03":["safetyStatus","cardType","claims","requiredWarnings","notes"],"mango-papaya-v01":["safetyStatus","cardType","claims","requiredWarnings","notes"],"pork-belly-jowl-v11":["safetyStatus","cardType","claims","requiredWarnings","notes"],"pork-belly-jowl-v12":["safetyStatus","cardType","claims","requiredWarnings","notes"],"pork-belly-jowl-v14":["safetyStatus","cardType","claims","requiredWarnings","notes"],"beef-veal-v13":["safetyStatus","cardType","claims","requiredWarnings","notes"],"poultry-v11":["safetyStatus","cardType","claims","requiredWarnings","notes"],"offal-pates-v06":["safetyStatus","cardType","claims","requiredWarnings","notes"],"olives-v05":["notes"],"olives-v11":["notes"],"olives-v12":["notes"],"lemon-v14":["notes"],"fig-pomegranate-v10":["notes"],"eggplant-v10":["notes"],"beans-soy-v11":["notes"],"onion-v12":["notes"],"capers-v09":["notes"],"walnut-nuts-v07":["notes"],"watermelon-melon-v07":["notes"],"quark-acid-cheese-v07":["notes"],"butter-whey-cheese-v07":["notes"],"pasta-filata-cheese-v02":["notes"],"smoked-cooked-sausages-v01":["notes"],"smoked-cooked-sausages-v10":["notes"],"smoked-cooked-sausages-v14":["notes"],"sea-fish-v04":["notes"],"freshwater-fish-v01":["notes"],"fresh-brined-cheese-v05":["notes"],"white-cabbage-v03":["notes"],"eggs-v03":["notes"]};
// Dodatki koordynatora (f) SLO-069 i (g) nazwy pl z raportu E3 p35 §5: tylko notatki [B27] dla 03.
const EXTRA = ["watermelon-melon-v07","quark-acid-cheese-v07","butter-whey-cheese-v07","pasta-filata-cheese-v02","smoked-cooked-sausages-v01","smoked-cooked-sausages-v10","smoked-cooked-sausages-v14","sea-fish-v04","freshwater-fish-v01","fresh-brined-cheese-v05","white-cabbage-v03","eggs-v03"];
// Skrót pól spoza listy sprzed B27 (katalog 1.0.15, warianty bez zmian od 7433d6b do 0ecbac7); wszystkie 30 z B24 były do-researchu.
const SNAP = {"tomato-v15":"d71c3305592b","tomato-v17":"e79158402bb9","green-cherry-tomato-v12":"00539f5e091b","chili-pepper-v10":"d520600d3734","shallot-pearl-onion-v13":"793328345e92","capers-v06":"083c9cd79091","eggplant-v02":"b7414b74ce96","asian-american-mix-v07":"75657d063980","pork-belly-jowl-v10":"078d14c46911","ginger-turmeric-v12":"1c4166881ebc","cornelian-cherry-v03":"ce57ef812d18","chokeberry-seabuckthorn-v04":"18a84e42fd66","lemon-v03":"36de2d3b18ef","mango-papaya-v01":"9d5a24198e95","pork-belly-jowl-v11":"8a9350651460","pork-belly-jowl-v12":"f4adeb1547f6","pork-belly-jowl-v14":"01a6944e13f8","beef-veal-v13":"9847d190e0bb","poultry-v11":"47653f88b124","offal-pates-v06":"cb64afe2ff0b","olives-v05":"c3b5b9914b8d","olives-v11":"2250f4b1b725","olives-v12":"da83c88e697a","lemon-v14":"988ab7803bf9","fig-pomegranate-v10":"520231121a66","eggplant-v10":"502a8cb4c3c6","beans-soy-v11":"f9ad5d5e453a","onion-v12":"387516a36346","capers-v09":"21a8dc15452d","walnut-nuts-v07":"05844f97e396","watermelon-melon-v07":"82e655e6e080","quark-acid-cheese-v07":"acc2bd6563c6","butter-whey-cheese-v07":"d594679b7515","pasta-filata-cheese-v02":"ad168175dc40","smoked-cooked-sausages-v01":"483a39ee2867","smoked-cooked-sausages-v10":"7ae139e531e0","smoked-cooked-sausages-v14":"2b82516a715c","sea-fish-v04":"b4f8e222307e","freshwater-fish-v01":"986cd4251452","fresh-brined-cheese-v05":"758437a54bb2","white-cabbage-v03":"8f93d9f19827","eggs-v03":"d6db1ae1d747"};

test("B27: katalog 1.0.16 (lub nowszy) przechodzi walidację bez błędów", () => {
  assert.ok(Number(cat.version.split(".")[2]) >= 16 && cat.version.startsWith("1.0."), cat.version); // B28: 1.0.17
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B27: każdy z 30 wariantów B24 rozliczony dokładnie raz, werdykty jak w raporcie", () => {
  const wsz = [...Object.keys(OK), ...Object.keys(RW), ...Object.keys(NP), ...NOTA, ...ZOSTAJE];
  assert.equal(new Set(wsz).size, wsz.length, "bez powtórzeń");
  assert.deepEqual([...wsz].sort(), b24.warianty.map((w) => w.id).sort());
  const W = new Map(b24.warianty.map((w) => [w.id, w]));
  for (const id of Object.keys(OK)) { assert.equal(W.get(id).werdykt_B24, "ok-zrodlo", id); assert.equal(W.get(id).warunkowo, null, `${id}: bez warunku B24-D2`); }
  for (const id of NOTA) { assert.equal(W.get(id).werdykt_B24, "ok-zrodlo", id); assert.ok(W.get(id).warunkowo?.includes("B24-D2"), id); }
  for (const id of Object.keys(RW)) assert.equal(W.get(id).werdykt_B24, "ryzyko-wysokie", id);
  for (const id of Object.keys(NP)) { assert.equal(W.get(id).werdykt_B24, "nie-publikowac-kandydat", id); assert.ok(W.get(id).przebieg >= 2, `${id}: przebieg ≥ 2`); }
  assert.deepEqual([Object.keys(OK).length, Object.keys(RW).length, Object.keys(NP).length, NOTA.length, ZOSTAJE.length], [6, 3, 11, 5, 5]);
});

test("B27: OLE-070–089 w rejestrze jak w B24 JSON (cytaty 1:1), potwierdzone z przeglądem D-027 d i wersją en", () => {
  const Z = new Map(b24.twierdzenia.map((t) => [t.id, t]));
  assert.equal(NOWE.length, 20);
  for (const id of NOWE) {
    const t = R.get(id), o = Z.get(id);
    assert.ok(t && o, id);
    assert.equal(t.status, "potwierdzone", id);
    assert.equal(POPRAWIONE.includes(id) ? t.brzmienieB24 : t.twierdzenie, o.twierdzenie, `${id}: brzmienie`);
    if (POPRAWIONE.includes(id)) assert.notEqual(t.twierdzenie, o.twierdzenie, `${id}: poprawione`);
    assert.equal(t.krytyczne, o.krytyczne, `${id}: krytyczne`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", `${id}: przegląd D-027 d`);
    assert.equal(t.weryfikacjaZastepcza, "2026-11-02", id);
    assert.equal(t.klaster, "OLE", id);
    assert.ok(t.pochodzenie?.includes("B24-research-2026-11-02"), `${id}: pochodzenie`);
    assert.ok(t.twierdzenie_en?.length > 20, `${id}: twierdzenie_en`);
    assert.equal(t.warianty, undefined, `${id}: bez pola warianty`);
    assert.equal(t.zrodla.length, o.zrodla.length + (POPRAWIONE.includes(id) ? 1 : 0), `${id}: liczba źródeł`);
    t.zrodla.slice(0, o.zrodla.length).forEach((s, i) => { for (const k of ["adres", "szczebel", "odczyt", "cytat", "miejsce"]) assert.equal(s[k], o.zrodla[i][k], `${id}: ${k}`); assert.equal(s.kopia, undefined, `${id}: bez kopii spoza repo`); });
  }
  for (const id of ["OLE-071", "OLE-075", "OLE-079"]) assert.ok(R.get(id).nieDoKart, `${id}: termin jednego urzędu poza kartami`);
  assert.equal(new Set(rej.map((t) => t.id)).size, rej.length, "ID w rejestrze unikalne");
});

test("B27 (B24-Q4): OLE-025 wg źródła pierwotnego MMWR 1995 — bakłażan produkowany komercyjnie, nie domowy", () => {
  const t = R.get("OLE-025");
  assert.equal(t.status, "potwierdzone");
  assert.ok(t.twierdzenie.includes("komercyjnie") && !/domow/.test(t.twierdzenie), t.twierdzenie);
  assert.ok(t.twierdzenie_en.includes("commercially prepared"));
  assert.deepEqual(t.zrodla.map((z) => [z.adres, z.szczebel]), [["https://www.cdc.gov/mmwr/preview/mmwrhtml/00035572.htm", 1]]);
  assert.ok(t.zrodla[0].cytat.includes("commercially prepared roasted eggplant in oil"));
  assert.ok(t.brzmieniePrzed?.includes("domowy"), "poprzednie brzmienie zachowane");
});

test("B27: ok-zrodlo jako karta klasy B24-R1: dwa urzędy szczebla 1 w sources (cytat 1:1), ostrzeżenia klasy, potwierdzone claims", () => {
  for (const [id, o] of Object.entries(OK)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, "ok-zrodlo", id);
    assert.equal(v.cardType, undefined, id);
    assert.equal(v.preservationMethod, "refrigerator", `${id}: tylko lodówka`);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings, KLASA, `${id}: requiredWarnings = reguła klasy`);
    for (const c of [...v.claims, ...v.requiredWarnings]) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.deepEqual(o.zrodla, ["OLE-070", "OLE-077"]);
    assert.equal(v.sources.length, 2, `${id}: sources`);
    o.zrodla.forEach((t, i) => { const z = R.get(t).zrodla[0], s = v.sources[i]; assert.equal(s.szczebel, 1); for (const k of ["adres", "miejsce", "cytat", "odczyt", "szczebel"]) assert.equal(s[k], z[k], `${id}: ${k} jak w ${t}`); });
    assert.notEqual(new URL(v.sources[0].adres).host, new URL(v.sources[1].adres).host, `${id}: dwa różne urzędy`);
    assert.ok(nota(id)?.includes("2026-11-02-jaratlas-p1-q1-olej") && nota(id).includes("następnego dnia"), `${id}: notatka [B27] z decyzją właściciela`);
  }
});

test("B27: ryzyko-wysokie i nie-publikowac jako karta-ostrzeżenie; ostrzeżenia bez terminu sprzecznego z regułą klasy; nic nie znika z claims", () => {
  for (const [id, o] of Object.entries({ ...RW, ...NP })) {
    const v = V.get(id), np = id in NP;
    assert.equal(v.safetyStatus, np ? "nie-publikowac" : "ryzyko-wysokie", id);
    assert.equal(v.cardType, "warning", id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings ?? [], o.ostrz, `${id}: requiredWarnings`);
    for (const c of v.claims) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    if (np) assert.ok(nota(id)?.includes("2026-11-02-jaratlas-wariant-bez-zrodla") && nota(id).includes("brak sprawdzonego źródła"), `${id}: notatka [B27] z decyzją właściciela`);
    else assert.ok(nota(id)?.includes("ryzyko-wysokie"), `${id}: notatka [B27]`);
  }
  for (const id of [...Object.keys(OK), ...Object.keys(RW), ...Object.keys(NP)]) for (const c of V.get(id).requiredWarnings ?? []) assert.ok(!INNY_TERMIN.includes(c) || WYJATEK_TERMIN[id]?.includes(c), `${id}: ${c} ma termin inny niż reguła klasy`);
});

test("B27: 5 warunkowych B24-D2 zostaje do-researchu z notatką", () => {
  for (const id of NOTA) { const v = V.get(id); assert.equal(v.safetyStatus, "do-researchu", id); assert.equal(v.cardType, undefined, id); assert.ok(nota(id)?.includes("B24-D2") && nota(id).includes("2026-11-02-jaratlas-p1-q1-olej"), `${id}: notatka [B27]`); }
});

test("B27: wycofane i walnut-nuts-v07 bez zmiany statusu, z notatką [B27]", () => {
  const W = new Map(b24.warianty.map((w) => [w.id, w]));
  assert.deepEqual(ZOSTAJE.filter((id) => V.get(id).retired).sort(), [...WYCOFANE].sort(), "wycofane w porcji");
  for (const id of ZOSTAJE) { const v = V.get(id); assert.equal(v.safetyStatus, "do-researchu", id); assert.equal(v.cardType, undefined, id); assert.ok(nota(id)?.includes(W.get(id).werdykt_B24.replace("-kandydat", "")), `${id}: werdykt B24 w notatce`); }
  for (const id of WYCOFANE) assert.ok(nota(id).includes("wycofany"), id);
  for (const id of ["eggplant-v10", "beans-soy-v11"]) assert.ok(nota(id).includes("B24-Q3"), `${id}: notatka dla 03`);
  assert.ok(nota("walnut-nuts-v07").includes("2026-11-02-jaratlas-wariant-bez-zrodla"));
});

test("B27: poza polami z listy warianty bez cichych zmian; publication ukryta w całym katalogu", () => {
  assert.deepEqual(Object.keys(SNAP).sort(), Object.keys(POLA).sort());
  for (const [id, keys] of Object.entries(POLA)) assert.equal(h(bez(V.get(id), keys)), SNAP[id], `${id}: pola poza ${keys.join(", ")} bez zmian`);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: 0 zmian, wszystko ukryta");
  assert.equal(h(cat.variants.filter((v) => !(v.id in POLA) && !B28.has(v.id))), "a4414eadfed5", "warianty spoza B27 i B28 bez zmian (skrót na 0ecbac7; B28 z (h): przeliczony, stary 219465312ebb)");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6", "categories, products, processFamilies bez zmian");
});

test("B27 (koordynator f, g): watermelon-melon-v07 i nazwy pl z raportu p35 tylko z notatką [B27]", () => {
  for (const id of EXTRA) assert.ok(nota(id), `${id}: notatka [B27]`);
  assert.deepEqual(V.get("watermelon-melon-v07").requiredWarnings, ["SLO-024", "SLO-025", "SLO-069"]);
  assert.ok(nota("watermelon-melon-v07").includes("SLO-069"));
  for (const id of EXTRA.slice(1)) assert.ok(nota(id).includes("do 03") && nota(id).includes("bez zmiany nazwy"), id);
});
