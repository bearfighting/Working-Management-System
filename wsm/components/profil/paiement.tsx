import React, { useEffect, useState } from "react";
import { Button, Container, Form, Message, Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./profil.css";
import "../commun/commun.css";
import {
    credit_amex,
    credit_mastercard,
    credit_visa
} from "../../static/";

export default function Paiement(props) {

    const { profil } = props;

    const optionsCredit = [
        { key: 'a', text: 'Amex', value: 'a', image: {src: credit_amex } },
        { key: 'm', text: 'Mastercard', value: 'm', image: {src: credit_mastercard } },
        { key: 'v', text: 'Visa', value: 'v', image: {src: credit_visa } },
    ]

    return (
        <div className="profil-page">
            <Container>
                <Message
                    attached
                    header='Informations de paiement'
                    content='Choisissez votre méthode de paiement'
                />
                <Form className='attached fluid segment'>
                    <Form.Dropdown
                        fluid
                        label='Carte de crédit'
                        placeholder='Choisir une carte'
                        options={optionsCredit}
                        search
                        value={"m"}
                        selection
                        width={3}
                    />
                    <Form.Input
                        fluid
                        label='Numéro de carte'
                        placeholder='Numéro de carte'
                        type='text'
                        value="5235 7516 8495 1254"
                        width={6}
                    />
                    <Form.Group>
                        <Form.Input
                        fluid
                        label="Date d'expiration"
                        placeholder="MM/YY"
                        type='text'
                        value="08/25"
                        width={2}
                        />
                        <Popup
                            trigger={
                                <Form.Input
                                    fluid
                                    label="CSV"
                                    placeholder="CSV"
                                    type='text'
                                    value="789"
                                    width={2}
                                />
                            }
                            content='Ce numéro est affiché derrière votre carte'
                            on='focus'
                        />
                    </Form.Group>

                    <br/>
                    <Button color='blue'>Changer</Button>
                </Form>
            </Container>
        </div>
    )
}
