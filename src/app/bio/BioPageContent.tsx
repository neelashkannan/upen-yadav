'use client';

import Image from "next/image";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { useLanguage } from "../../../components/LanguageContext";

const valueCards = [
  {
    titleKey: 'bio.section.values.honesty.title',
    descriptionKey: 'bio.section.values.honesty.description',
    borderClass: 'border-accent-saffron',
    textClass: 'text-accent-saffron',
  },
  {
    titleKey: 'bio.section.values.innovation.title',
    descriptionKey: 'bio.section.values.innovation.description',
    borderClass: 'border-accent-green',
    textClass: 'text-accent-green',
  },
  {
    titleKey: 'bio.section.values.inclusivity.title',
    descriptionKey: 'bio.section.values.inclusivity.description',
    borderClass: 'border-accent-saffron',
    textClass: 'text-accent-saffron',
  },
  {
    titleKey: 'bio.section.values.impact.title',
    descriptionKey: 'bio.section.values.impact.description',
    borderClass: 'border-accent-green',
    textClass: 'text-accent-green',
  },
] as const;

const educationItems = [
  {
    titleKey: 'bio.section.education.mba.title',
    descriptionKey: 'bio.section.education.mba.description',
    dotColorClass: 'bg-accent-saffron',
  },
  {
    titleKey: 'bio.section.education.leadership.title',
    descriptionKey: 'bio.section.education.leadership.description',
    dotColorClass: 'bg-accent-green',
  },
  {
    titleKey: 'bio.section.education.youth.title',
    descriptionKey: 'bio.section.education.youth.description',
    dotColorClass: 'bg-accent-saffron',
  },
] as const;

const journeyParagraphs = [
  'bio.section.journey.paragraph1',
  'bio.section.journey.paragraph2',
  'bio.section.journey.paragraph3',
] as const;

export default function BioPageContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-saffron/5 via-white to-accent-green/5 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('bio.hero.title')}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t('bio.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-portrait.png"
                    alt={t('hero.imageAlt')}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {/* BJP Badge */}
                  <div className="absolute top-4 right-4 bg-accent-saffron rounded-full p-2 shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-accent-saffron font-bold text-xs">{t('hero.badge')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('bio.section.journey.title')}</h2>
                <div className="prose prose-lg max-w-none text-text-muted space-y-6">
                  {journeyParagraphs.map((key) => (
                    <p key={key}>{t(key)}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">{t('bio.section.values.title')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {valueCards.map((card) => (
                    <div
                      key={card.titleKey}
                      className={`bg-bg-muted p-6 rounded-xl border-l-4 ${card.borderClass}`}
                    >
                      <h3 className={`text-xl font-semibold mb-3 ${card.textClass}`}>
                        {t(card.titleKey)}
                      </h3>
                      <p className="text-text-muted">
                        {t(card.descriptionKey)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">{t('bio.section.education.title')}</h2>
                <div className="space-y-4">
                  {educationItems.map((item) => (
                    <div key={item.titleKey} className="flex items-start space-x-4">
                      <div className={`w-2 h-2 ${item.dotColorClass} rounded-full mt-3 flex-shrink-0`} />
                      <div>
                        <h4 className="font-semibold">{t(item.titleKey)}</h4>
                        <p className="text-text-muted">{t(item.descriptionKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Button href="/contact" variant="primary" size="lg">
                  {t('cta.primary')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
