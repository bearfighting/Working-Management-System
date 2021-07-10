import React, {useState, useCallback} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BlockPicker } from 'react-color'
import "./../commun/commun";

const imgContact = require('../../static/contact.png');
const imgBanque = require('../../static/contact.png');
const imgTache = require('../../static/contact.png');

const obtenirTitreSelonType = (type) => {
    switch(type){
        case "GestionContact": return "Ajouter Contact";
        case "GestionTâche": return "Ajouter Tâche";
        case "GestionBanque": return "Ajouter Banque";
    }
}

const obtenirRouteAPIselonType = (type) => {
    switch(type){
        case "GestionContact": return "http://localhost:3000/api/outils/gestion-contact";
        case "GestionTâche": return "http://localhost:3000/api/outils/gestion-tache";
        case "GestionBanque": return "http://localhost:3000/api/outils/gestion-banque";
    }
}

const obtenirImageSelonType = (type) => {
    switch(type){
        case "GestionContact": return imgContact;
        case "GestionTâche": return imgBanque;
        case "GestionBanque": return imgBanque;
    }
}

export default function ModalAjouterWidget(props) {
    
    const { onHide, type, listeOutils } = props;

    
    const titreSection = obtenirTitreSelonType(type);
    const imageApercus = obtenirImageSelonType(type);

    const [titre, setTitre] = useState();
    const [couleur, setCouleur] = useState({background: '#fff'});

    function handleSubmit(event) {
        event.preventDefault();
    }
    
    function handleChangeComplete(color) {
        setCouleur({ background: color.hex });
    };

    const handlePost = useCallback( async (nouvelOutils) => {

        const urlPourPost = obtenirRouteAPIselonType(type);

        const {status, data} = await axios.post(urlPourPost, nouvelOutils);

        if(status >= 200 && status < 300){
            listeOutils.push(data);
            resetForm();
            onHide();
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [listeOutils, onHide]);

    function onSubmit() {
        const nouvelOutils = {
            // Va falloir changer ça pour l'id du tableau en question
            user_id: 1,
            titre: titre,
            bg_couleur: couleur.background
        }

        handlePost(nouvelOutils);
    }

    function resetForm(){
        setTitre("");
        setCouleur({background: '#fff'});
    }

    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {titreSection}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="titre">
                        <Form.Label>Le titre de l'outils</Form.Label>
                        <Form.Control
                            autoFocus
                            type="titre"
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}
                            maxLength="22"
                        />
                        </Form.Group>
                    </Form>
                    <div className="flex-container">
                    <div className="flex-child">
                        <div style={{margin: "auto", width: "170px"}}>
                        <BlockPicker  
                            color={ couleur.background }
                            onChangeComplete={ handleChangeComplete } 
                        />
                        </div>
                    </div>
                    <div className="flex-child">
                        <h2 style={{textAlign:"center", marginBottom: "25px"}}>Aperçu</h2>
                        <div className="widget-container" style={{backgroundColor: `${couleur.background}`}}>
                            <p>{titre}</p>
                            <img src={imageApercus} />
                        </div>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onSubmit}>Ajouter</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}