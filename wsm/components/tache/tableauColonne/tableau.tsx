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
  { titre: "À faire", nombre: 1 },
  { titre: "En cours", nombre: 2 },
  { titre: "Terminé", nombre: 3 },
]

export default function Tableau({ id }) {
  const [colonneTache, setColonneTache] = useState([]);

  useEffect(() => {
    const fetchColonnes = async () => {
      const response = await fetch("/api/tache/colonne/" + id).then(resp => resp.json());
      setColonneTache(response.resultat);
    }
    fetchColonnes();
  }, []);

  return (
    <Row id="liste-taches" style={tableStyle}>
      {colonneTache.map((colonne) => <Colonne colonne={colonne} />)}
    </Row>
  )
}
