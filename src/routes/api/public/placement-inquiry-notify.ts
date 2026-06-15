import { createFileRoute } from "@tanstack/react-router";

const RECIPIENT = "abhinavatejamandava@grocdash.us";

export const Route = createFileRoute("/api/public/placement-inquiry-notify")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            sector?: string;
            full_name?: string;
            email?: string;
            phone?: string | null;
            message?: string | null;
            cv_path?: string | null;
          };

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

          let cvUrl: string | null = null;
          if (body.cv_path) {
            const { data } = await supabaseAdmin.storage
              .from("placement-cvs")
              .createSignedUrl(body.cv_path, 60 * 60 * 24 * 14); // 14 days
            cvUrl = data?.signedUrl ?? null;
            if (cvUrl) {
              await supabaseAdmin
                .from("placement_inquiries")
                .update({ cv_url: cvUrl })
                .eq("cv_path", body.cv_path);
            }
          }

          // Send via Lovable email queue if configured; otherwise no-op.
          try {
            const { error } = await (supabaseAdmin.rpc as any)("enqueue_email", {
              p_queue_name: "transactional_emails",
              p_payload: {
                to: RECIPIENT,
                template_name: "placement-inquiry",
                template_data: {
                  sector: body.sector ?? "",
                  full_name: body.full_name ?? "",
                  email: body.email ?? "",
                  phone: body.phone ?? "",
                  message: body.message ?? "",
                  cv_url: cvUrl ?? "",
                },
              },
            });
            if (!error) {
              await supabaseAdmin
                .from("placement_inquiries")
                .update({ email_sent: true })
                .eq("cv_path", body.cv_path ?? "");
            }
          } catch {
            // Email infra not yet provisioned — inquiry stays in DB for follow-up.
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("placement-inquiry-notify error", err);
          return Response.json({ ok: false }, { status: 500 });
        }
      },
    },
  },
});
