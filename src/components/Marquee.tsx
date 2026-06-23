import Image from "next/image";

const CLIENTS = [
  { name: "ACT Fibernet", file: "ACT.png" },
  { name: "IHX", file: "ihx_logo.svg" },
  { name: "Mygate", file: "MyGate_new_logo_1-01-1.png" },
  { name: "Nova Benefits", file: "images.png" },
  { name: "Synapx", file: "1761232166717-Synapx Logo for White Background.png" },
  { name: "BigBadBikes", file: "logo_Black.png" },
];

// Repeat enough times to overfill any screen, then duplicate the whole set
// so the -50% loop is seamless and full from the first frame.
const HALF = Array.from({ length: 3 }, () => CLIENTS).flat();
const TRACK = [...HALF, ...HALF];

export default function Marquee() {
  return (
    <section className="bg-soft py-12">
      <div className="mx-auto w-full max-w-[88rem] px-6 lg:px-10">
        <h3 className="text-center text-[22px] font-semibold text-[#2a2933] mb-7">
          Trusted by growing businesses across India
        </h3>
      </div>
      <div className="marquee overflow-hidden marquee-mask">
        <div className="animate-marquee flex w-max">
          {TRACK.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 w-[180px] h-16"
            >
              <Image
                src={`/logo/${c.file}`}
                alt={c.name}
                width={130}
                height={46}
                className="max-h-[46px] w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
