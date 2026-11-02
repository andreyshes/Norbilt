import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Interior Painting Cost in Battle Ground WA: 2026 Pricing Guide | Norbilt",
	description: "How much does interior painting cost in Battle Ground WA? Real 2026 price ranges per room and whole-house from a licensed Clark County contractor.",
	alternates: { canonical: "https://www.norbilt.com/blog/interior-painting-cost-battle-ground-wa" },
	openGraph: {
		title: "Interior Painting Cost in Battle Ground WA: 2026 Pricing Guide | Norbilt",
		description: "Real 2026 interior painting costs for Battle Ground WA — per-room prices, whole-house ranges, and what drives the cost in north Clark County.",
		url: "https://www.norbilt.com/blog/interior-painting-cost-battle-ground-wa",
		siteName: "Norbilt", type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{ scope: "Single Room — Walls Only", range: "$350 – $625", timeline: "1 day" },
	{ scope: "Single Room — Walls + Ceiling", range: "$450 – $825", timeline: "1 day" },
	{ scope: "Single Room — Full (Walls, Ceiling, Trim)", range: "$575 – $1,075", timeline: "1–2 days" },
	{ scope: "2-Bedroom Home Interior", range: "$2,200 – $4,000", timeline: "3–5 days" },
	{ scope: "3-Bedroom Home Interior", range: "$3,000 – $5,800", timeline: "4–7 days" },
	{ scope: "4-Bedroom Home Interior", range: "$4,500 – $9,000", timeline: "6–10 days" },
];

const faqs = [
	{ q: "How much does interior painting cost in Battle Ground WA?", a: "In Battle Ground WA, interior painting costs $350–$625 per room (walls only), $450–$825 with ceiling, or $575–$1,075 for walls, ceiling, and trim. A full 3-bedroom home interior runs $3,000–$5,800. Battle Ground homes are a mix of newer subdivisions and older rural properties — newer builds tend toward the low end, older farmhouse-style homes often need more prep." },
	{ q: "Does Norbilt serve Battle Ground for painting?", a: "Yes. We paint throughout Battle Ground and north Clark County. We're based in Vancouver and serve Battle Ground regularly for both standalone paint jobs and painting alongside remodels." },
	{ q: "How long does a whole-house interior paint take in Battle Ground?", a: "A 3-bedroom home takes 4–7 days. A 4-bedroom or larger takes 6–10 days. Single rooms take 1 day. We give you a specific timeline in your written estimate before any work starts." },
	{ q: "What does interior painting include?", a: "We paint walls, ceilings, baseboards, door casing, closets, and interior doors. Each scope is quoted separately. Most whole-house jobs include walls and ceilings — trim is added when the existing paint is peeling, yellowed, or a different sheen." },
	{ q: "Do you match existing paint colors in Battle Ground?", a: "Yes. If you want to match an existing color, we can color-match from a chip, existing paint can lid, or we can pull the previous paint code from the wall with a color reader. We also provide color consultation if you want to update the palette." },
];

export default function InteriorPaintingCostBattleGroundWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BlogPosting",
				headline: "Interior Painting Cost in Battle Ground WA: 2026 Pricing Guide",
				author: { "@id": "https://www.norbilt.com/#founder" },
				publisher: { "@id": "https://www.norbilt.com/#organization" },
				datePublished: "2026-11-02", dateModified: "2026-11-02",
				mainEntityOfPage: "https://www.norbilt.com/blog/interior-painting-cost-battle-ground-wa",
			}) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
					{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
					{ "@type": "ListItem", position: 3, name: "Interior Painting Cost in Battle Ground WA", item: "https://www.norbilt.com/blog/interior-painting-cost-battle-ground-wa" },
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
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">Interior Painting Cost in <span className="text-[#FFB800]">Battle Ground WA</span></h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">Interior painting in Battle Ground WA costs $350–$625 per room (walls only) or $575–$1,075 for walls, ceiling, and trim. A full 3-bedroom home runs $3,000–$5,800. All prices are 2026 rates from Norbilt (WA Lic. NORBI**741CS).</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for interior painting in Battle Ground from a licensed Clark County contractor.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Battle Ground, WA · North Clark County</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · Norbilt</span>
					</div>
				</div>
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>Interior painting in Battle Ground WA costs <strong>$350–$625 per room for walls only</strong>, or <strong>$3,000–$5,800 for a full 3-bedroom interior</strong>. Battle Ground has a mix of newer subdivisions with clean drywall and older homes that need more prep — your final cost depends on which camp your home falls into.</p>
							<p>Norbilt is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) serving Battle Ground and north Clark County. We paint standalone jobs and alongside remodels, carpentry, and drywall work.</p>
						</section>
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Interior Painting Cost in Battle Ground WA</h2>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead><tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Scope</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide whitespace-nowrap">2026 Price</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Timeline</th>
									</tr></thead>
									<tbody>{costTiers.map((t, i) => (
										<tr key={t.scope} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-5 py-4 font-bold text-[#1F2E2B]">{t.scope}</td>
											<td className="px-5 py-4 font-bold text-[#2D5A3D] whitespace-nowrap">{t.range}</td>
											<td className="px-5 py-4 text-gray-600 whitespace-nowrap">{t.timeline}</td>
										</tr>
									))}</tbody>
								</table>
							</div>
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
								{ href: "/blog/bathroom-remodel-cost-battle-ground-wa", label: "Bathroom Remodel Cost in Battle Ground WA" },
								{ href: "/blog/home-remodeling-battle-ground-wa", label: "Home Remodeling in Battle Ground WA" },
								{ href: "/blog/interior-painting-cost-vancouver-wa", label: "Interior Painting Cost in Vancouver WA" },
							].map((l) => (
								<Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-[#2D5A3D] hover:bg-[#2D5A3D]/5 transition-all group">
									<ArrowRight className="w-4 h-4 text-[#2D5A3D] shrink-0" />
									<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{l.label}</span>
								</Link>
							))}</div>
						</section>
						<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#FFB800]">Get Your Painting Estimate</p>
							<h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">Ready to Paint Your Battle Ground Home?</h2>
							<p className="text-[#A7C4B5] leading-relaxed">We walk the rooms and give you a written itemized estimate within 3 business days.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">Book Free Walkthrough <ArrowRight className="w-4 h-4" /></Link>
								<a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white transition-all"><Phone className="w-4 h-4" /> (360) 216-9920</a>
							</div>
							<div className="flex flex-wrap gap-4 pt-2">{["Licensed & Bonded · WA Lic. NORBI**741CS", "Serving Battle Ground & North Clark County", "1-Year Workmanship Warranty"].map((item) => (
								<div key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /><span className="text-[#A7C4B5] text-xs font-medium">{item}</span></div>
							))}</div>
						</section>
					</div>
				</article>
			</div>
		</>
	);
}
