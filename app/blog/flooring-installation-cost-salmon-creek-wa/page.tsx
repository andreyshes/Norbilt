import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Cost Salmon Creek WA: 2026 Guide | NORBILT",
	description:
		"How much does flooring installation cost in Salmon Creek WA? Real 2026 prices for LVP, hardwood, tile & carpet from a licensed Clark County contractor. Free estimate. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/flooring-installation-cost-salmon-creek-wa",
	},
	openGraph: {
		title: "Flooring Installation Cost in Salmon Creek WA | NORBILT",
		description:
			"LVP, hardwood, tile, and carpet flooring costs in Salmon Creek WA. Real 2026 numbers from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/flooring-installation-cost-salmon-creek-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{
		material: "Carpet",
		install: "$1.50 – $3.50/sq ft",
		material_cost: "$1.00 – $4.00/sq ft",
		total_1000sqft: "$2,500 – $7,500",
		notes: "Bedrooms, stairs. Many Salmon Creek 1990s homes still have original carpet — LVP upgrades are the most common replacement.",
	},
	{
		material: "Luxury Vinyl Plank (LVP)",
		install: "$2.00 – $4.00/sq ft",
		material_cost: "$2.00 – $6.00/sq ft",
		total_1000sqft: "$4,000 – $10,000",
		notes: "Most popular in Salmon Creek. Waterproof, installs over existing subfloor, handles PNW humidity well.",
	},
	{
		material: "Laminate",
		install: "$1.75 – $3.50/sq ft",
		material_cost: "$1.50 – $4.50/sq ft",
		total_1000sqft: "$3,250 – $8,000",
		notes: "Wood look at lower cost. Not waterproof — avoid near exterior doors and in homes with crawlspace moisture.",
	},
	{
		material: "Engineered Hardwood",
		install: "$3.00 – $5.00/sq ft",
		material_cost: "$4.00 – $10.00/sq ft",
		total_1000sqft: "$7,000 – $15,000",
		notes: "Real wood look with better stability than solid. Popular in higher-end Salmon Creek homes and pre-sale upgrades.",
	},
	{
		material: "Solid Hardwood",
		install: "$4.00 – $7.00/sq ft",
		material_cost: "$5.00 – $14.00/sq ft",
		total_1000sqft: "$9,000 – $21,000",
		notes: "Premium option. Cannot install below grade — confirm no crawlspace moisture before specifying.",
	},
	{
		material: "Porcelain / Ceramic Tile",
		install: "$5.00 – $9.00/sq ft",
		material_cost: "$2.00 – $8.00/sq ft",
		total_1000sqft: "$7,000 – $17,000",
		notes: "Best for kitchens, bathrooms, mudrooms. Labor-intensive; grout requires sealing annually.",
	},
	{
		material: "Sheet Vinyl",
		install: "$1.00 – $2.50/sq ft",
		material_cost: "$0.75 – $3.00/sq ft",
		total_1000sqft: "$1,750 – $5,500",
		notes: "Budget utility rooms and rentals. Limited design options.",
	},
];

const addOnCosts = [
	{ item: "Old flooring removal & disposal (per sq ft)", range: "$0.50 – $2.00" },
	{ item: "Subfloor repair / leveling (per sq ft)", range: "$2.00 – $6.00" },
	{ item: "Stair nose installation (per tread)", range: "$30 – $80" },
	{ item: "Transition strips (per doorway)", range: "$25 – $60" },
	{ item: "Asbestos testing (homes pre-1985)", range: "$150 – $400" },
	{ item: "Vapor barrier / moisture underlayment", range: "$0.50 – $1.50/sq ft" },
	{ item: "Furniture moving (per room)", range: "$50 – $150" },
];

const projectTotals = [
	{ project: "Single bedroom LVP", scope: "Approx. 150 sq ft, includes removal", range: "$700 – $1,600" },
	{ project: "Main floor LVP (open plan)", scope: "Approx. 900–1,200 sq ft, includes removal", range: "$4,000 – $10,000" },
	{ project: "Whole house LVP", scope: "Approx. 1,800–2,400 sq ft, all rooms", range: "$8,000 – $20,000" },
	{ project: "Kitchen & dining tile", scope: "Approx. 300–400 sq ft, porcelain", range: "$2,800 – $7,000" },
	{ project: "Engineered hardwood — main floor", scope: "Approx. 900–1,200 sq ft", range: "$7,000 – $16,000" },
	{ project: "Stair carpet replacement", scope: "12–15 treads, runner or wall-to-wall", range: "$1,200 – $3,500" },
];

