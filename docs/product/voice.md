# Voice

How the site is written, in every language. Binding on English and on every translation.

## Two registers

**Procedure and definitions are impersonal.** Third person, present tense, short sentences. The rules describe what happens and what a player does, they do not address the reader: "The starting player rolls both dice", not "Roll both dice".

**The reader's own position is second person.** Where a sentence is about what you are trying to achieve rather than what the procedure is, `you` is correct and clearer: "You never need the best hand, only to avoid being left with the worst."

No jokes, no asides, no "simply" and no "just". A reader mid-game wants an answer, not a personality.

| Do | Do not |
|---|---|
| "The starting player rolls both dice." | "Go ahead and roll both dice." |
| "A player may re-roll either die." | "You're free to re-roll either die if you fancy it." |
| "You never need the best hand." (the reader's position) | "You'll want to think carefully about this one." |
| "The worst hand takes the pot." | "Bad luck: the worst hand takes the pot." |
| Use the terms in `docs/domain/glossary.md` | Introduce a synonym because a sentence reads better |

In translation, the same split applies. Procedure takes whatever impersonal form the language uses for game instructions; the reader's position takes the informal second person singular.

## The exception: Home and About

Home and About are allowed warmth. Home carries the one idea worth landing:

> You are not trying to roll the best hand, you are trying not to be left with the worst.

Said once, from `home.twist`, and never again. `/rules` and `/reference` do not repeat it.

Home also maps the game in 60 seconds (`rules.quickStart`) and shows the six-group ranking (`RankList`). Those are the same strings as Rules and Reference; they are not a second telling of the twist.

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
