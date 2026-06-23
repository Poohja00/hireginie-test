import type { Post } from "@/lib/supabase";

// Static fallback posts — shown when Supabase isn't configured yet.
export const SAMPLE_POSTS: Post[] = [
  {
    slug: "ai-reshaping-recruitment", tag: "Hiring", author: "Hireginie Team", created_at: "2026-05-28",
    title: "5 Ways AI Is Reshaping Modern Recruitment",
    excerpt: "How intelligent matching cuts time-to-hire without losing the human touch.",
    content: `Recruitment has always been part art, part science. Today, AI is tilting the balance — not by replacing recruiters, but by handing them sharper tools.

1. Smarter sourcing. Models surface candidates who match on skills and trajectory, not just keywords.
2. Faster screening. Structured signals rank applicants so recruiters spend time on the strongest fits.
3. Bias-aware shortlists. Anonymised, criteria-first review reduces unconscious bias.
4. Predictive fit. Historical outcomes hint at who will thrive and stay.
5. The human close. Technology accelerates the funnel; people still build trust and close offers.

At Hireginie we pair AI-driven matching with specialist recruiters — speed without losing the human touch.`,
  },
  {
    slug: "building-teams-beyond-bias", tag: "Diversity", author: "Hireginie Team", created_at: "2026-05-20",
    title: "Building Teams Beyond Bias",
    excerpt: "Practical steps to make your hiring funnel genuinely inclusive.",
    content: `Inclusive hiring is not a checkbox — it is a system. Here is how high-performing teams design for it.

Start with the job description. Neutral language widens your top of funnel.

Structure the interview. Same questions, same rubric, scored independently.

Widen the sources. Partner with communities and programs that reach underrepresented talent.

Measure honestly. Track funnel conversion by stage. Where you lose diverse candidates is where to fix.`,
  },
  {
    slug: "scaling-10-to-100", tag: "Startups", author: "Hireginie Team", created_at: "2026-05-12",
    title: "Scaling From 10 to 100 Without Breaking",
    excerpt: "A founder's guide to hiring fast while protecting culture.",
    content: `Hypergrowth breaks most hiring processes. The teams that scale cleanly do a few things differently.

Define the bar before you need it. Write down what great looks like for each role.

Hire ahead of pain, not after. By the time a team is drowning, quality drops.

Protect culture deliberately. Culture is the behaviours you reward. Interview for them.

Use a partner for surge capacity. Dedicated recruiter pods scale you without permanent overhead.`,
  },
  {
    slug: "great-executive-search", tag: "Leadership", author: "Hireginie Team", created_at: "2026-05-04",
    title: "What Great Executive Search Looks Like",
    excerpt: "The signals that separate a good CXO hire from a great one.",
    content: `Executive hiring is high-stakes and low-volume — every decision matters.

Mandate clarity. The best searches begin with honesty about what the business needs next.

Market mapping. Great search firms map the whole landscape, not just who is looking.

Reference depth. Backchannel references reveal what polished interviews cannot.

Discretion. Senior candidates are often passive and employed; confidentiality is non-negotiable.`,
  },
  {
    slug: "candidate-experience", tag: "Process", author: "Hireginie Team", created_at: "2026-04-26",
    title: "Designing a Candidate Experience People Love",
    excerpt: "Why your hiring process is your strongest employer brand.",
    content: `Every candidate who touches your process becomes an ambassador — or a critic.

Respect their time. Clear timelines, prompt updates, no black holes.

Be human. A warm, well-prepared interviewer says more than any careers page.

Close the loop. Even rejections, done with care, build goodwill and referrals.`,
  },
  {
    slug: "india-talent-outlook-2026", tag: "Trends", author: "Hireginie Team", created_at: "2026-04-18",
    title: "The 2026 India Talent Outlook",
    excerpt: "Where demand is heading across BFSI, IT, and beyond.",
    content: `India's talent market in 2026 is defined by specialisation and speed.

BFSI is hiring for risk, compliance and AI-driven products. IT demand is shifting from generalists to platform and ML specialists. Healthcare and logistics continue rapid expansion.

The common thread: employers who move fast and offer clarity win.`,
  },
];
