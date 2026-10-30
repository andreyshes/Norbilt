import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Remodel Promise | Kitchen & Bath Remodeling in Vancouver, WA | NORBILT",
	description:
		"8 written guarantees for every NORBILT kitchen and bathroom remodel in Clark County: itemized estimate in 3 business days, owner on site, weekly photo updates, no surprise charges.",
	alternates: {
		canonical: "https://www.norbilt.com/remodel-promise",
	},
	openGraph: {
		title: "Our Remodel Promise | NORBILT Kitchen & Bath Vancouver WA",
		description:
			"8 written guarantees for every NORBILT kitchen and bathroom remodel in Clark County: itemized estimate in 3 business days, owner on site, weekly photo updates, no surprise charges.",
		url: "https://www.norbilt.com/remodel-promise",
		type: "website",
		siteName: "NORBILT",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "The NORBILT Remodel Promise — Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Remodel Promise | NORBILT Kitchen & Bath Vancouver WA",
		description:
			"8 written guarantees for every NORBILT kitchen and bathroom remodel in Clark County.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
