// Filtry na fragmencie adresu (#status=ok-zrodlo&flavor=...): bez nowych adresów (ADR 0005).
(function () {
  function zastosuj() {
    var p = new URLSearchParams(location.hash.slice(1));
    document.querySelectorAll('table[data-warianty] tbody tr').forEach(function (tr) {
      var widoczny = true;
      p.forEach(function (w, k) { if (tr.getAttribute('data-' + k) !== w) widoczny = false; });
      tr.hidden = !widoczny;
    });
  }
  addEventListener('hashchange', zastosuj);
  zastosuj();
})();
