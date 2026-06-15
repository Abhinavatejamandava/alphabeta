
CREATE POLICY "anyone can upload CV" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'placement-cvs');
