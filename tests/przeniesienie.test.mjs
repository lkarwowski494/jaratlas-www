// Narzędzie przeniesienia do czystego repo (tylko podgląd): logika listy, planu, strażnika i raportu.
// Wzór (analogia pełna, D-052): repo trening, tests/przeniesienie-1.0.test.ts. Dokument: docs/wydanie/10-przeniesienie-czyste-repo.md.
import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  AKCJE, sprawdzListe, wpisDla, zbudujPlan, zamien, przepiszOdnosniki, straznik, odwolania, sprawdzGitignore, raport,
} from '../tools/przeniesienie.mjs';

const NARZEDZIE = new URL('../tools/przeniesienie.mjs', import.meta.url).pathname;
const LISTA = JSON.parse(readFileSync(new URL('../tools/przeniesienie.json', import.meta.url), 'utf8'));
const tmp = mkdtempSync(join(tmpdir(), 'ja-przeniesienie-test-'));
after(() => rmSync(tmp, { recursive: true, force: true }));

const lista = (wpisy, reszta = {}) => ({ wpisy, ...reszta });
const W = (sciezka, akcja, powod = 'powód testowy dłuższy') => ({ sciezka, akcja, powod });
const CFG = {
  dane: [{ nazwa: 'login', wzorzec: 'jkowalski77', flagi: 'i' }, { nazwa: 'adres e-mail', wzorzec: '[a-z.]+@[a-z]+\\.[a-z]{2,}', flagi: '' }],
  sekrety: [{ nazwa: 'klucz API Anthropic', wzorzec: 'sk-ant-[A-Za-z0-9_-]{20,}', flagi: '' }],
  slady: [{ nazwa: 'ID sesji', wzorzec: 'session_[0-9A-Za-z]{20,}', flagi: '' }],
  miekkie: [{ nazwa: 'decyzja Claude', wzorzec: 'decyzj[aię] Claude', flagi: 'i' }],
  nazwy: ['Ball', 'Porkbun'],
  zakres: ['site/', 'tools/', 'package.json'],
  wyjatki: [
    { sciezka: 'site/konfiguracja.mjs', nazwa: 'Porkbun', powod: 'publiczne w RDAP' },
    { sciezka: 'tools/nieistnieje.mjs', nazwa: 'Ball', powod: 'wyjątek bez trafienia' },
  ],
};

test('lista: akcje jak we wzorze; błędy: brak wpisów, nieznana akcja, krótki powód, ścieżka bezwzględna/.., powtórzenie, zła zamiana', () => {
  assert.deepEqual(AKCJE, ['zostaje', 'usun', 'dysk', 'decyzja', 'popraw']);
  assert.deepEqual(sprawdzListe({ wpisy: [] }), ['lista nie ma wpisów']);
  const b = sprawdzListe(lista([W('a', 'skasuj'), W('b', 'usun', 'krótki'), W('/c', 'usun'), W('d/../e', 'usun'), W('f', 'usun'), W('f', 'usun')], { zamiany: [{ sciezka: 'x', z: '', na: 'y' }], przepisz: ['/abs'] }));
  assert.equal(b.length, 7, b.join('\n'));
  assert.ok(b.some((x) => x.includes('nieznana akcja')) && b.some((x) => x.includes('brak powodu')) && b.some((x) => x.includes('powtórzony')));
  assert.ok(b.some((x) => x.startsWith('zamiana niepoprawna')) && b.some((x) => x.startsWith('przepisz')));
});

test('lista repo jest poprawna, a strażnik ma wszystkie kategorie i powód każdego wyjątku', () => {
  assert.deepEqual(sprawdzListe(LISTA), []);
  for (const k of ['dane', 'sekrety', 'slady', 'miekkie', 'nazwy', 'zakres', 'wyjatki']) assert.ok(Array.isArray(LISTA.straznik[k]), k);
  for (const w of LISTA.straznik.wyjatki) assert.ok(w.powod?.length >= 10, `${w.sciezka}: ${w.nazwa}`);
  for (const k of ['dane', 'sekrety', 'slady', 'miekkie']) for (const x of LISTA.straznik[k]) new RegExp(x.wzorzec, x.flagi); // kompiluje się
});

