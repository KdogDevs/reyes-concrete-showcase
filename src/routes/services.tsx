import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Concrete, Plumbing & Site Work | Reyes Concrete LLC, Northport & Tuscaloosa AL" },
      {
        name: "description",
        content:
          "Stamped concrete, concrete curb & gutter, concrete repair, plumbing, bobcat work, dump truck services, and small lot clearing in Northport, Tuscaloosa, and West Alabama.",
      },
      { property: "og:title", content: "Services — Reyes Concrete LLC" },
      { property: "og:description", content: "Concrete, plumbing, bobcat, dump truck, and lot clearing in Northport & Tuscaloosa, AL." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 mx-auto max-w-6xl px-6">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
            Our Services
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter max-w-4xl leading-[1.02]">
            Everything you need, from dirt to finish.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            One crew, one call. Reyes Concrete LLC handles the full scope of concrete and site work for homeowners and contractors across Northport and Tuscaloosa, Alabama.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
          <div className="grid gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="bg-surface border-t border-black/5">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Free estimates across Northport, Tuscaloosa, and surrounding areas.
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
    </div>
  );
}
