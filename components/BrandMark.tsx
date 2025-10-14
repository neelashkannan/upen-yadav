interface BrandMarkProps {
  size?: number;
  className?: string;
}

export function BrandMark({ size = 32, className = '' }: BrandMarkProps) {
  const dimension = `${size}px`;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-accent-saffron text-white select-none ${className}`}
      style={{ width: dimension, height: dimension }}
      aria-hidden="true"
    >
      <span
        className="font-semibold"
        style={{
          fontFamily: '"Noto Sans Devanagari", "Poppins", sans-serif',
          fontSize: size * 0.42,
          lineHeight: 1,
          letterSpacing: '-0.06em',
          marginTop: size * -0.05,
        }}
      >
        भाजप
      </span>
    </span>
  );
}
