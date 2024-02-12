import { defaultLang } from "@i18n/ui";
import type { lang } from "@i18n/ui";

const formatDate = (date: string, locale: lang = defaultLang): string => {
  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const fDate: string = formatter.format(new Date(date));
  return fDate.replace(/г./g, "");
};

export default formatDate;
