import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Case Study — Vancouver WA | What to Expect | NORBILT",
	description:
		"A full kitchen remodel in Vancouver WA from estimate to final walkthrough. What we found, what changed, what it cost, and what the homeowners said. Real project documented by NORBILT.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/kitchen-remodel-case-study-vancouver-wa",
	},
	openGraph: {
		title: "Kitchen Remodel Case Study — Vancouver WA | NORBILT",
		description:
			"What a real kitchen remodel looks like from estimate to final walkthrough — documented by the contractor who did the work.",
		url: "https://www.norbilt.com/blog/kitchen-remodel-case-study-vancouver-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const timeline = [
	{ phase: "Week 0", label: "Estimate & Scope", desc: "On-site walkthrough, measurements, scope document, signed contract." },
	{ phase: "Week 0–1", label: "Material Sourcing", desc: "Cabinets ordered (3-week lead), countertop template scheduled, appliances ordered." },
	{ phase: "Week 3", label: "Demo Day", desc: "Existing cabinets, countertops, flooring, and drywall damaged by old backsplash removed. Subfloor inspected." },
	{ phase: "Week 3", label: "Rough-In Changes", desc: "Island plumbing rough-in, additional outlet circuit, exhaust duct rerouted." },
	{ phase: "Week 4", label: "Cabinet Install", desc: "Upper and lower cabinets set, shimmed, and secured. Island framed and set." },
	{ phase: "Week 4", label: "Countertop Template", desc: "Quartz countertop templated at cabinet completion. 5-day fab turnaround." },
	{ phase: "Week 5", label: "Countertop Install", desc: "Quartz installed. Plumber sets sink and faucet same day." },
	{ phase: "Week 5", label: "Tile & Flooring", desc: "LVP flooring installed throughout. Subway tile backsplash set and grouted." },
	{ phase: "Week 5–6", label: "Appliances & Trim", desc: "Appliances installed. Cabinet hardware, light fixtures, outlet covers, final paint touch-up." },
	{ phase: "Week 6", label: "Final Walkthrough", desc: "Full punch list review with homeowners. Open items addressed same week." },
];

const whatChanged = [
	{
		before: "Original 1970s oak cabinets — doors misaligned, drawer slides failing",
		after: "Full shaker-style cabinet replacement — 42\" uppers, soft-close hardware throughout",
	},
	{
		before: "Builder laminate countertops with visible staining near sink",
		after: "3cm Calacatta-look quartz with waterfall edge on the island",
	},
	{
		before: "Old drop-in stainless sink, mismatched hardware",
		after: "Undermount composite granite sink, pull-out spray faucet, garbage disposal",
	},
	{
		before: "1970s soffit above upper cabinets — hard to clean, trapped light",
		after: "Soffit removed, ceiling-height 42\" uppers with crown moulding",
	},
	{
		before: "Worn linoleum flooring with lifting seams near the dishwasher",
		after: "Wide-plank LVP — waterproof, continuous through to dining area",
	},
	{
		before: "No island — single L-shape with limited counter space",
		after: "42\" × 84\" island with pendant lighting, seating on one side",
	},
	{
		before: "4\" ceramic tile backsplash — cracked grout lines, discolored",
		after: "3×12 subway tile in running bond from countertop to upper cabinets",
	},
	{
		before: "Under-cabinet fluorescent strip — uneven light, visible yellowing",
		after: "LED under-cabinet puck lighting, dimmer-controlled",
	},
];

const surprises = [
	{
		what: "Subfloor Dip Near the Dishwasher",
		found: "When the linoleum was pulled up, there was a soft spot under the dishwasher — a slow leak from a previous dishwasher drain hose had never been fully dried out. The OSB subfloor was compressed and starting to delaminate in a 12\" × 18\" section.",
		how: "We replaced the affected section of subfloor and treated the framing with a mold inhibitor. The repair added $380 to the project — we documented it with photos before closing it up, and the homeowners approved the add-on same day.",
	},
	{
		what: "Exhaust Fan Vented Into the Attic (Not Outside)",
		found: "The existing range hood duct terminated in the attic insulation — not uncommon in 1970s builds. We discovered it when pulling the old hood. Venting into the attic deposits grease over time and can cause moisture problems in the insulation.",
		how: "We rerouted the duct through the exterior soffit, which added a half-day to the schedule. This is a code-required fix for any kitchen that touches the exhaust system — it was included in the scope as a contingency, so there was no surprise cost.",
	},
	{
		what: "Island Plumbing Routing",
		found: "Adding an island prep sink required running a drain through the slab — the house was on a concrete slab foundation, not a crawlspace. The homeowners knew this going in; the scope included a contingency allowance for the core drill.",
		how: "Straightforward concrete core drill — no unexpected obstacles. Came in within the contingency allowance.",
	},
];

