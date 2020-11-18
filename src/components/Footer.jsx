import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Footer extends Component {
  render() {
    return (
      <div fixed="bottom">
        <Container>
          <Row>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem neque quaerat veritatis repellat rerum voluptatum
              earum voluptatem recusandae tenetur explicabo, at amet iure a ea
              corrupti quo quis, odio praesentium!
            </Col>
            <Col>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus dolor earum pariatur eos modi possimus molestias quos.
              Aliquid repudiandae doloribus inventore cum consectetur obcaecati
              esse nemo, voluptatibus explicabo aperiam sapiente.
            </Col>
            <Col>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              quo hic itaque consequatur sapiente doloribus sed accusantium a
              ad, reprehenderit nulla quia, commodi rem facilis nesciunt fugiat
              recusandae minus! Omnis.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
