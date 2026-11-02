// B21 (D-043): werdykty B19 (32) i B20 (45) oraz twierdzenia C12 SUS-325, 326, 332–336 w katalogu; katalog 1.0.14.
// Decyzja: 2026-11-02-jaratlas-b21-katalog (decyzja Claude, do weta). Wejście: raporty B19/B20 (JSON), C12 E1-suszenie-zrodla-p2,
// decyzje właściciela wariant-bez-zrodla, przeglad-agent-zamiast-eksperta (D-027 d). Wzór: tests/b18-katalog.test.mjs.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { validateCatalog } from "../tools/validate-catalog.mjs";

const cat = JSON.parse(readFileSync("catalog/catalog-seed.json", "utf8"));
const rej = JSON.parse(readFileSync("docs/tresci/rejestr.json", "utf8"));
const zr = (f) => JSON.parse(readFileSync(`docs/tresci/${f}.json`, "utf8"));
const b19 = zr("B19-research-2026-11-02"), b20 = zr("B20-research-2026-11-02"), c12 = zr("E1-suszenie-zrodla-p2-2026-11-02"), b16 = zr("B16-research-k-2026-11-02");
const V = new Map(cat.variants.map((v) => [v.id, v]));
// B25 (2026-11-02-jaratlas-b25-katalog): warianty zmienione w porcji B25 (notatka [B25]) sprawdza tests/b25-katalog.test.mjs.
const B25 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B25]"))).map((v) => v.id));
// B27 (2026-11-02-jaratlas-b27-katalog): warianty z notatką [B27] sprawdza tests/b27-katalog.test.mjs.
const B27 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B27]"))).map((v) => v.id));
// B28 (2026-11-02-jaratlas-b28-katalog): warianty z notatką [B28] sprawdza tests/b28-katalog.test.mjs.
const B28 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B28]"))).map((v) => v.id));
// B29 (2026-11-02-jaratlas-b29-katalog): warianty z notatką [B29] (requiredWarnings kart-ostrzeżeń) sprawdza tests/b29-katalog.test.mjs.
const B29 = new Set(cat.variants.filter((v) => (v.notes ?? []).some((n) => n.startsWith("[B29]"))).map((v) => v.id));
const B31 = new Set(["walnut-nuts-v07", "wild-mushrooms-v03", "fig-pomegranate-v09"]); // B31: werdykty B30 (3 warianty), pilnuje tests/b31-katalog.test.mjs
const R = new Map(rej.map((t) => [t.id, t]));
const DEC = "2026-11-02-jaratlas-b21-katalog";
const h = (x) => createHash("sha256").update(JSON.stringify(x)).digest("hex").slice(0, 12);
const bez = (v, keys) => Object.fromEntries(Object.entries(v).filter(([k]) => !keys.includes(k)));
const nota = (id) => V.get(id).notes.find((n) => n.startsWith("[B21]") && n.includes(DEC));

// Twierdzenia do rejestru (ID bez zmian): tylko te, które wspierają werdykty wchodzące teraz do katalogu.
// SUS-347 (B16, pH derenia) wchodzi z cornelian-cherry-v07 (B21-D2).
export const NOWE = { "B19-research-2026-11-02": ["ACI-820", "SLO-780"], "B20-research-2026-11-02": ["ACI-875", "ACI-876", "ACI-877", "ACI-878"], "B16-research-k-2026-11-02": ["SUS-347"], "E1-suszenie-zrodla-p2-2026-11-02": ["SUS-325", "SUS-326", "SUS-332", "SUS-333", "SUS-334", "SUS-335", "SUS-336"] };
const ZRODLO = Object.fromEntries(Object.entries(NOWE).map(([f, ids]) => [f, new Map(zr(f).twierdzenia.map((t) => [t.id, t]))]));
// Cytaty poprawione po D-027 d (fragmenty spoza pliku źródłowego tylko z listy DOPISANE).
const CYTAT_POPRAWIONY = new Set([]);
const DOPISANE = [];

