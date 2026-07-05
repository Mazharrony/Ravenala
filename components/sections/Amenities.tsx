import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { amenities } from "@/lib/data";

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Amenities"
          title={
            <>
              Everything you need,
              <span className="italic text-ocean"> nothing you don&apos;t.</span>
            </>
          }
          intro="Thoughtful comforts in every bungalow and warm, attentive service across the resort — so all that's left to do is slow down."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((group, i) => (
            <Reveal key={group.title} delay={i} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-sand/30 p-7 transition-colors hover:border-ocean/30 hover:bg-sand/50">
                <h3 className="font-display text-xl text-deep">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink/70"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-ocean"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
