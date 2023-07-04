import { RootState } from "../../store";

export const postsInfoSelectors = (state: RootState) => ({
  posts: state.posts.list,
  tags: state.posts.tags,
  status: state.posts.status,
  error: state.posts.error,
});
