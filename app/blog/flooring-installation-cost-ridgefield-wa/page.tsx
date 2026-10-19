import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Cost Ridgefield WA: 2026 Guide | NORBILT",
	description:
		"How much does flooring installation cost in Ridgefield WA? Real 2026 prices for LVP, hardwood, tile & carpet from a licensed Clark County contractor. Free estimate. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/flooring-installation-cost-ridgefield-wa",
	},
	openGraph: {
		title: "Flooring Installation Cost in Ridgefield WA | NORBILT",
		description:
			"LVP, hardwood, tile, and carpet flooring costs in Ridgefield WA. Real 2026 numbers from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/flooring-installation-cost-ridgefield-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{ material: "Carpet", install: "$1.50 – $3.50/sq ft", material_cost: "$1.00 – $4.00/sq ft", total_1000sqft: "$2,500 – $7,500", notes: "Bedrooms, bonus rooms. Common in Ridgefield new builds where bedrooms were carpeted at construction." },
	{ material: "Luxury Vinyl Plank (LVP)", install: "$2.00 – $4.00/sq ft", material_cost: "$2.00 – $6.00/sq ft", total_1000sqft: "$4,000 – $10,000", notes: "Most popular upgrade in Ridgefield. Waterproof, click-lock, installs over slabs in newer builds." },
	{ material: "Laminate", install: "$1.75 – $3.50/sq ft", material_cost: "$1.50 – $4.50/sq ft", total_1000sqft: "$3,250 – $8,000", notes: "Wood look at lower cost. Not waterproof — avoid in bathrooms and crawlspace homes with moisture issues." },
	{ material: "Engineered Hardwood", install: "$3.00 – $5.00/sq ft", material_cost: "$4.00 – $10.00/sq ft", total_1000sqft: "$7,000 – $15,000", notes: "Popular in Ridgefield custom homes. Authentic wood look, better moisture tolerance than solid hardwood." },
	{ material: "Solid Hardwood", install: "$4.00 – $7.00/sq ft", material_cost: "$5.00 – $14.00/sq ft", total_1000sqft: "$9,000 – $21,000", notes: "Higher-end Ridgefield homes and rural properties. Cannot install below grade. Refinishable for decades." },
	{ material: "Porcelain / Ceramic Tile", install: "$5.00 – $9.00/sq ft", material_cost: "$2.00 – $8.00/sq ft", total_1000sqft: "$7,000 – $17,000", notes: "Mudrooms, entries, bathrooms — common in Ridgefield homes on rural acreage with outdoor access." },
	{ material: "Sheet Vinyl", install: "$1.00 – $2.50/sq ft", material_cost: "$0.75 – $3.00/sq ft", total_1000sqft: "$1,750 – $5,500", notes: "Budget utility rooms and rentals. Limited design options." },
];

const addOnCosts = [
	{ item: "Old flooring removal & disposal (per sq ft)", range: "$0.50 – $2.00" },
	{ item: "Subfloor repair / leveling (per sq ft)", range: "$2.00 – $6.00" },
	{ item: "Stair nose installation (per tread)", range: "$30 – $80" },
	{ item: "Transition strips (per doorway)", range: "$25 – $60" },
	{ item: "Asbestos testing (older homes pre-1985)", range: "$150 – $400" },
	{ item: "Radiant heat underlayment add-on", range: "$1.50 – $3.00/sq ft" },
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
		area: "New Subdivisions (Hillhurst, The Lakes, Fargher Lake Corridor)",
		note: "Most of Ridgefield's growth over the last decade. Builder-grade carpet in bedrooms and builder LVP or laminate on the main floor — both are typically due for an upgrade within 5–8 years of construction. LVP replacement is the most common project we do in these neighborhoods: homeowners pull the builder floor and install a premium waterproof LVP in a wider plank and more modern colorway. Budget $4,000–$10,000 for a full main-floor replacement at 900–1,200 sq ft.",
	},
	{
		area: "Ridgefield Town Center & Historic Neighborhood",
		note: "Older housing stock from the 1940s–1980s. These homes often have original hardwood under carpet — a hardwood refinish (rather than replacement) is worth considering before installing new flooring. Expect original fir or oak at 2.25\" width, which can be sanded and stained for $3–$5/sq ft. If the wood is too thin or damaged, engineered hardwood or LVP are the right replacements. Subfloor condition is a bigger variable in older homes.",
	},
	{
		area: "Rural Acreage Properties (North & East Ridgefield)",
		note: "Larger homes on larger lots. These properties often have a mix of flooring from different eras — tile in the entry, carpet in bedrooms, laminate in the kitchen from a previous owner update. Standardizing the flooring throughout is a high-ROI project before a sale. Square footage is larger (2,200–3,500 sq ft is common), so budget accordingly. Mudrooms and utility entries on these properties often need tile for durability.",
	},
	{
		area: "Ridgefield South & I-5 Corridor Developments",
		note: "Mid-2000s and 2010s homes in a mix of production builder and semi-custom. Flooring is typically builder LVP or laminate on the main floor — dated colorways (hand-scraped dark brown, gray wash) that homeowners want to refresh. Subfloor is typically in good condition on these homes. LVP replacement is straightforward and fast.",
	},
];

