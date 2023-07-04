import { RootState } from "../../store";

export const currentUserSelectors = (state: RootState) => state.auth;
