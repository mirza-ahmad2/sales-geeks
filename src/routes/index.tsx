import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import { Marquee } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { REGIONS, SERVICES, STATS, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "More Sales. Delivered.",
      "Expert sales consultancy, sales training and part-time sales directorship for small businesses. Endorsed by the Institute of Sales Professionals.",
      { path: "/" },
    ),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee words={["Momentum", "Confidence", "Skill", "Growth", "Energy", "People"]} className="border-y-2 border-ink bg-primary py-4 text-ink" />
      <ServicesStory />
      <Stats />
      <Mission />
      <FranchiseTeaser />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-screen">
      <div className="hero-screen-inner lg:grid-cols-12">
        <div className="relative z-10 min-w-0 lg:col-span-7">
          <p className="eyebrow animate-fade-up">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-hidden />
            Sales consultancy · Sales training · Sales directorship
          </p>
          <h1 className="display hero-title-home mt-2.5 sm:mt-3">
            <span className="block overflow-hidden">
              <span className="block animate-rise">More</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-rise text-outline" style={{ animationDelay: "90ms" }}>
                Sales.
              </span>
            </span>
            <span className="block overflow-hidden pb-0.5">
              <span className="serif-i block animate-rise text-accent" style={{ animationDelay: "180ms" }}>
                Delivered.
              </span>
            </span>
          </h1>
          <p className="mt-3 max-w-md animate-fade-up text-sm leading-snug sm:mt-3.5 sm:text-[0.95rem] sm:leading-relaxed" style={{ animationDelay: "500ms" }}>
            Providing expert sales consultancy, sales training and sales directorship, so small businesses get top-level sales talent they'd ordinarily be priced out of.
          </p>
          <div className="mt-4 flex flex-wrap items-start gap-2.5 animate-fade-up sm:mt-5" style={{ animationDelay: "600ms" }}>
            <Link to="/contact" className="btn btn-ink">
              Get in touch →
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Explore our services
            </Link>
          </div>
        </div>
        <div className="relative col-span-5 hidden min-h-0 lg:block">
          <div className="absolute -right-3 -top-3 h-full w-full border-2 border-ink" aria-hidden />
          <img
            src={hero}
            alt="A Sales Geek sales director leading a team session"
            width={1280}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="relative h-full max-h-[calc(100svh-6.5rem)] w-full animate-reveal object-cover shadow-[6px_6px_0_0_var(--ink)]"
            style={{ aspectRatio: "4 / 5", animationDelay: "300ms" }}
          />
          <div
            className="absolute -left-4 bottom-8 max-w-44 rotate-[-4deg] bg-ink p-3.5 text-ink-foreground shadow-xl animate-fade-up"
            style={{ animationDelay: "900ms" }}
          >
            <p className="eyebrow text-primary">Endorsed</p>
            <p className="mt-1 text-sm leading-snug">Sales training endorsed by the Institute of Sales Professionals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesStory() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active] ?? SERVICES[0];
  return (
    <section className="bg-ink py-16 text-ink-foreground sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(2.2rem,6.5vw,6.5rem)]">
            Four ways to <br />
            <span className="serif-i text-primary">build momentum.</span>
          </h2>
          <p className="max-w-sm text-ink-foreground/70">
            From a part-time sales director at the top table to bite-size online learning, pick where your growth starts.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12">
          <ul className="lg:col-span-6" role="tablist" aria-label="Services">
            {SERVICES.map((x, i) => (
              <li key={x.key} className="border-t border-ink-foreground/20 last:border-b">
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  id={`service-tab-${x.key}`}
                  aria-controls={`service-panel-${x.key}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-baseline justify-between gap-4 py-5 text-left transition-colors sm:py-6 ${
                    i === active ? "text-primary" : "text-ink-foreground/60 hover:text-ink-foreground"
                  }`}
                >
                  <span className={`display text-[clamp(1.5rem,3.4vw,3.2rem)] transition-transform duration-500 ${i === active ? "translate-x-2 sm:translate-x-4" : ""}`}>
                    {x.title}
                  </span>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div
            className="lg:col-span-6"
            role="tabpanel"
            id={`service-panel-${s.key}`}
            aria-labelledby={`service-tab-${s.key}`}
          >
            <div key={s.key} className="relative">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full animate-reveal object-cover"
              />
              <div className="relative -mt-12 ml-auto w-[92%] bg-primary p-6 text-ink animate-fade-up shadow-[6px_6px_0_0_var(--ink)] sm:-mt-16 sm:w-[88%] sm:p-8">
                <p className="eyebrow">{s.fit}</p>
                <p className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{s.short}</p>
                <Link to={s.to} className="eyebrow mt-6 inline-block border-b-2 border-ink pb-1 transition-transform hover:translate-x-1">
                  Discover {s.title} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow text-accent">Geek stats</p>
        <div className="mt-10 grid gap-y-12 md:grid-cols-2 md:gap-y-14">
          {STATS.map((st, i) => (
            <Reveal key={st.label} delay={i * 60} className={`border-t-2 border-ink pt-6 ${i % 2 ? "md:mt-24 md:pl-12" : "md:pr-12"}`}>
              <p className="display text-[clamp(3.2rem,10vw,10rem)]">{st.value}</p>
              <p className="serif-i mt-2 text-xl text-muted-foreground sm:text-2xl">{st.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 max-w-3xl text-lg leading-relaxed sm:mt-20 sm:text-xl">
          The number one provider of part-time sales directors in the world, with Geeks across{" "}
          {REGIONS.map((r, i) => (
            <span key={r}>
              <strong className="bg-primary px-1">{r}</strong>
              {i < REGIONS.length - 2 ? ", " : i === REGIONS.length - 2 ? " and " : "."}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative overflow-hidden border-y-2 border-ink bg-card py-16 sm:py-24 lg:py-36">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <p className="eyebrow lg:col-span-3">Our mission</p>
        <Reveal className="lg:col-span-9">
          <blockquote className="display text-[clamp(2.2rem,6vw,6.5rem)]">
            Changing the way the world <span className="serif-i text-accent">perceives</span> sales.
          </blockquote>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-10 sm:text-lg">
            Sales has almost become a dirty word. Founded in 2017, Sales Geek is determined to do something about it, starting with small businesses who deserve top-level sales talent.
          </p>
          <Link to="/about" className="btn btn-ghost mt-8">
            Who we are
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FranchiseTeaser() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5 lg:col-start-2">
          <p className="eyebrow text-accent">Franchise</p>
          <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,5.5rem)]">
            Be your own <span className="serif-i">Geek.</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <p className="text-base leading-relaxed sm:text-lg">
            "We have been exactly where you are now, dreaming of something better." Sales Geek HQ is franchise number one. Explore Scale-Up and Your Local Franchise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/franchise" className="btn btn-primary">
              Explore franchise opportunities
            </Link>
            <Link to="/find-a-geek" className="btn btn-ghost">
              Find a Geek near me
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
