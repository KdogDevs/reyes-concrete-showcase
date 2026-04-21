type Props = {
  className?: string;
  variant?: "full" | "mark";
  /** Tailwind text color class controls the wordmark color via currentColor */
};

/**
 * Reyes Concrete LLC logo.
 * Inspired by the original business card: bold western slab-serif wordmark
 * with an excavator silhouette mark. Uses currentColor so it adapts to
 * light/dark surfaces — set color via Tailwind text-* classes.
 */
export function Logo({ className, variant = "full" }: Props) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Reyes Concrete LLC"
      >
        <ExcavatorMark />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Reyes Concrete LLC"
    >
      {/* Equipment mark */}
      <g transform="translate(0, 8)">
        <ExcavatorMark />
      </g>

      {/* Wordmark */}
      <g fill="currentColor">
        <text
          x="78"
          y="38"
          fontFamily="'Rye', 'Playfair Display', Georgia, serif"
          fontSize="30"
          fontWeight="900"
          letterSpacing="1"
        >
          REYES
        </text>
        <text
          x="78"
          y="68"
          fontFamily="'Rye', 'Playfair Display', Georgia, serif"
          fontSize="22"
          fontWeight="900"
          letterSpacing="0.5"
        >
          CONCRETE
        </text>
        <text
          x="246"
          y="68"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="var(--brand-red)"
        >
          LLC
        </text>
        {/* Underline accent */}
        <rect x="78" y="76" width="180" height="2" fill="var(--brand-red)" />
      </g>
    </svg>
  );
}

function ExcavatorMark() {
  return (
    <g fill="currentColor">
      {/* Boom arm */}
      <path
        d="M8 8 L26 22 L34 32 L40 40 L36 44 L28 36 L20 28 L4 14 Z"
        opacity="0.95"
      />
      {/* Bucket */}
      <path d="M36 38 L48 44 L46 52 L34 48 Z" />
      {/* Cab */}
      <rect x="14" y="34" width="22" height="14" rx="2" />
      <rect x="18" y="36" width="6" height="6" fill="var(--background, #fff)" opacity="0.9" />
      {/* Body */}
      <rect x="6" y="48" width="44" height="8" rx="2" />
      {/* Tracks */}
      <rect x="4" y="56" width="48" height="6" rx="3" />
      <circle cx="10" cy="59" r="2.5" fill="var(--background, #fff)" />
      <circle cx="46" cy="59" r="2.5" fill="var(--background, #fff)" />
    </g>
  );
}
