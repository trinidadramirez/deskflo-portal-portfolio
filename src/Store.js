import { configureStore } from "@reduxjs/toolkit";
import ticketListReducer from "./slices/TicketsSlice";
import loginReducer from "./slices/LoginSlice";
import userReducer from "./slices/UserSlice";
import createTicketReducer from "./slices/CreateTicketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketListReducer,
    login: loginReducer,
    user: userReducer,
    createTicket: createTicketReducer,
  },
});

export default store;
