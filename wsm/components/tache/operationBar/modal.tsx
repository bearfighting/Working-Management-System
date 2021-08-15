import React, { useState } from 'react';
import { Modal, InputGroup, Button, FormControl } from 'react-bootstrap';
export default function NouvelleColonneModal({ handleJouterColonne, show, setShow }) {
  const [nomColonne, setNomColonne] = useState("");

  const handleClose = () => {
    setNomColonne("");
    setShow(false);
  }

  const handleSave = () => {
    console.log("handlesave");
    handleJouterColonne(nomColonne);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nouvelle Colonne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Nom de colonne</InputGroup.Text>
          <FormControl
            placeholder="colonne"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={nomColonne}
            onChange={(e) => setNomColonne(e.target.value)}
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
