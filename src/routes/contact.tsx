import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, MapPin, User } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Reyes Concrete LLC | Free Estimates in Northport & Tuscaloosa AL" },
      {
        name: "description",
        content:
          "Get a free estimate from Reyes Concrete LLC. Call Sergio Reyes at 205-331-6719 or email reyessergio589@gmail.com. Serving Northport, Tuscaloosa, and West Alabama.",
      },
      { property: "og:title", content: "Contact Reyes Concrete LLC" },
      { property: "og:description", content: "Free estimates for concrete, plumbing, bobcat, and lot clearing in Northport & Tuscaloosa, AL." },
      { property: "og:url", content: "https://reyesconcretellc.com/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://reyesconcretellc.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 mx-auto max-w-4xl px-6">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
            Contact
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.02]">
            Let's talk about your project.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Free estimates across Northport, Tuscaloosa, and surrounding West Alabama communities. The fastest way to reach us is a phone call.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="tel:+12053316719"
              className="group rounded-3xl bg-foreground text-background p-10 hover:opacity-95 transition"
            >
              <Phone size={22} />
              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-white/60">Call</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">205-331-6719</div>
              <div className="mt-1 text-white/60 text-sm">Tap to call Sergio</div>
            </a>
            <a
              href="mailto:reyessergio589@gmail.com"
              className="group rounded-3xl bg-surface border border-black/5 p-10 hover:shadow-[var(--shadow-elevated)] transition"
            >
              <Mail size={22} className="text-brand-red" />
              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
              <div className="mt-2 text-xl md:text-2xl font-semibold tracking-tight break-all">
                reyessergio589@gmail.com
              </div>
              <div className="mt-1 text-muted-foreground text-sm">We'll respond within one business day</div>
            </a>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-surface border border-black/5 p-8">
              <User size={20} className="text-brand-red" />
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Owner</div>
              <div className="mt-2 text-xl font-semibold">Sergio Reyes</div>
            </div>
            <div className="rounded-3xl bg-surface border border-black/5 p-8">
              <MapPin size={20} className="text-brand-red" />
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Service Area</div>
              <div className="mt-2 text-xl font-semibold">Northport &amp; Tuscaloosa, AL</div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
