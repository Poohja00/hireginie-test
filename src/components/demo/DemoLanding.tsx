"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Playfair_Display, DM_Sans, Domine } from "next/font/google";
import FlowCanvas from "@/components/demo/FlowCanvas";
import { HomeServices, HomePrograms, HomeTestimonials } from "@/components/demo/HomeSections";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"] });
const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

type Theme = "dark" | "light";

const NAV = ["Company", "Solutions", "Programs", "Insights"];

const STATS: { n: number; suffix: string; text?: string; l: string }[] = [
  { n: 5000, suffix: "+", l: "Successful Hires" },
  { n: 40, suffix: "+", l: "Industries Served" },
  { n: 0, suffix: "", text: "Pan India", l: "Talent Network" },
  { n: 48, suffix: " hours", l: "Avg. Turnaround" },
];

const SPLIT_STATS = [
  { n: "10+", l: "Successful Hires" },
  { n: "50+", l: "Industry Expertise" },
  { n: "Pan India", l: "Talent Network" },
  { n: "48 Hours", l: "Turnaround time" },
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
  // clients added 2026-10-21 (full logos where found, 256px icons where only the icon was available)
  "awign.png",
  "nxtwave.svg",
  "scripbox.svg",
  "appsforbharat.svg",
  "iiitdm.webp",
  "wealthmax.jpg",
  "travclan-icon.png",
  "wishlink-icon.png",
  "flxho-icon.png",
  "noventiq-icon.png",
  // TODO: still missing a usable logo file: Hyperthink, ShopDeck, MikeLegal
];

const IND_ICON: Record<string, string> = {
  "IT & Software": "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM10 10l-2 2 2 2M14 10l2 2-2 2M13 9l-2 6",
  "Education": "M2 9l10-5 10 5-10 5-10-5ZM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6",
  "Logistics": "M5 6h9v10H5zM1 9h3M2 12h2M0 15h4M14 9h4l3 3v4h-7M6 18.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM16 18.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
  "E-commerce": "M2 4h3l2.2 10.5h10.6L20 7H6M9 19a1.2 1.2 0 1 0 2.4 0A1.2 1.2 0 0 0 9 19ZM16 19a1.2 1.2 0 1 0 2.4 0A1.2 1.2 0 0 0 16 19Z",
  "FMCG": "M3 21V10l5 3v-3l5 3V4h3v9l2 1v7H3ZM8 18h2M13 18h2",
  "Jewelry": "M6 3h12l4 6-10 12L2 9l4-6ZM2 9h20M9 3l3 6 3-6M12 21V9",
  "Telecom": "M4 14v-2a8 8 0 0 1 16 0v2M4 13h3v6H4zM17 13h3v6h-3zM20 19c0 2-2 3-5 3h-2",
};

const INDUSTRIES = ["IT & Software", "Education", "Logistics", "E-commerce", "FMCG", "Jewelry", "Telecom", "+ 18 more"];

// Why-section icons (split design): AI in a magnifier, buildings, AI in a bulb. Paths are 24x24 strokes.
const WHY_ICON = [
  "M10.5 3.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM15.7 15.7 21 21M7.7 13l2-6 2 6M8.4 11.2h2.6M13.7 7.4v5.6",
  "M4 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M14 10h5a1 1 0 0 1 1 1v10M2 21h20M7 7h2M10 7h1M7 11h2M10 11h1M7 15h2M10 15h1M16.5 14h1M16.5 17.5h1",
  "M9 18h6M10 21h4M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.6.5 1 1.1 1 1.7h5.6c0-.6.4-1.2 1-1.7A6.5 6.5 0 0 0 12 2.5ZM10.2 11.6l1.5-4 1.5 4M10.6 10.4h2.2M14.6 7.6v4",
];

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

const NAV_HREF: Record<string, string> = { Company: "/about", Solutions: "/services", Programs: "/programs", Insights: "/blogs" };

