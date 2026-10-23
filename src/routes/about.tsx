import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import founderSign from "@/assets/richard-few-signature.png";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { REGIONS, STATS, VALUES, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Us",
      "Sales Geek was founded in 2017 to change the way the world perceives sales. Meet our mission, values and story.",
      { path: "/about", keywords: "sales geek about, richard few, sales geek values, institute of sales professionals" },
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Changing how"
        italic="the world sees sales."
        intro="Sales has almost become a dirty word. We are determined to do something about it, and part of that mission is giving small businesses access to top-level sales talent."
        img={hero}
        imgAlt="Sales Geek team collaborating in a client workshop"
      />
      <section className="bg-ink py-16 text-ink-foreground sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-primary">The Sales Geek story</p>
            <p className="display mt-6 text-[clamp(4rem,12vw,12rem)] text-primary">2017</p>
          </Reveal>
          <Reveal delay={80} className="space-y-6 text-base leading-relaxed text-ink-foreground/80 sm:text-lg lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p>
              Founder and Chief Geek <strong className="text-ink-foreground">Richard Few</strong> started Sales Geek in 2017 with a notion that sales could, and should, be better.
            </p>
            <p>
              From humble beginnings, big dreams and the effort to match, Sales Geek HQ became franchise number one, and the network now reaches {REGIONS.join(", ")}.
            </p>
            <img
              src={founderSign}
              alt="Richard Few signature"
              width={1168}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-14 w-auto max-w-full brightness-0 invert object-contain object-left sm:h-16"
            />
            <blockquote className="serif-i border-l-4 border-primary pl-6 text-2xl text-ink-foreground sm:text-3xl">
              "If you want to change the world, you need to change your story."{" "}
              <cite className="eyebrow mt-2 block text-ink-foreground/50 not-italic">Michael Margolis</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <h2 className="display text-[clamp(2.2rem,5.5vw,5.5rem)]">
            Mission <span className="serif-i text-accent">&amp;</span> values
          </h2>
          <div className="mt-12 grid gap-x-12 md:mt-14 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 50} className={`group border-t-2 border-ink py-8 ${i % 2 ? "md:translate-y-16" : ""}`}>
                <p className="display text-3xl transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                  Geeks <span className="serif-i">{v.name.toLowerCase()}</span>
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y-2 border-ink bg-primary py-16 text-ink sm:py-20">
        <div className="container-x grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <p className="display text-5xl sm:text-6xl">{s.value}</p>
              <p className="mt-2 text-sm font-semibold">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <p className="eyebrow lg:col-span-3">Recognition</p>
          <div className="space-y-6 text-base leading-relaxed sm:text-lg lg:col-span-8">
            <p>
              Training endorsed by the <strong>Institute of Sales Professionals</strong>. Clients earn CPD points for every hour of training.
            </p>
            <p>
              Shortlisted for <strong>International Business of the Year</strong> at the British Business Awards 2026, and featured as a case study in Enterprise Nation's 2026 report on digital and AI adoption among UK SMEs.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/geeks" className="btn btn-ink">
                Meet the Geeks
              </Link>
              <Link to="/careers" className="btn btn-ghost">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Start your" italic="Geek journey." cta="Get in touch" to="/contact" />
    </>
  );
}
