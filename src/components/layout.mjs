import { site } from '../content/site.mjs';
import { escapeHtml } from './ui.mjs';

function wordmark() {
  return '<span class="brand-mark" aria-hidden="true">p.</span><span>pafundi<span class="brand-light">labs</span><span class="brand-dot">.</span></span>';
}

export function layout({ path, title, description, body, noindex = false }) {
  const fullTitle = `${title} — ${site.name}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f5f4ee">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  ${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${site.origin}${path}">`}
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(fullTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${site.origin}${path}">
  <meta property="og:site_name" content="${escapeHtml(site.name)}">
  <meta property="og:image" content="${site.origin}/assets/pafundi-labs-social.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="1024">
  <meta property="og:image:alt" content="Pafundi Labs logo">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:image" content="${site.origin}/assets/pafundi-labs-social.png">
  <meta name="twitter:image:alt" content="Pafundi Labs logo">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header wrap"><a class="wordmark" href="/" aria-label="Pafundi Labs home"${path === '/' ? ' aria-current="page"' : ''}>${wordmark()}</a><nav aria-label="Main navigation">${site.navigation.map((item) => `<a href="${item.href}"${path === item.href ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav></header>
  <main id="main">${body}</main>
  <footer class="site-footer wrap"><div><a class="wordmark footer-wordmark" href="/" aria-label="Pafundi Labs home">${wordmark()}</a><p>Independent thinking.<br>Founder-led delivery.</p></div><div class="footer-links"><a href="mailto:${site.email}">${site.email}</a><a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">Antonio on LinkedIn <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></div><p class="copyright">© ${new Date().getUTCFullYear()} ${site.name}</p></footer>
</body>
</html>\n`;
}
