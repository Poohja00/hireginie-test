"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Domine } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, ArrowRight02Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";

const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const hd = { fontFamily: domine.style.fontFamily };

// Desktop (lg and up) sizes come from the .hm-* rules in globals.css (measured from the 1086px design).
// The Tailwind classes here are the phone and tablet layout.
const RED = "#b93743";
const TITLE = "hm-h2 text-center text-[clamp(26px,3vw,36px)] font-semibold text-[#14070a]";
const SUB = "hm-sub mt-3 text-center text-[16px] text-[#5a4a4d]";
const CARD = "rounded-2xl bg-white shadow-[0_10px_40px_rgba(120,30,50,0.09)] ring-1 ring-black/[0.04]";
const WRAP = "hm-wrap mx-auto max-w-[88rem] px-6 lg:px-0";

const SERVICES = [
  { t: "Executive|Hiring & Search", d: "Leadership hiring for critical and senior-level roles" },
  { t: "Talent|Acquisition", d: "Permanent hiring across domains and experience levels" },
  { t: "Recruitment on|Demand", d: "Flexible recruitment support when and where you need it" },
  { t: "Employer of|Record", d: "Hire and manage talent without setting up a local entity" },
  { t: "POSH|Compliance", d: "Building compliant, safe, and inclusive workplaces" },
];

const PROGRAMS = [
  {
    tag: "BBBP",
    t: "Business Beyond Bias Program",
    d: "Creating inclusive pathways through recruitment training, mentorship and partner opportunities.",
  },
  {
    tag: "Accelerator",
    t: "3-Month Recruitment Program",
    d: "Intensive training, real-world learning and mentorship to help you build a strong career in recruitment.",
  },
];

const QUOTES = [
  { n: "Pawan Kumar", r: "HR Manager- Deconstruct", q: "Recruitment drained my bandwidth until Hireginie stepped in. They felt like part of our team and helped us with our best hires, who are now our backbone." },
  { n: "Dipesh Jain", r: "Vice President TA- Elevation Capital", q: "Hireginie feels more like true partners in the hiring journey than an external agency. They take ownership, hustle with intent, and genuinely care about achieving the right outcomes." },
  { n: "Anurag Dixit", r: "Co Founder & CEO- CompUp", q: "Every hire matters in an early stage startup. Hireginie respected our constraints, guided us with insights, and still delivered talent that exceeded expectations." },
];

const rise = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.08, duration: 0.55 },
});

export function HomeServices() {
  return (
    <section className="hm-sec hm-how bg-white pb-12 pt-12">
      <div className={WRAP}>
        <h2 style={hd} className={TITLE}>How We Help You Hire</h2>
        <p className={SUB}>Comprehensive hiring solutions tailored to your business needs</p>
        <div className="hm-svc-row mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div key={s.t} {...rise(i)} className="hm-svc-item">
              <Link href="/services" className={`hm-svc group flex h-full min-h-[190px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(179,32,63,0.18)] ${CARD}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 style={hd} className="text-[18px] font-semibold leading-snug text-[#14070a]">{s.t.split("|").map((l, k) => (k ? <span key={l}><br />{l}</span> : l))}</h3>
                  <span style={{ color: RED }} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden><HugeiconsIcon icon={ArrowRight02Icon} size={20} /></span>
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
    <section className="hm-sec hm-prog bg-white pb-12 pt-12">
      <div className={WRAP}>
        <h2 style={hd} className={TITLE}>Talent Development Programs</h2>
        <p className={SUB}>Building talent. Creating opportunities.</p>
        <div className="hm-prog-grid mx-auto mt-12 grid max-w-[1100px] gap-6 lg:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <motion.div key={p.tag} {...rise(i)}>
              <div className={`hm-prog-card flex h-full overflow-hidden ${CARD}`}>
                {/* TODO-CLEANUP: gray placeholder on purpose, swap for the program illustration */}
                <div className="hm-prog-img hidden w-[38%] bg-[#e4e4e7] sm:block" aria-hidden />
                <div className="hm-prog-txt flex flex-1 flex-col justify-center p-7">
                  <h3 style={hd} className="text-[24px] font-medium text-[#14070a]">{p.tag}</h3>
                  <span className="hm-prog-rule mt-2 block h-[3px] w-[66px]" style={{ background: RED }} />
                  <p className="hm-prog-t mt-5 text-[16px] font-bold text-[#14070a]">{p.t}</p>
                  <p className="hm-prog-d mt-3 text-[14px] leading-relaxed text-[#333]">{p.d}</p>
                  <Link href="/programs" style={{ color: RED }} className="hm-prog-a mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium transition-all hover:gap-3">
                    Learn More <HugeiconsIcon icon={ArrowRight02Icon} size={18} aria-hidden />
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

const ARROW = "hm-arrow grid h-10 w-10 place-items-center rounded-full border transition-colors hover:bg-[#b93743] hover:text-white";

export function HomeTestimonials() {
  const row = useRef<HTMLDivElement>(null);
  // one card (plus its gap) per click
  const step = (dir: 1 | -1) => {
    const el = row.current;
    const card = el?.children[0] as HTMLElement | undefined;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="hm-sec hm-test bg-white pb-24 pt-12">
      <div className={WRAP}>
        <div className="hm-test-head">
          <h2 style={hd} className={TITLE}>Trusted by Growing Teams</h2>
          <div className="hm-arrows mt-4 hidden justify-center lg:flex">
            <button type="button" onClick={() => step(-1)} aria-label="Previous" style={{ color: RED, borderColor: "#e8a9b0" }} className={ARROW}><HugeiconsIcon icon={ArrowLeft02Icon} size="50%" /></button>
            <button type="button" onClick={() => step(1)} aria-label="Next" style={{ color: RED, borderColor: "#e8a9b0" }} className={ARROW}><HugeiconsIcon icon={ArrowRight02Icon} size="50%" /></button>
          </div>
        </div>
        <p className={SUB}>The Quality We Serve</p>
        <div ref={row} className="hm-quotes mt-14 grid gap-10 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.div key={q.n} {...rise(i)} className="hm-quote">
              <span className="hm-av grid h-[84px] w-[84px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f6a3ae] to-[#c0344f] text-[28px] font-semibold text-white" style={hd}>
                {q.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </span>
              <div className="hm-q-name mt-4 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <b className="block truncate text-[15px] font-bold text-[#14070a]">{q.n}</b>
                  <p className="hm-q-role mt-0.5 text-[12px] text-[#222]">{q.r}</p>
                </div>
                <span className="grid h-[24px] w-[24px] shrink-0 place-items-center text-[#14070a]" aria-hidden><HugeiconsIcon icon={Linkedin01Icon} size="100%" /></span>
              </div>
              <p className="hm-q-text mt-5 text-[15px] leading-relaxed text-[#3d2a2e]">{q.q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
