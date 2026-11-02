import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost in Hazel Dell WA: 2026 Pricing Guide | Norbilt",
	description:
		"How much does a bathroom remodel cost in Hazel Dell WA? Real 2026 price ranges for every scope — from a $920 cosmetic refresh to a $35,000 primary suite gut — from a licensed Clark County contractor who works in Hazel Dell every week.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/bathroom-remodel-cost-hazel-dell-wa",
	},
	openGraph: {
		title: "Bathroom Remodel Cost in Hazel Dell WA: 2026 Pricing Guide | Norbilt",
		description:
			"Complete 2026 cost guide for bathroom remodels in Hazel Dell WA. Real price ranges by scope, component-level costs, and what Hazel Dell&apos;s older housing stock actually adds to the budget.",
		url: "https://www.norbilt.com/blog/bathroom-remodel-cost-hazel-dell-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Cosmetic Refresh",
		desc: "New fixtures, faucet, toilet seat, recaulk, paint. Nothing structural — same tile, same layout.",
		range: "$920 – $2,500",
		timeline: "1–2 days",
		best: "Cosmetic wear, prepping to sell, tight budget",
	},
	{
		scope: "Mid-Range Update",
		desc: "New vanity, tile backsplash, mirror, lighting upgrade, all fixtures replaced. No demo.",
		range: "$3,450 – $7,500",
		timeline: "3–5 days",
		best: "Dated finishes, worn vanity, fixtures 15+ years old",
	},
	{
		scope: "Full Remodel",
		desc: "Demo, new tile floor and shower surround, new vanity, all fixtures, drywall as needed.",
		range: "$9,200 – $18,000",
		timeline: "1–2 weeks",
		best: "Water damage, gut renovation, keeping the same layout",
	},
	{
		scope: "High-End / Primary Suite",
		desc: "Custom tile, freestanding tub, heated floors, full layout reconfiguration, premium fixtures.",
		range: "$20,750 – $35,000+",
		timeline: "2–4 weeks",
		best: "Primary suite upgrade, maximum ROI before sale, luxury finish",
	},
];

const costByComponent = [
	{ item: "Toilet replacement", range: "$345 – $800" },
	{ item: "Faucet & showerhead replacement", range: "$230 – $600" },
	{ item: "Vanity (supply + install)", range: "$690 – $2,500" },
	{ item: "Recaulk tub / shower base", range: "$115 – $250" },
	{ item: "Regrout shower or tub surround", range: "$345 – $800" },
	{ item: "Tile floor (per sq ft, installed)", range: "$9.25 – $18" },
	{ item: "Shower tile surround (installed)", range: "$1,400 – $4,000" },
	{ item: "Subfloor repair", range: "$575 – $1,800" },
	{ item: "Exhaust fan replacement", range: "$175 – $400" },
	{ item: "Mirror & lighting update", range: "$345 – $900" },
	{ item: "Heated floor (tile, per sq ft)", range: "$14 – $25" },
	{ item: "Plumbing relocation (per fixture)", range: "$1,750 – $4,000" },
];

const costDrivers = [
	{
		title: "Hazel Dell's Housing Stock — 1960s Through 1990s",
		body: "Most Hazel Dell homes were built between the 1960s and 1990s, which puts them squarely in the range where hidden bathroom conditions are most common. Slow drips under tiles and around tub surrounds go undetected for years, leaving soft or rotted subfloor that has to be replaced before any new tile goes down. We find this on roughly half of full bathroom remodels in Hazel Dell — budget $575–$1,800 as a contingency if your home is pre-1995.",
	},
	{
		title: "Original Galvanized Supply Lines",
		body: "Homes built before 1980 in Hazel Dell frequently still have galvanized steel supply lines — the old standard that corrodes from the inside out over 40–50 years. When we open a wall for a vanity or shower valve replacement, corroded galvanized is code-required to replace. Replacing supply lines to the bathroom adds $400–$900 to the budget and is worth doing proactively if the pipe is original.",
	},
	{
		title: "Tile Over Drywall — A Common Code Violation",
		body: "In bathrooms built before the mid-1990s, tile was often installed directly over drywall instead of cement board or a waterproof backer. This is a code violation and, more practically, a failure point: moisture wicks through grout joints into the drywall and causes mold behind the tile. When we demo a Hazel Dell shower, we always inspect the backer. Replacing it adds $300–$700 but is non-negotiable for a durable, warrantable result.",
	},
	{
		title: "Clark County Permit Jurisdiction",
		body: "Hazel Dell is unincorporated Clark County — permits go through Clark County Community Development, not the City of Vancouver. The permit office and fee schedule differ. Clark County requires permits for structural changes, plumbing relocation, and electrical work. Cosmetic remodels — vanity swaps, fixture replacements, tile resurfacing within the existing layout — typically don&apos;t require a permit. Norbilt pulls Clark County permits when required.",
	},
	{
		title: "Tile Selection Drives the Budget More Than Anything Else",
		body: "Basic ceramic tile runs $2–5 per sq ft. Large-format porcelain, natural stone, or custom patterns run $15–30 per sq ft and take longer to install. For a 50 sq ft shower surround, the difference between budget and premium tile alone is $700–$2,500 — before labor. Pick the tile budget first, and let it anchor the rest of the scope.",
	},
];

