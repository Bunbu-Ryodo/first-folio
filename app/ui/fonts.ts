import { JetBrains_Mono } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Public_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const jetbrains = JetBrains_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const sourceSerif = Source_Serif_4({
  weight: ["400", "200"],
  subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
  weight: ["400"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const publicSans = Public_Sans({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
});
