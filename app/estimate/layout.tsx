import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Get a Free Estimate | Home Remodeling Contractor Clark County WA | Norbilt",
	description:
		"Get a free, no-obligation estimate for home remodeling in Vancouver WA and Clark County. Kitchen & bath, finish carpentry, flooring & more. Licensed contractor, same-week response.",
	alternates: { canonical: "https://www.norbilt.com/estimate" },
	openGraph: {
		title: "Get a Free Remodeling Estimate | Norbilt Vancouver WA",
		description:
			"Free, no-obligation estimate for kitchen, bathroom and home remodeling in Vancouver WA and Clark County.",
		url: "https://www.norbilt.com/estimate",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630, alt: "Free Remodeling Estimate | Norbilt" }],
	},
};

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
