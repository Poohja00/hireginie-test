import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";

const SERVICES = [
  { icon: "🎯", title: "Executive Search", desc: "Leadership and CXO hiring across all domains and levels." },
  { icon: "🧲", title: "Talent Acquisition", desc: "Permanent hiring across technology and non-tech roles." },
  { icon: "⚙️", title: "RPO / Recruiter on Demand", desc: "Dedicated recruiters embedded with your hiring team." },
  { icon: "📄", title: "Employer of Record", desc: "Compliant onboarding and payroll across India." },
];

const INDUSTRIES = [
  { i: "🏦", n: "BFSI" }, { i: "💻", n: "IT & Software" }, { i: "🏥", n: "Healthcare" },
  { i: "🛒", n: "E-commerce" }, { i: "🥫", n: "FMCG" }, { i: "📡", n: "Telecom" },
  { i: "🏭", n: "Manufacturing" }, { i: "🚚", n: "Logistics" },
];

const WHY = [
  { i: "⚡", t: "Tech-Enabled Talent Marketplace", d: "AI-powered matching for the right talent, faster." },
  { i: "🎓", t: "Domain Expertise for All", d: "Industry specialists who understand your hiring needs." },
  { i: "🌍", t: "Diverse Talent Pool", d: "Strong inclusive hiring practices for a better tomorrow." },
];

const QUOTES = [
  { q: "Hireginie feels more like true partners in the hiring journey than an external agency. They take ownership, hustle with intent, and genuinely care about the right outcomes.", n: "Dipesh Jain", r: "Vice President TA · Elevation Capital", a: "DJ" },
  { q: "Recruitment drained my bandwidth until Hireginie stepped in. They felt like part of our team and helped us with our best hires, who are now our backbone.", n: "Pawan Kumar", r: "HR Manager · Deconstruct", a: "PK" },
  { q: "Every hire matters in an early-stage startup. Hireginie respected our constraints, guided us with insights, and still delivered talent that exceeded expectations.", n: "Anurag Dixit", r: "Co-Founder & CEO · CompUp", a: "AD" },
];

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Services */}
      <section className="py-24">
        <div className={wrap}>
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">End-to-End Recruitment Solutions</h2>
            <p className="text-muted mt-3">Comprehensive hiring solutions tailored to your business needs.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.08}>
                <div className="group h-full bg-white border border-black/10 rounded-2xl p-7 transition-all hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(74,50,204,0.18)] hover:border-transparent">
                  <div className="w-12 h-12 grid place-items-center rounded-[14px] bg-gradient-to-br from-accent-soft to-white border border-black/10 text-accent text-xl mb-5 transition-transform group-hover:scale-110 group-hover:-rotate-3">{s.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="pb-24">
        <div className={wrap}>
          <Reveal className="text-center mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">Programs At Hireginie</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "Business Beyond Bias", d: "Creating inclusive workplaces by connecting women talent with meaningful opportunities.", alt: false },
              { t: "Accelerator Program", d: "Fast-track hiring support designed for high-growth startups scaling teams.", alt: true },
            ].map((p, idx) => (
              <Reveal key={p.t} delay={idx * 0.1}>
                <div className={`relative overflow-hidden rounded-3xl p-9 min-h-[240px] flex flex-col justify-end text-white transition-transform hover:-translate-y-1.5 ${p.alt ? "bg-gradient-to-br from-[#3a2a55] to-accent" : "bg-gradient-to-br from-[#2a2540] to-accent-deep"}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_50%)]" />
                  <h3 className="relative text-2xl font-semibold">{p.t}</h3>
                  <p className="relative opacity-85 my-3 text-sm max-w-[320px]">{p.d}</p>
                  <Link href="/programs" className="relative font-semibold inline-flex items-center gap-1.5">Learn More <span>→</span></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">Industries We Serve</h2>
            <p className="text-muted mt-3">We partner with organizations across 25+ industries to build high-performing teams.</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
            {INDUSTRIES.map((ind, idx) => (
              <Reveal key={ind.n} delay={(idx % 4) * 0.06}>
                <div className="group text-center">
                  <div className="w-[76px] h-[76px] mx-auto mb-3 grid place-items-center rounded-full bg-white border border-black/10 text-2xl transition-all group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:bg-accent">{ind.i}</div>
                  <span className="text-[13px] text-muted">{ind.n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24">
        <div className={wrap}>
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">Why Choose Hireginie?</h2>
            <p className="text-muted mt-3">Your Growth is Our Priority</p>
          </Reveal>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {WHY.map((w, idx) => (
              <Reveal key={w.t} delay={idx * 0.1} className="px-8 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-[30px] h-[30px] grid place-items-center rounded-lg bg-accent-soft text-accent">{w.i}</span>
                  <h3 className="text-lg font-semibold">{w.t}</h3>
                </div>
                <p className="text-muted text-[14.5px]">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">What Our Clients Say</h2>
            <p className="text-muted mt-3">The quality we serve</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {QUOTES.map((q, idx) => (
              <Reveal key={q.n} delay={idx * 0.1}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-7 transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(20,19,26,0.08)]">
                  <p className="text-[14.5px] text-[#2a2933]">&ldquo;{q.q}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5">
                    <span className="w-11 h-11 rounded-full grid place-items-center text-white font-semibold bg-gradient-to-br from-accent to-accent-2">{q.a}</span>
                    <div>
                      <b className="text-sm block">{q.n}</b>
                      <small className="text-muted text-xs">{q.r}</small>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-10 pb-24">
        <div className={wrap}>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl text-center text-white px-6 py-14 max-w-[920px] mx-auto bg-gradient-to-br from-[#1a1726] to-accent-deep">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,115,255,0.5),transparent_60%)]" />
              <h2 className="relative text-[clamp(24px,3.6vw,34px)] font-semibold">Let&apos;s Build Your Next High-Performing Team</h2>
              <p className="relative opacity-85 mt-2.5 mb-6">Partner with us for smart, scalable and inclusive hiring solutions.</p>
              <Link href="/contact" className="relative inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-deep text-white font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(107,78,255,0.4)]">Get Started <span>→</span></Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
