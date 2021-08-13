import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import NouvelleColonneModal from './modal';

export default function NouvelleColonne() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }

    return (
        <>
            <Navbar.Brand ><Button variant="info" onClick={handleClick}>Nouvelle colonne</Button></Navbar.Brand>
            <NouvelleColonneModal show={show} setShow={setShow} />
        </>
    );
}
