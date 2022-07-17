import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAwaiting: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    },
    userFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { userAwaiting, userSuccess, userFail } = actions;

export default reducer;
