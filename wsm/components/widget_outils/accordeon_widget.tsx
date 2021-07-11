import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./consulter_widget.css";
import { 
    contact_logo, 
    contact_logo_dashed, 
    tache_logo, 
    tache_logo_dashed,
    banque_logo,
    banque_logo_dashed,
} from "../../static"

const obtenirImageLogoSelonType = (type) => {
    switch(type){
        case "GestionContact": return contact_logo;
        case "GestionTache": return tache_logo;
        case "GestionBanque": return banque_logo;
    }
}

const obtenirDashedImageSelonType = (type) => {
    switch(type){
        case "GestionContact": return contact_logo_dashed;
        case "GestionTache": return tache_logo_dashed;
        case "GestionBanque": return banque_logo_dashed;
    }
}

export default function AccordeonWidget({listeElements, type, setEstModalVisible, titre}) {

    return (
        <Accordion className="accordion" defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <h2 className="header">{titre}</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                        {listeElements && listeElements.map((element, i) => (
                        <Col md={2} sm={3} xs={4} key={i}>
                            <a href={`/pages/contact/${element.id}`}>
                                <div className="widget-container" style={{backgroundColor: element.bg_couleur}}>
                                    <p>{element.titre}</p>
                                    <img src={obtenirImageLogoSelonType(type)} />
                                </div>
                            </a>
                        </Col>
                        ))}
                        <Col md={2} sm={3} xs={4}>
                            <div className="widget-container widget-container-ajout" onClick={() => setEstModalVisible({show:true, type: type})}>
                                <div className="fontAwesome">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <img src={obtenirDashedImageSelonType(type)} />
                            </div>
                        </Col>
                    </Row>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
