export type UserPostType = {
  fullName: string;
  avatarUrl: string;
  createdAt?: string;
};

export type UserType = {
  id: string;
  email: string;
  password: string;
  updatedAt: string;
} & UserPostType;
