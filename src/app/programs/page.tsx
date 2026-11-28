import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Chart02Icon, GraduationCapIcon, Rocket01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import SitePage, { CARD, ICON, SUB, TITLE, wrap } from "@/components/SitePage";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Programs | Hireginie" };

const PROGRAMS = [
  { tag: "BBBP", t: "Business Beyond Bias", d: "Creating inclusive workplaces by connecting women talent with meaningful opportunities.", cta: "Get Involved" },
  { tag: "Accelerator", t: "Accelerator Program", d: "Fast-track hiring support designed for high-growth startups scaling teams quickly.", cta: "Apply Now" },
];

const DETAILS = [
  { i: UserGroupIcon, t: "Inclusive Hiring", d: "Diversity-first sourcing and structured, bias-aware evaluation." },
  { i: Rocket01Icon, t: "Rapid Scaling", d: "Dedicated pods to scale teams in weeks, not months." },
  { i: GraduationCapIcon, t: "Mentorship", d: "Career guidance and upskilling for emerging talent." },
  { i: Chart02Icon, t: "Outcome Tracking", d: "Clear metrics on retention, fit, and time-to-hire." },
];

export default function Programs() {
  return (
    <SitePage
      crumb="Programs"
      title="Building talent. Creating opportunities."
      intro="Purpose-built programs that go beyond hiring, driving inclusion, speed, and scale."
    >
      <section className="pb-20 pt-16 lg:pb-[100px] lg:pt-[100px]">
        <div className={wrap}>
          <h2 className={TITLE}>Programs At Hireginie</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-[64px] lg:gap-[85px]">
            {PROGRAMS.map((p, idx) => (
              <Reveal key={p.tag} delay={idx * 0.1}>
                <div className={`${CARD} h-full p-9 transition-transform duration-300 hover:-translate-y-1.5`}>
                  <h3 className="text-[28px] font-medium leading-[36px]">{p.tag}</h3>
                  <span className="mt-[9px] block h-[3px] w-[73px] bg-accent" />
                  <p className="mt-6 text-[18px] font-bold">{p.t}</p>
                  <p className="mt-3 max-w-[460px] text-[15px] leading-[24px] text-[#333]">{p.d}</p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-[17px] font-medium text-accent transition-all hover:gap-3">
                    {p.cta} <HugeiconsIcon icon={ArrowRight02Icon} size={18} aria-hidden />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#fddadf] to-[#fffbfc] pb-20 pt-14 lg:pb-[100px] lg:pt-[64px]">
        <div className={wrap}>
          <h2 className={TITLE}>What&rsquo;s Inside Each Program</h2>
          <p className={SUB}>The same care in every program, from sourcing to results.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DETAILS.map((d, idx) => (
              <Reveal key={d.t} delay={idx * 0.08}>
                <div className={`${CARD} h-full px-[27px] pb-8 pt-7`}>
                  <span className={ICON}><HugeiconsIcon icon={d.i} size={32} /></span>
                  <h3 className="mt-6 text-[20px] font-medium leading-[30px]">{d.t}</h3>
                  <p className="mt-3 text-[15px] leading-[23px] text-[#333]">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
