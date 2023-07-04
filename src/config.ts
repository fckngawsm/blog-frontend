const BASE_URL = "http://localhost:4444/";

export const ALL_POSTS = BASE_URL + "posts";
export const LAST_TAGS = BASE_URL + "posts/tags";
export const POST_BY_ID = (id: string) => BASE_URL + `posts/${id}`;
