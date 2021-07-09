import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useDropzone} from 'react-dropzone'
import "./contact.css";
import "./../commun/commun.css"

export default function ImporterContact(props) {
    const { onHide } = props;

    const {acceptedFiles, fileRejections, getRootProps, getInputProps} = useDropzone({accept: ".csv"});

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
                            {files.length > 0 &&
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
                            
                        </aside>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Importer</Button>
                    <Button variant="outline-primary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
