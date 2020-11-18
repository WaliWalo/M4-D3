import React from "react";
import { Card, Button } from "react-bootstrap";

import MyBadge from './MyBadge.jsx';

class SingleBook extends React.Component{

  state = {
    selected: false
  }
  
  render(){

    let variant;
    if(this.props.book.category === 'fantasy')
      variant = 'info';
    else if(this.props.book.category === 'history')
      variant = 'warning'
    else if(this.props.book.category === 'horror')
      variant = 'dark'
    else variant = 'light'

    let handleClick = () => {
      this.setState({selected: !this.state.selected});
    }

    let cardStyle; 

    if(this.state.selected)
      cardStyle = {
        boxShadow: '2px 4px solid #444',
        color: '#bbb'
      }
    else cardStyle = {}

    return (
      <Card style={{ width: "18rem" }} onClick={handleClick}>
        <Card.Img variant="top" src={this.props.book.img} className={cardStyle} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <MyBadge color={variant} category={this.props.book.category}/>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;