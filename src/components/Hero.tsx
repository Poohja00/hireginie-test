"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, raw, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <header className="min-h-[calc(100vh-76px)] flex flex-col justify-center py-8 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left — content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block text-[14px] font-semibold text-slate mb-3"
          >
            Tech-Enabled Recruitment &amp; Staffing Partner
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif text-[clamp(32px,3.8vw,52px)] font-black leading-[1.1] tracking-tight text-dark"
          >
            Building High Performance Team{" "}
            <span className="bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent">Across India</span>
          </motion.h1>

          <motion.p variants={item} className="text-warm-grey text-[15px] leading-relaxed mt-4 mb-6 max-w-[440px]">
            Helping startups and enterprises hire top talent across technology,
            non-tech, leadership, and volume hiring domains.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full max-w-[340px] bg-gradient-to-r from-accent to-accent-gold text-white font-semibold text-[14px] px-10 py-2 rounded-xl shadow-[0_10px_25px_rgba(254,98,42,0.3)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Talk to our Experts
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.3, 1] }}
          className="flex items-center justify-center lg:justify-end"
        >
          <Image
            src="/hero-illustration.png"
            alt="Hireginie — talent network across India"
            width={660}
            height={600}
            priority
            className="w-full max-w-[560px] h-auto animate-float"
          />
        </motion.div>
      </div>

      {/* Stats row — full width, spans both columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 mt-12 flex flex-row flex-nowrap justify-between gap-6"
      >
        <div className="min-w-0 flex items-start gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1.5 shrink-0">
            <circle cx="12" cy="12" r="9" stroke="#5D6585" strokeWidth="2" />
            <circle cx="12" cy="12" r="2.5" fill="#5D6585" />
          </svg>
          <div>
            <b className="block font-serif text-lg font-black bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent whitespace-nowrap">
              <CountUp target={5000} suffix="+" />
            </b>
            <small className="text-dark text-[12px] font-medium whitespace-nowrap">Successful Hires</small>
          </div>
        </div>
        <div className="min-w-0 flex items-start gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1.5 shrink-0">
            <circle cx="12" cy="12" r="9" stroke="#5D6585" strokeWidth="2" />
            <circle cx="12" cy="12" r="2.5" fill="#5D6585" />
          </svg>
          <div>
            <b className="block font-serif text-lg font-black bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent whitespace-nowrap">
              <CountUp target={40} suffix="+" />
            </b>
            <small className="text-dark text-[12px] font-medium whitespace-nowrap">Industries Served</small>
          </div>
        </div>
        <div className="min-w-0 flex items-start gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1.5 shrink-0">
            <circle cx="12" cy="12" r="9" stroke="#5D6585" strokeWidth="2" />
            <circle cx="12" cy="12" r="2.5" fill="#5D6585" />
          </svg>
          <div>
            <b className="block font-serif text-lg font-black bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent whitespace-nowrap">Pan India</b>
            <small className="text-dark text-[12px] font-medium whitespace-nowrap">Talent Network</small>
          </div>
        </div>
        <div className="min-w-0 flex items-start gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1.5 shrink-0">
            <circle cx="12" cy="12" r="9" stroke="#5D6585" strokeWidth="2" />
            <circle cx="12" cy="12" r="2.5" fill="#5D6585" />
          </svg>
          <div>
            <b className="block font-serif text-lg font-black bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent whitespace-nowrap">
              <CountUp target={48} suffix=" hours" />
            </b>
            <small className="text-dark text-[12px] font-medium whitespace-nowrap">Avg. Turnaround</small>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
