import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About Us — Hireginie" };

const STATS = [
  { b: "120+", s: "Closures completed" },
  { b: "50+", s: "Clients" },
  { b: "25+", s: "Industries" },
  { b: "15+", s: "Domain Experts" },
];

const DIFF = [
  { i: "🤖", t: "AI-Powered Talent Marketplace", d: "We combine human expertise with technology to connect businesses and talent faster, smarter, and more efficiently." },
  { i: "📊", t: "Strategic Talent Advisory", d: "We go beyond recruitment with market insights, hiring intelligence, and workforce strategies for long-term growth." },
  { i: "🎯", t: "Industry-Specialized Expertise", d: "Our recruiters understand the unique talent needs of different industries to identify the right talent with precision." },
  { i: "⚡", t: "Speed Without Compromise", d: "Through streamlined processes and an extensive talent network, we deliver quality candidates quickly." },
];

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function About() {
  return (
    <>
      <PageHero title="About Us" crumb="About Us" />

      <section className="py-24">
        <div className={`${wrap} grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center`}>
          <Reveal>
            <div className="relative aspect-[4/3]">
              <div className="absolute right-0 top-0 w-[55%] h-[60%] rounded-2xl bg-soft border border-black/10" />
              <div className="absolute left-0 bottom-0 w-[62%] h-[70%] rounded-2xl bg-gradient-to-br from-accent to-accent-2" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-accent">About Hireginie</span>
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold mt-3 mb-4">Your fastest way to gain Hiring Success</h2>
            <p className="text-muted mb-3.5 text-[15px]">At Hireginie we enable organizations to streamline recruitment, reduce time-to-fill, and focus on strategic growth.</p>
            <p className="text-muted mb-3.5 text-[15px]">As a tech-enabled Talent Search Partner, we integrate all elements of the talent ecosystem to deliver precise, scalable hiring outcomes.</p>
            <p className="text-muted text-[15px]">By combining intelligent technology with deep domain expertise, Hireginie addresses key inefficiencies in traditional recruitment models — delivering results across industries, roles and geographies.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">Company Overview</h2>
            <p className="text-muted mt-3">Streamline recruitment, reduce time-to-fill, and focus on strategic growth.</p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((s, idx) => (
              <Reveal key={s.s} delay={idx * 0.08}>
                <b className="block text-[clamp(34px,5vw,52px)] font-bold leading-none">{s.b}</b>
                <span className="text-muted text-sm mt-2 block">{s.s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className={`${wrap} grid md:grid-cols-2 gap-6`}>
          {[
            { e: "Our", t: "Mission", d: "Deliver strategic talent solutions that help organizations build high-performing teams and achieve sustainable growth. Transform hiring through an AI-first, technology-enabled marketplace that drives speed, precision, and quality." },
            { e: "Our", t: "Vision", d: "Build the most trusted tech-enabled talent marketplace for businesses, talent, and partners — creating a future where opportunity is inclusive, accessible, and driven by the power of technology." },
          ].map((m, idx) => (
            <Reveal key={m.t} delay={idx * 0.1}>
              <div className="bg-soft rounded-[18px] p-9 h-full">
                <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-accent">{m.e}</span>
                <h3 className="text-2xl font-semibold mb-3.5">{m.t}</h3>
                <p className="text-muted text-[15px]">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">What Makes Us Different</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIFF.map((d, idx) => (
              <Reveal key={d.t} delay={idx * 0.08}>
                <div className="group h-full bg-white border border-black/10 rounded-2xl p-7 transition-all hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(74,50,204,0.18)]">
                  <div className="w-12 h-12 grid place-items-center rounded-[14px] bg-gradient-to-br from-accent-soft to-white border border-black/10 text-accent text-xl mb-5">{d.i}</div>
                  <h3 className="text-lg font-semibold mb-2">{d.t}</h3>
                  <p className="text-muted text-sm">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
