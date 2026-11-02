import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Tips & Cost Guides Clark County WA | Norbilt Blog",
	description:
		"Home remodeling cost guides and tips for Clark County homeowners. Kitchen remodels, bathroom renovations, flooring, and more for Vancouver, Battle Ground, Camas & Ridgefield.",
	alternates: {
		canonical: "https://www.norbilt.com/blog",
	},
	openGraph: {
		title: "Home Remodeling Tips & Cost Guides | Norbilt Blog",
		description:
			"Practical home remodeling guides and cost breakdowns for Clark County WA homeowners.",
		url: "https://www.norbilt.com/blog",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt Home Repair Blog Clark County WA",
			},
		],
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
