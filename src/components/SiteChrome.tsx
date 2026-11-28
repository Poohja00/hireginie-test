"use client";

import { usePathname } from "next/navigation";
import HomeFooter from "@/components/HomeFooter";
import CtaBanner from "@/components/CtaBanner";

export default function SiteChrome() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/unauthorized")) return null;

  // Same footer everywhere. Home and About have no CTA box.
  return (
    <>
      {pathname !== "/" && pathname !== "/about" && <CtaBanner />}
      <HomeFooter />
    </>
  );
}