export default function DemoLanding({ theme, variant = "flow", live = false }: { theme: Theme; variant?: "flow" | "split"; live?: boolean }) {
  const dark = theme === "dark";
  const split = variant === "split";
  // live = rendered on the real home page: nav items and CTAs become real links
  const el = (href: string, cls: string, kids: React.ReactNode) => live ? <Link href={href} className={cls}>{kids}</Link> : <span className={cls}>{kids}</span>;
  const hd = split ? { fontFamily: domine.style.fontFamily } : hf;
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
    <main className={`${split ? "" : sans.className} bg-white text-[#14070a] [&_h1]:[font-family:inherit] [&_h2]:[font-family:inherit] [&_h3]:[font-family:inherit]`} style={split ? { fontFamily: `Satoshi, ${sans.style.fontFamily}` } : undefined}>
      {split && <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" precedence="default" />}
      {/* Nav: on the live home page the shared SiteNav (layout) is used instead */}
      {!live && (
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${split && !scrolled ? "bg-white" : "px-4"}`}>
        <div className={`mx-auto flex items-center justify-between border border-transparent transition-all duration-500 ${scrolled ? `mt-3 ${split ? "h-[66px]" : "h-[78px]"} max-w-[1180px] rounded-full border-white/60 bg-white/55 px-6 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(40,10,20,0.14),inset_0_1px_0_rgba(255,255,255,0.8)] transform-gpu` : `mt-0 ${split ? "h-[70px]" : "h-[96px]"} max-w-[88rem] px-6 lg:px-10`}`}>
          <Link href="/"><Image src="/logo/hireginiemasterlogos/logo-b.png" alt="Hireginie" width={240} height={58} className={`${split ? "h-[50px]" : "h-[58px]"} w-auto transition-[filter] ${dark && !scrolled ? "brightness-0 invert" : ""}`} /></Link>
          <div className={split ? "flex items-center gap-20" : "contents"}>
          <nav className={`hidden ${split ? "gap-20 font-bold" : "gap-12"} text-[16px] ${navInk} md:flex`}>
            {NAV.map((n) => <span key={n}>{el(NAV_HREF[n], "cursor-pointer hover:text-[#b3203f] transition-colors", n)}</span>)}
          </nav>
          {el("/contact", `${split ? "bg-black" : crimson} cursor-pointer rounded-md px-5 py-3 text-[15px] ${split ? "font-bold" : "font-medium"} text-white ${split ? "shadow-[0_8px_24px_rgba(0,0,0,0.3)]" : "shadow-[0_8px_24px_rgba(120,15,40,0.35)]"} transition-transform hover:-translate-y-0.5`, "Book a Consultation →")}
          </div>
        </div>
      </header>
      )}

      {/* Hero */}
      {split ? (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#fcd9df] via-[#fde8ec] to-white">
          <div className="grid items-center gap-6 px-6 pb-4 pt-[84px] lg:grid-cols-[1fr_50vw] lg:gap-0 lg:pb-0 lg:pl-[3.5vw] lg:pr-[5.4vw] lg:pt-[70px]">
            <div>
              <motion.p variants={rise} custom={0} initial="hidden" animate="show" className="text-[14px] font-semibold text-[#14070a] lg:text-[1.4vw]">Tech-Enabled Recruitment &amp; Staffing Partner</motion.p>
              <motion.h1 style={hd} variants={rise} custom={1} initial="hidden" animate="show" className="mt-0 text-[40px] font-semibold leading-[1.3] text-[#14070a] lg:text-[4.1vw] lg:leading-[1.53]">
                Hire Better.<br />Scale Faster.
              </motion.h1>
              <motion.p variants={rise} custom={2} initial="hidden" animate="show" className="mt-6 text-[15px] leading-relaxed text-[#14070a] lg:mt-[2vw] lg:text-[1.27vw] lg:leading-[1.63]">
                Helping startups and enterprises hire top talent across<br />technology, non-tech, leadership, and volume hiring domains.
              </motion.p>
              <motion.div variants={rise} custom={3} initial="hidden" animate="show" className="mt-6 lg:mt-[3vw]">
                {el("/contact", "block w-full max-w-[420px] cursor-pointer rounded-lg bg-gradient-to-r from-[#c0344f] to-[#ee6a76] py-3.5 text-center text-[14px] font-semibold text-white lg:w-[29vw] lg:max-w-none lg:rounded-[0.6vw] lg:py-0 lg:text-[0.97vw] lg:leading-[3.6vw] shadow-[0_10px_30px_rgba(192,52,79,0.35)] transition-transform hover:-translate-y-0.5", "Talk to our Experts")}
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <Image src="/hero-illustration-red-v4.webp" alt="Hiring pipeline illustration" width={816} height={673} priority sizes="(min-width:1024px) 50vw, 100vw" className="ml-auto h-auto max-h-[calc(100svh-150px)] w-full object-contain object-right object-contain object-right [mask-image:radial-gradient(ellipse_at_center,#000_62%,transparent_100%)]" />
            </motion.div>
            <motion.div variants={rise} custom={4} initial="hidden" animate="show" className="flex flex-wrap items-start gap-x-12 gap-y-5 pb-5 lg:col-span-2 lg:gap-x-[3.3vw] lg:pt-[0.8vw]">
              {SPLIT_STATS.map((x) => (
                <div key={x.l} className="flex items-center gap-3 lg:gap-[1.1vw]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1a1a1a] text-[11px] text-white lg:h-[2.4vw] lg:w-[2.4vw] lg:text-[1vw]">★</span>
                  <div className={domine.className}>
                    <p className="text-[19px] font-medium leading-none text-[#1a1a1a] lg:text-[1.86vw]">{x.n}</p>
                    <p className="mt-1 text-[12px] font-medium text-[#b3203f] lg:mt-[0.45vw] lg:text-[1.05vw]">{x.l}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : (
      <section className={`relative isolate overflow-hidden ${dark ? "bg-[#0c0507]" : "bg-gradient-to-b from-white via-[#fff6f7] to-white"}`}>
        <FlowCanvas theme={theme} />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[88rem] flex-col items-center justify-center px-6 pb-8 pt-[110px] text-center">
          <motion.p variants={rise} custom={0} initial="hidden" animate="show" className={`text-[15px] uppercase tracking-[0.3em] ${eyebrow}`}>
            Tech-Enabled Recruitment &amp; Staffing Partner
          </motion.p>
          <motion.h1 style={hd} variants={rise} custom={1} initial="hidden" animate="show" className={`mt-5 text-[clamp(44px,6.2vw,80px)] font-semibold leading-[1] ${ink}`}>
            Hire Better.
            <br />
            <span className={dark ? "bg-gradient-to-r from-[#ff9aa8] to-[#c42a4a] bg-clip-text text-transparent" : "text-[#b3141f]"}>Scale Faster.</span>
          </motion.h1>
          <motion.p variants={rise} custom={2} initial="hidden" animate="show" className={`mt-6 max-w-[640px] text-[20px] leading-relaxed ${sub}`}>
            Helping startups and enterprises hire top talent across technology, non-tech, leadership, and volume hiring domains.
          </motion.p>
          <motion.div variants={rise} custom={3} initial="hidden" animate="show" className="mt-7 flex flex-wrap justify-center gap-5">
            <span className={`${crimson} cursor-pointer rounded-md px-8 py-3.5 text-[17px] font-medium text-white shadow-[0_10px_30px_rgba(179,32,63,0.45)] transition-transform hover:-translate-y-0.5`}>Talk to our Experts →</span>
            <span className={`cursor-pointer rounded-md border px-8 py-3.5 text-[17px] font-medium transition-colors ${dark ? "border-white/70 text-white hover:bg-white/10" : "border-[#b3203f] text-[#b3203f] hover:bg-[#b3203f]/5"}`}>Explore Solutions</span>
          </motion.div>
          <motion.div variants={rise} custom={4} initial="hidden" animate="show" className="mt-9 flex flex-wrap items-start justify-center gap-y-8">
            {STATS.map((x) => (
              <div key={x.l} className="px-12 text-left">
                <div className="flex items-center gap-3">
                  <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${dark ? "border-[#f06c82]" : "border-[#b3203f]"}`}><span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-[#f06c82]" : "bg-[#b3203f]"}`} /></span>
                  <span className={`bg-gradient-to-r ${dark ? "from-[#ffb3be] to-[#e0405f]" : "from-[#b3203f] to-[#6e0f26]"} bg-clip-text text-[46px] font-semibold leading-none [font-variant-numeric:lining-nums] text-transparent`} style={hd}>
                    {x.text ?? <CountUp target={x.n} suffix={x.suffix} />}
                  </span>
                </div>
                <p className={`mt-3 pl-8 text-[18px] ${ink}`}>{x.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* Trusted by */}
      <section className={`bg-[#fffafa] ${split ? "pb-12 pt-20" : "py-14"}`}>
        {split ? <h2 style={hd} className="text-center text-[clamp(26px,3vw,36px)] font-semibold">Trusted by Growing Business Across India</h2> : <p className="text-center text-[18px] font-semibold uppercase tracking-[0.3em] text-[#9d1230]">Trusted by growing businesses across India</p>}
        <div className="marquee marquee-mask mt-10 overflow-hidden">
          <div className="animate-marquee flex w-max" style={split ? { animationPlayState: "running" } : undefined}>
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((f, i) => (
              <div key={i} className={`flex h-16 shrink-0 items-center justify-center ${split ? "w-[140px]" : "w-[200px]"}`}>
                <Image src={`/logo/${f}`} alt="" width={130} height={46} className="h-auto max-h-[46px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {split && <HomeServices />}
      {split && <HomePrograms />}
      {split && (<svg width="0" height="0" className="absolute" aria-hidden><defs><linearGradient id="indGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f2707f" /><stop offset="1" stopColor="#c9243f" /></linearGradient></defs></svg>)}
      {/* Industries */}
      <section className={`bg-white ${split ? "pb-12 pt-12" : "py-20"}`}>
        <div className="mx-auto max-w-[88rem] px-6 text-center lg:px-10">
          {!split && <p className="text-[18px] uppercase tracking-[0.3em] text-[#9d1230]">Industries we serve</p>}
          <h2 style={hd} className={`mt-4 font-semibold ${split ? "text-[clamp(26px,3vw,36px)]" : "text-[clamp(28px,3.4vw,42px)]"}`}>{split ? "Industries We Serve" : "Building Teams Across 25+ Industries"}</h2>
          <p className="mt-3 text-[17px] text-[#5a4a4d]">We partner with organizations across industries to build high-performing teams.</p>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
            {INDUSTRIES.map((n, i) => {
              const path = IND_ICON[n];
              return (
              <motion.div key={n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group">
                {split && !path ? (
                  <p className="mt-6 text-[#14070a]" style={hd}><span className="text-[22px]">+ 18</span> <span className="text-[13px]">more</span></p>
                ) : (
                  <>
                    <div className={`mx-auto grid place-items-center transition-all duration-300 group-hover:-translate-y-1.5 ${split ? "h-[76px] w-[76px] rounded-full bg-[#fdf1f0]" : "h-[72px] w-[72px] rounded-2xl bg-[#fdeeef] text-[#b3203f] group-hover:bg-[#b3203f] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(179,32,63,0.35)]"}`}>
                      {split && path ? (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#indGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
                      ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="14" rx="3" /><path d="m10 10-2 2 2 2M14 10l2 2-2 2" /></svg>
                      )}
                    </div>
                    <p className={`mt-4 font-semibold text-[#14070a] ${split ? "text-[16px]" : "text-[15px] font-medium text-[#3d3033]"}`}>{n}</p>
                  </>
                )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className={`bg-white ${split ? "pb-12 pt-12" : "pb-28"}`}>
        <div className="mx-auto max-w-[88rem] px-6 text-center lg:px-10">
          {!split && <p className="text-[18px] uppercase tracking-[0.3em] text-[#9d1230]">Why teams partner with us</p>}
          <h2 style={hd} className={`mt-4 font-semibold ${split ? "text-[clamp(26px,3vw,36px)]" : "text-[clamp(28px,3.4vw,42px)]"}`}>{split ? "Why Teams Partner With Us." : "Your Growth is Our Priority"}</h2>
          {split && <p className="mt-3 text-[17px] text-[#5a4a4d]">Your Growth is Our Priority</p>}
          <div className="mt-16 grid gap-10 text-left md:grid-cols-3">
            {WHY.map((w, i) => (
              <motion.div key={w.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }} className={`flex gap-5 ${i > 0 ? "md:border-l md:border-black/10 md:pl-8" : ""}`}>
                {split ? (
                  <svg className="mt-0.5 shrink-0" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="url(#indGrad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d={WHY_ICON[i]} /></svg>
                ) : (
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#fdeeef] text-[#b3203f]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" /></svg>
                </span>
                )}
                <div>
                  <h3 style={hd} className={`text-[23px] font-medium leading-snug`}>{w.t}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-[#5a4a4d]">{w.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {split && <HomeTestimonials />}
</main>
  );
}