const OK = {"cornelian-cherry-v07": {"claims": ["ACI-820", "SUS-347", "ACI-625", "SLO-003", "ACI-733", "SLO-018", "SLO-001", "SLO-002", "SLO-213"], "zrodla": ["ACI-625", "SUS-347", "ACI-820"], "ostrz": ["ACI-733", "SLO-001"]}, "red-savoy-cabbage-v03": {"claims": ["ACI-016", "ACI-018", "ACI-082", "ACI-875", "ACI-876", "ACI-877", "ACI-878", "ACI-702", "ACI-017"], "zrodla": ["ACI-875", "ACI-876", "ACI-877", "ACI-878"], "ostrz": ["ACI-016", "ACI-702"]}};
const RW = {"currant-v09": {"claims": ["SLO-058", "SLO-780"], "ostrz": ["SLO-780"]}, "cranberry-lingonberry-v12": {"claims": ["SLO-058", "SLO-780"], "ostrz": ["SLO-780"]}, "tomatillo-v07": {"claims": ["SUS-301"], "ostrz": ["SUS-301"]}, "eggplant-v04": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "OLE-028", "OLE-024", "OLE-025", "OLE-027", "OLE-029", "ACI-027"], "ostrz": ["OLE-028", "OLE-027", "OLE-029"]}, "watermelon-melon-v07": {"claims": ["ACI-156", "SLO-069", "SLO-024", "SLO-025", "SUS-332"], "ostrz": ["SLO-024", "SLO-025", "SLO-069"]}, "garden-herbs-v13": {"claims": ["SUS-333", "SUS-334"], "ostrz": ["SUS-333"]}, "wild-mushrooms-v10": {"claims": ["SUS-035", "SUS-335", "SUS-336", "SUS-141", "SUS-146"], "ostrz": ["SUS-035", "SUS-335", "SUS-336", "SUS-141"]}};
const NP = {"quince-v06": {"claims": ["ACI-009", "ACI-128", "ACI-067", "SZY-054"], "ostrz": ["SZY-054"]}, "lemon-v08": {"claims": ["ACI-144", "ACI-067", "SZY-054"], "ostrz": ["SZY-054"]}, "lime-bergamot-v10": {"claims": ["ACI-145", "SZY-054"], "ostrz": ["SZY-054"]}, "orange-kumquat-v12": {"claims": ["SZY-054"], "ostrz": ["SZY-054"]}, "tomatillo-v08": {"claims": ["ACI-098", "SZY-054", "SLO-001", "SUS-301"], "ostrz": ["SZY-054", "SLO-001", "SUS-301"]}, "green-cherry-tomato-v08": {"claims": ["ACI-050", "SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "green-cherry-tomato-v09": {"claims": ["ACI-050", "SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "rosehip-rowan-v09": {"claims": ["SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "mirabelle-v08": {"claims": ["SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "strawberry-v13": {"claims": ["SLO-085", "SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "currant-v07": {"claims": ["SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "lime-bergamot-v07": {"claims": ["SZY-054", "SLO-001"], "ostrz": ["SZY-054", "SLO-001"]}, "white-cabbage-v10": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-082", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "red-savoy-cabbage-v08": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-006", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "red-savoy-cabbage-v10": {"claims": ["ACI-017", "ACI-016", "ACI-082", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "cauliflower-v06": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-083", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "broccoli-v04": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-029", "ACI-084", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "broccoli-v05": {"claims": ["ACI-016", "ACI-018", "ACI-029", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "broccoli-v09": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-029", "ACI-006", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "zucchini-v02": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "zucchini-v04": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "zucchini-v07": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-019", "ACI-026", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "zucchini-v09": {"claims": ["ACI-017", "ACI-026", "ACI-027", "SZY-054", "ACI-016", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "pattypan-squash-v02": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "ACI-025", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "pattypan-squash-v03": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "pattypan-squash-v04": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "leafy-greens-v03": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-090", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "vine-leaves-greens-v02": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-091", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "vine-leaves-greens-v04": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-091", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "vine-leaves-greens-v06": {"claims": ["ACI-016", "ACI-017", "ACI-005", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "tomato-v07": {"claims": ["ACI-016", "ACI-018", "ACI-093", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "eggplant-v03": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-026", "ACI-027", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "eggplant-v06": {"claims": ["ACI-016", "ACI-018", "ACI-026", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "tomatillo-v02": {"claims": ["ACI-016", "ACI-018", "ACI-098", "ACI-060", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "tomatillo-v04": {"claims": ["ACI-016", "ACI-017", "SZY-054", "ACI-509", "SUS-301"], "ostrz": ["SZY-054", "ACI-016", "ACI-509", "SUS-301"]}, "tomatillo-v09": {"claims": ["ACI-016", "ACI-017", "ACI-098", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}, "green-beans-v05": {"claims": ["ACI-016", "ACI-017", "ACI-005", "ACI-099", "SZY-054", "ACI-509"], "ostrz": ["SZY-054", "ACI-016", "ACI-509"]}};
const ZOST_C12 = {"chokeberry-seabuckthorn-v12": {"claims": ["SUS-001", "SUS-011", "SUS-016", "SUS-018", "SUS-020", "SUS-022", "SUS-325"], "ostrz": []}, "rosehip-rowan-v11": {"claims": ["SUS-326", "SUS-001", "SUS-002", "SUS-063"], "ostrz": ["SUS-002"]}};
const P1 = ["pear-v08", "orange-kumquat-v13", "raspberry-blackberry-v13", "cucumber-v13", "cucumber-v15", "cucumber-v16", "white-cabbage-v12", "napa-cabbage-v12", "brussels-kohlrabi-v08", "brussels-kohlrabi-v10", "pattypan-squash-v06"];
const PZ = ["orange-kumquat-v08", "sour-cherry-v14", "quince-v10", "gooseberry-v06", "sweet-cherry-v06", "sweet-cherry-v09", "peach-nectarine-v11", "strawberry-v11", "raspberry-blackberry-v11", "blueberry-bilberry-v09", "gooseberry-v07", "grapefruit-v03", "red-savoy-cabbage-v05", "cauliflower-v04", "cauliflower-v10", "brussels-kohlrabi-v07", "zucchini-v03", "zucchini-v14", "green-cherry-tomato-v05", "green-cherry-tomato-v06", "bell-pepper-v05", "green-beans-v04"];
const JUZ = ["rosehip-rowan-v07"]; // ryzyko-wysokie od B17, tylko notatka
const C12_W = ["chokeberry-seabuckthorn-v12", "rosehip-rowan-v11", "watermelon-melon-v07", "garden-herbs-v13", "wild-mushrooms-v10"];
export const POLA = {"cornelian-cherry-v07": ["safetyStatus", "cardType", "claims", "sources", "requiredWarnings", "notes"], "red-savoy-cabbage-v03": ["safetyStatus", "cardType", "claims", "sources", "requiredWarnings", "notes"], "currant-v09": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "cranberry-lingonberry-v12": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "tomatillo-v07": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "eggplant-v04": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "watermelon-melon-v07": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "garden-herbs-v13": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "wild-mushrooms-v10": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "quince-v06": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "lemon-v08": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "lime-bergamot-v10": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "orange-kumquat-v12": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "tomatillo-v08": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "green-cherry-tomato-v08": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "green-cherry-tomato-v09": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "rosehip-rowan-v09": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "mirabelle-v08": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "strawberry-v13": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "currant-v07": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "lime-bergamot-v07": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "white-cabbage-v10": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "red-savoy-cabbage-v08": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "red-savoy-cabbage-v10": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "cauliflower-v06": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "broccoli-v04": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "broccoli-v05": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "broccoli-v09": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "zucchini-v02": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "zucchini-v04": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "zucchini-v07": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "zucchini-v09": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "pattypan-squash-v02": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "pattypan-squash-v03": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "pattypan-squash-v04": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "leafy-greens-v03": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "vine-leaves-greens-v02": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "vine-leaves-greens-v04": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "vine-leaves-greens-v06": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "tomato-v07": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "eggplant-v03": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "eggplant-v06": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "tomatillo-v02": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "tomatillo-v04": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "tomatillo-v09": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "green-beans-v05": ["safetyStatus", "cardType", "claims", "requiredWarnings", "notes"], "chokeberry-seabuckthorn-v12": ["claims", "requiredWarnings", "notes"], "rosehip-rowan-v11": ["claims", "requiredWarnings", "notes"], "pear-v08": ["notes"], "orange-kumquat-v13": ["notes"], "raspberry-blackberry-v13": ["notes"], "cucumber-v13": ["notes"], "cucumber-v15": ["notes"], "cucumber-v16": ["notes"], "white-cabbage-v12": ["notes"], "napa-cabbage-v12": ["notes"], "brussels-kohlrabi-v08": ["notes"], "brussels-kohlrabi-v10": ["notes"], "pattypan-squash-v06": ["notes"], "orange-kumquat-v08": ["notes"], "sour-cherry-v14": ["notes"], "quince-v10": ["notes"], "gooseberry-v06": ["notes"], "sweet-cherry-v06": ["notes"], "sweet-cherry-v09": ["notes"], "peach-nectarine-v11": ["notes"], "strawberry-v11": ["notes"], "raspberry-blackberry-v11": ["notes"], "blueberry-bilberry-v09": ["notes"], "gooseberry-v07": ["notes"], "grapefruit-v03": ["notes"], "red-savoy-cabbage-v05": ["notes"], "cauliflower-v04": ["notes"], "cauliflower-v10": ["notes"], "brussels-kohlrabi-v07": ["notes"], "zucchini-v03": ["notes"], "zucchini-v14": ["notes"], "green-cherry-tomato-v05": ["notes"], "green-cherry-tomato-v06": ["notes"], "bell-pepper-v05": ["notes"], "green-beans-v04": ["notes"], "rosehip-rowan-v07": ["notes"]};
// Skrót pól spoza listy i status sprzed B21 (katalog 1.0.13, 4e3dcaa), bez historii git.
const SNAP = {"cornelian-cherry-v07": "49e36175035c", "red-savoy-cabbage-v03": "4120e8fa8990", "currant-v09": "67003b8ae836", "cranberry-lingonberry-v12": "909371dcbfb7", "tomatillo-v07": "eff4bca1cc31", "eggplant-v04": "55cc5efb716a", "watermelon-melon-v07": "8f93eae6b405", "garden-herbs-v13": "7ab400c51c15", "wild-mushrooms-v10": "649432908888", "quince-v06": "9f1b4c0fee4e", "lemon-v08": "edfeea1283e7", "lime-bergamot-v10": "f6d5095d5a10", "orange-kumquat-v12": "c3c855063a45", "tomatillo-v08": "7202e3b32235", "green-cherry-tomato-v08": "2fc089415212", "green-cherry-tomato-v09": "6db6081e4262", "rosehip-rowan-v09": "31fcc1c15c42", "mirabelle-v08": "ad3fc6df7cc0", "strawberry-v13": "a68982debd33", "currant-v07": "28ea0ad4f51e", "lime-bergamot-v07": "a970762203bf", "white-cabbage-v10": "1cfabe8f66d3", "red-savoy-cabbage-v08": "b7893948db97", "red-savoy-cabbage-v10": "660190fa9ab4", "cauliflower-v06": "72bfeab186e6", "broccoli-v04": "82a3ac0c8590", "broccoli-v05": "b851537a18f4", "broccoli-v09": "57c568d5add8", "zucchini-v02": "bc29ac6572a0", "zucchini-v04": "9758ac4fa7f8", "zucchini-v07": "d7f2783171a1", "zucchini-v09": "2fe2b8997fd2", "pattypan-squash-v02": "ce3625e08239", "pattypan-squash-v03": "835d3b8ca060", "pattypan-squash-v04": "52dcb74f697d", "leafy-greens-v03": "aa4974f42d40", "vine-leaves-greens-v02": "d5595836e455", "vine-leaves-greens-v04": "ec1affb09473", "vine-leaves-greens-v06": "e4e4ea9ec3c5", "tomato-v07": "e116b1d3b42c", "eggplant-v03": "b9828a38a9b9", "eggplant-v06": "82babbd83706", "tomatillo-v02": "9008f6214f5f", "tomatillo-v04": "18058eccbd50", "tomatillo-v09": "2ba425dcd6db", "green-beans-v05": "7e21dd568231", "chokeberry-seabuckthorn-v12": "6c08ea3c4e90", "rosehip-rowan-v11": "53c31e562f64", "pear-v08": "effd046b7f38", "orange-kumquat-v13": "b0a3ae083a53", "raspberry-blackberry-v13": "9b01e427a107", "cucumber-v13": "d3b39a2e1b03", "cucumber-v15": "abe99585e2b1", "cucumber-v16": "0d416f20f8b2", "white-cabbage-v12": "0e30bdcbe9ee", "napa-cabbage-v12": "c61917184e8d", "brussels-kohlrabi-v08": "918b0609c79d", "brussels-kohlrabi-v10": "803e72330737", "pattypan-squash-v06": "7e7c1cfe9104", "orange-kumquat-v08": "621d55fdc93e", "sour-cherry-v14": "293e0ee4afe9", "quince-v10": "4f5f709e81d4", "gooseberry-v06": "1a8fdbcf497a", "sweet-cherry-v06": "9e91f28ebdb7", "sweet-cherry-v09": "395812d86f90", "peach-nectarine-v11": "1d72ac886606", "strawberry-v11": "237175e66a9c", "raspberry-blackberry-v11": "ce9c019ffa33", "blueberry-bilberry-v09": "d275033fdf64", "gooseberry-v07": "55f02b422183", "grapefruit-v03": "3ecad7b0eef9", "red-savoy-cabbage-v05": "ba6d70b753ca", "cauliflower-v04": "390a5df87b1d", "cauliflower-v10": "75f02703234b", "brussels-kohlrabi-v07": "8148af1fe55f", "zucchini-v03": "50e909550d5c", "zucchini-v14": "e41869697051", "green-cherry-tomato-v05": "ec9140422344", "green-cherry-tomato-v06": "17074f01c8ae", "bell-pepper-v05": "bf7e02fe72cd", "green-beans-v04": "e320499b1480", "rosehip-rowan-v07": "7349b68848fc"};
const PRZED = {"cornelian-cherry-v07": "do-researchu", "red-savoy-cabbage-v03": "do-researchu", "currant-v09": "do-researchu", "cranberry-lingonberry-v12": "do-researchu", "tomatillo-v07": "do-researchu", "eggplant-v04": "do-researchu", "watermelon-melon-v07": "do-researchu", "garden-herbs-v13": "do-researchu", "wild-mushrooms-v10": "do-researchu", "quince-v06": "do-researchu", "lemon-v08": "do-researchu", "lime-bergamot-v10": "do-researchu", "orange-kumquat-v12": "do-researchu", "tomatillo-v08": "do-researchu", "green-cherry-tomato-v08": "do-researchu", "green-cherry-tomato-v09": "do-researchu", "rosehip-rowan-v09": "do-researchu", "mirabelle-v08": "do-researchu", "strawberry-v13": "do-researchu", "currant-v07": "do-researchu", "lime-bergamot-v07": "do-researchu", "white-cabbage-v10": "do-researchu", "red-savoy-cabbage-v08": "do-researchu", "red-savoy-cabbage-v10": "do-researchu", "cauliflower-v06": "do-researchu", "broccoli-v04": "do-researchu", "broccoli-v05": "do-researchu", "broccoli-v09": "do-researchu", "zucchini-v02": "do-researchu", "zucchini-v04": "do-researchu", "zucchini-v07": "do-researchu", "zucchini-v09": "do-researchu", "pattypan-squash-v02": "do-researchu", "pattypan-squash-v03": "do-researchu", "pattypan-squash-v04": "do-researchu", "leafy-greens-v03": "do-researchu", "vine-leaves-greens-v02": "do-researchu", "vine-leaves-greens-v04": "do-researchu", "vine-leaves-greens-v06": "do-researchu", "tomato-v07": "do-researchu", "eggplant-v03": "do-researchu", "eggplant-v06": "do-researchu", "tomatillo-v02": "do-researchu", "tomatillo-v04": "do-researchu", "tomatillo-v09": "do-researchu", "green-beans-v05": "do-researchu", "chokeberry-seabuckthorn-v12": "do-researchu", "rosehip-rowan-v11": "do-researchu", "pear-v08": "do-researchu", "orange-kumquat-v13": "do-researchu", "raspberry-blackberry-v13": "do-researchu", "cucumber-v13": "do-researchu", "cucumber-v15": "do-researchu", "cucumber-v16": "do-researchu", "white-cabbage-v12": "do-researchu", "napa-cabbage-v12": "do-researchu", "brussels-kohlrabi-v08": "do-researchu", "brussels-kohlrabi-v10": "do-researchu", "pattypan-squash-v06": "do-researchu", "orange-kumquat-v08": "do-researchu", "sour-cherry-v14": "do-researchu", "quince-v10": "do-researchu", "gooseberry-v06": "do-researchu", "sweet-cherry-v06": "do-researchu", "sweet-cherry-v09": "do-researchu", "peach-nectarine-v11": "do-researchu", "strawberry-v11": "do-researchu", "raspberry-blackberry-v11": "do-researchu", "blueberry-bilberry-v09": "do-researchu", "gooseberry-v07": "do-researchu", "grapefruit-v03": "do-researchu", "red-savoy-cabbage-v05": "do-researchu", "cauliflower-v04": "do-researchu", "cauliflower-v10": "do-researchu", "brussels-kohlrabi-v07": "do-researchu", "zucchini-v03": "do-researchu", "zucchini-v14": "do-researchu", "green-cherry-tomato-v05": "do-researchu", "green-cherry-tomato-v06": "do-researchu", "bell-pepper-v05": "do-researchu", "green-beans-v04": "do-researchu", "rosehip-rowan-v07": "ryzyko-wysokie"};

test("B21: katalog 1.0.14 przechodzi walidację bez błędów", () => {
  assert.ok(Number(cat.version.split(".")[2]) >= 14 && cat.version.startsWith("1.0."), cat.version); // B25: 1.0.15, B27: 1.0.16, B28: 1.0.17
  assert.deepEqual(validateCatalog(cat, rej).errors, []);
});

test("B21: każdy z 77 wariantów B19/B20 rozliczony dokładnie raz, werdykty jak w raportach", () => {
  const wsz = [...Object.keys(OK), ...Object.keys(RW).filter((id) => !C12_W.includes(id)), ...JUZ, ...Object.keys(NP), ...P1, ...PZ];
  assert.equal(new Set(wsz).size, wsz.length, "bez powtórzeń");
  const B = [...b19.warianty, ...b20.warianty];
  assert.deepEqual([...wsz].sort(), B.map((w) => w.id).sort());
  const W = new Map(B.map((w) => [w.id, w]));
  for (const id of Object.keys(OK)) assert.equal(W.get(id).werdykt, "ok-zrodlo", id);
  for (const id of [...Object.keys(RW).filter((id) => !C12_W.includes(id)), ...JUZ]) assert.equal(W.get(id).werdykt, "ryzyko-wysokie", id);
  for (const id of Object.keys(NP)) assert.ok(W.get(id).werdykt === "do-researchu" && W.get(id).przebieg === 2, `${id}: do-researchu po przebiegu 2`);
  assert.deepEqual(Object.keys(NP).sort(), [...b19.liczby.kandydaci_nie_publikowac_po_przebiegu_2, ...b20.liczby.kandydaci_nie_publikowac].sort());
  for (const id of P1) assert.ok(W.get(id).werdykt === "do-researchu" && W.get(id).przebieg === 1, `${id}: przebieg 1`);
  for (const id of PZ) assert.equal(W.get(id).werdykt, "ok-zrodlo-po-zmianie", id);
  assert.deepEqual([Object.keys(OK).length, wsz.length - Object.keys(OK).length - Object.keys(NP).length - P1.length - PZ.length, Object.keys(NP).length, P1.length, PZ.length], [2, 5, 37, 11, 22]);
  const C = new Map(c12.warianty.map((w) => [w.id, w.status_proponowany]));
  for (const id of C12_W) assert.equal(C.get(id), id in RW ? "ryzyko-wysokie" : "zostaje do-researchu", id);
});

test("B21: twierdzenia w rejestrze jak w plikach źródłowych (cytaty 1:1), potwierdzone z przeglądem D-027 d; reszta B19/B20 poza rejestrem", () => {
  const nowe = Object.values(NOWE).flat();
  for (const [f, ids] of Object.entries(NOWE)) for (const id of ids) {
    const t = R.get(id), o = ZRODLO[f].get(id);
    assert.ok(t && o, id);
    assert.equal(t.status, "potwierdzone", id);
    assert.equal(t.krytyczne, o.krytyczne, `${id}: krytyczne`);
    if (t.krytyczne) assert.equal(t.przeglad?.kto, "weryfikacja zastępcza (subagent)", `${id}: przegląd D-027 d`);
    assert.equal(t.weryfikacjaZastepcza, "2026-11-02", id);
    assert.equal(t.klaster, id.slice(0, 3), `${id}: klaster`);
    assert.ok(t.pochodzenie?.includes(f), `${id}: pochodzenie`);
    assert.ok(t.twierdzenie_en?.length > 20, `${id}: twierdzenie_en`);
    assert.equal(t.zrodla.length, o.zrodla.length, `${id}: liczba źródeł`);
    t.zrodla.forEach((s, i) => {
      for (const k of ["adres", "szczebel", "odczyt", ...(CYTAT_POPRAWIONY.has(id) ? [] : ["cytat"])]) assert.equal(s[k], o.zrodla[i][k], `${id}: ${k}`);
      assert.equal(s.plik_kopii, undefined, `${id}: bez ścieżki do kopii spoza repo`);
      for (const fr of s.cytat.split(" … ").map((x) => x.trim()).filter(Boolean)) assert.ok(o.zrodla[i].cytat.includes(fr) || DOPISANE.includes(fr), `${id}: fragment „${fr.slice(0, 40)}”`);
    });
  }
  // SLO-785 (PMC4375240) za reCAPTCHA przy D-027 d: poza rejestrem, tomatillo-v07 ryzyko-wysokie na SUS-301 (B21-D3).
  assert.equal(R.get("SLO-785"), undefined, "SLO-785: źródło niedostępne przy D-027 d");
  for (const t of [...b19.twierdzenia, ...b20.twierdzenia]) if (!nowe.includes(t.id)) assert.equal(R.get(t.id), undefined, `${t.id}: poza zakresem B21`);
  for (const id of ["SUS-324", "SUS-327", "SUS-328", "SUS-329", "SUS-330", "SUS-331", "SUS-337", "SUS-338", "SUS-342"]) assert.ok(!nowe.includes(id), id);
  assert.equal(new Set(rej.map((t) => t.id)).size, rej.length, "ID w rejestrze unikalne");
});

test("B21: ok-zrodlo ze źródłem szczebla 1–3 z rejestru (cytat 1:1), potwierdzone claims i ostrzeżenia", () => {
  for (const [id, o] of Object.entries(OK)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, "ok-zrodlo", id);
    assert.equal(v.cardType, undefined, id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings, o.ostrz, `${id}: requiredWarnings`);
    for (const c of [...v.claims, ...v.requiredWarnings]) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.equal(v.sources.length, o.zrodla.length, `${id}: sources`);
    o.zrodla.forEach((t, i) => { const z = R.get(t).zrodla[0], s = v.sources[i]; const red = id === "red-savoy-cabbage-v03" && i === 1; // B25 (r1-nadwyzka-b21): miejsce i cytat bez przypisu Source, cytat = fragment cytatu z rejestru
      for (const k of ["adres", "odczyt", "szczebel", ...(red ? [] : ["miejsce", "cytat"])]) assert.equal(s[k], z[k], `${id}: ${k} jak w ${t}`); if (red) assert.ok(z.cytat.includes(s.cytat) && !/Source/.test(s.miejsce + s.cytat), `${id}: redakcja B25`); });
    assert.ok(v.sources.some((s) => [1, 2, 3].includes(s.szczebel)), `${id}: szczebel 1–3`);
    assert.ok(nota(id), `${id}: notatka [B21]`);
  }
});

test("B21: ryzyko-wysokie i nie-publikowac jako karta-ostrzeżenie; ostrzeżenia w claims; nic nie znika z claims", () => {
  for (const [st, M] of [["ryzyko-wysokie", RW], ["nie-publikowac", NP]]) for (const [id, o] of Object.entries(M)) {
    const v = V.get(id);
    assert.equal(v.safetyStatus, st, id);
    assert.equal(v.cardType, "warning", id);
    assert.deepEqual(v.claims, o.claims, `${id}: claims`);
    assert.deepEqual(v.requiredWarnings ?? [], o.ostrz, `${id}: requiredWarnings`);
    for (const c of o.ostrz) assert.ok(v.claims.includes(c), `${id}: ${c} w claims`);
    for (const c of v.claims) assert.equal(R.get(c)?.status, "potwierdzone", `${id}: ${c}`);
    assert.ok(nota(id), `${id}: notatka [B21]`);
    if (["watermelon-melon-v07", "garden-herbs-v13"].includes(id)) assert.ok(nota(id).includes("powód, nie źródło karty"), `${id}: procedura C12 tylko jako powód (D-043 P2-3)`);
    if (st === "nie-publikowac") assert.ok(nota(id).includes("2026-11-02-jaratlas-wariant-bez-zrodla") && nota(id).includes("brak sprawdzonego źródła"), `${id}: decyzja właściciela w notatce`);
  }
});

test("B21: przebieg 1, po zmianie, rosehip-rowan-v07 i C12 „zostaje” bez zmiany statusu, z notatką [B21]", () => {
  for (const id of [...P1, ...PZ, ...JUZ, ...Object.keys(ZOST_C12)]) {
    if (!B25.has(id)) assert.equal(V.get(id).safetyStatus, PRZED[id], `${id}: status bez zmian`); // B25: B22 kandydaci → nie-publikowac
    assert.ok(nota(id), `${id}: notatka [B21]`);
  }
  for (const id of PZ) assert.ok(nota(id).includes("B19") || nota(id).includes("B20"), `${id}: odwołanie do raportu`);
  for (const [id, o] of Object.entries(ZOST_C12)) {
    assert.deepEqual(V.get(id).claims, o.claims, `${id}: claims`);
    assert.deepEqual(V.get(id).requiredWarnings ?? [], o.ostrz, `${id}: requiredWarnings`);
    assert.equal(V.get(id).cardType, undefined, id);
  }
  assert.equal(V.get("rosehip-rowan-v07").safetyStatus, "ryzyko-wysokie");
  for (const id of ["tomatillo-v04", "tomatillo-v08"]) assert.ok(V.get(id).requiredWarnings.includes("SUS-301"), `${id}: SUS-301 (D-043 P2-2)`);
});

test("B21: poza polami z listy warianty bez cichych zmian; publication ukryta w całym katalogu", () => {
  assert.deepEqual(Object.keys(SNAP).sort(), Object.keys(POLA).sort());
  for (const [id, keys] of Object.entries(POLA)) if (!B25.has(id)) assert.equal(h(bez(V.get(id), keys)), SNAP[id], `${id}: pola poza ${keys.join(", ")} bez zmian`);
  assert.equal(cat.variants.filter((v) => v.publication !== "ukryta").length, 0, "publication: 0 zmian, wszystko ukryta");
  // D-043 P2-1: reszta katalogu (1350 wariantów spoza porcji i pola najwyższego poziomu poza version) jak w 1.0.13 (4e3dcaa).
  assert.equal(h(cat.variants.filter((v) => !(v.id in POLA) && !B25.has(v.id) && !B27.has(v.id) && !B28.has(v.id) && !B29.has(v.id) && !B31.has(v.id))), "6b2b478e416b", "warianty spoza B21, B25, B27, B28, B29 i B31 bez zmian (B31: przeliczony na f36b7b0, stary 67512035265c; skrót na 1.0.14, 3a2c546; B29: przeliczony, stary a682ddb85307; B28 z (h): stary 5826a2f2a7e9)");
  assert.equal(h(Object.fromEntries(Object.entries(cat).filter(([k]) => !["version", "variants"].includes(k)))), "11240685bbc6", "categories, products, processFamilies bez zmian");
});

// D-027 d: poprawki brzmienia (CZĘŚCIOWO: SLO-780, ACI-876, SUS-325, SUS-326; P3: ACI-878) i liczby krytyczne jak w źródle.
test("B21 (D-027 d): poprawki brzmienia wprowadzone; liczby krytyczne jak w źródle", () => {
  const t = (id) => R.get(id).twierdzenie, e = (id) => R.get(id).twierdzenie_en;
  assert.ok(t("SLO-780").includes("tylko w szybkowarze") && !/mincemeat \(z Clear Jel\)/.test(t("SLO-780")) && e("SLO-780").includes("pressure canner only"), "SLO-780: mincemeat bez Clear Jel, szybkowar");
  assert.ok(!e("ACI-876").includes("packed") && e("ACI-876").includes("1 cup light brown sugar"), "ACI-876 en");
  assert.ok(!/nie owoce/.test(t("SUS-325")) && !/not berries/.test(e("SUS-325")), "SUS-325");
  assert.ok(!/w całości/.test(t("SUS-326")) && !/ whole,/.test(e("SUS-326")) && t("SUS-326").includes("po odcięciu szypułek lub końcówek"), "SUS-326");
  assert.ok(t("ACI-878").includes("według ulotki UCCE"), "ACI-878: atrybucja");
  const m = (id, ...xs) => { for (const x of xs) assert.ok(t(id).includes(x) && e(id).includes(x.replaceAll(",", ".")), `${id}: ${x}`); };
  m("ACI-878", "20 minut", "25 minut", "30 minut"); m("SUS-347", "2,87–3,12", "2,60–4,02"); m("SUS-332", "135°F", "4–6"); m("SUS-326", "110°F", "130–140°F", "6–8");
  m("SUS-325", "4–6°C"); m("SUS-336", "20 minut"); m("SUS-334", "4–24");
  assert.ok(t("ACI-877").includes("1/2 cala") && e("ACI-877").includes("1/2 inch"), "ACI-877: wolna przestrzeń");
  assert.ok(t("ACI-820").includes("1 kg") && t("ACI-820").includes("30 min") && t("ACI-820").includes("1 h"), "ACI-820");
});

// Treść 14 twierdzeń przypięta skrótem [twierdzenie, twierdzenie_en, uproszczenie] (wzór TRESC w tests/b18).
const TRESC = {"ACI-820": "ee63fbd951e0", "SLO-780": "26145123be94", "ACI-875": "a84f871a4d25", "ACI-876": "53c02d8a4daa", "ACI-877": "e7ee3e757260", "ACI-878": "3d999019dda4", "SUS-347": "c8bf7e7eccdc", "SUS-325": "07e01b53b6cf", "SUS-326": "d6b3a2859233", "SUS-332": "1bb03f7a8863", "SUS-333": "36b7365f0077", "SUS-334": "ca92d78dc3a2", "SUS-335": "4ce35bce8d32", "SUS-336": "98837aebc46e"};
test("B21: treść 14 twierdzeń bez cichych zmian", () => {
  assert.deepEqual(Object.keys(TRESC).sort(), Object.values(NOWE).flat().sort());
  for (const [id, x] of Object.entries(TRESC)) { const t = R.get(id); assert.equal(h([t.twierdzenie, t.twierdzenie_en, t.uproszczenie]), x, `${id}: treść`); }
});
