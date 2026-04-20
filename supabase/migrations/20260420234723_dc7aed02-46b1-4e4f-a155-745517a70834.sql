-- Service slug enum
CREATE TYPE public.service_slug AS ENUM (
  'hero',
  'stamped_concrete',
  'curb_gutter',
  'concrete_repair',
  'concrete_flatwork',
  'plumbing',
  'bobcat',
  'dump_truck',
  'lot_clearing',
  'general'
);

CREATE TYPE public.media_kind AS ENUM ('photo', 'video');

CREATE TABLE public.media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service public.service_slug NOT NULL,
  kind public.media_kind NOT NULL,
  storage_path TEXT NOT NULL,
  public_url TEXT NOT NULL,
  caption TEXT,
  width INTEGER,
  height INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_media_assets_service_sort ON public.media_assets (service, sort_order);

ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "Media is publicly viewable"
  ON public.media_assets FOR SELECT
  USING (true);

-- No public write policies — locked down by default. Admins can use service role.

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_media_assets_updated_at
  BEFORE UPDATE ON public.media_assets
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('sergio-media', 'sergio-media', true, 52428800)
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 52428800;

-- Public read on bucket
CREATE POLICY "sergio-media public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'sergio-media');
