import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Phone, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "How to Hire a Licensed Remodeling Contractor in Clark County WA | NORBILT",
	description:
		"Step-by-step guide to hiring a licensed remodeling contractor in Clark County WA. How to verify licenses, what to check before signing, and red flags to avoid — from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/how-to-hire-licensed-remodeling-contractor-clark-county-wa",
	},
	openGraph: {
		title: "How to Hire a Licensed Remodeling Contractor in Clark County WA | NORBILT",
		description:
			"How to verify WA contractor licenses, what to check before signing, and red flags to watch for in Clark County.",
		url: "https://www.norbilt.com/blog/how-to-hire-licensed-remodeling-contractor-clark-county-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const steps = [
	{
		num: "01",
		title: "Verify the Washington State Contractor License",
		body: `Washington State requires all general contractors to hold a current license from L&I (Labor and Industries). This license proves the contractor carries workers' compensation insurance and a $12,000 bond — protecting you if work is abandoned, substandard, or causes property damage.

How to verify: Go to the L&I Contractor Verify tool at lni.wa.gov and search by business name or UBI number. The result shows whether the license is current, the expiration date, whether the bond and insurance are active, and any formal complaints or violations on file.

A contractor who won't give you their license number has a reason. Always verify before inviting anyone to walk your home.`,
	},
	{
		num: "02",
		title: "Check the Bond and Insurance Status — Not Just the License",
		body: `A license in "Active" status doesn't automatically mean the bond and insurance are current. Washington contractors can let these lapse while keeping the license registration active.

What to check:
— Bond: Should be $12,000 minimum for a general contractor license. Some specialty contractors carry higher bonds.
— Liability insurance: Separate from the bond. Ask for a certificate of insurance showing your job address as the covered location, not just a copy of the policy page.
— Workers' comp: If the contractor has employees, they must carry workers' comp. If a worker is injured on your property without it, you can be held liable as the property owner.

On the L&I Verify page, look for "Bond Status: Active" and "Worker's Comp: Reported." A "Not Reported" workers' comp status means they have no employees — which may be fine for a one-person shop, but ask directly.`,
	},
	{
		num: "03",
		title: "Read Permits Before You Commit",
		body: `A kitchen or bathroom remodel in Clark County typically requires a permit if it includes:
— Moving or adding plumbing (new drain, supply line relocation)
— Electrical work beyond fixture swap (new circuits, panel work)
— Structural changes (wall removal, window enlargement)
— Mechanical changes (new exhaust, HVAC)

A contractor who suggests skipping permits is protecting themselves, not you. Un-permitted work can:
— Void your homeowner's insurance for related claims
— Become a disclosure issue when you sell (Clark County requires sellers to disclose known un-permitted work)
— Require expensive tear-out if discovered during inspection or appraisal

Ask every contractor: "Will this scope require a permit? Who pulls it and who pays for it?" The answer should be: the contractor pulls it, it's included in the bid.`,
	},
	{
		num: "04",
		title: "Get a Written Scope, Not Just a Price",
		body: `"We'll remodel your bathroom for $8,000" is not a contract. Before you sign anything, the written scope should specify:

— Exact tile brand, line, or material (not just "ceramic tile, owner's choice")
— Fixtures by model number or minimum specification
— Vanity: stock vs semi-custom, with stated dimensions
— What demolition and disposal is included
— Whether subfloor repair is included or billed as an add-on
— What happens if moisture damage is found (is remediation included, or does it trigger an additional cost?)
— Payment schedule: never pay more than 30% upfront for a residential project

A contractor who can't or won't write this out is one who will upsell you during the project.`,
	},
	{
		num: "05",
		title: "Check Reviews — Specifically for Your Project Type",
		body: `A contractor with 50 flooring reviews is not the same as a contractor with 50 bathroom remodel reviews. Look for reviews that mention:

— Project type matching yours (kitchen remodel, bathroom gut, not just "great work")
— Timeline and communication, not just final outcome
— How problems were handled, not just whether there were problems
— Reviewer history: one-review accounts left the same week are a weak signal

For a $10,000+ project, ask for two references from projects similar to yours — not just a list of happy customers, but homeowners you can call. Ask them: "Were there surprises? How were they handled? Would you use them again?"`,
	},
	{
		num: "06",
		title: "Get Three Bids — But Compare Line Items, Not Totals",
		body: `Three bids for a bathroom remodel in Clark County might come back as $6,000, $9,000, and $14,000. The instinct is to pick the middle. The right move is to find out why they're different.

Common reasons for a low bid:
— Tile not included (expect owner-supply allowances that often run over)
— Subfloor repair excluded ("additional work billed at time and materials")
— No permit pulled (off-the-books savings they keep, risk you absorb)
— Workers' comp not paid (lower labor cost, you're the insurance backstop)

Common reasons for a high bid:
— Longer warranty and full scope documentation
— Premium tile and fixture specifications
— Established timeline commitments with a penalty clause
— Permit fees included, not added as a change order

The right question isn't "which is cheapest?" — it's "what is each contractor including and guaranteeing?"`,
	},
	{
		num: "07",
		title: "Review the Contract Before Signing",
		body: `A residential remodeling contract in Washington should include:

— Licensed contractor name and WA license number
— Scope of work — specific, not general
— Material specifications (as described in step 04)
— Payment schedule (milestone-based, not time-based)
— Start date and estimated completion date
— Change order process: any change to scope must be signed in writing before work proceeds
— Warranty terms: Washington State requires a written warranty for residential contractor work; 1 year on workmanship is standard, 2 years is better
— Lien release: contractor should provide a lien release on final payment

If a contractor presents a one-page form with a signature line and a total price, ask for a full contract. If they can't provide one, walk.`,
	},
];

