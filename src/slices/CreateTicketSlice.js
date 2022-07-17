import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  success: "",
};

const createTicketSlice = createSlice({
  name: "createTicket",
  initialState,
  reducers: {
    createTicketPending: (state) => {
      state.isLoading = true;
    },
    createTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    createTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetMsg: (state) => {
      state.isLoading = true;
      state.success = "";
    },
  },
});

export const {
  createTicketPending,
  createTicketSuccess,
  createTicketFail,
  resetMsg,
} = createTicketSlice.actions

export default createTicketSlice.reducer
