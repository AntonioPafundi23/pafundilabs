import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const projectRoot = fileURLToPath(new URL('../', import.meta.url));
export const publicRoot = resolve(projectRoot, 'public');
const pageNames = ['home', 'services', 'financial-services', 'review', 'about', 'contact', 'not-found'];
const styleNames = ['tokens', 'base', 'components', 'pages', 'responsive'];

export async function build() {
  // The dev watcher runs this file in a fresh process so imports never go stale.
  const { layout } = await import('../src/components/layout.mjs');
  const { site } = await import('../src/content/site.mjs');
  const pages = await Promise.all(pageNames.map(async (name) => (await import(`../src/pages/${name}.mjs`)).default));
  for (const page of pages) {
    const destination = resolve(publicRoot, page.path === '/404.html' ? '404.html' : `.${page.path}index.html`);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, layout({ ...page, body: page.render() }));
  }
  const styles = await Promise.all(styleNames.map(async (name) => `/* ${name}.css */\n${await readFile(resolve(projectRoot, 'src/styles', `${name}.css`), 'utf8')}`));
  await writeFile(resolve(publicRoot, 'styles.css'), `${styles.join('\n').trimEnd()}\n`);
  const urls = pages.filter((page) => !page.noindex).map((page) => `  <url><loc>${site.origin}${page.path}</loc></url>`).join('\n');
  await writeFile(resolve(publicRoot, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/sitemap/0.9">\n${urls}\n</urlset>\n`);
  return pages;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await build();
  process.stdout.write('Built 6 pages, 404, shared styles and sitemap.\n');
}
