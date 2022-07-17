import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { MyTicketsTable } from "../../components/my-tickets/MyTicketsTable";
import { Bread } from "../../components/breadcrumb/Breadcrumb";
import { SearchForm } from "../../components/search/SearchForm";
import { useDispatch } from "react-redux";
import { fetchTickets } from '../../actions/TicketsAction';
import "../../App.css";

export const MyTicketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <Bread page="My Tickets" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="text-start">
          </div>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <MyTicketsTable />
        </Col>
      </Row>
    </Container>
  )
}
