import fetchApi from "@lib/strapi";
import type Vacancy from "@interfaces/vacancy";

export default async function getvacancys() {
  const vacancies = await fetchApi<Vacancy[]>({
    endpoint: "vacancies",
    wrappedByKey: "data",
    query: { 
      "fields[0]": "title", 
      "fields[1]": "slug",
      "sort[0]": "id"
    },
  });

  const list = vacancies.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    href: `/vacancies/${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