const faqs = [
	{
		q: "How much does flooring installation cost in Ridgefield WA?",
		a: "Flooring installation in Ridgefield WA costs $4–$10/sq ft for LVP (the most popular choice in new construction and updated homes), $7–$15/sq ft for engineered hardwood, and $7–$17/sq ft for tile. A full main-floor LVP installation in a Ridgefield home (900–1,200 sq ft) typically runs $4,000–$10,000 installed including removal of the old flooring. Prices reflect 2026 Clark County market rates from a licensed contractor.",
	},
	{
		q: "What flooring is best for new construction homes in Ridgefield WA?",
		a: "LVP (luxury vinyl plank) is the most popular upgrade in Ridgefield new builds. Builder-grade LVP and laminate installed at construction typically lacks the thickness and water resistance of premium residential LVP. An upgrade to a 6–12mm premium LVP product costs $4–$10/sq ft installed and is significantly more durable, better-looking, and more consistent underfoot. Engineered hardwood is the next tier up for main living areas — it looks like real wood, handles Clark County humidity better than solid hardwood, and adds more resale value.",
	},
	{
		q: "Does old flooring removal add much to the cost?",
		a: "Old flooring removal adds $0.50–$2.00/sq ft depending on the type of flooring being removed. Carpet removal is on the low end ($0.50–$1.00/sq ft). Glued-down hardwood or tile on a concrete slab is the most labor-intensive — add $1.50–$2.00/sq ft. Subfloor repair after removal (soft spots, unlevel sections) adds $2–$6/sq ft for areas that need work. We inspect the subfloor after removal and give you a written scope for any repairs before continuing.",
	},
	{
		q: "Can hardwood floors be refinished in Ridgefield homes?",
		a: "Yes — if the home has original fir or oak hardwood under carpet (common in older Ridgefield homes near town center), refinishing is often the best and most cost-effective option. Hardwood refinishing costs $3–$5/sq ft, which is significantly less than replacement. The floor needs to have enough thickness for sanding — usually 3/4\" solid hardwood can be refinished 3–5 times. We check the floors during the walkthrough and tell you whether refinishing or replacement is the better call.",
	},
	{
		q: "How long does flooring installation take in Ridgefield?",
		a: "A single room (150–200 sq ft LVP) takes 4–6 hours. A full main floor (900–1,200 sq ft) takes 1–2 days. A whole-house installation (1,800–2,400 sq ft) takes 3–5 days. Tile takes longer due to setting time — a kitchen/dining tile floor of 300–400 sq ft takes 2–3 days including grout cure time. We provide a day-by-day schedule at the estimate so you can plan around the project.",
	},
];

