import { Row, Col, Button, Badge } from 'react-bootstrap';

export default function Carte({ nom }) {
  return (
    <Row style={{ margin: "1rem 0px", fontSize: "1rem", border: "solid pink 1px", borderRadius: "10px", backgroundColor: "#FFFFFF", fontColor: "#000000" }}>
      <Col xs={7}>
        <Badge bg="secondary" style={{ margin: "10% 0" }}>{nom}</Badge>
      </Col>
      <Col xs={5}>
        <Button variant="outline-secondary" size="sm" style={{ margin: "10%" }}>Détail</Button>
      </Col>
    </Row>
  )
}
