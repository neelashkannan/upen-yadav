'use client';

import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { useLanguage } from "../../../components/LanguageContext";

const visionPillars = [
  {
    icon: "📚",
    titleKey: 'vision.pillars.education.title',
    descriptionKey: 'vision.pillars.education.description',
  },
  {
    icon: "🏥",
    titleKey: 'vision.pillars.healthcare.title',
    descriptionKey: 'vision.pillars.healthcare.description',
  },
  {
    icon: "🚀",
    titleKey: 'vision.pillars.economy.title',
    descriptionKey: 'vision.pillars.economy.description',
  },
  {
    icon: "🌾",
    titleKey: 'vision.pillars.agriculture.title',
    descriptionKey: 'vision.pillars.agriculture.description',
  },
  {
    icon: "🌟",
    titleKey: 'vision.pillars.youth.title',
    descriptionKey: 'vision.pillars.youth.description',
  },
  {
    icon: "🏘️",
    titleKey: 'vision.pillars.community.title',
    descriptionKey: 'vision.pillars.community.description',
  },
] as const;

export default function VisionPageContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-accent-saffron/5 via-white to-accent-green/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('vision.hero.title')}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t('vision.hero.subtitle')}
            </p>
          </div>
        </div>
      </Section>

      {/* Vision Statement */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-bg-warm p-8 lg:p-12 rounded-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                {t('vision.statement.title')}
              </h2>
              <p className="text-lg text-text-muted leading-relaxed text-center">
                {t('vision.statement.description')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision Pillars */}
      <Section background="muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('vision.pillars.title')}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {t('vision.pillars.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar) => (
              <Card
                key={pillar.titleKey}
                title={t(pillar.titleKey)}
                description={t(pillar.descriptionKey)}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('vision.cta.title')}
            </h2>
            <p className="text-lg text-text-muted mb-8">
              {t('vision.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                {t('vision.cta.primary')}
              </Button>
              <Button href="/politico" variant="outline" size="lg">
                {t('vision.cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
