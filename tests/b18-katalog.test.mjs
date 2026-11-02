// B18 (D-043): twierdzenia B16 do rejestru (z przeglądem D-027 d) i werdykty B16 w katalogu; katalog 1.0.13.
// Decyzja: 2026-11-02-jaratlas-b18-katalog (decyzja Claude, do weta). Wejście: raport B16 (§1, §4, §7) i decyzje właściciela
// polityka-zrodel-ryzyko, b14-wlasciciel (scenariusz B), wariant-bez-zrodla. Osobny plik, żeby nie kolidować z torem A.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const b16 = JSON.parse(readFileSync("docs/tresci/B16-research-k-2026-11-02.json", "utf8"));
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const B = new Map(b16.twierdzenia.map((t) => [t.id, t]));
const DEC = "2026-11-02-jaratlas-b18-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));
const nota = (id) => V.get(id).notes.find((n) => n.startsWith("[B18]") && n.includes(DEC));

// Twierdzenia B16 wpisane do rejestru (ID bez zmian): tylko te, które wspierają werdykty wchodzące teraz do katalogu.
export const NOWE = ["ACI-720","ACI-721","ACI-722","ACI-732","ACI-733","ACI-736","ACI-737","ACI-738","ACI-750","ACI-751","ACI-752","ACI-754","ACI-756","ACI-758","ACI-759","ACI-862","ACI-867","ACI-868","SUS-346","SUS-349","SUS-354"];
// Cytat poprawiony po D-027 d: stare fragmenty muszą być w cytacie z pliku B16, nowe tylko z listy DOPISANE
// (sprawdzone dosłownie w kopiach OSU SP 50-464 i Ask Extension #880834, curl/pdftotext, 2026-11-02).
const CYTAT_POPRAWIONY = new Set(["ACI-751"]);
const DOPISANE = ["2. Make sure the recipe calls for vinegar that is 5% acidity. 3. For fresh or quick pack pickles, make sure the recipe has at least as much vinegar as water unless it is an OSU/USDA tested recipe.", "If you make them and put them in sterilized jars and then refrigerate right away, they should be safe."];
// ACI-860 (umamigirl.com) HTTP 403 przy D-027 d: poza rejestrem, sour-cherry-v12 zostaje do-researchu (wzór B17-D2).
const ZOST = ["sour-cherry-v12"];

