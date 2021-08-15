import React, { useState } from 'react';
import { Modal, InputGroup, Button, FormControl } from 'react-bootstrap';

export default function TacheModal({ handleAjouterCarte, show, setShow }) {
  const [titre, settitre] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    settitre("");
    setDescription("");
    setShow(false);
  }

  const handleSave = () => {
    console.log("etat", titre, description);
    handleAjouterCarte({ crt_titre: titre, crt_description: description });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nouvelle Colonne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Nom</InputGroup.Text>
          <FormControl
            placeholder="colonne"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={titre}
            onChange={(e) => settitre(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Description de tâche</InputGroup.Text>
          <FormControl
            placeholder="colonne"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          fermer
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
