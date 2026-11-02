// B32 (06-tresci, tor B): propozycje katalogowe E3 p37 §5 i p38 §5, zmiany po id. Jednorazowy, idempotentny.
// Decyzja: 2026-11-02-jaratlas-b32-katalog (decyzja Claude, do weta). publication bez zmian.
import { readFileSync, writeFileSync } from "node:fs";
const P = "catalog/catalog-seed.json";
const cat = JSON.parse(readFileSync(P, "utf8"));
const D = "(2026-11-02-jaratlas-b32-katalog)";
const V = new Map(cat.variants.map((v) => [v.id, v]));
const dodaj = (v, ids) => { for (const c of ids) if (!v.claims.includes(c)) v.claims.push(c); };
const nota = (id, t) => { const v = V.get(id); v.notes = (v.notes ?? []).filter((n) => !n.startsWith("[B32]")); v.notes.push(`[B32] ${t} ${D}`); };
const RES = "potrzebny research";

// Przyjęte: requiredWarnings
let v = V.get("pork-loin-ham-v01"); v.requiredWarnings = ["MIE-161", "MIE-011"];
nota("pork-loin-ham-v01", "Przyjęte (E3 p37 V1 P2): ostrzeżenie MIE-021 (mięso mielone 160°F) → MIE-161 (OSU: szynka wędzona do 142°F wymaga dalszego gotowania; brak temperatury końcowej dla szynki domowej). MIE-021 zostaje w claims jako kontekst. Karta en dopasowana (B32-D2).");
v = V.get("pork-belly-jowl-v09"); dodaj(v, ["MIE-156"]); v.requiredWarnings = ["MIE-156", "OLE-047"];
nota("pork-belly-jowl-v09", "Przyjęte (E3 p37 V1 P2): ostrzeżenie MIE-021 (mięso mielone) → MIE-156 (PNW 784: boczek peklowany ugotować albo uwędzić na ciepło do 160°F wewnątrz). MIE-021 zostaje w claims. Karta en dopasowana (B32-D2).");
v = V.get("white-cabbage-v14"); v.requiredWarnings = ["SZY-006", "SZY-007", "SZY-017", "SZY-025"];
nota("white-cabbage-v14", "Przyjęte (E3 p38): SZY-024 (brokuł, kalafior) usunięte z requiredWarnings; kapustę obejmuje SZY-025. SZY-024 zostaje w claims. SZY-017 zostaje do researchu (B32-D3). Karta en dopasowana.");
v = V.get("cultivated-mushrooms-v10"); dodaj(v, ["OLE-028", "OLE-024"]); v.requiredWarnings = ["SZY-006", "SZY-014", "OLE-028", "OLE-024"];
nota("cultivated-mushrooms-v10", "Przyjęte (E3 p38): dodane ostrzeżenia olejowe OLE-028 (brak zwalidowanych procesów dla domowych warzyw w oleju) i OLE-024 (grzyby w ogniskach jadu kiełbasianego z warzyw w oleju). Karta en dopasowana.");
v = V.get("vine-leaves-greens-v09"); v.safetyStatus = "nie-publikowac"; v.cardType = "warning"; dodaj(v, ["SLO-880"]); v.requiredWarnings = ["SLO-880"];
nota("vine-leaves-greens-v09", "Przyjęte (E3 p37 §4a, B32-D1): ok-zrodlo → nie-publikowac, karta-ostrzeżenie. CDC zaleca nie jeść surowej rukwi wodnej (Fasciola, SLO-880); wariant to surowa pasta. Ostrzeżenie SLO-880; OLE-043 (termin w lodówce) poza ostrzeżeniami (reguła B28-D2 bez terminów). Wariant z obróbką cieplną: brak źródła, nie dodany. Karty en brak (tor A).");
v = V.get("foraged-blossoms-v13"); dodaj(v, ["SLO-489"]); v.requiredWarnings = ["SLO-489"];
nota("foraged-blossoms-v13", "Przyjęte (E3 p37, propozycja autora C): ostrzeżenie SLO-489 (NDSU: rozpoznać kwiat przed jedzeniem). Zdanie przeniesione z sekcji Safety karty en do ostrzeżeń bez zmiany brzmienia.");
v = V.get("elderberry-elderflower-v10"); v.name = { ...v.name, pl: "suszone kwiaty czarnego bzu" }; dodaj(v, ["ACI-450"]); v.requiredWarnings = ["ACI-450"];
nota("elderberry-elderflower-v10", "Przyjęte (E3 p37): nazwa „suszone kwiaty bzu” → „suszone kwiaty czarnego bzu” (SUS-422, karta: tylko bez czarny); ostrzeżenie ACI-450 (niedojrzałe owoce i inne części rośliny niebezpieczne). Zdanie przeniesione na karcie en do ostrzeżeń bez zmiany brzmienia. Slug en bez zmian.");
v = V.get("garden-herbs-v01"); dodaj(v, ["OLE-054", "SLO-303"]); v.requiredWarnings = ["OLE-043", "OLE-054", "SLO-303"];
nota("garden-herbs-v01", "Przyjęte (E3 p37, propozycja autora C): ostrzeżenia OLE-054 (pesto nigdy w temperaturze pokojowej) i SLO-303 (rozmrożone pesto: reguła ostrożna). Zdania przeniesione z sekcji Safety karty en do ostrzeżeń bez zmiany brzmienia.");
// Przyjęte: metoda, notes
v = V.get("garden-herbs-v06"); v.preservationMethod = "refrigerator"; dodaj(v, ["OLE-002", "OLE-019", "OLE-077"]);
v.notes = v.notes.map((n) => n.replace("Bez zakwaszenia: lodówka do 4 dni.", "Bez zakwaszenia: lodówka, zjeść najpóźniej następnego dnia (OLE-077, BfR; NCHFP dla czosnku w oleju do 4 dni, OLE-002)."));
nota("garden-herbs-v06", "Przyjęte (E3 p37 §4h): preservationMethod cool-storage → refrigerator (karta en: metoda UGA bez zakwaszenia, lodówka, zjeść następnego dnia, OLE-077); notes poprawione; OLE-002 i OLE-019 (już w requiredWarnings) dopisane do claims, także OLE-077.");
nota("green-cherry-tomato-v14", "Przyjęte (E3 p37): DO USTALENIA zamknięte: karta stosuje przepis NCHFP na pomidory całe lub połówki bez zmian, z obieraniem i dodatkiem kwasu (ACI-960); bez wersji ze skórką.");
// Przyjęte: nazwy (name.pl; slugi en bez zmian, slugów pl brak)
const NAZWY = {
  "beans-soy-v08": ["fasola z suchych nasion w sosie pomidorowym (szybkowar)", "E3 p37 V2a P2: przepis NCHFP Beans Dry with Tomato or Molasses Sauce, nie baked beans; notes [ACI] poprawione."],
  "green-beans-v08": ["konserwowa w zalewie (szybkowar)", "E3 p37: „w solance” → „w zalewie” (wekowanie w szybkowarze, nie kiszenie)."],
  "peas-chickpeas-v07": ["zielony groszek w zalewie (szybkowar)", "E3 p37: „w solance” → „w zalewie”."],
  "peas-chickpeas-v08": ["ciecierzyca w zalewie", "E3 p37: „w solance” → „w zalewie”."],
  "beans-soy-v09": ["czerwona i biała fasola w zalewie", "E3 p37: „w solance” → „w zalewie”."],
  "carrot-v09": ["marchewka konserwowa w kostkę w zalewie", "E3 p37: „w solance” → „w zalewie”."],
  "zucchini-v15": ["pomidory z cukinią (szybkowar)", "E3 p37: nazwa zgodna z przetestowanym wyjątkiem SZY-027 (przewaga pomidorów)."],
  "artisanal-vinegars-v01": ["domowy ocet jabłkowy (matka octowa odfiltrowana)", "E3 p37: przetestowana metoda usuwa matkę filtrowaniem (NAP-093); karta en nie podaje metody z matką."],
};
for (const [id, [n, t]] of Object.entries(NAZWY)) { const x = V.get(id); x.name = { ...x.name, pl: n }; nota(id, `Przyjęte: name.pl → „${n}”. ${t} Slug en bez zmian.`); }
v = V.get("beans-soy-v08"); v.notes = v.notes.map((n) => n.replace("NCHFP Beans, Baked / Beans Dry with Tomato or Molasses", "NCHFP Beans Dry with Tomato or Molasses Sauce"));
// Odłożone do researchu / odrzucone (pola bezpieczeństwa bez zmian)
for (const id of ["red-savoy-cabbage-v09", "vine-leaves-greens-v08", "beetroot-v09", "beans-soy-v07", "pork-shoulder-neck-v11", "beef-veal-v05", "beef-veal-v07", "offal-pates-v08", "sea-fish-v12"])
  nota(id, `Odłożone (E3 p38, B32-D3): SZY-017 (zupy) zostaje do czasu twierdzenia o daniach mieszanych; usunięcie osłabiłoby ostrzeżenie o zagęstnikach, ryżu i mące. ${RES}: twierdzenie szczebla 1–3 o wekowaniu dań mieszanych i zagęstników poza zupami.`);
