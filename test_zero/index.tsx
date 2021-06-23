import * as React from "react";
import { Container, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/hello';
import logo from './Logo.png';

export default function App() {
  let [res, setRes] = React.useState(0);
  let [count, setCount] = React.useState(0);
  React.useEffect(async () => {
    setRes(await fetch("api/cal?a=4&b=2").then(resq => resq.json()));
  }, []);
  const increase = () => { setCount(count + 1) };

  const decrease = () => { setCount(count - 1) };

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
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Button>Login</Button>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main style={{ height: "90%" }}>
        {/* <Button onClick={increase}> + </Button>
        <h1>{count}</h1>
        <Button onClick={decrease}> - </Button>
        <h1>Hello World! {res.res}</h1>
        <Hello /> */}
        <h1 style={{ fontSize: 200, textAlign: "center", marginTop: 300 }}>Bienvenue</h1>
      </main>

    </>
  )
}
