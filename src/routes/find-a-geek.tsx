import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { REGIONS, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/find-a-geek")({
  head: () =>
    pageMeta(
      "Find a Geek Near Me",
      "Find your local Sales Geek across the UK, US, India, Malaysia, the GCC and Mongolia.",
      { path: "/find-a-geek", keywords: "find a sales geek, local sales geek, sales geek near me" },
    ),
  component: Find,
});

function Find() {
  return (
    <section className="hero-screen">
      <div className="hero-screen-inner h-full overflow-y-auto lg:grid-cols-12 lg:overflow-visible">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent">Find a Geek near me</p>
          <h1 className="display hero-title-wide mt-3">
            Find <span className="serif-i text-accent">your</span> Geek.
          </h1>
          <p className="mt-5 max-w-md text-sm text-muted-foreground sm:mt-6 sm:text-base">
            Tell us where you are and what you need. We'll connect you with the right local Geek.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8" aria-label="Regions we serve">
            {REGIONS.map((r) => (
              <li key={r} className="border-2 border-ink px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-primary">
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm region />
        </div>
      </div>
    </section>
  );
}
