const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

export function renderLead(site) {
  const base = site.url ? site.url.replace(/\/$/, '') : '';
  return `<!doctype html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hablemos | ${e(site.name)}</title>
  <meta name="description" content="Cuéntale a Adri sobre tu marca, campaña y entregables para recibir una propuesta de colaboración UGC.">
  <meta name="theme-color" content="#f7f4ec">
  ${base ? `<link rel="canonical" href="${e(base)}/hablemos/">` : ''}
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
  <link rel="preload" href="/fonts/cormorant-garamond-latin-500-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/dm-sans-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/lead.css">
  <script src="https://js.hsforms.net/forms/embed/52036222.js" defer></script>
</head>
<body class="lead-page">
  <a class="skip-link" href="#formulario">Saltar al formulario</a>
  <header class="lead-header wrap">
    <a class="wordmark" href="/" aria-label="Volver al inicio">adri<span>.</span></a>
    <div class="header-descriptor">
      <span>Adriana Seijas</span>
      <span>${e(site.role)} · ${e(site.city)}</span>
    </div>
    <a class="lead-back" href="/">← Volver al portafolio</a>
  </header>

  <main class="lead-shell wrap">
    <section class="lead-copy" aria-labelledby="lead-title">
      <span class="lead-eyebrow"><i aria-hidden="true"></i> COLABORACIONES UGC</span>
      <h1 id="lead-title">Cuéntame sobre <em>tu campaña.</em></h1>
      <p class="lead-intro">Si tu marca acompaña la maternidad, la infancia, el bienestar o la vida en familia, tenemos una historia por contar.</p>

      <div class="lead-expectations" aria-label="Qué sucede después de enviar el formulario">
        <article>
          <span>01</span>
          <div><h2>Reviso tu brief</h2><p>Producto, objetivo, entregables, tiempos y derechos de uso.</p></div>
        </article>
        <article>
          <span>02</span>
          <div><h2>Te respondo</h2><p>En 1–2 días hábiles con disponibilidad y próximos pasos.</p></div>
        </article>
        <article>
          <span>03</span>
          <div><h2>Armamos la propuesta</h2><p>Alcance y tarifa en pesos mexicanos, de acuerdo con la campaña.</p></div>
        </article>
      </div>

      <p class="lead-note">Facturación fiscal disponible en México (SAT) · Atención en español</p>
    </section>

    <section class="lead-form-card" id="formulario" aria-labelledby="form-title">
      <div class="form-card-heading">
        <span>SOLICITUD DE COLABORACIÓN</span>
        <h2 id="form-title">Hablemos de tu marca</h2>
        <p>Los campos con * son obligatorios.</p>
      </div>
      <div class="hs-form-frame" data-region="na1" data-form-id="4ce2d475-ba60-4534-bda0-ad4deaaaea41" data-portal-id="52036222"></div>
      <noscript>Activa JavaScript para enviar el formulario o escribe a <a href="mailto:${e(site.email)}">${e(site.email)}</a>.</noscript>
    </section>
  </main>

  <footer class="lead-footer wrap">
    <span>© 2026 Adriana Seijas · Ciudad de México</span>
    <a href="${e(site.instagramUrl)}" target="_blank" rel="noopener noreferrer">Instagram ${e(site.instagram)} ↗</a>
  </footer>
</body>
</html>`;
}
