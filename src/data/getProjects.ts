import fetchApi from "@lib/strapi";
import type Project from "@interfaces/project";

export default async function getServises() {
  const projects = await fetchApi<Project[]>({
    endpoint: "projects",
    wrappedByKey: "data",
    query: { "fields[0]": "title", "fields[1]": "slug" },
  });

  const list = projects.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    href: `/projects/${item.attributes.slug}/`,
    slug: item.attributes.slug,
  }));

  return list;
}
