import { createFileRoute } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Alpha-Beta Solutions" },
      { name: "description", content: "100% satisfaction-backed refund. 30-day window, under 5 business days to process. Full transparency on approval rate and timeline." },
      { property: "og:title", content: "Refund Policy — Alpha-Beta Solutions" },
      { property: "og:description", content: "Payment follows value. Full refund if you are not satisfied." },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

const approval = [
  { m: "Jan", rate: 100 },
  { m: "Feb", rate: 100 },
  { m: "Mar", rate: 100 },
  { m: "Apr", rate: 100 },
  { m: "May", rate: 100 },
  { m: "Jun", rate: 100 },
  { m: "Jul", rate: 100 },
  { m: "Aug", rate: 100 },
];

function RefundPage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="Trust Layer // Refund"
        title="If you're not satisfied,"
        accent="we refund. Period."
        body="Payment should follow value. If our work didn't meet the standard we promised, request a refund within 30 days — no escalation, no negotiation, no retention scripts."
        metrics={[
          { label: "Approval Rate", value: "100%" },
          { label: "Avg. Processing", value: "3.2 days" },
          { label: "Refunds (YTD)", value: "37" },
          { label: "Satisfaction Score", value: "98.4%" },
        ]}
      />

      {/* Eligibility + Process */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-px bg-border border border-border">
        <div className="bg-background p-10">
          <SectionTitle eyebrow="Eligibility" title="What's covered" />
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Resume engineering services — full refund within 30 days of delivery.",
              "Placement coaching packages — pro-rata refund on unused sessions, any time.",
              "Enterprise retainer arrangements — refunded on contract-defined milestones.",
              "Any service where the quality fell short of agreed scope.",
            ].map((t) => (
              <li key={t} className="flex gap-3"><span className="text-brand-blue font-mono mt-1">→</span><span>{t}</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-background p-10">
          <SectionTitle eyebrow="Process" title="How it works" />
          <ol className="space-y-6">
            {[
              ["01", "Request", "Email refunds@alpha-beta.io or submit via Client Portal."],
              ["02", "Acknowledge", "Confirmation within 1 business day — no questions asked."],
              ["03", "Process", "Refund issued to original payment method in under 5 business days."],
              ["04", "Close", "You receive a closure ledger with full audit trail."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-6">
                <div className="font-mono text-brand-blue text-sm w-8 shrink-0">{n}</div>
                <div>
                  <div className="font-bold mb-1 tracking-tight">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approval chart */}
      <section className="bg-brand-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-3">Transparency Ledger</div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Every refund requested has been approved.</h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                We publish our approval rate quarterly. Since founding, we have approved 100% of refund requests received — because if you asked, the work didn't meet the bar.
              </p>
            </div>
            <div className="h-64 border border-white/10 bg-white/[0.02] p-6">
              <ResponsiveContainer>
                <AreaChart data={approval} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="r1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#059669" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <XAxis dataKey="m" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <YAxis domain={[0, 100]} stroke="rgba(255,255,255,0.4)" fontSize={11} unit="%" />
                  <Tooltip contentStyle={{ background: "white", border: "none", color: "#0F172A", fontSize: 12 }} />
                  <Area type="monotone" dataKey="rate" stroke="#059669" strokeWidth={2.5} fill="url(#r1)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <div className="divide-y divide-border border-y border-border">
          {[
            ["Do I need to justify the request?", "No. Stating that you are not satisfied is sufficient."],
            ["What if I'm partway through a service?", "Pro-rata refund on unused work, full refund on completed work that fell short."],
            ["How is the refund delivered?", "Original payment method, in the original currency, within 5 business days."],
            ["Is there a refund cap?", "No cap. Full service value is refundable within the eligibility window."],
          ].map(([q, a]) => (
            <div key={q} className="py-6">
              <div className="font-bold mb-2 tracking-tight">{q}</div>
              <div className="text-muted-foreground text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
