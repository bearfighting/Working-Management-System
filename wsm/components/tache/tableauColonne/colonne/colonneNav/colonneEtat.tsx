import { Col, Badge } from 'react-bootstrap';

export default function ColonneEtat({ colonne }) {
  console.log("colonne is ", colonne)
  return (
    <>
      <Col xs={3} style={{ padding: "1px" }}>
        <Badge bg="secondary">{colonne.col_titre}</Badge>
      </Col>
      <Col xs={3}>
        <Badge bg="secondary" style={{ padding: "1px" }}>{colonne.nombre}</Badge>
      </Col>
    </>
  )
}
