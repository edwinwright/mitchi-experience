# Mitchi

Mitchi is a two-dice game for two or more players. This repository is the
public rules site: a statically generated Next.js app, in English, Spanish
and Polish, with more locales later. The Polish is unreviewed machine
translation pending a native speaker; see `docs/domain/glossary.pl.md`.
Live at [www.mitchidice.com](https://www.mitchidice.com).

## Run locally

```bash
npm run dev
```

## Checks

```bash
npm run typecheck
npm run build
npm run i18n:check
./scripts/smoke.sh                 # production
./scripts/smoke.sh http://localhost:3000
```

`npm run build` must show `●` on every real route (both locale paths) and a
`proxy` entry. A route showing `ƒ` (other than `/[locale]/[...rest]`) means
something is reading request state at render time.

## Docs

Binding project docs live under `docs/`:

- `docs/architecture/` — stack and i18n conventions
- `docs/product/` — voice and site map
- `docs/domain/glossary.md` — game vocabulary
