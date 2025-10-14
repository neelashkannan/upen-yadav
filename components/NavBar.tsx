'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import { BrandMark } from './BrandMark';

interface NavItem {
  label: string;
  href: string;
}

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.bio'), href: '/bio' },
    { label: t('nav.vision'), href: '/vision' },
    { label: t('nav.politico'), href: '/politico' },
    { label: t('nav.humanitarian'), href: '/humanitarian' },
    { label: t('nav.speeches'), href: '/speeches' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const brandTextColor = isScrolled ? 'text-primary' : 'text-text-inverse';
  const brandHoverColor = isScrolled ? 'hover:text-primary-dark' : 'hover:opacity-90';

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-primary'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center space-x-2 text-xl font-bold transition-colors ${brandTextColor} ${brandHoverColor}`}
          >
            <BrandMark size={36} className="shadow-lg" />
            <span className="hidden sm:block font-heading">Upen Yadav</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-accent-saffron'
                    : isScrolled
                      ? 'text-secondary hover:text-accent-saffron'
                      : 'text-text-inverse hover:text-gray-200'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-saffron rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? 'text-secondary hover:text-accent-saffron hover:bg-bg-muted'
                : 'text-text-inverse hover:text-gray-200 hover:bg-accent-primary-dark'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-accent-saffron bg-bg-muted'
                      : 'text-secondary hover:text-accent-saffron hover:bg-bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
