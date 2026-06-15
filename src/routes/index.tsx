import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-convergence.jpg";
import itVisual from "@/assets/it-visual.jpg";
import civilVisual from "@/assets/civil-visual.jpg";
import { TopBar, SiteNav, SiteFooter } from "@/components/site/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpha-Beta Solutions — IT & Civil Engineering Placements" },
      {
        name: "description",
        content:
          "USCIS E-Verify+ enrolled placement firm. World-class IT and Civil Engineering placements, resume engineering, secure architecture, and a satisfaction refund.",
      },
      { property: "og:title", content: "Alpha-Beta Solutions" },
      {
        property: "og:description",
        content: "Building digital & physical infrastructure. Vetted by USCIS E-Verify+. Refund-backed.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const itDomains = [
  "Cybersecurity & Penetration Testing",
  "Full-Stack Development Systems",
  "AI & Data Science Integration",
  "Cloud Infrastructure (AWS / Azure / GCP)",
  "DevOps & Site Reliability Engineering",
  "Enterprise Networking",
];

const civilDomains = [
  "Urban Infrastructure Planning",
  "Environmental Impact Assessments",
  "Structural Forensic Engineering",
  "Sustainable Material Research",
  "Hydraulic & Water Resource Systems",
  "Transportation Engineering",
];

