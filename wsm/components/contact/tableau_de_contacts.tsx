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

import user_icon from "../../static/user_icon";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMobileAlt,
    faAt,
    faHouseUser
  } from '@fortawesome/free-solid-svg-icons'

export default function TableauDeContacts({outilsId, titre}) {

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
            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">{titre}</h5>
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
                    <div className="row">
                        {contacts.map((contact, i) => ( 
                        <div className="col-sm-12 col-md-6 col-lg-4" key={i}>
                            <div className="image-flip" >
                                <div className="mainflip flip-0">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={user_icon[`${contact.profil_icon}`]} alt="card image" /></p>
                                                <h4 className="card-title">{contact.nom}<br/>{contact.prenom}</h4>
                                                {contact.telephone && (
                                                    <p className="card-text">
                                                        <FontAwesomeIcon icon={faMobileAlt} />
                                                        {contact.telephone}
                                                    </p>
                                                )}
                                                {contact.courriel && (
                                                    <p className="card-text">
                                                        <FontAwesomeIcon icon={faAt} />
                                                        {contact.courriel}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {/*https://bootsnipp.com/snippets/92xNm */}
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">{contact.nom}<br/>{contact.prenom}</h4>
                                                {contact.telephone && (
                                                    <p className="card-text">
                                                        <FontAwesomeIcon icon={faMobileAlt} />
                                                        <a href={`tel:${contact.telephone}`}>{contact.telephone}</a>
                                                    </p>
                                                )}
                                                {contact.courriel && (
                                                    <p className="card-text">
                                                        <FontAwesomeIcon icon={faAt} />
                                                        <a href={`mailto:${contact.courriel}`}>{contact.courriel}</a>
                                                    </p>
                                                )}
                                                {contact.adresse && (
                                                    <p className="card-text">
                                                        <FontAwesomeIcon icon={faHouseUser} />
                                                        {contact.adresse}
                                                    </p>
                                                )}
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <Button className="bouton-espacement" variant="outline-primary" onClick={() => setModalDetailShow({show: true, contact: contact})}><BsFileEarmarkText className="icon-espacement-sans-texte"/></Button>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Button className="bouton-espacement" variant="outline-primary" onClick={() => setModalModifierShow({show: true, contact: contact})}><BsPencilSquare className="icon-espacement-sans-texte"/></Button>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Button className="bouton-espacement" variant="outline-danger" onClick={() => setModalSupprimerShow({show: true, contact: contact})}><BsFillTrashFill className="icon-espacement-sans-texte"/></Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
