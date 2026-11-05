import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Renovation Advisor: What Should You Remodel First? | Norbilt",
	description:
		"Answer 4 quick questions about your home, goals and budget to see which remodel projects to do first. Free tool from a licensed Vancouver WA contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/renovation-advisor",
	},
	openGraph: {
		title: "Renovation Advisor: What Should You Remodel First? | Norbilt",
		description:
			"Answer 4 quick questions and get a prioritized remodel plan for your Clark County home.",
		url: "https://www.norbilt.com/renovation-advisor",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Renovation Advisor | Norbilt Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Renovation Advisor: What Should You Remodel First? | Norbilt",
		description:
			"Answer 4 quick questions and get a prioritized remodel plan for your Clark County home.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function RenovationAdvisorLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