test('wpisDla: dokładna ścieżka albo katalog z ukośnikiem; wygrywa najdłuższy wpis', () => {
  const w = [W('docs/', 'dysk'), W('docs/adr/', 'zostaje'), W('docs/adr/0007.md', 'popraw')];
  assert.equal(wpisDla('docs/x.md', w).akcja, 'dysk');
  assert.equal(wpisDla('docs/adr/0001.md', w).akcja, 'zostaje');
  assert.equal(wpisDla('docs/adr/0007.md', w).akcja, 'popraw');
  assert.equal(wpisDla('docsy/x.md', w), undefined);
});

test('zbudujPlan: usun/dysk znikają, popraw zostaje, decyzja zależy od --decyzje, wpis bez pliku zgłoszony', () => {
  const pliki = ['a.md', 'docs/archiwum/1.md', 'docs/archiwum/2.md', 'CLAUDE.md', 'docs/x.md', 'tools/t.mjs'];
  const l = lista([W('a.md', 'usun'), W('docs/archiwum/', 'dysk'), W('CLAUDE.md', 'popraw'), W('docs/x.md', 'decyzja'), W('brak.md', 'usun')]);
  const p = zbudujPlan(pliki, l);
  assert.deepEqual(p.zostaje, ['CLAUDE.md', 'docs/x.md', 'tools/t.mjs']);
  assert.deepEqual(p.usuniete.map((x) => x.plik), ['a.md', 'docs/archiwum/1.md', 'docs/archiwum/2.md']);
  assert.equal(p.naDysk.length, 2);
  assert.deepEqual(p.popraw.map((x) => x.plik), ['CLAUDE.md']);
  assert.deepEqual(p.wpisyBezPlikow, ['brak.md']);
  const u = zbudujPlan(pliki, l, { decyzje: 'usun' });
  assert.ok(!u.zostaje.includes('docs/x.md') && u.usuniete.some((x) => x.akcja === 'decyzja→usun'));
  assert.throws(() => zbudujPlan(pliki, l, { decyzje: 'moze' }), /--decyzje/);
  assert.throws(() => zbudujPlan(pliki, lista([W('a', 'zle')])), /niepoprawna/);
});

test('zamien liczy wystąpienia; przepiszOdnosniki: link traci adres, pełna ścieżka i katalog → „Dysk: …”, ścieżka zostająca bez zmian', () => {
  assert.deepEqual(zamien('a x a', 'a', 'b'), { tresc: 'b x b', ile: 2 });
  assert.deepEqual(zamien('abc', 'z', 'y'), { tresc: 'abc', ile: 0 });
  const t = 'Zob. [kosztorys](docs/lokalizacja/k.md#a), docs/lokalizacja/k.md, docs/archiwum/ i docs/adr/0007.md.';
  const r = przepiszOdnosniki(t, ['docs/lokalizacja/k.md'], ['docs/archiwum/']);
  assert.equal(r.tresc, 'Zob. kosztorys, Dysk: lokalizacja/k.md, Dysk: archiwum/ i docs/adr/0007.md.');
  assert.equal(r.ile, 3);
});

