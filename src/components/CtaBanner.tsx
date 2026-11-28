import Link from "next/link";
import Reveal from "@/components/Reveal";

// Closing call to action on the inner pages (not Home or About).
export default function CtaBanner() {
  return (
    <section className="site-page bg-white px-6 pb-20 pt-4">
      <Reveal>
        <div className="mx-auto flex max-w-[1220px] flex-col items-center justify-between gap-6 rounded-lg bg-accent px-8 py-10 text-center text-white lg:flex-row lg:px-14 lg:text-left">
          <div>
            <h2 className="text-[26px] font-medium leading-[1.5] lg:text-[34px]">Ready to Transform Your Hiring?</h2>
            <p className="mt-2 text-[17px] lg:text-[19px]">Partner with us for smart, scalable and inclusive hiring solutions</p>
          </div>
          <Link
            href="tel:+919415088702"
            className="shrink-0 rounded-lg border-[1.5px] border-white bg-white px-8 py-3 text-[16px] font-bold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Book a Call
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
