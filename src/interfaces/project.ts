export default interface Project {
  id: number;
  attributes: {
    title: string;
    slug: string;
    region: string;
    type: string;
    deadline: string;
    customer: string;
    services: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
