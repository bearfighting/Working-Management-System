import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';import "./profil.css";
import "../commun/commun.css";

export default function MotDePasse(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Changement de mot de passe'
                    content='Vous pouvez changer votre mot de passe ici!'
                    />
                    <Form className='attached fluid segment'>
                        <Form.Input
                        fluid
                        label='Courriel'
                        placeholder='Courriel'
                        type='text'
                        value={profil.courriel}
                        disabled
                        width={5}
                        />
                        <Form.Input
                        fluid
                        label='Mot de passe'
                        placeholder='Mot de passe'
                        type='text'
                        value="**********************"
                        disabled
                        width={5}
                        />
                        <Divider></Divider>
                        <Form.Group>
                            <Form.Input
                                label='Nouveau mot de passe'
                                placeholder='Nouveau mot de passe'
                                type='text'
                                width={5}
                            />
                            <Form.Input
                                label='Confirmer mot de passe'
                                placeholder='Confirmer mot de passe'
                                type='text'
                                width={5}
                            />
                        </Form.Group>
                        <br/>
                        <Button color='blue'>Changer</Button>
                    </Form>
            </Container>
        </div>
    )
}