test('strażnik: dane, sekrety i ślady to błąd w całym drzewie; nazwy firm błędem tylko w zakresie; wyjątki i zbędne wyjątki', () => {
  const s = straznik({
    'docs/r.md': 'autor jkowalski77, kontakt jan.k@example.com, session_01ABCDEFGHIJKLMNOPQRSTUV, za Ball',
    'tools/a.mjs': `const k = 'sk-ant-${'x'.repeat(24)}'; // decyzja Claude, do weta; Ball`,
    'site/konfiguracja.mjs': '// Porkbun',
    'site/b.mjs': 'Ballada, Porkbunowi', // inne słowo / polska końcówka
  }, CFG);
  assert.deepEqual(s.bledy.map((x) => `${x.plik}|${x.kategoria}|${x.nazwa}`).sort(), [
    'docs/r.md|dane|adres e-mail', 'docs/r.md|dane|login', 'docs/r.md|slady|ID sesji',
    'site/b.mjs|nazwy|Porkbun', 'tools/a.mjs|nazwy|Ball', 'tools/a.mjs|sekrety|klucz API Anthropic',
  ]);
  assert.deepEqual(s.uwagi.map((x) => `${x.plik}|${x.nazwa}`), ['tools/a.mjs|decyzja Claude']);
  assert.deepEqual(s.pozaZakresem.map((x) => `${x.plik}|${x.nazwa}`), ['docs/r.md|Ball']);
  assert.deepEqual(s.zWyjatkiem.map((x) => `${x.plik}|${x.nazwa}`), ['site/konfiguracja.mjs|Porkbun']);
  assert.deepEqual(s.nieuzyteWyjatki, ['tools/nieistnieje.mjs: Ball']);
  assert.ok(!JSON.stringify(s).includes('x'.repeat(24)), 'raport nie powtarza wartości sekretu');
});

test('wyjątek z „wartosci”: obejmuje tylko trafienia pasujące do wzorca atrapy; inny klucz w tym samym pliku to błąd', () => {
  const cfg = { ...CFG, wyjatki: [{ sciezka: 'tests/p.test.mjs', nazwa: 'klucz API Anthropic', wartosci: '^sk-ant-test-[0-9]+$', powod: 'atrapa klucza w teście maskowania' }] };
  const atrapa = straznik({ 'tests/p.test.mjs': "k = 'sk-ant-test-12345678901234567890'" }, cfg);
  assert.deepEqual([atrapa.bledy.length, atrapa.zWyjatkiem.length, atrapa.nieuzyteWyjatki.length], [0, 1, 0]);
  const prawdziwy = straznik({ 'tests/p.test.mjs': `k = 'sk-ant-test-12345678901234567890'; r = 'sk-ant-api03-${'Q'.repeat(30)}'` }, cfg);
  assert.deepEqual(prawdziwy.bledy.map((x) => x.nazwa), ['klucz API Anthropic']);
});

test('odwolania: odczyt usuniętego pliku = „czyta”, sam komentarz = „wzmianka”', () => {
  const o = odwolania({
    'tests/a.test.mjs': "const t = readFileSync('docs/jakosc/r.md');",
    'tools/b.mjs': '// kosztorys: docs/lokalizacja/k.md',
    'tools/c.mjs': 'nic',
  }, ['docs/jakosc/r.md', 'docs/lokalizacja/k.md']);
  assert.deepEqual(o, [
    { plik: 'tests/a.test.mjs', czyta: ['docs/jakosc/r.md'], wzmianka: [] },
    { plik: 'tools/b.mjs', czyta: [], wzmianka: ['docs/lokalizacja/k.md'] },
  ]);
});

test('odwolania: krótka nazwa usuniętego pliku w cudzysłowie liczy się, gdy żaden zostający plik nie ma tej samej nazwy (wzór trening)', () => {
  const zrodla = { 'tests/s.test.mjs': "for (const plik of ['build.test.mjs', 'przeniesienie.test.mjs']) spawnSync(join(dir, plik));" };
  assert.deepEqual(odwolania(zrodla, ['tests/przeniesienie.test.mjs'], ['tests/build.test.mjs']), [{ plik: 'tests/s.test.mjs', czyta: ['tests/przeniesienie.test.mjs'], wzmianka: [] }]);
  assert.deepEqual(odwolania({ 'tools/a.mjs': "readFileSync('README.md')" }, ['docs/x/README.md'], ['README.md']), []);
});

test('sprawdzGitignore: brak .env albo dist/ to uwaga', () => {
  assert.deepEqual(sprawdzGitignore('dist/\nnode_modules/\n.env\n.env.*\n'), []);
  assert.deepEqual(sprawdzGitignore('node_modules/\n'), ['.gitignore nie obejmuje: .env', '.gitignore nie obejmuje: dist/']);
});