const faqs = [
	{
		q: "How much does a bathroom remodel cost in Hazel Dell WA?",
		a: "In Hazel Dell WA, a bathroom remodel costs between $920 and $35,000+ depending on scope. A cosmetic refresh (new fixtures, recaulk, paint) runs $920–$2,500. A mid-range update with new vanity and tile runs $3,450–$7,500. A full gut remodel with new tile, vanity, and all fixtures runs $9,200–$18,000. High-end primary suite remodels reach $35,000+. Hazel Dell&apos;s older housing stock (mostly 1960s–1990s builds) often adds $575–$1,800 in subfloor repair — budget for it as a contingency on any full remodel.",
	},
	{
		q: "Do I need a permit for a bathroom remodel in Hazel Dell WA?",
		a: "Hazel Dell is unincorporated Clark County, so permits go through Clark County Community Development — not the City of Vancouver. Clark County requires permits for structural changes, plumbing relocation, and electrical work. Cosmetic remodels — replacing fixtures, vanity, tile, and paint within the existing layout — typically don&apos;t require a permit. Norbilt is a licensed WA general contractor (Lic. NORBI**741CS) and pulls permits when required.",
	},
	{
		q: "Why are Hazel Dell bathroom remodels more likely to have hidden costs?",
		a: "Most Hazel Dell homes were built in the 1960s through 1990s. These homes frequently have soft subfloors from decades of slow leaks, original galvanized supply lines that need replacing when opened, and tile installed over standard drywall rather than cement board. None of these show up until demo. We walk every bathroom before quoting and flag what we see — but some conditions only reveal themselves once the tile comes down.",
	},
	{
		q: "How long does a bathroom remodel take in Hazel Dell WA?",
		a: "A cosmetic refresh takes 1–2 days. A mid-range update (new vanity, tile, fixtures) takes 3–5 days. A full gut remodel takes 1–2 weeks. High-end remodels with custom tile and layout changes take 2–4 weeks. In older Hazel Dell homes, add a day or two of buffer for subfloor or plumbing conditions that only appear after demo.",
	},
	{
		q: "What is the cheapest way to update a bathroom in Hazel Dell?",
		a: "The highest-ROI low-cost updates are recaulking ($115–$250), replacing faucets and showerheads ($230–$600), and swapping out a dated vanity light and mirror ($345–$900). These three changes together run $700–$1,750 and dramatically improve how a bathroom looks and feels without demo, tile work, or permits.",
	},
	{
		q: "What adds the most value to a Hazel Dell bathroom remodel before selling?",
		a: "Updated tile, a new vanity, and modern fixtures have the highest visible ROI. Fixing water damage and replacing failing caulk and grout is non-negotiable — buyers&apos; inspectors flag these in every pre-sale inspection. A mid-range update ($3,450–$7,500) typically recovers 60–80% of its cost at sale in the Clark County market.",
	},
];

