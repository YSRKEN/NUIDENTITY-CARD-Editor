import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import strings from "translations/strings.json";

// the translations
let resources = strings;

i18n
  .use(LanguageDetector) // language detection based on browser user-agent
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: ['en', 'zh-CN', 'ja'],
    debug: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;