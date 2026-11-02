// R1 (ADR 0008): twierdzenia ze źródeł prywatnych (kupionych). Nazwy w testach są zmyślone; prawdziwa lista żyje tylko w repo prywatnym.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { sprawdzRejestr } from '../tools/kontrole-tresci.mjs';
import { validateCatalog } from '../tools/validate-catalog.mjs';
import { sprawdzZrodloPrywatne, skrotRekordu, normalizuj, szukajNazw, sprawdzSpojnosc, sprawdzCatalogBezPrywatnych, main } from '../tools/zrodla-prywatne.mjs';

const REKORD = { twierdzenie: 'TST-001', zrodlo: 'ZP-01', miejsce: 'plik.txt:L10-L12', cytatWeryfikacji: 'krótki fragment', sol: '0123456789abcdef0123456789abcdef', szczebel: 2 };
const zrPryw = (o = {}) => ({ typ: 'prywatne', ref: 'PRV-0001', szczebel: 2, odczyt: '2026-11-03', weryfikacja: 'odczyt pliku + grep (repo prywatne)', skrot: skrotRekordu(REKORD), ...o });
const tw = (zr, o = {}) => ({ id: 'TST-001', twierdzenie: 'Opis własnymi słowami: 1 cm wolnej przestrzeni.', status: 'potwierdzone', krytyczne: false, zrodla: zr, ...o });

test('wpis prywatny przechodzi bez adresu i cytatu, gdy ma wymagane pola', () => {
  assert.deepEqual(sprawdzZrodloPrywatne(zrPryw()), []);
  assert.deepEqual(sprawdzRejestr([tw([zrPryw()])]), []);
});

test('wpis prywatny bez wymaganych pól: błąd w rejestrze', () => {
  for (const brak of ['ref', 'szczebel', 'odczyt', 'weryfikacja', 'skrot']) {
    const z = zrPryw(); delete z[brak];
    assert.ok(sprawdzRejestr([tw([z])]).some((b) => b.includes('TST-001') && b.includes('prywatne')), brak);
  }
  assert.ok(sprawdzRejestr([tw([zrPryw({ ref: 'X-1' })])]).length);
  assert.ok(sprawdzRejestr([tw([zrPryw({ skrot: 'ZZ' })])]).length);
  assert.ok(sprawdzRejestr([tw([zrPryw({ szczebel: 7 })])]).length);
});

test('wpis prywatny z adresem, cytatem, miejscem albo innym polem: błąd (whitelista pól)', () => {
  for (const pole of ['adres', 'cytat', 'miejsce', 'tytul', 'notatka']) {
    const b = sprawdzRejestr([tw([zrPryw({ [pole]: 'x' })])]);
    assert.ok(b.some((x) => x.includes(pole)), pole);
  }
});

test('zwykłe źródło publiczne dalej wymaga adresu (regresja)', () => {
  assert.ok(sprawdzRejestr([tw([{ szczebel: 1, odczyt: '2026-11-01', cytat: 'x' }])]).some((b) => b.includes('bez adresu')));
});

test('liczba krytyczna: źródło prywatne szczebla 1–3 wystarcza, szczebla 4 nie', () => {
  const p = { kto: 'weryfikacja zastępcza (subagent)', data: '2026-11-02', sha: '0123456789ab' };
  const opc = { przeglad: 'zastępczy' };
  assert.deepEqual(sprawdzRejestr([tw([zrPryw()], { krytyczne: true, wartosc: 1, przeglad: p })], [], opc), []);
  assert.ok(sprawdzRejestr([tw([zrPryw({ szczebel: 4 })], { krytyczne: true, wartosc: 1, przeglad: p })], [], opc).some((b) => b.includes('szczebla 1–3')));
});

test('skrót rekordu: stabilny względem kolejności kluczy, zależy od soli i miejsca, ignoruje notatki', () => {
  const s = skrotRekordu(REKORD);
  assert.match(s, /^[0-9a-f]{12}$/);
  assert.equal(skrotRekordu({ sol: REKORD.sol, cytatWeryfikacji: REKORD.cytatWeryfikacji, miejsce: REKORD.miejsce, zrodlo: 'ZP-01', szczebel: 2 }), s);
  assert.equal(skrotRekordu({ ...REKORD, przegladD027d: { wynik: 'ok' }, notatka: 'cokolwiek' }), s);
  assert.notEqual(skrotRekordu({ ...REKORD, sol: 'f'.repeat(32) }), s);
  assert.notEqual(skrotRekordu({ ...REKORD, miejsce: 'plik.txt:L11' }), s);
});

