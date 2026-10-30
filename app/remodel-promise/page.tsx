import Link from "next/link";
import {
	ArrowRight,
	Phone,
	CheckCircle2,
	Clock,
	Shield,
	Wrench,
	Camera,
	MessageSquare,
	FileText,
	Home,
	Star,
} from "lucide-react";

const beforePromises = [
	{
		num: "1",
		icon: Phone,
		title: "We answer.",
		body: "You'll hear back within one business day of reaching out, by phone or text. If we're ever running late to an appointment, you'll get a text before the start time, not after.",
	},
	{
		num: "2",
		icon: FileText,
		title: "Your written estimate in 3 business days.",
		body: "After the walkthrough, you get an itemized estimate within 3 business days. Every line is priced, and nothing is left vague.",
	},
	{
		num: "3",
		icon: Shield,
		title: "No surprises in the price.",
		body: "Your estimate includes a clear "Not included" section and stated allowances for things you'll pick out, like tile and fixtures. You'll know exactly what's covered before you sign.",
	},
	{
		num: "4",
		icon: CheckCircle2,
		title: "No pressure.",
		body: "We don't require both homeowners at the estimate, we don't do high-pressure sales, and we won't spam-call you if you decide to go another way.",
	},
];

const duringPromises = [
	{
		num: "5",
		icon: Home,
		title: "You deal with the owner.",
		body: "Drey, NORBILT's owner, is your single point of contact from the first walkthrough to the final walkthrough, and he's on site throughout your project.",
	},
	{
		num: "6",
		icon: Camera,
		title: "Weekly photo updates.",
		body: "Every week you get progress photos and next week's plan by text or email, whether you're home or not.",
	},
	{
		num: "7",
		icon: FileText,
		title: "No extra charges without your signature.",
		body: "If something changes — whether it's your idea or something we find behind a wall — you get a written price first. No work happens until you sign it.",
	},
	{
		num: "8",
		icon: Home,
		title: "We protect your home.",
		body: "Floors and walkways are covered, dust walls or zip doors seal off the work area, and the site is cleaned up at the end of every day.",
	},
	{
		num: "9",
		icon: Wrench,
		title: "We test before we close it up.",
		body: "All new plumbing is pressure-tested before walls, floors, or tile go over it.",
	},
];

const afterPromises = [
	{
		num: "10",
		icon: CheckCircle2,
		title: "You don't pay the final bill until it's right.",
		body: "We walk the finished job together and write down every item that needs attention. Final payment isn't due until that list is complete and you've signed off.",
	},
	{
		num: "11",
		icon: Star,
		title: "We stand behind it.",
		body: "Every job is covered by our 1-year workmanship warranty.",
	},
];

function PromiseCard({ num, icon: Icon, title, body }: { num: string; icon: React.ElementType; title: string; body: string }) {
	return (
		<div className="flex gap-6 group">
			<div className="shrink-0 flex flex-col items-center gap-2">
				<div className="w-12 h-12 rounded-2xl bg-[#FFB800] flex items-center justify-center shadow-md">
					<Icon className="w-5 h-5 text-black" />
				</div>
				<span className="text-xs font-black text-[#FFB800]/40 tabular-nums">{num}</span>
			</div>
			<div className="pt-1">
				<h3 className="font-black text-[#1F2E2B] text-lg mb-2 leading-snug">{title}</h3>
				<p className="text-gray-600 leading-relaxed">{body}</p>
			</div>
		</div>
	);
}

function PhaseHeader({ label, description }: { label: string; description: string }) {
	return (
		<div className="mb-10">
			<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-xs">{label}</span>
			<p className="text-sm text-gray-500 mt-1">{description}</p>
		</div>
	);
}

