import { UserPostType } from "./User";

export type PostType = {
  _id: string;
  title: string;
  image: string;
  user: UserPostType;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
};
