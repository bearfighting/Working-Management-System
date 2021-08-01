import React from 'react';
import { Form, Container, Row, Col, ButtonGroup, Button, ButtonToolbar, Badge, Dropdown } from 'react-bootstrap';

import Entete from './enTete';
import OperationBar from './operationBar';
import ListTaches from './listeTaches';

export default function Tache() {
  return (
    <>
      <Container>
        <Entete description={"Liste des tâches"} />
        <OperationBar />
        <hr></hr>
        <ListTaches />
      </Container>
    </>
  )
}
