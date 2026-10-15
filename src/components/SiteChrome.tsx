"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import HomeFooter from "@/components/HomeFooter";
import CtaBanner from "@/components/CtaBanner";

export default function SiteChrome() {
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/admin") || pathname?.startsWith("/unauthorized") || pathname?.startsWith("/demo");

  if (hideChrome) return null;

  // Home has its own footer and no CTA banner (new design). Other pages keep both.
  if (pathname === "/") return <HomeFooter />;

  return (
    <>
      <CtaBanner />
      <Footer />
    </>
  );
}
