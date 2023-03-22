import { Noto_Emoji } from "next/font/google";
import localFont from "next/font/local";

export const noto_emoji = Noto_Emoji({
	subsets: ["emoji"],
	display: "swap",
	variable: "--noto-emoji",
});

export const munro = localFont({
	src: "../assets/munro/munro.ttf",
	display: "swap",
	variable: "--munro",
});
