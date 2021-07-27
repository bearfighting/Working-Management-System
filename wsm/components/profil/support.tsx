import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./profil.css";
import "../commun/commun.css";

export default function Support(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Support'
                    content='Contactez les développeurs ici!'
                    />
                <Form className='attached fluid segment'>
                    <Form.Group widths='equal'>
                        <Form.Input
                        fluid
                        label='Nom de famille'
                        placeholder='Nom de famille'
                        type='text'
                        value={profil.nom}
                        disabled
                        />
                        <Form.Input
                        fluid
                        label='Prénom'
                        placeholder='Prénom'
                        type='text'
                        value={profil.prenom}
                        disabled
                        />
                    </Form.Group>
                    <Form.Input
                        label='Courriel'
                        placeholder='Courriel'
                        type='text'
                        value={profil.courriel}
                        disabled
                    />
                    <Form.TextArea
                        label='Commentaires'
                        placeholder='Écrivez nous une question ou un commentaire'
                    />
                    <Button color='blue'>Soummetre</Button>
                </Form>
            </Container>
        </div>
    )
}
