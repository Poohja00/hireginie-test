"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <header className="min-h-[calc(100vh-76px)] flex items-center py-10 bg-white">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-accent mb-4"
          >
            Tech-Enabled Recruitment &amp; Staffing Partner
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif text-[clamp(38px,5.2vw,64px)] font-black leading-[1.08] tracking-tight text-dark"
          >
            Building High-Performance Teams{" "}
            <span className="text-accent">Across India</span>
          </motion.h1>

          <motion.p variants={item} className="text-warm-grey text-[17px] leading-relaxed mt-5 mb-8 max-w-[480px]">
            Helping startups and enterprises hire top talent across technology,
            non-tech, leadership, and volume hiring domains.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Talk to our Experts
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-dark/20 text-dark font-semibold px-7 py-3.5 rounded-full hover:border-dark/50 hover:-translate-y-0.5 transition-all"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-black/8">
            {[
              { b: "5,000+", s: "Successful Hires" },
              { b: "20+", s: "Industries Served" },
              { b: "Pan India", s: "Talent Network" },
              { b: "48 hrs", s: "Avg. Turnaround" },
            ].map((s) => (
              <div key={s.s}>
                <b className="block font-serif text-2xl font-black text-dark">{s.b}</b>
                <small className="text-warm-grey text-[13px]">{s.s}</small>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.3, 1] }}
          className="max-w-[460px] mx-auto lg:mx-0"
        >
          <Image
            src="/hero-illustration.png"
            alt="Hireginie — talent network across India"
            width={900}
            height={930}
            priority
            className="w-full h-auto animate-float"
          />
        </motion.div>
      </div>
    </header>
  );
}
