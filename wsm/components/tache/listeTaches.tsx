import { Row } from 'react-bootstrap';
import Tache from './tache';

const tableStyle = {
  padding: "5px",
  fontFamily: "Arial",
  height: "100%",
  minHeight: "90vh"
}

interface Etat {
  phase: string,
  nombre: number
}

const initEtats = [
  { phase: "À faire", nombre: 1 },
  { phase: "En cours", nombre: 2 },
  { phase: "Terminé", nombre: 3 },
  { phase: "Cachés", nombre: 4 },
]

export default function ListTaches() {
  const Etats = [...initEtats];

  return (
    <Row id="liste-taches" style={tableStyle}>
      {Etats.map((etat) => <Tache etat={etat} />)}
    </Row>
  )
}
