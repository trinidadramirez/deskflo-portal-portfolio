import React, { useState } from "react";
import { LoginForm } from "../../components/login/LoginForm";

import "../../styles/LoginPage.css";
import "../../styles/deskFloColor.css";
import "../../App.css";

export const LoginPage = () => {
  const [formLoad, setFormLoad] = useState("Login");

  const changeForm = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="login-page bg-deskflo-color">
      <div className="jumbotron jumbotron-width">
        {formLoad === "Login" && <LoginForm changeForm={changeForm} />}
      </div>
    </div>
  );
};
