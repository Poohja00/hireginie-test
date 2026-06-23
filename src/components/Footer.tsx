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
    <footer className="bg-soft pt-16 pb-7">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-9 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="text-2xl font-bold tracking-tight mb-3.5">
              Hire<span className="text-accent">ginie</span>
            </div>
            <p className="text-muted text-sm max-w-[280px]">
              Helping startups and enterprises hire top talent across technology,
              non-tech, leadership, and volume hiring domains.
            </p>
            <div className="flex gap-3 mt-5">
              {["in", "f", "◎"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-[38px] h-[38px] rounded-[10px] bg-white border border-black/10 text-muted hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm uppercase tracking-wide mb-4 font-semibold">{col.title}</h4>
              {col.links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="block text-muted text-sm py-1.5 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center text-muted text-[13px] mt-12 pt-6 border-t border-black/10">
          © 2026 Hireginie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
