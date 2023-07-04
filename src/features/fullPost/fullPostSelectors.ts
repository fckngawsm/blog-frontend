import { RootState } from "../../store";

// export const postsInfoSelectors = (state: RootState) => ({
//   currentPost: state.fullPost.currentPost,
//   status: state.fullPost.status,
//   error: state.fullPost.error,
// });

export const currentPostSelector = (state: RootState) => state.fullPost.currentPost;
