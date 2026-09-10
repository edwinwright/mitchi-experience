# Glossary: Spanish

The agreed Spanish form of every term in `glossary.md`. Companion file, one per locale.

This file holds **term forms and the reasoning behind contested ones**. It does not hold definitions: those live once, in `messages/es.json`, and duplicating them here would give the site two sources of truth for the same sentence.

Variety: European Spanish, informal.

## Terms

| English | Spanish | Note |
|---|---|---|
| Mitchi (game, and the hand) | Mitchi | Untranslated and uninflected, in every language |
| Hand | la mano | |
| Die / dice | el dado / los dados | |
| Roll | la tirada, tirar | `tirar los dados` is the idiomatic game verb. `lanzar` is the athletic one |
| Roll limit | el límite de tiradas | |
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

## Why `el bote`

The load-bearing scoring metaphor, so it was chosen once and is used everywhere.

`el bote` is the standard peninsular word for a pot or kitty, and every sentence the rules need is idiomatic: `los puntos del bote`, `el bote se dobla`, `se lleva el bote`. `bote acumulado` is the ordinary phrase for a pot that rolls over, which is exactly what a tie-break does.

It carries the same false ring of victory as the English "takes the pot", where the player taking it is the one losing the round. That inversion is in the source and is preserved deliberately, not translated away.

`el pozo` does the same job with a Latin American lean. It was rejected on the Europe-first decision rather than on merit: revisit it only if a Latin American locale is ever added, and if so, as a separate locale rather than by changing this one.

## Register

Procedure and definitions are impersonal: `cada jugador tira`, `se tira`. The reader's own position takes the informal second person singular: `solo necesitas superar la peor mano hasta ahora`. Home and About use the second person freely. This mirrors the English, and `voice.md` is the source of the rule.

With procedure impersonal, the `vosotros` and `ustedes` question barely arises: the only second-person forms in the copy are singular.
