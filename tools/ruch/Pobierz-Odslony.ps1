<#
.SYNOPSIS
  R7 JarAtlas: odsłony artykułów Wikipedii (Wikimedia Pageviews) dla produktów i rodzin procesu z katalogu.

.DESCRIPTION
  Czyta tools/ruch/mapa-wikipedia.json, dla każdego unikalnego artykułu i języka woła
  https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/{projekt}/all-access/user/{tytuł}/monthly/{od}/{do}
  i zapisuje trzy pliki CSV (UTF-8, separator przecinek):
    artykuly.csv  - jeden wiersz na artykuł i język: suma, mediana miesięczna, liczba miesięcy
    produkty.csv  - jeden wiersz na produkt i język: suma odsłon artykułów produktu + artykuły rodzin procesu
    warianty.csv  - jeden wiersz na wariant i język: liczby z produktu i rodziny (dziedziczone, nie własne)
  Odpowiedzi API są zapisywane w katalogu cache; ponowne uruchomienie pomija pobrane artykuły (wznowienie).
  Działa w PowerShell 7+ i Windows PowerShell 5.1, tylko wbudowane cmdlety, bez sekretów.

  To przybliżenie zainteresowania tematem (produktem/techniką), nie ruch na przepisach.

.PARAMETER Kontakt
  Wymagany przez politykę User-Agent Wikimedia: adres e-mail albo strona kontaktowa. Nie jest nigdzie zapisywany.

.EXAMPLE
  pwsh -File tools/ruch/Pobierz-Odslony.ps1 -Kontakt "twoj@adres" -Jezyki en,pl
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)][string]$Kontakt,
  [string]$Mapa = (Join-Path $PSScriptRoot 'mapa-wikipedia.json'),
  [string[]]$Jezyki = @('en', 'pl', 'fr', 'es', 'de', 'it'),
  # Pełne miesiące: domyślnie 12 ostatnich zakończonych miesięcy.
  [string]$Od = '',
  [string]$Do = '',
  [string]$Wyjscie = '',          # domyślnie Dokumenty\jaratlas-ruch (poza repo: wyniki nie trafią do commita)
  [int]$Limit = 0,              # >0: tylko pierwsze N produktów (próbka)
  [int]$PrzerwaMs = 150,        # przerwa między zapytaniami (limit tempa)
  [int]$Ponowienia = 6
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version 2.0
try { [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12 } catch { }

if (-not $Od -or -not $Do) {
  $teraz = Get-Date
  $pierwszy = New-Object DateTime ($teraz.Year, $teraz.Month, 1)
  $Do = $pierwszy.AddDays(-1).ToString('yyyyMMdd')
  $Od = $pierwszy.AddMonths(-12).ToString('yyyyMMdd')
}

function Get-KodowanyTytul([string]$tytul) {
  # Wikimedia: spacje -> _, reszta jak w URL (także / i ?).
  return [Uri]::EscapeDataString($tytul.Replace(' ', '_'))
}

function Get-Mediana([double[]]$wartosci) {
  if ($wartosci.Count -eq 0) { return 0 }
  $s = @($wartosci | Sort-Object)
  $n = $s.Count
  if ($n % 2 -eq 1) { return [double]$s[[int](($n - 1) / 2)] }
  return ([double]$s[$n / 2 - 1] + [double]$s[$n / 2]) / 2
}

function Get-Odslony([string]$jezyk, [string]$tytul, [string]$cacheDir, [string]$ua) {
  $plik = Join-Path $cacheDir ('{0}__{1}.json' -f $jezyk, ([BitConverter]::ToString(
    [Security.Cryptography.SHA1]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($tytul)))).Replace('-', ''))
  if (Test-Path $plik) { return (Get-Content -Raw -Encoding UTF8 $plik | ConvertFrom-Json) }

  $url = 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/{0}.wikipedia/all-access/user/{1}/monthly/{2}/{3}' -f `
    $jezyk, (Get-KodowanyTytul $tytul), $Od, $Do
  for ($n = 1; ; $n++) {
    Start-Sleep -Milliseconds $PrzerwaMs
    try {
      $r = Invoke-WebRequest -Uri $url -UserAgent $ua -UseBasicParsing -TimeoutSec 60
      $j = $r.Content | ConvertFrom-Json
      $miesiace = @($j.items | ForEach-Object { [double]$_.views })
      $wynik = [pscustomobject]@{ status = 'ok'; miesiace = $miesiace }
    } catch {
      $kod = 0
      $odp = $_.Exception.PSObject.Properties['Response']
      if ($odp -and $odp.Value) { $kod = [int]$odp.Value.StatusCode }
      if ($kod -eq 404) {
        # brak odsłon w okresie albo brak artykułu: zapisujemy zero
        $wynik = [pscustomobject]@{ status = 'brak-danych'; miesiace = @() }
      } elseif (($kod -eq 429 -or $kod -ge 500 -or $kod -eq 0) -and $n -lt $Ponowienia) {
        $czekaj = [Math]::Min(60, [Math]::Pow(2, $n))
        Write-Warning ("HTTP {0} dla {1}:{2}, ponowienie {3} za {4} s" -f $kod, $jezyk, $tytul, $n, $czekaj)
        Start-Sleep -Seconds $czekaj
        continue
      } else { throw }
    }
    $json = $wynik | ConvertTo-Json -Compress
    [IO.File]::WriteAllText($plik, $json, (New-Object Text.UTF8Encoding $false))
    return $wynik
  }
}

