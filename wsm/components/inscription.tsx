import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./inscription.css";

interface User {
  nom?: string,
  prenom?: string,
  email: string,
  mots_de_passe: string,
}

export default function Inscription() {
  const [user, setUser] = useState({ nom: "", prenom: "", email: "", mots_de_passe: "" });
  const [password, setPassword] = useState("");

  function validateForm() {
    return user?.email.length > 0 && user?.mots_de_passe.length > 0 && user?.mots_de_passe === password;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("/api/authentification/inscription", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then((result) => {
        window.location.href = 'http://localhost:3000/';
      }).catch((e) => alert(e));
  }

  return (
    <div className="Inscription">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            autoFocus
            type="nom"
            value={user.nom}
            onChange={(e) => setUser({ ...user, nom: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="prenom"
            value={user.prenom}
            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Courriel</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={user.mots_de_passe}
            onChange={(e) => setUser({ ...user, mots_de_passe: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Confirmer mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block type="submit" disabled={!validateForm()}>
          Créer Compte
        </Button>
      </Form>
    </div>
  );
}
