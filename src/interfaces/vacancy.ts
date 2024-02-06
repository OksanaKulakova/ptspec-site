export default interface Vacancy {
  id: number;
  attributes: {
    title: string;
    slug: string;
    responsibilities: string;
    directionwork: string;
    requirements: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
