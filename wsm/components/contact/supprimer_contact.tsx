import React, { useCallback } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./contact.css";

export default function SupprimerContact(props) {
    const { contact, contacts, onHide } = props;

    const handleDelete = useCallback( async (contactId) => {
        const {status} = await axios.delete("http://localhost:3000/api/gestion-contact/contact/" + contactId);

        if(status >= 200 && status < 300){
            const index = contacts.indexOf(contact);
            contacts.splice(index, 1);
            onHide();
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [contact, contacts, onHide]);

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
                    <Button variant="danger" onClick={() => handleDelete(contact.id)}>Supprimer</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
