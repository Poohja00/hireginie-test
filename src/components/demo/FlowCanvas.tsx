"use client";

import { useEffect, useRef } from "react";

type Theme = "dark" | "light";

const PALETTE = {
  dark: {
    glow: ["rgba(190,40,70,0.38)", "rgba(120,15,40,0.0)"],
    line: (a: number) => `rgba(255,105,125,${a})`,
    fill: "rgba(200,45,75,0.06)",
    lineBoost: 1,
  },
  light: {
    glow: ["rgba(240,150,170,0.32)", "rgba(255,255,255,0)"],
    line: (a: number) => `rgba(190,35,65,${a})`,
    fill: "rgba(235,120,145,0.07)",
    lineBoost: 0.55,
  },
};

// Two silk ribbons made of many phase-shifted sine lines, drifting slowly.
// ponytail: plain canvas 2D, no WebGL. Swap to a shader if we need more ribbons.
export default function FlowCanvas({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const p = PALETTE[theme];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, raf = 0, visible = true;
    const mouse = { x: 0.5, y: 0.5, sx: 0.5, sy: 0.5 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ribbon = (t: number, base: number, amp: number, dir: number, lines: number, seed: number) => {
      const step = 16;
      for (let k = 0; k < lines; k++) {
        const kk = k / lines;
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += step) {
          const u = x / w;
          const y =
            h * base +
            Math.sin(u * 3.2 + t * 0.35 * dir + seed + kk * 1.6) * amp * h +
            Math.sin(u * 6.1 - t * 0.5 * dir + seed * 2 + kk * 0.9) * amp * 0.42 * h +
            (mouse.sy - 0.5) * 40 * (1 - kk) +
            kk * 70;
          const xx = x + (mouse.sx - 0.5) * 30 * kk;
          if (x === -20) ctx.moveTo(xx, y); else ctx.lineTo(xx, y);
        }
        const edge = Math.sin(kk * Math.PI);
        ctx.strokeStyle = p.line((0.05 + edge * 0.5) * p.lineBoost);
        ctx.lineWidth = 0.8 + edge * 0.6;
        ctx.stroke();
      }
    };

    const frame = (ms: number) => {
      const t = ms / 1000;
      mouse.sx += (mouse.x - mouse.sx) * 0.04;
      mouse.sy += (mouse.y - mouse.sy) * 0.04;
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(
        w * (0.55 + (mouse.sx - 0.5) * 0.15), h * 0.35, 0, w * 0.5, h * 0.4, Math.max(w, h) * 0.7
      );
      g.addColorStop(0, p.glow[0]);
      g.addColorStop(1, p.glow[1]);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = p.fill;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 24) {
        ctx.lineTo(x, h * 0.55 + Math.sin(x / w * 4 + t * 0.4) * h * 0.1);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      ribbon(t, 0.33, 0.1, 1, 46, 0);
      ribbon(t, 0.45, 0.08, -1, 36, 2.4);

      if (!reduce && visible) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = (e.clientY - r.top) / r.height;
    };
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    });

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    io.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, [theme]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full [will-change:transform]" aria-hidden />;
}
