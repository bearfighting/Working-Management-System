import React, { useEffect, useState } from "react";
import { Card }  from 'react-bootstrap';
import "./profil.css";
import "../commun/commun.css";

export default function MotDePasse(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Card.Header>
                <h3>Mot de Passe</h3>
            </Card.Header>
            <Card className="p-3">
                <p>Text</p>
            </Card>
        </div>
    )
}
