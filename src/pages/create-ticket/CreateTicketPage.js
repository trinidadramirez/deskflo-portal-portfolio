import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bread } from "../../components/breadcrumb/Breadcrumb";
import { CreateTicketForm } from "../../components/create-ticket/CreateTicketForm";

export const CreateTicketPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Bread page="Create Ticket" />
        </Col>
      </Row>
      <Row>
        <CreateTicketForm />
      </Row>
    </Container>
  );
};
