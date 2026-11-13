import Image from "next/image";
import Link from "next/link";

const SOCIAL = "grid h-[42px] w-[42px] place-items-center rounded-full bg-gradient-to-br from-[#cf4a5a] to-[#b93743] text-white shadow-[0_6px_16px_rgba(185,55,67,0.28)] transition-transform hover:-translate-y-0.5";
const LINK = "transition-colors hover:text-[#b93743]";

const COLS: { h: string; items: { t: string; href: string }[] }[] = [
  { h: "Company", items: [{ t: "About us", href: "/about" }, { t: "Our team", href: "/about#team" }, { t: "Careers", href: "/contact" }, { t: "Insights", href: "/blogs" }] },
  {
    h: "Solutions",
    items: [
      { t: "Executive Hiring", href: "/services" },
      { t: "Talent Acquisition", href: "/services" },
      { t: "Employer of Record", href: "/services" },
      { t: "POSH Compliance", href: "/services" },
      { t: "Recruitment on Demand", href: "/services" },
    ],
  },
  { h: "Programs", items: [{ t: "BBBP", href: "/programs" }, { t: "Accelerator", href: "/programs" }, { t: "Industries we serve", href: "/#industries" }] },
];

// TODO-CLEANUP: the legal pages do not exist yet, these links point nowhere (#). Add the pages or remove the links.
const LEGAL = ["Privacy Policy", "Terms of Use", "FAQs", "Security Advice", "EEO Statement"];

// Footer for the home and about pages (pink gradient, Domine headings, Satoshi body). The default Footer stays for every other page.
// Desktop sizes come from the .hm-foot rules in globals.css (measured from the 1086px design).
export default function HomeFooter() {
  return (
    <footer id="site-footer" className="hm-foot bg-gradient-to-b from-[#fedcde] to-white text-[#14070a]" style={{ fontFamily: "Satoshi, sans-serif" }}>
      <div className="mx-auto grid w-full max-w-[1100px] gap-10 px-6 pb-8 pt-14 lg:contents">
        <div className="lg:contents">
          <Image src="/logo/hireginiemasterlogos/logo-b.png" alt="Hireginie Talent Cloud" width={216} height={70} className="hm-foot-logo mb-5 h-[52px] w-auto" />
          <p className="hm-foot-about max-w-[360px] text-[16px] leading-relaxed text-[#555]">
            Helping startups and enterprises hire top talent across technology, non-tech, leadership, and volume hiring domains.
          </p>
          <div className="hm-foot-soc mt-6 flex gap-4">
            <a href="#" aria-label="Facebook" className={SOCIAL}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M15.5 8.5h-1.4c-1 0-1.6.6-1.6 1.6V21M10.5 13h5" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={SOCIAL}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10.5V16M8 7.8v.2M12 16v-5.5M12 12.5c0-1.4 1-2 2-2s2 .7 2 2V16" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className={SOCIAL}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.2 6.8h.01" /></svg>
            </a>
          </div>
        </div>

        <div className="hm-foot-cols grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLS.map((c) => (
            <div key={c.h}>
              <h4 className="text-[17px] font-medium">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-[14px] text-[#222]">
                {c.items.map((i) => (
                  <li key={i.t}><Link href={i.href} className={LINK}>{i.t}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-[17px] font-medium">Contact</h4>
            <ul className="mt-4 space-y-2 text-[14px] text-[#222]">
              <li><a href="tel:+919415088702" className={LINK}>+91 9415088702</a></li>
              <li><a href="mailto:contactus@hireginie.com" className={LINK}>contactus@hireginie.com</a></li>
              {/* TODO-CLEANUP: placeholder address from the design, replace with the real office address */}
              <li className="leading-snug">Office address line,<br />City, State, India</li>
            </ul>
          </div>
        </div>

        <div className="hm-foot-rule border-t border-[#e2c9cb] lg:border-0" />
        <div className="hm-foot-bot flex flex-col items-start justify-between gap-3 text-[12px] text-[#222] sm:flex-row sm:items-center">
          <span>© 2026 Hireginie Talent Cloud. All rights reserved.</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL.map((l) => (
              <Link key={l} href="#" className={LINK}>{l}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
