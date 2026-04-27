import { useContext } from 'react';
import { LanguageContext } from './LanguageState';

export function usePortfolio() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('usePortfolio must be used inside LanguageProvider');
  }

  return context;
}
