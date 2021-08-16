import { Row, Col, Button, Badge } from 'react-bootstrap';

import CarteMultipleAction from './carteMultipleAction';

export default function Carte({ crt_titre, handledeleteCarte }) {
  return (
    <Row style={{ margin: "1rem 0px", fontSize: "1rem", border: "solid pink 1px", borderRadius: "10px", backgroundColor: "#FFFFFF", fontColor: "#000000" }}>
      <Col xs={7}>
        <Badge bg="secondary" style={{ margin: "10% 0" }}>{crt_titre}</Badge>
      </Col>
      <Col xs={5}>
        <CarteMultipleAction crt_titre={crt_titre} handledeleteCarte={handledeleteCarte} />
      </Col>
    </Row>
  )
}
