import fetchApi from "@lib/strapi";
import type New from "@interfaces/new";
import replaceQuotes from "@utils/replaceQuotes";
import formatDate from "@utils/formatDate";
import { defaultLang } from "@i18n/ui";
import { useTranslatedPath } from "@i18n/utils";
import type { lang } from "@i18n/ui";

export const prerender = false;

export default async function getNews(locale: lang = defaultLang) {
  const news = await fetchApi<New[]>({
    endpoint: "news",
    wrappedByKey: "data",
    query: {
      "fields[0]": "title",
      "fields[1]": "slug",
      "fields[2]": "date",
      "pagination[start]": "0",
      "pagination[limit]": "100",
      "sort[0]": "date",
      "locale": locale,
    },
  });

  const translatePath = useTranslatedPath(locale);
  const path = translatePath("/news/");

  const list = news.map((item) => ({
    id: item.id,
    title: replaceQuotes(item.attributes.title),
    href: `${path}${item.attributes.slug}/`,
    slug: item.attributes.slug,
    sign: formatDate(item.attributes.date, locale),
  }));

  return list;
}
