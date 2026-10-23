import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { OFFICIAL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/insights")({
  head: () =>
    pageMeta(
      "Insights, News & Podcast",
      "Geek News, press coverage, media and the Sales Mastery Podcast from Sales Geek.",
      { path: "/insights", keywords: "sales geek news, sales mastery podcast, sales geek press" },
    ),
  component: Insights,
});

function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Geek" italic="news." intro="News, press, media and the Sales Mastery Podcast." />
      <section className="container-x grid gap-px bg-border pb-px md:grid-cols-12">
        <Reveal as="article" className="bg-ink p-8 text-ink-foreground sm:p-10 md:col-span-7 lg:p-14">
          <p className="eyebrow text-primary">In the press · 2026</p>
          <h2 className="display mt-6 text-[clamp(1.7rem,3.8vw,3.6rem)]">
            Named a business using AI <span className="serif-i text-primary">safely and efficiently.</span>
          </h2>
          <p className="mt-6 max-w-lg text-ink-foreground/75">
            Sales Geek in Manchester was highlighted in a June 2026 LinkedIn post by Rishi Sunak, and features in Enterprise Nation's 2026 report on AI adoption among UK SMEs.
          </p>
        </Reveal>
        <Reveal as="article" delay={80} className="bg-primary p-8 text-ink sm:p-10 md:col-span-5 lg:p-14">
          <p className="eyebrow">Awards · 2026</p>
          <h2 className="display mt-6 text-3xl sm:text-4xl">Shortlisted: International Business of the Year</h2>
          <p className="mt-4">British Business Awards 2026.</p>
        </Reveal>
        <Reveal as="article" delay={120} className="bg-card p-8 sm:p-10 md:col-span-12 lg:p-14">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-accent">Podcast</p>
              <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,5.5rem)]">
                Sales <span className="serif-i">Mastery</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base text-muted-foreground sm:text-lg">
                Conversations about the craft of selling. Episodes are listed on the official site.
              </p>
              <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-6">
                ▶ Listen to episodes
              </a>
            </div>
          </div>
        </Reveal>
      </section>
      <div className="h-20 sm:h-24" aria-hidden />
    </>
  );
}
