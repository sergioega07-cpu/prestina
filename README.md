# Prestina / Wacaco — landing

Landing estática, lista para GitHub Pages. No incluye carrito ni pagos.

## Cambiar las fotos

Los bloques actuales son placeholders CSS. Reemplaza cada uno por una foto y conserva estos nombres para mantener el orden del set:

- `assets/hero-prestina.jpg` — imagen principal
- `assets/set-wood.jpg` — Prestina sobre madera
- `assets/set-comandante.jpg` — set / molienda
- `assets/set-detail.jpg` — detalle del filtro

Para mostrarlas, reemplaza el bloque `<figure>` correspondiente en `index.html` por, por ejemplo, `<img src="assets/hero-prestina.jpg" alt="Wacaco Prestina">` y aplica `class="real-image"` si quieres mantener el recorte. Usa fotos propias o con permiso.

## WhatsApp

CTA configurado: `https://wa.me/56951774751` (Sergio). Para cambiar el número, edita ese `href` en `index.html`.

## Publicar en GitHub Pages

1. Crea un repositorio (sugerencia: `sergioega07-cpu/prestina`) y sube `index.html`, `styles.css`, `README.md` y `assets/` a la rama principal.
2. En GitHub: **Settings → Pages → Deploy from a branch**, selecciona la rama principal y la carpeta `/ (root)`.
3. Guarda y espera la URL que GitHub Pages mostrará. No hace falta build ni dependencias.

Vista local: abre `index.html` directamente en el navegador.