test('normalizacja i wyszukiwanie nazw: wielkość liter, znaki diakrytyczne, odstępy, łączniki', () => {
  assert.equal(normalizuj('  Zmyślona   KSIĘGA-Wekowania '), 'zmyslona ksiega wekowania');
  const nazwy = ['Zmyślona Księga Wekowania', 'Wydawnictwo Testowe'];
  assert.deepEqual(szukajNazw('tekst bez niczego', nazwy), []);
  assert.deepEqual(szukajNazw('wg ZMYSLONA\nksiega-wekowania, s. 5', nazwy), ['Zmyślona Księga Wekowania']);
  assert.deepEqual(szukajNazw('wydawnictwo_testowe', nazwy), ['Wydawnictwo Testowe']);
  assert.deepEqual(szukajNazw('Wydawnictwo Testowanie', nazwy), [], 'tylko całe słowa');
});

test('spójność publiczny ↔ prywatny: brak ID, inny szczebel, inny skrót', () => {
  const pryw = { wpisy: { 'PRV-0001': REKORD } };
  assert.deepEqual(sprawdzSpojnosc([tw([zrPryw()])], pryw), []);
  assert.ok(sprawdzSpojnosc([tw([zrPryw({ ref: 'PRV-0002' })])], pryw).some((b) => b.includes('PRV-0002')));
  assert.ok(sprawdzSpojnosc([tw([zrPryw({ szczebel: 3 })])], pryw).some((b) => b.includes('szczebel')));
  assert.ok(sprawdzSpojnosc([tw([zrPryw({ skrot: '000000000000' })])], pryw).some((b) => b.includes('skrót')));
});

test('katalog: źródło prywatne w sources wariantu (renderowane na stronie) to błąd', () => {
  const kat = { variants: [{ id: 'x-v01', sources: [{ adres: 'https://a', szczebel: 1 }] }, { id: 'y-v01', sources: [{ typ: 'prywatne', ref: 'PRV-0001' }] }] };
  const b = sprawdzCatalogBezPrywatnych(kat);
  assert.equal(b.length, 1); assert.match(b[0], /y-v01/);
  assert.deepEqual(sprawdzCatalogBezPrywatnych({ variants: [{ id: 'z', sources: [{ adres: 'https://a', ref: 'PRV-0001' }] }] }).length, 1);
  // validate-catalog woła tę kontrolę (CI)
  const out = validateCatalog(JSON.parse(JSON.stringify(kat)));
  assert.ok(out.errors.some((e) => String(e).includes('y-v01') && String(e).includes('prywatn')));
});

test('kontrola lokalna: zakazana nazwa w pliku śledzonym albo w wiadomości commita = kod 1; bez trafień kod 0', () => {
  const d = mkdtempSync(join(tmpdir(), 'r1-')), pub = join(d, 'pub'), pry = join(d, 'pry');
  mkdirSync(pub); mkdirSync(join(pry, 'jaratlas'), { recursive: true });
  const git = (...a) => execFileSync('git', ['-C', pub, ...a], { stdio: 'pipe' });
  git('init', '-q'); git('config', 'user.email', 't@t'); git('config', 'user.name', 't');
  writeFileSync(join(pub, 'a.md'), 'czysty tekst\n');
  mkdirSync(join(pub, 'docs', 'tresci'), { recursive: true });
  writeFileSync(join(pub, 'docs', 'tresci', 'rejestr.json'), JSON.stringify([tw([zrPryw()])]));
  git('add', '.'); git('commit', '-qm', 'start');
  writeFileSync(join(pry, 'jaratlas', 'zakazane-nazwy.json'), JSON.stringify({ nazwy: ['Zmyślona Księga Wekowania'] }));
  writeFileSync(join(pry, 'jaratlas', 'rejestr-prywatny.json'), JSON.stringify({ wpisy: { 'PRV-0001': REKORD } }));
  const log = [], l = (s) => log.push(s);
  assert.equal(main(['--prywatne', pry, '--repo', pub], l), 0, log.join('\n'));
  writeFileSync(join(pub, 'b.md'), 'źródło: zmyślona KSIĘGA wekowania\n'); git('add', '.');
  log.length = 0; assert.equal(main(['--prywatne', pry, '--repo', pub], l), 1);
  assert.ok(log.some((x) => x.includes('b.md')));
  assert.ok(!log.join('\n').includes('Zmyślona'), 'raport nie powtarza nazwy (wynik bywa wklejany publicznie)');
  git('rm', '-q', '--cached', 'b.md'); git('commit', '-q', '--allow-empty', '-m', 'z Zmyslona Ksiega Wekowania w opisie');
  log.length = 0; assert.equal(main(['--prywatne', pry, '--repo', pub], l), 1);
  assert.ok(log.some((x) => x.includes('commit')));
  assert.equal(main(['--repo', pub], () => {}), 2, 'bez repo prywatnego: złe wywołanie, nie cichy sukces');
});

