# i18n conventions

How message content is structured and authored. The routing decisions (`localePrefix`, `pathnames`, the proxy) live in `src/i18n/routing.ts` and the hosting decision record.

## Where things live

| Thing | Home |
|---|---|
| Message content | `messages/<locale>.json`, one file per locale, dynamically imported per locale in `src/i18n/request.ts` |
| Hand data, group order | `src/data/hands.ts` |
| Mitchi Speak nicknames | `src/data/speak.ts` |
| Section anchor IDs | The components that render the sections |
| Routing and slugs | `src/i18n/routing.ts` |
| Rich text tag map | `src/i18n/rich-text.tsx` (`tags`) |

Namespaces, and no twelfth without a reason: `meta`, `nav`, `home`, `rules`, `reference`, `speak`, `terms`, `about`, `groups`, `hands`, `notFound`.

## Key rules

**One key per independently translatable unit.** A heading, a paragraph, a list item, a button label. Named for its job, `rules.round.rollLimit`, not `rules.round.p3`. Never one key per sentence: a sentence is not a translatable unit, and splitting it into prefix/suffix fragments stops translators from reordering. Never a whole section in one string: headings, paragraphs and lists are document structure, and they belong in the component.

**No arrays.** `t()` throws on an array value and `t.raw()` gives up type safety. Use numbered keys: `rules.quickStart.step1` to `step6`.

**No markup inside strings.** Translators should never have to preserve asterisks, HTML, attributes or URLs. Inline emphasis and in-text actions use next-intl rich text tags (`t.rich`), listed below. Mapped in one place, `tags` in `src/i18n/rich-text.tsx`. No component maps its own tags. Do not use `defaultTranslationValues`, it is deprecated.

**Variables, not concatenation.** Worked examples take player letters as ICU parameters, so one pattern is translated once and A, B and C are substituted.

**Hands are data, names are messages.** The visible name of a hand comes from ``t(`hands.${hand.id}`)``. Never compose a hand name from two number words at runtime: "six-five" is not "six" plus "five" in Polish or Japanese, and "double-six" is not "six-six" in any language. Twenty-one whole strings per locale is the cheap option, not the expensive one. Group names work the same way, under `groups`.

**Proper nouns stay out of the message files.** Mitchi Speak nicknames have one form in every language. They live in `src/data/speak.ts`, because putting them in `en.json` invites a translator to translate them.

**Anchor IDs stay English in every locale.** `#hands`, `#round`, `#scoring`, `#tie-breaks`, `#winning`, `#terms`. Visible headings translate, IDs do not. A URL fragment is never sent to the server, so no routing layer can rewrite it the way `pathnames` rewrites a slug. Localised IDs would break every shared link on a locale switch and add a per-locale fragment map to the language switcher.

## Rich text

Messages own linguistic structure. Components own document structure: `<p>`, `<h1>`, `<ul>`, `<table>`, `<section>`. A tag in a message is a semantic marker, not HTML. `t.rich` maps it to an element; attributes, hrefs and class names never appear in locale files.

**Inline only.** The vocabulary is emphasis plus actions. There is no `<p>`, `<div>`, `<h2>` or `<ul>` in a message. Wrapping `t.rich` in `<p>` is the page's job, and it is safe only because messages cannot contain a `<p>` of their own.

**No generic `<link>`.** A tag that can point anywhere forces the URL into the component as a prop, and two `<link>`s in one string cannot carry two destinations. Each in-text action is its own tag, baked to one target in `tags`.

| Tag | Action |
|---|---|
| `<em>` | Emphasis |
| `<strong>` | Strong emphasis |
| `<term>` | Glossary reference. Jumps to `#terms` on `/rules`. |
| `<speak>` | Opens `/speak`. |
| `<about>` | Opens `/about`. |
| `<rules>` | Opens `/rules`. |
| `<reference>` | Opens `/reference`. |

Names are identifiers: letters only, so they are valid ICU tags and unquoted keys in the `tags` map. Not `<speak-link>`, `<link-to-about>` or `<a>`. A `Link` suffix would show translators that the span is a link; at this size the table above is the legend. If the site grows a large set of in-text actions, revisit.

Add a tag to this table and to `tags` when a message needs a new action. Do not invent a tag on a page.

`t.rich`'s second argument is one object: tag mappers (functions) and ICU values (strings, numbers). A tag name and a variable cannot share a key.

Body copy rendered in a `<p>` (or other inline-rich block) always goes through `t.rich(key, tags)`, even when the current English string has no tags, so a later locale can add them. Titles, headings, nav labels and CTA labels stay on `t()`: they are `string`s, and `t.rich` returns a `ReactNode`.

`rules.tieBreaks.example` still uses `<p>` in one key; that is the remaining exception. New copy follows this table.

## Type safety

`en.json` is the schema. Augment the next-intl config so every key is checked:

```ts
import messages from './messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}
```

A missing or misspelled key is then a compile error rather than a runtime fallback, and locale files that drift from English fail the build instead of shipping.

## Navigation

Import `Link`, `usePathname`, `useRouter` and `redirect` from `@/i18n/navigation`, never from `next/link` or `next/navigation`. The plain versions know nothing about `pathnames` and emit English paths on non-English pages. It compiles and type-checks, and nothing warns you.

The root `src/app/not-found.tsx` is outside the locale tree and has no provider. It uses a plain `<a href="/">` to the English home. Do not import `next/link` there. `@next/next/no-html-link-for-pages` is disabled on that line.

Unknown paths that the proxy has already placed in `[locale]` are caught by `src/app/[locale]/[...rest]/page.tsx`, which calls `notFound()` so `[locale]/not-found.tsx` can render inside the site chrome. That page uses `notFound.*` from the message files.

## Adding a locale

Decisions first, then scaffolding, then translation. Doing it in that order is what stops one concept acquiring three words in the same locale.

**1. Settle the vocabulary.** Before a word of copy is written, agree that locale's form for every term in `docs/domain/glossary.md`, the hand and group naming pattern, and the localised slugs. Where a choice is contested, decide it once and write down why. Terms run through every page, so translating them in flow guarantees inconsistency.

**2. Write `docs/domain/glossary.<locale>.md`.** Term forms and the reasoning behind contested choices. Not definitions: those live in the message file, and repeating them here gives the site two sources of truth for the same sentence.

**3. Scaffold the message file.**

```bash
npm run i18n:new -- <locale>
```

Copies `en.json` with `[XX] ` on every string, so an untranslated string is visible rather than a silent fallback to English. It refuses to overwrite an existing file and has no force flag: regenerating a locale means deleting its file yourself.

**4. Add the locale to `src/i18n/routing.ts`,** both `locales` and the localised slugs in `pathnames`.

**5. Translate,** deleting the `[XX] ` marker from each string as you go. The markers are the only progress bar this work has, and once they are gone a silent fallback looks exactly like a correct page.

**6. Add the language to the switcher,** named in its own language.

**7. Run `npm run i18n:check`** before committing: key parity against `en.json`, and the same rich text tags and ICU parameters in every string. A translation that drops a `<term>` or renames a `{a}` fails at render, on a page nobody is looking at.

Locale message files are separate chunks, so an added locale does not grow any other locale's bundle.
