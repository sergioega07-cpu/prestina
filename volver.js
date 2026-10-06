/* Prestina · «Volver a JINSEI»
   Solo para quien llega desde el Barista Corner de JINSEI (enlace con ?desde=jinsei).
   Se recuerda en sessionStorage (sobrevive a recargas y anclas en esta pestaña) y se quita
   el parámetro de la URL para que, si alguien comparte el enlace, la página llegue limpia.
   Sin el parámetro (o sin JS) la página se ve igual que siempre. */
(function () {
  "use strict";
  var KEY = "prestina-desde";
  var BACK = "https://sergioega07-cpu.github.io/jinsei-colab/barista-corner/";
  var desde = null;
  try {
    var url = new URL(window.location.href);
    if (url.searchParams.get("desde") === "jinsei") {
      try { sessionStorage.setItem(KEY, "jinsei"); } catch (e) { /* modo privado */ }
      desde = "jinsei";
      url.searchParams.delete("desde");
      if (window.history && history.replaceState) history.replaceState(history.state, "", url.pathname + url.search + url.hash);
    }
    if (!desde) desde = sessionStorage.getItem(KEY);
  } catch (e) { /* URL o sessionStorage no disponibles */ }
  if (desde !== "jinsei" || !document.body) return;

  var nav = document.createElement("nav");
  nav.className = "volver";
  nav.setAttribute("aria-label", "Volver a JINSEI");
  var a = document.createElement("a");
  a.href = BACK;
  a.innerHTML = '<span aria-hidden="true">←</span> Volver a JINSEI<span class="volver__sub"> · Barista Corner</span>';
  nav.appendChild(a);
  document.body.insertBefore(nav, document.body.firstChild);
})();
