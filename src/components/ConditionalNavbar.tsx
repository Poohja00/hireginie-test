"use client";

import { usePathname } from "next/navigation";
import SiteNav from "@/components/SiteNav";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/unauthorized")) return null;
  return <SiteNav />;
}
