import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commun/commun.css';

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
      {<Navbar.Brand href={`${connecte ? "/pages/accueil" : "/"}`}><img style={{ width: 200, boxShadow: "0px 0px 10px #555" }} src={baniere} alt="Logo" /></Navbar.Brand> }
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        {connecte ?
          <Button className="btn button-navi" onClick={handleDeconnecter}>Déconnecter</Button>
          :
          <>
            <Nav.Link href="/pages/inscription" className="btn button-navi">S'inscrire</Nav.Link>
            <Nav.Link href="/pages/login" className="btn button-navi">Connecter</Nav.Link>
          </>}
      </Navbar.Collapse>
    </Navbar>
  )
}
