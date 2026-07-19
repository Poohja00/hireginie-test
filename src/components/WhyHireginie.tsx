import Reveal from "@/components/Reveal";

const REASONS = [
  {
    t: "Access to Top Talent, Faster",
    d: "Hireginie helps businesses connect with highly qualified professionals across industries through a streamlined recruitment process. Our extensive talent network, proactive sourcing strategies, and rigorous screening ensure you meet the right candidates quickly, reducing time-to-hire while maintaining quality.",
  },
  {
    t: "Customized Recruitment & Staffing Solutions",
    d: "Every business has unique hiring needs. Whether you're looking for permanent employees, contract professionals, executive leadership, or project-based talent, Hireginie delivers tailored recruitment and staffing solutions that align with your business goals, company culture, and growth plans.",
  },
  {
    t: "Trusted Recruitment Partner for Long-Term Growth",
    d: "We go beyond filling positions, we build lasting partnerships. Our experienced recruitment consultants understand market trends, industry demands, and evolving workforce challenges to provide strategic hiring support that helps organizations attract, hire, and retain exceptional talent.",
  },
];

export default function WhyHireginie() {
  const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";
  return (
    <section className="py-14 bg-[#FCEEE5]">
      <div className={wrap}>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
          {/* Left panel */}
          <Reveal>
            <div className="h-full bg-[#F97C4D] rounded-[36px] p-9 lg:p-11 flex flex-col justify-center">
              <h2 className="font-serif text-[clamp(28px,2.8vw,38px)] font-black text-dark mb-5">
                Why Hireginie ?
              </h2>
              <p className="text-black text-[18px] leading-relaxed">
                At Hireginie, we believe successful hiring is about finding the right people
                who contribute to long-term business growth. As a trusted recruitment and
                staffing partner, we combine industry expertise, technology-driven hiring
                processes, and personalized consulting to deliver efficient, reliable, and
                scalable talent acquisition solutions. Whether you&apos;re a startup, SME, or
                large enterprise, Hireginie helps you build high-performing teams with
                confidence.
              </p>
            </div>
          </Reveal>

          {/* Right cards — flip on hover to reveal description */}
          <div className="h-full flex flex-col gap-5">
            {REASONS.map((r, idx) => (
              <Reveal key={r.t} delay={idx * 0.1} className="flex-1">
                <div className="group h-full min-h-[110px] [perspective:1200px]">
                  <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                    {/* Front — title only */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#FBE1D2] border border-dark/70 rounded-[24px] px-7 lg:px-8 flex items-center justify-center text-center">
                      <h3 className="font-serif text-[23px] font-bold text-dark leading-snug">{r.t}</h3>
                    </div>
                    {/* Back — description */}
                    <div
                      className="absolute inset-0 [backface-visibility:hidden] bg-[#F97C4D] rounded-[24px] px-7 lg:px-8 flex items-center justify-center text-center"
                      style={{ transform: "rotateX(180deg)" }}
                    >
                      <p className="text-dark text-[17px] leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
