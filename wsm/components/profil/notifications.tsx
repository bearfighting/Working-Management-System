import React, { useEffect, useState } from "react";
import { Container, Message, Segment, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';import "./profil.css";
import "./profil.css";
import "../commun/commun.css";

export default function Notifications(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Notifications'
                    content='Choisissez quand et comment être averti'
                    />
                <Segment>
                    <h4>Général</h4>
                    Gérer les notifications des outils dans la plateforme<br/><br/>
                    <ul>
                        <li className="list-decoration-none"><Checkbox toggle label="Notifie moi quand une alarme est expirée"/></li>
                        <li className="list-decoration-none"><Checkbox toggle label="Notifie moi quand il y a un changement à une carte "/></li>
                    </ul>
                </Segment>
                <Segment>
                    <h4>Notifications courriel</h4>
                    Présentement, tous vos notifications sont envoyés à {profil.courriel}.<br/><br/>
                    <ul>
                        <li className="list-decoration-none"><Checkbox toggle label="Notifie moi quand il y a des promotions"/></li>
                        <li className="list-decoration-none"><Checkbox toggle label="Notifie moi quand il y a une mise à jour à un outil"/></li>
                        <li className="list-decoration-none"><Checkbox toggle label="Notifie moi quand il y a une annonce générale de l'équipe WSM"/></li>
                    </ul>
                </Segment>
            </Container>
        </div>
    )
}