const faqs = [
	{
		q: "How long does a full kitchen remodel take in Vancouver WA?",
		a: "A full kitchen remodel in Vancouver WA typically takes 4–7 weeks from demo to final walkthrough. The longest wait is usually cabinet fabrication (2–4 weeks) and countertop fabrication after templating (5–10 days). Structural or plumbing changes add time. Plan for 3–4 weeks of limited kitchen access during the active work phase.",
	},
	{
		q: "How much does a full kitchen remodel cost in Vancouver WA?",
		a: "A full kitchen remodel in Vancouver WA costs $18,000–$45,000+ depending on cabinet quality, countertop material, appliances, and whether layout changes are involved. A mid-range remodel — new cabinets, quartz countertops, standard appliances, tile backsplash, and LVP flooring — runs $22,000–$32,000. See our kitchen remodel cost guide for Vancouver WA for a full price breakdown.",
	},
	{
		q: "What surprises should I expect during a kitchen remodel?",
		a: "The most common surprises in older Vancouver WA homes are subfloor moisture damage (especially near the sink or dishwasher), improperly vented range hoods, outdated electrical (no GFCI near the sink, undersized circuits for modern appliances), and asbestos floor tile under linoleum in pre-1980 homes. A good contractor identifies these during the estimate, documents them during demo, and prices contingencies upfront rather than billing surprises mid-project.",
	},
	{
		q: "Do I need a permit for a kitchen remodel in Vancouver WA?",
		a: "You need a permit for any kitchen remodel that moves plumbing, adds or modifies electrical circuits, or makes structural changes (removing a wall, relocating a window). Cabinet replacements, countertop swaps, and appliance upgrades without any of those changes typically don't require a permit. NORBILT (WA Lic. NORBI**741CS) handles all permitting for any permitted scope — fees are included in the bid.",
	},
	{
		q: "Should I stay home during a kitchen remodel?",
		a: "It's your call. Most homeowners with children or pets prefer to be home on demo day and available during the first week. After that, with a locked door code and a daily check-in message, many homeowners go about normal routines. We set expectations at the start: what days we're on site, when we're not, and how to reach us for anything urgent.",
	},
];

