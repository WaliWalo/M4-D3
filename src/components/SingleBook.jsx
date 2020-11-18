import React from "react";
import { Card, Button } from "react-bootstrap";

import MyBadge from './MyBadge.jsx';

export default function SingleBook(prop) {

  let variant;
  if(prop.book.category === 'fantasy')
    variant = 'info';
  else if(prop.book.category === 'history')
    variant = 'warning'
  else if(prop.book.category === 'horror')
    variant = 'dark'
  else variant = 'light'

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.book.img} />
      <Card.Body>
        <Card.Title>{prop.book.title}</Card.Title>
        <Card.Text>{prop.book.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <MyBadge color={variant} category={prop.book.category}/>
      </Card.Body>
    </Card>
  );
}
