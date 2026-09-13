# Tech stack

What this project uses, and what it deliberately does not. No versions: those live in `package.json` and the lockfile.

**No new runtime dependency without a line in this file.** If something looks like it needs one, stop and ask. Most of what a package would do here is a component, a helper, or twenty lines.

## Rendering and routing

Next.js App Router, statically generated, with a request-time proxy in front for locale detection and rewrites.

Not a static export. It removes the routing layer this project exists to practise, and the reasons are recorded in the hosting decision.

## Language and types

TypeScript, strict. Data that drives rendering lives in typed modules under `src/data`, not in message files.

## Internationalisation

next-intl, with the routing, navigation and request configuration under `src/i18n`. Message structure is governed by `docs/architecture/i18n-conventions.md`.

Not i18next, Paraglide or Intlayer. Not a second i18n or content library alongside it.

## Styling

Tailwind, with theme tokens declared in `globals.css` via `@theme`. Long-form copy uses the Tailwind Typography plugin (`prose` on `Prose`). Class merging through a local `cn()` helper built on `clsx` and `tailwind-merge`.

Not CSS-in-JS, not Sass, not a CSS framework alongside Tailwind.

## Components

Semantic HTML, written here. Tables are tables, definition lists are `dl`, supplementary blocks are `aside`.

No UI kit. shadcn/ui was considered and rejected: the site is a dozen semantic elements and never reaches the dialogs, popovers and forms where the kit earns its keep. It stays a live option if an interactive feature ever lands, because it is copy-paste source rather than a framework. No Radix, no headless component library, no icon package.

## Content

Copy lives in `messages/<locale>.json`. Long-form content in Markdown or MDX was considered for `/rules` and rejected: it splits one page's copy across two homes and loses the compile-time completeness check. If a genuinely long-form route ever appears, revisit it then, for that route.

## Graphics

Inline SVG, written here. No icon or illustration package for a site whose only graphic is a pair of dice.

## Testing

None yet, and none added to satisfy a convention. If a unit needs a test, Vitest with Testing Library is the choice. The current checks are the build route table, a keyboard pass, and `./scripts/smoke.sh` (request-time locale routing and HTML canonical / hreflang).

## Discovery

App Router `src/app/sitemap.ts` and `src/app/robots.ts`. No sitemap or robots package. Absolute URLs use `SITE_ORIGIN` from `src/lib/config.ts` (same value as `metadataBase`). Not `VERCEL_URL`.

## Tooling and deployment

npm, with the lockfile committed. ESLint via `eslint-config-next`. Vercel builds and deploys from `main`, so there is no CI pipeline to maintain.
