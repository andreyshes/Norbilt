import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost Washougal WA | Licensed Contractor & 2026 Prices | NORBILT",
	description:
		"How much does a bathroom remodel cost in Washougal WA? Real 2026 prices from a $900 cosmetic refresh to a $32,000 primary suite — from a licensed Clark County contractor. Free estimate. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/bathroom-remodel-cost-washougal-wa",
	},
	openGraph: {
		title: "Bathroom Remodel Cost in Washougal WA | NORBILT",
		description:
			"Real 2026 price ranges for bathroom remodels in Washougal WA. Licensed contractor serving east Clark County.",
		url: "https://www.norbilt.com/blog/bathroom-remodel-cost-washougal-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{
		scope: "Cosmetic Refresh",
		desc: "New fixtures, faucet, toilet, mirror, recaulk, paint. Same tile and layout.",
		range: "$900 – $2,500",
		timeline: "1–2 days",
		best: "Good bones, tight budget, prepping to sell",
	},
	{
		scope: "Mid-Range Remodel",
		desc: "New vanity, tile floor, shower surround, all fixtures replaced. Layout stays.",
		range: "$3,500 – $8,000",
		timeline: "3–6 days",
		best: "Dated finishes, worn vanity, 15+ year old fixtures",
	},
	{
		scope: "Full Gut Remodel",
		desc: "Everything to studs — new cement board, tile, plumbing fixtures, vanity, exhaust.",
		range: "$9,000 – $18,000",
		timeline: "1–2 weeks",
		best: "Water damage, mold, full overhaul, same layout",
	},
	{
		scope: "Tub-to-Shower Conversion",
		desc: "Remove tub, install custom walk-in shower — prefab or full custom tile.",
		range: "$1,800 – $8,500",
		timeline: "2–5 days",
		best: "Aging in place, space maximizing, modern look",
	},
	{
		scope: "Primary Suite Remodel",
		desc: "Custom tile, freestanding tub, heated floors, high-end fixtures, layout reconfiguration.",
		range: "$18,000 – $32,000+",
		timeline: "2–4 weeks",
		best: "River-view homes, long-term primary residence, max ROI",
	},
];

const componentCosts = [
	{ item: "Toilet (supply & install)", range: "$300 – $900" },
	{ item: "Vanity — stock (supply & install)", range: "$400 – $1,200" },
	{ item: "Vanity — semi-custom (supply & install)", range: "$900 – $3,500" },
	{ item: "Shower tile (per sq ft, installed)", range: "$12 – $35" },
	{ item: "Floor tile (per sq ft, installed)", range: "$10 – $28" },
	{ item: "Shower pan / base (install only)", range: "$300 – $700" },
	{ item: "Custom tile shower (full)", range: "$3,500 – $9,000" },
	{ item: "Tub-to-shower conversion (full)", range: "$1,800 – $8,500" },
	{ item: "Exhaust fan replacement", range: "$150 – $400" },
	{ item: "Heated floor (electric mat, per sq ft)", range: "$8 – $18 installed" },
];

const neighborhoods = [
	{
		area: "Downtown / Historic Washougal",
		note: "Older bungalows and 1950s–1970s homes. Original tub-in-alcove bathrooms with cast iron tubs, worn tile, and small footprints. Full gut remodels are the most impactful here — the existing finishes are too dated to refresh. Projects typically run $9,000–$18,000.",
	},
	{
		area: "Cape Horn / Steigerwald Corridor",
		note: "1980s–1990s builder homes with standard alcove tubs and oak vanities. Mid-range remodels dominate — new vanity, tile floor, updated fixtures and lighting. Most projects run $3,500–$8,000. Tub-to-shower conversions are popular with homeowners 50+.",
	},
	{
		area: "Columbia River View Homes",
		note: "Higher-end primary residences and extensively renovated properties. Owners invest in heated floors, freestanding tubs, custom tile showers, and high-end fixtures. Primary suite remodels run $18,000–$32,000+.",
	},
	{
		area: "Newer Subdivisions (Canyon Creek, Hathaway)",
		note: "2000s–2010s builder bathrooms. Usually structurally sound with dated builder fixtures. Cosmetic refreshes and mid-range remodels ($1,500–$6,000) have the best ROI before selling. Full gut not usually necessary.",
	},
];

