import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./consulter_widget.css";
import ModalAjouterWidget from "./modal_ajout_widget";
import AccordeonWidget from "./accordeon_widget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAddressBook,
    faTasks,
    faCoins
  } from '@fortawesome/free-solid-svg-icons'

export default function ConsulterWidget() {

    const defaultModalState = {
        show: false,
        type: ""
    }

    const [listeGestionContact, setListeGestionContact] = useState();
    const [listeGestionTache, setListeGestionTache] = useState();
    const [listeGestionBanque, setListeGestionBanque] = useState();

    const [serviceSelectionner, setServiceSelectionner] = useState({titre:"", listeItem:[], type:""});

    const [estModalVisible, setEstModalVisible] = useState(defaultModalState);

    const obtenirListeSelonType = (type) => {

        console.log(listeGestionContact);

        switch(type){
            case "GestionContact": return listeGestionContact;
            case "GestionTache": return listeGestionTache;
            case "GestionBanque": return listeGestionBanque;
        }
    }

    const setServiceSelonType = (type) => {

        switch(type){
            case "GestionContact":
                setServiceSelectionner({
                    titre: "Gestion de vos contacts",
                    listeItem : listeGestionContact,
                    type: type
                });
            break;
            case "GestionTache":
                setServiceSelectionner({
                    titre: "Gestion de vos tâches",
                    listeItem : listeGestionTache,
                    type: type
                });
            break;
            case "GestionBanque":
                setServiceSelectionner({
                    titre: "Gestion de vos comptes",
                    listeItem : listeGestionBanque,
                    type: type
                });
            break;
        }
    }

    useEffect(() => {
        const fetchOutils = async () => {
            const response = await axios.get("http://localhost:3000/api/outils/1");
            setListeGestionContact(response.data.gestion_contact);
            setListeGestionTache(response.data.gestion_tache);
            setListeGestionBanque(response.data.gestion_banque);
        };
        fetchOutils();
    }, []);

    return (
        <>
        <ModalAjouterWidget
            type={estModalVisible.type}
            listeOutils={obtenirListeSelonType(estModalVisible.type)}
            show={estModalVisible.show}
            state={() => setEstModalVisible(defaultModalState)}
        />

        <div className="container-page-widget">

            <Card>
            <Card.Header><h2>Nos Services</h2></Card.Header>
            <Card.Body>
                <Row>
                    <Col md={2}>
                        <FontAwesomeIcon className={`service-icon contact-icon ${serviceSelectionner.type == "GestionContact" ? "icon-actif" : ""}`} onClick={() => setServiceSelonType("GestionContact")}icon={faAddressBook}/>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className={`service-icon tache-icon ${serviceSelectionner.type == "GestionTache" ? "icon-actif" : ""}`} onClick={() => setServiceSelonType("GestionTache")}icon={faTasks}/>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className={`service-icon banque-icon ${serviceSelectionner.type == "GestionBanque" ? "icon-actif" : ""}`} onClick={() => setServiceSelonType("GestionBanque")}icon={faCoins}/>
                    </Col>
                </Row>
            </Card.Body>
            </Card>

            {serviceSelectionner.type && (
                <AccordeonWidget
                titre={serviceSelectionner.titre}
                listeElements={serviceSelectionner.listeItem}
                type={serviceSelectionner.type}
                setEstModalVisible={setEstModalVisible}
                />
            )}
        </div>
        </>
    )
}
