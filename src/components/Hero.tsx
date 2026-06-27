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
    <header className="min-h-[calc(100vh-76px)] flex items-center py-8 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left — content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-3"
          >
            Tech-Enabled Recruitment &amp; Staffing Partner
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif text-[clamp(32px,3.8vw,52px)] font-black leading-[1.1] tracking-tight text-dark"
          >
            Building High-Performance Teams{" "}
            <span className="text-accent">Across India</span>
          </motion.h1>

          <motion.p variants={item} className="text-warm-grey text-[15px] leading-relaxed mt-4 mb-6 max-w-[440px]">
            Helping startups and enterprises hire top talent across technology,
            non-tech, leadership, and volume hiring domains.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent text-white font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Talk to our Experts
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-dark/20 text-dark font-semibold text-[14px] px-6 py-3 rounded-full hover:border-dark/50 hover:-translate-y-0.5 transition-all"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex flex-row flex-nowrap gap-6 mt-8 pt-6 border-t border-black/8">
            <div className="min-w-0">
              <b className="block font-serif text-lg font-black text-dark whitespace-nowrap">
                <CountUp target={5000} suffix="+" />
              </b>
              <small className="text-warm-grey text-[11px] whitespace-nowrap">Successful Hires</small>
            </div>
            <div className="min-w-0">
              <b className="block font-serif text-lg font-black text-dark whitespace-nowrap">
                <CountUp target={20} suffix="+" />
              </b>
              <small className="text-warm-grey text-[11px] whitespace-nowrap">Industries Served</small>
            </div>
            <div className="min-w-0">
              <b className="block font-serif text-lg font-black text-dark whitespace-nowrap">Pan India</b>
              <small className="text-warm-grey text-[11px] whitespace-nowrap">Talent Network</small>
            </div>
            <div className="min-w-0">
              <b className="block font-serif text-lg font-black text-dark whitespace-nowrap">
                <CountUp target={48} suffix=" hrs" />
              </b>
              <small className="text-warm-grey text-[11px] whitespace-nowrap">Avg. Turnaround</small>
            </div>
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
    </header>
  );
}
