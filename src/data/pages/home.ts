import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: `${site.gameName} — Roblox Builder/Tycoon Codes, Updates, and How to Play`,
  seoTitle: `${site.gameName}: Roblox Builder/Tycoon Loop, Codes, and How to Play`,
  metaDescription:
    `${site.gameName} is the new Roblox builder/tycoon where you buy ASMR from the shop, place them at your base, and publish an obby that earns you money from visitors. Find how to play, codes, and update notes for Universe 10577682617.`,
  summary:
    "An English-language reference hub for the new Roblox builder/tycoon Universe 10577682617 — the ASMR shop → base placement → publish → earn loop, current codes, the latest update notes, and the standard Roblox controls map.",
  hero: {
    eyebrow: site.gameName,
    subtitle:
      "A new Roblox builder/tycoon: buy ASMR from the shop, place them down at your base to build your +1 obby, publish it, and earn money when visitors play. Universe 10577682617, Creator Group Aeolian Harp.",
    ctas: [
      { label: "Play on Roblox", href: "https://www.roblox.com/games/10577682617" },
      { label: "Read How to Play", href: "/how-to-play" },
    ],
  },
  quickAnswer:
    `${site.gameName} is a new Roblox builder/tycoon from Creator Group Aeolian Harp where you buy ASMR items from the in-game shop, place them at your base to build a +1 obby, publish it, and earn money from visitors who play it. Universe 10577682617 was created on 2026-07-27 and the latest documented update was published on 2026-09-07 (13,914 concurrent players, 10,460,284 visits, 29,810 favorites). Use this page to learn the builder loop, the current codes, and the latest patch notes — and read the on-base disclaimer for the details that are not yet publicly documented.`,
  keyFacts: [
    { label: "Universe ID", value: "10577682617" },
    { label: "Creator group", value: "Aeolian Harp" },
    { label: "Created", value: "2026-07-27" },
    { label: "Playing now", value: "13,914 (2026-09-10 API snapshot)" },
    { label: "Visits", value: "10,460,284 (2026-09-10 API snapshot)" },
    { label: "Favorites", value: "29,810 (2026-09-10 API snapshot)" },
    { label: "Last update", value: "2026-09-07T17:15:13Z" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "What is " + site.gameName + " on Roblox?",
      body:
        `${site.gameName} is a Roblox Experience published under Roblox Universe ID 10577682617 and attributed to the Creator Group Aeolian Harp. The official description states the loop directly: buy ASMR from the shop, place them down at your base to build your +1 obby, publish the obby, and earn money from visitors. The 2026-09-10 live API snapshot shows 13,914 concurrent players, 10,460,284 visits, and 29,810 favorites, with the most recent update timestamp of 2026-09-07T17:15:13Z. The Universe is brand-new — created on 2026-07-27 — so there is no prior release, no legacy version, and no separate title. The phrases "build a 1 obby" and "+1 obby" both refer to the same Universe; they are not different games.`,
    },
    {
      id: "mechanic-overview",
      type: "prose",
      heading: "How the builder/tycoon loop works",
      body:
        "Each server hosts a small group of builders, each with their own base. The core loop is: open the shop, buy ASMR items with the in-game money you start with, walk to your base plot, place the ASMR down to assemble a +1 obby, publish the obby so other players can join, and watch the money counter climb while visitors play. Visitors arrive in your obby from the public listing, not from a stage queue, and your earnings depend on how many players finish the obby you designed. There is no fixed stage list and no sequential stage-runner progression — what visitors play is the obby you built.",
    },
    {
      id: "entry-points",
      type: "entity-grid",
      heading: "Where to find how-to-play, codes, updates, and builder references",
      items: [
        {
          title: "How to play",
          summary: "First-builder walkthrough of the ASMR shop → base placement → publish → earn loop, plus a first-server checklist.",
          href: "/how-to-play",
        },
        {
          title: "Builder bases",
          summary: "What a base layout looks like, the role of the obby publish portal, and the building choices you have today.",
          href: "/stages",
        },
        {
          title: "Codes",
          summary: "Currently redeemable codes published on Creator Group Aeolian Harp channels, a redemption walkthrough, and an archive of expired codes.",
          href: "/codes",
        },
        {
          title: "Updates",
          summary: "Latest patch summaries for Universe 10577682617, including new ASMR items, balance changes, and limited-time events.",
          href: "/updates",
        },
      ],
    },
    {
      id: "not-documented",
      type: "callout",
      tone: "caution",
      title: "What is not publicly documented yet",
      body:
        "The official Roblox game page and the Creator Group Aeolian Harp social channels have not published concrete ASMR names, shop prices, money-per-visitor rates, or per-obby visitor counters as of 2026-09-10. This site therefore does not invent those numbers — for the current shop lineup, prices, and earn rates, open the in-game shop and read the Creator Group Aeolian Harp announcements on X and Discord.",
    },
    {
      id: "if-you-only-have-a-minute",
      type: "callout",
      tone: "tip",
      title: "If you only have a minute",
      body:
        "Start with the how-to-play walkthrough if you are about to open the game for the first time. The first thing you do in a new server is open the shop, buy the cheapest ASMR, place it at your base, publish the obby, and watch the earnings counter for the first 60 seconds. If you only have a question about what just changed, jump straight to updates. Codes drop first on the Creator Group Aeolian Harp channels and are tracked on the codes page.",
    },
  ],
  faqIds: ["what-is-builda1obby", "is-builda1obby-free", "are-codes-active", "what-does-builder-tycoon-do", "when-released"],
  relatedPageIds: ["guides", "wiki", "build-a-1-obby-codes", "build-a-1-obby-updates"],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};
