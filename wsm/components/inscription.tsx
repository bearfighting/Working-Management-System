import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./inscription.css";

interface User {
  nom?: string,
  prenom?: string,
  email: string,
  password: string,
}

export default function Inscription() {
  const [user, setUser] = useState({ nom: "", prenom: "", email: "", password: "" });
  const [password, setPassword] = useState("");

  function validateForm() {
    return user?.email.length > 0 && user?.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Inscription">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            autoFocus
            type="nom"
            value={user.nom}
            onChange={(e) => setUser({ ...user, nom: e.target.value })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="prenom"
            value={user.prenom}
            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Courriel</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirmer mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Creer compte
        </Button>
      </Form>
    </div>
  );
}
