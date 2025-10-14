'use client';

import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { useLanguage } from "../../../components/LanguageContext";

export default function SpeechesPageContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-accent-saffron/5 via-white to-accent-green/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('speeches.hero.title')}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t('speeches.hero.subtitle')}
            </p>
          </div>
        </div>
      </Section>

      {/* Coming Soon Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('speeches.comingSoon.title')}</h2>
            <p className="text-lg text-text-muted mb-8">
              {t('speeches.comingSoon.description')}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              {t('cta.primary')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
