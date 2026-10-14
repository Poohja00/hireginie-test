"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Playfair_Display, DM_Sans } from "next/font/google";
import FlowCanvas from "@/components/demo/FlowCanvas";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"] });
const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

type Theme = "dark" | "light";

const NAV = ["Company", "Solutions", "Programs", "Insights"];

const STATS: { n: number; suffix: string; text?: string; l: string }[] = [
  { n: 5000, suffix: "+", l: "Successful Hires" },
  { n: 40, suffix: "+", l: "Industries Served" },
  { n: 0, suffix: "", text: "Pan India", l: "Talent Network" },
  { n: 48, suffix: " hours", l: "Avg. Turnaround" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });
  useEffect(() => { if (inView) raw.set(target); }, [inView, raw, target]);
  useEffect(() => spring.on("change", (v) => {
    if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
  }), [spring, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const LOGOS = [
  "ACT.png",
  "ihx_logo.svg",
  "MyGate_new_logo_1-01-1.png",
  "images.png",
  "1761232166717-Synapx Logo for White Background.png",
  "logo_Black.png",
];

const INDUSTRIES = ["IT & Software", "Education", "Logistics", "E-commerce", "FMCG", "Jewelry", "Telecom", "+ 18 more"];

const WHY = [
  { t: "Smarter Talent Access", d: "Technology and expertise working together to find the right talent." },
  { t: "Specialized Hiring Expertise", d: "Recruiters with industry expertise for roles that demand deeper context." },
  { t: "Beyond Traditional Talent Pools", d: "Wider access to talent beyond conventional hiring channels." },
];

const hf = { fontFamily: serif.style.fontFamily };

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.2, 0.7, 0.3, 1] as const } }),
};

