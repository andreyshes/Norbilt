import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Cost Washougal WA: 2026 Guide | NORBILT",
	description:
		"How much does flooring installation cost in Washougal WA? Real 2026 prices for LVP, hardwood, tile & carpet from a licensed Clark County contractor. Free estimate. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/flooring-installation-cost-washougal-wa",
	},
	openGraph: {
		title: "Flooring Installation Cost in Washougal WA | NORBILT",
		description:
			"LVP, hardwood, tile, and carpet flooring costs in Washougal WA. Real 2026 numbers from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/flooring-installation-cost-washougal-wa",
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
		notes: "Bedrooms, stairs. Budget-friendly — common in Washougal older homes before an LVP upgrade.",
	},
	{
		material: "Luxury Vinyl Plank (LVP)",
		install: "$2.00 – $4.00/sq ft",
		material_cost: "$2.00 – $6.00/sq ft",
		total_1000sqft: "$4,000 – $10,000",
		notes: "Most popular in Washougal. 100% waterproof — critical near the Columbia River where humidity is higher.",
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
		notes: "Authentic wood look with better moisture stability than solid. Popular in Washougal custom homes.",
	},
	{
		material: "Solid Hardwood",
		install: "$4.00 – $7.00/sq ft",
		material_cost: "$5.00 – $14.00/sq ft",
		total_1000sqft: "$9,000 – $21,000",
		notes: "Premium option for higher-end Washougal homes. Cannot install below grade — check crawlspace moisture first.",
	},
	{
		material: "Porcelain / Ceramic Tile",
		install: "$5.00 – $9.00/sq ft",
		material_cost: "$2.00 – $8.00/sq ft",
		total_1000sqft: "$7,000 – $17,000",
		notes: "Best for entries, mudrooms, and kitchens. Ideal in Washougal homes where outdoor access is heavy.",
	},
	{
		material: "Sheet Vinyl",
		install: "$1.00 – $2.50/sq ft",
		material_cost: "$0.75 – $3.00/sq ft",
		total_1000sqft: "$1,750 – $5,500",
		notes: "Budget utility rooms. Limited design options.",
	},
];

const addOnCosts = [
	{ item: "Old flooring removal & disposal (per sq ft)", range: "$0.50 – $2.00" },
	{ item: "Subfloor repair / leveling (per sq ft)", range: "$2.00 – $6.00" },
	{ item: "Moisture barrier / vapor underlayment", range: "$0.50 – $1.50/sq ft" },
	{ item: "Stair nose installation (per tread)", range: "$30 – $80" },
	{ item: "Transition strips (per doorway)", range: "$25 – $60" },
	{ item: "Asbestos testing (homes pre-1985)", range: "$150 – $400" },
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
		area: "Downtown Washougal & Historic Core",
		note: "The oldest housing stock in Washougal — homes from the 1940s through 1970s. Original fir or oak hardwood under carpet is common here. Before replacing, we check whether the original wood is refinishable: if it's 3/4\" solid hardwood in serviceable condition, a refinish at $3–$5/sq ft is significantly more cost-effective than replacement. If the wood is too thin or damaged, LVP is the right move. These homes also tend to have more subfloor variation — unlevel sections and soft spots are more common, so budget for subfloor inspection.",
	},
	{
		area: "Columbia River Waterfront & Adjacent Streets",
		note: "Elevated humidity is a real consideration for homes close to the river and Steigerwald Lake area. LVP with a built-in moisture barrier is the safest choice — 100% waterproof core, no risk of swelling or buckling near water. Solid hardwood is not recommended in these areas. If the home has a concrete slab, LVP is also the correct installation method since hardwood cannot go below grade. We always check for existing moisture issues before quoting — a moisture reading that's too high requires vapor barrier treatment before flooring goes down.",
	},
	{
		area: "East Washougal — Camas-Adjacent Developments (2000s–2010s)",
		note: "This stretch along the Highway 14 corridor toward Camas has a lot of 2000s–2010s production homes where builder-grade laminate or LVP is starting to show its age. These are straightforward replacement projects: pull the old floor, check the subfloor, and install a premium LVP product in a wider plank (5\"–7\" width is popular now vs. the 4\" standard from those builds). Budget $4,000–$10,000 for a full main floor at 900–1,200 sq ft. Subfloor condition on these homes is typically good.",
	},
	{
		area: "Rural & Acreage Properties (North & East of Town)",
		note: "Larger footprints — 2,000–3,500 sq ft is common. Mix of flooring eras from previous owners. Mudrooms and utility entries are high-traffic and best suited for tile or a commercial-grade LVP. Main living areas often have a combination of carpet and laminate that homeowners want to standardize in one project. Larger square footage means higher total cost but often better per-foot pricing as scope efficiency kicks in.",
	},
];

