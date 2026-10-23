import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo.png";
import { EMAIL, EMAIL_HREF, INVOLIQ_URL, PHONE, PHONE_HREF, SERVICES, SOCIAL } from "@/lib/site";

export function Marquee({ words, className = "" }: { words: string[]; className?: string }) {
  const row = [...words, ...words];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden>
      <div className="inline-flex animate-marquee will-change-transform">
        {row.map((w, i) => (
          <span key={i} className="display mx-6 flex items-center gap-12 text-[clamp(2.5rem,7vw,6rem)]">
            {i % 2 ? <span className="serif-i">{w}</span> : w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <img src={logoLight} alt="Sales Geek" width={346} height={178} className="mb-8 h-12 w-auto sm:h-14" decoding="async" />
          <p className="eyebrow text-primary">Need to speak to a Geek?</p>
          <h2 className="display mt-6 text-[clamp(2.8rem,8vw,8.5rem)]">
            Let's talk <span className="serif-i text-primary">sales.</span>
          </h2>
          <div className="mt-8 space-y-2 text-sm sm:text-base">
            <p>
              <a href={PHONE_HREF} className="footer-link font-semibold">
                {PHONE}
              </a>
            </p>
            <p>
              <a href={EMAIL_HREF} className="footer-link font-semibold">
                {EMAIL}
              </a>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">
              Get in touch →
            </Link>
            <a href={PHONE_HREF} className="btn btn-ghost" aria-label={`Call Sales Geek on ${PHONE}`}>
              Call now
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm lg:col-span-5 lg:pt-4">
          <nav aria-label="Footer services">
            <p className="eyebrow mb-4 text-ink-foreground/50">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.key}>
                  <Link to={s.to} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer site links">
            <p className="eyebrow mb-4 text-ink-foreground/50">Sales Geek</p>
            <ul className="space-y-2.5">
              {(
                [
                  ["About", "/about"],
                  ["Meet the Geeks", "/geeks"],
                  ["Case Studies", "/case-studies"],
                  ["Testimonials", "/testimonials"],
                  ["Insights", "/insights"],
                  ["Franchise", "/franchise"],
                  ["Careers", "/careers"],
                  ["Find a Geek", "/find-a-geek"],
                ] as const
              ).map(([l, to]) => (
                <li key={to}>
                  <Link to={to} className="footer-link">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 flex flex-wrap gap-4 border-t border-ink-foreground/15 pt-6">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow footer-link"
                aria-label={`${s.label} (opens in a new tab)`}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-x flex flex-col justify-between gap-3 border-t border-ink-foreground/15 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:gap-4">
        <span>© {new Date().getFullYear()} Sales Geek. Changing the way the world perceives sales.</span>
        <span className="hidden sm:inline">Training endorsed by the Institute of Sales Professionals</span>
        <a
          href={INVOLIQ_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link inline-flex items-center gap-1.5 text-ink-foreground/60 hover:text-primary"
          aria-label="Powered by Involiq (opens involiq.tech in a new tab)"
        >
          Powered by Involiq
        </a>
      </div>
    </footer>
  );
}
