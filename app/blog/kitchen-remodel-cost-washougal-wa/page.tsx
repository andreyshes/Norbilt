import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Cost Washougal WA | Licensed Contractor & 2026 Prices | NORBILT",
	description:
		"How much does a kitchen remodel cost in Washougal WA? Real 2026 prices from a $1,500 cosmetic refresh to a $80,000 full gut — from a licensed Clark County contractor. Free estimate. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/kitchen-remodel-cost-washougal-wa",
	},
	openGraph: {
		title: "Kitchen Remodel Cost in Washougal WA | NORBILT",
		description:
			"Real 2026 price ranges for kitchen remodels in Washougal WA — cosmetic refresh through full gut. From a licensed contractor serving east Clark County.",
		url: "https://www.norbilt.com/blog/kitchen-remodel-cost-washougal-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{
		scope: "Hardware & Paint Refresh",
		desc: "New cabinet hardware, repaint cabinets, updated light fixture. Same layout, same boxes.",
		range: "$1,500 – $4,000",
		timeline: "2–3 days",
		best: "Original builder finishes, prepping to sell, tight budget",
	},
	{
		scope: "Countertop Replacement",
		desc: "Laminate out, new quartz or butcher block with undermount sink and faucet.",
		range: "$3,000 – $7,500",
		timeline: "2–4 days",
		best: "Tired counters, otherwise solid kitchen",
	},
	{
		scope: "Backsplash Installation",
		desc: "Full tile backsplash — subway, mosaic, or large-format. Labor and materials.",
		range: "$600 – $2,200",
		timeline: "1–2 days",
		best: "Painted drywall backsplash or builder peel-and-stick",
	},
	{
		scope: "Cabinet Refacing",
		desc: "New doors, drawer fronts, and hardware. Existing cabinet boxes stay.",
		range: "$4,000 – $10,000",
		timeline: "3–5 days",
		best: "Solid cabinet boxes, just dated doors and finish",
	},
	{
		scope: "Mid-Range Kitchen Update",
		desc: "New semi-custom cabinets, countertops, backsplash, sink, and faucet. Layout unchanged.",
		range: "$18,000 – $35,000",
		timeline: "2–4 weeks",
		best: "Full overhaul without moving walls — most Washougal kitchens",
	},
	{
		scope: "Full Gut Remodel (same layout)",
		desc: "Everything new to the studs — cabinets, counters, flooring, appliances rough-in, electrical at existing boxes.",
		range: "$30,000 – $55,000",
		timeline: "4–6 weeks",
		best: "Water damage, full overhaul, older home with original everything",
	},
	{
		scope: "Full Gut with Layout Change",
		desc: "Wall removal, new plumbing and electrical rough-in, island addition, expanded footprint.",
		range: "$50,000 – $85,000+",
		timeline: "6–12 weeks",
		best: "River-view homes, opening the kitchen to the main living area",
	},
];

const cabinetOptions = [
	{
		option: "Paint & Hardware Only",
		cost: "$800 – $2,500",
		lifespan: "5–10 years",
		notes: "Best when cabinet boxes and doors are structurally solid. Most budget-friendly option.",
	},
	{
		option: "Reface (new doors + hardware)",
		cost: "$4,000 – $10,000",
		lifespan: "10–15 years",
		notes: "Dramatically changes the look. Only works if existing boxes are square and damage-free.",
	},
	{
		option: "Replace with stock cabinets",
		cost: "$8,000 – $18,000",
		lifespan: "15–20 years",
		notes: "Full replacement at budget-friendly price. Limited sizes and finishes.",
	},
	{
		option: "Replace with semi-custom",
		cost: "$15,000 – $30,000",
		lifespan: "20–25 years",
		notes: "Custom sizes, more finish options. The sweet spot for most Washougal mid-range remodels.",
	},
	{
		option: "Replace with custom cabinets",
		cost: "$30,000 – $60,000",
		lifespan: "30+ years",
		notes: "Full design flexibility. Common in Columbia River waterfront and upper-tier Washougal homes.",
	},
];

