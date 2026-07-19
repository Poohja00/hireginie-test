import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ServicesStack from "@/components/ServicesStack";
import ProgramsSection from "@/components/ProgramsSection";
import WhyHireginie from "@/components/WhyHireginie";

const INDUSTRIES = [
  { i: "🏦", n: "BFSI" }, { i: "💻", n: "IT & Software" }, { i: "🏥", n: "Healthcare" },
  { i: "🛒", n: "E-commerce" }, { i: "🥫", n: "FMCG" }, { i: "📡", n: "Telecom" },
  { i: "🏭", n: "Manufacturing" }, { i: "🚚", n: "Logistics" },
];

const QUOTES = [
  { q: "Hireginie feels more like true partners in the hiring journey than an external agency. They take ownership, hustle with intent, and genuinely care about the right outcomes.", n: "Dipesh Jain", r: "Vice President TA- Elevation Capital", a: "DJ" },
  { q: "Recruitment drained my bandwidth until Hireginie stepped in. They felt like part of our team and helped us with our best hires, who are now our backbone.", n: "Pawan Kumar", r: "HR Manager- Deconstruct", a: "PK" },
  { q: "Every hire matters in an early-stage startup. Hireginie respected our constraints, guided us with insights, and still delivered talent that exceeded expectations.", n: "Anurag Dixit", r: "Co-Founder & CEO- CompUp", a: "AD" },
];

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStack />

      <ProgramsSection />

      {/* Industries */}
      <section className="py-14 bg-soft">
        <div className={wrap}>
          <Reveal className="text-center max-w-[560px] mx-auto mb-10">
            <h2 className="font-serif text-[clamp(28px,2.8vw,36px)] font-bold text-dark">Industries We Serve</h2>
            <p className="text-warm-grey mt-3 text-[16px]">We partner with organizations across 25+ industries to build high-performing teams.</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
            {INDUSTRIES.map((ind, idx) => (
              <Reveal key={ind.n} delay={(idx % 4) * 0.06}>
                <div className="group text-center">
                  <div className="w-[72px] h-[72px] mx-auto mb-3 grid place-items-center rounded-full bg-white border border-black/10 text-2xl transition-all group-hover:-translate-y-1.5 group-hover:bg-accent">{ind.i}</div>
                  <span className="text-[14px] text-warm-grey">{ind.n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyHireginie />

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className={wrap}>
          <Reveal className="text-center max-w-[560px] mx-auto mb-10">
            <span className="block font-serif text-dark font-bold text-[16px] mb-2">The Quality We Serve</span>
            <h2 className="font-serif text-[clamp(28px,3.4vw,44px)] font-black text-dark">What Our Client Says</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3 max-w-[980px] mx-auto">
            {QUOTES.map((q, idx) => (
              <Reveal key={q.n} delay={idx * 0.1}>
                <div className="h-full min-h-[300px] bg-[#E7E6FB] rounded-tl-[6px] rounded-tr-[32px] rounded-br-[6px] rounded-bl-[32px] p-6 flex flex-col transition-all hover:-translate-y-1.5">
                  <p className="text-[19px] text-slate leading-relaxed">{q.q}</p>
                  <div className="mt-auto pt-6">
                    <b className="text-[17px] block text-dark">{q.n}</b>
                    <small className="text-slate text-[15px]">{q.r}</small>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}
