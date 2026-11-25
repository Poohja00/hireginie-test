"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DM_Sans, Domine } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiInnovation03Icon, AiSearch02Icon, BankIcon, Car01Icon, CogIcon, ComputerProgramming01Icon, CorporateIcon, Diamond02Icon,
  Factory02Icon, HeadsetIcon, Home01Icon, Hospital01Icon, Hotel01Icon, Mortarboard01Icon, PillIcon, Shield01Icon, ShoppingCart02Icon,
  StarIcon, Store01Icon, TruckDeliveryIcon, Video01Icon, Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HomeServices, HomePrograms, HomeTestimonials } from "@/components/home/HomeSections";

const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
type IconSvgObject = React.ComponentProps<typeof HugeiconsIcon>["icon"];

const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

const STATS = [
  { n: "10+", l: "Successful Hires" },
  { n: "50+", l: "Industry Expertise" },
  { n: "Pan India", l: "Talent Network" },
  { n: "48 Hours", l: "Turnaround time" },
];

// per-logo heights for the carousel: normalised so every logo has about the same visual area (scaled 0.88 from a 190px width / 64px height cap)
const LOGO_H: Record<string, string> = {
  "ACT-t.png": "h-[31px]",
  "ihx_logo.svg": "h-[43px]",
  "MyGate_new_logo_1-01-1-t.png": "h-[24px]",
  "images-t.png": "h-[29px]",
  "synapx-s.png": "h-[41px]",
  "logo_Black-t.png": "h-[47px]",
  "awign-t.png": "h-[36px]",
  "nxtwave.svg": "h-[52px]",
  "scripbox.svg": "h-[40px]",
  "appsforbharat.svg": "h-[18px]",
  "iiitdm-t.webp": "h-[47px]",
  "wealthmax.png": "h-[51px]",
  "travclan.png": "h-[40px]",
  "hyperthink.png": "h-[51px]",
  "wishlink.png": "h-[58px]",
  "flxho.png": "h-[62px]",
  "noventiq.png": "h-[31px]",
  "shopdeck.png": "h-[32px]",
  "mikelegal.png": "h-[44px]",
};

const LOGOS = [
  "ACT-t.png",
  "ihx_logo.svg",
  "MyGate_new_logo_1-01-1-t.png",
  "images-t.png",
  "synapx-s.png",
  "logo_Black-t.png",
  // clients added 2026-10-21 (full logos where found, 256px icons where only the icon was available)
  "awign-t.png",
  "nxtwave.svg",
  "scripbox.svg",
  "appsforbharat.svg",
  "iiitdm-t.webp",
  "wealthmax.png",
  "travclan.png",
  "hyperthink.png",
  "wishlink.png",
  "flxho.png",
  "noventiq.png",
  "shopdeck.png",
  "mikelegal.png",
];

// Hugeicons (free, stroke rounded) for each industry
const IND_ICON: Record<string, IconSvgObject> = {
  "IT & Software": ComputerProgramming01Icon,
  "Education": Mortarboard01Icon,
  "Logistics": TruckDeliveryIcon,
  "E-commerce": ShoppingCart02Icon,
  "FMCG": Factory02Icon,
  "Jewelry": Diamond02Icon,
  "Telecom": HeadsetIcon,
  "Banking": BankIcon,
  "Insurance": Shield01Icon,
  "Fintech": Wallet01Icon,
  "Healthcare": Hospital01Icon,
  "Pharma": PillIcon,
  "Manufacturing": CogIcon,
  "Retail": Store01Icon,
  "Real Estate": Home01Icon,
  "Hospitality": Hotel01Icon,
  "Media": Video01Icon,
  "Automotive": Car01Icon,
};

const INDUSTRIES = ["IT & Software", "Education", "Logistics", "E-commerce", "FMCG", "Jewelry", "+ 18 more"];
// TODO: placeholder names for the other 12 industries shown when hovering "+ 18 more" (6 above + 12 = 18 in the design). Confirm the real list and adjust IND_ICON to match.
const MORE_INDUSTRIES = ["Telecom", "Banking", "Insurance", "Fintech", "Healthcare", "Pharma", "Manufacturing", "Retail", "Real Estate", "Hospitality", "Media", "Automotive"];

