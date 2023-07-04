import { UserPostType } from "./User";

export type PostType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: UserPostType;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
};
