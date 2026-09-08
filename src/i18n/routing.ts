import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Ship order from the project note. Add pl, de, ja one at a time in phase 6.
  locales: ['en', 'es'],

  defaultLocale: 'en',

  // English at /rules, Spanish at /es/reglas.
  // Settled in the hosting decision record. Expensive to change after launch.
  localePrefix: 'as-needed',

  // The internal-to-external path dictionary.
  // Keys are internal route paths. Values are per-locale external paths.
  pathnames: {
    '/': '/'
  }
});
