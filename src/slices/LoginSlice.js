import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuthorized: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAwaiting: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.error = "";
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginAwaiting, loginSuccess, loginFail } = actions;

export default reducer;
