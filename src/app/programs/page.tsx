import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Programs — Hireginie" };

const DETAILS = [
  { i: "🌸", t: "Inclusive Hiring", d: "Diversity-first sourcing and structured, bias-aware evaluation." },
  { i: "🚀", t: "Rapid Scaling", d: "Dedicated pods to scale teams in weeks, not months." },
  { i: "🎓", t: "Mentorship", d: "Career guidance and upskilling for emerging talent." },
  { i: "📈", t: "Outcome Tracking", d: "Clear metrics on retention, fit, and time-to-hire." },
];

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function Programs() {
  return (
    <>
      <PageHero title="Programs" crumb="Programs" />
      <section className="py-24">
        <div className={wrap}>
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">Programs At Hireginie</h2>
            <p className="text-muted mt-3">Purpose-built programs that go beyond hiring — driving inclusion, speed, and scale.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "Business Beyond Bias", d: "Creating inclusive workplaces by connecting women talent with meaningful opportunities.", cta: "Get Involved", alt: false },
              { t: "Accelerator Program", d: "Fast-track hiring support designed for high-growth startups scaling teams quickly.", cta: "Apply Now", alt: true },
            ].map((p, idx) => (
              <Reveal key={p.t} delay={idx * 0.1}>
                <div className={`relative overflow-hidden rounded-3xl p-9 min-h-[240px] flex flex-col justify-end text-white transition-transform hover:-translate-y-1.5 ${p.alt ? "bg-gradient-to-br from-[#3a2a55] to-accent" : "bg-gradient-to-br from-[#2a2540] to-accent-deep"}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_50%)]" />
                  <h3 className="relative text-2xl font-semibold">{p.t}</h3>
                  <p className="relative opacity-85 my-3 text-sm max-w-[320px]">{p.d}</p>
                  <Link href="/contact" className="relative font-semibold inline-flex items-center gap-1.5">{p.cta} <span>→</span></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">What&apos;s Inside Each Program</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DETAILS.map((d, idx) => (
              <Reveal key={d.t} delay={idx * 0.08}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-7 transition-all hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(74,50,204,0.18)]">
                  <div className="w-12 h-12 grid place-items-center rounded-[14px] bg-gradient-to-br from-accent-soft to-white border border-black/10 text-accent text-xl mb-5">{d.i}</div>
                  <h3 className="text-lg font-semibold mb-2">{d.t}</h3>
                  <p className="text-muted text-sm">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
