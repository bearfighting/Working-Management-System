import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./profil.css";
import "../commun/commun.css";

export default function Questions(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Questions'
                    content='Vous allez trouver les questions fréquentes ici!'
                    />

            </Container>
        </div>
    )
}
