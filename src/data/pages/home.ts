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
  h1: `${site.gameName} — Roblox Codes, Stages, Updates, and How to Play`,
  seoTitle: `${site.gameName}: Roblox Codes, Stages, and How to Play`,
  metaDescription:
    `${site.gameName} (also styled Build a 1 Obby) is the new Roblox obby where every +1 pickup grows your character. Find current codes, stages, controls, and update notes for Universe 10577682617.`,
  summary:
    "An English-language reference hub for the new Roblox +1 obby Universe 10577682617 — current codes, the curated stage roster, how-to-play walkthrough, latest update notes, and the standard controls map.",
  hero: {
    eyebrow: site.gameName,
    subtitle:
      "A Roblox obstacle-course game where every +1 pickup you collect grows your character for the rest of the run. Universe 10577682617, Creator Group Aeolian Harp.",
    ctas: [
      { label: "Play on Roblox", href: "https://www.roblox.com/games/10577682617" },
      { label: "Read How to Play", href: "/how-to-play" },
    ],
  },
  quickAnswer:
    `${site.gameName} (also styled Build a 1 Obby) is a new Roblox obstacle-course game from Creator Group Aeolian Harp where every +1 pickup you collect along the obby makes your character bigger or stronger. Universe 10577682617 was created on 2026-07-27 and last updated 2026-09-04. Use this page to find current codes, the full stage list, controls, and the latest patch notes.`,
  keyFacts: [
    { label: "Universe ID", value: "10577682617" },
    { label: "Creator group", value: "Aeolian Harp" },
    { label: "Created", value: "2026-07-27" },
    { label: "Last update", value: "2026-09-04" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "What is " + site.gameName + " on Roblox?",
      body:
        `${site.gameName} is a Roblox Experience published under Roblox Universe ID 10577682617 and attributed to the Creator Group Aeolian Harp. It entered the Roblox Build now up-and-coming list at rank 10 on 2026-09-05, with a brief snapshot of 10,196 concurrent players, 4,671,223 visits, and 13,178 favorites. The Universe is brand-new — created on 2026-07-27 — so there is no prior release, no legacy version, and no separate title. The phrases "build a 1 obby" and "+1 obby" both refer to the same Universe; they are not different games.`,
    },
    {
      id: "mechanic-overview",
      type: "prose",
      heading: "How the +1 pickup mechanic works",
      body:
        "Each stage is an obstacle-course corridor filled with platforms, jumps, and traps. As you run the corridor, +1 pickups are scattered along the route, and each pickup adds to your character's scale or strength rather than spending a currency or unlocking a permanent build. The core loop is simple to learn but punishing to master: enter a stage, collect +1 pickups to grow, finish the stage, move to the next. Respawns typically send you back to the last checkpoint you passed inside the stage.",
    },
    {
      id: "entry-points",
      type: "entity-grid",
      heading: "Where to find codes, stages, updates, and how-to-play guides",
      items: [
        {
          title: "Codes",
          summary: "Currently redeemable codes published on Creator Group Aeolian Harp channels, a redemption walkthrough, and an archive of expired codes.",
          href: "/codes",
        },
        {
          title: "Updates",
          summary: "Latest patch summaries for Universe 10577682617, including new stages, balance changes, and limited-time events.",
          href: "/updates",
        },
        {
          title: "How to play",
          summary: "First-time-player walkthrough of the match loop: what the +1 pickup does, when to grab it, and how the obby checkpoints work.",
          href: "/how-to-play",
        },
        {
          title: "Stages",
          summary: "Curated stage roster with documented entries, plus explicit labels for any unannounced entries.",
          href: "/stages",
        },
      ],
    },
    {
      id: "if-you-only-have-a-minute",
      type: "callout",
      tone: "tip",
      title: "If you only have a minute",
      body:
        "Start with the how-to-play walkthrough if you are about to open the game for the first time. If you only have a question about what just changed, jump straight to updates. Codes drop first on the Creator Group Aeolian Harp channels and are tracked on the codes page.",
    },
  ],
  faqIds: ["what-is-builda1obby", "is-builda1obby-free", "are-codes-active", "how-many-stages", "when-released"],
  relatedPageIds: ["build-a-1-obby-codes", "guides", "wiki", "build-a-1-obby-updates"],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};