import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  baniere, 
} from "../static"

import Login from './login';

export default function Navi({ connecte }) {
  const handleDeconnecter = async () => {
    await fetch("/api/authentification/deconnecter", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      window.location.href = 'http://localhost:3000/';
    });
  }

  return (
    <Navbar style={{backgroundColor:"#646ECB"}} expand="lg">
      {<Navbar.Brand href={`${connecte ? "/pages/accueil" : "/"}`}><img style={{ width: 200 }} src={baniere} alt="Logo" /></Navbar.Brand> }
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        {connecte ?
          <Button onClick={handleDeconnecter}>Déconnecter</Button>
          :
          <>
            <Nav.Link style={{ marginRight: 10 }} href="/pages/inscription" className="btn btn-primary">Inscrire</Nav.Link>
            <Nav.Link style={{ marginRight: 10 }} href="/pages/login" className="btn btn-primary">Connecter</Nav.Link>
          </>}
      </Navbar.Collapse>
    </Navbar>
  )
}
