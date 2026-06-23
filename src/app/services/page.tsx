import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Services — Hireginie" };

const SERVICES = [
  { i: "🧲", t: "Talent Acquisition", d: "Permanent hiring across technology and non-technology roles." },
  { i: "🎯", t: "Executive Search", d: "Leadership and CXO mandates handled with discretion." },
  { i: "⚙️", t: "RPO Services", d: "Recruiter on demand, embedded with your hiring team." },
  { i: "📑", t: "Contract Staffing", d: "Flexible workforce for short and long-term needs." },
  { i: "📈", t: "Campus Hiring", d: "Early-talent programs and structured fresher drives." },
  { i: "🛡️", t: "Employer of Record", d: "Compliant onboarding, payroll and benefits across India." },
  { i: "📊", t: "Hiring Process", d: "Overview, key services, benefits and CTA in one flow." },
  { i: "✅", t: "Quality & Benefits", d: "Faster turnaround, better fit, measurable outcomes." },
];

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" crumb="Services" />
      <section className="py-24">
        <div className={wrap}>
          <Reveal className="text-center max-w-[680px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">End-to-End Recruitment Solutions</h2>
            <p className="text-muted mt-3">From leadership search to volume hiring — overview, key services, hiring process, benefits and a clear path to get started.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.t} delay={(idx % 4) * 0.08}>
                <div className="group h-full bg-white border border-black/10 rounded-2xl p-7 transition-all hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(74,50,204,0.18)]">
                  <div className="w-12 h-12 grid place-items-center rounded-[14px] bg-gradient-to-br from-accent-soft to-white border border-black/10 text-accent text-xl mb-5">{s.i}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                  <p className="text-muted text-sm">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
