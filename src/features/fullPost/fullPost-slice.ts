import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { PostType } from "../../types/Post";
import { Extra } from "../../types/Extra";
import { StatusType } from "../../types/Status";

type FullPostState = {
  currentPost: PostType | null;
  status: StatusType;
  error: string | null;
};

const initialState: FullPostState = {
  currentPost: null,
  status: "idle",
  error: null,
};

export const getPostsById = createAsyncThunk<
  { data: PostType },
  string,
  { extra: Extra; rejectValue: string }
>(
  "@@posts/full-post",
  async (id, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.POST_BY_ID(id));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

const fullPostSlice = createSlice({
  name: "@posts/load-full-post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPostsById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || "cannot load data";
      })
      .addCase(getPostsById.fulfilled, (state, action) => {
        state.status = "received";
        state.currentPost = action.payload.data;
      });
  },
});

export const fullPustReducer = fullPostSlice.reducer;
