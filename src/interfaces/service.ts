export default interface Service {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    textTitle: string;
    text: string;
    result: string;
    projects: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
