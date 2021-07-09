import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./consulter_widget.css";
import ModalAjouterWidget from "./modal_ajout_widget";

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
            const response = await axios.get("http://localhost:3000/api/outils");
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
                <Row>
                    <h2 className="header">Contact</h2>
                    {listeGestionContact && listeGestionContact.map((gestionContact) => (
                    <Col xs={2}>
                        <a href={`/pages/contact/${gestionContact.id}`}>
                            <div className="widget-container" style={{backgroundColor: gestionContact.bg_couleur}}>
                                <p>{gestionContact.titre}</p>
                                <img src={require('../../static/contact.png')} />
                            </div>
                        </a>
                    </Col>
                    ))}
                    <Col xs={2}>
                        <div className="widget-container widget-container-ajout" onClick={() => setEstModalVisible({show:true, type:"GestionContact"})}>
                            <div className="fontAwesome">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <img src={require('../../static/contact_dashed.png')} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h2 className="header">Tâche</h2>
                </Row>
                <Row>
                    <h2 className="header">Banque</h2>
                </Row>
            </Container>
        </>
    )
}
