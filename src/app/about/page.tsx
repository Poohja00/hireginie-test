import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiSearch02Icon, SourceCodeSquareIcon } from "@hugeicons/core-free-icons";
import { Domine } from "next/font/google";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About Us | Hireginie" };

const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const hd = { fontFamily: domine.style.fontFamily };

const RED = "#b93743";
const wrap = "mx-auto w-full max-w-[1268px] px-6";
const TITLE = "text-center text-[28px] font-semibold leading-[44px] lg:text-[34px]";
const SUB = "mt-[26px] text-center text-[17px] text-[#333] lg:text-[20px] lg:leading-[30px]";
const CARD = "rounded-lg bg-[#fdfdfd] shadow-[0_6px_28px_rgba(120,30,50,0.10)]";
// TODO-CLEANUP: gray blocks are placeholders, swap for real company photos when they arrive
const PLACEHOLDER = "bg-[#d9d9d9]";

const STATS = [
  { b: "2021", s: "Year we started" },
  { b: "50+", s: "Specialized recruiters" },
  { b: "Pan India", s: "We hire" },
  { b: "80%", s: "Clients who hire with us again" },
];

const MISSION = [
  "Make hiring faster with technology and dedicated recruiters.",
  "Match people to roles and cultures where they can grow.",
  "Build fair and inclusive teams for every client we serve.",
];

const DIFF = [
  { t: "Tech-enabled hiring", d: "Smart sourcing and pipeline tracking keep every role moving and visible." },
  { t: "Pan India reach", d: "A talent network spanning metros and emerging cities across the country." },
  { t: "Dedicated recruiters", d: "One accountable recruiter team per client who learns your business." },
  { t: "Fast turnaround", d: "Shortlists in as little as 48 hours, without compromising on fit." },
];

const CULTURE = [
  { t: "Candidates are people", d: "Technology and expertise working together to find the right talent." },
  { t: "Own the outcome", d: "We take responsibility for the hire, not just the shortlist." },
  { t: "Inclusive by design", d: "Fair hiring practices are built into how we work." },
];

const JOURNEY = [
  { y: "2021", t: "The Beginning", d: "A bold vision to reimagine hiring." },
  { y: "2022", t: "Growing Together", d: "Building strong partnerships across industries." },
  { y: "2023", t: "Scaling Impact", d: "Helping more businesses build winning teams." },
  { y: "Today", t: "Stronger Than Ever", d: "A trusted talent partner for the future." },
];

const LEADERS = [
  { n: "Raziya Akhter", r: "Co-founder" },
  { n: "Saima Khan", r: "Co-founder" },
  { n: "Susan", r: "Co-founder & CEO" },
  { n: "Silky", r: "Director - CXO" },
];

const SMALL = "text-[14px] leading-[22px] text-[#333]";

