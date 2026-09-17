import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { PAGES } from "@/i18n/metadata";
import { SITE_ORIGIN } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const hrefs = Object.values(PAGES);

  return hrefs.flatMap((href) =>
    routing.locales.map((locale) => {
      const languages: Record<string, string> = {};
      for (const loc of routing.locales) {
        languages[loc] = `${SITE_ORIGIN}${getPathname({ locale: loc, href })}`;
      }
      languages["x-default"] =
        `${SITE_ORIGIN}${getPathname({ locale: "en", href })}`;

      return {
        url: `${SITE_ORIGIN}${getPathname({ locale, href })}`,
        alternates: { languages },
      };
    }),
  );
}
