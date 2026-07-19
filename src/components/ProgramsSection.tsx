"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const PROGRAMS = [
  {
    tag: "Accelerator Program",
    desc: "Creating inclusive workplaces by connecting women talent with meaningful opportunities.",
    cta: "Learn More",
    ctaSide: "right" as const,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    accordion: [
      {
        t: "What you will learn",
        d: "How dedicated recruiter pods plan and execute hiring sprints, from sourcing and screening to closing candidates fast without compromising on quality or culture fit.",
      },
      {
        t: "Opportunities",
        d: "Priority access to Hireginie's specialist recruiters, weekly pipeline reviews, and flexible surge capacity that scales up or down with your hiring needs.",
      },
    ],
  },
  {
    tag: "Business Beyond Bias",
    desc: "Fast-track hiring support designed for high-growth startups scaling teams quickly.",
    cta: "Learn More",
    ctaSide: "left" as const,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    accordion: [
      {
        t: "What you will learn",
        d: "How to build structured, bias-aware hiring processes, from writing inclusive job descriptions to running fair, consistent interviews that widen your talent pool.",
      },
      {
        t: "Opportunities",
        d: "Direct access to a curated network of women talent across tech, non-tech, and leadership roles, plus mentorship and career-guidance sessions run alongside the placement process.",
      },
    ],
  },
];

function Accordion({ items }: { items: { t: string; d: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-6">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.t} className="border-t border-black/10 last:border-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-serif text-[22px] font-bold text-dark group-hover:text-[#3B5BDB] transition-colors">
                {item.t}
              </span>
              <span
                className="shrink-0 ml-4 text-dark group-hover:text-[#3B5BDB] transition-all duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="text-warm-grey text-[17px] leading-relaxed pb-5 pr-8">{item.d}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProgramsSection() {
  const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";
  return (
    <section className="pt-4 pb-16">
      <div className={wrap}>
        <Reveal className="text-center mb-8">
          <span className="block font-serif text-dark font-bold text-[16px] mb-2">Tech-Enabled Recruitment &amp; Staffing Partner</span>
          <h2 className="font-serif text-[clamp(32px,4.4vw,52px)] font-black text-dark">Impact Programs</h2>
          <p className="text-warm-grey text-[16px] mt-3">Creating opportunities through innovation, inclusion, and learning.</p>
        </Reveal>

        <div className="space-y-8">
          {PROGRAMS.map((p, idx) => {
            const imageFirst = idx % 2 === 0;
            return (
              <Reveal key={p.tag}>
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Image column */}
                  <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"} w-full lg:w-[38%] lg:shrink-0`}>
                    <span className="block w-full bg-[#E7E6FB] text-dark text-[18px] px-5 py-3 rounded-lg mb-3.5">
                      {p.tag}
                    </span>
                    <div className="relative rounded-xl overflow-hidden aspect-[4/2.2]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.tag} className="w-full h-full object-cover" />
                      <Link
                        href="/programs"
                        className={`absolute bottom-3 ${p.ctaSide === "right" ? "right-3" : "left-3"} bg-dark/90 text-white font-semibold text-[14px] px-5 py-3 rounded-md hover:bg-black transition-colors`}
                      >
                        {p.cta}
                      </Link>
                    </div>
                  </div>

                  {/* Text column */}
                  <div className={`${imageFirst ? "lg:order-2" : "lg:order-1"} w-full lg:flex-1 lg:pt-[68px]`}>
                    <p className="text-dark text-[18px] leading-relaxed">{p.desc}</p>
                    <Accordion items={p.accordion} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
