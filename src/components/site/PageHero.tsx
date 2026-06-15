import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  metrics,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body: string;
  metrics?: { label: string; value: string }[];
}) {
  return (
    <section className="border-b border-hairline px-6 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.25em] mb-6">{eyebrow}</div>
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
          {title} {accent && <span className="text-brand-blue">{accent}</span>}
        </h1>
        <p className="text-lg text-muted-foreground mt-8 max-w-2xl leading-relaxed">{body}</p>
        {metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mt-14">
            {metrics.map((m) => (
              <div key={m.label} className="bg-background p-6">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">{m.label}</div>
                <div className="text-3xl lg:text-4xl font-bold tracking-tight">{m.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl mb-12">
      <div className="font-mono text-xs text-brand-blue uppercase tracking-[0.2em] mb-3">{eyebrow}</div>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
      {children && <p className="text-muted-foreground mt-4 leading-relaxed">{children}</p>}
    </div>
  );
}
