import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/data";

const steps = [
  {
    step: "01",
    title: "Fly into Cebu",
    body: "Arrive at Mactan-Cebu International Airport, the gateway to the island.",
  },
  {
    step: "02",
    title: "Head to Moalboal",
    body: "Take a taxi south, or let us arrange a private airport transfer for you.",
  },
  {
    step: "03",
    title: "Reach White Beach",
    body: "We're nestled on the White Beach area of the Moalboal peninsula, on Cebu's southwest coast.",
  },
];

export default function Location() {
  return (
    <section id="location" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="How to get there"
              title={
                <>
                  Nestled on White Beach,
                  <span className="italic text-ocean"> Moalboal.</span>
                </>
              }
              intro="Ravenala Beach Bungalows sits on the southwest coast of Cebu, overlooking Tañon Strait toward the mountains of Negros Island."
            />

            <ol className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <Reveal key={s.step} delay={i}>
                  <li className="flex gap-5">
                    <span className="font-display text-2xl font-light text-ocean/70">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-deep">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={1}>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink/5 lg:aspect-auto lg:h-full">
              <Image
                src="/images/map.jpg"
                alt={`Map showing ${site.name} in Moalboal, Cebu`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ravenala+Beach+Bungalows+Moalboal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-deep shadow-card transition-colors hover:text-ocean"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s7-6.7 7-12a7 7 0 10-14 0c0 5.3 7 12 7 12z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