export default function FlooringCostRidgefield() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Flooring Installation Cost in Ridgefield WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-10-19",
						dateModified: "2026-10-19",
						description:
							"2026 flooring installation costs in Ridgefield WA — LVP, hardwood, tile, and carpet pricing with neighborhood context for Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/flooring-installation-cost-ridgefield-wa",
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
							{ "@type": "ListItem", position: 3, name: "Flooring Installation Cost in Ridgefield WA", item: "https://www.norbilt.com/blog/flooring-installation-cost-ridgefield-wa" },
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
								<MapPin className="w-3 h-3" /> Ridgefield WA
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Flooring Cost Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Flooring Installation Cost in Ridgefield WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							2026 prices for LVP, engineered hardwood, tile, and carpet —
							from a licensed contractor working in Ridgefield and Clark County every week.
						</p>
						<div className="flex flex-wrap gap-4 pt-2">
							<Link href="/estimate" className="inline-flex items-center gap-2 bg-[#FFB800] text-[#1F2E2B] font-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors">
								Get Free Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<a href="tel:3602169920" className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/5 transition-colors">
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
							Flooring installation in Ridgefield WA costs $4–$10/sq ft for LVP and $7–$15/sq ft for engineered hardwood.
						</p>
						<p className="text-gray-600">
							A full main-floor LVP replacement in a Ridgefield home (900–1,200 sq ft) runs <strong>$4,000–$10,000</strong> installed.
							Whole-house flooring replacement (1,800–2,400 sq ft) runs <strong>$8,000–$20,000</strong>.
							All prices include labor, materials, and removal of existing flooring.
						</p>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">2026 Flooring Cost by Material — Ridgefield WA</h2>
						<p className="text-gray-600 mb-8">Installed cost including labor, materials, and basic subfloor prep. Prices reflect current Clark County market rates.</p>
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
						<p className="text-xs text-gray-400 mt-3 italic">All prices include removal of existing flooring. Subfloor repairs, stairs, and transitions are additional — see below.</p>
					</div>
				</section>

				{/* ADD-ON COSTS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Add-On Costs to Budget For</h2>
						<p className="text-gray-600 mb-8">These aren&apos;t surprises — we quote them upfront. But they&apos;re not in the per-sq-ft number above.</p>
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Common Project Totals — Ridgefield WA</h2>
						<p className="text-gray-600 mb-8">All-in estimates for typical flooring projects in Ridgefield, including removal and basic transitions.</p>
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
						<h2 className="text-2xl font-black text-white mb-8">What We See by Ridgefield Neighborhood</h2>
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
								{ item: "Material supply", detail: "Flooring product, underlayment, adhesive, nails, or click-lock accessories — all included" },
								{ item: "Old floor removal & disposal", detail: "We pull the existing flooring and haul it away as part of the project" },
								{ item: "Basic subfloor prep", detail: "Sweeping, minor leveling compound for small dips — extensive subfloor repair is quoted separately" },
								{ item: "Transitions and stair noses", detail: "Doorway transitions and stair nose pieces fitted and installed as needed" },
								{ item: "Baseboard removal and reinstall", detail: "We pull existing baseboards, install the flooring underneath, and reinstall — no gap at the wall edge" },
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

				{/* LVP vs HARDWOOD */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">LVP vs. Engineered Hardwood in Ridgefield</h2>
						<p className="text-gray-600 mb-8">The two most popular choices for Ridgefield homeowners — here&apos;s how to think about which one makes sense.</p>
						<div className="grid sm:grid-cols-2 gap-6">
							<div className="bg-white border-t-4 border-[#2D5A3D] rounded-2xl p-6">
								<p className="font-black text-[#1F2E2B] text-lg mb-1">LVP (Luxury Vinyl Plank)</p>
								<p className="text-[#2D5A3D] font-bold text-sm mb-4">$4,000 – $10,000 per 1,000 sq ft</p>
								<div className="space-y-2">
									{[
										"100% waterproof — best choice for kitchens, laundry, and anywhere with moisture risk",
										"Works directly over concrete slabs (common in Ridgefield new builds)",
										"Lower cost than hardwood — better ROI for most resale situations",
										"Wide variety of plank widths and finishes available locally",
										"Cannot be refinished if scratched — full replacement is the only fix",
									].map((pt, i) => (
										<p key={i} className="text-sm text-gray-600 flex gap-2">
											<span className="text-[#2D5A3D] font-black shrink-0">·</span> {pt}
										</p>
									))}
								</div>
							</div>
							<div className="bg-white border-t-4 border-[#FFB800] rounded-2xl p-6">
								<p className="font-black text-[#1F2E2B] text-lg mb-1">Engineered Hardwood</p>
								<p className="text-[#FFB800] font-bold text-sm mb-4">$7,000 – $15,000 per 1,000 sq ft</p>
								<div className="space-y-2">
									{[
										"Real wood veneer — looks and feels like solid hardwood at lower cost and better moisture stability",
										"Can be lightly sanded and refinished 1–2 times over its lifespan",
										"Better perceived value at resale — buyers notice the difference",
										"Best in main living areas and bedrooms where moisture isn't a risk",
										"More expensive than LVP — makes sense when long-term ownership or premium finishes are the goal",
									].map((pt, i) => (
										<p key={i} className="text-sm text-gray-600 flex gap-2">
											<span className="text-[#FFB800] font-black shrink-0">·</span> {pt}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SERVICE CALLOUT */}
				<div className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
					<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<div>
							<p className="font-black text-[#1F2E2B] mb-1">Ready for a flooring quote in Ridgefield?</p>
							<p className="text-gray-600 text-sm">View our full flooring service — materials we work with, process, and warranty for Clark County homeowners.</p>
						</div>
						<Link href="/services/flooring" className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1F2E2B] transition-colors whitespace-nowrap shrink-0">
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
								{ label: "Flooring Cost — Battle Ground WA", href: "/blog/flooring-installation-cost-battle-ground-wa" },
								{ label: "Flooring Cost — Camas WA", href: "/blog/flooring-installation-cost-camas-wa" },
								{ label: "Kitchen Remodel Cost — Ridgefield WA", href: "/blog/kitchen-remodel-cost-ridgefield-wa" },
								{ label: "Bathroom Remodel Cost — Ridgefield WA", href: "/blog/bathroom-remodel-cost-ridgefield-wa" },
								{ label: "Home Remodeling — Ridgefield WA", href: "/blog/home-remodeling-ridgefield-wa" },
							].map((link) => (
								<Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D5A3D] bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-[#2D5A3D]/40 transition-colors">
									{link.label} <ArrowRight className="w-3 h-3" />
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Flooring FAQ — Ridgefield WA</h2>
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
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">Licensed in Ridgefield — WA Lic. NORBI**741CS</p>
						<h2 className="text-3xl font-black text-white">Get a Free Flooring Estimate in Ridgefield</h2>
						<p className="text-gray-300 leading-relaxed">
							We measure the space, assess the subfloor, and give you a written price per room —
							LVP, hardwood, tile, or carpet. Same-week estimates for Ridgefield homeowners.
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-2">
							<Link href="/estimate" className="inline-flex items-center gap-2 bg-[#FFB800] text-[#1F2E2B] font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg">
								Request Free Estimate <ArrowRight className="w-5 h-5" />
							</Link>
							<a href="tel:3602169920" className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg">
								<Phone className="w-5 h-5" /> (360) 216-9920
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
