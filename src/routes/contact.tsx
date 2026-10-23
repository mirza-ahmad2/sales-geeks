import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, SOCIAL, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Get in Touch",
      `Talk to a Sales Geek about sales directorship, training, the Academy or mentoring. Call ${PHONE} or email ${EMAIL}.`,
      {
        path: "/contact",
        keywords: "contact sales geek, talk to a sales geek, sales geek phone, info@salesgeek.co.uk",
      },
    ),
  component: Contact,
});

function Contact() {
  return (
    <section className="hero-screen">
      <div className="hero-screen-inner h-full overflow-y-auto lg:grid-cols-12 lg:overflow-visible">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent">Get in touch</p>
          <h1 className="display hero-title-wide mt-3">
            Let's talk <span className="serif-i text-accent">sales.</span>
          </h1>
          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            <a
              href={PHONE_HREF}
              className="display block text-xl underline decoration-primary decoration-[5px] underline-offset-8 transition-colors hover:text-accent sm:text-2xl lg:text-3xl"
              aria-label={`Call Sales Geek on ${PHONE}`}
            >
              {PHONE}
            </a>
            <a
              href={EMAIL_HREF}
              className="block text-base font-semibold underline decoration-primary/60 underline-offset-4 transition-colors hover:text-accent sm:text-lg"
            >
              {EMAIL}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 sm:mt-8">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow transition-colors hover:text-accent"
                aria-label={`${s.label} (opens in a new tab)`}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
