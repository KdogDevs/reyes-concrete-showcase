import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="font-semibold text-base">
            Reyes Concrete <span className="text-brand-red">LLC</span>
          </div>
          <p className="mt-3 text-muted-foreground max-w-sm">
            Family-owned concrete and site work serving Northport, Tuscaloosa,
            and surrounding West Alabama communities.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Services</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Stamped Concrete</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Concrete Curb &amp; Gutter</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Concrete Repair</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Bobcat &amp; Lot Clearing</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>Sergio Reyes</li>
            <li><a href="tel:+12053316719" className="hover:text-foreground">205-331-6719</a></li>
            <li><a href="mailto:reyessergio589@gmail.com" className="hover:text-foreground break-all">reyessergio589@gmail.com</a></li>
            <li>Northport &amp; Tuscaloosa, AL</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Reyes Concrete LLC. All rights reserved.</span>
          <span>Licensed &amp; insured · Northport, AL</span>
        </div>
      </div>
    </footer>
  );
}
