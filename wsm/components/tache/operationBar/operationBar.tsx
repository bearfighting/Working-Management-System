import React from 'react';
import { Row, Col, Navbar, Container, Button, Form, FormControl } from 'react-bootstrap';

import NouvelleColonne from './nouvelleColonne';
import SearchTache from './SearchTache';

export default function OperationBar() {
  return (
    <Row style={{ margin: "10px" }}>
      <Col>
        <Navbar>
          <Container>
            <NouvelleColonne />
            <Navbar.Toggle />
            <SearchTache />
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}
