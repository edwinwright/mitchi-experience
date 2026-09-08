/**
 * Mitchi Speak: the informal names used at the table in place of the
 * official ones.
 *
 * Proper nouns. One form in every locale, never translated, rendered with
 * lang="en" and translate="no". They are data, not messages, so that no
 * translator is ever handed them: see docs/architecture/i18n-conventions.md.
 *
 * Published on /speak. The official name in the left column comes from the
 * `hands` messages; this file supplies the right column only.
 */
import { HANDS, type Hand, type HandId } from "./hands";

export const SPEAK_NAMES: Partial<Record<HandId, string>> = {
  "2-1": "Mitchi",
  "5-4": "Kenwright",
  "5-3": "Kenwrong",
  "3-3": "JC",
};

/** The named hands, in ranked order. What SpeakTable renders. */
export function speakHands(): ReadonlyArray<{ hand: Hand; name: string }> {
  return HANDS.flatMap((hand) => {
    const name = SPEAK_NAMES[hand.id];
    return name ? [{ hand, name }] : [];
  });
}
