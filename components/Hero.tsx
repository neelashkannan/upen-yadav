import Image from 'next/image';
import { Button } from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButton,
  secondaryButton,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-accent-saffron/5 via-white to-accent-green/5 py-20 lg:py-32">
      {/* Background pattern/texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,153,51,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent-saffron font-medium text-sm uppercase tracking-wider">
                {subtitle}
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              {description && (
                <p className="text-lg text-text-muted leading-relaxed max-w-lg">
                  {description}
                </p>
              )}
            </div>

            {/* Action buttons */}
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryButton && (
                  <Button href={primaryButton.href} variant="primary" size="lg">
                    {primaryButton.text}
                  </Button>
                )}
                {secondaryButton && (
                  <Button href={secondaryButton.href} variant="outline" size="lg">
                    {secondaryButton.text}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-saffron/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-green/20 rounded-full blur-xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium text-text">Active Public Servant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
