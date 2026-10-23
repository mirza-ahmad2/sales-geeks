import hero from "@/assets/hero.jpg";
import trainer from "@/assets/trainer.jpg";
import mentor from "@/assets/mentor.jpg";
import academy from "@/assets/academy.jpg";

export const SITE_NAME = "Sales Geek";
export const SITE_URL = "https://www.salesgeek.co.uk";
export const SITE_TAGLINE = "More Sales. Delivered.";
export const DEFAULT_DESCRIPTION =
  "Part-time sales directors, sales training, the Sales Geek Academy and sales mentoring for small businesses. Endorsed by the Institute of Sales Professionals.";
export const DEFAULT_KEYWORDS =
  "sales geek, sales director, part-time sales director, sales training, sales mentor, sales consultancy, sales academy, franchise, ISP endorsed";

export const PHONE = "+44 1254 920120";
export const PHONE_HREF = "tel:+441254920120";
export const EMAIL = "info@salesgeek.co.uk";
export const EMAIL_HREF = "mailto:info@salesgeek.co.uk";
export const OFFICIAL = SITE_URL;
export const INVOLIQ_URL = "https://www.involiq.tech";

export const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/salesgeekhq/" },
  { label: "Facebook", href: "https://www.facebook.com/salesgeekuk/" },
];

export const SERVICES = [
  {
    key: "director",
    to: "/services/sales-director",
    title: "Your Sales Director",
    short: "Experienced, affordable, part-time sales directors driving growth for small businesses.",
    fit: "Perfect for small & medium sized businesses",
    img: hero,
    alt: "Sales Geek sales director leading a growth planning session with a client team",
  },
  {
    key: "trainer",
    to: "/services/sales-trainer",
    title: "Your Sales Trainer",
    short: "Training and developing your staff in real-time, using real-live deals as growth opportunities.",
    fit: "Perfect for all businesses who want to scale",
    img: trainer,
    alt: "Sales Geek trainer coaching a sales team through a live deal review",
  },
  {
    key: "academy",
    to: "/academy",
    title: "Sales Geek Academy",
    short: "An online training solution with short-content and access to 60–90 minute online courses.",
    fit: "A revolution in how we develop sales skills",
    img: academy,
    alt: "Sales professional learning on the Sales Geek Academy online training platform",
  },
  {
    key: "mentor",
    to: "/services/sales-mentor",
    title: "Your Sales Mentor",
    short: "Guiding emerging leaders, developing resiliency, adaptability & strategic thinking.",
    fit: "Developing your next generation leaders",
    img: mentor,
    alt: "Emerging sales leader in a mentoring conversation with a Sales Geek mentor",
  },
] as const;

/** Verified from salesgeek.co.uk/about-us FAQs */
export const STATS = [
  { value: "2,500+", label: "local businesses supported since 2020" },
  { value: "10,000+", label: "sales leaders trained" },
  { value: "1,800+", label: "years of collective sales leadership" },
  { value: "$8bn+", label: "of client revenue managed" },
];

export const REGIONS = ["United Kingdom", "United States", "India", "Malaysia", "GCC", "Mongolia"];

export const VALUES = [
  { name: "Care", text: "Compassion starts at home. Being a Geek is belonging to a tribe. We look out for each other and that attitude transfers to our clients." },
  { name: "Always learn", text: "A Geek is never comfortable. We are genuinely excited to learn new stuff and adapt and thrive within an ever changing world." },
  { name: "Get it done", text: "Procrastination is the thief of time. Geeks commit to something, then do it." },
  { name: "Make it fun", text: "If we aren't having fun doing it then why bother? Geeks transfer that innate sense of fun to guests, clients and Geekophiles." },
  { name: "Brave", text: "Geeks speak up for what's right rather than what's easy, and have the courage to make tough decisions." },
  { name: "Change the world", text: "Founded to change the way the world perceives sales. Each Geek has a contribution to make in realising it." },
];

export const NAV = [
  {
    label: "Services",
    to: "/services",
    children: [
      ...SERVICES.map((s) => ({ label: s.title, to: s.to })),
      { label: "Other Products", to: "/services" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "Meet the Geeks", to: "/geeks" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Careers", to: "/careers" },
    ],
  },
  { label: "Geeks", to: "/geeks" },
  { label: "Insights", to: "/insights" },
  { label: "Franchise", to: "/franchise" },
  { label: "Contact", to: "/contact" },
] as const;

export const SITEMAP_PATHS = [
  "/",
  "/services",
  "/services/sales-director",
  "/services/sales-trainer",
  "/services/sales-mentor",
  "/academy",
  "/about",
  "/geeks",
  "/testimonials",
  "/case-studies",
  "/careers",
  "/insights",
  "/franchise",
  "/find-a-geek",
  "/contact",
] as const;

type PageMetaOptions = {
  path?: string;
  keywords?: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMeta(title: string, description: string, options: PageMetaOptions = {}) {
  const t = title === SITE_TAGLINE ? `${SITE_NAME} | ${SITE_TAGLINE}` : `${title} | ${SITE_NAME}`;
  const path = options.path ?? "/";
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
  const image = options.image ?? `${SITE_URL}/og.jpg`;
  const keywords = options.keywords ?? DEFAULT_KEYWORDS;

  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: options.noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large" },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE_NAME}: ${SITE_TAGLINE}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: `${SITE_NAME}: ${SITE_TAGLINE}` },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