export default function DemoLanding({ theme }: { theme: Theme }) {
  const dark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const navInk = dark && !scrolled ? "text-white" : "text-[#14070a]";
  const ink = dark ? "text-white" : "text-[#14070a]";
  const sub = dark ? "text-white/80" : "text-[#4a3b3e]";
  const eyebrow = dark ? "text-[#f08a9a]" : "text-[#7a1230]";
  const crimson = "bg-gradient-to-b from-[#b3203f] to-[#5c0a1f]";

  return (
    <main className={`${sans.className} bg-white text-[#14070a] [&_h1]:[font-family:inherit] [&_h2]:[font-family:inherit] [&_h3]:[font-family:inherit]`}>
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500">
        <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? "mt-3 h-[78px] max-w-[1180px] rounded-full border border-white/50 bg-white/90 px-6 shadow-[0_10px_40px_rgba(60,10,25,0.18)] transform-gpu" : "mt-0 h-[96px] max-w-[88rem] px-6 lg:px-10"}`}>
          <Link href="/"><Image src="/logo/hireginiemasterlogos/logo-b.png" alt="Hireginie" width={240} height={58} className={`h-[58px] w-auto transition-[filter] ${dark && !scrolled ? "brightness-0 invert" : ""}`} /></Link>
          <nav className={`hidden gap-12 text-[18px] ${navInk} md:flex`}>
            {NAV.map((n) => <span key={n} className="cursor-pointer hover:text-[#b3203f] transition-colors">{n}</span>)}
          </nav>
          <span className={`${crimson} cursor-pointer rounded-md px-6 py-3.5 text-[17px] font-medium text-white shadow-[0_8px_24px_rgba(120,15,40,0.35)] transition-transform hover:-translate-y-0.5`}>
            Book a Consultation →
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className={`relative isolate overflow-hidden ${dark ? "bg-[#0c0507]" : "bg-gradient-to-b from-white via-[#fff6f7] to-white"}`}>
        <FlowCanvas theme={theme} />
        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[88rem] flex-col items-center justify-center px-6 pb-10 pt-[170px] text-center">
          <motion.p variants={rise} custom={0} initial="hidden" animate="show" className={`text-[14px] uppercase tracking-[0.38em] ${eyebrow}`}>
            Tech-Enabled Recruitment &amp; Staffing Partner
          </motion.p>
          <motion.h1 style={hf} variants={rise} custom={1} initial="hidden" animate="show" className={`mt-8 text-[clamp(52px,8vw,96px)] font-semibold leading-[0.98] ${ink}`}>
            Hire Better.
            <br />
            <span className={dark ? "bg-gradient-to-r from-[#ff9aa8] to-[#c42a4a] bg-clip-text text-transparent" : "text-[#b3141f]"}>Scale Faster.</span>
          </motion.h1>
          <motion.p variants={rise} custom={2} initial="hidden" animate="show" className={`mt-8 max-w-[640px] text-[22px] leading-relaxed ${sub}`}>
            Helping startups and enterprises hire top talent across technology, non-tech, leadership, and volume hiring domains.
          </motion.p>
          <motion.div variants={rise} custom={3} initial="hidden" animate="show" className="mt-10 flex flex-wrap justify-center gap-5">
            <span className={`${crimson} cursor-pointer rounded-md px-9 py-4 text-[18px] font-medium text-white shadow-[0_10px_30px_rgba(179,32,63,0.45)] transition-transform hover:-translate-y-0.5`}>Talk to our Experts →</span>
            <span className={`cursor-pointer rounded-md border px-9 py-4 text-[18px] font-medium transition-colors ${dark ? "border-white/70 text-white hover:bg-white/10" : "border-[#b3203f] text-[#b3203f] hover:bg-[#b3203f]/5"}`}>Explore Solutions</span>
          </motion.div>
          <motion.div variants={rise} custom={4} initial="hidden" animate="show" className="mt-14 flex flex-wrap items-start justify-center gap-y-8">
            {STATS.map((x) => (
              <div key={x.l} className="px-12 text-left">
                <div className="flex items-center gap-3">
                  <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${dark ? "border-[#f06c82]" : "border-[#b3203f]"}`}><span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-[#f06c82]" : "bg-[#b3203f]"}`} /></span>
                  <span className={`bg-gradient-to-r ${dark ? "from-[#ffb3be] to-[#e0405f]" : "from-[#b3203f] to-[#6e0f26]"} bg-clip-text text-[46px] font-semibold leading-none [font-variant-numeric:lining-nums] text-transparent`} style={hf}>
                    {x.text ?? <CountUp target={x.n} suffix={x.suffix} />}
                  </span>
                </div>
                <p className={`mt-3 pl-8 text-[18px] ${ink}`}>{x.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-[#fffafa] py-14">
        <p className="text-center text-[14px] font-semibold uppercase tracking-[0.38em] text-[#9d1230]">Trusted by growing businesses across India</p>
        <div className="marquee marquee-mask mt-10 overflow-hidden">
          <div className="animate-marquee flex w-max">
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((f, i) => (
              <div key={i} className="flex h-16 w-[200px] shrink-0 items-center justify-center">
                <Image src={`/logo/${f}`} alt="" width={130} height={46} className="h-auto max-h-[46px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-6 text-center lg:px-10">
          <p className="text-[14px] uppercase tracking-[0.38em] text-[#9d1230]">Industries we serve</p>
          <h2 style={hf} className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold">Building Teams Across 25+ Industries</h2>
          <p className="mt-3 text-[20px] text-[#5a4a4d]">We partner with organizations across industries to build high-performing teams.</p>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
            {INDUSTRIES.map((n, i) => (
              <motion.div key={n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group">
                <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-2xl bg-[#fdeeef] text-[#b3203f] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-[#b3203f] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(179,32,63,0.35)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="14" rx="3" /><path d="m10 10-2 2 2 2M14 10l2 2-2 2" /></svg>
                </div>
                <p className="mt-3 text-[17px] text-[#3d3033]">{n}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white pb-28">
        <div className="mx-auto max-w-[88rem] px-6 text-center lg:px-10">
          <p className="text-[14px] uppercase tracking-[0.38em] text-[#9d1230]">Why teams partner with us</p>
          <h2 style={hf} className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold">Your Growth is Our Priority</h2>
          <div className="mt-16 grid gap-10 text-left md:grid-cols-3">
            {WHY.map((w, i) => (
              <motion.div key={w.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }} className={`flex gap-5 ${i > 0 ? "md:border-l md:border-black/10 md:pl-8" : ""}`}>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#fdeeef] text-[#b3203f]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" /></svg>
                </span>
                <div>
                  <h3 style={hf} className={`text-[27px] font-medium leading-snug`}>{w.t}</h3>
                  <p className="mt-4 text-[18px] leading-relaxed text-[#5a4a4d]">{w.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
