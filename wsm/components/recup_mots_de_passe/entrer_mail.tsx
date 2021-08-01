import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./entrer_mail.css";

export default function Entrer_Mail() {
  const [mailAdresse, setMailAdresse] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("/api/authentification/mailer", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: mailAdresse })
    })
      .then((result) => {
        window.location.href = 'http://localhost:3000/';
      }).catch((e) => alert(e));
  }

  return (
    <div className="Inscription">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Entrer votre adresse courriel</Form.Label>
          <Form.Control
            autoFocus
            type="nom"
            value={mailAdresse}
            onChange={(event) => { setMailAdresse(event.target.value) }}
          />
        </Form.Group>
        <Button block type="submit" disabled={false}>
          Envoyer votre courriel pour réinitialiser le mot de passe
        </Button>
      </Form>
    </div>
  )
}
