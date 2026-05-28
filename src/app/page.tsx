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
      <div className="px-6 md:px-14 py-12 md:py-14 flex flex-col gap-10 md:gap-12 min-h-screen">
        <p className="font-sans text-xl md:text-[1.5rem] leading-[1.3] max-w-[52ch] text-ink">
          Helping organizations make sense of people, systems, and complexity
        </p>

        <p className="font-display text-[1.9rem] md:text-[3.25rem] leading-[1.12] tracking-[-0.015em] flex-1">
          My work focuses on understanding people and organizations,
          identifying meaningful patterns, and translating insight into action.
          I collaborate closely with teams through research and synthesis to
          support decisions that hold up over time.
        </p>

        <p className="font-sans text-sm md:text-base text-stone mt-auto">
          <span aria-hidden>🌱</span> Selected work and writing coming soon.
        </p>
      </div>
    </main>
  );
}
