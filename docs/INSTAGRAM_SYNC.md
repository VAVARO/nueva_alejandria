# Sincronización Automática de Instagram con GitHub Actions

Este repositorio cuenta con un flujo de automatización configurado en [`.github/workflows/sync-instagram.yml`](../.github/workflows/sync-instagram.yml) que mantiene actualizadas las **3 últimas publicaciones** de Instagram (`@aledealejandria`) en ambos prototipos ([`nueva_alejandría.html`](../nueva_alejandría.html) y [`conversaciones.html`](../conversaciones.html)).

---

## 1. Cómo funciona el ciclo automático

1. **Programación periódica:**
   - Se ejecuta automáticamente cada **6 horas** mediante un cron (`0 */6 * * *`).
2. **Ejecución manual a demanda:**
   - Puedes forzar una actualización en cualquier momento desde tu navegador:
     1. Ve a tu repositorio en GitHub: [https://github.com/VAVARO/nueva_alejandria](https://github.com/VAVARO/nueva_alejandria)
     2. Haz clic en la pestaña **Actions**.
     3. Selecciona el flujo **"Sincronizar Publicaciones de Instagram"** a la izquierda.
     4. Haz clic en el botón desplegable **Run workflow** -> **Run workflow**.
3. **Commit y Push automático:**
   - Si detecta posts más recientes, descarga automáticamente las nuevas imágenes a `assets/`, actualiza `assets/instagram.json` y regenera la cuadrícula de publicaciones en el HTML sin romper la dirección de arte editorial.

---

## 2. Cómo conectar la API oficial de Meta (Paso a paso)

Para que el robot de GitHub pueda consultar en vivo las publicaciones de Alejandra Silva Pérez directo a Meta sin restricciones de sesión:

1. **Requisitos previos en Instagram:**
   - La cuenta `@aledealejandria` debe ser una cuenta de **Creador** o **Empresa** (gratuito desde la app de Instagram en *Configuración* -> *Tipo de cuenta*).
   - Estar vinculada a una Página de Facebook administrada por ella.
2. **Obtener el Token de Acceso en Meta for Developers:**
   - Entra a [developers.facebook.com](https://developers.facebook.com/) y crea una App de tipo *Business*.
   - En el explorador de la Graph API, genera un token con permiso `instagram_basic`.
   - Conviértelo en un token de larga duración (válido por 60 días o renovable).
3. **Agregar las claves en GitHub Secrets:**
   - En tu repositorio [VAVARO/nueva_alejandria](https://github.com/VAVARO/nueva_alejandria):
   - Ve a **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.
   - Agrega dos secretos:
     - `IG_ACCESS_TOKEN`: El token de acceso de Meta.
     - `IG_USER_ID`: El identificador de la cuenta de Instagram Business de Alejandra.

---

## 3. Estado local y de respaldo

- Si no hay token configurado, el script conserva de forma segura las publicaciones vigentes verificadas con sus imágenes locales en alta definición, garantizando que el sitio nunca falle ni muestre marcos vacíos.
