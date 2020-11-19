import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import AddComment from "./AddComment";
import Comment from "./Comment";
class MyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Comments
            </Modal.Title>
          </Modal.Header>
          <Comment bookid={this.props.bookid} />
          <AddComment bookid={this.props.bookid} />
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default MyModal;
