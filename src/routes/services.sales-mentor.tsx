import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/services/sales-mentor")({
  head: () =>
    pageMeta(
      "Your Sales Mentor",
      "Guiding emerging sales leaders, developing resiliency, adaptability and strategic thinking.",
      { path: "/services/sales-mentor", keywords: "sales mentor, sales leadership mentoring, emerging sales leaders" },
    ),
  component: () => (
    <ServicePage
      serviceKey="mentor"
      title="Your Sales"
      italic="Mentor."
      statement="Developing your next generation of leaders."
      points={[
        { k: "Resiliency", v: "Helping emerging leaders hold their nerve when the pipeline wobbles." },
        { k: "Adaptability", v: "Thriving in an ever-changing sales world." },
        { k: "Strategic thinking", v: "Moving from closing deals to shaping direction." },
      ]}
    />
  ),
});
