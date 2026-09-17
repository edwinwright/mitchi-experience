import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Retired pages. Sources are the external paths a visitor typed or shared,
  // so the Spanish ones carry their slug. Fragments travel in the Location
  // header, which is what lands /speak on the Mitchi Speak section.
  async redirects() {
    return [
      { source: "/speak", destination: "/about#mitchi-speak", permanent: true },
      {
        source: "/es/speak",
        destination: "/es/acerca-de#mitchi-speak",
        permanent: true,
      },
      {
        source: "/terminology",
        destination: "/rules#vocabulary",
        permanent: true,
      },
      {
        source: "/es/terminologia",
        destination: "/es/reglas#vocabulary",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
