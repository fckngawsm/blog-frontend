import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { postReducer } from "./features/post/post-slice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
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