export default function BathroomRemodelCostHazelDellWA() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Bathroom Remodel Cost in Hazel Dell WA: 2026 Pricing Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-11-02",
						dateModified: "2026-11-02",
						description:
							"Complete 2026 cost guide for bathroom remodels in Hazel Dell WA — real price ranges by scope, component-level costs, and what this north Vancouver neighborhood&apos;s older housing stock adds to the budget.",
						mainEntityOfPage: "https://www.norbilt.com/blog/bathroom-remodel-cost-hazel-dell-wa",
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
							{ "@type": "ListItem", position: 3, name: "Bathroom Remodel Cost in Hazel Dell WA: 2026 Pricing Guide", item: "https://www.norbilt.com/blog/bathroom-remodel-cost-hazel-dell-wa" },
						],
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link
								href="/blog"
								className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors"
							>
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Cost Guide
							</span>
							<span className="text-white/50 text-xs font-medium">Updated November 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Bathroom Remodel Cost in{" "}
							<span className="text-[#FFB800]">Hazel Dell WA</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">
								A bathroom remodel in Hazel Dell WA costs between $920 for a cosmetic refresh and $35,000+ for a full primary suite gut. A cosmetic refresh — new toilet, faucet, mirror, recaulk, and paint — runs $920–$2,500 and takes 1–2 days. A mid-range remodel with new vanity, tile floor, shower surround, and all fixtures costs $3,450–$7,500 over 3–5 days. A full gut remodel runs $9,200–$18,000 in 1–2 weeks. Hazel Dell&apos;s 1960s–1990s housing stock regularly hides soft subfloors, original galvanized pipe, and tile over drywall — add $575–$1,800 as a contingency on any full remodel. Permits go through Clark County Community Development, not the City of Vancouver. All prices are 2026 rates from Norbilt, a licensed Clark County general contractor (WA Lic. NORBI**741CS).
							</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real 2026 price ranges for every scope — plus what Hazel Dell&apos;s older
							homes actually add to the budget — from a licensed contractor
							who works in north Vancouver every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Hazel Dell, WA · North Vancouver · Unincorporated Clark County
						</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · Norbilt</span>
					</div>
				</div>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						{/* INTRO */}
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>
								A bathroom remodel in Hazel Dell WA costs anywhere from{" "}
								<strong>$920 for a cosmetic refresh</strong> to{" "}
								<strong>$35,000+ for a high-end primary suite gut</strong>. The
								range is wide because &ldquo;bathroom remodel&rdquo; covers
								everything from a new faucet and recaulk to moving plumbing and
								installing heated floors.
							</p>
							<p>
								Hazel Dell has one complication the newer Clark County suburbs
								don&apos;t: the housing stock. Most homes here were built between the
								1960s and 1990s, and these older bathrooms are where hidden
								conditions live — soft subfloors from slow leaks, original
								galvanized pipe, and tile installed directly over drywall. None
								of it shows until demo. This guide explains what each scope of
								work actually costs, what those hidden conditions add, and how
								to budget for them.
							</p>
							<p>
								Norbilt is a licensed general contractor (WA Lic.{" "}
								<strong>NORBI**741CS</strong>) serving Hazel Dell and all of Clark
								County. We carry $1,000,000 liability insurance and back all
								bathroom work with a 1-year workmanship warranty.
							</p>
						</section>

						{/* COST TIERS TABLE */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Bathroom Remodel Cost by Scope
							</h2>
							<p className="text-gray-600">
								Every bathroom remodel falls into one of four tiers. Here&apos;s
								what each includes, what it costs in Hazel Dell WA, and when each
								scope makes sense.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead>
										<tr className="bg-[#1F2E2B] text-white">
											<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Scope</th>
											<th className="text-left px-5 py-4 font-black uppercase tracking-wide">What&apos;s Included</th>
											<th className="text-left px-5 py-4 font-black uppercase tracking-wide whitespace-nowrap">Price Range</th>
											<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Timeline</th>
										</tr>
									</thead>
									<tbody>
										{costTiers.map((tier, i) => (
											<tr key={tier.scope} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
												<td className="px-5 py-4 font-bold text-[#1F2E2B] whitespace-nowrap">{tier.scope}</td>
												<td className="px-5 py-4 text-gray-600 leading-relaxed">{tier.desc}</td>
												<td className="px-5 py-4 font-bold text-[#2D5A3D] whitespace-nowrap">{tier.range}</td>
												<td className="px-5 py-4 text-gray-600 whitespace-nowrap">{tier.timeline}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<p className="text-xs text-gray-400">
								Prices are 2026 Clark County labor and material rates. Hazel Dell&apos;s older housing stock adds $575–$1,800 on average for subfloor repairs on full remodels — see the hidden conditions section below.
							</p>
						</section>

						{/* COMPONENT COSTS */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Cost by Component
							</h2>
							<p className="text-gray-600">
								If you&apos;re scoping individual updates rather than a full remodel,
								here are the 2026 installed prices for each component in
								Hazel Dell and north Vancouver.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead>
										<tr className="bg-[#1F2E2B] text-white">
											<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Item</th>
											<th className="text-left px-5 py-4 font-black uppercase tracking-wide">2026 Installed Price</th>
										</tr>
									</thead>
									<tbody>
										{costByComponent.map((row, i) => (
											<tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
												<td className="px-5 py-4 text-gray-700">{row.item}</td>
												<td className="px-5 py-4 font-bold text-[#2D5A3D]">{row.range}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</section>

						{/* WHAT DRIVES THE COST */}
						<section className="space-y-8">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Drives the Cost in Hazel Dell
							</h2>
							<p className="text-gray-600">
								These are the five factors that most often push a Hazel Dell
								bathroom remodel above the baseline estimate.
							</p>
							<div className="space-y-6">
								{costDrivers.map((driver) => (
									<div key={driver.title} className="border-l-4 border-[#FFB800] pl-6 space-y-2">
										<h3 className="text-lg font-black text-[#1F2E2B]">{driver.title}</h3>
										<p className="text-gray-600 leading-relaxed">{driver.body}</p>
									</div>
								))}
							</div>
						</section>

						{/* HAZEL DELL SPECIFIC NOTE */}
						<section className="bg-amber-50 border border-amber-200 rounded-2xl p-8 space-y-4">
							<h2 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight">
								A Note on Hazel Dell Permits
							</h2>
							<p className="text-gray-700 leading-relaxed">
								Hazel Dell sits in unincorporated Clark County — not within
								Vancouver city limits — which means permits go through{" "}
								<strong>Clark County Community Development</strong>, not the City
								of Vancouver permit office. The process is similar but the fee
								schedule and timeline are different. If you&apos;ve remodeled a home
								inside Vancouver city limits before and are now working on a
								Hazel Dell home, expect a slightly different permit experience.
								Norbilt handles all Clark County permit applications as part of
								the project — you don&apos;t have to deal with the permit office.
							</p>
						</section>

						{/* FAQ */}
						<section className="space-y-8">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Frequently Asked Questions
							</h2>
							<div className="space-y-6">
								{faqs.map((faq) => (
									<div key={faq.q} className="border border-gray-200 rounded-2xl overflow-hidden">
										<div className="bg-[#F8F6F3] px-6 py-4">
											<h3 className="font-black text-[#1F2E2B] text-base">{faq.q}</h3>
										</div>
										<div className="px-6 py-4">
											<p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* RELATED POSTS */}
						<section className="space-y-5">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Related Guides
							</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								{[
									{ href: "/blog/bathroom-remodel-cost-clark-county-wa", label: "Bathroom Remodel Cost in Clark County WA" },
									{ href: "/blog/bathroom-remodel-cost-vancouver-wa", label: "Bathroom Remodel Cost in Vancouver WA" },
									{ href: "/blog/drywall-repair-cost-hazel-dell-wa", label: "Drywall Repair Cost in Hazel Dell WA" },
									{ href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa", label: "Bathtub-to-Shower Conversion Cost in Clark County WA" },
								].map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#2D5A3D] hover:bg-[#2D5A3D]/5 transition-all group"
									>
										<ArrowRight className="w-4 h-4 text-[#2D5A3D] shrink-0" />
										<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{link.label}</span>
									</Link>
								))}
							</div>
						</section>

						{/* CTA */}
						<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
							<div>
								<p className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] mb-3">Get Your Estimate</p>
								<h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">
									Ready to See What Your<br />Hazel Dell Bathroom Will Cost?
								</h2>
							</div>
							<p className="text-[#A7C4B5] leading-relaxed">
								We&apos;ll walk the bathroom, flag any hidden conditions we can see
								before demo, and send you an itemized written estimate within 3
								business days — backed by the{" "}
								<Link href="/remodel-promise" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">
									Norbilt Remodel Promise
								</Link>.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg"
								>
									Book a Free Walkthrough <ArrowRight className="w-4 h-4" />
								</Link>
								<a
									href="tel:+13602169920"
									className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white transition-all"
								>
									<Phone className="w-4 h-4" /> (360) 216-9920
								</a>
							</div>
							<div className="flex flex-wrap gap-4 pt-2">
								{[
									"Licensed & Bonded · WA Lic. NORBI**741CS",
									"$1M Liability Insurance",
									"1-Year Workmanship Warranty",
									"Serving Hazel Dell & Clark County",
								].map((item) => (
									<div key={item} className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
										<span className="text-[#A7C4B5] text-xs font-medium">{item}</span>
									</div>
								))}
							</div>
						</section>

					</div>
				</article>
			</div>
		</>
	);
}
