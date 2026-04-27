import { useMemo, useState } from 'react';
import { portfolioContent } from '../data/portfolio';
import { LanguageContext } from './LanguageState';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  const value = useMemo(() => {
    const content = portfolioContent[language] || portfolioContent.en;

    return {
      content,
      language,
      toggleLanguage: () => {
        setLanguage((current) => {
          const next = current === 'en' ? 'de' : 'en';
          localStorage.setItem('portfolio-language', next);
          return next;
        });
      },
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