test('kontrola lokalna: wyjątki bazowe (plik → numer nazwy → dozwolona liczba) przepuszczają stan zastany, łapią nowe wystąpienie', async () => {
  const { liczWystapienia } = await import('../tools/zrodla-prywatne.mjs');
  assert.equal(liczWystapienia('Zmyślona księga wekowania i ZMYSLONA KSIEGA-WEKOWANIA', 'Zmyślona Księga Wekowania'), 2);
  const d = mkdtempSync(join(tmpdir(), 'r1b-')), pub = join(d, 'pub'), pry = join(d, 'pry');
  mkdirSync(pub); mkdirSync(join(pry, 'jaratlas'), { recursive: true });
  const git = (...a) => execFileSync('git', ['-C', pub, ...a], { stdio: 'pipe' });
  git('init', '-q'); git('config', 'user.email', 't@t'); git('config', 'user.name', 't');
  mkdirSync(join(pub, 'docs', 'tresci'), { recursive: true }); writeFileSync(join(pub, 'docs', 'tresci', 'rejestr.json'), '[]');
  writeFileSync(join(pub, 'stary.md'), 'cytat ulotki: Zmyślona Księga Wekowania\n'); git('add', '.'); git('commit', '-qm', 'start');
  writeFileSync(join(pry, 'jaratlas', 'zakazane-nazwy.json'), JSON.stringify({ nazwy: ['Zmyślona Księga Wekowania'] }));
  writeFileSync(join(pry, 'jaratlas', 'rejestr-prywatny.json'), JSON.stringify({ wpisy: {} }));
  const l = () => {};
  assert.equal(main(['--prywatne', pry, '--repo', pub], l), 1);
  writeFileSync(join(pry, 'jaratlas', 'wyjatki-nazw.json'), JSON.stringify({ bazaHistorii: String(git('rev-parse', 'HEAD')).trim(), wyjatki: { 'stary.md': { 1: 1 } } }));
  assert.equal(main(['--prywatne', pry, '--repo', pub], l), 0);
  writeFileSync(join(pub, 'stary.md'), 'cytat ulotki: Zmyślona Księga Wekowania; nowe: zmyślona księga wekowania\n'); git('add', '.');
  assert.equal(main(['--prywatne', pry, '--repo', pub], l), 1, 'drugie wystąpienie w tym samym pliku');
});

// Poprawki po przeglądzie D-043 (2026-11-02).
test('D-043 P1-1: whitelista źródła prywatnego także przy statusie innym niż potwierdzone', () => {
  const b = sprawdzRejestr([tw([zrPryw({ cytat: 'x' })], { status: 'robocze' })]);
  assert.ok(b.some((x) => x.includes('cytat')));
});

test('D-043 P2-4: wariant typu/ref (wielkość liter, „private”) traktowany jako prywatny; katalog wymaga adresu przy każdym źródle', () => {
  for (const z of [{ typ: 'Prywatne', adres: 'https://a', miejsce: 'x', odczyt: '2026-11-01', szczebel: 2 }, { typ: 'private', adres: 'https://a', miejsce: 'x', odczyt: '2026-11-01', szczebel: 2 }, { ref: 'prv-0001', adres: 'https://a', miejsce: 'x', odczyt: '2026-11-01', szczebel: 2 }]) {
    assert.ok(sprawdzRejestr([tw([z])]).length, JSON.stringify(z));
    assert.equal(sprawdzCatalogBezPrywatnych({ variants: [{ id: 'v', sources: [z] }] }).length, 1, JSON.stringify(z));
  }
  assert.equal(sprawdzCatalogBezPrywatnych({ variants: [{ id: 'v', sources: [{ miejsce: 'Księga s. 5', szczebel: 2 }] }] }).length, 1, 'źródło bez adresu w katalogu');
  assert.deepEqual(sprawdzCatalogBezPrywatnych({ variants: [{ id: 'v', sources: [{ adres: 'https://a', miejsce: 'x', typ: 'publiczne' }] }] }), []);
});

test('D-043 P2-5/P2-9: weryfikacja z zamkniętej listy; szczebel prywatny 2–5 (szczebel 1 = urzędowe, nie kupione)', () => {
  assert.ok(sprawdzZrodloPrywatne(zrPryw({ weryfikacja: 'Zmyślona Księga s. 5' })).length);
  assert.ok(sprawdzZrodloPrywatne(zrPryw({ szczebel: 1 })).length);
});

