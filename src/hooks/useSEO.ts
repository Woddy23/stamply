import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { seoData } from '../utils/seoData';

export function useSEO() {
  const location = useLocation();
  const { language } = useLanguage();
  const path = location.pathname;
  
  return seoData[path]?.[language] || seoData['/']?.[language] || {
    title: 'Stamply - Selos Digitais',
    description: 'Solução completa de selos digitais',
  };
}

