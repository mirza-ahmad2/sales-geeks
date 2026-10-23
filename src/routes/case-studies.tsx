import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SourceNote } from "@/components/site/Blocks";
import { OFFICIAL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    pageMeta(
      "Case Studies",
      "How Sales Geek has helped businesses grow: challenges, approaches and outcomes.",
      { path: "/case-studies", keywords: "sales geek case studies, sales growth results, client outcomes" },
    ),
  component: () => (
    <>
      <PageHero eyebrow="Case studies" title="Proof," italic="not promises." intro="Since 2020, Sales Geek has managed more than $8 billion of client revenue." />
      <section className="container-x pb-20 sm:pb-24">
        <div className="max-w-2xl">
          <SourceNote>
            Each case study is laid out as challenge → approach → outcome using only verified figures. Read the current studies on the{" "}
            <a className="font-semibold text-foreground underline underline-offset-4" href={`${OFFICIAL}/case-studies/`} target="_blank" rel="noopener noreferrer">
              official site ↗
            </a>
            .
          </SourceNote>
        </div>
      </section>
      <CtaBand title="Be the next" italic="case study." cta="Book a conversation" to="/contact" />
    </>
  ),
});
