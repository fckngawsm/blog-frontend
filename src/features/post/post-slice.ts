import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { PostType } from "../../types/Post";
import { StatusType } from "../../types/Status";
import { Extra } from "../../types/Extra";

type PostsSlice = {
  status: StatusType;
  error: string | null;
  list: PostType[];
  tags: PostType["tags"];
};

const initialState: PostsSlice = {
  status: "idle",
  error: null,
  list: [],
  tags: [],
};

export const getAllPosts = createAsyncThunk<
  { data: PostType[] },
  undefined,
  { extra: Extra; rejectValue: string }
>(
  "@@posts/load-posts",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_POSTS);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

export const getLastTags = createAsyncThunk<
  { data: PostType["tags"] },
  undefined,
  { extra: Extra; rejectValue: string }
>(
  "@@posts/load-tags",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.LAST_TAGS);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

const postSlice = createSlice({
  name: "@post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || "cannot load data";
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      })
      .addCase(getLastTags.fulfilled, (state, action) => {
        state.status = "received";
        state.tags = action.payload.data;
      });
  },
});

export const postReducer = postSlice.reducer;
