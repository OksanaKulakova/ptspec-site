import fetchApi from "@lib/strapi";
import type Service from "@interfaces/service";

export default async function getServises() {
  const services = await fetchApi<Service[]>({
    endpoint: "services",
    wrappedByKey: "data",
    query: { 
      "fields[0]": "title", 
      "fields[1]": "slug", 
      "sort[0]": "id",
    },
  });

  const list = services.map((item: Service) => ({
    id: item.id,
    title: item.attributes.title,
    href: `/services/${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
