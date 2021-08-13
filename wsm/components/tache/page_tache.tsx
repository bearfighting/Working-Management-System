import React from 'react';
import { Container } from 'react-bootstrap';

import Titre from './titre';
import OperationBar from './operationBar';
import Tableau from './tableauColonne';
import { useEffect, useState } from 'react';

export default function PageTache({ tacheId }) {
  const [titre, setTitre] = useState("");
  const [colonneTache, setColonneTache] = useState([]);

  useEffect(() => {
    const fetchTache = async () => {
      const response = await fetch("/api/tache/" + tacheId).then(resp => resp.json());
      setTitre(response.gtt_titre);
    };
    fetchTache();
  }, []);

  useEffect(() => {
    const fetchColonnes = async () => {
      const response = await fetch("/api/tache/colonne/" + tacheId).then(resp => { return resp.json() });
      setColonneTache(response);
    }

    fetchColonnes();
  }, []);

  return (
    <>
      <Container>
        <Titre description={titre} />
        <OperationBar />
        <hr></hr>
        <Tableau colonnesRepo={colonneTache} />
      </Container>
    </>
  )
}
