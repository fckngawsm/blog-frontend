import { UserPostType } from "./User";

export type PostType = {
  _id: string;
  title: string;
  imageUrl: string;
  user: UserPostType;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
};