if (-not $Wyjscie) {
  $dok = [Environment]::GetFolderPath('MyDocuments')
  if (-not $dok) { $dok = $HOME }
  $Wyjscie = Join-Path $dok 'jaratlas-ruch'
}
$ua = "JarAtlasR7/1.0 ($Kontakt) PowerShell/$($PSVersionTable.PSVersion)"
$mapaJson = Get-Content -Raw -Encoding UTF8 $Mapa | ConvertFrom-Json
$cacheDir = Join-Path $Wyjscie ('cache-{0}-{1}' -f $Od, $Do)
New-Item -ItemType Directory -Force -Path $cacheDir | Out-Null

$produktyId = @($mapaJson.produkty.PSObject.Properties.Name)
if ($Limit -gt 0) { $produktyId = $produktyId[0..([Math]::Min($Limit, $produktyId.Count) - 1)] }
$warianty = @($mapaJson.warianty | Where-Object { $produktyId -contains $_.produkt })
$rodzinyId = @($warianty | ForEach-Object { $_.rodzina } | Sort-Object -Unique)

# Unikalne pary (język, tytuł) do pobrania
$artykuly = @{}
function Add-Artykuly($klucz, $lista) {
  foreach ($a in $lista) {
    foreach ($jz in $Jezyki) {
      $t = $a.tytuly.$jz
      if ($t) { $script:artykuly["$jz|$t"] = [pscustomobject]@{ jezyk = $jz; tytul = $t } }
    }
  }
}
foreach ($p in $produktyId) { Add-Artykuly $p $mapaJson.produkty.$p.artykuly }
foreach ($f in $rodzinyId) { Add-Artykuly $f $mapaJson.rodziny.$f.artykuly }

$wyniki = @{}
$i = 0
$start = Get-Date
foreach ($k in ($artykuly.Keys | Sort-Object)) {
  $i++
  $a = $artykuly[$k]
  Write-Progress -Activity 'Wikimedia Pageviews' -Status ("{0}/{1} {2}" -f $i, $artykuly.Count, $k) -PercentComplete (100 * $i / $artykuly.Count)
  $w = Get-Odslony $a.jezyk $a.tytul $cacheDir $ua
  $m = @($w.miesiace | ForEach-Object { [double]$_ })
  $suma = 0; foreach ($x in $m) { $suma += $x }
  $wyniki[$k] = [pscustomobject]@{
    jezyk = $a.jezyk; tytul = $a.tytul; status = $w.status
    suma = [long]$suma; mediana_mies = [long](Get-Mediana $m); miesiace = $m.Count
  }
}
Write-Progress -Activity 'Wikimedia Pageviews' -Completed

function Get-Suma($lista, $jz) {
  $s = 0; $med = 0; $tytuly = @()
  foreach ($a in $lista) {
    $t = $a.tytuly.$jz
    if ($t -and $wyniki.ContainsKey("$jz|$t")) {
      $s += $wyniki["$jz|$t"].suma; $med += $wyniki["$jz|$t"].mediana_mies; $tytuly += $t
    }
  }
  return [pscustomobject]@{ suma = [long]$s; mediana = [long]$med; tytuly = ($tytuly -join '; ') }
}

$okres = "$Od-$Do"
$wierszeArt = $wyniki.Values | Sort-Object jezyk, @{ Expression = 'suma'; Descending = $true } |
  Select-Object jezyk, tytul, status, suma, mediana_mies, miesiace, @{ n = 'okres'; e = { $okres } }

$wierszeProd = foreach ($p in $produktyId) {
  foreach ($jz in $Jezyki) {
    $s = Get-Suma $mapaJson.produkty.$p.artykuly $jz
    [pscustomobject]@{ produkt = $p; nazwa_pl = $mapaJson.produkty.$p.nazwaPl; jezyk = $jz
      suma_12m = $s.suma; mediana_mies = $s.mediana; artykuly = $s.tytuly; okres = $okres }
  }
}
$indeksProd = @{}; foreach ($w in $wierszeProd) { $indeksProd["$($w.produkt)|$($w.jezyk)"] = $w }
$indeksRodz = @{}
foreach ($f in $rodzinyId) { foreach ($jz in $Jezyki) { $indeksRodz["$f|$jz"] = Get-Suma $mapaJson.rodziny.$f.artykuly $jz } }

$wierszeWar = foreach ($v in $warianty) {
  foreach ($jz in $Jezyki) {
    $p = $indeksProd["$($v.produkt)|$jz"]; $r = $indeksRodz["$($v.rodzina)|$jz"]
    [pscustomobject]@{ wariant = $v.id; produkt = $v.produkt; rodzina = $v.rodzina; jezyk = $jz
      produkt_suma_12m = $p.suma_12m; produkt_mediana_mies = $p.mediana_mies
      rodzina_suma_12m = $r.suma; rodzina_mediana_mies = $r.mediana
      poziom = 'dziedziczone z produktu i rodziny'; okres = $okres }
  }
}

$wierszeArt | Export-Csv -NoTypeInformation -Encoding UTF8 (Join-Path $Wyjscie 'artykuly.csv')
$wierszeProd | Sort-Object jezyk, @{ Expression = 'suma_12m'; Descending = $true } |
  Export-Csv -NoTypeInformation -Encoding UTF8 (Join-Path $Wyjscie 'produkty.csv')
$wierszeWar | Export-Csv -NoTypeInformation -Encoding UTF8 (Join-Path $Wyjscie 'warianty.csv')

$czas = [int]((Get-Date) - $start).TotalSeconds
Write-Host ("Gotowe: {0} artykułów×języków, {1} produktów, {2} wariantów, okres {3}, {4} s. Wynik: {5}" -f `
  $wyniki.Count, $produktyId.Count, $warianty.Count, $okres, $czas, $Wyjscie)
