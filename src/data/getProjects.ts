import fetchApi from "@lib/strapi";
import type Project from "@interfaces/project";
import replaceQuotes from "@utils/replaceQuotes";
import { defaultLang } from "@i18n/ui";
import { useTranslatedPath } from "@i18n/utils";
import type { lang } from "@i18n/ui";

export const prerender = false;

export default async function getProjects(locale: lang = defaultLang) {
  const projects = await fetchApi<Project[]>({
    endpoint: "projects",
    wrappedByKey: "data",
    query: {
      "fields[0]": "title",
      "fields[1]": "slug",
      "pagination[start]": "0",
      "pagination[limit]": "100",
      "sort[0]": "id",
      "locale": locale,
    },
  });

  const translatePath = useTranslatedPath(locale);
  const path = translatePath("/projects/");

  const list = projects.map((item) => ({
    id: item.id,
    title: replaceQuotes(item.attributes.title),
    href: `${path}${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
