import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalEvent = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="modal-title">{props.title}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-container">
          <div className="col-md-6">
            <img src={props.image} width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <p>{props.text}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>{props.date} </Modal.Footer>
    </Modal>
  );
};

export default ModalEvent;
