import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./consulter_widget.css";
import "../commun/commun.css";
import { 
    contact_logo, 
    contact_logo_dashed, 
    tache_logo, 
    tache_logo_dashed,
    banque_logo,
    banque_logo_dashed,
} from "../../static"

import user_icon from "../../static/gestion_contact";

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
        <Card className="nos-services">
        <Card.Header><h2 className="header">{titre}</h2></Card.Header>
        <Card.Body>
            <Row className="flex-container">
                    {listeElements && listeElements.map((element, i) => (
                    <div key={i} className="flex-child">
                        <a href={`/pages/contact/${element.id}`}>
                            <div className="widget-container" style={{backgroundColor: element.bg_couleur}}>
                                {type === "GestionContact" && (
                                    <>
                                    <p>{element.titre}</p>
                                    <img className="icon-gauche" src={user_icon[element.icon_gauche]} />
                                    <img className="icon-milieu" src={user_icon[element.icon_millieu]} />
                                    <img className="icon-droite" src={user_icon[element.icon_droite]} />
                                    </>
                                )}
                                {type !== "GestionContact" && (
                                    <>
                                    <p>{element.titre}</p>
                                    <img className="type-image" src={obtenirImageLogoSelonType(type)} />
                                    </>
                                )}
                            </div>
                        </a>
                    </div>
                    ))}
                    <div className="flex-child">
                        <div className="widget-container widget-container-ajout" onClick={() => setEstModalVisible({show:true, type: type})}>
                            <div className="fontAwesome">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            {type === "GestionContact" && (
                                <>
                                <img className="icon-gauche" src={obtenirDashedImageSelonType(type)} />
                                <img className="icon-milieu" src={obtenirDashedImageSelonType(type)} />
                                <img className="icon-droite" src={obtenirDashedImageSelonType(type)} />
                                </>
                            )}
                            {type !== "GestionContact" && (
                                <>
                                <img className="type-image" src={obtenirDashedImageSelonType(type)} />
                                </>
                            )}
                        </div>
                    </div>
                </Row>
        </Card.Body>
        </Card>
    )
}
