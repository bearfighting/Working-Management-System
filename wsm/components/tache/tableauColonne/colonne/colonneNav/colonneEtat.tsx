import { Col, Badge } from 'react-bootstrap';

export default function ColonneEtat({ colonne }) {
  return (
    <>
      <Col xs={3} style={{ padding: "1px" }}>
        <Badge bg="secondary">{colonne.col_titre}</Badge>
      </Col>
    </>
  )
}
