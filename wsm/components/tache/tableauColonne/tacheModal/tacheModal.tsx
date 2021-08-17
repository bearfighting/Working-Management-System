import React, { useState } from 'react';
import { Modal, InputGroup, Button, Form, FormControl } from 'react-bootstrap';

export default function TacheModal({ handleAjouterCarte, show, setShow }) {
  const [titre, settitre] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    settitre("");
    setDescription("");
    setShow(false);
  }

  const handleSave = () => {
    handleAjouterCarte({ crt_titre: titre, crt_description: description });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une nouvelle carte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Titre de la carte</Form.Label>
          <Form.Control
            placeholder="Titre"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={titre}
            onChange={(e) => settitre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label id="basic-addon1">Description de la tâche</Form.Label>
          <Form.Control
            placeholder="Description"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
