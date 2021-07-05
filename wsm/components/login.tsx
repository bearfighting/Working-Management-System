import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

interface Login {
  email: String,
  mots_de_passe: String,
}

export default function Login() {
  const [login, setLogin] = useState({ email: "", mots_de_passe: "" });

  function validateForm() {
    return login.email.length > 0 && login.mots_de_passe.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("/api/authentification/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login)
    }).then((res) => {
      window.location.href = 'http://localhost:3000/';
    })
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={login.mots_de_passe}
            onChange={(e) => setLogin({ ...login, mots_de_passe: e.target.value })}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
