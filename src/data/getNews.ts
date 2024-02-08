import fetchApi from "@lib/strapi";
import type New from "@interfaces/new";
import replaceQuotes from "@utils/replaceQuotes";
import formatDate from "@utils/formatDate";

export default async function getNews() {
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
    },
  });

  const list = news.map((item) => ({
    id: item.id,
    title: replaceQuotes(item.attributes.title),
    href: `/news/${item.attributes.slug}/`,
    slug: item.attributes.slug,
    sign: formatDate(item.attributes.date),
  }));

  return list;
}
