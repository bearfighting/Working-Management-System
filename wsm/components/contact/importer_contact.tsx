import React, { useState, useCallback } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDropzone } from 'react-dropzone'
import Select from 'react-select';
import "./contact.css";
import "./../commun/commun.css"

export default function ImporterContact(props) {
    const { contacts, tableaux, outilsId, onHide } = props;

    const [isFichierValid, setIsFichierValid] = useState(true);
    const [contactsAImporter, setContactsAImporter] = useState([{}]);
    const [tableauxChoisis, setTableauxChoisis] = useState([outilsId.toString()]);

    const onDrop = useCallback((acceptedFiles) => {
        let contactsAImporter = []

        acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const texte = reader.result.toString();
            const lignes = texte.split("\n");
            for(let i = 0; i < lignes.length; i++) {
                const ligne_epurer = epurer_ligne(lignes[i]);
                const data = ligne_epurer.split(",");

                if (i === 0) {
                    // Valider l'entête des colonnes
                    const estValide = validerColonnes(data)
                    setIsFichierValid(estValide);
                    if (!estValide) return;
                } else {
                    // Créer le body de la requête post
                    const contact = getContact(data);
                    contactsAImporter.push(contact);
                }
            }
        }
        reader.readAsText(file)
        })

        setContactsAImporter(contactsAImporter);
    }, [])

    function epurer_ligne(ligne) {
        for(let i = 0; i < ligne.length; i++) {
            if(ligne[i] === "\\" || ligne[i] === "\"" || ligne[i] === "\'") {
                ligne = ligne.replace(ligne[i], "");
            }
        }
        return ligne;
    }

    function validerColonnes(data) {
        const colonnes = {
            nom : data[1],
            prenom : data[2],
            courriel : data[3],
            adresse : data[4],
            telephone : data[5],
        };
        return(colonnes.nom === "nom" && colonnes.prenom === "prenom" && colonnes.courriel === "courriel" && colonnes.adresse === "adresse" && colonnes.telephone === "telephone");
    }

    function getContact(data) {
        const contact = {
            nom : data[1],
            prenom : data[2],
            courriel : data[3],
            adresse : data[4],
            telephone : data[5],
        };
        return contact;
    }

    const {acceptedFiles, fileRejections, getRootProps, getInputProps} = useDropzone({onDrop, accept: ".csv"});

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    const options = tableaux.map(tableau => (
        { value: tableau.id, label: tableau.titre }
    ));

    function onChange(values) {
        const tableauIds = []
        for(const value of values) {
            tableauIds.push(value.value.toString());
        }
        setTableauxChoisis(tableauIds);
    }

    function onImporter() {
        let nouveauxContact = []
        for(const contact of contactsAImporter) {
            for(const tableauId of tableauxChoisis) {
                const nouveauContact = {
                    nom: contact.nom,
                    prenom: contact.prenom,
                    courriel: contact.courriel,
                    adresse: contact.adresse,
                    telephone: contact.telephone,
                    id_tableau: tableauId
                }
                nouveauxContact.push(nouveauContact);
            }
        }
        handlePost(nouveauxContact);
    }

    const handlePost = useCallback( async (nouveauxContact) => {
        const {status, data} = await axios.post("http://localhost:3000/api/gestion-contact/contact", {contacts: nouveauxContact});

        if (status >= 200 && status < 300) {
            for(const contact of data) {
                if(contact.id_tableau == outilsId) {
                    contacts.push(contact);
                }
            }
            onHide();
        } else {
            // TODO : Quand c'est pas bon
        }

    }, [contacts, onHide]);

    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Importer des contacts (CSV)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className="container">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <p className="dragNdrop">Glissez un ou des fichiers</p>
                        </div>

                        <aside>
                            {isFichierValid && files.length > 0 &&
                            <div className="alert alert-success">
                                <h4>{files.length == 0 ? "" : files.length == 1 ? "Ficher accepté" : "Fichiers acceptés"}</h4>
                                <ul>{files}</ul>
                            </div>
                            }

                            {fileRejectionItems.length > 0 &&
                            <div className="alert alert-danger">
                                <h4>{fileRejectionItems.length == 0 ? "" : fileRejectionItems.length == 1 ? "Ficher refusé" : "Fichiers refusés"}</h4>
                                <ul>{fileRejectionItems}</ul>
                                <p>{fileRejectionItems.length > 1 ? "Les fichiers doivent" : "Le fichier doit"} être un CSV</p>
                            </div>
                            }

                            {!isFichierValid &&
                            <div className="alert alert-danger">
                                <p>{isFichierValid ? "" : "Le nom des colonnes doit avoir le format suivant: nom, prenom, courriel, adresse, telephone."}</p>
                            </div>
                            }

                        </aside>
                    </section>
                    <div>
                        <Select
                            isMulti
                            options={options}
                            onChange={onChange}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" disabled={!isFichierValid} onClick={onImporter}>Importer</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
