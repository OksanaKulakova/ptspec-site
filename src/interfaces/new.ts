export default interface New {
  id: number;
  attributes: {
    title: string;
    slug: string;
    date: string;
    introTitle: string;
    introText: string;
    blocks: any;
    picture: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
