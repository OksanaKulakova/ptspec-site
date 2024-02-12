import fetchApi from "@lib/strapi";
import type New from "@interfaces/mass-media";
import replaceQuotes from "@utils/replaceQuotes";
import formatDate from "@utils/formatDate";
import { defaultLang } from "@i18n/ui";
import type { lang } from "@i18n/ui";

export default async function getMassMedias(locale: lang = defaultLang) {
  const news = await fetchApi<New[]>({
    endpoint: "mass-medias",
    wrappedByKey: "data",
    query: {
      "pagination[start]": "0",
      "pagination[limit]": "100",
      "sort[0]": "date",
      "locale": locale,
    },
  });

  const list = news.map((item) => ({
    id: item.id,
    title: replaceQuotes(item.attributes.title),
    href: item.attributes.link,
    sign: `${formatDate(item.attributes.date)}  • ${replaceQuotes(item.attributes.source)}`,
    blank: true,
  }));

  return list;
}
