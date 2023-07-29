import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    myName: "Dmitry Fursov",
  },
  ru: {
    myName: "Дмитрий Фурсов",
  },
};

const i18n = createI18n({
  fallbackLocale: "en",
  messages,
});

export default i18n;
