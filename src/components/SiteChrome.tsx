"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import HomeFooter from "@/components/HomeFooter";
import CtaBanner from "@/components/CtaBanner";

export default function SiteChrome() {
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/admin") || pathname?.startsWith("/unauthorized") || pathname?.startsWith("/demo");

  if (hideChrome) return null;

  // Home and About have the new design: their own footer and no CTA banner. Other pages keep both.
  if (pathname === "/" || pathname === "/about") return <HomeFooter />;

  return (
    <>
      <CtaBanner />
      <Footer />
    </>
  );
}
