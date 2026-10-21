"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Domine } from "next/font/google";

const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const hd = { fontFamily: domine.style.fontFamily };

const TITLE = "text-center text-[clamp(26px,3vw,36px)] font-semibold text-[#14070a]";
const SUB = "mt-3 text-center text-[16px] text-[#5a4a4d]";
const CARD = "rounded-2xl bg-white shadow-[0_10px_40px_rgba(120,30,50,0.09)] ring-1 ring-black/[0.04]";

const SERVICES = [
  { t: "Executive Hiring & Search", d: "Leadership hiring for critical and senior-level roles" },
  { t: "Talent Acquisition", d: "Permanent hiring across domains and experience levels" },
  { t: "Recruitment on Demand", d: "Flexible recruitment support when and where you need it" },
  { t: "Employer of Record", d: "Hire and manage talent without setting up a local entity" },
  { t: "POSH Compliance", d: "Building compliant, safe, and inclusive workplaces" },
];

const PROGRAMS = [
  {
    tag: "BBBP",
    t: "Business Beyond Bias Program",
    d: "Creating inclusive pathways through recruitment training, mentorship and partner opportunities.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop",
  },
  {
    tag: "Accelerator",
    t: "3-Month Recruitment Program",
    d: "Intensive training, real-world learning and mentorship to help you build a strong career in recruitment.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
  },
];

const QUOTES = [
  { n: "Pawan Kumar", r: "HR Manager, Deconstruct", q: "Recruitment drained my bandwidth until Hireginie stepped in. They felt like part of our team and helped us with our best hires, who are now our backbone." },
  { n: "Dipesh Jain", r: "Vice President TA, Elevation Capital", q: "Hireginie feels more like true partners in the hiring journey than an external agency. They take ownership, hustle with intent, and genuinely care about achieving the right outcomes." },
  { n: "Anurag Dixit", r: "Co Founder & CEO, CompUp", q: "Every hire matters in an early stage startup. Hireginie respected our constraints, guided us with insights, and still delivered talent that exceeded expectations." },
];

const rise = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.08, duration: 0.55 },
});

export function HomeServices() {
  return (
    <section className="bg-white pb-12 pt-12">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <h2 style={hd} className={TITLE}>How We Help You Hire</h2>
        <p className={SUB}>Comprehensive hiring solutions tailored to your business needs</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <motion.div key={s.t} {...rise(i)}>
              <Link href="/services" className={`group flex h-full min-h-[190px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(179,32,63,0.18)] ${CARD}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 style={hd} className="text-[18px] font-semibold leading-snug text-[#14070a]">{s.t}</h3>
                  <span className="text-[#c0344f] transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                </div>
                <p className="mt-8 text-[14px] leading-relaxed text-[#5a4a4d]">{s.d}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePrograms() {
  return (
    <section className="bg-white pb-12 pt-12">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <h2 style={hd} className={TITLE}>Talent Development Programs</h2>
        <p className={SUB}>Building talent. Creating opportunities.</p>
        <div className="mx-auto mt-12 grid max-w-[1100px] gap-6 lg:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <motion.div key={p.tag} {...rise(i)}>
              <div className={`flex h-full overflow-hidden ${CARD}`}>
                {/* TODO-CLEANUP: gray placeholder on purpose, swap for the program illustration (p.img holds the old stock photo) */}
                <div className="hidden w-[38%] bg-[#e4e4e7] sm:block" aria-hidden />
                <div className="flex flex-1 flex-col justify-center p-7">
                  <h3 style={hd} className="text-[24px] font-semibold text-[#14070a]">{p.tag}</h3>
                  <p style={hd} className="mt-5 text-[16px] font-medium text-[#14070a]">{p.t}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#5a4a4d]">{p.d}</p>
                  <Link href="/programs" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#b3203f] transition-all hover:gap-3">
                    Learn More <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonials() {
  return (
    <section className="bg-white pb-24 pt-12">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <h2 style={hd} className={TITLE}>Trusted by Growing Teams</h2>
        <p className={SUB}>The Quality We Serve</p>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.div key={q.n} {...rise(i)}>
              <div className="flex items-start gap-4">
                <span className="grid h-[84px] w-[84px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f6a3ae] to-[#c0344f] text-[28px] font-semibold text-white" style={hd}>
                  {q.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div className="min-w-0 flex-1 pt-8">
                  <div className="flex items-center justify-between gap-2">
                    <b className="truncate text-[15px] font-bold text-[#14070a]">{q.n}</b>
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-[4px] border border-[#14070a] text-[9px] font-bold text-[#14070a]" aria-hidden>in</span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#5a4a4d]">{q.r}</p>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-[#3d2a2e]">{q.q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
