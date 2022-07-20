import axios from "axios";

const loginUrl = "https://deskflo-portal.herokuapp.com/user/login-portal";
const userAccountUrl = "https://deskflo-portal.herokuapp.com/user";
const userLogoutUrl = "https://deskflo-portal.herokuapp.com/user/logout";
const newAccessTokenUrl = "https://deskflo-portal.herokuapp.com/token";

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, formData);
      resolve(res.data);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem(
          "deskflo",
          JSON.stringify({ refreshToken: res.data.refreshToken })
        );
      }
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const getUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(userAccountUrl, {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error.message);
    }
  });
};

export const getNewAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshToken } = JSON.parse(localStorage.getItem("deskflo"));

      if (!refreshToken) {
        reject("No token available");
      }
      const res = await axios.get(newAccessTokenUrl, {
        headers: {
          Authorization: refreshToken,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessToken", res.data.accessToken);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("deskflo");
      }
      reject(false);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(userLogoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};