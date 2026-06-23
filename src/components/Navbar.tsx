"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Service" },
  { href: "/programs", label: "Programs" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[76px] flex items-center text-white border-b border-white/10 bg-dark/70 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Hire<span className="text-accent-2">ginie</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative text-[15px] py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent-2 after:transition-all hover:text-white ${
                    active
                      ? "text-white after:w-full"
                      : "text-white/70 after:w-0 hover:after:w-full"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="grid place-items-center w-[38px] h-[38px] rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            title="Login"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </Link>
          <button
            className="md:hidden text-2xl leading-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[76px] inset-x-0 bg-dark/95 backdrop-blur-md px-6 pb-5 flex flex-col">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3.5 border-b border-white/10 text-white/80 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
