import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../../images/deskflo-logo.png";
import PropTypes from "prop-types";

export const LoginForm = ({ handleOnChange, handleOnSubmit, email, password }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={logo} width="50%" alt="DeskFlo Logo" />
          <h1 className="text-secondary fs-3">Customer Portal Login</h1>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <div className="text-start">
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
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}
