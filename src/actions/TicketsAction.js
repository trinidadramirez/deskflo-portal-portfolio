import {
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
} from "../slices/TicketsSlice";

import {
  getTickets,
  getSpecificTicket,
  updateReply,
  updateTicketStatusToResolved,
  updateTicketStatusToCanceled,
  updateTicketStatusToReopened,
} from "../api/ticketApi";

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getTickets();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterTickets = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

export const fetchSpecificTicket = (_id) => async (dispatch) => {
  dispatch(fetchSpecificTicketLoading());

  try {
    const result = await getSpecificTicket(_id);

    dispatch(
      fetchSpecificTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSpecificTicketFail(error.message));
  }
};

// Fetch reply and display on ticket
export const fetchReply = (_id, msgObj) => async (dispatch) => {
  dispatch(replyLoading());

  try {
    const result = await updateReply(_id, msgObj);
    console.log(result);

    if (result.status === "error") {
      return dispatch(replyFail(result.message));
    }
    dispatch(fetchSpecificTicket(_id));
    dispatch(replySuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(replyFail(error.message));
  }
};

// Resolve selected ticket
export const resolveTicket = (_id) => async (dispatch) => {
  dispatch(resolveTicketLoading());

  try {
    const result = await updateTicketStatusToResolved(_id);
    console.log(result);

    if (result.status === "error") {
      return dispatch(resolveTicketFail(result.message));
    }
    dispatch(fetchSpecificTicket(_id));
    dispatch(resolveTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(resolveTicketFail(error.message));
  }
};

// Cancel selected ticket
export const cancelTicket = (_id) => async (dispatch) => {
  dispatch(cancelTicketLoading());

  try {
    const result = await updateTicketStatusToCanceled(_id);
    console.log(result);

    if (result.status === "error") {
      return dispatch(cancelTicketFail(result.message));
    }
    dispatch(fetchSpecificTicket(_id));
    dispatch(cancelTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(cancelTicketFail(error.message));
  }
};

// Reopen selected ticket
export const reopenTicket = (_id) => async (dispatch) => {
  dispatch(reopenTicketLoading());

  try {
    const result = await updateTicketStatusToReopened(_id);
    console.log(result);

    if (result.status === "error") {
      return dispatch(reopenTicketFail(result.message));
    }
    dispatch(fetchSpecificTicket(_id));
    dispatch(reopenTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(reopenTicketFail(error.message));
  }
};
