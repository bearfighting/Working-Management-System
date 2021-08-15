import React from 'react';
import { Container } from 'react-bootstrap';

import Titre from './titre';
import OperationBar from './operationBar';
import Tableau from './tableauColonne';
import { useEffect, useState } from 'react';

interface Colonne {
  titre: string,
  nombre: number
}

const initColonnes = [
  { col_titre: "À faire", col_ordre: 1, gtt_id: 0 },
  { col_titre: "En cours", col_ordre: 2, gtt_id: 0 },
  { col_titre: "Terminé", col_ordre: 3, gtt_id: 0 },
]

export default function PageTache({ tacheId }) {
  const [titre, setTitre] = useState("");

  useEffect(() => {
    const fetchTache = async () => {
      const response = await fetch("/api/tache/" + tacheId).then(resp => resp.json());
      setTitre(response.gtt_titre);
    };
    fetchTache();
  }, []);

  const [colonneTache, setColonneTache] = useState(initColonnes);

  const handleJouterColonne = (col_titre) => {
    let colonne = {
      gtt_id: colonneTache?.[0].gtt_id === 0 ? tacheId : colonneTache?.[0].gtt_id,
      col_ordre: (colonneTache.length + 1),
      col_titre
    };
    fetch("/api/tache/colonne/ajout", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(colonne)
    }).then(res => {
      console.log("réussi à ajouter la colonne");
      setColonneTache([...colonneTache, colonne]);
    })
      .catch(err => alert("échec à ajouter la colonne"));
  }

  const handledeleteColonne = (col_titre) => {
    fetch("/api/tache/colonne/suppression", {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ col_titre })
    }).then(res => console.log("réussi à supprimer la colonne"))
      .catch(err => console.error("échec à supprimer la colonne", err));

    setColonneTache(colonneTache.filter(colonne => colonne.col_titre !== col_titre))
  }

  useEffect(() => {
    const fetchColonnes = async () => {
      const response = await fetch("/api/tache/colonne/" + tacheId).then(resp => resp.json());
      if (response.resultat.length > 0) {
        setColonneTache(response.resultat);
      }
    }
    fetchColonnes();
  }, []);

  return (
    <>
      <Container>
        <Titre description={titre} />
        <OperationBar handleJouterColonne={handleJouterColonne} />
        <hr></hr>
        <Tableau handledeleteColonne={handledeleteColonne} colonneTache={colonneTache} />
      </Container>
    </>
  )
}
