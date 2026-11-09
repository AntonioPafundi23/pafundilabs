import { createServer } from 'node:http';
import { watch } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml' };
const port = Number(process.env.PORT || 4173);
const run = promisify(execFile);
const buildFile = fileURLToPath(new URL('./build.mjs', import.meta.url));
const sourceRoot = fileURLToPath(new URL('../src/', import.meta.url));

await run(process.execPath, [buildFile]);
let building = false;
let queued = false;
let debounce;
async function rebuild() {
  queued = true;
  if (building) return;
  building = true;
  try {
    while (queued) {
      queued = false;
      try {
        await run(process.execPath, [buildFile]);
        process.stdout.write('Rebuilt. Refresh the browser to see the changes.\n');
      } catch (error) {
        process.stderr.write(`Build failed: ${error.stderr || error.message}\n`);
      }
    }
  } finally { building = false; }
}
const watcher = watch(sourceRoot, { recursive: true }, () => {
  clearTimeout(debounce);
  debounce = setTimeout(rebuild, 75);
});
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end(); return;
  }
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
server.on('error', (error) => {
  watcher.close();
  process.stderr.write(error.code === 'EADDRINUSE' ? `Port ${port} is already in use. Stop the old preview or set PORT to another value.\n` : `${error.message}\n`);
  process.exitCode = 1;
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => {
  clearTimeout(debounce);
  watcher.close();
  server.close();
});
