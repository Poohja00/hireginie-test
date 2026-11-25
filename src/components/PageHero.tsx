import Reveal from "@/components/Reveal";

export default function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="bg-soft py-14 text-center">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        <Reveal>
          <h1 className="text-[clamp(30px,4.5vw,44px)] font-bold tracking-tight">{title}</h1>
          <p className="text-muted text-sm mt-2.5">
            Hireginie <span className="text-accent">›</span> {crumb}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
