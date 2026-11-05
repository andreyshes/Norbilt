import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Photo Estimate: Upload a Photo, Get a Remodel Cost Range | Norbilt",
	description:
		"Upload a photo of your bathroom, kitchen or repair and get an instant cost range for Vancouver WA and Clark County. Free, from a licensed local contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/photo-estimate",
	},
	openGraph: {
		title: "Photo Estimate: Upload a Photo, Get a Remodel Cost Range | Norbilt",
		description:
			"Upload a photo and get an instant cost range for your remodel or repair in Vancouver WA and Clark County.",
		url: "https://www.norbilt.com/photo-estimate",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Photo Estimate | Norbilt Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Photo Estimate: Upload a Photo, Get a Remodel Cost Range | Norbilt",
		description:
			"Upload a photo and get an instant cost range for your remodel or repair in Vancouver WA and Clark County.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function PhotoEstimateLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
