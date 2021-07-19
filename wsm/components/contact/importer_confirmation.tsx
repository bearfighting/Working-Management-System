import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./contact.css";
import "./../commun/commun.css"

export default function ImporterConfirmation(props) {
    const { contacts, onHide } = props;

    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirmation de l'importation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {contacts && contacts.length > 0 &&
                        <div className="alert alert-success">
                            <h2>Voici les contacts qui ont été ajoutés</h2>
                            {contacts.map((contact) => (
                                <li>{contact.nom}, {contact.prenom} : {contact.courriel}</li>
                            ))}
                        </div>
                    }
                    {contacts && contacts.length === 0 &&
                        <div className="alert alert-warning">
                            <h2>Aucun contact n'a été ajoutés</h2>
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={onHide}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
