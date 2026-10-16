# Pafundi Labs

A small, static website for Antonio Pafundi’s independent technology advisory work. This directory is its own Git repository; the parent consulting workspace is separate.

## Preview

Requires Node.js 22 or newer. No dependency install or build is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. All deployable files live in `public/`.

You can also run `node tools/serve.mjs` directly.

## Deploy to your own Cloudflare account

This project uses Cloudflare Workers Static Assets. There is no Worker code, backend, CMS, tracking or form service.

```sh
npx wrangler login
npm run deploy
```

The included `wrangler.jsonc` uploads only `public/`. First deploy to the generated workers.dev address, then add `pafundilabs.com` as a Custom Domain in the deployed Worker’s Settings → Domains & Routes. The domain needs to be active in the same Cloudflare account. Add `www.pafundilabs.com` if desired and configure a redirect to the apex in Cloudflare. No DNS or email routing is changed by this repository.

For Cloudflare Git integration, connect this repository, leave the build command empty, and use `npx wrangler deploy` as the deploy command. Alternatively, `public/` can be uploaded as a static Cloudflare Pages site with no build step.

Official references: [Static Assets](https://developers.cloudflare.com/workers/static-assets/) and [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## Content and assets

- `public/index.html`: all page copy, links, contact address and metadata.
- `public/styles.css`: responsive styles; system fonts, no external font requests.
- `public/assets/antonio-*.webp`: optimised versions of the supplied portrait.
- `public/reviews/`: the two supplied, unchanged service PDFs. These originals still list the existing Gmail contact where present; the website uses `antonio@pafundilabs.com`.
- `public/_headers`: Cloudflare response headers.
- `public/404.html`, `robots.txt`, `sitemap.xml`: basic site housekeeping.

The contact link opens the visitor’s email application. Set up `antonio@pafundilabs.com` forwarding before going live. Outbound Gmail/Resend configuration is separate from this website. Never add mail or Cloudflare credentials to the repository.

The page uses the supplied experience and service descriptions, without testimonials or client endorsements. Copyright year is static in the footer.
