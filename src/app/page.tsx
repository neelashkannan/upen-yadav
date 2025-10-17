'use client';

import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section - Political Style */}
      <section className="relative bg-gradient-to-br from-accent-saffron via-white to-accent-green min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,153,51,0.3)_1px,transparent_0)] bg-[length:30px_30px]" />
        </div>

        <div className="container relative mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-accent-saffron/10 border border-accent-saffron/20 rounded-full">
                  <span className="text-accent-saffron font-medium text-sm uppercase tracking-wider">
                    {t('hero.subtitle')}
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>

                <p className="text-xl text-text-muted leading-relaxed max-w-lg">
                  {t('hero.description')}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/bio"
                  className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-saffron text-white hover:bg-accent-saffron/90 focus:ring-accent-saffron shadow-lg hover:shadow-xl hover:-translate-y-1 px-8 py-4 text-lg rounded-xl"
                >
                  {t('hero.cta.primary')}
          </Link>
          <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-accent-saffron text-accent-saffron hover:bg-accent-saffron hover:text-white focus:ring-accent-saffron px-8 py-4 text-lg rounded-xl"
                >
                  {t('hero.cta.secondary')}
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="images/hero-portrait.png"
                  alt={t('hero.imageAlt')}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

                {/* BJP Badge */}
                <div className="absolute top-6 right-6 bg-accent-saffron rounded-full p-3 shadow-lg z-20">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-accent-saffron font-bold text-sm">{t('hero.badge')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-saffron">15+</div>
              <div className="text-text-muted">{t('stats.experience')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-green">500+</div>
              <div className="text-text-muted">{t('stats.programs')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-saffron">10K+</div>
              <div className="text-text-muted">{t('stats.people')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative py-20 bg-bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('sections.work.title')}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              {t('sections.work.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/vision" className="group">
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="images/vision-card.png"
                    alt={t('cards.vision.alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-text group-hover:text-accent-saffron transition-colors">
                    {t('cards.vision.title')}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {t('cards.vision.description')}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/politico" className="group">
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="images/politico-card.png"
                    alt={t('cards.politico.alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-text group-hover:text-accent-saffron transition-colors">
                    {t('cards.politico.title')}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {t('cards.politico.description')}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/humanitarian" className="group">
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="images/humanitarian-card.png"
                    alt={t('cards.humanitarian.alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-text group-hover:text-accent-saffron transition-colors">
                    {t('cards.humanitarian.title')}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {t('cards.humanitarian.description')}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/speeches" className="group">
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="images/speeches-card.png"
                    alt={t('cards.speeches.alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-text group-hover:text-accent-saffron transition-colors">
                    {t('cards.speeches.title')}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {t('cards.speeches.description')}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 bg-gradient-to-r from-accent-saffron/10 via-white to-accent-green/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="text-3xl lg:text-4xl font-medium text-text leading-relaxed mb-8 italic">
              &ldquo;{t('quote.text')}&rdquo;
            </blockquote>
            <cite className="text-xl text-accent-saffron not-italic font-semibold">
              — {t('quote.author')}
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-accent-saffron">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-accent-saffron hover:bg-white/90 focus:ring-white shadow-lg hover:shadow-xl hover:-translate-y-1 px-8 py-4 text-lg rounded-xl"
              >
                {t('cta.primary')}
        </Link>
        <Link
                href="/vision"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-white text-white hover:bg-white hover:text-accent-saffron focus:ring-white px-8 py-4 text-lg rounded-xl"
              >
                {t('cta.secondary')}
              </Link>
            </div>
          </div>
    </div>
      </section>
    </>
  );
}
