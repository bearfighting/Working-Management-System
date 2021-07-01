import React, { useState } from "react";
import Table from "react-bootstrap/Table/";
import Button from "react-bootstrap/Button";
import { BsFillPersonPlusFill, BsFileEarmarkArrowDown, BsFileEarmarkArrowUp, BsFileEarmarkText, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import "./contact.css";

export default function TableauDeContacts() {

    const listeDeContacts = [
        {
            id: 1,
            nomDeFamille: "Richer Stebenne",
            prenom: "Sébastien",
            courriel: "richer_stebenne.sebastien@uqam.ca",
            adresse:"123 Ave. Mordor",
            numeroTelephone:"555-555-5555",
        },
        {
            id: 2,
            nomDeFamille: "Xing",
            prenom: "Wenfeng",
            courriel: "xing.wenfeng@uqam.ca",
            adresse:"456 Rue. Hogwarts",
            numeroTelephone:"555-555-5555",
        },
        {
            id: 3,
            nomDeFamille: "Patel",
            prenom: "Miteshbai",
            courriel: "patel.miteshbai@uqam.com",
            adresse:"789 Boul. Westeros",
            numeroTelephone:"555-555-5555",
        },
    ];

    const [contacts, setContacts] = useState(listeDeContacts);

    return (
        <div className="contact">
            <div className="bouton-groupe">
                <Button className="bouton-ajouter" variant="success"><BsFillPersonPlusFill className="icon-espacement-avec-texte"/>Ajouter</Button>
                <Button className="bouton-importer" variant="secondary"><BsFileEarmarkArrowDown className="icon-espacement-avec-texte"/>Importer</Button>
                <Button className="bouton-exporter" variant="secondary"><BsFileEarmarkArrowUp className="icon-espacement-avec-texte"/>Exporter</Button>
            </div>
            <div>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Nom de Famille</th>
                            <th>Prénom</th>
                            <th>Courriel</th>
                            <th>Adresse</th>
                            <th>Numéro de téléphone</th>
                            <th style={{ width:"13%"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.nomDeFamille}</td>
                                <td>{contact.prenom}</td>
                                <td>{contact.courriel}</td>
                                <td>{contact.adresse}</td>
                                <td>{contact.numeroTelephone}</td>
                                <td>
                                    <Button className="bouton-espacement" variant="outline-primary"><BsFileEarmarkText className="icon-espacement-sans-texte"/></Button>
                                    <Button className="bouton-espacement" variant="outline-primary"><BsPencilSquare className="icon-espacement-sans-texte"/></Button>
                                    <Button className="bouton-espacement" variant="outline-danger"><BsFillTrashFill className="icon-espacement-sans-texte"/></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
