import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Finish Carpentry Cost Battle Ground WA | Baseboards, Trim & Crown Molding | NORBILT",
	description:
		"How much does finish carpentry cost in Battle Ground WA? 2026 prices for baseboard installation, crown molding, door casing, and wainscoting — from a licensed Clark County contractor. Free estimates. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/finish-carpentry-cost-battle-ground-wa",
	},
	openGraph: {
		title: "Finish Carpentry Cost in Battle Ground WA | NORBILT",
		description:
			"2026 finish carpentry prices in Battle Ground WA — baseboards, crown molding, door casing, and wainscoting. Licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/finish-carpentry-cost-battle-ground-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{
		item: "Baseboard installation — paint-grade MDF",
		unit: "per linear ft",
		range: "$2.50 – $4.50",
		notes: "Most common in Battle Ground — new builds and 1990s–2000s homes",
	},
	{
		item: "Baseboard installation — solid wood (pine/poplar)",
		unit: "per linear ft",
		range: "$4.00 – $7.00",
		notes: "More durable, takes stain — common in older homes replacing original trim",
	},
	{
		item: "Crown molding — standard profile",
		unit: "per linear ft",
		range: "$5.00 – $9.00",
		notes: "Single-piece profile, painted finish",
	},
	{
		item: "Crown molding — built-up (multi-piece)",
		unit: "per linear ft",
		range: "$9.00 – $16.00",
		notes: "Layered profiles for formal living rooms or primary bedrooms",
	},
	{
		item: "Door casing (one opening, both sides)",
		unit: "per door",
		range: "$150 – $320",
		notes: "Interior doors — supply and install, paint-grade",
	},
	{
		item: "Window casing (one window)",
		unit: "per window",
		range: "$120 – $280",
		notes: "Apron and stool or picture-frame style",
	},
	{
		item: "Wainscoting — MDF/paint-grade panels",
		unit: "per sq ft",
		range: "$6.00 – $11.00",
		notes: "Board and batten or raised panel — popular in Battle Ground dining rooms",
	},
	{
		item: "Chair rail only",
		unit: "per linear ft",
		range: "$3.00 – $5.50",
		notes: "Often added with wainscoting or standalone in hallways",
	},
	{
		item: "Stair railing — repair or replace",
		unit: "per section",
		range: "$300 – $800",
		notes: "Typical straight run — curved or custom costs more",
	},
];

const projectTotals = [
	{
		project: "Single bedroom baseboards",
		scope: "Approx. 60–80 linear ft, paint-grade MDF",
		range: "$175 – $380",
	},
	{
		project: "Full house baseboards (3 bed / 2 bath)",
		scope: "Approx. 350–500 linear ft, paint-grade MDF",
		range: "$900 – $2,300",
	},
	{
		project: "Living room crown molding",
		scope: "Approx. 60–80 linear ft, standard single-piece profile",
		range: "$320 – $760",
	},
	{
		project: "Whole-house crown molding (main floor)",
		scope: "Approx. 200–350 linear ft",
		range: "$1,050 – $3,250",
	},
	{
		project: "Dining room wainscoting",
		scope: "Approx. 80–120 sq ft, MDF board and batten",
		range: "$525 – $1,350",
	},
	{
		project: "All interior door casings (8 doors)",
		scope: "Both sides, paint-grade, supply and install",
		range: "$1,200 – $2,600",
	},
	{
		project: "Full remodel trim package",
		scope: "Baseboards, crown, door & window casings — whole home",
		range: "$3,500 – $9,000+",
	},
];

const neighborhoods = [
	{
		area: "Battle Ground Town Center & Historic Areas",
		note: "Older homes from the 1940s–1970s with original fir or pine trim. Replacement matching is an option, but most homeowners choose to upgrade to a cleaner contemporary profile. Baseboard heights tend to run 3–3.5\" on these homes — upsizing to a 4.5\" or 5.25\" profile makes a visible difference. Budget for additional prep work on walls that weren't built to modern tolerances.",
	},
	{
		area: "1990s–2000s Subdivisions (NW Battle Ground)",
		note: "The most common housing stock we work in. Builder-grade 2.25\" colonial baseboards that are brittle, chipped at corners, and don't photograph well. A full baseboard replacement to a taller colonial or craftsman profile is a high-ROI project here — material cost is low and the visual impact is significant.",
	},
	{
		area: "Newer Custom Homes (2010s–Present)",
		note: "Higher-end homes with taller ceilings that benefit from built-up crown molding and wider baseboards (5.25\"–7.25\"). Wainscoting in dining rooms and primary suites is a common add-on during construction completion or before the first sale. Finish level expectations are higher — we use a nail gun with hand-set finishing and caulk before painting.",
	},
	{
		area: "Rural Properties & Acreage Homes",
		note: "Older farmhouses and rural builds on larger lots often have a mix of trim styles accumulated over decades. These are good candidates for full trim standardization — removing mismatched profiles and installing consistent baseboards and casings throughout. Expect some surprises behind old trim (moisture, pest damage) on homes over 40 years old.",
	},
];

