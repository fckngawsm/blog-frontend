import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";

export const store = configureStore({
  reducer: {},
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
