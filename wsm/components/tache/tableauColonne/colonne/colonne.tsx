import { Container, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import ColonneNav from './colonneNav';
import ColonneListeCarte from './colonneListeCarte';
import ColonneNouvelleTache from './colonneNouvelleTache';
import TacheModal from '../tacheModal';

const colStyle = {
  minWidth: "220px",
  boxShadow: "10px 10px 5px #888888",
  borderRadius: "10px",
  margin: "2px",
  backgroundColor: "#FFF0F5",
  border: "0.2px #947783 solid",
  textAlign: 'center' as const
}

export default function Colonne({ handledeleteColonne, colonne }) {
  const [show, setShow] = useState(false);
  const [nouvelleCarte, setNouvelleCarte] = useState({ crt_titre: "", crt_description: "", col_id: colonne.col_id, gtt_id: colonne.gtt_id });

  useEffect(() => {
    setNouvelleCarte({ ...nouvelleCarte, col_id: colonne.col_id, gtt_id: colonne.gtt_id })
  }, [colonne])

  const handleAjouterCarte = ({ crt_titre, crt_description }) => {
    setNouvelleCarte({ ...nouvelleCarte, crt_titre, crt_description });
  }

  return (
    <Col style={colStyle}>
      <Container style={{ padding: "1px", margin: "1px" }}>
        <ColonneNav handledeleteColonne={handledeleteColonne} colonne={colonne} setShow={setShow} />
        <ColonneListeCarte nouvelleCarte={nouvelleCarte} col_id={colonne.col_id} />
        <ColonneNouvelleTache setShow={setShow} />
        <TacheModal handleAjouterCarte={handleAjouterCarte} show={show} setShow={setShow} />
      </Container>
    </Col>
  )
}
