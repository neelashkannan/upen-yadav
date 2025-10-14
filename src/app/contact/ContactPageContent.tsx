'use client';

import { ContactForm } from "./ContactForm";
import { useLanguage } from "../../../components/LanguageContext";

const officeAddressKeys = [
  'contact.info.office.line1',
  'contact.info.office.line2',
  'contact.info.office.line3',
] as const;

const officeHoursKeys = [
  'contact.info.hours.line1',
  'contact.info.hours.line2',
] as const;

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-saffron/5 via-white to-accent-green/5 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('contact.info.office.title')}</h3>
                      <p className="text-text-muted">
                        {officeAddressKeys.map((key, index) => (
                          <span key={key}>
                            {t(key)}
                            {index < officeAddressKeys.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('contact.info.email.title')}</h3>
                      <a href="mailto:contact@upenyadav.in" className="text-primary hover:text-primary-dark">
                        contact@upenyadav.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('contact.info.hours.title')}</h3>
                      <p className="text-text-muted">
                        {officeHoursKeys.map((key, index) => (
                          <span key={key}>
                            {t(key)}
                            {index < officeHoursKeys.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('contact.follow.title')}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/TheUpenYadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary hover:text-white transition-colors"
                    aria-label={t('contact.social.facebook')}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  <a
                    href="https://x.com/theupenyadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary hover:text-white transition-colors"
                    aria-label={t('contact.social.twitter')}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
