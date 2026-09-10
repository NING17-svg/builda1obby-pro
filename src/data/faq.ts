import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage FAQ
  {
    id: "what-is-builda1obby",
    question: "What is Build a +1 Obby on Roblox?",
    answer:
      "Build a +1 Obby (also styled Build a 1 Obby) is a new Roblox obstacle-course game from Creator Group Aeolian Harp where every +1 pickup you collect along the obby grows your character. Universe 10577682617 was created on 2026-07-27 and last updated 2026-09-04.",
    pageIds: ["home", "about"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-builda1obby-free",
    question: "Is Build a +1 Obby free to play?",
    answer:
      "Yes. Build a +1 Obby is a public Roblox Experience at https://www.roblox.com/games/10577682617 and can be joined from any standard Roblox client without an additional purchase. A Roblox account is required to enter the game, but no separate payment is needed.",
    pageIds: ["home", "guides", "faq", "about"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-codes-active",
    question: "Are there working Build a +1 Obby codes right now?",
    answer:
      "No active codes have been verified on the official Roblox game page or on Creator Group Aeolian Harp's channels as of 2026-09-10. The codes page is published as a dated status page so you can see at a glance whether new codes have appeared since this research date.",
    pageIds: ["home", "build-a-1-obby-codes", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-stages",
    question: "How many stages does Build a +1 Obby have?",
    answer:
      "The official Roblox game page does not enumerate a fixed stage count as of 2026-09-10. The stages page maintains the current roster with documented entries and explicitly labels any unannounced entries as Not announced as of 2026-09-10.",
    pageIds: ["home", "wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-released",
    question: "When was Build a +1 Obby released?",
    answer:
      "Universe 10577682617 was created on 2026-07-27 and last updated on 2026-09-04, with the brief snapshot recorded on 2026-09-05. There is no prior release; older +1 or obby titles on Roblox are unrelated games and are not treated as the same Universe.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Codes FAQ
  {
    id: "how-to-redeem",
    question: "How do I redeem a Build a +1 Obby code?",
    answer:
      "Open Build a +1 Obby from Roblox, wait for your character to spawn, click the Codes button on the side of the screen, type the code exactly as published, and press Redeem. The reward lands in your inventory after a confirmation banner appears.",
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
    question: "Where should I report a new Build a +1 Obby code I found?",
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
    question: "What does the +1 pickup do?",
    answer:
      "Each +1 pickup along the obby enlarges or strengthens your character. Pickups are applied immediately on collection; there is no separate build menu, no currency cost, and no save slot to manage. The Roblox Games API does not publish a numeric scaling formula, so no specific +1 multiplier is cited.",
    pageIds: ["guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "need-roblox-account",
    question: "Do I need a Roblox account to play?",
    answer:
      "Yes. Build a +1 Obby is a Roblox experience, and Roblox requires an account to join any universe. Any free Roblox account can join Universe 10577682617 through the official game page.",
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
    question: "What happens when I finish a stage?",
    answer:
      "The round announces a stage-complete signal and queues you into the next stage. Each stage expects a higher +1 total than the last, so the run-stage, collect +1, grow, clear loop continues until the round itself ends.",
    pageIds: ["guides"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Tips FAQ
  {
    id: "collect-every-plus1",
    question: "Do I need to collect every +1 pickup in Build a +1 Obby?",
    answer:
      "No. Collect the pickups you can reach on the safe path, and skip the ones that sit on crumbling platforms or off-route branches. The +1 total you carry to the stage exit matters more than the +1 count you attempted.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "jump-timing-tricky-jumps",
    question: "What is the right jump timing for the trickier obby jumps?",
    answer:
      "Time your jump so you cross the front edge of the target platform at the apex of your arc. Jump a half-step earlier than feels natural for long jumps, and slow to a single-step sprint for precision jumps. Apex control matters more than raw distance.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "use-every-checkpoint",
    question: "Should I always use the checkpoints in Build a +1 Obby?",
    answer:
      "Yes. Stepping on every checkpoint costs one second and buys you a clean respawn anchor plus a moment to re-read the next stretch. The only reason to skip a checkpoint is if it sits on a one-way surface, which the obby pattern rarely produces.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-to-restart-run",
    question: "When should I restart a Build a +1 Obby run?",
    answer:
      "Restart when you reach stage 3 with a low +1 total, or when you have failed two hard jumps in a row without a checkpoint behind you. Otherwise, push forward: a healthy +1 total at a new stage entry is worth more than a clean timer.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-from-creator",
    question: "Do these tips come from the creator group?",
    answer:
      "No. The guidance above comes from how the +1 obby pattern reads and from the official Roblox game page description of the +1 mechanic. The creator group has not published a balance document, and the official page does not enumerate specific per-stage tolerance numbers.",
    pageIds: ["build-a-1-obby-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Stages FAQ
  {
    id: "stage-order",
    question: "What is the order of the stages on the roster?",
    answer:
      "Stages run in sequential order from stage 1 onward. The player cannot skip directly to a later stage from the lobby; the round queues each successive stage automatically after the stage-complete signal.",
    pageIds: ["wiki"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "difficulty-rises",
    question: "Does the difficulty rise per stage?",
    answer:
      "Yes. The +1 mechanic description and the obby pattern both imply that difficulty and the expected +1 total rise together. Each successive stage expects a higher +1 total than the stage before it.",
    pageIds: ["wiki"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "stage-names-documented",
    question: "Are stage names documented?",
    answer:
      "No. Specific stage names are not published by the creator on the official game page as of 2026-09-10. The roster above uses generic stage numbers and high-level obstacle summaries instead of inventing names.",
    pageIds: ["wiki"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Updates FAQ
  {
    id: "when-latest-update",
    question: "When was the latest Build a +1 Obby update released?",
    answer:
      "The latest documented Build a +1 Obby update was published on 2026-09-04, according to the official Roblox Universe log for Universe 10577682617. The previous public timestamp on file is the universe creation date of 2026-07-27.",
    pageIds: ["build-a-1-obby-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-patch-notes",
    question: "Where can I read the Build a +1 Obby patch notes?",
    answer:
      "Patch notes are first reflected on the official Roblox game page for Universe 10577682617 and then summarized on the Creator Group Aeolian Harp social channels on X and Discord. There is no separate patch-notes feed as of 2026-09-10.",
    pageIds: ["build-a-1-obby-updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-add-codes",
    question: "Do Build a +1 Obby updates add new codes?",
    answer:
      "Updates can include new redemption codes, but no new code was published alongside the 2026-09-04 update on the official Roblox game page. When a new code drops, it will be tracked on the codes page.",
    pageIds: ["build-a-1-obby-updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "next-update-new-stages",
    question: "Will the next Build a +1 Obby update add new stages?",
    answer:
      "The creator has not announced new stages as of 2026-09-10. Any new stage additions will appear first on the official Roblox game page description and on the Creator Group Aeolian Harp social channels.",
    pageIds: ["build-a-1-obby-updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Controls FAQ
  {
    id: "basic-controls",
    question: "What are the basic Build a +1 Obby controls on keyboard and mouse?",
    answer:
      "Use WASD or the arrow keys to move, Space to jump, Shift to walk slowly for precision platforming, and the mouse to look and zoom. Press Esc to open the in-game menu.",
    pageIds: ["build-a-1-obby-controls", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "collect-plus1-controls",
    question: "How do I collect the +1 pickup in Build a +1 Obby?",
    answer:
      "Walk into the +1 pickup with your character. There is no separate key, click, or tap — the pickup is collected automatically on contact, following the standard Roblox walk-over pickup pattern.",
    pageIds: ["build-a-1-obby-controls"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "mobile-controls",
    question: "What are the Build a +1 Obby mobile controls?",
    answer:
      "Steer with the left virtual joystick, jump with the right-side jump button, swipe on the right side to look around, and pinch to zoom. The +1 pickup is collected by walking into it, with no separate tap required.",
    pageIds: ["build-a-1-obby-controls", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rebind-controls",
    question: "Can I rebind the Build a +1 Obby controls?",
    answer:
      "Roblox supports the standard client-level remap through the Roblox settings menu, but the creator has not published a custom Build a +1 Obby rebind scheme as of 2026-09-10.",
    pageIds: ["build-a-1-obby-controls"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controller-support",
    question: "Does Build a +1 Obby support a controller or gamepad?",
    answer:
      "Roblox supports standard gamepad input through the client, but the official Roblox game page for Build a +1 Obby does not document a custom gamepad layout as of 2026-09-10.",
    pageIds: ["build-a-1-obby-controls"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "hidden-controls",
    question: "Are there any hidden Build a +1 Obby controls or cheats?",
    answer:
      "No hidden or debug controls are documented on the official Roblox game page or on the Creator Group Aeolian Harp channels as of 2026-09-10. Treat any third-party claim of a cheat code or hotkey as unverified until the creator confirms it.",
    pageIds: ["build-a-1-obby-controls"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];