/**
 * Mitchi Speak: the nicknames one group gave its hands.
 *
 * Proper nouns. One form in every locale, never translated. They are data,
 * not messages, so that no translator is ever handed them: they enter
 * `about.mitchiSpeak.names` as ICU values. See
 * docs/architecture/i18n-conventions.md.
 *
 * Published as prose on /about#mitchi-speak. Mitchi itself is the official
 * name of two-one, not a nickname, so it is not here.
 */
export const SPEAK_NAMES = {
  kenwright: "Kenwright", // five-four
  kenwrong: "Kenwrong", // five-three
  jc: "JC", // double-three
} as const;
