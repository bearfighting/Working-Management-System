import React, { useEffect, useState } from "react";
import { Card }  from 'react-bootstrap';
import "./profil.css";
import "../commun/commun.css";

export default function Informations(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Card.Header>
                <h3>Informations personnelles</h3>
            </Card.Header>
            <Card className="p-3">
                <div>Avatar</div>
                <h3 className="">{profil.nom}</h3>
                <h4 className="">{profil.courriel}</h4>
                <p>
                    Adresse : {profil.adresse}<br/>
                    Telephone : {profil.telephone}<br/>
                </p>
            </Card>
            <Card className="p-3">
                <h3>Options</h3>
                <p>
                    Langue : {profil.langue}<br/>
                    Thème : {profil.theme}<br/>
                </p>
            </Card>
        </div>
    )
}