const drivers = [
	{
		title: "Moisture Is the Hidden Cost in Older Washougal Homes",
		body: "Washougal gets significant rainfall and many older homes in the downtown corridor have had slow leaks behind old grout lines or around tub surrounds for years without visible signs. When we open walls during a gut remodel, we find mold or water-damaged cement board in a significant percentage of older bathrooms. Budget $500–$2,000 for remediation if your bathroom hasn't been touched in 20+ years — it's not a risk you want to skip.",
	},
	{
		title: "Tile Choice Drives Cost More Than Room Size",
		body: "A 50 sq ft bathroom with large-format porcelain tile and a custom niche costs more than a 75 sq ft bathroom with standard 12×12 ceramic. The tile decision — material, format, pattern, and grout type — is where most of the budget variance lives. We help you choose based on your goals and budget during the estimate, not the showroom.",
	},
	{
		title: "River View Homes Warrant Premium Investment",
		body: "Washougal has a tier of homes with Columbia River sightlines that attract buyers from Portland and Camas who expect quality finishes. For these homes, a mid-range bathroom remodel often undershoots what the property supports. A primary suite with heated floors, a freestanding tub, and custom tile has real appraisal and resale impact in this market segment.",
	},
	{
		title: "Fewer Licensed Contractors Serve East Clark County",
		body: "Most licensed remodeling contractors are based in Vancouver or Camas and treat Washougal as an extended-range area with a travel surcharge. NORBILT (WA Lic. NORBI**741CS) actively works in Washougal — no travel surcharge, direct scheduling, and someone who knows the local housing stock.",
	},
];

const faqs = [
	{
		q: "How much does a bathroom remodel cost in Washougal WA?",
		a: "In Washougal WA, a bathroom remodel costs between $900 for a cosmetic refresh and $32,000+ for a full primary suite remodel. A mid-range remodel — new vanity, tile floor, updated fixtures — runs $3,500–$8,000. A full gut with new tile, plumbing fixtures, vanity, and exhaust runs $9,000–$18,000. Prices reflect 2026 Clark County labor and material rates.",
	},
	{
		q: "Is it worth remodeling a bathroom in Washougal before selling?",
		a: "Yes — especially for 1980s–1990s Cape Horn homes with builder bathrooms. A targeted mid-range remodel ($3,500–$7,000) improves buyer first impressions and days-on-market without over-investing. For river-view homes, a primary suite remodel recovers a higher percentage of its cost because the buyer pool expects elevated finishes.",
	},
	{
		q: "How long does a bathroom remodel take in Washougal?",
		a: "A cosmetic refresh takes 1–2 days. A mid-range remodel takes 3–6 days. A full gut remodel takes 1–2 weeks. A primary suite remodel takes 2–4 weeks. Tile work needs curing time — a full gut with custom tile typically involves a return visit for grouting and sealing. We confirm exact timelines during the free estimate.",
	},
	{
		q: "Do I need a permit for a bathroom remodel in Washougal?",
		a: "Cosmetic work — new fixtures, vanity replacement, tile in the same location — typically does not require a permit. Moving plumbing (relocating the toilet or shower drain), adding electrical circuits, or structural changes do require a permit. NORBILT (WA Lic. NORBI**741CS) handles all permitting and inspections for any permitted scope.",
	},
	{
		q: "What should I expect during a bathroom remodel estimate in Washougal?",
		a: "We walk the bathroom, assess the existing tile, plumbing, exhaust, and subfloor. We look for signs of moisture damage behind the surround and check whether the existing vanity plumbing is ADA-accessible if that matters. The estimate walkthrough takes 20–30 minutes and you get a written scope and price — not a range, a number — before we start.",
	},
];

