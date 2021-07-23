import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi';
import AccueilPublic from './components/accueil_principal/accueil_public';
import Accueil from './components/accueil';
import SidebarMenu from "./components/navigation/side_bar_menu";

export default function App(props) {
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

      {!connecte && (
        <main style={{ height: "90%" }}>
          <AccueilPublic props={props} />
        </main>
      )}

      {connecte && (
        (
          <main style={{ height: "90%" }}>
            <div className="flex-container">
                <div className="flex-child side-nav-container">
                    <SidebarMenu />
                </div>
                <div className="flex-child">
                    <Accueil props/>
                </div>
            </div>
          </main>
        )
      )}
    </>
  )
}
