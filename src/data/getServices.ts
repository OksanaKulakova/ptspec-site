import fetchApi from "@lib/strapi";
import type Service from "@interfaces/service";
import { defaultLang } from "@i18n/ui";
import { useTranslatedPath } from "@i18n/utils";
import type { lang } from "@i18n/ui";

export const prerender = false;

export default async function getServises(locale: lang = defaultLang) {
  const services = await fetchApi<Service[]>({
    endpoint: "services",
    wrappedByKey: "data",
    query: {
      "fields[0]": "title",
      "fields[1]": "slug",
      "sort[0]": "id",
      "locale": locale,
    },
  });

  const translatePath = useTranslatedPath(locale);
  const path = translatePath("/services/");

  const list = services.map((item: Service) => ({
    id: item.id,
    title: item.attributes.title,
    href: `${path}${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
