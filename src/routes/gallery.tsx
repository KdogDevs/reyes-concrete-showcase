import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Play, X } from "lucide-react";

type MediaRow = {
  id: string;
  service: string;
  kind: "photo" | "video";
  public_url: string;
  caption: string | null;
  sort_order: number;
};

const SERVICE_LABELS: Record<string, string> = {
  hero: "Featured",
  stamped_concrete: "Stamped Concrete",
  curb_gutter: "Curb & Gutter",
  concrete_repair: "Concrete Repair",
  concrete_flatwork: "Slabs & Flatwork",
  plumbing: "Plumbing",
  bobcat: "Bobcat",
  dump_truck: "Dump Truck",
  lot_clearing: "Lot Clearing",
  general: "On the Job",
};

const STORAGE = "https://mbeyzpujepawmgmsyhih.supabase.co/storage/v1/object/public/sergio-media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Reyes Concrete LLC | Northport & Tuscaloosa, AL" },
      {
        name: "description",
        content:
          "Real project photos and videos from Reyes Concrete LLC — stamped patios, driveways, curb & gutter, plumbing, lot clearing, and more across West Alabama.",
      },
      { property: "og:title", content: "Project Gallery — Reyes Concrete LLC" },
      { property: "og:description", content: "Photos and videos of recent concrete and site work in Northport and Tuscaloosa, AL." },
      { property: "og:image", content: `${STORAGE}/photos/IMG_3767.jpg` },
      { name: "twitter:image", content: `${STORAGE}/photos/IMG_3767.jpg` },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [items, setItems] = useState<MediaRow[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<MediaRow | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("media_assets")
        .select("id, service, kind, public_url, caption, sort_order")
        .order("service", { ascending: true })
        .order("sort_order", { ascending: true });
      if (cancelled) return;
      if (error) {
        console.error("Gallery load error:", error);
        setLoading(false);
        return;
      }
      // Drop the hero poster duplicate (already paired with the hero video).
      const cleaned = (data as MediaRow[]).filter(
        (m) => !m.public_url.endsWith("_poster.jpg")
      );
      setItems(cleaned);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const services = Array.from(new Set(items.map((i) => i.service)));
  const visible = filter === "all" ? items : items.filter((i) => i.service === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="pt-36 pb-12 md:pt-44 mx-auto max-w-6xl px-6">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
            Project Gallery
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter max-w-4xl leading-[1.02]">
            Real work. Real jobsites.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every photo and video here is from a Reyes Concrete LLC project across Northport, Tuscaloosa, and West Alabama.
          </p>
        </section>

        {/* Filters */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap gap-2">
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
              All ({items.length})
            </FilterChip>
            {services.map((s) => (
              <FilterChip
                key={s}
                active={filter === s}
                onClick={() => setFilter(s)}
              >
                {SERVICE_LABELS[s] ?? s} ({items.filter((i) => i.service === s).length})
              </FilterChip>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-surface animate-pulse"
                />
              ))}
            </div>
          ) : visible.length === 0 ? (
            <p className="text-muted-foreground">No media yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {visible.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setLightbox(m)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-surface focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  {m.kind === "photo" ? (
                    <img
                      src={m.public_url}
                      alt={m.caption ?? "Reyes Concrete project photo"}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <video
                        src={m.public_url}
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                          <Play size={20} className="ml-0.5" fill="currentColor" />
                        </span>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-white/90">
                      {SERVICE_LABELS[m.service] ?? m.service}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="bg-surface border-t border-black/5">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">
              Like what you see?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get a free estimate for your Northport or Tuscaloosa project.
            </p>
            <a
              href="tel:+12053316719"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
            >
              <Phone size={16} /> Call 205-331-6719
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.kind === "photo" ? (
              <img
                src={lightbox.public_url}
                alt={lightbox.caption ?? ""}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            ) : (
              <video
                src={lightbox.public_url}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-auto rounded-lg"
              />
            )}
            {lightbox.caption && (
              <p className="mt-3 text-center text-sm text-white/80">
                {lightbox.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
        active
          ? "bg-foreground text-background"
          : "bg-surface text-foreground/70 hover:bg-foreground/10"
      }`}
    >
      {children}
    </button>
  );
}
