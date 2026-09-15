import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "./navigation";
import { routing } from "./routing";

export const PAGES = {
  home: "/",
  rules: "/rules",
  reference: "/reference",
  speak: "/speak",
  about: "/about",
} as const;

type MetaPage = keyof typeof PAGES;

const OG_IMAGE = {
  url: "/meta/og-default.jpg",
  width: 1200,
  height: 634,
  alt: "Friends rolling dice for Mitchi around a pub table",
};

export async function pageMetadata(
  locale: string,
  page: MetaPage,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  const href = PAGES[page];
  const canonical = getPathname({ locale, href });
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = getPathname({ locale: loc, href });
  }
  languages["x-default"] = getPathname({ locale: "en", href });

  return {
    title,
    description,
    openGraph: { title, description, images: [OG_IMAGE] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    alternates: {
      canonical,
      languages,
    },
  };
}
