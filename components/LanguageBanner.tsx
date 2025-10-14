'use client';

import { useLanguage } from './LanguageContext';

export function LanguageBanner() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-4">
          {/* Modern Capsule-shaped Language Toggle */}
          <div className="relative bg-white rounded-full p-1 shadow-sm border border-gray-300 overflow-hidden" style={{ width: '200px', height: '40px' }}>
            {/* Sliding background indicator */}
            <div
              className={`absolute top-0 bottom-0 w-1/2 h-full rounded-full transition-all duration-300 ease-in-out ${
                language === 'hi'
                  ? 'left-0 bg-[#FF6F00] shadow-md'
                  : 'left-1/2 bg-[#FF6F00] shadow-md'
              }`}
            />

            {/* Content */}
            <div className="relative flex h-full">
              {/* Hindi Button (Left) */}
              <button
                onClick={() => setLanguage('hi')}
                className={`relative z-10 flex-1 h-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  language === 'hi'
                    ? 'text-white font-semibold'
                    : 'text-[#FF6F00] font-medium hover:text-[#E55D00]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label="हिंदी में देखें"
              >
                हिन्दी
              </button>

              {/* English Button (Right) */}
              <button
                onClick={() => setLanguage('en')}
                className={`relative z-10 flex-1 h-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'text-white font-semibold'
                    : 'text-[#FF6F00] font-medium hover:text-[#E55D00]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label="View in English"
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
