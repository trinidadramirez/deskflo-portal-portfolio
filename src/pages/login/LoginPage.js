import React, { useState } from "react";
import { LoginForm } from "../../components/login/LoginForm";

import "../../styles/LoginPage.css";
import "../../styles/deskFloColor.css";
import "../../App.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    alert("Form submitted!");
  };

  return (
    <div className="login-page bg-deskflo-color">
      <div className="jumbotron jumbotron-width">
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          password={password}
        />
      </div>
    </div>
  );
};
