"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-deep"
    >
      {/* Static hero background */}
      <div className="absolute inset-0">
        <Image
          aria-hidden
          src="/images/outdoor2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
      </div>

      {/* Legibility scrims */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-deep/25 via-transparent to-deep/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(56%_46%_at_50%_46%,rgba(4,37,44,0.5)_0%,transparent_70%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-cream">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-cream/95 [text-shadow:0_2px_16px_rgba(4,37,44,0.8)]"
        >
          Moalboal · Cebu · Est. {site.established}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-balance text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl [text-shadow:0_4px_30px_rgba(4,37,44,0.35)]"
        >
          Where the sea
          <span className="block italic text-foam">writes your story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-xl text-balance text-base text-cream/85 sm:text-lg"
        >
          A family-run beach hideaway on White Beach, Moalboal — bungalows
          overlooking Tañon Strait, a house reef at your doorstep, and unhurried
          island living since 1997.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-13 items-center justify-center rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-coral-600 hover:shadow-[0_24px_70px_-18px_rgba(255,111,94,0.7)]"
          >
            Reserve your stay
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#rooms"
            className="inline-flex h-13 items-center justify-center rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-cream/10"
          >
            Explore the bungalows
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#story"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5"
        >
          <span className="block h-2 w-1 rounded-full bg-cream/80" />
        </motion.span>
      </motion.a>
    </section>
  );
}