const neighborhoods = [
	{
		area: "Salmon Creek Corridor (NE 139th St area, 1990s–2000s Subdivisions)",
		note: "The most common housing stock we work in throughout Salmon Creek — production homes from the 1990s and early 2000s with original carpet in bedrooms and either builder laminate or older LVP on the main floor. The main-floor LVP replacement is the highest-volume project here: homeowners pull the dated narrow-plank laminate and install a premium wide-plank LVP in a lighter oak or neutral tone. Budget $4,000–$10,000 for a full main-floor replacement at 900–1,200 sq ft.",
	},
	{
		area: "Felida Road & West Salmon Creek (1980s–1990s Custom Homes)",
		note: "Larger lots with more individual home designs from the 1980s and 1990s. Original carpet throughout is common. Check under the carpet before assuming LVP is the right move — homes of this era often have solid hardwood underneath that can be refinished for $3–$5/sq ft, which is far less than replacement. If the wood is in poor condition or the subfloor has moisture history, LVP is the correct path forward.",
	},
	{
		area: "Salmon Creek Near I-5 / NE 119th St Developments",
		note: "Denser development closer to the freeway — a mix of 1990s homes and some newer 2000s–2010s construction. Builder-grade flooring that's reached end-of-life is the most common project trigger here. Subfloor condition is typically good on the newer stock. Straightforward LVP replacement projects with predictable pricing.",
	},
	{
		area: "Newer Salmon Creek Growth Areas (2010s–Present)",
		note: "Newer construction homes in the outer Salmon Creek area and into the Brush Prairie boundary. Similar to Ridgefield new builds — builder carpet in bedrooms and builder LVP on the main floor. Homeowners upgrade after 5–8 years as the builder material shows wear. Wide-plank premium LVP is the most popular upgrade choice. Subfloor is in excellent condition on these homes.",
	},
];

const faqs = [
	{
		q: "How much does flooring installation cost in Salmon Creek WA?",
		a: "Flooring installation in Salmon Creek WA costs $4–$10/sq ft for LVP (the most common upgrade), $7–$15/sq ft for engineered hardwood, and $7–$17/sq ft for tile. A full main-floor LVP replacement (900–1,200 sq ft) typically runs $4,000–$10,000 installed including removal of the old flooring. These prices reflect 2026 Clark County market rates from a licensed contractor.",
	},
	{
		q: "What flooring is best for 1990s Salmon Creek homes?",
		a: "LVP is the most practical and cost-effective choice for 1990s Salmon Creek homes. These homes typically have carpet in bedrooms and dated laminate or older LVP on the main floor — both due for replacement. A premium wide-plank LVP (5\"–7\" width, 8–12mm thickness) installed over the existing subfloor is a clean upgrade that handles PNW humidity well, is fully waterproof, and looks significantly better than the original builder flooring. If original hardwood is found under the carpet, a refinish may be worth considering first.",
	},
	{
		q: "Is there hardwood under the carpet in Salmon Creek homes?",
		a: "Possibly, depending on the age of the home. Homes built before the mid-1980s in the Salmon Creek and Felida area sometimes have original fir or oak hardwood under carpet. Homes from the 1990s onward were almost always built with carpet directly over OSB subfloor — no hardwood underneath. The easy way to check: pull up a floor vent cover or look in a closet corner where the carpet meets the wall and peek underneath. If you find solid hardwood in good condition, refinishing at $3–$5/sq ft may be the better option before committing to replacement.",
	},
	{
		q: "How long does flooring installation take in Salmon Creek?",
		a: "A single room (150–200 sq ft) takes 4–6 hours. A full main floor (900–1,200 sq ft) takes 1–2 days. A whole-house installation (1,800–2,400 sq ft) takes 3–5 days. Tile projects run longer — a kitchen floor of 300–400 sq ft takes 2–3 days including grout cure time. We provide a day-by-day schedule at the estimate so you can plan around the project.",
	},
	{
		q: "Does subfloor condition affect the cost in Salmon Creek?",
		a: "Yes — especially in 1990s homes where small subfloor leaks or crawlspace moisture may have caused soft spots, unlevel sections, or squeaky areas over the years. We inspect the subfloor after pulling the old flooring and give you a written scope for any repairs before new flooring goes down. Minor leveling compound runs $2–$4/sq ft for small areas; a full subfloor section replacement runs $400–$800 per 4x8 sheet area. In most Salmon Creek homes we work in, subfloor repairs are minor — but it's worth accounting for in your budget.",
	},
];

