import { noto_emoji, munro } from "./fonts";
import Header from "@/app/Header";
import "./globals.css";

export const metadata = {
	title: "jakesnyder.dev",
	description: "Jake's Web / Game Development Portfolio and Blog",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${noto_emoji.variable} ${munro.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
