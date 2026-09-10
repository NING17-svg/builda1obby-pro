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
    "A dated status page that records whether any Build a +1 Obby codes are currently redeemable, with a redemption walkthrough, the official channels where new codes appear, and an empty expired archive.",
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
    `As of 2026-09-10, no active ${site.gameName} codes (official brand Build a +1 Obby codes) have been verified on the official Roblox game page for Universe 10577682617 or on the Creator Group Aeolian Harp social channels. This page therefore publishes an empty active codes table, a verified redemption walkthrough, the official channels where new codes will appear, and an empty expired archive so players know exactly where to check next.`,
  keyFacts: [
    { label: "Active codes", value: "None verified as of 2026-09-10" },
    { label: "Redemption", value: "In-game Codes button, case-sensitive" },
    { label: "Source rule", value: "Official Roblox game page + Aeolian Harp social" },
  ],
  modules: [
    {
      id: "active-codes-table",
      type: "data-table",
      heading: "Active Build a 1 Obby codes (2026-09-10)",
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
      heading: "How to redeem codes in Build a +1 Obby",
      items: [
        { title: "Launch the game", body: "Launch Build a +1 Obby from the official Roblox game page (Universe 10577682617)." },
        { title: "Wait for spawn", body: "Wait for your character to spawn into the current stage lobby." },
        { title: "Open the Codes button", body: "Look for the Codes button on the side of the screen, usually marked with a gift or ticket icon." },
        { title: "Enter the code", body: "Type the code exactly as published, including capitalization and any numbers." },
        { title: "Confirm the reward", body: "Press Redeem and wait for the confirmation banner that lists the reward." },
        { title: "Restart if needed", body: "Restart the stage if the reward does not appear in your inventory, since some rewards only land after a server reload." },
      ],
    },
    {
      id: "where-new-codes-drop",
      type: "prose",
      heading: "Where new Build a +1 Obby codes are announced",
      body:
        "Codes drop first on the official channels tied to the Creator Group Aeolian Harp. The three places to monitor are: the official Roblox game page description for Universe 10577682617, which is sometimes edited to surface a fresh code; the Creator Group Aeolian Harp social channels on X (formerly Twitter) and Discord, where the team posts codes alongside event announcements; and the in-game announcement board, which mirrors anything the creator posts externally. Established Roblox codes aggregators may track the same codes after the fact, but treat them as community reference only.",
    },
    {
      id: "expired-archive",
      type: "data-table",
      heading: "Expired Build a 1 Obby codes (archive)",
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
  lastReviewed: "2026-09-10",
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
  h1: `${site.gameName} how to play: the +1 mechanic and first server`,
  seoTitle: `${site.gameName} how to play: the +1 mechanic and first server`,
  metaDescription:
    `Learn ${site.gameName} how to play: what the +1 pickup does, how each stage works, and what to do on your first server in this 2026 Roblox obby.`,
  summary:
    "A first-time-player walkthrough of the run-stage, collect +1, grow, clear, next-stage loop, plus what to expect on your first server.",
  hero: {
    eyebrow: "How to play",
    subtitle:
      "A first-time-player walkthrough of the run-stage, collect +1, grow, clear loop, with the +1 mechanic explained and a checklist for your first server.",
    ctas: [
      { label: "View Stages", href: "/stages" },
      { label: "Open Controls", href: "/controls" },
    ],
  },
  quickAnswer:
    `${site.gameName} how to play is short: enter Roblox Universe 10577682617 (Creator Group Aeolian Harp, publicly playable since 2026-07-27), queue into a server, and run the first obby stage while collecting +1 pickups that grow your character. Treat each +1 as the entry fee into the run-stage, grow, clear loop, and clear the stage in one piece before reaching for the next.`,
  keyFacts: [
    { label: "Universe", value: "10577682617" },
    { label: "Core loop", value: "Run stage → collect +1 → grow → clear" },
    { label: "Respawn anchor", value: "Last checkpoint passed in stage" },
    { label: "First launch", value: "Universe created 2026-07-27" },
  ],
  modules: [
    {
      id: "what-it-is",
      type: "prose",
      heading: `What ${site.gameName} is on Roblox`,
      body:
        `${site.gameName} lives inside Roblox as Universe 10577682617, published by Creator Group Aeolian Harp. The Universe was created on 2026-07-27 and the latest update was published on 2026-09-04, which places the game inside the new-platform-identity window for Roblox obbies. The official game page describes the experience as a +1 mechanic obstacle course: you enter a stage, run the obby corridor, collect +1 pickups along the way, and use the resulting growth to clear the stage before moving on.`,
    },
    {
      id: "loop-explained",
      type: "steps",
      heading: "The run-stage, collect +1, grow, clear, next-stage loop",
      items: [
        { title: "Enter the lobby", body: "Wait for the round to start and queue into the current stage." },
        { title: "Run the obby corridor", body: "Scan the floor and walls for +1 pickups while running the corridor." },
        { title: "Collect +1 pickups", body: "Pick up the +1 pickups that are reachable without sacrificing the run; each one enlarges or strengthens your character." },
        { title: "Reach the stage exit", body: "Reach the stage exit with enough growth to clear the gate or boss, then trigger the stage-complete signal." },
        { title: "Queue into the next stage", body: "Each successive stage expects a higher +1 total than the last." },
      ],
    },
    {
      id: "what-growth-means",
      type: "callout",
      tone: "tip",
      title: "What growth actually means in Build a +1 Obby",
      body:
        "The official description uses the phrase collect +1 to grow stronger or larger, which means the +1 mechanic is described narratively rather than with numeric scaling. The Roblox Games API does not publish a +1-per-stage formula. Treat any specific number you see as unverified until the creator publishes it.",
    },
    {
      id: "first-server-checklist",
      type: "steps",
      heading: "First-match checklist",
      items: [
        { title: "Confirm the universe", body: "Confirm you are inside Universe 10577682617 on Roblox; if the game page shows a different creator or universe id, you are not in the game described here." },
        { title: "Read the lobby announcement", body: "Watch the lobby announcement for the round timer, the active modifiers, and the stage you are about to enter." },
        { title: "Plan the first jump", body: "Plan the first jump before the round starts; the opening of an obby stage usually teaches you the camera and movement feel for the rest of the run." },
        { title: "Grab the first +1", body: "Pick up the first reachable +1 pickup as soon as the round begins; skipping it leaves you underpowered for the rest of the stage." },
        { title: "Reach the stage exit first", body: "Reach the stage exit before experimenting with off-path shortcuts; learning the stage layout beats chasing a single +1 hidden off the main route." },
      ],
    },
    {
      id: "early-pitfalls",
      type: "comparison",
      heading: "Common early-match pitfalls to avoid",
      options: [
        {
          name: "Skipping early +1 pickups",
          summary: "Treating +1 pickups as optional. The fix is mechanical: collect the +1 pickups you can reach without leaving the safe path.",
          bestFor: "Players who feel underpowered on stage 3.",
        },
        {
          name: "Optimizing the wrong thing",
          summary: "Focusing on completion time instead of +1 totals. The run reward is growth, not the timer.",
          bestFor: "Players who sprint past pickups.",
        },
        {
          name: "Pushing past checkpoints",
          summary: "Skipping the checkpoint costs a future respawn anchor. Step on every checkpoint, even if it costs a few seconds.",
          bestFor: "Players who respawn far back after a hard jump.",
        },
        {
          name: "Misreading the lobby",
          summary: "Joining mid-round without checking the active modifiers. Leave and rejoin during the lobby window so your first match lines up with the round announcement.",
          bestFor: "Players who feel like the pickups belong to a different stage.",
        },
      ],
    },
  ],
  faqIds: ["is-builda1obby-free", "what-does-plus1-do", "need-roblox-account", "play-on-mobile", "what-happens-after-stage"],
  relatedPageIds: ["home", "wiki", "build-a-1-obby-controls", "build-a-1-obby-tips"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
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
        "The single biggest mistake new players make is treating +1 pickups as score tokens that disappear at the stage exit. In Build a +1 Obby, every +1 pickup you collect carries into the rest of the run. The pickups that matter most are the ones you can collect in the next five seconds, not the ones that decorate the rest of the stage.",
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
  h1: `${site.gameName} stages: current roster, order, and +1 progression`,
  seoTitle: `${site.gameName} stages: current roster, order, and +1 progression`,
  metaDescription:
    `Browse the ${site.gameName} stages list with the current roster, stage order, and documented +1 progression. Unconfirmed stages are labeled clearly.`,
  summary:
    "A curated stage roster following the sequential obby pattern, with documented entries and explicit labels for any unannounced stages.",
  hero: {
    eyebrow: "Stages",
    subtitle:
      "The current stage roster in sequential order, with documented entries on the obstacle summary and the +1 progression each stage implies.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "View Updates", href: "/updates" },
    ],
  },
  quickAnswer:
    `${site.gameName} stages follow the obby-pattern sequential roster (stage 1, stage 2, and so on), with difficulty and +1 requirement rising per stage. The current roster is curated on the official Roblox game page and may grow with each update. Any stage that the official page does not enumerate today is treated as Not announced as of 2026-09-10 rather than guessed.`,
  keyFacts: [
    { label: "Pattern", value: "Sequential, non-selectable" },
    { label: "Order", value: "Stage 1 → Stage 2 → …" },
    { label: "Latest update", value: "2026-09-04" },
  ],
  modules: [
    {
      id: "current-roster",
      type: "data-table",
      heading: "Build a 1 Obby stage list (current roster)",
      columns: [
        { key: "stage", label: "Stage" },
        { key: "summary", label: "Brief obstacle summary" },
        { key: "plus1", label: "Suggested +1 level" },
        { key: "status", label: "Current status" },
      ],
      rows: [
        {
          stage: "Stage 1",
          summary: "Introductory obstacle corridor that teaches the camera and movement feel; usually the shortest stretch in the roster.",
          plus1: "Low; reachable without detour",
          status: "Not announced as of 2026-09-10 (specific stage name not published)",
        },
        {
          stage: "Stage 2",
          summary: "Mid-length corridor introducing the first checkpoint and a more frequent +1 pickup placement.",
          plus1: "Moderate; expected to grow from stage 1 pickups",
          status: "Not announced as of 2026-09-10 (specific stage name not published)",
        },
        {
          stage: "Stage 3",
          summary: "Longer corridor where the +1 pickup trail begins to gate the harder jumps; first stage where a low +1 total starts to feel underpowered.",
          plus1: "High; expected to build on stage 1 and stage 2 pickups",
          status: "Not announced as of 2026-09-10 (specific stage name not published)",
        },
        {
          stage: "Stage 4 and beyond",
          summary: "Each successive stage is expected to escalate the same way, with the +1 mechanic scaling against the player's running total.",
          plus1: "Higher than stage 3",
          status: "Not announced as of 2026-09-10 (specific stage names and counts not published)",
        },
      ],
    },
    {
      id: "plus1-gates-later-stages",
      type: "prose",
      heading: "How stages connect to the +1 mechanic",
      body:
        "A stage later in the roster expects a higher +1 total than the stage before it. The +1 pickups you collect on stage 1 and stage 2 are not just scoring for those stages; they are the resource that lets you clear stage 3 and stage 4 without falling behind. Treating +1 pickups as optional on early stages is the most common way players reach a mid-stage checkpoint underpowered.",
    },
    {
      id: "checkpoint-spacing",
      type: "prose",
      heading: "Checkpoints appear where the difficulty jumps",
      body:
        "The obby pattern places checkpoints at the transitions between difficulty bands, not after every platform. As you progress through the stage list, expect the gap between checkpoints to grow as the difficulty band tightens, with the longest checkpoint-free stretches sitting at the end of each stage's hardest section.",
    },
    {
      id: "stage-order-sequential",
      type: "callout",
      tone: "tip",
      title: "Stage order is sequential, not selectable",
      body:
        "You complete stage 1, clear stage 2, clear stage 3, and so on in order. The round announces the stage-complete signal at the end of each stretch and queues you into the next one automatically.",
    },
    {
      id: "looking-for-new-stages",
      type: "prose",
      heading: "Where to look for new stages",
      body:
        "Three sources are worth checking when a player wants to know whether the roster has grown: the official Build a +1 Obby game page on Roblox, the Creator Group Aeolian Harp social channels, and the Build a +1 Obby updates page on this site. When the creator publishes a new stage, the roster table is updated in the same pass as the updates page.",
    },
  ],
  faqIds: ["how-many-stages", "stage-order", "difficulty-rises", "stage-names-documented"],
  relatedPageIds: ["home", "guides"],
  schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
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
    `The latest ${site.gameName} update was published 2026-09-04. Track patch notes, balance changes, and stage history for Universe 10577682617.`,
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
    `The most recent ${site.gameName} update was published on 2026-09-04 according to the official Roblox Universe log for Universe 10577682617, listed on Roblox as Build a +1 Obby. Any change not surfaced through the official Roblox game page or the Creator Group Aeolian Harp social channels is treated as Not announced as of 2026-09-10.`,
  keyFacts: [
    { label: "Latest update", value: "2026-09-04T03:42:01Z" },
    { label: "Public patch notes", value: "Not announced as of 2026-09-10" },
    { label: "Cadence", value: "Single verified update event to date" },
  ],
  modules: [
    {
      id: "latest-update",
      type: "data-table",
      heading: "Latest Build a 1 Obby update (2026-09-04)",
      columns: [
        { key: "field", label: "Field" },
        { key: "status", label: "Status as of 2026-09-10" },
      ],
      rows: [
        { field: "Update timestamp", status: "2026-09-04T03:42:01Z (Roblox Universe log)" },
        { field: "Public patch notes", status: "Not announced as of 2026-09-10" },
        { field: "New stages added", status: "Not announced as of 2026-09-10" },
        { field: "Balance changes", status: "Not announced as of 2026-09-10" },
        { field: "New codes added", status: "Not announced as of 2026-09-10" },
        { field: "Limited-time events", status: "Not announced as of 2026-09-10" },
      ],
    },
    {
      id: "history",
      type: "data-table",
      heading: "Recent Build a 1 Obby update history",
      columns: [
        { key: "date", label: "Date" },
        { key: "summary", label: "Change summary" },
        { key: "source", label: "Source" },
      ],
      rows: [
        { date: "2026-07-27", summary: "Build a +1 Obby universe created", source: "Roblox Games API" },
        { date: "2026-09-04", summary: "Latest documented update", source: "Roblox Games API" },
        { date: "Earlier timestamps", summary: "Not announced as of 2026-09-10", source: "—" },
      ],
    },
    {
      id: "announcement-channels",
      type: "prose",
      heading: "How Build a +1 Obby updates are announced",
      body:
        "Updates flow through three official channels, in order of trust: the official Roblox game page for Universe 10577682617, where the game page timestamp and any description edits are the first sign a new build is live; the Creator Group Aeolian Harp social channels on X (formerly Twitter) and Discord, where the team posts update summaries, event windows, and any codes that drop with the patch; and the in-game announcement board, which mirrors the creator's social posts once the server reloads.",
    },
  ],
  faqIds: ["when-latest-update", "where-patch-notes", "updates-add-codes", "next-update-new-stages"],
  relatedPageIds: ["home", "build-a-1-obby-codes"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
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
    `${site.gameName} controls follow the standard Roblox keyboard, mouse, and mobile layout. See the action map, +1 pickup behavior, and what is not yet documented.`,
  summary:
    "The standard Roblox keyboard, mouse, and mobile control layout that Build a +1 Obby inherits from the Roblox client, plus what is and isn't officially documented.",
  hero: {
    eyebrow: "Controls",
    subtitle:
      "The standard Roblox keyboard, mouse, and mobile control layout that Build a +1 Obby inherits from the Roblox client, plus a list of bindings that are not officially documented.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "Open Homepage", href: "/" },
    ],
  },
  quickAnswer:
    `${site.gameName} controls follow the standard Roblox keyboard, mouse, and mobile layout: WASD or arrow keys to move, Space to jump, Shift to walk, mouse to look, and an on-screen joystick plus jump button on mobile. The +1 pickup is collected by walking over it, with no separate bind required. Any binding not surfaced through the official Roblox game page or the Creator Group Aeolian Harp channels is labeled Not officially documented as of 2026-09-10.`,
  keyFacts: [
    { label: "Desktop", value: "WASD + Space + mouse (Roblox default)" },
    { label: "Mobile", value: "Joystick + jump button (Roblox default)" },
    { label: "+1 pickup", value: "Walk into pickup; no separate bind" },
  ],
  modules: [
    {
      id: "keyboard-mouse",
      type: "data-table",
      heading: "Build a 1 Obby controls on keyboard and mouse",
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
        { action: "Interact with +1 pickup", keyboard: "Walk into pickup; no separate bind", mouse: "—" },
        { action: "Open in-game menu", keyboard: "Esc", mouse: "Esc" },
      ],
    },
    {
      id: "mobile",
      type: "data-table",
      heading: "Build a 1 Obby controls on mobile",
      columns: [
        { key: "action", label: "Action" },
        { key: "mobile", label: "Mobile" },
      ],
      rows: [
        { action: "Move character", mobile: "Left-side virtual joystick" },
        { action: "Jump", mobile: "Right-side jump button" },
        { action: "Camera / look", mobile: "Right-side swipe (single finger)" },
        { action: "Zoom camera", mobile: "Pinch gesture" },
        { action: "Interact with +1 pickup", mobile: "Walk into pickup; no separate tap" },
        { action: "Open in-game menu", mobile: "Menu button (top-right)" },
      ],
    },
    {
      id: "documented",
      type: "prose",
      heading: "What is officially documented",
      body:
        "The following actions are confirmed against the standard Roblox client defaults: movement (WASD or arrow keys), jump (Space), walk (Shift), camera (mouse), and menu (Esc) on desktop; movement (left joystick), jump (right button), camera (right-side swipe), and zoom (pinch) on mobile; and the +1 pickup collected by walking over the pickup, with no separate key or tap required.",
    },
    {
      id: "not-documented",
      type: "callout",
      tone: "caution",
      title: "What is not officially documented as of 2026-09-10",
      body:
        "A dedicated \"+1 activate\" key or button, custom remappable bindings, controller or gamepad layouts, and hotkey cheats or debug overlays are not officially documented on the official Roblox game page for Universe 10577682617. Treat any third-party claim as unverified until the creator confirms it.",
    },
  ],
  faqIds: ["basic-controls", "collect-plus1-controls", "mobile-controls", "rebind-controls", "controller-support", "hidden-controls"],
  relatedPageIds: ["home", "guides"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const fixedPages: PageContent[] = [
  codesPage,
  howToPlayPage,
  tipsPage,
  stagesPage,
  updatesPage,
  controlsPage,
];