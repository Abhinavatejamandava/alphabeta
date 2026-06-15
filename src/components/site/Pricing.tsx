import { useState } from "react";
import { ShieldCheck, Check, Lock, RefreshCcw } from "lucide-react";
import { PlacementInquiryDialog } from "./PlacementInquiryDialog";

export function PlacementPricing({
  sector,
  price,
  description,
  features,
}: {
  sector: string;
  price: number;
  description: string;
  features: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="font-mono text-xs text-brand-blue uppercase tracking-[0.2em] mb-3">Pricing</div>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Transparent placement fees</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          No hidden costs. Verified by the U.S. government. Full refund if you are not satisfied.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-px bg-border border border-border">
        <div className="lg:col-span-2 bg-brand-navy text-white p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-sm mb-6">
              <ShieldCheck className="size-4 text-brand-emerald" />
              <span className="text-xs font-semibold tracking-wide">U.S. GOVERNMENT VERIFIED</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Verified & Regulated</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Alpha-Beta Solutions is enrolled in USCIS E-Verify+, partners with the U.S. Department of Labor, and is recognized by state Employment Commissions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["USCIS E-Verify+", "Dept. of Labor", "Employment Commission", "ISO 27001"].map((b) => (
              <span
                key={b}
                className="text-[10px] font-mono uppercase tracking-wider border border-white/20 px-2.5 py-1 text-white/80"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 bg-background p-8 lg:p-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="font-mono text-[10px] text-brand-blue tracking-widest uppercase">Placement Fee</div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-emerald">
              <RefreshCcw className="size-3" />
              100% refund guarantee
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">{sector}</h3>
          <p className="text-sm text-muted-foreground mb-8">{description}</p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl lg:text-6xl font-bold tracking-tight">${price.toLocaleString()}</span>
            <span className="text-muted-foreground">per successful placement</span>
          </div>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="size-4 text-brand-emerald mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Lock className="size-3" />
            <span>PCI-DSS checkout · AES-256 encryption · SOC 2 monitored</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="w-full bg-brand-navy text-white py-3.5 font-semibold hover:bg-brand-blue transition-colors"
          >
            Start {sector} Placement
          </button>
        </div>
      </div>
      <PlacementInquiryDialog open={open} onOpenChange={setOpen} sector={sector} />
    </section>
  );
}
