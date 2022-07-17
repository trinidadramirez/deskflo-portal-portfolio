import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReply } from "../../actions/TicketsAction";
import PropTypes from "prop-types";

export const TicketReply = ({ _id }) => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message,
      sender: name,
    };
    dispatch(fetchReply(_id, msgObj));
    setMessage("");
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <div className="text-start">
          <Form.Label>Reply</Form.Label>
        </div>
        <Form.Control
          as="textarea"
          row="5"
          name="detail"
          value={message}
          onChange={handleOnChange}
        />
        <div className="text-end mt-3">
          <Button type="submit">Reply</Button>
        </div>
      </Form>
    </div>
  );
};

TicketReply.propTypes = {
  _id: PropTypes.string.isRequired,
};
