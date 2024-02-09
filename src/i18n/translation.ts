import { defaultLang } from "@i18n/ui";

export default function useTranslations(lang: keyof typeof ui, ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}