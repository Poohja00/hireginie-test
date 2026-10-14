"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export default function SiteChrome() {
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/admin") || pathname?.startsWith("/unauthorized") || pathname?.startsWith("/demo");

  if (hideChrome) return null;

  return (
    <>
      <CtaBanner />
      <Footer />
    </>
  );
}
