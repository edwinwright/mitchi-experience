# Site map

English has no locale prefix. Spanish is `/es` plus a localised slug, except `/speak`, which is a proper noun and stays untranslated in every locale.

| English      | Spanish         | Purpose                                                           |
| ------------ | --------------- | ----------------------------------------------------------------- |
| `/`          | `/es`           | What the game is, the one twist, and where to read on.            |
| `/rules`     | `/es/reglas`    | The full rules, from setup to the end of the game.                |
| `/reference` | `/es/referencia`| Hand ranking, scoring, and terms on one screen, for use mid-game.  |
| `/speak`     | `/es/speak`     | Table nicknames and the official hands they stand for.            |
| `/about`     | `/es/acerca-de` | Where the game came from, and how these rules were reconstructed. |
| `/terminology` | `/es/terminologia` | **Unlisted.** Every term, then Mitchi Speak. Candidate to replace `/speak`: not in the nav or sitemap, `noindex` (`UNLISTED_PAGES` in `src/i18n/metadata.ts`). |

Discovery files are unprefixed and skip the locale proxy (dotted paths):

| Path | Purpose |
| --- | --- |
| `/sitemap.xml` | Every real page × locale, with language alternates. |
| `/robots.txt` | Allows `/`; points at the sitemap on `SITE_ORIGIN`. |

Unknown paths are not a nav route. Two files handle them:

| File | When | Copy |
| --- | --- | --- |
| `src/app/[locale]/not-found.tsx` | A bogus path the proxy has already given a locale (`/references`, `/es/references`). Site header and footer are present. | `notFound.*` in the message files. Links to Rules and Reference. |
| `src/app/not-found.tsx` | A request that never entered a locale. No chrome. English only. | Hardcoded. Points at `/`. |

Dotted paths that skip the proxy matcher (for example `/references.txt`) can still miss both. That is accepted; do not call `notFound()` from the locale layout to chase them.

## Deliberately not built

Score tracker, hand comparison tool, search, scroll spy, breadcrumbs, dice that roll or play a turn, dark-mode toggle, print stylesheet, strategy page.

## Canonical source

Once the site is live it is the canonical rules. The vault rules note is the working draft. Changes go note → `en.json` → the other locales.
