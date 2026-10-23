import { createFileRoute, Link } from "@tanstack/react-router";
import mentor from "@/assets/mentor.jpg";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { REGIONS, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/franchise")({
  head: () =>
    pageMeta(
      "Franchise Opportunities",
      "Start your own Sales Geek business with the Scale-Up Franchise or Your Local Franchise.",
      { path: "/franchise", keywords: "sales geek franchise, scale-up franchise, local franchise" },
    ),
  component: Franchise,
});

const OPTIONS = [
  { name: "Scale-Up", italic: "Franchise", text: "For experienced sales leaders ready to build and grow a Sales Geek business with a team behind it." },
  { name: "Your Local", italic: "Franchise", text: "Bring top-level sales talent to the small businesses in your own community." },
];

function Franchise() {
  return (
    <>
      <PageHero
        eyebrow="Franchise opportunities"
        title="Be your"
        italic="own Geek."
        intro="“We have been exactly where you are now, dreaming of something better.” Sales Geek HQ is franchise number one."
        img={mentor}
        imgAlt="Sales Geek franchisee mentoring a local business owner"
      >
        <Link to="/contact" className="btn btn-ink">
          Explore franchise opportunities →
        </Link>
      </PageHero>
      <section className="bg-ink py-16 text-ink-foreground sm:py-24">
        <div className="container-x grid gap-px bg-ink-foreground/15 md:grid-cols-2">
          {OPTIONS.map((o) => (
            <div
              key={o.name}
              className="group bg-ink p-8 transition-colors duration-300 hover:bg-primary hover:text-ink sm:p-10 lg:p-16"
            >
              <h2 className="display text-[clamp(2.4rem,5.5vw,5.5rem)]">
                {o.name}
                <br />
                <span className="serif-i">{o.italic}</span>
              </h2>
              <p className="mt-8 max-w-md text-base opacity-80 sm:text-lg">{o.text}</p>
              <Link to="/contact" className="eyebrow mt-8 inline-block border-b-2 border-current pb-1 transition-transform group-hover:translate-x-1">
                Enquire →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-accent">A growing network</p>
            <p className="display mt-6 text-[clamp(1.6rem,4.5vw,4.5rem)]">
              {REGIONS.map((r, i) => (
                <span key={r} className={i % 2 ? "serif-i text-accent" : ""}>
                  {r}
                  {i < REGIONS.length - 1 ? " / " : ""}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
