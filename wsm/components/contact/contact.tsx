import React, { useEffect, useState } from "react";
import axios from "axios";
import TableauDeContacts from "./tableau_de_contacts";
import "./contact.css";
import "./../commun/commun.css"

export default function Contact({outilsId, userId}) {

    useEffect(() => {
        const fetchGestionContact = async () => {
            const response = await axios.get("http://localhost:3000/api/outils/gestion-contact/" + outilsId);
            setGestionContact(response.data);
        };
        fetchGestionContact();
    }, []);

    const [gestion_contact, setGestionContact] = useState();

    return (
        <div>
            <h1 className="header">{`Liste de Contacts : ${gestion_contact ? gestion_contact.titre : ""}`}</h1>
            <TableauDeContacts outilsId={outilsId} userId={userId}/>
        </div>
    )
}
