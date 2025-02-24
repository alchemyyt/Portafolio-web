import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEs from "./translations/es/global.json";
import translationEn from "./translations/en/global.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: translationEs,
    },
    en: {
      translation: translationEn,
    },
  },
  lng: "es", // Idioma predeterminado
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
