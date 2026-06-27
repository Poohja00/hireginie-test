import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ServicesStack from "@/components/ServicesStack";

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
      <ServicesStack />

      {/* Programs */}
      <section className="py-14">
        <div className={wrap}>
          <Reveal className="text-center mb-10">
            <h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-black text-dark">Programs At Hireginie</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "Business Beyond Bias", d: "Creating inclusive workplaces by connecting women talent with meaningful opportunities.", alt: false },
              { t: "Accelerator Program", d: "Fast-track hiring support designed for high-growth startups scaling teams.", alt: true },
            ].map((p, idx) => (
              <Reveal key={p.t} delay={idx * 0.1}>
                <div className={`relative overflow-hidden rounded-3xl p-9 min-h-[220px] flex flex-col justify-end text-white transition-transform hover:-translate-y-1.5 ${p.alt ? "bg-gradient-to-br from-[#3a2a55] to-accent" : "bg-gradient-to-br from-[#2a2540] to-[#363636]"}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
                  <h3 className="relative font-serif text-2xl font-black">{p.t}</h3>
                  <p className="relative opacity-80 my-3 text-sm max-w-[320px]">{p.d}</p>
                  <Link href="/programs" className="relative font-semibold inline-flex items-center gap-1.5 text-sm">Learn More <span>→</span></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center max-w-[560px] mx-auto mb-10">
            <h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-black text-dark">Industries We Serve</h2>
            <p className="text-warm-grey mt-3 text-[15px]">We partner with organizations across 25+ industries to build high-performing teams.</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
            {INDUSTRIES.map((ind, idx) => (
              <Reveal key={ind.n} delay={(idx % 4) * 0.06}>
                <div className="group text-center">
                  <div className="w-[72px] h-[72px] mx-auto mb-3 grid place-items-center rounded-full bg-white border border-black/10 text-2xl transition-all group-hover:-translate-y-1.5 group-hover:bg-accent">{ind.i}</div>
                  <span className="text-[13px] text-warm-grey">{ind.n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14">
        <div className={wrap}>
          <Reveal className="text-center max-w-[560px] mx-auto mb-10">
            <h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-black text-dark">Why Choose Hireginie?</h2>
            <p className="text-warm-grey mt-3 text-[15px]">Your Growth is Our Priority</p>
          </Reveal>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {WHY.map((w, idx) => (
              <Reveal key={w.t} delay={idx * 0.1} className="px-8 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-[32px] h-[32px] grid place-items-center rounded-lg bg-orange-50 text-accent text-lg">{w.i}</span>
                  <h3 className="text-[15px] font-semibold text-dark">{w.t}</h3>
                </div>
                <p className="text-warm-grey text-[14px]">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center max-w-[560px] mx-auto mb-10">
            <h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-black text-dark">What Our Clients Say</h2>
            <p className="text-warm-grey mt-3 text-[15px]">The quality we serve</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {QUOTES.map((q, idx) => (
              <Reveal key={q.n} delay={idx * 0.1}>
                <div className="h-full bg-white border border-black/8 rounded-2xl p-7 transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(20,19,26,0.08)]">
                  <p className="text-[14.5px] text-dark/80 leading-relaxed">&ldquo;{q.q}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5">
                    <span className="w-11 h-11 rounded-full grid place-items-center text-white text-sm font-bold bg-accent">{q.a}</span>
                    <div>
                      <b className="text-sm block text-dark">{q.n}</b>
                      <small className="text-warm-grey text-xs">{q.r}</small>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* CTA */}
      <section className="py-14">
        <div className={wrap}>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl text-center text-white px-6 py-14 max-w-[920px] mx-auto bg-[#363636]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(254,98,42,0.3),transparent_60%)]" />
              <h2 className="relative font-serif text-[clamp(24px,3.4vw,36px)] font-black">Let&apos;s Build Your Next High-Performing Team</h2>
              <p className="relative text-white/70 mt-3 mb-7 text-[15px]">Partner with us for smart, scalable and inclusive hiring solutions.</p>
              <Link href="/contact" className="relative inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-accent-hover hover:-translate-y-0.5 transition-all">Get Started <span>→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
