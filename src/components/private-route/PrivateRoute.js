import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../slices/LoginSlice";
import { getNewAccessToken } from "../../api/userApi";
import { getUserAccount } from "../../actions/UserAction";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const replaceAccessToken = async () => {
      const result = await getNewAccessToken();
      result && dispatch(loginSuccess());
    };

    !user._id && dispatch(getUserAccount());
    !sessionStorage.getItem("accessToken") &&
      localStorage.getItem("deskflo") &&
      replaceAccessToken();

    !isAuthorized &&
      sessionStorage.getItem("accessToken") &&
      dispatch(loginSuccess());
  }, [dispatch, isAuthorized, user._id]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthorized ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
