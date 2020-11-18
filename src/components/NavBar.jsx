import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import books from "../data/fantasy.json";
import BookList from "./BookList.jsx";
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books,
    };
  }

  handleSearch = (query) => {
    if (query) {
      let filtered = books.filter((book) => {
        return book.title.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ books: filtered });
    } else {
      this.setState({ books: books });
    }
  };

  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => this.handleSearch(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <BookList books={this.state.books} />
      </>
    );
  }
}
export default NavBar;
