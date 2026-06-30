import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#363636] pt-16 pb-7 text-white">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Brand + legal */}
          <div>
            <Image
              src="/logo/hireginiemasterlogos/logo-b.png"
              alt="Hireginie — Talent Cloud"
              width={180}
              height={44}
              className="h-[40px] w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-[15px] leading-relaxed mb-5">
              <b className="text-white/90">Security Advice:</b> Hireginie does not charge any fee
              at any stage of its recruitment process from the candidate nor allows their
              employees to collect any fees from any candidates.
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed">
              <b className="text-white/90">EEO Statement:</b> Hireginie India is an Equal
              Employment Opportunity Employer. All qualified applicants receive consideration
              for employment without regard to race, color, religion, sex, sexual orientation,
              gender identity or expression, appearance, national origin, age, marital status,
              veteran status, or disability status, or any other characteristics. We are driven
              by our promise of human forward.
            </p>
          </div>

          {/* Contact + Socials, stacked, left-aligned */}
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-white mb-5">
              Contact
            </h4>
            <div className="flex items-center gap-6 flex-wrap mb-8">
              <div className="flex items-center gap-3">
                <span className="w-[40px] h-[40px] rounded-full bg-slate grid place-items-center shrink-0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <b className="block font-serif text-[16px] font-bold">Call Us</b>
                  <a href="tel:+919415088702" className="text-white/60 text-[13px] hover:text-accent transition-colors">
                    +91 9415088702
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-[40px] h-[40px] rounded-full bg-slate grid place-items-center shrink-0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.8" />
                    <path d="m2 7 10 6 10-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <b className="block font-serif text-[16px] font-bold">Email Us</b>
                  <a href="mailto:contactus@hireginie.com" className="text-white/60 text-[13px] hover:text-accent transition-colors">
                    contactus@hireginie.com
                  </a>
                </div>
              </div>
            </div>

            <h4 className="font-serif text-xl font-bold text-white mb-5">
              Socials
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="grid place-items-center w-[42px] h-[42px] rounded-full bg-gradient-to-br from-accent to-accent-gold hover:-translate-y-0.5 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid place-items-center w-[42px] h-[42px] rounded-full bg-gradient-to-br from-accent to-accent-gold hover:-translate-y-0.5 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-[13px] mt-12 pt-6 border-t border-white/10">
          <span>© Copyright 2026 Hireginie Talent Cloud. All Rights Reserved</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/70 transition-colors">terms &amp; conditions</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">cookie policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
