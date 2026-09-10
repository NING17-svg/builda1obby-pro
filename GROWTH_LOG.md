# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-11 - Builder basics: ASMR shop, base building, money loop

- Task: Rewrite the homepage quickAnswer and the /how-to-play page to describe the actual builder/tycoon loop (ASMR shop -> base placement -> publish obby -> earn money from visitors) per the official Roblox description for Universe 10577682617. Add a first-server checklist (open shop, buy first ASMR, place it, publish, monitor earnings). Refresh the live stats to the 2026-09-10 API snapshot and the latest update timestamp to 2026-09-07T17:15:13Z. Update the title to Build an +1 Obby. Rewrite or retire the /stages page (which used to list Stage 1 / Stage 2 / Stage 3 / Stage 4+ as Not announced) to a builder-bases reference, cross-link it from the homepage, and add a disclaimer that ASMR names, prices, money rates, and visitor counters are not publicly documented.
- Files changed: `src/data/site.ts`, `src/data/pages/home.ts`, `src/data/pages/fixed-pages.ts` (`howToPlayPage`, `stagesPage`, `updatesPage`, `controlsPage`, `codesPage`), `src/data/pages/site-pages.ts` (`faqPage`, `aboutPage`), `src/data/faq.ts`, `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- URLs affected: `/`, `/how-to-play`, `/stages`, `/codes`, `/updates`, `/controls`, `/faq`, `/about`, `/privacy-policy`, `/terms`.
- SEO/GEO changed: Homepage and /how-to-play quickAnswers now describe the ASMR shop -> base placement -> publish -> earn loop. /stages is now a builder-bases reference; the stage 1/2/3/4+ roster is labeled Not part of Build an +1 Obby as of 2026-09-10. H1 and SEO title across the site use Build an +1 Obby. Live stats on /, /how-to-play, and /updates use the 2026-09-10 API snapshot. New FAQ items added: what-does-builder-tycoon-do, where-to-find-asmr-prices.
- Verification: `npm run verify` required before push.

### 2026-09-10 - Adsterra fixed six-unit ads-on baseline added

- Task: Replace the six empty Adsterra placeholder values with real publisher code from the fixed Native Banner, 728x90, 468x60, 320x50, 160x600, and Smartlink units for builda1obby.pro.
- Files changed: `src/data/ads.ts`.
- URLs affected: None.
- SEO/GEO changed: None.
- Ad baseline: Six fixed Adsterra unit values populated; Smartlink is the standard HTTP(S) smartlink URL and the remaining five units carry their standard script tags. The page DOM container keeps rendering the unit values directly without a sandboxed `srcDoc` iframe.
- Verification: `npm run verify` required before push.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
