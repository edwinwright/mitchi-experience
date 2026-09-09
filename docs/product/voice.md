# Voice

How the site is written, in every language. Binding on English and on every translation.

## The default: neutral rulebook

The rules are instructional and impersonal. Second person, present tense, short sentences. No jokes, no asides, no "simply" and no "just". A reader mid-game wants an answer, not a personality.

| Do | Do not |
|---|---|
| "Roll both dice." | "Go ahead and roll both dice." |
| "You may re-roll either die." | "You're free to re-roll either die if you fancy it." |
| "The worst hand takes the table." | "Bad luck: the worst hand takes the table." |
| Use the terms in `docs/domain/glossary.md` | Introduce a synonym because a sentence reads better |

## The exception: Home and About

Home and About are allowed warmth. They carry the one idea worth landing:

> You are not trying to roll the best hand, you are trying not to be left with the worst.

Said once, on Home, and never again. `/rules` and `/reference` do not repeat it, and Home does not restate the hand ranking or the scoring.

`/speak` has a voice of its own and is the only other page that does.

## Conventions

- Sentence case headings.
- One `h1` per page, no heading level skipped.
- Terminology comes from the glossary. A new word means the glossary is updated first, not that a synonym is used.
- In-text term references on `/rules` link to `#terms`.
- About says nothing about the site being a practice project. The game stands on its own.
- The origin line is fixed: learnt while travelling in Spain, origin unknown. The site does not claim Mitchi is a traditional Spanish game, and the person who taught it is not named.
- The locale 404 is rulebook-neutral and uses `notFound.*`. The root 404 is a standalone English page with no chrome; it only points back to `/`. It does not use the message files.

## Why cutting matters

`/rules` is roughly 70% of the site's word count, and therefore 70% of the translation and QA cost in every locale. A sentence added there is added once per language. Cut hard.
