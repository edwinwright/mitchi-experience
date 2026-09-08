# Glossary

The agreed vocabulary for Mitchi. Every term used in the rules, on the site and in any translation comes from this list. If a translation needs a word this file does not have, this file is updated first.

Informal names are not part of the standard vocabulary. They live in `src/data/hands.ts` and appear only on `/speak`.

## Terms

| Term | Definition | Notes |
|---|---|---|
| **Mitchi** (game) | The game itself. | Always capitalised. |
| **Mitchi** (hand) | A 2 and a 1. The best hand in the game. | The game and the best hand share a name. Context carries it: "a Mitchi", "rolls a Mitchi". |
| **Hand** | The two dice a player finishes their turn with. | |
| **Die / dice** | A standard six-sided die. Mitchi uses two. | |
| **Roll** | One throw of one or both dice. Re-rolling a single die still counts as a roll. | Also used for the single-die throw that decides who starts. |
| **Roll limit** | The number of rolls available to each player in a round, set by the number the starting player uses. | Replaces the older, ambiguous term "target". |
| **Round** | One pass around the table, ending when a player takes the table. | |
| **Starting player** | The player who rolls first in a round and sets the roll limit. The loser of a round starts the next one. | |
| **Current worst hand** | The lowest-ranked hand rolled so far in the round. What each remaining player has to beat. | Changes during the round as players finish. |
| **Doubles** | Both dice showing the same number. Beaten only by a Mitchi. Higher doubles beat lower. | Individual hands: double-six down to double-one. |
| **Six-high, five-high, four-high, three-high** | A non-double hand named by its higher die, then its lower: six-five, six-four, down to three-one. | |
| **The table** | The points at stake in the current round. | Doubles at each tie-break. |
| **Take the table** | The losing player adds every point on the table to their score. | |
| **Tie-break** | A play-off between players level on the worst hand. One roll each, table doubled, order reversed. | Always "tie-break", never "tie-breaker". |
| **Points** | The running score. Points are bad: the lowest total wins. | Not "penalty points". |
| **Point limit** | The total that ends the game when any player reaches or exceeds it. Agreed before play, typically 25. | |
| **Mitchi Speak** | Informal alternative names for hands and events. Not part of the standard game. | Data in `src/data/hands.ts`, published on `/speak`. |

## Terms deliberately not used

| Avoid | Use instead | Why |
|---|---|---|
| Penalty points | Points | One currency, one name. |
| Target | Roll limit, or current worst hand | "Target" was doing two jobs: the number of rolls, and the hand to beat. The hand to beat changes during the round, so it was never really a target. |
| Tie-breaker | Tie-break | Both were in use. Tie-break matches how the game is actually talked about. |
| Best hand | Current worst hand | You are not trying to roll the best hand, only to avoid the worst. |

## Hands

A hand is an unordered pair of dice, so there are 21 of them. They fall into six groups, ranked best to worst: `mitchi`, `doubles`, `sixHigh`, `fiveHigh`, `fourHigh`, `threeHigh`.

The ranking itself is defined once, in `src/data/hands.ts`, and is not restated here or anywhere else. Visible hand and group names are messages, not data: see `docs/architecture/i18n-conventions.md`.

## Rules binding every translation

- **Mitchi** is a proper noun and stays untranslated in every language. Where a language would normally inflect it, leave it uninflected and have a native speaker confirm it reads acceptably.
- Hand names are structural, not idiomatic. Translate the number words and keep the higher-die-first order.
- **The table** and **take the table** are the load-bearing scoring metaphor. If a language has no natural equivalent, pick one phrase and use it everywhere rather than varying it.
- Die values are written as Western Arabic numerals in every locale, including Japanese.
- Section anchor IDs stay in English in every locale.
- Every term used in the site copy must appear in this file.
