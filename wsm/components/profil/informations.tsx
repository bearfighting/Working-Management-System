import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Button, Container, Divider, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./profil.css";
import "../commun/commun.css";

export default function Informations(props) {

    const { profil } = props;

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();
    const [telephone, setTelephone] = useState();
    const [langue, setLangue] = useState();
    const [theme, setTheme] = useState();

    const [isTelephoneValide, setIsTelephoneValide] = useState(true);
    const [isFermerValide1, setIsFermerValide1] = useState(false);
    const [isFermerValide2, setIsFermerValide2] = useState(false);
    const [isFermerValide3, setIsFermerValide3] = useState(false);
    const [isFermerValide4, setIsFermerValide4] = useState(false);

    useEffect(() => {
        setNom(profil?.nom || "");
        setPrenom(profil?.prenom || "");
        setAdresse(profil?.adresse || "");
        setTelephone(profil?.telephone || "");
        setLangue(profil?.langue || "");
        setTheme(profil?.theme || "");
    }, [profil])

    const optionsLangue = [
        { key: 'FR', text: 'Français', value: 'FR' },
        { key: 'EN', text: 'Anglais', value: 'EN' },
        { key: 'ES', text: 'Espagnol', value: 'ES' },
    ]

    const optionsTheme = [
        { key: 'light', text: 'Follow the Light', value: 'default', label: { empty: true, circular: true } },
        { key: 'dark', text: 'Join the Dark Side', value: 'dark', label: { color: 'black', empty: true, circular: true } },
        { key: 'scarlet', text: 'Scarlet Red', value: 'scarlet', label: { color: 'red', empty: true, circular: true } },
        { key: 'knights', text: 'Golden Knights', value: 'golden-knight', label: { color: 'yellow', empty: true, circular: true } },
        { key: 'canadiens', text: 'Canadiens de Montréal', value: 'montreal-canadiens', label: { color: 'blue', empty: true, circular: true } },
        { key: 'pastel', text: 'Pastel', value: 'pastel', label: { color: 'pink', empty: true, circular: true } },
    ]

    const handlePatch = useCallback( async (profilMiseAJour) => {
        const {status, data} = await axios.patch("http://localhost:3000/api/profil", profilMiseAJour);

        if(status >= 200 && status < 300){
            window.location.href = 'http://localhost:3000/pages/profil';
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [profil]);

    const handleDelete = useCallback( async () => {
        const {status} = await axios.delete("http://localhost:3000/api/profil");

        if(status >= 200 && status < 300){
            handleDeconnecter();
        }else{
            // TODO : Quand c'est pas bon
        }

    }, [profil]);

    const handleDeconnecter = async () => {
        await fetch("/api/authentification/deconnecter", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            window.location.href = 'http://localhost:3000/';
        });
    }

    function validerFormulaire() {
        return isTelephoneValide;
    }

    function validerTelephone(valeur) {
        const telephoneValeur : String = valeur;
        const telephoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        setIsTelephoneValide(telephoneValeur.length == 0 || telephoneValeur.match(telephoneRegex)?.length > 0);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function onModifier() {
        const profilMiseAJour = {
            nom: nom,
            prenom: prenom,
            courriel: profil.courriel,
            est_actif: profil.est_actif,
            avatar: profil.avatar,
            adresse: adresse,
            telephone: telephone,
            langue: langue,
            theme: theme,
        }
        handlePatch(profilMiseAJour);
    }

    function onChecked1() {
        setIsFermerValide1(!isFermerValide1);
    }

    function onChecked2() {
        setIsFermerValide2(!isFermerValide2);
    }

    function onChecked3() {
        setIsFermerValide3(!isFermerValide3);
    }

    function onChecked4() {
        setIsFermerValide4(!isFermerValide4);
    }

    function onFermer() {
        handleDelete();
    }

    function onChangerTheme(valeur){
        setTheme(valeur);
    }

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Informations personnelles'
                    content='Vous pouvez changer vos informations ici!'
                    />
                    <Form className='attached fluid segment' onSubmit={handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input
                            fluid
                            label='Nom de famille'
                            placeholder='Nom de famille'
                            type='text'
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            />
                            <Form.Input
                            fluid
                            label='Prénom'
                            placeholder='Prénom'
                            type='text'
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Input
                            label='Adresse'
                            placeholder='Adresse'
                            type='text'
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                        />
                        <Form.Group>
                            <Form.Input
                                label='Téléphone'
                                placeholder='Téléphone'
                                type='text'
                                value={telephone}
                                width={3}
                                onChange={(e) => {
                                    setTelephone(e.target.value);
                                    validerTelephone(e.target.value);
                                }}
                                error={!isTelephoneValide}
                            />
                            <Form.Input
                                label='Courriel'
                                placeholder='Courriel'
                                type='text'
                                width={5}
                                value={profil.courriel}
                                disabled
                            />
                        </Form.Group>
                        <Divider></Divider>
                        <Form.Group>
                            <Form.Dropdown
                            fluid
                            label='Langue'
                            placeholder='Choisir une langue'
                            options={optionsLangue}
                            search
                            selection
                            width={4}
                            value={langue}
                            onChange={(e, {value}) => setLangue(value)}
                            />
                            <Form.Dropdown
                            fluid
                            label='Thème'
                            placeholder='Choisir un thème'
                            options={optionsTheme}
                            search
                            width={4}
                            selection
                            value={theme}
                            onChange={(e, {value}) => onChangerTheme(value)}
                            />
                        </Form.Group>
                        <Button color='blue' disabled={!validerFormulaire()} onClick={onModifier}>Modifier</Button>
                    </Form>
                    <Message attached='bottom' warning>
                        <strong>Voulez-vous fermer votre compte?</strong><br/><br/>
                        Nous conserverons vos informations pendant une période d'un an. Si vous changez d'avis, votre espace sera identique lorsque vous aurez quitter.<br/><br/>
                        Pour plus d'informations, vous pouvez consulter les <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Termes et Conditions</a>.<br/><br/>
                    <Form.Checkbox inline label="J'affirme la fermeture de mon compte." onClick={onChecked1} /><br/>
                    {isFermerValide1 && (
                        <>
                            <Form.Checkbox inline label="Woah woah minute là, t'es tu sur?" onClick={onChecked2} /><br/>
                        </>
                    )}
                    {isFermerValide2 && (
                        <>
                            <Form.Checkbox inline label="Ben non, tu me niaises là :O" onClick={onChecked3} /><br/>
                        </>
                    )}
                    {isFermerValide3 && (
                        <>
                            <Form.Checkbox inline label="Alright alright, j'ai compris :(" onClick={onChecked4} /><br/>
                        </>
                    )}
                    <Button color='red' disabled={!isFermerValide1 || !isFermerValide2 || !isFermerValide3 || !isFermerValide4} onClick={onFermer}>Fermer</Button>
                    </Message>
            </Container>
        </div>
    )
}
