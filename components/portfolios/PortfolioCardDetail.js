import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PortfolioCardDetail extends React.Component {
  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <b>{portfolio.title}</b>
          </ModalHeader>
          <ModalBody>
            <p>
              <b>Description:</b>
              {portfolio.description}
            </p>
            <p>
              <b>Company:</b>
              {portfolio.company}
            </p>
            <p>
              <b>Position:</b>
              {portfolio.position}
            </p>
            <p>
              <b>Location:</b>
              {portfolio.location}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Back to Portfolio
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;
