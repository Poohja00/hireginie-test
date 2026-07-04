"use client";

import { useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Executive Search",
    subtitle: "Leadership & CXO Hiring",
    desc: "We identify and place senior leaders who shape the trajectory of your business. Our process combines deep market mapping, rigorous assessment, and confidential outreach to find leaders who don't just fit the role — they elevate it.",
  },
  {
    number: "02",
    title: "Talent Acquisition",
    subtitle: "Permanent Hiring",
    desc: "End-to-end permanent hiring across technology, non-tech, and leadership roles. We go beyond CVs to assess for culture fit, growth potential, and long-term contribution — delivering talent that drives your business forward.",
  },
  {
    number: "03",
    title: "Recruiter on Demand — RPO",
    subtitle: "Embedded Recruitment",
    desc: "Dedicated recruiters embedded within your team, working as a true extension of your HR function. Ideal for high-volume hiring, hypergrowth phases, or when you need specialist bandwidth without permanent overhead.",
  },
  {
    number: "04",
    title: "Employer of Record",
    subtitle: "Compliant Workforce Management",
    desc: "Hire anywhere in India without setting up an entity. We handle contracts, payroll, compliance, and benefits — so you can focus on your people, not the paperwork.",
  },
  {
    number: "05",
    title: "POSH Compliance",
    subtitle: "Workplace Safety & Inclusion",
    desc: "Comprehensive Prevention of Sexual Harassment support — from policy drafting and IC committee formation to training and annual reports. Build a safe, inclusive workplace that meets every legal requirement.",
  },
];

const CHIP_BG = "#424D76";
const PANEL_BG = "#333957";

export default function ServicesStack() {
  const [active, setActive] = useState(-1);
  const open = active >= 0;

  return (
    <section className="bg-white pt-10 pb-14">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-[16px] font-semibold tracking-[0.16em] uppercase">
            Talent Solutions
          </span>
          <h2 className="font-serif text-[clamp(28px,2.8vw,36px)] font-bold text-dark mt-2">
            Our Services
          </h2>
          <p className="text-warm-grey mt-3 text-[16px]">
            Strategic hiring solutions for businesses of every size.
          </p>
        </div>

        {/* Desktop — compact chips + side reveal */}
        <div
          className="hidden lg:flex gap-4 h-[300px]"
          onMouseLeave={() => setActive(-1)}
        >
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            const isHidden = open && !isActive;
            return (
              <div key={s.title} className="contents">
                {/* Chip */}
                <div
                  onMouseEnter={() => setActive(i)}
                  style={{
                    backgroundColor: CHIP_BG,
                    flexGrow: isHidden ? 0.0001 : 1,
                    flexBasis: 0,
                    opacity: isHidden ? 0 : 1,
                    transition:
                      "flex-grow 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
                  }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer min-w-0"
                >
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="text-white/40 text-[13px] font-mono tracking-widest">{s.number}</span>
                    <h3 className="font-serif text-white text-[18px] font-bold leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  {/* Active highlight bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-mid to-accent-gold transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                </div>

                {/* Description panel — unfolds beside the hovered chip */}
                <div
                  style={{
                    flexGrow: isActive ? 4 : 0.0001,
                    flexBasis: 0,
                    opacity: isActive ? 1 : 0,
                    backgroundColor: PANEL_BG,
                    transition:
                      "flex-grow 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease 0.1s",
                  }}
                  className="rounded-2xl overflow-hidden min-w-0"
                >
                  <div className="h-full flex flex-col justify-center p-9 whitespace-normal">
                    <p className="text-accent-gold text-[14px] font-medium tracking-wide whitespace-nowrap">
                      {s.subtitle}
                    </p>
                    <p className="text-white/80 text-[16px] leading-relaxed mt-3 max-w-[640px] min-w-[420px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile — stacked cards, tap to expand */}
        <div className="lg:hidden flex flex-col gap-4">
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <div
                key={s.title}
                onClick={() => setActive(isActive ? -1 : i)}
                style={{ backgroundColor: CHIP_BG }}
                className="rounded-2xl px-6 py-5 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/40 text-xs font-mono tracking-widest block mb-1">{s.number}</span>
                    <h3 className="font-serif text-white text-[20px] font-bold">{s.title}</h3>
                  </div>
                  <span className="w-8 h-8 rounded-full border border-white/30 grid place-items-center text-white/60 shrink-0">
                    {isActive ? "−" : "+"}
                  </span>
                </div>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isActive ? "300px" : "0px" }}
                >
                  <p className="text-accent-gold text-[13px] font-medium tracking-wide mt-3">{s.subtitle}</p>
                  <p className="text-white/75 text-[15px] leading-relaxed mt-2">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
