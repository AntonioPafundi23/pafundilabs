import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml' };
const port = Number(process.env.PORT || 4173);
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (!path.startsWith(root.endsWith(sep) ? root : root + sep) && path !== resolve(root)) {
      res.writeHead(403).end(); return;
    }
    let status = 200;
    try {
      if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
      await stat(path);
    } catch {
      path = resolve(root, '404.html'); status = 404;
    }
    const body = await readFile(path);
    res.writeHead(status, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(400).end('Bad request');
  }
});
server.listen(port, '127.0.0.1', () => process.stdout.write(`Local: http://127.0.0.1:${port}\n`));
