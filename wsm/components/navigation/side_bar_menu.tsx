import React, {useState, useEffect} from 'react';
import "../commun/commun.css";
import './side_bar_menu.css';
import axios from "axios";
import '../commun/animation.scss';

export default function SidebarMenu() {

    const [toggleNav, setToggleNav] = useState(false);

    const toggleNavigation = () => {
        setToggleNav(toggleNav ? false : true);
    }

    const [listeGestionContact, setListeGestionContact] = useState();
    const [listeGestionTache, setListeGestionTache] = useState();
    const [listeGestionBanque, setListeGestionBanque] = useState();

    useEffect(() => {
        const fetchOutils = async () => {
            const response = await axios.get("http://localhost:3000/api/outils");
            setListeGestionContact(response.data.gestion_contact);
            setListeGestionTache(response.data.gestion_tache);
            setListeGestionBanque(response.data.gestion_banque);
        };
        fetchOutils();
    }, []);

    return (
        <>

            <div className="toggleNav arrow-container" onClick={() => toggleNavigation()}>
                <div className="arrow">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                </div>
            </div>
            <div className={`cd-panel cd-panel--from-left js-cd-panel-main ${toggleNav ? "cd-panel--is-visible" : ""} `}>

                <div>
                    <div className="cd-panel__container flex-container">
                        <div className="cd-panel__content flex-child container-nav">

                        { listeGestionContact && listeGestionContact.length > 0 && (
                            <div className="header-side-nav"><h2>Gestion Contact</h2></div>
                        )}

                        {listeGestionContact && listeGestionContact.map((item, i) => (
                            <div key={i} className="container-outils">
                                <a href={`http://localhost:3000/pages/contact/${item.id}`}>
                                    <div>{item.titre ? item.titre : `Groupe # ${item.id}`}</div>
                                </a>
                            </div>
                        ))}

                        { listeGestionTache && listeGestionTache.length > 0 && (
                            <div className="header-side-nav"><h2>Gestion Tâche</h2></div>
                        )}

                        {listeGestionTache && listeGestionTache.map((item, i) => (
                            <div key={i} className="container-outils">
                                <a href={`http://localhost:3000/pages/tache/${item.id}`}>
                                    <div>{item.titre ? item.titre : `Liste de item : ${item.id}`}</div>
                                </a>
                            </div>
                        ))}

                        { listeGestionBanque && listeGestionBanque.length > 0 && (
                            <div className="header-side-nav"><h2>Gestion Budget</h2></div>
                        )}

                        {listeGestionBanque && listeGestionBanque.map((item, i) => (
                            <div key={i} className="container-outils">
                                <a href={`http://localhost:3000/pages/banque/${item.id}`}>
                                    <div>{item.titre ? item.titre : `Liste de item : ${item.id}`}</div>
                                </a>
                            </div>
                        ))}



                        </div>
                        <div className="cd-panel__content flex-child side-nav-container-absolute arrow-container" onClick={() => toggleNavigation()}>
                            <div className="arrow-left">
                                <div className="arrow-left-top"></div>
                                <div className="arrow-left-bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
