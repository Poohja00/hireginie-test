"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 0 1-3.06-.48L3 21l1.6-4.2A7.93 7.93 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-accent to-accent-gold",
    t: "Quick Responses",
    d: "We typically respond within 24 hours",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 22V11M2 13v7a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-1.6l1.4-7A2 2 0 0 0 18 11h-5l1-5a2 2 0 0 0-2-2.4L11 4l-4 7H2Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "bg-slate",
    t: "Expert Guidance",
    d: "Get advice from our talent experts",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "bg-dark",
    t: "Confidential",
    d: "Your information is always protected",
  },
];

const field =
  "w-full px-4 py-3.5 bg-soft rounded-[10px] text-[14px] outline-none transition-all placeholder:text-warm-grey/70 focus:ring-2 focus:ring-accent/40";
const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setAgreed(false);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <>
      {/* Hero + form */}
      <section className="relative overflow-hidden bg-soft pt-16 pb-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[120%] bg-white rounded-l-[200px] pointer-events-none" />
        <div className={`${wrap} relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start`}>
          {/* Left */}
          <Reveal>
            <span className="font-serif text-[19px] font-semibold tracking-[0.16em] uppercase text-accent">
              Get in touch
            </span>
            <h1 className="font-serif text-[40px] font-black leading-[1.2] tracking-tight text-dark mt-4">
              Let&apos;s Build
              <br />
              What&apos;s Next, <span className="bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent">Together.</span>
            </h1>
            <p className="font-sans text-warm-grey text-[16px] leading-relaxed mt-6 max-w-[460px]">
              Have a hiring challenge or a question about our services? We&apos;d love to
              hear from you. Connect with our team and discover how Hireginie can
              support your talent goals.
            </p>

            <div className="flex flex-nowrap gap-6 mt-14">
              {FEATURES.map((f) => (
                <div key={f.t} className="flex items-start gap-3 min-w-0">
                  <div className={`w-[52px] h-[52px] rounded-full grid place-items-center shrink-0 ${f.bg}`}>
                    {f.icon}
                  </div>
                  <div className="min-w-0">
                    <b className="block text-dark text-[14.5px] mb-1 whitespace-nowrap">{f.t}</b>
                    <p className="text-warm-grey text-[13px] leading-snug">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="bg-white rounded-3xl p-6 lg:p-7 shadow-[0_20px_60px_rgba(20,19,26,0.08)]"
            >
              <h2 className="font-serif text-lg font-black text-dark mb-4">Send Us a Message</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="full name" className={field} />
                <input type="email" required placeholder="email address" className={field} />
                <input placeholder="company name" className={field} />
                <input placeholder="contact number" className={field} />
              </div>
              <input placeholder="looking for?" className={`${field} mt-3`} />
              <textarea rows={3} required placeholder="tell us about your requirements" className={`${field} mt-3 resize-none`} />

              <label className="flex items-center gap-2.5 mt-4 text-[13px] text-warm-grey cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 accent-accent rounded"
                />
                I agree to the <span className="text-accent">privacy policy.</span>
              </label>

              <button
                type="submit"
                className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-gold text-white font-semibold text-[14px] px-7 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(254,98,42,0.3)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                {sent ? "Sent ✓" : "Talk to our Experts"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map + other ways to reach */}
      <section className="pt-6 pb-16 bg-white">
        <div className={`${wrap} grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start`}>
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden h-[380px] border border-black/8">
              <iframe
                title="Hireginie location"
                src="https://www.google.com/maps?q=Wework+Opp+BPL+Technologies+Arekere+Bangalore&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-serif text-2xl font-black text-dark mb-6">Other Ways to Reach Us</h3>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="w-[46px] h-[46px] rounded-full bg-slate grid place-items-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <b className="block text-dark text-[15px]">Call Us</b>
                  <a href="tel:+919415088702" className="text-warm-grey text-sm hover:text-accent transition-colors">+91 9415088702</a>
                </div>
              </div>

              <div className="w-px self-stretch bg-black/10" />

              <div className="flex items-center gap-3">
                <span className="w-[46px] h-[46px] rounded-full bg-slate grid place-items-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.8" />
                    <path d="m2 7 10 6 10-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <b className="block text-dark text-[15px]">Email Us</b>
                  <a href="mailto:contactus@hireginie.com" className="text-warm-grey text-sm hover:text-accent transition-colors">contactus@hireginie.com</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
