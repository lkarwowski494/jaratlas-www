// Kontrola: ID twierdzenia z kart innej metody przetwarzania (07-jakosc C6, pkt 5).
// Dlaczego: przy zmianie numeru w C4 sed podmienił SLO-289 na SLO-350 (zepsuta żywność po wekowaniu) także w karcie mrożenia
// leafy-greens-v13, a żadna kontrola tego nie złapała: twierdzenie było potwierdzone, liczby się zgadzały.
// Reguła: każde twierdzenie występuje w kartach wariantów jednej metody (catalog: preservationMethod; brak metody = „brak”).
// Twierdzenie użyte w kartach kilku metod musi być na liście WSPOLNE z dozwolonymi metodami; inaczej błąd przy kartach metody mniejszościowej.
// Reguła po prefiksach (SLO-* tylko przy freezer/water-bath) nie złapałaby incydentu: SLO obejmuje i wekowanie, i mrożenie.
// Granica: nie łapie podmiany na twierdzenie tej samej metody ani na twierdzenie użyte tylko w jednej karcie (decyzja Claude, do weta).

/* Twierdzenia wspólne kilku metod, sprawdzone w treści 2026-11-02 (03d6aa7). Nowe wspólne twierdzenie dopisuje tor A z powodem. */
export const WSPOLNE = {
  'ACI-195': ['water-bath', 'freezer', 'refrigerator', 'dry-storage', 'pressure-canning'], // miarka „cup” ≈ 237 ml (NIST): przelicznik niezależny od metody; p33: quince-v07, radish-v09 (lodówka), lemon-v13 (suszenie); p37: karty szybkowaru (fasola w sosie, kukurydza)
  'ACI-509': ['refrigerator', 'water-bath'], // ocet 5%, bez soku z cytryny: reguła ogólna pikli; p33 wymagane ostrzeżenie karty-ostrzeżenia cucumber-v11 (B18-D2)
  'SUS-327': ['water-bath', 'dry-storage'], // kwas parasorbowy w surowej jarzębinie: wymagane ostrzeżenie kart-ostrzeżeń rosehip-rowan-v02/v07 (kąpiel) i v10/v12 (suszenie), p33
  'SUS-337': ['freezer', 'dry-storage', 'refrigerator'], // pomyłki czosnku niedźwiedziego z konwalią i zimowitem: wild-garlic-v07 (mrożenie) i v11 (suszenie), p33; wymagane ostrzeżenie oleju wild-garlic-v09 (lodówka), p35
  'SUS-338': ['freezer', 'dry-storage', 'refrigerator'], // jaja tasiemca lisiego: wild-garlic-v07 (mrożenie) i v11 (suszenie), p33; mycie liści w oleju wild-garlic-v09 (lodówka), p35
  'SZY-054': ['water-bath', 'brak', 'pressure-canning'], // kąpiel wodna tylko dla żywności kwaśnej i według przetestowanego przepisu: karty-ostrzeżenia kąpieli (p33) i white-cabbage-v13; p37: sekcja „tylko szybkowar” pełnych kart szybkowaru
  'ACI-015': ['water-bath', 'refrigerator'], // kwaśna żywność powyżej 1000 stóp: blok wysokości w kartach pikli
  'ACI-174': ['water-bath', 'refrigerator', 'pressure-canning'], // pinta i quart USA w ml; p37: czasy NCHFP szybkowaru też są dla słoików USA
  'ACI-175': ['water-bath', 'refrigerator', 'pressure-canning'], // reguła JarAtlas dla słoików metrycznych; p37: źródło (NCHFP Selecting the Correct Processing Time) dotyczy wszystkich tabel, także szybkowaru
  'ACI-176': ['water-bath', 'refrigerator'], // przeliczenie stóp na metry
  'ACI-018': ['water-bath', 'refrigerator'], // ocet 5% do pikli
  'ACI-209': ['water-bath', 'refrigerator'], // ocet 5–7% (Penn State)
  'ACI-210': ['water-bath', 'refrigerator'], // nie rozcieńczać octu
  'ACI-211': ['water-bath', 'refrigerator'], // reguła JarAtlas: ocet 5% destylowany albo jabłkowy
  'ACI-005': ['water-bath', 'refrigerator'], // żywność niskokwasowa (pH > 4,6): uzasadnienie octu w piklach wekowanych i lodówkowych (p31)
  'ACI-016': ['water-bath', 'refrigerator'], // nie zmieniać proporcji octu, warzyw i wody: pikle wekowane i lodówkowe (p31)
  'ACI-017': ['water-bath', 'refrigerator'], // równomierny poziom kwasu w całym produkcie: pikle wekowane i lodówkowe (p31)
  'SLO-222': ['water-bath', 'freezer'], // wolna przestrzeń przy mrożeniu soku: karty soków z sokownika mają akapit o mrożeniu
  'OLE-029': ['water-bath', 'freezer'], // warzywa i zioła w oleju: zamrożenie najbezpieczniejsze (papryka w oleju bell-pepper-v09 i karty mrożenia garlic-v09/v10, p28)
  'ACI-125': ['refrigerator', 'dry-storage'], // imbir niskokwasowy: wymagane ostrzeżenie kart-ostrzeżeń imbiru lodówkowych (v11, v13) i kandyzowanego (v09, suszenie), p36
  'ACI-512': ['refrigerator', 'water-bath'], // czosnek w occie w lodówce zamiast wekowania: garlic-v07 (lodówka) i karty-ostrzeżenia garlic-v04/v06/v08 (kąpiel), p36
  'SLO-023': ['refrigerator', 'dry-storage', 'freezer'], // pH powyżej 4,6 a C. botulinum: wymagane ostrzeżenie kart-ostrzeżeń imbiru (lodówka) i kandyzowanych dyni/imbiru (suszenie), p36
  'SLO-482': ['refrigerator', 'dry-storage'], // imbir/sok imbirowy bez przepisu kąpieli (Ask Extension): karty-ostrzeżenia imbiru lodówkowe i kandyzowanego, p36
  'OLE-057': ['freezer', 'refrigerator', 'cool-storage'], // lodówka 40 °F (4 °C) lub niżej, zamrażarka 0 °F: karty mrożenia i karty oleju w lodówce (B24-Q1, p36)
  'ACI-006': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'ACI-026': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'ACI-066': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'ACI-086': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'ACI-107': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'ACI-156': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'SLO-054': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'SLO-068': ['refrigerator', 'water-bath'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'SLO-024': ['refrigerator', 'dry-storage'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'SLO-025': ['refrigerator', 'dry-storage'], // p36: karty-ostrzeżenia słodkich przetworów lodówkowych (requiredWarnings albo uzasadnienie „Why”) obok kart innej metody
  'OLE-024': ['brak', 'freezer', 'refrigerator', 'water-bath'], // ogniska jadu kiełbasianego z warzyw w oleju: karty-ostrzeżenia bakłażana eggplant-v04 (kąpiel) i v02 (lodówka), p36; p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 (reguła ogólna metody)
  'OLE-025': ['water-bath', 'refrigerator'], // Włochy 1993, bakłażan w oleju (MMWR): eggplant-v04 i v02, p36
  'OLE-028': ['brak', 'freezer', 'refrigerator', 'water-bath'], // brak zwalidowanych procesów dla warzyw w oleju w domu: eggplant-v04 (kąpiel) i karty oleju B27 (lodówka), p36; p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 (reguła ogólna metody)
  'OLE-082': ['refrigerator', 'cool-storage'], // tłuszcz z wilgotnymi dodatkami: karty smalcu B27 (lodówka i chłodne miejsce), p36
  'OLE-084': ['refrigerator', 'cool-storage'], // karty smalcu i tłuszczów B27, p36
  'OLE-085': ['refrigerator', 'cool-storage'], // karty smalcu i tłuszczów B27, p36
  'ACI-159': ['refrigerator', 'water-bath'], // pH grzybów: karty-ostrzeżenia pieczarek marynowanych (lodówka i kąpiel), p36
  'OLE-001': ['freezer', 'water-bath', 'refrigerator'], // czosnek w oleju nie w temperaturze pokojowej: karty mrożenia czosnku i wymagane ostrzeżenie karty-ostrzeżenia cucumber-v19 (kąpiel), p36
  'SUS-141': ['dry-storage', 'water-bath', 'brak'], // p36: karty-ostrzeżenia grzybów leśnych w occie (kąpiel) i w słoikach (metoda nieustalona) obok kart suszenia
  'SUS-335': ['dry-storage', 'water-bath', 'brak'], // p36: karty-ostrzeżenia grzybów leśnych w occie (kąpiel) i w słoikach (metoda nieustalona) obok kart suszenia
  'SUS-336': ['dry-storage', 'water-bath', 'brak'], // p36: karty-ostrzeżenia grzybów leśnych w occie (kąpiel) i w słoikach (metoda nieustalona) obok kart suszenia
  'ACI-106': ['water-bath', 'refrigerator'], // pH czosnku: karty-ostrzeżenia czosnku w occie (kąpiel) i kiszonego/w miodzie/pasty (lodówka), p36
  'ACI-441': ['water-bath', 'freezer'], // masło dyniowe a wekowanie (NCHFP): karty-ostrzeżenia dyni w occie/chutneya (kąpiel) i masła dyniowego (mrożenie), p36
  'ACI-445': ['water-bath', 'freezer'], // dynia: karty-ostrzeżenia dyni w occie (kąpiel) i dżemu dyniowego (mrożenie), p36
  'MIE-023': ['refrigerator', 'cool-storage'], // kiełbasy fermentowane: karty-ostrzeżenia dojrzewających (chłodne miejsce) i smarownych (lodówka), p36
  'MIE-025': ['refrigerator', 'cool-storage'], // jw., p36
  'MIE-011': ['refrigerator', 'cool-storage'], // za dużo azotanu/azotynu toksyczne (UGA): wymagane ostrzeżenie kart-ostrzeżeń wędlin lodówkowych i szynki dojrzewającej pork-loin-ham-v11 (chłodne miejsce), p37
  'SLO-045': ['dry-storage', 'freezer'], // dynia niskokwasowa: karty-ostrzeżenia dyni kandyzowanej (suszenie) i dżemu/masła dyniowego (mrożenie), p36
  // p37: blok po wekowaniu (strony ogólne NCHFP: Cooling Jars and Testing Jar Seals, Storing, Identifying and Handling Spoiled Canned Food, Recommended Jars and Lids)
  // dotyczy każdego wekowania, więc pełne karty szybkowaru używają tych samych zdań co karty kąpieli wodnej (test T1-szybkowar)
  'SLO-190': ['water-bath', 'pressure-canning'], 'SLO-191': ['water-bath', 'pressure-canning'], 'SLO-196': ['water-bath', 'pressure-canning'],
  'SLO-197': ['water-bath', 'pressure-canning'], 'SLO-198': ['water-bath', 'pressure-canning'], 'SLO-210': ['water-bath', 'pressure-canning'],
  'SLO-212': ['water-bath', 'pressure-canning'], 'SLO-223': ['water-bath', 'pressure-canning'], 'SLO-350': ['water-bath', 'pressure-canning'],
  'SLO-322': ['water-bath', 'pressure-canning'], // reguła JarAtlas: otwarty słoik domowego przetworu wekowanego 1 tydzień w lodówce (P-13), niezależna od metody wekowania
  'ACI-179': ['water-bath', 'pressure-canning'], // reguła JarAtlas: tabela tylko do pinty → słoik do 473 ml; p37 kukurydza kremowa (corn-v08, tylko pint)
  'SZY-004': ['pressure-canning', 'brak'], // przetrwalniki trudno zniszczyć we wrzątku: pełne karty szybkowaru (p37) i karty-ostrzeżenia metody nieustalonej
  'SZY-009': ['pressure-canning', 'brak'], // tyndalizacja zawodna: wymagane ostrzeżenie kart szybkowaru (dawna tyndalizacja w nazwie v0, p37) i karty-ostrzeżenia metody nieustalonej
  'SZY-001': ['brak', 'none', 'pressure-canning', 'refrigerator'], // szybkowar dla żywności niskokwasowej: sea-fish-v14 (szybkowar) i karty grzybów w słoikach (metoda nieustalona), p36; p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 (reguła ogólna metody)
  'SZY-006': ['brak', 'low-temp-pasteurization', 'none', 'pressure-canning'], // jw., p36; p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 (reguła ogólna metody)
  'SZY-013': ['pressure-canning', 'brak'], // jw., p36
  'ACI-030': ['water-bath', 'brak'], // NCHFP: nie wekować grzybów dzikich: karty-ostrzeżenia grzybów w occie (kąpiel) i w słoikach (metoda nieustalona), p36
  'SUS-035': ['dry-storage', 'brak', 'water-bath', 'freezer'], // toksyny grzybów: karty suszenia grzybów (p28) i karta-ostrzeżenie kapusty z grzybami (white-cabbage-v13, metoda nieustalona)
  'OLE-002': ['water-bath', 'freezer', 'refrigerator', 'cool-storage'], // czosnek w oleju: lodówka 40°F, 4 dni (NCHFP): ostrzeżenie papryki w oleju (bell-pepper-v09), karta mrożenia garlic-v17 (p24) i wymagane ostrzeżenie oleju szczypiorkowego leek-chives-v08 (p32); p37: wymagane ostrzeżenie oliwy rozmarynowo-czosnkowej garden-herbs-v06 (cool-storage w katalogu, karta: lodówka)
  'OLE-019': ['freezer', 'refrigerator', 'cool-storage'], // oleje z niezakwaszonymi ziołami nie w temperaturze pokojowej: karty mrożenia garlic-v09/v10 i wymagane ostrzeżenie leek-chives-v08 (p32); p37: wymagane ostrzeżenie garden-herbs-v06
  'OLE-020': ['dry-storage', 'refrigerator', 'cool-storage'], // suszone zioła nie zabezpieczają oleju: susz czosnku garlic-v15 i olej szczypiorkowy leek-chives-v08 (p32); p37: olej garden-herbs-v06
  'OLE-023': ['freezer', 'refrigerator', 'cool-storage'], // warunki toksyny botulinowej w oleju: karty mrożenia ziół/warzyw w oleju i olej lodówkowy leek-chives-v08 (p32); p37: olej garden-herbs-v06
  'OLE-027': ['brak', 'cool-storage', 'freezer', 'refrigerator', 'water-bath'], // zagrożenia nie widać, nie czuć: karty mrożenia w oleju, olej lodówkowy leek-chives-v08 (p32) i wymagane ostrzeżenie karty-ostrzeżenia eggplant-v04 (p34, B21; zdanie niezależne od metody); p37: olej garden-herbs-v06; p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 (reguła ogólna metody)
  // p37 (autor C): oliwa rozmarynowo-czosnkowa garden-herbs-v06 ma w katalogu metodę cool-storage, a karta idzie za regułą B24-R1 (lodówka, następny dzień) jak oleje lodówkowe leek-chives-v08/wild-garlic-v09
  'OLE-014': ['freezer', 'cool-storage'], // roztworu kwasu cytrynowego nie zastępować octem ani sokiem z cytryny: pasty z olejem (mrożenie) i olej garden-herbs-v06 (p37)
  'OLE-018': ['refrigerator', 'cool-storage'], // metoda UGA z olejem 180 °F, lodówka: oleje lodówkowe i garden-herbs-v06 (p37)
  'OLE-058': ['refrigerator', 'cool-storage'], // UGA: sterylizacja pojemników na oleje smakowe: oleje lodówkowe i garden-herbs-v06 (p37)
  'OLE-076': ['refrigerator', 'cool-storage'], // BfR: nie robić olejów ziołowych na zapas: oleje lodówkowe (B24) i garden-herbs-v06 (p37)
  'OLE-077': ['refrigerator', 'cool-storage'], // BfR: lodówka, zjeść najpóźniej następnego dnia (B24-R1): oleje lodówkowe i garden-herbs-v06 (p37)
  'OLE-087': ['refrigerator', 'cool-storage'], // BfR 2016: nie przechowywać domowych ziół w oleju: oleje lodówkowe i garden-herbs-v06 (p37)
  'ACI-136': ['water-bath', 'refrigerator'], // pH truskawek (FDA): syrop lodówkowy strawberry-v09 i dżem z rabarbarem strawberry-v12 (kąpiel), p37; zdanie niezależne od metody
  'ACI-450': ['water-bath', 'dry-storage'], // Ask Extension: szypułki, liście i kora bzu trujące: karta-ostrzeżenie elderberry-elderflower-v01 (kąpiel) i suszone kwiaty bzu elderberry-elderflower-v10 (p37)
  'SLO-489': ['refrigerator', 'dry-storage'], // NDSU: kwiaty rozpoznać przed jedzeniem: karty-ostrzeżenia syropów z kwiatów (lodówka) i suszone kwiaty elderberry-elderflower-v10, foraged-blossoms-v13 (p37)
  'NAP-041': ['refrigerator', 'low-temp-pasteurization'], // OSU: ocet z pleśnią lub oznakami fermentacji wyrzucić bez próbowania: octy smakowe (lodówka) i reguła JarAtlas dla domowego octu jabłkowego artisanal-vinegars-v01 (p37)
  'ACI-947': ['water-bath', 'refrigerator'], // NCHFP Using Boiling Water Canners (p35): karty kąpieli i opcja wekowania w kartach kiszonek lodówkowych cucumber-v03, white-cabbage-v03
  'ACI-953': ['water-bath', 'refrigerator'], // NCHFP Using Boiling Water Canners (p35): karty kąpieli i opcja wekowania w kartach kiszonek lodówkowych cucumber-v03, white-cabbage-v03
  'ACI-954': ['water-bath', 'refrigerator'], // NCHFP Using Boiling Water Canners (p35): karty kąpieli i opcja wekowania w kartach kiszonek lodówkowych cucumber-v03, white-cabbage-v03
  'ACI-955': ['water-bath', 'refrigerator'], // NCHFP Using Boiling Water Canners (p35): karty kąpieli i opcja wekowania w kartach kiszonek lodówkowych cucumber-v03, white-cabbage-v03
  'MIE-117': ['freezer', 'refrigerator'], // FDA minimalne temperatury wewnętrzne: karty mrożenia mięsa i kiełbasy świeże w lodówce (p35)
  'SLO-408': ['freezer', 'refrigerator'], // NCHFP/FDA: rozmrażanie i zasada 2 godzin: karty mrożenia i karty lodówkowe mięsa, ryb i jaj (p35)
  'MIE-110': ['dry-storage', 'refrigerator'], // NCHFP: mięso czerwone w lodówce 3–5 dni: karty suszenia mięsa i reguła JarAtlas dla kiełbas świeżych smoked-cooked-sausages-v10/v13/v14 (p35)
  'SLO-433': ['freezer', 'refrigerator'], // karty mrożenia i gravlax sea-fish-v01 w lodówce (p35)
  'MLE-021': ['refrigerator', 'dry-storage'], // fermentowane mleko pH 4,6 lub niżej w 48 h: karta-ostrzeżenie kashk yogurt-skyr-v11 (suszenie) i jogurty lodówkowe yogurt-skyr-v01/v02/v04 (p35)
  'SLO-036': ['water-bath', 'dry-storage', 'refrigerator'], // miód a niemowlęta poniżej 12 miesięcy (FDA): mus dla niemowląt peach-nectarine-v12 (p29) i skóra z mango z miodem mango-papaya-v10 (p30, D4-7-02)
  'MIE-033': ['dry-storage', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'MIE-043': ['dry-storage', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'MIE-061': ['dry-storage', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'MIE-067': ['dry-storage', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'MIE-070': ['dry-storage', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'OLE-016': ['brak', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'OLE-026': ['brak', 'freezer'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'OLE-041': ['brak', 'freezer'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'OLE-048': ['freezer', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SLO-061': ['refrigerator', 'water-bath'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SLO-062': ['refrigerator', 'water-bath'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-007': ['brak', 'low-temp-pasteurization', 'pressure-canning'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-014': ['brak', 'refrigerator'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-015': ['brak', 'water-bath'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-022': ['brak', 'pressure-canning'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-024': ['brak', 'pressure-canning'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-025': ['brak', 'pressure-canning'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
  'SZY-026': ['brak', 'water-bath'], // p38: wymagane ostrzeżenie albo kontekst kart-ostrzeżeń B29 przy kilku metodach (twierdzenie niezależne od metody)
};

const ZNACZNIK = /\[T:([^\]]*)\]/g;
const idTwierdzen = (karta) => [...new Set([...JSON.stringify(karta).matchAll(ZNACZNIK)].flatMap((m) => m[1].split(',').map((s) => s.trim())).filter((x) => x && x !== '-'))];

/** karty: [{ lang, id, karta }] (tools/karty-tresci.mjs → karty()), katalog: catalog-seed → lista błędów (pusta = zgodne). */
export function twierdzeniaInnejMetody(karty, katalog, wspolne = WSPOLNE) {
  const V = new Map(katalog.variants.map((v) => [v.id, v]));
  const uzycia = new Map(); // ID → metoda → Set(wariant)
  for (const { id, karta } of karty) {
    const metoda = V.get(id)?.preservationMethod ?? 'brak';
    for (const t of idTwierdzen(karta)) {
      const m = uzycia.get(t) ?? new Map(); uzycia.set(t, m);
      (m.get(metoda) ?? m.set(metoda, new Set()).get(metoda)).add(id);
    }
  }
  const bledy = [];
  for (const [t, m] of [...uzycia].sort(([a], [b]) => a.localeCompare(b))) {
    if (m.size < 2 && !wspolne[t]) continue;
    const dozwolone = wspolne[t];
    if (dozwolone) {
      for (const [metoda, warianty] of m) if (!dozwolone.includes(metoda)) for (const w of [...warianty].sort()) bledy.push(`${w}: twierdzenie ${t} w karcie metody ${metoda}; lista wspólnych dopuszcza tylko: ${dozwolone.join(', ')}`);
      continue;
    }
    const max = Math.max(...[...m.values()].map((s) => s.size));
    const glowne = [...m].filter(([, s]) => s.size === max).map(([k]) => k);
    for (const [metoda, warianty] of m) {
      if (glowne.length === 1 && metoda === glowne[0]) continue;
      const inne = [...m].filter(([k]) => k !== metoda).map(([k, s]) => `${k} (${s.size})`).join(', ');
      for (const w of [...warianty].sort()) bledy.push(`${w}: twierdzenie ${t} w karcie metody ${metoda}, a w kartach innych metod: ${inne}; zły numer ID albo brak wpisu w WSPOLNE (tools/twierdzenia-metody.mjs)`);
    }
  }
  return bledy;
}
