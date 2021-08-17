import React, { useState } from 'react';
import { Modal, InputGroup, Button, Form, FormControl } from 'react-bootstrap';
export default function NouvelleColonneModal({ handleAjouterColonne, show, setShow }) {
  const [nomColonne, setNomColonne] = useState("");

  const handleClose = () => {
    setNomColonne("");
    setShow(false);
  }

  const handleSave = () => {
    handleAjouterColonne(nomColonne);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une nouvelle colonne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label id="basic-addon1">Nom de la colonne</Form.Label>
          <Form.Control
            placeholder="Nom"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={nomColonne}
            onChange={(e) => setNomColonne(e.target.value)}
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
