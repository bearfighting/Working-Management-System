import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../../../components/navi';
import Contact from '../../../components/contact/contact';
import SidebarMenu from "../../../components/navigation/side_bar_menu";

export default function ContactPage(props) {

    const outilsId = props?.url?.params?.id;
    const userId = props?.user?.id;

    const [connecte, setConnecte] = useState(false);

    useEffect(() => {
        if (userId) {
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
                        <Contact outilsId={outilsId}/>
                    </div>
                </div>
            </main>
        </>
    )
}
