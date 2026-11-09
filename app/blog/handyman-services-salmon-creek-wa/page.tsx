import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Handyman Services in Salmon Creek WA: 2026 Pricing & What to Expect | Norbilt",
	description:
		"Looking for a handyman in Salmon Creek WA? Real 2026 pricing for home repairs, drywall, fixtures, doors, and punch lists. Licensed, 5-star rated, free same-week estimates.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/handyman-services-salmon-creek-wa",
	},
	openGraph: {
		title: "Handyman Services in Salmon Creek WA: 2026 Pricing & What to Expect | Norbilt",
		description:
			"Real 2026 handyman pricing in Salmon Creek WA. Licensed contractor for drywall, fixtures, doors, mounting, punch lists & more. Free same-week estimates.",
		url: "https://www.norbilt.com/blog/handyman-services-salmon-creek-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const jobCosts = [
	{ task: "TV Mounting (existing wiring)", low: 150, high: 300 },
	{ task: "Floating Shelf Install", low: 100, high: 250 },
	{ task: "Furniture Assembly", low: 75, high: 200 },
	{ task: "Ceiling Fan Install (existing wiring)", low: 150, high: 300 },
	{ task: "Light Fixture Swap", low: 150, high: 350 },
	{ task: "Smart Lock / Deadbolt Install", low: 150, high: 300 },
	{ task: "Door Realignment / Rehang", low: 150, high: 300 },
	{ task: "Weatherstripping Replacement", low: 100, high: 250 },
	{ task: "Caulking (tub, shower, sink)", low: 150, high: 350 },
	{ task: "Drywall Patch — Small (under 6\")", low: 150, high: 300 },
	{ task: "Drywall Patch — Medium (6–12\")", low: 250, high: 500 },
	{ task: "Toilet Replacement (fixture + install)", low: 350, high: 700 },
	{ task: "Faucet Replacement (fixture + install)", low: 200, high: 450 },
	{ task: "Safety Grab Bar Install", low: 200, high: 400 },
	{ task: "Half-Day Punch List (4 hrs)", low: 350, high: 600 },
	{ task: "Full-Day Punch List (8 hrs)", low: 600, high: 950 },
];

const faqs = [
	{
		q: "How much does a handyman cost in Salmon Creek WA?",
		a: "A licensed handyman in Salmon Creek WA charges $65–$95 per hour in 2026. Most individual jobs run $150–$500. A half-day punch list covering multiple tasks runs $350–$600. Norbilt is based locally in north Vancouver — no travel surcharge for Salmon Creek jobs.",
	},
	{
		q: "Do you serve Salmon Creek for handyman work?",
		a: "Yes. Salmon Creek is one of our core service areas. We're based in north Vancouver and work in Salmon Creek, Felida, Hazel Dell North, and the surrounding area every week. Same-week estimates, no travel fees.",
	},
	{
		q: "What handyman services do you offer in Salmon Creek?",
		a: "We handle drywall patching, fixture and ceiling fan installation, door adjustments, smart lock installs, TV mounting, shelf hanging, furniture assembly, caulking, weatherstripping, toilet and faucet replacement, and full home punch lists. Most jobs are completed in a single visit.",
	},
	{
		q: "Do Salmon Creek homes have any common handyman issues?",
		a: "Salmon Creek homes were largely built in the 1980s–2000s. Many have original builder-grade fixtures, faucets, and hardware that are overdue for replacement. Flat paint from that era shows wear and scuffs easily. Caulking around tubs and windows from that period also tends to have failed. We see a lot of full-day refresh visits in this neighborhood.",
	},
	{
		q: "Do you need a licensed handyman in Salmon Creek WA?",
		a: "Washington State requires a licensed contractor for repair work above a set dollar threshold. Hiring an unlicensed handyman above that limit can void your homeowner's insurance and create problems at resale. Norbilt is a fully licensed WA General Contractor — every job is code-compliant and insured.",
	},
	{
		q: "Is your handyman work in Salmon Creek guaranteed?",
		a: "Yes. All Norbilt work in Salmon Creek is backed by our 1-year workmanship warranty. If anything we repaired fails due to workmanship within a year, we return and fix it at no charge.",
	},
];

