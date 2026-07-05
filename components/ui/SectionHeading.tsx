import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isCenter = align === "center";
  const isLight = tone === "light";
  return (
    <div
      className={[
        "max-w-2xl",
        isCenter ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <Reveal>
        <p className={isLight ? "eyebrow text-foam" : "eyebrow text-ocean"}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={[
            "font-display mt-4 text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl",
            isLight ? "text-cream" : "text-deep",
          ].join(" ")}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p
            className={[
              "mt-5 text-base leading-relaxed sm:text-lg",
              isLight ? "text-cream/75" : "text-ink/70",
            ].join(" ")}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
