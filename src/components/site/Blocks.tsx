import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Full-viewport hero shell: locks to one screen, scales type with viewport height. */
export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  img,
  imgAlt = "",
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
  img?: string;
  imgAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-screen">
      <div className={`hero-screen-inner ${img ? "lg:grid-cols-12" : ""}`}>
        <div className={`min-w-0 ${img ? "lg:col-span-7" : "max-w-5xl"}`}>
          <p className="eyebrow animate-fade-up text-accent">{eyebrow}</p>
          <h1 className={`display mt-2.5 animate-none sm:mt-3 ${img ? "hero-title" : "hero-title-wide"}`}>
            <span className="block overflow-hidden">
              <span className="block animate-rise">{title}</span>
            </span>
            {italic && (
              <span className="block overflow-hidden pb-0.5">
                <span className="serif-i block animate-rise text-[1.02em]" style={{ animationDelay: "120ms" }}>
                  {italic}
                </span>
              </span>
            )}
          </h1>
          {intro && (
            <p
              className="mt-3 max-w-xl animate-fade-up text-sm leading-snug text-muted-foreground sm:mt-3.5 sm:text-[0.95rem] sm:leading-relaxed lg:text-base"
              style={{ animationDelay: "250ms" }}
            >
              {intro}
            </p>
          )}
          {children && (
            <div className="mt-4 flex flex-wrap gap-2.5 animate-fade-up sm:mt-5" style={{ animationDelay: "350ms" }}>
              {children}
            </div>
          )}
        </div>
        {img && (
          <div className="relative col-span-5 hidden min-h-0 lg:block">
            <div className="absolute -left-3 -top-3 h-full w-full bg-primary" aria-hidden />
            <img
              src={img}
              alt={imgAlt}
              width={1280}
              height={960}
              decoding="async"
              className="relative h-full max-h-[calc(100svh-6.5rem)] w-full animate-reveal object-cover shadow-[6px_6px_0_0_var(--ink)]"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function CtaBand({ title, italic, cta, to }: { title: string; italic: string; cta: string; to: string }) {
  return (
    <Reveal as="section" className="bg-primary text-ink">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-14 sm:py-16 md:flex-row md:items-center">
        <h2 className="display text-[clamp(2rem,5.5vw,5rem)]">
          {title} <span className="serif-i">{italic}</span>
        </h2>
        <Link to={to} className="btn btn-ink shrink-0">
          {cta} →
        </Link>
      </div>
    </Reveal>
  );
}

export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-4 border-accent bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-sm sm:p-6">
      {children}
    </aside>
  );
}
