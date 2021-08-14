import React from 'react';
import { Container } from 'react-bootstrap';

import Titre from './titre';
import OperationBar from './operationBar';
import Tableau from './tableauColonne';
import { useEffect, useState } from 'react';

export default function PageTache({ tacheId }) {
  const [titre, setTitre] = useState("");

  useEffect(() => {
    const fetchTache = async () => {
      const response = await fetch("/api/tache/" + tacheId).then(resp => resp.json());
      setTitre(response.gtt_titre);
    };
    fetchTache();
  }, []);

  return (
    <>
      <Container>
        <Titre description={titre} />
        <OperationBar />
        <hr></hr>
        <Tableau id={tacheId} />
      </Container>
    </>
  )
}