export default function SalmonCreekHandymanPost() {
	return (
		<div className="bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						"headline": "Handyman Services in Salmon Creek WA: 2026 Pricing & What to Expect",
						"datePublished": "2026-11-09",
						"dateModified": "2026-11-09",
						"author": { "@id": "https://www.norbilt.com/#founder" },
						"publisher": { "@id": "https://www.norbilt.com/#organization" },
						"mainEntityOfPage": "https://www.norbilt.com/blog/handyman-services-salmon-creek-wa",
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
						{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
						{ "@type": "ListItem", position: 3, name: "Handyman Services in Salmon Creek WA", item: "https://www.norbilt.com/blog/handyman-services-salmon-creek-wa" },
					],
				}) }}
			/>

			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-6">
						<span className="px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							2026 Local Guide
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Salmon Creek, WA
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Handyman Services in Salmon Creek WA
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8">
						Real 2026 pricing for home repairs, drywall, fixtures, doors, and punch lists in Salmon Creek and north Vancouver.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated November 2026</span>
						<span>·</span>
						<span>Salmon Creek, WA</span>
						<span>·</span>
						<Link href="/about" className="text-[#FFB800] hover:text-white transition-colors font-bold">By Andrey</Link>
						<span>· WA Licensed General Contractor</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#1F2E2B] font-medium">
						A licensed handyman in Salmon Creek WA charges <strong>$65–$95/hour</strong> in 2026.
						Most individual jobs run <strong>$150–$500</strong>. A half-day punch list (4 hours, multiple tasks) runs <strong>$350–$600</strong>.
						Norbilt is based locally in north Vancouver — no travel surcharge and same-week availability.
					</p>
				</div>
			</section>

			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Salmon Creek is one of our home neighborhoods — we work here every week. If you have a list of repairs that keeps getting pushed to next weekend, a fixture that&apos;s been on the fritz for months, or a wall that needs a proper patch before the holidays, this guide covers what it actually costs and what to look for in a handyman in Salmon Creek in 2026.
					</p>
					<p>
						Norbilt is a licensed WA General Contractor based in north Vancouver. Salmon Creek, Felida, Hazel Dell North, and the surrounding area are our backyard — same-week scheduling, no travel fees, same rates as the rest of Clark County.
					</p>
				</section>

				{/* JOB COST TABLE */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Handyman Cost by Job — Salmon Creek WA (2026)
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						Flat-rate pricing for common handyman tasks in Salmon Creek, including labor and standard materials.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Task</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Low</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">High</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{jobCosts.map((job, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-3 font-semibold text-[#1F2E2B]">{job.task}</td>
										<td className="px-6 py-3 text-[#2D5A3D] font-black">${job.low.toLocaleString()}</td>
										<td className="px-6 py-3 text-[#2D5A3D] font-black">${job.high.toLocaleString()}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 mt-3 font-medium">
						2026 Clark County rates. All prices include licensed labor and basic materials.
					</p>
				</section>

				{/* SALMON CREEK-SPECIFIC */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
						Common Handyman Issues in Salmon Creek Homes
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "1980s–2000s Fixture Age",
								body: "Most Salmon Creek homes were built between 1985 and 2005. Original light fixtures, faucets, cabinet hardware, and door hardware in these homes are now 20–40 years old. A full hardware refresh day — where we replace everything in a single visit — is one of our most popular Salmon Creek services.",
							},
							{
								title: "Flat Paint Wear",
								body: "Builder-grade flat paint from the 1990s–2000s shows scuffs, marks, and wear far more than modern finishes. Many Salmon Creek homeowners book us for a drywall touch-up and repaint combination job to freshen up walls that have years of accumulated wear.",
							},
							{
								title: "Caulk Failure",
								body: "Clark County's wet winters accelerate caulk failure around tubs, showers, sinks, and windows. Homes from this era often have multiple layers of old caulk that need full removal and replacement — not a patch coat on top of failing material.",
							},
							{
								title: "Punch List Backlogs",
								body: "Busy north Vancouver homeowners often carry months of deferred small tasks. A cracked outlet cover, a loose towel bar, a TV to mount, a shelf to hang, a door that sticks. We clear full punch lists in a single day, which is more cost-effective than separate visits for each job.",
							},
						].map((item) => (
							<div key={item.title} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* WHY LICENSED */}
				<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-5">
					<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
						Why Hire a Licensed Handyman in Salmon Creek WA
					</h2>
					<p className="text-[#A7C4B5] font-medium leading-relaxed">
						Washington State requires a licensed contractor for repair work above a set dollar threshold. Beyond the legal requirement, here&apos;s what you actually get with a licensed contractor:
					</p>
					<div className="space-y-4">
						{[
							{ label: "Liability Insurance", detail: "If an unlicensed handyman damages your home or is injured on your property, you may be liable. Licensed contractors carry their own policy." },
							{ label: "Surety Bond", detail: "Washington requires licensed contractors to carry a surety bond. If work is defective or abandoned, the bond provides a financial remedy. Unlicensed handymen have no bond." },
							{ label: "1-Year Workmanship Warranty", detail: "Norbilt backs every job with a 1-year warranty. If anything we repaired fails due to workmanship, we return and fix it at no charge." },
							{ label: "Permit Authority", detail: "Only licensed contractors can pull permits in Clark County. Electrical, plumbing, and structural work requires permits — an unlicensed handyman cannot legally do this work." },
						].map((item) => (
							<div key={item.label} className="flex gap-4">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
								<div>
									<p className="font-black text-white text-sm uppercase tracking-wide">{item.label}</p>
									<p className="text-[#A7C4B5] text-sm font-medium leading-relaxed mt-1">{item.detail}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* FAQ */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
						Frequently Asked Questions
					</h2>
					<div className="space-y-5">
						{faqs.map((faq, i) => (
							<div key={i} className="border border-[#E8E4DE] rounded-2xl p-7 bg-white">
								<h3 className="font-black text-[#1F2E2B] text-lg mb-3">{faq.q}</h3>
								<p className="text-gray-600 font-medium leading-relaxed">{faq.a}</p>
							</div>
						))}
					</div>
				</section>

				{/* INTERNAL LINKS */}
				<section className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE]">
					<h3 className="font-black text-[#1F2E2B] uppercase tracking-widest text-sm mb-5">Related Reading</h3>
					<div className="space-y-3">
						{[
							{ title: "Handyman Cost in Vancouver WA (2026 Rates)", href: "/blog/handyman-cost-vancouver-wa" },
							{ title: "Handyman Services in Battle Ground WA (2026)", href: "/blog/battle-ground-handyman-cost" },
							{ title: "Licensed Contractor vs. Handyman in Washington State", href: "/blog/licensed-contractor-vs-handyman-washington-state" },
							{ title: "Home Remodeling in Salmon Creek WA", href: "/locations/salmon-creek" },
						].map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="flex items-center gap-3 text-[#2D5A3D] font-semibold hover:text-[#FFB800] transition-colors group"
							>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								{link.title}
							</Link>
						))}
					</div>
				</section>

				{/* REMODELING CALLOUT */}
				<section className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
					<div>
						<p className="font-black text-[#1F2E2B] mb-1">Thinking bigger than a repair?</p>
						<p className="text-gray-600 text-sm">Salmon Creek homeowners trust Norbilt for full kitchen & bath remodels, custom carpentry, and flooring — not just punch lists.</p>
					</div>
					<Link href="/remodeling" className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors">
						Home Remodeling →
					</Link>
				</section>

				{/* CTA */}
				<section className="bg-[#1F2E2B] rounded-3xl p-10 md:p-14 text-center border-b-8 border-[#FFB800]">
					<h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
						Book a Handyman in Salmon Creek WA
					</h2>
					<p className="text-[#A7C4B5] font-medium mb-8 max-w-lg mx-auto">
						Norbilt is a licensed WA General Contractor serving Salmon Creek and all of Clark County. 5-star rated, fully insured, 1-year workmanship warranty. Free same-week estimates.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/estimate"
							className="px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
						>
							Get Instant Estimate
						</Link>
						<a
							href="tel:+13602169920"
							className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
						>
							<Phone className="w-5 h-5" /> (360) 216-9920
						</a>
					</div>
				</section>

			</article>
		</div>
	);
}
