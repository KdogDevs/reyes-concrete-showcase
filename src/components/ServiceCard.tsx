type Props = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export function ServiceCard({ title, eyebrow, description, image, reverse }: Props) {
  return (
    <article className="group rounded-3xl bg-surface overflow-hidden border border-black/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500">
      <div className={`grid md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand-red">
            {eyebrow}
          </div>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
        </div>
      </div>
    </article>
  );
}
