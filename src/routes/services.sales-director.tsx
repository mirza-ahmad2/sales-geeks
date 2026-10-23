import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/services/sales-director")({
  head: () =>
    pageMeta(
      "Your Sales Director",
      "Experienced, affordable, part-time sales directors driving growth for small and medium sized businesses.",
      { path: "/services/sales-director", keywords: "part-time sales director, sales directorship, fractional sales director" },
    ),
  component: () => (
    <ServicePage
      serviceKey="director"
      title="Your Sales"
      italic="Director."
      statement="Top-level sales leadership, without the full-time price tag."
      points={[
        { k: "Experienced", v: "Every Geek is an experienced sales leader, not a generalist consultant." },
        { k: "Affordable", v: "Access to senior sales talent small businesses are ordinarily priced out of." },
        { k: "Part-time", v: "Sales directorship that fits the size and stage of your business." },
      ]}
    />
  ),
});
