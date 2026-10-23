import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, SourceNote } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { OFFICIAL, SERVICES, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta(
      "Our Services",
      "Part-time sales directors, real-time sales training, the Sales Geek Academy and sales mentoring.",
      { path: "/services", keywords: "sales services, sales director, sales trainer, sales mentor, sales academy" },
    ),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Sales,"
        italic="sorted."
        intro="Expert sales consultancy, sales training and sales directorship: four routes to more sales."
      />
      <section className="container-x pb-20 sm:pb-24">
        {SERVICES.map((s, i) => (
          <Reveal key={s.key} delay={i * 40}>
            <Link
              to={s.to}
              className={`group grid items-center gap-8 border-t-2 border-ink py-10 sm:py-12 md:grid-cols-12 ${i % 2 ? "md:text-right" : ""}`}
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className={`aspect-[4/3] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 md:col-span-4 ${i % 2 ? "md:order-2 md:col-start-9" : ""}`}
              />
              <div className={`md:col-span-7 ${i % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-6"}`}>
                <p className="eyebrow text-accent">{s.fit}</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.5vw,4.5rem)] transition-colors duration-300 group-hover:text-accent">
                  {s.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">{s.short}</p>
              </div>
            </Link>
          </Reveal>
        ))}
        <div id="products" className="mt-14 grid gap-8 sm:mt-16 md:grid-cols-12">
          <h2 className="display text-4xl sm:text-5xl md:col-span-5">
            Other <span className="serif-i">products</span>
          </h2>
          <div className="md:col-span-7">
            <SourceNote>
              Sales Geek's wider product range is listed on the official site. Rather than guess, we link straight to it:{" "}
              <a className="font-semibold text-foreground underline underline-offset-4" href={`${OFFICIAL}/our-products/`} target="_blank" rel="noopener noreferrer">
                view current products ↗
              </a>
            </SourceNote>
          </div>
        </div>
      </section>
      <CtaBand title="Not sure where" italic="to start?" cta="Get in touch" to="/contact" />
    </>
  );
}
