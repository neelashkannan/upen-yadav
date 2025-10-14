import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

export function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  className = '',
}: CardProps) {
  const CardContent = () => (
    <div className={`group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      {imageSrc && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-8 space-y-4 relative z-10">
        <h3 className="text-2xl font-semibold text-secondary group-hover:text-accent-saffron transition-colors relative z-20">
          {title}
        </h3>
        <p className="text-text-muted leading-relaxed line-clamp-3 relative z-20">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
