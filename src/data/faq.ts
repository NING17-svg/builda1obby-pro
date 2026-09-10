import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage FAQ
  {
    id: "what-is-builda1obby",
    question: "What is Build an +1 Obby on Roblox?",
    answer:
      "Build an +1 Obby (also styled Build an +1 Obby or Build a 1 Obby) is a new Roblox builder/tycoon from Creator Group Aeolian Harp where you buy ASMR from the in-game shop, place them down at your base to build a +1 obby, publish the obby, and earn money from visitors. Universe 10577682617 was created on 2026-07-27 and last updated 2026-09-07.",
    pageIds: ["home", "about"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-builda1obby-free",
    question: "Is Build an +1 Obby free to play?",
    answer:
      "Yes. Build an +1 Obby is a public Roblox Experience at https://www.roblox.com/games/10577682617 and can be joined from any standard Roblox client without an additional purchase. A Roblox account is required to enter the game, but no separate payment is needed.",
    pageIds: ["home", "guides", "faq", "about"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-codes-active",
    question: "Are there working Build an +1 Obby codes right now?",
    answer:
      "No active codes have been verified on the official Roblox game page or on Creator Group Aeolian Harp's channels as of 2026-09-10. The codes page is published as a dated status page so you can see at a glance whether new codes have appeared since this research date.",
    pageIds: ["home", "build-a-1-obby-codes", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-stages",
    question: "How many stages does Build an +1 Obby have?",
    answer:
      "The official Roblox game page for Build an +1 Obby does not enumerate a fixed stage list as of 2026-09-10. The Universe is a builder/tycoon: visitors play the +1 obby that each builder publishes from their base, not a sequential stage-runner roster. The builder bases page documents the base layout and publish flow that the official description does support, and labels the stage-runner concept Not part of Build an +1 Obby as of 2026-09-10.",
    pageIds: ["home", "wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-does-builder-tycoon-do",
    question: "What does the builder/tycoon loop actually do?",
    answer:
      "The official description states the loop directly: buy ASMR from the in-game shop, place them down at your base to build your +1 obby, publish the obby, and earn money when visitors play it. The goal stated by the creator is to build the most popular obby on the server. The Roblox Games API does not publish a money-per-visitor rate, so this site does not cite a specific earning number.",
    pageIds: ["home", "guides", "wiki", "faq", "about"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-to-find-asmr-prices",
    question: "Where can I find current ASMR prices and money rates?",
    answer:
      "ASMR prices and money rates are not publicly documented outside the in-game shop as of 2026-09-10. Open the in-game shop in a live server to see the current ASMR lineup and prices, and check the Creator Group Aeolian Harp channels on X and Discord for any pricing or earn-rate announcements. This site does not invent those numbers.",
    pageIds: ["guides", "wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-released",
    question: "When was Build an +1 Obby released?",
    answer:
      "Universe 10577682617 was created on 2026-07-27 and last updated on 2026-09-07T17:15:13Z according to the official Roblox Games API snapshot from 2026-09-10. There is no prior release; older +1 or obby titles on Roblox are unrelated games and are not treated as the same Universe.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Codes FAQ
  {
    id: "how-to-redeem",
    question: "How do I redeem a Build an +1 Obby code?",
    answer:
      "Open Build an +1 Obby from Roblox, wait for your character to spawn, click the Codes button on the side of the screen, type the code exactly as published, and press Redeem. The reward lands in your inventory after a confirmation banner appears.",
    pageIds: ["build-a-1-obby-codes", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "code-invalid-or-expired",
    question: "Why does my code say Invalid or Expired?",
    answer:
      "A code returns Invalid or Expired when it has been retired by the creator, mistyped, or pasted with extra spaces. Confirm the code against the Creator Group Aeolian Harp announcement and re-enter it before reporting it as broken.",
    pageIds: ["build-a-1-obby-codes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-to-report-new-code",
    question: "Where should I report a new Build an +1 Obby code I found?",
    answer:
      "Post it in the Creator Group Aeolian Harp Discord or tag the creator on X so the team can verify it. Community aggregator sites may pick it up later, but the creator's official channels are the only place a code becomes official.",
    pageIds: ["build-a-1-obby-codes"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // How to play FAQ
  {
    id: "what-does-plus1-do",
    question: "What does the +1 obby refer to in the builder model?",
    answer:
      "In Build an +1 Obby, the +1 obby is the playable obstacle course that a builder assembles by placing ASMR at their base and then publishes from the base portal. The Roblox Games API does not publish a numeric +1 scaling formula, and the official description frames +1 as a building concept rather than a per-obby stat, so this site does not cite a specific multiplier.",
    pageIds: ["guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "need-roblox-account",
    question: "Do I need a Roblox account to play?",
    answer:
      "Yes. Build an +1 Obby is a Roblox experience, and Roblox requires an account to join any universe. Any free Roblox account can join Universe 10577682617 through the official game page.",
    pageIds: ["guides"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "play-on-mobile",
    question: "Can I play on mobile?",
    answer:
      "Roblox supports the game on the platforms Roblox itself supports. The official Roblox game page is the source of truth for the current device list, and the controls page covers the input bindings per device.",
    pageIds: ["guides"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-happens-after-stage",
    question: "What happens after I publish my obby?",
    answer:
      "Once you publish the obby from your base publish portal, it appears on the public listing and visitors can join it. The earnings counter on your base credits in-game money while visitors play; you then spend that money on more ASMR from the shop to expand the base. The obby is yours to redesign and republish at any time while you stay in the server.",
    pageIds: ["guides"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Tips FAQ
  {
    id: "collect-every-plus1",
    question: "Do I need to collect every +1 pickup in Build an +1 Obby?",
    answer:
      "The +1 obby you publish is what visitors play; the +1 pickup language that older +1 obby write-ups use is from a stage-runner mechanic that Build an +1 Obby does not implement. As a builder, the equivalent of collecting +1 is buying ASMR from the shop and placing it at your base; as a visitor, you walk the obby the builder published. This site does not list per-obby +1 pickup counts because the official page does not publish them.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "jump-timing-tricky-jumps",
    question: "What is the right jump timing for the trickier obby jumps?",
    answer:
      "Build an +1 Obby inherits the standard Roblox jump model. Time the jump so you cross the front edge of the target platform at the apex of your arc; jump a half-step earlier than feels natural for long jumps, and slow to a single-step sprint for precision jumps. The creator has not published a custom obby jump table as of 2026-09-10.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "use-every-checkpoint",
    question: "Should I always use the checkpoints in Build an +1 Obby?",
    answer:
      "The official description does not enumerate a checkpoint system for Build an +1 Obby as of 2026-09-10. As a builder, the equivalent anchors are the obby entrance and exit of the obby you publish; as a visitor, those anchors define the playable stretch. The creator has not published a custom checkpoint table, and the standard Roblox client does not provide one out of the box.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-to-restart-run",
    question: "When should I redesign my Build an +1 Obby obby?",
    answer:
      "Redesign the obby when the earnings counter stays flat for the first 60 seconds after publishing, or when visitors stop joining after a peak. The simplest reset is to delete a few ASMR pieces from the corridor and replace them with a different shape rather than tearing the whole base down.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-from-creator",
    question: "Do these tips come from the creator group?",
    answer:
      "No. The guidance above comes from how the +1 obby pattern reads and from the official Roblox game page description of the builder/tycoon loop. The creator group has not published a balance document, and the official page does not enumerate specific ASMR names, prices, or earn rates as of 2026-09-10.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Builder bases FAQ (formerly Stages FAQ)
  {
    id: "stage-order",
    question: "What is the order of the bases on a server?",
    answer:
      "Bases are personal plots, not a sequential list. Each builder on a server is assigned their own base plot; there is no stage 1 → stage 2 → stage 3 progression between bases. Visitors play the obby that each builder publishes from their own base, and they can move between published obbies from the public listing.",
    pageIds: ["wiki"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "difficulty-rises",
    question: "Does obby difficulty rise with the builder's choices?",
    answer:
      "Difficulty is set by the builder, not by a fixed stage list. A builder can place ASMR to assemble an easy obby or a punishing one, and the earnings counter reflects how many visitors finish the published obby. The official description frames the goal as building the most popular obby on the server, not as climbing a difficulty curve.",
    pageIds: ["wiki"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "stage-names-documented",
    question: "Are stage names documented?",
    answer:
      "No. The official Roblox game page for Build an +1 Obby does not enumerate a fixed stage list as of 2026-09-10. The builder bases page documents the base layout and the publish flow that the official description supports, and labels the stage-runner concept Not part of Build an +1 Obby as of 2026-09-10.",
    pageIds: ["wiki"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Updates FAQ
  {
    id: "when-latest-update",
    question: "When was the latest Build an +1 Obby update released?",
    answer:
      "The latest documented Build an +1 Obby update was published on 2026-09-07T17:15:13Z, according to the official Roblox Games API snapshot for Universe 10577682617 recorded on 2026-09-10. The previous public timestamp on file is the universe creation date of 2026-07-27.",
    pageIds: ["build-a-1-obby-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-patch-notes",
    question: "Where can I read the Build an +1 Obby patch notes?",
    answer:
      "Patch notes are first reflected on the official Roblox game page for Universe 10577682617 and then summarized on the Creator Group Aeolian Harp social channels on X and Discord. There is no separate patch-notes feed as of 2026-09-10.",
    pageIds: ["build-a-1-obby-updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-add-codes",
    question: "Do Build an +1 Obby updates add new codes?",
    answer:
      "Updates can include new redemption codes, but no new code was published alongside the 2026-09-07 update on the official Roblox game page. When a new code drops, it will be tracked on the codes page.",
    pageIds: ["build-a-1-obby-updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "next-update-new-stages",
    question: "Will the next Build an +1 Obby update add new ASMR or base features?",
    answer:
      "The creator has not announced new ASMR items, base features, or visitor-counter changes as of 2026-09-10. Any new additions will appear first on the official Roblox game page description and on the Creator Group Aeolian Harp social channels.",
    pageIds: ["build-a-1-obby-updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Controls FAQ
  {
    id: "basic-controls",
    question: "What are the basic Build an +1 Obby controls on keyboard and mouse?",
    answer:
      "Use WASD or the arrow keys to move, Space to jump, Shift to walk slowly for precision platforming, and the mouse to look and zoom. Press Esc to open the in-game menu. As a builder, the placement tool is mouse-driven and uses the standard Roblox grid snap; the obby publish portal activates with a click when the cursor is over the portal.",
    pageIds: ["build-a-1-obby-controls", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "collect-plus1-controls",
    question: "How do I place an ASMR piece at my base?",
    answer:
      "Walk to your base plot with the ASMR in your inventory, aim the placement tool at the base grid, and click to place. The placement tool snaps to the base grid; re-aim and click to place the next piece. There is no separate key for placing ASMR — it follows the standard Roblox placement-tool pattern.",
    pageIds: ["build-a-1-obby-controls"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "mobile-controls",
    question: "What are the Build an +1 Obby mobile controls?",
    answer:
      "Steer with the left virtual joystick, jump with the right-side jump button, swipe on the right side to look around, and pinch to zoom. The ASMR placement tool is opened from the on-screen inventory, and you tap a grid cell at your base to place each piece.",
    pageIds: ["build-a-1-obby-controls", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rebind-controls",
    question: "Can I rebind the Build an +1 Obby controls?",
    answer:
      "Roblox supports the standard client-level remap through the Roblox settings menu, but the creator has not published a custom Build an +1 Obby rebind scheme as of 2026-09-10.",
    pageIds: ["build-a-1-obby-controls"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controller-support",
    question: "Does Build an +1 Obby support a controller or gamepad?",
    answer:
      "Roblox supports standard gamepad input through the client, but the official Roblox game page for Build an +1 Obby does not document a custom gamepad layout as of 2026-09-10.",
    pageIds: ["build-a-1-obby-controls"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "hidden-controls",
    question: "Are there any hidden Build an +1 Obby controls or cheats?",
    answer:
      "No hidden or debug controls are documented on the official Roblox game page or on the Creator Group Aeolian Harp channels as of 2026-09-10. Treat any third-party claim of a cheat code or hotkey as unverified until the creator confirms it.",
    pageIds: ["build-a-1-obby-controls"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];