const neighborhoods = [
	{
		area: "Downtown / Historic Washougal",
		note: "1950s–1970s bungalows and craftsman homes with original kitchen layouts — often small galleys with limited counter space. Full gut remodels are most impactful here, often opening walls to connect the kitchen to the dining or living area. Projects commonly run $35,000–$65,000.",
	},
	{
		area: "Cape Horn / Steigerwald Area",
		note: "1980s–1990s subdivision homes with builder-grade oak cabinets. These are the kitchens most ready for a mid-range update — new semi-custom cabinets, quartz counters, tile backsplash, updated lighting. Most projects run $18,000–$35,000.",
	},
	{
		area: "Columbia River Corridor (waterfront and view homes)",
		note: "Higher-end builds and extensively renovated homes. Custom cabinetry, stone counters, and premium appliances are the norm. Owners invest in the $45,000–$85,000+ range. View kitchens benefit from opening the back wall or adding a pass-through.",
	},
	{
		area: "Newer Subdivisions (Hathaway, Canyon Creek area)",
		note: "2000s–2010s builder-grade kitchens. Cabinets are usually still structurally sound — refacing or a targeted mid-range update is the highest-ROI move before the home either sells or gets a full renovation down the line.",
	},
];

const drivers = [
	{
		title: "Washougal's Older Stock Needs Structural Attention",
		body: "Downtown Washougal and the cape horn corridor have a significant number of 1950s–1980s homes where the kitchen has never been touched. These jobs more often require subfloor leveling, plumbing rough-in updates, and electrical panel work before the finish work begins. Budget 15–20% more than what the finish scope suggests.",
	},
	{
		title: "River Views Change the ROI Calculation",
		body: "Homes with Columbia River views or Gorge sightlines have a built-in premium market. Opening a wall between the kitchen and main living space — even at $10,000–$20,000 in structural and finish cost — can meaningfully improve sightlines and add real value. We assess these on a case-by-case basis during the estimate walkthrough.",
	},
	{
		title: "Cabinet Choice Is 40% of the Budget",
		body: "Whether you reface, go stock, semi-custom, or full custom, cabinets drive more of the final number than any other single line item. On a $28,000 kitchen, cabinets and labor to install them typically represent $10,000–$14,000. Getting this choice right — matching the cabinet quality to the home's tier and your timeline — is the most important decision we help you make.",
	},
	{
		title: "Fewer Licensed Contractors in East Clark County",
		body: "Most licensed contractors are concentrated in Vancouver and Camas. NORBILT is one of the few licensed remodeling contractors actively working in Washougal — which means faster scheduling, direct communication, and no subcontracting the work out to strangers.",
	},
	{
		title: "Permits Are Required for Layout Changes",
		body: "Cosmetic work — counters, backsplash, hardware, lighting at existing boxes — doesn't require a permit. Moving plumbing, adding a gas line, removing a wall, or relocating electrical does. NORBILT (WA Lic. NORBI**741CS) handles all permits and inspections.",
	},
];

const faqs = [
	{
		q: "How much does a kitchen remodel cost in Washougal WA?",
		a: "In Washougal WA, a kitchen remodel costs between $1,500 for a cosmetic hardware-and-paint refresh and $85,000+ for a full gut with layout changes. A mid-range remodel — new semi-custom cabinets, quartz counters, backsplash, and updated lighting — runs $18,000–$35,000. Prices reflect 2026 Clark County labor and material rates.",
	},
	{
		q: "Is it worth remodeling a kitchen in Washougal before selling?",
		a: "Yes — especially for 1980s–1990s homes in the Cape Horn corridor. A targeted mid-range update ($18,000–$30,000) typically recovers 70–80% of cost at sale and significantly improves days-on-market. For homes with river views, opening walls between the kitchen and living area has outsized impact on buyer perception.",
	},
	{
		q: "Should I reface or replace my cabinets in Washougal?",
		a: "Reface if your cabinet boxes are square, solid, and damage-free — it dramatically refreshes the look at 40–60% of full replacement cost. Replace if the boxes are warped, water-damaged, or the layout itself is the problem. We assess cabinet condition and make an honest recommendation during the free walkthrough.",
	},
	{
		q: "Do I need a permit for a kitchen remodel in Washougal WA?",
		a: "Cosmetic work — counters, backsplash, hardware, light fixtures at existing boxes — typically does not require a permit. Plumbing relocation, wall removal, gas line work, or electrical panel changes do. NORBILT (WA Lic. NORBI**741CS) handles all permitting and inspections for permitted scope.",
	},
	{
		q: "How long does a kitchen remodel take in Washougal?",
		a: "A cosmetic refresh takes 2–3 days. A mid-range remodel takes 2–4 weeks. A full gut remodel takes 4–6 weeks. Full gut with layout changes takes 6–12 weeks. Exact timelines depend on cabinet lead times and permit processing — we confirm these during the free estimate.",
	},
];

