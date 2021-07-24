import React, {useState, useCallback, useEffect} from "react";
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

import user_icon from "../../static/gestion_contact";

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
    console.log("ici :" + type);
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


const randomProfilIcon = (number) =>{
    switch(number){
        case 1: return "male_1";
        case 2: return "male_2";
        case 3: return "male_3";
        case 4: return "male_4";
        case 5: return "male_5";
        case 6: return "female_1";
        case 7: return "female_2";
        case 8: return "female_3";
        case 9: return "female_4";
        case 10: return "female_5";
        case 11: return "female_6";
        case 12: return "female_7";
        default: return "female_1";
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * (13 - 1)) + 1;
}

export default function ModalAjouterWidget({listeOutils, type, state, ...props}) {

    let defaultCouleur = getRandomColor();

    const [titre, setTitre] = useState("");
    const [couleur, setCouleur] = useState({background: defaultCouleur});

    const [combinaison_icon, setCombinaisonIcon] = useState({});

    function obtenirCombinaisonIcon(){

        const number1 = randomNumber();

        let number2 = number1;

        while(number2 == number1){
            number2 = randomNumber();
        }

        let number3 = number1;

        while(number3 == number1 || number3 == number2){
            number3 = randomNumber();
        }

        setCombinaisonIcon ({
            icon_gauche: randomProfilIcon(number1),
            icon_millieu: randomProfilIcon(number2),
            icon_droite: randomProfilIcon(number3),
        })

    }

    useEffect(() => {
        obtenirCombinaisonIcon();
      }, []);

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

        let nouvelOutils = {}

        if(type === "GestionContact"){
            nouvelOutils = {
                titre: titre,
                bg_couleur: couleur.background,
                icon: combinaison_icon,
            }    
        }else{
            nouvelOutils = {
                titre: titre,
                bg_couleur: couleur.background
            }
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
                            minLength="1"
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
                    <div className="flex-child" onClick={()=>obtenirCombinaisonIcon()}>
                        <h2 style={{textAlign:"center", marginBottom: "25px"}}>Aperçu</h2>
                        <div className="widget-container" style={{backgroundColor: `${couleur.background}`}}>
                            {type === "GestionContact" && (
                                <>
                                <p>{titre}</p>
                                <img className="icon-gauche" src={user_icon[combinaison_icon.icon_gauche]} />
                                <img className="icon-milieu" src={user_icon[combinaison_icon.icon_millieu]} />
                                <img className="icon-droite" src={user_icon[combinaison_icon.icon_droite]} />
                                </>
                            )}
                            {type !== "GestionContact" && (
                                <>
                                <p>{titre}</p>
                                <img className="type-image" src={obtenirImageSelonType(type)} />
                                </>
                            )}
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
