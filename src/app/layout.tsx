import { noto_emoji, munro } from "./fonts";
import Header from "@/app/Header";
import "./globals.css";
import { AppContextProvider } from "./context/AppContext";

export const metadata = {
	title: "jakesnyder.dev",
	description: "Jake's Web / Game Development Portfolio and Blog",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// - - - - - BG TRANSITION - - - - -

	return (
		<html lang="en" className={`${noto_emoji.variable} ${munro.variable}`}>
			<AppContextProvider>
				<body>
					<Header />
					{children}
				</body>
			</AppContextProvider>
		</html>
	);
}
