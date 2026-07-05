import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { site, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-cream">
      {/* CTA band */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-ocean/30 blur-3xl"
        />
        <Reveal>
          <div className="relative text-center">
            <p className="eyebrow text-foam">Plan your next getaway</p>
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-balance text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
              Your story by the sea
              <span className="italic text-foam"> starts here.</span>
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-coral px-8 py-4 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-coral-600"
              >
                Reserve your stay →
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Links */}
      <div className="relative mx-auto mt-20 max-w-7xl px-6">
        <div className="grid gap-10 border-t border-cream/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />
              <span className="font-display text-2xl">
                Ravenala<span className="text-foam">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              A family-run beach hideaway on {site.location}. Overlooking Tañon
              Strait since {site.established}.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-cream/50">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-foam"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/50">Find Us</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 transition-colors hover:text-foam"
                >
                  {site.address.barangay}, {site.address.city}<br />
                  {site.address.island}<br />
                  {site.address.country}
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-cream/50">Phone</p>
                <a
                  href={`tel:${site.phone}`}
                  className="text-sm text-cream/70 transition-colors hover:text-foam"
                >
                  {site.phone}
                </a>
              </li>
              <li className="pt-1">
                <p className="text-xs text-cream/50">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-cream/70 transition-colors hover:text-foam"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cream/50">Connect</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 transition-colors hover:text-foam"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 transition-colors hover:text-foam"
                >
                  Instagram
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-8 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="https://www.meetmazhar.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/[0.03] px-4 py-2 text-cream/60 transition-colors hover:border-foam/30 hover:bg-cream/[0.06] hover:text-cream"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-foam shadow-[0_0_8px_var(--color-foam)] transition-transform group-hover:scale-125"
            />
            Crafted by{" "}
            <span className="font-medium text-cream/90 transition-colors group-hover:text-foam">
              Mazhar
            </span>
            <span className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
