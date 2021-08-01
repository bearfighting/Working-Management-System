import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col, ButtonGroup, Button, ButtonToolbar, Badge, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const tableStyle = {
  // backgroundColor: "DodgerBlue",
  padding: "5px",
  fontFamily: "Arial",
  height: "100%",
  minHeight: "90vh"
}

const colStyle = {
  // padding: "2px",
  boxShadow: "10px 10px 5px #888888",
  borderRadius: "10px",
  margin: "10px",
  backgroundColor: "#D3D3D3",
  textAlign: 'center' as const
}

const boutonStyle = {
  justifyContent: "space-evenly"
}

export default function Tache() {
  return (
    <>
      <Container>
        <Row style={{ margin: "10px" }}>
          <Col>
            <ButtonToolbar style={boutonStyle}>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Middle</Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row id="tables" style={tableStyle}>
          <Col xs={2} style={colStyle}>
            <Container style={{ padding: "1px", margin: "1px" }}>
              <Row>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Badge bg="secondary">À faire</Badge>
                </Col>
                <Col xs={3}>
                  <Badge bg="secondary" style={{ padding: "1px" }}>{20}</Badge>
                </Col>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Dropdown style={{ height: "50%" }}>
                    <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
                      ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col style={{ padding: "1px" }}>
                  <Button size="sm" style={{ lineHeight: "0.8" }}>+</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2} style={colStyle}>
            <Container style={{ padding: "1px", margin: "1px" }}>
              <Row>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Badge bg="secondary">À faire</Badge>
                </Col>
                <Col xs={3}>
                  <Badge bg="secondary" style={{ padding: "1px" }}>{20}</Badge>
                </Col>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Dropdown style={{ height: "50%" }}>
                    <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
                      ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col style={{ padding: "1px" }}>
                  <Button size="sm" style={{ lineHeight: "0.8" }}>+</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2} style={colStyle}>
            <Container style={{ padding: "1px", margin: "1px" }}>
              <Row>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Badge bg="secondary">À faire</Badge>
                </Col>
                <Col xs={3}>
                  <Badge bg="secondary" style={{ padding: "1px" }}>{20}</Badge>
                </Col>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Dropdown style={{ height: "50%" }}>
                    <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
                      ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col style={{ padding: "1px" }}>
                  <Button size="sm" style={{ lineHeight: "0.8" }}>+</Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2} style={colStyle}>
            <Container style={{ padding: "1px", margin: "1px" }}>
              <Row>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Badge bg="secondary">À faire</Badge>
                </Col>
                <Col xs={3}>
                  <Badge bg="secondary" style={{ padding: "1px" }}>{20}</Badge>
                </Col>
                <Col xs={3} style={{ padding: "1px" }}>
                  <Dropdown style={{ height: "50%" }}>
                    <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
                      ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col style={{ padding: "1px" }}>
                  <Button size="sm" style={{ lineHeight: "0.8" }}>+</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}
