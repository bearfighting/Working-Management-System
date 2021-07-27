import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { BsFillPersonFill, BsFillUnlockFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './commun/commun.css';

import {
    baniere,
} from "../static"

import user_avatar from "../static/user_avatar";

export default function Navi({ connecte = false }) {

    const [profil, setProfil] = useState({});

    useEffect(() => {
        const fetchProfil = async () => {
            const response = await axios.get("http://localhost:3000/api/profil");
            setProfil(response.data);
        };

        if(connecte){
            fetchProfil();
        }

    }, [connecte]);

    const handleDeconnecter = async () => {
        await fetch("/api/authentification/deconnecter", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            window.location.href = 'http://localhost:3000/';
        });
    }

    return (
        <Navbar style={{backgroundColor:"#646ECB", zIndex:"10"}} expand="lg">
            {<Navbar.Brand href="/"><img style={{ width: 200, boxShadow: "0px 0px 10px #555" }} src={baniere} alt="Logo" /></Navbar.Brand> }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {!connecte && (
                    <>
                        <Nav.Link href="/" style={{color:"white"}}>Tarifications</Nav.Link>
                        <Nav.Link href="/" style={{color:"white"}}>Équipe</Nav.Link>
                    </>
                )}
            </Nav>
            {connecte ?
                <>
                    <NavDropdown
                        id="dropdown-basic"
                        title={<Image src={user_avatar[profil.avatar]} className="avatar" />}
                        alignRight
                    >
                        <NavDropdown.Item href="/pages/profil"><BsFillPersonFill className="icon-espacement-avec-texte"/>Profil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleDeconnecter}><BsFillUnlockFill className="icon-espacement-avec-texte"/>Déconnexion</NavDropdown.Item>
                    </NavDropdown>
                </>
            :
            <>
                <Nav.Link href="/pages/inscription" className="btn button-navi">S'inscrire</Nav.Link>
                <Nav.Link href="/pages/login" className="btn button-navi">Connecter</Nav.Link>
            </>}
        </Navbar.Collapse>
        </Navbar>
    )
}