export default function KitchenRemodelCostWashougal() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Kitchen Remodel Cost in Washougal WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-09-28",
						dateModified: "2026-09-28",
						description:
							"Real 2026 kitchen remodel costs in Washougal WA — cosmetic refresh through full gut with layout change, with local context for east Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/kitchen-remodel-cost-washougal-wa",
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
								name: "Kitchen Remodel Cost in Washougal WA",
								item: "https://www.norbilt.com/blog/kitchen-remodel-cost-washougal-wa",
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
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Kitchen Remodel Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Kitchen Remodel Cost in Washougal WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							Real 2026 price ranges — from a $1,500 cosmetic refresh to an $85,000 full gut with layout change
							— from a licensed contractor working in east Clark County every week.
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
							A kitchen remodel in Washougal WA costs $1,500 – $85,000+ depending on scope.
						</p>
						<p className="text-gray-600">
							The most common project — new semi-custom cabinets, quartz counters, backsplash, and updated
							lighting without moving walls — runs <strong>$18,000–$35,000</strong> and takes 2–4 weeks.
							Layout changes (wall removal, island addition) add $15,000–$30,000 in structural and rough-in cost.
						</p>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">
							2026 Kitchen Remodel Costs — Washougal WA
						</h2>
						<p className="text-gray-600 mb-8">
							All prices include labor and materials at current Clark County rates.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Scope</th>
										<th className="text-left px-4 py-3 font-bold">What&apos;s Included</th>
										<th className="text-left px-4 py-3 font-bold">Cost Range</th>
										<th className="text-left px-4 py-3 font-bold hidden sm:table-cell">Timeline</th>
										<th className="text-left px-4 py-3 font-bold hidden lg:table-cell">Best For</th>
									</tr>
								</thead>
								<tbody>
									{costRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 font-bold text-[#1F2E2B] align-top">{row.scope}</td>
											<td className="px-4 py-3 text-gray-600 text-sm align-top">{row.desc}</td>
											<td className="px-4 py-3 font-semibold text-[#2D5A3D] whitespace-nowrap align-top">{row.range}</td>
											<td className="px-4 py-3 text-gray-500 text-sm whitespace-nowrap align-top hidden sm:table-cell">{row.timeline}</td>
											<td className="px-4 py-3 text-gray-500 text-xs align-top hidden lg:table-cell">{row.best}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-xs text-gray-400 mt-3">
							* Appliances not included unless specified. Prices reflect 2026 labor and material costs in Clark County WA.
						</p>
					</div>
				</section>

				{/* CABINET OPTIONS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">
							Cabinet Options: Paint, Reface, or Replace?
						</h2>
						<p className="text-gray-600 mb-8">
							Cabinets are 35–45% of a kitchen remodel budget. Choosing the right strategy depends on the
							condition of your existing boxes, your timeline, and how long you plan to stay in the home.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Option</th>
										<th className="text-left px-4 py-3 font-bold">Cost</th>
										<th className="text-left px-4 py-3 font-bold hidden sm:table-cell">Lifespan</th>
										<th className="text-left px-4 py-3 font-bold">Notes</th>
									</tr>
								</thead>
								<tbody>
									{cabinetOptions.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 font-bold text-[#1F2E2B] align-top">{row.option}</td>
											<td className="px-4 py-3 font-semibold text-[#2D5A3D] whitespace-nowrap align-top">{row.cost}</td>
											<td className="px-4 py-3 text-gray-500 whitespace-nowrap align-top hidden sm:table-cell">{row.lifespan}</td>
											<td className="px-4 py-3 text-gray-600 text-xs align-top">{row.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* BY NEIGHBORHOOD */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">
							What We See by Washougal Neighborhood
						</h2>
						<p className="text-gray-600 mb-8">
							Washougal has more housing diversity than most people expect — from 1950s river cottages to
							newer subdivisions to Columbia River view homes. The right kitchen scope varies significantly
							by area.
						</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{neighborhoods.map((n, i) => (
								<div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
									<p className="font-black text-[#1F2E2B] mb-2">{n.area}</p>
									<p className="text-gray-600 text-sm leading-relaxed">{n.note}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* COST DRIVERS */}
				<section className="py-16 lg:py-20 bg-[#1F2E2B]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-white mb-8">
							What Drives Kitchen Remodel Cost in Washougal
						</h2>
						<div className="space-y-4">
							{drivers.map((d, i) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
									<h3 className="font-black text-[#FFB800] mb-2">{d.title}</h3>
									<p className="text-gray-300 leading-relaxed text-sm">{d.body}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* WHAT'S INCLUDED IN A FULL REMODEL */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-4">
							What a Full Kitchen Remodel Includes in Washougal
						</h2>
						<p className="text-gray-600 mb-8 leading-relaxed">
							A full gut remodel ($30,000–$55,000) covers everything from subfloor to cabinet tops.
							Here&apos;s the typical scope breakdown for a Washougal mid-range to full remodel:
						</p>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ item: "Demolition & disposal", detail: "Remove existing cabinets, counters, backsplash, and flooring" },
								{ item: "Subfloor inspection & repair", detail: "Level, repair, or replace subfloor sections as needed" },
								{ item: "Cabinet installation", detail: "Semi-custom or custom cabinets — upper, lower, and island if applicable" },
								{ item: "Countertop fabrication & install", detail: "Quartz, granite, or butcher block — templated and installed" },
								{ item: "Backsplash tile", detail: "Full tile backsplash — materials and installation labor" },
								{ item: "Sink & faucet", detail: "Supply, install, and connect undermount sink and faucet" },
								{ item: "Lighting", detail: "Under-cabinet lighting, pendant rough-ins, recessed cans" },
								{ item: "Paint & trim", detail: "Wall prep, paint, and baseboard transitions" },
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
						<div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
							<p className="font-bold text-amber-900 mb-1">Appliances Are Priced Separately</p>
							<p className="text-amber-800 text-sm leading-relaxed">
								We rough in and connect appliances but don&apos;t supply them unless specifically requested.
								Budget $3,000–$8,000 for a mid-range appliance package (range, dishwasher, refrigerator, microwave).
								We coordinate delivery and installation timing with your appliance supplier.
							</p>
						</div>
					</div>
				</section>

				{/* RELATED LINKS */}
				<section className="py-12 bg-gray-50 border-y border-gray-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Home Remodeling — Washougal", href: "/blog/home-remodeling-washougal-wa" },
								{ label: "Kitchen Remodel Cost — Vancouver WA", href: "/blog/kitchen-remodel-cost-vancouver-wa" },
								{ label: "Kitchen Remodel Cost — Clark County", href: "/blog/kitchen-remodel-cost-clark-county-wa" },
								{ label: "Bathroom Remodel Cost — Clark County", href: "/blog/bathroom-remodel-cost-clark-county-wa" },
								{ label: "Kitchen Remodel Service", href: "/services/kitchen-remodel" },
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">
							Kitchen Remodel FAQ — Washougal WA
						</h2>
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
						<h2 className="text-3xl font-black text-white">
							Get a Free Kitchen Estimate in Washougal
						</h2>
						<p className="text-gray-300 leading-relaxed">
							We walk the space, assess cabinet condition, and give you a written scope and estimate —
							no pressure, no upselling. Most walkthroughs take 30–45 minutes. Same-week availability
							for Washougal homeowners.
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
