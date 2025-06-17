import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUSTranslation from './locales/en_US.json';
import ptBRTranslation from './locales/pt_BR.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': {
        translation: enUSTranslation,
      },
      'en-PT': {
        translation: ptBRTranslation,
      },
    },
    fallbackLng: 'en-US',
    detection: {
      order: [
        'navigator',
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
