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
  name: "Build an +1 Obby Guide",
  brandMark: "B+O",
  gameName: "Build an +1 Obby",
  domain: "builda1obby.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
  description:
    "An unofficial English-language reference hub for Build an +1 Obby on Roblox (Universe 10577682617): how to run the builder/tycoon loop, codes, updates, and controls.",
  tagline: "How to run the Build an +1 Obby builder loop — ASMR shop, base build, publish, earn — all dated to 2026-09-10.",
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
  author: "Build an +1 Obby Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Build an +1 Obby on Roblox",
      href: "https://www.roblox.com/games/10577682617",
      description:
        "Official Roblox game page for Build an +1 Obby (Universe 10577682617) with the builder/tycoon description and current stats.",
    },
    {
      label: "Roblox Games API — Universe 10577682617",
      href: "https://games.roblox.com/v1/games?universeIds=10577682617",
      description:
        "Official Roblox Games API multi-get endpoint for live stats, creation, and update timestamps.",
    },
    {
      label: "Roblox Creator Groups directory",
      href: "https://www.roblox.com/groups",
      description:
        "Official Roblox creator groups directory (Creator Group Aeolian Harp publishes Build an +1 Obby).",
    },
  ],
  disclaimer:
    "Build an +1 Obby is a brand-new Roblox Universe (created 2026-07-27). This site is an unofficial English-language reference hub; current-game facts are sourced from the official Roblox game page, the Roblox Games API, and the Creator Group Aeolian Harp social channels. Concrete ASMR names, prices, money rates, and visitor counters are not publicly documented and must be checked against the official Roblox game page and Creator Group Aeolian Harp channels.",
};
