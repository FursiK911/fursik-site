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
    passionTitle: "What i do",
    passionPart1Title: "Development",
    passionPart1Description:
      "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
    experienceTitle: "EXPERIENCE",
    experienceSubtitle: "I've been doing web development for about 3 years now, and I'm always eager to learn more in this fast paced industry.",
    experienceTechnology: "SOME TECHNOLOGIES I'VE WORKED WITH:",
    experienceWork: "WHERE I'VE WORKED:",
    checkResumeTitle: "CHECK OUT MY RÉSUMÉ!",
    checkResumeButton: "Grab a copy!",
    workSectionTitle: "WHAT I'VE DONE",
    workSectionSubtitle: "(more coming soon)",
    contactSectionTitle: "GET IN TOUCH!",
    contactSectionSubtitle: "Whether you have an idea for a project or just want to chat, feel free to shoot me an email!",
    contactSectionButton: "Say Hello!",
  },
  ru: {
    myName: "Дмитрий Фурсов",
    myUniversity: "Донецкий государственный университет",
    helloBannerTitle: "Приветствую! Я Дмитрий Фурсов",
    helloBannerSubtitle: "Frontend разработчик",
    aboutMeTitle: "Немного обо мне",
    aboutMePart1Text: "Привет! Меня зовут Дмитрий Фурсов. Я окончил",
    aboutMePart2Text:
      "с магистерской степенью в области информатики и вычислительной техники. Программирование - моя страсть и призвание. Я стремлюсь построить успешную карьеру в сфере IT-технологий, и каждый день радуюсь возможности творить и создавать через код. В свободное время я наслаждаюсь игрой в компьютерные игры, поддерживаю активный образ жизни, а также люблю гулять на свежем воздухе, наслаждаясь красотой окружающего мира.",
    aboutMePart3Text:
      "Благодарю за визит на мою страницу. Я надеюсь, что вы узнали обо мне немного больше!",
    aboutMeShortTitle: "Резюмируя:",
    passionTitle: "Чем я занимаюсь",
    passionPart1Title: "Development",
    passionPart1Description:
      "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
    experienceTitle: "Опыт",
    experienceSubtitle: "I've been doing web development for about 3 years now, and I'm always eager to learn more in this fast paced industry.",
    experienceTechnology: "ТЕХНОЛОГИИ, С КОТОРЫМИ Я РАБОТАЛ:",
    experienceWork: "WHERE I'VE WORKED:",
    checkResumeTitle: "Посмотрите на мое резюме!",
    checkResumeButton: "Взять копию!",
    workSectionTitle: "WHAT I'VE DONE",
    workSectionSubtitle: "(more coming soon)",
    contactSectionTitle: "СВЯЖИТЕСЬ СО МНОЙ!",
    contactSectionSubtitle: "Независимо от того, есть ли у вас идея для проекта или вы просто хотите пообщаться, не стесняйтесь, напишите мне по электронной почте!",
    contactSectionButton: "Поприветствовать!",
  },
};

const i18n = createI18n({
  fallbackLocale: "en",
  messages,
});

export default i18n;
