// B32 (06-tresci, tor B): warianty zmienione albo opisane notatką [B32]; ich pilnuje tests/b32-katalog.test.mjs.
// Starsze testy porcji (B21–B31) wyłączają je ze skrótów „reszty katalogu” (przeliczonych na 7b422b9).
export const B32 = new Set(["pork-loin-ham-v01","pork-belly-jowl-v09","white-cabbage-v14","cultivated-mushrooms-v10","vine-leaves-greens-v09","beans-soy-v08","green-beans-v08","peas-chickpeas-v07","peas-chickpeas-v08","beans-soy-v09","carrot-v09","zucchini-v15","elderberry-elderflower-v10","artisanal-vinegars-v01","garden-herbs-v06","green-cherry-tomato-v14","foraged-blossoms-v13","garden-herbs-v01","red-savoy-cabbage-v09","vine-leaves-greens-v08","beetroot-v09","beans-soy-v07","pork-shoulder-neck-v11","beef-veal-v05","beef-veal-v07","offal-pates-v08","sea-fish-v12","pork-loin-ham-v13","european-mixed-veg-v09","asian-american-mix-v12","eggs-v07","fresh-brined-cheese-v07","asparagus-v07","balkan-oriental-mix-v08","balkan-oriental-mix-v09","olives-v09","chili-pepper-v14","onion-v11","daikon-black-radish-v09","brussels-kohlrabi-v11","strawberry-v12"]);
// requiredWarnings zmienione przez B32 (przypięte w testach B28 i B29 zamiast reguły tamtych porcji; decyzja do weta B32-D5).
export const B32_RW = {
  "pork-loin-ham-v01": ["MIE-161", "MIE-011"],
  "pork-belly-jowl-v09": ["MIE-156", "OLE-047"],
  "white-cabbage-v14": ["SZY-006", "SZY-007", "SZY-017", "SZY-025"],
  "cultivated-mushrooms-v10": ["SZY-006", "SZY-014", "OLE-028", "OLE-024"],
};
// claims dopisane przez B32 (do odjęcia przy porównaniu ze stanem sprzed B32).
export const B32_CLAIMS = {
  "pork-belly-jowl-v09": ["MIE-156"], "cultivated-mushrooms-v10": ["OLE-028", "OLE-024"], "vine-leaves-greens-v09": ["SLO-880"],
  "foraged-blossoms-v13": ["SLO-489"], "elderberry-elderflower-v10": ["ACI-450"], "garden-herbs-v01": ["OLE-054", "SLO-303"], "garden-herbs-v06": ["OLE-002", "OLE-019", "OLE-077"],
};