export default function KitchenRemodelCaseStudy() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Kitchen Remodel Case Study — Vancouver WA: What to Expect",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-09-28",
						dateModified: "2026-09-28",
						description:
							"A full kitchen remodel in Vancouver WA documented from estimate to final walkthrough — what we found, what changed, what it cost, and what the homeowners said.",
						mainEntityOfPage: "https://www.norbilt.com/blog/kitchen-remodel-case-study-vancouver-wa",
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
							{ "@type": "ListItem", position: 3, name: "Kitchen Remodel Case Study — Vancouver WA", item: "https://www.norbilt.com/blog/kitchen-remodel-case-study-vancouver-wa" },
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
								<Clock className="w-3 h-3" /> Case Study
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Vancouver WA · Full Kitchen Remodel</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Kitchen Remodel in Vancouver WA:<br className="hidden sm:block" /> What to Expect Start to Finish
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							A 1970s ranch kitchen — original cabinets, failing laminate countertops, no island —
							documented from the first walkthrough to the final punch list. Six weeks, $28,400,
							and three surprises along the way.
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

				{/* PROJECT SNAPSHOT */}
				<section className="py-12 bg-[#FFB800]/5 border-b border-[#FFB800]/20">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#FFB800] mb-4">Project Snapshot</p>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
							{[
								{ label: "Location", value: "East Vancouver WA" },
								{ label: "Home Type", value: "1970s Ranch, Slab Foundation" },
								{ label: "Kitchen Size", value: "Approx. 220 sq ft" },
								{ label: "Total Cost", value: "$28,400" },
							].map((item, i) => (
								<div key={i}>
									<p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
									<p className="font-black text-[#1F2E2B]">{item.value}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* THE STARTING POINT */}
				<section className="py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
					<h2 className="text-2xl font-black text-[#1F2E2B] mb-4">Where We Started</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						The homeowners had bought the house five years earlier and lived with the original kitchen
						while paying down other priorities. By the time they called us, the cabinet doors had been
						adjusted three times and still weren&apos;t closing cleanly, the drawer slides were failing
						on two cabinets, and the laminate countertop near the sink had been stained through to the
						substrate.
					</p>
					<p className="text-gray-600 leading-relaxed mb-4">
						They had a clear goal: full replacement, not a face-lift. New cabinets, new countertops,
						a quartz island they could sit at, and LVP flooring that matched the rest of the house.
						They&apos;d done the research, had a $30,000 budget, and were ready to move.
					</p>
					<p className="text-gray-600 leading-relaxed">
						The scope we agreed on: cabinet tearout and replacement, countertops, sink and faucet,
						island (including a prep sink with plumbing rough-in), backsplash tile, LVP flooring,
						LED under-cabinet lighting, and exhaust rerouting. All permitted. Six-week schedule.
					</p>
				</section>

				{/* WHAT CHANGED */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Before and After: What Changed</h2>
						<div className="space-y-3">
							{whatChanged.map((item, i) => (
								<div key={i} className="grid sm:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden">
									<div className="bg-red-50 px-5 py-4">
										<p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">Before</p>
										<p className="text-gray-700 text-sm">{item.before}</p>
									</div>
									<div className="bg-[#2D5A3D]/5 px-5 py-4">
										<p className="text-xs font-bold uppercase tracking-widest text-[#2D5A3D] mb-1">After</p>
										<p className="text-gray-700 text-sm">{item.after}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* TIMELINE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Week-by-Week Timeline</h2>
						<div className="space-y-3">
							{timeline.map((item, i) => (
								<div key={i} className="flex gap-5 border border-gray-200 rounded-xl px-5 py-4">
									<div className="w-20 flex-shrink-0">
										<p className="text-xs font-bold uppercase tracking-widest text-[#FFB800]">{item.phase}</p>
									</div>
									<div>
										<p className="font-bold text-[#1F2E2B] text-sm mb-1">{item.label}</p>
										<p className="text-gray-500 text-sm">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* SURPRISES */}
				<section className="py-16 lg:py-20 bg-[#1F2E2B]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-white mb-2">Three Things We Found Along the Way</h2>
						<p className="text-gray-400 mb-8">Every older home has history in the walls. Here&apos;s what we found in this one and how we handled it.</p>
						<div className="space-y-6">
							{surprises.map((s, i) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
									<p className="font-black text-[#FFB800] text-lg mb-3">{s.what}</p>
									<div className="space-y-2">
										<div>
											<p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">What We Found</p>
											<p className="text-gray-300 text-sm leading-relaxed">{s.found}</p>
										</div>
										<div>
											<p className="text-xs font-bold uppercase tracking-widest text-[#2D5A3D] mb-1 mt-3">How We Handled It</p>
											<p className="text-gray-300 text-sm leading-relaxed">{s.how}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* COST BREAKDOWN */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Where the $28,400 Went</h2>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Line Item</th>
										<th className="text-left px-4 py-3 font-bold">Cost</th>
									</tr>
								</thead>
								<tbody>
									{[
										{ item: "Cabinet supply & install (42\" uppers, lower run, island base)", cost: "$9,200" },
										{ item: "Countertops — 3cm quartz, waterfall island edge (supply & install)", cost: "$5,800" },
										{ item: "LVP flooring (supply & install, 240 sq ft)", cost: "$3,100" },
										{ item: "Island construction (framing, plumbing rough-in, tile)", cost: "$2,400" },
										{ item: "Subway tile backsplash (supply & install)", cost: "$1,800" },
										{ item: "Sink, faucet, disposal (supply & install, both sinks)", cost: "$1,600" },
										{ item: "LED under-cabinet lighting (supply & install)", cost: "$900" },
										{ item: "Demo & disposal", cost: "$800" },
										{ item: "Exhaust duct reroute to exterior", cost: "$600" },
										{ item: "Electrical (new island circuit, GFCI outlets)", cost: "$700" },
										{ item: "Permits (city, electrical)", cost: "$420" },
										{ item: "Subfloor repair (contingency, actual)", cost: "$380" },
										{ item: "Paint, trim, hardware", cost: "$700" },
										{ item: "Total", cost: "$28,400" },
									].map((row, i) => (
										<tr key={i} className={row.item === "Total" ? "bg-[#2D5A3D]/5 font-bold border-t-2 border-[#2D5A3D]/20" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className={`px-4 py-3 ${row.item === "Total" ? "font-black text-[#1F2E2B]" : "text-gray-600"}`}>{row.item}</td>
											<td className={`px-4 py-3 ${row.item === "Total" ? "font-black text-[#2D5A3D]" : "font-semibold text-[#2D5A3D]"}`}>{row.cost}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-gray-400 text-xs mt-3">Appliances (range, dishwasher, refrigerator) were owner-supplied and not included in the above. This project came in $1,600 under the $30,000 budget.</p>
					</div>
				</section>

				{/* WHAT THEY SAID */}
				<section className="py-16 lg:py-20 bg-[#FFB800]/5 border-y border-[#FFB800]/20">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-6">What the Homeowners Said</h2>
						<blockquote className="border-l-4 border-[#FFB800] pl-6">
							<p className="text-lg text-gray-700 leading-relaxed italic mb-4">
								&ldquo;We&apos;d gotten quotes from two other contractors before NORBILT. The other two gave us a number with no real detail — we didn&apos;t know what was in and what wasn&apos;t. NORBILT walked us through a full written scope before we signed anything. We knew exactly what we were getting.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed italic mb-4">
								The subfloor issue they found under the dishwasher — that could have been a nightmare if we&apos;d discovered it five years later. They found it, showed us photos, gave us a price to fix it the same day, and patched it before the cabinets went in. That&apos;s the kind of thing that turns a $380 repair into a $6,000 problem if you ignore it.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed italic">
								Six weeks felt long when we were living without a kitchen. But they hit every milestone they said they would. The final walkthrough was actually a punch list — a couple of hardware pieces and a grout line to touch up. All done within three days. We&apos;d use them again without hesitation.&rdquo;
							</p>
							<p className="text-sm font-bold text-gray-500 mt-4">— East Vancouver Homeowners, 2026</p>
						</blockquote>
					</div>
				</section>

				{/* WHAT TO KNOW BEFORE YOU START */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-6">What to Know Before You Start Your Kitchen Remodel</h2>
						<div className="space-y-4">
							{[
								{ title: "Cabinets drive the schedule", body: "Cabinet fabrication is the longest lead item — typically 2–4 weeks for semi-custom. The rest of the project is planned around cabinet delivery. Appliances have similar lead times and should be ordered before demo day so they don't become the bottleneck at installation." },
								{ title: "Budget a contingency for older homes", body: "Any Vancouver WA home built before 1990 has a realistic chance of subfloor moisture damage near the sink, improperly vented exhaust, or outdated electrical near the countertops. We price contingencies explicitly in the scope — not as TBD — so you know your worst-case number before we start." },
								{ title: "Countertop template happens after cabinets are set", body: "Quartz and stone countertops are templated after cabinets are installed, not before. This adds 5–10 days to the timeline but ensures a precise fit. Plan for a period of a few days without a countertop — it's normal and expected." },
								{ title: "You'll be without a kitchen for 2–4 weeks of active work", body: "Plan for limited kitchen access. Most homeowners set up a microwave and mini-fridge in another room, lean on a grill, and treat it as an opportunity to try takeout spots they've been meaning to visit." },
								{ title: "Don't sequence appliances last", body: "Appliance installation at the end of a project can expose delays in your supply chain that you can't control. Order appliances when you sign the contract — not when the cabinets are in." },
							].map((item, i) => (
								<div key={i} className="flex gap-4 border border-gray-200 rounded-2xl p-5">
									<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] flex-shrink-0 mt-0.5" />
									<div>
										<p className="font-bold text-[#1F2E2B] mb-1">{item.title}</p>
										<p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
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
							<p className="font-black text-[#1F2E2B] mb-1">Ready to start your kitchen remodel in Clark County?</p>
							<p className="text-gray-600 text-sm">View our full kitchen remodel service — scope, process, warranty, and what to expect in Vancouver and Clark County.</p>
						</div>
						<Link href="/services/kitchen-remodel" className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1F2E2B] transition-colors whitespace-nowrap shrink-0">
							Kitchen Remodel Service <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>

				{/* RELATED LINKS */}
				<section className="py-12 bg-gray-50 border-y border-gray-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Kitchen Remodel Cost — Vancouver WA", href: "/blog/kitchen-remodel-cost-clark-county-wa" },
								{ label: "How to Hire a Licensed Contractor — Clark County", href: "/blog/how-to-hire-licensed-remodeling-contractor-clark-county-wa" },
								{ label: "Bathroom Remodel — What to Expect (Camas)", href: "/blog/camas-bathroom-remodel-what-to-expect" },
								{ label: "Kitchen Remodel Service", href: "/services/kitchen-remodel" },
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Kitchen Remodel FAQ — Vancouver WA</h2>
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
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">Licensed · WA Lic. NORBI**741CS · Clark County</p>
						<h2 className="text-3xl font-black text-white">Get a Free Kitchen Remodel Estimate</h2>
						<p className="text-gray-300 leading-relaxed">
							We walk the kitchen, take measurements, identify any visible risk areas (subfloor, exhaust, electrical),
							and give you a written scope and price before anything starts.
							Same-week availability for Vancouver and Clark County homeowners.
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
