import Link from "next/link";

const COLS = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/blogs", label: "Blogs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Executive Search" },
      { href: "/services", label: "Talent Acquisition" },
      { href: "/services", label: "RPO Services" },
      { href: "/services", label: "Employer of Record" },
    ],
  },
  {
    title: "Programs",
    links: [
      { href: "/programs", label: "Business Beyond Bias" },
      { href: "/programs", label: "Accelerator Program" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#363636] pt-16 pb-7 text-white">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-9 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="font-serif text-2xl font-black tracking-tight mb-3.5">
              Hire<span className="text-accent">ginie</span>
            </div>
            <p className="text-white/60 text-sm max-w-[280px] leading-relaxed">
              Helping startups and enterprises hire top talent across technology,
              non-tech, leadership, and volume hiring domains.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: "in", href: "#" },
                { label: "ig", href: "#" },
                { label: "wa", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid place-items-center w-[38px] h-[38px] rounded-[10px] bg-white/10 text-white/70 hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all text-xs font-semibold uppercase"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-white/40">
                {col.title}
              </h4>
              {col.links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="block text-white/60 text-sm py-1.5 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center text-white/30 text-[13px] mt-12 pt-6 border-t border-white/10">
          © 2026 Hireginie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
