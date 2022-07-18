import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import logo from "../../images/deskflo-logo.png";
import PropTypes from "prop-types";
import {
  loginAwaiting,
  loginSuccess,
  loginFail,
} from "../../slices/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import { useHistory } from "react-router-dom";
import { getUserAccount } from "../../actions/UserAction";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const hist = useHistory();
  const { isLoading, isAuthorized, error } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    sessionStorage.getItem("accessToken") && hist.push("/my-tickets");
  }, [hist, isAuthorized]);

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
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAwaiting());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserAccount());
      hist.push("/my-tickets");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <img src={logo} width="50%" alt="DeskFlo Logo" />
          <h1 id="customerLabel" className="text-secondary fs-3">Customer Portal Login</h1>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <div className="text-start">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Label className="text-secondary">
                  Email Address
                </Form.Label>
              </div>

              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <div className="text-start">
                <Form.Label className="text-secondary">Password</Form.Label>
              </div>

              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Button className="mt-2" type="submit">
              Log In
            </Button>
          </Form>
          {isLoading && <Spinner animation="border" />}
        </Col>
      </Row>
    </Container>
  );
};
