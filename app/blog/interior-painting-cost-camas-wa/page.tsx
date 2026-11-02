import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Interior Painting Cost in Camas WA: 2026 Pricing Guide | Norbilt",
	description: "How much does interior painting cost in Camas WA? Real 2026 price ranges per room and whole-house from a licensed Clark County contractor serving Camas every week.",
	alternates: { canonical: "https://www.norbilt.com/blog/interior-painting-cost-camas-wa" },
	openGraph: {
		title: "Interior Painting Cost in Camas WA: 2026 Pricing Guide | Norbilt",
		description: "Real 2026 interior painting costs for Camas WA — per-room, whole-house, and component pricing from a licensed contractor.",
		url: "https://www.norbilt.com/blog/interior-painting-cost-camas-wa",
		siteName: "Norbilt", type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{ scope: "Single Room — Walls Only", range: "$350 – $650", timeline: "1 day" },
	{ scope: "Single Room — Walls + Ceiling", range: "$450 – $850", timeline: "1 day" },
	{ scope: "Single Room — Full (Walls, Ceiling, Trim)", range: "$575 – $1,100", timeline: "1–2 days" },
	{ scope: "2-Bedroom Home Interior", range: "$2,200 – $4,200", timeline: "3–5 days" },
	{ scope: "3-Bedroom Home Interior", range: "$3,200 – $6,000", timeline: "4–7 days" },
	{ scope: "4-Bedroom Home Interior", range: "$4,800 – $9,500", timeline: "6–10 days" },
];

const faqs = [
	{ q: "How much does interior painting cost in Camas WA?", a: "Interior painting in Camas WA costs $350–$650 per room for walls only, or $575–$1,100 for walls, ceiling, and trim. A full 3-bedroom home repaint runs $3,200–$6,000. Camas homes — especially newer builds in Grass Valley and along the SR-14 corridor — tend to be in good structural condition with minimal prep needed, which keeps costs toward the low end of each range." },
	{ q: "Do Camas homes cost more or less to paint than Vancouver?", a: "Camas homes generally cost the same per room as Vancouver, but they tend toward the lower end of the range because newer construction (2000s+) has cleaner drywall, less texture, and fewer repair spots. Older Camas homes near downtown can have heavier walls that need more prep." },
	{ q: "Does Norbilt do cabinet painting in Camas?", a: "Yes. Kitchen cabinet painting is one of the highest-ROI updates in Camas homes — it costs $1,500–$4,500 depending on the number of cabinet doors and drawer fronts, and it completely changes the feel of the kitchen without a full remodel." },
	{ q: "How long does interior painting take in Camas?", a: "A single room takes 1 day. A 3-bedroom home takes 4–7 days. Timeline depends on scope, number of coats, and how much prep the walls need." },
	{ q: "What paint does Norbilt use?", a: "We use professional-grade Sherwin-Williams Duration or equivalent on all interior jobs in Camas and Clark County. It covers better, needs fewer coats, and holds up to cleaning. We supply all materials — if you prefer to source your own, we'll discount accordingly." },
];

export default function InteriorPaintingCostCamasWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BlogPosting",
				headline: "Interior Painting Cost in Camas WA: 2026 Pricing Guide",
				author: { "@id": "https://www.norbilt.com/#founder" },
				publisher: { "@id": "https://www.norbilt.com/#organization" },
				datePublished: "2026-11-02", dateModified: "2026-11-02",
				mainEntityOfPage: "https://www.norbilt.com/blog/interior-painting-cost-camas-wa",
			}) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
					{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
					{ "@type": "ListItem", position: 3, name: "Interior Painting Cost in Camas WA", item: "https://www.norbilt.com/blog/interior-painting-cost-camas-wa" },
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
							Interior Painting Cost in <span className="text-[#FFB800]">Camas WA</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">Interior painting in Camas WA costs $350–$650 per room (walls only) or $575–$1,100 for walls, ceiling, and trim. A full 3-bedroom home interior runs $3,200–$6,000. Camas&apos;s newer housing stock tends toward the low end of each range — less prep, fewer repairs, cleaner drywall. All prices are 2026 rates from Norbilt (WA Lic. NORBI**741CS).</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for interior painting in Camas from a licensed contractor serving east Clark County every week.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Camas, WA · East Clark County</div>
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
							<p>Interior painting in Camas WA costs <strong>$350–$650 per room for walls only</strong>, or <strong>$3,200–$6,000 for a full 3-bedroom interior</strong>. Camas is one of the easier markets to paint in Clark County — the housing stock leans newer, with cleaner drywall and less accumulated texture than older Vancouver neighborhoods.</p>
							<p>That said, the higher-end Camas homes often have vaulted entryways, two-story accent walls, and detailed trim that takes more time. The scope you choose matters more than the square footage.</p>
							<p>Norbilt is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) serving Camas and all of Clark County. We paint standalone jobs and alongside bathroom and kitchen remodels.</p>
						</section>

						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Interior Painting Cost in Camas WA</h2>
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
								{ href: "/blog/interior-painting-cost-vancouver-wa", label: "Interior Painting Cost in Vancouver WA" },
								{ href: "/blog/bathroom-remodel-cost-camas-wa", label: "Bathroom Remodel Cost in Camas WA" },
								{ href: "/blog/home-remodeling-camas-wa", label: "Home Remodeling in Camas WA" },
							].map((l) => (
								<Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-[#2D5A3D] hover:bg-[#2D5A3D]/5 transition-all group">
									<ArrowRight className="w-4 h-4 text-[#2D5A3D] shrink-0" />
									<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{l.label}</span>
								</Link>
							))}</div>
						</section>

						<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#FFB800]">Get Your Painting Estimate</p>
							<h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">Ready to Paint Your Camas Home?</h2>
							<p className="text-[#A7C4B5] leading-relaxed">We walk the rooms, assess the prep, and give you a written itemized estimate within 3 business days.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">Book Free Walkthrough <ArrowRight className="w-4 h-4" /></Link>
								<a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white transition-all"><Phone className="w-4 h-4" /> (360) 216-9920</a>
							</div>
							<div className="flex flex-wrap gap-4 pt-2">{["Licensed & Bonded · WA Lic. NORBI**741CS", "Serving Camas & Clark County", "1-Year Workmanship Warranty"].map((item) => (
								<div key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /><span className="text-[#A7C4B5] text-xs font-medium">{item}</span></div>
							))}</div>
						</section>
					</div>
				</article>
			</div>
		</>
	);
}
