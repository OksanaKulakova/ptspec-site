export type lang = 'ru' | 'en' ;

export const languages = {
  en: "English version",
  ru: "Русская версия",
};

export const defaultLang = "ru";

export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.company": "Company",
    "nav.career": "Career",
    "nav.news": "News",
    "nav.order": "Order service",
    "nav.contacts": "Contacts",

    "footer.contacts": "Contacts",
    "footer.address": "Address",
    "footer.city": "Perm city",
    "footer.srteet": "Mira 45a, Office 201",
    "footer.order": "Order service",
    "footer.order-sign": "We will contact you during business hours",
    "footer.company": "PERMTEKHSPETS LLC",
    "footer.link": "Organization passport [ pdf ]",

    "list.button": "Show more",
  },
  ru: {
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.projects": "Проекты",
    "nav.company": "Компания",
    "nav.career": "Карьера",
    "nav.news": "Журнал",
    "nav.order": "Заказать услугу",
    "nav.contacts": "Контакты",

    "footer.contacts": "Контакты",
    "footer.address": "Адрес",
    "footer.city": "Пермь",
    "footer.srteet": "Мира 45а, Офис 201",
    "footer.order": "Заказать услугу",
    "footer.order-sign": "Свяжемся с вами в течение <br> рабочего дня",
    "footer.company": "ООО «Пермьтехспец»",
    "footer.link": "Паспорт организации [ pdf ]",

    "list.button": "Показать еще",
  },
} as const;