const faqs = [
	{
		q: "How much does baseboard installation cost in Battle Ground WA?",
		a: "Baseboard installation in Battle Ground WA costs $2.50–$4.50 per linear foot for paint-grade MDF and $4.00–$7.00 per linear foot for solid wood. A typical 3-bedroom home has 350–500 linear feet of baseboard, putting a full-house replacement at $900–$2,300 installed. Prices include supply, installation, and caulking. Paint is separate unless quoted together.",
	},
	{
		q: "How much does crown molding cost in Battle Ground WA?",
		a: "Crown molding installation in Battle Ground WA costs $5.00–$9.00 per linear foot for a standard single-piece profile and $9.00–$16.00 per linear foot for built-up multi-piece profiles. A living room with 60–80 linear feet of crown runs $320–$760 installed. Rooms with vaulted ceilings or complex angles cost more due to the additional cutting and fitting time.",
	},
	{
		q: "Is finish carpentry worth it before selling a home in Battle Ground?",
		a: "Yes — especially for 1990s–2000s builder homes with thin colonial baseboards and hollow-core door casings. Replacing trim is one of the highest-ROI cosmetic investments because the material cost is low and the visual impact in listing photos is immediate. A full baseboard replacement on a 1,800 sq ft home typically costs $1,200–$2,000 and is frequently cited by real estate agents as one of the most cost-effective pre-sale upgrades.",
	},
	{
		q: "How long does finish carpentry take in Battle Ground?",
		a: "A single bedroom or bathroom takes 2–4 hours for baseboards. A single room with crown molding adds 3–5 hours depending on ceiling complexity. A full house baseboard replacement typically takes 2–4 days. A complete trim package (baseboards, crown, door casings) for a whole home takes 4–8 days. We provide a timeline at the estimate so you can plan around the project.",
	},
	{
		q: "Do I need to remove existing trim before NORBILT installs new trim?",
		a: "No — we handle removal and disposal as part of the project. We score the caulk line, pull the existing trim, check the wall for damage or out-of-square conditions, and install the new profile. Disposal of old trim is included unless the scope is unusually large. If you want to reuse existing trim in a different area of the house, let us know at the estimate.",
	},
];

