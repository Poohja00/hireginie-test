import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon, Chart02Icon, CheckmarkBadge01Icon, GraduationCapIcon, Shield01Icon, Target02Icon, UserGroupIcon, WorkflowSquare01Icon,
} from "@hugeicons/core-free-icons";
import SitePage, { CARD, ICON, SUB, TITLE, wrap } from "@/components/SitePage";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Services | Hireginie" };

const SERVICES = [
  { i: UserGroupIcon, t: "Talent Acquisition", d: "Permanent hiring across technology and non-technology roles." },
  { i: Target02Icon, t: "Executive Search", d: "Leadership and CXO mandates handled with discretion." },
  { i: WorkflowSquare01Icon, t: "RPO Services", d: "Recruiter on demand, embedded with your hiring team." },
  { i: Briefcase01Icon, t: "Contract Staffing", d: "Flexible workforce for short and long-term needs." },
  { i: GraduationCapIcon, t: "Campus Hiring", d: "Early-talent programs and structured fresher drives." },
  { i: Shield01Icon, t: "Employer of Record", d: "Compliant onboarding, payroll and benefits across India." },
  { i: Chart02Icon, t: "Hiring Process", d: "Overview, key services, benefits and CTA in one flow." },
  { i: CheckmarkBadge01Icon, t: "Quality & Benefits", d: "Faster turnaround, better fit, measurable outcomes." },
];

export default function Services() {
  return (
    <SitePage
      crumb="Solutions"
      title="Hiring solutions built around how you work."
      intro="From leadership search to volume hiring: overview, key services, hiring process, benefits and a clear path to get started."
    >
      <section className="pb-24 pt-16 lg:pb-[120px] lg:pt-[100px]">
        <div className={wrap}>
          <h2 className={TITLE}>End-to-End Recruitment Solutions</h2>
          <p className={SUB}>Comprehensive hiring solutions tailored to your business needs</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[64px] lg:grid-cols-4">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.t} delay={(idx % 4) * 0.08}>
                <div className={`${CARD} h-full px-[27px] pb-8 pt-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(185,55,67,0.18)]`}>
                  <span className={ICON}><HugeiconsIcon icon={s.i} size={32} /></span>
                  <h3 className="mt-6 text-[20px] font-medium leading-[30px]">{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-[23px] text-[#333]">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
