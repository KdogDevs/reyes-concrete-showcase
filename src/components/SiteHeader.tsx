import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-[15px]">
          Reyes Concrete <span className="text-brand-red">LLC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-foreground/80">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+12053316719"
            className="rounded-full bg-foreground text-background px-4 py-1.5 text-[13px] font-medium hover:opacity-90 transition"
          >
            Call 205-331-6719
          </a>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-background">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+12053316719"
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm text-center font-medium"
            >
              Call 205-331-6719
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
