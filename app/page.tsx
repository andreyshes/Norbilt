import HomePageContent from "@/app/components/HomePageContent";

export const metadata = {
	title: "Home Remodeling Contractor Vancouver WA | Licensed | NORBILT",

	description:
		"5-star rated home remodeling contractor near you in Vancouver WA and Clark County. Kitchen & bath remodels, finish carpentry & flooring. Licensed, local. Free same-week estimate. (360) 216-9920.",

	alternates: {
		canonical: "https://www.norbilt.com",
	},
	openGraph: {
		title: "Home Remodeling Contractor Vancouver WA | Licensed | NORBILT",
		description:
			"Licensed home remodeling contractor in Vancouver WA — kitchen & bath remodels, finish carpentry, flooring, and more. 5-star rated. Free same-week estimates.",
		type: "website",
		url: "https://www.norbilt.com",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Kitchen & Bath Remodeling Vancouver WA",
			},
		],
	},
	keywords: [
		"kitchen remodeling Vancouver WA",
		"bathroom remodeling Vancouver WA",
		"home remodeling contractor Vancouver WA",
		"remodel contractors near me",
		"licensed contractor Vancouver WA",
		"tub to shower conversion Clark County",
		"finish carpentry Clark County",
	],
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "HomeAndConstructionBusiness",
	"@id": "https://www.norbilt.com/#organization",
	name: "NORBILT",
	url: "https://www.norbilt.com",
	telephone: "+13602169920",
	email: "hello@norbilt.com",
	description:
		"Licensed home remodeling contractor serving Vancouver WA and Clark County. Kitchen remodels, bathroom renovations, finish carpentry, flooring, and full home renovations. 5-star rated.",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Vancouver",
		addressRegion: "WA",
		postalCode: "98686",
		addressCountry: "US",
	},
	areaServed: [
		{ "@type": "City", name: "Vancouver", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Camas", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Battle Ground", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Ridgefield", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Washougal", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Salmon Creek", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Hazel Dell", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Brush Prairie", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "City", name: "Felida", containedInPlace: { "@type": "State", name: "Washington" } },
		{ "@type": "AdministrativeArea", name: "Clark County", containedInPlace: { "@type": "State", name: "Washington" } },
	],
	hasCredential: "WA General Contractor License NORBI**741CS",
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5.0",
		reviewCount: "13",
		bestRating: "5",
	},
	priceRange: "$$",
	sameAs: [
		"https://www.google.com/maps?cid=NORBILT",
	],
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			<HomePageContent />
		</>
	);
}
