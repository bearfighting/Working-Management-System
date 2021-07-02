import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";

export default function AjouterModifierContact(props) {
    const { isAjouter, contact, onHide } = props;

    const [nom, setNom] = useState(isAjouter ? "" : contact.nom);
    const [prenom, setPrenom] = useState(isAjouter ? "" : contact.pronom);
    const [courriel, setCourriel] = useState(isAjouter ? "" : contact.courriel);
    const [adresse, setAdresse] = useState(isAjouter ? "" : contact.adresse);
    const [telephone, setTelephone] = useState(isAjouter ? "" : contact.telephone);


    function validerFormulaire() {
        return true;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function onAjouterModifier() {
        if(isAjouter) {
            console.log(nom);
            console.log(prenom);
            console.log(courriel);
            console.log(adresse);
            console.log(telephone);
        } else {
            console.log(contact.id);
            console.log(nom);
            console.log(prenom);
            console.log(courriel);
            console.log(adresse);
            console.log(telephone);
        }
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
                    {isAjouter? "Ajouter un nouveau contact":"Modifier un contact"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nom">
                        <Form.Label>Nom de famille</Form.Label>
                        <Form.Control
                            autoFocus
                            type="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="prenom">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="courriel">
                        <Form.Label>Courriel</Form.Label>
                        <Form.Control
                            type="courriel"
                            value={courriel}
                            onChange={(e) => setCourriel(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="adresse">
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            type="adresse"
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="telephone">
                        <Form.Label>Numéro de téléphone</Form.Label>
                        <Form.Control
                            type="telephone"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" disabled={!validerFormulaire()} onClick={onAjouterModifier}>Ajouter</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
