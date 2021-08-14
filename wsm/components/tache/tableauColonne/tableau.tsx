import { Row } from 'react-bootstrap';
import Colonne from './colonne';

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

export default function Tableau({ colonnesRepo }) {
  const colonnes = colonnesRepo?.length > 0 ? colonnesRepo : initColonnes;

  return (
    <Row id="liste-taches" style={tableStyle}>
      {colonnes.map((colonne) => <Colonne colonne={colonne} />)}
    </Row>
  )
}
