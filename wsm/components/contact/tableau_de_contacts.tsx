import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table/";
import Button from "react-bootstrap/Button";
import { BsFillPersonPlusFill, BsFileEarmarkArrowDown, BsFileEarmarkArrowUp, BsFileEarmarkText, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import "./contact.css";

export default function TableauDeContacts() {

    let listeDeContacts = [{}];

    useEffect(() => {

        const fetchContact = async () => {
            const response = await axios.get("http://localhost:3000/api/gestion-contact/tableau/1");
            setContacts(response.data.contacts);
        };
        fetchContact();
    }, []);

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
                        {contacts.map((contact, i) => (
                            <tr key={i}>
                                <td>{contact.nom}</td>
                                <td>{contact.prenom}</td>
                                <td>{contact.courriel}</td>
                                <td>{contact.adresse}</td>
                                <td>{contact.telephone}</td>
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
