// Import the Required Modules
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layout from "@/components/layout";

// Import the CSS File
import "./globals.css";

// Configure the Font
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
	display: "swap",
});

// Configure the Metadata
export const metadata: Metadata = {
	title: "Team Eagles's Official Website",
	description: "Introducing Team Eagles's Official Website, a versatile and engaging website designed by AmeenSid.",
};

// Function of RootLayout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<script defer data-site="YOUR DOMAIN HERE" src="#"></script>
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/png"
				/>
			</head>
			<body className={roboto.className}>
				<Layout>
					{children}
					{/* <FixedPlugin /> */}
				</Layout>
			</body>
		</html>
	);
}