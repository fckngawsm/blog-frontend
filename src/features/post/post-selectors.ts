import { RootState } from "../../store";

// export const postsInfoSelectors = (state: RootState) => ({
//   posts: state.posts.list,
//   tags: state.posts.tags,
//   status: state.posts.status,
//   error: state.posts.error,
// });

export const postsSelectors = (state: RootState) => state.posts.list;
export const tagsSelectors = (state: RootState) => state.posts.tags;
export const postsStatusSelectors = (state: RootState) => state.posts.status;
