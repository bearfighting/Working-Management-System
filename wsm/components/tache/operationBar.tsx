import React from 'react';
import { Row, Col, Navbar, Container, Button, Form, FormControl } from 'react-bootstrap';

export default function OperationBar() {
  return (
    <Row style={{ margin: "10px" }}>
      <Col>
        <Navbar>
          <Container>
            <Navbar.Brand ><Button variant="info">Nouvelle</Button></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}
