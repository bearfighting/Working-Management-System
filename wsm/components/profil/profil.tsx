import React, { useEffect, useState } from "react";
import { Card, CardColumns }  from 'react-bootstrap';
import axios from "axios";
import "./profil.css";
import "../commun/commun.css";

export default function Profil() {

    const [profil, setProfil] = useState({});

    useEffect(() => {
        const fetchProfil = async () => {
            const response = await axios.get("http://localhost:3000/api/profil");
            console.log("response.data", response.data);
            setProfil(response.data);
        };
        fetchProfil();

    }, []);

    return (
        <div className="profil-card">
            <Card.Header>
                <div>Avatar</div>
                <h1 className="text-center header">{profil.nom}</h1>
                <h4 className="text-center header">{profil.courriel}</h4>
            </Card.Header>
            <Card className="text-center p-3">
                <h3>Informations générales</h3>
                <p>
                    Adresse : {profil.adresse}<br/>
                    Telephone : {profil.telephone}<br/>
                </p>
            </Card>
            <Card className="text-center p-3">
                <h3>Options</h3>
                <p>
                    Langue : {profil.langue}<br/>
                    Thème : {profil.theme}<br/>
                </p>
            </Card>
        </div>
    )
}
