export default interface MassMedia {
  id: number;
  attributes: {
    title: string;
    date: string;
    source: string;
    link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}