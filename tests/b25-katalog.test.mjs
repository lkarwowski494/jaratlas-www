// B25 (D-043): werdykty B22 (42) i B23 (34) w katalogu, twierdzenia B22/B23 w rejestrze, ACI-428 nowe brzmienie; katalog 1.0.15.
// Decyzja: 2026-11-02-jaratlas-b25-katalog (decyzja Claude, do weta). Wejście: B22/B23 JSON, decyzje wariant-bez-zrodla,
// przeglad-agent-zamiast-eksperta (D-027 d), r1-nadwyzka-b21 (redakcja źródła red-savoy-cabbage-v03). Wzór: tests/b21-katalog.test.mjs.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const zr = (f) => JSON.parse(readFileSync(`docs/tresci/${f}.json`, "utf8"));
const b22 = zr("B22-research-2026-11-02"), b23 = zr("B23-research-2026-11-02");
const V = new Map(cat.variants.map((v) => [v.id, v]));
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = "2026-11-02-jaratlas-b25-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));
const nota = (id) => V.get(id).notes.find((n) => n.startsWith("[B25]") && n.includes(DEC));
// B27 (2026-11-02-jaratlas-b27-katalog): warianty z notatką [B27] sprawdza tests/b27-katalog.test.mjs.
const B27 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B27]"))).map((v) => v.id));
// B28 (2026-11-02-jaratlas-b28-katalog): warianty z notatką [B28] sprawdza tests/b28-katalog.test.mjs.
const B28 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B28]"))).map((v) => v.id));
// B29 (2026-11-02-jaratlas-b29-katalog): warianty z notatką [B29] (requiredWarnings kart-ostrzeżeń) sprawdza tests/b29-katalog.test.mjs.
const B29 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B29]"))).map((v) => v.id));
const B31 = new Set(["walnut-nuts-v07", "wild-mushrooms-v03", "fig-pomegranate-v09"]); // B31: werdykty B30 (3 warianty), pilnuje tests/b31-katalog.test.mjs

