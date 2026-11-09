# Pafundi Labs

A six-page, founder-led technology consultancy website. This folder is its own Git repository; the parent consulting workspace is separate.

The site ships plain HTML and CSS, with no browser JavaScript, runtime framework, third-party fonts or package dependencies. A small Node.js build composes shared components and content into static pages.

## Run locally

Requires Node.js 22 or newer. No install is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173/. The dev server builds once and watches `src/`; after an edit, refresh the browser. Stop any older preview server and restart to enable the source watcher. Alternatively use `PORT=4174 npm run dev`.

## Structure and editing

```text
src/
  content/site.mjs       Brand, contact details, pricing, services, review data
  components/layout.mjs Shared HTML head, navigation and footer
  components/ui.mjs     Shared buttons, cards, sections and portrait
  pages/                Home, Services, Financial services, For founders (/review), About, Contact, 404
  styles/               Tokens, base, components, pages, responsive rules
tools/
  build.mjs             Generate static HTML, CSS and sitemap
  check.mjs             Build and validate pages, links, assets and metadata
  serve.mjs             Local static server and source watcher
public/                 Deployable output, plus maintained assets and PDFs
```

Edit `src/`, then build; HTML and `styles.css` in `public/` are generated. The build preserves maintained PDFs, images, headers and other assets. Generated output is tracked so it can also be uploaded directly to static hosting.

Change review pricing in `src/content/site.mjs`. PDFs are separate maintained documents: update both `public/reviews/` files if the price or scope changes. Their current fee is US$2,500. Workspace originals live outside this repository in the parent consulting folder.

To add a page, create its module in `src/pages/`, register it in `tools/build.mjs`, and add navigation in `src/content/site.mjs` if appropriate. The layout supplies metadata and active navigation; the sitemap comes from public page routes. Update the check's expected page count when adding a page.

## Build and checks

```sh
npm run build
npm run check
```

Checks cover local links and anchors, asset existence, duplicate IDs, one primary heading per page, unique titles, canonical URLs, active navigation, stale pricing and sitemap entries. They complement browser checks for responsive layout, keyboard navigation and content quality.

Mobile navigation keeps all destinations visible without a JavaScript menu. Contact has a visible email address, a mailto link and a LinkedIn alternative; there is no form backend. Old homepage anchors `#reviews`, `#about` and `#contact` still exist. The founder offers page lives at `/review/`; booking CTAs use `site.bookingUrl` (Cal.com) and prefill `Which-service-are-you-interested-in` from each offer’s `calService` value.

## Deploy

Released to https://pafundilabs.com on 17 October 2026. Cloudflare version: `4cdc4e69-a3ae-4b72-a215-f8792d541491`. All five pages, both PDF downloads, sitemap and custom 404 were checked on the public domain after deployment.

Cloudflare Workers Static Assets serves `public/`. The existing Worker is `pafundilabs`; custom domains stay configured in Cloudflare.

```sh
npx wrangler login
npm run deploy
```

The deploy script checks the site first. Wrangler also runs the build when invoked directly. For Git integration, use `npm run check` as the build command and `npx wrangler deploy` as the deploy command. For other static hosts, build and upload `public/`; no server runtime is needed.

Keep credentials out of the repository. Deployment does not change DNS, email forwarding or outbound mail. The `_headers` policy permits local styles and images and disables browser scripts, external connections and form submissions.

## Content boundaries

Pafundi Labs is founder-led, with Antonio directly involved. Engagement examples are illustrative service types, not completed case studies. Finance remains a dedicated area of expertise without excluding other sectors. Experience claims come from Antonio's supplied background; there are no invented testimonials, clients or team members.
