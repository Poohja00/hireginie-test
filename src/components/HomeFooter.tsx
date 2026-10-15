import Image from "next/image";
import Link from "next/link";
import { Domine } from "next/font/google";

const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ICON = "grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-[#14070a] text-white";
const SOCIAL = "grid h-[46px] w-[46px] place-items-center rounded-full bg-gradient-to-r from-[#c0344f] to-[#ee6a76] text-white shadow-[0_8px_20px_rgba(192,52,79,0.3)] transition-transform hover:-translate-y-0.5";

// Footer for the new home design (pink / crimson vibe, Domine headings, Satoshi body).
// The default Footer stays for every other page.
export default function HomeFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#fde8ec] to-[#fcd3da] text-[#14070a]" style={{ fontFamily: "Satoshi, sans-serif" }}>
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-6 pb-12 pt-16 lg:grid-cols-[1.5fr_1fr] lg:px-10">
        <div>
          <Image src="/logo/hireginiemasterlogos/logo-b.png" alt="Hireginie Talent Cloud" width={240} height={58} className="mb-6 h-[52px] w-auto" />
          <p className="mb-3 max-w-[760px] text-[15px] leading-relaxed text-[#3d2a2e]">
            <b className="font-semibold text-[#14070a]">Security Advice:</b> Hireginie does not charge any fee at any stage of its
            recruitment process from the candidate nor allows their employees to collect any fees from any candidates.
          </p>
          <p className="max-w-[760px] text-[15px] leading-relaxed text-[#3d2a2e]">
            <b className="font-semibold text-[#14070a]">EEO Statement:</b> Hireginie India is an Equal Employment Opportunity Employer.
            All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual
            orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or
            disability status, or any other characteristics. We are driven by our promise of human forward.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: domine.style.fontFamily }} className="mb-4 text-[22px] font-semibold">Contact</h4>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-center gap-3">
              <span className={ICON}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <b style={{ fontFamily: domine.style.fontFamily }} className="block text-[16px] font-semibold">Call Us</b>
                <a href="tel:+919415088702" className="text-[14px] text-[#3d2a2e] transition-colors hover:text-[#b3203f]">+91 9415088702</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={ICON}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.7" /><path d="m2 7 10 6 10-6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <b style={{ fontFamily: domine.style.fontFamily }} className="block text-[16px] font-semibold">Email Us</b>
                <a href="mailto:contactus@hireginie.com" className="text-[14px] text-[#3d2a2e] transition-colors hover:text-[#b3203f]">contactus@hireginie.com</a>
              </div>
            </div>
          </div>

          <h4 style={{ fontFamily: domine.style.fontFamily }} className="mb-4 mt-9 text-[22px] font-semibold">Socials</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className={SOCIAL}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="white"><path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93Z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={SOCIAL}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="white"><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#b3203f]/15">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col items-center justify-between gap-3 px-6 py-5 text-[13px] text-[#3d2a2e] sm:flex-row lg:px-10">
          <span>© Copyright 2026 Hireginie Talent Cloud. All Rights Reserved</span>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-[#b3203f]">terms &amp; conditions</Link>
            <Link href="#" className="transition-colors hover:text-[#b3203f]">cookie policy</Link>
            <Link href="#" className="transition-colors hover:text-[#b3203f]">privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
