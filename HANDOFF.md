# Handoff · Nueva Alejandría (Escuela para lo humano)

**Repositorio GitHub:** [https://github.com/VAVARO/nueva_alejandria](https://github.com/VAVARO/nueva_alejandria)  
**Rama activa:** `main`  
**Último commit:** `b98a24a` — `feat(ig): agregar previsualización interactiva de últimas publicaciones de Instagram y selector de vista editorial`

---

## 1. Estado General del Proyecto

Se completó la refactorización visual y arquitectónica integral para erradicar la estética de plantilla SaaS ("AI Slop") y transformar ambos prototipos en una **experiencia editorial y museística de alto nivel** (inspirada en *Aeon*, *Emergence Magazine* y *The Paris Review*), conservando la identidad cromática (`#1B1851`, `#30B1AC`, `#f6f3ec`, `#fcfdfa`) y la tipografía (`Cormorant Garamond` y `Plus Jakarta Sans`).

### Prototipos Disponibles
1. **Prototipo A · One-Pager Continuo:** [`nueva_alejandría.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/nueva_alejandr%C3%ADa.html)
   - Narrativa fluida con scrollspy sincronizado y cabecera reactiva.
   - Modales interactivos tipo pliego literario para ensayos, visualización en alta resolución de lámina renacentista (*Amphitheatrum Sapientiae Aeternae* de Heinrich Khunrath, 1609) y mockups de reserva/agendamiento.
2. **Prototipo B · Multi-Página Tradicional:**
   - [`index.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/index.html) — Portal y puerta de entrada con retícula arquitectónica de 4 salas en numeración romana (`I.`, `II.`, `III.`, `IV.`).
   - [`escuela.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/escuela.html) — Manifiesto fundacional con letra capitular, los 3 pilares del saber y retrato editorial 4:5 de Alejandra Silva Pérez con pie de foto en cursiva.
   - [`cursos.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/cursos.html) — Catálogo formativo con desglose de programas y reserva interactiva.
   - [`consultas.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/consultas.html) — Acompañamiento biográfico y lectura de carta natal con formulario de datos natales indispensables.
   - [`escritos.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/escritos.html) — Índice literario asimétrico de 3 columnas (Fecha 20% / Título 30px 55% / Extracto y enlace 25%) y lector modal inmersivo con tiempo estimado de lectura y colofón.
   - [`conversaciones.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/conversaciones.html) — Sala de medios y divulgación con Spotify, YouTube e Instagram integrados.

---

## 2. Cambios y Pulido Reciente

### A. Erradicación de "AI Slop"
- **Cero sombras SaaS:** Se eliminaron todos los `box-shadow` difuminados y elevaciones en hover (`translateY(-4px)`). Las separaciones se articulan con filetes limpios de `1px solid var(--line)` (`rgba(27, 24, 81, 0.15)`) y espacio negativo generoso.
- **Sin píldoras de software ni emojis:** Etiquetas tipográficas planas en mayúsculas espaciadas (`letter-spacing: .18em`), sin fondos pastel ni esquinas redondeadas. Se reemplazaron checks (`✓`) y emojis (`🎧`, `▶`, `📷`, `ℹ`) por guiones editoriales (`—`) o glifos tipográficos (`❦`, `→`).
- **Retrato y citas editoriales:** Eliminados avatares circulares de 72px; bloque de la fundadora maquetado en proporción 4:5 con tipografía de revista y citas en `<blockquote>` abierto sin barras laterales turquesas de estilo Markdown.

### B. Unificación de Header y Navegación
- Se sincronizó el header en todos los archivos: altura, alineación, título en `20px` sin quiebres de línea (`white-space: nowrap`), logo a 54px (44px en pantallas pequeñas con `flex-shrink: 0`), y botón hamburguesa con animación de 3 líneas a "X" con `z-index: 35`.
- Se corrigió el scrollspy del Prototipo A para mantener activo el enlace final al llegar al pie de página.

### C. Anonimización de Valores Monetarios
- Todo el texto, atributos `data-price` y resúmenes de modales quedaron expresados como:
  - Cursos / Programas: `$XX.XXX CLP / $XX.XXX USD`
  - Consultas individuales: `$XX.XXX CLP / $XX.XXX USD`

### D. Medios Interactivos y Previsualizaciones Reales
- **Spotify:** Embed oficial y limpio del episodio en `open.spotify.com/embed/episode/7EirnCvvLCarYNSZN8FS6R`.
- **YouTube:** Fachada interactiva de alta velocidad con thumbnail local HD (`assets/youtube_preview.jpg`, 1280×720, 16:9), botón de play editorial con accesibilidad completa (`Enter`/`Espacio`), y reemplazo dinámico por el iframe oficial al reproducir.
- **Instagram (@aledealejandria):** En [`conversaciones.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/conversaciones.html) y en [`nueva_alejandría.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/nueva_alejandr%C3%ADa.html):
  - Se eliminó por completo el modo "Citas" y cualquier selector o aforismo de relleno.
  - La sección muestra directamente las **3 publicaciones reales** con imágenes fijas en alta resolución guardadas localmente (`assets/ig_post_1.jpg`, `assets/ig_post_2.jpg`, `assets/ig_post_3.jpg`), eliminando la dependencia de iframes bloqueados por Meta.
  - Cada tarjeta incluye badge temático, miniatura con proporción 1:1, pie de foto editorial y botón directo para ver la publicación en Instagram.
- **Grabado de Heinrich Khunrath (1609) y Créditos Completos:**
  - Se recuperó el botón editorial "Ver grabado completo ↗" bajo la obra en [`nueva_alejandría.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/nueva_alejandr%C3%ADa.html) y en [`index.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/index.html).
  - Se incorporó en [`escuela.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/escuela.html) bajo el Pilar III ("El Oratorio y el Laboratorio") la tarjeta de la lámina con acceso directo al modal.
  - En el modal `<dialog id="modal-art">` se desplegaron los créditos museísticos completos: *Heinrich Khunrath · Oratorio–Laboratorio (1609)*, *Amphitheatrum Sapientiae Aeternae (Hamburgo / Hanau, 1609)*, técnica al aguafuerte y buril atribuida a Paullus van der Doort, y condición de Dominio Público con botón de cierre al pie.

### E. Micro-diseño y Accesibilidad
- `:focus-visible` calibrado en todos los archivos con contorno en `--ink` (blanco en footer y barra superior).
- Curva de movimiento `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` y duración sub-200ms en transiciones.
- Todas las animaciones `:hover` protegidas bajo `@media (hover: hover) and (pointer: fine)`.
- Soporte para `@media (prefers-reduced-motion: reduce)`.
- Entrada de modales en `220ms` con escala sutil (`scale(0.97)` a `1`) y salida rápida en `160ms`.
- `text-wrap: balance` en títulos y `text-wrap: pretty` en cuerpos de texto.

---

## 3. Estructura de Archivos del Repositorio

```text
NUEVA ALEJANDRÍA/
├── assets/
│   ├── fonts.css               # Importación y definición tipográfica local y web
│   ├── logo.svg / logo.png     # Isologotipo oficial sRGB
│   ├── youtube_preview.jpg     # Miniatura HD 16:9 para fachada de YouTube
│   ├── plate_7.jpeg            # Retrato editorial de Alejandra Silva
│   ├── engraving_full.jpg      # Lámina completa Khunrath (1609)
│   └── oratorio_laboratorio.jpg
├── nueva_alejandría.html       # [Prototipo A] One-pager continuo
├── index.html                  # [Prototipo B] Portal y salas de entrada
├── escuela.html                # [Prototipo B] Manifiesto, pilares y fundadora
├── cursos.html                 # [Prototipo B] Catálogo de formación y talleres
├── consultas.html              # [Prototipo B] Carta natal y acompañamiento
├── escritos.html               # [Prototipo B] Bitácora de ensayos y lector
├── conversaciones.html         # [Prototipo B] Podcast, YouTube e Instagram
├── HANDOFF.md                  # Este documento de continuidad
├── nueva_alejandría.backup.html# Copia de respaldo previa
└── test_svg.html               # Archivo de pruebas técnicas auxiliares
```

---

## 4. Tareas o Puntos Abiertos para Retomar

1. **Revisión de Embeds de Instagram en navegador:** Validar si se desea conservar las 3 publicaciones seleccionadas por defecto (`DfS5W-iunPd`, `DfPp4A7kfgn`, `DcR8p2yh6fu`) o sustituirlas por enlaces/posts específicos cuando Alejandra publique nuevos episodios.
2. **Imágenes en producción:** Considerar generar versiones webp optimizadas si se proyecta desplegar en un hosting público permanente (como Vercel, Netlify o Cloudflare Pages).
3. **Limpieza opcional del repo:** Si se desea, se pueden eliminar del repositorio remoto los archivos temporales `test_svg.html` y `nueva_alejandría.backup.html`.
