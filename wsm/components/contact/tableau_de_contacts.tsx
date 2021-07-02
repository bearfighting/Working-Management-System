import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table/";
import Button from "react-bootstrap/Button";
import { BsFillPersonPlusFill, BsFileEarmarkArrowDown, BsFileEarmarkArrowUp, BsFileEarmarkText, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import AjouterModifierContact from "./ajouter_modifier_contact";
import SupprimerContact from "./supprimer_contact";
import DetailContact from "./detail_contact";
import ImporterContact from "./importer_contact";
import ExporterContact from "./exporter_contact";
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
    const [modalAjouterShow, setModalAjouterShow] = useState(false);
    const [modalModifierShow, setModalModifierShow] = useState(false);
    const [modalSupprimerShow, setModalSupprimerShow] = useState(false);
    const [modalDetailShow, setModalDetailShow] = useState(false);
    const [modalImporterShow, setModalImporterShow] = useState(false);
    const [modalExporterShow, setModalExporterShow] = useState(false);

    return (
        <div className="contact">
            <div className="bouton-groupe">
                <Button className="bouton-ajouter" variant="success" onClick={() => setModalAjouterShow(true)}><BsFillPersonPlusFill className="icon-espacement-avec-texte"/>Ajouter</Button>
                <AjouterModifierContact
                    show={modalAjouterShow}
                    isAjouter={true}
                    onHide={() => setModalAjouterShow(false)}
                />
                <Button className="bouton-importer" variant="secondary" onClick={() => setModalImporterShow(true)}><BsFileEarmarkArrowDown className="icon-espacement-avec-texte"/>Importer</Button>
                <Button className="bouton-exporter" variant="secondary" onClick={() => setModalExporterShow(true)}><BsFileEarmarkArrowUp className="icon-espacement-avec-texte"/>Exporter</Button>
                <ImporterContact
                    show={modalImporterShow}
                    onHide={() => setModalImporterShow(false)}
                />
                <ExporterContact
                    show={modalExporterShow}
                    onHide={() => setModalExporterShow(false)}
                />
            </div>
            <div>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Nom de famille</th>
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
                                    <Button className="bouton-espacement" variant="outline-primary" onClick={() => setModalDetailShow(true)}><BsFileEarmarkText className="icon-espacement-sans-texte"/></Button>
                                    <Button className="bouton-espacement" variant="outline-primary" onClick={() => setModalModifierShow(true)}><BsPencilSquare className="icon-espacement-sans-texte"/></Button>
                                    <Button className="bouton-espacement" variant="outline-danger" onClick={() => setModalSupprimerShow(true)}><BsFillTrashFill className="icon-espacement-sans-texte"/></Button>
                                    <DetailContact
                                        contact={contact}
                                        show={modalDetailShow}
                                        onHide={() => setModalDetailShow(false)}
                                    />
                                    <AjouterModifierContact
                                        show={modalModifierShow}
                                        contact={contact}
                                        isAjouter={false}
                                        onHide={() => setModalModifierShow(false)}
                                    />
                                    <SupprimerContact
                                        show={modalSupprimerShow}
                                        contact={contact}
                                        onHide={() => setModalSupprimerShow(false)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
