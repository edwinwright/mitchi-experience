# Mitchi site

A statically generated Next.js site publishing the rules of Mitchi, a two-dice game, in several languages. English and Spanish now, Polish, German and Japanese later.

## Read before changing anything

| File | What it governs |
|---|---|
| `docs/architecture/tech-stack.md` | What may be used, and what may not. No new dependency without a line in it. |
| `docs/architecture/i18n-conventions.md` | How messages are keyed, typed and rendered. |
| `docs/domain/glossary.md` | The game's vocabulary. Binding on copy in every language. |
| `docs/product/voice.md` | How the site is written. |
| `docs/product/site-map.md` | The routes, and what the site deliberately does not have. |
| `docs/work/WO-000n/PLAN.md` | The work item currently in progress. Start here. |

Read the plan for the current work item and do one slice at a time. Stop at the end of a slice and show the diff.

## Things that are invisible in the code and expensive to get wrong

- Import `Link`, `usePathname`, `useRouter` and `redirect` from `@/i18n/navigation`, never from `next/link` or `next/navigation`. The plain versions compile, type-check and emit the wrong URLs on non-English pages.
- Hands are data, hand names are messages. Never compose a name from two number words.
- No arrays in message files. `t()` throws on them.
- No markup inside message strings. Rich text tags only, provided by `Prose`.
- Section anchor IDs stay in English in every locale.
- Copy changes come from the work item's source copy, not from improvisation. If a string is missing, ask.

## Commands

```bash
npm run dev           # local
npx tsc --noEmit      # types, including message keys
npm run lint
npm run build         # read the route table
```

`npm run build` prints a route table. Every route must show `●`, prerendered with both locale paths listed, and a `proxy` entry must be present. A route showing `ƒ` means something is reading request state at render time: fix it before committing, do not ship it.

## Skills

- Use the code review skill before committing a slice.
- Use the decision record skill only for a contested choice that is costly to reverse. Records go in `docs/architecture/decisions/`. A stack preference is a line in `tech-stack.md`, not a record.

## Not in this repo

Drafting notes, phase plans and rules working drafts live in the author's vault, not here. `docs/` holds durable facts and the work item in progress. Do not add project management, status or planning files beyond the current work item.
