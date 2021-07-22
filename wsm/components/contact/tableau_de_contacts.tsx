import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table/";
import Button from "react-bootstrap/Button";
import { BsFillPersonPlusFill, BsFileEarmarkArrowDown, BsFileEarmarkArrowUp, BsFileEarmarkText, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import AjouterModifierContact from "./ajouter_modifier_contact";
import SupprimerContact from "./supprimer_contact";
import DetailContact from "./detail_contact";
import ImporterContact from "./importer_contact";
import "./contact.css";
import "./../commun/commun.css"
import { CSVLink } from "react-csv";

export default function TableauDeContacts({outilsId}) {

    useEffect(() => {
        const fetchContact = async () => {
            const response = await axios.get("http://localhost:3000/api/gestion-contact/tableau/" + outilsId);
            setContacts(response.data.contacts);
        };
        fetchContact();

    }, []);

    useEffect(() => {
        const fetchTableau = async () => {
            const response = await axios.get("http://localhost:3000/api/outils");
            setTableaux(response.data.gestion_contact);
        };
        fetchTableau();

    }, []);

    const defaultModalState = {
        show: false,
        contact: {}
    }

    const [contacts, setContacts] = useState([{}]);
    const [tableaux, setTableaux] = useState([{}]);
    const [modalAjouterShow, setModalAjouterShow] = useState(false);
    const [modalModifierShow, setModalModifierShow] = useState(defaultModalState);
    const [modalSupprimerShow, setModalSupprimerShow] = useState(defaultModalState);
    const [modalDetailShow, setModalDetailShow] = useState(defaultModalState)
    const [modalImporterShow, setModalImporterShow] = useState(false);

    return (
        <div className="contact">
            <>
                <DetailContact
                    contact={modalDetailShow.contact}
                    show={modalDetailShow.show}
                    onHide={() => setModalDetailShow(defaultModalState)}
                />
                <AjouterModifierContact
                    show={modalModifierShow.show}
                    contact={modalModifierShow.contact}
                    isAjouter={false}
                    onHide={() => setModalModifierShow(defaultModalState)}
                />
                <SupprimerContact
                    show={modalSupprimerShow.show}
                    contact={modalSupprimerShow.contact}
                    contacts={contacts}
                    onHide={() => setModalSupprimerShow(defaultModalState)}
                />
                <AjouterModifierContact
                    show={modalAjouterShow}
                    isAjouter={true}
                    contact={contacts}
                    tableaux={tableaux}
                    onHide={() => setModalAjouterShow(false)}
                />
            </>
            <div className="bouton-groupe">
                <Button className="bouton-ajouter" variant="success" onClick={() => setModalAjouterShow(true)}><BsFillPersonPlusFill className="icon-espacement-avec-texte"/>Ajouter</Button>
                <Button className="bouton-importer" variant="secondary" onClick={() => setModalImporterShow(true)}><BsFileEarmarkArrowDown className="icon-espacement-avec-texte"/>Importer</Button>
                <CSVLink data={contacts}><Button disabled={contacts.length == 0} className="bouton-exporter" variant="secondary"><BsFileEarmarkArrowUp className="icon-espacement-avec-texte"/>Exporter</Button></CSVLink>
                <ImporterContact
                    show={modalImporterShow}
                    contacts={contacts}
                    tableaux={tableaux}
                    outilsId={outilsId}
                    onHide={() => setModalImporterShow(false)}
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
                                    <Button className="bouton-espacement" variant="outline-primary" onClick={() => setModalDetailShow({show: true, contact: contact})}><BsFileEarmarkText className="icon-espacement-sans-texte"/></Button>
                                    <Button className="bouton-espacement" variant="outline-primary" onClick={() => setModalModifierShow({show: true, contact: contact})}><BsPencilSquare className="icon-espacement-sans-texte"/></Button>
                                    <Button className="bouton-espacement" variant="outline-danger" onClick={() => setModalSupprimerShow({show: true, contact: contact})}><BsFillTrashFill className="icon-espacement-sans-texte"/></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
