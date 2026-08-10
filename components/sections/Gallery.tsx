"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import { gallery, panorama } from "@/lib/data";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Sunlit mornings,
              <span className="italic text-ocean"> golden evenings.</span>
            </>
          }
          intro="A glimpse of life at Ravenala — from the house reef to the beach bar."
        />

        <div className="mt-14 gap-4 [column-count:2] lg:[column-count:4]">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View photo: ${img.alt}`}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep/0 transition-colors duration-300 group-hover:bg-deep/20" />
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-16 h-[220px] w-full overflow-hidden sm:h-[320px]">
        <Image
          src={panorama.src}
          alt={panorama.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Lightbox images={gallery} index={index} onIndexChange={setIndex} />
    </section>
  );
}
