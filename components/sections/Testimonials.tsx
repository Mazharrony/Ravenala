import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-coral" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 18.9 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title={
            <>
              Loved by guests who
              <span className="italic text-ocean"> keep coming back.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-cream p-8 shadow-card ring-1 ring-ink/5">
                <Stars count={t.stars} />
                <blockquote className="mt-5 flex-1 font-display text-lg font-light leading-relaxed text-deep">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ocean/15 font-display text-lg text-ocean">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm font-semibold text-ink/80">
                    {t.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
