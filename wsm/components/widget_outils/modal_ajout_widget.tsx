import React, {useState, useCallback} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BlockPicker } from 'react-color'
import "./../commun/commun";
import { 
    contact_logo, 
    tache_logo,
    banque_logo,
} from "../../static"

const obtenirTitreSelonType = (type) => {
    switch(type){
        case "GestionContact": return "Ajouter Contact";
        case "GestionTache": return "Ajouter Tâche";
        case "GestionBanque": return "Ajouter Banque";
    }
}

const obtenirRouteAPIselonType = (type) => {
    switch(type){
        case "GestionContact": return "http://localhost:3000/api/outils/gestion-contact";
        case "GestionTache": return "http://localhost:3000/api/outils/gestion-tache";
        case "GestionBanque": return "http://localhost:3000/api/outils/gestion-banque";
    }
}

const obtenirImageSelonType = (type) => {
    switch(type){
        case "GestionContact": return contact_logo;
        case "GestionTache": return tache_logo;
        case "GestionBanque": return banque_logo;
    }
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }


export default function ModalAjouterWidget({listeOutils, type, state, ...props}) {
    
    let defaultCouleur = getRandomColor();

    const [titre, setTitre] = useState("");
    const [couleur, setCouleur] = useState({background: defaultCouleur});

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
            handleClose();
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [listeOutils]);

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
        defaultCouleur = getRandomColor();
        setCouleur({background: defaultCouleur});
    }

    function handleClose(){
        state();
        resetForm();
    }

    return (
        <div>
            <Modal
                {...props}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {obtenirTitreSelonType(type)}
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
                            <img src={ obtenirImageSelonType(type)} />
                        </div>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onSubmit}>Ajouter</Button>
                    <Button variant="outline-primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}