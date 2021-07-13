import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./consulter_widget.css";
import ModalAjouterWidget from "./modal_ajout_widget";
import AccordeonWidget from "./accordeon_widget";

declare var require: any

export default function ConsulterWidget() {

    const defaultModalState = {
        show: false,
        type: ""
    }

    const [listeGestionContact, setListeGestionContact] = useState();
    const [listeGestionTache, setListeGestionTache] = useState();
    const [listeGestionBanque, setListeGestionBanque] = useState();

    const [estModalVisible, setEstModalVisible] = useState(defaultModalState);

    const obtenirListeSelonType = (type) => {
        switch(type){
            case "GestionContact": return listeGestionContact;
            case "GestionTache": return listeGestionTache;
            case "GestionBanque": return listeGestionBanque;
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
            onHide={() => setEstModalVisible(defaultModalState)}
        />

        <Container id="container-widget-contact">
            <AccordeonWidget
                titre={"Gestion de vos contacts"}
                listeElements={obtenirListeSelonType("GestionContact")}
                type="GestionContact"
                setEstModalVisible={setEstModalVisible}
            />
            <AccordeonWidget
                titre={"Gestion de vos tâches"}
                listeElements={obtenirListeSelonType("GestionContact")}
                type="GestionContact"
                setEstModalVisible={setEstModalVisible}
            />
            <AccordeonWidget
                titre={"Gestion de vos comptes bancaire"}
                listeElements={obtenirListeSelonType("GestionContact")}
                type="GestionContact"
                setEstModalVisible={setEstModalVisible}
            />
        </Container>
        </>
    )
}
