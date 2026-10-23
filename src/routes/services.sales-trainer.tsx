import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/services/sales-trainer")({
  head: () =>
    pageMeta(
      "Your Sales Trainer",
      "Training and developing your sales staff in real time, using real-live deals as growth opportunities. ISP-endorsed.",
      { path: "/services/sales-trainer", keywords: "sales training, sales trainer, ISP endorsed sales training" },
    ),
  component: () => (
    <ServicePage
      serviceKey="trainer"
      title="Your Sales"
      italic="Trainer."
      statement="No role-play theatre. Real deals become the classroom."
      points={[
        { k: "Real-time", v: "Your team is trained and developed as the work happens." },
        { k: "Real-live deals", v: "Live opportunities become growth opportunities for your people." },
        { k: "Endorsed", v: "Training endorsed by the Institute of Sales Professionals, with CPD points for each hour completed." },
      ]}
    />
  ),
});
