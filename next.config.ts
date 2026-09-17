import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./src/i18n/routing";

const nextConfig: NextConfig = {
  // Retired pages. Sources are the external paths a visitor typed or shared,
  // so the Spanish ones carry their slug. Fragments travel in the Location header.
  async redirects() {
    return [
      { source: "/speak", destination: "/about", permanent: true },
      {
        source: "/es/speak",
        destination: `/es${routing.pathnames["/about"].es}`,
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
