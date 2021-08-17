import { Row, Col, Button, Badge } from 'react-bootstrap';

import CarteMultipleAction from './carteMultipleAction';

export default function Carte({ crt_titre, handledeleteCarte }) {
  return (
    <Row style={{ marginTop: "15px", fontSize: "1rem", borderBottom: "solid #a9a9a9 1px", borderRadius: "5px", backgroundColor: "#FFFFFF", fontColor: "#000000" }}>
      <Col xs={7}>
        <Badge bg="secondary" style={{ margin: "10% 0" }}>{crt_titre}</Badge>
      </Col>
      <Col xs={5} >
          <div style={{ marginTop: "8px", marginLeft: "50px"}}>
            <CarteMultipleAction crt_titre={crt_titre} handledeleteCarte={handledeleteCarte} />
          </div>
      </Col>
    </Row>
  )
}
