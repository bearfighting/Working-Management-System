import { Row, Col, Button } from 'react-bootstrap';

export default function ColonneNouvelleTache({ setShow }) {

  const handleOnClick = () => {
    setShow(true);
  }

  return (
    <Row>
      <Col style={{ padding: "1px" }}>
        <Button size="sm" style={{ lineHeight: "0.8" }} onClick={handleOnClick}>+ Nouvelle</Button>
      </Col>
    </Row>
  )
}
