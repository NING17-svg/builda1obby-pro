import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Build a +1 Obby Guide",
  brandMark: "B+O",
  gameName: "Build a +1 Obby",
  domain: "builda1obby.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
  description:
    "A neutral game guide hub template for launch pages, wiki notes, guides, release information, and FAQs.",
  tagline: "Guides, wiki notes, release info, and launch FAQs in one clean hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Template Game Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Build a +1 Obby on Roblox",
      href: "https://www.roblox.com/games/10577682617",
      description:
        "Official Roblox game page for Build a +1 Obby (Universe 10577682617).",
    },
    {
      label: "Roblox Games API — Universe 10577682617",
      href: "https://games.roblox.com/v1/games?universeIds=10577682617",
      description:
        "Official Roblox Games API multi-get endpoint for creation and update timestamps.",
    },
    {
      label: "Roblox Creator Groups directory",
      href: "https://www.roblox.com/groups",
      description:
        "Official Roblox creator groups directory (Creator Group Aeolian Harp publishes Build a +1 Obby).",
    },
  ],
  disclaimer:
    "Build a +1 Obby is a brand-new Roblox Universe (created 2026-07-27). This site is an unofficial English-language reference hub; current-game facts are sourced from the official Roblox game page, the Roblox Games API, and the Creator Group Aeolian Harp social channels.",
};
