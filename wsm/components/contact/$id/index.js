import React from "react";
import TableauDeContacts from "../tableau_de_contacts";
import "../contact.css";
import "../../commun/commun.css"

export default function Contact(test) {
    return (
        <div>
            <h1 className="header">Liste de Contacts</h1>
            <TableauDeContacts />
        </div>
    )
}