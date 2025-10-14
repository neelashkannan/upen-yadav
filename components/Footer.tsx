'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { BrandMark } from './BrandMark';

const socialLinks = [
  {
    labelKey: 'contact.social.facebook',
    href: 'https://www.facebook.com/TheUpenYadav',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    labelKey: 'contact.social.twitter',
    href: 'https://x.com/theupenyadav',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
] as const;

const quickLinks = [
  { labelKey: 'nav.bio', href: '/bio' },
  { labelKey: 'nav.vision', href: '/vision' },
  { labelKey: 'nav.politico', href: '/politico' },
  { labelKey: 'nav.humanitarian', href: '/humanitarian' },
  { labelKey: 'nav.speeches', href: '/speeches' },
  { labelKey: 'nav.contact', href: '/contact' },
] as const;

const officeAddressKeys = [
  'contact.info.office.line1',
  'contact.info.office.line2',
  'contact.info.office.line3',
] as const;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-text text-text-inverse">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-4 text-text-inverse/90">
            <Link
              href="/"
              className="flex items-center space-x-3 text-xl font-bold text-text-inverse hover:text-accent-saffron transition-colors"
            >
              <BrandMark size={40} className="shadow-lg" />
              <span className="font-heading">{t('hero.title')}</span>
            </Link>
            <p className="leading-relaxed max-w-md text-text-inverse/80">
              {t('hero.subtitle')}. {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.labelKey}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-inverse/70 hover:text-accent-saffron transition-colors"
                  aria-label={t(social.labelKey)}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4 text-text-inverse">
            <h3 className="font-semibold text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-inverse/70 hover:text-accent-saffron transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4 text-text-inverse">
            <h3 className="font-semibold text-lg">{t('contact.info.title')}</h3>
            <div className="space-y-2 text-text-inverse/70">
              {officeAddressKeys.map((key) => (
                <p key={key} className="last:mb-0">
                  {t(key)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-inverse/70 text-sm">
              © {new Date().getFullYear()} {t('hero.title')}. {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm text-text-inverse/70">
              <span>{t('footer.built')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