nota("pork-loin-ham-v13", `Odłożone (E3 p38): SZY-013 zostaje do czasu twierdzenia o żelatynie i galarecie. ${RES}: dodatek żelatyny w wekowaniu mięsa (szybkowar).`);
nota("european-mixed-veg-v09", "Odrzucone (E3 p38): SZY-026 zostaje; skład leczo bez źródła, ostrzeżenie o cukinii to wariant ostrożniejszy (B32-D4).");
nota("asian-american-mix-v12", `Odłożone (E3 p38): SZY-025 zostaje; SZY-022 (wyłączenia Mixed Vegetables) w claims jako kandydat. ${RES}: pędy bambusa i kiełki w wekowaniu domowym.`);
nota("eggs-v07", `Odłożone (E3 p38, B32-D4): MIE-083 (jaja marynowane) zostaje do czasu twierdzenia o jajach w oleju. ${RES}: jaja w oleju, ryzyko i przechowywanie.`);
nota("fresh-brined-cheese-v07", `Odłożone (E3 p38, B32-D4): MLE-043 (queso fresco) zostaje do czasu twierdzenia o serach w oleju. ${RES}: ser świeży w oleju, Listeria.`);
for (const id of ["asparagus-v07", "balkan-oriental-mix-v08", "balkan-oriental-mix-v09", "olives-v09"])
  nota(id, "Odrzucone (E3 p38, B32-D4): OLE-046 (ANSES: domowe konserwy warzywne, m.in. papryka i oliwki) zostaje; wyrób w słoiku pod olejem, usunięcie osłabiłoby ostrzeżenie.");
for (const id of ["chili-pepper-v14", "onion-v11", "daikon-black-radish-v09"])
  nota(id, `Odłożone (E3 p38): SLO-037 (czosnek w miodzie) zostaje jako najbliższe twierdzenie. ${RES}: warzywa inne niż czosnek w miodzie (kandydat SLO-905–949, nie dodany).`);
nota("brussels-kohlrabi-v11", `Odłożone (E3 p38): SZY-025 (kalarepa niewekowalna) zostaje, wariant ostrożniejszy wobec sprzeczności w artykule Penn State. ${RES}: kalarepa w źródle szczebla 1.`);
nota("strawberry-v12", "Odrzucone (E3 p37, propozycja autora C): ACI-733 to zalecenie jakości (zużyć w ciągu roku), nie ostrzeżenie bezpieczeństwa; reguła B28-D2 bez terminów przechowywania w ostrzeżeniach.");
cat.version = "1.0.20";
writeFileSync(P, JSON.stringify(cat, null, 1) + "\n");
console.log("B32: zapisano", P, cat.version);
