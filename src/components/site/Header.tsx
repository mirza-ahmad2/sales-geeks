import { Link } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import logoInk from "@/assets/logo-ink.png";
import logoLight from "@/assets/logo.png";
import { NAV } from "@/lib/site";

export function Logo({
  className = "",
  variant = "ink",
}: {
  className?: string;
  variant?: "ink" | "light";
}) {
  const src = variant === "light" ? logoLight : logoInk;
  return (
    <Link to="/" className={`group inline-flex shrink-0 items-center ${className}`} aria-label="Sales Geek home">
      <img
        src={src}
        alt="Sales Geek"
        width={346}
        height={178}
        decoding="async"
        className="h-10 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-11"
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    let ticking = false;
    const on = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/92 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between py-3 sm:h-[4.75rem]">
        <Logo />
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.to}
                className="eyebrow block rounded-sm px-3 py-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                activeProps={{ className: "text-accent" }}
              >
                {item.label}
                {"children" in item && (
                  <span aria-hidden className="ml-1 inline-block transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180">
                    ▾
                  </span>
                )}
              </Link>
              {"children" in item && (
                <div className="invisible absolute left-0 top-full min-w-64 translate-y-2 border-2 border-ink bg-card p-2 opacity-0 shadow-[6px_6px_0_var(--ink)] transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      className="block rounded-sm px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-primary focus-visible:bg-primary focus-visible:outline-none"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <Link to="/find-a-geek" className="eyebrow underline-offset-4 transition-colors hover:text-accent hover:underline">
            Find your Geek
          </Link>
          <Link to="/contact" className="btn btn-ink !py-3">
            Get in touch
          </Link>
        </div>
        <button
          type="button"
          className="btn btn-primary !min-h-11 !px-4 !py-2.5 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div
          id={menuId}
          className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-ink text-ink-foreground sm:top-[4.75rem] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-x flex flex-col gap-1 py-8">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            {NAV.map((item, i) => (
              <div
                key={item.label}
                className="animate-fade-up border-b border-ink-foreground/15 py-3"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <Link to={item.to} onClick={() => setOpen(false)} className="display text-[clamp(2.4rem,10vw,3.5rem)] transition-colors hover:text-primary">
                  {item.label}
                </Link>
                {"children" in item && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="min-h-10 text-sm text-ink-foreground/70 transition-colors hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary">
                Get in touch
              </Link>
              <Link to="/find-a-geek" onClick={() => setOpen(false)} className="btn btn-ghost">
                Find your Geek
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
