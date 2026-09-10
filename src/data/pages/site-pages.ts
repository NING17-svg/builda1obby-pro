import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const faqPage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} FAQ`,
  seoTitle: `${site.gameName} FAQ | Common Questions`,
  metaDescription:
    `Frequently asked questions about ${site.gameName} on Roblox (Universe 10577682617): codes, stages, how to play, updates, and controls.`,
  summary:
    "A consolidated FAQ covering the codes, stages, how-to-play, updates, and controls questions that come up around Build a +1 Obby.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "A consolidated FAQ covering the codes, stages, how-to-play, updates, and controls questions that come up around Build a +1 Obby.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "View Codes", href: "/codes" },
    ],
  },
  quickAnswer:
    "This FAQ is a consolidation of the questions that recur across the codes, stages, how-to-play, updates, and controls pages. For deeper walkthroughs and the latest status, follow the links into the dedicated page.",
  keyFacts: [
    { label: "Source rule", value: "Official Roblox game page + Aeolian Harp social" },
    { label: "Universe", value: "10577682617" },
    { label: "Last reviewed", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "faq-overview",
      type: "prose",
      heading: "FAQ overview",
      body:
        "All answers on this page are sourced from the official Roblox game page for Universe 10577682617, the Roblox Games API metadata, the Creator Group Aeolian Harp social channels, or the standard Roblox client defaults that Build a +1 Obby inherits. Unconfirmed items are labeled with the research date.",
    },
  ],
  faqIds: [
    "are-codes-active",
    "how-to-redeem",
    "is-builda1obby-free",
    "what-does-plus1-do",
    "how-many-stages",
    "when-latest-update",
    "basic-controls",
    "mobile-controls",
  ],
  relatedPageIds: ["home", "build-a-1-obby-codes", "guides", "wiki", "build-a-1-obby-updates", "build-a-1-obby-controls"],
  schemaTypes: ["FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const aboutPage: PageContent = {
  id: "about",
  translationKey: "about",
  locale: "en-US",
  routeKind: "fixed",
  slug: "about",
  url: "/about",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `About ${site.name}`,
  seoTitle: `About ${site.name}`,
  metaDescription:
    `About ${site.name}: an unofficial English-language reference hub for ${site.gameName} on Roblox (Universe 10577682617), covering codes, stages, how to play, updates, and controls.`,
  summary:
    "An unofficial English-language reference hub for Build a +1 Obby on Roblox, with sourcing rules and scope notes for first launch.",
  hero: {
    eyebrow: "About",
    subtitle:
      "An unofficial English-language reference hub for Build a +1 Obby on Roblox. Scope, sourcing, and editorial principles for first launch.",
    ctas: [{ label: "Contact", href: "/contact" }],
  },
  quickAnswer:
    `${site.name} is an unofficial English-language reference hub for ${site.gameName} on Roblox (Universe 10577682617). The site publishes a dated reading of the codes, stages, updates, how-to-play, and controls surfaces — all sourced from the official Roblox game page, the Roblox Games API, and the Creator Group Aeolian Harp social channels.`,
  keyFacts: [
    { label: "Status", value: "Unofficial fan guide" },
    { label: "Editorial rule", value: "Official facts first, dated for every claim" },
    { label: "Universe", value: "10577682617" },
  ],
  modules: [
    {
      id: "mission",
      type: "prose",
      heading: "Mission",
      body:
        "Help Build a +1 Obby players find clear, well-structured information — current codes, the curated stage roster, the run-stage collect +1 grow clear loop, the latest update timestamp, and the standard control layout — without pretending the site knows more than official sources support.",
    },
    {
      id: "sourcing",
      type: "prose",
      heading: "Sourcing",
      body:
        "Only the official Roblox game page for Universe 10577682617, the official Roblox Games API multi-get endpoint, and the Creator Group Aeolian Harp social channels may establish current-game facts for Build a +1 Obby. Established Roblox games media is cited as attributed community reference, never as the primary fact source. Anything that cannot be verified against those sources is labeled Not announced as of 2026-09-10 or Not officially documented as of 2026-09-10.",
    },
    {
      id: "scope",
      type: "prose",
      heading: "Scope",
      body:
        "Six fixed pages cover the codes, updates, stages, how-to-play, tips, and controls surfaces. No entity family is admitted at first launch because the stage list is currently sequential and curated rather than a stable shared schema. No tool page is admitted because the +1 mechanic is trivially previous + 1 and the obby corridor does not need a calculator probe.",
    },
  ],
  faqIds: ["is-builda1obby-free", "what-is-builda1obby"],
  relatedPageIds: ["home", "contact", "privacy-policy", "terms"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const contactPage: PageContent = {
  id: "contact",
  translationKey: "contact",
  locale: "en-US",
  routeKind: "fixed",
  slug: "contact",
  url: "/contact",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Contact",
  seoTitle: `Contact | ${site.name}`,
  metaDescription:
    `Contact ${site.name} for corrections, official source updates, and site feedback on ${site.gameName} content.`,
  summary:
    "Contact information for corrections, official source updates, and site feedback.",
  hero: {
    eyebrow: "Contact",
    subtitle:
      "Use this page to send corrections, official source updates, or site feedback. Do not request private game account information.",
    ctas: [{ label: "Read About", href: "/about" }],
  },
  quickAnswer:
    "Send corrections and official source updates through the contact channel so the team can verify the change against the official Roblox game page or the Creator Group Aeolian Harp social channels.",
  keyFacts: [
    { label: "Primary use", value: "Corrections and feedback" },
    { label: "Response time", value: "Reviewed and acknowledged within the next content update" },
  ],
  modules: [
    {
      id: "contact-method",
      type: "prose",
      heading: "Contact method",
      body:
        `Email is the primary contact method for ${site.name}. The address is published in the page footer alongside the Cloudflare Email Routing forward for support@builda1obby.pro, which is the verified channel for first launch.`,
    },
    {
      id: "corrections",
      type: "prose",
      heading: "Corrections",
      body:
        "When you send a correction, include the official source URL (the Roblox game page, the Roblox Games API endpoint, or the Creator Group Aeolian Harp social channel) so the team can verify the change. Do not request private game account information, redemption codes tied to a specific account, or personal data.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "privacy-policy", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const privacyPolicyPage: PageContent = {
  id: "privacy-policy",
  translationKey: "privacy-policy",
  locale: "en-US",
  routeKind: "fixed",
  slug: "privacy-policy",
  url: "/privacy-policy",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Privacy Policy",
  seoTitle: `Privacy Policy | ${site.name}`,
  metaDescription:
    `Privacy policy for ${site.name}: aggregate analytics only, no user accounts, no comments, and Cloudflare Email Routing as the contact channel.`,
  summary:
    "A starter privacy policy for a lightweight Roblox guide site: aggregate analytics, no accounts, Cloudflare Email Routing for contact.",
  hero: {
    eyebrow: "Privacy",
    subtitle:
      "Aggregate analytics only, no user accounts, no comments, and Cloudflare Email Routing as the contact channel. Update this page when any of those change.",
    ctas: [{ label: "Terms", href: "/terms" }],
  },
  quickAnswer:
    `${site.name} does not run accounts, comments, or payments. If GA4 is configured, aggregate usage information is collected according to Google Analytics settings. If advertising is enabled in the future, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.`,
  keyFacts: [
    { label: "Analytics", value: "GA4 only when configured" },
    { label: "Accounts", value: "No user accounts in V1" },
    { label: "Contact", value: "Cloudflare Email Routing (support@builda1obby.pro)" },
  ],
  modules: [
    {
      id: "data",
      type: "prose",
      heading: "Information we collect",
      body:
        "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled in the future, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
    },
    {
      id: "contact",
      type: "prose",
      heading: "Contact messages",
      body:
        "Contact messages are routed through Cloudflare Email Routing from support@builda1obby.pro to a verified destination mailbox. Messages may include the information you choose to send. Do not include sensitive personal information.",
    },
    {
      id: "updates",
      type: "prose",
      heading: "Policy updates",
      body:
        "This policy is updated when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "contact", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const termsPage: PageContent = {
  id: "terms",
  translationKey: "terms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "terms",
  url: "/terms",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Terms of Use",
  seoTitle: `Terms of Use | ${site.name}`,
  metaDescription:
    `Terms of use for ${site.name}: unofficial status, informational use, and acceptable use boundaries.`,
  summary:
    "Starter terms for an unofficial Build a +1 Obby reference site: unofficial status, informational use, and acceptable use boundaries.",
  hero: {
    eyebrow: "Terms",
    subtitle:
      "Unofficial status, informational use only, and acceptable use boundaries for the Build a +1 Obby reference site.",
    ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
  quickAnswer:
    `${site.name} is an unofficial reference site. Information may change as official sources are updated, and the official Roblox game page for Universe 10577682617 is the source of truth for current-game facts.`,
  keyFacts: [
    { label: "Use", value: "Informational reference only" },
    { label: "Official status", value: "Unofficial fan site" },
    { label: "Trademarks", value: "Roblox and Build a +1 Obby belong to their respective rights holders" },
  ],
  modules: [
    {
      id: "unofficial",
      type: "prose",
      heading: "Unofficial site",
      body:
        `This site is not affiliated with Roblox Corporation, the Creator Group Aeolian Harp, or any trademark holder for Build a +1 Obby. All game facts, brand names, and Roblox Universe IDs referenced on ${site.name} are used for identification and informational purposes only.`,
    },
    {
      id: "accuracy",
      type: "prose",
      heading: "Information accuracy",
      body:
        "Reference information may change as official details are updated. Use official sources for final decisions on codes, updates, stages, and gameplay mechanics. The research date on every claim is recorded so you can judge how current the information is.",
    },
    {
      id: "acceptable-use",
      type: "prose",
      heading: "Acceptable use",
      body:
        "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any contact channel.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "contact", "privacy-policy"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const sitePages: PageContent[] = [
  faqPage,
  aboutPage,
  contactPage,
  privacyPolicyPage,
  termsPage,
];