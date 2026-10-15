"use client";

import { usePathname } from "next/navigation";
import SiteNav from "@/components/SiteNav";

// TODO-CLEANUP: src/components/Navbar.tsx (old nav) is no longer used, delete it when the redesign is done.
export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/unauthorized") || pathname?.startsWith("/demo")) return null; // demos render their own nav
  return <SiteNav />;
}