const faqs = [
	{
		q: "How much does flooring installation cost in Washougal WA?",
		a: "Flooring installation in Washougal WA costs $4–$10/sq ft for LVP, $7–$15/sq ft for engineered hardwood, and $7–$17/sq ft for tile. A full main-floor LVP installation in a Washougal home (900–1,200 sq ft) typically runs $4,000–$10,000 installed, including removal of the old flooring. Prices reflect 2026 Clark County market rates from a licensed contractor.",
	},
	{
		q: "Is LVP or hardwood better for Washougal homes?",
		a: "LVP is the better choice for most Washougal homes — especially those near the Columbia River where humidity is elevated, homes on concrete slabs (common in newer builds), or any home where moisture is a concern. LVP is 100% waterproof, installs over slabs without issue, and costs significantly less than hardwood. Engineered hardwood makes sense for main living areas in higher-end Washougal homes where authentic wood aesthetics and potential refinishing are priorities. We assess the subfloor moisture and existing conditions during the estimate and give you a straight recommendation.",
	},
	{
		q: "What is the most durable flooring for Washougal's climate?",
		a: "LVP with a built-in moisture barrier is the most durable choice for Washougal's PNW climate. The Gorge corridor gets more precipitation and humidity variation than much of Clark County, and a waterproof core prevents the swelling and buckling that affects laminate over time. Premium LVP products at the 12mm thickness with an attached underlayment are particularly good in older Washougal homes where the subfloor may have minor irregularities. Porcelain tile is the other highly durable option — ideal for entries, mudrooms, and kitchens.",
	},
	{
		q: "Does old flooring removal add much to the cost in Washougal?",
		a: "Old flooring removal adds $0.50–$2.00/sq ft depending on what's being removed. Carpet removal is on the low end at $0.50–$1.00/sq ft. Glued-down hardwood or tile on concrete is the most labor-intensive at $1.50–$2.00/sq ft. In older Washougal homes, it's not uncommon to find multiple layers of flooring — vinyl over hardwood over the original subfloor — which adds to removal time and cost. We inspect after removal and give you a written scope for any subfloor repairs before continuing.",
	},
	{
		q: "How long does flooring installation take in Washougal?",
		a: "A single room (150–200 sq ft LVP) takes 4–6 hours. A full main floor (900–1,200 sq ft) takes 1–2 days. A whole-house installation (1,800–2,400 sq ft) takes 3–5 days. Tile takes longer — a kitchen or dining tile floor of 300–400 sq ft takes 2–3 days including grout cure time. We provide a day-by-day schedule at the estimate so you can plan around the project.",
	},
];

