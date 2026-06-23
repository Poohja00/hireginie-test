"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const STATS = [
  { b: "5,000+", s: "Successful Hires" },
  { b: "20+", s: "Industries served" },
  { b: "Pan India", s: "Talent Network" },
  { b: "48 hrs", s: "Avg. Turnaround" },
];

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
    <header className="min-h-[calc(100vh-76px)] flex items-center py-10">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-accent mb-3.5"
          >
            Tech-Enabled Recruitment &amp; Staffing Partner
          </motion.span>
          <motion.h1
            variants={item}
            className="text-[clamp(38px,5.4vw,62px)] font-bold leading-[1.05] tracking-tight"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              High-Performance
            </span>{" "}
            Teams Across India
          </motion.h1>
          <motion.p variants={item} className="text-muted text-[17px] mt-5 mb-7 max-w-[460px]">
            Helping startups and enterprises hire top talent across technology, non-tech,
            leadership, and volume hiring domains.
          </motion.p>
          <motion.div variants={item}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-dark text-white font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              Talk to our Experts
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-7 mt-10">
            {STATS.map((s) => (
              <div key={s.s} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <div>
                  <b className="block text-lg">{s.b}</b>
                  <small className="text-muted text-[12.5px]">{s.s}</small>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

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
