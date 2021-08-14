import React, { useState } from 'react';
import { Modal, InputGroup, Button, FormControl } from 'react-bootstrap';

export default function TacheModal({ show, setShow }) {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setNom("");
    setDescription("");
    setShow(false);
  }

  const handleSave = () => {

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
            value={nom}
            onChange={(e) => setNom(e.target.value)}
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
