import { Metadata } from "next";

export const metadata: Metadata = {
	title: "General Contractor Service Areas | Clark County WA | Norbilt",
	description:
		"Licensed general contractor serving Vancouver, Camas, Battle Ground, Ridgefield & all of Clark County WA. Repairs, remodels & handyman work. Free estimate.",
	alternates: {
		canonical: "https://www.norbilt.com/locations",
	},
	openGraph: {
		title: "General Contractor Service Areas | Clark County WA | Norbilt",
		description:
			"Licensed general contractor serving Vancouver, Camas, Washougal, and all of Clark County WA. Free estimates.",
		url: "https://www.norbilt.com/locations",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt General Contractor Service Areas in Clark County WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "General Contractor Service Areas | Clark County WA | Norbilt",
		description:
			"Licensed general contractor serving Vancouver, Camas, Washougal, and all of Clark County WA. Free estimates.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function LocationsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
