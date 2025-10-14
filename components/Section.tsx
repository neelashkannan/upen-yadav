interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  background?: 'white' | 'muted' | 'warm' | 'cool';
  id?: string;
}

export function Section({
  children,
  className = '',
  size = 'md',
  background = 'white',
  id,
}: SectionProps) {
  const sizeClasses = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
  };

  const backgroundClasses = {
    white: 'bg-white',
    muted: 'bg-[#FFF6E9]',
    warm: 'bg-[#FFF8F0]',
    cool: 'bg-[#FDFDFD]',
  };

  return (
    <section
      id={id}
      className={`relative ${sizeClasses[size]} ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
