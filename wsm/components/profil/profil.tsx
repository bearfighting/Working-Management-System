import React, { useEffect, useState } from "react";
import Informations from "./informations";
import Notifications from "./notifications";
import MotDePasse from "./motdepasse";
import Paiement from "./paiement";
import Abonnement from "./abonnement";
import Support from "./support";
import Questions from "./questions";
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";
import "./profil.css";
import "../commun/commun.css";

export default function Profil() {

    const [profil, setProfil] = useState({});
    const [activeItem, setActiveItem] = useState('informations');

    function handleItemClick (e, { name }) {
        console.log(name);
        setActiveItem(name);
    }

    useEffect(() => {
        const fetchProfil = async () => {
            const response = await axios.get("http://localhost:3000/api/profil");
            console.log("response.data", response.data);
            setProfil(response.data);
        };
        fetchProfil();

    }, []);

    return (
        <div className="profil-page rowC profil-top-spacing">
            <Menu vertical className="menu">
                <Menu.Item>
                    <Menu.Header>Général</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='informations'
                        active={activeItem === 'informations'}
                        onClick={handleItemClick}
                        >
                        Informations personnelles
                        </Menu.Item>
                        <Menu.Item
                        name='notifications'
                        active={activeItem === 'notifications'}
                        onClick={handleItemClick}
                        >
                        Notifications
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Gestion des Accès</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='mdp'
                        active={activeItem === 'mdp'}
                        onClick={handleItemClick}
                        >
                        Mot de passe
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Paiement & Abonnement</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='paiement'
                        active={activeItem === 'paiement'}
                        onClick={handleItemClick}
                        >
                        Informations de paiement
                        </Menu.Item>
                        <Menu.Item
                        name='abonnement'
                        active={activeItem === 'abonnement'}
                        onClick={handleItemClick}
                        >
                        Abonnement
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                        name='email'
                        active={activeItem === 'email'}
                        onClick={handleItemClick}
                        >
                        Courriel Support
                        </Menu.Item>

                        <Menu.Item
                        name='faq'
                        active={activeItem === 'faq'}
                        onClick={handleItemClick}
                        >
                        Questions
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
            {activeItem === "informations" &&
                <Informations profil={profil}/>
            }
            {activeItem === "notifications" &&
                <Notifications profil={profil}/>
            }
            {activeItem === "mdp" &&
                <MotDePasse profil={profil}/>
            }
            {activeItem === "paiement" &&
                <Paiement profil={profil}/>
            }
            {activeItem === "abonnement" &&
                <Abonnement profil={profil}/>
            }
            {activeItem === "email" &&
                <Support profil={profil}/>
            }
            {activeItem === "faq" &&
                <Questions profil={profil}/>
            }
        </div>
    )
}
