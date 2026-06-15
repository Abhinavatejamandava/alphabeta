import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";

export const Route = createFileRoute("/resumes")({
  head: () => ({
    meta: [
      { title: "Resume Engineering — Alpha-Beta Solutions" },
      { name: "description", content: "ATS-optimized, executive-grade resume preparation by IT and Civil Engineering veterans. Measurable interview-rate lifts." },
      { property: "og:title", content: "Resume Engineering — Alpha-Beta Solutions" },
      { property: "og:description", content: "ATS-tuned, narrative-driven resumes engineered to win interviews." },
      { property: "og:url", content: "/resumes" },
    ],
    links: [{ rel: "canonical", href: "/resumes" }],
  }),
  component: ResumesPage,
});

const lift = [
  { stage: "Pre-rewrite", rate: 6 },
  { stage: "Post-format", rate: 14 },
  { stage: "ATS-tuned", rate: 27 },
  { stage: "Narrative pass", rate: 41 },
  { stage: "Final delivery", rate: 58 },
];

const split = [
  { name: "IT roles", value: 62, color: "#2563EB" },
  { name: "Civil roles", value: 28, color: "#0F172A" },
  { name: "Cross-domain", value: 10, color: "#059669" },
];

function ResumesPage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="The Placement Engine // Resumes"
        title="Resumes engineered to"
        accent="land interviews."
        body="Every resume is rewritten by a domain veteran in your discipline — not a generalist. We tune for both algorithm and hiring manager, and measure the lift at every step."
        metrics={[
          { label: "Resumes Delivered", value: "4,712" },
          { label: "Avg. Interview-Rate Lift", value: "5.4×" },
          { label: "Avg. Turnaround", value: "72 hrs" },
          { label: "Client Rating", value: "4.94/5" },
        ]}
      />

      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-3 gap-px bg-border border border-border">
        <div className="bg-background p-8 lg:col-span-2">
          <SectionTitle eyebrow="Interview-Rate Lift" title="Callback rate at each rewrite stage" />
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={lift} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="hsl(220 13% 91%)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="stage" stroke="hsl(220 9% 46%)" fontSize={11} />
                <YAxis stroke="hsl(220 9% 46%)" fontSize={11} unit="%" />
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
                <Bar dataKey="rate" fill="#2563EB" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-background p-8">
          <SectionTitle eyebrow="Mix" title="Resume volume by domain" />
          <div className="h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={split} dataKey="value" innerRadius={50} outerRadius={80} stroke="white" strokeWidth={2}>
                  {split.map((s) => <Cell key={s.name} fill={s.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {split.map((s) => (
              <div key={s.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2"><span className="size-2" style={{ background: s.color }} />{s.name}</span>
                <span className="font-mono text-muted-foreground">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Process" title="Five passes. One outcome." />
          <div className="grid md:grid-cols-5 gap-px bg-border border border-border">
            {[
              ["01", "Discovery", "60-min call with a domain veteran in your discipline."],
              ["02", "Audit", "Line-by-line teardown of your current resume."],
              ["03", "Narrative", "Reframing impact statements with quantified outcomes."],
              ["04", "ATS Tune", "Semantic alignment to target job descriptions."],
              ["05", "Delivery", "Final draft + LinkedIn rewrite + interview prep doc."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background p-6">
                <div className="font-mono text-brand-blue text-sm mb-3">{n}</div>
                <h4 className="font-bold mb-2 tracking-tight">{t}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Voices" title="What candidates say." />
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[
            { who: "Daniel K. · Cloud Engineer", body: "Went from 2 callbacks in 4 months to 9 in two weeks. The narrative pass alone was worth the entire fee." },
            { who: "Lina M. · Environmental Engineer", body: "They understood EIA work and translated it into language hiring managers at international firms actually read." },
          ].map((t) => (
            <div key={t.who} className="bg-background p-10">
              <p className="text-xl tracking-tight leading-relaxed mb-6">"{t.body}"</p>
              <div className="font-mono text-[11px] text-brand-blue tracking-widest">{t.who}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
