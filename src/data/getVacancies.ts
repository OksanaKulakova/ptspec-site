import fetchApi from "@lib/strapi";
import type Vacancy from "@interfaces/vacancy";
import replaceQuotes from "@utils/replaceQuotes";
import { defaultLang } from "@i18n/ui";
import { useTranslatedPath } from "@i18n/utils";
import type { lang } from "@i18n/ui";

export default async function getvacancys(locale: lang = defaultLang) {
  const vacancies = await fetchApi<Vacancy[]>({
    endpoint: "vacancies",
    wrappedByKey: "data",
    query: {
      "fields[0]": "title",
      "fields[1]": "slug",
      "sort[0]": "id",
      "locale": locale,
    },
  });

  const translatePath = useTranslatedPath(locale);
  const path = translatePath("/career/");

  const list = vacancies.map((item) => ({
    id: item.id,
    title: replaceQuotes(item.attributes.title),
    href: `${path}${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
