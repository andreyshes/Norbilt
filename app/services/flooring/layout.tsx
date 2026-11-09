import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Vancouver WA | LVP, Hardwood & Tile | Norbilt",
	description:
		"Licensed flooring contractor in Vancouver WA & Clark County. LVP, hardwood, tile & laminate installation. Also repairs planks, squeaks & thresholds. Free estimate.",
	alternates: {
		canonical: "https://www.norbilt.com/services/flooring",
	},
	openGraph: {
		title: "Flooring Repair Vancouver WA | Norbilt",
		description:
			"LVP, tile, and floor repair services for homes in Vancouver and Clark County WA.",
		url: "https://www.norbilt.com/services/flooring",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Flooring Repair Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Flooring Repair Vancouver WA | Norbilt",
		description:
			"LVP, tile, and floor repair services for homes in Vancouver and Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
