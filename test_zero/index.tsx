import * as React from "react";
import { Container, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/hello';
import logo from './Logo.png';

export default function App() {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><img style={{ height: 50, width: 50 }} src={logo} alt="WSM" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#Tâche">Tâche</Nav.Link>
              <Nav.Link href="#Budget">Budget</Nav.Link>
            </Nav>
            <Button>Login</Button>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main style={{ height: "90%" }}>
        <h1 style={{ fontSize: 200, textAlign: "center", marginTop: 300 }}>Bienvenue</h1>
      </main>

    </>
  )
}
