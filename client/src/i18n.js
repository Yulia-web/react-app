import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uk from './locales/uk/translation.json';
import en from './locales/en/translation.json'; 

let startLanguage = { language: window.navigator.language || window.navigator.userLanguage };
const defaultLanguage = startLanguage.language.split("-");
console.log(defaultLanguage[0]);
i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: defaultLanguage[0],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uk: {
        translation: uk
      },
      en: {
        translation: en
      }
    }
  });

export default i18n;