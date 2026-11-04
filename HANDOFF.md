# Handoff · Nueva Alejandría (Escuela para lo humano)

## 1. Estado del Proyecto
Se han implementado con éxito **los dos prototipos completos y navegables** solicitados para someter a evaluación de Alejandra Silva:

1. **Prototipo A · One-Pager Continuo:** [`nueva_alejandría.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/nueva_alejandr%C3%ADa.html)
   - Narrativa editorial continua, fluida y contemplativa.
   - Cuenta con capas modales profundas para lectura inmersiva de ensayos, visualización de la lámina renacentista completa de Heinrich Khunrath (1609), y formularios interactivos de reserva en formato mockup.
2. **Prototipo B · Multi-Página Tradicional:**
   - [`index.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/index.html) — Portal y puerta de entrada con héroe editorial y salas temáticas.
   - [`escuela.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/escuela.html) — Manifiesto pedagógico, los tres pilares del saber y biografía completa de Alejandra Silva Pérez.
   - [`cursos.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/cursos.html) — Catálogo de cursos y talleres con desglose curricular y modales de reserva pre-cargados.
   - [`consultas.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/consultas.html) — Acompañamiento biográfico, carta natal y modal de agendamiento interactivo (con captura de fecha, hora y ciudad de nacimiento).
   - [`escritos.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/escritos.html) — Bitácora de ensayos humanistas con lector modal inmersivo.
   - [`conversaciones.html`](file:///G:/Mi%20unidad/AGY/NUEVA%20ALEJANDR%C3%8DA/conversaciones.html) — Medios y divulgación con los recursos reales provistos por el usuario.

---

## 2. Recursos Reales de Medios Integrados
- **Spotify Podcast:** Episodio invitado *«El camino del medio: una experiencia terrenal»* con Caro Ulloa Osses ([Enlace](https://open.spotify.com/episode/7EirnCvvLCarYNSZN8FS6R)).
- **YouTube Diálogo:** Conferencia *«Vivir en la realidad: los cuentos que nos contamos y cómo salir de la ilusión para ser más conscientes»* ([Enlace](https://www.youtube.com/watch?v=FjXZBH9Mf_I)).
- **Instagram Oficial:** Perfil `@aledealejandria` ([Enlace](https://www.instagram.com/aledealejandria/)).

---

## 3. Identidad Visual y Arquitectura Técnica
- **Logo oficial:** `assets/logo.png` generado en espacio de color sRGB nativo transparente desde la data vectorial de Illustrator (`#1B1851` azul noche y `#30B1AC` calipso/teal).
- **Grabado de Khunrath:** `assets/engraving_full.jpg` en alta resolución con contraste ajustado (`contrast(1.38)` y `brightness(0.92)`), mostrando la perspectiva completa de la sala (oratorio y laboratorio).
- **Tipografías:** `Cormorant Garamond` (para titulares y citas editoriales) y `Plus Jakarta Sans` (para interfaz y legibilidad), cargadas de forma local vía `assets/fonts.css` con fallback a Google Fonts.
- **Barra de Switcher:** Ambas versiones incluyen en la parte superior una barra discreta que permite al usuario alternar entre Prototipo A y Prototipo B con un solo clic.
- **Flujos de Reserva Mockup:** Cumplen con la especificación de funcionar de manera interactiva sin backend de pagos, simulando la confirmación de la cita o cupo con folio y mensaje personalizado.
