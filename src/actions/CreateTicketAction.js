import {
  createTicketPending,
  createTicketSuccess,
  createTicketFail,
} from "../slices/CreateTicketSlice"
import { createTicket } from "../api/ticketApi";

export const createNewTicket = (formData) => dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(createTicketPending())
      const result = await createTicket(formData);

      if (result.status === "error") {
        return dispatch(createTicketFail(result.message))
      }
      dispatch(createTicketSuccess(result.message))
    } catch (error) {
      console.log(error);
      dispatch(createTicketFail(error.message));
    }
  })
}
