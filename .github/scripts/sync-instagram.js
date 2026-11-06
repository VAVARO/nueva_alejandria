/**
 * Script de sincronización automática de Instagram para Nueva Alejandría
 * Ejecutado por GitHub Actions cada 6 horas o manualmente vía workflow_dispatch.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '../..');
const ASSETS_DIR = path.join(ROOT, 'assets');
const JSON_FILE = path.join(ASSETS_DIR, 'instagram.json');

const TOKEN = process.env.IG_ACCESS_TOKEN;
const USER_ID = process.env.IG_USER_ID || 'me';

function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', ...headers } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, headers).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => { fileStream.close(); resolve(true); });
    }).on('error', reject);
  });
}

async function fetchFromMetaApi() {
  const url = `https://graph.facebook.com/v19.0/${USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url&limit=3&access_token=${TOKEN}`;
  console.log('Consultando Meta Graph API...');
  const res = await fetchUrl(url);
  if (res.status === 200) {
    const json = JSON.parse(res.data);
    return json.data || [];
  }
  console.warn('Meta Graph API respondió con código:', res.status, res.data);
  return null;
}

function truncateCaption(text, max = 120) {
  if (!text) return '';
  const clean = text.replace(/[\r\n]+/g, ' ').trim();
  if (clean.length <= max) return `«${clean}»`;
  return `«${clean.slice(0, max)}...»`;
}

function inferBadge(caption) {
  const lower = (caption || '').toLowerCase();
  if (lower.includes('podcast') || lower.includes('episodio') || lower.includes('entrevista')) return 'Podcast · Diálogo';
  if (lower.includes('saturno') || lower.includes('carta natal') || lower.includes('astrología') || lower.includes('tránsito')) return 'Astrología Viva';
  if (lower.includes('encuentro') || lower.includes('taller') || lower.includes('curso') || lower.includes('escuela')) return 'Episodio & Encuentro';
  return 'Cuaderno Abierto';
}

function generatePostCardHtml(post) {
  return `          <article class="ig-post-card">
            <div class="ig-post-card-header">
              <span class="ig-post-badge">${post.badge}</span>
              <a class="ig-post-ext" href="${post.url}" target="_blank" rel="noopener noreferrer" title="Abrir en Instagram">
                <span>${post.handle || '@aledealejandria'}</span> ↗
              </a>
            </div>
            <a class="ig-post-media-link" href="${post.url}" target="_blank" rel="noopener noreferrer">
              <div class="ig-post-img-wrapper">
                <img src="${post.image}" alt="Publicación de Alejandra Silva en Instagram" class="ig-post-img" loading="lazy">
                <span class="ig-post-img-badge">Instagram ↗</span>
              </div>
            </a>
            <div class="ig-post-card-body">
              <p class="ig-post-caption">${post.caption}</p>
              <a class="ig-post-card-cta" href="${post.url}" target="_blank" rel="noopener noreferrer">
                <span>Ver publicación en Instagram</span> →
              </a>
            </div>
          </article>`;
}

function updateHtmlFiles(posts) {
  const targetFiles = [
    path.join(ROOT, 'nueva_alejandría.html'),
    path.join(ROOT, 'conversaciones.html')
  ];

  const gridHtml = `        <div class="ig-feed-grid">\n${posts.map(generatePostCardHtml).join('\n\n')}\n        </div>`;

  targetFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    const regex = /<div class="ig-feed-grid">[\s\S]*?<\/div>/;
    if (regex.test(content)) {
      content = content.replace(regex, gridHtml.trim());
      fs.writeFileSync(file, content, 'utf8');
      console.log('Actualizado:', path.basename(file));
    }
  });
}

async function run() {
  console.log('--- Iniciando sincronización de Instagram ---');
  let currentPosts = fs.existsSync(JSON_FILE) ? JSON.parse(fs.readFileSync(JSON_FILE, 'utf8')) : [];

  let newPostsData = null;
  if (TOKEN) {
    try {
      newPostsData = await fetchFromMetaApi();
    } catch (e) {
      console.error('Error al consultar Meta Graph API:', e.message);
    }
  } else {
    console.log('No se detectó IG_ACCESS_TOKEN en las variables de entorno.');
    console.log('Para conectar la API oficial de Meta Graph, añade IG_ACCESS_TOKEN e IG_USER_ID en los Secrets del repositorio.');
  }

  if (newPostsData && newPostsData.length >= 3) {
    console.log(`Recibidas ${newPostsData.length} publicaciones desde Meta API. Procesando las 3 más recientes...`);
    const formatted = [];
    for (let i = 0; i < 3; i++) {
      const p = newPostsData[i];
      const filename = `ig_post_${i + 1}.jpg`;
      const dest = path.join(ASSETS_DIR, filename);
      const rawImageUrl = p.media_url || p.thumbnail_url;
      if (rawImageUrl) {
        try {
          await downloadImage(rawImageUrl, dest);
          console.log(`Imagen descargada en ${filename}`);
        } catch (e) {
          console.warn(`No se pudo descargar la imagen para post ${p.id}:`, e.message);
        }
      }
      formatted.push({
        id: p.id,
        url: p.permalink || `https://www.instagram.com/p/${p.id}/`,
        image: `./assets/${filename}`,
        badge: inferBadge(p.caption),
        handle: '@aledealejandria',
        caption: truncateCaption(p.caption)
      });
    }

    fs.writeFileSync(JSON_FILE, JSON.stringify(formatted, null, 2), 'utf8');
    updateHtmlFiles(formatted);
    console.log('Sincronización completada con datos nuevos de Meta API.');
  } else {
    console.log('Manteniendo publicaciones vigentes verificadas.');
    if (currentPosts.length >= 3) {
      updateHtmlFiles(currentPosts);
    }
  }
}

run().catch(err => {
  console.error('Error fatal en sincronización:', err);
  process.exit(1);
});
