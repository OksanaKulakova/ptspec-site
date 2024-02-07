export default interface New {
  id: number;
  attributes: {
    title: string;
    slug: string;
    date: string;
    introTitle: string;
    introText: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