test('D-043 P2-6: rekord prywatny musi mieć sól 32 hex, wszystkie pola skrótu i wskazywać to samo twierdzenie', () => {
  const r = { ...REKORD, twierdzenie: 'TST-001' };
  assert.deepEqual(sprawdzSpojnosc([tw([zrPryw()])], { wpisy: { 'PRV-0001': r } }), []);
  const bezSoli = { ...r }; delete bezSoli.sol;
  assert.ok(sprawdzSpojnosc([tw([zrPryw({ skrot: skrotRekordu(bezSoli) })])], { wpisy: { 'PRV-0001': bezSoli } }).some((b) => b.includes('sol')));
  assert.ok(sprawdzSpojnosc([tw([zrPryw()])], { wpisy: { 'PRV-0001': { ...r, twierdzenie: 'INNE-001' } } }).some((b) => b.includes('INNE-001')));
});

test('D-043 P2-8: nazwy sklejone, ISBN bez łączników, ligatury', () => {
  assert.deepEqual(szukajNazw('www.zmyslonaksiegawekowania.pl', ['Zmyślona Księga Wekowania']), ['Zmyślona Księga Wekowania']);
  assert.deepEqual(szukajNazw('ISBN 9781234567897', ['978-1-2345-6789-7']), ['978-1-2345-6789-7']);
  assert.deepEqual(szukajNazw('Bøgen om Æbler', ['Bogen om AEbler']), ['Bogen om AEbler']);
});

test('D-043 P1-2/P1-3/P2-7: kontrola lokalna czyta indeks, historię wszystkich gałęzi od bazy, nazwy referencji; brak rejestru = kod 2', () => {
  const d = mkdtempSync(join(tmpdir(), 'r1c-')), pub = join(d, 'pub'), pry = join(d, 'pry');
  mkdirSync(pub); mkdirSync(join(pry, 'jaratlas'), { recursive: true });
  const git = (...a) => execFileSync('git', ['-C', pub, ...a], { encoding: 'utf8', stdio: 'pipe' });
  git('init', '-q', '-b', 'main'); git('config', 'user.email', 't@t'); git('config', 'user.name', 't');
  mkdirSync(join(pub, 'docs', 'tresci'), { recursive: true });
  writeFileSync(join(pub, 'docs', 'tresci', 'rejestr.json'), '[]');
  writeFileSync(join(pub, 'a.md'), 'stary cytat: Zmyślona Księga Wekowania\n'); git('add', '.'); git('commit', '-qm', 'baza');
  const baza = git('rev-parse', 'HEAD').trim();
  writeFileSync(join(pry, 'jaratlas', 'zakazane-nazwy.json'), JSON.stringify({ nazwy: ['Zmyślona Księga Wekowania'] }));
  writeFileSync(join(pry, 'jaratlas', 'rejestr-prywatny.json'), JSON.stringify({ wpisy: {} }));
  writeFileSync(join(pry, 'jaratlas', 'wyjatki-nazw.json'), JSON.stringify({ bazaHistorii: baza, wyjatki: { 'a.md': { 1: 1 } } }));
  const log = [], l = (s) => log.push(s), uruchom = () => { log.length = 0; return main(['--prywatne', pry, '--repo', pub], l); };
  assert.equal(uruchom(), 0, log.join('\n'));
  // P1-3: staged inna niż robocza → sprawdzana wersja z indeksu
  writeFileSync(join(pub, 'b.md'), 'Zmyślona Księga Wekowania\n'); git('add', 'b.md'); writeFileSync(join(pub, 'b.md'), 'czysto\n');
  assert.equal(uruchom(), 1, 'indeks ma nazwę'); git('reset', '-q'); rmSync(join(pub, 'b.md'));
  // binarny plik śledzony = błąd (nie cicha pominięcie)
  writeFileSync(join(pub, 'x.bin'), Buffer.from([0, 1, 2])); git('add', 'x.bin');
  assert.equal(uruchom(), 1); assert.ok(log.some((x) => x.includes('x.bin'))); git('rm', '-q', '--cached', 'x.bin'); rmSync(join(pub, 'x.bin'));
  // P1-2: dodane i usunięte na innej gałęzi po bazie → zostaje w historii
  git('checkout', '-qb', 'inna'); writeFileSync(join(pub, 'c.md'), 'Zmyślona Księga Wekowania\n'); git('add', '.'); git('commit', '-qm', 'dodaj');
  rmSync(join(pub, 'c.md')); git('add', '-A'); git('commit', '-qm', 'usun'); git('checkout', '-q', 'main');
  assert.equal(uruchom(), 1, 'historia'); assert.ok(log.some((x) => x.includes('historia')));
  git('branch', '-qD', 'inna');
  assert.equal(uruchom(), 0, log.join('\n'));
  // nazwa referencji
  git('branch', 'zmyslona-ksiega-wekowania'); assert.equal(uruchom(), 1); git('branch', '-qD', 'zmyslona-ksiega-wekowania');
  // P2-7: brak rejestru publicznego = kod 2
  assert.equal(main(['--prywatne', pry, '--repo', pub, '--rejestr', 'nie/ma.json'], () => {}), 2);
});
