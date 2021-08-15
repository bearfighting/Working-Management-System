import { Row } from 'react-bootstrap';
import Colonne from './colonne';
import { useEffect, useState } from 'react';

const tableStyle = {
  padding: "5px",
  fontFamily: "Arial",
  height: "100%",
  minHeight: "90vh"
}

interface Colonne {
  titre: string,
  nombre: number
}

const initColonnes = [
  { col_titre: "À faire", nombre: 0 },
  { col_titre: "En cours", nombre: 0 },
  { col_titre: "Terminé", nombre: 0 },
]

export default function Tableau({ id }) {
  const [colonneTache, setColonneTache] = useState(initColonnes);

  useEffect(() => {
    const fetchColonnes = async () => {
      const response = await fetch("/api/tache/colonne/" + id).then(resp => resp.json());
      if (response.resultat.length > 0) {
        setColonneTache(response.resultat);
      }
    }
    fetchColonnes();
  }, []);

  return (
    <Row id="liste-taches" style={tableStyle}>
      {colonneTache.map((colonne) => <Colonne colonne={colonne} />)}
    </Row>
  )
}
