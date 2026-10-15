"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// One nav for every page: solid white bar at the top, floating frosted pill after scrolling.
// Old labels -> new: About Us = Company, Service = Solutions, Blogs = Insights, Home = logo.
const LINKS = [
  { href: "/about", label: "Company" },
  { href: "/services", label: "Solutions" },
  { href: "/programs", label: "Programs" },
  { href: "/blogs", label: "Insights" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" precedence="default" />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "px-4" : "bg-white"}`}
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        <div
          className={`mx-auto flex items-center justify-between border border-transparent transition-all duration-500 ${
            scrolled
              ? "mt-3 h-[66px] max-w-[1180px] rounded-full border-white/60 bg-white/55 px-6 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(40,10,20,0.14),inset_0_1px_0_rgba(255,255,255,0.8)] transform-gpu"
              : "mt-0 h-[70px] max-w-[88rem] px-6 lg:px-10"
          }`}
        >
          <Link href="/">
            <Image src="/logo/hireginiemasterlogos/logo-b.png" alt="Hireginie" width={240} height={58} priority className="h-[50px] w-auto" />
          </Link>

          <div className="flex items-center gap-20">
            <nav className="hidden gap-20 text-[16px] font-bold text-[#14070a] md:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition-colors hover:text-[#b3203f]`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="hidden rounded-md bg-black px-5 py-3 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5 md:block"
            >
              Book a Consultation →
            </Link>
            <button className="text-2xl leading-none text-[#14070a] md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="mx-auto mt-2 flex max-w-[88rem] flex-col gap-4 rounded-2xl bg-white px-6 py-5 text-[16px] font-bold text-[#14070a] shadow-lg md:hidden">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/contact" className="rounded-md bg-black px-5 py-3 text-center text-white">Book a Consultation →</Link>
          </div>
        )}
      </header>
      {/* The fixed bar sits over page content: reserve its height everywhere except home (home hero already pads for it). */}
      {!isHome && <div className="h-[70px]" aria-hidden />}
    </>
  );
}