export const NOWE = { "B22-research-2026-11-02": ["ACI-880","ACI-881","ACI-882","ACI-883","ACI-884","ACI-890","ACI-891","ACI-921","ACI-922","ACI-923","ACI-924"], "B23-research-2026-11-02": ["SLO-800","SLO-801","SLO-802","SLO-803","SLO-804","SLO-805","SLO-806","SLO-807","SLO-808","SLO-809","SLO-810","SLO-811","SLO-812","SLO-813","SLO-814","SLO-815","SLO-816","SLO-817","SLO-818","SLO-840","SLO-841","SLO-842","SLO-843","SLO-844","SLO-845","SLO-846","SLO-847","SLO-848","SLO-860","SLO-861","SLO-862","SLO-863","SLO-864","SLO-865","SLO-866","SLO-867","SLO-868","SLO-869","SLO-870","SLO-871","SLO-872","SLO-873","SLO-874","SLO-875","SLO-876","SLO-877","SLO-878","SLO-879"] };
const OK = {"apple-v11":{"zrodla":["SLO-800","SLO-802","SLO-803"],"ostrz":["SLO-001","SLO-048"],"claims":["SLO-048","SLO-800","SLO-801","SLO-802","SLO-803","SLO-804","SLO-805","ACI-482","ACI-732","ACI-481","ACI-733","SLO-018","SLO-001","SLO-002"]},"strawberry-v12":{"zrodla":["SLO-810","SLO-811","SLO-812","SLO-813"],"ostrz":["SLO-001"],"claims":["SLO-810","SLO-811","SLO-812","SLO-813","ACI-732","ACI-626","ACI-143","ACI-136","ACI-733","SLO-018","SLO-001","SLO-002"]}};
const NP = {"cucumber-v13":{"claims":["SZY-054","ACI-016","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"cucumber-v15":{"claims":["SZY-054","ACI-016","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"cucumber-v16":{"claims":["SZY-054","ACI-016","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"white-cabbage-v12":{"claims":["SZY-054","ACI-016","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"brussels-kohlrabi-v08":{"claims":["SZY-054","ACI-016","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"brussels-kohlrabi-v10":{"claims":["SZY-054","ACI-016","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"beans-soy-v02":{"claims":["ACI-016","ACI-018","ACI-102","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"beetroot-v07":{"claims":["ACI-016","ACI-018","ACI-104","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"beetroot-v08":{"claims":["ACI-016","ACI-017","ACI-005","ACI-104","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"european-mixed-veg-v01":{"claims":["ACI-016","ACI-018","ACI-006","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"onion-v04":{"claims":["ACI-016","ACI-018","ACI-107","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"onion-v06":{"claims":["ACI-016","ACI-017","ACI-005","ACI-019","ACI-107","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"shallot-pearl-onion-v04":{"claims":["ACI-016","ACI-018","ACI-108","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"asparagus-v03":{"claims":["ACI-016","ACI-018","ACI-119","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"asparagus-v05":{"claims":["ACI-016","ACI-017","ACI-005","ACI-119","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"fennel-artichoke-v02":{"claims":["ACI-016","ACI-018","ACI-120","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"fennel-artichoke-v03":{"claims":["ACI-016","ACI-018","ACI-121","ACI-002","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"pear-v04":{"claims":["ACI-016","ACI-018","ACI-127","ACI-064","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"apricot-v10":{"claims":["ACI-016","ACI-017","ACI-135","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"orange-kumquat-v04":{"claims":["ACI-016","ACI-017","ACI-146","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"pineapple-banana-v08":{"claims":["ACI-016","ACI-017","ACI-153","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]},"fig-pomegranate-v02":{"claims":["ACI-016","ACI-018","ACI-154","ACI-008","SZY-054","ACI-509"],"ostrz":["SZY-054","ACI-016","ACI-509"]}};
const NOTA = ["green-beans-v07","green-beans-v11","beetroot-v10","carrot-v05","european-mixed-veg-v04","shallot-pearl-onion-v09","peach-nectarine-v04","cauliflower-v04","brussels-kohlrabi-v07","green-cherry-tomato-v05","green-cherry-tomato-v06","green-beans-v04","red-savoy-cabbage-v05","zucchini-v03","bell-pepper-v05","cauliflower-v10","chili-pepper-v04","tomatillo-v06","bell-pepper-v02","onion-v03","apple-v12","pear-v09","sour-cherry-v07","sweet-cherry-v06","sweet-cherry-v09","peach-nectarine-v11","strawberry-v07","strawberry-v11","raspberry-blackberry-v10","raspberry-blackberry-v11","currant-v06","gooseberry-v06","gooseberry-v07","gooseberry-v10","blueberry-bilberry-v09","grapes-v08","rhubarb-v06","rhubarb-v07","lemon-v11","orange-kumquat-v07","orange-kumquat-v08","grapefruit-v03","grapefruit-v07","chili-pepper-v12","cranberry-lingonberry-v08","elderberry-elderflower-v08","mango-papaya-v09","pineapple-banana-v06","fig-pomegranate-v06","fig-pomegranate-v07","fig-pomegranate-v09","watermelon-melon-v06"];
export const POLA = {"apple-v11":["safetyStatus","claims","sources","requiredWarnings","notes"],"strawberry-v12":["safetyStatus","claims","sources","requiredWarnings","notes"],"cucumber-v13":["safetyStatus","cardType","claims","requiredWarnings","notes"],"cucumber-v15":["safetyStatus","cardType","claims","requiredWarnings","notes"],"cucumber-v16":["safetyStatus","cardType","claims","requiredWarnings","notes"],"white-cabbage-v12":["safetyStatus","cardType","claims","requiredWarnings","notes"],"brussels-kohlrabi-v08":["safetyStatus","cardType","claims","requiredWarnings","notes"],"brussels-kohlrabi-v10":["safetyStatus","cardType","claims","requiredWarnings","notes"],"beans-soy-v02":["safetyStatus","cardType","claims","requiredWarnings","notes"],"beetroot-v07":["safetyStatus","cardType","claims","requiredWarnings","notes"],"beetroot-v08":["safetyStatus","cardType","claims","requiredWarnings","notes"],"european-mixed-veg-v01":["safetyStatus","cardType","claims","requiredWarnings","notes"],"onion-v04":["safetyStatus","cardType","claims","requiredWarnings","notes"],"onion-v06":["safetyStatus","cardType","claims","requiredWarnings","notes"],"shallot-pearl-onion-v04":["safetyStatus","cardType","claims","requiredWarnings","notes"],"asparagus-v03":["safetyStatus","cardType","claims","requiredWarnings","notes"],"asparagus-v05":["safetyStatus","cardType","claims","requiredWarnings","notes"],"fennel-artichoke-v02":["safetyStatus","cardType","claims","requiredWarnings","notes"],"fennel-artichoke-v03":["safetyStatus","cardType","claims","requiredWarnings","notes"],"pear-v04":["safetyStatus","cardType","claims","requiredWarnings","notes"],"apricot-v10":["safetyStatus","cardType","claims","requiredWarnings","notes"],"orange-kumquat-v04":["safetyStatus","cardType","claims","requiredWarnings","notes"],"pineapple-banana-v08":["safetyStatus","cardType","claims","requiredWarnings","notes"],"fig-pomegranate-v02":["safetyStatus","cardType","claims","requiredWarnings","notes"],"green-beans-v07":["notes"],"green-beans-v11":["notes"],"beetroot-v10":["notes"],"carrot-v05":["notes"],"european-mixed-veg-v04":["notes"],"shallot-pearl-onion-v09":["notes"],"peach-nectarine-v04":["notes"],"cauliflower-v04":["notes"],"brussels-kohlrabi-v07":["notes"],"green-cherry-tomato-v05":["notes"],"green-cherry-tomato-v06":["notes"],"green-beans-v04":["notes"],"red-savoy-cabbage-v05":["notes"],"zucchini-v03":["notes"],"bell-pepper-v05":["notes"],"cauliflower-v10":["notes"],"chili-pepper-v04":["notes"],"tomatillo-v06":["notes"],"bell-pepper-v02":["notes"],"onion-v03":["notes"],"apple-v12":["notes"],"pear-v09":["notes"],"sour-cherry-v07":["notes"],"sweet-cherry-v06":["notes"],"sweet-cherry-v09":["notes"],"peach-nectarine-v11":["notes"],"strawberry-v07":["notes"],"strawberry-v11":["notes"],"raspberry-blackberry-v10":["notes"],"raspberry-blackberry-v11":["notes"],"currant-v06":["notes"],"gooseberry-v06":["notes"],"gooseberry-v07":["notes"],"gooseberry-v10":["notes"],"blueberry-bilberry-v09":["notes"],"grapes-v08":["notes"],"rhubarb-v06":["notes"],"rhubarb-v07":["notes"],"lemon-v11":["notes"],"orange-kumquat-v07":["notes"],"orange-kumquat-v08":["notes"],"grapefruit-v03":["notes"],"grapefruit-v07":["notes"],"chili-pepper-v12":["notes"],"cranberry-lingonberry-v08":["notes"],"elderberry-elderflower-v08":["notes"],"mango-papaya-v09":["notes"],"pineapple-banana-v06":["notes"],"fig-pomegranate-v06":["notes"],"fig-pomegranate-v07":["notes"],"fig-pomegranate-v09":["notes"],"watermelon-melon-v06":["notes"],"red-savoy-cabbage-v03":["sources","notes"]};
// Skrót pól spoza listy i status sprzed B25 (katalog 1.0.14, 3a2c546).
const SNAP = {"apple-v11":"9030bd724869","strawberry-v12":"2e2762e9d09c","cucumber-v13":"f9245b6c2f42","cucumber-v15":"a73612abb2d5","cucumber-v16":"024315bd52e2","white-cabbage-v12":"dd5554487f4f","brussels-kohlrabi-v08":"8ba66d5eb9af","brussels-kohlrabi-v10":"4d8bcfe5ca89","beans-soy-v02":"c03a8a7d4fdb","beetroot-v07":"9b7f77a26bc6","beetroot-v08":"c77df7329c4a","european-mixed-veg-v01":"07f20e854795","onion-v04":"b71438bccd3c","onion-v06":"c03d66e60999","shallot-pearl-onion-v04":"e7018143dcf6","asparagus-v03":"cf3b53ce2acd","asparagus-v05":"e20544916969","fennel-artichoke-v02":"c9b49a20046f","fennel-artichoke-v03":"f7fe2007b47f","pear-v04":"d2485ddceca5","apricot-v10":"a76eb7eafc50","orange-kumquat-v04":"58741750e191","pineapple-banana-v08":"98a34c3be072","fig-pomegranate-v02":"a85394456003","green-beans-v07":"504a68a0b2dc","green-beans-v11":"f2f72095f19b","beetroot-v10":"fbebb5cf9777","carrot-v05":"6ce21a842ec6","european-mixed-veg-v04":"6a432b2d7739","shallot-pearl-onion-v09":"c08b9b9bb70e","peach-nectarine-v04":"3c006261b2e0","cauliflower-v04":"390a5df87b1d","brussels-kohlrabi-v07":"8148af1fe55f","green-cherry-tomato-v05":"ec9140422344","green-cherry-tomato-v06":"17074f01c8ae","green-beans-v04":"e320499b1480","red-savoy-cabbage-v05":"ba6d70b753ca","zucchini-v03":"50e909550d5c","bell-pepper-v05":"bf7e02fe72cd","cauliflower-v10":"75f02703234b","chili-pepper-v04":"02b32cef91e6","tomatillo-v06":"79c2ca7d5aac","bell-pepper-v02":"324e4f64bb1b","onion-v03":"c6d4daf611f6","apple-v12":"08e548b02361","pear-v09":"b660dddb2864","sour-cherry-v07":"914497368d6b","sweet-cherry-v06":"9e91f28ebdb7","sweet-cherry-v09":"395812d86f90","peach-nectarine-v11":"1d72ac886606","strawberry-v07":"2795d2cdefb9","strawberry-v11":"237175e66a9c","raspberry-blackberry-v10":"b3fce869c00d","raspberry-blackberry-v11":"ce9c019ffa33","currant-v06":"64081b23427a","gooseberry-v06":"1a8fdbcf497a","gooseberry-v07":"55f02b422183","gooseberry-v10":"83bdef600e7c","blueberry-bilberry-v09":"d275033fdf64","grapes-v08":"94b0c6f00aa1","rhubarb-v06":"12ee3ce83d16","rhubarb-v07":"fa7b61a8fbd0","lemon-v11":"21352862d35c","orange-kumquat-v07":"34c4d859df67","orange-kumquat-v08":"621d55fdc93e","grapefruit-v03":"3ecad7b0eef9","grapefruit-v07":"15ae1aba5562","chili-pepper-v12":"981d0b2832e6","cranberry-lingonberry-v08":"740ec172efec","elderberry-elderflower-v08":"b4e8b9d9561d","mango-papaya-v09":"ced2862cf961","pineapple-banana-v06":"75425ffe6c89","fig-pomegranate-v06":"22a8158a2769","fig-pomegranate-v07":"3bd0c0394755","fig-pomegranate-v09":"236f6783302f","watermelon-melon-v06":"5260f341d9bf","red-savoy-cabbage-v03":"c40cc78ee47b"};
const PRZED = {"apple-v11":"do-researchu","strawberry-v12":"do-researchu","cucumber-v13":"do-researchu","cucumber-v15":"do-researchu","cucumber-v16":"do-researchu","white-cabbage-v12":"do-researchu","brussels-kohlrabi-v08":"do-researchu","brussels-kohlrabi-v10":"do-researchu","beans-soy-v02":"do-researchu","beetroot-v07":"do-researchu","beetroot-v08":"do-researchu","european-mixed-veg-v01":"do-researchu","onion-v04":"do-researchu","onion-v06":"do-researchu","shallot-pearl-onion-v04":"do-researchu","asparagus-v03":"do-researchu","asparagus-v05":"do-researchu","fennel-artichoke-v02":"do-researchu","fennel-artichoke-v03":"do-researchu","pear-v04":"do-researchu","apricot-v10":"do-researchu","orange-kumquat-v04":"do-researchu","pineapple-banana-v08":"do-researchu","fig-pomegranate-v02":"do-researchu","green-beans-v07":"do-researchu","green-beans-v11":"do-researchu","beetroot-v10":"do-researchu","carrot-v05":"do-researchu","european-mixed-veg-v04":"do-researchu","shallot-pearl-onion-v09":"do-researchu","peach-nectarine-v04":"do-researchu","cauliflower-v04":"do-researchu","brussels-kohlrabi-v07":"do-researchu","green-cherry-tomato-v05":"do-researchu","green-cherry-tomato-v06":"do-researchu","green-beans-v04":"do-researchu","red-savoy-cabbage-v05":"do-researchu","zucchini-v03":"do-researchu","bell-pepper-v05":"do-researchu","cauliflower-v10":"do-researchu","chili-pepper-v04":"do-researchu","tomatillo-v06":"do-researchu","bell-pepper-v02":"do-researchu","onion-v03":"do-researchu","apple-v12":"do-researchu","pear-v09":"do-researchu","sour-cherry-v07":"do-researchu","sweet-cherry-v06":"do-researchu","sweet-cherry-v09":"do-researchu","peach-nectarine-v11":"do-researchu","strawberry-v07":"do-researchu","strawberry-v11":"do-researchu","raspberry-blackberry-v10":"do-researchu","raspberry-blackberry-v11":"do-researchu","currant-v06":"do-researchu","gooseberry-v06":"do-researchu","gooseberry-v07":"do-researchu","gooseberry-v10":"do-researchu","blueberry-bilberry-v09":"do-researchu","grapes-v08":"do-researchu","rhubarb-v06":"do-researchu","rhubarb-v07":"do-researchu","lemon-v11":"do-researchu","orange-kumquat-v07":"do-researchu","orange-kumquat-v08":"do-researchu","grapefruit-v03":"do-researchu","grapefruit-v07":"do-researchu","chili-pepper-v12":"do-researchu","cranberry-lingonberry-v08":"do-researchu","elderberry-elderflower-v08":"do-researchu","mango-papaya-v09":"do-researchu","pineapple-banana-v06":"do-researchu","fig-pomegranate-v06":"do-researchu","fig-pomegranate-v07":"do-researchu","fig-pomegranate-v09":"do-researchu","watermelon-melon-v06":"do-researchu","red-savoy-cabbage-v03":"ok-zrodlo"};

test("B25: katalog 1.0.15 przechodzi walidację bez błędów", () => {
  assert.ok(Number(cat.version.split(".")[2]) >= 15 && cat.version.startsWith("1.0."), cat.version); // B27: 1.0.16, B28: 1.0.17
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B25: każdy z 76 wariantów B22/B23 rozliczony dokładnie raz, werdykty jak w raportach", () => {
  const wsz = [...Object.keys(OK), ...Object.keys(NP), ...NOTA];
  assert.equal(new Set(wsz).size, wsz.length, "bez powtórzeń");
  const B = [...b22.warianty, ...b23.warianty];
  assert.deepEqual([...wsz].sort(), B.map((w) => w.id).sort());
  const W = new Map(B.map((w) => [w.id, w]));
  for (const id of Object.keys(OK)) assert.equal(W.get(id).werdykt, "ok-zrodlo", id);
  assert.deepEqual(Object.keys(NP).sort(), b22.warianty.filter((w) => w.kandydat_nie_publikowac).map((w) => w.id).sort());
  for (const id of Object.keys(NP)) assert.ok(W.get(id).przebieg >= 2, `${id}: przebieg ≥ 2`);
  // fig-pomegranate-v09 (B23 ok-zrodlo) zostaje do-researchu: preservationMethod null i acidBasis low-acid; metoda bez decyzji na tablicy (B25-D2).
  assert.ok(NOTA.includes("fig-pomegranate-v09"));
  assert.deepEqual([Object.keys(OK).length, Object.keys(NP).length, NOTA.length], [2, 22, 52]);
});

test("B25: twierdzenia B22/B23 w rejestrze jak w plikach źródłowych (cytaty 1:1), potwierdzone z przeglądem D-027 d", () => {
  for (const [f, ids] of Object.entries(NOWE)) { const Z = new Map(zr(f).twierdzenia.map((t) => [t.id, t])); for (const id of ids) {
    const t = R.get(id), o = Z.get(id);
    assert.ok(t && o, id);
    assert.equal(t.status, "potwierdzone", id);
    assert.equal(t.krytyczne, o.krytyczne, `${id}: krytyczne`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", `${id}: przegląd D-027 d`);
    assert.equal(t.weryfikacjaZastepcza, "2026-11-02", id);
    assert.equal(t.klaster, id.slice(0, 3), `${id}: klaster`);
    assert.ok(t.pochodzenie?.includes(f), `${id}: pochodzenie`);
    assert.ok(t.twierdzenie_en?.length > 20, `${id}: twierdzenie_en`);
    assert.equal(t.warianty, undefined, `${id}: bez pola warianty`);
    assert.equal(t.zrodla.length, o.zrodla.length, `${id}: liczba źródeł`);
    t.zrodla.forEach((s, i) => { for (const k of ["adres", "szczebel", "odczyt", "cytat", "miejsce"]) assert.equal(s[k], o.zrodla[i][k], `${id}: ${k}`); assert.equal(s.kopia, undefined, `${id}: bez kopii spoza repo`); });
  } }
  assert.equal(new Set(rej.map((t) => t.id)).size, rej.length, "ID w rejestrze unikalne");
});

test("B25: ACI-428 nowe brzmienie z B22 (łuski, bez obierania, bez pieczenia tomatillo), potwierdzone; poza claims katalogu", () => {
  const t = R.get("ACI-428");
  assert.equal(t.status, "potwierdzone");
  assert.ok(t.twierdzenie.includes("nie przewiduje pieczenia tomatillo") && t.twierdzenie.includes("20 minut") && t.twierdzenie.includes("1/2 cala"));
  assert.ok(t.zrodla.some((z) => z.cytat.includes("Remove the dry outer husks from tomatillos")), "cytat o łuskach");
  assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)");
  for (const v of cat.variants) assert.ok(![...(v.claims ?? []), ...(v.requiredWarnings ?? [])].includes("ACI-428"), `${v.id}: ACI-428 tylko w rejestrze (karta po decyzji toru A)`);
});

test("B25: ok-zrodlo ze źródłem szczebla 1–3 z rejestru (cytat 1:1), potwierdzone claims i ostrzeżenia", () => {
  for (const [id, o] of Object.entries(OK)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, "ok-zrodlo", id);
    assert.equal(v.cardType, undefined, id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings, o.ostrz, `${id}: requiredWarnings`);
    for (const c of [...v.claims, ...v.requiredWarnings]) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.equal(v.sources.length, o.zrodla.length, `${id}: sources`);
    o.zrodla.forEach((t, i) => { const z = R.get(t).zrodla[0], s = v.sources[i]; for (const k of ["adres", "miejsce", "cytat", "odczyt", "szczebel"]) assert.equal(s[k], z[k], `${id}: ${k} jak w ${t}`); });
    assert.ok(nota(id), `${id}: notatka [B25]`);
  }
});

test("B25: nie-publikowac jako karta-ostrzeżenie z regułą ogólną metody; nic nie znika z claims", () => {
  for (const [id, o] of Object.entries(NP)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, "nie-publikowac", id);
    assert.equal(v.cardType, "warning", id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings, o.ostrz, `${id}: requiredWarnings`);
    for (const c of v.claims) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.ok(nota(id)?.includes("2026-11-02-jaratlas-wariant-bez-zrodla") && nota(id).includes("brak sprawdzonego źródła"), `${id}: notatka [B25] z decyzją właściciela`);
  }
});

test("B25: po zmianie, do-researchu i fig-pomegranate-v09 bez zmiany statusu, z notatką [B25]", () => {
  for (const id of NOTA) { assert.equal(V.get(id).safetyStatus, PRZED[id], `${id}: status bez zmian`); assert.ok(nota(id), `${id}: notatka [B25]`); }
  assert.ok(nota("fig-pomegranate-v09").includes("preservationMethod"), "fig-pomegranate-v09: powód wstrzymania");
  for (const w of b23.warianty.filter((w) => w.grupa === "C")) { assert.equal(V.get(w.id).preservationMethod, null, `${w.id}: metoda bez zmian`); assert.ok(nota(w.id).includes("water-bath"), `${w.id}: propozycja metody tylko w notatce`); }
});

test("B25 (r1-nadwyzka-b21): źródła UCCE El Dorado w katalogu bez przypisu „Source”; cytat nadal 1:1 z ulotki", () => {
  const adr = "https://ccfruitandnuts.ucanr.edu/sites/default/files/2022-04/365812.pdf";
  const zs = cat.variants.flatMap((v) => (v.sources ?? []).filter((z) => z.adres === adr));
  assert.ok(zs.length >= 3);
  for (const z of zs) assert.ok(!/Source\s*:/i.test(z.miejsce + " " + z.cytat), "bez linii Source w miejscu i cytacie");
  const z = V.get("red-savoy-cabbage-v03").sources[1];
  assert.ok(R.get("ACI-876").zrodla[0].cytat.includes(z.cytat), "zredagowany cytat jest fragmentem cytatu z rejestru");
  assert.ok(z.cytat.startsWith("Yield: about 5 quarts or 10 pints"));
  assert.ok(nota("red-savoy-cabbage-v03")?.includes("2026-11-02-jaratlas-r1-nadwyzka-b21"), "notatka [B25] o redakcji (D-043 P3-4)");
  for (const id of ["cucumber-v15", "european-mixed-veg-v01"]) assert.ok(nota(id).includes("do rewizji po decyzji"), `${id}: gałąź warunkowo (D-043 P3-3)`);
});

test("B25: poza polami z listy warianty bez cichych zmian; publication ukryta w całym katalogu", () => {
  assert.deepEqual(Object.keys(SNAP).sort(), Object.keys(POLA).sort());
  for (const [id, keys] of Object.entries(POLA)) assert.equal(h(bez(V.get(id), keys)), SNAP[id], `${id}: pola poza ${keys.join(", ")} bez zmian`);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: 0 zmian, wszystko ukryta");
  assert.equal(h(cat.variants.filter((v) => !(v.id in POLA) && !B27.has(v.id) && !B28.has(v.id) && !B29.has(v.id) && !B31.has(v.id))), "71a614e633f0", "warianty spoza B25, B27, B28, B29 i B31 bez zmian (B31: przeliczony na f36b7b0, stary 28be8027b550; skrót na 1.0.15, 7433d6b; B29: przeliczony, stary b0ecbd1fc48c; B28 z (h): stary 5044822785b6)");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6", "categories, products, processFamilies bez zmian");
});
