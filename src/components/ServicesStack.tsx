"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Executive Search",
    subtitle: "Leadership & CXO Hiring",
    desc: "We identify and place senior leaders who shape the trajectory of your business. Our process combines deep market mapping, rigorous assessment, and confidential outreach to find leaders who don't just fit the role — they elevate it.",
    bg: "#4A5275",
  },
  {
    number: "02",
    title: "Talent Acquisition",
    subtitle: "Permanent Hiring",
    desc: "End-to-end permanent hiring across technology, non-tech, and leadership roles. We go beyond CVs to assess for culture fit, growth potential, and long-term contribution — delivering talent that drives your business forward.",
    bg: "#424B6A",
  },
  {
    number: "03",
    title: "Recruiter on Demand — RPO",
    subtitle: "Embedded Recruitment",
    desc: "Dedicated recruiters embedded within your team, working as a true extension of your HR function. Ideal for high-volume hiring, hypergrowth phases, or when you need specialist bandwidth without permanent overhead.",
    bg: "#3A4260",
  },
  {
    number: "04",
    title: "Employer of Record",
    subtitle: "Compliant Workforce Management",
    desc: "Hire anywhere in India without setting up an entity. We handle contracts, payroll, compliance, and benefits — so you can focus on your people, not the paperwork.",
    bg: "#333957",
  },
  {
    number: "05",
    title: "POSH Compliance",
    subtitle: "Workplace Safety & Inclusion",
    desc: "Comprehensive Prevention of Sexual Harassment support — from policy drafting and IC committee formation to training and annual reports. Build a safe, inclusive workplace that meets every legal requirement.",
    bg: "#2C314D",
  },
];

function Card({
  service,
  index,
  total,
  containerRef,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale this card down as the next card scrolls in on top
  const scaleStart = index / total;
  const scaleEnd = (index + 0.6) / total;
  const targetScale = 1 - (total - index - 1) * 0.035;

  const scale = useTransform(
    scrollYProgress,
    [scaleStart, Math.min(scaleEnd, 0.98)],
    [1, index < total - 1 ? targetScale : 1]
  );

  return (
    <div
      className="sticky"
      style={{ top: `${100 + index * 18}px` }}
    >
      <motion.div
        style={{ scale, backgroundColor: service.bg, transformOrigin: "top center" }}
        className="rounded-3xl px-10 py-10 lg:px-16 lg:py-14 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-center"
      >
        {/* Left */}
        <div>
          <span className="text-white/30 text-xs font-mono tracking-widest mb-4 block">
            {service.number} / {String(total).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-white text-[clamp(24px,2.8vw,36px)] font-black leading-tight">
            {service.title}
          </h3>
          <p className="text-white/50 text-sm mt-3 font-medium tracking-wide">
            {service.subtitle}
          </p>
        </div>

        {/* Right */}
        <p className="text-white/75 text-[15px] lg:text-[16px] leading-relaxed">
          {service.desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function ServicesStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white pt-10 pb-6">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-[12px] font-semibold tracking-[0.16em] uppercase">
            Talent Solutions
          </span>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-black text-dark mt-2">
            Our Services
          </h2>
          <p className="text-warm-grey mt-3 text-[15px]">
            Strategic hiring solutions for businesses of every size.
          </p>
        </div>

        {/* Stack container — height drives how long the animation plays */}
        <div
          ref={containerRef}
          style={{ height: `${SERVICES.length * 200 + 500}px` }}
          className="relative"
        >
          {SERVICES.map((service, index) => (
            <Card
              key={service.title}
              service={service}
              index={index}
              total={SERVICES.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
