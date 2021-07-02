import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./contact.css";

export default function SupprimerContact(props) {
    const { contact, onHide } = props;

    function onSupprimer() {
        //console.log(contact);
    }

    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Supprimer un contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Contact : {contact.nom}, {contact.prenom} <br/><br/>
                    Voulez-vous vraiment supprimer ce contact? Ce processus ne peut pas être annulé.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={onSupprimer}>Supprimer</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