export default function BathroomRemodelCostWashougal() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Bathroom Remodel Cost in Washougal WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-09-28",
						dateModified: "2026-09-28",
						description:
							"Real 2026 bathroom remodel costs in Washougal WA — cosmetic refresh through full primary suite remodel, with local context for east Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/bathroom-remodel-cost-washougal-wa",
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
							{ "@type": "ListItem", position: 3, name: "Bathroom Remodel Cost in Washougal WA", item: "https://www.norbilt.com/blog/bathroom-remodel-cost-washougal-wa" },
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
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Bathroom Remodel Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Bathroom Remodel Cost in Washougal WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							Real 2026 price ranges — from a $900 cosmetic refresh to a $32,000 primary suite remodel —
							from a licensed contractor working in east Clark County every week.
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
							A bathroom remodel in Washougal WA costs $900 – $32,000+ depending on scope.
						</p>
						<p className="text-gray-600">
							The most common project — new vanity, tile floor, updated fixtures, no layout change — runs{" "}
							<strong>$3,500–$8,000</strong> and takes 3–6 days. A full gut remodel costs $9,000–$18,000.
							A primary suite with custom tile and a freestanding tub runs $18,000–$32,000+.
						</p>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">2026 Bathroom Remodel Costs — Washougal WA</h2>
						<p className="text-gray-600 mb-8">All prices include labor and materials at current Clark County rates.</p>
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
					</div>
				</section>

				{/* COMPONENT COSTS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Component Cost Breakdown</h2>
						<p className="text-gray-600 mb-8">Individual line items for planning and scoping your project.</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Component</th>
										<th className="text-left px-4 py-3 font-bold">Typical Cost</th>
									</tr>
								</thead>
								<tbody>
									{componentCosts.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 text-[#1F2E2B]">{row.item}</td>
											<td className="px-4 py-3 font-semibold text-[#2D5A3D]">{row.range}</td>
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">What We See by Washougal Neighborhood</h2>
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
						<h2 className="text-2xl font-black text-white mb-8">What Drives Bathroom Remodel Cost in Washougal</h2>
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

				{/* WHAT'S INCLUDED */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-4">What a Full Gut Remodel Includes</h2>
						<p className="text-gray-600 mb-8 leading-relaxed">A full gut bathroom remodel ($9,000–$18,000) covers everything from subfloor to new fixtures. Typical scope:</p>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ item: "Demolition & disposal", detail: "Remove existing tile, drywall, vanity, fixtures, and flooring" },
								{ item: "Moisture inspection & remediation", detail: "Check subfloor and framing for water damage — repair or replace as needed" },
								{ item: "Cement board installation", detail: "Proper tile substrate in shower and wet areas" },
								{ item: "Tile installation", detail: "Floor and shower surround — full tile labor and materials" },
								{ item: "Plumbing fixtures", detail: "New toilet, vanity faucet, shower valve and trim" },
								{ item: "Vanity & mirror", detail: "Supply and install new vanity, countertop, and mirror" },
								{ item: "Exhaust fan", detail: "Replace or install code-compliant exhaust" },
								{ item: "Paint & trim", detail: "Wall prep, paint, baseboard transitions" },
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

				{/* RELATED LINKS */}
				<section className="py-12 bg-gray-50 border-y border-gray-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Kitchen Remodel Cost — Washougal", href: "/blog/kitchen-remodel-cost-washougal-wa" },
								{ label: "Bathroom Remodel Cost — Clark County", href: "/blog/bathroom-remodel-cost-clark-county-wa" },
								{ label: "Bathroom Remodel Service", href: "/services/bathroom-remodel" },
								{ label: "Home Remodeling — Washougal", href: "/blog/home-remodeling-washougal-wa" },
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Bathroom Remodel FAQ — Washougal WA</h2>
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
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">Licensed in Washougal — WA Lic. NORBI**741CS</p>
						<h2 className="text-3xl font-black text-white">Get a Free Bathroom Estimate in Washougal</h2>
						<p className="text-gray-300 leading-relaxed">
							We walk the space, check for moisture issues, and give you a written scope and price —
							not a range. Most walkthroughs take 20–30 minutes. Same-week availability for Washougal homeowners.
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
