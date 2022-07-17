import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNewTicket } from "../../actions/CreateTicketAction";
import { resetMsg } from "../../slices/CreateTicketSlice";

const initFormData = {
  requestor: "",
  shortDescription: "",
  date: "",
  longDescription: "",
};

const initFormError = {
  requestor: false,
  shortDescription: false,
  date: false,
  longDescription: false,
};

export const CreateTicketForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initFormData);
  const [formDataError, setFormDataError] = useState(initFormError);
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const { error, success } = useSelector((state) => state.createTicket);

  useEffect(() => {
    return () => {
      success && dispatch(resetMsg())
    }
  }, [formData, formDataError, dispatch, success]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    dispatch(
      createNewTicket({
        ...formData,
        sender: name,
        message: "Enter new messages here",
      })
    );
  };

  return (
    <div className="jumbotron jumbotron-width">
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
      </div>
      <div className="m-4">
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" as={Row}>
          <div className="text-start">
            <Form.Label className="text-secondary">Requestor</Form.Label>
          </div>
          <Form.Control
            name="requestor"
            value={formData.requestor}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <div className="text-start">
            <Form.Label className="text-secondary">
              Short Description
            </Form.Label>
          </div>
          <Form.Control
            name="shortDescription"
            value={formData.shortDescription}
            maxLength="100"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <div className="text-start">
            <Form.Label className="text-secondary">Date</Form.Label>
          </div>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <div className="text-start">
            <Form.Label className="text-secondary">Description</Form.Label>
          </div>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <div>
          <Button className="mb-3 btn-primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      </div>
    </div>
  );
};
