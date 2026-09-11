# Glossary: Spanish

The agreed Spanish form of every term in `glossary.md`. Companion file, one per locale.

This file holds **term forms and the reasoning behind contested ones**. It does not hold definitions: those live once, in `messages/es.json`, and duplicating them here would give the site two sources of truth for the same sentence.

Variety: European Spanish, informal.

## Terms

| English | Spanish | Note |
|---|---|---|
| Mitchi (game, and the hand) | Mitchi | Untranslated. The game's name never inflects; the hand pluralises, `dos Mitchis`. See below |
| Game | el juego / la partida | The system versus the session played. See below |
| Hand | la mano | |
| Die / dice | el dado / los dados | |
| Roll (the noun, and the throw) | la tirada, tirar | `tirar los dados` is the idiomatic game verb. `lanzar` is the athletic one |
| Roll (the result) | sacar | `saca seis-cuatro`. See below |
| Roll limit | el límite de tiradas | |
| Stop | plantarse | The verb Spanish games use for ending a turn, from blackjack and mus. `detenerse` and `parar` read as translation |
| Round | la ronda | |
| Starting player | el jugador inicial | The standard term in Spanish board game rules |
| Worst hand | la peor mano | The base term. The Spanish pair mirrors the English pair exactly |
| Worst hand so far | la peor mano hasta ahora | A direct translation of the English, which is why the English was renamed first |
| Doubles | dobles | |
| The pot | el bote | See below |
| Take the pot | llevarse el bote | |
| Tie-break | el desempate | Verb: `desempatar` |
| Points | los puntos | |
| Point limit | el límite de puntos | |
| Mitchi Speak | Mitchi Speak | Proper noun, untranslated |

## Hand and group names

**Pattern:** `seis-cinco` for non-doubles, `doble seis` for doubles.

The hyphen marks a coined name and keeps a 21-row table scannable. It is a coinage: Spanish does not hyphenate numeral pairs by convention, so a later reader may take it for an error. `doble seis` takes no hyphen because it is a real Spanish collocation, from dominoes. The asymmetry is deliberate.

**Groups:** Mitchi, Dobles, Seis alto, Cinco alto, Cuatro alto, Tres alto. Follows `as alto` in Spanish poker: masculine, agreeing with the numeral rather than with `mano`.

## `Mitchi` and `Mitchis`

The name of the game never inflects. `Mitchi` in every position, and never bent to agree with anything around it.

The hand is different. Where the copy counts hands that were rolled, the plural is ordinary Spanish: `dos Mitchis`, in `reference.scoring.two`. English does the same, "Two Mitchis rolled", so this is not a Spanish departure from the source but the same distinction the source already makes.

The test: if the sentence is about the game, it is `Mitchi`. If it is counting hands, it pluralises.

Singular uses of the hand stay bare and without an article: `solo Mitchi puede vencer a un doble`, `cada Mitchi que se saque`.

## Why `el bote`

The load-bearing scoring metaphor, so it was chosen once and is used everywhere.

`el bote` is the standard peninsular word for a pot or kitty, and every sentence the rules need is idiomatic: `los puntos del bote`, `el bote se dobla`, `se lleva el bote`. `bote acumulado` is the ordinary phrase for a pot that rolls over, which is exactly what a tie-break does.

It carries the same false ring of victory as the English "takes the pot", where the player taking it is the one losing the round. That inversion is in the source and is preserved deliberately, not translated away.

`el pozo` does the same job with a Latin American lean. It was rejected on the Europe-first decision rather than on merit: revisit it only if a Latin American locale is ever added, and if so, as a separate locale rather than by changing this one.

## Why "roll" takes two verbs

English uses one verb for both halves of a roll: you roll the dice, and you roll six-four. Spanish splits them. `tirar` is the act of throwing, `sacar` is what comes up.

`tira los dados` and `saca seis-cuatro` are both idiomatic. `tira seis-cuatro` is not, and reads as a translation.

So `tirar` wherever the sentence is about the act:

- Everyone rolls one die → `cada jugador tira un dado`
- They may re-roll both dice → `puede volver a tirar ambos dados`

And `sacar` wherever it is about the outcome:

- The starting player rolls six-three in two rolls → `el jugador inicial saca seis-tres en dos tiradas`
- Each Mitchi rolled adds 2 more points → `cada Mitchi que se saque añade 2 puntos más`

The noun `la tirada` covers both senses and is unaffected. `glossary.md` has a single entry for **Roll** because English needs only one: the split is a fact about Spanish, not a change to the term.

## `el juego` and `la partida`

`el juego` is Mitchi as a system: its rules, its hands, its ranking. `la partida` is one session, played to the point limit and then over.

English says "game" for both, so each occurrence has to be read for which one it means:

- The best hand in the game → `la mejor mano del juego`, the system
- The game ends as soon as any player reaches the point limit → `la partida termina en cuanto un jugador alcanza el límite de puntos`, the session
- Hand ranking and scoring, for use mid-game → `durante la partida`, the session

The test: if the English could say "in Mitchi", it is `el juego`. If it could say "this game" and mean tonight's, it is `la partida`. The hand strings translated first already use `del juego`, which is correct and is what leaves `la partida` free for the other sense.

## Register

Procedure and definitions are impersonal: `cada jugador tira`, `se tira`. The reader's own position takes the informal second person singular: `solo necesitas superar la peor mano hasta ahora`. Home and About use the second person freely. This mirrors the English, and `voice.md` is the source of the rule.

With procedure impersonal, the `vosotros` and `ustedes` question barely arises: the only second-person forms in the copy are singular.
