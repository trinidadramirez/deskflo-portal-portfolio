import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  msgReplyError: "",
  searchTicketList: [],
  specificTicket: {},
  replyMsg: "",
};

const newTicketsListSlice = createSlice({
  name: "ticketsList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTickets: (state, action) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!action.payload) return row;
        return row.shortDescription
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
    fetchSpecificTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSpecificTicketSuccess: (state, action) => {
      state.specificTicket = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchSpecificTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    replyLoading: (state) => {
      state.isLoading = true;
    },
    replySuccess: (state, action) => {
      state.isLoading = false;
      state.replyMsg = action.payload;
    },
    replyFail: (state, action) => {
      state.isLoading = false;
      state.msgReplyError = action.payload;
    },
    resolveTicketLoading: (state) => {
      state.isLoading = true;
    },
    resolveTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.replyMsg = action.payload;
    },
    resolveTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    cancelTicketLoading: (state) => {
      state.isLoading = true;
    },
    cancelTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.replyMsg = action.payload;
    },
    cancelTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    reopenTicketLoading: (state) => {
      state.isLoading = true;
    },
    reopenTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.replyMsg = action.payload;
    },
    reopenTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetTicketLandingPageMsg: (state) => {
      state.isLoading = false;
      state.msgReplyError = "";
      state.replyMsg = "";
    },
  },
});

const { reducer, actions } = newTicketsListSlice;

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
  fetchSpecificTicketLoading,
  fetchSpecificTicketSuccess,
  fetchSpecificTicketFail,
  replyLoading,
  replySuccess,
  replyFail,
  resolveTicketLoading,
  resolveTicketSuccess,
  resolveTicketFail,
  cancelTicketLoading,
  cancelTicketSuccess,
  cancelTicketFail,
  reopenTicketLoading,
  reopenTicketSuccess,
  reopenTicketFail,
  resetTicketLandingPageMsg,
} = actions;

export default reducer;
