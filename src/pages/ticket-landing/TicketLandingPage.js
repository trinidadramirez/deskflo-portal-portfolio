import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Bread } from "../../components/breadcrumb/Breadcrumb";
import { MsgHist } from "../../components/message-history/MsgHist";
import { TicketReply } from "../../components/ticket-reply/TicketReply";
import { useParams } from "react-router-dom";
import { fetchSpecificTicket } from "../../actions/TicketsAction";
import { resetTicketLandingPageMsg } from "../../slices/TicketsSlice";

export const TicketLandingPage = () => {
  const dispatch = useDispatch();
  const { error, specificTicket, msgReplyError, replyMsg } = useSelector(
    (state) => state.tickets
  );

  const { ticketId } = useParams();

  useEffect(() => {
    dispatch(fetchSpecificTicket(ticketId));

    return () => {
      (msgReplyError || replyMsg) && dispatch(resetTicketLandingPageMsg());
    };
  }, [ticketId, dispatch, msgReplyError, replyMsg]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Bread page="Ticket" />
          </Col>
        </Row>
        <Row>
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          {msgReplyError && <Alert variant="danger">{msgReplyError}</Alert>}
          <div className="text-black text-start jumbotron bg-deskflo-color-no-vh">
            ID: {ticketId}
            <div className="requestor">
              Requestor: {specificTicket.requestor}
            </div>
            <div className="shortDescription">
              Short Description: {specificTicket.shortDescription}
            </div>
            <div className="date">
              Created Date:{" "}
              {specificTicket.createdDate &&
                new Date(specificTicket.createdDate).toLocaleString()}
            </div>
            <div className="status">Status: {specificTicket.status}</div>
          </div>
        </Row>
        <Row className="mt-3">
          <Col>
            {specificTicket.chat && <MsgHist msg={specificTicket.chat} />}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TicketReply _id={ticketId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};