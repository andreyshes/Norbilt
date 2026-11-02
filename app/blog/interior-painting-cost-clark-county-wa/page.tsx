import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Interior Painting Cost in Clark County WA: 2026 Pricing Guide | Norbilt",
	description: "How much does interior painting cost in Clark County WA? Real 2026 price ranges by room, whole-house, and scope — from a licensed contractor painting in Vancouver, Camas, and Battle Ground every week.",
	alternates: { canonical: "https://www.norbilt.com/blog/interior-painting-cost-clark-county-wa" },
	openGraph: {
		title: "Interior Painting Cost in Clark County WA: 2026 Pricing Guide | Norbilt",
		description: "Real 2026 interior painting costs for Clark County WA — per-room prices, whole-house ranges, what drives the cost up, and city-by-city notes.",
		url: "https://www.norbilt.com/blog/interior-painting-cost-clark-county-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{ scope: "Single Room — Walls Only", desc: "One coat prep, two coats paint. Standard 10×12 bedroom.", range: "$350 – $650", timeline: "1 day" },
	{ scope: "Single Room — Walls + Ceiling", desc: "Ceiling cut-in and roll included, all trim masked.", range: "$450 – $850", timeline: "1 day" },
	{ scope: "Single Room — Full (Walls, Ceiling, Trim)", desc: "Everything painted — walls, ceiling, baseboards, door casing.", range: "$575 – $1,100", timeline: "1–2 days" },
	{ scope: "2-Bedroom Home (Interior)", desc: "Living room, hallway, 2 bedrooms. Walls and ceilings. Trim priced separately.", range: "$2,200 – $4,200", timeline: "3–5 days" },
	{ scope: "3-Bedroom Home (Interior)", desc: "Full interior — all rooms, hallways, closets, walls and ceilings.", range: "$3,200 – $6,000", timeline: "4–7 days" },
	{ scope: "4-Bedroom Home (Interior)", desc: "Larger home full repaint — all rooms, bonus areas, walls and ceilings.", range: "$4,800 – $9,000", timeline: "6–10 days" },
];

const componentCosts = [
	{ item: "Accent wall (single wall, one color)", range: "$175 – $350" },
	{ item: "Ceiling only (per room)", range: "$125 – $275" },
	{ item: "Trim & baseboards (per linear ft)", range: "$1.25 – $2.50" },
	{ item: "Interior doors (per door, both sides)", range: "$75 – $175" },
	{ item: "Stair risers & railings", range: "$350 – $900" },
	{ item: "Cabinet painting (kitchen)", range: "$1,500 – $4,500" },
	{ item: "Garage interior (walls only)", range: "$450 – $950" },
	{ item: "Primer coat (per room, heavy stain)", range: "$125 – $300" },
];

const costDrivers = [
	{ title: "Prep Work Is Half the Job", body: "The difference between a paint job that looks great for 10 years and one that peels in 2 is prep. Patching nail holes and dents, skim-coating scuffed drywall, sanding glossy surfaces, and priming bare spots all take time. Homes with lots of wall damage, heavy texture, or previous DIY paint work take longer to prep and cost more — but skipping it shows." },
	{ title: "Color Changes and Dark Colors", body: "Going from white to a deep navy or charcoal often requires three coats instead of two — the extra coat adds $75–$150 per room. Similarly, covering a dark color with a light one may need a tinted primer first. If you're staying within the same color family, two coats is usually sufficient." },
	{ title: "Ceiling Height", body: "Standard 8-foot ceilings are priced into every estimate. Vaulted ceilings, two-story entryways, and stairwells require extra setup time and sometimes extension equipment — add $75–$250 per room for ceilings above 10 feet." },
	{ title: "Trim, Doors, and Casing", body: "Many homeowners quote only the walls and are surprised by the trim cost. Painting baseboard, door casing, and window trim is meticulous work — cut lines have to be sharp and the finish has to be smooth. It's priced separately for a reason: it's slower than rolling walls." },
	{ title: "Paint Quality", body: "We use Sherwin-Williams Duration or comparable professional-grade paint on all interior jobs. The difference vs. big-box store paint: better coverage, fewer coats, and a finish that holds up to cleaning. Going with premium paint adds $15–$30 per room in materials but meaningfully extends how long the job looks new." },
];

const faqs = [
	{ q: "How much does it cost to paint a room in Clark County WA?", a: "In Clark County WA, painting a standard bedroom (walls only) costs $350–$650. Adding the ceiling brings it to $450–$850. A full room with walls, ceiling, and trim runs $575–$1,100. Larger rooms like living rooms and open-concept areas run $650–$1,400 depending on size and ceiling height. All prices are 2026 rates." },
	{ q: "How much does it cost to paint a whole house interior in Clark County?", a: "A full interior repaint in Clark County WA costs $2,200–$4,200 for a 2-bedroom home, $3,200–$6,000 for a 3-bedroom, and $4,800–$9,000 for a 4-bedroom or larger. Price depends on square footage, number of coats, whether trim is included, and the amount of prep work required." },
	{ q: "Does Norbilt provide the paint or do I supply it?", a: "We supply all materials unless you specifically want to supply your own. We use professional-grade Sherwin-Williams or equivalent. If you supply paint, we discount materials from the quote. We do ask that you use a quality interior paint — builder-grade flat paint on walls that get heavy use tends to show wear within a year." },
	{ q: "How long does interior painting take in Clark County?", a: "A single room takes 1 day. A 2-bedroom home takes 3–5 days. A 3-bedroom full interior takes 4–7 days. Timeline depends on number of rooms, how much prep is needed, and whether trim is included. We give you a specific timeline in your written estimate before work starts." },
	{ q: "Do you paint ceilings and trim, or just walls?", a: "We paint everything — walls, ceilings, baseboards, door casing, window trim, interior doors, and closets. Each is quoted separately so you can choose exactly what scope you want. Most homeowners doing a full repaint include walls and ceilings; trim is added when the existing trim paint is peeling, yellowed, or a different sheen than desired." },
	{ q: "What areas in Clark County does Norbilt paint?", a: "We paint interiors throughout Clark County — Vancouver, Camas, Ridgefield, Battle Ground, Washougal, Salmon Creek, Hazel Dell, Felida, Brush Prairie, and surrounding areas. We're a licensed WA general contractor (Lic. NORBI**741CS), not a crew sent by a national franchise." },
];

export default function InteriorPaintingCostClarkCountyWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BlogPosting",
				headline: "Interior Painting Cost in Clark County WA: 2026 Pricing Guide",
				author: { "@id": "https://www.norbilt.com/#founder" },
				publisher: { "@id": "https://www.norbilt.com/#organization" },
				datePublished: "2026-11-02", dateModified: "2026-11-02",
				description: "Real 2026 interior painting costs for Clark County WA — per-room prices, whole-house ranges, and what drives the cost.",
				mainEntityOfPage: "https://www.norbilt.com/blog/interior-painting-cost-clark-county-wa",
			}) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org", "@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
					{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
					{ "@type": "ListItem", position: 3, name: "Interior Painting Cost in Clark County WA", item: "https://www.norbilt.com/blog/interior-painting-cost-clark-county-wa" },
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
							Interior Painting Cost in <span className="text-[#FFB800]">Clark County WA</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">Interior painting in Clark County WA costs $350–$650 per room (walls only) or $575–$1,100 per room for walls, ceiling, and trim. A full 3-bedroom home interior runs $3,200–$6,000 and takes 4–7 days. The biggest cost drivers are prep work, number of coats required, ceiling height, and whether trim is included. All prices are 2026 rates from Norbilt, a licensed Clark County general contractor (WA Lic. NORBI**741CS).</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for every scope — per room, whole house, and component — from a licensed contractor painting in Clark County every week.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Vancouver · Camas · Ridgefield · Battle Ground · Washougal · Salmon Creek</div>
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
							<p>Interior painting in Clark County WA costs <strong>$350–$650 per room for walls only</strong>, or <strong>$3,200–$6,000 for a full 3-bedroom interior</strong>. The range is wide because &ldquo;interior painting&rdquo; covers everything from a single accent wall to a whole-house repaint including trim, doors, and ceilings.</p>
							<p>This guide breaks down real 2026 prices for every scope — per-room, by home size, and by individual component — plus what actually drives the cost up and what you can expect from a professional paint job vs. a rushed one.</p>
							<p>Norbilt is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) serving all of Clark County. Interior painting is one of our core trades — we do it alongside remodels, trim work, and drywall repairs, which means the prep is done right before the brush ever touches the wall.</p>
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
							<p className="text-xs text-gray-400">Prices are 2026 Clark County labor and material rates using professional-grade paint. Primer coats, heavy patching, and vaulted ceilings add cost.</p>
						</section>

						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Cost by Component</h2>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead><tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">Item</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wide">2026 Installed Price</th>
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

						<section className="space-y-8">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">What Drives the Cost</h2>
							<div className="space-y-6">{costDrivers.map((d) => (
								<div key={d.title} className="border-l-4 border-[#FFB800] pl-6 space-y-2">
									<h3 className="text-lg font-black text-[#1F2E2B]">{d.title}</h3>
									<p className="text-gray-600 leading-relaxed">{d.body}</p>
								</div>
							))}</div>
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
							<h2 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tighter">Painting Cost by City</h2>
							<div className="grid sm:grid-cols-2 gap-4">{[
								{ href: "/blog/interior-painting-cost-vancouver-wa", label: "Interior Painting Cost in Vancouver WA" },
								{ href: "/blog/interior-painting-cost-camas-wa", label: "Interior Painting Cost in Camas WA" },
								{ href: "/blog/interior-painting-cost-battle-ground-wa", label: "Interior Painting Cost in Battle Ground WA" },
								{ href: "/blog/interior-painting-cost-ridgefield-wa", label: "Interior Painting Cost in Ridgefield WA" },
								{ href: "/blog/interior-painting-cost-washougal-wa", label: "Interior Painting Cost in Washougal WA" },
								{ href: "/blog/interior-painting-cost-salmon-creek-wa", label: "Interior Painting Cost in Salmon Creek WA" },
							].map((l) => (
								<Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-[#2D5A3D] hover:bg-[#2D5A3D]/5 transition-all group">
									<ArrowRight className="w-4 h-4 text-[#2D5A3D] shrink-0" />
									<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{l.label}</span>
								</Link>
							))}</div>
						</section>

						<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
							<div>
								<p className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] mb-3">Get Your Painting Estimate</p>
								<h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">Ready to See What Your Paint Job Will Cost?</h2>
							</div>
							<p className="text-[#A7C4B5] leading-relaxed">We&apos;ll walk the rooms, assess the prep needed, and send you a written itemized estimate within 3 business days — backed by the <Link href="/remodel-promise" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">Norbilt Remodel Promise</Link>.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">Book Free Walkthrough <ArrowRight className="w-4 h-4" /></Link>
								<a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white transition-all"><Phone className="w-4 h-4" /> (360) 216-9920</a>
							</div>
							<div className="flex flex-wrap gap-4 pt-2">{["Licensed & Bonded · WA Lic. NORBI**741CS", "$1M Liability Insurance", "1-Year Workmanship Warranty", "Serving All of Clark County"].map((item) => (
								<div key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /><span className="text-[#A7C4B5] text-xs font-medium">{item}</span></div>
							))}</div>
						</section>

					</div>
				</article>
			</div>
		</>
	);
}
