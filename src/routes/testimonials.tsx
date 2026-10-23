import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SourceNote } from "@/components/site/Blocks";
import { OFFICIAL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta("Testimonials", "What Sales Geek clients say about working with their Geek.", {
      path: "/testimonials",
      keywords: "sales geek testimonials, client reviews, sales geek success stories",
    }),
  component: () => (
    <>
      <PageHero eyebrow="Testimonials" title="In their" italic="own words." intro="Over 2,500 local businesses supported since 2020." />
      <section className="container-x pb-20 sm:pb-24">
        <div className="max-w-2xl">
          <SourceNote>
            We only publish testimonials verbatim from clients. Read them on the{" "}
            <a className="font-semibold text-foreground underline underline-offset-4" href={`${OFFICIAL}/testimonials/`} target="_blank" rel="noopener noreferrer">
              official testimonials page ↗
            </a>
            . This space is ready to present them as large editorial quotes once supplied.
          </SourceNote>
        </div>
      </section>
      <CtaBand title="Write your" italic="success story." cta="Get in touch" to="/contact" />
    </>
  ),
});
