import React from "react";
import { Card, Button } from "react-bootstrap";

export default function SingleBook(prop) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.book.img} />
      <Card.Body>
        <Card.Title>{prop.book.title}</Card.Title>
        <Card.Text>{prop.book.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