export default function FlooringCostWashougal() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Flooring Installation Cost in Washougal WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-10-26",
						dateModified: "2026-10-26",
						description:
							"2026 flooring installation costs in Washougal WA — LVP, hardwood, tile, and carpet pricing with neighborhood context for Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/flooring-installation-cost-washougal-wa",
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
								name: "Flooring Installation Cost in Washougal WA",
								item: "https://www.norbilt.com/blog/flooring-installation-cost-washougal-wa",
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
								<MapPin className="w-3 h-3" /> Washougal WA
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Flooring Cost Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Flooring Installation Cost in Washougal WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							2026 prices for LVP, engineered hardwood, tile, and carpet in Washougal —
							from a licensed Clark County contractor who works here every week.
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
							Flooring installation in Washougal WA costs $4–$10/sq ft for LVP and $7–$15/sq ft for engineered hardwood.
						</p>
						<p className="text-gray-600">
							A full main-floor LVP replacement in a Washougal home (900–1,200 sq ft) runs{" "}
							<strong>$4,000–$10,000</strong> installed. Whole-house flooring (1,800–2,400 sq ft) runs{" "}
							<strong>$8,000–$20,000</strong>. All prices include removal of existing flooring.
							Note: LVP with a moisture barrier is recommended near the Columbia River where humidity is elevated.
						</p>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">
							2026 Flooring Cost by Material — Washougal WA
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
							All prices include removal of existing flooring. Subfloor repairs, stairs, transitions, and moisture barriers are
							additional — see below.
						</p>
					</div>
				</section>

				{/* ADD-ON COSTS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Add-On Costs to Budget For</h2>
						<p className="text-gray-600 mb-8">
							These aren&apos;t surprises — we quote them upfront. In Washougal, moisture barrier is worth
							budgeting for, especially in older homes and near-river properties.
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Common Project Totals — Washougal WA</h2>
						<p className="text-gray-600 mb-8">
							All-in estimates for typical flooring projects in Washougal, including removal and basic transitions.
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
						<h2 className="text-2xl font-black text-white mb-8">What We See by Washougal Neighborhood</h2>
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

				{/* MOISTURE NOTE */}
				<section className="py-16 lg:py-20 bg-amber-50 border-y border-amber-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-3">Washougal-Specific Consideration</p>
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-4">Moisture Matters More in Washougal</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							Washougal sits in the Columbia River Gorge corridor — one of the windiest and most humidity-variable
							climates in Clark County. Homes near the river waterfront, Steigerwald Lake area, and lower-elevation
							streets experience more moisture cycling than homes in drier parts of the county. This has a direct impact
							on flooring choice:
						</p>
						<div className="grid sm:grid-cols-3 gap-4">
							{[
								{
									heading: "LVP — Best Choice",
									body: "Waterproof core means humidity changes don't cause swelling or gapping. Premium LVP with built-in vapor barrier handles the Gorge climate well. The right choice for most Washougal homes.",
									color: "border-[#2D5A3D]",
									badge: "text-[#2D5A3D]",
								},
								{
									heading: "Engineered Hardwood — Use With Care",
									body: "Better humidity tolerance than solid hardwood, but still needs a stable climate. Best for main living areas away from exterior doors and crawlspace moisture. Not recommended in homes with known moisture issues.",
									color: "border-amber-400",
									badge: "text-amber-700",
								},
								{
									heading: "Solid Hardwood / Laminate — Risky",
									body: "Solid hardwood can't go below grade and is vulnerable to humidity cycling. Laminate swells when moisture gets under the joints. Not recommended for Washougal homes near the river or with any history of moisture intrusion.",
									color: "border-red-300",
									badge: "text-red-600",
								},
							].map((item, i) => (
								<div key={i} className={`bg-white rounded-xl p-5 border-t-4 ${item.color}`}>
									<p className={`font-black text-sm mb-2 ${item.badge}`}>{item.heading}</p>
									<p className="text-gray-600 text-xs leading-relaxed">{item.body}</p>
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
								{
									item: "Material supply",
									detail: "Flooring product, underlayment, adhesive, nails, or click-lock accessories — all included",
								},
								{
									item: "Old floor removal & disposal",
									detail: "We pull the existing flooring and haul it away as part of the project",
								},
								{
									item: "Basic subfloor prep",
									detail: "Minor leveling compound for small dips — extensive repairs are quoted separately after removal",
								},
								{
									item: "Moisture reading before install",
									detail: "We check subfloor moisture levels in Washougal homes before any flooring goes down",
								},
								{
									item: "Transitions and stair noses",
									detail: "Doorway transitions and stair nose pieces fitted and installed as needed",
								},
								{
									item: "Baseboard removal and reinstall",
									detail: "We pull existing baseboards, install the flooring underneath, and reinstall — no gap at the wall",
								},
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
							<p className="font-black text-[#1F2E2B] mb-1">Ready for a flooring quote in Washougal?</p>
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
								{ label: "Flooring Cost — Ridgefield WA", href: "/blog/flooring-installation-cost-ridgefield-wa" },
								{ label: "Flooring Cost — Camas WA", href: "/blog/flooring-installation-cost-camas-wa" },
								{ label: "Kitchen Remodel Cost — Washougal WA", href: "/blog/kitchen-remodel-cost-washougal-wa" },
								{ label: "Bathroom Remodel Cost — Washougal WA", href: "/blog/bathroom-remodel-cost-washougal-wa" },
								{ label: "Handyman Services — Washougal WA", href: "/blog/handyman-services-washougal-wa" },
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Flooring FAQ — Washougal WA</h2>
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
							Licensed in Washougal — WA Lic. NORBI**741CS
						</p>
						<h2 className="text-3xl font-black text-white">Get a Free Flooring Estimate in Washougal</h2>
						<p className="text-gray-300 leading-relaxed">
							We measure the space, check subfloor moisture, and give you a written price by material and
							room — LVP, hardwood, tile, or carpet. Same-week estimates for Washougal homeowners.
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
