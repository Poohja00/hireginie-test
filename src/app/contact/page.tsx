"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const INFO = [
  { i: "✉️", t: "Email", v: "hello@hireginie.com" },
  { i: "📞", t: "Phone", v: "+91 98765 43210" },
  { i: "💬", t: "WhatsApp", v: "+91 98765 43210" },
  { i: "📍", t: "Office", v: "Bengaluru, Karnataka, India" },
  { i: "🕒", t: "Hours", v: "Mon–Sat, 9:30 AM – 6:30 PM IST" },
];

const field = "w-full px-4 py-3 border border-black/10 rounded-[10px] text-[15px] outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent-soft";
const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <>
      <PageHero title="Contact Us" crumb="Contact Us" />
      <section className="py-24">
        <div className={`${wrap} grid lg:grid-cols-2 gap-10`}>
          <Reveal>
            <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-accent">Get in touch</span>
            <h2 className="text-3xl font-semibold mt-2 mb-2">Let&apos;s talk about your hiring</h2>
            <p className="text-muted mb-6">Tell us what you&apos;re building and we&apos;ll get back within 48 hours.</p>
            <form onSubmit={submit} className="space-y-4">
              <div><label className="block text-sm font-medium mb-1.5">Full Name</label><input required placeholder="Your name" className={field} /></div>
              <div><label className="block text-sm font-medium mb-1.5">Email</label><input type="email" required placeholder="you@company.com" className={field} /></div>
              <div><label className="block text-sm font-medium mb-1.5">Phone / WhatsApp</label><input placeholder="+91 ..." className={field} /></div>
              <div><label className="block text-sm font-medium mb-1.5">How can we help?</label><textarea rows={4} required placeholder="Roles, team size, timeline..." className={field} /></div>
              <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-deep text-white font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(107,78,255,0.4)]">
                {sent ? "Sent ✓" : "Send Message →"}
              </button>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-soft rounded-[18px] p-8">
              {INFO.map((r) => (
                <div key={r.t} className="flex gap-3.5 items-start py-3.5 border-b border-black/10 last:border-0">
                  <span className="w-[42px] h-[42px] grid place-items-center rounded-xl bg-accent-soft text-accent shrink-0">{r.i}</span>
                  <div><b className="text-[15px]">{r.t}</b><p className="text-muted text-sm">{r.v}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
