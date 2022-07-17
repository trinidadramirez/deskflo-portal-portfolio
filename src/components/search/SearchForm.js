import React from 'react'
import {Form, Row, Col} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { filterTickets } from "../../actions/TicketsAction";

export const SearchForm = () => {
    const dispatch = useDispatch();

    const handleOnChange = e => {
        const { value } = e.target;
        dispatch(filterTickets(value));
    }

  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label className="text-start" column sm="3">Search: </Form.Label>
                <Col sm="20">
                    <Form.Control 
                    name="searchString"
                    placeholder="Search"
                    onChange={handleOnChange}
                    />
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}
