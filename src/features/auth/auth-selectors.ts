import { RootState } from "../../store";

export const currentUserSelectors = (state: RootState) => state.auth;
export const authUserSelectors = (state: RootState) => state.auth.user;
