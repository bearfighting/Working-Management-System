import React from 'react';
import { Row, Col, Navbar, Container } from 'react-bootstrap';

import NouvelleColonne from './nouvelleColonne';
import SearchTache from './SearchTache';

export default function OperationBar({ handleJouterColonne }) {
  return (
    <Row style={{ margin: "10px" }}>
      <Col>
        <Navbar>
          <Container>
            <NouvelleColonne handleJouterColonne={handleJouterColonne} />
            <Navbar.Toggle />
            <SearchTache />
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}
