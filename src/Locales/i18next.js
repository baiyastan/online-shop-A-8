import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./en/translation.json";
import translationRu from "./ru/translation.json";
import translationKy from "./ky/translation.json";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    ky: {
      translation: translationKy,
    },
  },
});

export default i18n;
