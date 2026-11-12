import Link from "next/link";
import { Domine } from "next/font/google";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About Us | Hireginie" };

const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const hd = { fontFamily: domine.style.fontFamily };

const RED = "#b93545";
const wrap = "mx-auto w-full max-w-[1220px] px-6";
const TITLE = "text-center text-[clamp(26px,3vw,38px)] font-semibold text-[#14070a]";
const CARD = "rounded-lg bg-white shadow-[0_6px_28px_rgba(120,30,50,0.10)]";
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

export default function About() {
  return (
    <div className="bg-white text-[#14070a]" style={{ fontFamily: "Satoshi, sans-serif" }}>
      {/* Breadcrumb bar */}
      <div style={{ background: RED }}>
        <div className="mx-auto w-full max-w-[1320px] px-6 py-6 text-[16px] text-white">
          <Link href="/" className="hover:underline">Home</Link> | <b className="font-bold">About us</b>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16 pt-16 lg:pt-20">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]`}>
          <Reveal>
            <h1 style={hd} className="relative z-10 text-[clamp(30px,3.5vw,50px)] font-semibold leading-[1.5] lg:whitespace-nowrap">
              We help India hire people <br className="hidden lg:block" />
              who stay and grow.
            </h1>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.75]">
              Hireginie Talent Cloud pairs dedicated recruiters with smart technology to build teams for startups and
              enterprises across the country.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:mt-24">
            <div className={`${CARD} grid grid-cols-2 gap-x-6 gap-y-14 px-8 py-10 sm:px-[20%]`}>
              {STATS.map((s) => (
                <div key={s.s}>
                  <b style={hd} className="block text-[clamp(20px,1.9vw,27px)] font-medium">{s.b}</b>
                  <span style={{ ...hd, color: RED }} className="mt-1 block text-[13px] sm:whitespace-nowrap">{s.s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="pb-20 pt-6">
        <div className={wrap}>
          <h2 style={hd} className={TITLE}>Who we are</h2>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal className="max-w-[600px] text-[17px] leading-[1.8] text-[#3d2a2e]">
              <p>
                Hireginie Talent Cloud started with a simple belief: hiring should feel less like chasing résumés and
                more like building a team. We combine experienced recruiters with smart tools to match companies with
                people who fit their work and their culture.
              </p>
              <p className="mt-7">
                From tech and non-tech roles to leadership and volume hiring, we handle the process end to end, so our
                clients can focus on growing their business.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className={`aspect-[535/278] w-full ${PLACEHOLDER}`} aria-hidden />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-gradient-to-b from-[#fbdde1] to-white pb-24 pt-14">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 px-6 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:gap-12">
          <Reveal>
            <span style={{ color: RED }} className="text-[12px] uppercase tracking-wide">Vision and mission</span>
            <h2 style={hd} className="mt-4 max-w-[420px] text-[clamp(26px,2.5vw,34px)] font-semibold leading-[1.5]">
              Our Purpose for What&rsquo;s Next
            </h2>
            <p className="mt-4 text-[16px] text-[#3d2a2e]">Where we are headed, and how we get there.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={`${CARD} h-full min-h-[270px] p-9`}>
              <h3 style={hd} className="text-[26px] font-medium">Our Vision</h3>
              <span className="mt-4 block h-[3px] w-[70px]" style={{ background: RED }} />
              <p className="mt-7 text-[13px] leading-relaxed text-[#3d2a2e]">To be India&rsquo;s most trusted talent partner.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className={`${CARD} h-full min-h-[270px] p-9`}>
              <h3 style={hd} className="text-[26px] font-medium">Our mission</h3>
              <span className="mt-4 block h-[3px] w-[70px]" style={{ background: RED }} />
              <ul className="mt-7 list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-[#3d2a2e]">
                {MISSION.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What makes us different */}
      <section className="pb-24 pt-4">
        <div className={wrap}>
          <h2 style={hd} className={TITLE}>What makes us different</h2>
          <p className="mt-5 text-center text-[17px] text-[#3d2a2e]">Comprehensive hiring support built around how you actually work.</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[7%]">
            {DIFF.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.08}>
                <div className={`${CARD} h-full min-h-[228px] px-7 py-10`}>
                  <h3 style={hd} className="max-w-[150px] text-[19px] font-medium leading-[1.6]">{d.t}</h3>
                  <p className="mt-5 text-[13px] leading-[1.6] text-[#3d2a2e]">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our team culture */}
      <section className="pb-24 pt-10">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="pt-8">
            <div className={`grid aspect-[417/202] w-[72%] place-items-center text-[13px] text-[#14070a] ${PLACEHOLDER}`}>company related images*</div>
            <div className={`ml-[24%] mt-4 grid aspect-[417/202] w-[72%] place-items-center text-[13px] text-[#14070a] ${PLACEHOLDER}`}>company related images*</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={hd} className="text-[clamp(26px,2.6vw,34px)] font-semibold">Our team culture</h2>
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.75] text-[#3d2a2e]">
              We are a team that learns together, shares credit and holds itself to a high bar for the people we serve.
            </p>
            <ul className="mt-12 space-y-10">
              {CULTURE.map((c) => (
                <li key={c.t} className="flex items-start gap-5">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-0.5 shrink-0" aria-hidden>
                    <circle cx="18" cy="18" r="12" stroke={RED} strokeWidth="2" />
                    <path d="m27 27 8 8" stroke={RED} strokeWidth="3" strokeLinecap="round" />
                    <text x="18" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill={RED} fontFamily="sans-serif">AI</text>
                  </svg>
                  <div>
                    <b className="block text-[20px] font-medium">{c.t}</b>
                    <p className="mt-3 text-[13px] text-[#3d2a2e]">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Our journey */}
      <section className="pb-20 pt-10 text-white" style={{ background: RED }}>
        <div className={wrap}>
          <h2 style={hd} className="text-center text-[clamp(26px,2.6vw,34px)] font-medium">Our journey</h2>
          {/* TODO-CLEANUP: placeholder line from the design, replace with real copy once milestones are confirmed */}
          <p className="mt-5 text-center text-[17px]">Suggested extra section. Replace with your real milestones.</p>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.y} delay={i * 0.08}>
                <span className="grid h-[86px] w-[86px] place-items-center rounded-full bg-[#fdeeee]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M8 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2" />
                    <rect x="7" y="3" width="14" height="14" rx="3" />
                    <path d="m12 8-2 2 2 2M16 8l2 2-2 2M14.5 7.5l-1 5" />
                  </svg>
                </span>
                <b style={hd} className="mt-6 block text-[19px] font-medium">{j.y}</b>
                <b style={hd} className="mt-1 block text-[18px] font-medium">{j.t}</b>
                <p className="mt-4 text-[12px]">{j.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the leadership */}
      <section className="pb-32 pt-16">
        <div className={wrap}>
          <h2 style={hd} className={TITLE}>Meet the leadership</h2>
          <p className="mt-5 text-center text-[17px] text-[#3d2a2e]">The one who shapes Hireginie</p>
          <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-y-10 text-center lg:grid-cols-4">
            {LEADERS.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.08}>
                {/* TODO-CLEANUP: gray circle is a placeholder for the leader's photo */}
                <span className={`mx-auto block h-[134px] w-[134px] rounded-full ${PLACEHOLDER}`} aria-hidden />
                <b className="mt-4 block text-[16px] font-bold">{l.n}</b>
                <span className="mt-1 block text-[13px] text-[#3d2a2e]">{l.r}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
