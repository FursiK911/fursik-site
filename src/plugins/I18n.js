import { createI18n } from "vue-i18n";

const messages = {
  en: {
    myName: "Dmitry Fursov",
    myUniversity: "Donetsk State University",
    helloBannerTitle: "Hi, i`m Dmitry Fursov",
    helloBannerSubtitle: "Frontend Developer",
    aboutMeTitle: "A LITTLE BIT ABOUT ME",
    aboutMePart1Text: "Hey! My name is Dmitry Fursov. I graduated from",
    aboutMePart2Text:
      "with a master's degree in Computer Science and Information Technology. Programming is my passion and calling. I aspire to build a successful career in the IT industry, and every day, I find joy in the opportunity to create and bring ideas to life through code. In my free time, I enjoy playing computer games, maintaining an active lifestyle through sports, and taking leisurely walks outdoors, savoring the beauty of the surrounding world.",
    aboutMePart3Text:
      "Thank you for visiting my page. I hope you have learned a little more about me!",
    aboutMeShortTitle: "TL;DR?  SELF PROCLAMATIONS:",
  },
  ru: {
    myName: "Дмитрий Фурсов",
    myUniversity: "Донецкий государственный университет",
    helloBannerTitle: "Приветствую! Я Дмитрий Фурсов",
    helloBannerSubtitle: "Frontend разработчик",
    aboutMeTitle: "Немного обо мне",
    aboutMePart1Text: "Привет! Меня зовут Дмитрий Фурсов. Я окончил",
    aboutMePart2Text:
      "с магистерской степенью в области информатики и вычислительной техники. Программирование - моя страсть и призвание. Я стремлюсь построить успешную карьеру в сфере IT-технологий, и каждый день радуюсь возможности творить и создавать через код. В свободное время я наслаждаюсь игрой в компьютерные игры, поддерживаю активный образ жизни, а также люблю прогуливаться на свежем воздухе, наслаждаясь красотой окружающего мира.",
    aboutMePart3Text:
      "Благодарю за визит на мою страницу. Я надеюсь, что вы узнали обо мне немного больше!",
    aboutMeShortTitle: "Резюмируя:",
  },
};

const i18n = createI18n({
  fallbackLocale: "en",
  messages,
});

export default i18n;
