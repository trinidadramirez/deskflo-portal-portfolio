import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReply } from "../../actions/TicketsAction";
import PropTypes from "prop-types";
// import { io } from "socket.io-client";

export const TicketReply = ({ _id }) => {
  const dispatch = useDispatch();
  // const socket = io("http://localhost:3003");

  // socket.on("connect", () => {
      
  // });

  // socket.on("receive-msg", msg => {
    
  // })

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

    // socket.emit("send-msg", msgObj);
    dispatch(fetchReply(_id, msgObj));
    setMessage("");
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <div className="text-start">
          <Form.Label>Enter New Message</Form.Label>
        </div>
        <Form.Control
          as="textarea"
          row="5"
          name="detail"
          value={message}
          onChange={handleOnChange}
        />
        <div className="text-end mt-3">
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </div>
  );
};

TicketReply.propTypes = {
  _id: PropTypes.string.isRequired,
};
