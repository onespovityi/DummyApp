import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
};

const getToken = () =>
  localStorage.getItem("accessToken") ||
  sessionStorage.getItem("accessToken");

const initialState: AuthState = {
  token: getToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;