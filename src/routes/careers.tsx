import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { VALUES, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () =>
    pageMeta(
      "Careers",
      "Join the Sales Geek tribe. Geeks care, always learn, get it done, make it fun and are brave.",
      { path: "/careers", keywords: "sales geek careers, join sales geek, sales geek jobs" },
    ),
  component: () => (
    <>
      <PageHero eyebrow="Careers" title="Join the" italic="tribe." intro="Being a Geek is belonging to a tribe. If these values sound like you, let's talk.">
        <Link to="/contact" className="btn btn-ink">
          Get in touch →
        </Link>
        <Link to="/franchise" className="btn btn-ghost">
          Franchise routes
        </Link>
      </PageHero>
      <section className="bg-ink py-16 text-ink-foreground sm:py-20">
        <div className="container-x flex flex-wrap gap-x-10 gap-y-4">
          {VALUES.map((v, i) => (
            <span key={v.name} className={`display text-[clamp(1.6rem,4.5vw,4.5rem)] ${i % 2 ? "serif-i text-primary" : ""}`}>
              {v.name}.
            </span>
          ))}
        </div>
      </section>
      <section className="container-x py-14 text-muted-foreground sm:py-16">
        No open vacancies are listed here right now. Get in touch to register your interest.
      </section>
    </>
  ),
});
