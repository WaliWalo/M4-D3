import React from "react";
import SingleBook from "./SingleBook.jsx";
import { Container, Row, Col } from "react-bootstrap";

export default function BookList(props) {
  return (
    <Container>
      <Row>
        {props.books.map((book, index) => {
          return (
            <Col key={index}>
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
