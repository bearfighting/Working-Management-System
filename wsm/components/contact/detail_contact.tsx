import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./contact.css";
import "./../commun/commun.css"

export default function DetailContact(props) {
    const { contact, onHide } = props;
    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Détails
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Nom : {contact.nom}<br/>
                    Prénom : {contact.prenom}<br/>
                    Courriel : {contact.courriel}<br/>
                    Adresse : {contact.adresse}<br/>
                    Numéro de téléphone : {contact.telephone}<br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={onHide}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
