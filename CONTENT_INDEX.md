# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Build an +1 Obby Roblox guide | Find the actual builder/tycoon loop, codes, and how to play | Play on Roblox / Read How to Play | Hub | Quick answer describes the ASMR shop -> base placement -> publish -> earn loop and 2026-09-10 live API snapshot. |
| `/how-to-play` | `src/data/pages/fixed-pages.ts` (`howToPlayPage`) | Guide | Build an +1 Obby how to play | Run the ASMR shop -> base placement -> publish -> earn loop | View Builder Bases / Open Controls | Supporting hub | First-server checklist (open shop, buy first ASMR, place it, publish, monitor earnings). Includes the on-base disclaimer that ASMR names, prices, money rates, and visitor counters are not publicly documented. |
| `/stages` | `src/data/pages/fixed-pages.ts` (`stagesPage`) | Guide | Build an +1 Obby builder bases | Understand base layout, ASMR placement, and the obby publish portal | Read How to Play / View Updates | Supporting hub | Rewritten as a builder-bases reference. The stage 1/2/3/4+ roster is labeled Not part of Build an +1 Obby as of 2026-09-10. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Build an +1 Obby wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Build an +1 Obby guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Build an +1 Obby release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/codes` | `src/data/pages/fixed-pages.ts` (`codesPage`) | Wiki | Build an +1 Obby codes | Get current codes, redemption steps, and announcement channels | Read How to Play / View Updates | Answer hub | Title uses Build an +1 Obby; empty active and expired tables as of 2026-09-10. |
| `/updates` | `src/data/pages/fixed-pages.ts` (`updatesPage`) | Guide | Build an +1 Obby update | Check the latest patch timestamp and history | View Codes / Open Homepage | Supporting hub | Latest update timestamp refreshed to 2026-09-07T17:15:13Z with the 2026-09-10 live API snapshot (13,914 playing, 10,460,284 visits, 29,810 favorites). |
| `/tips` | `src/data/pages/fixed-pages.ts` (`tipsPage`) | Guide | Build an +1 Obby tips | Use +1 pickup priority, jump timing, checkpoint use | Open Controls / View Stages | Supporting hub | Out of scope for the 2026-09-11 builder basics update; left as-is. |
| `/controls` | `src/data/pages/fixed-pages.ts` (`controlsPage`) | Wiki | Build an +1 Obby controls | Get the standard Roblox keyboard, mouse, and mobile bindings, including ASMR placement | Read How to Play / Open Homepage | Answer hub | Builder row added for ASMR placement (click) and obby publish (click portal). |
| `/faq` | `src/data/pages/site-pages.ts` (`faqPage`) | Guide | Build an +1 Obby FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` (`aboutPage`) | Utility | about Build an +1 Obby Guide | Trust and editorial policy | Contact | Trust | Mission, sourcing, and scope updated to describe the builder/tycoon loop. |
| `/contact` | `src/data/pages/site-pages.ts` (`contactPage`) | Utility | contact Build an +1 Obby Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` (`privacyPolicyPage`) | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` (`termsPage`) | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Builder basics: `/how-to-play`, `/stages` (treated as builder bases), `/`
- Launch facts and updates: `/updates`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Code surface: `/codes`
- Controls and tip surface: `/controls`, `/tips`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.
- How to play should link to builder bases, controls, and the official Roblox game page.
- Builder bases should link to how to play and updates.
- Updates should link to codes and the homepage.

## Open Questions

- The /tips page still frames guidance around a stage-runner loop; the next content-editor pass should align it with the builder/tycoon model.
- The Roblox Games API does not publish ASMR names, shop prices, money-per-visitor rates, or per-obby visitor counters; the on-base disclaimer must stay current until the creator publishes those numbers.
