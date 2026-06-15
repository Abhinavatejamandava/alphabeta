import { createFileRoute } from "@tanstack/react-router";
import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { PlacementPricing } from "@/components/site/Pricing";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Civil Engineering — Alpha-Beta Solutions" },
      { name: "description", content: "Structural, environmental, and urban infrastructure placements. Project portfolio, performance analytics, and success stories." },
      { property: "og:title", content: "Civil Engineering — Alpha-Beta Solutions" },
      { property: "og:description", content: "Placements for the world's most demanding infrastructure projects." },
      { property: "og:url", content: "/engineering" },
    ],
    links: [{ rel: "canonical", href: "/engineering" }],
  }),
  component: EngPage,
});

const projects = [
  { m: "Q1 '24", active: 22, closed: 14 },
  { m: "Q2 '24", active: 31, closed: 19 },
  { m: "Q3 '24", active: 38, closed: 24 },
  { m: "Q4 '24", active: 47, closed: 33 },
  { m: "Q1 '25", active: 58, closed: 41 },
  { m: "Q2 '25", active: 69, closed: 52 },
];

const utilization = [{ name: "Utilization", value: 87, fill: "#2563EB" }];

function EngPage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="Sector 02 // Civil Engineering"
        title="Generational infrastructure,"
        accent="staffed precisely."
        body="Structural, environmental, hydraulic, and transportation engineers placed into the projects that define a decade — bridges, transit, water systems, and sustainable cities."
        metrics={[
          { label: "Active Projects", value: "247" },
          { label: "Engineers Placed", value: "892" },
          { label: "PE-Licensed", value: "64%" },
          { label: "Retention @ 12mo", value: "94%" },
        ]}
      />

      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-3 gap-px bg-border border border-border">
        <div className="bg-background p-8 lg:col-span-2">
          <SectionTitle eyebrow="Project Pipeline" title="Active vs closed civil projects" />
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={projects} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="hsl(220 13% 91%)" strokeDasharray="3 3" />
                <XAxis dataKey="m" stroke="hsl(220 9% 46%)" fontSize={11} />
                <YAxis stroke="hsl(220 9% 46%)" fontSize={11} />
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
                <Line type="monotone" dataKey="active" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="closed" stroke="#059669" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-background p-8">
          <SectionTitle eyebrow="Capacity" title="Engineer utilization" />
          <div className="relative h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart innerRadius="70%" outerRadius="100%" data={utilization} startAngle={90} endAngle={-270}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar background dataKey="value" cornerRadius={4} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">87%</div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground mt-1">DEPLOYED</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Sub-domains" title="Civil engineering verticals">
            Specialists embedded in each discipline source, vet, and place candidates with project-fit precision.
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              ["01", "Structural Engineering", "High-rise, bridge, seismic retrofits"],
              ["02", "Environmental Engineering", "EIA, remediation, sustainability audits"],
              ["03", "Hydraulic & Water Systems", "Distribution networks, treatment plants"],
              ["04", "Transportation", "Highway, rail, transit-oriented design"],
              ["05", "Urban Planning", "Smart cities, zoning, GIS-led design"],
              ["06", "Geotechnical", "Foundation design, soil mechanics, slope stability"],
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

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Project Snapshots" title="What we've helped build." />
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { code: "BR-117", title: "Cable-Stayed Crossing — SE Asia", body: "Placed 14 structural engineers, 6 environmental leads. On-time, under budget by 4%." },
            { code: "TR-089", title: "Urban Transit Network — EU", body: "Cross-functional team of 22 engineers staffed in 60 days; zero attrition through commissioning." },
            { code: "EN-204", title: "Watershed Remediation — NA", body: "Environmental task force of 9; reduced contaminant index by 71% over 18 months." },
          ].map((p) => (
            <div key={p.code} className="bg-background p-8">
              <div className="font-mono text-[10px] text-brand-blue tracking-widest mb-4">PROJECT // {p.code}</div>
              <h4 className="text-xl font-bold tracking-tight mb-3">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PlacementPricing
        sector="Civil Engineering"
        price={3000}
        description="Specialized placement for structural, environmental, geotechnical, transportation, and hydraulic engineers."
        features={[
          "PE-licensed candidate network and project-fit assessment",
          "Portfolio review and technical competency screening",
          "License verification & compliance checks",
          "Client-candidate alignment workshops",
          "100% refund if the placement falls through",
        ]}
      />

      <SiteFooter />
    </div>
  );
}
