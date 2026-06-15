import { createFileRoute } from "@tanstack/react-router";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";
import { PageHero, SectionTitle } from "@/components/site/PageHero";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security Architecture — Alpha-Beta Solutions" },
      { name: "description", content: "USCIS E-Verify+ enrolled, ISO 27001 aligned, AES-256 encrypted. The security architecture that protects candidate and client data." },
      { property: "og:title", content: "Security Architecture — Alpha-Beta Solutions" },
      { property: "og:description", content: "Enterprise-grade trust: USCIS E-Verify+, ISO 27001, SOC 2, AES-256." },
      { property: "og:url", content: "/security" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
  component: SecurityPage,
});

const uptime = [
  { d: "W1", v: 99.97 },
  { d: "W2", v: 99.99 },
  { d: "W3", v: 99.96 },
  { d: "W4", v: 100 },
  { d: "W5", v: 99.98 },
  { d: "W6", v: 99.99 },
  { d: "W7", v: 100 },
  { d: "W8", v: 99.99 },
];

function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      <PageHero
        eyebrow="Trust Layer // Security"
        title="Security is not a feature."
        accent="It is the foundation."
        body="Every candidate document, client contract, and project artifact lives inside an architecture designed to the same standard our enterprise clients demand of their own systems."
        metrics={[
          { label: "Uptime / 90d", value: "99.98%" },
          { label: "Mean Detection", value: "<4 min" },
          { label: "Security Incidents", value: "0" },
          { label: "Audits Passed", value: "12 / 12" },
        ]}
      />

      {/* Credentials */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            ["USCIS E-Verify+", "Federally enrolled — every placement verified against authoritative records."],
            ["ISO 27001", "Information security management mapped to international standard controls."],
            ["SOC 2 Type II", "Annual third-party audit of security, availability, and confidentiality controls."],
            ["GDPR · CCPA", "Data subject rights honored across jurisdictions with full audit trails."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8">
              <div className="size-10 border border-brand-blue/30 grid place-items-center mb-5">
                <div className="size-2 bg-brand-blue rounded-full" />
              </div>
              <h4 className="font-bold mb-2 tracking-tight">{t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="bg-brand-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-3">Security Architecture</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-12">Layered defense, end to end.</h2>

          <div className="grid lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {[
              ["L1", "Edge", "WAF, DDoS shield, mTLS"],
              ["L2", "Identity", "SSO, MFA, hardware keys"],
              ["L3", "App", "Least-privilege RBAC, signed audit log"],
              ["L4", "Data", "AES-256 at rest · TLS 1.3 in transit"],
              ["L5", "Recovery", "Geo-redundant backups, 15-min RPO"],
            ].map(([l, t, d]) => (
              <div key={l} className="bg-brand-navy p-6 relative">
                <div className="font-mono text-brand-blue text-xs tracking-widest mb-3">LAYER {l}</div>
                <div className="font-bold mb-2">{t}</div>
                <div className="text-xs text-white/55 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>

          {/* Uptime chart */}
          <div className="mt-12 border border-white/10 p-8 bg-white/[0.02]">
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="font-mono text-xs text-brand-emerald tracking-widest mb-2">PLATFORM UPTIME · 90 DAYS</div>
                <div className="text-3xl font-bold">99.98%</div>
              </div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest">● LIVE TELEMETRY</div>
            </div>
            <div className="h-48">
              <ResponsiveContainer>
                <LineChart data={uptime} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <XAxis dataKey="d" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <YAxis domain={[99.9, 100]} stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <Tooltip contentStyle={{ background: "white", border: "none", color: "#0F172A", fontSize: 12 }} />
                  <Line type="monotone" dataKey="v" stroke="#059669" strokeWidth={2.5} dot={{ r: 3, fill: "#059669" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Operating Practices" title="How we protect your data, daily." />
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[
            ["Zero-Knowledge Resumes", "Identity is shielded from client firms until bilateral consent is signed."],
            ["Quarterly Access Audits", "Every internal permission re-attested by sponsor and security lead."],
            ["Continuous Vulnerability Scanning", "All systems scanned daily; patch SLAs tracked publicly."],
            ["Background-Verified Workforce", "Every team member cleared via independent third-party check."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8 flex gap-6">
              <div className="size-8 border border-brand-blue/30 grid place-items-center shrink-0">
                <div className="size-1.5 bg-brand-blue rounded-full" />
              </div>
              <div>
                <h4 className="font-bold mb-2 tracking-tight">{t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
