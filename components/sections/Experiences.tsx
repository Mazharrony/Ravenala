import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-deep py-24 text-cream sm:py-32"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-ocean/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lagoon/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          tone="light"
          eyebrow="Experiences"
          title={
            <>
              The reef, the run,
              <span className="italic text-foam"> and everything beyond.</span>
            </>
          }
          intro="Relax by the garden and beachfront, or let us organize the adventure — our famous house reef is the best spot for kayaking, snorkeling, and scuba diving."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={i} className="h-full">
              <article className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <div className="relative p-8">
                  <h3 className="font-display text-3xl font-light">
                    {exp.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">
                    {exp.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
