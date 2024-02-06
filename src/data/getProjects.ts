import fetchApi from "@lib/strapi";
import type Project from "@interfaces/project";
import replaceQuotes from "@utils/replaceQuotes";

export default async function getProjects() {
  const projects = await fetchApi<Project[]>({
    endpoint: "projects",
    wrappedByKey: "data",
    query: { 
      "fields[0]": "title", 
      "fields[1]": "slug",
      "pagination[start]": "0",
      "pagination[limit]": "100",
      "sort[0]": "id"
    },
  });

  const list = projects.map((item) => ({
    id: item.id,
    title: replaceQuotes(item.attributes.title),
    href: `/projects/${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
