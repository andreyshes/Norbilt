import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Interior Painting Cost in Vancouver WA: 2026 Pricing Guide | Norbilt",
	description: "How much does interior painting cost in Vancouver WA? Real 2026 price ranges by room and whole-house scope — from a licensed Vancouver contractor who paints every week.",
	alternates: { canonical: "https://www.norbilt.com/blog/interior-painting-cost-vancouver-wa" },
	openGraph: {
		title: "Interior Painting Cost in Vancouver WA: 2026 Pricing Guide | Norbilt",
		description: "Real 2026 interior painting costs for Vancouver WA — per-room prices, whole-house ranges, neighborhood notes, and what drives the cost.",
		url: "https://www.norbilt.com/blog/interior-painting-cost-vancouver-wa",
		siteName: "Norbilt", type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{ scope: "Single Room — Walls Only", desc: "Prep, prime bare spots, two coats. Standard 10×12 room.", range: "$350 – $650", timeline: "1 day" },
	{ scope: "Single Room — Walls + Ceiling", desc: "Ceiling cut-in and rolled, walls two coats.", range: "$450 – $850", timeline: "1 day" },
	{ scope: "Single Room — Full", desc: "Walls, ceiling, baseboards, door casing.", range: "$575 – $1,100", timeline: "1–2 days" },
	{ scope: "2-Bedroom Home Interior", desc: "Living room, hallway, 2 bedrooms. Walls and ceilings.", range: "$2,200 – $4,200", timeline: "3–5 days" },
	{ scope: "3-Bedroom Home Interior", desc: "All rooms, hallways, closets — walls and ceilings.", range: "$3,200 – $6,000", timeline: "4–7 days" },
	{ scope: "4-Bedroom Home Interior", desc: "Larger home full repaint including bonus rooms.", range: "$4,800 – $9,000", timeline: "6–10 days" },
];

const componentCosts = [
	{ item: "Accent wall (single wall)", range: "$175 – $350" },
	{ item: "Ceiling only (per room)", range: "$125 – $275" },
	{ item: "Trim & baseboards (per linear ft)", range: "$1.25 – $2.50" },
	{ item: "Interior doors (per door, both sides)", range: "$75 – $175" },
	{ item: "Cabinet painting (kitchen)", range: "$1,500 – $4,500" },
	{ item: "Stair risers & railings", range: "$350 – $900" },
	{ item: "Primer coat (heavy stain, per room)", range: "$125 – $300" },
];

const faqs = [
	{ q: "How much does it cost to paint a room in Vancouver WA?", a: "Painting a standard bedroom in Vancouver WA costs $350–$650 for walls only. Adding the ceiling brings it to $450–$850. A full room with walls, ceiling, and trim runs $575–$1,100. Open-concept living rooms and larger spaces run $650–$1,400 depending on square footage and ceiling height." },
	{ q: "How much does whole-house interior painting cost in Vancouver WA?", a: "A full interior repaint in Vancouver WA costs $2,200–$4,200 for a 2-bedroom home, $3,200–$6,000 for a 3-bedroom, and $4,800–$9,000 for a 4-bedroom. Price is driven by square footage, prep work needed, whether trim is included, and number of coats." },
	{ q: "What neighborhoods in Vancouver does Norbilt paint?", a: "We paint throughout Vancouver — Hazel Dell, Orchards, Felida, Fisher's Landing, Mill Plain, Salmon Creek, Five Corners, East Vancouver, and central Vancouver. We're based locally and work in Vancouver every week." },
	{ q: "How long does interior painting take in Vancouver?", a: "A single room takes 1 day. A 2-bedroom home takes 3–5 days. A 3-bedroom full interior takes 4–7 days. Homes with heavy wall damage, textured ceilings, or many color changes take longer. We provide a specific timeline in your written estimate." },
	{ q: "Do Vancouver homes from the 1970s–1990s cost more to paint?", a: "Sometimes. Older Vancouver homes (especially in Hazel Dell, Orchards, and Five Corners) often have heavily textured walls, multiple layers of old paint, and popcorn ceilings — all of which add prep time. If your home has textured ceilings you want to skim and smooth before painting, that's a separate scope we can quote." },
	{ q: "Does Norbilt paint ceilings and trim, or just walls?", a: "We paint everything — walls, ceilings, baseboards, door casing, closets, and interior doors. Each scope is quoted separately so you choose exactly what you want painted." },
];

export default function InteriorPaintingCostVancouverWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BlogPosting",
				headline: "Interior Painting Cost in Vancouver WA: 2026 Pricing Guide",
				author: { "@id": "https://www.norbilt.com/#founder" },
				publisher: { "@id": "https://www.norbilt.com/#organization" },
				datePublished: "2026-11-02", dateModified: "2026-11-02",
				mainEntityOfPage: "https://www.norbilt.com/blog/interior-painting-cost-vancouver-wa",
			}) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
					{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
					{ "@type": "ListItem", position: 3, name: "Interior Painting Cost in Vancouver WA", item: "https://www.norbilt.com/blog/interior-painting-cost-vancouver-wa" },
				],
			}) }} />

			<div className="overflow-hidden bg-[#FDFCFB]">
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">← Blog</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">Cost Guide</span>
							<span className="text-white/50 text-xs font-medium">Updated November 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Interior Painting Cost in <span className="text-[#FFB800]">Vancouver WA</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">Interior painting in Vancouver WA costs $350–$650 per room (walls only) or $575–$1,100 for walls, ceiling, and trim. A full 3-bedroom home interior runs $3,200–$6,000. Older Vancouver homes in Hazel Dell and Orchards often need more prep — add $75–$200 per room for heavily textured or multi-layer walls. All prices are 2026 rates from Norbilt (WA Lic. NORBI**741CS).</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for every scope — from a single accent wall to a full home repaint — from a licensed contractor working in Vancouver every week.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Vancouver, WA · Hazel Dell · Orchards · Felida · Fisher&apos;s Landing · Mill Plain</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · Norbilt</span>
					</div>
				</div>

				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>Interior painting in Vancouver WA costs <strong>$350–$650 per room for walls only</strong>, up to <strong>$9,000 for a full 4-bedroom home repaint</strong> including ceilings and trim. What you pay depends more on prep and scope than square footage.</p>
							<p>Vancouver has a wide range of housing stock — from new construction in Fisher&apos;s Landing and east Vancouver to 1970s–1990s homes in Hazel Dell, Orchards, and Five Corners. The older homes often have heavier texture, more wall repairs, and multiple old paint layers that need more prep time before the first coat goes on.</p>
							<p>Norbilt is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) based in Vancouver. Interior painting is a core trade — we do it on standalone paint jobs and alongside remodels and trim work.</p>
						</section>

						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Interior Painting Cost by Scope</h2>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead><tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Scope</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">What&apos;s Included</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide whitespace-nowrap">2026 Price</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Timeline</th>
									</tr></thead>
									<tbody>{costTiers.map((t, i) => (
										<tr key={t.scope} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-5 py-4 font-bold text-[#1F2E2B]">{t.scope}</td>
											<td className="px-5 py-4 text-gray-600 leading-relaxed">{t.desc}</td>
											<td className="px-5 py-4 font-bold text-[#2D5A3D] whitespace-nowrap">{t.range}</td>
											<td className="px-5 py-4 text-gray-600 whitespace-nowrap">{t.timeline}</td>
										</tr>
									))}</tbody>
								</table>
							</div>
						</section>

						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Cost by Component</h2>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead><tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Item</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">2026 Price</th>
									</tr></thead>
									<tbody>{componentCosts.map((r, i) => (
										<tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-5 py-4 text-gray-700">{r.item}</td>
											<td className="px-5 py-4 font-bold text-[#2D5A3D]">{r.range}</td>
										</tr>
									))}</tbody>
								</table>
							</div>
						</section>

						<section className="space-y-4 border-l-4 border-[#FFB800] pl-6">
							<h2 className="text-xl font-black text-[#1F2E2B]">Vancouver Older Homes — What to Expect</h2>
							<p className="text-gray-600 leading-relaxed">Homes in Hazel Dell, Orchards, and Five Corners built in the 1970s–1990s often have heavy knockdown or orange-peel texture on walls and ceilings, multiple layers of old paint, and occasional water stains or drywall repairs that need to be addressed before painting. We assess all of this during the walkthrough and include it in your written estimate — no surprises after we start.</p>
						</section>

						<section className="space-y-8">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Frequently Asked Questions</h2>
							<div className="space-y-4">{faqs.map((f) => (
								<div key={f.q} className="border border-gray-200 rounded-2xl overflow-hidden">
									<div className="bg-[#F8F6F3] px-6 py-4"><h3 className="font-black text-[#1F2E2B] text-base">{f.q}</h3></div>
									<div className="px-6 py-4"><p className="text-gray-600 leading-relaxed text-sm">{f.a}</p></div>
								</div>
							))}</div>
						</section>

						<section className="space-y-4">
							<h2 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tighter">Related Guides</h2>
							<div className="grid sm:grid-cols-2 gap-4">{[
								{ href: "/blog/interior-painting-cost-clark-county-wa", label: "Interior Painting Cost in Clark County WA" },
								{ href: "/blog/interior-painting-cost-camas-wa", label: "Interior Painting Cost in Camas WA" },
								{ href: "/blog/drywall-repair-cost-vancouver-wa", label: "Drywall Repair Cost in Vancouver WA" },
								{ href: "/blog/bathroom-remodel-cost-vancouver-wa", label: "Bathroom Remodel Cost in Vancouver WA" },
							].map((l) => (
								<Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-[#2D5A3D] hover:bg-[#2D5A3D]/5 transition-all group">
									<ArrowRight className="w-4 h-4 text-[#2D5A3D] shrink-0" />
									<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{l.label}</span>
								</Link>
							))}</div>
						</section>

						<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#FFB800]">Get Your Painting Estimate</p>
							<h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">Ready to Get Your Vancouver Home Painted?</h2>
							<p className="text-[#A7C4B5] leading-relaxed">We walk the rooms, assess the prep, and send you a written itemized estimate within 3 business days.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">Book Free Walkthrough <ArrowRight className="w-4 h-4" /></Link>
								<a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white transition-all"><Phone className="w-4 h-4" /> (360) 216-9920</a>
							</div>
							<div className="flex flex-wrap gap-4 pt-2">{["Licensed & Bonded · WA Lic. NORBI**741CS", "Serving Vancouver & Clark County", "1-Year Workmanship Warranty"].map((item) => (
								<div key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /><span className="text-[#A7C4B5] text-xs font-medium">{item}</span></div>
							))}</div>
						</section>

					</div>
				</article>
			</div>
		</>
	);
}
