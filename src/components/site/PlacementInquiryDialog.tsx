import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Upload, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const schema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export function PlacementInquiryDialog({
  open,
  onOpenChange,
  sector,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  sector: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cv, setCv] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      full_name: form.get("full_name"),
      email: form.get("email"),
      phone: form.get("phone") ?? "",
      message: form.get("message") ?? "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    if (!cv) {
      setError("Please attach your CV (PDF, DOC, or DOCX).");
      return;
    }
    if (cv.size > 10 * 1024 * 1024) {
      setError("CV must be smaller than 10MB.");
      return;
    }

    setSubmitting(true);
    try {
      const ext = cv.name.split(".").pop()?.toLowerCase() ?? "pdf";
      const safeName = cv.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${sector.toLowerCase().replace(/\s+/g, "-")}/${Date.now()}-${crypto.randomUUID()}-${safeName}`;
      const { error: upErr } = await supabase.storage
        .from("placement-cvs")
        .upload(path, cv, { contentType: cv.type || `application/${ext}`, upsert: false });
      if (upErr) throw upErr;

      const { error: insErr } = await supabase.from("placement_inquiries").insert({
        sector,
        full_name: parsed.data.full_name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        message: parsed.data.message || null,
        cv_path: path,
      });
      if (insErr) throw insErr;

      // Best-effort notification (server handles delivery). Don't fail if not configured yet.
      try {
        await fetch("/api/public/placement-inquiry-notify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sector,
            full_name: parsed.data.full_name,
            email: parsed.data.email,
            phone: parsed.data.phone || null,
            message: parsed.data.message || null,
            cv_path: path,
          }),
        });
      } catch {
        /* noop */
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSuccess(false);
    setError(null);
    setCv(null);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="size-14 text-brand-emerald mx-auto mb-4" />
            <h3 className="text-2xl font-bold tracking-tight mb-2">Your request has been sent</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Thank you for applying for our {sector} placement. Our team will review your CV and contact you within 2 business days.
            </p>
            <Button onClick={() => onOpenChange(false)} className="w-full">Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-blue uppercase mb-1">
                <ShieldCheck className="size-3" /> U.S. Government Verified
              </div>
              <DialogTitle className="text-2xl tracking-tight">Apply for {sector} Placement</DialogTitle>
              <DialogDescription>
                Fill in your details and upload your CV. Our placement team will reach out shortly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full name *</Label>
                <Input id="full_name" name="full_name" required maxLength={100} placeholder="Jane Doe" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" maxLength={40} placeholder="+1 555 000 1234" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your experience</Label>
                <Textarea id="message" name="message" rows={4} maxLength={2000} placeholder="Years of experience, key skills, role preferences…" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cv">CV / Resume * (PDF, DOC, DOCX — max 10MB)</Label>
                <label
                  htmlFor="cv"
                  className="flex items-center gap-3 border border-dashed border-border bg-secondary/40 hover:bg-secondary cursor-pointer px-4 py-3 text-sm transition-colors"
                >
                  <Upload className="size-4 text-muted-foreground" />
                  <span className="truncate">{cv ? cv.name : "Choose a file"}</span>
                </label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                  onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                />
              </div>

              {error && (
                <div className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-sm">{error}</div>
              )}

              <Button type="submit" disabled={submitting} className="w-full bg-brand-navy hover:bg-brand-blue text-white">
                {submitting ? (
                  <><Loader2 className="size-4 animate-spin mr-2" /> Submitting…</>
                ) : (
                  <>Submit application</>
                )}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. Your information is encrypted in transit and at rest.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
