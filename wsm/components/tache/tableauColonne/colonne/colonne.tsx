import { Container, Col } from 'react-bootstrap';
import { useState } from 'react';

import ColonneNav from './colonneNav';
import ColonneListeTaches from './colonneListeTaches';
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

export default function Colonne({ colonne }) {
  const [show, setShow] = useState(false);

  return (
    <Col style={colStyle}>
      <Container style={{ padding: "1px", margin: "1px" }}>
        <ColonneNav colonne={colonne} setShow={setShow} />
        <ColonneListeTaches />
        <ColonneNouvelleTache setShow={setShow} />
        <TacheModal show={show} setShow={setShow} />
      </Container>
    </Col>
  )
}
