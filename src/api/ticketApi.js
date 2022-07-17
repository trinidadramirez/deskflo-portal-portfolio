import axios from "axios";
const getSpecificTicketUrl = "http://localhost:3001/v1/ticket/";
const resolveTicketUrl = "http://localhost:3001/v1/ticket/resolve-ticket/";
const cancelTicketUrl = "http://localhost:3001/v1/ticket/cancel-ticket/";
const reopenTicketUrl = "http://localhost:3001/v1/ticket/reopen-ticket/";

export const getTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSpecificTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(getSpecificTicketUrl + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateReply = (_id, msgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(getSpecificTicketUrl + _id, msgObj, {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateTicketStatusToResolved = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        resolveTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateTicketStatusToCanceled = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        cancelTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateTicketStatusToReopened = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        reopenTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const createTicket = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(
        getSpecificTicketUrl,
        formData,
        {
          headers: {
            Authorization: sessionStorage.getItem("accessToken"),
          },
        },
      );
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