// Why-section icons: AI search, corporate buildings, AI idea
const WHY_ICON: IconSvgObject[] = [AiSearch02Icon, CorporateIcon, AiInnovation03Icon];

const WHY = [
  { t: "Smarter Talent Access", d: "Technology and expertise|working together to|find the right talent." },
  { t: "Specialized Hiring Expertise", d: "Recruiters with industry|expertise for roles that|demand deeper context." },
  { t: "Beyond Traditional Talent Pools", d: "Wider access to talent|beyond conventional|hiring channels." },
];

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.2, 0.7, 0.3, 1] as const } }),
};

const hd = { fontFamily: domine.style.fontFamily };

export default function HomeLanding() {
  // industries: hovering "+ 18 more" opens the full grid, moving the mouse off the grid closes it
  const [allInd, setAllInd] = useState(false);

  return (
    <main className="bg-white text-[#14070a] [&_h1]:[font-family:inherit] [&_h2]:[font-family:inherit] [&_h3]:[font-family:inherit]" style={{ fontFamily: `Satoshi, ${sans.style.fontFamily}` }}>
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" precedence="default" />
      {/* Hero */}
      <section className="hm-hero relative overflow-hidden bg-gradient-to-b from-[#fcd9df] via-[#fde8ec] to-white">
          <div className="hm-hero-in grid items-center gap-6 px-6 pb-4 pt-[84px]">
            <div className="hm-hero-text">
              <motion.p variants={rise} custom={0} initial="hidden" animate="show" className="hm-tag text-[14px] font-semibold text-[#14070a]">Tech-Enabled Recruitment &amp; Staffing Partner</motion.p>
              <motion.h1 style={hd} variants={rise} custom={1} initial="hidden" animate="show" className="hm-h1 mt-0 text-[40px] font-semibold leading-[1.3] text-[#14070a]">
                Hire Better.<br />Scale Faster.
              </motion.h1>
              <motion.p variants={rise} custom={2} initial="hidden" animate="show" className="hm-p mt-6 text-[15px] leading-relaxed text-[#14070a]">
                Helping startups and enterprises hire top talent across technology, non-tech, leadership, and volume hiring domains.
              </motion.p>
              <motion.div variants={rise} custom={3} initial="hidden" animate="show" className="hm-btn-wrap mt-6">
                <Link href="/contact" className="hm-btn block w-full max-w-[420px] cursor-pointer rounded-lg bg-gradient-to-r from-[#c0344f] to-[#ee6a76] py-3.5 text-center text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(192,52,79,0.35)] transition-transform hover:-translate-y-0.5">Talk to our Experts</Link>
              </motion.div>
            </div>
            <motion.div className="hm-img" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <Image src="/hero-illustration-red-v4.webp" alt="Hiring pipeline illustration" width={816} height={673} priority sizes="(min-width:1024px) 50vw, 100vw" className="ml-auto h-auto max-h-[calc(100svh-150px)] w-full object-contain object-right [mask-image:radial-gradient(ellipse_at_center,#000_62%,transparent_100%)]" />
            </motion.div>
            <motion.div variants={rise} custom={4} initial="hidden" animate="show" className="hm-stats flex flex-wrap items-start gap-x-12 gap-y-5 pb-5">
              {STATS.map((x) => (
                <div key={x.l} className="hm-stat flex items-center gap-3">
                  <span className="hm-stat-ic grid h-7 w-7 place-items-center rounded-full bg-[#1a1a1a] text-white"><HugeiconsIcon icon={StarIcon} size="55%" /></span>
                  <div className={domine.className}>
                    <p className="hm-stat-n text-[19px] font-medium leading-none text-[#1a1a1a]">{x.n}</p>
                    <p className="hm-stat-l mt-1 text-[12px] font-medium text-[#b3203f]">{x.l}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      {/* Trusted by */}
      <section className="hm-trusted bg-[#fffafa] pb-12 pt-20">
        <h2 style={hd} className="hm-h2 text-center text-[clamp(26px,3vw,36px)] font-semibold">Trusted by Growing Business Across India</h2>
        <div className="marquee marquee-mask mt-10 overflow-hidden">
          <div className="animate-marquee flex w-max">
            {[...LOGOS, ...LOGOS].map((f, i) => (
              <div key={i} className="flex h-[72px] shrink-0 items-center px-8">
                {/* no fixed cell width, so the gap between neighbouring logos stays equal */}
                <Image src={`/logo/${f}`} alt="" width={130} height={46} unoptimized loading="eager" className={`${LOGO_H[f]} w-auto max-w-none object-contain`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeServices />
      <HomePrograms />
      <svg width="0" height="0" className="absolute" aria-hidden><defs><linearGradient id="indGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f2707f" /><stop offset="1" stopColor="#c9243f" /></linearGradient></defs></svg>
      {/* Industries */}
      <section id="industries" className="hm-sec hm-ind bg-white pb-12 pt-12">
        <div className="hm-wrap mx-auto max-w-[88rem] px-6 text-center lg:px-0">
          <h2 style={hd} className="hm-h2 mt-4 text-[clamp(26px,3vw,36px)] font-semibold">Industries We Serve</h2>
          <p className="hm-sub mt-3 text-[17px] text-[#5a4a4d]">We partner with organizations across 25+ industries to build high-performing teams.</p>
          <div onMouseLeave={() => setAllInd(false)} className={`hm-ind-row mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8`}>
            {(allInd ? [...INDUSTRIES.slice(0, -1), ...MORE_INDUSTRIES] : INDUSTRIES).map((n, i) => {
              const path = IND_ICON[n];
              return (
              <motion.div key={n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 7) * 0.05, duration: 0.5 }} className="hm-ind-cell group">
                {!path ? (
                  <button type="button" onMouseEnter={() => setAllInd(true)} aria-expanded={allInd} className="hm-ind-more mt-6 cursor-pointer text-[#14070a] transition-colors hover:text-[#b3203f]" style={hd}><span className="text-[22px]">+ 18</span> <span className="text-[13px]">more</span></button>
                ) : (
                  <>
                    <div className="hm-ind-circle mx-auto grid h-[76px] w-[76px] place-items-center rounded-full bg-[#fdf1f0] transition-all duration-300 group-hover:-translate-y-1.5">
                      <HugeiconsIcon icon={path} size={40} className="ind-grad" />
                    </div>
                    <p className="hm-ind-label mt-4 text-[16px] font-semibold text-[#14070a]">{n}</p>
                  </>
                )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="hm-sec hm-why bg-white pb-12 pt-12">
        <div className="hm-wrap mx-auto max-w-[88rem] px-6 text-center lg:px-0">
          <h2 style={hd} className="hm-h2 mt-4 text-[clamp(26px,3vw,36px)] font-semibold">Why Teams Partner With Us.</h2>
          <p className="hm-sub mt-3 text-[17px] text-[#5a4a4d]">Your Growth is Our Priority</p>
          <div className="hm-why-row mt-16 grid gap-10 text-left md:grid-cols-3">
            {WHY.map((w, i) => (
              <motion.div key={w.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }} className={`hm-why-col flex gap-5 ${i > 0 ? "md:border-l md:border-black/10 md:pl-8" : ""}`}>
                <HugeiconsIcon icon={WHY_ICON[i]} size={38} color="#b93743" className="mt-0.5 shrink-0" />
                <div>
                  <h3 style={hd} className={`text-[23px] font-medium leading-snug`}>{w.t}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-[#5a4a4d]">{w.d.split("|").map((l, k) => (k ? <span key={l}><br className="hidden lg:inline" /> {l}</span> : l))}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <HomeTestimonials />
    </main>
  );
}
