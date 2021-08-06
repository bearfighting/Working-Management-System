import React, { useEffect, useState } from "react";
import { Button, Container, Message, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./profil.css";
import "../commun/commun.css";
import {
    basic,
    standard,
    premium
} from "../../static/";

export default function Abonnement(props) {

    const { profil } = props;

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Abonnement'
                    content='Choisissez votre plan'
                />
                <Message
                    info
                    header='Plan actuel'
                    content='Base'
                />
                <Card.Group centered>
                    <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='medium'
                            src={basic}
                            />
                            <Card.Header>Base</Card.Header>
                            <Card.Meta>Gratuit</Card.Meta>
                            <Card.Description>
                                <a>+ Voir les détails...</a>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button basic color='blue'>
                                Choisir
                            </Button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='medium'
                            src={standard}
                            />
                            <Card.Header>Standard</Card.Header>
                            <Card.Meta>10.99$</Card.Meta>
                            <Card.Description>
                                <a>+ Voir les détails...</a>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button basic>
                                Choisir
                            </Button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='medium'
                            src={premium}
                            />
                            <Card.Header>Premium</Card.Header>
                            <Card.Meta>23.99$</Card.Meta>
                            <Card.Description>
                                <a>+ Voir les détails...</a>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button  basic>
                                Choisir
                            </Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Container>
        </div>
    )
}
