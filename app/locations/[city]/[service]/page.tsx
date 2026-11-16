import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

export async function generateStaticParams() {
	const params = [];
	for (const city of Object.keys(locationsData)) {
		for (const service of Object.keys(servicesData)) {
			params.push({ city, service });
		}
	}
	return params;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	if (!cityData || !serviceData || !cityData.name) {
		return { title: "Home Remodeling Services | Norbilt" };
	}

	const cityName = cityData.name?.split(",")[0] || "Local";
	const serviceSlug = resolvedParams.service;

	// Service-specific title and description patterns for higher CTR
	const titleMap: Record<string, string> = {
		"handyman": `Handyman in ${cityName} WA | 5-Star Licensed | Same-Week | Norbilt`,
		"home-repair": `Home Repair in ${cityName} WA | Licensed & 5-Star Rated | Norbilt`,
		"drywall-repair": `Drywall Repair in ${cityName} WA | Seamless Patches | Free Estimate | Norbilt`,
		"finish-carpentry": `Finish Carpentry in ${cityName} WA | Crown Molding & Trim | Norbilt`,
		"kitchen-bath": `Kitchen & Bathroom Remodeling in ${cityName} WA | Licensed Contractor | Norbilt`,
		"flooring": `Flooring Repair in ${cityName} WA | LVP & Tile | Free Estimate | Norbilt`,
		"door-window": `Door & Window Repair in ${cityName} WA | Licensed | Free Estimate | Norbilt`,
		"bathroom-remodel": `Bathroom Remodeling in ${cityName} WA | Licensed Contractor | Norbilt`,
		"kitchen-remodel": `Kitchen Remodeling in ${cityName} WA | Licensed Contractor | Norbilt`,
		"lighting": `Lighting & Fixtures in ${cityName} WA | Licensed Installation | Norbilt`,
	};

	const descMap: Record<string, string> = {
		"handyman": `5-star rated handyman in ${cityName}, WA. Drywall, fixtures, doors, mounting & punch lists. Licensed & bonded. Free same-week estimate.`,
		"home-repair": `Licensed home repair in ${cityName}, WA. 5-star rated. Drywall, fixtures, doors, caulking & more. Free same-week estimate.`,
		"drywall-repair": `Expert drywall repair in ${cityName}, WA. Hole patching, texture matching & water damage repair. Licensed, 1-year warranty. Free estimate.`,
		"finish-carpentry": `Licensed finish carpentry in ${cityName}, WA. Baseboards, crown molding, wainscoting & trim. Free estimates, 1-year warranty.`,
		"kitchen-bath": `Licensed kitchen & bathroom remodeling in ${cityName}, WA. Full remodels, tub-to-shower, tile & vanity. Free same-week estimate.`,
		"flooring": `Flooring repair & installation in ${cityName}, WA. LVP, tile, hardwood & subfloor repair. Licensed contractor. Free estimate.`,
		"door-window": `Door & window repair in ${cityName}, WA. Installs, weatherstripping, sticking doors & hardware. Licensed. Free estimate.`,
		"bathroom-remodel": `Licensed bathroom remodeling in ${cityName}, WA. Full gut remodels, tub-to-shower conversions, vanity & tile. Free same-week estimate.`,
		"kitchen-remodel": `Licensed kitchen remodeling in ${cityName}, WA. Full remodels, cabinet replacement, countertops & backsplash. Free same-week estimate.`,
		"lighting": `Licensed lighting & fixture installation in ${cityName}, WA. Ceiling fans, recessed lighting & fixture upgrades. Free estimate.`,
	};

	const shortTitle = titleMap[serviceSlug] ?? `${serviceData.title} in ${cityName} WA | Licensed & 5-Star Rated | Norbilt`;
	const fullDesc = descMap[serviceSlug] ?? `5-star rated ${serviceData.title.toLowerCase()} in ${cityName}, WA. Licensed, bonded & insured. Free same-week estimate.`;
	const pageUrl = `https://www.norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`;

	return {
		title: shortTitle,
		description: fullDesc,
		alternates: { canonical: pageUrl },
		openGraph: {
			title: shortTitle,
			description: fullDesc,
			url: pageUrl,
			siteName: "Norbilt",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://www.norbilt.com/og-image.jpg",
					width: 1200,
					height: 630,
					alt: `${serviceData.title} in ${cityName} WA`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: shortTitle,
			description: fullDesc,
			images: ["https://www.norbilt.com/og-image.jpg"],
		},
	};
}

export default async function Page({ params }: any) {
	const resolvedParams = await params;
	const city = locationsData[resolvedParams.city];
	const service = servicesData[resolvedParams.service];

	if (!city || !service) return notFound();

	return (
		<ServicePageClient
			city={city}
			service={service}
			citySlug={resolvedParams.city}
			serviceSlug={resolvedParams.service}
		/>
	);
}
