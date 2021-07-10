import React, { useState } from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./consulter_widget.css";

declare var require: any

export default function AccordeonWidget({listeElements, type, setEstModalVisible, titre}) {

    return (

        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <h2 className="header">{titre}</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>

                    <Row>
                        {listeElements && listeElements.map((element) => (
                        <Col md={2} sm={3} xs={4}>
                            <a href={`/pages/contact/${element.id}`}>
                                <div className="widget-container" style={{backgroundColor: element.bg_couleur}}>
                                    <p>{element.titre}</p>
                                    <img src={require('../../static/contact.png')} />
                                </div>
                            </a>
                        </Col>
                        ))}
                        <Col md={2} sm={3} xs={4}>
                            <div className="widget-container widget-container-ajout" onClick={() => setEstModalVisible({show:true, type: type})}>
                                <div className="fontAwesome">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <img src={require('../../static/contactDashed.png')} />
                            </div>
                        </Col>
                    </Row>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