export default function FinishCarpentryBattleGround() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Finish Carpentry Cost in Battle Ground WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-10-17",
						dateModified: "2026-10-17",
						description:
							"2026 finish carpentry costs in Battle Ground WA — baseboard installation, crown molding, door casing, and wainscoting, with neighborhood context for Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/finish-carpentry-cost-battle-ground-wa",
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
							{ "@type": "ListItem", position: 3, name: "Finish Carpentry Cost in Battle Ground WA", item: "https://www.norbilt.com/blog/finish-carpentry-cost-battle-ground-wa" },
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
								<MapPin className="w-3 h-3" /> Battle Ground WA
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Finish Carpentry Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Finish Carpentry Cost in Battle Ground WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							2026 prices for baseboard installation, crown molding, door casing, and wainscoting —
							from a licensed contractor working in Battle Ground every week.
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
							Finish carpentry in Battle Ground WA costs $2.50–$16.00 per linear foot depending on profile and material.
						</p>
						<p className="text-gray-600">
							A full baseboard replacement for a 3-bedroom home runs <strong>$900–$2,300</strong> installed.
							Crown molding for a living room runs <strong>$320–$760</strong>. A full trim package —
							baseboards, crown, and door casings throughout — runs <strong>$3,500–$9,000+</strong>.
						</p>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">2026 Finish Carpentry Costs — Battle Ground WA</h2>
						<p className="text-gray-600 mb-8">All prices include labor and materials at current Clark County rates.</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Item</th>
										<th className="text-left px-4 py-3 font-bold">Unit</th>
										<th className="text-left px-4 py-3 font-bold">Cost Range</th>
										<th className="text-left px-4 py-3 font-bold hidden lg:table-cell">Notes</th>
									</tr>
								</thead>
								<tbody>
									{costRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 font-semibold text-[#1F2E2B] align-top">{row.item}</td>
											<td className="px-4 py-3 text-gray-500 text-xs align-top whitespace-nowrap">{row.unit}</td>
											<td className="px-4 py-3 font-bold text-[#2D5A3D] whitespace-nowrap align-top">{row.range}</td>
											<td className="px-4 py-3 text-gray-500 text-xs align-top hidden lg:table-cell">{row.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* PROJECT TOTALS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Common Project Totals</h2>
						<p className="text-gray-600 mb-8">All-in estimates for typical Battle Ground finish carpentry projects.</p>
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
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">What We See by Battle Ground Neighborhood</h2>
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

				{/* WHAT AFFECTS COST */}
				<section className="py-16 lg:py-20 bg-[#1F2E2B]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-white mb-8">What Drives Finish Carpentry Cost in Battle Ground</h2>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{
									title: "Profile Height and Complexity",
									body: "A 2.25\" colonial base costs half as much as a 5.25\" craftsman base — not because the linear footage changes, but because taller profiles require more material and more precise mitering at corners. Built-up profiles (layering a base cap on top of a base board) multiply the cost because each piece must be cut and fitted independently.",
								},
								{
									title: "Ceiling Height",
									body: "Standard 8-foot ceilings are straightforward. 9-foot and 10-foot ceilings require scaffolding or taller ladders, and crown molding cuts become more complex as the room gets larger. Vaulted ceilings require custom angle cuts that add significant time per corner.",
								},
								{
									title: "Wall Condition",
									body: "Out-of-square walls (common in 1990s and older Battle Ground homes) require scribing the trim to fit the wall rather than relying on a simple miter cut. This adds 20–40% to the time on older homes. New construction with straight, plumb walls is the fastest and cheapest to trim.",
								},
								{
									title: "Removal of Existing Trim",
									body: "If existing trim is being replaced, demo and disposal is included in our quote. If existing trim was painted with thick latex over the years (as is common in 1990s homes), removal without damaging the drywall face takes more time.",
								},
								{
									title: "Priming and Paint",
									body: "Most finish carpentry quotes cover installation and caulking only — paint is separate unless specified. If you want us to prime and paint as part of the project, add $1–$2 per linear foot for paint-grade work. Pre-primed MDF is standard; unprimed solid wood requires an extra prime coat before topcoat.",
								},
								{
									title: "Scope Efficiency",
									body: "A whole-house trim project is more cost-effective per linear foot than a single room because setup, material delivery, and shop time are amortized across more work. If you're thinking about trim in one room, it often makes sense to quote the whole house — the per-foot price usually drops meaningfully at larger scope.",
								},
							].map((item, i) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
									<p className="font-black text-[#FFB800] mb-2 text-sm">{item.title}</p>
									<p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* WHAT'S INCLUDED */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-4">What&apos;s Included in a NORBILT Finish Carpentry Quote</h2>
						<p className="text-gray-600 mb-8 leading-relaxed">Every finish carpentry project includes:</p>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ item: "Material supply", detail: "Trim profile, nails, construction adhesive, caulk — all included unless owner-supplied is requested" },
								{ item: "Removal of existing trim", detail: "Demo and disposal of old baseboards or casings as part of the scope" },
								{ item: "Precision miter cuts", detail: "Inside corners coped, outside corners mitered — no biscuit joints or butt joints at corners" },
								{ item: "Nail set and fill", detail: "All nail holes filled before handoff — ready for paint" },
								{ item: "Caulk lines", detail: "Top edge of baseboard caulked to wall — the step most DIYers skip that separates a professional finish from a good-enough one" },
								{ item: "Final cleanup", detail: "Sawdust, trim scraps, and packaging removed at end of project" },
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
							<p className="font-black text-[#1F2E2B] mb-1">Need a finish carpentry quote in Battle Ground?</p>
							<p className="text-gray-600 text-sm">View our full finish carpentry service — scope, materials, process, and warranty for Clark County homeowners.</p>
						</div>
						<Link href="/services/finish-carpentry" className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1F2E2B] transition-colors whitespace-nowrap shrink-0">
							Finish Carpentry Service <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>

				{/* RELATED READING */}
				<section className="py-12 bg-gray-50 border-y border-gray-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Finish Carpentry Cost — Vancouver WA", href: "/blog/finish-carpentry-cost-vancouver-wa" },
								{ label: "Finish Carpentry Cost — Camas WA", href: "/blog/finish-carpentry-cost-camas-wa" },
								{ label: "Kitchen Remodel Cost — Battle Ground", href: "/blog/kitchen-remodel-cost-battle-ground-wa" },
								{ label: "Flooring Installation — Battle Ground", href: "/blog/flooring-installation-cost-battle-ground-wa" },
								{ label: "Home Remodeling — Battle Ground", href: "/blog/home-remodeling-battle-ground-wa" },
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Finish Carpentry FAQ — Battle Ground WA</h2>
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
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">Licensed in Battle Ground — WA Lic. NORBI**741CS</p>
						<h2 className="text-3xl font-black text-white">Get a Free Finish Carpentry Estimate in Battle Ground</h2>
						<p className="text-gray-300 leading-relaxed">
							We measure the space, count the linear footage, and give you a flat written price —
							baseboards, crown molding, casings, or the whole house. Same-week estimates for Battle Ground homeowners.
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
