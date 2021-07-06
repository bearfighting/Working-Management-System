import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";

export default function AjouterModifierContact(props) {
    const { contact, onHide} = props;
    const { isAjouter, ...reste } = props;

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [courriel, setCourriel] = useState();
    const [adresse, setAdresse] = useState();
    const [telephone, setTelephone] = useState();

    const [isCourrielValid, setIsCourrielValid] = useState(true);
    const [isTelephoneValid, setIsTelephoneValid] = useState(true);

    useEffect(() => {
        setNom(contact?.nom || "");
        setPrenom(contact?.prenom || "");
        setCourriel(contact?.courriel || "");
        setAdresse(contact?.adresse || "");
        setTelephone(contact?.telephone || "");
    }, [contact])

    const handlePatch = useCallback( async (contactId, nouveauContact) => {
        const {status, data} = await axios.patch("http://localhost:3000/api/gestion-contact/contact/" + contactId, nouveauContact);

        if(status >= 200 && status < 300){
            contact.nom = data.nom;
            contact.prenom = data.prenom;
            contact.courriel = data.courriel;
            contact.adresse = data.adresse;
            contact.telephone = data.telephone;

            onHide();
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [contact, onHide]);

    /**
     * Ya surement moyen de faire mieux
     */
    function resetForm(){
        setNom("");
        setPrenom("");
        setCourriel("");
        setAdresse("");
        setTelephone("");
    }

    const handlePost = useCallback( async (nouveauContact) => {
        const {status, data} = await axios.post("http://localhost:3000/api/gestion-contact/contact", nouveauContact);

        if(status >= 200 && status < 300){
            contact.push(data);
            resetForm();
            onHide();
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [contact, onHide]);

    function validerFormulaire() {
        return isCourrielValid && isTelephoneValid && courriel?.length > 0;
    }

    function validerCourriel(valeur) {
        const courrielValeur : String = valeur;
        const courrielRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        setIsCourrielValid(courrielValeur.length == 0 || courrielValeur.match(courrielRegex)?.length > 0);
    }

    function validerTelephone(valeur) {
        const telephoneValeur : String = valeur;
        const telephoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        setIsTelephoneValid(telephoneValeur.length == 0 || telephoneValeur.match(telephoneRegex)?.length > 0);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function onAjouterModifier() {
        const nouveauContact = {
            // Va falloir changer ça pour l'id du tableau en question
            id_tableau: 1,
            nom: nom,
            prenom: prenom,
            courriel: courriel,
            adresse: adresse,
            telephone: telephone,
        }

        if(isAjouter) {
            handlePost(nouveauContact);
        } else {
            handlePatch(contact.id, nouveauContact);
        }
    }

    return (
        <div>
            <Modal
                { ...reste }
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    {isAjouter? "Ajouter un nouveau contact":"Modifier un contact"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nom">
                        <Form.Label>Nom de famille</Form.Label>
                        <Form.Control
                            autoFocus
                            type="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="prenom">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="courriel">
                        <Form.Label>Courriel</Form.Label>
                        <Form.Control className={isCourrielValid ? "form-valide" : "form-invalide"}
                            type="courriel"
                            value={courriel}
                            onChange={(e) => {
                                setCourriel(e.target.value);
                                validerCourriel(e.target.value);
                            }}
                        />
                        {!isCourrielValid && (
                            <div className="erreur-form">
                                Le courriel n'est pas valide!
                            </div>
                        )}
                        </Form.Group>
                        <Form.Group controlId="adresse">
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            type="adresse"
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group controlId="telephone">
                        <Form.Label>Numéro de téléphone</Form.Label>
                        <Form.Control className={isTelephoneValid ? "form-valide" : "form-invalide"}
                            type="telephone"
                            value={telephone}
                            onChange={(e) => {
                                setTelephone(e.target.value);
                                validerTelephone(e.target.value);
                            }}
                        />
                        {!isTelephoneValid && (
                            <div className="erreur-form">
                                Le téléphone n'est pas valide!
                            </div>
                        )}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" disabled={!validerFormulaire()} onClick={onAjouterModifier}>{isAjouter ? "Ajouter" : "Modifier"}</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
