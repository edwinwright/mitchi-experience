// Inline link styling for a link inside prose copy: blue, underlined, red on
// hover. Shared by every page/component that renders `t.rich(..., tags)`
// output containing a link tag.
export const proseLink =
  "[&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-red-600";

// Bulleted items inside prose: the square marker matches the ordinal red
// nowhere, on purpose; it is a list, not a step. Shared by /rules and /about.
export const bullet =
  "relative pl-7 before:absolute before:top-3 before:left-0 before:size-1.5 before:bg-foreground";