const clients = ["MERIDIAN", "ARCANE", "NORTHWIND", "BECHTEL+", "HELIOS", "ATLAS-9"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans">
      <TopBar />
      <SiteNav />

      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 border border-brand-blue/30 text-brand-blue text-[10px] font-mono mb-6 tracking-widest">
            WORLD-CLASS TECHNICAL CONSULTANCY
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-8 tracking-tight">
            Building Digital & Physical <span className="text-brand-blue">Infrastructure.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
            From high-availability cloud architecture to sustainable environmental engineering — Alpha-Beta Solutions bridges the gap between bits and bricks for the world's most demanding firms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/resumes" className="bg-brand-blue text-white px-8 py-4 font-bold rounded-sm shadow-brand hover:-translate-y-0.5 transition-transform">
              Apply for Placement
            </Link>
            <Link to="/it-systems" className="border border-border px-8 py-4 font-bold rounded-sm hover:bg-secondary transition-colors">
              Technical Services
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Convergence of server infrastructure and civil engineering bridge architecture"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl ring-1 ring-black/5"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-navy text-white px-6 py-4 font-mono text-[11px] tracking-widest hidden md:block">
            <div className="text-brand-emerald">● ACTIVE PROJECTS</div>
            <div className="text-3xl font-bold font-sans mt-1">247</div>
          </div>
        </div>
      </section>

      {/* Trust Hologram + Vetting */}
      <section className="bg-brand-navy text-white py-24 px-6 relative overflow-hidden">
        {/* hologram grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            {/* Hologram visual */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-brand-blue/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-brand-blue/20 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-brand-emerald/30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="font-mono text-[10px] text-brand-emerald tracking-[0.3em] mb-3">VETTED</div>
                  <div className="text-5xl font-bold tracking-tight">USCIS</div>
                  <div className="text-brand-blue text-xl font-mono mt-1">E-Verify+</div>
                  <div className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] text-white/60 tracking-widest">
                    <span className="size-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    AUTHORIZED
                  </div>
                </div>
              </div>
              {/* orbiting dots */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-3 bg-brand-blue rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
              </div>
              <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-2 bg-brand-emerald rounded-full shadow-[0_0_16px_rgba(5,150,105,0.8)]" />
              </div>
            </div>

            {/* Copy + badges */}
            <div>
              <div className="font-mono text-xs text-brand-emerald uppercase tracking-[0.2em] mb-4">Trust Hologram</div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Vetted by the institutions that matter.
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 max-w-xl">
                Alpha-Beta Solutions is one of the top-vetted placement firms in the country — federally enrolled in <span className="text-white font-semibold">USCIS E-Verify+</span>, partnered with the <span className="text-white font-semibold">National Employment Commission</span>, and bound to genuine, signed partnerships with every client and candidate we represent.
              </p>

              <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                {[
                  { tag: "FEDERAL", title: "USCIS E-Verify+", body: "Every placement verified against authoritative records." },
                  { tag: "PARTNER", title: "Employment Commission", body: "Officially partnered for compliant cross-border placements." },
                  { tag: "STANDARD", title: "ISO 27001 Aligned", body: "Information security mapped to international controls." },
                  { tag: "CONTRACTUAL", title: "Genuine Partnerships", body: "Signed agreements with every client and candidate — no greylists." },
                ].map((b) => (
                  <div key={b.title} className="bg-brand-navy p-6">
                    <div className="font-mono text-[10px] text-brand-blue tracking-widest mb-3">{b.tag}</div>
                    <div className="font-bold mb-2">{b.title}</div>
                    <div className="text-xs text-white/55 leading-relaxed">{b.body}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/security" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-brand-emerald hover:text-white transition-colors">
                  → INSPECT SECURITY ARCHITECTURE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="border-y border-hairline bg-secondary/40 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground text-center mb-8">
            Trusted partners across global tech & infrastructure
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clients.map((c) => (
              <div key={c} className="text-center font-mono text-sm font-bold text-muted-foreground/60 tracking-[0.2em] hover:text-brand-navy transition-colors">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Twin Domains */}
      <section className="bg-secondary/30 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="font-mono text-xs text-brand-blue uppercase tracking-[0.2em] mb-4">Two disciplines. One standard.</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Engineering excellence, on both sides of the wire.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border shadow-xl">
            <div className="bg-background p-12">
              <h3 className="font-mono text-xs text-brand-blue mb-4 uppercase tracking-[0.2em]">Sector 01 // Information Technology</h3>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Enterprise Digital Solutions</h2>
              <ul className="space-y-4 text-muted-foreground mb-8">
                {itDomains.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <div className="size-1.5 bg-brand-blue shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <img src={itVisual} alt="IT systems visualization" className="w-full aspect-video object-cover rounded-sm ring-1 ring-black/5" loading="lazy" />
              <Link to="/it-systems" className="inline-flex mt-6 items-center gap-2 font-mono text-xs tracking-widest text-brand-blue hover:text-brand-navy transition-colors">
                → IT SYSTEMS DETAIL
              </Link>
            </div>

            <div className="bg-background p-12">
              <h3 className="font-mono text-xs text-brand-blue mb-4 uppercase tracking-[0.2em]">Sector 02 // Civil Engineering</h3>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Structural & Environmental</h2>
              <ul className="space-y-4 text-muted-foreground mb-8">
                {civilDomains.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <div className="size-1.5 bg-brand-blue shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <img src={civilVisual} alt="Civil engineering blueprint" className="w-full aspect-video object-cover rounded-sm ring-1 ring-black/5" loading="lazy" />
              <Link to="/engineering" className="inline-flex mt-6 items-center gap-2 font-mono text-xs tracking-widest text-brand-blue hover:text-brand-navy transition-colors">
                → ENGINEERING DETAIL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Engine */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="font-mono text-xs text-brand-blue uppercase tracking-[0.2em] mb-4">The Placement Engine</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Resumes engineered. Careers placed.</h2>
          <p className="text-muted-foreground">Professional resume preparation and direct pipelines into the world's most demanding firms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { code: "01. ANALYSIS", title: "ATS-Optimized Resumes", body: "Technical resume drafting by veterans in IT and Civil Engineering — each line tuned for human and algorithmic review.", to: "/resumes" as const },
            { code: "02. NETWORK", title: "Global Client Integration", body: "Direct pipelines to Fortune 500 tech firms and Tier-1 construction giants. Your file lands on the right desk.", to: "/it-systems" as const },
            { code: "03. GUARANTEE", title: "Satisfaction Refund", body: "If you're not satisfied with our placement or resume services, we refund — no friction, no fine print.", to: "/refund" as const },
          ].map((s) => (
            <Link key={s.code} to={s.to} className="bg-background p-10 hover:bg-secondary/40 transition-colors group">
              <div className="font-mono text-brand-blue mb-6 text-sm tracking-widest">{s.code}</div>
              <h4 className="font-bold text-xl mb-3 tracking-tight">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <div className="mt-8 h-px bg-border group-hover:bg-brand-blue transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 border-y border-hairline py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to engineer your next move?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Submit your profile or request a discovery call. We respond within one business day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/resumes" className="bg-brand-blue text-white px-8 py-4 font-bold rounded-sm shadow-brand hover:-translate-y-0.5 transition-transform">Submit Resume</Link>
            <Link to="/security" className="border border-border bg-background px-8 py-4 font-bold rounded-sm hover:bg-secondary transition-colors">Review Security</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
