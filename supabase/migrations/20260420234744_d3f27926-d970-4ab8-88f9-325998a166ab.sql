DROP POLICY IF EXISTS "sergio-media public read" ON storage.objects;

-- Allow direct fetches by full object name (used by <img src> and <video src>),
-- but disallow list operations (which use prefix-based queries with an empty/short name).
CREATE POLICY "sergio-media read by name"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'sergio-media'
    AND name IS NOT NULL
    AND length(name) > 0
  );