const redFlags = [
	"Won't provide WA license number when asked",
	"Asks for more than 50% upfront payment",
	'Suggests skipping permits "to save money"',
	"Gives a verbal estimate only — nothing in writing",
	"Can't provide a certificate of insurance",
	"No physical business address (just a phone number or P.O. box)",
	'Unusually low bid with vague scope — "tile not included," "subfloor extra"',
	"Pressures you to decide the same day",
	"Uses crew without identifying them as employees or licensed subs",
	"Can't provide references from projects similar to yours",
];

const faqs = [
	{
		q: "How do I verify a contractor's license in Clark County WA?",
		a: "Go to lni.wa.gov and use the Contractor Verify tool. Search by the contractor's business name or UBI number. The result shows the license status, expiration date, bond status, insurance status, and any formal complaints. Clark County itself doesn't issue contractor licenses — all general contractor licenses come from Washington State L&I.",
	},
	{
		q: "What licenses does a remodeling contractor need in Washington State?",
		a: "A general contractor license from L&I (Labor and Industries) covers most remodeling work including kitchens, bathrooms, additions, and structural work. Electrical work requires a separate electrical contractor license. Plumbing work typically requires a licensed plumber as a subcontractor. HVAC work requires a specialty contractor endorsement. Ask any contractor to clarify who holds the specific licenses for each trade in your project.",
	},
	{
		q: "What permits are required for a kitchen or bathroom remodel in Clark County?",
		a: "Clark County requires permits for any remodel that involves moving or adding plumbing, electrical work beyond fixture swaps, structural changes (wall removal, window enlargement), or mechanical changes. A cosmetic remodel — new tile in the same location, vanity swap, fixture replacement without moving supply lines — often doesn't require a permit. Your contractor should advise on permit requirements and include permit fees in the bid.",
	},
	{
		q: "How much should I pay upfront for a remodeling project in Clark County?",
		a: "Washington State doesn't cap upfront payments for residential remodels, but 25–30% is standard for projects over $10,000. Never pay more than 50% upfront for any residential project. Payments should be milestone-based: a portion at contract signing, at demolition, at rough-in completion, and at final walkthrough. Avoid contractors who require full payment before starting or before any materials arrive on site.",
	},
	{
		q: "Can an unlicensed contractor work on my home in Washington State?",
		a: "Washington State law (RCW 18.27) requires anyone performing construction work for compensation to be licensed if the project exceeds $500. Hiring an unlicensed contractor exposes you to several risks: no bond protection if work is abandoned, potential homeowner insurance coverage gaps, liability for worker injuries on your property, and un-permitted work that must be disclosed at sale. If a contractor can't provide a WA license number you can verify on lni.wa.gov, don't hire them.",
	},
];

