import Link from "next/link";
import { Domine } from "next/font/google";
import Reveal from "@/components/Reveal";

const domine = Domine({ variable: "--font-domine", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Shared look for the inner pages, matching Home and About: Domine headings, Satoshi body,
// the crimson breadcrumb bar and a large left-aligned intro. Styles live under .site-page in globals.css.
export const wrap = "mx-auto w-full max-w-[1268px] px-6";
export const TITLE = "text-center text-[28px] font-semibold leading-[44px] lg:text-[34px]";
export const SUB = "mx-auto mt-4 max-w-[720px] text-center text-[17px] text-[#333] lg:text-[20px] lg:leading-[30px]";
export const CARD = "rounded-lg bg-[#fdfdfd] shadow-[0_6px_28px_rgba(120,30,50,0.10)]";
export const ICON = "grid h-[64px] w-[64px] place-items-center rounded-full bg-[#fceced] text-accent";

export default function SitePage({
  crumb,
  title,
  intro,
  children,
}: {
  crumb: string;
  title?: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`site-page ${domine.variable} bg-white text-dark`}>
      <div className="bg-accent">
        <div className="mx-auto flex h-[60px] w-full max-w-[1348px] items-center px-6 text-[17px] text-white lg:h-[79px] lg:text-[20px]">
          <span>
            <Link href="/" className="font-medium hover:underline">Home</Link> | <b className="font-bold">{crumb}</b>
          </span>
        </div>
      </div>
      {title && (
        <section className={`${wrap} pt-12 lg:pt-[80px]`}>
          <Reveal>
            <h1 className="max-w-[760px] text-[32px] font-semibold leading-[1.45] lg:text-[52px] lg:leading-[1.5]">{title}</h1>
            {intro && <p className="mt-5 max-w-[620px] text-[17px] leading-[1.6] lg:text-[20px] lg:leading-[30px]">{intro}</p>}
          </Reveal>
        </section>
      )}
      {children}
    </div>
  );
}
