import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build, publicRoot } from './build.mjs';
import { site, founderOffers, bookingLink } from '../src/content/site.mjs';

const pages = await build();
const documents = new Map();
const titles = new Set();
const idsIn = (html) => [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
for (const page of pages) {
  const file = resolve(publicRoot, page.path === '/404.html' ? '404.html' : `.${page.path}index.html`);
  const html = await readFile(file, 'utf8');
  documents.set(page.path, html);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `One h1 required: ${page.path}`);
  assert.equal(new Set(idsIn(html)).size, idsIn(html).length, `Duplicate IDs: ${page.path}`);
  assert(!/<script\b/.test(html), `Unexpected browser script: ${page.path}`);
  assert(!/€2,200|EUR 2,200|\[INSERT|\[ADD YOUR/.test(html), `Stale copy or placeholder: ${page.path}`);
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);
  if (!page.noindex) {
    assert(html.includes(`<link rel="canonical" href="${site.origin}${page.path}">`));
    assert.equal([...html.matchAll(/aria-current="page"/g)].length, 1, `Missing current-page navigation: ${page.path}`);
  }
}

let linksChecked = 0;
for (const [path, html] of documents) {
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(raw)) continue;
    const target = new URL(raw.replaceAll('&amp;', '&'), `${site.origin}${path}`);
    const route = target.pathname;
    let destination = resolve(publicRoot, `.${route}`);
    if (route.endsWith('/')) destination = resolve(destination, 'index.html');
    assert((await stat(destination)).isFile(), `Broken asset/link: ${path} -> ${raw}`);
    if (target.hash) {
      const targetHtml = documents.get(route) ?? await readFile(destination, 'utf8');
      assert(idsIn(targetHtml).includes(decodeURIComponent(target.hash.slice(1))), `Broken anchor: ${path} -> ${raw}`);
    }
    linksChecked++;
  }
}
assert(documents.get('/services/').includes(site.fee), 'Review price missing');
assert(!documents.get('/').includes(site.fee), 'Homepage should distinguish engagement types, not advertise a universal fee');
assert(!documents.get('/contact/').includes(site.fee), 'Contact should cover individually scoped engagements');
const sitemap = await readFile(resolve(publicRoot, 'sitemap.xml'), 'utf8');
assert.equal([...sitemap.matchAll(/<loc>/g)].length, 6, 'Sitemap should list the six public pages');
assert(documents.get('/review/').includes('From US$1,500'), 'Founder offer pricing missing');
assert(documents.get('/review/').includes('Book a call with Antonio'), 'Founder booking CTA missing');
assert(documents.get('/review/').includes('Book an introductory call'), 'Final booking CTA missing');
assert(!documents.get('/review/').includes('What this is not'), 'Defensive exclusions should not appear on /review/');
assert(!documents.get('/review/').includes('not a junior team'), 'Negative comparison copy should not appear on /review/');
assert(documents.get('/review/').includes('Production Systems'), 'Founder credibility strip should emphasise production systems');
assert(documents.get('/review/').includes('Confidential discussions. NDA available on request.'), 'Confidentiality note missing');
assert(documents.get('/review/').includes(site.bookingUrl), 'Cal.com booking URL missing');
assert(documents.get('/review/').includes(`${site.bookingServiceParam}=`), 'Cal.com service prefill missing');
assert(!documents.get('/review/').includes('href="/contact/">Book a call with Antonio'), 'Booking CTAs must not point at contact');
assert(!documents.get('/review/').includes('href="/contact/">Book an introductory call'), 'Final CTA must not point at contact');
for (const offer of founderOffers) {
  assert(documents.get('/review/').includes(`id="${offer.id}"`), `Missing service anchor #${offer.id}`);
  assert(documents.get('/review/').includes(bookingLink(offer.calService)), `Missing Cal.com prefill for ${offer.id}`);
  for (const alias of offer.aliases || []) {
    assert(documents.get('/review/').includes(`id="${alias}"`), `Missing legacy anchor #${alias}`);
  }
}
assert(documents.get('/review/').includes(bookingLink()), 'Generic Cal.com booking link missing');
assert(documents.get('/review/').includes('href="#offers"'), 'Explore services jump link missing');
process.stdout.write(`Checked ${pages.length} pages and ${linksChecked} local links/assets. Titles, anchors, navigation, pricing and sitemap passed.\n`);
