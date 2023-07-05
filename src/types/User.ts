export type UserPostType = {
  name?: string;
  avatar?: string;
  createdAt?: string;
  _id?: string;
};

export type UserType = {
  email?: string;
  password?: string;
  updatedAt?: string;
} & UserPostType;
