# Glossary

The agreed vocabulary for Mitchi. Every term used in the rules, on the site and in any translation comes from this list. If a translation needs a word this file does not have, this file is updated first.

Informal names are not part of the standard vocabulary. They live in `src/data/hands.ts` and appear only on `/speak`.

## Terms

| Term                                           | Definition                                                                                               | Notes                                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Mitchi** (game)                              | The game itself.                                                                                         | Always capitalised.                                                                        |
| **Mitchi** (hand)                              | A 2 and a 1. The best hand in the game.                                                                  | The game and the best hand share a name. Context carries it: "a Mitchi", "rolls a Mitchi". |
| **Game**                                       | One session, played until a player reaches the point limit. Also Mitchi itself, as a system of rules.    | Some languages have a separate word for each sense. See the translation rules below.       |
| **Hand**                                       | The two dice a player finishes their turn with.                                                          |                                                                                            |
| **Die / dice**                                 | A standard six-sided die. Mitchi uses two.                                                               |                                                                                            |
| **Roll**                                       | One throw of one or both dice. Re-rolling a single die still counts as a roll.                           | Also used for the single-die throw that decides who starts.                                |
| **Roll limit**                                 | The number of rolls available to each player in a round, set by the number the starting player uses.     | Replaces the older, ambiguous term "target".                                               |
| **Stop**                                       | To end a turn and keep the current hand, rather than using a remaining roll.                             | A player may stop at any point up to the roll limit.                                       |
| **Round**                                      | One pass around the table, ending when a player takes the pot.                                           |                                                                                            |
| **Starting player**                            | The player who rolls first in a round and sets the roll limit. The loser of a round starts the next one. |                                                                                            |
| **Worst hand**                                 | The lowest-ranked hand. At the end of a round, the player left with it takes the pot.                    | Also used absolutely: the worst hand in the game is three-one.                             |
| **Worst hand so far**                          | The worst hand during a round, while players are still to roll. What each remaining player has to beat.  | Changes as players finish.                                                                 |
| **Doubles**                                    | Both dice showing the same number. Beaten only by a Mitchi. Higher doubles beat lower.                   | Individual hands: double-six down to double-one.                                           |
| **Six-high, five-high, four-high, three-high** | A non-double hand named by its higher die, then its lower: six-five, six-four, down to three-one.        |                                                                                            |
| **The pot**                                    | The points at stake in the current round.                                                                | Doubles at each tie-break.                                                                 |
| **Take the pot**                               | To add every point in the pot to your score.                                                             |                                                                                            |
| **Tie-break**                                  | A play-off between players level on the worst hand. One roll each, table doubled, order reversed.        | Always "tie-break", never "tie-breaker".                                                   |
| **Points**                                     | The running score. Points are bad: the lowest total wins.                                                | Not "penalty points".                                                                      |
| **Point limit**                                | The total that ends the game when any player reaches or exceeds it. Agreed before play, typically 25.    |                                                                                            |
| **Mitchi Speak**                               | Informal alternative names for hands and events. Not part of the standard game.                          | Data in `src/data/hands.ts`, published on `/speak`.                                        |

## Terms deliberately not used

| Avoid              | Use instead                      | Why                                                                                                                                                 |
| ------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Penalty points     | Points                           | One currency, one name.                                                                                                                             |
| Target             | Roll limit, or worst hand so far | "Target" was doing two jobs: the number of rolls, and the hand to beat. The hand to beat changes during the round, so it was never really a target. |
| Tie-breaker        | Tie-break                        | Both were in use. Tie-break matches how the game is actually talked about.                                                                          |
| Best hand          | Worst hand so far                | You are not trying to roll the best hand, only to avoid the worst.                                                                                  |
| The table          | The pot                          | Renamed because it collided with the literal table.                                                                                                 |
| Current worst hand | Worst hand so far                | "Current" was a clumsy way of saying what "so far" says plainly.                                                                                    |

## Hands

A hand is an unordered pair of dice, so there are 21 of them. They fall into six groups, ranked best to worst: `mitchi`, `doubles`, `sixHigh`, `fiveHigh`, `fourHigh`, `threeHigh`.

The ranking itself is defined once, in `src/data/hands.ts`, and is not restated here or anywhere else. Visible hand and group names are messages, not data: see `docs/architecture/i18n-conventions.md`.

## Rules binding every translation

- **Mitchi** is a proper noun and stays untranslated in every language. The name of the game never inflects. The hand does take a plural where the copy counts hands, as English does in "two Mitchis" and Spanish in `dos Mitchis`: each locale uses its own ordinary plural, confirmed by a native speaker. Any other inflection, for case or gender, is left off.
- Hand names are structural, not idiomatic. Translate the number words and keep the higher-die-first order.
- **The pot** and **take the pot** are the load-bearing scoring metaphor. If a language has no natural equivalent, pick one phrase and use it everywhere rather than varying it.
- **One English word may need two in another language.** Spanish splits **roll** into the throw (`tirar`) and the result (`sacar`), and **game** into the system (`el juego`) and the session played (`la partida`). Where a language does this, record both forms and the test for choosing between them in its `glossary.<locale>.md`. Do not pick one and use it everywhere: half the sentences will read as translation.
- Die values are written as Western Arabic numerals in every locale, including Japanese.
- Section anchor IDs stay in English in every locale.
- Every term used in the site copy must appear in this file.
- Each locale has a companion file, `glossary.<locale>.md`, holding its agreed term forms and the reasoning behind any contested choice. Definitions are not repeated there: they live in that locale's message file.
