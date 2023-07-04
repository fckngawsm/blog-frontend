import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Extra } from "../../types/Extra";
import { StatusType } from "../../types/Status";
import { UserType } from "../../types/User";

type AuthInitialState = {
  user: UserType | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  user: null,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk<
  {},
  UserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/register",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.post(api.REGISTER_USER, data);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Ошибка");
    }
  }
);

const authSlice = createSlice({
  name: "@@auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "received";
        state.user = action.payload;
        console.log(action.payload, "action paylaod");
      });
  },
});

export const authReducer = authSlice.reducer;
