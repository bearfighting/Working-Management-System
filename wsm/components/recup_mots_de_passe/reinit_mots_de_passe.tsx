import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./entrer_mail.css";

interface Reinit_mots_de_passe {
    id: String,
    mots_de_passe: String,
}

export default function Reinit_mots_de_passe({ url }) {
    console.log(url?.params?.id);
    const [reinit_mots_de_passe, setReinit_mots_de_passe] = useState({ id: url?.params?.id, mots_de_passe: "" });
    const [mots_de_passe_confirme, setMots_de_passe_confirme] = useState("");

    function validateForm() {
        return reinit_mots_de_passe?.mots_de_passe === mots_de_passe_confirme;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await fetch("/api/authentification/reinit_mots_de_passe", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reinit_mots_de_passe)
        })
            .then((result) => {
                window.location.href = 'http://localhost:3000/';
            }).catch((e) => alert(e));
    }

    return (
        <div className="Inscription">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        value={reinit_mots_de_passe.mots_de_passe}
                        onChange={(e) => setReinit_mots_de_passe({ ...reinit_mots_de_passe, mots_de_passe: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Confirmer mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        value={mots_de_passe_confirme}
                        onChange={(e) => setMots_de_passe_confirme(e.target.value)}
                    />
                </Form.Group>
                <Button block type="submit" disabled={!validateForm()}>
                    confirmer
                </Button>
            </Form>
        </div>
    )
}
