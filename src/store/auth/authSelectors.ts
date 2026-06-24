import type { RootState } from "../app/store";

export const selectToken = (state: RootState) => state.auth.token;
export const selectIsAuth = (state: RootState) => !!state.auth.token;