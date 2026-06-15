import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — Alpha-Beta Solutions" },
      { name: "description", content: "Alpha-Beta Solutions compliance posture: ISO 27001, SOC 2, GDPR, NIST, and PCI DSS. Audit-ready evidence, continuous controls, and 100% pass rate." },
      { property: "og:title", content: "Compliance — Alpha-Beta Solutions" },
      { property: "og:description", content: "Compliance architecture, certification timeline, and audit telemetry." },
      { property: "og:url", content: "/compliance" },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: CompliancePage,
});

const coverage = [
  { framework: "ISO 27001", score: 100 },
  { framework: "SOC 2 Type II", score: 98 },
  { framework: "GDPR", score: 100 },
  { framework: "NIST 800-53", score: 92 },
  { framework: "PCI DSS", score: 87 },
];

const audits = [
  { q: "Q1 '24", pass: 100 },
  { q: "Q2 '24", pass: 100 },
  { q: "Q3 '24", pass: 100 },
  { q: "Q4 '24", pass: 99 },
  { q: "Q1 '25", pass: 100 },
  { q: "Q2 '25", pass: 100 },
  { q: "Q3 '25", pass: 100 },
  { q: "Q4 '25", pass: 100 },
];

const timeline = [
  ["2022", "ISO 27001", "Initial certification — information security management system."],
  ["2023", "SOC 2 Type II", "Third-party audit of security, availability, and confidentiality."],
  ["2024", "GDPR External Audit", "Zero findings on data processing and subject-rights workflows."],
  ["2025", "NIST 800-53", "Control alignment for US federal contractor readiness."],
  ["2026", "PCI DSS", "Validation of payment card data environment."],
];

function CompliancePage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="Trust Layer // Compliance"
        title="Compliance is a system,"
        accent="not a stamp."
        body="We build controls, evidence, and audit trails into daily operations. The result is a 100% audit pass rate and a compliance posture that enterprise clients can rely on."
        metrics={[
          { label: "Controls Mapped", value: "247" },
          { label: "Audit Pass Rate", value: "100%" },
          { label: "Live Policies", value: "18" },
          { label: "Penetration Tests", value: "24/yr" },
        ]}
      />

      {/* Framework coverage */}
      <section className="bg-brand-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-3">Framework Coverage</div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Mapped, tested, and evidenced.</h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                Our control library maps directly to the frameworks our clients ask about. Every quarter we score coverage and close gaps before the next audit cycle.
              </p>
            </div>
            <div className="h-72 border border-white/10 bg-white/[0.02] p-6">
              <ResponsiveContainer>
                <BarChart data={coverage} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <XAxis dataKey="framework" stroke="rgba(255,255,255,0.4)" fontSize={11} interval={0} />
                  <YAxis domain={[0, 100]} stroke="rgba(255,255,255,0.4)" fontSize={11} unit="%" />
                  <Tooltip contentStyle={{ background: "white", border: "none", color: "#0F172A", fontSize: 12 }} />
                  <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Audit pass rate */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-hairline">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={audits} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="rgba(15,23,42,0.08)" strokeDasharray="3 3" />
                <XAxis dataKey="q" stroke="rgba(15,23,42,0.4)" fontSize={11} />
                <YAxis domain={[98, 100]} stroke="rgba(15,23,42,0.4)" fontSize={11} unit="%" />
                <Tooltip contentStyle={{ background: "#0F172A", border: "none", color: "white", fontSize: 12 }} />
                <Line type="monotone" dataKey="pass" stroke="#059669" strokeWidth={2.5} dot={{ r: 3, fill: "#059669" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className="font-mono text-xs text-brand-blue uppercase tracking-[0.2em] mb-3">Audit Telemetry</div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Eight quarters. No failed controls.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every audit is tracked in a live dashboard. We do not wait for an annual review to fix issues — non-conformities are remediated within SLA and re-tested before the next control cycle.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Last Audit", "Q4 2025"],
                ["Findings", "0"],
                ["Remediation SLA", "14 days"],
                ["Evidence Review", "Monthly"],
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

      {/* Certification timeline */}
      <section className="bg-brand-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-3">Certification Timeline</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-12">A track record of raising the bar.</h2>
          <div className="relative border-l border-white/20 ml-4 lg:ml-8 space-y-10">
            {timeline.map(([year, title, desc]) => (
              <div key={year} className="relative pl-8 lg:pl-12">
                <div className="absolute -left-[5px] top-1 size-2.5 bg-brand-blue rounded-full" />
                <div className="font-mono text-xs text-brand-blue tracking-widest mb-2">{year}</div>
                <h4 className="font-bold text-lg tracking-tight mb-1">{title}</h4>
                <p className="text-sm text-white/55 max-w-2xl">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control effectiveness */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Control Effectiveness" title="How controls are distributed." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            ["Preventive", "94", "Stop issues before they occur — least privilege, MFA, encryption."],
            ["Detective", "78", "Continuous monitoring, logging, anomaly detection, audit logs."],
            ["Corrective", "43", "Incident response, backup recovery, and remediation playbooks."],
            ["Administrative", "32", "Policy, training, risk assessments, and vendor management."],
          ].map(([t, v, d]) => (
            <div key={t} className="bg-background p-8">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">{t} Controls</div>
              <div className="text-4xl font-bold tracking-tight text-brand-blue mb-3">{v}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="border border-hairline p-8 lg:p-12 bg-secondary/30">
          <div className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.2em] mb-4">Success Story</div>
          <blockquote className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight max-w-4xl">
            “Using Alpha-Beta's compliance evidence pack, we completed a Fortune 500 security questionnaire <span className="text-brand-blue">3× faster</span> and closed the deal two weeks ahead of schedule.”
          </blockquote>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
            <span className="font-semibold text-brand-navy">— Mid-Size IT Systems Integrator</span>
            <span className="hidden sm:block text-border">|</span>
            <span>ISO 27001 + SOC 2 attestation used</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
