"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      ].join(" ")}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={[
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass shadow-card"
              : "glass-dark ring-1 ring-cream/15",
          ].join(" ")}
        >
          <a
            href="#top"
            aria-label={`${site.name} home`}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/logo.png"
              alt={site.name}
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-full"
            />
            <span
              className={[
                "font-display text-lg font-medium tracking-tight transition-colors",
                scrolled ? "text-deep" : "text-cream",
              ].join(" ")}
            >
              Ravenala
              <span className={scrolled ? "text-ocean" : "text-foam"}>.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={[
                    "text-sm font-medium transition-colors",
                    scrolled
                      ? "text-ink/70 hover:text-ocean"
                      : "text-cream/90 hover:text-foam",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600 sm:inline-block"
            >
              Book now
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={[
                "grid h-10 w-10 place-items-center rounded-full lg:hidden",
                scrolled ? "text-deep hover:bg-ink/5" : "text-cream hover:bg-cream/10",
              ].join(" ")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-deep/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Image
                src="/logo.png"
                alt={site.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full text-cream hover:bg-cream/10"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-3 text-4xl font-light text-cream/90 hover:text-foam"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-8 pb-12">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-coral px-6 py-4 text-center text-base font-semibold text-white"
              >
                Book your stay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
