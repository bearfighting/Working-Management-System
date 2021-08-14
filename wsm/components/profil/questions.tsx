import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Message, Search, Header, Grid, List, Input } from 'semantic-ui-react';
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
                <Form className='attached fluid segment'>
                <h4 className="center">Comment pouvons-nous vous aider?</h4>
                <Input
                    action='Chercher'
                    className="center widthLong"
                    placeholder="Saissisez des mots-clés pour trouver des réponses"
                />
                <Divider/>
                <h4 className="center">Questions fréquentes</h4>
                <div className="grid">
                    <Grid columns={3} divided className="grid-content">
                        <Grid.Row>
                            <Grid.Column>
                                <h5>Nouveau à l'application?</h5>
                                <List link>
                                    <List.Item as='a' style={{color:"#001100"}}>Commencez ici!</List.Item>
                                    <List.Item as='a'>Comment créer un outil</List.Item>
                                    <List.Item as='a'>Naviguer à travers les outils</List.Item>
                                    <List.Item as='a'> + Voir toutes les questions</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column>
                                <h5>Compte</h5>
                                <List link>
                                    <List.Item as='a'>Modifier ses informations personnelles</List.Item>
                                    <List.Item as='a'>Comment changer de thème</List.Item>
                                    <List.Item as='a'>Naviguer à travers les onglets du profil</List.Item>
                                    <List.Item as='a'> + Voir toutes les questions</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column>
                                <h5>Paiement</h5>
                                <List link>
                                    <List.Item as='a'>Frais et abonnements</List.Item>
                                    <List.Item as='a'>Comment ajouter un mode de paiement</List.Item>
                                    <List.Item as='a'>Comment changer de plan</List.Item>
                                    <List.Item as='a'> + Voir toutes les questions</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <h5>Outil Contact</h5>
                                <List link>
                                    <List.Item as='a'>Comment créer un contact</List.Item>
                                    <List.Item as='a'>Importer un fichier csv</List.Item>
                                    <List.Item as='a'>Modifier les information d'un contact</List.Item>
                                    <List.Item as='a'> + Voir toutes les questions</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column>
                                <h5>Outil Tâche</h5>
                                <List link>
                                    <List.Item as='a'>Comment créer une carte</List.Item>
                                    <List.Item as='a'>Comment créer une colonne</List.Item>
                                    <List.Item as='a'>Déplacer les cartes d'une colonne à l'autre</List.Item>
                                    <List.Item as='a'> + Voir toutes les questions</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column>
                                <h5>Outil Budget</h5>
                                <List link>
                                    <List.Item as='a'>Importer un fichier csv</List.Item>
                                    <List.Item as='a'>Affichier les informations nécéssaires</List.Item>
                                    <List.Item as='a'>Générer un rapport</List.Item>
                                    <List.Item as='a'> + Voir toutes les questions</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                </Form>
            </Container>
        </div>
    )
}