export default function FlooringCostSalmonCreek() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Flooring Installation Cost in Salmon Creek WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-10-26",
						dateModified: "2026-10-26",
						description:
							"2026 flooring installation costs in Salmon Creek WA — LVP, hardwood, tile, and carpet pricing with neighborhood context for north Vancouver / Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/flooring-installation-cost-salmon-creek-wa",
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
							{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
							{
								"@type": "ListItem",
								position: 3,
								name: "Flooring Installation Cost in Salmon Creek WA",
								item: "https://www.norbilt.com/blog/flooring-installation-cost-salmon-creek-wa",
							},
						],
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faqs.map(({ q, a }) => ({
							"@type": "Question",
							name: q,
							acceptedAnswer: { "@type": "Answer", text: a },
						})),
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								<MapPin className="w-3 h-3" /> Salmon Creek WA
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Flooring Cost Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Flooring Installation Cost in Salmon Creek WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							2026 prices for LVP, engineered hardwood, tile, and carpet in Salmon Creek —
							from a licensed Clark County contractor who works in north Vancouver every week.
						</p>
						<div className="flex flex-wrap gap-4 pt-2">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-[#1F2E2B] font-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
							>
								Get Free Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<a
								href="tel:3602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/5 transition-colors"
							>
								<Phone className="w-4 h-4" /> (360) 216-9920
							</a>
						</div>
					</div>
				</section>

				{/* QUICK ANSWER */}
				<section className="py-12 bg-[#FFB800]/5 border-b border-[#FFB800]/20">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#FFB800] mb-3">Quick Answer</p>
						<p className="text-xl font-black text-[#1F2E2B] mb-2">
							Flooring installation in Salmon Creek WA costs $4–$10/sq ft for LVP and $7–$15/sq ft for engineered hardwood.
						</p>
						<p className="text-gray-600">
							A full main-floor LVP replacement in a Salmon Creek home (900–1,200 sq ft) runs{" "}
							<strong>$4,000–$10,000</strong> installed. Whole-house flooring (1,800–2,400 sq ft) runs{" "}
							<strong>$8,000–$20,000</strong>. All prices include removal of existing flooring and basic subfloor prep.
						</p>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">
							2026 Flooring Cost by Material — Salmon Creek WA
						</h2>
						<p className="text-gray-600 mb-8">
							Installed cost including labor, materials, and basic subfloor prep. Prices reflect current Clark County market rates.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Material</th>
										<th className="text-left px-4 py-3 font-bold hidden sm:table-cell">Labor</th>
										<th className="text-left px-4 py-3 font-bold hidden sm:table-cell">Material</th>
										<th className="text-left px-4 py-3 font-bold">1,000 sq ft Total</th>
										<th className="text-left px-4 py-3 font-bold hidden lg:table-cell">Notes</th>
									</tr>
								</thead>
								<tbody>
									{costRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 font-bold text-[#1F2E2B] align-top">{row.material}</td>
											<td className="px-4 py-3 text-gray-500 text-xs align-top hidden sm:table-cell">{row.install}</td>
											<td className="px-4 py-3 text-gray-500 text-xs align-top hidden sm:table-cell">{row.material_cost}</td>
											<td className="px-4 py-3 font-bold text-[#2D5A3D] whitespace-nowrap align-top">{row.total_1000sqft}</td>
											<td className="px-4 py-3 text-gray-400 text-xs align-top hidden lg:table-cell">{row.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-xs text-gray-400 mt-3 italic">
							All prices include removal of existing flooring. Subfloor repairs, stairs, and transitions are additional — see below.
						</p>
					</div>
				</section>

				{/* ADD-ON COSTS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Add-On Costs to Budget For</h2>
						<p className="text-gray-600 mb-8">
							These aren&apos;t surprises — we quote them upfront at the estimate.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Item</th>
										<th className="text-left px-4 py-3 font-bold">Cost</th>
									</tr>
								</thead>
								<tbody>
									{addOnCosts.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 text-[#1F2E2B] font-semibold">{row.item}</td>
											<td className="px-4 py-3 font-bold text-[#2D5A3D] whitespace-nowrap">{row.range}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* PROJECT TOTALS */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Common Project Totals — Salmon Creek WA</h2>
						<p className="text-gray-600 mb-8">
							All-in estimates for typical flooring projects in Salmon Creek, including removal and transitions.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Project</th>
										<th className="text-left px-4 py-3 font-bold hidden sm:table-cell">Scope</th>
										<th className="text-left px-4 py-3 font-bold">Total Cost</th>
									</tr>
								</thead>
								<tbody>
									{projectTotals.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 font-bold text-[#1F2E2B] align-top">{row.project}</td>
											<td className="px-4 py-3 text-gray-500 text-xs align-top hidden sm:table-cell">{row.scope}</td>
											<td className="px-4 py-3 font-bold text-[#2D5A3D] whitespace-nowrap align-top">{row.range}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* BY NEIGHBORHOOD */}
				<section className="py-16 lg:py-20 bg-[#1F2E2B]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-white mb-8">What We See by Salmon Creek Neighborhood</h2>
						<div className="grid sm:grid-cols-2 gap-6">
							{neighborhoods.map((n, i) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
									<p className="font-black text-[#FFB800] mb-2 text-sm">{n.area}</p>
									<p className="text-gray-300 text-sm leading-relaxed">{n.note}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* WHAT'S INCLUDED */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">What&apos;s Included in a NORBILT Flooring Quote</h2>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ item: "Material supply", detail: "Flooring product, underlayment, adhesive, and installation hardware — all included" },
								{ item: "Old floor removal & disposal", detail: "We pull the existing flooring and haul it away as part of the project" },
								{ item: "Basic subfloor prep", detail: "Minor leveling compound for small dips — extensive repairs are quoted separately after removal" },
								{ item: "Transitions and stair noses", detail: "Doorway transitions and stair nose pieces fitted and installed as needed" },
								{ item: "Baseboard removal and reinstall", detail: "We pull existing baseboards, install the flooring underneath, and reinstall — no gap at the wall" },
								{ item: "Final cleanup", detail: "All flooring scraps, packaging, and sawdust removed — room is left broom-clean" },
							].map((row, i) => (
								<div key={i} className="flex gap-3">
									<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] flex-shrink-0 mt-0.5" />
									<div>
										<p className="font-bold text-[#1F2E2B] text-sm">{row.item}</p>
										<p className="text-gray-500 text-xs leading-relaxed">{row.detail}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* SERVICE CALLOUT */}
				<div className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
					<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<div>
							<p className="font-black text-[#1F2E2B] mb-1">Ready for a flooring quote in Salmon Creek?</p>
							<p className="text-gray-600 text-sm">
								View our full flooring service — materials, process, and warranty for Clark County homeowners.
							</p>
						</div>
						<Link
							href="/services/flooring"
							className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1F2E2B] transition-colors whitespace-nowrap shrink-0"
						>
							Flooring Service <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>

				{/* RELATED READING */}
				<section className="py-12 bg-gray-50 border-y border-gray-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Flooring Cost — Clark County WA", href: "/blog/flooring-installation-cost-clark-county-wa" },
								{ label: "Flooring Cost — Vancouver WA", href: "/blog/flooring-installation-cost-vancouver-wa" },
								{ label: "Flooring Cost — Camas WA", href: "/blog/flooring-installation-cost-camas-wa" },
								{ label: "Kitchen Remodel Cost — Salmon Creek WA", href: "/blog/kitchen-remodel-cost-salmon-creek-wa" },
								{ label: "Bathroom Remodel Cost — Salmon Creek WA", href: "/blog/bathroom-remodel-cost-salmon-creek-wa" },
								{ label: "Home Remodeling — Salmon Creek WA", href: "/blog/home-remodeling-salmon-creek-wa" },
							].map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D5A3D] bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-[#2D5A3D]/40 transition-colors"
								>
									{link.label} <ArrowRight className="w-3 h-3" />
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Flooring FAQ — Salmon Creek WA</h2>
						<div className="space-y-4">
							{faqs.map((faq, i) => (
								<div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
									<div className="bg-gray-50 px-6 py-4">
										<h3 className="font-bold text-[#1F2E2B]">{faq.q}</h3>
									</div>
									<div className="px-6 py-4">
										<p className="text-gray-600 leading-relaxed">{faq.a}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-16 lg:py-24 bg-[#1F2E2B]">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">
							Licensed in Salmon Creek — WA Lic. NORBI**741CS
						</p>
						<h2 className="text-3xl font-black text-white">Get a Free Flooring Estimate in Salmon Creek</h2>
						<p className="text-gray-300 leading-relaxed">
							We measure the space, assess the subfloor, and give you a written price by room —
							LVP, hardwood, tile, or carpet. Same-week estimates for Salmon Creek homeowners.
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-2">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-[#1F2E2B] font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg"
							>
								Request Free Estimate <ArrowRight className="w-5 h-5" />
							</Link>
							<a
								href="tel:3602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg"
							>
								<Phone className="w-5 h-5" /> (360) 216-9920
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
