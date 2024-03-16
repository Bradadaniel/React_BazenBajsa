import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationHU from './locales/hu/hu.json';
import translationSR from './locales/sr/sr.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      hu: {
        translation: translationHU,
      },
      sr: {
        translation: translationSR,
      },
    },
    lng: 'hu', 
    fallbackLng: 'hu', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;