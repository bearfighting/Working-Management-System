import { Row, Col, Button } from 'react-bootstrap';

export default function Carte({ nom }) {
  return (
    <Row style={{ margin: "1rem 0px", fontSize: "1rem", border: "solid pink 1px", borderRadius: "10px", backgroundColor: "#FFFFFF" }}>
      <Col xs={7}>
        <p style={{ "textAlign": "left", margin: "10%" }}>{nom}</p>
      </Col>
      <Col xs={5}>
        <Button variant="outline-secondary" size="sm" style={{ margin: "10%" }}>Détail</Button>
      </Col>
    </Row>
  )
}
