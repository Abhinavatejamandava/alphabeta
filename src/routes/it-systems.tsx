import { createFileRoute } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { PlacementPricing } from "@/components/site/Pricing";

export const Route = createFileRoute("/it-systems")({
  head: () => ({
    meta: [
      { title: "IT Systems — Alpha-Beta Solutions" },
      { name: "description", content: "Cybersecurity, cloud, DevOps, and AI placements. Performance analytics and success stories from Alpha-Beta's IT placement engine." },
      { property: "og:title", content: "IT Systems — Alpha-Beta Solutions" },
      { property: "og:description", content: "Cybersecurity, cloud, DevOps, and AI placements with measurable outcomes." },
      { property: "og:url", content: "/it-systems" },
    ],
    links: [{ rel: "canonical", href: "/it-systems" }],
  }),
  component: ITPage,
});

const growth = [
  { m: "Jan", placements: 18, offers: 32 },
  { m: "Feb", placements: 24, offers: 41 },
  { m: "Mar", placements: 31, offers: 49 },
  { m: "Apr", placements: 38, offers: 56 },
  { m: "May", placements: 47, offers: 68 },
  { m: "Jun", placements: 59, offers: 81 },
  { m: "Jul", placements: 71, offers: 94 },
  { m: "Aug", placements: 84, offers: 108 },
];

const domains = [
  { name: "Cybersecurity", value: 92 },
  { name: "Cloud / SRE", value: 88 },
  { name: "Full-Stack", value: 76 },
  { name: "AI / ML", value: 81 },
  { name: "Data Eng", value: 73 },
  { name: "DevOps", value: 85 },
];

const stories = [
  { name: "Priya R.", role: "Senior SRE → Stripe", time: "21 days", note: "Resume reframed to highlight error-budget ownership; 4 onsites in 2 weeks." },
  { name: "Marcus T.", role: "Cloud Architect → Snowflake", time: "34 days", note: "Pivoted from on-prem to multi-cloud narrative; 32% comp uplift." },
  { name: "Aisha N.", role: "Sec Engineer → CrowdStrike", time: "18 days", note: "Pen-test portfolio packaging unlocked Tier-1 interview pipeline." },
];

function ITPage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="Sector 01 // Information Technology"
        title="Enterprise digital placements,"
        accent="engineered."
        body="From cybersecurity desks at frontier banks to SRE seats at hyperscalers — we deploy IT talent into the world's most consequential systems."
        metrics={[
          { label: "IT Placements (YTD)", value: "1,284" },
          { label: "Avg. Time-to-Offer", value: "26d" },
          { label: "Median Comp Uplift", value: "+34%" },
          { label: "Offer Accept Rate", value: "91%" },
        ]}
      />

      {/* Charts */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-px bg-border border border-border">
        <div className="bg-background p-8">
          <SectionTitle eyebrow="Placement Velocity / 2026" title="Monthly placements vs offers extended" />
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={growth} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(220 90% 56%)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(220 90% 56%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="hsl(220 13% 91%)" strokeDasharray="3 3" />
                <XAxis dataKey="m" stroke="hsl(220 9% 46%)" fontSize={11} />
                <YAxis stroke="hsl(220 9% 46%)" fontSize={11} />
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
                <Area type="monotone" dataKey="offers" stroke="#0F172A" strokeWidth={1.5} fill="transparent" />
                <Area type="monotone" dataKey="placements" stroke="#2563EB" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-background p-8">
          <SectionTitle eyebrow="Domain Match Score" title="Candidate-to-role alignment by sub-domain" />
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={domains} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="hsl(220 13% 91%)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="hsl(220 9% 46%)" fontSize={11} />
                <YAxis stroke="hsl(220 9% 46%)" fontSize={11} />
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
                <Bar dataKey="value" fill="#2563EB" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Sub-domains */}
      <section className="bg-secondary/30 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Sub-domains" title="Where we place IT talent">
            Each vertical is staffed by a dedicated placement architect with direct hiring-manager relationships.
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              ["01", "Cybersecurity", "SOC, red team, AppSec, GRC"],
              ["02", "Cloud Infrastructure", "AWS, Azure, GCP architects & SRE"],
              ["03", "Full-Stack", "React, Node, Go, distributed systems"],
              ["04", "AI / ML Engineering", "MLOps, applied ML, foundation models"],
              ["05", "Data Engineering", "Snowflake, Databricks, real-time pipelines"],
              ["06", "DevOps & Platform", "Kubernetes, Terraform, internal platforms"],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background p-8 hover:bg-secondary/40 transition-colors">
                <div className="font-mono text-brand-blue text-sm mb-3">{n}</div>
                <h4 className="font-bold text-lg mb-2 tracking-tight">{t}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Success Stories" title="Outcomes, not promises." />
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {stories.map((s) => (
            <div key={s.name} className="bg-background p-8 flex flex-col">
              <div className="font-mono text-[10px] text-brand-emerald tracking-widest mb-4">● PLACED IN {s.time}</div>
              <div className="text-xl font-bold tracking-tight mb-1">{s.name}</div>
              <div className="text-sm text-brand-blue font-mono mb-6">{s.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{s.note}"</p>
              <div className="mt-6 h-px bg-border" />
            </div>
          ))}
        </div>
      </section>

      <PlacementPricing
        sector="IT"
        price={1000}
        description="End-to-end placement for cybersecurity, cloud, DevOps, AI/ML, and full-stack roles."
        features={[
          "Sourcing across Tier-1 employers and high-growth startups",
          "Resume engineering & technical interview preparation",
          "Salary negotiation and offer-stage advisory",
          "90-day post-placement check-ins",
          "100% refund if the candidate does not join",
        ]}
      />

      <SiteFooter />
    </div>
  );
}
