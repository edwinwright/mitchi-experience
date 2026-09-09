# Site map

English has no locale prefix. Spanish is `/es` plus the same slug until localised slugs are added.

| English      | Spanish (this phase) | Purpose                                                           |
| ------------ | -------------------- | ----------------------------------------------------------------- |
| `/`          | `/es`                | What the game is, the one twist, and where to read on.            |
| `/rules`     | `/es/rules`          | The full rules, from setup to the end of the game.                |
| `/reference` | `/es/reference`      | Hand ranking and scoring on one screen, for use mid-game.         |
| `/speak`     | `/es/speak`          | Table nicknames and the official hands they stand for.            |
| `/about`     | `/es/about`          | Where the game came from, and how these rules were reconstructed. |

Unknown paths are not a nav route. Two files handle them:

| File | When | Copy |
| --- | --- | --- |
| `src/app/[locale]/not-found.tsx` | A bogus path the proxy has already given a locale (`/references`, `/es/references`). Site header and footer are present. | `notFound.*` in the message files. Links to Rules and Reference. |
| `src/app/not-found.tsx` | A request that never entered a locale. No chrome. English only. | Hardcoded. Points at `/`. |

Dotted paths that skip the proxy matcher (for example `/references.txt`) can still miss both. That is accepted; do not call `notFound()` from the locale layout to chase them.

## Deliberately not built

Score tracker, hand comparison tool, search, scroll spy, breadcrumbs, animated dice, dark-mode toggle, print stylesheet, strategy page.

## Canonical source

Once the site is live it is the canonical rules. The vault rules note is the working draft. Changes go note → `en.json` → the other locales.
