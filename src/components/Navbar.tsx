"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Service" },
  { href: "/programs", label: "Programs" },
  { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[76px] flex items-center bg-white border-b border-black/8 shadow-sm">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight font-serif text-dark">
          Hire<span className="text-accent">ginie</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative text-[15px] font-medium py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent after:transition-all ${
                    active
                      ? "text-dark after:w-full"
                      : "text-warm-grey after:w-0 hover:text-dark hover:after:w-full"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-accent text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
          >
            Contact Us
          </Link>
          <button
            className="md:hidden text-dark text-2xl leading-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[76px] inset-x-0 bg-white border-b border-black/8 px-6 pb-5 flex flex-col shadow-lg">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3.5 border-b border-black/6 text-dark/70 hover:text-dark font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center bg-accent text-white font-semibold text-[14px] px-5 py-3 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
