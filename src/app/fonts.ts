import {
  Archivo,
  JetBrains_Mono,
  Lato,
  Source_Serif_4,
} from "next/font/google";

// Archivo, Source Serif 4 and JetBrains Mono are variable: omitting `weight`
// ships one file covering the whole range the brand sheet asks for, instead of
// a static instance per weight. Lato is static, so its one weight is named.
export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
  display: "swap",
});
