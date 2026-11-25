import Link from "next/link";
import Reveal from "@/components/Reveal";

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

export default function CtaBanner() {
  return (
    <section className="pt-0 pb-0 -mb-[35px]">
      <div className={wrap}>
        <Reveal>
          <div className="relative mx-auto max-w-[900px] overflow-hidden rounded-3xl bg-[#424D76] px-8 lg:px-12 py-8 lg:py-10 grid lg:grid-cols-2 gap-6 items-center">
            <div className="absolute right-[-30px] top-1/2 [transform:translateY(-28%)_rotate(25deg)] w-[480px] h-[300px] rounded-[50%] bg-[#8997D0]/30 pointer-events-none" />
            <div className="absolute right-0 top-1/2 [transform:translateY(-28%)_rotate(25deg)] w-[432px] h-[252px] rounded-[50%] bg-[#8997D0]/40 pointer-events-none" />
            <h2 className="relative font-serif text-[clamp(24px,2.5vw,36px)] font-bold text-white leading-tight -translate-y-3">
              Ready to Transform
              <br />
              Your{" "}
              <span className="bg-gradient-to-r from-accent via-accent-mid to-accent-gold bg-clip-text text-transparent">Hiring?</span>
            </h2>
            <div className="relative max-w-[300px] -translate-y-3 translate-x-8">
              <p className="text-white text-[19px] leading-snug mb-3">
                Partner with us for smart, scalable and inclusive hiring solutions
              </p>
              <Link
                href="tel:+919415088702"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent via-accent-mid to-accent-gold text-white font-medium text-[17px] px-6 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(254,98,42,0.3)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
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
