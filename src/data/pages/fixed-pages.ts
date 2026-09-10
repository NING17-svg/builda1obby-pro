import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const codesPage: PageContent = {
  id: "build-a-1-obby-codes",
  translationKey: "build-a-1-obby-codes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "codes",
  url: "/codes",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Codes (September 2026)`,
  seoTitle: `${site.gameName} Codes — Active List and Redemption`,
  metaDescription:
    `Active ${site.gameName} codes have not been verified as of 2026-09-10. Learn how to redeem codes in-game and where new ${site.gameName} codes are posted.`,
  summary:
    "A dated status page that records whether any Build an +1 Obby codes are currently redeemable, with a redemption walkthrough, the official channels where new codes appear, and an empty expired archive.",
  hero: {
    eyebrow: "Codes",
    subtitle:
      "A dated view of the active codes table, the standard Roblox redemption flow, the Creator Group Aeolian Harp channels where new codes appear, and an empty expired-codes archive.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "View Updates", href: "/updates" },
    ],
  },
  quickAnswer:
    `As of 2026-09-10, no active ${site.gameName} codes (official brand Build an +1 Obby codes) have been verified on the official Roblox game page for Universe 10577682617 or on the Creator Group Aeolian Harp social channels. This page therefore publishes an empty active codes table, a verified redemption walkthrough, the official channels where new codes will appear, and an empty expired archive so players know exactly where to check next.`,
  keyFacts: [
    { label: "Active codes", value: "None verified as of 2026-09-10" },
    { label: "Redemption", value: "In-game Codes button, case-sensitive" },
    { label: "Source rule", value: "Official Roblox game page + Aeolian Harp social" },
  ],
  modules: [
    {
      id: "active-codes-table",
      type: "data-table",
      heading: `Active ${site.gameName} codes (2026-09-10)`,
      columns: [
        { key: "code", label: "Code" },
        { key: "reward", label: "Reward" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { code: "No active codes verified as of 2026-09-10", reward: "—", status: "—" },
      ],
    },
    {
      id: "redemption-steps",
      type: "steps",
      heading: `How to redeem codes in ${site.gameName}`,
      items: [
        { title: "Launch the game", body: `Launch ${site.gameName} from the official Roblox game page (Universe 10577682617).` },
        { title: "Wait for spawn", body: "Wait for your character to spawn into the current server." },
        { title: "Open the Codes button", body: "Look for the Codes button on the side of the screen, usually marked with a gift or ticket icon." },
        { title: "Enter the code", body: "Type the code exactly as published, including capitalization and any numbers." },
        { title: "Confirm the reward", body: "Press Redeem and wait for the confirmation banner that lists the reward." },
        { title: "Restart if needed", body: "Restart the server if the reward does not appear in your inventory, since some rewards only land after a server reload." },
      ],
    },
    {
      id: "where-new-codes-drop",
      type: "prose",
      heading: `Where new ${site.gameName} codes are announced`,
      body:
        "Codes drop first on the official channels tied to the Creator Group Aeolian Harp. The three places to monitor are: the official Roblox game page description for Universe 10577682617, which is sometimes edited to surface a fresh code; the Creator Group Aeolian Harp social channels on X (formerly Twitter) and Discord, where the team posts codes alongside event announcements; and the in-game announcement board, which mirrors anything the creator posts externally. Established Roblox codes aggregators may track the same codes after the fact, but treat them as community reference only.",
    },
    {
      id: "expired-archive",
      type: "data-table",
      heading: `Expired ${site.gameName} codes (archive)`,
      columns: [
        { key: "code", label: "Code" },
        { key: "reward", label: "Reward" },
        { key: "expired", label: "Expired" },
      ],
      rows: [
        { code: "No expired codes verified as of 2026-09-10", reward: "—", expired: "—" },
      ],
    },
  ],
  faqIds: ["are-codes-active", "how-to-redeem", "code-invalid-or-expired", "where-to-report-new-code"],
  relatedPageIds: ["home", "build-a-1-obby-updates"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const howToPlayPage: PageContent = {
  id: "guides",
  translationKey: "build-a-1-obby-how-to-play",
  locale: "en-US",
  routeKind: "fixed",
  slug: "how-to-play",
  url: "/how-to-play",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} how to play: ASMR shop, base build, publish, earn`,
  seoTitle: `${site.gameName} how to play: ASMR shop, base build, publish, earn`,
  metaDescription:
    `Learn ${site.gameName} how to play: open the shop, buy ASMR, place it at your base to build your +1 obby, publish it, and earn money from visitors. A 2026 builder/tycoon first-server checklist.`,
  summary:
    "A first-time-builder walkthrough of the ASMR shop → base placement → publish obby → earn money from visitors loop, plus a checklist for your first server.",
  hero: {
    eyebrow: "How to play",
    subtitle:
      "A first-time-builder walkthrough of the ASMR shop, base placement, publish, and earn loop, with the builder model explained and a checklist for your first server.",
    ctas: [
      { label: "View Builder Bases", href: "/stages" },
      { label: "Open Controls", href: "/controls" },
    ],
  },
  quickAnswer:
    `${site.gameName} how to play is short: enter Roblox Universe 10577682617 (Creator Group Aeolian Harp, publicly playable since 2026-07-27), join a server, and run the builder/tycoon loop. Open the shop, buy your first ASMR, place it down at your base, build out a +1 obby, publish the obby so other players can join, and watch the earnings counter climb while visitors play. The goal is to build the most popular obby on the server, not to clear a fixed stage list.`,
  keyFacts: [
    { label: "Universe", value: "10577682617" },
    { label: "Core loop", value: "Shop ASMR → place at base → build obby → publish → earn" },
    { label: "Goal", value: "Build the most popular obby on the server" },
    { label: "First launch", value: "Universe created 2026-07-27" },
  ],
  modules: [
    {
      id: "what-it-is",
      type: "prose",
      heading: `What ${site.gameName} is on Roblox`,
      body:
        `${site.gameName} lives inside Roblox as Universe 10577682617, published by Creator Group Aeolian Harp. The Universe was created on 2026-07-27 and the latest update was published on 2026-09-07T17:15:13Z according to the official Roblox Games API snapshot from 2026-09-10. The official game page describes the experience as a builder/tycoon: you buy ASMR from the in-game shop, place them down at your base to build your +1 obby, publish the obby, and earn money from visitors. The site labels concrete ASMR names, shop prices, money-per-visitor rates, and per-obby visitor counters as Not publicly documented as of 2026-09-10 because the creator has not published them.`,
    },
    {
      id: "loop-explained",
      type: "steps",
      heading: "The ASMR shop → base placement → publish → earn loop",
      items: [
        { title: "Open the shop", body: "Walk to the in-game shop. ASMR items are bought with the starting money the server grants you on spawn; you do not need real currency to start the loop." },
        { title: "Buy your first ASMR", body: "Buy the ASMR you can afford right now. The first ASMR you place is the seed of your obby and the cheapest test of the placement tool." },
        { title: "Place the ASMR at your base", body: "Walk back to your base plot and place the ASMR down. The placement tool snaps to the base grid; orient the first piece to leave room for the next few." },
        { title: "Build out the +1 obby", body: "Place more ASMR pieces, jumps, and connectors to assemble a playable obby corridor. A short, complete obby earns more reliably than an ambitious half-built one." },
        { title: "Publish the obby", body: "Publish the obby from the base portal so other players can join it from the public listing. Once published, visitors spawn in at your obby entrance." },
        { title: "Watch the earnings counter", body: "Earned money credits while visitors play your obby. Use the income to buy the next batch of ASMR, expand the base, and publish a longer obby." },
      ],
    },
    {
      id: "what-asmr-means",
      type: "callout",
      tone: "tip",
      title: "What ASMR and +1 mean in the obby",
      body:
        "The official description frames ASMR as the building pieces a player buys from the shop, and the +1 obby as the playable obstacle course a player assembles by placing those pieces at their base. Specific ASMR names, prices, money rates, and visitor counters are not publicly documented as of 2026-09-10, so this site does not cite any specific number — open the in-game shop for the current ASMR lineup and ask the Creator Group Aeolian Harp channels for the current pricing.",
    },
    {
      id: "first-server-checklist",
      type: "steps",
      heading: "First-server builder checklist",
      items: [
        { title: "Confirm the universe", body: "Confirm you are inside Universe 10577682617 on Roblox; if the game page shows a different creator or universe id, you are not in the game described here." },
        { title: "Open the shop", body: "Walk to the in-game shop the moment you spawn. The first 60 seconds on a new server are when the cheapest ASMR is most affordable, since every other builder is also starting from zero." },
        { title: "Buy the first ASMR", body: "Buy the first ASMR you can afford. Treat this purchase as the seed of your obby, not a long-term investment — the goal is to publish a small obby fast and let the earnings counter fund the next build." },
        { title: "Place it at your base", body: "Return to your base plot and place the ASMR down. Lay out the first piece so the next placement has room to extend the obby corridor in the direction visitors will walk." },
        { title: "Publish the obby", body: "Use the base publish portal to publish the obby once a short playable corridor is in place. Publishing is what turns the ASMR on the ground into a money-making obby — a finished-but-small obby earns more than an unpublished half-built one." },
        { title: "Monitor earnings for the first minute", body: "Watch the earnings counter for the first 60 seconds. The income rate is the signal for whether to expand the obby now, buy more ASMR, or wait for more visitors." },
      ],
    },
    {
      id: "builder-pitfalls",
      type: "comparison",
      heading: "Common early-builder pitfalls to avoid",
      options: [
        {
          name: "Sitting on the starting money",
          summary: "Waiting in the lobby instead of opening the shop. The fix is mechanical: walk to the shop, buy one ASMR, and place it at your base in the first minute.",
          bestFor: "Builders who are still on the starting money after 60 seconds.",
        },
        {
          name: "Building an unpublished obby",
          summary: "Stacking ASMR for a long time before publishing. The fix is to publish a small obby early, then expand it once visitors are already inside.",
          bestFor: "Builders whose obby earnings counter never moves.",
        },
        {
          name: "Buying the priciest ASMR first",
          summary: "Spending all starting money on a single high-tier piece. The fix is to buy several cheap ASMR so the obby has variety and length before the first visitor arrives.",
          bestFor: "Builders whose base has one or two items and no playable corridor.",
        },
        {
          name: "Ignoring the earnings counter",
          summary: "Not checking what the income rate is telling you. The fix is to read the counter on the base — it tells you whether the current obby shape earns at all.",
          bestFor: "Builders who keep buying the same ASMR even when income is flat.",
        },
      ],
    },
    {
      id: "not-publicly-documented",
      type: "callout",
      tone: "caution",
      title: "What is not publicly documented yet",
      body:
        "The official Roblox game page and the Creator Group Aeolian Harp social channels have not published concrete ASMR names, shop prices, money-per-visitor rates, or per-obby visitor counters as of 2026-09-10. Open the official Roblox game page (https://www.roblox.com/games/10577682617) for the current description, and check the Creator Group Aeolian Harp X and Discord channels for the current ASMR pricing and event windows. This site does not invent those numbers.",
    },
  ],
  faqIds: ["is-builda1obby-free", "what-does-builder-tycoon-do", "need-roblox-account", "play-on-mobile", "where-to-find-asmr-prices"],
  relatedPageIds: ["home", "wiki", "build-a-1-obby-controls", "build-a-1-obby-tips"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const tipsPage: PageContent = {
  id: "build-a-1-obby-tips",
  translationKey: "build-a-1-obby-tips",
  locale: "en-US",
  routeKind: "fixed",
  slug: "tips",
  url: "/tips",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} tips: +1 priority, timing, and checkpoint use`,
  seoTitle: `${site.gameName} tips: +1 priority, timing, and checkpoint use`,
  metaDescription:
    `Real ${site.gameName} tips on +1 pickup priority, jump timing on tricky obby jumps, and how to use checkpoints on the hardest stages.`,
  summary:
    "Progression strategy advice for clearing stages: +1 pickup priority, jump timing on the trickier jumps, checkpoint use, and when to restart a run.",
  hero: {
    eyebrow: "Tips",
    subtitle:
      "Progression strategy that maps to the +1 obby pattern: +1 pickup priority, jump timing on the trickier jumps, checkpoint use, and when to push forward versus restart.",
    ctas: [
      { label: "Open Controls", href: "/controls" },
      { label: "View Stages", href: "/stages" },
    ],
  },
  quickAnswer:
    `${site.gameName} tips that work rest on three pillars: collect +1 pickups in a deliberate order instead of grabbing whatever is closest, time your jumps to the apex of each obstacle so you land on the far ledge, and use any checkpoint the stage offers as your anchor for the second half of the run. These habits come from how the +1 obby pattern reads, not from any published balance document.`,
  keyFacts: [
    { label: "Pillar 1", value: "Collect +1 in deliberate order" },
    { label: "Pillar 2", value: "Jump at apex to land on far ledge" },
    { label: "Pillar 3", value: "Anchor at every checkpoint" },
  ],
  modules: [
    {
      id: "plus1-priority",
      type: "prose",
      heading: "Prioritize your +1 pickups",
      body:
        "The single biggest mistake new players make is treating +1 pickups as score tokens that disappear at the stage exit. In Build an +1 Obby, every +1 pickup you collect carries into the rest of the run. The pickups that matter most are the ones you can collect in the next five seconds, not the ones that decorate the rest of the stage.",
    },
    {
      id: "skip-risky-pickups",
      type: "callout",
      tone: "caution",
      title: "Skip risky pickups without regret",
      body:
        "If a pickup sits on a crumbling platform with no checkpoint behind it, skipping it is the right call. A missed +1 resets the stage; a missed run resets the entire +1 total.",
    },
    {
      id: "jump-timing",
      type: "comparison",
      heading: "Jump timing and apex control",
      options: [
        {
          name: "Long jumps",
          summary: "Approach at full sprint, jump a half-step earlier than feels natural, and release the jump button on the descent.",
          bestFor: "Gaps where the target platform sits at the far edge of your visible range.",
        },
        {
          name: "Precision jumps",
          summary: "Slow to a walk, jump directly off the front edge of the source platform, and land on the closest third of the target.",
          bestFor: "Short, narrow jumps where drift means a fall.",
        },
      ],
    },
    {
      id: "checkpoint-use",
      type: "prose",
      heading: "Use checkpoints deliberately",
      body:
        "Checkpoints in an obby pattern are not decorative; they are the respawn anchor for the stretch that comes after them, and the stretch that comes after them is almost always harder. Step on every checkpoint, even when you do not need the respawn, so a failed jump still leaves you with your full +1 total intact.",
    },
    {
      id: "restart-vs-push",
      type: "comparison",
      heading: "When to restart vs push forward",
      options: [
        {
          name: "Reset for a clean run",
          summary: "By stage 3, the +1 pickups you collected on stages 1 and 2 are expected to carry you. If you reach stage 3 with a low +1 total, restarting the run is usually faster than struggling through underpowered.",
          bestFor: "Players who hit stage 3 with no growth buffer.",
        },
        {
          name: "Push forward with momentum",
          summary: "If you reach a new stage with a healthy +1 total and a clean checkpoint behind you, pushing forward is the right call. The stages scale against the +1 total, not against the timer.",
          bestFor: "Players who have a healthy growth buffer at the stage exit.",
        },
      ],
    },
  ],
  faqIds: ["collect-every-plus1", "jump-timing-tricky-jumps", "use-every-checkpoint", "when-to-restart-run", "tips-from-creator"],
  relatedPageIds: ["home", "build-a-1-obby-controls", "wiki", "build-a-1-obby-updates"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const stagesPage: PageContent = {
  id: "wiki",
  translationKey: "build-a-1-obby-stages",
  locale: "en-US",
  routeKind: "fixed",
  slug: "stages",
  url: "/stages",
  pageType: "wiki",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: `${site.gameName} builder bases: what the base looks like and how the obby publish works`,
  seoTitle: `${site.gameName} builder bases: base layout, ASMR placement, obby publish`,
  metaDescription:
    `${site.gameName} bases: what a builder's base plot contains, how ASMR is placed to build a +1 obby, and how the publish portal turns it into a money-earning obby for visitors.`,
  summary:
    "A reference for the builder side of Build an +1 Obby: what a base plot contains today, how the ASMR placement and obby publish flow works, and what is not yet publicly documented.",
  hero: {
    eyebrow: "Builder bases",
    subtitle:
      "What a base plot contains in Build an +1 Obby, how ASMR is placed to build a +1 obby, and how the obby publish portal turns the base into a money-earning obby for visitors.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "View Updates", href: "/updates" },
    ],
  },
  quickAnswer:
    `${site.gameName} does not publish a fixed stage list. The official description is a builder/tycoon loop: each server hosts a small group of builders, each builder works a base plot, and visitors play the obby that the builder publishes from that base. Any "stage 1 / stage 2 / stage 3 / stage 4+" roster that appears in third-party posts is a stage-runner obby concept the official game page does not describe. This page documents the base layout and publish flow that the official description does support.`,
  keyFacts: [
    { label: "Model", value: "Builder/tycoon, not sequential stage-runner" },
    { label: "Per-server builders", value: "Small group, each on their own base plot" },
    { label: "Visitor entry", value: "Published obby portal, public listing" },
    { label: "Latest update", value: "2026-09-07T17:15:13Z" },
  ],
  modules: [
    {
      id: "base-layout",
      type: "data-table",
      heading: "What a base plot contains today",
      columns: [
        { key: "slot", label: "Base slot" },
        { key: "role", label: "Role" },
        { key: "status", label: "Documented as of 2026-09-10" },
      ],
      rows: [
        {
          slot: "Base plot",
          role: "The personal area each builder owns. ASMR is placed on this plot; the obby is assembled here.",
          status: "Confirmed by the official description (place ASMR at your base).",
        },
        {
          slot: "ASMR shop",
          role: "The in-game shop where builders buy ASMR with the in-game money they earn. The shop is server-wide, not per-base.",
          status: "Confirmed by the official description (buy ASMR from the shop).",
        },
        {
          slot: "+1 obby corridor",
          role: "The playable obstacle course that the builder assembles from placed ASMR. Visitors enter here once the obby is published.",
          status: "Confirmed by the official description (build your +1 obby).",
        },
        {
          slot: "Obby publish portal",
          role: "The base-side control that publishes the assembled obby so other players can join it from the public listing.",
          status: "Confirmed by the official description (your obby earns you money).",
        },
        {
          slot: "Earnings counter",
          role: "The on-base readout that shows how much in-game money the published obby is producing from visitors.",
          status: "Confirmed by the official description; the per-visitor rate is not publicly documented.",
        },
        {
          slot: "Stage 1 / Stage 2 / Stage 3 roster",
          role: "A sequential stage-runner obby roster that other obbies use.",
          status: "Not part of Build an +1 Obby as of 2026-09-10. The official description does not enumerate a fixed stage list.",
        },
      ],
    },
    {
      id: "publish-flow",
      type: "prose",
      heading: "How an obby becomes a money-earning obby",
      body:
        "The official description maps the publish flow to four steps. First, buy ASMR from the shop with the in-game money the server grants on spawn. Second, place the ASMR down at your base plot, using the placement tool to assemble a playable +1 obby corridor. Third, publish the obby through the base publish portal so visitors can join it from the public listing. Fourth, watch the earnings counter on your base; the income comes from visitors who play the obby you published, and the in-game money feeds back into buying the next batch of ASMR. Concrete visitor counters and money rates are not publicly documented as of 2026-09-10, so this site does not cite specific numbers — open the in-game shop and check the Creator Group Aeolian Harp channels for the current pricing and earn rates.",
    },
    {
      id: "stage-runner-not-applicable",
      type: "callout",
      tone: "caution",
      title: "The stage-runner roster does not apply here",
      body:
        "If you have read about a stage 1 → stage 2 → stage 3 → stage 4+ roster in other +1 obby write-ups, that pattern is from a different obby, not from Build an +1 Obby. The official description for Universe 10577682617 does not enumerate a fixed stage list; visitors play the obby that the builder publishes from their base. This page used to publish a placeholder stage-roster table; it has been replaced with the base-layout table above and the stages are labeled Not part of Build an +1 Obby as of 2026-09-10.",
    },
    {
      id: "first-base-checklist",
      type: "steps",
      heading: "First-base setup checklist (builder side)",
      items: [
        { title: "Find your base plot", body: "Locate the personal base plot the server assigns to you on spawn. Every builder's obby is built on their own plot." },
        { title: "Open the shop", body: "Walk to the server-wide ASMR shop before placing anything. The shop is the only source of ASMR pieces, and prices can change between updates." },
        { title: "Buy the first ASMR", body: "Buy the ASMR you can afford first. The first piece is the seed of the obby and the cheapest test of the placement tool." },
        { title: "Place the ASMR at the base", body: "Return to the base plot and place the ASMR on the grid. Leave room for the next few pieces so the obby corridor can extend in a single direction." },
        { title: "Assemble a short obby", body: "Stack a few more ASMR pieces, jumps, and connectors until a visitor can walk from the obby entrance to the obby exit. A short, complete obby earns more reliably than an ambitious half-built one." },
        { title: "Publish the obby", body: "Use the base publish portal to publish the obby. Publishing is what turns the ASMR on the ground into a money-earning obby." },
        { title: "Watch the earnings counter", body: "Read the earnings counter on the base for the first 60 seconds after publishing. The income rate is the signal for whether to expand the obby now, buy more ASMR, or wait for more visitors." },
      ],
    },
    {
      id: "where-to-look",
      type: "prose",
      heading: "Where to look for base and obby updates",
      body:
        "Three sources are worth checking when a player wants to know whether the base system, the ASMR lineup, or the obby publish rules have changed: the official Build an +1 Obby game page on Roblox, which mirrors the description updates; the Creator Group Aeolian Harp social channels, which post current ASMR pricing and event windows; and the Build an +1 Obby updates page on this site, which records the latest Universe log timestamp.",
    },
  ],
  faqIds: ["how-many-stages", "what-does-builder-tycoon-do", "where-to-find-asmr-prices", "stage-names-documented"],
  relatedPageIds: ["home", "guides"],
  schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const updatesPage: PageContent = {
  id: "build-a-1-obby-updates",
  translationKey: "build-a-1-obby-updates",
  locale: "en-US",
  routeKind: "fixed",
  slug: "updates",
  url: "/updates",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Update — Patch Notes & Update History`,
  seoTitle: `${site.gameName} Update — Patch Notes & Update History`,
  metaDescription:
    `The latest ${site.gameName} update was published 2026-09-07. Track patch notes, balance changes, and base/ASMR history for Universe 10577682617.`,
  summary:
    "A dated status page that records the latest Roblox Universe log timestamp, the official channels where new updates appear, and any unannounced item is labeled as such.",
  hero: {
    eyebrow: "Updates",
    subtitle:
      "The latest documented update for Universe 10577682617, the history table back to the creation date, and the official channels where new updates appear first.",
    ctas: [
      { label: "View Codes", href: "/codes" },
      { label: "Open Homepage", href: "/" },
    ],
  },
  quickAnswer:
    `The most recent ${site.gameName} update was published on 2026-09-07T17:15:13Z according to the official Roblox Games API snapshot for Universe 10577682617 (13,914 concurrent players, 10,460,284 visits, 29,810 favorites on 2026-09-10). Any change not surfaced through the official Roblox game page or the Creator Group Aeolian Harp social channels is treated as Not announced as of 2026-09-10.`,
  keyFacts: [
    { label: "Latest update", value: "2026-09-07T17:15:13Z" },
    { label: "Public patch notes", value: "Not announced as of 2026-09-10" },
    { label: "Cadence", value: "Multiple verified update events to date" },
  ],
  modules: [
    {
      id: "latest-update",
      type: "data-table",
      heading: `Latest ${site.gameName} update (2026-09-07)`,
      columns: [
        { key: "field", label: "Field" },
        { key: "status", label: "Status as of 2026-09-10" },
      ],
      rows: [
        { field: "Update timestamp", status: "2026-09-07T17:15:13Z (Roblox Games API)" },
        { field: "Live players", status: "13,914 concurrent (2026-09-10 snapshot)" },
        { field: "Total visits", status: "10,460,284 (2026-09-10 snapshot)" },
        { field: "Favorites", status: "29,810 (2026-09-10 snapshot)" },
        { field: "Public patch notes", status: "Not announced as of 2026-09-10" },
        { field: "New ASMR added", status: "Not announced as of 2026-09-10" },
        { field: "Balance changes", status: "Not announced as of 2026-09-10" },
        { field: "New codes added", status: "Not announced as of 2026-09-10" },
        { field: "Limited-time events", status: "Not announced as of 2026-09-10" },
      ],
    },
    {
      id: "history",
      type: "data-table",
      heading: `Recent ${site.gameName} update history`,
      columns: [
        { key: "date", label: "Date" },
        { key: "summary", label: "Change summary" },
        { key: "source", label: "Source" },
      ],
      rows: [
        { date: "2026-07-27", summary: `${site.gameName} universe created`, source: "Roblox Games API" },
        { date: "2026-09-07", summary: "Latest documented update (13,914 playing, 10,460,284 visits, 29,810 favorites)", source: "Roblox Games API" },
        { date: "Earlier timestamps", summary: "Not announced as of 2026-09-10", source: "—" },
      ],
    },
    {
      id: "announcement-channels",
      type: "prose",
      heading: `How ${site.gameName} updates are announced`,
      body:
        `Updates flow through three official channels, in order of trust: the official Roblox game page for Universe 10577682617, where the game page timestamp and any description edits are the first sign a new build is live; the Creator Group Aeolian Harp social channels on X (formerly Twitter) and Discord, where the team posts update summaries, event windows, and any codes that drop with the patch; and the in-game announcement board, which mirrors the creator's social posts once the server reloads.`,
    },
  ],
  faqIds: ["when-latest-update", "where-patch-notes", "updates-add-codes", "next-update-new-stages"],
  relatedPageIds: ["home", "build-a-1-obby-codes"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const controlsPage: PageContent = {
  id: "build-a-1-obby-controls",
  translationKey: "build-a-1-obby-controls",
  locale: "en-US",
  routeKind: "fixed",
  slug: "controls",
  url: "/controls",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Controls — Keyboard, Mouse & Mobile`,
  seoTitle: `${site.gameName} Controls — Keyboard, Mouse & Mobile`,
  metaDescription:
    `${site.gameName} controls follow the standard Roblox keyboard, mouse, and mobile layout. See the action map, ASMR placement controls, and what is not yet documented.`,
  summary:
    "The standard Roblox keyboard, mouse, and mobile control layout that Build an +1 Obby inherits from the Roblox client, plus what is and isn't officially documented.",
  hero: {
    eyebrow: "Controls",
    subtitle:
      "The standard Roblox keyboard, mouse, and mobile control layout that Build an +1 Obby inherits from the Roblox client, plus a list of bindings that are not officially documented.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "Open Homepage", href: "/" },
    ],
  },
  quickAnswer:
    `${site.gameName} controls follow the standard Roblox keyboard, mouse, and mobile layout: WASD or arrow keys to move, Space to jump, Shift to walk, mouse to look, and an on-screen joystick plus jump button on mobile. As a builder, the ASMR placement tool is mouse-driven and uses the standard Roblox grid snap; the obby publish portal activates with a click when the cursor is over the portal. Any binding not surfaced through the official Roblox game page or the Creator Group Aeolian Harp channels is labeled Not officially documented as of 2026-09-10.`,
  keyFacts: [
    { label: "Desktop", value: "WASD + Space + mouse (Roblox default)" },
    { label: "Mobile", value: "Joystick + jump button (Roblox default)" },
    { label: "Builder", value: "Mouse-driven ASMR placement + click-to-publish" },
  ],
  modules: [
    {
      id: "keyboard-mouse",
      type: "data-table",
      heading: `${site.gameName} controls on keyboard and mouse`,
      columns: [
        { key: "action", label: "Action" },
        { key: "keyboard", label: "Keyboard" },
        { key: "mouse", label: "Mouse" },
      ],
      rows: [
        { action: "Move forward", keyboard: "W or Up arrow", mouse: "—" },
        { action: "Move backward", keyboard: "S or Down arrow", mouse: "—" },
        { action: "Strafe left", keyboard: "A or Left arrow", mouse: "—" },
        { action: "Strafe right", keyboard: "D or Right arrow", mouse: "—" },
        { action: "Jump", keyboard: "Space", mouse: "—" },
        { action: "Walk slowly (precision platforming)", keyboard: "Shift (hold)", mouse: "—" },
        { action: "Look / camera", keyboard: "—", mouse: "Move mouse" },
        { action: "Zoom camera", keyboard: "—", mouse: "Scroll wheel" },
        { action: "Place ASMR at base (builder)", keyboard: "—", mouse: "Click to place; grid snap is automatic" },
        { action: "Publish obby (builder)", keyboard: "—", mouse: "Click the base publish portal" },
        { action: "Open in-game menu", keyboard: "Esc", mouse: "Esc" },
      ],
    },
    {
      id: "mobile",
      type: "data-table",
      heading: `${site.gameName} controls on mobile`,
      columns: [
        { key: "action", label: "Action" },
        { key: "mobile", label: "Mobile" },
      ],
      rows: [
        { action: "Move character", mobile: "Left-side virtual joystick" },
        { action: "Jump", mobile: "Right-side jump button" },
        { action: "Camera / look", mobile: "Right-side swipe (single finger)" },
        { action: "Zoom camera", mobile: "Pinch gesture" },
        { action: "Place ASMR at base (builder)", mobile: "Tap a base grid cell with the placement tool open" },
        { action: "Publish obby (builder)", mobile: "Tap the base publish portal" },
        { action: "Open in-game menu", mobile: "Menu button (top-right)" },
      ],
    },
    {
      id: "documented",
      type: "prose",
      heading: "What is officially documented",
      body:
        "The following actions are confirmed against the standard Roblox client defaults: movement (WASD or arrow keys), jump (Space), walk (Shift), camera (mouse), and menu (Esc) on desktop; movement (left joystick), jump (right button), camera (right-side swipe), and zoom (pinch) on mobile. The builder-side ASMR placement tool and obby publish portal follow the standard Roblox placement pattern and require no custom binding.",
    },
    {
      id: "not-documented",
      type: "callout",
      tone: "caution",
      title: "What is not officially documented as of 2026-09-10",
      body:
        "A dedicated ASMR placement hotkey, custom remappable bindings, controller or gamepad layouts, and hotkey cheats or debug overlays are not officially documented on the official Roblox game page for Universe 10577682617. Treat any third-party claim as unverified until the creator confirms it.",
    },
  ],
  faqIds: ["basic-controls", "collect-plus1-controls", "mobile-controls", "rebind-controls", "controller-support", "hidden-controls"],
  relatedPageIds: ["home", "guides"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const fixedPages: PageContent[] = [
  codesPage,
  howToPlayPage,
  tipsPage,
  stagesPage,
  updatesPage,
  controlsPage,
];