// do-researchu/ryzyko-wysokie → ok-zrodlo. claims = dotychczasowe ∪ lista B16 ∪ ostrzeżenia (nic nie znika);
// sources = pierwsze źródło wskazanych twierdzeń (reguła szczebla 1–3 przed przepisem szczebla 4 w regule c / scenariuszu B).
const OK = {
  "chili-pepper-v05": { claims: ["ACI-094", "ACI-016", "ACI-017", "ACI-265", "ACI-720", "ACI-721", "ACI-722", "ACI-267"], zrodla: ["ACI-720", "ACI-721", "ACI-722"], ostrz: ["ACI-094", "ACI-016", "ACI-017", "ACI-722"] },
  "currant-v08": { claims: ["ACI-737", "ACI-750", "ACI-609", "SLO-003", "ACI-608", "ACI-733", "SLO-018", "SLO-001", "SLO-002"], zrodla: ["ACI-609", "ACI-733", "ACI-737"], ostrz: ["ACI-733", "SLO-001"] },
  "blueberry-bilberry-v08": { claims: ["ACI-738", "ACI-750", "ACI-609", "SLO-003", "ACI-477", "ACI-733", "SLO-018", "SLO-001", "SLO-002"], zrodla: ["ACI-609", "ACI-733", "ACI-738"], ostrz: ["ACI-733", "SLO-001"] },
  "gooseberry-v08": { claims: ["ACI-736", "ACI-732", "ACI-626", "ACI-608", "ACI-733", "SLO-018", "SLO-001", "SLO-002"], zrodla: ["ACI-736", "ACI-732", "ACI-733"], ostrz: ["ACI-733", "SLO-001"] },
  "strawberry-v09": { claims: ["SLO-020", "SLO-049", "ACI-136", "ACI-754", "ACI-523"], zrodla: ["SLO-020", "ACI-754"], ostrz: ["SLO-020"] },
  "cranberry-lingonberry-v02": { claims: ["SLO-020", "ACI-752", "ACI-756", "ACI-523"], zrodla: ["SLO-020", "ACI-752", "ACI-756"], ostrz: ["SLO-020"] },
  "lime-bergamot-v09": { claims: ["ACI-145", "ACI-758", "ACI-508", "ACI-523"], zrodla: ["ACI-508", "ACI-758"], ostrz: ["ACI-508"] },
  "quince-v07": { claims: ["ACI-128", "ACI-759", "ACI-508", "SLO-020", "ACI-523"], zrodla: ["ACI-508", "ACI-759"], ostrz: ["ACI-508"] },
  "radish-v09": { claims: ["ACI-016", "ACI-017", "ACI-005", "ACI-862", "ACI-751", "ACI-509", "ACI-508", "ACI-501", "ACI-523"], zrodla: ["ACI-751", "ACI-508", "ACI-862"], ostrz: ["ACI-751", "ACI-509", "ACI-508", "ACI-501"] },
  "chokeberry-seabuckthorn-v11": { claims: ["SUS-001", "SUS-011", "SUS-016", "SUS-018", "SUS-020", "SUS-022", "SUS-015", "SUS-346", "SUS-354", "SUS-349", "SUS-002", "SUS-063", "SUS-019"], zrodla: ["SUS-349", "SUS-354"], ostrz: ["SUS-002"] },
};
// do-researchu → ryzyko-wysokie (scenariusz B niespełniony), karta-ostrzeżenie.
const RW = {
  "horseradish-v04": { claims: ["ACI-867","ACI-751","ACI-509","ACI-508","ACI-005","ACI-035","ACI-700","ACI-514"], ostrz: ["ACI-751","ACI-509","ACI-508"] },
  "white-cabbage-v11": { claims: ["ACI-868","ACI-751","ACI-509","ACI-508","ACI-501","ACI-005"], ostrz: ["ACI-751","ACI-509","ACI-508"] },
};
// do-researchu → nie-publikowac z kartą-ostrzeżeniem „brak sprawdzonego źródła” (wariant-bez-zrodla: E1 + B16 = 2 przebiegi).
const NP = {
  "cucumber-v11": { claims: ["SZY-054", "ACI-016", "ACI-509"], ostrz: ["SZY-054", "ACI-016", "ACI-509"] },
  "peach-nectarine-v08": { claims: ["SZY-054", "SLO-001"], ostrz: ["SZY-054", "SLO-001"] },
  "orange-kumquat-v09": { claims: ["SZY-054", "SLO-001"], ostrz: ["SZY-054", "SLO-001"] },
  "chokeberry-seabuckthorn-v07": { claims: ["SZY-054", "SLO-001"], ostrz: ["SZY-054"] },
  "napa-cabbage-v10": { claims: ["ACI-505", "ACI-508", "ACI-509", "ACI-501"], ostrz: ["ACI-508", "ACI-509", "ACI-501"] },
  "blueberry-bilberry-v07": { claims: ["SLO-020"], ostrz: ["SLO-020"] },
  "cornelian-cherry-v10": { claims: ["SUS-001", "SUS-002"], ostrz: ["SUS-002"] },
};
// ok-zrodlo-po-zmianie (B16-D1): status bez zmian, tylko notatka [B18]; zmiana nazwy/składu/metody należy do toru A / roli 03.
const PZ = ["chili-pepper-v04","tomatillo-v06","rhubarb-v03","grapefruit-v07","onion-v08","orange-kumquat-v07","currant-v06","raspberry-blackberry-v10","grapes-v08","pear-v09","apple-v12","sour-cherry-v07","quince-v09","gooseberry-v10","raspberry-blackberry-v09","quince-v03","horseradish-v05","daikon-black-radish-v10","foraged-blossoms-v09","quince-v12","quince-v13","chokeberry-seabuckthorn-v10","rhubarb-v08","lime-bergamot-v02"];
const CARROT = "carrot-v04"; // zostaje ryzyko-wysokie (B16), tylko notatka
export const POLA = {
  ...Object.fromEntries(Object.keys(OK).map((id) => [id, ["safetyStatus", "cardType", "claims", "sources", "requiredWarnings", "notes"]])),
  ...Object.fromEntries([...Object.keys(RW), ...Object.keys(NP)].map((id) => [id, ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"]])),
  ...Object.fromEntries([...PZ, CARROT, ...ZOST].map((id) => [id, ["notes"]])),
};
// Skrót pól spoza listy i status sprzed B18 (katalog 1.0.12, f9c8428), bez historii git (CI: płytki klon).
const SNAP = {"chili-pepper-v05": "a3a3ddafbd07", "currant-v08": "3a3af26a3f68", "blueberry-bilberry-v08": "fde046996aaf", "gooseberry-v08": "9590a782dc15", "strawberry-v09": "0b53df35c7c1", "cranberry-lingonberry-v02": "f6e612e18cc3", "lime-bergamot-v09": "ae4dabfed7d9", "quince-v07": "1733b05013c5", "radish-v09": "748f93b03554", "chokeberry-seabuckthorn-v11": "93ce6f2dc03f", "horseradish-v04": "aa55c8f75078", "white-cabbage-v11": "6629de4b557b", "cucumber-v11": "f39dcf866676", "peach-nectarine-v08": "f424c369bcf1", "orange-kumquat-v09": "bb7cc186cfb0", "chokeberry-seabuckthorn-v07": "e80ce165b7ff", "napa-cabbage-v10": "d84621fc5ef3", "blueberry-bilberry-v07": "6a4461f81bdf", "cornelian-cherry-v10": "bade797fb3f9", "chili-pepper-v04": "02b32cef91e6", "tomatillo-v06": "79c2ca7d5aac", "rhubarb-v03": "db8a52da7f39", "grapefruit-v07": "15ae1aba5562", "onion-v08": "28285b773cab", "orange-kumquat-v07": "34c4d859df67", "currant-v06": "64081b23427a", "raspberry-blackberry-v10": "b3fce869c00d", "grapes-v08": "94b0c6f00aa1", "pear-v09": "b660dddb2864", "apple-v12": "08e548b02361", "sour-cherry-v07": "914497368d6b", "quince-v09": "09e4b587e668", "gooseberry-v10": "83bdef600e7c", "raspberry-blackberry-v09": "a889d84d4e28", "quince-v03": "7d630c703df5", "horseradish-v05": "f272996aa6f9", "daikon-black-radish-v10": "f1dee91d0091", "foraged-blossoms-v09": "81126d30b0ef", "quince-v12": "6e91f1e88ea1", "quince-v13": "67734684aee2", "chokeberry-seabuckthorn-v10": "5c29b264290a", "rhubarb-v08": "38a93e3c0eaf", "lime-bergamot-v02": "2cc7d3001732", "carrot-v04": "df9bf7697232", "sour-cherry-v12": "f71e1d808319"};
const PRZED = {"chili-pepper-v05":"ryzyko-wysokie","currant-v08":"do-researchu","blueberry-bilberry-v08":"do-researchu","gooseberry-v08":"do-researchu","strawberry-v09":"do-researchu","cranberry-lingonberry-v02":"do-researchu","lime-bergamot-v09":"do-researchu","quince-v07":"do-researchu","radish-v09":"do-researchu","chokeberry-seabuckthorn-v11":"do-researchu","horseradish-v04":"do-researchu","white-cabbage-v11":"do-researchu","cucumber-v11":"do-researchu","peach-nectarine-v08":"do-researchu","orange-kumquat-v09":"do-researchu","chokeberry-seabuckthorn-v07":"do-researchu","napa-cabbage-v10":"do-researchu","blueberry-bilberry-v07":"do-researchu","cornelian-cherry-v10":"do-researchu","chili-pepper-v04":"do-researchu","tomatillo-v06":"do-researchu","rhubarb-v03":"ryzyko-wysokie","grapefruit-v07":"do-researchu","onion-v08":"ryzyko-wysokie","orange-kumquat-v07":"do-researchu","currant-v06":"do-researchu","raspberry-blackberry-v10":"do-researchu","grapes-v08":"do-researchu","pear-v09":"do-researchu","apple-v12":"do-researchu","sour-cherry-v07":"do-researchu","quince-v09":"do-researchu","gooseberry-v10":"do-researchu","raspberry-blackberry-v09":"do-researchu","quince-v03":"do-researchu","horseradish-v05":"do-researchu","daikon-black-radish-v10":"do-researchu","foraged-blossoms-v09":"do-researchu","quince-v12":"do-researchu","quince-v13":"do-researchu","chokeberry-seabuckthorn-v10":"do-researchu","rhubarb-v08":"do-researchu","lime-bergamot-v02":"do-researchu","carrot-v04":"ryzyko-wysokie","sour-cherry-v12":"do-researchu"};

test("B18: katalog 1.0.13 przechodzi walidację bez błędów", () => {
  assert.equal(cat.version, "1.0.13");
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B18: każdy z 45 wariantów B16 rozliczony dokładnie raz (10 ok + 1 zostaje, 3 ryzyko-wysokie, 7 nie-publikowac, 24 po zmianie)", () => {
  const wszystkie = [...Object.keys(OK), ...ZOST, ...Object.keys(RW), CARROT, ...Object.keys(NP), ...PZ];
  assert.equal(new Set(wszystkie).size, wszystkie.length, "bez powtórzeń");
  assert.deepEqual([...wszystkie].sort(), b16.warianty.map((w) => w.id).sort());
  const W = new Map(b16.warianty.map((w) => [w.id, w.werdykt]));
  for (const id of [...Object.keys(OK), ...ZOST]) assert.equal(W.get(id), "ok-zrodlo", id);
  for (const id of [...Object.keys(RW), CARROT]) assert.equal(W.get(id), "ryzyko-wysokie", id);
  for (const id of Object.keys(NP)) assert.equal(W.get(id), "do-researchu", id);
  for (const id of PZ) assert.equal(W.get(id), "ok-zrodlo-po-zmianie", id);
  assert.deepEqual([Object.keys(OK).length + ZOST.length, Object.keys(RW).length + 1, Object.keys(NP).length, PZ.length], [11, 3, 7, 24]);
});

test("B18: twierdzenia B16 w rejestrze jak w pliku B16 (cytaty 1:1), potwierdzone z przeglądem D-027 d; reszta B16 poza rejestrem", () => {
  for (const id of NOWE) {
    const t = R.get(id), o = B.get(id);
    assert.ok(t, id);
    assert.equal(t.status, "potwierdzone", id);
    assert.equal(t.krytyczne, o.krytyczne, `${id}: krytyczne`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", `${id}: przegląd D-027 d`);
    assert.equal(t.weryfikacjaZastepcza, "2026-11-02", id);
    assert.equal(t.klaster, id.slice(0, 3), `${id}: klaster`);
    assert.ok(t.pochodzenie?.includes("B16-research-k-2026-11-02"), `${id}: pochodzenie`);
    assert.ok(t.twierdzenie_en?.length > 20, `${id}: twierdzenie_en`);
    assert.equal(t.zrodla.length, o.zrodla.length, `${id}: liczba źródeł`);
    t.zrodla.forEach((s, i) => {
      for (const k of ["adres", "szczebel", "odczyt", ...(CYTAT_POPRAWIONY.has(id) ? [] : ["cytat"])]) assert.equal(s[k], o.zrodla[i][k], `${id}: ${k}`);
      assert.equal(s.plik_kopii, undefined, `${id}: bez ścieżki do kopii spoza repo`);
      for (const fr of s.cytat.split(" … ").map((x) => x.trim()).filter(Boolean)) assert.ok(o.zrodla[i].cytat.includes(fr) || DOPISANE.includes(fr), `${id}: fragment „${fr.slice(0, 40)}”`);
    });
  }
  assert.equal(R.get("ACI-860"), undefined, "ACI-860: źródło niedostępne przy D-027 d");
  for (const t of b16.twierdzenia) if (!NOWE.includes(t.id)) assert.equal(R.get(t.id), undefined, `${t.id}: poza zakresem B18`);
  assert.equal(new Set(rej.map((t) => t.id)).size, rej.length, "ID w rejestrze unikalne");
});

test("B18: ok-zrodlo ze źródłem szczebla 1–3 z rejestru (cytat 1:1), potwierdzone claims i ostrzeżenia", () => {
  for (const [id, o] of Object.entries(OK)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, "ok-zrodlo", id);
    assert.equal(v.cardType, undefined, id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings, o.ostrz, `${id}: requiredWarnings`);
    for (const c of [...v.claims, ...v.requiredWarnings]) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.equal(v.sources.length, o.zrodla.length, `${id}: sources`);
    o.zrodla.forEach((t, i) => { const z = R.get(t).zrodla[0], s = v.sources[i]; for (const k of ["adres", "miejsce", "cytat", "odczyt", "szczebel"]) assert.equal(s[k], z[k], `${id}: ${k} jak w ${t}`); });
    assert.ok(v.sources.some((s) => [1, 2, 3].includes(s.szczebel)), `${id}: szczebel 1–3`);
    assert.ok(nota(id), `${id}: notatka [B18]`);
  }
});

test("B18: ryzyko-wysokie i nie-publikowac jako karta-ostrzeżenie; ostrzeżenia w claims", () => {
  for (const [st, M] of [["ryzyko-wysokie", RW], ["nie-publikowac", NP]]) for (const [id, o] of Object.entries(M)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, st, id);
    assert.equal(v.cardType, "warning", id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings ?? [], o.ostrz, `${id}: requiredWarnings`);
    for (const c of o.ostrz) assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
    for (const c of v.claims) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.ok(nota(id), `${id}: notatka [B18]`);
    if (st === "nie-publikowac") assert.ok(nota(id).includes("2026-11-02-jaratlas-wariant-bez-zrodla") && nota(id).includes("brak sprawdzonego źródła"), `${id}: decyzja właściciela w notatce`);
  }
  assert.equal(V.get(CARROT).safetyStatus, "ryzyko-wysokie");
  assert.equal(V.get(CARROT).cardType, "warning");
});

test("B18: po zmianie (24), carrot-v04 i sour-cherry-v12 bez zmiany statusu, z notatką [B18] i odwołaniem do B16", () => {
  for (const id of [...PZ, CARROT, ...ZOST]) {
    assert.equal(V.get(id).safetyStatus, PRZED[id], `${id}: status bez zmian`);
    assert.ok(nota(id)?.includes("B16"), `${id}: notatka [B18] z B16`);
  }
});

test("B18: poza polami z listy warianty bez cichych zmian; publication ukryta w całym katalogu", () => {
  assert.deepEqual(Object.keys(SNAP).sort(), Object.keys(POLA).sort());
  for (const [id, keys] of Object.entries(POLA)) assert.equal(h(bez(V.get(id), keys)), SNAP[id], `${id}: pola poza ${keys.join(", ")} bez zmian`);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: 0 zmian, wszystko ukryta");
});

// D-027 d: treść poprawionych twierdzeń i liczby krytyczne (wzór B17 P2-3).
test("B18 (D-027 d): poprawki brzmienia wprowadzone; liczby krytyczne jak w źródle", () => {
  assert.ok(R.get("ACI-751").twierdzenie.includes("5%") && R.get("ACI-751").twierdzenie.includes("wysterylizowanych") && !/Ekspert Ask Extension \(Oregon\)/.test(R.get("ACI-751").twierdzenie), "ACI-751");
  assert.ok(R.get("ACI-758").twierdzenie.includes("ostudzić") && R.get("ACI-758").twierdzenie.includes("wysterylizowanych"), "ACI-758");
  assert.ok(R.get("ACI-759").twierdzenie.includes("po stężeniu") && R.get("ACI-759").twierdzenie.includes("do 2 tygodni"), "ACI-759");
  assert.ok(R.get("SUS-349").zrodla[0].miejsce.includes("s. 18"), "SUS-349: miejsce");
  const m = (id, ...xs) => { for (const x of xs) assert.ok(R.get(id).twierdzenie.includes(x) && R.get(id).twierdzenie_en.includes(x.replaceAll(",", ".")), `${id}: ${x}`); };
  m("ACI-722", "15 min", "20 min", "25 min", "30 min"); assert.ok(R.get("ACI-720").twierdzenie.includes("3 szklanki octu") && R.get("ACI-720").twierdzenie_en.includes("3 cups") && R.get("ACI-720").twierdzenie.includes("4 szklanki cukru") && R.get("ACI-720").twierdzenie_en.includes("4 cups sugar"), "ACI-720: ocet i cukier"); assert.ok(/proces 5 min/.test(R.get("ACI-736").twierdzenie) && /process 5 min/.test(R.get("ACI-736").twierdzenie_en), "ACI-736: 5 min (nie 15)"); m("SUS-349", "140–150°F", "130–140°F"); m("SUS-354", "140–150°F", "6–16");
  m("ACI-752", "2,66–3,03"); m("SUS-346", "3,3–3,7");
  for (const id of ["ACI-754", "ACI-759", "ACI-862"]) assert.ok(/do 2 tygodni|10–12 dni/.test(R.get(id).twierdzenie), `${id}: limit lodówki`);
});

// D-043 P2-5: treść 21 twierdzeń przypięta skrótem [twierdzenie, twierdzenie_en, uproszczenie] (wzór TRESC w tests/b17).
const TRESC = {"ACI-720": "bdcc68a61869", "ACI-721": "0646a1ac6e68", "ACI-722": "0ce17c39346c", "ACI-732": "f98371529794", "ACI-733": "7fa18bed55d8", "ACI-736": "2a5330e72546", "ACI-737": "06bfe338d7af", "ACI-738": "e5ecdc249e5f", "ACI-750": "52f689fa44a4", "ACI-751": "59d35a420a89", "ACI-752": "c2cf9db701ba", "ACI-754": "cc2b93652c34", "ACI-756": "5eb5541d080d", "ACI-758": "cf1354c26167", "ACI-759": "9de5a3a3fac4", "ACI-862": "e42c95b6d61d", "ACI-867": "dd5b87798209", "ACI-868": "6b02b0d0226f", "SUS-346": "3e0ffda162f5", "SUS-349": "d67746d94b21", "SUS-354": "7759792fe77d"};
test("B18 (D-043 P2-5): treść 21 twierdzeń bez cichych zmian", () => {
  assert.deepEqual(Object.keys(TRESC).sort(), [...NOWE].sort());
  for (const [id, x] of Object.entries(TRESC)) { const t = R.get(id); assert.equal(h([t.twierdzenie, t.twierdzenie_en, t.uproszczenie]), x, `${id}: treść`); }
  assert.ok(!V.get("chili-pepper-v05").claims.some((c) => ["ACI-414", "ACI-415", "ACI-416", "ACI-417"].includes(c)), "chili-pepper-v05: bez NCHFP Jalapeño Rings (D-043 P2-1)");
  assert.ok(!nota("white-cabbage-v11").includes("mniej octu niż wody"), "white-cabbage-v11: powód jak w B16 (D-043 P2-2)");
});
