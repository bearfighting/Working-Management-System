import React, { useEffect, useState } from "react";
import axios from "axios";
import TableauDeContacts from "./tableau_de_contacts";
import "./contact.css";
import "./../commun/commun.css";

export default function Contact({outilsId}) {

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
            <TableauDeContacts outilsId={outilsId} titre={gestion_contact?.titre}/>
        </div>
    )
}
