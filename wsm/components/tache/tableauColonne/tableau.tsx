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

export default function Tableau({ handledeleteColonne, colonneTache }) {
  return (
    <Row id="liste-taches" style={tableStyle}>
      {colonneTache.map((colonne) => <Colonne handledeleteColonne={handledeleteColonne} colonne={colonne} />)}
    </Row>
  )
}
