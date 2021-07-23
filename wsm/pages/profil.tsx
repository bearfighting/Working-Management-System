import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/commun/commun.css';
import Navi from '../components/navi';
import Profil from '../components/profil/profil';
import SidebarMenu from "../components/navigation/side_bar_menu";

export default function ProfilPage(props) {
    const [connecte, setConnecte] = useState(false);

    useEffect(() => {
        if (props?.user?.id) {
            setConnecte(true);
        } else {
            setConnecte(false);
        }
    }, [props]);

    return (
        <>
            <header>
                <Navi connecte={connecte} />
            </header>
            <main style={{ height: "90%" }}>
                <div className="flex-container">
                    <div className="flex-child side-nav-container">
                        <SidebarMenu />
                    </div>
                    <div className="flex-child">
                        <Profil />
                    </div>
                </div>
            </main>
        </>
    )
}
