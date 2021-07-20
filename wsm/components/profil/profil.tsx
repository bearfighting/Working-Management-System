import React, { useEffect, useState } from "react";
import { Card, CardColumns }  from 'react-bootstrap';
import axios from "axios";
import "./profil.css";
import "../commun/commun.css";

export default function Profil({user}) {
    console.log(user); // email: "test@test.com" id: 1 nom: "mitesh"

    const temp = {
        id: user.id,
        nom: user.nom,
        courriel: user.email,
        adresse: "Narnia",
        telephone: "514-123-4567",
    };

    useEffect(() => {
        const fetchProfil = async () => {
            //const response = await axios.get("http://localhost:3000/api/profil/" + user.id);
            //setProfil(response.data);
            setProfil(temp);
        };
        fetchProfil();
    }, []);

    const [profil, setProfil] = useState(temp);

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
                    Langue : <br/>
                    Thème : <br/>
                </p>
            </Card>
        </div>
    )
}
