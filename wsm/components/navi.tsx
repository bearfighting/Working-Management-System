import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commun/commun';

import {
  baniere,
  user_icon
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

    const user = {
        id: "1",
        nom: "Mitesh",
        prenom: "Patel",
        courriel: "mitesh@patel.ca",
        icon: user_icon,
        url: "/pages/profil/1"
    };

    return (
        <Navbar style={{backgroundColor:"#646ECB"}} expand="lg">
            {<Navbar.Brand href="/"><img style={{ width: 200 }} src={baniere} alt="Logo" /></Navbar.Brand> }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            {connecte ?
                <>
                    <NavDropdown
                        id="dropdown-basic"
                        title={<Image src={user.icon} className="avatar-icon" />}
                    >
                        <NavDropdown.Item href={user.url} user={user}>Profil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleDeconnecter}>Déconnexion</NavDropdown.Item>
                    </NavDropdown>
                </>
                :
                <>
                    <Nav.Link style={{ marginRight: 10 }} href="/pages/inscription" className="btn btn-primary">Inscrire</Nav.Link>
                    <Nav.Link style={{ marginRight: 10 }} href="/pages/login" className="btn btn-primary">Connecter</Nav.Link>
                </>}
            </Navbar.Collapse>
        </Navbar>
    )
}
