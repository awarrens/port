import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left — photo with name overlay */}
      <div className="relative placeholder-photo aspect-[4/5] md:aspect-auto md:min-h-screen overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Andrew Sass"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/40"
        />
        <h1 className="absolute top-6 left-6 md:top-10 md:left-12 font-sans font-light text-white text-[18vw] md:text-[9vw] leading-[0.9] tracking-[-0.045em]">
          Andrew
          <br />
          Sass
        </h1>
        <a
          href="https://www.linkedin.com/in/andrew-sass/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 left-6 md:bottom-10 md:left-12 font-sans font-medium text-xl md:text-2xl text-white/95 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>

      {/* Right — prose */}
      <div className="px-6 md:px-14 py-12 md:py-14 flex flex-col gap-10 md:gap-12 md:min-h-screen">
        <p className="font-sans text-xl md:text-[1.5rem] leading-[1.3] max-w-[52ch] text-ink">
          Helping organizations make sense of people, systems, and complexity
        </p>

        <p className="font-display text-[1.9rem] md:text-[3.25rem] leading-[1.12] tracking-[-0.015em] flex-1">
          My work focuses on understanding people and systems, identifying
          meaningful patterns, and translating insight into action. I shape
          those patterns into experiences that are both functional and
          well-crafted, grounded in data and built to hold up over time.
        </p>

        <div className="md:mt-auto">
          <h2 className="font-sans text-xs md:text-sm text-stone uppercase tracking-[0.12em] mb-3">
            <span aria-hidden>🌱</span> Sample works
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://stirring-kayak-d03.notion.site/Wins-Opportunties-vol-1-38299a160fbe8013ba52f96c33661bec"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-base md:text-lg text-ink inline-flex items-baseline gap-1.5"
              >
                <span className="group-hover:underline underline-offset-4">
                  Research &amp; Opportunities Sample
                </span>
                <span
                  aria-hidden
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all no-underline"
                >
                  →
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
