import { createFileRoute, Link } from "@tanstack/react-router";
import founderSign from "@/assets/richard-few-signature.png";
import { CtaBand, PageHero, SourceNote } from "@/components/site/Blocks";
import { OFFICIAL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/geeks")({
  head: () =>
    pageMeta(
      "Meet the Geeks",
      "The Sales Geek network: experienced sales leaders with 1,800+ years of collective sales leadership.",
      { path: "/geeks", keywords: "meet the geeks, richard few, sales geek network" },
    ),
  component: Geeks,
});

function Geeks() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Geeks"
        title="Sales leaders,"
        italic="not generalists."
        intro="A network holding more than 1,800 years of collective sales leadership experience."
      />
      <section className="container-x pb-20 sm:pb-24">
        <div className="group grid items-end gap-8 border-t-2 border-ink pt-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-accent">Founder &amp; Chief Geek</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,7vw,7rem)] transition-colors duration-300 group-hover:text-accent">
              Richard <span className="serif-i">Few</span>
            </h2>
            <img
              src={founderSign}
              alt="Richard Few signature"
              width={1168}
              height={400}
              loading="lazy"
              decoding="async"
              className="mt-6 h-16 w-auto max-w-full object-contain object-left sm:h-20"
            />
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:col-span-5">
            Founded Sales Geek in 2017 to change the way the world perceives sales.
          </p>
        </div>
        <div className="mt-14 max-w-2xl sm:mt-16">
          <SourceNote>
            Individual Geek profiles are kept up to date by each franchise. To avoid publishing anything inaccurate, browse the current directory on the{" "}
            <a className="font-semibold text-foreground underline underline-offset-4" href={OFFICIAL} target="_blank" rel="noopener noreferrer">
              official site ↗
            </a>{" "}
            or use{" "}
            <Link to="/find-a-geek" className="font-semibold text-foreground underline underline-offset-4">
              Find a Geek
            </Link>
            .
          </SourceNote>
        </div>
      </section>
      <CtaBand title="Want to be" italic="a Geek?" cta="Explore franchise" to="/franchise" />
    </>
  );
}
