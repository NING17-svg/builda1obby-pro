import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home" } },
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/how-to-play", labels: { "en-US": "How to Play" } },
  { href: "/stages", labels: { "en-US": "Stages" } },
  { href: "/tips", labels: { "en-US": "Tips" } },
  { href: "/controls", labels: { "en-US": "Controls" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}