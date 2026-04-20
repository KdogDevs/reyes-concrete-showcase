import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Reyes Concrete LLC | Northport & Tuscaloosa Concrete Contractor" },
      {
        name: "description",
        content:
          "Reyes Concrete LLC is a family-owned concrete and site work company serving Northport, Tuscaloosa, and West Alabama. Owned and operated by Sergio Reyes.",
      },
      { property: "og:title", content: "About Reyes Concrete LLC" },
      { property: "og:description", content: "Family-owned concrete and site work in Northport & Tuscaloosa, AL." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 mx-auto max-w-4xl px-6">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
            About Us
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.02]">
            Built on craftsmanship.
          </h1>
          <div className="mt-10 prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              Reyes Concrete LLC is a family-owned business based in Northport, Alabama, serving Tuscaloosa County and the surrounding West Alabama region. Founded and operated by Sergio Reyes, our crew has spent more than a decade pouring concrete, repairing slabs, running bobcats, and clearing lots for homeowners, contractors, and small businesses.
            </p>
            <p>
              We believe a concrete job is only as good as the prep work behind it. That's why we own our equipment — bobcats, dump trucks, forms, and finishing tools — and run every project ourselves. No subcontractors. No surprises. Just one crew, one phone number, and work you can stand on for decades.
            </p>
            <p>
              Whether it's a stamped patio in Tuscaloosa, curb and gutter for a new subdivision in Northport, or a plumbing rough-in for a custom home, we treat your property like our own.
            </p>
          </div>
        </section>

        <section className="bg-surface border-t border-black/5">
          <div className="mx-auto max-w-4xl px-6 py-16 grid sm:grid-cols-3 gap-6 text-sm">
            <a href="tel:+12053316719" className="rounded-2xl bg-background p-6 border border-black/5 hover:shadow-[var(--shadow-soft)] transition">
              <Phone size={18} className="text-brand-red" />
              <div className="mt-3 font-medium">Call</div>
              <div className="text-muted-foreground">205-331-6719</div>
            </a>
            <a href="mailto:reyessergio589@gmail.com" className="rounded-2xl bg-background p-6 border border-black/5 hover:shadow-[var(--shadow-soft)] transition">
              <Mail size={18} className="text-brand-red" />
              <div className="mt-3 font-medium">Email</div>
              <div className="text-muted-foreground break-all">reyessergio589@gmail.com</div>
            </a>
            <div className="rounded-2xl bg-background p-6 border border-black/5">
              <MapPin size={18} className="text-brand-red" />
              <div className="mt-3 font-medium">Service Area</div>
              <div className="text-muted-foreground">Northport &amp; Tuscaloosa, AL</div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
