import { Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "./Blocks";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/site";

export function ServicePage({
  serviceKey,
  title,
  italic,
  statement,
  points,
  cta = "Talk to a Sales Geek",
}: {
  serviceKey: (typeof SERVICES)[number]["key"];
  title: string;
  italic: string;
  statement: string;
  points: { k: string; v: string }[];
  cta?: string;
}) {
  const s = SERVICES.find((x) => x.key === serviceKey)!;
  const others = SERVICES.filter((x) => x.key !== serviceKey);
  return (
    <>
      <PageHero eyebrow={s.fit} title={title} italic={italic} intro={s.short} img={s.img} imgAlt={s.alt}>
        <Link to="/contact" className="btn btn-ink">
          {cta} →
        </Link>
        <Link to="/find-a-geek" className="btn btn-ghost">
          Find your Geek
        </Link>
      </PageHero>
      <section className="border-t-2 border-ink py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <p className="display text-[clamp(1.75rem,4vw,4rem)]">{statement}</p>
          </Reveal>
          <dl className="lg:col-span-4 lg:col-start-9">
            {points.map((p, i) => (
              <Reveal key={p.k} delay={i * 80} className="border-t border-border py-5 sm:py-6">
                <dt className="serif-i text-2xl text-accent sm:text-3xl">{p.k}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{p.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
      <section className="bg-ink py-16 text-ink-foreground sm:py-20">
        <div className="container-x">
          <p className="eyebrow text-primary">Keep exploring</p>
          <div className="mt-8 grid gap-px bg-ink-foreground/15 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.key}
                to={o.to}
                className="group bg-ink p-7 transition-all duration-300 hover:bg-primary hover:text-ink focus-visible:bg-primary focus-visible:text-ink focus-visible:outline-none sm:p-8"
              >
                <p className="display text-2xl sm:text-3xl">{o.title}</p>
                <p className="mt-4 text-sm opacity-70">{o.short}</p>
                <span className="mt-6 inline-block text-2xl transition-transform duration-300 group-hover:translate-x-2" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Ready for" italic="more sales?" cta={cta} to="/contact" />
    </>
  );
}
