import { createFileRoute } from "@tanstack/react-router";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Alpha-Beta Solutions" },
      { name: "description", content: "How Alpha-Beta Solutions collects, processes, and protects personal data. GDPR, CCPA, and global privacy standards by design." },
      { property: "og:title", content: "Privacy Policy — Alpha-Beta Solutions" },
      { property: "og:description", content: "Privacy architecture, retention schedules, and data subject rights." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const dsarData = [
  { m: "Jan", access: 12, deletion: 8, portability: 5 },
  { m: "Feb", access: 18, deletion: 11, portability: 7 },
  { m: "Mar", access: 22, deletion: 14, portability: 9 },
  { m: "Apr", access: 28, deletion: 17, portability: 12 },
  { m: "May", access: 34, deletion: 21, portability: 15 },
  { m: "Jun", access: 41, deletion: 26, portability: 18 },
  { m: "Jul", access: 48, deletion: 30, portability: 22 },
  { m: "Aug", access: 55, deletion: 35, portability: 25 },
];

const retentionData = [
  { category: "Resume drafts", years: 2 },
  { category: "Client contracts", years: 7 },
  { category: "Payment records", years: 7 },
  { category: "Audit logs", years: 5 },
  { category: "Marketing consent", years: 1 },
];

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="Trust Layer // Privacy"
        title="Your data is handled"
        accent="with precision."
        body="Privacy is engineered into every placement, resume, and contract. We publish how we collect, process, retain, and delete personal data so candidates and clients can verify our posture."
        metrics={[
          { label: "Data Encrypted", value: "100%" },
          { label: "Avg. Request Resolution", value: "48 hrs" },
          { label: "Retention Schedules", value: "12" },
          { label: "Jurisdictions Covered", value: "50+" },
        ]}
      />

      {/* DSAR volume chart */}
      <section className="bg-brand-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-3">Data Governance</div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Data-subject requests, resolved fast.</h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                We track every access, deletion, and portability request. Our median resolution time is 48 hours — well inside the GDPR and CCPA windows.
              </p>
            </div>
            <div className="h-72 border border-white/10 bg-white/[0.02] p-6">
              <ResponsiveContainer>
                <AreaChart data={dsarData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="p1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="p2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EF4444" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <XAxis dataKey="m" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <Tooltip contentStyle={{ background: "white", border: "none", color: "#0F172A", fontSize: 12 }} />
                  <Area type="monotone" dataKey="access" stroke="#3B82F6" strokeWidth={2} fill="url(#p1)" />
                  <Area type="monotone" dataKey="deletion" stroke="#EF4444" strokeWidth={2} fill="url(#p2)" />
                  <Area type="monotone" dataKey="portability" stroke="#059669" strokeWidth={2} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy rights */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Your Rights" title="How you control your data." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {[
            ["Right to Access", "Request a complete copy of the data we hold about you."],
            ["Right to Deletion", "Ask us to erase your profile and associated documents."],
            ["Right to Portability", "Receive your data in a structured, machine-readable format."],
            ["Right to Rectify", "Correct inaccurate resume, contact, or identity information."],
            ["Right to Object", "Opt out of marketing, profiling, or automated decision-making."],
            ["Right to Restrict", "Pause processing while we resolve a dispute or correction."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8">
              <div className="size-8 border border-brand-blue/30 grid place-items-center mb-5">
                <div className="size-1.5 bg-brand-blue rounded-full" />
              </div>
              <h4 className="font-bold mb-2 tracking-tight">{t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retention schedule */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-hairline">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={retentionData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
                <CartesianGrid stroke="rgba(15,23,42,0.08)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="rgba(15,23,42,0.4)" fontSize={11} unit="y" />
                <YAxis type="category" dataKey="category" stroke="rgba(15,23,42,0.7)" fontSize={11} width={120} />
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
                <Bar dataKey="years" fill="#3B82F6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className="font-mono text-xs text-brand-blue uppercase tracking-[0.2em] mb-3">Retention Schedule</div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">We keep data only as long as necessary.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every data category has a published retention window. After the period expires, records are automatically purged or anonymized using a tamper-evident deletion log.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Auto-purge", "Enabled"],
                ["Anonymization", "Quarterly"],
                ["Deletion log", "Immutable"],
                ["Legal hold", "By request"],
              ].map(([k, v]) => (
                <div key={k} className="border border-border p-4">
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{k}</div>
                  <div className="font-bold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global compliance map */}
      <section className="bg-brand-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-3">Global Privacy Coverage</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-12">Privacy standards we honor.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["GDPR", "EU/EEA", "Full coverage"],
              ["CCPA / CPRA", "California", "Disclosure + opt-out"],
              ["UK DPA 2018", "United Kingdom", "Post-Brexit alignment"],
              ["PDPA", "Singapore", "Consent framework"],
              ["DPDP Act 2023", "India", "Digital personal data"],
              ["LGPD", "Brazil", "Rights + transparency"],
            ].map(([f, r, s]) => (
              <div key={f} className="border border-white/10 p-6 flex justify-between items-start">
                <div>
                  <div className="font-bold tracking-tight">{f}</div>
                  <div className="text-xs text-white/50 mt-1">{r}</div>
                </div>
                <div className="text-[10px] font-mono text-brand-emerald uppercase tracking-widest border border-brand-emerald/30 px-2 py-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="border border-hairline p-8 lg:p-12 bg-secondary/30">
          <div className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.2em] mb-4">Success Story</div>
          <blockquote className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight max-w-4xl">
            “After switching to Alpha-Beta's privacy-managed workflow, we reduced our data-subject request backlog by <span className="text-brand-blue">94%</span> and passed our GDPR audit with zero findings.”
          </blockquote>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
            <span className="font-semibold text-brand-navy">— Global Engineering Consultancy</span>
            <span className="hidden sm:block text-border">|</span>
            <span>2,400+ candidate records managed</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
