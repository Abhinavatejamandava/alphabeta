
CREATE TABLE public.placement_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sector TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  cv_path TEXT,
  cv_url TEXT,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.placement_inquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.placement_inquiries TO authenticated;
GRANT ALL ON public.placement_inquiries TO service_role;
ALTER TABLE public.placement_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit inquiry" ON public.placement_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
