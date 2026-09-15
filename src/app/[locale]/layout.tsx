import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SkipLink } from "@/components/skip-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_ORIGIN } from "@/lib/config";
import { cn } from "@/lib/utils";
import { archivo, sourceSerif, jetbrainsMono, lato } from "@/app/fonts";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  icons: {
    icon: [
      { url: "/brand/mitchi-favicon.svg", type: "image/svg+xml" },
      {
        url: "/brand/mitchi-favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={cn(
        archivo.variable,
        sourceSerif.variable,
        jetbrainsMono.variable,
        lato.variable,
      )}
    >
      <body>
        <NextIntlClientProvider>
          <div className="min-h-screen flex flex-col">
            <SkipLink />
            <SiteHeader />
            <main id="main" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
