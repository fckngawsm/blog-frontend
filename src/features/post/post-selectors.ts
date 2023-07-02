import { RootState } from "../../store";

export const postsSelectors = (state: RootState) => state.posts.list;
