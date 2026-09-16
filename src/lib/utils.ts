import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally join classNames together and merge Tailwind CSS classes.
 *
 * - Accepts any number of values (strings, numbers, arrays, or objects) as input, just like `clsx`.
 * - Uses `clsx` to concatenate the class values based on their truthiness.
 * - Then merges them using `tailwind-merge` to resolve any conflicts between Tailwind utility classes.
 * - See [Tailwind Merge and CLSX]{@link https://dev.to/sheraz4194/mastering-tailwind-css-overcome-styling-conflicts-with-tailwind-merge-and-clsx-1dol} for more information.
 *
 * @param inputs - The class values to join and merge.
 * @returns A single string of merged class names.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Zero-padded ordinal for rendered numbering: 1 → "01". Decoration, never copy. */
export function twoDigit(n: number) {
  return String(n).padStart(2, "0");
}
