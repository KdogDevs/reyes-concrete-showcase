import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceCard } from "@/components/ServiceCard";
import { services, heroVideo, heroPoster } from "@/lib/services";
import { ArrowRight, Phone, MapPin, Shield } from "lucide-react";

const hero = heroPoster;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reyes Concrete LLC — Concrete, Plumbing & Site Work in Northport & Tuscaloosa, AL" },
      {
        name: "description",
        content:
          "Reyes Concrete LLC offers stamped concrete, curb & gutter, concrete repair, plumbing, bobcat work, dump truck hauling, and small lot clearing in Northport and Tuscaloosa, Alabama. Call 205-331-6719.",
      },
      { name: "keywords", content: "concrete Northport AL, concrete Tuscaloosa, stamped concrete Tuscaloosa, concrete curb and gutter Northport, concrete repair Tuscaloosa, bobcat services Northport, dump truck Tuscaloosa, lot clearing Northport, plumbing Tuscaloosa, Reyes Concrete LLC" },
      { property: "og:title", content: "Reyes Concrete LLC — Northport & Tuscaloosa, AL" },
      { property: "og:description", content: "Stamped concrete, curb & gutter, repair, plumbing, bobcat & lot clearing across West Alabama." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://reyesconcretellc.com/" },
      { property: "og:site_name", content: "Reyes Concrete LLC" },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://reyesconcretellc.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://reyesconcretellc.com/#business",
          name: "Reyes Concrete LLC",
          image: hero,
          url: "https://reyesconcretellc.com/",
          telephone: "+1-205-331-6719",
          email: "reyessergio589@gmail.com",
          areaServed: [
            { "@type": "City", name: "Northport", addressRegion: "AL" },
            { "@type": "City", name: "Tuscaloosa", addressRegion: "AL" },
          ],
          address: { "@type": "PostalAddress", addressLocality: "Northport", addressRegion: "AL", addressCountry: "US" },
          priceRange: "$$",
          founder: { "@type": "Person", name: "Sergio Reyes" },
          description:
            "Concrete, plumbing, bobcat, dump truck, and lot clearing services in Northport and Tuscaloosa, Alabama.",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: [
              "Stamped Concrete", "Concrete Curb & Gutter", "Concrete Repair",
              "Concrete Slabs & Flatwork", "Plumbing", "Bobcat Services",
              "Dump Truck Services", "Small Lot Clearing",
            ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <video
            src={heroVideo}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Reyes Concrete crew demolishing an old slab"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-56 md:pb-44 text-white">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium border border-white/20">
                <MapPin size={12} /> Serving Northport &amp; Tuscaloosa, AL
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tighter max-w-4xl leading-[1.05]">
                Concrete done right.
                <br />
                <span className="text-white/60">Every pour. Every project.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                Reyes Concrete LLC delivers stamped concrete, curb &amp; gutter, repair, plumbing, bobcat work, and lot clearing across West Alabama.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+12053316719"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
                >
                  <Phone size={16} /> Call 205-331-6719
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
                >
                  Explore services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">What we do</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter">
              From dirt to finish — one crew.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Stamped patios in Tuscaloosa, curb and gutter in Northport, full site prep across West Alabama. We bring craftsmanship and the right equipment to every job.
            </p>
          </div>
          <div className="mt-16 grid gap-8">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.title} {...s} reverse={i % 2 === 1} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              See all services <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                Local. Reliable. <span className="text-gradient-red">Always on time.</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Sergio Reyes and his crew have been pouring concrete and clearing lots across Northport and Tuscaloosa for over a decade. When you hire Reyes Concrete LLC, you get a single point of contact and work done right the first time.
              </p>
              <a
                href="tel:+12053316719"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                <Phone size={16} /> Get a free estimate
              </a>
            </div>
            <div className="grid gap-4">
              {[
                ["Family owned", "Direct line to the owner on every job."],
                ["Fully equipped", "Bobcats, dump trucks, and concrete tools — in-house."],
                ["Local knowledge", "Built for Alabama soil, weather, and codes."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-red-glow)] flex items-center justify-center">
                      <Shield size={16} />
                    </div>
                    <div className="font-medium">{t}</div>
                  </div>
                  <p className="mt-3 text-sm text-white/60">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            Ready to break ground?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Call Sergio for a free, no-pressure estimate on your Northport or Tuscaloosa project.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+12053316719"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
            >
              <Phone size={16} /> 205-331-6719
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-medium hover:bg-surface transition"
            >
              Contact form <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
