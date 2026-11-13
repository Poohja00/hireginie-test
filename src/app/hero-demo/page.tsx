"use client";

import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/* ================= Small animated pieces ================= */

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 50, damping: 18 });

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

function Sparkline({ delay = 0, width = 110 }: { delay?: number; width?: number }) {
  return (
    <svg width={width} height="26" viewBox="0 0 110 26" fill="none">
      <motion.path
        d="M3 19 C 12 13, 20 21, 30 16 S 48 8, 58 14 S 78 6, 88 10 S 102 4, 107 6"
        stroke="#FE622A"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

function Donut() {
  // Applied 248 / Screening 128 / Interview 64 / Offered 32 (proportional to values)
  const segments = [
    { color: "#FE622A", frac: 0.525 },
    { color: "#5D6585", frac: 0.271 },
    { color: "#FD8A18", frac: 0.136 },
    { color: "#363636", frac: 0.068 },
  ];
  const R = 34;
  const C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <svg width="96" height="96" viewBox="0 0 96 96">
      {segments.map((s, i) => {
        const dash = s.frac * C;
        const el = (
          <motion.circle
            key={i}
            cx="48" cy="48" r={R}
            fill="none"
            stroke={s.color}
            strokeWidth="13"
            strokeDasharray={`${dash} ${C - dash}`}
            strokeDashoffset={-offset}
            transform="rotate(-90 48 48)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 + i * 0.25 }}
          />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}

/* Orange pulsing junction node */
function Node({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / 850) * 100}%`, top: `${(y / 682) * 100}%` }}
    >
      <span className="relative flex h-2 w-2">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-accent"
          animate={{ scale: [1, 2.2], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay, ease: "easeOut" }}
        />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
    </div>
  );
}

/* Grey diamond node */
function Diamond({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute w-2 h-2 bg-[#8B93A7] rotate-45 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / 850) * 100}%`, top: `${(y / 682) * 100}%` }}
    />
  );
}

/* Circular icon chip */
function Chip({
  x, y, bg, delay = 0, children,
}: { x: number; y: number; bg: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / 850) * 100}%`, top: `${(y / 682) * 100}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 220, damping: 15 }}
    >
      <div
        className="w-10 h-10 rounded-full grid place-items-center shadow-md"
        style={{ backgroundColor: bg }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* Real photo avatar (cropped from the original PNG) */
function Photo({
  x, y, size, src, ring, delay = 0,
}: { x: number; y: number; size: number; src: string; ring: string; delay?: number }) {
  return (
    <motion.div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(x / 850) * 100}%`, top: `${(y / 682) * 100}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 16 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
        className="rounded-full p-[2px]"
        style={{ border: `2px solid ${ring}`, width: size, height: size }}
      >
        <Image
          src={src}
          alt=""
          width={size}
          height={size}
          className="rounded-full w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

/* White floating card */
function Card({
  x, y, w, delay = 0, floatDur = 4.5, children, className = "",
}: {
  x: number; y: number; w?: number; delay?: number; floatDur?: number;
  children: React.ReactNode; className?: string;
}) {
  return (
    <motion.div
      className="absolute z-20"
      style={{
        left: `${(x / 850) * 100}%`,
        top: `${(y / 682) * 100}%`,
        width: w ? `${(w / 850) * 100}%` : undefined,
      }}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: floatDur, repeat: Infinity, delay: delay + 0.6, ease: "easeInOut" }}
        className={`bg-white rounded-2xl border border-black/8 shadow-[0_16px_44px_rgba(20,19,26,0.12)] ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ================= Composition ================= */

function AnimatedHeroGraphic() {
  return (
    <div className="relative w-full max-w-[860px] aspect-[850/682] select-none text-[clamp(8px,0.82vw,11.5px)]">
      {/* Exact dotted India map (designer asset) */}
      <motion.div
        className="absolute left-[16%] top-[2%] w-[76%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <Image
          src="/hero/map.png"
          alt=""
          width={1345}
          height={1169}
          priority
          unoptimized
          className="w-full h-auto mix-blend-multiply"
        />
      </motion.div>

      {/* SVG layer: connection lines */}
      <svg viewBox="0 0 850 682" className="absolute inset-0 w-full h-full">
        {/* Connection lines (thin, grey + one orange like the reference) */}
        {[
          { d: "M242 112 C 300 150, 320 190, 335 235", stroke: "#FE622A", w: 1.6 },
          { d: "M160 300 C 220 320, 280 310, 332 300", stroke: "#9AA1B3", w: 1.3 },
          { d: "M332 300 C 380 330, 430 345, 470 360", stroke: "#9AA1B3", w: 1.3 },
          { d: "M520 332 C 560 320, 600 315, 640 320", stroke: "#9AA1B3", w: 1.3 },
          { d: "M624 113 C 590 160, 560 200, 536 232", stroke: "#9AA1B3", w: 1.3 },
          { d: "M455 555 C 530 615, 630 605, 723 525", stroke: "#9AA1B3", w: 1.3 },
          { d: "M758 278 C 740 310, 730 330, 725 350", stroke: "#9AA1B3", w: 1.3 },
        ].map((l, i) => (
          <g key={i}>
            <motion.path
              d={l.d}
              fill="none"
              stroke={l.stroke}
              strokeWidth={l.w}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.1, delay: 0.9 + i * 0.2, ease: "easeInOut" }}
            />
            {/* Traveling data dot — candidates "flowing" along the network */}
            <circle r="3.5" fill="#FE622A" opacity="0.9">
              <animateMotion
                dur={`${3.2 + (i % 3)}s`}
                begin={`${1.8 + i * 0.4}s`}
                repeatCount="indefinite"
                path={l.d}
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Diamond + pulsing nodes */}
      <Diamond x={575} y={128} />
      <Diamond x={332} y={300} />
      <Diamond x={470} y={360} />
      <Diamond x={112} y={385} />
      <Node x={330} y={299} delay={0} />
      <Node x={520} y={332} delay={0.6} />
      <Node x={536} y={232} delay={1.1} />
      <Node x={455} y={555} delay={1.6} />
      <Diamond x={610} y={600} />

      {/* Photos (cropped from the original illustration) */}
      <Photo x={242} y={112} size={62} src="/hero/av1.png" ring="#FE622A" delay={0.4} />
      <Photo x={624} y={113} size={62} src="/hero/av2.png" ring="#5D6585" delay={0.6} />
      <Photo x={758} y={278} size={52} src="/hero/av3.png" ring="#FE622A" delay={0.8} />
      <Photo x={723} y={520} size={58} src="/hero/av4.png" ring="#5D6585" delay={1.0} />

      {/* Icon chips */}
      <Chip x={172} y={163} bg="#FE622A" delay={0.7}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
          <path d="M4 20c1-4 4.5-6 8-6s7 2 8 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Chip>
      <Chip x={679} y={154} bg="#5D6585" delay={0.9}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="white" strokeWidth="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="white" strokeWidth="2" />
        </svg>
      </Chip>
      <Chip x={791} y={336} bg="#FE622A" delay={1.1}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
        </svg>
      </Chip>
      <Chip x={567} y={587} bg="#5D6585" delay={1.3}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 20V12M12 20V6M19 20v-5" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </Chip>

      {/* Matched pill */}
      <Card x={245} y={208} delay={0.8} floatDur={4.6} className="px-[1.2em] py-[0.9em] flex items-center gap-[0.6em] w-max">
        <motion.span
          className="w-[2em] h-[2em] rounded-full bg-accent grid place-items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
        >
          <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
            <path d="m5 13 4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
        <b className="text-dark text-[1.15em]">Matched</b>
      </Card>

      {/* Profile / rating card */}
      <Card x={375} y={180} w={255} delay={1.0} floatDur={5.2} className="p-[1em]">
        <span className="absolute -top-[0.7em] -right-[0.7em] w-[2.1em] h-[2.1em] rounded-full bg-accent-gold/90 grid place-items-center shadow">
          <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none">
            <path d="m5 13 4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="flex items-start gap-[0.8em]">
          <Image
            src="/hero/profile.png"
            alt=""
            width={62}
            height={62}
            className="rounded-lg w-[4.4em] h-[4.4em] object-cover"
          />
          <div className="flex-1">
            <div className="flex gap-[0.2em]">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.svg
                  key={i}
                  className="w-[1.3em] h-[1.3em]"
                  viewBox="0 0 24 24" fill="#FE622A"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.12 }}
                >
                  <path d="M12 2l2.9 6.26 6.6.56-5 4.55 1.5 6.63L12 16.9 5.9 20l1.5-6.63-5-4.55 6.6-.56L12 2z" />
                </motion.svg>
              ))}
            </div>
            <div className="h-[0.55em] bg-black/8 rounded mt-[0.8em] w-[90%]" />
            <div className="h-[0.55em] bg-black/8 rounded mt-[0.5em] w-[65%]" />
          </div>
        </div>
        <div className="flex gap-[0.45em] mt-[0.9em]">
          {["Skills Matched", "Culture Fit", "Available"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 + i * 0.15 }}
              className={`text-[0.78em] px-[0.7em] py-[0.45em] rounded font-semibold whitespace-nowrap ${
                i === 0 ? "bg-accent text-white" : "bg-soft text-warm-grey"
              }`}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </Card>

      {/* Active Requirements */}
      <Card x={63} y={278} w={188} delay={1.2} floatDur={4.2} className="p-[1em]">
        <span className="text-dark text-[1.05em] font-semibold">Active Requirements</span>
        <div className="flex items-center gap-[0.7em] mt-[0.6em]">
          <span className="w-[2.4em] h-[2.4em] rounded-lg bg-accent grid place-items-center">
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="7" width="18" height="13" rx="2" stroke="white" strokeWidth="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="white" strokeWidth="2" />
            </svg>
          </span>
          <b className="font-serif text-accent text-[2em] font-bold">
            <CountUp target={24} />
          </b>
        </div>
        <Sparkline delay={1.8} />
      </Card>

      {/* Placements */}
      <Card x={568} y={306} w={160} delay={1.4} floatDur={4.8} className="p-[1em]">
        <span className="text-dark text-[1.05em] font-semibold">Placements</span>
        <b className="block font-serif text-accent text-[1.9em] font-bold mt-[0.2em]">
          <CountUp target={5426} suffix="+" />
        </b>
        <span className="text-warm-grey text-[0.85em]">This Year</span>
        <Sparkline delay={2.1} width={95} />
      </Card>

      {/* Shortlisted */}
      <Card x={300} y={363} w={170} delay={1.6} floatDur={4.4} className="px-[1.1em] py-[0.9em] flex items-center gap-[0.8em]">
        <span className="w-[2.6em] h-[2.6em] rounded-full bg-slate grid place-items-center shrink-0">
          <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="3.5" stroke="white" strokeWidth="2" />
            <path d="M2.5 19c.8-3 3.4-5 6.5-5s5.7 2 6.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="17" cy="9" r="2.5" stroke="white" strokeWidth="2" />
          </svg>
        </span>
        <div>
          <span className="text-warm-grey text-[0.95em] block">Shortlisted</span>
          <b className="font-serif text-dark text-[1.5em] font-bold">
            <CountUp target={128} />
          </b>
        </div>
      </Card>

      {/* Offer Extended */}
      <Card x={537} y={424} w={148} delay={1.8} floatDur={5} className="px-[1.1em] py-[0.9em] flex items-center gap-[0.8em]">
        <span className="w-[2.6em] h-[2.6em] rounded-full bg-slate grid place-items-center shrink-0">
          <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
            <path d="M11 12.5 8.6 10a1.7 1.7 0 0 1 2.4-2.4l3.5 3.4 2-1.9c.8-.8 2-.8 2.7 0l2.3 2.3M2.5 11.6l2.3-2.3c.7-.8 1.9-.8 2.7 0" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m12 17.5 1.6 1.5a1.6 1.6 0 0 0 2.3-2.3l.5.5a1.6 1.6 0 0 0 2.3-2.3l.4.4a1.6 1.6 0 1 0 2.3-2.2M12 17.4l-1.5 1.5a1.6 1.6 0 0 1-2.3-2.2l-.5.4a1.6 1.6 0 0 1-2.3-2.2l-.4.4A1.6 1.6 0 0 1 2.7 13" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <b className="text-dark text-[1.05em] leading-tight">Offer<br />Extended</b>
      </Card>

      {/* Hiring Pipeline */}
      <Card x={103} y={447} w={290} delay={2.0} floatDur={5.4} className="p-[1.2em]">
        <span className="text-dark text-[1.15em] font-semibold block mb-[0.7em]">Hiring Pipeline</span>
        <div className="flex items-center gap-[1.2em]">
          <div className="relative shrink-0">
            <Donut />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <b className="font-serif text-dark text-[1.4em] font-bold block leading-none">
                  <CountUp target={248} />
                </b>
                <span className="text-warm-grey text-[0.7em]">Total</span>
              </div>
            </div>
          </div>
          <div className="space-y-[0.45em] flex-1">
            {[
              { c: "#FE622A", l: "Applied", v: 248 },
              { c: "#5D6585", l: "Screening", v: 128 },
              { c: "#FD8A18", l: "Interview", v: 64 },
              { c: "#363636", l: "Offered", v: 32 },
            ].map((r, i) => (
              <motion.div
                key={r.l}
                className="flex items-center gap-[0.6em] text-[0.9em]"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 + i * 0.15 }}
              >
                <span className="w-[0.6em] h-[0.6em] rounded-full shrink-0" style={{ backgroundColor: r.c }} />
                <span className="text-warm-grey flex-1">{r.l}</span>
                <b className="text-dark">{r.v}</b>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function HeroDemo() {
  return (
    <>
      <div className="bg-dark text-white text-center py-4 text-[15px]">
        Internal demo — vector recreation of the hero illustration, animated. Not linked from the site.
      </div>

      <section className="bg-white py-14">
        <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <div>
            <span className="inline-block text-[16px] font-semibold text-slate mb-3">
              Tech-Enabled Recruitment &amp; Staffing Partner
            </span>
            <h1 className="font-serif text-[clamp(32px,3.4vw,44px)] font-bold leading-[1.15] tracking-tight text-dark">
              Building High Performance Team{" "}
              <span className="bg-gradient-to-r from-accent via-accent-mid to-accent-gold bg-clip-text text-transparent">
                Across India
              </span>
            </h1>
            <p className="text-warm-grey text-[20px] leading-relaxed mt-4 mb-6 max-w-[520px]">
              Helping startups and enterprises hire top talent across technology,
              non-tech, leadership, and volume hiring domains.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AnimatedHeroGraphic />
          </div>
        </div>
      </section>
    </>
  );
}