export default function About() {
  // Desktop (lg and up) sizes are measured from the 1440px design. Below lg the layout stacks with smaller type.
  return (
    <div className="bg-white text-[#14070a]" style={{ fontFamily: "Satoshi, sans-serif" }}>
      {/* Breadcrumb bar */}
      <div style={{ background: RED }}>
        <div className="mx-auto flex h-[60px] w-full max-w-[1348px] items-center px-6 text-[17px] text-white lg:h-[79px] lg:text-[20px]">
          <span>
            <Link href="/" className="font-medium hover:underline">Home</Link> | <b className="font-bold">About us</b>
          </span>
        </div>
      </div>

      {/* Hero */}
      <section>
        <div className={`${wrap} grid items-start gap-10 pt-12 lg:grid-cols-[minmax(0,1fr)_611px] lg:gap-0 lg:pt-0`}>
          <Reveal className="lg:pt-[83px]">
            <h1 style={hd} className="relative z-10 text-[32px] font-semibold leading-[1.45] lg:whitespace-nowrap lg:text-[52px] lg:leading-[81px]">
              We help India hire people <br className="hidden lg:block" />
              who stay and grow.
            </h1>
            <p className="mt-5 max-w-[545px] text-[17px] leading-[1.6] lg:mt-[26px] lg:text-[20px] lg:leading-[30px]">
              Hireginie Talent Cloud pairs dedicated recruiters with smart technology to build teams for startups and
              enterprises across the country.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:mt-[196px]">
            <div className={`${CARD} flex flex-col gap-10 px-6 pb-[27px] pt-[31px] lg:min-h-[254px] lg:gap-[93px] lg:px-0`}>
              {[STATS.slice(0, 2), STATS.slice(2)].map((row) => (
                <div key={row[0].s} className="flex justify-center gap-8 lg:gap-[85px]">
                  {row.map((st) => (
                    <div key={st.s}>
                      <b style={hd} className="block text-[22px] font-medium leading-[30px] lg:text-[26px]">{st.b}</b>
                      <span style={{ ...hd, color: RED }} className="block text-[13px] leading-[20px] lg:whitespace-nowrap lg:text-[15px]">{st.s}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="pb-14 pt-16 lg:pb-[79px] lg:pt-[89px]">
        <div className={wrap}>
          <h2 style={hd} className="text-center text-[28px] font-semibold leading-[48px] lg:text-[40px]">Who we are</h2>
          <div className="mt-10 grid items-start gap-10 lg:mt-[63px] lg:grid-cols-[1fr_532px] lg:gap-0 lg:pr-[16px]">
            <Reveal className="max-w-[590px] text-[17px] leading-[1.6] text-[#333] lg:pt-[12px] lg:text-[20px] lg:leading-[30px]">
              <p>
                Hireginie Talent Cloud started with a simple belief: hiring should feel less like chasing résumés and
                more like building a team. We combine experienced recruiters with smart tools to match companies with
                people who fit their work and their culture.
              </p>
              <p className="mt-[30px]">
                From tech and non-tech roles to leadership and volume hiring, we handle the process end to end, so our
                clients can focus on growing their business.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className={`aspect-[532/281] w-full ${PLACEHOLDER}`} aria-hidden />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-gradient-to-b from-[#fddadf] to-[#fffbfc] pb-16 pt-12 lg:pb-[88px] lg:pt-[53px]">
        <div className="mx-auto grid w-full max-w-[1366px] gap-8 px-6 lg:grid-cols-[1fr_388px_388px] lg:gap-[50px] lg:pl-[30px] lg:pr-[18px]">
          <Reveal>
            <span style={{ color: RED }} className="mt-[2px] block text-[11px] uppercase leading-[16px]">Vision and mission</span>
            <h2 style={hd} className="mt-[11px] max-w-[420px] text-[28px] font-semibold leading-[1.5] lg:text-[34px] lg:leading-[52px]">
              Our Purpose for What&rsquo;s Next
            </h2>
            <p className="mt-[16px] text-[17px] text-[#333] lg:text-[20px] lg:leading-[30px]">Where we are headed, and how we get there.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={`${CARD} h-full px-[39px] pb-8 pt-[32px] lg:min-h-[271px]`}>
              <h3 style={hd} className="text-[28px] font-medium leading-[36px]">Our Vision</h3>
              <span className="mt-[9px] block h-[3px] w-[73px]" style={{ background: RED }} />
              <p className={`mt-[27px] ${SMALL}`}>To be India&rsquo;s most trusted talent partner.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className={`${CARD} h-full px-[39px] pb-8 pt-[32px] lg:min-h-[271px]`}>
              <h3 style={hd} className="text-[28px] font-medium leading-[36px]">Our mission</h3>
              <span className="mt-[9px] block h-[3px] w-[73px]" style={{ background: RED }} />
              <ul className={`mt-[27px] list-disc pl-[23px] ${SMALL}`}>
                {MISSION.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What makes us different */}
      <section className="pb-20 pt-12 lg:pb-[178px] lg:pt-[47px]">
        <div className={wrap}>
          <h2 style={hd} className={TITLE}>What makes us different</h2>
          <p className={SUB}>Comprehensive hiring support built around how you actually work.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:-mr-[5px] lg:mt-[89px] lg:grid-cols-4 lg:gap-[85px] lg:pl-[11px]">
            {DIFF.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.08}>
                <div className={`${CARD} h-full px-[27px] pb-7 pt-[28px] lg:min-h-[214px]`}>
                  <h3 style={hd} className="max-w-[140px] text-[20px] font-medium leading-[30px]">{d.t}</h3>
                  <p className="mt-[28px] text-[14px] leading-[20px] text-[#333]">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our team culture */}
      <section className="pb-20 lg:pb-[103px]">
        <div className="mx-auto grid w-full max-w-[1314px] items-start gap-12 px-6 lg:grid-cols-[658px_1fr] lg:gap-0">
          <Reveal className="order-2 lg:order-none lg:pt-[64px]">
            <div className={`grid aspect-[415/202] w-[76%] place-items-center text-[14px] lg:w-[415px] ${PLACEHOLDER}`}>company related images*</div>
            <div className={`ml-[24%] mt-[21px] grid aspect-[415/202] w-[76%] place-items-center text-[14px] lg:ml-[132px] lg:w-[415px] ${PLACEHOLDER}`}>company related images*</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={hd} className="text-[28px] font-semibold leading-[44px] lg:text-[34px]">Our team culture</h2>
            <p className="mt-[27px] max-w-[590px] text-[17px] leading-[1.6] text-[#333] lg:text-[20px] lg:leading-[30px]">
              We are a team that learns together, shares credit and holds itself to a high bar for the people we serve.
            </p>
            <ul className="mt-[52px] space-y-[49px] lg:pl-[13px]">
              {CULTURE.map((c) => (
                <li key={c.t} className="flex items-start gap-[19px]">
                  <HugeiconsIcon icon={AiSearch02Icon} size={38} color={RED} className="mt-[2px] shrink-0" />
                  <div>
                    <b className="block text-[20px] font-medium leading-[32px] lg:text-[24px]">{c.t}</b>
                    <p className="mt-[15px] text-[15px] leading-[22px] text-[#333]">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Our journey */}
      <section className="pb-16 pt-[38px] text-white lg:pb-[93px]" style={{ background: RED }}>
        <div className={wrap}>
          <h2 style={hd} className="text-center text-[28px] font-medium leading-[44px] lg:text-[34px]">Our journey</h2>
          {/* TODO-CLEANUP: placeholder line from the design, replace with real copy once milestones are confirmed */}
          <p className="mt-[26px] text-center text-[17px] lg:text-[20px] lg:leading-[30px]">Suggested extra section. Replace with your real milestones.</p>
          <div className="mt-12 grid grid-cols-2 gap-10 lg:mt-[67px] lg:flex lg:justify-between lg:gap-0">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.y} delay={i * 0.08}>
                <span className="grid h-[82px] w-[82px] place-items-center rounded-full bg-[#fceced]">
                  <HugeiconsIcon icon={SourceCodeSquareIcon} size={40} color={RED} />
                </span>
                <b style={hd} className="mt-[22px] block text-[19px] font-medium leading-[26px]">{j.y}</b>
                <b style={hd} className="mt-[3px] block text-[20px] font-medium leading-[28px]">{j.t}</b>
                <p className="mt-[16px] text-[13.4px] leading-[18px]">{j.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the leadership */}
      <section id="team" className="pb-28 pt-14 lg:pb-[120px] lg:pt-[64px]">
        <div className={wrap}>
          <h2 style={hd} className={TITLE}>Meet the leadership</h2>
          <p className={SUB}>The one who shapes Hireginie</p>
          <div className="mx-auto mt-[42px] grid max-w-[1088px] grid-cols-2 gap-y-10 text-center lg:grid-cols-4">
            {LEADERS.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.08}>
                {/* TODO-CLEANUP: gray circle is a placeholder for the leader's photo */}
                <span className={`mx-auto block h-[134px] w-[134px] rounded-full ${PLACEHOLDER}`} aria-hidden />
                <b className="mt-[16px] block text-[18px] font-bold leading-[24px]">{l.n}</b>
                <span className="mt-[1px] block text-[15px] leading-[20px]">{l.r}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
