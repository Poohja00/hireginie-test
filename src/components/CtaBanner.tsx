import Link from "next/link";
import Reveal from "@/components/Reveal";

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function CtaBanner() {
  return (
    <section className="pt-14 pb-0 -mb-[35px]">
      <div className={wrap}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#424D76] px-8 lg:px-14 py-12 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
            <div className="absolute -right-10 -top-32 w-[460px] h-[460px] rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute right-20 -bottom-32 w-[300px] h-[300px] rounded-full bg-white/10 pointer-events-none" />
            <h2 className="relative font-serif text-[clamp(20px,2.4vw,34px)] font-black text-white leading-tight whitespace-nowrap">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-accent to-accent-gold bg-clip-text text-transparent">Hiring?</span>
            </h2>
            <div className="relative">
              <p className="text-white/70 text-[18px] mb-4 max-w-[460px] whitespace-nowrap">
                Partner with us for smart, scalable and inclusive hiring solutions
              </p>
              <Link
                href="tel:+919415088702"
                className="inline-flex items-center justify-center gap-2 w-full max-w-[460px] bg-gradient-to-r from-accent to-accent-gold text-white font-semibold text-[16px] px-7 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(254,98,42,0.3)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Book a Call <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