export default function HireContractorGuide() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "How to Hire a Licensed Remodeling Contractor in Clark County WA",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-09-28",
						dateModified: "2026-09-28",
						description:
							"Step-by-step guide to hiring a licensed remodeling contractor in Clark County WA — how to verify licenses, what to put in a contract, and red flags to avoid.",
						mainEntityOfPage: "https://www.norbilt.com/blog/how-to-hire-licensed-remodeling-contractor-clark-county-wa",
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
							{ "@type": "ListItem", position: 3, name: "How to Hire a Licensed Remodeling Contractor in Clark County WA", item: "https://www.norbilt.com/blog/how-to-hire-licensed-remodeling-contractor-clark-county-wa" },
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
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "HowTo",
						name: "How to Hire a Licensed Remodeling Contractor in Clark County WA",
						description: "Seven steps to verify, vet, and hire a licensed remodeling contractor in Clark County WA — before a single dollar changes hands.",
						step: [
							{
								"@type": "HowToStep",
								position: 1,
								name: "Verify the Washington State Contractor License",
								text: "Go to lni.wa.gov and use the Contractor Verify tool. Search by business name or UBI number. Confirm the license is Active, not expired. A contractor who won't provide their license number has a reason — always verify before proceeding.",
							},
							{
								"@type": "HowToStep",
								position: 2,
								name: "Check Bond and Insurance Status",
								text: "An Active license doesn't guarantee the bond and insurance are current. On the L&I Verify page, confirm Bond Status is Active and ask for a certificate of general liability insurance listing your job address.",
							},
							{
								"@type": "HowToStep",
								position: 3,
								name: "Understand What Permits Are Required",
								text: "A kitchen or bathroom remodel in Clark County requires a permit if it includes moving plumbing, adding electrical circuits, or structural changes. Ask the contractor whether a permit is required and confirm permit fees are included in the bid.",
							},
							{
								"@type": "HowToStep",
								position: 4,
								name: "Get a Written Scope, Not Just a Price",
								text: "Before signing, the written scope must specify exact materials, fixture specifications, what demolition is included, and what happens if moisture damage is found. A price without a scope is not a contract.",
							},
							{
								"@type": "HowToStep",
								position: 5,
								name: "Check Reviews for Your Project Type",
								text: "Look for reviews that mention your specific project type — kitchen remodel, bathroom gut, not just 'great work.' Ask for two references from similar projects and call them.",
							},
							{
								"@type": "HowToStep",
								position: 6,
								name: "Get Three Bids and Compare Line Items",
								text: "Compare what each bid includes, not just the total. A low bid often excludes tile, subfloor repair, or permits. Ask every contractor what is and isn't included in their number.",
							},
							{
								"@type": "HowToStep",
								position: 7,
								name: "Review the Contract Before Signing",
								text: "The contract must include the contractor's WA license number, scope of work, material specifications, milestone-based payment schedule, start and completion dates, change order process, and warranty terms. If a contractor presents a one-page form with only a total, ask for a full contract.",
							},
						],
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								<ShieldCheck className="w-3 h-3" /> Clark County WA
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Hiring Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							How to Hire a Licensed Remodeling Contractor in Clark County WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							Seven steps to protect yourself — from license verification through contract review —
							before a single dollar changes hands.
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

				{/* INTRO */}
				<section className="py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
					<p className="text-lg text-gray-700 leading-relaxed mb-6">
						Clark County has hundreds of contractors who will show up for a free estimate and give you a number.
						Most are good. Some will disappear after the deposit. A few will do work that fails inspection,
						voids your insurance, or needs to be torn out before you can sell.
					</p>
					<p className="text-gray-600 leading-relaxed mb-6">
						The difference between the good ones and the rest usually shows up in the licensing check,
						the written scope, and the contract — before any work starts. This guide walks you through
						each step, with Washington-specific detail for Clark County homeowners.
					</p>
					<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6">
						<p className="text-sm font-bold text-[#2D5A3D] uppercase tracking-widest mb-2">NORBILT Disclosure</p>
						<p className="text-gray-600 text-sm leading-relaxed">
							We're NORBILT — a licensed remodeling contractor in Clark County (WA Lic. NORBI**741CS).
							This guide is written from our experience working in this market, and it applies to evaluating
							any contractor — including us. If we can't answer these questions about our own work,
							you shouldn't hire us either.
						</p>
					</div>
				</section>

				{/* STEPS */}
				<section className="pb-16 lg:pb-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
						{steps.map((step, i) => (
							<div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
								<div className="bg-[#1F2E2B] px-6 py-4 flex items-center gap-4">
									<span className="text-[#FFB800] font-black text-xl">{step.num}</span>
									<h2 className="font-black text-white text-lg leading-snug">{step.title}</h2>
								</div>
								<div className="px-6 py-5">
									{step.body.split("\n\n").map((para, j) => (
										<p key={j} className="text-gray-600 leading-relaxed mb-3 last:mb-0 whitespace-pre-line">
											{para}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* RED FLAGS */}
				<section className="py-16 lg:py-20 bg-red-50 border-y border-red-100">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<div className="flex items-center gap-3 mb-6">
							<AlertTriangle className="w-6 h-6 text-red-500" />
							<h2 className="text-2xl font-black text-[#1F2E2B]">Red Flags — Walk Away If You See These</h2>
						</div>
						<div className="grid sm:grid-cols-2 gap-3">
							{redFlags.map((flag, i) => (
								<div key={i} className="flex gap-3 bg-white border border-red-100 rounded-xl p-4">
									<AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
									<p className="text-gray-700 text-sm">{flag}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CHECKLIST */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Before You Sign: Quick Checklist</h2>
						<p className="text-gray-600 mb-8">Run through this before signing any remodeling contract in Clark County.</p>
						<div className="space-y-3">
							{[
								"Verified WA contractor license on lni.wa.gov — status is Active",
								"Bond status is Active on L&I Verify",
								"Received certificate of insurance listing my property address",
								"Confirmed who pulls the permit and that fees are included in the bid",
								"Have written scope with material specifications — not just totals",
								"Payment schedule is milestone-based; upfront is 30% or less",
								"Contract includes start date and estimated completion date",
								"Change order process is in writing — no verbal approvals",
								"Warranty terms are documented (1 year minimum on workmanship)",
								"Asked for and called at least one reference from a similar project",
							].map((item, i) => (
								<div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
									<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] flex-shrink-0 mt-0.5" />
									<p className="text-gray-700 text-sm">{item}</p>
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
								{ label: "Home Remodeling Service", href: "/remodeling" },
								{ label: "Kitchen Remodel Service", href: "/services/kitchen-remodel" },
								{ label: "Bathroom Remodel Service", href: "/services/bathroom-remodel" },
								{ label: "Kitchen Remodel Cost — Clark County", href: "/blog/kitchen-remodel-cost-clark-county-wa" },
								{ label: "Bathroom Remodel Cost — Clark County", href: "/blog/bathroom-remodel-cost-clark-county-wa" },
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
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">Frequently Asked Questions</h2>
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
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">WA Lic. NORBI**741CS · Clark County Since 2019</p>
						<h2 className="text-3xl font-black text-white">We&apos;ll Bring Everything on This List</h2>
						<p className="text-gray-300 leading-relaxed">
							When you request an estimate from NORBILT, you&apos;ll get a verifiable license number,
							a certificate of insurance, a written scope, and a full contract before anything starts.
							That&apos;s the floor, not the feature.
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