export default function RemodelPromisePage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO */}
			<section className="pt-36 pb-20 bg-[#1F2E2B]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<span className="inline-block px-4 py-1.5 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded mb-6">
						In Writing
					</span>
					<h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-6">
						The NORBILT<br />
						<span className="text-[#FFB800]">Remodel Promise</span>
					</h1>
					<p className="text-xl text-white/80 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6 mb-10">
						Your kitchen or bathroom remodel, in writing: the price, the schedule, and how we'll treat your home.
					</p>
					<p className="text-[#A7C4B5] leading-relaxed max-w-2xl mb-10">
						Most remodel horror stories aren't about bad tile. They're about calls that never get returned, quotes that grow halfway through, and nobody in charge when something goes wrong. So we put our standards in writing. Every NORBILT remodel in Clark County comes with these promises.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
					>
						Book Your Free Remodel Walkthrough
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>

			{/* PROMISE STRIP */}
			<section className="py-4 bg-[#FFB800]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<p className="font-black text-black text-sm uppercase tracking-widest">
						11 Written Commitments · Every Kitchen &amp; Bath Remodel · Clark County, WA
					</p>
				</div>
			</section>

			{/* PROMISES */}
			<section className="py-24">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-20">

					{/* Before we start */}
					<div>
						<PhaseHeader
							label="Before We Start"
							description="What you can expect before any work begins."
						/>
						<div className="space-y-10">
							{beforePromises.map((p) => (
								<PromiseCard key={p.num} {...p} />
							))}
						</div>
					</div>

					<div className="border-t border-gray-100" />

					{/* While we work */}
					<div>
						<PhaseHeader
							label="While We Work"
							description="How we run the job once it starts."
						/>
						<div className="space-y-10">
							{duringPromises.map((p) => (
								<PromiseCard key={p.num} {...p} />
							))}
						</div>
					</div>

					<div className="border-t border-gray-100" />

					{/* When we finish */}
					<div>
						<PhaseHeader
							label="When We Finish"
							description="How we close out every project."
						/>
						<div className="space-y-10">
							{afterPromises.map((p) => (
								<PromiseCard key={p.num} {...p} />
							))}
						</div>
					</div>
				</div>
			</section>

			{/* SUMMARY BOX */}
			<section className="py-16 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<div className="bg-[#1F2E2B] rounded-3xl p-10 md:p-14">
						<h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">
							Every Remodel. Every Time.
						</h2>
						<ul className="space-y-4">
							{[
								"Itemized written estimate within 3 business days, with a "Not included" section and stated allowances",
								"No extra work or cost without a signed, written change order",
								"Drey, the owner, is your single point of contact and is on site throughout",
								"Weekly progress photos and next week's plan",
								"Floor protection, dust containment, and daily cleanup",
								"New plumbing pressure-tested before walls and tile close",
								"Final walkthrough and signed punch list before final payment",
								"1-year workmanship warranty",
							].map((item) => (
								<li key={item} className="flex items-start gap-3">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
									<span className="text-[#A7C4B5] leading-relaxed">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-white text-center">
				<div className="max-w-3xl mx-auto px-6 space-y-6">
					<p className="text-[#2D5A3D] font-black uppercase tracking-widest text-xs">
						Ready to Talk About Your Kitchen or Bathroom?
					</p>
					<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
						Book a Free Walkthrough
					</h2>
					<p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
						We'll walk the space, scope the project, and send your itemized estimate within 3 business days — backed by everything on this page.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg"
						>
							Get My Free Estimate <ArrowRight className="w-4 h-4" />
						</Link>
						<a
							href="tel:+13602169920"
							className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:border-[#1F2E2B] transition-all"
						>
							<Phone className="w-4 h-4" /> (360) 216-9920
						</a>
					</div>
					<p className="text-gray-400 text-xs pt-2">
						Licensed, bonded and insured in Washington · WA Lic. NORBI**741CS
					</p>
				</div>
			</section>

			<section className="py-6 bg-[#14201D] text-center text-xs font-black text-[#A7C4B5] uppercase tracking-[0.4em] px-4">
				WA General Contractor #NORBI**741CS · Serving Vancouver &amp; Clark County
			</section>
		</div>
	);
}
