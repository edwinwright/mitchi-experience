/**
 * Hand data for Mitchi.
 *
 * Hands are data, hand *names* are messages: the visible name comes from
 * t(`hands.${hand.id}`) and the group name from t(`groups.${hand.group}`).
 * Never compose a name from two number words at runtime.
 * See docs/architecture/i18n-conventions.md.
 */

export const HAND_GROUPS = [
  "mitchi",
  "doubles",
  "sixHigh",
  "fiveHigh",
  "fourHigh",
  "threeHigh",
] as const;

/** The six groups, ranked best to worst. */
export type HandGroup = (typeof HAND_GROUPS)[number];

type HandShape = {
  /** Higher die, then lower. Also the key under the `hands` namespace. */
  readonly id: string;
  readonly high: number;
  readonly low: number;
  readonly group: HandGroup;
};

/**
 * All 21 hands, ranked best to worst. The array order *is* the ranking:
 * do not re-sort it, and read rank from the index if you need one.
 *
 * Within doubles, higher beats lower. Within a high group, the lower die
 * breaks the tie. Three-one is the worst hand in the game.
 */
export const HANDS = [
  { id: "2-1", high: 2, low: 1, group: "mitchi" },

  { id: "6-6", high: 6, low: 6, group: "doubles" },
  { id: "5-5", high: 5, low: 5, group: "doubles" },
  { id: "4-4", high: 4, low: 4, group: "doubles" },
  { id: "3-3", high: 3, low: 3, group: "doubles" },
  { id: "2-2", high: 2, low: 2, group: "doubles" },
  { id: "1-1", high: 1, low: 1, group: "doubles" },

  { id: "6-5", high: 6, low: 5, group: "sixHigh" },
  { id: "6-4", high: 6, low: 4, group: "sixHigh" },
  { id: "6-3", high: 6, low: 3, group: "sixHigh" },
  { id: "6-2", high: 6, low: 2, group: "sixHigh" },
  { id: "6-1", high: 6, low: 1, group: "sixHigh" },

  { id: "5-4", high: 5, low: 4, group: "fiveHigh" },
  { id: "5-3", high: 5, low: 3, group: "fiveHigh" },
  { id: "5-2", high: 5, low: 2, group: "fiveHigh" },
  { id: "5-1", high: 5, low: 1, group: "fiveHigh" },

  { id: "4-3", high: 4, low: 3, group: "fourHigh" },
  { id: "4-2", high: 4, low: 2, group: "fourHigh" },
  { id: "4-1", high: 4, low: 1, group: "fourHigh" },

  { id: "3-2", high: 3, low: 2, group: "threeHigh" },
  { id: "3-1", high: 3, low: 1, group: "threeHigh" },
] as const satisfies readonly HandShape[];

export type Hand = (typeof HANDS)[number];
export type HandId = Hand["id"];

export function handsInGroup(group: HandGroup): readonly Hand[] {
  return HANDS.filter((hand) => hand.group === group);
}

/** One hand by id. Ids are typed, so a miss is a bug, not a case. */
export function handById(id: HandId): Hand {
  const hand = HANDS.find((hand) => hand.id === id);
  if (!hand) throw new Error(`Unknown hand: ${id}`);
  return hand;
}

/** Groups in ranked order, each with its hands. What RankingCard renders. */
export function rankedGroups(): ReadonlyArray<{
  group: HandGroup;
  hands: readonly Hand[];
}> {
  return HAND_GROUPS.map((group) => ({ group, hands: handsInGroup(group) }));
}
