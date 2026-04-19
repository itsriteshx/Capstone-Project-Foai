import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';
import bn from './locales/bn.json';
import ur from './locales/ur.json';
import gu from './locales/gu.json';
import pa from './locales/pa.json';
import ta from './locales/ta.json';
import te from './locales/te.json';
import kn from './locales/kn.json';
import ml from './locales/ml.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en.translation },
      hi: { translation: hi.translation },
      mr: { translation: mr.translation },
      bn: { translation: bn.translation },
      ur: { translation: ur.translation },
      gu: { translation: gu.translation },
      pa: { translation: pa.translation },
      ta: { translation: ta.translation },
      te: { translation: te.translation },
      kn: { translation: kn.translation },
      ml: { translation: ml.translation },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
