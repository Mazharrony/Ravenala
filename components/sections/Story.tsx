import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "1997", label: "Founded in paradise" },
  { value: "4", label: "Languages spoken" },
  { value: "1", label: "House reef at your door" },
];

export default function Story() {
  return (
    <section id="story" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src="/images/staff.png"
                  alt="The Ravenala family welcoming guests"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-cream shadow-card sm:block lg:-right-10">
                <div className="relative aspect-square">
                  <Image
                    src="/images/outdoorbeach.png"
                    alt="White Beach shoreline at Ravenala"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  A piece of heaven, built in
                  <span className="italic text-ocean"> harmony with nature.</span>
                </>
              }
              intro="Our story began in 1997 when we found paradise in Moalboal and built our resort overlooking the clear blue waters of Tañon Strait and the steadfast mountains of Negros Island. Since then, we've welcomed guests from every corner of the world to discover the serenity of the sea and escape the ordinary."
            />

            <Reveal delay={3}>
              <p className="mt-6 text-base leading-relaxed text-ink/70">
                Ours is a family-run resort where our friendly staff — with us
                from the very start — look after every detail of your stay. Book
                your next holiday with us and get ready to make your story.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-4xl font-light text-ocean">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink/60">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
