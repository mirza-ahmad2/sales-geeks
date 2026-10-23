import { useState, type FormEvent } from "react";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, SERVICES } from "@/lib/site";

const field =
  "w-full border-0 border-b-2 border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-accent sm:text-lg";

export function ContactForm({ defaultService = "", region = false }: { defaultService?: string; region?: boolean }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent)
    return (
      <div className="border-2 border-ink bg-primary p-8 text-ink shadow-[6px_6px_0_0_var(--ink)] sm:p-10" role="status" aria-live="polite">
        <p className="display text-4xl sm:text-5xl">
          Thanks. <span className="serif-i">We're on it.</span>
        </p>
        <p className="mt-4">
          A Geek will be in touch shortly. Prefer to talk now? Call{" "}
          <a className="font-bold underline underline-offset-4" href={PHONE_HREF}>
            {PHONE}
          </a>{" "}
          or email{" "}
          <a className="font-bold underline underline-offset-4" href={EMAIL_HREF}>
            {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  return (
    <form onSubmit={onSubmit} className="grid gap-7 md:grid-cols-2 md:gap-8" noValidate={false} aria-label="Contact form">
      {(
        [
          ["name", "Name", "text", true],
          ["company", "Company", "text", false],
          ["email", "Email", "email", true],
          ["phone", "Phone", "tel", false],
        ] as const
      ).map(([n, l, t, r]) => (
        <label key={n} className="block">
          <span className="eyebrow text-muted-foreground">
            {l}
            {r ? " *" : ""}
          </span>
          <input
            name={n}
            type={t}
            required={r}
            maxLength={200}
            autoComplete={n === "name" ? "name" : n === "email" ? "email" : n === "phone" ? "tel" : "organization"}
            className={field}
            aria-required={r}
          />
        </label>
      ))}
      {region && (
        <label className="block md:col-span-2">
          <span className="eyebrow text-muted-foreground">Your town or region *</span>
          <input name="region" required maxLength={120} className={field} aria-required="true" autoComplete="address-level2" />
        </label>
      )}
      <label className="block md:col-span-2">
        <span className="eyebrow text-muted-foreground">What do you need help with?</span>
        <select name="service" defaultValue={defaultService} className={field}>
          <option value="">Not sure yet</option>
          {SERVICES.map((s) => (
            <option key={s.key} value={s.key}>
              {s.title}
            </option>
          ))}
          <option value="franchise">Franchise opportunities</option>
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="eyebrow text-muted-foreground">Message</span>
        <textarea name="message" rows={4} maxLength={2000} className={field} />
      </label>
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-ink min-h-12">
          Let's talk sales →
        </button>
      </div>
    </form>
  );
}
