import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/academy")({
  head: () =>
    pageMeta(
      "Sales Geek Academy",
      "Online sales training with short-content learning and 60–90 minute online courses.",
      { path: "/academy", keywords: "sales geek academy, online sales training, sales courses" },
    ),
  component: () => (
    <ServicePage
      serviceKey="academy"
      title="Sales Geek"
      italic="Academy."
      cta="Ask about the Academy"
      statement="A revolution in how we develop sales skills."
      points={[
        { k: "Short-content", v: "Bite-size learning that fits around a working week." },
        { k: "60–90 minutes", v: "Deeper online courses when you want to go further." },
        { k: "Online", v: "Learn anywhere, at your own pace." },
      ]}
    />
  ),
});
