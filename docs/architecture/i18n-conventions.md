# i18n conventions

How message content is structured and authored. The routing decisions (`localePrefix`, `pathnames`, the proxy) live in `src/i18n/routing.ts` and the hosting decision record.

## Where things live

| Thing | Home |
|---|---|
| Message content | `messages/<locale>.json`, one file per locale, dynamically imported per locale in `src/i18n/request.ts` |
| Hand data, group order, Mitchi Speak nicknames | `src/data/hands.ts` |
| Section anchor IDs | The components that render the sections |
| Routing and slugs | `src/i18n/routing.ts` |

Namespaces, and no twelfth without a reason: `meta`, `nav`, `home`, `rules`, `reference`, `speak`, `terms`, `about`, `groups`, `hands`, `notFound`.

## Key rules

**One key per rendered block.** A paragraph, a list item, a heading. Named for its job, `rules.round.rollLimit`, not `rules.round.p3`. Never one key per sentence: a sentence is not a translatable unit. Never a whole section in one string, except where a short narrative section reads as one block and is rendered as rich text.

**No arrays.** `t()` throws on an array value and `t.raw()` gives up type safety. Use numbered keys: `rules.quickStart.step1` to `step6`.

**No markup inside strings.** Translators should never have to preserve asterisks, tags or attributes. Emphasis and links come from next-intl rich text tags with a small fixed vocabulary, mapped in one place: the `Prose` component provides them through a render prop. Do not use `defaultTranslationValues`, it is deprecated.

**Variables, not concatenation.** Worked examples take player letters as ICU parameters, so one pattern is translated once and A, B and C are substituted.

**Hands are data, names are messages.** The visible name of a hand comes from ``t(`hands.${hand.id}`)``. Never compose a hand name from two number words at runtime: "six-five" is not "six" plus "five" in Polish or Japanese, and "double-six" is not "six-six" in any language. Twenty-one whole strings per locale is the cheap option, not the expensive one. Group names work the same way, under `groups`.

**Proper nouns stay out of the message files.** Mitchi Speak nicknames have one form in every language. They live in `src/data/hands.ts`, because putting them in `en.json` invites a translator to translate them.

**Anchor IDs stay English in every locale.** `#hands`, `#round`, `#scoring`, `#tie-breaks`, `#winning`, `#terms`. Visible headings translate, IDs do not. A URL fragment is never sent to the server, so no routing layer can rewrite it the way `pathnames` rewrites a slug. Localised IDs would break every shared link on a locale switch and add a per-locale fragment map to the language switcher.

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

## Adding a locale

1. Add the code to `locales` in `src/i18n/routing.ts`.
2. Add the localised slugs to `pathnames`.
3. Add `messages/<locale>.json` with the full key set. Until real copy exists, mirror `en.json` with a `[XX] ` prefix on every value, so the routes render and a missed translation is visible rather than silent.
4. Add the language to the switcher in its own name.

Locale message files are separate chunks, so an added locale does not grow any other locale's bundle.
