import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const Bread = ({ page }) => {
  return (
    <Breadcrumb>
        <Breadcrumb.Item>My Tickets</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};