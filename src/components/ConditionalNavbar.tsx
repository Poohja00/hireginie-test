"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname === "/" || pathname?.startsWith("/unauthorized") || pathname?.startsWith("/demo")) return null; // "/" renders its own nav (DemoLanding)
  return <Navbar />;
}
