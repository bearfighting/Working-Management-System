import { Form, Row, Col } from 'react-bootstrap';

export default function ColonneListeTaches() {
  return (
    <Row>
      <Col style={{ margin: "5px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="password" placeholder="Password" style={{ border: "pink 1px", boxShadow: "0px 2px 1px #555555", backgroundColor: "#F5F5F5" }} />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}
