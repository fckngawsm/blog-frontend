export type UserPostType = {
  name: string;
  avatar: string;
  createdAt?: string;
};

export type UserType = {
  id: string;
  email: string;
  password: string;
  updatedAt: string;
} & UserPostType;
