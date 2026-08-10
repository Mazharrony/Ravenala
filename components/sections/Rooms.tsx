"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import { rooms, rateNotes, site } from "@/lib/data";

const peso = (n: number) =>
  new Intl.NumberFormat("en-PH", { maximumFractionDigits: 0 }).format(n);

export default function Rooms() {
  const [open, setOpen] = useState<{ room: number; photo: number } | null>(null);
  const activeRoom = open === null ? null : rooms[open.room];

  return (
    <section id="rooms" className="relative bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Rooms & Rates"
            title={
              <>
                Bungalows for two,
                <span className="italic text-ocean"> or the whole barkada.</span>
              </>
            }
            intro="Every stay includes breakfast, free secured parking, and a shoreline just a few footsteps away. Rates are quoted per night, net."
          />
          <Reveal delay={2}>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center rounded-full bg-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ocean"
            >
              Check availability →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={i} className="h-full">
              <article
                className={[
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream shadow-card ring-1 ring-ink/5 transition-transform duration-500 hover:-translate-y-1.5",
                  room.featured ? "ring-2 ring-coral/60" : "",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen({ room: i, photo: 0 })}
                  aria-label={`View ${room.images.length} photos of the ${room.name}`}
                  className="relative aspect-4/3 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ocean"
                >
                  <Image
                    src={room.images[0].src}
                    alt={room.images[0].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/50 to-transparent" />
                  {room.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                      Most loved
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 rounded-full glass-dark px-3 py-1 text-xs font-medium text-cream">
                    {room.guests}
                  </span>
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-xs font-medium text-cream">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M3 16l4.5-4.5 4 4L15 12l6 5.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {room.images.length}
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-normal text-deep">
                    {room.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {room.blurb}
                  </p>
                  <ul className="mt-4 mb-6 flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-medium text-ocean"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-end justify-between border-t border-ink/10 pt-5">
                    <div>
                      <span className="block text-xs text-ink/50">Starting from</span>
                      <span className="font-display text-2xl font-medium text-deep">
                        ₱{peso(room.price)}
                      </span>
                      <span className="text-xs text-ink/50"> / night</span>
                    </div>
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-coral transition-colors hover:text-coral-600"
                    >
                      Book →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-2 text-center text-sm text-ink/60">
            {rateNotes.map((note) => (
              <li key={note} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-coral" />
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Lightbox
        images={activeRoom?.images ?? []}
        caption={activeRoom?.name}
        index={open?.photo ?? null}
        onIndexChange={(photo) =>
          setOpen((prev) =>
            photo === null || prev === null ? null : { ...prev, photo }
          )
        }
      />
    </section>
  );
}