test('raport: nagłówek „tylko podgląd”, liczby i sekcje błędów', () => {
  const plan = zbudujPlan(['a.md', 'b.md'], lista([W('a.md', 'usun')]));
  const s = { bledy: [{ plik: 'b.md', kategoria: 'dane', nazwa: 'login' }], uwagi: [], pozaZakresem: [], zWyjatkiem: [], nieuzyteWyjatki: [] };
  const r = raport(plan, s, [], { zamiany: [], przepisane: [] }, []);
  assert.match(r, /^PODGLĄD PRZENIESIENIA/);
  assert.match(r, /Plików w HEAD: 2; zostaje: 1; usunięte: 1/);
  assert.match(r, /BŁĘDY STRAŻNIKA.*\(1\) ==\n {2}b\.md: dane — login/);
  assert.match(r, /WYNIK: BŁĄD/);
});

test('CLI na małym repo: tylko podgląd (repo źródłowe bez zmian), kod 1 przy błędzie strażnika, --zachowaj zostawia drzewo i na-dysk', () => {
  const repo = join(tmp, 'repo');
  mkdirSync(join(repo, 'docs/archiwum'), { recursive: true });
  mkdirSync(join(repo, 'site'), { recursive: true });
  writeFileSync(join(repo, 'docs/archiwum/s.md'), 'sesja session_01ABCDEFGHIJKLMNOPQRSTUV\n');
  writeFileSync(join(repo, 'site/a.mjs'), 'export const a = 1; // zob. docs/archiwum/s.md\n');
  writeFileSync(join(repo, '.gitignore'), 'dist/\n.env\n');
  writeFileSync(join(repo, 'package.json'), '{"scripts":{"check":"node -e 0"}}\n');
  const git = (...a) => spawnSync('git', a, { cwd: repo, encoding: 'utf8' });
  git('init', '-q'); git('add', '-A'); git('-c', 'user.name=t', '-c', 'user.email=t@t.t', 'commit', '-qm', 'x');
  const glowa = git('rev-parse', 'HEAD').stdout;
  const cfg = { ...CFG, wyjatki: [] };
  writeFileSync(join(tmp, 'ok.json'), JSON.stringify({ wpisy: [W('docs/archiwum/', 'dysk')], przepisz: ['site/'], straznik: cfg }));
  writeFileSync(join(tmp, 'zle.json'), JSON.stringify({ wpisy: [W('package.json', 'popraw')], straznik: cfg }));
  const uruchom = (...a) => spawnSync(process.execPath, [NARZEDZIE, `--repo=${repo}`, ...a], { encoding: 'utf8', env: { ...process.env, TMPDIR: tmp } });

  const ok = uruchom(`--lista=${join(tmp, 'ok.json')}`, '--zachowaj', '--testy');
  assert.equal(ok.status, 0, ok.stdout + ok.stderr);
  assert.match(ok.stdout, /WYNIK: OK/);
  assert.match(ok.stdout, /npm run check w drzewie: kod 0/);
  const drzewo = /Drzewo podglądu: (.+)/.exec(ok.stdout)[1];
  assert.equal(readFileSync(join(drzewo, 'site/a.mjs'), 'utf8'), 'export const a = 1; // zob. Dysk: archiwum/s.md\n');
  assert.ok(readdirSync(join(drzewo, '..', 'na-dysk', 'docs', 'archiwum')).includes('s.md'));
  assert.ok(!readdirSync(drzewo).includes('docs'));

  const zle = uruchom(`--lista=${join(tmp, 'zle.json')}`);
  assert.equal(zle.status, 1, zle.stdout);
  assert.match(zle.stdout, /docs\/archiwum\/s\.md: slady — ID sesji/);
  assert.equal(git('rev-parse', 'HEAD').stdout, glowa);
  assert.equal(git('status', '--porcelain').stdout, '');
});
