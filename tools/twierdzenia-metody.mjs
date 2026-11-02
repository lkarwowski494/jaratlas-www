// Kontrola: ID twierdzenia z kart innej metody przetwarzania (07-jakosc C6, pkt 5).
// Dlaczego: przy zmianie numeru w C4 sed podmienił SLO-289 na SLO-350 (zepsuta żywność po wekowaniu) także w karcie mrożenia
// leafy-greens-v13, a żadna kontrola tego nie złapała: twierdzenie było potwierdzone, liczby się zgadzały.
// Reguła: każde twierdzenie występuje w kartach wariantów jednej metody (catalog: preservationMethod; brak metody = „brak”).
// Twierdzenie użyte w kartach kilku metod musi być na liście WSPOLNE z dozwolonymi metodami; inaczej błąd przy kartach metody mniejszościowej.
// Reguła po prefiksach (SLO-* tylko przy freezer/water-bath) nie złapałaby incydentu: SLO obejmuje i wekowanie, i mrożenie.
// Granica: nie łapie podmiany na twierdzenie tej samej metody ani na twierdzenie użyte tylko w jednej karcie (decyzja Claude, do weta).

/* Twierdzenia wspólne kilku metod, sprawdzone w treści 2026-11-02 (03d6aa7). Nowe wspólne twierdzenie dopisuje tor A z powodem. */
export const WSPOLNE = {
  'ACI-195': ['water-bath', 'freezer'], // miarka „cup” ≈ 237 ml (NIST): przelicznik w przepisach obu metod
  'ACI-015': ['water-bath', 'refrigerator'], // kwaśna żywność powyżej 1000 stóp: blok wysokości w kartach pikli
  'ACI-174': ['water-bath', 'refrigerator'], // pinta i quart USA w ml
  'ACI-175': ['water-bath', 'refrigerator'], // reguła JarAtlas dla słoików metrycznych
  'ACI-176': ['water-bath', 'refrigerator'], // przeliczenie stóp na metry
  'ACI-018': ['water-bath', 'refrigerator'], // ocet 5% do pikli
  'ACI-209': ['water-bath', 'refrigerator'], // ocet 5–7% (Penn State)
  'ACI-210': ['water-bath', 'refrigerator'], // nie rozcieńczać octu
  'ACI-211': ['water-bath', 'refrigerator'], // reguła JarAtlas: ocet 5% destylowany albo jabłkowy
  'SLO-222': ['water-bath', 'freezer'], // wolna przestrzeń przy mrożeniu soku: karty soków z sokownika mają akapit o mrożeniu
  'OLE-029': ['water-bath', 'freezer'], // warzywa i zioła w oleju: zamrożenie najbezpieczniejsze (papryka w oleju bell-pepper-v09 i karty mrożenia garlic-v09/v10, p28)
  'SUS-035': ['dry-storage', 'brak'], // toksyny grzybów: karty suszenia grzybów (p28) i karta-ostrzeżenie kapusty z grzybami (white-cabbage-v13, metoda nieustalona)
  'OLE-002': ['water-bath', 'freezer'], // czosnek w oleju: lodówka 40°F, 4 dni (NCHFP): ostrzeżenie papryki w oleju (bell-pepper-v09) i karta mrożenia garlic-v17 (p24)
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
