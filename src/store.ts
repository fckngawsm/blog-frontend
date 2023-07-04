import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { postReducer } from "./features/post/post-slice";
import { fullPustReducer } from "./features/fullPost/fullPost-slice";
import { authReducer } from "./features/auth/auth-slice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    fullPost: fullPustReducer,
    auth: authReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
