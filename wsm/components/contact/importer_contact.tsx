import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./contact.css";

export default function ImporterContact(props) {
    const { onHide } = props;

    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Importer des contacts (CSV)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    En construction :P
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Importer</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
