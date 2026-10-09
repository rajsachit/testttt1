(function () {
  if (window.__algoMenu) return;
  window.__algoMenu = true;
  function set(menu, on) {
    var p = menu.querySelector('[data-menu-panel]');
    if (!p) return;
    p.style.opacity = on ? '1' : '0';
    p.style.visibility = on ? 'visible' : 'hidden';
    p.style.transform = on ? 'translateY(0)' : 'translateY(6px)';
    menu.setAttribute('data-open', on ? '1' : '');
  }
  function all(except) {
    document.querySelectorAll('[data-menu]').forEach(function (m) { if (m !== except) set(m, false); });
  }
  document.addEventListener('mouseover', function (e) {
    var m = e.target.closest && e.target.closest('[data-menu]');
    all(m);
    if (m) set(m, true);
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-menu-toggle]');
    if (t) { var m = t.closest('[data-menu]'); var on = m.getAttribute('data-open') !== '1'; all(m); set(m, on); return; }
    if (!(e.target.closest && e.target.closest('[data-menu]'))) all(null);
  });
  if (false) {
    var add = function () {
      if (document.getElementById('algo-wa')) return;
      var a = document.createElement('a');
      a.id = 'algo-wa';
      a.href = 'https://wa.me/919040667427?text=Hi%20ALGORICK%2C%20I%20need%20help';
      a.target = '_blank'; a.rel = 'noopener';
      a.setAttribute('aria-label', 'Chat with us on WhatsApp');
      a.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:80;width:56px;height:56px;border-radius:50%;background:#25D366;color:#fff;display:grid;place-items:center;box-shadow:0 10px 24px -8px rgba(0,0,0,0.35);transition:transform .2s';
      a.innerHTML = '<span style="font-family:\'Material Symbols Rounded\';font-size:28px;line-height:1;font-variation-settings:\'FILL\' 1">chat</span>';
      a.onmouseenter = function () { a.style.transform = 'scale(1.08)'; };
      a.onmouseleave = function () { a.style.transform = 'none'; };
      document.body.appendChild(a);
    };
    if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
  }
})();
