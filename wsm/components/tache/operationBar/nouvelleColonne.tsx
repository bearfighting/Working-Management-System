import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import NouvelleColonneModal from './modal';

export default function NouvelleColonne({ handleAjouterColonne }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  }

  return (
    <>
      <Navbar.Brand ><Button variant="info" onClick={handleClick}>+ Ajouter une colonne</Button></Navbar.Brand>
      <NouvelleColonneModal handleAjouterColonne={handleAjouterColonne} show={show} setShow={setShow} />
    </>
  );
}
